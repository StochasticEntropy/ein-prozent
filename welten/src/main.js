// Die Rätselwelten – Kapitel 1: Die Uhrwerk-Insel (Prototyp, allein gegen Computer-Rivale „Flitz“).
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
import { LINES, REACT, SPEAKERS, GATES } from './script.js';
import { Multi, AVATARS, COLORS } from './multi.js';

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pick = a => a[Math.floor(Math.random() * a.length)];
const react = key => { const i = Math.floor(Math.random() * REACT[key].length); return { line: REACT[key][i], id: `${key}${i}` }; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const lerp = (a, b, k) => a + (b - a) * k;
const BANK = Object.fromEntries((window.QUIZ_BANK || []).map(q => [q.id, window.Difficulty ? window.Difficulty.annotate({ ...q }) : q]));
const MOBILE = matchMedia('(pointer: coarse)').matches;

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
  async load(names) {
    await Promise.all(names.map(n => new Promise((res, rej) => this.loader.load(`assets/models/${n}.glb`, g => { this.cache[n] = g; res(); }, undefined, rej))));
  }
  get(n) { return SkeletonUtils.clone(this.cache[n].scene); }
  anims(n) { return this.cache[n].animations; }
}

// ---------- Figuren (Spieler, Rivale) ----------
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
  blockers() { return GATES.map((g, i) => world.gates[i]).filter(g => !this.passed.has(g.id)).map(g => g.z); }
  update(dt) {
    this.mixer.update(dt);
    if (this.air) {
      this.vy -= 22 * dt; this.pos.y += this.vy * dt;
      if (this.flyTo) { this.pos.x = lerp(this.pos.x, this.flyTo.x, Math.min(1, dt * 1.6)); this.pos.z = lerp(this.pos.z, this.flyTo.z, Math.min(1, dt * 1.6)); }
      if (this.pos.y <= 0 && this.vy < 0) { this.pos.y = 0; this.air = false; this.vy = 0; this.onLand && this.onLand(); this.onLand = null; }
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
  launch(vy, to) { this.air = true; this.vy = vy; this.flyTo = to; this.play('jump', { once: true }); return new Promise(r => (this.onLand = r)); }
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
function burst(pos, { n = 40, colors = ['#ffc940', '#2fe39f', '#56e4ff', '#ff7ab6'], speed = 4, up = 4, life = 1.2, size = 0.14 } = {}) {
  const g = new THREE.BufferGeometry(), p = new Float32Array(n * 3), c = new Float32Array(n * 3), v = [];
  const col = new THREE.Color();
  for (let i = 0; i < n; i++) { p.set([pos.x, pos.y, pos.z], i * 3); col.set(pick(colors)); c.set([col.r, col.g, col.b], i * 3);
    const a = Math.random() * Math.PI * 2, s = speed * (0.4 + Math.random()); v.push([Math.cos(a) * s, up * (0.5 + Math.random()), Math.sin(a) * s]); }
  g.setAttribute('position', new THREE.BufferAttribute(p, 3)); g.setAttribute('color', new THREE.BufferAttribute(c, 3));
  const m = new THREE.PointsMaterial({ size, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending });
  const pts = new THREE.Points(g, m); scene.add(pts); bursts.push({ pts, v, t: 0, life });
}
function updateBursts(dt) {
  for (let i = bursts.length - 1; i >= 0; i--) { const b = bursts[i]; b.t += dt; const a = b.pts.geometry.attributes.position;
    for (let k = 0; k < b.v.length; k++) { b.v[k][1] -= 9 * dt; a.array[k * 3] += b.v[k][0] * dt; a.array[k * 3 + 1] += b.v[k][1] * dt; a.array[k * 3 + 2] += b.v[k][2] * dt; }
    a.needsUpdate = true; b.pts.material.opacity = Math.max(0, 1 - b.t / b.life);
    if (b.t > b.life) { scene.remove(b.pts); b.pts.geometry.dispose(); bursts.splice(i, 1); } }
}

// ---------- Kamera ----------
const cam = { mode: 'orbit', pos: new THREE.Vector3(14, 12, 14), look: new THREE.Vector3(0, 0, -16), wantPos: new THREE.Vector3(), wantLook: new THREE.Vector3(), k: 2.2, t: 0, shake: 0 };
function camFollow(a, k = 3) { cam.mode = 'follow'; cam.subject = a; cam.k = k; }
function camShot(pos, look, k = 2.4) { cam.mode = 'shot'; cam.wantPos.copy(pos); cam.wantLook.copy(look); cam.k = k; }
function updateCamera(dt) {
  cam.t += dt;
  if (cam.mode === 'orbit') { const r = 26; cam.wantPos.set(Math.sin(cam.t * 0.12) * r, 13, -16 + Math.cos(cam.t * 0.12) * r); cam.wantLook.set(0, -1, -17); }
  else if (cam.mode === 'follow') { const p = cam.subject.pos; const portrait = innerWidth / innerHeight < 0.8;
    cam.wantPos.set(p.x + 1.2, p.y + (portrait ? 5.6 : 4.0), p.z + (portrait ? 7.0 : 5.4)); cam.wantLook.set(p.x, p.y + 0.8, p.z - 1.8); }
  const k = 1 - Math.exp(-cam.k * dt);
  cam.pos.lerp(cam.wantPos, k); cam.look.lerp(cam.wantLook, k);
  camera.position.copy(cam.pos);
  if (cam.shake > 0) { cam.shake = Math.max(0, cam.shake - dt); camera.position.x += (Math.random() - 0.5) * cam.shake * 0.6; camera.position.y += (Math.random() - 0.5) * cam.shake * 0.6; }
  camera.lookAt(cam.look);
  world.sun.position.set(cam.look.x + 12, 22, cam.look.z + 10); world.sun.target.position.copy(cam.look);
}

// ---------- Sprecher (HUD mit Comic-Figur + Untertitel, Stimme oder Plappern) ----------
let skipLine = null;
async function say(idOrLine, { wait = true } = {}) {
  const [who, mood, text] = typeof idOrLine === 'string' ? LINES[idOrLine] : idOrLine.line || idOrLine;
  const id = typeof idOrLine === 'string' ? idOrLine : idOrLine.id || null;
  const sp = SPEAKERS[who];
  const panel = $('#talk'); panel.dataset.who = who;
  $('#talk-name').textContent = sp.name;
  $('#talk-face').innerHTML = who === 'uhu' ? Cast.team().a.draw(mood) : who === 'rocco' ? Cast.team().b.draw(mood) : `<div class="npc-face ${who}"></div>`;
  $('#talk-text').textContent = text;
  panel.classList.remove('show'); void panel.offsetWidth; panel.classList.add('show');
  if (who === 'rocco' && rocco.visible) { rocco.setSvg(Cast.team().b.draw(mood)); rocco.bounce = 1; }
  if (who === 'uhu') { uhu.setSvg(Cast.team().a.draw(mood)); uhu.bounce = 1; }
  let dur = id ? await audio.voice(id) : null;
  if (dur == null) { dur = Math.max(1.6, text.length * 0.058 + 0.5); if (sp.babble) audio.babble(text, sp.babble); }
  speaking = { who, until: performance.now() + dur * 1000, voiced: id && audio.voiceBuf[id] };
  if (!wait) return;
  await new Promise(r => { const t = setTimeout(r, dur * 1000 + 250); skipLine = () => { clearTimeout(t); audio.current && audio.current.stop && audio.current.voiced; r(); }; });
  skipLine = null;
}
let speaking = null;
function updateTalk() {
  const face = $('#talk-face');
  const on = speaking && performance.now() < speaking.until && (!speaking.voiced || audio.level() > 0.06);
  face.classList.toggle('talking', !!on);
  if (speaking && performance.now() > speaking.until + 1800 && !riddle) { $('#talk').classList.remove('show'); speaking = null; }
}
function hideTalk() { $('#talk').classList.remove('show'); }

// ---------- HUD ----------
const state = { hearts: 3, coins: 0, item: null, start: 0, over: false };
function hud() {
  $('#hearts').innerHTML = [0, 1, 2].map(i => `<span class="heart ${i < state.hearts ? '' : 'lost'}">❤</span>`).join('');
  $('#coins').textContent = state.coins;
  $('#item').hidden = !state.item;
}

// ---------- Rätsel am Tor ----------
let riddle = null;
async function askGate(gi) {
  const gate = world.gates[gi], def = GATES[gi];
  player.busy = true; player.target = null; player.play('idle'); player.face(gate.x, gate.z);
  camShot(new THREE.Vector3(gate.x + 2.6, 3.2, gate.z + 5.2), new THREE.Vector3(gate.x, 2.2, gate.z), 3);
  if (!gate.introduced) {
    gate.introduced = true;
    if (gi === 0) { kuckuck.pop = 4; audio.sfx('impactBell_heavy_001', { vol: 0.6 }); await say('kuckuck1'); await say('kuckuck2'); }
    if (gi === 1) { await say('tor2a'); showRocco(new THREE.Vector3(1.9, 0.2, gate.z - 0.4)); await say('tor2b'); }
    if (gi === 2) { showRocco(new THREE.Vector3(0, 3.15, gate.z)); await say('tor3a'); await say('tor3b'); }
  }
  for (;;) {
    const q = BANK[def.pool[(gate.attempt = (gate.attempt ?? -1) + 1) % def.pool.length]];
    const res = await showRiddle(q, gate);
    if (res === 'ok') {
      audio.sfx('jingles_PIZZI01'); world.drawClock(gate, 1, false, 'ok');
      await sleep(500); audio.sfx('impactMetal_heavy_002'); audio.sfx('doorOpen_1', { delay: 0.1 }); world.spinGate(gate, 1);
      burst(new THREE.Vector3(gate.x, 2.2, gate.z + 0.2), { n: 70 }); cam.shake = 0.25;
      player.passed.add(gate.id); multi.event({ kind: 'pass', gate: gi });
      if (gi === 1 && !world.bridge.built) { world.buildBridge(() => audio.sfx('impactMetal_heavy_002', { vol: 0.4, rate: 1.3 })); multi.event({ kind: 'bridge' }); }
      say(react('richtig'), { wait: false });
      await sleep(900); world.drawClock(gate, 1, false);
      player.busy = false; player.target = new THREE.Vector3(gate.x, 0, gate.z - 1.6); camFollow(player);
      if (gi === 2) hideRocco();
      return;
    }
    // falsch / Zeit
    audio.sfx('jingles_SAX02'); world.drawClock(gate, 0, false, 'bad');
    state.hearts--; hud(); multi.event({ kind: 'slap', gate: gi });
    await slapstick(player, gi);
    await say(react(res === 'zeit' ? 'zeit' : 'falsch'));
    if (state.hearts <= 0) { await say('ausgeschieden'); state.hearts = 3; hud(); }
    camShot(new THREE.Vector3(gate.x + 2.6, 3.2, gate.z + 5.2), new THREE.Vector3(gate.x, 2.2, gate.z), 3);
    // zurück vors Tor laufen, dann neue Frage
    player.busy = false; player.target = new THREE.Vector3(gate.x, 0, gate.z + 1.25);
    await new Promise(r => (player.onArrive = r)); player.onArrive = null;
    player.busy = true; player.face(gate.x, gate.z);
  }
}

async function slapstick(a, gi) {
  const gate = world.gates[gi];
  if (gi === 0) { // Kuckuck schießt raus und haut drauf
    kuckuck.pop = 1.6; audio.sfx('impactPunch_heavy_001', { delay: 0.2 }); await sleep(250);
    a.play('die', { once: true }); cam.shake = 0.4; stars(a); await sleep(1300); a.play('idle');
    await a.launch(5, new THREE.Vector3(gate.x, 0, gate.z + 3.4)); a.play('idle');
  } else if (gi === 1) { // Katapult zurück auf Los
    audio.sfx('phaseJump1'); audio.sfx('zap1', { vol: 0.5 }); cam.shake = 0.3;
    const land = a.launch(13, new THREE.Vector3(0, 0, -10)); a.play('fall'); await sleep(250); audio.sfx('lowDown', { vol: 0.8 });
    await land; audio.sfx('impactSoft_medium_001'); a.play('die', { once: true }); stars(a); await sleep(1200); a.play('idle');
  } else { // Stacheln aus dem Boden
    const sp = world.place('trap-spikes', a.pos.x, -0.3, a.pos.z, 2); audio.sfx('spaceTrash1', { vol: 0.6 });
    const t0 = performance.now(); const rise = () => { const k = Math.min(1, (performance.now() - t0) / 160); sp.position.y = -0.3 + k * 0.3; if (k < 1) requestAnimationFrame(rise); }; rise();
    await a.launch(8, new THREE.Vector3(a.pos.x, 0, a.pos.z + 2.4)); audio.sfx('impactSoft_medium_001'); stars(a);
    setTimeout(() => world.root.remove(sp), 1500);
  }
}
function stars(a) {
  const g = new THREE.Group(); for (let i = 0; i < 4; i++) { const s = new THREE.Mesh(new THREE.OctahedronGeometry(0.09), new THREE.MeshBasicMaterial({ color: '#ffe066' })); s.userData.a = i * Math.PI / 2; g.add(s); }
  a.obj.add(g); g.position.y = 1.35 / 1.6; const t0 = performance.now();
  const spin = () => { const t = (performance.now() - t0) / 1000; g.children.forEach(s => { const ang = s.userData.a + t * 5; s.position.set(Math.cos(ang) * 0.35, Math.sin(t * 8 + s.userData.a) * 0.04, Math.sin(ang) * 0.35); }); if (t < 2) requestAnimationFrame(spin); else a.obj.remove(g); };
  spin();
}

function showRiddle(q, gate) {
  return new Promise(resolve => {
    const el = $('#riddle'); const order = q.opts.map((_, i) => i).sort(() => Math.random() - 0.5);
    el.innerHTML = `<div class="r-card"><div class="r-tier"><b>${q.tier}</b>%<small>lösen das</small></div>
      <div class="r-q">${q.q}</div>${q.svg ? `<div class="r-svg">${q.svg}</div>` : ''}
      <div class="r-opts">${order.map((oi, k) => `<button class="r-opt" data-oi="${oi}" style="animation-delay:${0.15 + k * 0.07}s"><span>${'ABCD'[k]}</span>${q.opts[oi]}</button>`).join('')}</div>
      ${state.item === 'fernglas' ? '<button class="r-item">🔭 Fernglas benutzen</button>' : ''}
      <div class="r-time"><i></i></div></div>`;
    el.hidden = false; requestAnimationFrame(() => el.classList.add('show'));
    audio.sfx('question_001'); riddle = { q };
    const T = 30, t0 = performance.now(); let teased = false, done = false, lastSec = T;
    const bar = el.querySelector('.r-time i');
    const tick = () => {
      if (done) return;
      const left = Math.max(0, T - (performance.now() - t0) / 1000), frac = left / T;
      bar.style.width = (frac * 100) + '%'; bar.classList.toggle('urgent', left < 6);
      world.drawClock(gate, frac, true); audio.setTension(1 - frac);
      const s = Math.ceil(left); if (s !== lastSec) { lastSec = s; if (s <= 5) audio.sfx('tick_004', { vol: 0.9, rate: 1.4 }); }
      if (!teased && left < 19) { teased = true; say(react('denken'), { wait: false }); }
      if (left <= 0) return finish(null);
      requestAnimationFrame(tick);
    };
    const finish = async oi => {
      if (done) return; done = true; audio.setTension(0);
      el.querySelectorAll('.r-opt').forEach(b => b.disabled = true);
      if (oi != null) { const b = el.querySelector(`.r-opt[data-oi="${oi}"]`); b.classList.add('sel'); audio.sfx('confirmation_002'); }
      await sleep(700); audio.sfx('jingles_HIT00', { vol: 0.6 }); await sleep(500);
      el.querySelectorAll('.r-opt').forEach(b => { const v = +b.dataset.oi; if (v === q.a) b.classList.add('right'); else if (v === oi) b.classList.add('wrong'); });
      await sleep(oi === q.a ? 900 : 1600);
      el.classList.remove('show'); setTimeout(() => (el.hidden = true), 300); riddle = null;
      resolve(oi == null ? 'zeit' : oi === q.a ? 'ok' : 'falsch');
    };
    el.querySelectorAll('.r-opt').forEach(b => b.onclick = () => { audio.unlock(); finish(+b.dataset.oi); });
    const it = el.querySelector('.r-item');
    if (it) it.onclick = () => { state.item = null; hud(); it.remove(); audio.sfx('powerUp2'); say({ line: REACT.fernglas[0], id: 'fernglas0' }, { wait: false });
      const wrong = [...el.querySelectorAll('.r-opt')].filter(b => +b.dataset.oi !== q.a); const b = pick(wrong); b.classList.add('gone'); b.disabled = true; };
    tick();
  });
}

// ---------- Computer-Rivale „Flitz“ ----------
const RIVAL_PATH = [[0, -6.7], 'tor1', [0, -11.6], 'tor2', [0, -23.6], [0, -30.7], 'tor3', [0, -36]];
async function rivalRun() {
  rival.speed = 2.7;
  for (const step of RIVAL_PATH) {
    if (state.over) return;
    if (typeof step === 'string') {
      const gi = GATES.findIndex(g => g.id === step), gate = world.gates[gi];
      for (;;) {
        await sleep(4500 + Math.random() * 7000 + (rival.passed.size > player.passed.size ? 9000 : 0)); if (state.over) return;
        while (rival.passed.size > player.passed.size + 1 && !state.over) await sleep(1000);
        const p = Math.min(0.95, 0.38 + 0.6 * (gi === 0 ? 0.9 : gi === 1 ? 0.6 : 0.35));
        if (Math.random() < p) {
          world.spinGate(gate, -1); audio.sfx('impactMetal_heavy_002', { vol: 0.35 }); rival.passed.add(gate.id);
          if (gi === 1 && !world.bridge.built) world.buildBridge();
          if (!riddle && Math.random() < 0.6) say(react('flitzRichtig'), { wait: false });
          rival.target = new THREE.Vector3(gate.x, 0, gate.z - 1.6); await arrive(rival); break;
        }
        rival.busy = true; await slapstick(rival, gi); rival.busy = false;
        if (!riddle) say(react('flitzFalsch'), { wait: false });
        rival.target = new THREE.Vector3(gate.x + 0.6, 0, gate.z + 1.3); await arrive(rival);
      }
    } else { rival.target = new THREE.Vector3(step[0] + 0.6, 0, step[1]); await arrive(rival); }
  }
  if (!state.over) finishRace(rival);
}
function arrive(a) { return new Promise(r => { a.onArrive = () => { a.onArrive = null; r(); }; if (!a.target) r(); }); }

// ---------- Ablauf ----------
let world, audio, models, player, rival, uhu, rocco, kuckuck, clock = new THREE.Clock(), running = false;
function showRocco(at) { rocco.visible = true; rocco.position.copy(at); rocco.pop = 1; burst(at.clone().add(new THREE.Vector3(0, 0.6, 0)), { n: 30, colors: ['#ffffff', '#c7c3f5'], up: 2, speed: 2 }); audio.sfx('phaseJump1', { vol: 0.5 }); }
function hideRocco() { burst(rocco.position.clone().add(new THREE.Vector3(0, 0.7, 0)), { n: 30, colors: ['#ffffff', '#c7c3f5'], up: 2, speed: 2 }); rocco.visible = false; audio.sfx('pepSound1', { vol: 0.5 }); }

async function intro() {
  $('#title').classList.add('gone'); running = true;
  audio.startMusic();
  // Rocco springt mit dem Kristall aus dem Portal und fliegt zum Turm
  camShot(new THREE.Vector3(3, 2.6, 9), new THREE.Vector3(0, 1.4, 3.6), 2);
  await sleep(600);
  showRocco(new THREE.Vector3(1.7, 0, 3.4)); world.crystal.mesh.visible = false;
  const held = world.crystal.mesh.clone(); held.scale.multiplyScalar(0.5); scene.add(held);
  heldCrystal = held;
  await say('intro1');
  await say('intro2');
  await say('intro3', { wait: false });
  // Flug über die Insel
  const from = rocco.position.clone(), to = new THREE.Vector3(-5.6, 7.6, -36);
  const t0 = performance.now(), dur = 4200;
  audio.sfx('highUp');
  await new Promise(r => { const fly = () => { const k = Math.min(1, (performance.now() - t0) / dur); const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
    rocco.position.lerpVectors(from, to, e); rocco.position.y += Math.sin(k * Math.PI) * 6;
    camShot(rocco.position.clone().add(new THREE.Vector3(6, 3, 8)), rocco.position, 1.6); if (k < 1) requestAnimationFrame(fly); else r(); }; fly(); });
  audio.sfx('impactBell_heavy_001'); world.crystal.mesh.visible = true; scene.remove(held); heldCrystal = null;
  burst(new THREE.Vector3(0, 1.6, -37), { n: 60, colors: ['#56e4ff', '#ffffff'] });
  camShot(new THREE.Vector3(4, 4, -31), new THREE.Vector3(0, 1.4, -37), 2); hideRocco();
  await sleep(1300);
  // zurück zum Portal: der Lehrling springt heraus
  camShot(new THREE.Vector3(3.5, 3.2, 10), new THREE.Vector3(0, 1, 2.5), 2.5);
  await say('intro4');
  player.obj.visible = true; player.pos.set(0, 1.5, 3.4); audio.sfx('phaseJump1'); burst(new THREE.Vector3(0, 1.3, 3.6), { n: 40, colors: ['#c39bff', '#ffffff'] });
  await player.launch(6, new THREE.Vector3(0, 0, 1.6)); audio.sfx('impactSoft_medium_001'); player.play('emote-yes', { once: true });
  camFollow(player, 2.5);
  await say('land1');
  if (multi.active) {
    for (const r of Object.values(remotes)) r.obj.visible = true;
    await say('multi1'); await say('multi2');
  } else {
    rival.obj.visible = true; rival.pos.set(0, 1.5, 3.4); audio.sfx('phaseJump1', { rate: 1.2 }); burst(new THREE.Vector3(0, 1.3, 3.6), { n: 40, colors: ['#ff7ab6', '#ffffff'] });
    await rival.launch(6, new THREE.Vector3(1.1, 0, 1.4)); rival.play('emote-yes', { once: true });
    await say('flitz1'); await say('flitz1b');
    rival.play('idle');
  }
  player.play('idle');
  state.start = performance.now(); state.playing = true;
  $('#hud').hidden = false; hud(); $('#hint').hidden = false;
  if (!multi.active) rivalRun();
}

let heldCrystal = null;
function finishRace(winner) {
  if (state.over) return; state.over = true;
  const c = world.crystal; c.taken = true;
  if (winner === player) victory(); else defeat(winner);
}
async function victory() {
  player.busy = true; player.target = null; player.play('emote-yes', { once: true });
  audio.sfx('jingles_PIZZI03'); audio.sfx('powerUp2', { delay: 0.3 });
  camShot(new THREE.Vector3(3.6, 3.2, -41.5), new THREE.Vector3(0, 1.3, -36.6), 2.4);
  for (let i = 0; i < 6; i++) setTimeout(() => { burst(new THREE.Vector3((Math.random() - 0.5) * 4, 2 + Math.random() * 2, -37 + (Math.random() - 0.5) * 3), { n: 60, speed: 5, up: 6 }); audio.sfx('pepSound1', { vol: 0.5, rate: 0.8 + Math.random() * 0.6 }); }, i * 380);
  world.crystal.mesh.position.y = 2.4; showRocco(new THREE.Vector3(-1.8, 0, -36.5));
  await say('sieg1'); await say('sieg2'); await say('sieg3'); hideRocco();
  endCard(true);
}
async function defeat(winner) {
  player.busy = true; (winner || rival).play('emote-yes', { once: true }); audio.sfx('jingles_SAX08'); state.winnerName = winner && winner.name;
  camShot(new THREE.Vector3(3.6, 3.2, -41.5), new THREE.Vector3(0, 1.3, -36.6), 2.4);
  showRocco(new THREE.Vector3(-1.8, 0, -36.5));
  await say('niederlage1'); await say('niederlage2'); hideRocco();
  endCard(false);
}
function endCard(won) {
  const s = Math.round((performance.now() - state.start) / 1000);
  $('#end').innerHTML = `<div class="end-card"><h2>${won ? 'Kristall 1 von 19!' : `${esc(state.winnerName || 'Flitz')} war schneller`}</h2>
    <p>${won ? 'Die Uhrwerk-Insel ist geschafft.' : 'Der Kristall ist weg – aber nur für diese Runde.'}</p>
    <div class="end-stats"><div><b>${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}</b><small>Zeit</small></div><div><b>${state.coins}</b><small>Münzen</small></div><div><b>${state.hearts}</b><small>Herzen</small></div></div>
    <button class="btn-go" onclick="location.reload()">Nochmal spielen</button></div>`;
  $('#end').hidden = false;
}

// ---------- Eingabe: tippen = hinlaufen ----------
const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
canvas.addEventListener('pointerdown', e => {
  audio.unlock(); if (skipLine) { skipLine(); return; }
  if (!state.playing || player.busy || player.air) return;
  ndc.set(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1); ray.setFromCamera(ndc, camera);
  const hit = ray.intersectObjects(world.ground, false)[0]; if (!hit) return;
  const p = hit.point; player.target = new THREE.Vector3(p.x, 0, p.z); player.onArrive = null;
  marker.position.set(p.x, 0.03, p.z); marker.scale.setScalar(0.2); marker.visible = true; marker.userData.t = 0;
  audio.sfx('select_002', { vol: 0.5 }); $('#hint').hidden = true;
});
const marker = new THREE.Mesh(new THREE.RingGeometry(0.28, 0.4, 32), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, depthWrite: false }));
marker.rotation.x = -Math.PI / 2; marker.visible = false; scene.add(marker);

