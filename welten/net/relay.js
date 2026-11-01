// net/relay.js – Ersatzweg, wenn keine WebRTC-Direktverbindung zustande kommt (Mobilfunk, Gäste-WLAN mit
// Geräte-Trennung, Datenschutz-Browser): Nachrichten laufen dann über öffentliche MQTT-Broker per WebSocket.
// Minimaler MQTT-3.1.1-Client (nur QoS 0: CONNECT, SUBSCRIBE, PUBLISH, PINGREQ) – keine Bibliothek nötig.
//
// Eine RelayConn verhält sich für room.js wie eine PeerJS-DataConnection: open, send(), close(), on('data'|'open'|'close'|'error').
// Der Gastgeber hört auf allen erreichbaren Brokern; ein Gast nimmt den ersten, der antwortet – der Gastgeber
// antwortet immer über den Broker, über den die Nachricht kam.
// Hinweis: Öffentliche Broker sind für jeden lesbar, der das Thema kennt – es laufen nur Spielerdaten (Name,
// Position, Spielstand) darüber, nichts Vertrauliches.

export const BROKERS = ['wss://broker.emqx.io:8084/mqtt', 'wss://broker.hivemq.com:8884/mqtt'];
const enc = new TextEncoder(), dec = new TextDecoder();

function varint(n) { const out = []; do { let b = n % 128; n = Math.floor(n / 128); if (n > 0) b |= 128; out.push(b); } while (n > 0); return out; }
function str(s) { const b = enc.encode(s); return [b.length >> 8, b.length & 255, ...b]; }
function packet(type, body) { return new Uint8Array([type, ...varint(body.length), ...body]); }

class Mqtt {
  constructor(url) { this.url = url; this.subs = new Map(); this.ws = null; this.buf = new Uint8Array(0); this.pid = 1; this.ready = null; }
  connect(timeoutMs = 6000) {
    if (this.ready) return this.ready;
    this.ready = new Promise((res, rej) => {
      let ws; try { ws = new WebSocket(this.url, 'mqtt'); } catch (e) { return rej(e); }
      ws.binaryType = 'arraybuffer'; this.ws = ws;
      const t = setTimeout(() => { try { ws.close(); } catch { /* egal */ } rej(new Error('relay-timeout')); }, timeoutMs);
      ws.onopen = () => ws.send(packet(0x10, [...str('MQTT'), 4, 0x02, 0, 30, ...str('rw' + Math.random().toString(36).slice(2, 12))]));
      ws.onmessage = ev => this._recv(new Uint8Array(ev.data), () => { clearTimeout(t); this._ping = setInterval(() => this._raw(new Uint8Array([0xc0, 0])), 20000); res(this); });
      ws.onerror = () => { clearTimeout(t); rej(new Error('relay-error')); };
      ws.onclose = () => { clearTimeout(t); clearInterval(this._ping); this.dead = true; rej(new Error('relay-closed')); this.onclose && this.onclose(); };
    });
    return this.ready;
  }
  _raw(p) { if (this.ws && this.ws.readyState === 1) { this.ws.send(p); return true; } return false; }
  subscribe(topic, fn) { this.subs.set(topic, fn); const id = this.pid++ & 0xffff || 1; this._raw(packet(0x82, [id >> 8, id & 255, ...str(topic), 0])); }
  unsubscribe(topic) { this.subs.delete(topic); const id = this.pid++ & 0xffff || 1; this._raw(packet(0xa2, [id >> 8, id & 255, ...str(topic)])); }
  publish(topic, text) { return this._raw(packet(0x30, [...str(topic), ...enc.encode(text)])); }
  close() { try { this._raw(new Uint8Array([0xe0, 0])); this.ws && this.ws.close(); } catch { /* egal */ } }
  _recv(chunk, onConnack) {
    const b = new Uint8Array(this.buf.length + chunk.length); b.set(this.buf); b.set(chunk, this.buf.length); this.buf = b;
    for (;;) {
      if (this.buf.length < 2) return;
      let len = 0, mul = 1, i = 1, byte;
      do { if (i >= this.buf.length) return; byte = this.buf[i++]; len += (byte & 127) * mul; mul *= 128; } while (byte & 128);
      if (this.buf.length < i + len) return;
      const type = this.buf[0] >> 4, flags = this.buf[0] & 15, body = this.buf.subarray(i, i + len);
      this.buf = this.buf.slice(i + len);
      if (type === 2) onConnack && onConnack();
      else if (type === 3) {
        const tl = (body[0] << 8) | body[1], topic = dec.decode(body.subarray(2, 2 + tl));
        const off = 2 + tl + (((flags >> 1) & 3) ? 2 : 0);
        const fn = this.subs.get(topic); if (fn) fn(dec.decode(body.subarray(off)));
      }
    }
  }
}
const pool = new Map(); // ein Broker-Anschluss pro URL und Seite
function broker(url) { let m = pool.get(url); if (!m || m.dead) { m = new Mqtt(url); pool.set(url, m); } return m; }

