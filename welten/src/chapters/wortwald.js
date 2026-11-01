// Kapitel 2 – Der Wortwald: eine schwebende Waldinsel mit Glühwürmchen, die Plaudereiche mit
// Lianenvorhang, der Buchstabenbach mit Seerosen-Brücke und Wasserfällen, ein Sprungpilz,
// Roccos falscher Kristall und seine Dornenhecke. Rätsel: Wortspiele mit Texteingabe.
// Modelle: Kenney Nature Kit + Platformer Kit (CC0).
import * as THREE from 'three';
import { LINES, REACT, SPEAKERS, POOLS } from './wortwald-script.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const N = n => 'nature/' + n;
const BARK = new THREE.MeshStandardMaterial({ color: '#7a5230', roughness: 0.9, flatShading: true });
const VINE = new THREE.MeshStandardMaterial({ color: '#3d8f3a', roughness: 0.8, flatShading: true });
const LEAF = new THREE.MeshStandardMaterial({ color: '#5cc04a', roughness: 0.7, flatShading: true });
const RIVER = [-13.5, -22.5];

export default {
  id: 'wortwald', nr: 2, title: 'Der Wortwald', loading: 'Im Wortwald wird geraschelt …',
  theme: { sky: ['#6fc3ff', '#e9f7c4', '#9fd6a8'], fog: ['#cfe8c0', 38, 115], hemi: ['#f4ffe0', '#5b7a4a', 0.85], sun: ['#fff4cf', 1.7], cloud: '#f4fff0', clouds: 50 },
  music: 'wald', bridgeSfx: 'pepSound1', rivalPace: 1.6, // Tippen dauert länger als Antippen – Flitz denkt hier länger nach
  models: ['block-grass-large', 'coin-gold', 'chest', ...['tree_oak', 'tree_detailed', 'tree_fat', 'tree_default', 'tree_tall', 'tree_cone', 'mushroom_redTall', 'mushroom_red',
    'mushroom_redGroup', 'mushroom_tanTall', 'lily_large', 'lily_small', 'log_large', 'stump_oldTall', 'stump_round', 'statue_ring', 'statue_obelisk', 'plant_bushLarge', 'plant_bush',
    'plant_bushDetailed', 'flower_redA', 'flower_yellowA', 'flower_purpleA', 'grass_large', 'rock_largeA', 'rock_tallB', 'sign'].map(N)],
  lines: LINES, react: REACT, speakers: SPEAKERS,
  seq: { intro: ['ww_intro1', 'ww_intro2'], fly: 'ww_intro3', afterFly: ['ww_intro4'], land: 'ww_land1', multi: ['ww_multi1', 'ww_multi2'], solo: ['ww_flitz1', 'ww_flitz1b'],
    win: ['ww_sieg1', 'ww_sieg2', 'ww_sieg3'], lose: ['ww_niederlage1', 'ww_niederlage2'], out: 'ww_ausgeschieden' },
  gates: [
    { id: 'tor1', pool: POOLS.tor1, p: 0.85, ticker: n => `🌳 ${n} wurde von der Plaudereiche weggefegt!` },
    { id: 'tor2', pool: POOLS.tor2, p: 0.55, bridge: true, ticker: n => `💦 ${n} ist in den Buchstabenbach geplumpst!` },
    { id: 'tor3', pool: POOLS.tor3, p: 0.35, ticker: n => `🍄 ${n} wurde vom Pilz in die Hecke geschleudert!` },
  ],
  item: { id: 'feder', icon: '🪶', label: 'Feder benutzen (erster Buchstabe)', react: 'feder', found: 'Uhus Feder' },
  chest: { x: 5.2, z: -27.2, lines: ['ww_truhe1', 'ww_truhe2'], rocco: [6.6, 0, -28.6], shot: [[7.4, 2.4, -24.4], [5.2, 0.6, -27.2]] },
  rivalPath: [[0, -6.7], 'tor1', [0, -11.6], 'tor2', [0, -23.6], [0.6, -29], [0, -30.7], 'tor3', [0, -36]],
  fly: [0, 6.5, -37.6], endShot: [[2.8, 2.8, -32.6], [0, 1.5, -37]], roccoEnd: [-1.8, 0, -36.5],
  endText: { win: 'Der Wortwald ist geschafft – kein Buchstabe ging verloren.', lose: 'Der Kristall ist weg – aber der Wald wartet auf dich.' },

  // ---------- Aufbau ----------
  build(w) {
    w.base();
    const cone = '#8a6038';
    w.island('A', [-3, -1, 1, 3], [4, 2, 0, -2, -4, -6], { cone });
    w.island('N1', [0], [-8], { cone });
    w.island('B', [-2, 0, 2], [-10, -12], { cone });
    w.island('C', [-2, 0, 2], [-24, -26, -28, -30], { cone });
    w.island('C2', [4, 6], [-26, -28], { cone });
    w.island('N3', [0], [-32], { cone });
    w.island('D', [-2, 0, 2], [-34, -36, -38], { cone });
    // Waldkulisse rundherum (nicht begehbar)
    w.island('oak', [-3], [-8], { walk: false, cone });
    w.island('wL', [-5], [2, -2, -6, -10], { walk: false, cone }); w.island('wR', [5], [2, -2, -6], { walk: false, cone });
    w.island('wL2', [-4], [-26, -30, -36], { walk: false, cone }); w.island('wR2', [4], [-32, -36], { walk: false, cone });
    const R = (a, b) => a + Math.random() * (b - a);
    const trees = [['tree_tall', -5.2, 2.4, 3.4], ['tree_default', -4.8, -1.6, 3.1], ['tree_cone', -5.4, -5.8, 3.4], ['tree_detailed', -4.6, -9.6, 3.3], ['tree_fat', 5.2, 1.6, 3.2],
      ['tree_tall', 4.8, -2.6, 3.6], ['tree_default', 5.3, -6.2, 3], ['tree_detailed', -3.8, -25.8, 3.2], ['tree_cone', -4.4, -30.2, 3.6], ['tree_tall', -4.1, -36.4, 3.5],
      ['tree_fat', 4.2, -32.4, 3.1], ['tree_default', 4.4, -36.6, 3.3], ['tree_cone', 6.6, -24.8, 3], ['tree_cone', -2.7, -10.4, 2.8], ['tree_tall', -2.9, 3.4, 3.2]];
    for (const [n, x, z, s] of trees) w.place(N(n), x, 0, z, s, R(0, 6.3));
    const small = [['flower_redA', -2.2, -1, 3], ['flower_yellowA', 2.4, 1.6, 3], ['flower_purpleA', -1.6, 2.8, 3], ['grass_large', 1.8, -4.2, 3], ['grass_large', -1.4, 0.6, 3],
      ['mushroom_redGroup', -3.2, -4.8, 4], ['rock_largeA', 3.2, -3.4, 2], ['plant_bush', 2.6, 3.6, 3.5], ['flower_yellowA', 1.6, -29.6, 3], ['mushroom_red', -2.4, -29.4, 4],
      ['flower_purpleA', 2.2, -24.6, 3], ['grass_large', -2.2, -24.4, 3], ['plant_bushLarge', -2.6, -11.6, 3], ['flower_redA', 2.4, -38.2, 3], ['flower_yellowA', -2.4, -38.2, 3],
      ['grass_large', 2.2, -34.6, 3], ['plant_bush', -2.5, -34.6, 3], ['rock_tallB', 6.5, -28.6, 1.6], ['stump_round', 4.2, -25.4, 3]];
    for (const [n, x, z, s] of small) w.place(N(n), x, 0, z, s, R(0, 6.3));
    w.addCoins([[0, -2], [0, -4.5], [-1.4, -11], [1.4, -11.4], [0, -24.6], [4.6, -26], [1.5, -26.5, 4.2], [1.5, -27.3, 5.6], [1.5, -27.7, 4.3], [0, -35.2]]);
    signpost(w, 1.9, -5.2);
    oakGate(w, 'tor1', 0, -8);
    boomGate(w, 'tor2', 0, -13.2);
    river(w);
    w.bridge = lilyBridge(w, RIVER[0], RIVER[1]);
    w.chest = w.place('chest', 5.2, 0, -27.2, 2.2, -Math.PI / 2);
    w.sprungpilz = trampoline(w, 1.5, -25.2);
    w.decoy = decoyCrystal(w, 0, -29.9);
    hedgeGate(w, 'tor3', 0, -32);
    glade(w, 0, -37);
    w.crystal = w.makeCrystal(0, -37, { y: 1.75, ped: false });
    w.portal = w.makePortal(0, 0.05, 3.6);
    fireflies(w);
  },

  // ---------- Figuren & Gags ----------
  setup(ctx) { this.c = {}; },
  update(ctx, dt, t) {
    const w = ctx.world, oak = w.oak; if (!oak) return;
    // Plaudereiche: Mund bewegt sich beim Sprechen, Augen blinzeln
    const talk = ctx.talkingNow('baum');
    oak.mouth.scale.y = talk ? 0.5 + Math.abs(Math.sin(t * 14)) * 0.9 : Math.max(0.25, oak.mouth.scale.y - dt * 3);
    const blink = (t % 4.2) < 0.12; oak.eyes.forEach(e => (e.scale.y = blink ? 0.12 : 1));
    oak.brows.forEach((b, i) => (b.rotation.z = (i ? -1 : 1) * (talk ? 0.25 + Math.sin(t * 6) * 0.12 : 0.15)));
    oak.crown.rotation.z = Math.sin(t * 0.8) * 0.015 + (talk ? Math.sin(t * 9) * 0.01 : 0);
  },
  async gateIntro(ctx, gi) {
    const gate = ctx.world.gates[gi];
    if (gi === 0) { ctx.camShot(V(2.4, 2.8, -3.6), V(-1.6, 2, -8.4), 2.6); ctx.audio.sfx('creak1', { rate: 0.6 }); await ctx.say('ww_baum1'); await ctx.say('ww_baum2'); }
    if (gi === 1) { await ctx.say('ww_fluss1'); ctx.showRocco(V(2.1, 0, gate.z + 0.2)); await ctx.say('ww_fluss2'); ctx.hideRocco(); }
    if (gi === 2) { ctx.showRocco(V(0, 3.15, gate.z - 0.1)); await ctx.say('ww_tor3a'); await ctx.say('ww_tor3b'); }
  },
  onPassed(ctx, gi) {
    if (gi === 0) ctx.say('ww_baum3', { wait: false });
    if (gi === 2) ctx.hideRocco();
  },
  async slap(ctx, a, gi) {
    const w = ctx.world, gate = w.gates[gi], { audio } = ctx, me = a === ctx.player;
    if (gi === 0) { // Der Ast der Plaudereiche fegt einen zurück
      audio.sfx('creak1', { rate: 1.3 }); await ctx.tween(260, k => (w.oak.branch.rotation.y = -0.9 + k * 1.5));
      audio.sfx('impactWood_heavy_001'); ctx.cam.shake = 0.35;
      const land = a.launch(7, V(a.pos.x + 0.6, 0, gate.z + 4.4)); a.play('fall');
      ctx.tween(700, k => (w.oak.branch.rotation.y = 0.6 - k * 1.5));
      await land; audio.sfx('impactSoft_medium_001'); a.play('die', { once: true }); ctx.stars(a);
      if (me) ctx.say(ctx.pick(['ww_ast0', 'ww_ast1']), { wait: false });
      await ctx.sleep(1200); a.play('idle');
    } else if (gi === 1) { // Platsch in den Buchstabenbach – und patschnass zurück ans Ufer
      audio.sfx('phaseJump1', { rate: 0.8 });
      await a.launch(7, V(a.pos.x + 0.5, 0, gate.z - 2.6), -1.1);
      splash(ctx, V(a.pos.x, -0.4, a.pos.z)); audio.sfx('lowDown', { vol: 0.7 }); audio.sfx('impactSoft_medium_001', { rate: 0.55 });
      a.play('fall'); await ctx.sleep(900);
      bubbles(ctx, V(a.pos.x, -0.4, a.pos.z)); await ctx.sleep(500);
      audio.sfx('phaseJump1', { rate: 1.2 });
      await a.launch(10, V(gate.x, 0, gate.z + 2.6)); audio.sfx('impactSoft_medium_001');
      a.play('die', { once: true }); splash(ctx, V(a.pos.x, 0.4, a.pos.z), 18); await ctx.sleep(1100); a.play('idle');
    } else { // Pilz schießt aus dem Boden und schleudert einen in die Hecke
      const m = w.place(N('mushroom_redTall'), a.pos.x, 0, a.pos.z, 0.1); audio.sfx('pepSound1', { rate: 0.6 });
      await ctx.tween(180, k => m.scale.setScalar(0.1 + k * 7));
      audio.sfx('impactSoft_medium_001', { rate: 1.6 }); ctx.cam.shake = 0.3;
      const to = V(a.pos.x + (a.pos.x > 0 ? -1.4 : 1.4), 0, gate.z + 3.4);
      const bush = w.place(N('plant_bushDetailed'), to.x, 0, to.z, 3.2);
      await a.launch(11, to); audio.sfx('impactWood_heavy_001', { vol: 0.5, rate: 1.5 }); ctx.stars(a);
      burst(ctx, V(to.x, 0.8, to.z), ['#5cc04a', '#3d8f3a', '#a6e36b']);
      ctx.tween(500, k => bush.scale.set(3.2 + Math.sin(k * 18) * 0.4 * (1 - k), 3.2, 3.2));
      ctx.tween(400, k => m.scale.setScalar(7 * (1 - k) + 0.01)).then(() => w.root.remove(m));
      await ctx.sleep(1200); a.play('idle');
      setTimeout(() => w.root.remove(bush), 2500);
    }
  },
  triggers(ctx) {
    const { player: p, state, world: w } = ctx; if (p.busy || p.air) return;
    // Roccos verdrehtes Schild
    if (!state.signSeen && Math.hypot(p.pos.x - 1.9, p.pos.z + 5.2) < 1.8) { state.signSeen = true; ctx.say('ww_schild1', { wait: false }); }
    // Sprungpilz
    const s = w.sprungpilz;
    if (performance.now() > (state.pilzT || 0) && Math.hypot(p.pos.x - s.x, p.pos.z - s.z) < 0.65) jump(ctx, s);
    // Roccos Luftballon-Kristall
    const d = w.decoy;
    if (!d.popped && Math.hypot(p.pos.x - d.x, p.pos.z - d.z) < 1.1) popDecoy(ctx, d);
  },
};

