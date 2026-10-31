(() => {
  'use strict';
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const D = window.Difficulty;
  const TIERS = D.TIERS;
  const BANK = window.QUIZ_BANK.map(q => D.annotate({ ...q }));
  // Regeln wie bei SAT.1: 1.000 € Einsatz, zwei Joker à 500 € (ab der 75 %- und ab der 50 %-Frage),
  // Ausstieg nach der 30 %-Frage, Finale: 10.000 € Abfindung teilen oder 1 %-Frage um den Jackpot.
  const STAKE = 1000;
  const JOKER_COST = 500;
  const SAFE_SHARE = 10000;
  const FINAL = TIERS.length - 1;
  const MAX_NUMBER = 6;
  const JOKER_AT = [TIERS.indexOf(75), TIERS.indexOf(50)];
  const CASHOUT_AFTER = TIERS.indexOf(30);
  const jokerAvail = (i, used) => i === FINAL ? 0 : JOKER_AT.filter(x => i >= x).length - used;

  // ---------- Speicher ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem('opq:' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem('opq:' + k, JSON.stringify(v)); } catch { /* privater Modus */ } },
  };
  const settings = Object.assign({ sound: true, haptics: true, timer: 'normal', motion: true, team: 'wette' }, store.get('settings', {}));
  Cast.use(settings.team);
  Sound.enabled = settings.sound;
  document.body.classList.toggle('calm', !settings.motion);

  // ---------- Hilfen ----------
  function mulberry(seed) {
    let a = seed >>> 0;
    return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }
  const hash = s => [...s].reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 16777619), 2166136261) >>> 0;
  const shuffle = (arr, rng) => { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const gauss = rng => { let u = 0; while (!u) u = rng(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * rng()); };
  const eur = n => Math.round(n).toLocaleString('de-DE') + ' €';
  const sleep = ms => new Promise(r => setTimeout(r, settings.motion ? ms : Math.min(ms, 150)));
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const today = () => { const d = new Date(); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
  const buzz = p => { if (settings.haptics && navigator.vibrate) try { navigator.vibrate(p); } catch { /* egal */ } };

  function erf(x) { const t = 1 / (1 + 0.3275911 * Math.abs(x)); const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x); return x >= 0 ? y : -y; }
  const Phi = x => 0.5 * (1 + erf(x / Math.SQRT2));
  function invPhi(p) {
    const a = [-39.69683028665376, 220.9460984245205, -275.9285104469687, 138.3577518672690, -30.66479806614716, 2.506628277459239];
    const b = [-54.47609879822406, 161.5858368580409, -155.6989798598866, 66.80131188771972, -13.28068155288572];
    const c = [-0.007784894002430293, -0.3223964580411365, -2.400758277161838, -2.549732539343734, 4.374664141464968, 2.938163982698783];
    const d = [0.007784695709041462, 0.3224671290700398, 2.445134137142996, 3.754408661907416];
    const lo = 0.02425; let q, r;
    if (p < lo) { q = Math.sqrt(-2 * Math.log(p)); return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1); }
    if (p > 1 - lo) { q = Math.sqrt(-2 * Math.log(1 - p)); return -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1); }
    q = p - 0.5; r = q * q;
    return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
  }

  function norm(s) {
    return String(s).trim().toUpperCase().replace(/Ä/g, 'AE').replace(/Ö/g, 'OE').replace(/Ü/g, 'UE').replace(/ß/g, 'SS').replace(/[^A-Z0-9]/g, '');
  }
  function isCorrect(q, val) {
    if (val == null || val === '') return false;
    if (q.type === 'choice') return val === q.a;
    if (q.type === 'number') return Number(String(val).replace(',', '.')) === q.a;
    const v = norm(val);
    if ([q.a, ...(q.accept || [])].map(norm).includes(v)) return true;
    return (q.contains || []).some(c => v.includes(norm(c)));
  }
  const solutionText = q => q.type === 'choice' ? q.opts[q.a] : String(q.a);

  // ---------- Statistik (lokale Lösungsquoten zur Kalibrierung) ----------
  const stats = store.get('stats', {});
  function record(q, ok) {
    const seen = store.get('seen', []);
    if (!seen.includes(q.id)) { seen.push(q.id); store.set('seen', seen); }
    const s = stats[q.id] || [0, 0];
    s[0]++; if (ok) s[1]++;
    stats[q.id] = s; store.set('stats', stats);
  }

  // ---------- Fragen ziehen ----------
  // Bereits gesehene Fragen nur, wenn eine Stufe keine neuen mehr hat (nicht in der Tagesshow:
  // die muss für alle gleich sein).
  function pickRun(rng, { preferUnseen = true } = {}) {
    const used = new Set(), usedFam = new Set(), lastCats = [];
    let numCount = 0;
    const seen = preferUnseen ? new Set(store.get('seen', [])) : new Set();
    return TIERS.map(t => {
      let pool = BANK.filter(q => q.tier === t && !used.has(q.id));
      const otherFam = pool.filter(q => !usedFam.has(q.fam));
      if (otherFam.length) pool = otherFam;
      // Höchstens MAX_NUMBER Fragen mit Zahlenantwort pro Runde – die Sendung ist vor allem Sprache und Logik.
      { const words = pool.filter(q => q.type !== 'number');
        if (words.length && (numCount >= MAX_NUMBER || rng() < 0.65)) pool = words; }
      // Abwechslung: möglichst keine Kategorie, die in den letzten zwei Fragen schon dran war.
      const otherCat = pool.filter(q => !lastCats.includes(q.cat));
      if (otherCat.length) pool = otherCat;
      const fresh = pool.filter(q => !seen.has(q.id));
      if (fresh.length) pool = fresh;
      if (!pool.length) {
        const rest = BANK.filter(q => !used.has(q.id)).sort((a, b) => Math.abs(Math.log(a.p) - Math.log(t / 100)) - Math.abs(Math.log(b.p) - Math.log(t / 100)));
        pool = rest.slice(0, 3);
      }
      const q = pool[Math.floor(rng() * pool.length)];
      used.add(q.id); usedFam.add(q.fam); lastCats.push(q.cat); if (lastCats.length > 2) lastCats.shift();
      if (q.type === 'number') numCount++;
      return q;
    });
  }

  // ---------- Mitspieler ----------
  const NAMES = ('Anna Ben Clara David Emma Finn Greta Hannah Ilias Jana Jonas Kai Lara Leon Lina Luca Mara Mats Mia Milan Nele Noah Ole Paula Paul Rosa Sami Selin Tom Ulla Vera Yusuf Zoe Aylin Bernd Carla Deniz Elias Frieda Gustav Heike Ida Jan Karin Lea Lukas Marta Moritz Nina Oskar Petra Rafael Sabine Tim Ute Viktor Wiebke Xenia Yara Zeynep Alex Birgit Cem Dana Erik Fatma Gerd Helena Ivo Jule Konrad Lotte Malte Nora Otto Pia Quentin Ronja Sven Tilda Uwe Vincent Wanda Anton Bea Chris Doris Emil Fiona Georg Hanna Igor Jakob Kira Lars Merle Niklas Olga Philipp').split(' ');
  const seatColor = i => `hsl(${(i * 47) % 360} 85% 68%)`;
  const ME_SEAT = 44;

  function makeRivals(rng) {
    const names = shuffle(NAMES, rng).slice(0, 99);
    return names.map((name, k) => ({ name, theta: 0.5 + gauss(rng), alive: true, jokers: 0, money: STAKE, cashed: false, seat: k < ME_SEAT ? k : k + 1 }));
  }
  function rivalCorrect(r, p, rng) {
    const s = 0.7;
    const b = -invPhi(Math.min(0.995, Math.max(0.005, p))) * Math.sqrt(1 + s * s);
    return rng() < Phi((r.theta - b) / s);
  }

  // ---------- Bildschirme ----------
  function show(id) {
    $$('.screen').forEach(s => s.classList.toggle('active', s.id === id));
  }

  let sheetResolve = null;
  function sheet(html, { closable = false } = {}) {
    const ov = $('#overlay'), sh = $('#sheet');
    sh.innerHTML = html;
    ov.hidden = false;
    ov.dataset.closable = closable ? '1' : '';
    const first = sh.querySelector('.btn.primary') || sh.querySelector('.btn');
    if (first) setTimeout(() => first.focus({ preventScroll: true }), 50);
    sh.scrollTop = 0;
    return new Promise(res => { sheetResolve = res; });
  }
  function closeSheet(val) {
    $('#overlay').hidden = true;
    const r = sheetResolve; sheetResolve = null;
    if (r) r(val);
  }
  $('#overlay').addEventListener('click', e => {
    const b = e.target.closest('[data-act]');
    if (b) { Sound.tap(); closeSheet(b.dataset.act); return; }
    if (e.target.id === 'overlay' && $('#overlay').dataset.closable) closeSheet('close');
  });

  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2200);
  }

  // ---------- Effekte ----------
  const fx = $('#fx'), fctx = fx.getContext('2d');
  let parts = [], fxRunning = false;
  function sizeFx() { const r = devicePixelRatio || 1; fx.width = innerWidth * r; fx.height = innerHeight * r; fctx.setTransform(r, 0, 0, r, 0, 0); }
  addEventListener('resize', sizeFx); sizeFx();
  function confetti(n = 80, big = false) {
    if (!settings.motion) return;
    const cols = ['#ffc940', '#2fe39f', '#22d3ee', '#ff7ab6', '#8b5cf6', '#ffffff'];
    for (let i = 0; i < n; i++) {
      parts.push({ x: innerWidth / 2 + (Math.random() - .5) * (big ? innerWidth : 120), y: big ? -20 : innerHeight * 0.45,
        vx: (Math.random() - .5) * (big ? 4 : 12), vy: big ? Math.random() * 3 + 2 : -Math.random() * 12 - 4,
        r: Math.random() * 6 + 4, a: Math.random() * 6, va: (Math.random() - .5) * .3, c: cols[i % cols.length], life: big ? 260 : 120 });
    }
    if (!fxRunning) { fxRunning = true; requestAnimationFrame(fxLoop); }
  }
  function fxLoop() {
    fctx.clearRect(0, 0, innerWidth, innerHeight);
    parts = parts.filter(p => p.life-- > 0 && p.y < innerHeight + 40);
    for (const p of parts) {
      p.vy += 0.25; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.a += p.va;
      fctx.save(); fctx.translate(p.x, p.y); fctx.rotate(p.a); fctx.globalAlpha = Math.min(1, p.life / 40);
      fctx.fillStyle = p.c; fctx.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); fctx.restore();
    }
    if (parts.length) requestAnimationFrame(fxLoop); else { fxRunning = false; fctx.clearRect(0, 0, innerWidth, innerHeight); }
  }

  // ---------- Wake Lock (Tablet bleibt an) ----------
  let wakeLock = null;
  async function keepAwake(on) {
    try {
      if (on && 'wakeLock' in navigator && !wakeLock) { wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener?.('release', () => { wakeLock = null; }); }
      if (!on && wakeLock) { await wakeLock.release(); wakeLock = null; }
    } catch { wakeLock = null; }
  }

  // =====================================================================
  // Spielzustand
  // =====================================================================
  let G = null;

  function timeFor(i) {
    if (G.mode === 'training' || settings.timer === 'off') return 0;
    const base = settings.timer === 'long' ? 60 : 30;
    return i === FINAL ? base * 2 : base;
  }

  function newShow(mode) {
    const seed = mode === 'daily' ? hash('ein-prozent:' + today()) : (Math.random() * 2 ** 32) >>> 0;
    const rng = mulberry(seed);
    G = {
      mode, rng, simRng: mulberry(seed ^ 0x9e3779b9), run: pickRun(rng, { preferUnseen: mode !== 'daily' }), i: 0, pot: 0,
      me: { alive: true, jokers: 0, money: STAKE, ghost: false, cashed: false, final: null, winnings: 0, results: [], outAt: null },
      rivals: null, seats: [],
    };
    G.rivals = makeRivals(G.simRng);
    G.seats = Array.from({ length: 100 }, (_, i) => ({ st: 'in', c: i === ME_SEAT ? null : seatColor(i) }));
  }

  // ---------- Arena ----------
  function arenaHTML(mini = false) {
    return G.seats.map((s, i) => {
      const cls = ['seat', s.st === 'out' ? 'out' : '', s.st === 'cashed' ? 'cashed' : '', s.joker ? 'passed' : '', i === ME_SEAT ? 'me' : ''].join(' ');
      return `<div class="${cls}" data-i="${i}" style="${s.c ? `--c:${s.c}` : ''}"></div>`;
    }).join('');
  }
  function renderArena(intro = false) {
    const a = $('#arena');
    if (G.mode === 'party') {
      a.className = 'party-list';
      a.innerHTML = G.players.map(p => `<div class="pchip ${p.alive ? '' : 'out'}"><span class="dot" style="background:${p.color}">${esc(p.name[0] || '?')}</span>${esc(p.name)}<span class="tag">${p.alive ? (p.jokers ? `${p.jokers} Joker` : '') : 'raus'}</span></div>`).join('');
      return;
    }
    a.className = 'arena';
    a.innerHTML = arenaHTML();
    if (intro) $$('.seat', a).forEach((el, i) => { el.classList.add('in'); el.style.animationDelay = `${(i % 10) * 25 + Math.floor(i / 10) * 35}ms`; });
  }
  function dropSeats(container, idxs) {
    idxs.forEach((i, k) => {
      const el = container.querySelector(`.seat[data-i="${i}"]`);
      if (!el) return;
      el.classList.remove('out');
      el.style.animationDelay = `${Math.min(1400, k * (1400 / Math.max(1, idxs.length)))}ms`;
      el.classList.add('dropping');
    });
  }
  function aliveCount() {
    return G.rivals.filter(r => r.alive).length + (G.me.alive ? 1 : 0);
  }
  function updateHud() {
    const n = $('#alive-n');
    if (G.mode === 'party') {
      n.textContent = `${G.players.filter(p => p.alive).length}/${G.players.length}`;
      $('#alive-l').textContent = 'im Spiel';
    } else if (G.mode === 'training') {
      n.textContent = `${G.right}/${G.asked}`;
      $('#alive-l').textContent = `richtig · Serie ${G.streak}`;
    } else {
      n.textContent = aliveCount();
      $('#alive-l').textContent = 'im Spiel';
    }
    $('.stat.pot').hidden = G.mode !== 'show' && G.mode !== 'daily';
    animateNumber($('#pot-n'), G.pot || 0);
    renderLadder();
  }
  function animateNumber(el, to) {
    const from = Number(el.dataset.v || 0);
    el.dataset.v = to;
    if (from === to) { el.textContent = eur(to); return; }
    el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
    const t0 = performance.now(), dur = 900;
    const step = t => { const k = Math.min(1, (t - t0) / dur); el.textContent = eur(from + (to - from) * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  }
  function renderLadder() {
    const l = $('#ladder');
    if (G.mode === 'training') { l.innerHTML = ''; return; }
    const res = G.mode === 'party' ? [] : G.me.results;
    l.innerHTML = TIERS.map((t, i) => {
      const r = res[i];
      const cls = r === 'ok' ? 'done' : r === 'pass' ? 'passed' : r === 'bad' ? 'fail' : r === 'ghost-ok' ? 'ghost' : '';
      return `<div class="rung ${cls} ${i === G.i ? 'cur' : ''} ${i === FINAL ? 'final' : ''}" title="${t} %"></div>`;
    }).join('');
  }

  function ticker(html) { $('#ticker').innerHTML = html; }

  // =====================================================================
  // Frage anzeigen + Eingabe
  // =====================================================================
  let cur = null; // { q, val, order, locked, timer }

  function renderQuestion(q, { kicker, sub }) {
    $('#tier-n').textContent = q.tier;
    $('#q-kicker').textContent = kicker;
    $('#q-sub').textContent = sub;
    const card = $('#q-card');
    card.classList.remove('enter'); void card.offsetWidth; card.classList.add('enter');
    $('#q-text').innerHTML = q.q;
    $('#q-visual').innerHTML = q.svg || '';
    const ans = $('#answer');
    ans.className = 'answer';
    cur = { q, val: q.type === 'choice' ? null : '', locked: false };
    if (q.type === 'choice') {
      const rng = G.rng || Math.random;
      cur.order = q.noShuffle ? q.opts.map((_, i) => i) : shuffle(q.opts.map((_, i) => i), rng);
      const long = q.opts.some(o => o.length > 22);
      ans.innerHTML = `<div class="opts ${long ? 'long' : ''}">${cur.order.map((oi, k) =>
        `<button class="opt" data-oi="${oi}" style="animation-delay:${80 + k * 60}ms"><span class="k">${'ABCD'[k]}</span><span>${esc(q.opts[oi])}</span></button>`).join('')}</div>`;
    } else if (q.type === 'number') {
      ans.innerHTML = `<div class="entry" id="entry"></div><div class="pad num">${
        ['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(k => `<button class="key" data-k="${k}">${k}</button>`).join('')
      }<button class="key fn" data-k="CLR" aria-label="Alles löschen">C</button><button class="key" data-k="0">0</button><button class="key fn" data-k="DEL" aria-label="Löschen">⌫</button></div>`;
    } else {
      const rows = ['QWERTZUIOP', 'ASDFGHJKLÜ', 'YXCVBNMÄÖß'];
      ans.innerHTML = `<div class="entry" id="entry"></div><div class="pad abc">${
        rows.join('').split('').map(k => `<button class="key" data-k="${k}">${k}</button>`).join('')
      }<button class="key fn wide" data-k="CLR" style="grid-column:span 5">Leeren</button><button class="key fn wide" data-k="DEL" style="grid-column:span 5" aria-label="Löschen">⌫ Löschen</button></div>`;
    }
    renderEntry();
    updateLock();
    $('#q-col-scroll')?.scrollTo?.(0, 0);
    $('.q-col').scrollTop = 0;
  }

  function renderEntry() {
    const e = $('#entry'); if (!e) return;
    e.innerHTML = cur.val ? `${esc(cur.val)}<span class="caret"></span>` : `<span class="ph">${cur.q.type === 'number' ? 'Zahl eingeben' : 'Antwort eingeben'}</span>`;
  }
  function updateLock() {
    const ok = cur && !cur.locked && cur.val !== null && cur.val !== '';
    const b = $('#btn-lock');
    b.disabled = !ok;
    b.classList.toggle('armed', !!ok);
  }
  function inputKey(k) {
    if (!cur || cur.locked) return;
    const max = cur.q.type === 'number' ? 9 : 20;
    if (k === 'DEL') cur.val = cur.val.slice(0, -1);
    else if (k === 'CLR') cur.val = '';
    else if (cur.val.length < max) cur.val += k;
    Sound.key(); buzz(8);
    renderEntry(); updateLock();
  }
  function choose(oi) {
    if (!cur || cur.locked) return;
    cur.val = oi;
    $$('.opt').forEach(b => b.classList.toggle('sel', Number(b.dataset.oi) === oi));
    Sound.tap(); buzz(10);
    updateLock();
  }

  $('#answer').addEventListener('click', e => {
    const o = e.target.closest('.opt'); if (o) return choose(Number(o.dataset.oi));
    const k = e.target.closest('.key'); if (k) { k.blur(); return inputKey(k.dataset.k); }
  });

  // ---------- Timer ----------
  function startTimer(sec, onEnd) {
    stopTimer();
    const ring = $('#timer-ring'), num = $('#timer-num'), badge = $('#tier-badge');
    badge.classList.remove('urgent'); num.classList.remove('urgent');
    if (!sec) { ring.style.strokeDashoffset = 0; num.textContent = ''; return; }
    let left = sec * 1000, last = performance.now(), lastSec = sec;
    const T = { raf: 0, paused: false };
    const loop = now => {
      if (!T.paused) left -= now - last;
      last = now;
      const frac = Math.max(0, left / (sec * 1000));
      ring.style.strokeDashoffset = 283 * (1 - frac);
      if (cur.onTick) cur.onTick(sec * 1000 - left, left);
      const s = Math.ceil(Math.max(0, left) / 1000);
      num.textContent = s;
      if (s !== lastSec) {
        lastSec = s;
        if (s <= 5 && s > 0) { Sound.tick(true); buzz(15); badge.classList.add('urgent'); num.classList.add('urgent'); }
        else if (s <= 10 && s > 0) Sound.tick(false);
      }
      if (left <= 0) { stopTimer(); onEnd(); return; }
      T.raf = requestAnimationFrame(loop);
    };
    T.raf = requestAnimationFrame(loop);
    cur.timer = T;
  }
  function stopTimer() {
    if (cur?.timer) { cancelAnimationFrame(cur.timer.raf); cur.timer = null; }
    $('#tier-badge').classList.remove('urgent');
  }
  document.addEventListener('visibilitychange', () => { if (cur?.timer) cur.timer.paused = document.hidden; });

  // ---------- Einloggen ----------
  let lockResolve = null;
  function waitForLock(sec, { canPass }) {
    $('#btn-pass').hidden = !canPass;
    return new Promise(res => {
      lockResolve = res;
      startTimer(sec, () => finishLock(cur.val === '' ? null : cur.val, true));
    });
  }
  function finishLock(val, timeout = false) {
    if (!cur || cur.locked || !lockResolve) return;
    cur.locked = true;
    stopTimer();
    $('#btn-pass').hidden = true;
    $('#answer').classList.add('locked');
    $('.opts')?.classList.add('locked');
    updateLock();
    if (timeout) { toast('Zeit abgelaufen!'); buzz([60, 40, 60]); } else { Sound.lock(); buzz(25); }
    const r = lockResolve; lockResolve = null;
    r({ val: timeout && (val === null || val === '') ? null : val, timeout, passed: false });
  }
  function doPass() {
    if (!cur || cur.locked || !lockResolve) return;
    cur.locked = true; stopTimer();
    $('#btn-pass').hidden = true; updateLock();
    const r = lockResolve; lockResolve = null;
    r({ val: null, passed: true });
  }

  // Lösung im Eingabebereich zeigen
  async function revealInline(q, val, ok) {
    if (q.type === 'choice') {
      $$('.opt').forEach(b => {
        const oi = Number(b.dataset.oi);
        if (oi === q.a) b.classList.add('right');
        else if (oi === val) b.classList.add('wrongsel');
      });
    } else {
      const e = $('#entry');
      if (e) { e.classList.add(ok ? 'right' : 'wrongsel'); if (!ok) e.innerHTML = `${val ? `<s>${esc(val)}</s>&nbsp;→&nbsp;` : ''}${esc(solutionText(q))}`; }
    }
  }

  // Bühne leeren, damit beim nächsten Spiel nichts vom vorigen durchscheint.
  function resetStage() {
    stopTimer(); cur = null;
    ['#q-text', '#q-visual', '#answer', '#booth-slot', '#ticker'].forEach(s => { $(s).innerHTML = ''; });
    $('#tier-n').textContent = '90'; $('#q-kicker').textContent = ''; $('#q-sub').textContent = ''; $('#timer-num').textContent = '';
    $('#btn-pass').hidden = true; $('#lockbar').hidden = true; $('#btn-lock').disabled = true;
  }

  // ---------- Kommentatoren, Tafel, Studio-Auswertung ----------
  // Erklärung als Kreidetafel: Satz für Satz erscheint wie mit Kreide geschrieben.
  function chalk(q) {
    const steps = q.ex.split(/(?<=[.!?:])\s+(?=[A-ZÄÖÜ0-9„(])/).filter(Boolean);
    return `<div class="chalk"><div class="chalk-sol">Lösung: <b>${esc(solutionText(q))}</b></div>${
      steps.map((t, k) => `<div class="chalk-line" style="animation-delay:${0.5 + k * 0.9}s">${t}</div>`).join('')}</div>`;
  }
  // Animierte Balken: wie das Studio geantwortet hat.
  function studioBars(q, st, meVal, meJoker) {
    if (!st || !st.n) return '';
    const rows = [];
    if (q.type === 'choice') {
      q.opts.forEach((o, oi) => rows.push({ label: o, n: st.byOpt[oi] || 0, ok: oi === q.a, me: meVal === oi }));
    } else {
      rows.push({ label: `Richtig: ${solutionText(q)}`, n: st.right, ok: true, me: false });
      rows.push({ label: 'Falsch', n: st.wrong, ok: false, me: false });
    }
    if (st.joker) rows.push({ label: 'Joker gezogen', n: st.joker, joker: true, me: meJoker });
    return `<div class="bars"><div class="bars-h">So hat das Studio geantwortet <small>(${st.n} Personen)</small></div>${rows.map((r, k) => {
      const pct = Math.round(100 * r.n / st.n);
      return `<div class="bar ${r.ok ? 'ok' : r.joker ? 'joker' : 'bad'} ${r.me ? 'me' : ''}"><span class="bl">${esc(r.label)}${r.me ? ' ← du' : ''}</span>
        <span class="bt"><i style="--w:${pct}%;animation-delay:${0.2 + k * 0.15}s"></i></span><span class="bp">${pct} %</span></div>`;
    }).join('')}</div>`;
  }
  const booth = () => $('#booth');
  function mountBooth() { const b = $('#booth-slot'); b.innerHTML = Cast.boothHTML(true); b.firstElementChild.id = 'booth'; }
  function sheetBooth(lines) {
    setTimeout(() => { const el = $('#sheet .booth'); if (el) Cast.play(el, lines); }, 120);
    return Cast.boothHTML(false);
  }

  // Stufen-Intro: die Prozentzahl knallt rein, das Duo spielt eine kleine Szene.
  function stageIntro(i, q, extra = '') {
    return new Promise(async resolve => {
      const ov = $('#stage-intro');
      const left = G.mode === 'party' ? G.players.filter(p => p.alive).length : aliveCount();
      const hue = q.tier >= 70 ? 165 : q.tier >= 40 ? 45 : q.tier >= 10 ? 345 : 285;
      ov.style.setProperty('--hue', hue);
      ov.innerHTML = `<div class="si-inner">
        <div class="si-kicker">${i === FINAL ? 'Das Finale' : `Frage ${i + 1} von ${TIERS.length}`}</div>
        <div class="si-tier"><span>${q.tier}</span><small>%</small></div>
        <div class="si-sub">${q.tier === 1 ? 'Nur einer von hundert löst sie' : `${q.tier} von 100 Menschen lösen sie`} · noch <b>${left}</b> im Spiel${extra}</div>
        ${Cast.boothHTML(false)}
        <button class="btn primary si-go">Frage zeigen</button></div>`;
      ov.hidden = false;
      ov.classList.remove('out'); void ov.offsetWidth; ov.classList.add('in');
      Sound.whoosh();
      let done = false;
      const finish = () => { if (done) return; done = true; ov.classList.add('out'); setTimeout(() => { ov.hidden = true; resolve(); }, settings.motion ? 350 : 0); };
      ov.querySelector('.si-go').onclick = () => { Sound.tap(); finish(); };
      ov._finish = finish;
      await sleep(500);
      await Cast.play(ov.querySelector('.booth'), Cast.stage(q.tier), { pace: 0.8 });
      await sleep(900);
      finish();
    });
  }

  // Live-Einloggen: Mitspieler loggen während der Bedenkzeit sichtbar ein.
  function planLockins(sec) {
    const alive = G.rivals.filter(r => r.alive);
    const total = alive.length;
    G.lockPlan = alive.map(r => ({ r, t: (0.12 + 0.8 * Math.pow(G.simRng(), 0.9)) * (sec || 25) * 1000 })).sort((a, b) => a.t - b.t);
    G.lockDone = 0; G.lockTotal = total;
    $$('#arena .seat.locked').forEach(s => s.classList.remove('locked'));
    renderLockbar();
  }
  function renderLockbar() {
    const lb = $('#lockbar'); if (!lb) return;
    if (!G.lockTotal) { lb.hidden = true; return; }
    lb.hidden = false;
    lb.innerHTML = `<span class="lb-t"><b>${G.lockDone}</b> von ${G.lockTotal} Mitspielern haben eingeloggt</span><span class="lb-bar"><i style="width:${100 * G.lockDone / G.lockTotal}%"></i></span>`;
  }
  function tickLockins(elapsed) {
    if (!G?.lockPlan) return;
    let changed = false;
    while (G.lockDone < G.lockPlan.length && G.lockPlan[G.lockDone].t <= elapsed) {
      const el = $(`#arena .seat[data-i="${G.lockPlan[G.lockDone].r.seat}"]`);
      if (el) el.classList.add('locked');
      G.lockDone++; changed = true;
    }
    if (changed) renderLockbar();
  }

  // =====================================================================
  // Show / Tagesshow
  // =====================================================================
  async function runShow(mode) {
    resetStage();
    newShow(mode);
    show('game');
    renderArena(true);
    updateHud();
    ticker('<b>100 Kandidatinnen und Kandidaten</b> – jede und jeder setzt 1.000 €.');
    keepAwake(true);
    Sound.whoosh();
    const daily = mode === 'daily' ? store.get('daily', {})[today()] : null;
    mountBooth();
    await sheet(`
      ${sheetBooth(Cast.stage(90))}
      <h2>${mode === 'daily' ? 'Tagesshow ' + new Date().toLocaleDateString('de-DE') : 'Willkommen in der Show'}</h2>
      <p>Du und 99 Mitspieler setzt je <b>1.000 €</b>. Wer falsch antwortet, fliegt – sein Geld wandert in den Jackpot. Ab der 75 %- und der 50 %-Frage gibt es je einen <b>Joker</b> (500 €).</p>
      <p>Die Zahl im Kreis sagt, wie viel Prozent der Menschen die Frage lösen (geschätzt). ${timeFor(0) ? `Pro Frage hast du <b>${timeFor(0)} Sekunden</b>.` : 'Ohne Zeitlimit.'}</p>
      ${daily ? `<p>Heute schon gespielt: bis zur <b>${daily.reached} %-Frage</b>. Eine weitere Runde zählt nicht neu.</p>` : ''}
      <div class="stack"><button class="btn primary" data-act="go">Los geht's</button></div>`);

    for (G.i = 0; G.i < TIERS.length; G.i++) {
      const i = G.i, q = G.run[i];
      updateHud();

      // Ausstieg nach der 30 %-Frage
      if (i === CASHOUT_AFTER + 1) {
        rivalsCashOut();
        if (G.me.alive && !G.me.ghost) {
          const act = await sheet(`
            ${sheetBooth(Cast.scene('cashout'))}<h2>Ausstieg möglich</h2>
            <p>Du hast die 30 %-Frage geschafft. Du kannst jetzt mit deinem Restgeld von <b>${eur(G.me.money)}</b> nach Hause gehen – oder weiterspielen und auf den Jackpot (${eur(G.pot)}) zielen.</p>
            <div class="stack"><button class="btn primary" data-act="stay">Weiterspielen</button><button class="btn" data-act="cash">${eur(G.me.money)} nehmen und gehen</button></div>`);
          if (act === 'cash') {
            G.me.cashed = true; G.me.alive = false; G.me.ghost = true; G.me.winnings = G.me.money; G.me.outAt = i;
            G.seats[ME_SEAT].st = 'cashed';
            Sound.coin(); renderArena();
            const a2 = await sheet(`<h2>${eur(G.me.winnings)} gesichert</h2><p>Willst du die restlichen Fragen <b>außer Konkurrenz</b> weiterspielen? Das zählt nicht mehr fürs Geld, aber für dich.</p>
              <div class="stack"><button class="btn primary" data-act="on">Außer Konkurrenz weiter</button><button class="btn" data-act="end">Zum Ergebnis</button></div>`);
            if (a2 === 'end') break;
          }
        }
        updateHud();
      }

      // Finale
      let finalPlay = true;
      if (i === FINAL && G.me.alive && !G.me.ghost) {
        const fin = G.rivals.filter(r => r.alive).length + 1;
        const share = SAFE_SHARE / fin;
        Sound.drum();
        const act = await sheet(`
          ${sheetBooth(Cast.scene('final'))}<h2>Du bist im Finale!</h2>
          <p>${fin === 1 ? 'Du bist als <b>Einzige(r)</b> übrig.' : `Mit dir sind <b>${fin} Finalisten</b> übrig.`} Jetzt kommt die <b>1 %-Frage</b>.</p>
          <div class="kv"><span>Sicher nehmen</span><span>${eur(share)}</span><span>Jackpot für die Richtigen</span><span>${eur(G.pot)}</span></div>
          <p>Spielst du und liegst richtig, teilst du dir den Jackpot mit allen, die ebenfalls richtig liegen. Liegst du falsch, gehst du leer aus.</p>
          <div class="stack"><button class="btn primary" data-act="play">1 %-Frage spielen</button><button class="btn" data-act="safe">${eur(share)} nehmen</button></div>`);
        if (act === 'safe') { finalPlay = false; G.me.final = 'safe'; G.me.winnings = share; G.me.ghost = true; }
      }

      // Frage stellen
      if (i > 0 || true) await stageIntro(i, q, jokerAvail(i, G.me.jokers) > 0 && G.me.alive && !G.me.ghost && (i === JOKER_AT[0] || i === JOKER_AT[1]) ? ' · <b>Joker frei!</b>' : '');
      const canPass = G.me.alive && !G.me.ghost && jokerAvail(i, G.me.jokers) > 0;
      renderQuestion(q, {
        kicker: i === FINAL ? 'Die 1 %-Frage' : `Frage ${i + 1} von ${TIERS.length}${G.me.ghost ? ' · außer Konkurrenz' : ''}`,
        sub: `${q.tier} % lösen sie (geschätzt) · ${q.cat}`,
      });
      planLockins(timeFor(i));
      let teased = false, panicked = false;
      Cast.play(booth(), [['a', 'think', 'Konzentration …'], ['b', 'smug', Cast.tease()]], { pace: 1.5 });
      cur.onTick = (el, left) => {
        tickLockins(el);
        if (!teased && el > 12000) { teased = true; Cast.play(booth(), [['b', 'smug', Cast.tease()]]); }
        if (!panicked && left < 5000) { panicked = true; Cast.pose(booth(), 'a', 'shock'); Cast.pose(booth(), 'b', 'happy'); }
      };
      const res = await waitForLock(timeFor(i), { canPass });
      tickLockins(Infinity);

      let ok = false;
      if (res.passed) {
        G.me.jokers++; G.me.money -= JOKER_COST; G.pot += JOKER_COST; G.me.results[i] = 'pass'; G.seats[ME_SEAT].joker = true;
        Sound.coin();
      } else {
        ok = isCorrect(q, res.val);
        if (!G.me.ghost || G.me.final === 'safe' || G.me.cashed || G.me.outAt != null) record(q, ok);
        await sleep(350);
        Sound.drum();
        await sleep(900);
        await revealInline(q, res.val, ok);
        if (ok) { Sound.correct(); buzz(30); confetti(60); } else { Sound.wrong(); buzz([80, 50, 80]); }
        Cast.pose(booth(), 'a', ok ? 'happy' : 'sad'); Cast.pose(booth(), 'b', ok ? 'shock' : 'happy');
        await sleep(900);
      }

      // Mitspieler
      const dropped = simulateRivals(i, q);
      const meWasIn = G.me.alive && !G.me.ghost;
      if (meWasIn && !res.passed) {
        G.me.results[i] = ok ? 'ok' : 'bad';
        if (!ok) { G.me.alive = false; G.me.outAt = i; G.pot += G.me.money; G.me.money = 0; G.seats[ME_SEAT].st = 'out'; dropped.push(ME_SEAT); }
      } else if (!meWasIn && !res.passed) {
        G.me.results[i] = ok ? 'ghost-ok' : 'ghost-bad';
      }
      if (i === FINAL && finalPlay && meWasIn) G.me.final = ok ? 'won' : 'lost';

      // Finale auswerten
      let finalInfo = '';
      if (i === FINAL) finalInfo = settleFinal(ok && meWasIn && finalPlay);

      renderArena();
      dropSeats($('#arena'), dropped);
      updateHud();
      const left = aliveCount();
      ticker(dropped.length ? `<b>${dropped.length}</b> ${dropped.length === 1 ? 'Person ist' : 'Personen sind'} raus${dropped.includes(ME_SEAT) ? ' – <b>auch du</b>' : ''}. Noch <b>${left}</b> im Spiel.` : `Alle haben es geschafft. Noch <b>${left}</b> im Spiel.`);

      const act = await revealSheet(q, res, ok, dropped, finalInfo, meWasIn);
      if (act === 'end') break;
    }

    G.i = TIERS.length;
    stopTimer();
    keepAwake(false);
    await showResult();
  }

  function rivalsCashOut() {
    for (const r of G.rivals) if (r.alive && G.simRng() < 0.12) { r.alive = false; r.cashed = true; G.seats[r.seat].st = 'cashed'; }
  }

  function simulateRivals(i, q) {
    const dropped = [];
    const st = G.studio = { n: 0, right: 0, wrong: 0, joker: 0, byOpt: {} };
    const wrongOpts = q.type === 'choice' ? q.opts.map((_, k) => k).filter(k => k !== q.a) : [];
    const pickWrong = () => { const w = [0.5, 0.3, 0.2]; let x = G.simRng(); for (let k = 0; k < wrongOpts.length; k++) { x -= w[k] || 0.1; if (x < 0) return wrongOpts[k]; } return wrongOpts[0]; };
    for (const r of G.rivals) {
      if (!r.alive) continue;
      if (i === FINAL && r.final === 'safe') continue;
      st.n++;
      const ok = rivalCorrect(r, q.p, G.simRng);
      if (ok) { r.lastOk = true; st.right++; if (q.type === 'choice') st.byOpt[q.a] = (st.byOpt[q.a] || 0) + 1; continue; }
      if (jokerAvail(i, r.jokers) > 0 && G.simRng() < 0.5) { r.jokers++; r.money -= JOKER_COST; G.seats[r.seat].joker = true; G.pot += JOKER_COST; r.lastOk = true; st.joker++; continue; }
      st.wrong++;
      if (q.type === 'choice') { const w = pickWrong(); st.byOpt[w] = (st.byOpt[w] || 0) + 1; }
      r.lastOk = false;
      if (i === FINAL) { r.final = 'lost'; continue; }
      r.alive = false; G.seats[r.seat].st = 'out'; G.pot += r.money; r.money = 0; dropped.push(r.seat);
    }
    return dropped;
  }

  function settleFinal(meRight) {
    const finalists = G.rivals.filter(r => r.alive);
    // Mitspieler entscheiden vor der Frage: ~40 % nehmen den sicheren Anteil.
    let safeN = 0, rightN = meRight ? 1 : 0;
    const totalFin = finalists.length + (G.me.final ? 1 : 0);
    for (const r of finalists) {
      if (r.final === undefined && G.simRng() < 0.4) { r.final = 'safe'; safeN++; continue; }
      if (r.final === 'safe') { safeN++; continue; }
      if (r.lastOk) { r.final = 'won'; rightN++; } else r.final = 'lost';
    }
    if (G.me.final === 'won') G.me.winnings = G.pot / rightN;
    if (G.me.final === 'lost') G.me.winnings = 0;
    if (G.me.final === 'safe') G.me.winnings = SAFE_SHARE / Math.max(1, totalFin);
    G.final = { rightN, safeN, totalFin };
    return `<div class="kv"><span>Finalisten</span><span>${totalFin}</span><span>Sicher genommen</span><span>${safeN + (G.me.final === 'safe' ? 1 : 0)}</span><span>1 %-Frage richtig</span><span>${rightN}</span></div>`;
  }

  async function revealSheet(q, res, ok, dropped, finalInfo, meWasIn) {
    const i = G.i;
    const key = res.passed ? 'joker' : ok ? (meWasIn ? 'correct' : 'ghost') : res.timeout ? 'timeout' : (meWasIn && i !== FINAL ? 'out' : 'wrong');
    const verdict = sheetBooth(Cast.scene(key)) + (res.passed ? `<h2 class="v-title">🃏 Joker gesetzt</h2><p>500 € wandern in den Jackpot – du bist weiter dabei.</p>`
      : ok ? `<h2 class="v-title ok">✓ ${meWasIn ? 'Richtig!' : 'Richtig – außer Konkurrenz'}</h2>`
        : `<h2 class="v-title bad">✕ ${res.timeout ? 'Zeit abgelaufen' : 'Leider falsch'}</h2>`);
    const outMsg = meWasIn && !ok && !res.passed && i !== FINAL
      ? `<p>Damit bist du bei der <b>${q.tier} %-Frage</b> ausgeschieden.</p>` : '';
    const left = aliveCount();
    const mini = G.mode !== 'party' ? `<div class="mini-arena" id="mini-arena">${arenaHTML(true)}</div>
      <p><b>${dropped.length}</b> raus · noch <b>${left}</b> im Spiel · Jackpot <b>${eur(G.pot)}</b></p>` : '';
    let buttons;
    if (i === FINAL) buttons = `<button class="btn primary" data-act="next">Zum Ergebnis</button>`;
    else if (meWasIn && !ok && !res.passed) buttons = `<button class="btn primary" data-act="next">Außer Konkurrenz weiter</button><button class="btn" data-act="end">Zum Ergebnis</button>`;
    else buttons = `<button class="btn primary" data-act="next">Nächste Frage · ${TIERS[i + 1]} %</button>${G.me.ghost ? '<button class="btn" data-act="end">Beenden</button>' : ''}`;
    const p = sheet(`${verdict}${outMsg}
      ${chalk(q)}
      ${studioBars(q, G.studio, res.passed ? null : res.val, res.passed)}
      ${finalInfo}${mini}
      <div class="stack">${buttons}</div>`);
    const m = $('#mini-arena');
    if (m) setTimeout(() => dropSeats(m, dropped), 250);
    return p;
  }

  async function showResult() {
    const me = G.me;
    const reachedIdx = me.outAt != null ? me.outAt : (me.results.filter(Boolean).length ? TIERS.length - 1 : 0);
    const reachedTier = TIERS[reachedIdx];
    const solvedAll = me.final === 'won';
    let headline, big;
    if (me.final === 'won') { headline = 'Du hast die 1 %-Frage geknackt!'; big = eur(me.winnings); }
    else if (me.final === 'safe') { headline = 'Sicher ist sicher'; big = eur(me.winnings); }
    else if (me.final === 'lost') { headline = 'Bis ins Finale!'; big = eur(me.winnings); }
    else if (me.cashed) { headline = 'Mit dem Einsatz nach Hause'; big = eur(me.winnings); }
    else { headline = `Raus bei der ${reachedTier} %-Frage`; big = '0 €'; }
    if (solvedAll) { Sound.fanfare(); confetti(220, true); }
    const ghostBest = me.results.reduce((b, r, i) => (r === 'ghost-ok' ? i : b), -1);
    const grid = shareGrid();
    if (G.mode === 'daily') {
      const d = store.get('daily', {});
      if (!d[today()]) { d[today()] = { reached: reachedTier, grid, won: me.winnings }; store.set('daily', d); }
    }
    const best = store.get('best', {});
    const score = me.final ? 100 : reachedIdx;
    if (!(best[G.mode] >= score)) { best[G.mode] = score; store.set('best', best); }
    const beat = Math.round(100 - reachedTier);
    const act = await sheet(`
      ${sheetBooth(Cast.scene(me.final === 'won' ? 'win' : me.final === 'safe' ? 'safe' : 'lose'))}
      <h2>${headline}</h2>
      <div class="big-num">${big}</div>
      <p>${me.final === 'won' ? 'Das schafft geschätzt nur etwa 1 von 100.' : me.outAt != null && !me.cashed ? `Die Frage davor lösen geschätzt ${TIERS[Math.max(0, reachedIdx - 1)]} % – du warst also schon besser als rund ${Math.max(0, 100 - TIERS[Math.max(0, reachedIdx - 1)])} % der Leute.` : `Du warst besser als rund ${beat} % der Leute.`}</p>
      ${ghostBest > (me.outAt ?? -1) ? `<p>Außer Konkurrenz hast du noch die <b>${TIERS[ghostBest]} %-Frage</b> gelöst.</p>` : ''}
      <div class="share-grid">${grid}</div>
      <div class="stack">
        <button class="btn primary" data-act="share">Ergebnis teilen</button>
        <button class="btn" data-act="again">${G.mode === 'daily' ? 'Normale Show spielen' : 'Nochmal spielen'}</button>
        <button class="btn ghost" data-act="home">Zum Start</button>
      </div>`);
    if (act === 'share') { await shareResult(); return showResultAfterShare(); }
    if (act === 'again') return runShow('show');
    goHome();
  }
  async function showResultAfterShare() {
    const act = await sheet(`<h2>Noch eine Runde?</h2><div class="stack"><button class="btn primary" data-act="again">Nochmal spielen</button><button class="btn ghost" data-act="home">Zum Start</button></div>`);
    if (act === 'again') return runShow('show');
    goHome();
  }
  function shareGrid() {
    return TIERS.map((_, i) => ({ ok: '🟩', pass: '🟨', bad: '🟥', 'ghost-ok': '🟢', 'ghost-bad': '⭕' }[G.me.results[i]] || '⬛')).join('');
  }
  async function shareResult() {
    const me = G.me;
    const reached = me.final === 'won' ? '1 %-Frage geknackt 🏆' : me.outAt != null ? `raus bei der ${TIERS[me.outAt]} %-Frage` : me.final ? 'im Finale' : '';
    const text = `Ein Prozent${G.mode === 'daily' ? ' – Tagesshow ' + new Date().toLocaleDateString('de-DE') : ''}\n${reached}\n${shareGrid()}\n${location.href.split('#')[0]}`;
    try {
      if (navigator.share) { await navigator.share({ text }); return; }
      await navigator.clipboard.writeText(text); toast('In die Zwischenablage kopiert');
    } catch { toast('Teilen abgebrochen'); }
  }

  // =====================================================================
  // Party (mehrere Personen, ein Gerät)
  // =====================================================================
  const PCOLORS = ['#ffc940', '#2fe39f', '#22d3ee', '#ff7ab6', '#a78bfa', '#fb923c'];
  let partyNames = store.get('partyNames', ['', '']);

  function renderPartySetup() {
    $('#party-names').innerHTML = partyNames.map((n, i) => `
      <div class="name-row"><span class="dot" style="background:${PCOLORS[i]}">${i + 1}</span>
      <input type="text" maxlength="14" placeholder="Name ${i + 1}" value="${esc(n)}" data-i="${i}" autocomplete="off" enterkeyhint="next">
      ${partyNames.length > 2 ? `<button class="icon-btn" data-del="${i}" aria-label="Entfernen">✕</button>` : ''}</div>`).join('');
    $('[data-action="party-add"]').disabled = partyNames.length >= 6;
  }
  $('#party-names').addEventListener('input', e => { const i = e.target.dataset.i; if (i != null) partyNames[i] = e.target.value; });
  $('#party-names').addEventListener('click', e => { const d = e.target.closest('[data-del]'); if (d) { partyNames.splice(Number(d.dataset.del), 1); renderPartySetup(); } });

  async function runParty() {
    resetStage();
    const names = partyNames.map((n, i) => n.trim() || `Person ${i + 1}`);
    store.set('partyNames', partyNames);
    const rng = mulberry((Math.random() * 2 ** 32) >>> 0);
    G = { mode: 'party', rng, run: pickRun(rng), i: 0, pot: 0, me: { results: [] },
      players: names.map((name, k) => ({ name, color: PCOLORS[k], alive: true, jokers: 0, reached: -1, results: [] })) };
    show('game'); renderArena(); updateHud(); keepAwake(true); mountBooth(); G.lockTotal = 0; renderLockbar();
    ticker('Jede Person antwortet verdeckt. Erst wenn alle dran waren, wird aufgelöst.');
    await sheet(`${sheetBooth(Cast.scene('party'))}<h2>Party!</h2><p>${G.players.map(p => esc(p.name)).join(', ')} – 19 Fragen, verdeckt antworten, Gerät weitergeben. Ab 75 % und 50 % gibt es je einen Joker.</p>
      <div class="stack"><button class="btn primary" data-act="go">Los geht's</button></div>`);

    for (G.i = 0; G.i < TIERS.length; G.i++) {
      const i = G.i, q = G.run[i];
      const alive = G.players.filter(p => p.alive);
      if (!alive.length) break;
      updateHud();
      await stageIntro(i, q);
      const answers = [];
      for (const p of alive) {
        // Vorhang
        $('#q-text').innerHTML = ''; $('#q-visual').innerHTML = ''; $('#answer').innerHTML = '';
        await sheet(`${sheetBooth(Cast.scene('curtain', { name: esc(p.name) }))}<p>Frage ${i + 1} · ${q.tier} %</p><p>Gib das Gerät an</p><div class="curtain-name" style="color:${p.color}">${esc(p.name)}</div>
          <div class="stack"><button class="btn primary" data-act="go">Ich bin ${esc(p.name)} – Frage zeigen</button></div>`);
        renderQuestion(q, { kicker: `${p.name} ist dran · Frage ${i + 1}/${TIERS.length}`, sub: `${q.tier} % lösen sie (geschätzt) · ${q.cat}` });
        Sound.whoosh();
        const res = await waitForLock(timeFor(i), { canPass: jokerAvail(i, p.jokers) > 0 });
        answers.push({ p, res, ok: !res.passed && isCorrect(q, res.val) });
        if (!res.passed) record(q, answers.at(-1).ok);
        await sleep(400);
      }
      // Auflösung
      Sound.drum(); await sleep(1000);
      const anyOk = answers.some(a => a.ok || a.res.passed);
      for (const a of answers) {
        if (a.res.passed) { a.p.jokers++; a.p.results[i] = 'pass'; a.p.reached = i; }
        else if (a.ok) { a.p.results[i] = 'ok'; a.p.reached = i; }
        else { a.p.results[i] = 'bad'; a.p.alive = false; }
      }
      anyOk ? (Sound.correct(), confetti(50)) : Sound.wrong();
      renderArena(); updateHud();
      const fmt = a => a.res.passed ? 'Joker' : a.res.val == null ? '–' : q.type === 'choice' ? q.opts[a.res.val] : a.res.val;
      const stillIn = G.players.filter(p => p.alive).length;
      const last = i === FINAL || stillIn === 0;
      await sheet(`<h2>Auflösung · ${q.tier} %</h2>
        ${chalk(q)}
        <div class="party-res">${answers.map(a => `<div class="pchip"><span class="dot" style="background:${a.p.color}">${esc(a.p.name[0])}</span>${esc(a.p.name)}
          <span class="tag ${a.res.passed ? 'pass' : a.ok ? 'ok' : 'bad'}">${esc(fmt(a))} ${a.res.passed ? '🃏' : a.ok ? '✓' : '✕'}</span></div>`).join('')}</div>
        <div class="stack"><button class="btn primary" data-act="next">${last ? 'Zur Siegerehrung' : `Nächste Frage · ${TIERS[i + 1]} %`}</button></div>`);
      if (stillIn === 0) break;
    }
    keepAwake(false);
    const ranked = [...G.players].sort((a, b) => b.reached - a.reached || (a.jokers - b.jokers));
    const champs = ranked.filter(p => p.reached === TIERS.length - 1);
    Sound.fanfare(); confetti(180, true);
    const act = await sheet(`<div class="verdict ok">🏆</div><h2>${champs.length ? `${champs.map(p => esc(p.name)).join(' & ')} ${champs.length > 1 ? 'knacken' : 'knackt'} die 1 %-Frage!` : `${esc(ranked[0].name)} kommt am weitesten`}</h2>
      <div class="party-res">${ranked.map((p, k) => `<div class="pchip"><span class="dot" style="background:${p.color}">${k + 1}</span>${esc(p.name)}
        <span class="tag">${p.reached < 0 ? 'erste Frage verpasst' : `bis ${TIERS[p.reached]} %`}${p.jokers ? ` · ${p.jokers} Joker` : ''}</span></div>`).join('')}</div>
      <div class="stack"><button class="btn primary" data-act="again">Revanche</button><button class="btn ghost" data-act="home">Zum Start</button></div>`);
    if (act === 'again') return runParty();
    goHome();
  }

  // =====================================================================
  // Training
  // =====================================================================
  const BANDS = [
    { key: 'warm', name: 'Aufwärmen', sub: '90 – 70 %', tiers: [90, 85, 80, 75, 70] },
    { key: 'mid', name: 'Mittelfeld', sub: '65 – 40 %', tiers: [65, 60, 55, 50, 45, 40] },
    { key: 'hard', name: 'Knifflig', sub: '35 – 20 %', tiers: [35, 30, 25, 20] },
    { key: 'pro', name: 'Profi', sub: '15 – 1 %', tiers: [15, 10, 5, 1] },
    { key: 'all', name: 'Alles gemischt', sub: 'quer durch', tiers: TIERS },
  ];
  function renderTrainingSetup() {
    $('#training-bands').innerHTML = BANDS.map(b => {
      const n = BANK.filter(q => b.tiers.includes(q.tier)).length;
      return `<button class="btn big" data-band="${b.key}"><span>${b.name}</span><small>${b.sub} · ${n} Fragen</small></button>`;
    }).join('');
  }
  $('#training-bands').addEventListener('click', e => { const b = e.target.closest('[data-band]'); if (b) { Sound.tap(); runTraining(BANDS.find(x => x.key === b.dataset.band)); } });

  async function runTraining(band) {
    resetStage();
    const rng = mulberry((Math.random() * 2 ** 32) >>> 0);
    const pool = shuffle(BANK.filter(q => band.tiers.includes(q.tier)), rng).sort((a, b) => b.p - a.p > 0 ? 1 : -1);
    // grob nach Schwierigkeit, innerhalb gemischt
    const deck = shuffle(pool, rng);
    G = { mode: 'training', rng, i: 0, right: 0, asked: 0, streak: 0, seats: [], me: { results: [] } };
    show('game'); renderArena(); updateHud(); mountBooth(); G.lockTotal = 0; renderLockbar();
    $('#arena').className = ''; $('#arena').innerHTML = '';
    Cast.play(booth(), Cast.scene('training'));
    ticker(`<b>${band.name}</b> · ${deck.length} Fragen · ohne Zeitdruck`);
    for (let k = 0; k < deck.length; k++) {
      const q = deck[k];
      renderQuestion(q, { kicker: `Training · ${band.name} · ${k + 1}/${deck.length}`, sub: `${q.tier} % lösen sie (geschätzt) · ${q.cat}` });
      const res = await waitForLock(0, { canPass: false });
      const ok = isCorrect(q, res.val);
      record(q, ok);
      G.asked++; if (ok) { G.right++; G.streak++; } else G.streak = 0;
      await revealInline(q, res.val, ok);
      ok ? (Sound.correct(), confetti(40)) : Sound.wrong();
      updateHud();
      const act = await sheet(`${sheetBooth(Cast.scene(ok ? 'correct' : 'wrong'))}<h2 class="v-title ${ok ? 'ok' : 'bad'}">${ok ? '✓ Richtig!' : '✕ Nicht ganz'}</h2>
        ${chalk(q)}
        <p>${G.right} von ${G.asked} richtig · Serie ${G.streak}</p>
        <div class="stack">${k < deck.length - 1 ? '<button class="btn primary" data-act="next">Nächste Frage</button>' : ''}<button class="btn ${k < deck.length - 1 ? 'ghost' : 'primary'}" data-act="end">Training beenden</button></div>`);
      if (act === 'end') break;
    }
    goHome();
  }

  // =====================================================================
  // Menüs: Anleitung, Statistik, Einstellungen
  // =====================================================================
  function howto() {
    return sheet(`<div class="howto"><h2>So geht's</h2><ol>
      <li><b>19 Fragen</b>, von der 90 %-Frage bis zur <b>1 %-Frage</b>. Die Zahl sagt, wie viele Menschen sie (geschätzt) lösen.</li>
      <li>Kein Faktenwissen – es geht um <b>Logik, Muster, Sprache und genaues Hinsehen</b>.</li>
      <li>Antworte vor Ablauf der Zeit und tippe auf <b>Einloggen</b>.</li>
      <li>Du startest mit <b>1.000 €</b>. Falsch heißt: raus – dein Geld wandert in den Jackpot.</li>
      <li>Ab der 75 %- und ab der 50 %-Frage gibt es je einen <b>Joker</b>: Er überspringt eine Frage und kostet 500 €.</li>
      <li>Nach der 30 %-Frage kannst du <b>mit deinem Restgeld aussteigen</b>.</li>
      <li>Im <b>Finale</b> teilst du dir sicher 10.000 € mit allen Finalisten – oder spielst die 1 %-Frage um den Jackpot.</li>
      <li>Ausgeschieden? Spiel <b>außer Konkurrenz</b> weiter und sieh, wie weit du gekommen wärst.</li>
    </ol><p>Tastatur: <b>A–D</b> oder <b>1–4</b> wählen, Ziffern/Buchstaben tippen, <b>Enter</b> loggt ein.</p>
    <div class="stack"><button class="btn primary" data-act="ok">Verstanden</button></div></div>`, { closable: true });
  }

  function statsSheet() {
    const rows = TIERS.map(t => {
      const qs = BANK.filter(q => q.tier === t);
      let n = 0, c = 0;
      qs.forEach(q => { const s = stats[q.id]; if (s) { n += s[0]; c += s[1]; } });
      return `<tr><td>${t} %</td><td>${qs.length}</td><td>${n}</td><td>${n ? Math.round(100 * c / n) + ' %' : '–'}</td></tr>`;
    }).join('');
    const best = store.get('best', {});
    const bestTxt = m => best[m] == null ? '–' : best[m] >= 100 ? '1 % geknackt' : `${TIERS[best[m]]} %`;
    return sheet(`<h2>Statistik</h2>
      <div class="kv"><span>Beste Show</span><span>${bestTxt('show')}</span><span>Beste Tagesshow</span><span>${bestTxt('daily')}</span></div>
      <p>Deine Lösungsquote pro Stufe. Mit genug Spielen zeigt sich, ob die geschätzten Prozente stimmen.</p>
      <table class="stats-table"><tr><th>Stufe</th><th>Fragen</th><th>gespielt</th><th>richtig</th></tr>${rows}</table>
      <div class="stack"><button class="btn" data-act="export">Daten exportieren (JSON)</button><button class="btn primary" data-act="ok">Schließen</button></div>`, { closable: true })
      .then(async act => {
        if (act !== 'export') return;
        const data = JSON.stringify({ exported: new Date().toISOString(), model: { tau: D.tau, kappa: D.kappa },
          questions: BANK.map(q => ({ id: q.id, tier: q.tier, p: +q.p.toFixed(4), seen: stats[q.id]?.[0] || 0, correct: stats[q.id]?.[1] || 0 })) }, null, 1);
        try {
          const blob = new Blob([data], { type: 'application/json' });
          const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `ein-prozent-statistik-${today()}.json`; a.click();
          setTimeout(() => URL.revokeObjectURL(a.href), 2000);
        } catch { await navigator.clipboard?.writeText(data); toast('Kopiert'); }
      });
  }

  function teamSheet() {
    const html = () => `<h2>Moderation wählen</h2><p>Wer führt dich durch die Show?</p><div class="teams">${Cast.list().map(t => `
      <button class="team ${t.id === settings.team ? 'on' : ''}" data-team="${t.id}">
        <span class="team-figs">${t.a.draw('happy')}${t.b.draw('smug')}</span>
        <span class="team-txt"><b>${esc(t.title)}</b><small>${esc(t.a.name)} & ${esc(t.b.name)}</small><small>${esc(t.tagline)}</small></span></button>`).join('')}</div>
      <div class="stack"><button class="btn primary" data-act="ok">Fertig</button></div>`;
    const p = sheet(html(), { closable: true });
    $('#sheet').onclick = e => {
      const b = e.target.closest('[data-team]'); if (!b) return;
      settings.team = b.dataset.team; store.set('settings', settings); Cast.use(settings.team);
      Sound.tap(); $('#sheet').innerHTML = html();
      const t = Cast.team(); toast(`${t.a.name} & ${t.b.name} moderieren`);
    };
    return p.then(() => { $('#sheet').onclick = null; updateHomeTeam(); });
  }
  function updateHomeTeam() {
    const t = Cast.team(), el = $('#home-team');
    if (el && t) el.innerHTML = `<span class="ht-figs">${t.a.draw('happy')}${t.b.draw('smug')}</span><span class="ht-txt"><small>Heute moderieren</small><b>${esc(t.a.name)} & ${esc(t.b.name)}</b><small>ändern ›</small></span>`;
  }

  function settingsSheet() {
    const seg = (key, opts) => `<div class="seg">${opts.map(([v, l]) => `<button data-set="${key}" data-val="${v}" class="${String(settings[key]) === String(v) ? 'on' : ''}">${l}</button>`).join('')}</div>`;
    const html = () => `<h2>Einstellungen</h2>
      <div class="setting"><span>Ton</span>${seg('sound', [[true, 'An'], [false, 'Aus']])}</div>
      <div class="setting"><span>Vibration</span>${seg('haptics', [[true, 'An'], [false, 'Aus']])}</div>
      <div class="setting"><span>Zeit pro Frage</span>${seg('timer', [['normal', '30 s'], ['long', '60 s'], ['off', 'Aus']])}</div>
      <div class="setting"><span>Animationen</span>${seg('motion', [[true, 'Voll'], [false, 'Ruhig']])}</div>
      <div class="stack"><button class="btn primary" data-act="ok">Fertig</button></div>`;
    const p = sheet(html(), { closable: true });
    $('#sheet').onclick = e => {
      const b = e.target.closest('[data-set]'); if (!b) return;
      const k = b.dataset.set, raw = b.dataset.val;
      settings[k] = raw === 'true' ? true : raw === 'false' ? false : raw;
      store.set('settings', settings);
      Sound.enabled = settings.sound;
      document.body.classList.toggle('calm', !settings.motion);
      Sound.tap();
      $('#sheet').innerHTML = html();
    };
    return p.then(() => { $('#sheet').onclick = null; });
  }

  // =====================================================================
  // Navigation + Tastatur
  // =====================================================================
  function goHome() {
    stopTimer(); keepAwake(false);
    const si = $('#stage-intro'); if (si && !si.hidden) { si.hidden = true; }
    lockResolve = null; cur = null; G = null;
    $('#overlay').hidden = true;
    show('home');
    updateDailySub();
  }
  function updateDailySub() {
    const d = store.get('daily', {})[today()];
    $('#daily-sub').textContent = d ? `Heute geschafft: bis ${d.reached} % · ${d.grid}` : 'Heute für alle dieselben Fragen';
  }

  document.addEventListener('click', async e => {
    const b = e.target.closest('[data-action]'); if (!b) return;
    Sound.unlock(); Sound.tap();
    const a = b.dataset.action;
    if (a === 'show' || a === 'daily') runShow(a);
    else if (a === 'party-setup') { renderPartySetup(); show('party-setup'); }
    else if (a === 'party-add') { if (partyNames.length < 6) { partyNames.push(''); renderPartySetup(); $$('#party-names input').at(-1).focus(); } }
    else if (a === 'party-start') runParty();
    else if (a === 'training') { renderTrainingSetup(); show('training-setup'); }
    else if (a === 'home') goHome();
    else if (a === 'howto') howto();
    else if (a === 'stats') statsSheet();
    else if (a === 'settings') settingsSheet();
    else if (a === 'team') teamSheet();
    else if (a === 'lock') finishLock(cur?.val);
    else if (a === 'pass') {
      if (!cur || cur.locked) return;
      const t = cur.timer; if (t) t.paused = true;
      const ans = await sheet(`<h2>Joker einsetzen?</h2><p>Du überspringst diese Frage und bist sicher weiter. Der Joker kostet <b>500 €</b>, die in den Jackpot wandern. Pro Spiel gibt es zwei: ab der 75 %- und ab der 50 %-Frage.</p>
        <div class="stack"><button class="btn primary" data-act="yes">Joker setzen</button><button class="btn" data-act="no">Doch nicht</button></div>`);
      if (t) t.paused = false;
      if (ans === 'yes') doPass();
    } else if (a === 'quit') {
      const t = cur?.timer; if (t) t.paused = true;
      const ans = await sheet(`<h2>Spiel beenden?</h2><p>Der aktuelle Fortschritt geht verloren.</p><div class="stack"><button class="btn primary" data-act="stay">Weiterspielen</button><button class="btn" data-act="quit">Beenden</button></div>`);
      if (t) t.paused = false;
      if (ans === 'quit') goHome();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT') {
      if (e.key === 'Enter' && $('#party-setup').classList.contains('active')) runParty();
      return;
    }
    if (!$('#overlay').hidden) {
      if (e.key === 'Enter') { const b = $('#sheet .btn.primary'); if (b && document.activeElement?.closest?.('#sheet') == null) { e.preventDefault(); b.click(); } }
      if (e.key === 'Escape' && $('#overlay').dataset.closable) closeSheet('close');
      return;
    }
    if (!cur || cur.locked || !$('#game').classList.contains('active')) return;
    const k = e.key;
    if (k === 'Enter') { e.preventDefault(); if (!$('#btn-lock').disabled) finishLock(cur.val); return; }
    if (cur.q.type === 'choice') {
      const idx = '1234'.indexOf(k) >= 0 ? '1234'.indexOf(k) : 'abcd'.indexOf(k.toLowerCase());
      if (idx >= 0 && idx < cur.order.length && k.length === 1) choose(cur.order[idx]);
      return;
    }
    let key = null;
    if (k === 'Backspace') key = 'DEL';
    else if (k === 'Delete' || k === 'Escape') key = 'CLR';
    else if (cur.q.type === 'number' && /^[0-9]$/.test(k)) key = k;
    else if (cur.q.type === 'text' && /^[a-zäöüß]$/i.test(k)) key = k === 'ß' ? 'ß' : k.toUpperCase();
    if (key) {
      e.preventDefault(); inputKey(key);
      const btn = $(`.key[data-k="${key}"]`); if (btn) { btn.classList.add('flash'); setTimeout(() => btn.classList.remove('flash'), 120); }
    }
  });

  // ---------- Installation / Offline ----------
  let deferredPrompt = null;
  addEventListener('beforeinstallprompt', e => {
    e.preventDefault(); deferredPrompt = e;
    const h = $('#install-hint'); h.hidden = false;
    h.innerHTML = '<button class="btn" id="btn-install">Als App installieren</button>';
    $('#btn-install').onclick = async () => { deferredPrompt.prompt(); await deferredPrompt.userChoice; deferredPrompt = null; h.hidden = true; };
  });
  const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
  const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  if (ios && !standalone) { const h = $('#install-hint'); h.hidden = false; h.textContent = 'Tipp: Über „Teilen → Zum Home-Bildschirm“ wird Ein Prozent zur App – auch offline.'; }
  if ('serviceWorker' in navigator && location.protocol !== 'file:') navigator.serviceWorker.register('sw.js').catch(() => {});

  updateDailySub();
  updateHomeTeam();
  // Test-Einstieg: einzelne Frage anzeigen (für automatische Layout-Prüfung aller Fragen).
  function preview(id) {
    const q = BANK.find(x => x.id === id); if (!q) return false;
    G = { mode: 'training', rng: Math.random, right: 0, asked: 0, streak: 0, seats: [], me: { results: [] } };
    show('game'); renderArena(); updateHud(); mountBooth(); G.lockTotal = 0; renderLockbar();
    renderQuestion(q, { kicker: 'Vorschau', sub: `${q.tier} % · ${q.cat}` });
    return true;
  }
  window.__einProzent = { BANK, pickRun, isCorrect, norm, preview, get G() { return G; } }; // für Tests
})();
