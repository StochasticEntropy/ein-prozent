// net/room.js – Räume für Mehrspieler im Browser, ohne eigenen Server (WebRTC über PeerJS).
//
//   const room = await createRoom({ name: 'Lena' });          // Gastgeber = Autorität
//   room.on('peer-join', ({ peer }) => …); room.setState({ phase: 'lobby' });
//   const me = await joinRoom('K7QM', { name: 'Omar' });     // Gast
//   me.on('state', ({ state }) => render(state)); me.send({ type: 'move', x, y });
//
// Bausteine: Raumcode (4 Zeichen) + QR-Code, stabile Spieler-Identität per localStorage-Token,
// Herzschlag + Latenzmessung, automatisches Wiederverbinden, Zustands-Abgleich (Snapshot + Deltas als
// JSON-Merge-Patch, gebündelt auf tickHz). Keine Oberfläche – die baut das Spiel selbst.
// Bibliotheken liegen fest gepinnt unter ./vendor/ (keine CDN-Abhängigkeit zur Laufzeit). Für die
// Vermittlung (Signalisierung) wird der öffentliche PeerJS-Server genutzt – das braucht Internet.

const VENDOR = {
  peer: new URL('./vendor/peerjs-1.5.4.min.js', import.meta.url).href,
  qr: new URL('./vendor/qrcode-generator-1.4.4.min.js', import.meta.url).href,
};

export const DEFAULTS = {
  prefix: 'raetselwelten-v1-',     // Namensraum der Peer-IDs am Vermittlungsserver
  codeLength: 4,
  maxPeers: 8,
  heartbeatMs: 2000,               // Ping-Takt (beide Richtungen) – liefert auch die Latenz
  lostAfterMs: 8000,               // ohne Lebenszeichen gilt die Verbindung als abgerissen
  retryForMs: 60000,               // so lange versucht ein Gast, sich wieder zu verbinden
  connectTimeoutMs: 12000,
  tickHz: 15,                      // Deltas werden höchstens so oft pro Sekunde verschickt
  snapshotEveryMs: 10000,          // zur Sicherheit regelmäßig ein voller Snapshot
  queueLimit: 50,                  // Gast: Nachrichten, die während eines Abbruchs gepuffert werden
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }, { urls: 'stun:stun1.l.google.com:19302' }],
  peerOptions: {},                 // z. B. eigener PeerJS-Server oder TURN in config.iceServers
  storage: null,                   // Standard: localStorage (Fallback: Speicher)
};
const CODE_CHARS = 'ACDEFHJKLMNPRTUVWXY3479'; // ohne leicht verwechselbare Zeichen

// ---------------------------------------------------------------------------
// Hilfen

const isObj = v => v !== null && typeof v === 'object' && !Array.isArray(v);
const now = () => Date.now();
const randomId = n => Array.from(crypto.getRandomValues(new Uint8Array(n)), b => (b % 36).toString(36)).join('');
export const normalizeCode = s => String(s || '').toUpperCase().replace(/[^A-Z0-9]/g, '');

// JSON-Merge-Patch (RFC 7386): Objekte werden zusammengeführt, null löscht, alles andere ersetzt.
export function applyPatch(target, patch) {
  if (!isObj(patch)) return patch;
  const out = isObj(target) ? target : {};
  for (const [k, v] of Object.entries(patch)) {
    if (v === null) delete out[k];
    else out[k] = isObj(v) ? applyPatch(isObj(out[k]) ? out[k] : {}, v) : v;
  }
  return out;
}
// Zwei Patches zu einem zusammenfassen. Liefert null, wenn das nicht verlustfrei geht
// (erst löschen, dann ein Objekt setzen) – dann wird vorher gesendet.
function combinePatch(a, b) {
  const out = structuredClone(a);
  for (const [k, v] of Object.entries(b)) {
    if (isObj(v) && out[k] === null) return null;
    if (isObj(v) && isObj(out[k])) { const c = combinePatch(out[k], v); if (c === null) return null; out[k] = c; }
    else out[k] = isObj(v) ? structuredClone(v) : v;
  }
  return out;
}