// ---------- Spiel-Schleife ----------
function triggers() {
  if (!state.playing || state.over) return;
  for (let gi = 0; gi < world.gates.length; gi++) { const g = world.gates[gi];
    if (!player.passed.has(g.id) && !player.busy && !player.air && Math.hypot(player.pos.x - g.x, player.pos.z - (g.z + 1.25)) < 1.1) { askGate(gi); return; } }
  for (const c of world.coins) if (c.visible && player.pos.distanceTo(c.position) < 0.9) { c.visible = false; state.coins++; hud(); audio.sfx('handleCoins', { vol: 0.5 }); burst(c.position, { n: 14, colors: ['#ffc940'], up: 3, speed: 1.5, life: 0.6 }); }
  if (!world.chestOpened && Math.hypot(player.pos.x - 5.2, player.pos.z + 27.2) < 1.5) openChest();
  if (!state.bananaThrown && player.pos.z < -23.6 && !player.air) bananaPrank();
  if (banana && banana.userData.armed && !player.busy && !player.air) {
    const d = Math.hypot(player.pos.x - banana.position.x, player.pos.z - banana.position.z);
    if (d < 0.5) slip();
    else if (player.pos.z < banana.position.z - 1.5 && !state.dodged) { state.dodged = true; banana.userData.armed = false; say('banane3', { wait: false }); }
  }
  if (Math.hypot(player.pos.x - world.crystal.x, player.pos.z - world.crystal.z) < 1.4) {
    if (multi.active) { if (!state.claimed) { state.claimed = true; multi.event({ kind: 'claim' }); } } else finishRace(player);
  }
}
// Roccos Bananenschale: beim ersten Betreten der Brückeninsel wirft er sie in den Weg.
let banana = null;
async function bananaPrank() {
  state.bananaThrown = true;
  showRocco(new THREE.Vector3(2.6, 0, -25.6));
  const g = new THREE.Group();
  const peel = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.07, 8, 16, Math.PI * 1.2), new THREE.MeshStandardMaterial({ color: '#ffd84a', roughness: 0.6 }));
  peel.rotation.x = Math.PI / 2; g.add(peel);
  for (const a of [0.5, 1.6, 2.7]) { const f = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.28, 6), peel.material); f.position.set(Math.cos(a) * 0.12, 0.05, Math.sin(a) * 0.12); f.rotation.z = Math.PI / 2; f.rotation.y = -a; g.add(f); }
  g.position.set(2.6, 1.2, -25.6); scene.add(g); banana = g;
  audio.sfx('pepSound1');
  const from = g.position.clone(), to = new THREE.Vector3(player.pos.x * 0.3, 0.05, Math.min(player.pos.z - 2.2, -26.5)); const t0 = performance.now();
  await new Promise(r => { const fly = () => { const k = Math.min(1, (performance.now() - t0) / 700); g.position.lerpVectors(from, to, k); g.position.y += Math.sin(k * Math.PI) * 1.6; g.rotation.y = k * 10; if (k < 1) requestAnimationFrame(fly); else r(); }; fly(); });
  audio.sfx('impactSoft_medium_001', { rate: 1.6 });
  await say('banane1'); hideRocco();
  banana.userData.armed = true; state.bananaT = performance.now();
}
async function slip() {
  banana.userData.armed = false; player.busy = true; player.target = null;
  audio.sfx('jingles_SAX08'); audio.sfx('zap1', { vol: 0.4, rate: 1.4 });
  player.play('fall'); await player.launch(5, new THREE.Vector3(player.pos.x, 0, player.pos.z - 1.2)); audio.sfx('impactPunch_heavy_001', { vol: 0.6 });
  player.play('die', { once: true }); stars(player); cam.shake = 0.35;
  await say('banane2'); player.play('idle'); player.busy = false;
  setTimeout(() => { scene.remove(banana); banana = null; }, 400);
}

