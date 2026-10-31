// Synthetisierte Klänge (WebAudio) – keine Audiodateien nötig, funktioniert offline.
(function (root) {
  let ctx = null, master = null, enabled = true;

  function ensure() {
    if (!enabled) return null;
    if (!ctx) {
      const AC = root.AudioContext || root.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.5;
      master.connect(ctx.destination);
    }
    // iOS/Safari startet den Kontext erst nach einer Nutzergeste.
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function tone(freq, { t = 0, dur = 0.15, type = 'sine', vol = 0.3, slide = 0, attack = 0.005 } = {}) {
    const c = ensure(); if (!c) return;
    const t0 = c.currentTime + t;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); g.connect(master);
    o.start(t0); o.stop(t0 + dur + 0.02);
  }

  function noise({ t = 0, dur = 0.3, vol = 0.15, freq = 1200 } = {}) {
    const c = ensure(); if (!c) return;
    const t0 = c.currentTime + t;
    const buf = c.createBuffer(1, Math.floor(c.sampleRate * dur), c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    const src = c.createBufferSource(); src.buffer = buf;
    const f = c.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = 0.8;
    const g = c.createGain();
    g.gain.setValueAtTime(vol, t0); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f); f.connect(g); g.connect(master);
    src.start(t0);
  }

  const S = {
    unlock() { ensure(); },
    set enabled(v) { enabled = v; },
    get enabled() { return enabled; },
    tap() { tone(660, { dur: 0.05, type: 'triangle', vol: 0.12 }); },
    key() { tone(520, { dur: 0.04, type: 'triangle', vol: 0.08 }); },
    lock() { tone(220, { dur: 0.12, type: 'square', vol: 0.12 }); tone(440, { t: 0.06, dur: 0.18, type: 'triangle', vol: 0.18 }); },
    tick(urgent) { tone(urgent ? 1100 : 880, { dur: 0.04, type: 'square', vol: urgent ? 0.09 : 0.05 }); },
    whoosh() { noise({ dur: 0.45, vol: 0.12, freq: 900 }); tone(180, { dur: 0.4, slide: 500, vol: 0.06 }); },
    correct() { [523, 659, 784, 1047].forEach((f, i) => tone(f, { t: i * 0.07, dur: 0.35, type: 'triangle', vol: 0.18 })); },
    wrong() { tone(196, { dur: 0.5, type: 'sawtooth', vol: 0.12, slide: -80 }); tone(185, { t: 0.02, dur: 0.5, type: 'square', vol: 0.07, slide: -70 }); },
    drum() { for (let i = 0; i < 16; i++) noise({ t: i * 0.06, dur: 0.08, vol: 0.05 + i * 0.006, freq: 300 }); },
    fanfare() {
      const n = [523, 659, 784, 1047, 784, 1047, 1319];
      n.forEach((f, i) => tone(f, { t: i * 0.11, dur: 0.4, type: 'triangle', vol: 0.2 }));
      noise({ t: 0.6, dur: 1.2, vol: 0.08, freq: 3000 });
    },
    coin() { tone(988, { dur: 0.08, type: 'square', vol: 0.08 }); tone(1319, { t: 0.07, dur: 0.2, type: 'square', vol: 0.08 }); },
  };
  root.Sound = S;
})(window);
