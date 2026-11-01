// Die Rätselwelten – Spiel-Engine: Darstellung, Figuren, Kamera, Sprecher, Rätsel, Computer-Rivale,
// Mehrspieler. Was in einer Welt passiert (Aufbau, Tore, Gags, Drehbuch), steht in src/chapters/.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { World } from './world.js';
import { Audio } from './audio.js';
import { REACT, SPEAKERS } from './script.js';
import { Multi, AVATARS, COLORS } from './multi.js';
import uhrwerk from './chapters/uhrwerk.js';
import wortwald from './chapters/wortwald.js';

const CHAPTERS = [uhrwerk, wortwald];
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pick = a => a[Math.floor(Math.random() * a.length)];
const sleep = ms => new Promise(r => setTimeout(r, ms));
const lerp = (a, b, k) => a + (b - a) * k;
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const tween = (ms, fn) => new Promise(r => { const t0 = performance.now(); const step = () => { const k = Math.min(1, (performance.now() - t0) / ms); fn(k); if (k < 1) requestAnimationFrame(step); else r(); }; step(); });
const BANK = Object.fromEntries((window.QUIZ_BANK || []).map(q => [q.id, window.Difficulty ? window.Difficulty.annotate({ ...q }) : q]));
const MOBILE = matchMedia('(pointer: coarse)').matches;
let CH = CHAPTERS[0];
const react = key => {
  const own = CH.react && CH.react[key], list = own || REACT[key], i = Math.floor(Math.random() * list.length);
  return { line: list[i], id: `${own ? CH.id + '_' : ''}${key}${i}` };
};

// ---------- Kristall-Fortschritt (pro Gerät) ----------
const progress = {
  get() { try { return JSON.parse(localStorage.getItem('rw:kristalle') || '{}'); } catch { return {}; } },
  win(id) { const p = this.get(); p[id] = true; try { localStorage.setItem('rw:kristalle', JSON.stringify(p)); } catch {} },
  count() { return Object.values(this.get()).filter(Boolean).length; },
};

// ---------- Antwort prüfen (wie im klassischen Spiel) ----------
const norm = s => String(s).trim().toUpperCase().replace(/Ä/g, 'AE').replace(/Ö/g, 'OE').replace(/Ü/g, 'UE').replace(/ß/g, 'SS').replace(/[^A-Z0-9]/g, '');
function isCorrect(q, val) {
  if (val == null || val === '') return false;
  if (q.type === 'choice') return val === q.a;
  if (q.type === 'number') return Number(String(val).replace(',', '.')) === q.a;
  const ok = v => [q.a, ...(q.accept || [])].map(norm).includes(v) || (q.contains || []).some(c => v.includes(norm(c)));
  if (ok(norm(val))) return true;
  const FILL = new Set(['DER', 'DIE', 'DAS', 'DEN', 'DEM', 'DES', 'EIN', 'EINE', 'EINEN', 'EINEM', 'EINER', 'NACH', 'IM', 'AM', 'AUF', 'IN', 'ZUM', 'ZUR', 'ES', 'IST', 'WAR']);
  const words = String(val).trim().toUpperCase().split(/\s+/);
  while (words.length > 1 && FILL.has(words[0].replace(/[^A-ZÄÖÜ]/g, ''))) words.shift();
  return ok(norm(words.join(' ')));
}

// ---------- Renderer ----------
const canvas = $('#scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: !MOBILE || devicePixelRatio < 2, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, MOBILE ? 1.6 : 2));
renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 0.92;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 500);
// Umgebungsspiegelung: Metall (Zahnräder, Messing) glänzt statt dunkel zu bleiben
scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.3;
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.35, 0.5, 0.97); composer.addPass(bloom);
composer.addPass(new OutputPass());
function resize() {
  const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); composer.setSize(w, h);
  camera.aspect = w / h; camera.fov = w / h < 0.8 ? 62 : 50; camera.updateProjectionMatrix();
}
addEventListener('resize', resize); resize();

// ---------- Modelle ----------
class Models {
  constructor() { this.loader = new GLTFLoader(); this.cache = {}; }
  async load(names, onOne) {
    await Promise.all(names.filter(n => !this.cache[n]).map(n => new Promise((res, rej) => this.loader.load(`assets/models/${n}.glb`, g => { this.cache[n] = g; onOne && onOne(); res(); }, undefined, rej))));
  }
  get(n) { return SkeletonUtils.clone(this.cache[n].scene); }
  anims(n) { return this.cache[n].animations; }
}

