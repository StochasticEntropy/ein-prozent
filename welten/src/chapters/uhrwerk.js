// Kapitel 1 – Die Uhrwerk-Insel: riesige Zahnräder, ein Uhrturm, Drehtore mit Uhr-Zifferblatt
// (= Countdown), ein Kuckuck mit Sprungfeder, eine Zahnrad-Brücke und Roccos Bananenschale.
import * as THREE from 'three';
import { LINES, GATES } from '../script.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

export default {
  id: 'uhrwerk', nr: 1, title: 'Die Uhrwerk-Insel', loading: 'Die Uhrwerk-Insel wird aufgezogen …',
  theme: {}, music: 'uhrwerk',
  models: ['block-grass-large', 'tree', 'tree-pine', 'flowers', 'mushrooms', 'rocks', 'grass', 'sign', 'barrel', 'crate', 'coin-gold', 'chest',
    'door-rotate-large', 'block-moving', 'trap-spikes'],
  lines: LINES, react: {},
  speakers: { kuckuck: { name: 'Kuckuck', voice: false, babble: 880, face: 'kuckuck' } },
  seq: { intro: ['intro1', 'intro2'], fly: 'intro3', afterFly: ['intro4'], land: 'land1', multi: ['multi1', 'multi2'], solo: ['flitz1', 'flitz1b'],
    win: ['sieg1', 'sieg2', 'sieg3'], lose: ['niederlage1', 'niederlage2'], out: 'ausgeschieden' },
  gates: [
    { ...GATES[0], p: 0.9, ticker: n => `💥 ${n} wurde vom Kuckuck erwischt!` },
    { ...GATES[1], p: 0.6, bridge: true, ticker: n => `🚀 ${n} fliegt per Katapult zurück!` },
    { ...GATES[2], p: 0.35, ticker: n => `🌵 ${n} sitzt in Roccos Stacheln!` },
  ],
  item: { id: 'fernglas', icon: '🔭', label: 'Fernglas benutzen', react: 'fernglas', found: 'ein Fernglas' },
  chest: { x: 5.2, z: -27.2, lines: ['truhe1', 'truhe2'], rocco: [6.6, 0, -28.6], shot: [[7.4, 2.4, -24.4], [5.2, 0.6, -27.2]] },
  rivalPath: [[0, -6.7], 'tor1', [0, -11.6], 'tor2', [0, -23.6], [0, -30.7], 'tor3', [0, -36]],
  fly: [-5.6, 7.6, -36], endShot: [[3.6, 3.2, -41.5], [0, 1.3, -36.6]], roccoEnd: [-1.8, 0, -36.5],
  endText: { win: 'Die Uhrwerk-Insel ist geschafft.', lose: 'Der Kristall ist weg – aber nur für diese Runde.' },

  // ---------- Aufbau ----------
  build(w) {
    w.base();
    w.island('A', [-3, -1, 1, 3], [4, 2, 0, -2, -4, -6]);
    w.island('N1', [0], [-8]);
    w.island('B', [-2, 0, 2], [-10, -12]);
    w.island('C', [-2, 0, 2], [-24, -26, -28, -30]);
    w.island('C2', [4, 6], [-26, -28]);
    w.island('N3', [0], [-32]);
    w.island('D', [-2, 0, 2], [-34, -36, -38]);
    w.island('tower', [-5.6], [-34, -36, -38], { walk: false });
    const R = (a, b) => a + Math.random() * (b - a);
    const spots = [['tree', -3.6, 3.6, 1.1], ['tree-pine', 3.7, 1.4, 1.1], ['tree', 3.5, -5.6, 0.9], ['flowers', -2.2, -1, 1], ['flowers', 2.4, 1.6, 1], ['mushrooms', -3.2, -4.8, 1.3],
      ['rocks', 3.2, -2.8, 1.2], ['grass', -1.4, 2.6, 1.4], ['grass', 1.8, -4.2, 1.4], ['sign', 1.6, -6.4, 1.6], ['barrel', -2.6, -11.2, 1.4], ['crate', 2.6, -10.2, 1.4],
      ['tree-pine', -2.8, -25, 1.2], ['flowers', 1.8, -29.6, 1], ['mushrooms', -2.4, -29.4, 1.3], ['tree', 6.6, -25.4, 1.1], ['rocks', 2.8, -38.4, 1.2], ['flowers', -2.4, -38.2, 1], ['grass', 2.2, -34.6, 1.4]];
    for (const [n, x, z, s] of spots) w.place(n, x, 0, z, s, R(0, Math.PI * 2));
    w.addCoins([[0, -2], [0, -4.5], [-1.4, -11], [1.4, -11.4], [0, -25], [4.6, -26], [0, -29], [0, -35.2]]);
    clockGate(w, 'tor1', 0, -8); clockGate(w, 'tor2', 0, -13.2); clockGate(w, 'tor3', 0, -32);
    w.bridge = gearBridge(w, -13.5, -22.5);
    w.chest = w.place('chest', 5.2, 0, -27.2, 2.2, -Math.PI / 2);
    w.crystal = w.makeCrystal(0, -37);
    w.portal = w.makePortal(0, 0.05, 3.6);
    bigGears(w); clockTower(w, -5.6, -36);
  },

  // ---------- Figuren & Gags ----------
  setup(ctx) { this.kuckuck = makeKuckuck(ctx.world); this.banana = null; },
  update(ctx, dt, t) {
    const k = this.kuckuck; if (!k) return;
    k.pop = Math.max(0, (k.pop || 0) - dt * 0.9); k.position.z = ctx.world.gates[0].z + 0.25 + Math.min(1, k.pop) * 0.9; k.visible = k.pop > 0.02; k.rotation.y = Math.sin(t * 9) * 0.3 * k.pop;
  },
  async gateIntro(ctx, gi) {
    const gate = ctx.world.gates[gi];
    if (gi === 0) { this.kuckuck.pop = 4; ctx.audio.sfx('impactBell_heavy_001', { vol: 0.6 }); await ctx.say('kuckuck1'); await ctx.say('kuckuck2'); }
    if (gi === 1) { await ctx.say('tor2a'); ctx.showRocco(V(1.9, 0.2, gate.z - 0.4)); await ctx.say('tor2b'); }
    if (gi === 2) { ctx.showRocco(V(0, 3.15, gate.z)); await ctx.say('tor3a'); await ctx.say('tor3b'); }
  },
  onPassed(ctx, gi) { if (gi > 0 && ctx.rocco.visible) ctx.hideRocco(); },
  async slap(ctx, a, gi) {
    const gate = ctx.world.gates[gi], { audio } = ctx;
    if (gi === 0) { // Kuckuck schießt raus und haut drauf
      this.kuckuck.pop = 1.6; audio.sfx('impactPunch_heavy_001', { delay: 0.2 }); await ctx.sleep(250);
      a.play('die', { once: true }); ctx.cam.shake = 0.4; ctx.stars(a); await ctx.sleep(1300); a.play('idle');
      await a.launch(5, V(gate.x, 0, gate.z + 3.4)); a.play('idle');
    } else if (gi === 1) { // Katapult zurück auf Los
      audio.sfx('phaseJump1'); audio.sfx('zap1', { vol: 0.5 }); ctx.cam.shake = 0.3;
      const land = a.launch(13, V(0, 0, -10)); a.play('fall'); await ctx.sleep(250); audio.sfx('lowDown', { vol: 0.8 });
      await land; audio.sfx('impactSoft_medium_001'); a.play('die', { once: true }); ctx.stars(a); await ctx.sleep(1200); a.play('idle');
    } else { // Stacheln aus dem Boden
      const sp = ctx.world.place('trap-spikes', a.pos.x, -0.3, a.pos.z, 2); audio.sfx('spaceTrash1', { vol: 0.6 });
      ctx.tween(160, k => (sp.position.y = -0.3 + k * 0.3));
      await a.launch(8, V(a.pos.x, 0, a.pos.z + 2.4)); audio.sfx('impactSoft_medium_001'); ctx.stars(a);
      setTimeout(() => ctx.world.root.remove(sp), 1500);
    }
  },
  // Roccos Bananenschale: beim ersten Betreten der Brückeninsel wirft er sie in den Weg.
  triggers(ctx) {
    const { player, state } = ctx;
    if (!state.bananaThrown && player.pos.z < -23.6 && !player.air) bananaPrank(this, ctx);
    const b = this.banana;
    if (b && b.userData.armed && !player.busy && !player.air) {
      const d = Math.hypot(player.pos.x - b.position.x, player.pos.z - b.position.z);
      if (d < 0.5) slip(this, ctx);
      else if (player.pos.z < b.position.z - 1.5 && !state.dodged) { state.dodged = true; b.userData.armed = false; ctx.say('banane3', { wait: false }); }
    }
  },
};