class Emitter {
  constructor() { this._h = new Map(); }
  on(evt, fn) { if (!this._h.has(evt)) this._h.set(evt, new Set()); this._h.get(evt).add(fn); return () => this._h.get(evt)?.delete(fn); }
  once(evt, fn) { const off = this.on(evt, d => { off(); fn(d); }); return off; }
  _emit(evt, data) { for (const fn of [...(this._h.get(evt) || [])]) { try { fn(data); } catch (e) { console.error(`[room] Fehler im ${evt}-Handler`, e); } } }
}

function memoryStorage() { const m = new Map(); return { getItem: k => m.get(k) ?? null, setItem: (k, v) => m.set(k, String(v)), removeItem: k => m.delete(k) }; }
function pickStorage(s) { if (s) return s; try { localStorage.setItem('__room_t', '1'); localStorage.removeItem('__room_t'); return localStorage; } catch { return memoryStorage(); } }

const loaded = new Map();
function loadScript(url) {
  if (!loaded.has(url)) {
    loaded.set(url, new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = url; s.async = true;
      s.onload = res; s.onerror = () => { loaded.delete(url); rej(roomError('lib-missing')); };
      document.head.appendChild(s);
    }));
  }
  return loaded.get(url);
}
async function loadVendor() {
  if (typeof RTCPeerConnection === 'undefined') throw roomError('browser-unsupported');
  await Promise.all([window.Peer ? null : loadScript(VENDOR.peer), window.qrcode ? null : loadScript(VENDOR.qr)]);
}

// Verständliche Fehlermeldungen (Deutsch) – `code` ist für Programmlogik, `message` für Menschen.
const MESSAGES = {
  'offline': 'Keine Internetverbindung. Für Mehrspieler müssen alle Geräte online sein.',
  'room-not-found': 'Diesen Raum gibt es nicht (mehr). Bitte den Code prüfen.',
  'server-unreachable': 'Der Vermittlungsserver ist gerade nicht erreichbar. Bitte gleich noch einmal versuchen.',
  'no-direct-connection': 'Keine Direktverbindung möglich. Manche Netze (Firmen-, Schul- oder Gäste-WLAN, einige Mobilfunknetze) blockieren Verbindungen zwischen Geräten – ein anderes WLAN oder ein Handy-Hotspot hilft meist.',
  'room-full': 'Der Raum ist voll.',
  'room-locked': 'Das Spiel läuft schon – neue Spieler können gerade nicht beitreten.',
  'kicked': 'Du wurdest aus dem Raum entfernt.',
  'browser-unsupported': 'Dieser Browser unterstützt keine Direktverbindungen. Bitte Safari, Chrome oder Firefox in aktueller Version nutzen.',
  'lib-missing': 'Die Verbindungsbibliothek konnte nicht geladen werden.',
  'unknown': 'Unbekannter Verbindungsfehler.',
};
function roomError(code, cause) {
  const e = new Error(MESSAGES[code] || MESSAGES.unknown);
  e.code = code; if (cause) e.cause = cause;
  return e;
}
function fromPeerError(e) {
  const t = e?.type;
  if (!navigator.onLine) return roomError('offline', e);
  if (t === 'peer-unavailable') return roomError('room-not-found', e);
  if (t === 'network' || t === 'server-error' || t === 'socket-error' || t === 'socket-closed') return roomError('server-unreachable', e);
  if (t === 'webrtc' || t === 'negotiation-failed' || t === 'timeout') return roomError('no-direct-connection', e);
  if (t === 'browser-incompatible') return roomError('browser-unsupported', e);
  return e?.code && MESSAGES[e.code] ? e : roomError('unknown', e);
}

