// Effekte: Klänge (im Browser erzeugt), Konfetti, Zählwerk, Rotstift, Vibration, Zeitlupe.
(function (root) {
  const Q = new URLSearchParams(location.search);
  const MUTE = Q.has('stumm');
  const SILENT = Q.has('leise');   // Tests: echter Abspielweg der Stimmen, aber lautlos
  const TEMPO = Math.max(1, Number(Q.get('tempo')) || 1);   // Tests: Wartezeiten verkürzen
  const wait = ms => new Promise(r => setTimeout(r, ms / TEMPO));

  // ---------- Klang ----------
  let ac = null;
  function ctx() {
    if (MUTE || SILENT) return null;
    if (!ac) { try { ac = new (root.AudioContext || root.webkitAudioContext)(); } catch { return null; } }
    if (ac.state === 'suspended') ac.resume();
    return ac;
  }
  function tone(freq, t0, dur, { type = 'sine', gain = 0.15, slide = 0 } = {}) {
    const a = ctx(); if (!a) return;
    const o = a.createOscillator(), g = a.createGain(), t = a.currentTime + t0;
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(freq * slide, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(gain, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(a.destination); o.start(t); o.stop(t + dur + 0.05);
  }
  function noise(t0, dur, gain = 0.12, hp = 1200) {
    const a = ctx(); if (!a) return;
    const b = a.createBuffer(1, Math.ceil(a.sampleRate * dur), a.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
    f.type = 'highpass'; f.frequency.value = hp; g.gain.value = gain;
    s.buffer = b; s.connect(f).connect(g).connect(a.destination); s.start(a.currentTime + t0);
  }
  const SFX = {
    unlock() { ctx(); },
    tick() { tone(1400, 0, 0.04, { type: 'square', gain: 0.03 }); },
    lock() { tone(520, 0, 0.08, { type: 'triangle', gain: 0.12 }); tone(780, 0.07, 0.12, { type: 'triangle', gain: 0.1 }); },
    right() { [523, 659, 784].forEach((f, i) => tone(f, i * 0.07, 0.35, { type: 'triangle', gain: 0.12 })); },
    wrong() { tone(150, 0, 0.45, { type: 'sawtooth', gain: 0.09 }); tone(142, 0, 0.45, { type: 'sawtooth', gain: 0.07 }); },
    tusch() { [392, 494, 587, 784].forEach(f => tone(f, 0, 0.6, { type: 'sawtooth', gain: 0.05 })); noise(0, 0.5, 0.08, 4000); },
    whoosh() { noise(0, 0.35, 0.07, 600); },
    pen() { noise(0, 0.22, 0.05, 3000); noise(0.12, 0.18, 0.04, 3500); },
    drumroll(sec = 2.4) { for (let t = 0; t < sec; t += 0.045) noise(t, 0.04, 0.05 + 0.05 * (t / sec), 300); noise(sec, 0.5, 0.18, 200); },
    heartbeat(n = 4) { for (let i = 0; i < n; i++) { tone(60, i * 0.9, 0.16, { gain: 0.35 }); tone(55, i * 0.9 + 0.22, 0.14, { gain: 0.25 }); } },
    rattle(sec = 1.2) { for (let t = 0; t < sec; t += 0.06) tone(900 + Math.random() * 400, t, 0.025, { type: 'square', gain: 0.02 }); },
  };
  const vibrate = p => { try { navigator.vibrate && navigator.vibrate(p); } catch { /* egal */ } };

  // ---------- Konfetti ----------
  function confetti(count = 140) {
    const cv = document.createElement('canvas'); cv.className = 'confetti';
    const dpr = Math.min(2, root.devicePixelRatio || 1), W = innerWidth, H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr; document.body.appendChild(cv);
    const g = cv.getContext('2d'); g.scale(dpr, dpr);
    const COLORS = ['#e2463c', '#e8b04a', '#f3efe6', '#3fb4a8', '#8f7cf0'];
    const few = count <= 5;
    const P = Array.from({ length: count }, () => ({
      x: few ? W * (0.35 + Math.random() * 0.3) : Math.random() * W, y: -20 - Math.random() * (few ? 40 : H * 0.6),
      vx: (Math.random() - 0.5) * 1.5, vy: few ? 1.2 : 2 + Math.random() * 3, r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3,
      w: few ? 14 : 6 + Math.random() * 6, h: few ? 8 : 4 + Math.random() * 4, c: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
    const t0 = performance.now(), life = (few ? 3800 : 4200) / TEMPO;
    (function frame(t) {
      g.clearRect(0, 0, W, H);
      for (const p of P) {
        p.x += p.vx + Math.sin((t + p.y) / 300) * 0.6; p.y += p.vy; p.r += p.vr;
        g.save(); g.translate(p.x, p.y); g.rotate(p.r); g.fillStyle = p.c; g.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.r))); g.restore();
      }
      if (t - t0 < life) requestAnimationFrame(frame); else cv.remove();
    })(t0);
  }

  // ---------- Zählwerk: rattert von 100 % auf den Zielwert ----------
  function odometer(el, target) {
    const digits = String(target).padStart(2, ' ').split('');
    el.innerHTML = '<span class="odo">' + digits.map(d => `<span class="odo-col"><span class="odo-strip">${
      Array.from({ length: 30 }, (_, i) => `<span>${i === 29 ? (d === ' ' ? '&nbsp;' : d) : Math.floor(Math.random() * 10)}</span>`).join('')}</span></span>`).join('') + '</span><span class="odo-pct">%</span>';
    SFX.rattle(1.3 / TEMPO);
    requestAnimationFrame(() => requestAnimationFrame(() => el.querySelectorAll('.odo-strip').forEach((s, i) => {
      s.style.transitionDuration = (1.1 + i * 0.35) / TEMPO + 's'; s.classList.add('run');
    })));
    return wait(1600);
  }

  // ---------- Rotstift: kritzelt quer über ein Element ----------
  function redPen(el) {
    const r = el.getBoundingClientRect(); if (!r.width) return;
    const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('class', 'redpen'); s.setAttribute('viewBox', '0 0 100 40'); s.setAttribute('preserveAspectRatio', 'none');
    s.innerHTML = '<path d="M3 30 C 25 22, 45 26, 60 16 S 88 8, 97 6" /><path d="M6 10 C 30 16, 60 22, 95 34" />';
    el.appendChild(s); SFX.pen();
  }

  function slowmo(on) { document.body.classList.toggle('slowmo', !!on); }
  function flash(cls = 'cut') { document.body.classList.remove(cls); void document.body.offsetWidth; document.body.classList.add(cls); }

  root.FX = { MUTE, SILENT, TEMPO, wait, SFX, vibrate, confetti, odometer, redPen, slowmo, flash };
})(window);