async function bananaPrank(ch, ctx) {
  ctx.state.bananaThrown = true;
  ctx.showRocco(V(2.6, 0, -25.6));
  const g = new THREE.Group();
  const peel = new THREE.Mesh(new THREE.TorusGeometry(0.22, 0.07, 8, 16, Math.PI * 1.2), new THREE.MeshStandardMaterial({ color: '#ffd84a', roughness: 0.6 }));
  peel.rotation.x = Math.PI / 2; g.add(peel);
  for (const a of [0.5, 1.6, 2.7]) { const f = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.28, 6), peel.material); f.position.set(Math.cos(a) * 0.12, 0.05, Math.sin(a) * 0.12); f.rotation.z = Math.PI / 2; f.rotation.y = -a; g.add(f); }
  g.position.set(2.6, 1.2, -25.6); ctx.world.root.add(g); ch.banana = g;
  ctx.audio.sfx('pepSound1');
  const p = ctx.player.pos, from = g.position.clone(), to = V(p.x * 0.3, 0.05, Math.min(p.z - 2.2, -26.5));
  await ctx.tween(700, k => { g.position.lerpVectors(from, to, k); g.position.y += Math.sin(k * Math.PI) * 1.6; g.rotation.y = k * 10; });
  ctx.audio.sfx('impactSoft_medium_001', { rate: 1.6 });
  await ctx.say('banane1'); ctx.hideRocco();
  g.userData.armed = true;
}
async function slip(ch, ctx) {
  const { player, audio } = ctx;
  ch.banana.userData.armed = false; player.busy = true; player.target = null;
  audio.sfx('jingles_SAX08'); audio.sfx('zap1', { vol: 0.4, rate: 1.4 });
  player.play('fall'); await player.launch(5, V(player.pos.x, 0, player.pos.z - 1.2)); audio.sfx('impactPunch_heavy_001', { vol: 0.6 });
  player.play('die', { once: true }); ctx.stars(player); ctx.cam.shake = 0.35;
  await ctx.say('banane2'); player.play('idle'); player.busy = false;
  setTimeout(() => { ctx.world.root.remove(ch.banana); ch.banana = null; }, 400);
}