function openPeer(id, o) {
  return new Promise((res, rej) => {
    const opts = { debug: 0, ...o.peerOptions, config: { iceServers: o.iceServers, ...(o.peerOptions.config || {}) } };
    const p = id ? new window.Peer(id, opts) : new window.Peer(opts);
    let done = false;
    const t = setTimeout(() => { if (done) return; done = true; try { p.destroy(); } catch { /* egal */ } rej(roomError('server-unreachable')); }, o.connectTimeoutMs);
    p.on('open', () => { if (done) return; done = true; clearTimeout(t); res(p); });
    p.on('error', e => { if (done) return; done = true; clearTimeout(t); try { p.destroy(); } catch { /* egal */ } rej(e); });
  });
}
// Senden nur, wenn Kanal UND darunterliegende Peer-Verbindung leben – sonst meldet WebKit Sendefehler.
const DEAD = new Set(['closed', 'failed', 'disconnected']);
const channelOpen = c => !!c && c.open && (!c.dataChannel || c.dataChannel.readyState === 'open')
  && !DEAD.has(c.peerConnection?.connectionState) && !DEAD.has(c.peerConnection?.iceConnectionState);
function safeSend(c, msg) { if (!channelOpen(c)) return false; try { c.send(msg); return true; } catch { return false; } }
// WebKit meldet Sendefehler auf einem gerade schließenden Kanal als Fehler-Ereignis – abfangen.
function guardChannel(c, onLost) {
  const attach = () => { if (c.dataChannel && !c.dataChannel.__guard) { c.dataChannel.__guard = true; c.dataChannel.addEventListener('error', ev => { ev.preventDefault?.(); onLost(); }); } };
  attach(); c.on('open', attach);
}
function qrFor(text) {
  try { const q = window.qrcode(0, 'M'); q.addData(text); q.make(); return { dataUrl: q.createDataURL(8, 2), svg: q.createSvgTag({ cellSize: 6, margin: 2, scalable: true }) }; }
  catch { return { dataUrl: null, svg: null }; }
}

// ---------------------------------------------------------------------------
// Gastgeber

/**
 * Erstellt einen Raum. Das erstellende Gerät ist die Autorität über den Spielzustand.
 * @returns {Promise<Room>}
 */
export async function createRoom(options = {}) {
  const o = { ...DEFAULTS, ...options, peerOptions: { ...DEFAULTS.peerOptions, ...(options.peerOptions || {}) } };
  if (!navigator.onLine) throw roomError('offline');
  await loadVendor();
  let peer = null, code = null, lastErr = null;
  for (let k = 0; k < 6 && !peer; k++) {
    code = Array.from(crypto.getRandomValues(new Uint8Array(o.codeLength)), b => CODE_CHARS[b % CODE_CHARS.length]).join('');
    try { peer = await openPeer(o.prefix + code, o); } catch (e) { lastErr = e; if (e?.type !== 'unavailable-id') throw fromPeerError(e); }
  }
  if (!peer) throw fromPeerError(lastErr);
  return new Room(o, peer, code);
}

class Room extends Emitter {
  constructor(o, peer, code) {
    super();
    this.o = o; this._peer = peer;
    this.code = code;
    this.name = o.name || 'Gastgeber';
    this.joinUrl = o.joinUrl ? o.joinUrl(code) : `${location.origin}${location.pathname}?join=${code}`;
    const qr = qrFor(this.joinUrl);
    this.qrDataUrl = qr.dataUrl; this.qrSvg = qr.svg;
    this.state = {}; this.version = 0;
    this.locked = false; this.closed = false;
    this._peers = new Map();       // id → { id, name, meta, token, conn, connected, lastSeen, rtt }
    this._byToken = new Map();
    this._pending = null; this._flushTimer = null;
    peer.on('connection', c => this._onConnection(c));
    peer.on('disconnected', () => { if (!this.closed && !peer.destroyed) try { peer.reconnect(); } catch { /* egal */ } });
    peer.on('error', e => { if (!this.closed) this._emit('error', { error: fromPeerError(e) }); });
    this._hb = setInterval(() => this._heartbeat(), o.heartbeatMs);
    this._snap = setInterval(() => this._broadcastRaw({ t: 'snap', v: this.version, state: this.state }), o.snapshotEveryMs);
    this._onHide = () => this.close();
    addEventListener('pagehide', this._onHide);
  }