// ---------- Gags ----------
async function jump(ctx, s) {
  const { player: p, audio, state } = ctx;
  state.pilzT = performance.now() + 2500; p.target = null; p.busy = true;
  ctx.tween(380, k => s.cap.scale.set(1 + Math.sin(k * Math.PI) * 0.35, 1 - Math.sin(k * Math.PI) * 0.4, 1 + Math.sin(k * Math.PI) * 0.35));
  audio.sfx('phaseJump1', { rate: 0.7 }); audio.sfx('highUp', { vol: 0.6 });
  if (!state.pilzSeen) { state.pilzSeen = true; ctx.say('ww_pilz', { wait: false }); }
  await p.launch(16, V(s.x, 0, s.z - 3)); audio.sfx('impactSoft_medium_001'); p.play('idle'); p.busy = false;
}
async function popDecoy(ctx, d) {
  const { player: p, audio, world: w } = ctx;
  d.popped = true; p.busy = true; p.target = null; p.play('idle'); p.face(d.x, d.z);
  ctx.camShot(V(d.x + 2.4, 2.2, d.z + 3.4), V(d.x, 1.3, d.z), 3);
  audio.sfx('powerUp2', { rate: 0.8 }); await ctx.sleep(500);
  await ctx.tween(700, k => { d.mesh.scale.set(1 + k * 0.9, 1.5 + k * 1.2, 1 + k * 0.9); d.mesh.rotation.y += 0.3; });
  audio.sfx('impactPunch_heavy_001', { rate: 1.6 }); audio.sfx('pepSound1');
  ctx.burst(V(d.x, 1.4, d.z), { n: 90, colors: ['#56e4ff', '#ff7ab6', '#ffc940', '#ffffff'], speed: 5, up: 5 });
  w.root.remove(d.group); ctx.cam.shake = 0.3;
  ctx.showRocco(V(d.x - 1.8, 0, d.z - 0.8));
  await ctx.say('ww_falle1'); await ctx.say('ww_falle2'); ctx.hideRocco();
  p.busy = false; ctx.camFollow(p);
}
function splash(ctx, at, n = 50) { ctx.burst(at, { n, colors: ['#bfefff', '#ffffff', '#6fd3ff'], speed: 2.6, up: 5.5, life: 0.9, size: 0.12 }); }
function bubbles(ctx, at) { ctx.burst(at, { n: 16, colors: ['#e8fbff'], speed: 0.6, up: 1.4, life: 1, size: 0.1, grav: -1 }); }
function burst(ctx, at, colors) { ctx.burst(at, { n: 40, colors, speed: 3, up: 3, life: 1 }); }

