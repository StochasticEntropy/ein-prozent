// Grundbausteine jeder Rätselwelt: Himmel, Licht, Wolken, schwebende Grasinseln (Kenney Platformer
// Kit, CC0), Portal, Kristall, Countdown-Schilder an den Toren und die Begehbarkeit. Was eine Welt
// besonders macht (Tore, Brücke, Figuren, Gags), baut ihr Kapitel-Modul unter src/chapters/.
// Alles hängt an this.root – so lässt sich eine Welt komplett entfernen und eine andere laden.
import * as THREE from 'three';

export class World {
  constructor(scene, models, theme = {}) {
    this.scene = scene; this.models = models; this.theme = theme;
    this.ground = []; this.regions = []; this.gates = []; this.updaters = [];
    this.root = new THREE.Group(); scene.add(this.root);
    this.coins = [];
  }

  base() {
    const th = this.theme;
    this.sky(th.sky || ['#5aa7ff', '#ffd6a5', '#ff9aa2'], th.fog || ['#ffd9b8', 40, 120]);
    this.lights(th.hemi || ['#fff4e0', '#7a8cc7', 0.75], th.sun || ['#fff1d6', 1.9]);
    this.clouds(th.clouds ?? 70);
    return this;
  }
  dispose() {
    this.scene.remove(this.root); this.scene.fog = null;
    this.root.traverse(o => { if (o.geometry && !o.geometry.userData.shared) o.geometry.dispose(); });
  }