// ---------- Figuren (Spieler, Rivale, Mitspieler) ----------
class Actor {
  constructor(models, model, name, color) {
    this.name = name; this.obj = models.get(model); this.obj.scale.setScalar(1.6);
    this.obj.traverse(o => { if (o.isMesh) { o.castShadow = true; } });
    scene.add(this.obj);
    this.mixer = new THREE.AnimationMixer(this.obj); this.actions = {};
    for (const clip of models.anims(model)) this.actions[clip.name] = this.mixer.clipAction(clip);
    this.cur = null; this.play('idle');
    this.target = null; this.speed = 3.4; this.passed = new Set(); this.busy = false; this.vy = 0; this.air = false; this.stepT = 0;
    // Name über dem Kopf
    const cv = document.createElement('canvas'); cv.width = 256; cv.height = 64; const c = cv.getContext('2d');
    c.font = 'bold 34px system-ui, sans-serif'; c.textAlign = 'center'; c.fillStyle = 'rgba(10,13,36,.55)'; c.beginPath(); c.roundRect(28, 6, 200, 52, 26); c.fill();
    c.fillStyle = color; c.fillText(name, 128, 44);
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
    this.tag = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true })); this.tag.scale.set(0.8, 0.2, 1); this.obj.add(this.tag);
    this.tag.material.opacity = 0.75; this.tag.scale.multiplyScalar(1 / 1.6); this.tag.position.y = 1.05;
  }
  play(name, { once = false, fade = 0.18, speed = 1 } = {}) {
    const a = this.actions[name]; if (!a || this.cur === a) return a;
    a.reset(); a.setEffectiveTimeScale(speed); a.setLoop(once ? THREE.LoopOnce : THREE.LoopRepeat); a.clampWhenFinished = once;
    if (this.cur) this.cur.crossFadeTo(a, fade, false); a.play(); this.cur = a; this.animName = name; return a;
  }
  get pos() { return this.obj.position; }
  face(x, z) { this.obj.rotation.y = Math.atan2(x - this.pos.x, z - this.pos.z); }
  blockers() { return world.gates.filter(g => !this.passed.has(g.id)).map(g => g.z); }
  reset(x = 0, z = 1.6) { this.pos.set(x, 0, z); this.passed.clear(); this.target = null; this.busy = false; this.air = false; this.obj.visible = false; this.play('idle'); }
  update(dt) {
    this.mixer.update(dt);
    if (this.air) {
      this.vy -= 22 * dt; this.pos.y += this.vy * dt;
      if (this.flyTo) { this.pos.x = lerp(this.pos.x, this.flyTo.x, Math.min(1, dt * 1.6)); this.pos.z = lerp(this.pos.z, this.flyTo.z, Math.min(1, dt * 1.6)); }
      const floor = this.floor ?? 0;
      if (this.pos.y <= floor && this.vy < 0) { this.pos.y = floor; this.air = false; this.vy = 0; this.onLand && this.onLand(); this.onLand = null; }
      return;
    }
    if (!this.target || this.busy) return;
    const dx = this.target.x - this.pos.x, dz = this.target.z - this.pos.z, d = Math.hypot(dx, dz);
    if (d < 0.08) { this.target = null; this.play('idle'); this.onArrive && this.onArrive(); return; }
    const step = Math.min(d, this.speed * dt), nx = this.pos.x + dx / d * step, nz = this.pos.z + dz / d * step;
    const bl = this.blockers();
    if (world.walkable(nx, nz, bl)) { this.pos.x = nx; this.pos.z = nz; }
    else if (world.walkable(nx, this.pos.z, bl)) this.pos.x = nx;
    else if (world.walkable(this.pos.x, nz, bl)) this.pos.z = nz;
    else { this.target = null; this.play('idle'); return; }
    this.obj.rotation.y = lerpAngle(this.obj.rotation.y, Math.atan2(dx, dz), Math.min(1, dt * 12));
    this.play(this.speed > 3 ? 'sprint' : 'walk');
    this.stepT -= dt; if (this.stepT <= 0 && this === player) { audio.step(); this.stepT = 0.28; }
  }
  // Sprung/Wurf: landet bei `to` auf Höhe floor (Standard: Boden)
  launch(vy, to, floor = 0) { this.air = true; this.vy = vy; this.flyTo = to; this.floor = floor; this.play('jump', { once: true }); return new Promise(r => (this.onLand = r)); }
}
function lerpAngle(a, b, k) { let d = ((b - a + Math.PI) % (Math.PI * 2)) - Math.PI; if (d < -Math.PI) d += Math.PI * 2; return a + d * k; }

// ---------- Billboards (Uhu, Rocco als Comic-Pappfiguren in der 3D-Welt) ----------
function svgSprite(svgText, h = 1.6) {
  const tex = new THREE.Texture(); tex.colorSpace = THREE.SRGBColorSpace;
  const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true })); sp.scale.set(h * 0.8, h, 1); sp.center.set(0.5, 0);
  sp.setSvg = s => { const img = new Image(); img.onload = () => { const cv = document.createElement('canvas'); cv.width = 240; cv.height = 300; cv.getContext('2d').drawImage(img, 0, 0, 240, 300); tex.image = cv; tex.needsUpdate = true; };
    const svgDoc = s.replace('<svg ', '<svg width="240" height="300" ' + (s.includes('xmlns=') ? '' : 'xmlns="http://www.w3.org/2000/svg" '));
    img.onerror = () => console.warn('SVG-Figur konnte nicht geladen werden');
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgDoc); };
  sp.setSvg(svgText); return sp;
}