  /** Öffentliche Sicht auf alle Mitspieler (ohne Gastgeber). */
  peers() { return [...this._peers.values()].map(p => ({ id: p.id, name: p.name, meta: p.meta, connected: p.connected, rtt: p.rtt })); }
  /** Neue Spieler abweisen (bekannte Spieler dürfen weiter wiederverbinden). */
  lock(v = true) { this.locked = v; }
  /** Nachricht an alle verbundenen Gäste. */
  broadcast(msg, { except } = {}) { for (const p of this._peers.values()) if (p.id !== except) this._send(p, { t: 'msg', msg }); }
  /** Nachricht an einen Gast – z. B. verdeckte Information, die nicht in den Zustand gehört. */
  sendTo(id, msg) { const p = this._peers.get(id); return p ? this._send(p, { t: 'msg', msg }) : false; }
  /** Gast entfernen. */
  kick(id) { const p = this._peers.get(id); if (!p) return; this._send(p, { t: 'kicked' }); this._drop(p, 'kicked', true); }

  /**
   * Zustand ändern (JSON-Merge-Patch). Änderungen werden gesammelt und höchstens tickHz-mal pro Sekunde
   * als Delta verschickt; `{ immediate: true }` sendet sofort (z. B. Phasenwechsel).
   * Achtung: Der Zustand ist für alle sichtbar – Geheimnisse (Lösungen, Antworten) erst bei der Auflösung hineinlegen.
   */
  setState(patch, { immediate = false } = {}) {
    if (this.closed || !isObj(patch)) return;
    applyPatch(this.state, structuredClone(patch));
    if (this._pending) {
      const c = combinePatch(this._pending, patch);
      if (c === null) { this._flush(); this._pending = structuredClone(patch); } else this._pending = c;
    } else this._pending = structuredClone(patch);
    if (immediate) this._flush();
    else if (!this._flushTimer) this._flushTimer = setTimeout(() => this._flush(), 1000 / this.o.tickHz);
  }
  _flush() {
    clearTimeout(this._flushTimer); this._flushTimer = null;
    if (!this._pending) return;
    const patch = this._pending; this._pending = null;
    this.version++;
    this._broadcastRaw({ t: 'delta', v: this.version, patch });
    this._emit('state', { state: this.state, patch, version: this.version });
  }

  /** Raum schließen – alle Gäste bekommen das Ereignis host-lost mit reason 'closed'. */
  close() {
    if (this.closed) return;
    this._broadcastRaw({ t: 'closed' });
    this.closed = true;
    clearInterval(this._hb); clearInterval(this._snap); clearTimeout(this._flushTimer);
    removeEventListener('pagehide', this._onHide);
    const peer = this._peer;
    setTimeout(() => { try { peer.destroy(); } catch { /* egal */ } }, 300);
    this._emit('closed', {});
  }

  // --- intern ---
  _send(p, msg) { return !this.closed && p.connected && safeSend(p.conn, msg); }
  _broadcastRaw(msg) { if (this.closed && msg.t !== 'closed') return; for (const p of this._peers.values()) if (p.connected) safeSend(p.conn, msg); }

  _onConnection(c) {
    guardChannel(c, () => this._connLost(c));
    c.on('data', d => this._onData(c, d));
    c.on('close', () => this._connLost(c));
    c.on('error', () => this._connLost(c));
  }
  _connLost(c) {
    const p = [...this._peers.values()].find(x => x.conn === c);
    if (p && p.connected) this._drop(p, 'lost');
  }
  _drop(p, reason, forget = false) {
    if (this.closed) return;
    const was = p.connected;
    p.connected = false;
    if (forget) { this._peers.delete(p.id); this._byToken.delete(p.token); try { p.conn?.close(); } catch { /* egal */ } }
    if (was || forget) this._emit('peer-leave', { peer: this._pub(p), reason });
  }
  _pub(p) { return { id: p.id, name: p.name, meta: p.meta, connected: p.connected, rtt: p.rtt }; }