async function openChest() {
  world.chestOpened = true; player.busy = true; player.target = null; player.play('pick-up', { once: true });
  audio.sfx('creak1'); audio.sfx('jingles_NES03', { delay: 0.4 }); burst(new THREE.Vector3(5.2, 0.8, -27.2), { n: 60, colors: ['#ffc940', '#ffffff'] });
  world.chest.scale.setScalar(2.6); setTimeout(() => world.chest.scale.setScalar(2.2), 160);
  state.item = 'fernglas'; hud(); $('#item').classList.add('pop'); multi.event({ kind: 'chest' });
  camShot(new THREE.Vector3(7.4, 2.4, -24.4), new THREE.Vector3(5.2, 0.6, -27.2), 3);
  await say('truhe1'); showRocco(new THREE.Vector3(6.6, 0, -28.6)); await say('truhe2'); hideRocco();
  player.busy = false; player.play('idle'); camFollow(player);
}

function loop() {
  const dt = Math.min(0.05, clock.getDelta()), t = clock.elapsedTime;
  world.update(dt, t);
  if (player) { player.update(dt); if (!multi.active) rival.update(dt); updateRemotes(dt); reportMe(); }
  if (uhu && player) { // Uhu fliegt als Begleiter neben dem Lehrling
    const p = player.pos; uhu.position.lerp(new THREE.Vector3(p.x - 0.9, p.y + 1.35 + Math.sin(t * 2.6) * 0.12, p.z + 0.9), Math.min(1, dt * 3)); uhu.visible = state.playing && !state.over;
    uhu.bounce = Math.max(0, (uhu.bounce || 0) - dt * 3); uhu.scale.set(0.8 * (1 + uhu.bounce * 0.08), 1 + uhu.bounce * 0.12, 1);
  }
  if (rocco) { rocco.pop = Math.max(0, (rocco.pop || 0) - dt * 2.5); rocco.bounce = Math.max(0, (rocco.bounce || 0) - dt * 3);
    const s = 1.7 * (1 + rocco.pop * 0.5 * Math.sin(rocco.pop * 12)); rocco.scale.set(s * 0.8, s * (1 + rocco.bounce * 0.1), 1);
    if (heldCrystal) heldCrystal.position.copy(rocco.position).add(new THREE.Vector3(0.45, 1.0, 0.1)); }
  if (kuckuck) { kuckuck.pop = Math.max(0, (kuckuck.pop || 0) - dt * 0.9); kuckuck.position.z = world.gates[0].z + 0.25 + Math.min(1, kuckuck.pop) * 0.9; kuckuck.visible = kuckuck.pop > 0.02; kuckuck.rotation.y = Math.sin(t * 9) * 0.3 * kuckuck.pop; }
  if (marker.visible) { marker.userData.t += dt; marker.scale.setScalar(0.2 + marker.userData.t * 2.2); marker.material.opacity = Math.max(0, 1 - marker.userData.t * 2.2); if (marker.userData.t > 0.5) marker.visible = false; }
  world.portal.power = state.playing ? Math.max(0.35, world.portal.power - dt * 0.2) : 1;
  updateBursts(dt); triggers(); updateCamera(dt); updateTalk();
  composer.render();
  requestAnimationFrame(loop);
}