// ---------- Partikel ----------
const bursts = [];
function burst(pos, { n = 40, colors = ['#ffc940', '#2fe39f', '#56e4ff', '#ff7ab6'], speed = 4, up = 4, life = 1.2, size = 0.14, grav = 9 } = {}) {
  const g = new THREE.BufferGeometry(), p = new Float32Array(n * 3), c = new Float32Array(n * 3), v = [];
  const col = new THREE.Color();
  for (let i = 0; i < n; i++) { p.set([pos.x, pos.y, pos.z], i * 3); col.set(pick(colors)); c.set([col.r, col.g, col.b], i * 3);
    const a = Math.random() * Math.PI * 2, s = speed * (0.4 + Math.random()); v.push([Math.cos(a) * s, up * (0.5 + Math.random()), Math.sin(a) * s]); }
  g.setAttribute('position', new THREE.BufferAttribute(p, 3)); g.setAttribute('color', new THREE.BufferAttribute(c, 3));
  const m = new THREE.PointsMaterial({ size, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const pts = new THREE.Points(g, m); scene.add(pts); bursts.push({ pts, v, t: 0, life, grav });
}
function updateBursts(dt) {
  for (let i = bursts.length - 1; i >= 0; i--) { const b = bursts[i]; b.t += dt; const a = b.pts.geometry.attributes.position;
    for (let k = 0; k < b.v.length; k++) { b.v[k][1] -= b.grav * dt; a.array[k * 3] += b.v[k][0] * dt; a.array[k * 3 + 1] += b.v[k][1] * dt; a.array[k * 3 + 2] += b.v[k][2] * dt; }
    a.needsUpdate = true; b.pts.material.opacity = Math.max(0, 1 - b.t / b.life);
    if (b.t > b.life) { scene.remove(b.pts); b.pts.geometry.dispose(); bursts.splice(i, 1); } }
}
function stars(a) {
  const g = new THREE.Group(); for (let i = 0; i < 4; i++) { const s = new THREE.Mesh(new THREE.OctahedronGeometry(0.09), new THREE.MeshBasicMaterial({ color: '#ffe066' })); s.userData.a = i * Math.PI / 2; g.add(s); }
  a.obj.add(g); g.position.y = 1.35 / 1.6; const t0 = performance.now();
  const spin = () => { const t = (performance.now() - t0) / 1000; g.children.forEach(s => { const ang = s.userData.a + t * 5; s.position.set(Math.cos(ang) * 0.35, Math.sin(t * 8 + s.userData.a) * 0.04, Math.sin(ang) * 0.35); }); if (t < 2) requestAnimationFrame(spin); else a.obj.remove(g); };
  spin();
}

// ---------- Kamera ----------
const cam = { mode: 'orbit', pos: V(14, 12, 14), look: V(0, 0, -16), wantPos: V(0, 0, 0), wantLook: V(0, 0, 0), k: 2.2, t: 0, shake: 0 };
function camFollow(a, k = 3) { cam.mode = 'follow'; cam.subject = a; cam.k = k; }
function camShot(pos, look, k = 2.4) { cam.mode = 'shot'; cam.wantPos.copy(pos); cam.wantLook.copy(look); cam.k = k; }
function updateCamera(dt) {
  cam.t += dt;
  if (cam.mode === 'orbit') { const r = 26; cam.wantPos.set(Math.sin(cam.t * 0.12) * r, 13, -16 + Math.cos(cam.t * 0.12) * r); cam.wantLook.set(0, -1, -17); }
  else if (cam.mode === 'follow') { const p = cam.subject.pos; const portrait = innerWidth / innerHeight < 0.8;
    cam.wantPos.set(p.x + 1.2, Math.max(0, p.y) + (portrait ? 5.6 : 4.0), p.z + (portrait ? 7.0 : 5.4)); cam.wantLook.set(p.x, Math.max(0, p.y) + 0.8, p.z - 1.8); }
  const k = 1 - Math.exp(-cam.k * dt);
  cam.pos.lerp(cam.wantPos, k); cam.look.lerp(cam.wantLook, k);
  camera.position.copy(cam.pos);
  if (cam.shake > 0) { cam.shake = Math.max(0, cam.shake - dt); camera.position.x += (Math.random() - 0.5) * cam.shake * 0.6; camera.position.y += (Math.random() - 0.5) * cam.shake * 0.6; }
  camera.lookAt(cam.look);
  world.sun.position.set(cam.look.x + 12, 22, cam.look.z + 10); world.sun.target.position.copy(cam.look);
}

// ---------- Sprecher (HUD mit Comic-Figur + Untertitel, Stimme oder Plappern) ----------
let skipLine = null, speaking = null;
const speaker = who => (CH.speakers && CH.speakers[who]) || SPEAKERS[who];
async function say(idOrLine, { wait = true } = {}) {
  const [who, mood, text] = typeof idOrLine === 'string' ? CH.lines[idOrLine] : idOrLine.line || idOrLine;
  const id = typeof idOrLine === 'string' ? idOrLine : idOrLine.id || null;
  const sp = speaker(who);
  const panel = $('#talk'); panel.dataset.who = who;
  $('#talk-name').textContent = sp.name;
  $('#talk-face').innerHTML = who === 'uhu' ? Cast.team().a.draw(mood) : who === 'rocco' ? Cast.team().b.draw(mood) : `<div class="npc-face ${sp.face || who}"></div>`;
  $('#talk-text').textContent = text;
  panel.classList.remove('show'); void panel.offsetWidth; panel.classList.add('show');
  if (who === 'rocco' && rocco.visible) { rocco.setSvg(Cast.team().b.draw(mood)); rocco.bounce = 1; }
  if (who === 'uhu') { uhu.setSvg(Cast.team().a.draw(mood)); uhu.bounce = 1; }
  CH.onSay && CH.onSay(ctx, who);
  let dur = id ? await audio.voice(id) : null;
  if (dur == null) { dur = Math.max(1.6, text.length * 0.058 + 0.5); if (sp.babble) audio.babble(text, sp.babble); }
  speaking = { who, until: performance.now() + dur * 1000, voiced: id && audio.voiceBuf[id] };
  if (!wait) return;
  await new Promise(r => { const t = setTimeout(r, dur * 1000 + 250); skipLine = () => { clearTimeout(t); r(); }; });
  skipLine = null;
}
function updateTalk() {
  const face = $('#talk-face');
  const on = speaking && performance.now() < speaking.until && (!speaking.voiced || audio.level() > 0.06);
  face.classList.toggle('talking', !!on);
  if (speaking && performance.now() > speaking.until + 1800 && !riddle) { $('#talk').classList.remove('show'); speaking = null; }
}
const talkingNow = who => speaking && speaking.who === who && performance.now() < speaking.until;

// ---------- HUD ----------
const state = {};
function resetState() { for (const k of Object.keys(state)) delete state[k]; Object.assign(state, { hearts: 3, coins: 0, item: null, start: 0, over: false }); }
resetState();
function hud() {
  $('#hearts').innerHTML = [0, 1, 2].map(i => `<span class="heart ${i < state.hearts ? '' : 'lost'}">❤</span>`).join('');
  $('#coins').textContent = state.coins;
  $('#item').hidden = !state.item; $('#item').textContent = CH.item.icon;
}

// ---------- Rätsel am Tor ----------
let riddle = null;
const gateShot = gate => camShot(V(gate.x + 2.6, 3.2, gate.z + 5.2), V(gate.x, 2.2, gate.z), 3);
async function askGate(gi) {
  const gate = world.gates[gi], def = CH.gates[gi];
  if (gate.asking) return; gate.asking = true; // nur ein Rätsel-Ablauf pro Tor (auch beim Zurücklaufen nach einem Fehler)
  try { await gateLoop(gate, gi, def); } finally { gate.asking = false; }
}
async function gateLoop(gate, gi, def) {
  player.busy = true; player.target = null; player.play('idle'); player.face(gate.x, gate.z);
  gateShot(gate);
  if (!gate.introduced) { gate.introduced = true; await CH.gateIntro(ctx, gi); }
  for (;;) {
    const q = BANK[def.pool[(gate.attempt = (gate.attempt ?? -1) + 1) % def.pool.length]];
    const res = await showRiddle(q, gate);
    if (res === 'ok') {
      audio.sfx('jingles_PIZZI01'); world.drawClock(gate, 1, false, 'ok');
      await sleep(500); audio.sfx('impactMetal_heavy_002', { vol: CH.id === 'uhrwerk' ? 1 : 0.4 }); audio.sfx('doorOpen_1', { delay: 0.1 }); world.spinGate(gate, 1);
      burst(V(gate.x, 2.2, gate.z + 0.2), { n: 70 }); cam.shake = 0.25;
      player.passed.add(gate.id); multi.event({ kind: 'pass', gate: gi });
      if (def.bridge && !world.bridge.built) { world.buildBridge(() => audio.sfx(CH.bridgeSfx || 'impactMetal_heavy_002', { vol: 0.4, rate: 1.3 })); multi.event({ kind: 'bridge' }); }
      say(react('richtig'), { wait: false });
      await sleep(900); world.drawClock(gate, 1, false);
      player.busy = false; player.target = V(gate.x, 0, gate.z - 1.6); camFollow(player);
      CH.onPassed && CH.onPassed(ctx, gi);
      return;
    }
    // falsch / Zeit
    audio.sfx('jingles_SAX02'); world.drawClock(gate, 0, false, 'bad');
    state.hearts--; hud(); multi.event({ kind: 'slap', gate: gi });
    await CH.slap(ctx, player, gi);
    await say(react(res === 'zeit' ? 'zeit' : 'falsch'));
    if (state.hearts <= 0) { await say(CH.seq.out); state.hearts = 3; hud(); }
    gateShot(gate);
    // zurück vors Tor laufen, dann neue Frage
    player.busy = false; player.target = V(gate.x, 0, gate.z + 1.25);
    await new Promise(r => (player.onArrive = r)); player.onArrive = null;
    player.busy = true; player.face(gate.x, gate.z);
  }
}

// Rätselkarte: Auswahl (A–D) oder Texteingabe mit eigener Buchstaben-Tastatur.
const KEYS = ['QWERTZUIOPÜ', 'ASDFGHJKLÖÄ', 'YXCVBNMß'];
function showRiddle(q, gate) {
  return new Promise(resolve => {
    const el = $('#riddle'), text = q.type !== 'choice';
    const order = text ? [] : q.opts.map((_, i) => i).sort(() => Math.random() - 0.5);
    const item = state.item ? `<button class="r-item">${CH.item.icon} ${CH.item.label}</button>` : '';
    const body = text
      ? `<div class="r-input"><div class="r-typed" aria-live="polite"><span class="r-caret"></span></div><div class="r-hint" hidden></div></div>
         <div class="r-keys">${KEYS.map((row, ri) => `<div class="r-row">${[...row].map(k => `<button class="r-key" data-k="${k}">${k}</button>`).join('')}${ri === 2 ? '<button class="r-key wide" data-k="⌫" aria-label="Löschen">⌫</button>' : ''}</div>`).join('')}
         <div class="r-row"><button class="r-key space" data-k=" ">Leerzeichen</button><button class="r-key ok" data-k="OK">Fertig ✓</button></div></div>`
      : `<div class="r-opts">${order.map((oi, k) => `<button class="r-opt" data-oi="${oi}" style="animation-delay:${0.15 + k * 0.07}s"><span>${'ABCD'[k]}</span>${q.opts[oi]}</button>`).join('')}</div>`;
    el.innerHTML = `<div class="r-card ${text ? 'typing' : ''}"><div class="r-tier"><b>${q.tier}</b>%<small>lösen das</small></div>
      <div class="r-q">${q.q}</div>${q.svg ? `<div class="r-svg">${q.svg}</div>` : ''}${body}${item}<div class="r-time"><i></i></div></div>`;
    el.hidden = false; requestAnimationFrame(() => el.classList.add('show'));
    audio.sfx('question_001'); riddle = { q, gate };
    const T = text ? 45 : 30, t0 = performance.now(); let teased = false, done = false, lastSec = T, typed = '';
    const bar = el.querySelector('.r-time i');
    const tick = () => {
      if (done) return;
      const left = Math.max(0, T - (performance.now() - t0) / 1000), frac = left / T;
      bar.style.width = (frac * 100) + '%'; bar.classList.toggle('urgent', left < 6);
      world.drawClock(gate, frac, true); audio.setTension(1 - frac);
      const s = Math.ceil(left); if (s !== lastSec) { lastSec = s; if (s <= 5) audio.sfx('tick_004', { vol: 0.9, rate: 1.4 }); }
      if (!teased && left < T * 0.62) { teased = true; say(react('denken'), { wait: false }); }
      if (left <= 0) return finish(null);
      requestAnimationFrame(tick);
    };
    const close = async (val, ok) => {
      await sleep(ok ? 900 : 1700);
      removeEventListener('keydown', onKey);
      el.classList.remove('show'); setTimeout(() => (el.hidden = true), 300); riddle = null;
      resolve(val == null ? 'zeit' : ok ? 'ok' : 'falsch');
    };
    const finish = async val => {
      if (done) return; done = true; audio.setTension(0);
      el.querySelectorAll('button').forEach(b => (b.disabled = true));
      if (!text) {
        if (val != null) { el.querySelector(`.r-opt[data-oi="${val}"]`).classList.add('sel'); audio.sfx('confirmation_002'); }
        await sleep(700); audio.sfx('jingles_HIT00', { vol: 0.6 }); await sleep(500);
        el.querySelectorAll('.r-opt').forEach(b => { const v = +b.dataset.oi; if (v === q.a) b.classList.add('right'); else if (v === val) b.classList.add('wrong'); });
        return close(val, val === q.a);
      }
      const ok = val != null && isCorrect(q, val), box = el.querySelector('.r-input');
      if (val != null) audio.sfx('confirmation_002');
      await sleep(600); audio.sfx('jingles_HIT00', { vol: 0.6 }); await sleep(400);
      box.classList.add(ok ? 'right' : 'wrong');
      if (!ok) box.insertAdjacentHTML('beforeend', `<div class="r-sol">Richtig wäre: <b>${esc(String(q.a))}</b></div>`);
      return close(val, ok);
    };
    if (!text) el.querySelectorAll('.r-opt').forEach(b => (b.onclick = () => { audio.unlock(); finish(+b.dataset.oi); }));
    const show = () => { el.querySelector('.r-typed').innerHTML = `${esc(typed)}<span class="r-caret"></span>`; };
    const press = k => {
      if (done) return;
      if (k === 'OK') { if (typed.trim()) finish(typed); return; }
      if (k === '⌫') typed = typed.slice(0, -1); else if (typed.length < 24) typed += k;
      audio.sfx('select_002', { vol: 0.35, rate: 1.2 + Math.random() * 0.3 }); show();
    };
    const onKey = e => {
      if (!text || done) return;
      if (e.key === 'Enter') press('OK'); else if (e.key === 'Backspace') press('⌫');
      else if (e.key === ' ') press(' ');
      else if (/^[a-zäöüß]$/i.test(e.key)) press(e.key === 'ß' ? 'ß' : e.key.toUpperCase());
      else return;
      e.preventDefault();
    };
    if (text) { el.querySelectorAll('.r-key').forEach(b => (b.onclick = () => { audio.unlock(); press(b.dataset.k); })); addEventListener('keydown', onKey); }
    const it = el.querySelector('.r-item');
    if (it) it.onclick = () => {
      state.item = null; hud(); it.remove(); audio.sfx('powerUp2'); say(react(CH.item.react), { wait: false });
      if (text) { const a = String(q.a), h = el.querySelector('.r-hint'); h.hidden = false; h.textContent = `${a[0]} ${'_ '.repeat(a.length - 1).trim()}  (${a.length} Buchstaben)`; }
      else { const wrong = [...el.querySelectorAll('.r-opt')].filter(b => +b.dataset.oi !== q.a); const b = pick(wrong); b.classList.add('gone'); b.disabled = true; }
    };
    tick();
  });
}

// ---------- Computer-Rivale „Flitz“ ----------
async function rivalRun() {
  rival.speed = 2.7;
  for (const step of CH.rivalPath) {
    if (state.over) return;
    if (typeof step === 'string') {
      const gi = CH.gates.findIndex(g => g.id === step), gate = world.gates[gi], def = CH.gates[gi];
      for (;;) {
        await sleep((4500 + Math.random() * 7000) * (CH.rivalPace || 1) + (rival.passed.size > player.passed.size ? 9000 : 0)); if (state.over) return;
        while (rival.passed.size > player.passed.size + 1 && !state.over) await sleep(1000);
        if (Math.random() < Math.min(0.95, 0.38 + 0.6 * def.p)) {
          world.spinGate(gate, -1); audio.sfx('impactMetal_heavy_002', { vol: 0.35 }); rival.passed.add(gate.id);
          if (def.bridge && !world.bridge.built) world.buildBridge();
          if (!riddle && Math.random() < 0.6) say(react('flitzRichtig'), { wait: false });
          rival.target = V(gate.x, 0, gate.z - 1.6); await arrive(rival); break;
        }
        rival.busy = true; await CH.slap(ctx, rival, gi); rival.busy = false;
        if (!riddle) say(react('flitzFalsch'), { wait: false });
        rival.target = V(gate.x + 0.6, 0, gate.z + 1.3); await arrive(rival);
      }
    } else { rival.target = V(step[0] + 0.6, 0, step[1]); await arrive(rival); }
  }
  if (!state.over) finishRace(rival);
}
function arrive(a) { return new Promise(r => { a.onArrive = () => { a.onArrive = null; r(); }; if (!a.target) r(); }); }

// ---------- Ablauf ----------
let world, audio, models, player, rival, uhu, rocco, clock = new THREE.Clock(), heldCrystal = null;
function showRocco(at) { rocco.visible = true; rocco.position.copy(at); rocco.pop = 1; burst(at.clone().add(V(0, 0.6, 0)), { n: 30, colors: ['#ffffff', '#c7c3f5'], up: 2, speed: 2 }); audio.sfx('phaseJump1', { vol: 0.5 }); }
function hideRocco() { burst(rocco.position.clone().add(V(0, 0.7, 0)), { n: 30, colors: ['#ffffff', '#c7c3f5'], up: 2, speed: 2 }); rocco.visible = false; audio.sfx('pepSound1', { vol: 0.5 }); }

async function intro() {
  $('#title').classList.add('gone'); state.running = true;
  audio.startMusic(CH.music);
  const P = world.portal, S = CH.seq;
  // Rocco springt mit dem Kristall aus dem Portal und fliegt zu seinem Versteck
  camShot(V(P.x + 3, 2.6, P.z + 5.4), V(P.x, 1.4, P.z), 2);
  await sleep(600);
  showRocco(V(P.x + 1.7, 0, P.z - 0.2)); world.crystal.mesh.visible = false;
  const held = world.crystal.mesh.clone(); held.scale.multiplyScalar(0.5); scene.add(held); heldCrystal = held;
  for (const l of S.intro) await say(l);
  say(S.fly, { wait: false }); await sleep(1400);
  const from = rocco.position.clone(), to = V(...CH.fly);
  audio.sfx('highUp');
  await tween(4200, k => { const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
    rocco.position.lerpVectors(from, to, e); rocco.position.y += Math.sin(k * Math.PI) * 6;
    camShot(rocco.position.clone().add(V(6, 3, 8)), rocco.position, 1.6); });
  const C = world.crystal;
  audio.sfx('impactBell_heavy_001'); C.mesh.visible = true; scene.remove(held); heldCrystal = null;
  burst(V(C.x, C.y, C.z), { n: 60, colors: ['#56e4ff', '#ffffff'] });
  camShot(V(C.x + 4, 4, C.z + 6), V(C.x, 1.4, C.z), 2); hideRocco();
  await sleep(1300);
  // zurück zum Portal: der Lehrling springt heraus
  camShot(V(P.x + 3.5, 3.2, P.z + 6.4), V(P.x, 1, P.z - 1.1), 2.5);
  for (const l of S.afterFly) await say(l);
  player.obj.visible = true; player.pos.set(P.x, 1.5, P.z - 0.2); audio.sfx('phaseJump1'); burst(V(P.x, 1.3, P.z), { n: 40, colors: ['#c39bff', '#ffffff'] });
  await player.launch(6, V(P.x, 0, P.z - 2)); audio.sfx('impactSoft_medium_001'); player.play('emote-yes', { once: true });
  camFollow(player, 2.5);
  await say(S.land);
  if (multi.active) {
    for (const r of Object.values(remotes)) r.obj.visible = true;
    for (const l of S.multi) await say(l);
  } else {
    rival.obj.visible = true; rival.pos.set(P.x, 1.5, P.z - 0.2); audio.sfx('phaseJump1', { rate: 1.2 }); burst(V(P.x, 1.3, P.z), { n: 40, colors: ['#ff7ab6', '#ffffff'] });
    await rival.launch(6, V(P.x + 1.1, 0, P.z - 2.2)); rival.play('emote-yes', { once: true });
    for (const l of S.solo) await say(l);
    rival.play('idle');
  }
  player.play('idle');
  state.start = performance.now(); state.playing = true;
  $('#hud').hidden = false; hud(); $('#hint').hidden = false;
  if (!multi.active) rivalRun();
}

function finishRace(winner) {
  if (state.over) return; state.over = true;
  world.crystal.taken = true;
  if (winner === player) victory(); else defeat(winner);
}
async function victory() {
  progress.win(CH.id);
  const C = world.crystal;
  player.busy = true; player.target = null; player.play('emote-yes', { once: true });
  audio.sfx('jingles_PIZZI03'); audio.sfx('powerUp2', { delay: 0.3 });
  camShot(V(...CH.endShot[0]), V(...CH.endShot[1]), 2.4);
  for (let i = 0; i < 6; i++) setTimeout(() => { burst(V(C.x + (Math.random() - 0.5) * 4, 2 + Math.random() * 2, C.z + (Math.random() - 0.5) * 3), { n: 60, speed: 5, up: 6 }); audio.sfx('pepSound1', { vol: 0.5, rate: 0.8 + Math.random() * 0.6 }); }, i * 380);
  C.mesh.position.y = C.y + 0.8; showRocco(V(...CH.roccoEnd));
  for (const l of CH.seq.win) await say(l);
  hideRocco(); endCard(true);
}
async function defeat(winner) {
  player.busy = true; (winner || rival).play('emote-yes', { once: true }); audio.sfx('jingles_SAX08'); state.winnerName = winner && winner.name;
  camShot(V(...CH.endShot[0]), V(...CH.endShot[1]), 2.4);
  showRocco(V(...CH.roccoEnd));
  for (const l of CH.seq.lose) await say(l);
  hideRocco(); endCard(false);
}
function endCard(won) {
  const s = Math.round((performance.now() - state.start) / 1000), next = CHAPTERS[CHAPTERS.indexOf(CH) + 1];
  $('#end').innerHTML = `<div class="end-card"><h2>${won ? `Kristall ${CH.nr} von 19!` : `${esc(state.winnerName || 'Flitz')} war schneller`}</h2>
    <p>${won ? CH.endText.win : CH.endText.lose}</p>
    <div class="end-stats"><div><b>${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}</b><small>Zeit</small></div><div><b>${state.coins}</b><small>Münzen</small></div><div><b>${progress.count()}</b><small>Kristalle</small></div></div>
    <div class="end-btns">${won && next ? `<a class="btn-go" href="?k=${next.id}">Weiter: ${esc(next.title)}</a>` : ''}
    <a class="${won && next ? 'btn-alt' : 'btn-go'}" href="?k=${CH.id}">Nochmal spielen</a></div></div>`;
  $('#end').hidden = false; $('#hint').hidden = true;
}

// ---------- Eingabe: tippen = hinlaufen ----------
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
canvas.addEventListener('pointerdown', e => {
  audio.unlock(); if (skipLine) { skipLine(); return; }
  if (!state.playing || player.busy || player.air) return;
  ndc.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObjects(world.ground, false)[0]; if (!hit) return;
  const p = hit.point; player.target = V(p.x, 0, p.z); player.onArrive = null;
  marker.position.set(p.x, 0.03, p.z); marker.scale.setScalar(0.2); marker.visible = true; marker.userData.t = 0;
  audio.sfx('select_002', { vol: 0.5 }); $('#hint').hidden = true;
});
const marker = new THREE.Mesh(new THREE.RingGeometry(0.28, 0.4, 32), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, depthWrite: false }));
marker.rotation.x = -Math.PI / 2; marker.visible = false; scene.add(marker);

