// Die Uhrwerk-Insel: schwebende Grasinseln (Kenney Platformer Kit, CC0), riesige Zahnräder,
// ein Uhrturm, Drehtore mit Uhr-Zifferblatt (= Countdown), eine Zahnrad-Brücke, Portal und Wolken.
import * as THREE from 'three';

const TILE = 2; // block-grass-large ist 2 × 2

export class World {
  constructor(scene, models) {
    this.scene = scene; this.models = models;
    this.ground = []; this.regions = []; this.gates = []; this.updaters = [];
    this.root = new THREE.Group(); scene.add(this.root);
  }

  build() {
    this.sky(); this.lights(); this.clouds();
    // Inseln (x-Bereich, z-Bereich in Kachelmitten)
    this.island('A', [-3, -1, 1, 3], [4, 2, 0, -2, -4, -6]);
    this.island('N1', [0], [-8]);
    this.island('B', [-2, 0, 2], [-10, -12]);
    this.island('C', [-2, 0, 2], [-24, -26, -28, -30]);
    this.island('C2', [4, 6], [-26, -28]);
    this.island('N3', [0], [-32]);
    this.island('D', [-2, 0, 2], [-34, -36, -38]);
    this.towerBase();
    this.decor();
    this.gate('tor1', 0, -8);
    this.gate('tor2', 0, -13.2);
    this.gate('tor3', 0, -32);
    this.bridge = this.makeBridge(-13.5, -22.5);
    this.chest = this.place('chest', 5.2, 0, -27.2, 2.2, -Math.PI / 2);
    this.chestLid = this.chest;
    this.crystal = this.makeCrystal(0, -37);
    this.portal = this.makePortal(0, 0.05, 3.6);
    this.bigGears();
    this.clockTower(-5.6, -36);
    return this;
  }

