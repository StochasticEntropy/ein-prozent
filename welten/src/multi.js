// Mehrspieler für die Rätselwelten: Lobby (Raumcode + QR), Beitreten, Abgleich der Spielerfiguren.
// Jedes Gerät steuert seine eigene Figur (Laufen, Rätsel, Slapstick) und meldet ihren Zustand;
// der Gastgeber sammelt alle Zustände und verteilt sie (net/room.js), entscheidet gemeinsame
// Ereignisse (Brücke, Sieger) und reicht Ereignis-Meldungen an alle weiter.
import { createRoom, joinRoom } from '../net/room.js';

const $ = s => document.querySelector(s);
// Figur eines Spielers: selbst gewählt (fig) oder nach Platz in der Lobby
export const figModel = p => p && p.fig ? 'mini/character-' + p.fig : AVATARS[((p && p.slot) ?? 1) % 6];
export const AVATARS = ['mini/character-female-b', 'mini/character-male-f', 'mini/character-female-e', 'mini/character-male-c', 'mini/character-female-d', 'mini/character-male-b'];
export const COLORS = ['#ffc940', '#ff7ab6', '#56e4ff', '#2fe39f', '#c39bff', '#ff9f43'];

export class Multi {
  constructor(handlers) {
    this.h = handlers;           // { onStart, onChapter, onPlayers, onEvent, onWinner, onHostLost, toast }
    this.role = 'solo'; this.id = 'me'; this.players = {}; this.winner = null;
  }
  get active() { return this.role !== 'solo'; }