// ---------- Spiel-Schleife ----------
function triggers() {
  if (!state.playing || state.over) return;
  for (let gi = 0; gi < world.gates.length; gi++) { const g = world.gates[gi];
    if (!player.passed.has(g.id) && !g.asking && !player.busy && !player.air && Math.hypot(player.pos.x - g.x, player.pos.z - (g.z + 1.25)) < 1.1) { askGate(gi); return; } }
  for (const c of world.coins) if (c.visible && player.pos.distanceTo(c.position) < 0.9) { c.visible = false; state.coins++; hud(); audio.sfx('handleCoins', { vol: 0.5 }); burst(c.position, { n: 14, colors: ['#ffc940'], up: 3, speed: 1.5, life: 0.6 }); }
  if (!state.chestOpened && Math.hypot(player.pos.x - CH.chest.x, player.pos.z - CH.chest.z) < 1.5 && !player.air) openChest();
  CH.triggers && CH.triggers(ctx);
  const C = world.crystal;
  if (Math.hypot(player.pos.x - C.x, player.pos.z - C.z) < 1.4) {
    if (multi.active) { if (!state.claimed) { state.claimed = true; multi.event({ kind: 'claim' }); } } else finishRace(player);
  }
}
async function openChest() {
  const T = CH.chest;
  state.chestOpened = true; player.busy = true; player.target = null; player.play('pick-up', { once: true });
  audio.sfx('creak1'); audio.sfx('jingles_NES03', { delay: 0.4 }); burst(V(T.x, 0.8, T.z), { n: 60, colors: ['#ffc940', '#ffffff'] });
  world.chest.scale.setScalar(2.6); setTimeout(() => world.chest.scale.setScalar(2.2), 160);
  state.item = CH.item.id; hud(); $('#item').classList.add('pop'); multi.event({ kind: 'chest' });
  camShot(V(...T.shot[0]), V(...T.shot[1]), 3);
  await say(T.lines[0]); showRocco(V(...T.rocco)); await say(T.lines[1]); hideRocco();
  player.busy = false; player.play('idle'); camFollow(player);
}

