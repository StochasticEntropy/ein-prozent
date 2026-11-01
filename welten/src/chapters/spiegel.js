// Kapitel 3 – Das Spiegelkabinett: Roccos Jahrmarkt auf einer schwebenden Insel in der Abenddämmerung.
// Echte (verzerrte) Spiegel, das eitle Spieglein mit Gesicht, ein Boxspiegel mit Sprungfeder-Handschuh,
// eine Glasbrücke, dein Spiegelbild hinter einer Scheibe (das sich als Rocco entpuppt), Roccos Spiegelsaal
// mit drei Roccos und Sahnetorten, und eine Discokugel über dem Kristall. Rätsel: spiegeln, drehen, ansehen.
import * as THREE from 'three';
import { Reflector } from 'three/addons/objects/Reflector.js';
import { LINES, REACT, SPEAKERS, POOLS } from './spiegel-script.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const GOLD = new THREE.MeshStandardMaterial({ color: '#f0c058', metalness: 0.7, roughness: 0.25 });
// gemalter Spiegel: heller Verlauf mit diagonalen Glanzstreifen (echte Spiegel nur dort, wo man sich sehen soll)
const CHROME = new THREE.MeshStandardMaterial({ roughness: 0.12, metalness: 0.25, map: (() => {
  const cv = document.createElement('canvas'); cv.width = 128; cv.height = 256; const c = cv.getContext('2d');
  const g = c.createLinearGradient(0, 0, 0, 256); g.addColorStop(0, '#f4ecff'); g.addColorStop(0.55, '#d9c8f0'); g.addColorStop(1, '#f7c6df'); c.fillStyle = g; c.fillRect(0, 0, 128, 256);
  c.fillStyle = 'rgba(255,255,255,.7)'; c.save(); c.translate(64, 128); c.rotate(-0.5); c.fillRect(-90, -40, 220, 16); c.fillRect(-90, -8, 220, 6); c.restore();
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t; })() });
const WIN = [-23.6, -29.6]; // Fenster zum „Spiegelraum“ auf Insel C (Wand bei x = MX)
const MX = -3.05;