  // ---------- Lobby ----------
  // studio: dieses Gerät ist nur Bühne (spielt nicht mit), alle anderen antworten auf ihren Handys
  async host(name, chapter, { studio = false } = {}) {
    this.role = 'host'; this.chapter = chapter; this.studio = studio;
    this.lobby(`<div class="lb-wait">Raum wird geöffnet …</div>`);
    try { this.room = await createRoom({ name, joinUrl: c => location.origin + location.pathname + '?join=' + c }); }
    catch (e) { return this.fail(e); }
    this.id = this.room.id || 'host';
    this.players[this.id] = { name: studio ? 'Bühne' : name, slot: 0, ...(studio ? { stage: true } : { fig: this.fig }) };
    this.room.on('peer-join', ({ peer }) => { if (!this.players[peer.id]) this.players[peer.id] = { name: peer.name, slot: Object.keys(this.players).length % AVATARS.length, fig: peer.meta && peer.meta.fig }; this.sync(); this.renderLobby(); });
    this.room.on('peer-reconnect', ({ peer }) => { this.h.toast(`${peer.name} ist wieder da`); this.renderLobby(); });
    this.room.on('peer-leave', ({ peer, reason }) => { if (reason === 'left' || reason === 'kicked') { delete this.players[peer.id]; this.room.setState({ players: { [peer.id]: null } }); } this.h.toast(`${peer.name} ist ${reason === 'left' ? 'gegangen' : 'getrennt'}`); this.renderLobby(); });
    this.room.on('message', ({ from, msg }) => this.onGuestMsg(from && from.id != null ? from.id : from, msg)); // from = öffentliche Spielersicht {id, name, …}
    this.room.on('error', ({ error }) => console.warn(error));
    this.sync(); this.renderLobby();
  }
  async join(code, name) {
    this.role = 'guest';
    this.lobby(`<div class="lb-wait">Verbinde mit Raum ${code} …</div>`);
    try { this.me = await joinRoom(code, { name, meta: { fig: this.fig } }); } catch (e) { return this.fail(e); }
    this.id = this.me.id;
    this.me.on('state', ({ state }) => this.onState(state));
    this.me.on('message', ({ msg }) => this.onHostMsg(msg));
    this.me.on('disconnected', () => this.h.toast('Verbindung kurz weg – verbinde neu …'));
    this.me.on('reconnect', () => this.h.toast('Wieder verbunden'));
    this.me.on('host-lost', () => this.h.onHostLost());
    this.renderLobby();
  }
  fail(e) {
    this.lobby(`<div class="lb-err">${e.message || 'Verbindung fehlgeschlagen.'}</div><button class="btn-alt" onclick="location.href=location.pathname">Zurück</button>`);
    this.role = 'solo';
  }
  lobby(html) { const el = $('#lobby'); el.hidden = false; el.innerHTML = `<div class="lb-card">${html}</div>`; }
  renderLobby() {
    if (this.started) return;
    const list = Object.entries(this.state?.players || this.players).filter(([, p]) => p && p.name)
      .map(([id, p]) => `<li><span class="lb-dot" style="background:${COLORS[p.slot ?? 0]}"></span>${esc(p.name)}${p.stage ? ' <small>(Bühne)</small>' : id === this.id ? ' <small>(du)</small>' : ''}</li>`).join('');
    if (this.role === 'host') {
      const n = Object.keys(this.players).length;
      this.lobby(`<h2>${this.studio ? 'Studio' : 'Raum'} <b class="lb-code">${this.room.code}</b></h2>
        <p>${this.studio ? 'Scannt den Code mit euren Handys – dort beantwortet ihr die Fragen. Dieses Gerät ist die Bühne.' : 'Scannt den Code oder öffnet die Seite und tippt „Raum beitreten“.'}</p>
        <img class="lb-qr" src="${this.room.qrDataUrl}" alt="QR-Code zum Beitreten">
        <ul class="lb-list">${list}</ul>
        <button class="btn-go" id="lb-start" ${n < 2 ? 'disabled' : ''}>${n < 2 ? 'Warte auf Mitspieler …' : `Los geht's (${this.studio ? n - 1 : n} Spieler)`}</button>`);
      $('#lb-start').onclick = () => this.start();
    } else {
      this.lobby(`<h2>Raum <b class="lb-code">${this.me ? '' : ''}${(this.state && this.state.code) || ''}</b></h2>
        <p>${this.studio ? 'Du bist im Studio! Die Fragen kommen gleich auf dein Handy – schau auf die Bühne.' : 'Du bist drin! Warte, bis der Gastgeber startet.'}</p><ul class="lb-list">${list}</ul><div class="lb-wait">⏳</div>`);
    }
  }
  sync() { this.room.setState({ code: this.room.code, chapter: this.chapter, mode: this.studio ? 'studio' : 'race', players: this.players }, { immediate: true }); }
  start() {
    this.started = true; this.room.lock(); this.room.setState({ phase: 'play', startAt: Date.now() + 800 }, { immediate: true });
    this.room.broadcast({ type: 'start' }); $('#lobby').hidden = true; this.h.onStart(this.slots(), this.chapter);
  }
  slots() { const s = this.state?.players || this.players; return Object.fromEntries(Object.entries(s).filter(([, p]) => p && p.name).map(([id, p]) => [id, p])); }

  // ---------- laufender Abgleich ----------
  // eigene Figur melden (10 Hz)
  report(me) {
    if (this.role === 'host') { this.players[this.id] = { ...this.players[this.id], ...me }; this.room.setState({ players: { [this.id]: me } }); }
    else if (this.role === 'guest' && this.me) this.me.send({ type: 'me', ...me }, { key: 'move' });
  }
  event(ev) { // eigenes Ereignis an alle (Tor geschafft, Katapult, Kristall …)
    ev.from = this.id;
    if (this.role === 'host') this.applyEvent(ev);
    else if (this.me) this.me.send({ type: 'ev', ev });
  }
  applyEvent(ev) { // nur Gastgeber: entscheidet, verteilt
    if (ev.kind === 'claim') { if (this.winner) return; this.winner = ev.from; this.room.setState({ winner: ev.from }, { immediate: true }); this.room.broadcast({ type: 'winner', id: ev.from }); this.h.onWinner(ev.from); return; }
    if (ev.kind === 'bridge') { if (this.bridge) return; this.bridge = true; this.room.setState({ bridge: true }, { immediate: true }); }
    this.room.broadcast({ type: 'ev', ev }); if (ev.from !== this.id) this.h.onEvent(ev);
  }
  onGuestMsg(from, msg) {
    if (msg.type === 'me') { const { type, ...me } = msg; this.players[from] = { ...this.players[from], ...me }; this.room.setState({ players: { [from]: me } }); this.h.onPlayers(this.players); }
    else if (msg.type === 'ev') this.applyEvent({ ...msg.ev, from });
    else if (msg.type === 'ans') this.h.onAnswer && this.h.onAnswer(from, msg);
  }
  onState(state) {
    this.state = state; this.studio = state.mode === 'studio';
    if (state.chapter && state.chapter !== this.chapter) { this.chapter = state.chapter; if (!this.started) this.h.onChapter(state.chapter); }
    if (!this.started) { if (state.phase === 'play') { this.started = true; $('#lobby').hidden = true; this.h.onStart(this.slots(), this.chapter); } else this.renderLobby(); }
    this.h.onPlayers(this.slots()); this.h.onState && this.h.onState(state);
    if (state.winner && !this.winner) { this.winner = state.winner; this.h.onWinner(state.winner); }
  }
  onHostMsg(msg) {
    if (msg.type === 'ev') { if (msg.ev.from !== this.id) this.h.onEvent(msg.ev); }
    if (msg.type === 'winner' && !this.winner) { this.winner = msg.id; this.h.onWinner(msg.id); }
  }
  name(id) { return (this.state?.players?.[id] || this.players[id] || {}).name || 'Jemand'; }
}
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