function loop() {
  const dt = Math.min(0.05, clock.getDelta()), t = clock.elapsedTime;
  world.update(dt, t);
  if (player) { player.update(dt); if (!multi.active) rival.update(dt); updateRemotes(dt); reportMe(); }
  if (uhu && player) { // Uhu fliegt als Begleiter neben dem Lehrling
    const p = player.pos; uhu.position.lerp(V(p.x - 0.9, Math.max(0, p.y) + 1.35 + Math.sin(t * 2.6) * 0.12, p.z + 0.9), Math.min(1, dt * 3)); uhu.visible = !!state.playing && !state.over;
    uhu.bounce = Math.max(0, (uhu.bounce || 0) - dt * 3); uhu.scale.set(0.8 * (1 + uhu.bounce * 0.08), 1 + uhu.bounce * 0.12, 1);
  }
  if (rocco) { rocco.pop = Math.max(0, (rocco.pop || 0) - dt * 2.5); rocco.bounce = Math.max(0, (rocco.bounce || 0) - dt * 3);
    const s = 1.7 * (1 + rocco.pop * 0.5 * Math.sin(rocco.pop * 12)); rocco.scale.set(s * 0.8, s * (1 + rocco.bounce * 0.1), 1);
    if (heldCrystal) heldCrystal.position.copy(rocco.position).add(V(0.45, 1.0, 0.1)); }
  CH.update && CH.update(ctx, dt, t);
  if (marker.visible) { marker.userData.t += dt; marker.scale.setScalar(0.2 + marker.userData.t * 2.2); marker.material.opacity = Math.max(0, 1 - marker.userData.t * 2.2); if (marker.userData.t > 0.5) marker.visible = false; }
  world.portal.power = state.playing ? Math.max(0.35, world.portal.power - dt * 0.2) : 1;
  updateBursts(dt); triggers(); updateCamera(dt); updateTalk();
  composer.render();
  requestAnimationFrame(loop);
}