// ---------- Bauteile ----------
function textPlane(text, w, h, { bg = '#e2c48c', fg = '#5b3a1a', font = 'bold 64px sans-serif' } = {}) {
  const cv = document.createElement('canvas'); cv.width = 512; cv.height = Math.round(512 * h / w); const c = cv.getContext('2d');
  c.fillStyle = bg; c.fillRect(0, 0, cv.width, cv.height); c.fillStyle = fg; c.font = font; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(text, cv.width / 2, cv.height / 2 + 4);
  const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: t, roughness: 0.9 }));
}
function signpost(w, x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = -1.2; w.root.add(g); // zeigt über die Kante
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 1.8, 8), BARK); post.position.y = 0.9; post.castShadow = true; g.add(post);
  const board = textPlane('KRISTALL →', 1.3, 0.34); board.position.set(0.5, 1.55, 0.06); board.rotation.z = -0.12; g.add(board);
  const back = new THREE.Mesh(new THREE.BoxGeometry(1.36, 0.4, 0.06), BARK); back.position.set(0.5, 1.55, 0.02); back.rotation.z = -0.12; g.add(back);
  const board2 = textPlane('WORTWALD', 1.0, 0.28, { bg: '#d9b77a' }); board2.position.set(-0.3, 1.1, 0.06); board2.rotation.z = 0.08; g.add(board2);
}
// Tor 1: Lianenvorhang zwischen zwei Stämmen, daneben die Plaudereiche mit Gesicht und Fege-Ast
function oakGate(w, id, x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z); w.root.add(g);
  for (const sx of [-1.35, 1.35]) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.36, 3.2, 9), BARK); p.position.set(sx, 1.6, 0); p.castShadow = true; g.add(p);
    for (let i = 0; i < 3; i++) { const l = new THREE.Mesh(new THREE.IcosahedronGeometry(0.32, 0), LEAF); l.position.set(sx + (Math.random() - 0.5) * 0.4, 3.1 + Math.random() * 0.3, (Math.random() - 0.5) * 0.4); g.add(l); } }
  const beam = w.clone(N('log_large')); beam.scale.set(3.3, 2.2, 2.2); beam.position.set(0, 2.85, -0.3); g.add(beam);
  // Lianen: hängen am Balken, schwingen beim Öffnen zur Seite
  const vines = [];
  for (let i = 0; i < 9; i++) {
    const vx = -1.08 + i * 0.27, piv = new THREE.Group(); piv.position.set(vx, 2.9, 0.05); g.add(piv);
    const len = 2.5 + Math.random() * 0.3, s = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, len, 5), VINE); s.position.y = -len / 2; piv.add(s);
    for (let k = 0; k < 5; k++) { const l = new THREE.Mesh(new THREE.IcosahedronGeometry(0.09, 0), LEAF); l.position.set((Math.random() - 0.5) * 0.12, -0.3 - k * len / 5, 0.04); piv.add(l); }
    vines.push({ piv, side: vx < 0 ? -1 : 1, ph: Math.random() * 6, x0: vx });
  }
  const gate = { id, x, z, group: g, openK: 0, opening: 0 };
  w.timerFace(gate, 'wood', g, V(0, 3.55, 0.1), 0.56);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.12, 24), BARK); disc.rotation.x = Math.PI / 2; disc.position.set(0, 3.55, 0.02); g.add(disc);
  gate.open = () => { gate.opening = 1; };
  w.updaters.push((dt, t) => {
    if (gate.opening) gate.openK = Math.min(1, gate.openK + dt * 1.6);
    const e = 1 - Math.pow(1 - gate.openK, 3);
    for (const v of vines) { v.piv.rotation.z = v.side * e * 0.55 + Math.sin(t * 1.3 + v.ph) * 0.04 * (1 - e); v.piv.rotation.x = Math.sin(t * 0.9 + v.ph) * 0.05; v.piv.scale.y = 1 - e * 0.82; v.piv.position.x = v.x0 + v.side * e * 0.35; }
  });
  w.addGate(gate);
  w.oak = plaudereiche(w, -3.6, z - 0.5);
}
// Die Plaudereiche: dicker Comic-Stamm mit großem Gesicht, wuschelige Krone, ein Fege-Ast über dem Weg
function plaudereiche(w, x, z) {
  const tree = new THREE.Group(); tree.position.set(x, 0, z); tree.rotation.y = 0.62; w.root.add(tree);
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 1.05, 3.8, 11), BARK); trunk.position.y = 1.9; trunk.castShadow = true; tree.add(trunk);
  for (let i = 0; i < 5; i++) { const a = i / 5 * Math.PI * 2 + 0.3, r = new THREE.Mesh(new THREE.ConeGeometry(0.32, 1.3, 6), BARK);
    r.position.set(Math.cos(a) * 0.95, 0.35, Math.sin(a) * 0.95); r.rotation.set(Math.sin(a) * 1.1, 0, -Math.cos(a) * 1.1); tree.add(r); }
  const crown = new THREE.Group(); crown.position.y = 3.7; tree.add(crown);
  const leafDark = new THREE.MeshStandardMaterial({ color: '#3f9a3c', roughness: 0.8, flatShading: true });
  for (const [cx, cy, cz, r, m] of [[0, 0.9, 0, 1.9, LEAF], [-1.4, 0.4, 0.3, 1.35, leafDark], [1.4, 0.5, -0.2, 1.4, leafDark], [0.3, 0.3, 1.2, 1.25, LEAF], [-0.4, 1.9, -0.4, 1.3, LEAF], [0.8, 1.5, 0.8, 1.0, leafDark], [-0.9, 1.2, -1.1, 1.1, LEAF]]) {
    const b = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), m); b.position.set(cx, cy, cz); b.castShadow = true; crown.add(b); }
  // Gesicht vorn auf dem Stamm
  const face = new THREE.Group(); face.position.set(0, 0, 0.86); tree.add(face);
  const white = new THREE.MeshStandardMaterial({ color: '#fffbe8', roughness: 0.4 }), dark = new THREE.MeshBasicMaterial({ color: '#1b1008' });
  const eyes = [], brows = [];
  for (const ex of [-0.3, 0.3]) {
    const eg = new THREE.Group(); eg.position.set(ex, 2.3, 0.02); face.add(eg);
    const e = new THREE.Mesh(new THREE.SphereGeometry(0.22, 16, 12), white); e.scale.z = 0.55; eg.add(e);
    const pu = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 8), dark); pu.position.set(ex * 0.15, -0.02, 0.11); eg.add(pu);
    const gl = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 4), new THREE.MeshBasicMaterial({ color: '#ffffff' })); gl.position.set(ex * 0.15 + 0.04, 0.03, 0.2); eg.add(gl); eyes.push(eg);
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.1, 0.1), new THREE.MeshStandardMaterial({ color: '#3a2412' })); b.position.set(ex, 2.62, 0.04); face.add(b); brows.push(b);
  }
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.42, 7), BARK); nose.rotation.x = Math.PI / 2; nose.position.set(0, 2.0, 0.2); face.add(nose);
  const mouth = new THREE.Mesh(new THREE.SphereGeometry(0.26, 16, 10), dark); mouth.scale.set(1.3, 0.3, 0.35); mouth.position.set(0, 1.55, 0.0); face.add(mouth);
  const beard = new THREE.MeshStandardMaterial({ color: '#7fbf5a', roughness: 0.9, flatShading: true });
  for (let i = 0; i < 6; i++) { const m = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.5 + (i % 2) * 0.2, 5), beard); m.rotation.x = Math.PI; m.position.set(-0.35 + i * 0.14, 1.12, 0.02); face.add(m); }
  // Fege-Ast: dreht um den Stamm herum über den Weg
  const branch = new THREE.Group(); branch.position.set(x + 0.75, 2.5, z + 0.55); w.root.add(branch);
  const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.22, 2.8, 7), BARK); arm.rotation.z = Math.PI / 2; arm.position.x = 1.4; arm.castShadow = true; branch.add(arm);
  for (let k = 0; k < 4; k++) { const l = new THREE.Mesh(new THREE.IcosahedronGeometry(0.3, 0), LEAF); l.position.set(1.9 + k * 0.32, 0.1 + (k % 2) * 0.14, (k % 2 ? 0.16 : -0.16)); branch.add(l); }
  const hand = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), BARK); hand.position.x = 2.85; branch.add(hand);
  branch.rotation.y = -0.9;
  return { tree, crown, face, eyes, brows, mouth, branch };
}
// Tor 2: Schlagbaum aus einem Baumstamm am Ufer des Buchstabenbachs
function boomGate(w, id, x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z); w.root.add(g);
  for (const sx of [-1.35, 1.35]) { const p = w.clone(N('stump_oldTall')); p.scale.setScalar(2.6); p.position.set(sx, 0, 0); g.add(p); }
  const piv = new THREE.Group(); piv.position.set(-1.35, 1.25, 0.05); g.add(piv);
  const boom = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.16, 2.9, 9), BARK); boom.rotation.z = Math.PI / 2; boom.position.x = 1.4; boom.castShadow = true; piv.add(boom);
  for (const bx of [0.6, 1.4, 2.2]) { const s = new THREE.Mesh(new THREE.CylinderGeometry(0.165, 0.165, 0.12, 9), new THREE.MeshStandardMaterial({ color: '#ffd84a' })); s.rotation.z = Math.PI / 2; s.position.x = bx; piv.add(s); }
  // Countdown-Schild auf einem Pfahl
  const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.09, 2.6, 8), BARK); post.position.set(1.75, 1.3, 0.3); g.add(post);
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.1, 24), BARK); disc.rotation.x = Math.PI / 2; disc.position.set(1.75, 2.65, 0.3); g.add(disc);
  const gate = { id, x, z, group: g, openK: 0, opening: 0 };
  w.timerFace(gate, 'wood', g, V(1.75, 2.65, 0.37), 0.45);
  gate.open = () => { gate.opening = 1; };
  w.updaters.push(dt => { if (gate.opening) gate.openK = Math.min(1, gate.openK + dt * 1.3); const k = gate.openK; piv.rotation.z = (1 - Math.pow(1 - k, 3)) * 1.35 + Math.sin(k * Math.PI * 3) * 0.08 * (1 - k); });
  return w.addGate(gate);
}
// Der Buchstabenbach: Wasser mit Strömung, Wasserfälle an beiden Enden, Ufersteine, Seerosen
function river(w) {
  const z0 = RIVER[0] + 0.5, z1 = RIVER[1] - 0.5, depth = z0 - z1, len = 18;
  const cv = document.createElement('canvas'); cv.width = cv.height = 128; const c = cv.getContext('2d');
  c.fillStyle = '#3fb4dd'; c.fillRect(0, 0, 128, 128); c.strokeStyle = 'rgba(255,255,255,.35)'; c.lineWidth = 3;
  for (let i = 0; i < 9; i++) { const y = Math.random() * 128; c.beginPath(); c.moveTo(Math.random() * 60, y); c.quadraticCurveTo(64, y + 6, 70 + Math.random() * 58, y); c.stroke(); }
  const tex = new THREE.CanvasTexture(cv); tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(len / 4, depth / 4); tex.colorSpace = THREE.SRGBColorSpace;
  const water = new THREE.Mesh(new THREE.PlaneGeometry(len, depth), new THREE.MeshStandardMaterial({ map: tex, transparent: true, opacity: 0.9, roughness: 0.15, metalness: 0.1 }));
  water.rotation.x = -Math.PI / 2; water.position.set(0, -0.45, (z0 + z1) / 2); water.receiveShadow = true; w.root.add(water);
  const bed = new THREE.Mesh(new THREE.BoxGeometry(len, 0.6, depth), new THREE.MeshStandardMaterial({ color: '#8a6038', roughness: 1 })); bed.position.set(0, -1.05, (z0 + z1) / 2); w.root.add(bed);
  const fallTex = tex.clone(); fallTex.repeat.set(depth / 4, 3); fallTex.needsUpdate = true;
  const falls = [-1, 1].map(sx => { const f = new THREE.Mesh(new THREE.PlaneGeometry(depth, 14), new THREE.MeshBasicMaterial({ map: fallTex, transparent: true, opacity: 0.75, side: THREE.DoubleSide, depthWrite: false }));
    f.rotation.y = Math.PI / 2; f.position.set(sx * len / 2, -7.45, (z0 + z1) / 2); w.root.add(f); return f; });
  for (let i = 0; i < 16; i++) { const sx = (i % 2 ? 1 : -1) * (2.2 + Math.random() * 6), sz = z0 - Math.random() * depth;
    if (Math.abs(sx) < 2) continue; const r = w.place(N(i % 3 ? 'rock_tallB' : 'lily_small'), sx, i % 3 ? -0.9 : -0.5, sz, i % 3 ? 0.5 + Math.random() * 0.4 : 3, Math.random() * 6); r.userData.bob = i; }
  w.updaters.push((dt, t) => { tex.offset.x -= dt * 0.08; fallTex.offset.y += dt * 0.9; });
  // Nebel an den Wasserfällen
  const mist = new THREE.Points(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(new Float32Array(Array.from({ length: 120 }, (_, i) => i % 3 === 0 ? (i % 2 ? 1 : -1) * len / 2 : i % 3 === 1 ? -1 - Math.random() * 10 : z0 - Math.random() * depth)), 3)),
    new THREE.PointsMaterial({ color: '#ffffff', size: 0.5, transparent: true, opacity: 0.35, depthWrite: false }));
  w.root.add(mist);
}
function lilyBridge(w, zStart, zEnd) {
  const pads = [];
  let i = 0;
  for (let z = zStart; z >= zEnd; z -= 0.95, i++) {
    const x = (i % 2 ? 0.32 : -0.32), p = w.clone(N('lily_large')); p.scale.setScalar(3.6); p.position.set(x, -1.1, z); p.rotation.y = Math.random() * 6; p.visible = false;
    p.traverse(o => { if (o.isMesh) { o.receiveShadow = true; } }); w.root.add(p); pads.push({ obj: p, t: -1, x, z });
  }
  const br = { built: false, pads };
  br.build = onPart => {
    br.built = true;
    pads.forEach((p, k) => setTimeout(() => { p.obj.visible = true; p.t = 0; onPart && onPart(k); }, k * 110));
    w.regions.push({ name: 'bridge', x0: -1, x1: 1, z0: zEnd - 0.5, z1: zStart + 0.5 });
    pads.forEach(p => p.obj.traverse(o => { if (o.isMesh) w.ground.push(o); }));
  };
  w.updaters.push((dt, t) => {
    for (const p of pads) {
      if (p.t >= 0 && p.t < 1) p.t = Math.min(1, p.t + dt * 2.4);
      if (p.t < 0) continue;
      const k = p.t, e = 1 + Math.sin(k * Math.PI * 2.5) * (1 - k) * 0.6; // springt aus dem Wasser und wippt nach
      p.obj.position.y = -1.1 + 0.68 * Math.min(1, k * 1.4) * e + Math.sin(t * 1.6 + p.z) * 0.02;
    }
  });
  return br;
}
function trampoline(w, x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z); w.root.add(g);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.3, 0.7, 10), new THREE.MeshStandardMaterial({ color: '#f4ead2', roughness: 0.8 })); stem.position.y = 0.35; g.add(stem);
  const cap = new THREE.Group(); cap.position.y = 0.7; g.add(cap);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.75, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: '#e8413a', roughness: 0.5 })); dome.scale.y = 0.55; dome.castShadow = true; cap.add(dome);
  for (let i = 0; i < 7; i++) { const a = i / 7 * Math.PI * 2, s = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 6), new THREE.MeshStandardMaterial({ color: '#fff' })); s.position.set(Math.cos(a) * 0.48, 0.3, Math.sin(a) * 0.48); s.scale.y = 0.5; cap.add(s); }
  const top = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 6), new THREE.MeshStandardMaterial({ color: '#fff' })); top.position.y = 0.41; top.scale.y = 0.5; cap.add(top);
  return { x, z, cap };
}
function decoyCrystal(w, x, z) {
  const g = new THREE.Group(); w.root.add(g);
  const st = w.place(N('stump_round'), x, 0, z, 3.2); g.add(st);
  const cr = new THREE.Mesh(new THREE.OctahedronGeometry(0.36, 0), new THREE.MeshStandardMaterial({ color: '#9ff6ff', emissive: '#29d8ff', emissiveIntensity: 1.2, roughness: 0.2, flatShading: true }));
  cr.scale.set(1, 1.5, 1); cr.position.set(x, 1.3, z); g.add(cr);
  const string = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.5, 4), new THREE.MeshBasicMaterial({ color: '#ffffff' })); string.position.set(x, 0.9, z); g.add(string);
  const d = { x, z, group: g, mesh: cr, popped: false };
  w.updaters.push((dt, t) => { if (d.popped) return; cr.rotation.y = t * 1.1; cr.position.y = 1.3 + Math.sin(t * 2.3) * 0.1; });
  return d;
}
// Tor 3: Roccos Dornenhecke zwischen zwei Riesenpilzen; versinkt beim Öffnen im Boden
function hedgeGate(w, id, x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z); w.root.add(g);
  for (const sx of [-1.45, 1.45]) { const m = w.clone(N('mushroom_tanTall')); m.scale.setScalar(12); m.position.set(sx, 0, 0); m.rotation.y = sx * 2; g.add(m); }
  const beam = w.clone(N('log_large')); beam.scale.set(3.4, 1.8, 1.8); beam.position.set(0, 2.85, -0.25); g.add(beam);
  const hedge = new THREE.Group(); g.add(hedge);
  for (const hx of [-0.75, 0, 0.75]) { const b = w.clone(N('plant_bushDetailed')); b.scale.set(2.6, 5, 2.6); b.position.set(hx, 0, 0); hedge.add(b); }
  const thornMat = new THREE.MeshStandardMaterial({ color: '#4a2e14' });
  for (let i = 0; i < 18; i++) { const t = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.22, 5), thornMat); t.position.set(-1.05 + Math.random() * 2.1, 0.3 + Math.random() * 1.4, 0.75); t.rotation.x = Math.PI / 2; hedge.add(t); }
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.62, 0.12, 24), BARK); disc.rotation.x = Math.PI / 2; disc.position.set(0, 3.6, 0.02); g.add(disc);
  const gate = { id, x, z, group: g, openK: 0, opening: 0 };
  w.timerFace(gate, 'wood', g, V(0, 3.6, 0.1), 0.56);
  gate.open = () => { gate.opening = 1; };
  w.updaters.push((dt, t) => { if (gate.opening) gate.openK = Math.min(1, gate.openK + dt * 1.1); const k = gate.openK; hedge.position.y = -2.2 * k * k; hedge.position.x = Math.sin(t * 40) * 0.03 * (k > 0 && k < 1 ? 1 : 0); hedge.visible = k < 1; });
  return w.addGate(gate);
}
// Lichtung mit Steinring und Sonnenstrahl für den Kristall
function glade(w, x, z) {
  const ring = w.place(N('statue_ring'), x, 0, z - 1.7, 3.8);
  const stones = [ring, ...[-1.7, 1.7].map(sx => w.place(N('statue_obelisk'), x + sx, 0, z - 0.9, 2.2))];
  // moosig-dunkler Stein, damit der Kristall davor leuchtet
  for (const st of stones) st.traverse(o => { if (o.isMesh) { o.material = o.material.clone(); o.material.color.multiply(new THREE.Color('#7f9a86')); } });
  const ped = w.place(N('stump_round'), x, 0, z, 3.4);
  const cv = document.createElement('canvas'); cv.width = 4; cv.height = 128; const c = cv.getContext('2d');
  const gr = c.createLinearGradient(0, 0, 0, 128); gr.addColorStop(0, 'rgba(255,250,200,0)'); gr.addColorStop(0.6, 'rgba(255,245,190,.35)'); gr.addColorStop(1, 'rgba(255,240,170,.05)');
  c.fillStyle = gr; c.fillRect(0, 0, 4, 128); const tex = new THREE.CanvasTexture(cv);
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 1.4, 12, 24, 1, true), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide }));
  beam.position.set(x, 6, z); w.root.add(beam);
  w.updaters.push((dt, t) => { beam.material.opacity = 0.32 + Math.sin(t * 1.2) * 0.1; beam.rotation.y = t * 0.1; });
  return ped;
}
function fireflies(w) {
  const n = 140, pos = new Float32Array(n * 3), base = [];
  for (let i = 0; i < n; i++) { const b = [(Math.random() - 0.5) * 14, 0.4 + Math.random() * 3.5, 6 - Math.random() * 48, Math.random() * 6]; base.push(b); pos.set(b.slice(0, 3), i * 3); }
  const geo = new THREE.BufferGeometry(); geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: '#f4ff8a', size: 0.11, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending }));
  w.root.add(pts);
  w.updaters.push((dt, t) => { for (let i = 0; i < n; i++) { const b = base[i]; pos[i * 3] = b[0] + Math.sin(t * 0.5 + b[3]) * 0.6; pos[i * 3 + 1] = b[1] + Math.sin(t * 0.8 + b[3] * 2) * 0.3; pos[i * 3 + 2] = b[2] + Math.cos(t * 0.4 + b[3]) * 0.6; }
    geo.attributes.position.needsUpdate = true; pts.material.opacity = 0.65 + Math.sin(t * 3) * 0.25; });
}