export default {
  id: 'spiegel', nr: 3, title: 'Das Spiegelkabinett', loading: 'Die Spiegel werden geputzt …',
  theme: { sky: ['#2e1a6e', '#ff8fc8', '#ffb36b'], fog: ['#d7a6d8', 36, 110], hemi: ['#ffeaff', '#5a3a8a', 0.8], sun: ['#ffdff2', 1.55], cloud: '#ffd6f2', clouds: 50 },
  music: 'kirmes', bridgeSfx: 'select_002', rivalPace: 1.25, // Bild-Rätsel brauchen etwas länger
  models: ['block-grass-large', 'coin-gold', 'chest', 'flowers', 'barrel', 'crate'],
  lines: LINES, react: REACT, speakers: SPEAKERS,
  seq: { intro: ['sk_intro1', 'sk_intro2'], fly: 'sk_intro3', afterFly: ['sk_intro4'], land: 'sk_land1', multi: ['sk_multi1', 'sk_multi2'], solo: ['sk_flitz1', 'sk_flitz1b'],
    win: ['sk_sieg1', 'sk_sieg2', 'sk_sieg3'], lose: ['sk_niederlage1', 'sk_niederlage2'], out: 'sk_ausgeschieden' },
  gates: [
    { id: 'tor1', pool: POOLS.tor1, p: 0.85, ticker: n => `🪞 ${n} wurde vom Spieglein verzerrt!` },
    { id: 'tor2', pool: POOLS.tor2, p: 0.55, bridge: true, ticker: n => `🥊 ${n} hat den Boxspiegel abbekommen!` },
    { id: 'tor3', pool: POOLS.tor3, p: 0.35, ticker: n => `🥧 ${n} hat drei Sahnetorten im Gesicht!` },
  ],
  item: { id: 'taschenspiegel', icon: '🪞', label: 'Taschenspiegel benutzen', react: 'taschenspiegel', found: 'einen Taschenspiegel' },
  chest: { x: 5.2, z: -27.2, lines: ['sk_truhe1', 'sk_truhe2'], rocco: [6.6, 0, -28.6], shot: [[7.4, 2.4, -24.4], [5.2, 0.6, -27.2]] },
  rivalPath: [[0, -6.7], 'tor1', [0, -11.6], 'tor2', [0, -23.6], [0.8, -29], [0, -30.7], 'tor3', [0, -36]],
  fly: [0, 6, -37.4], endShot: [[2.8, 2.8, -32.6], [0, 1.6, -37]], roccoEnd: [-1.8, 0, -36.5],
  endText: { win: 'Das Spiegelkabinett ist durchschaut – von vorn und von hinten.', lose: 'Der Kristall ist weg – aber die Spiegel warten auf dich.' },

  // ---------- Aufbau ----------
  build(w) {
    w.base();
    const cone = '#6b4a8a';
    const isl = [['A', [-3, -1, 1, 3], [4, 2, 0, -2, -4, -6]], ['N1', [0], [-8]], ['B', [-2, 0, 2], [-10, -12]], ['C', [-2, 0, 2], [-24, -26, -28, -30]],
      ['C2', [4, 6], [-26, -28]], ['N3', [0], [-32]], ['D', [-2, 0, 2], [-34, -36, -38]]];
    for (const [n, xs, zs] of isl) w.island(n, xs, zs, { cone });
    w.island('spiegelraum', [-5, -7, -9], [-24, -26, -28, -30], { walk: false, cone });
    for (const r of w.regions) checker(w, r.x0, r.x1, r.z0, r.z1);
    checker(w, -10, -4, -31, -23, true);
    w.addCoins([[0, -2], [-1.6, -4.5], [-1.4, -11], [1.4, -11.4], [0, -25], [4.6, -26], [-1.6, -28.4], [0, -35.2]]);
    for (const [n, x, z, s] of [['flowers', 2.6, 2.6, 1], ['barrel', 3.2, -5.4, 1.4], ['crate', -2.6, -11.2, 1.4], ['barrel', 2.6, -10.4, 1.2], ['flowers', 2.2, -38.2, 1], ['flowers', -2.4, -34.6, 1]])
      w.place(n, x, 0, z, s, Math.random() * 6);
    // Zelt-Masten mit Lichterketten entlang des Wegs
    const poles = [[-3.6, 3.4], [3.6, 3.4], [-3.6, -5.4], [3.6, -5.4], [-2.6, -12.6], [2.6, -12.6], [2.6, -23.6], [2.6, -29.6], [-2.6, -33.6], [2.6, -33.6], [-2.6, -38.4], [2.6, -38.4]];
    for (const [x, z] of poles) tentPole(w, x, z);
    lightString(w, [[-3.6, 3.4], [3.6, 3.4], [3.6, -5.4], [-3.6, -5.4], [-3.6, 3.4]]);
    lightString(w, [[-2.6, -12.6], [2.6, -12.6]]); lightString(w, [[2.6, -23.6], [2.6, -29.6]]);
    lightString(w, [[-2.6, -33.6], [2.6, -33.6], [2.6, -38.4], [-2.6, -38.4], [-2.6, -33.6]]);
    w.bulbs = bulbs(w);
    w.zerrspiegel = funMirror(w, -3.75, 0, -1.2, Math.PI / 2, 2.4, 3.0);
    mirrorGate(w, 'tor1', 0, -8);
    boxGate(w, 'tor2', 0, -13.2);
    w.bridge = glassBridge(w, -13.5, -22.5);
    w.chest = w.place('chest', 5.2, 0, -27.2, 2.2, -Math.PI / 2);
    w.fenster = mirrorWindow(w);
    hallGate(w, 'tor3', 0, -32);
    w.disco = discoBall(w, 0, -37);
    w.crystal = w.makeCrystal(0, -37, { y: 1.85, ped: false });
    w.portal = w.makePortal(0, 0.05, 3.6);
  },

  // ---------- Figuren & Gags ----------
  setup(ctx) {
    this.clones = [];
    const w = ctx.world, m = ctx.player.model, obj = ctx.models.get(m);
    if (this.twin && this.twin.obj.parent) this.twin.obj.parent.remove(this.twin.obj);
    obj.scale.setScalar(1.6); obj.traverse(o => { if (o.isMesh) o.castShadow = true; }); w.root.add(obj);
    const mixer = new THREE.AnimationMixer(obj), actions = {};
    for (const c of ctx.models.anims(m)) actions[c.name] = mixer.clipAction(c);
    this.twin = { obj, mixer, actions, cur: null, free: false, model: m };
    playTwin(this.twin, 'idle');
  },
  update(ctx, dt, t) {
    const w = ctx.world, p = ctx.player; if (!w.zerrspiegel) return;
    if (!this.twin || this.twin.model !== p.model) this.setup(ctx); // Mehrspieler: andere Figur → neues Spiegelbild
    const tw = this.twin;
    for (const m of w.mirrors) m.material.uniforms.time.value = t;
    // Spieglein: Mund beim Sprechen, Blinzeln
    const sg = w.spieglein; if (sg) { const talk = ctx.talkingNow('spieglein'); sg.mouth.scale.y = talk ? 0.4 + Math.abs(Math.sin(t * 15)) * 0.9 : 0.3; sg.eyes.forEach(e => (e.scale.y = (t % 3.6) < 0.12 ? 0.1 : 1)); }
    // Spiegelbild: macht alles nach – gespiegelt an der Scheibe
    if (tw && !tw.free) {
      tw.obj.position.set(2 * MX - p.pos.x, p.pos.y, p.pos.z); tw.obj.rotation.y = -p.obj.rotation.y;
      tw.obj.visible = !!ctx.state.playing && p.pos.z < WIN[0] + 0.3 && p.pos.z > WIN[1] - 0.3 && p.obj.visible;
      if (p.animName && p.animName !== tw.anim) playTwin(tw, p.animName);
    }
    tw && tw.mixer.update(dt);
    // Spiegel abschalten, wenn niemand mehr hinschaut (spart Rechenzeit)
    w.zerrspiegel.visible = p.pos.z > -12;
    for (const c of this.clones) c.position.y = c.userData.y + Math.abs(Math.sin(t * 5 + c.userData.ph)) * 0.12;
  },
  async gateIntro(ctx, gi) {
    const gate = ctx.world.gates[gi];
    if (gi === 0) { ctx.camShot(V(1.8, 2.6, -3.8), V(0, 2.2, -8), 2.6); ctx.audio.sfx('powerUp2', { rate: 1.5, vol: 0.5 }); await ctx.say('sk_spiegel1'); await ctx.say('sk_spiegel2'); }
    if (gi === 1) { await ctx.say('sk_box1'); ctx.showRocco(V(2.1, 0, gate.z + 0.2)); await ctx.say('sk_box2'); ctx.hideRocco(); }
    if (gi === 2) {
      ctx.showRocco(V(0, 3.2, gate.z - 0.1));
      for (const x of [-1.5, 1.5]) { const c = new THREE.Sprite(ctx.rocco.material); c.center.copy(ctx.rocco.center); c.scale.copy(ctx.rocco.scale); c.position.set(x, 3.0, gate.z - 0.1);
        c.userData = { y: 3.0, ph: x }; ctx.world.root.add(c); this.clones.push(c); ctx.burst(V(x, 3.6, gate.z), { n: 20, colors: ['#ffffff', '#c7c3f5'], up: 2, speed: 2 }); }
      await ctx.say('sk_tor3a'); await ctx.say('sk_tor3b');
    }
  },
  onPassed(ctx, gi) {
    if (gi === 0) ctx.say('sk_spiegel3', { wait: false });
    if (gi === 2) { ctx.hideRocco(); for (const c of this.clones) { ctx.burst(c.position.clone().add(V(0, 0.7, 0)), { n: 20, colors: ['#ffffff', '#c7c3f5'], up: 2, speed: 2 }); ctx.world.root.remove(c); } this.clones = []; }
  },
  async slap(ctx, a, gi) {
    const w = ctx.world, gate = w.gates[gi], { audio } = ctx, me = a === ctx.player;
    if (gi === 0) { // Das Spieglein verzerrt dich – lang, platt, wabbelig – und spiegelt dich zurück
      audio.sfx('phaseJump1', { rate: 0.6 }); audio.sfx('zap1', { vol: 0.4, rate: 0.7 });
      const s = a.obj.scale;
      await ctx.tween(350, k => s.set(1.6 * (1 - k * 0.45), 1.6 * (1 + k * 0.7), 1.6));
      await ctx.tween(300, k => s.set(1.6 * (0.55 + k * 1.0), 1.6 * (1.7 - k * 1.15), 1.6 * (1 + k * 0.4)));
      if (me) ctx.say(ctx.pick(['sk_zerr0', 'sk_zerr1']), { wait: false });
      audio.sfx('impactSoft_medium_001', { rate: 1.4 });
      const land = a.launch(7, V(a.pos.x, 0, gate.z + 4.2));
      await ctx.tween(900, k => { const wob = Math.sin(k * 14) * (1 - k) * 0.35; s.set(1.6 * (1 + wob), 1.6 * (1 - wob), 1.6); });
      s.setScalar(1.6); await land; a.play('die', { once: true }); ctx.stars(a); await ctx.sleep(1100); a.play('idle');
    } else if (gi === 1) { // Boxhandschuh an der Sprungfeder
      const g = w.glove; audio.sfx('metalLatch'); await ctx.sleep(150);
      audio.sfx('impactPunch_heavy_001'); ctx.cam.shake = 0.4;
      await ctx.tween(140, k => (g.position.z = 0.1 + k * 1.15));
      const land = a.launch(9, V(a.pos.x, 0, gate.z + 4.6)); a.play('fall');
      ctx.tween(500, k => (g.position.z = 1.25 - k * 1.15));
      await land; audio.sfx('impactSoft_medium_001'); a.play('die', { once: true }); ctx.stars(a); await ctx.sleep(1200); a.play('idle');
    } else { // Drei Roccos werfen Sahnetorten
      if (me && !ctx.state.torte) { ctx.state.torte = true; ctx.say('sk_torte', { wait: false }); }
      const from = [V(-1.5, 3.6, gate.z), V(0, 3.8, gate.z), V(1.5, 3.6, gate.z)];
      for (let i = 0; i < 3; i++) { pie(ctx, from[i], a, i === 2); await ctx.sleep(260); }
      await ctx.sleep(500); a.play('die', { once: true });
      await a.launch(5, V(a.pos.x, 0, gate.z + 3.4)); audio.sfx('impactSoft_medium_001'); ctx.stars(a); await ctx.sleep(1000); a.play('idle');
    }
  },
  triggers(ctx) {
    const { player: p, state } = ctx; if (p.busy || p.air) return;
    if (!state.zwilling && p.pos.z < -26.2 && p.pos.z > WIN[1] && p.pos.x < 1.6) falseTwin(this, ctx);
  },
};