  // ---------- Himmel, Licht, Wolken ----------
  sky() {
    const g = new THREE.SphereGeometry(400, 32, 16);
    const m = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false,
      uniforms: { top: { value: new THREE.Color('#5aa7ff') }, mid: { value: new THREE.Color('#ffd6a5') }, bot: { value: new THREE.Color('#ff9aa2') } },
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.0, 0.55, h)) : mix(mid, bot, smoothstep(0.0, -0.4, h)); gl_FragColor = vec4(c, 1.0); }',
    });
    this.scene.add(new THREE.Mesh(g, m));
    this.scene.fog = new THREE.Fog('#ffd9b8', 40, 120);
  }
  lights() {
    this.scene.add(new THREE.HemisphereLight('#fff4e0', '#7a8cc7', 0.75));
    const sun = new THREE.DirectionalLight('#fff1d6', 1.9);
    sun.position.set(12, 22, 10); sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024); sun.shadow.camera.left = -18; sun.shadow.camera.right = 18; sun.shadow.camera.top = 18; sun.shadow.camera.bottom = -18; sun.shadow.bias = -0.0005;
    this.sun = sun; this.scene.add(sun); this.scene.add(sun.target);
  }
  clouds() {
    const geo = new THREE.SphereGeometry(1, 12, 8);
    const mat = new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1, transparent: true, opacity: 0.92 });
    const N = 70, inst = new THREE.InstancedMesh(geo, mat, N * 3);
    const d = new THREE.Object3D(); let k = 0; const puffs = [];
    for (let i = 0; i < N; i++) {
      const cx = (Math.random() - 0.5) * 90, cz = 10 - Math.random() * 70, cy = -6 - Math.random() * 10;
      for (let j = 0; j < 3; j++) { puffs.push({ x: cx + (j - 1) * 1.6, y: cy + Math.random(), z: cz + Math.random(), s: 1.4 + Math.random() * 1.6, sp: 0.3 + Math.random() * 0.4 }); }
    }
    this.updaters.push(dt => { k = 0; for (const p of puffs) { p.x += p.sp * dt; if (p.x > 48) p.x = -48; d.position.set(p.x, p.y, p.z); d.scale.set(p.s * 1.6, p.s, p.s); d.updateMatrix(); inst.setMatrixAt(k++, d.matrix); } inst.instanceMatrix.needsUpdate = true; });
    this.scene.add(inst);
  }

  // ---------- Bausteine ----------
  clone(name) { return this.models.get(name); }
  place(name, x, y, z, s = 1, ry = 0) {
    const m = this.clone(name); m.position.set(x, y, z); m.scale.setScalar(s); m.rotation.y = ry;
    m.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    this.root.add(m); return m;
  }
  island(name, xs, zs) {
    for (const x of xs) for (const z of zs) {
      const b = this.place('block-grass-large', x, -1, z);
      b.traverse(o => { if (o.isMesh) this.ground.push(o); });
      // Unterseite: Erdkegel, damit die Insel schwebt
      const cone = new THREE.Mesh(new THREE.ConeGeometry(1.15, 2.2 + Math.random() * 1.6, 6), new THREE.MeshStandardMaterial({ color: '#a8743f', roughness: 1, flatShading: true }));
      cone.rotation.x = Math.PI; cone.position.set(x + (Math.random() - 0.5) * 0.3, -2.1, z + (Math.random() - 0.5) * 0.3); cone.castShadow = true; this.root.add(cone);
    }
    this.regions.push({ name, x0: Math.min(...xs) - 1, x1: Math.max(...xs) + 1, z0: Math.min(...zs) - 1, z1: Math.max(...zs) + 1 });
  }
  towerBase() { for (const z of [-34, -36, -38]) { const b = this.place('block-grass-large', -5.6, -1, z); b.traverse(o => { if (o.isMesh) this.ground.push(o); }); } }
  decor() {
    const R = (a, b) => a + Math.random() * (b - a);
    const spots = [['tree', -3.6, 3.6, 1.1], ['tree-pine', 3.7, 1.4, 1.1], ['tree', 3.5, -5.6, 0.9], ['flowers', -2.2, -1, 1], ['flowers', 2.4, 1.6, 1], ['mushrooms', -3.2, -4.8, 1.3],
      ['rocks', 3.2, -2.8, 1.2], ['grass', -1.4, 2.6, 1.4], ['grass', 1.8, -4.2, 1.4], ['sign', 1.6, -6.4, 1.6], ['barrel', -2.6, -11.2, 1.4], ['crate', 2.6, -10.2, 1.4],
      ['tree-pine', -2.8, -25, 1.2], ['flowers', 1.8, -29.6, 1], ['mushrooms', -2.4, -29.4, 1.3], ['tree', 6.6, -25.4, 1.1], ['rocks', 2.8, -38.4, 1.2], ['flowers', -2.4, -38.2, 1], ['grass', 2.2, -34.6, 1.4]];
    for (const [n, x, z, s] of spots) this.place(n, x, 0, z, s, R(0, Math.PI * 2));
    this.signpost = this.root.children.find(c => c.position.x === 1.6 && c.position.z === -6.4);
    // Münzen, die sich drehen
    this.coins = [];
    for (const [x, z] of [[0, -2], [0, -4.5], [-1.4, -11], [1.4, -11.4], [0, -25], [4.6, -26], [0, -29], [0, -35.2]]) {
      const c = this.place('coin-gold', x, 0.35, z, 1.4); this.coins.push(c);
    }
    this.updaters.push((dt, t) => { this.coins.forEach((c, i) => { if (!c.visible) return; c.rotation.y = t * 2 + i; c.position.y = 0.35 + Math.sin(t * 2 + i) * 0.08; }); });
  }

  // ---------- Drehtor mit Uhr-Zifferblatt ----------
  gate(id, x, z) {
    const g = new THREE.Group(); g.position.set(x, 0, z); this.root.add(g);
    const pillarMat = new THREE.MeshStandardMaterial({ color: '#e8b65a', metalness: 0.55, roughness: 0.3 });
    for (const sx of [-1.35, 1.35]) {
      const p = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 3.1, 12), pillarMat); p.position.set(sx, 1.55, 0); p.castShadow = true; g.add(p);
      const cap = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 12), pillarMat); cap.position.set(sx, 3.15, 0); g.add(cap);
    }
    const beam = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.32, 0.4), pillarMat); beam.position.set(0, 2.95, 0); beam.castShadow = true; g.add(beam);
    // Drehtür (Kenney door-rotate-large), dreht um die senkrechte Achse
    const door = this.clone('door-rotate-large'); door.scale.set(2.3, 2.6, 2); door.position.set(0, 0, 0);
    door.traverse(o => { if (o.isMesh) { o.castShadow = true; } });
    const pivot = new THREE.Group(); pivot.add(door); g.add(pivot);
    // Zifferblatt über dem Tor: Canvas-Textur, zeigt den Countdown
    const cv = document.createElement('canvas'); cv.width = cv.height = 256;
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
    const face = new THREE.Mesh(new THREE.CircleGeometry(0.62, 40), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }));
    face.position.set(0, 3.75, 0.02); g.add(face);
    const back = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.16, 40), pillarMat); back.rotation.x = Math.PI / 2; back.position.set(0, 3.75, -0.07); g.add(back);
    const gate = { id, x, z, group: g, pivot, face, cv, tex, open: false, spinT: 0, frac: 1, glow: 0 };
    this.drawClock(gate, 1, false);
    this.gates.push(gate);
    this.updaters.push(dt => {
      if (gate.spinT > 0) { gate.spinT = Math.max(0, gate.spinT - dt); const k = 1 - gate.spinT / 0.9; pivot.rotation.y = gate.spinFrom + (Math.PI) * (1 - Math.pow(1 - k, 3)) * gate.spinDir; }
    });
    return gate;
  }
  drawClock(gate, frac, active, mood = '') {
    const c = gate.cv.getContext('2d'), W = 256, r = 118;
    c.clearRect(0, 0, W, W);
    c.fillStyle = active ? '#fff7e0' : '#f4ead2'; c.beginPath(); c.arc(128, 128, r, 0, Math.PI * 2); c.fill();
    if (active) { c.fillStyle = frac < 0.17 ? 'rgba(255,77,109,.55)' : 'rgba(255,201,64,.55)'; c.beginPath(); c.moveTo(128, 128); c.arc(128, 128, r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * frac); c.closePath(); c.fill(); }
    c.strokeStyle = '#3a2a10'; c.lineWidth = 8; c.beginPath(); c.arc(128, 128, r - 4, 0, Math.PI * 2); c.stroke();
    for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; c.lineWidth = i % 3 ? 4 : 8; c.beginPath(); c.moveTo(128 + Math.sin(a) * 92, 128 - Math.cos(a) * 92); c.lineTo(128 + Math.sin(a) * 108, 128 - Math.cos(a) * 108); c.stroke(); }
    const a = -Math.PI * 2 * (1 - frac);
    c.lineWidth = 9; c.lineCap = 'round'; c.strokeStyle = mood === 'bad' ? '#ff4d6d' : mood === 'ok' ? '#21b37a' : '#3a2a10';
    c.beginPath(); c.moveTo(128, 128); c.lineTo(128 + Math.sin(a) * 86, 128 - Math.cos(a) * 86); c.stroke();
    if (mood) { c.font = 'bold 120px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillStyle = mood === 'ok' ? '#21b37a' : '#ff4d6d'; c.fillText(mood === 'ok' ? '✓' : '✗', 128, 136); }
    c.fillStyle = '#3a2a10'; c.beginPath(); c.arc(128, 128, 10, 0, Math.PI * 2); c.fill();
    gate.tex.needsUpdate = true;
  }
  spinGate(gate, dir = 1) { gate.spinFrom = gate.pivot.rotation.y; gate.spinDir = dir; gate.spinT = 0.9; }

  // ---------- Falltür und Zahnrad-Brücke ----------
  makeTrapdoor(x, z) {
    const hinge = new THREE.Group(); hinge.position.set(x - 1, 0, z); this.root.add(hinge);
    const plate = new THREE.Mesh(new THREE.BoxGeometry(2, 0.22, 2), new THREE.MeshStandardMaterial({ color: '#8b5a2b', roughness: 0.8 }));
    plate.position.set(1, -0.11, 0); plate.castShadow = plate.receiveShadow = true; hinge.add(plate);
    const stripes = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.02, 0.18), new THREE.MeshStandardMaterial({ color: '#ffc940' })); stripes.position.set(1, 0.01, 0); hinge.add(stripes);
    this.ground.push(plate);
    this.regions.push({ name: 'trap', x0: x - 1, x1: x + 1, z0: z - 1, z1: z + 1 });
    const td = { hinge, plate, angle: 0, target: 0 };
    this.updaters.push(dt => { td.angle += (td.target - td.angle) * Math.min(1, dt * 10); hinge.rotation.z = -td.angle; });
    return td;
  }
  makeBridge(zStart, zEnd) {
    const parts = [];
    const mat = new THREE.MeshStandardMaterial({ color: '#d4a24c', metalness: 0.55, roughness: 0.35 });
    for (let z = zStart; z >= zEnd; z -= 1) for (const x of [-0.5, 0.5]) {
      const p = this.clone('block-moving'); p.scale.set(1, 1, 1);
      const home = new THREE.Vector3(x, -0.3, z);
      p.position.set(x + (x < 0 ? -9 : 9), -4 - Math.random() * 3, z); p.visible = false;
      p.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
      this.root.add(p); parts.push({ obj: p, home, t: -1 });
    }
    // Zahnräder als Geländer-Deko
    const gears = [];
    for (let z = zStart; z >= zEnd; z -= 2.4) for (const x of [-1.25, 1.25]) {
      const g = this.gearMesh(0.42, 10, 0.12, mat); g.position.set(x, -0.1, z); g.rotation.y = Math.PI / 2; g.visible = false; this.root.add(g); gears.push(g);
    }
    const br = { parts, gears, built: false, z0: zEnd - 0.5, z1: zStart + 0.5 };
    this.updaters.push((dt, t) => {
      for (const p of parts) if (p.t >= 0 && p.t < 1) { p.t = Math.min(1, p.t + dt * 2.2); const k = 1 - Math.pow(1 - p.t, 3); p.obj.position.lerpVectors(p.from, p.home, k); p.obj.rotation.z = (1 - k) * 3; }
      gears.forEach((g, i) => { g.rotation.x = t * (i % 2 ? 1.5 : -1.5); });
    });
    return br;
  }
  buildBridge(onPart) {
    const br = this.bridge; br.built = true;
    br.parts.forEach((p, i) => setTimeout(() => { p.obj.visible = true; p.from = p.obj.position.clone(); p.t = 0; onPart && i % 2 === 0 && onPart(i); }, i * 70));
    setTimeout(() => br.gears.forEach(g => (g.visible = true)), 300);
    this.regions.push({ name: 'bridge', x0: -1, x1: 1, z0: br.z0, z1: br.z1 });
    br.parts.forEach(p => p.obj.traverse(o => { if (o.isMesh) this.ground.push(o); }));
  }

  // ---------- Kristall, Portal, Zahnräder, Uhrturm ----------
  makeCrystal(x, z) {
    const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.7, 0.9, 8), new THREE.MeshStandardMaterial({ color: '#e7dcc4', roughness: 0.6 }));
    ped.position.set(x, 0.45, z); ped.castShadow = true; this.root.add(ped);
    const cr = new THREE.Mesh(new THREE.OctahedronGeometry(0.42, 0), new THREE.MeshStandardMaterial({ color: '#8ef3ff', emissive: '#29d8ff', emissiveIntensity: 1.6, metalness: 0.2, roughness: 0.1, flatShading: true }));
    cr.scale.set(1, 1.5, 1); cr.position.set(x, 1.6, z); this.root.add(cr);
    const light = new THREE.PointLight('#56e4ff', 6, 6); light.position.set(x, 1.8, z); this.root.add(light);
    const crystal = { mesh: cr, light, x, z, taken: false };
    this.updaters.push((dt, t) => { if (crystal.taken) return; cr.rotation.y = t * 1.4; cr.position.y = 1.6 + Math.sin(t * 2) * 0.12; });
    return crystal;
  }
  makePortal(x, y, z) {
    const g = new THREE.Group(); g.position.set(x, y + 1.3, z); this.root.add(g);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.12, 12, 48), new THREE.MeshStandardMaterial({ color: '#c39bff', emissive: '#9b5cff', emissiveIntensity: 2.2 }));
    g.add(ring);
    const swirlTex = (() => { const cv = document.createElement('canvas'); cv.width = cv.height = 256; const c = cv.getContext('2d');
      const gr = c.createRadialGradient(128, 128, 10, 128, 128, 128); gr.addColorStop(0, '#ffffff'); gr.addColorStop(0.35, '#c39bff'); gr.addColorStop(1, 'rgba(91,40,200,0)');
      c.fillStyle = gr; c.fillRect(0, 0, 256, 256); c.strokeStyle = 'rgba(255,255,255,.55)'; c.lineWidth = 6;
      for (let i = 0; i < 5; i++) { c.beginPath(); for (let a = 0; a < 6; a += 0.05) { const r = 10 + a * 18; c.lineTo(128 + Math.cos(a + i * 1.26) * r, 128 + Math.sin(a + i * 1.26) * r); } c.stroke(); }
      const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t; })();
    const disc = new THREE.Mesh(new THREE.CircleGeometry(1.05, 40), new THREE.MeshBasicMaterial({ map: swirlTex, transparent: true, depthWrite: false, toneMapped: false }));
    g.add(disc);
    const light = new THREE.PointLight('#b47cff', 5, 7); g.add(light);
    const portal = { group: g, disc, ring, power: 1 };
    this.updaters.push((dt, t) => { disc.rotation.z = -t * 2.5; ring.scale.setScalar(1 + Math.sin(t * 3) * 0.03 * portal.power); g.visible = portal.power > 0.01; g.scale.setScalar(Math.max(0.001, portal.power)); });
    return portal;
  }
  gearMesh(r, teeth, depth, mat) {
    const shape = new THREE.Shape();
    for (let i = 0; i < teeth * 4; i++) { const a = i / (teeth * 4) * Math.PI * 2; const rr = (i % 4 < 2) ? r * 1.18 : r; const p = [Math.cos(a) * rr, Math.sin(a) * rr]; i ? shape.lineTo(...p) : shape.moveTo(...p); }
    const hole = new THREE.Path(); hole.absarc(0, 0, r * 0.3, 0, Math.PI * 2, true); shape.holes.push(hole);
    const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: depth * 0.2, bevelSize: r * 0.03, bevelSegments: 1 }); geo.center();
    const m = new THREE.Mesh(geo, mat); m.castShadow = true; return m;
  }
  bigGears() {
    const brass = new THREE.MeshStandardMaterial({ color: '#f0c058', metalness: 0.6, roughness: 0.3 });
    const copper = new THREE.MeshStandardMaterial({ color: '#e48a52', metalness: 0.55, roughness: 0.32 });
    const list = [[-17, 2, -18, 4.2, 18, brass, 0.25], [-19.5, -3.2, -11, 2.4, 12, copper, -0.44], [17, 0, -24, 5, 22, copper, -0.18], [18, 7, -31, 2.6, 12, brass, 0.36], [-16, 5, -34, 3.4, 16, copper, 0.3], [16, -4, -9, 3, 14, brass, 0.3], [-13, -7, -2, 3.6, 16, brass, 0.2]];
    this.gearsBig = list.map(([x, y, z, r, n, m, sp]) => { const g = this.gearMesh(r * 0.75, n, 0.6, m); g.position.set(x * 1.3, y, z); g.rotation.y = x < 0 ? 0.9 : -0.9; this.root.add(g); return { g, sp }; });
    this.updaters.push(dt => this.gearsBig.forEach(({ g, sp }) => { g.rotation.z += sp * dt; }));
  }
  clockTower(x, z) {
    const stone = new THREE.MeshStandardMaterial({ color: '#efe1c4', roughness: 0.85 });
    const roofM = new THREE.MeshStandardMaterial({ color: '#4b6cd6', roughness: 0.5 });
    const t = new THREE.Group(); t.position.set(x, 0, z); this.root.add(t);
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
    this.updaters.push((dt, tt) => { mh.rotation.z = -tt * 1.2; hh.rotation.z = -tt * 0.1; pend.rotation.x = Math.sin(tt * 2.2) * 0.35; });
    this.tower = t;
  }

  // ---------- Begehbarkeit ----------
  walkable(x, z, blockers) {
    // Rand nur seitlich (x) – in Laufrichtung (z) gehen Inseln, Hälse und Brücke nahtlos ineinander über
    const inside = this.regions.some(r => x > r.x0 + 0.25 && x < r.x1 - 0.25 && z >= r.z0 - 0.01 && z <= r.z1 + 0.01);
    if (!inside) return false;
    for (const b of blockers) if (z < b + 0.55 && z > b - 0.55) return false;
    return true;
  }
  update(dt, t) { for (const u of this.updaters) u(dt, t); }
}