  // ---------- Himmel, Licht, Wolken ----------
  sky([top, mid, bot], fog) {
    const g = new THREE.SphereGeometry(400, 32, 16);
    const m = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false,
      uniforms: { top: { value: new THREE.Color(top) }, mid: { value: new THREE.Color(mid) }, bot: { value: new THREE.Color(bot) } },
      vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 top; uniform vec3 mid; uniform vec3 bot; varying vec3 vP; void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.0, 0.55, h)) : mix(mid, bot, smoothstep(0.0, -0.4, h)); gl_FragColor = vec4(c, 1.0); }',
    });
    this.root.add(new THREE.Mesh(g, m));
    this.scene.fog = new THREE.Fog(...fog);
  }
  lights([sky, ground, hi], [sunCol, sunI]) {
    this.root.add(new THREE.HemisphereLight(sky, ground, hi));
    const sun = new THREE.DirectionalLight(sunCol, sunI);
    sun.position.set(12, 22, 10); sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024); sun.shadow.camera.left = -18; sun.shadow.camera.right = 18; sun.shadow.camera.top = 18; sun.shadow.camera.bottom = -18; sun.shadow.bias = -0.0005;
    this.sun = sun; this.root.add(sun); this.root.add(sun.target);
  }
  clouds(N) {
    if (!N) return;
    const geo = new THREE.SphereGeometry(1, 12, 8);
    const mat = new THREE.MeshStandardMaterial({ color: this.theme.cloud || '#ffffff', roughness: 1, transparent: true, opacity: 0.92 });
    const inst = new THREE.InstancedMesh(geo, mat, N * 3);
    const d = new THREE.Object3D(); let k = 0; const puffs = [];
    for (let i = 0; i < N; i++) {
      const cx = (Math.random() - 0.5) * 90, cz = 10 - Math.random() * 70, cy = -6 - Math.random() * 10;
      for (let j = 0; j < 3; j++) { puffs.push({ x: cx + (j - 1) * 1.6, y: cy + Math.random(), z: cz + Math.random(), s: 1.4 + Math.random() * 1.6, sp: 0.3 + Math.random() * 0.4 }); }
    }
    this.updaters.push(dt => { k = 0; for (const p of puffs) { p.x += p.sp * dt; if (p.x > 48) p.x = -48; d.position.set(p.x, p.y, p.z); d.scale.set(p.s * 1.6, p.s, p.s); d.updateMatrix(); inst.setMatrixAt(k++, d.matrix); } inst.instanceMatrix.needsUpdate = true; });
    this.root.add(inst);
  }

  // ---------- Bausteine ----------
  clone(name) { return this.models.get(name); }
  place(name, x, y, z, s = 1, ry = 0) {
    const m = this.clone(name); m.position.set(x, y, z); m.scale.setScalar(s); m.rotation.y = ry;
    m.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    this.root.add(m); return m;
  }
  // Grasinsel aus 2×2-Kacheln mit Erdkegeln darunter. walk:false = nur Kulisse (nicht begehbar).
  island(name, xs, zs, { walk = true, cone = '#a8743f' } = {}) {
    const coneMat = new THREE.MeshStandardMaterial({ color: cone, roughness: 1, flatShading: true });
    for (const x of xs) for (const z of zs) {
      const b = this.place('block-grass-large', x, -1, z);
      if (walk) b.traverse(o => { if (o.isMesh) this.ground.push(o); });
      const c = new THREE.Mesh(new THREE.ConeGeometry(1.15, 2.2 + Math.random() * 1.6, 6), coneMat);
      c.rotation.x = Math.PI; c.position.set(x + (Math.random() - 0.5) * 0.3, -2.1, z + (Math.random() - 0.5) * 0.3); c.castShadow = true; this.root.add(c);
    }
    if (walk) this.regions.push({ name, x0: Math.min(...xs) - 1, x1: Math.max(...xs) + 1, z0: Math.min(...zs) - 1, z1: Math.max(...zs) + 1 });
  }
  addCoins(list, y = 0.35) {
    for (const [x, z, yy] of list) { const c = this.place('coin-gold', x, yy ?? y, z, 1.4); c.userData.y = yy ?? y; this.coins.push(c); }
    if (!this.coinSpin) { this.coinSpin = true; this.updaters.push((dt, t) => { this.coins.forEach((c, i) => { if (!c.visible) return; c.rotation.y = t * 2 + i; c.position.y = c.userData.y + Math.sin(t * 2 + i) * 0.08; }); }); }
  }

  // ---------- Tore ----------
  // Ein Tor braucht: id, x, z, eine Countdown-Anzeige (canvas) und open(dir) zum Öffnen.
  // style 'clock' = Uhr-Zifferblatt, 'wood' = Holzscheibe mit Blätterkranz.
  timerFace(gate, style, parent, pos, r = 0.62) {
    const cv = document.createElement('canvas'); cv.width = cv.height = 256;
    const tex = new THREE.CanvasTexture(cv); tex.colorSpace = THREE.SRGBColorSpace;
    const face = new THREE.Mesh(new THREE.CircleGeometry(r, 40), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }));
    face.position.copy(pos); parent.add(face);
    Object.assign(gate, { cv, tex, face, style });
    this.drawClock(gate, 1, false);
  }
  addGate(gate) { gate.open = gate.open || (() => {}); this.gates.push(gate); return gate; }
  drawClock(gate, frac, active, mood = '') {
    const c = gate.cv.getContext('2d'), W = 256, r = 118, wood = gate.style === 'wood';
    c.clearRect(0, 0, W, W);
    c.fillStyle = wood ? (active ? '#f3d9a4' : '#e2c48c') : active ? '#fff7e0' : '#f4ead2'; c.beginPath(); c.arc(128, 128, r, 0, Math.PI * 2); c.fill();
    if (wood) { c.strokeStyle = 'rgba(122,79,42,.35)'; c.lineWidth = 3; for (let rr = 24; rr < r; rr += 18) { c.beginPath(); c.arc(128, 128, rr, 0, Math.PI * 2); c.stroke(); } }
    if (active) { c.fillStyle = frac < 0.17 ? 'rgba(255,77,109,.55)' : wood ? 'rgba(76,175,80,.55)' : 'rgba(255,201,64,.55)'; c.beginPath(); c.moveTo(128, 128); c.arc(128, 128, r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * frac); c.closePath(); c.fill(); }
    c.strokeStyle = wood ? '#5b3a1a' : '#3a2a10'; c.lineWidth = 8; c.beginPath(); c.arc(128, 128, r - 4, 0, Math.PI * 2); c.stroke();
    if (wood) { // Blätterkranz: verbleibende Zeit = grüne Blätter, abgelaufene = welk
      for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6, alive = i / 12 < frac || !active;
        c.save(); c.translate(128 + Math.sin(a) * 98, 128 - Math.cos(a) * 98); c.rotate(a); c.fillStyle = alive ? '#3fae49' : '#b5823c';
        c.beginPath(); c.ellipse(0, 0, 9, 16, 0, 0, Math.PI * 2); c.fill(); c.restore(); }
    } else for (let i = 0; i < 12; i++) { const a = i * Math.PI / 6; c.lineWidth = i % 3 ? 4 : 8; c.beginPath(); c.moveTo(128 + Math.sin(a) * 92, 128 - Math.cos(a) * 92); c.lineTo(128 + Math.sin(a) * 108, 128 - Math.cos(a) * 108); c.stroke(); }
    const a = -Math.PI * 2 * (1 - frac);
    c.lineWidth = 9; c.lineCap = 'round'; c.strokeStyle = mood === 'bad' ? '#ff4d6d' : mood === 'ok' ? '#21b37a' : '#3a2a10';
    if (!mood || !wood) { c.beginPath(); c.moveTo(128, 128); c.lineTo(128 + Math.sin(a) * 76, 128 - Math.cos(a) * 76); c.stroke(); }
    if (mood) { c.font = 'bold 120px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillStyle = mood === 'ok' ? '#21b37a' : '#ff4d6d'; c.fillText(mood === 'ok' ? '✓' : '✗', 128, 136); }
    else if (wood && !active) { c.font = 'bold 110px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillStyle = '#5b3a1a'; c.fillText('?', 128, 136); }
    if (!mood && !(wood && !active)) { c.fillStyle = '#3a2a10'; c.beginPath(); c.arc(128, 128, 10, 0, Math.PI * 2); c.fill(); }
    gate.tex.needsUpdate = true;
  }
  spinGate(gate, dir = 1) { gate.open(dir); }
  buildBridge(onPart) { if (this.bridge && !this.bridge.built) this.bridge.build(onPart); }

  // ---------- Kristall, Portal ----------
  makeCrystal(x, z, { y = 1.6, ped = true } = {}) {
    if (ped) { const p = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.7, 0.9, 8), new THREE.MeshStandardMaterial({ color: '#e7dcc4', roughness: 0.6 }));
      p.position.set(x, 0.45, z); p.castShadow = true; this.root.add(p); }
    const cr = new THREE.Mesh(new THREE.OctahedronGeometry(0.42, 0), new THREE.MeshStandardMaterial({ color: '#8ef3ff', emissive: '#29d8ff', emissiveIntensity: 1.6, metalness: 0.2, roughness: 0.1, flatShading: true }));
    cr.scale.set(1, 1.5, 1); cr.position.set(x, y, z); this.root.add(cr);
    const light = new THREE.PointLight('#56e4ff', 6, 6); light.position.set(x, y + 0.2, z); this.root.add(light);
    const crystal = { mesh: cr, light, x, z, y, taken: false };
    this.updaters.push((dt, t) => { if (crystal.taken) return; cr.rotation.y = t * 1.4; cr.position.y = y + Math.sin(t * 2) * 0.12; });
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
    const portal = { group: g, disc, ring, power: 1, x, z };
    this.updaters.push((dt, t) => { disc.rotation.z = -t * 2.5; ring.scale.setScalar(1 + Math.sin(t * 3) * 0.03 * portal.power); g.visible = portal.power > 0.01; g.scale.setScalar(Math.max(0.001, portal.power)); });
    return portal;
  }

  // ---------- Begehbarkeit ----------
  walkable(x, z, blockers) {
    // Abstand zum Abgrund nur seitlich (x), und nur an echten Kanten: Wo zwei Flächen aneinanderstoßen
    // (Insel an Insel, Insel an Brücke), ist die Naht frei begehbar. In Laufrichtung (z) geht alles nahtlos ineinander über.
    const on = (px) => this.regions.some(r => px >= r.x0 && px <= r.x1 && z >= r.z0 - 0.01 && z <= r.z1 + 0.01);
    if (!on(x - 0.25) || !on(x + 0.25)) return false;
    for (const b of blockers) if (z < b + 0.55 && z > b - 0.55) return false;
    return true;
  }
  update(dt, t) { for (const u of this.updaters) u(dt, t); }
}