/** Verbindung über einen Broker – Schnittstelle wie eine PeerJS-DataConnection. */
export class RelayConn {
  constructor(m, sendTopic, recvTopic, cid) {
    this.m = m; this.sendTopic = sendTopic; this.recvTopic = recvTopic; this.cid = cid;
    this.open = false; this.relay = true; this._h = {};
    if (recvTopic) m.subscribe(recvTopic, t => this._in(t));
  }
  on(e, fn) { (this._h[e] = this._h[e] || []).push(fn); }
  _emit(e, d) { for (const fn of this._h[e] || []) try { fn(d); } catch (err) { console.error('[relay]', err); } }
  _in(text) { let m; try { m = JSON.parse(text); } catch { return; } if (m.x) { this._gone(); return; } this._emit('data', m.d); }
  send(msg) { if (!this.open || this.m.dead) throw new Error('relay closed'); this.m.publish(this.sendTopic, JSON.stringify({ c: this.cid, d: msg })); }
  close() { if (this.open && !this.m.dead) this.m.publish(this.sendTopic, JSON.stringify({ c: this.cid, x: 1 })); this._gone(); }
  _gone() { if (!this.open && this._closed) return; this.open = false; this._closed = true; if (this.recvTopic) this.m.unsubscribe(this.recvTopic); this._emit('close'); }
}

const topicBase = (prefix, code) => `${prefix.replace(/[^a-z0-9-]/gi, '')}/${code}`;

/** Gastgeber: hört auf allen erreichbaren Brokern; ruft onConnection(conn) für jeden neuen Gast auf. */
export async function relayHost(prefix, code, onConnection) {
  const base = topicBase(prefix, code), conns = new Map(), ms = [];
  await Promise.all(BROKERS.map(async url => {
    try {
      const m = await broker(url).connect(); ms.push(m);
      m.subscribe(`${base}/h`, text => {
        let msg; try { msg = JSON.parse(text); } catch { return; }
        const cid = String(msg.c || '').slice(0, 24); if (!cid) return;
        let c = conns.get(cid);
        if (msg.x) { if (c) { conns.delete(cid); c._gone(); } return; }
        if (!c) {
          // Antworten an den Gast laufen über den Broker, über den er kam; der Gast schickt mit c = seine Kennung
          c = new RelayConn(m, `${base}/g/${cid}`, null, 'host'); c.open = true;
          c.close = () => { if (c.open && !m.dead) m.publish(`${base}/g/${cid}`, JSON.stringify({ x: 1 })); conns.delete(cid); c._gone(); };
          c.send = d => { if (!c.open || m.dead) throw new Error('relay closed'); m.publish(`${base}/g/${cid}`, JSON.stringify({ d })); };
          conns.set(cid, c); onConnection(c);
        }
        if (msg.d !== undefined) c._emit('data', msg.d);
      });
    } catch { /* dieser Broker ist nicht erreichbar */ }
  }));
  if (!ms.length) throw new Error('relay-unreachable');
  return { close() { for (const c of conns.values()) try { c.close(); } catch { /* egal */ } ms.forEach(m => m.unsubscribe(`${base}/h`)); } };
}

/** Gast: Verbindung zum Gastgeber über den ersten Broker, der erreichbar ist. */
export async function relayConnect(prefix, code) {
  const base = topicBase(prefix, code), cid = Math.random().toString(36).slice(2, 12);
  let last = null;
  for (const url of BROKERS) {
    try {
      const m = await broker(url).connect();
      const c = new RelayConn(m, `${base}/h`, `${base}/g/${cid}`, cid);
      c.open = true;
      return c;
    } catch (e) { last = e; }
  }
  throw last || new Error('relay-unreachable');
}