  _onData(c, m) {
    if (!m || typeof m !== 'object' || this.closed) return;
    let p = [...this._peers.values()].find(x => x.conn === c);
    if (p) p.lastSeen = now();
    switch (m.t) {
      case 'hello': return this._hello(c, m);
      case 'ping': safeSend(c, { t: 'pong', ts: m.ts }); return;
      case 'pong': if (p && typeof m.ts === 'number') { const rtt = now() - m.ts; p.rtt = p.rtt == null ? rtt : Math.round(p.rtt * 0.7 + rtt * 0.3); this._emit('latency', { peer: this._pub(p), rtt: p.rtt }); } return;
      case 'msg': if (p) this._emit('message', { from: this._pub(p), msg: m.msg }); return;
      case 'need-snap': if (p) this._send(p, { t: 'snap', v: this.version, state: this.state }); return;
      case 'bye': if (p) { if (m.reason === 'leave') this._drop(p, 'left', true); else this._drop(p, 'paused'); } return;
    }
  }
  _hello(c, m) {
    const token = String(m.token || '').slice(0, 64);
    const known = token && this._byToken.get(token);
    if (known) {
      const old = known.conn;
      const was = known.connected;
      known.conn = c; known.connected = true; known.lastSeen = now();
      if (m.name) known.name = String(m.name).slice(0, 24);
      if (m.meta !== undefined) known.meta = m.meta;
      if (old && old !== c) try { old.close(); } catch { /* egal */ }
      safeSend(c, { t: 'welcome', id: known.id, v: this.version, state: this.state, host: this.name });
      this._emit('peer-reconnect', { peer: this._pub(known), wasConnected: was });
      return;
    }
    const reject = code => { safeSend(c, { t: 'reject', code }); setTimeout(() => { try { c.close(); } catch { /* egal */ } }, 300); };
    if (this.locked) return reject('room-locked');
    if (this._peers.size >= this.o.maxPeers) return reject('room-full');
    const p = { id: 'p' + randomId(6), name: String(m.name || 'Gast').slice(0, 24), meta: m.meta ?? null, token: token || randomId(16), conn: c, connected: true, lastSeen: now(), rtt: null };
    this._peers.set(p.id, p); this._byToken.set(p.token, p);
    safeSend(c, { t: 'welcome', id: p.id, token: p.token, v: this.version, state: this.state, host: this.name });
    this._emit('peer-join', { peer: this._pub(p) });
  }
  _heartbeat() {
    const t = now();
    for (const p of this._peers.values()) {
      if (!p.connected) continue;
      if (t - p.lastSeen > this.o.lostAfterMs) { try { p.conn.close(); } catch { /* egal */ } this._drop(p, 'lost'); continue; }
      this._send(p, { t: 'ping', ts: t });
    }
  }
}

// ---------------------------------------------------------------------------
// Gast

/**
 * Tritt einem Raum bei. Löst auf, sobald der Gastgeber die Teilnahme bestätigt hat (inkl. Zustand).
 * Eine einmal vergebene Identität wird pro Raum in localStorage gemerkt – nach Neuladen bekommt man
 * dieselbe Spieler-ID zurück.
 * @returns {Promise<Client>}
 */
export async function joinRoom(code, options = {}) {
  const o = { ...DEFAULTS, ...options, peerOptions: { ...DEFAULTS.peerOptions, ...(options.peerOptions || {}) } };
  code = normalizeCode(code);
  if (code.length !== o.codeLength) throw roomError('room-not-found');
  if (!navigator.onLine) throw roomError('offline');
  await loadVendor();
  const client = new Client(o, code);
  await client._start();
  return client;
}