// ---------- Schnittstelle für die Kapitel ----------
const ctx = {
  THREE, V, scene, cam, state, sleep, tween, pick, burst, stars, say, react, camShot, camFollow, showRocco, hideRocco, hud, ticker: m => ticker(m), talkingNow,
  get world() { return world; }, get audio() { return audio; }, get player() { return player; }, get rival() { return rival; }, get rocco() { return rocco; }, get uhu() { return uhu; },
  get multi() { return multi; }, get riddle() { return riddle; },
};

// ---------- Mehrspieler ----------
const remotes = {};
const multi = new Multi({
  onStart: async (slots, chapter) => {
    if (chapter && chapter !== CH.id) await loadChapter(chapter);
    const mine = slots[multi.id]; const slot = mine ? mine.slot : 0;
    if (slot) { scene.remove(player.obj); player = new Actor(models, AVATARS[slot % AVATARS.length], 'Du', COLORS[slot % COLORS.length]); player.reset(); }
    syncRemotes(slots); intro();
  },
  onChapter: id => { if (id !== CH.id) loadChapter(id); },
  onPlayers: slots => syncRemotes(slots),
  onEvent: ev => {
    const who = multi.name(ev.from), def = CH.gates[ev.gate];
    if (ev.kind === 'pass') { world.spinGate(world.gates[ev.gate], -1); audio.sfx('impactMetal_heavy_002', { vol: 0.3 }); ticker(`🚪 ${who} ist durch Tor ${ev.gate + 1}!`); }
    if (ev.kind === 'slap') { ticker(def.ticker(who)); if (!riddle && Math.random() < 0.5) say(react('falsch'), { wait: false }); }
    if (ev.kind === 'bridge' && !world.bridge.built) world.buildBridge(() => audio.sfx(CH.bridgeSfx || 'impactMetal_heavy_002', { vol: 0.3, rate: 1.3 }));
    if (ev.kind === 'chest') ticker(`${CH.item.icon} ${who} hat ${CH.item.found} gefunden.`);
  },
  onWinner: id => { if (id === multi.id) finishRace(player); else { const r = remotes[id]; finishRace(r || { name: multi.name(id), play() {} }); } },
  onHostLost: () => { ticker('Der Gastgeber ist weg – Spiel beendet.'); if (!state.over) { state.over = true; state.winnerName = null; endCard(false); $('#end h2').textContent = 'Verbindung beendet'; } },
  toast: m => ticker(m),
});
function syncRemotes(slots) {
  if (!models || !world) return;
  for (const [id, p] of Object.entries(slots)) {
    if (id === multi.id || !p || !p.name) continue;
    let r = remotes[id];
    if (!r) { const slot = p.slot ?? 1; r = remotes[id] = new Actor(models, AVATARS[slot % AVATARS.length], p.name, COLORS[slot % COLORS.length]); r.obj.visible = !!state.playing; r.net = {}; }
    if (p.x != null) r.net = p;
  }
  for (const id of Object.keys(remotes)) if (!slots[id]) { scene.remove(remotes[id].obj); delete remotes[id]; }
}
function updateRemotes(dt) {
  for (const r of Object.values(remotes)) {
    r.mixer.update(dt); const n = r.net; if (n.x == null) continue;
    const k = Math.min(1, dt * 10);
    r.pos.x += (n.x - r.pos.x) * k; r.pos.y += ((n.y || 0) - r.pos.y) * k; r.pos.z += (n.z - r.pos.z) * k;
    r.obj.rotation.y = lerpAngle(r.obj.rotation.y, n.ry || 0, k);
    if (n.anim && n.anim !== r.animName) r.play(n.anim, { once: ['jump', 'die', 'pick-up', 'emote-yes'].includes(n.anim) });
    if (state.playing) r.obj.visible = true;
  }
}
let lastReport = 0;
function reportMe() {
  if (!multi.active || !state.playing) return; const t = performance.now(); if (t - lastReport < 90) return; lastReport = t;
  const p = player.pos; multi.report({ x: +p.x.toFixed(2), y: +p.y.toFixed(2), z: +p.z.toFixed(2), ry: +player.obj.rotation.y.toFixed(2), anim: player.animName || 'idle', hearts: state.hearts });
}
function ticker(msg) { const el = $('#ticker'); const d = document.createElement('div'); d.className = 'tk'; d.textContent = msg; el.prepend(d); setTimeout(() => d.classList.add('out'), 3800); setTimeout(() => d.remove(), 4400); }