function playTwin(tw, name) { const a = tw.actions[name]; if (!a) return; a.reset(); a.play(); if (tw.cur && tw.cur !== a) tw.cur.crossFadeTo(a, 0.15, false); tw.cur = a; tw.anim = name;
  a.setLoop(['jump', 'die', 'pick-up', 'emote-yes'].includes(name) ? THREE.LoopOnce : THREE.LoopRepeat); a.clampWhenFinished = true; }

// ---------- Gags ----------
async function falseTwin(ch, ctx) {
  const { player: p, state, audio } = ctx, tw = ch.twin;
  state.zwilling = true; p.busy = true; p.target = null; p.play('idle'); p.face(MX, p.pos.z);
  ctx.camShot(V(1.6, 2.2, p.pos.z + 3.6), V(MX - 1, 1.1, p.pos.z - 0.4), 2.6);
  await ctx.sleep(700);
  await ctx.say('sk_zwilling1');
  tw.free = true; playTwin(tw, 'emote-yes'); tw.obj.rotation.y = Math.PI * 0.15; audio.sfx('pepSound1', { rate: 1.4 });
  await ctx.sleep(900);
  const at = tw.obj.position.clone(); tw.obj.visible = false;
  ctx.showRocco(V(at.x, 0, at.z)); ctx.burst(at.clone().add(V(0, 0.8, 0)), { n: 50, colors: ['#ffffff', '#ff8fc8', '#c7c3f5'], up: 3, speed: 3 });
  audio.sfx('jingles_SAX08');
  await ctx.say('sk_zwilling2'); await ctx.say('sk_zwilling3');
  ctx.hideRocco(); tw.free = false; tw.anim = null;
  p.busy = false; ctx.camFollow(p);
}
function pie(ctx, from, a, last) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.16, 0.09, 14), new THREE.MeshStandardMaterial({ color: '#c98a4b' })); g.add(base);
  const cream = new THREE.Mesh(new THREE.SphereGeometry(0.19, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#fff8ef', roughness: 0.6 })); cream.position.y = 0.04; cream.scale.y = 0.6; g.add(cream);
  const cherry = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), new THREE.MeshStandardMaterial({ color: '#e0233c' })); cherry.position.y = 0.17; g.add(cherry);
  g.position.copy(from); ctx.world.root.add(g); ctx.audio.sfx('pepSound1', { rate: 0.9 + Math.random() * 0.4, vol: 0.6 });
  const to = a.pos.clone().add(V(0, 1.2, 0.2));
  return ctx.tween(520, k => { g.position.lerpVectors(from, to, k); g.position.y += Math.sin(k * Math.PI) * 1.2; g.rotation.x = k * 9; }).then(() => {
    ctx.world.root.remove(g); ctx.audio.sfx('impactSoft_medium_001', { rate: 1.3 });
    ctx.burst(to, { n: 36, colors: ['#ffffff', '#fff3e0', '#ffd6e6'], speed: 2.4, up: 2.5, life: 0.8, size: 0.13 });
    if (last) ctx.cam.shake = 0.3;
  });
}