// ---------- Bauteile der Insel ----------
function clockGate(w, id, x, z) {
  const g = new THREE.Group(); g.position.set(x, 0, z); w.root.add(g);
  const pillarMat = new THREE.MeshStandardMaterial({ color: '#e8b65a', metalness: 0.55, roughness: 0.3 });
  for (const sx of [-1.35, 1.35]) {
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 3.1, 12), pillarMat); p.position.set(sx, 1.55, 0); p.castShadow = true; g.add(p);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 12), pillarMat); cap.position.set(sx, 3.15, 0); g.add(cap);
  }
  const beam = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.32, 0.4), pillarMat); beam.position.set(0, 2.95, 0); beam.castShadow = true; g.add(beam);
  // Drehtür (Kenney door-rotate-large), dreht um die senkrechte Achse
  const door = w.clone('door-rotate-large'); door.scale.set(2.3, 2.6, 2);
  door.traverse(o => { if (o.isMesh) o.castShadow = true; });
  const pivot = new THREE.Group(); pivot.add(door); g.add(pivot);
  const back = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.16, 40), pillarMat); back.rotation.x = Math.PI / 2; back.position.set(0, 3.75, -0.07); g.add(back);
  const gate = { id, x, z, group: g, pivot, spinT: 0 };
  w.timerFace(gate, 'clock', g, V(0, 3.75, 0.02));
  gate.open = dir => { gate.spinFrom = pivot.rotation.y; gate.spinDir = dir; gate.spinT = 0.9; };
  w.updaters.push(dt => {
    if (gate.spinT > 0) { gate.spinT = Math.max(0, gate.spinT - dt); const k = 1 - gate.spinT / 0.9; pivot.rotation.y = gate.spinFrom + Math.PI * (1 - Math.pow(1 - k, 3)) * gate.spinDir; }
  });
  return w.addGate(gate);
}
function gearMesh(r, teeth, depth, mat) {
  const shape = new THREE.Shape();
  for (let i = 0; i < teeth * 4; i++) { const a = i / (teeth * 4) * Math.PI * 2; const rr = (i % 4 < 2) ? r * 1.18 : r; const p = [Math.cos(a) * rr, Math.sin(a) * rr]; i ? shape.lineTo(...p) : shape.moveTo(...p); }
  const hole = new THREE.Path(); hole.absarc(0, 0, r * 0.3, 0, Math.PI * 2, true); shape.holes.push(hole);
  const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: depth * 0.2, bevelSize: r * 0.03, bevelSegments: 1 }); geo.center();
  const m = new THREE.Mesh(geo, mat); m.castShadow = true; return m;
}
function gearBridge(w, zStart, zEnd) {
  const parts = [], gears = [];
  const mat = new THREE.MeshStandardMaterial({ color: '#d4a24c', metalness: 0.55, roughness: 0.35 });
  for (let z = zStart; z >= zEnd; z -= 1) for (const x of [-0.5, 0.5]) {
    const p = w.clone('block-moving'); const home = V(x, -0.3, z);
    p.position.set(x + (x < 0 ? -9 : 9), -4 - Math.random() * 3, z); p.visible = false;
    p.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    w.root.add(p); parts.push({ obj: p, home, t: -1 });
  }
  for (let z = zStart; z >= zEnd; z -= 2.4) for (const x of [-1.25, 1.25]) {
    const g = gearMesh(0.42, 10, 0.12, mat); g.position.set(x, -0.1, z); g.rotation.y = Math.PI / 2; g.visible = false; w.root.add(g); gears.push(g);
  }
  const br = { parts, gears, built: false, z0: zEnd - 0.5, z1: zStart + 0.5 };
  br.build = onPart => {
    br.built = true;
    parts.forEach((p, i) => setTimeout(() => { p.obj.visible = true; p.from = p.obj.position.clone(); p.t = 0; onPart && i % 2 === 0 && onPart(i); }, i * 70));
    setTimeout(() => gears.forEach(g => (g.visible = true)), 300);
    w.regions.push({ name: 'bridge', x0: -1, x1: 1, z0: br.z0, z1: br.z1 });
    parts.forEach(p => p.obj.traverse(o => { if (o.isMesh) w.ground.push(o); }));
  };
  w.updaters.push((dt, t) => {
    for (const p of parts) if (p.t >= 0 && p.t < 1) { p.t = Math.min(1, p.t + dt * 2.2); const k = 1 - Math.pow(1 - p.t, 3); p.obj.position.lerpVectors(p.from, p.home, k); p.obj.rotation.z = (1 - k) * 3; }
    gears.forEach((g, i) => { g.rotation.x = t * (i % 2 ? 1.5 : -1.5); });
  });
  return br;
}
function bigGears(w) {
  const brass = new THREE.MeshStandardMaterial({ color: '#f0c058', metalness: 0.6, roughness: 0.3 });
  const copper = new THREE.MeshStandardMaterial({ color: '#e48a52', metalness: 0.55, roughness: 0.32 });
  const list = [[-17, 2, -18, 4.2, 18, brass, 0.25], [-19.5, -3.2, -11, 2.4, 12, copper, -0.44], [17, 0, -24, 5, 22, copper, -0.18], [18, 7, -31, 2.6, 12, brass, 0.36], [-16, 5, -34, 3.4, 16, copper, 0.3], [16, -4, -9, 3, 14, brass, 0.3], [-13, -7, -2, 3.6, 16, brass, 0.2]];
  const gs = list.map(([x, y, z, r, n, m, sp]) => { const g = gearMesh(r * 0.75, n, 0.6, m); g.position.set(x * 1.3, y, z); g.rotation.y = x < 0 ? 0.9 : -0.9; w.root.add(g); return { g, sp }; });
  w.updaters.push(dt => gs.forEach(({ g, sp }) => { g.rotation.z += sp * dt; }));
}
function clockTower(w, x, z) {
  const stone = new THREE.MeshStandardMaterial({ color: '#efe1c4', roughness: 0.85 });
  const roofM = new THREE.MeshStandardMaterial({ color: '#4b6cd6', roughness: 0.5 });
  const t = new THREE.Group(); t.position.set(x, 0, z); w.root.add(t);
  const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 6, 2.2), stone); body.position.y = 3; body.castShadow = true; t.add(body);
  const roof = new THREE.Mesh(new THREE.ConeGeometry(1.9, 2.4, 4), roofM); roof.position.y = 7.2; roof.rotation.y = Math.PI / 4; roof.castShadow = true; t.add(roof);
  const face = new THREE.Mesh(new THREE.CircleGeometry(0.85, 40), new THREE.MeshStandardMaterial({ color: '#fffaf0' })); face.position.set(1.11, 4.6, 0); face.rotation.y = Math.PI / 2; t.add(face);
  const handM = new THREE.MeshStandardMaterial({ color: '#222' });
  const hh = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.5, 0.04), handM); hh.geometry.translate(0, 0.25, 0);
  const mh = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.72, 0.04), handM); mh.geometry.translate(0, 0.36, 0);
  const hands = new THREE.Group(); hands.position.set(1.13, 4.6, 0); hands.rotation.y = Math.PI / 2; hands.add(hh, mh); t.add(hands);
  const pend = new THREE.Group(); pend.position.set(1.14, 3.6, 0); t.add(pend);
  const rod = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.4, 0.05), new THREE.MeshStandardMaterial({ color: '#d9a441', metalness: 0.7, roughness: 0.3 })); rod.position.y = -0.7; pend.add(rod);
  const bob = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), rod.material); bob.position.y = -1.45; pend.add(bob);
  w.updaters.push((dt, tt) => { mh.rotation.z = -tt * 1.2; hh.rotation.z = -tt * 0.1; pend.rotation.x = Math.sin(tt * 2.2) * 0.35; });
}
function makeKuckuck(w) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.28, 16, 12), new THREE.MeshStandardMaterial({ color: '#8d5a2b' })); body.scale.set(1, 0.9, 1.1); g.add(body);
  const belly = new THREE.Mesh(new THREE.SphereGeometry(0.2, 16, 12), new THREE.MeshStandardMaterial({ color: '#f4d9a6' })); belly.position.set(0, -0.04, 0.14); g.add(belly);
  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.22, 8), new THREE.MeshStandardMaterial({ color: '#ffb02e' })); beak.rotation.x = Math.PI / 2; beak.position.set(0, 0.05, 0.36); g.add(beak);
  for (const x of [-0.11, 0.11]) { const e = new THREE.Mesh(new THREE.SphereGeometry(0.06, 10, 8), new THREE.MeshBasicMaterial({ color: '#ffffff' })); e.position.set(x, 0.12, 0.22); g.add(e);
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.03, 8, 6), new THREE.MeshBasicMaterial({ color: '#111' })); p.position.set(x, 0.12, 0.27); g.add(p); }
  const spring = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.9, 8), new THREE.MeshStandardMaterial({ color: '#999', metalness: 0.8 })); spring.rotation.x = Math.PI / 2; spring.position.z = -0.5; g.add(spring);
  g.position.set(w.gates[0].x, 3.75, w.gates[0].z + 0.25); g.visible = false; w.root.add(g); return g;
}