class Client extends Emitter {
  constructor(o, code) {
    super();
    this.o = o; this.code = code;
    this.name = o.name || 'Gast'; this.meta = o.meta ?? null;
    this.id = null; this.host = null;
    this.state = {}; this.version = 0;
    this.rtt = null;
    this.status = 'connecting';   // connecting | open | reconnecting | closed
    this._store = pickStorage(o.storage);
    this._key = `${o.prefix}${code}:token`;
    this._token = this._store.getItem(this._key) || randomId(16);
    this._queue = [];
    this._peer = null; this._conn = null; this._lastMsg = 0;
    this._onHide = () => { if (this.status === 'open') safeSend(this._conn, { t: 'bye', reason: 'pause' }); };
    addEventListener('pagehide', this._onHide);
  }

  /**
   * Nachricht an den Gastgeber. Während eines Abbruchs wird gepuffert und nach dem Wiederverbinden gesendet.
   *   { key: 'move' }     – im Puffer ersetzt die neueste Nachricht mit gleichem Schlüssel die ältere
   *                          (für Positionen & Co.: nach dem Wiederverbinden zählt nur der letzte Stand)
   *   { volatile: true }  – bei Abbruch gar nicht puffern
   * Rückgabe: true = sofort gesendet, false = gepuffert/verworfen.
   */
  send(msg, { key = null, volatile = false } = {}) {
    if (this.status === 'closed') return false;
    if (this.status === 'open') {
      if (safeSend(this._conn, { t: 'msg', msg })) return true;
      this._lost();   // Kanal ist tot, obwohl noch kein Herzschlag ausgeblieben ist → sofort neu verbinden
    }
    if (volatile) return false;
    if (key != null) this._queue = this._queue.filter(e => e.key !== key);
    else if (this._queue.length >= this.o.queueLimit) { const i = this._queue.findIndex(e => e.key != null); const dropped = this._queue.splice(i >= 0 ? i : 0, 1); console.warn('[room] Puffer voll – verworfen:', dropped[0]?.msg); }
    this._queue.push({ msg, key });
    return false;
  }
  /** Raum endgültig verlassen (die gemerkte Identität wird gelöscht). */
  leave() {
    if (this.status === 'closed') return;
    safeSend(this._conn, { t: 'bye', reason: 'leave' });
    this._store.removeItem(this._key);
    this._close('left');
  }

  // --- intern ---
  async _start() {
    this._peer = await openPeer(null, this.o).catch(e => { throw fromPeerError(e); });
    this._peer.on('disconnected', () => { if (this.status !== 'closed' && !this._peer.destroyed) try { this._peer.reconnect(); } catch { /* egal */ } });
    await this._connect();
    this._hb = setInterval(() => this._heartbeat(), this.o.heartbeatMs);
  }

  _connect() {
    return new Promise((res, rej) => {
      const peer = this._peer;
      let settled = false;
      const c = peer.connect(this.o.prefix + this.code, { reliable: true });
      const fail = e => { if (settled) return; settled = true; clearTimeout(t); peer.off('error', onPeerErr); try { c.close(); } catch { /* egal */ } rej(e); };
      const onPeerErr = e => { if (e?.type === 'peer-unavailable') fail(roomError('room-not-found', e)); };
      const t = setTimeout(() => fail(roomError('no-direct-connection')), this.o.connectTimeoutMs);
      peer.on('error', onPeerErr);
      guardChannel(c, () => { if (this._conn === c) this._lost(); });
      c.on('open', () => { this._lastMsg = now(); safeSend(c, { t: 'hello', token: this._token, name: this.name, meta: this.meta }); });
      c.on('data', m => {
        if (!m || typeof m !== 'object') return;
        if (!settled) {
          if (m.t === 'welcome') {
            settled = true; clearTimeout(t); peer.off('error', onPeerErr);
            this._conn = c; this._welcome(m); res();
          } else if (m.t === 'reject') fail(roomError(m.code));
          return;
        }
        if (this._conn === c) this._onData(m);
      });
      c.on('close', () => { if (!settled) fail(roomError('no-direct-connection')); else if (this._conn === c) this._lost(); });
      c.on('error', () => { if (!settled) fail(roomError('no-direct-connection')); else if (this._conn === c) this._lost(); });
    });
  }