// ---------- Bauteile ----------
function stripeTex(a, b, n = 8) {
  const cv = document.createElement('canvas'); cv.width = 64; cv.height = 256; const c = cv.getContext('2d');
  for (let i = 0; i < n; i++) { c.fillStyle = i % 2 ? b : a; c.fillRect(0, i * 256 / n, 64, 256 / n + 1); }
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
}
const STRIPES = new THREE.MeshStandardMaterial({ map: stripeTex('#ff5a7a', '#fff4e6'), roughness: 0.5 });
function checker(w, x0, x1, z0, z1, dim = false) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 64; const c = cv.getContext('2d');
  c.fillStyle = dim ? '#5b3f8c' : '#7b4fc4'; c.fillRect(0, 0, 64, 64); c.fillStyle = dim ? '#d9c6ef' : '#fdf3ff'; c.fillRect(0, 0, 32, 32); c.fillRect(32, 32, 32, 32);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set((x1 - x0) / 1.4, (z1 - z0) / 1.4); t.magFilter = THREE.NearestFilter;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(x1 - x0 - 0.12, z1 - z0 - 0.12), new THREE.MeshStandardMaterial({ map: t, roughness: 0.35, metalness: 0.05 }));
  m.rotation.x = -Math.PI / 2; m.position.set((x0 + x1) / 2, 0.012, (z0 + z1) / 2); m.receiveShadow = true; w.root.add(m);
}
function tentPole(w, x, z) {
  const p = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, 3.4, 10), STRIPES); p.position.set(x, 1.7, z); p.castShadow = true; w.root.add(p);
  const top = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.4, 8), GOLD); top.position.set(x, 3.6, z); w.root.add(top);
  const flag = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.24), new THREE.MeshStandardMaterial({ color: '#ffc940', side: THREE.DoubleSide })); flag.position.set(x + 0.22, 3.5, z); w.root.add(flag);
  w.updaters.push((dt, t) => (flag.rotation.y = Math.sin(t * 3 + x + z) * 0.4));
}
// Lichterkette: Glühbirnen entlang durchhängender Bögen zwischen Masten
const BULB_POS = [];
function lightString(w, pts) {
  const mat = new THREE.LineBasicMaterial({ color: '#2a1840' });
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, az] = pts[i], [bx, bz] = pts[i + 1], line = [];
    for (let k = 0; k <= 16; k++) { const f = k / 16, y = 3.3 - Math.sin(f * Math.PI) * 0.55; const p = V(ax + (bx - ax) * f, y, az + (bz - az) * f); line.push(p); if (k % 2 === 1) BULB_POS.push(p.clone().add(V(0, -0.08, 0))); }
    w.root.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(line), mat));
  }
}
function bulbs(w) {
  const cols = ['#ffd84a', '#ff5fa8', '#56e4ff', '#7dff9a', '#ff9f43'], geo = new THREE.SphereGeometry(0.07, 8, 6);
  const sets = [0, 1].map(() => new THREE.InstancedMesh(geo, new THREE.MeshBasicMaterial({ toneMapped: false }), Math.ceil(BULB_POS.length / 2)));
  const d = new THREE.Object3D(), n = [0, 0];
  BULB_POS.forEach((p, i) => { const s = i % 2; d.position.copy(p); d.updateMatrix(); sets[s].setMatrixAt(n[s], d.matrix); sets[s].setColorAt(n[s]++, new THREE.Color(cols[i % cols.length]).multiplyScalar(1.6)); });
  sets.forEach((m, s) => { m.count = n[s]; m.instanceColor.needsUpdate = true; w.root.add(m); });
  BULB_POS.length = 0;
  w.updaters.push((dt, t) => { const on = Math.floor(t * 2.2) % 2; sets[0].material.color.setScalar(on ? 1 : 0.35); sets[1].material.color.setScalar(on ? 0.35 : 1); });
  return sets;
}
// Verzerrender echter Spiegel (Reflector mit gewellten Texturkoordinaten)
const WARP_SHADER = {
  ...Reflector.ReflectorShader,
  uniforms: { ...Reflector.ReflectorShader.uniforms, time: { value: 0 }, warp: { value: 1 } },
  fragmentShader: Reflector.ReflectorShader.fragmentShader
    .replace('uniform vec3 color;', 'uniform vec3 color; uniform float time; uniform float warp;')
    .replace('vec4 base = texture2DProj( tDiffuse, vUv );',
      'vec2 p = vUv.xy / vUv.w; p.x += sin(p.y * 13.0 + time * 1.4) * 0.03 * warp; p.y += sin(p.x * 7.0 + time * 0.9) * 0.02 * warp; vec4 base = texture2D( tDiffuse, p );'),
};
let mirrorBusy = false;
function mirrorMesh(w, wdt, hgt, warp) {
  const mob = matchMedia('(pointer: coarse)').matches, res = mob ? 384 : 640;
  const m = new Reflector(new THREE.PlaneGeometry(wdt, hgt), { clipBias: 0.003, textureWidth: res, textureHeight: Math.round(res * hgt / wdt), color: '#c9d4e8', shader: WARP_SHADER, multisample: mob ? 0 : 4 });
  m.material.uniforms.warp.value = warp;
  // Spiegel im Spiegel nicht verschachtelt rendern (zeigt dann das Bild vom letzten Frame) – spart Rechenzeit
  const own = m.onBeforeRender; m.onBeforeRender = (...a) => { if (mirrorBusy) return; mirrorBusy = true; try { own(...a); } finally { mirrorBusy = false; } };
  (w.mirrors = w.mirrors || []).push(m);
  return m;
}
function bulbFrame(w, g, wdt, hgt, y0 = 0) { // goldener Rahmen mit Glühbirnen
  const t = 0.14;
  for (const [x, y, sx, sy] of [[0, y0 + hgt + t / 2, wdt + 2 * t, t], [-(wdt + t) / 2, y0 + hgt / 2, t, hgt + t], [(wdt + t) / 2, y0 + hgt / 2, t, hgt + t]]) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(sx, sy, 0.16), GOLD); b.position.set(x, y, 0); b.castShadow = true; g.add(b); }
  const geo = new THREE.SphereGeometry(0.055, 8, 6), mat = new THREE.MeshBasicMaterial({ color: new THREE.Color('#fff3b0').multiplyScalar(1.5), toneMapped: false });
  for (let i = 0; i <= 6; i++) { const b = new THREE.Mesh(geo, mat); b.position.set(-wdt / 2 + i * wdt / 6, y0 + hgt + t / 2, 0.09); g.add(b); }
  for (const sx of [-1, 1]) for (let i = 0; i < 5; i++) { const b = new THREE.Mesh(geo, mat); b.position.set(sx * (wdt + t) / 2, y0 + 0.3 + i * (hgt - 0.4) / 4, 0.09); g.add(b); }
}
function funMirror(w, x, y, z, ry, wdt, hgt) {
  const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = ry; w.root.add(g);
  const m = mirrorMesh(w, wdt, hgt, 1.6); m.position.y = 0.15 + hgt / 2; g.add(m);
  bulbFrame(w, g, wdt, hgt, 0.15);
  const back = new THREE.Mesh(new THREE.BoxGeometry(wdt + 0.3, hgt + 0.4, 0.1), new THREE.MeshStandardMaterial({ color: '#4a2a6e' })); back.position.set(0, 0.15 + hgt / 2, -0.09); g.add(back);
  const sign = textPlane('ZERRSPIEGEL', 1.6, 0.34, '#ff5a7a', '#ffffff'); sign.position.set(0, hgt + 0.62, 0.02); g.add(sign);
  return m;
}
function textPlane(text, w, h, bg, fg) {
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = Math.round(512 * h / w); const c = cv.getContext('2d');
  c.fillStyle = bg; c.beginPath(); c.roundRect(4, 4, cv.width - 8, cv.height - 8, 20); c.fill(); c.fillStyle = fg; c.font = 'bold 64px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(text, cv.width / 2, cv.height / 2 + 4);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, transparent: true }));
}
function gateFrame(w, g, top = 3.1) { // gestreifte Säulen + goldener Bogen
  for (const sx of [-1.35, 1.35]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.26, top, 12), STRIPES); p.position.set(sx, top / 2, 0); p.castShadow = true; g.add(p);
    const k = new THREE.Mesh(new THREE.SphereGeometry(0.28, 14, 10), GOLD); k.position.set(sx, top + 0.05, 0); g.add(k); }
  const arch = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.11, 8, 28, Math.PI), GOLD); arch.position.set(0, top, 0); g.add(arch);
}
// Tor 1: das Spieglein – ein echter, leicht welliger Spiegel als Tür, oben ein goldenes Medaillon mit Gesicht
function mirrorGate(w, id, x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z); w.root.add(g);
  gateFrame(w, g);
  const door = new THREE.Group(); g.add(door);
  const m = mirrorMesh(w, 2.36, 2.8, 0.35); m.position.set(0, 1.45, 0.02); door.add(m);
  const back = new THREE.Mesh(new THREE.BoxGeometry(2.44, 2.9, 0.08), GOLD); back.position.set(0, 1.45, -0.04); door.add(back);
  // Medaillon mit Gesicht
  const med = new THREE.Group(); med.position.set(0, 3.55, 0.1); g.add(med);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.14, 32), GOLD); disc.rotation.x = Math.PI / 2; med.add(disc);
  const gate = { id, x, z, group: g, openK: 0, opening: 0 };
  w.timerFace(gate, 'clock', med, V(0, 0, 0.08), 0.5);
  const sg = new THREE.Group(); sg.position.set(0, 0, 0.09); g.add(sg); // Gesicht sitzt am Spiegel selbst
  const white = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.3 }), dark = new THREE.MeshBasicMaterial({ color: '#2a1840' });
  const eyes = [];
  for (const ex of [-0.38, 0.38]) { const eg = new THREE.Group(); eg.position.set(ex, 2.35, 0); sg.add(eg);
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.17, 14, 10), white); e.scale.z = 0.4; eg.add(e);
    const pu = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), dark); pu.position.z = 0.06; eg.add(pu);
    const lash = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.04, 0.03), dark); lash.position.set(0, 0.2, 0.02); lash.rotation.z = ex > 0 ? -0.25 : 0.25; eg.add(lash); eyes.push(eg); }
  const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.2, 14, 8), new THREE.MeshBasicMaterial({ color: '#c2185b' })); mouth.scale.set(1.3, 0.3, 0.3); mouth.position.set(0, 1.85, 0); sg.add(mouth);
  for (const cx of [-0.62, 0.62]) { const ch = new THREE.Mesh(new THREE.CircleGeometry(0.12, 16), new THREE.MeshBasicMaterial({ color: '#ff8fb8', transparent: true, opacity: 0.6 })); ch.position.set(cx, 2.02, 0.01); sg.add(ch); }
  w.spieglein = { eyes, mouth };
  gate.open = () => { gate.opening = 1; };
  w.updaters.push(dt => { if (gate.opening && gate.openK < 1) { gate.openK = Math.min(1, gate.openK + dt * 1.2); const e = 1 - Math.pow(1 - gate.openK, 3);
    door.position.y = e * 2.9; door.scale.y = 1 - e * 0.95; sg.position.y = e * 2.9; sg.scale.setScalar(1 - e * 0.9); m.visible = gate.openK < 0.98; } });
  return w.addGate(gate);
}
// Tor 2: Boxspiegel – Chromspiegel mit Federhandschuh, der bei falscher Antwort herausschnellt
function boxGate(w, id, x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z); w.root.add(g);
  gateFrame(w, g);
  const piv = new THREE.Group(); piv.position.set(0, 2.9, 0); g.add(piv);
  const glass = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.85, 0.08), CHROME); glass.position.y = -1.45; piv.add(glass);
  const label = textPlane('BOXSPIEGEL', 1.3, 0.3, '#2a1840', '#ffc940'); label.position.set(0, -0.35, 0.05); piv.add(label);
  // Handschuh an einer Feder
  const glove = new THREE.Group(); glove.position.set(0, 1.3, 0.1); g.add(glove);
  const fist = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 12), new THREE.MeshStandardMaterial({ color: '#e0233c', roughness: 0.35 })); fist.scale.set(1, 0.9, 1.1); fist.position.z = 0.25; glove.add(fist);
  const thumb = new THREE.Mesh(new THREE.SphereGeometry(0.13, 10, 8), fist.material); thumb.position.set(0.27, 0.06, 0.28); glove.add(thumb);
  const cuff = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.2, 14), new THREE.MeshStandardMaterial({ color: '#ffffff' })); cuff.rotation.x = Math.PI / 2; glove.add(cuff);
  const coil = new THREE.Mesh(new THREE.TorusKnotGeometry(0.12, 0.025, 64, 6, 1, 8), GOLD); coil.position.z = -0.25; coil.scale.z = 2.6; glove.add(coil);
  glove.position.z = 0.1; w.glove = glove;
  const gate = { id, x, z, group: g, openK: 0, opening: 0 };
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.58, 0.12, 32), GOLD); disc.rotation.x = Math.PI / 2; disc.position.set(0, 3.6, 0.02); g.add(disc);
  w.timerFace(gate, 'clock', g, V(0, 3.6, 0.1), 0.48);
  gate.open = () => { gate.opening = 1; };
  w.updaters.push(dt => { if (gate.opening && gate.openK < 1) { gate.openK = Math.min(1, gate.openK + dt * 1.3); const k = gate.openK;
    piv.rotation.x = -(1 - Math.pow(1 - k, 3)) * 1.45 + Math.sin(k * 12) * 0.06 * (1 - k); glove.visible = k < 0.2; } });
  return w.addGate(gate);
}
// Glasbrücke: Platten schweben von oben herab und klingen
function glassBridge(w, zStart, zEnd) {
  const parts = [], mat = new THREE.MeshStandardMaterial({ color: '#bfefff', transparent: true, opacity: 0.45, roughness: 0.05, metalness: 0.3 });
  const edge = new THREE.LineBasicMaterial({ color: '#9ff6ff' });
  for (let z = zStart; z >= zEnd; z -= 1) for (const x of [-0.5, 0.5]) {
    const p = new THREE.Mesh(new THREE.BoxGeometry(0.96, 0.1, 0.96), mat); p.add(new THREE.LineSegments(new THREE.EdgesGeometry(p.geometry), edge));
    p.position.set(x, 5 + Math.random() * 2, z); p.visible = false; p.receiveShadow = true; w.root.add(p); parts.push({ obj: p, home: V(x, -0.06, z), t: -1 });
  }
  const br = { parts, built: false };
  br.build = onPart => {
    br.built = true;
    parts.forEach((p, i) => setTimeout(() => { p.obj.visible = true; p.from = p.obj.position.clone(); p.t = 0; onPart && i % 2 === 0 && onPart(i); }, i * 60));
    w.regions.push({ name: 'bridge', x0: -1, x1: 1, z0: zEnd - 0.5, z1: zStart + 0.5 });
    parts.forEach(p => w.ground.push(p.obj));
  };
  w.updaters.push((dt, t) => { for (const p of parts) if (p.t >= 0 && p.t < 1) { p.t = Math.min(1, p.t + dt * 2.6); const k = 1 - Math.pow(1 - p.t, 3); p.obj.position.lerpVectors(p.from, p.home, k); p.obj.rotation.y = (1 - k) * 2; } });
  return br;
}
// Scheibe zum Spiegelraum: dahinter läuft dein Spiegelbild (oder doch nicht?)
function mirrorWindow(w) {
  const g = new THREE.Group(); g.position.set(MX, 0, (WIN[0] + WIN[1]) / 2); g.rotation.y = Math.PI / 2; w.root.add(g);
  const len = WIN[0] - WIN[1], hgt = 2.6;
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(len, hgt), new THREE.MeshStandardMaterial({ color: '#cfe8ff', transparent: true, opacity: 0.13, roughness: 0.05, metalness: 0.5, side: THREE.DoubleSide, depthWrite: false }));
  glass.position.y = 0.15 + hgt / 2; g.add(glass);
  bulbFrame(w, g, len, hgt, 0.15);
  const sign = textPlane('SPIEGELBILD', 1.8, 0.36, '#ff5a7a', '#ffffff'); sign.position.set(0, hgt + 0.62, 0.02); g.add(sign);
  // Glanzstreifen, die über die Scheibe wandern
  const shine = new THREE.Mesh(new THREE.PlaneGeometry(0.35, hgt), new THREE.MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.18, depthWrite: false })); shine.position.set(0, 0.15 + hgt / 2, 0.01); shine.rotation.z = 0.3; g.add(shine);
  w.updaters.push((dt, t) => (shine.position.x = ((t * 1.3) % (len + 2)) - len / 2 - 1));
  // gespiegelte Kulisse im Spiegelraum
  for (const z of [-24.5, -28.6]) tentPole(w, 2 * MX - 2.6, z);
  return g;
}
// Tor 3: Roccos Spiegelsaal – drei Spiegelplatten, die mittlere fährt in den Boden
function hallGate(w, id, x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z); w.root.add(g);
  gateFrame(w, g);
  const panel = new THREE.Mesh(new THREE.BoxGeometry(2.4, 2.85, 0.1), CHROME); panel.position.set(0, 1.45, 0); g.add(panel);
  for (const sx of [-1, 1]) { const side = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.6, 0.08), CHROME); side.position.set(sx * 2.15, 1.3, 0.35); side.rotation.y = sx * -0.5; g.add(side);
    const fr = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.1, 0.12), GOLD); fr.position.set(sx * 2.15, 2.65, 0.35); fr.rotation.y = sx * -0.5; g.add(fr); }
  const label = textPlane('SPIEGELSAAL', 1.5, 0.32, '#2a1840', '#ff8fc8'); label.position.set(0, 2.55, 0.06); g.add(label);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.58, 0.12, 32), GOLD); disc.rotation.x = Math.PI / 2; disc.position.set(0, 3.75, 0.02); g.add(disc);
  const gate = { id, x, z, group: g, openK: 0, opening: 0 };
  w.timerFace(gate, 'clock', g, V(0, 3.75, 0.1), 0.48);
  gate.open = () => { gate.opening = 1; };
  w.updaters.push(dt => { if (gate.opening && gate.openK < 1) { gate.openK = Math.min(1, gate.openK + dt * 0.9); const k = gate.openK; panel.position.y = 1.45 - k * k * 3; label.position.y = 2.55 - k * k * 3; panel.visible = k < 1; label.visible = k < 0.9; } });
  return w.addGate(gate);
}
// Discokugel über dem Kristall: dreht sich, wirft bunte Lichtflecken auf den Boden
function discoBall(w, x, z) {
  const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.9, 0.55, 20), GOLD); pedestal.position.set(x, 0.27, z); pedestal.castShadow = true; w.root.add(pedestal);
  const chain = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 2.4, 6), GOLD); chain.position.set(x, 5.6, z); w.root.add(chain);
  const ball = new THREE.Mesh(new THREE.IcosahedronGeometry(0.55, 2), new THREE.MeshStandardMaterial({ color: '#ffffff', metalness: 1, roughness: 0.08, flatShading: true }));
  ball.position.set(x, 4.3, z); w.root.add(ball);
  const cols = ['#ff5fa8', '#56e4ff', '#ffd84a', '#7dff9a', '#c39bff', '#ff9f43'];
  const spots = cols.map((c, i) => { const s = new THREE.Mesh(new THREE.CircleGeometry(0.28, 20), new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
    s.rotation.x = -Math.PI / 2; s.userData.a = i / cols.length * Math.PI * 2; s.userData.r = 1.4 + (i % 3) * 0.6; w.root.add(s); return s; });
  const beams = cols.slice(0, 4).map((c, i) => { const b = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.3, 4.2, 10, 1, true), new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    w.root.add(b); b.userData.a = i * Math.PI / 2; return b; });
  w.updaters.push((dt, t) => {
    ball.rotation.y = t * 0.8;
    spots.forEach(s => { const a = s.userData.a + t * 0.7; s.position.set(x + Math.cos(a) * s.userData.r, 0.02, z + Math.sin(a) * s.userData.r); });
    beams.forEach(b => { const a = b.userData.a + t * 0.7, r = 1.6, tx = x + Math.cos(a) * r, tz = z + Math.sin(a) * r;
      b.position.set((x + tx) / 2, 2.15, (z + tz) / 2); b.lookAt(tx, 0, tz); b.rotateX(-Math.PI / 2); });
  });
  return { ball };
}