function makeKuckuck() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 12), new THREE.MeshStandardMaterial({ color: '#8d5a2b' })); body.scale.set(1, 0.9, 1.1); g.add(body);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), new THREE.MeshStandardMaterial({ color: '#f4d9a6' })); belly.position.set(0, -0.04, 0.14); g.add(belly);
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.22, 8), new THREE.MeshStandardMaterial({ color: '#ffb02e' })); beak.rotation.x = Math.PI / 2; beak.position.set(0, 0.05, 0.36); g.add(beak);
  for (const x of [-0.11, 0.11]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), new THREE.MeshBasicMaterial({ color: '#ffffff' })); e.position.set(x, 0.12, 0.22); g.add(e);
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), new THREE.MeshBasicMaterial({ color: '#111' })); p.position.set(x, 0.12, 0.27); g.add(p); }
  const spring = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.9, 8), new THREE.MeshStandardMaterial({ color: '#999', metalness: 0.8 })); spring.rotation.x = Math.PI / 2; spring.position.z = -0.5; g.add(spring);
  g.position.set(world.gates[0].x, 3.75, world.gates[0].z + 0.25); g.visible = false; scene.add(g); return g;
}

// ---------- Mehrspieler ----------
const remotes = {};
const multi = new Multi({
  onStart: slots => {
    const mine = slots[multi.id]; const slot = mine ? mine.slot : 0;
    if (slot) { scene.remove(player.obj); player = new Actor(models, AVATARS[slot % AVATARS.length], 'Du', COLORS[slot % COLORS.length]); player.obj.visible = false; player.pos.set(0, 0, 1.6); }
    syncRemotes(slots); intro();
  },
  onPlayers: slots => syncRemotes(slots),
  onEvent: ev => {
    const who = multi.name(ev.from);
    if (ev.kind === 'pass') { world.spinGate(world.gates[ev.gate], -1); audio.sfx('impactMetal_heavy_002', { vol: 0.3 }); ticker(`🚪 ${who} ist durch Tor ${ev.gate + 1}!`); }
    if (ev.kind === 'slap') { ticker(['💥 ' + who + ' wurde vom Kuckuck erwischt!', '🚀 ' + who + ' fliegt per Katapult zurück!', '🌵 ' + who + ' sitzt in Roccos Stacheln!'][ev.gate]); if (!riddle && Math.random() < 0.5) say(react('falsch'), { wait: false }); }
    if (ev.kind === 'bridge' && !world.bridge.built) world.buildBridge(() => audio.sfx('impactMetal_heavy_002', { vol: 0.3, rate: 1.3 }));
    if (ev.kind === 'chest') ticker(`🔭 ${who} hat ein Fernglas gefunden.`);
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
    if (!r) { const slot = p.slot ?? 1; r = remotes[id] = new Actor(models, AVATARS[slot % AVATARS.length], p.name, COLORS[slot % COLORS.length]); r.obj.visible = state.playing || false; r.net = {}; }
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

// ---------- Start ----------
async function boot() {
  const bar = $('#load-bar');
  audio = new Audio();
  models = new Models();
  const names = ['block-grass-large', 'tree', 'tree-pine', 'flowers', 'mushrooms', 'rocks', 'grass', 'sign', 'barrel', 'crate', 'coin-gold', 'chest',
    'door-rotate-large', 'block-moving', 'trap-spikes', 'mini/character-female-b', 'mini/character-male-f'];
  let done = 0; const loader = new GLTFLoader();
  await Promise.all(names.map(n => new Promise((res, rej) => loader.load(`assets/models/${n}.glb`, g => { models.cache[n] = g; bar.style.width = (++done / names.length * 100) + '%'; res(); }, undefined, rej))));
  world = new World(scene, models).build();
  player = new Actor(models, 'mini/character-female-b', 'Du', '#ffc940'); player.obj.visible = false; player.pos.set(0, 0, 1.6);
  rival = new Actor(models, 'mini/character-male-f', 'Flitz', '#ff7ab6'); rival.obj.visible = false;
  Cast.use('wette');
  uhu = svgSprite(Cast.team().a.draw('happy'), 1.0); uhu.visible = false; scene.add(uhu);
  rocco = svgSprite(Cast.team().b.draw('smug'), 1.7); rocco.visible = false; scene.add(rocco);
  kuckuck = makeKuckuck();
  $('#loading').classList.add('gone');
  loop();
}
$('#btn-solo').onclick = () => { audio.unlock(); audio.sfx('confirmation_002'); intro(); };
const myName = () => ($('#name').value.trim() || 'Spieler').slice(0, 14);
$('#btn-host').onclick = () => { audio.unlock(); audio.sfx('confirmation_002'); try { localStorage.setItem('rw:name', myName()); } catch {} $('#title').classList.add('gone'); multi.host(myName()); };
$('#btn-join').onclick = () => { audio.unlock(); const code = $('#code').value.trim().toUpperCase(); if (code.length < 4) { $('#code').focus(); return; } try { localStorage.setItem('rw:name', myName()); } catch {} $('#title').classList.add('gone'); multi.join(code, myName()); };
try { $('#name').value = localStorage.getItem('rw:name') || ''; } catch {}
const joinCode = new URLSearchParams(location.search).get('join'); if (joinCode) { $('#code').value = joinCode.toUpperCase(); $('#join-row').classList.add('focus'); }
$('#talk').onclick = () => skipLine && skipLine();
window.__welten = { remotes, get uhu() { return uhu; }, get rocco() { return rocco; }, get riddle() { return riddle; }, get state() { return state; }, get player() { return player; }, get rival() { return rival; }, get world() { return world; }, BANK };
boot().catch(e => { $('#loading').innerHTML = `<p style="color:#fff;padding:20px">Fehler beim Laden: ${e.message}</p>`; console.error(e); });