// ---------- Kapitel laden ----------
let loading = null;
async function loadChapter(id) {
  const next = CHAPTERS.find(c => c.id === id) || CHAPTERS[0];
  if (world && next === CH && !loading) return;
  const job = (async () => {
    const bar = $('#load-bar'), names = [...next.models, 'coin-gold', 'block-grass-large'];
    let done = 0; await models.load(names, () => (bar.style.width = (++done / names.length * 100) + '%'));
    if (world) world.dispose();
    CH = next; resetState();
    world = new World(scene, models, CH.theme); CH.build(world);
    for (const a of [player, rival]) if (a) a.reset(world.portal.x, world.portal.z - 2);
    CH.setup && CH.setup(ctx);
    renderTitle();
  })();
  loading = job; await job; loading = null;
}
function renderTitle() {
  const got = progress.get();
  $('#chapter-name').textContent = `Kapitel ${CH.nr} · ${CH.title}`;
  $('#chapters').innerHTML = CHAPTERS.map(c => `<button class="ch-card ${c === CH ? 'on' : ''}" data-ch="${c.id}"><b>${c.nr}</b><span>${esc(c.title)}</span><i class="${got[c.id] ? 'got' : ''}" title="${got[c.id] ? 'Kristall geholt' : 'Kristall fehlt noch'}"></i></button>`).join('')
    + `<div class="ch-count">${progress.count()} von 19 Kristallen</div>`;
  document.querySelectorAll('.ch-card').forEach(b => (b.onclick = async () => {
    audio.unlock(); audio.sfx('select_002');
    if (multi.active) return;
    await loadChapter(b.dataset.ch);
    history.replaceState(null, '', '?k=' + CH.id);
  }));
}