  _welcome(m) {
    const first = this.id == null;
    this.id = m.id; this.host = m.host;
    if (m.token) { this._token = m.token; }
    this._store.setItem(this._key, this._token);
    this.state = m.state || {}; this.version = m.v || 0;
    this.status = 'open'; this._lastMsg = now();
    if (!first) this._emit('reconnect', { id: this.id });
    this._emit('state', { state: this.state, patch: null, version: this.version, snapshot: true });
    // gepufferte Nachrichten nachschicken
    const q = this._queue; this._queue = [];
    for (const e of q) this.send(e.msg, { key: e.key });
  }

  _onData(m) {
    this._lastMsg = now();
    switch (m.t) {
      case 'ping': safeSend(this._conn, { t: 'pong', ts: m.ts }); return;
      case 'pong': if (typeof m.ts === 'number') { const r = now() - m.ts; this.rtt = this.rtt == null ? r : Math.round(this.rtt * 0.7 + r * 0.3); this._emit('latency', { rtt: this.rtt }); } return;
      case 'delta':
        if (m.v !== this.version + 1) { if (m.v > this.version) safeSend(this._conn, { t: 'need-snap' }); return; }
        applyPatch(this.state, m.patch); this.version = m.v;
        this._emit('state', { state: this.state, patch: m.patch, version: this.version });
        return;
      case 'snap':
        if (m.v < this.version) return;
        this.state = m.state || {}; this.version = m.v;
        this._emit('state', { state: this.state, patch: null, version: this.version, snapshot: true });
        return;
      case 'msg': this._emit('message', { msg: m.msg }); return;
      case 'closed': this._store.removeItem(this._key); this._hostLost('closed'); return;
      case 'kicked': this._store.removeItem(this._key); this._emit('error', { error: roomError('kicked') }); this._close('kicked'); return;
    }
  }

  _heartbeat() {
    if (this.status === 'open') {
      if (now() - this._lastMsg > this.o.lostAfterMs) { this._lost(); return; }
      safeSend(this._conn, { t: 'ping', ts: now() });
    }
  }

  async _lost() {
    if (this.status !== 'open') return;
    this.status = 'reconnecting'; this._conn = null;
    this._emit('disconnected', { willRetry: true });
    const until = now() + this.o.retryForMs;
    let lastErr = null;
    while (this.status === 'reconnecting' && now() < until) {
      try {
        if (!this._peer || this._peer.destroyed) {
          this._peer = await openPeer(null, this.o);
          this._peer.on('disconnected', () => { if (this.status !== 'closed' && !this._peer.destroyed) try { this._peer.reconnect(); } catch { /* egal */ } });
        } else if (this._peer.disconnected) { try { this._peer.reconnect(); } catch { /* egal */ } await new Promise(r => setTimeout(r, 1000)); }
        await this._connect();
        return; // _welcome hat 'reconnect' gemeldet
      } catch (e) {
        lastErr = e;
        if (e?.code === 'room-locked' || e?.code === 'room-full') break;
        await new Promise(r => setTimeout(r, 1500));
      }
    }
    if (this.status === 'reconnecting') this._hostLost(lastErr?.code === 'room-not-found' ? 'gone' : 'timeout');
  }

  _hostLost(reason) {
    if (this.status === 'closed') return;
    this._emit('host-lost', { reason });   // closed | gone | timeout
    this._close(reason);
  }
  _close(reason) {
    this.status = 'closed';
    clearInterval(this._hb);
    removeEventListener('pagehide', this._onHide);
    const p = this._peer; this._peer = null; this._conn = null;
    setTimeout(() => { try { p?.destroy(); } catch { /* egal */ } }, 300);
    this._emit('closed', { reason });
  }

  /** Nur für Tests: Verbindung hart kappen (wie ein Funkloch), ohne sich abzumelden. */
  _debugDrop() { try { this._conn?.peerConnection?.close(); } catch { /* egal */ } }
}