// ---------- Start ----------
async function boot() {
  audio = new Audio();
  models = new Models();
  const want = new URLSearchParams(location.search).get('k');
  const first = CHAPTERS.find(c => c.id === want) || CHAPTERS[0];
  $('#loading-text').textContent = first.loading;
  await models.load(['mini/character-female-b', 'mini/character-male-f']);
  player = new Actor(models, 'mini/character-female-b', 'Du', '#ffc940'); player.obj.visible = false;
  rival = new Actor(models, 'mini/character-male-f', 'Flitz', '#ff7ab6'); rival.obj.visible = false;
  Cast.use('wette');
  uhu = svgSprite(Cast.team().a.draw('happy'), 1.0); uhu.visible = false; scene.add(uhu);
  rocco = svgSprite(Cast.team().b.draw('smug'), 1.7); rocco.visible = false; scene.add(rocco);
  await loadChapter(first.id);
  $('#loading').classList.add('gone');
  loop();
}
$('#btn-solo').onclick = async () => { audio.unlock(); audio.sfx('confirmation_002'); await loading; intro(); };
const myName = () => ($('#name').value.trim() || 'Spieler').slice(0, 14);
$('#btn-host').onclick = async () => { audio.unlock(); audio.sfx('confirmation_002'); await loading; try { localStorage.setItem('rw:name', myName()); } catch {} $('#title').classList.add('gone'); multi.host(myName(), CH.id); };
$('#btn-join').onclick = () => { audio.unlock(); const code = $('#code').value.trim().toUpperCase(); if (code.length < 4) { $('#code').focus(); return; } try { localStorage.setItem('rw:name', myName()); } catch {} $('#title').classList.add('gone'); multi.join(code, myName()); };
try { $('#name').value = localStorage.getItem('rw:name') || ''; } catch {}
const joinCode = new URLSearchParams(location.search).get('join'); if (joinCode) { $('#code').value = joinCode.toUpperCase(); $('#join-row').classList.add('focus'); }
$('#talk').onclick = () => skipLine && skipLine();
window.__welten = { remotes, get uhu() { return uhu; }, get rocco() { return rocco; }, get riddle() { return riddle; }, get state() { return state; }, get player() { return player; }, get rival() { return rival; }, get world() { return world; },
  get chapter() { return CH; }, loadChapter, BANK, isCorrect, progress, ctx };
boot().catch(e => { $('#loading').innerHTML = `<p style="color:#fff;padding:20px">Fehler beim Laden: ${e.message}</p>`; console.error(e); });
