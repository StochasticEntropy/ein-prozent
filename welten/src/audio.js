// Audio: Geräusche (Kenney CC0), vertonte Sprecher (assets/voice), Plapperstimmen und eine
// prozedurale Spieluhr-Musik mit Spannungsschicht. Alles über einen WebAudio-Kontext, der erst
// nach der ersten Berührung startet (iOS/Android-Regel).

const SFX_FILES = ['select_002', 'confirmation_002', 'question_001', 'tick_002', 'tick_004', 'error_004', 'open_002',
  'footstep_grass_000', 'footstep_grass_001', 'footstep_grass_002', 'footstep_grass_003', 'impactSoft_medium_001',
  'impactPunch_heavy_001', 'impactMetal_heavy_002', 'impactBell_heavy_001', 'impactWood_heavy_001', 'jingles_PIZZI00',
  'jingles_PIZZI01', 'jingles_PIZZI02', 'jingles_PIZZI03', 'jingles_PIZZI05', 'jingles_PIZZI10', 'jingles_SAX02',
  'jingles_SAX08', 'jingles_NES03', 'jingles_HIT00', 'jingles_HIT05', 'doorOpen_1', 'creak1', 'handleCoins', 'metalLatch',
  'bookFlip1', 'powerUp2', 'phaseJump1', 'zap1', 'pepSound1', 'lowDown', 'highUp', 'spaceTrash1'];

export class Audio {
  constructor() {
    this.ctx = null; this.buf = {}; this.voiceBuf = {};
    // ?stumm=1 schaltet jeden Ton ab (für automatische Tests)
    this.muted = new URLSearchParams(location.search).has('stumm'); this.enabled = !this.muted;
    this.music = null; this.tension = 0;
  }
  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AC();
      this.master = this.ctx.createGain(); this.master.gain.value = this.muted ? 0 : 0.9; this.master.connect(this.ctx.destination);
      this.sfxBus = this.ctx.createGain(); this.sfxBus.gain.value = 0.7; this.sfxBus.connect(this.master);
      this.voiceBus = this.ctx.createGain(); this.voiceBus.gain.value = 1.0; this.voiceBus.connect(this.master);
      this.musicBus = this.ctx.createGain(); this.musicBus.gain.value = 0.32; this.musicBus.connect(this.master);
      this.analyser = this.ctx.createAnalyser(); this.analyser.fftSize = 256; this.voiceBus.connect(this.analyser);
      this.loadAll();
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }
  async loadAll() {
    await Promise.all(SFX_FILES.map(n => this.load(`assets/sfx/${n}.m4a`).then(b => { if (b) this.buf[n] = b; })));
  }
  // Laden mit Zeitgrenze: schlägt Laden oder Dekodieren fehl, geht es ohne Ton weiter (nie hängen).
  async load(url, ms = 2500) {
    const job = (async () => { try { const r = await fetch(url); if (!r.ok) return null; const buf = await r.arrayBuffer();
      return await new Promise(res => { try { const pr = this.ctx.decodeAudioData(buf, res, () => res(null)); if (pr && pr.catch) pr.catch(() => res(null)); } catch { res(null); } }); } catch { return null; } })();
    return Promise.race([job, new Promise(r => setTimeout(() => r(null), ms))]);
  }
  sfx(name, { vol = 1, rate = 1, delay = 0 } = {}) {
    if (!this.ctx || !this.enabled) return;
    const b = this.buf[name]; if (!b) return;
    const s = this.ctx.createBufferSource(); s.buffer = b; s.playbackRate.value = rate;
    const g = this.ctx.createGain(); g.gain.value = vol;
    s.connect(g); g.connect(this.sfxBus); s.start(this.ctx.currentTime + delay);
  }
  step() { this.sfx('footstep_grass_00' + (Math.random() * 4 | 0), { vol: 0.35, rate: 1.1 + Math.random() * 0.2 }); }

  // Vertonte Zeile abspielen. Gibt die Dauer zurück (oder null, wenn es keine Aufnahme gibt).
  async voice(id) {
    if (!this.ctx || !this.enabled) return null;
    if (!(id in this.voiceBuf)) this.voiceBuf[id] = await this.load(`assets/voice/${id}.m4a`);
    const b = this.voiceBuf[id]; if (!b) return null;
    const s = this.ctx.createBufferSource(); s.buffer = b; s.connect(this.voiceBus);
    this.duck(true); s.onended = () => this.duck(false);
    s.start(); this.current = s;
    return b.duration;
  }
  // Lautstärke für Lippenbewegung (0..1)
  level() {
    if (!this.analyser) return 0;
    const a = new Uint8Array(this.analyser.fftSize); this.analyser.getByteTimeDomainData(a);
    let m = 0; for (const v of a) m = Math.max(m, Math.abs(v - 128)); return Math.min(1, m / 50);
  }
  duck(on) { if (this.musicBus) this.musicBus.gain.setTargetAtTime(on ? 0.12 : 0.32, this.ctx.currentTime, 0.15); }

  // Plapperstimme (wie Tierstimmen in Comicspielen): pro Silbe ein kurzer, gezupfter Ton.
  babble(text, base = 600) {
    if (!this.ctx || !this.enabled) return 0;
    const syl = Math.max(3, Math.round(text.replace(/[^a-zäöüß]/gi, '').length / 2.6));
    const t0 = this.ctx.currentTime;
    for (let i = 0; i < syl; i++) {
      const t = t0 + i * 0.075;
      const o = this.ctx.createOscillator(), g = this.ctx.createGain(), f = this.ctx.createBiquadFilter();
      o.type = 'square'; o.frequency.setValueAtTime(base * (0.85 + Math.random() * 0.45), t);
      f.type = 'bandpass'; f.frequency.value = base * 2.2; f.Q.value = 2.5;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.16, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.065);
      o.connect(f); f.connect(g); g.connect(this.voiceBus); o.start(t); o.stop(t + 0.08);
    }
    return syl * 0.075;
  }

  // ---------- Musik: Spieluhr in G-Dur, 104 bpm, mit Spannungsschicht ----------
  // Themen: 'uhrwerk' = Spieluhr mit Uhrwerk-Klicken, 'wald' = Flöte über Zupfbass, mit Vogelrufen.
  startMusic(theme = 'uhrwerk') {
    if (!this.ctx || this.music) return;
    const wald = theme === 'wald';
    const ctx = this.ctx, bpm = wald ? 92 : 104, beat = 60 / bpm;
    const melody = wald
      ? [74, 0, 76, 78, 81, 0, 78, 76, 74, 76, 78, 0, 71, 0, 69, 71, 74, 0, 76, 78, 81, 83, 81, 78, 76, 0, 74, 71, 69, 0, 71, 0]
      : [67, 71, 74, 79, 78, 74, 71, 74, 72, 76, 79, 84, 83, 79, 76, 79, 71, 74, 79, 83, 81, 78, 74, 78, 72, 76, 81, 79, 78, 74, 71, 67];
    const bass = wald ? [50, 50, 47, 47, 43, 43, 45, 45] : [43, 43, 48, 48, 47, 47, 50, 50];
    let step = 0, next = ctx.currentTime + 0.1;
    const note = (midi, t, dur, vol, type = 'triangle') => {
      const f = 440 * Math.pow(2, (midi - 69) / 12);
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = type; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(this.musicBus); o.start(t); o.stop(t + dur + 0.05);
      // Spieluhr-Glanz: Oktave drüber, leise
      if (type === 'triangle') { const o2 = ctx.createOscillator(), g2 = ctx.createGain(); o2.type = 'sine'; o2.frequency.value = f * 2;
        g2.gain.setValueAtTime(0.0001, t); g2.gain.exponentialRampToValueAtTime(vol * 0.25, t + 0.005); g2.gain.exponentialRampToValueAtTime(0.0001, t + dur * 0.6);
        o2.connect(g2); g2.connect(this.musicBus); o2.start(t); o2.stop(t + dur); }
    };
    // Flöte: Sinus mit sanftem Einschwingen und Vibrato
    const flute = (midi, t, dur, vol) => {
      const f = 440 * Math.pow(2, (midi - 69) / 12);
      const o = ctx.createOscillator(), g = ctx.createGain(), lfo = ctx.createOscillator(), lg = ctx.createGain();
      o.type = 'sine'; o.frequency.value = f; lfo.frequency.value = 5.2; lg.gain.value = f * 0.012; lfo.connect(lg); lg.connect(o.frequency);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.06); g.gain.setTargetAtTime(0.0001, t + dur * 0.7, dur * 0.25);
      o.connect(g); g.connect(this.musicBus); o.start(t); lfo.start(t); o.stop(t + dur * 1.6); lfo.stop(t + dur * 1.6);
    };
    // Vogelruf: zwei schnelle Pfeiftöne
    const bird = t => { for (let i = 0; i < 2; i++) { const o = ctx.createOscillator(), g = ctx.createGain(), s = t + i * 0.13, f0 = 2200 + Math.random() * 900;
      o.type = 'sine'; o.frequency.setValueAtTime(f0, s); o.frequency.exponentialRampToValueAtTime(f0 * 1.45, s + 0.08);
      g.gain.setValueAtTime(0.0001, s); g.gain.exponentialRampToValueAtTime(0.05, s + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, s + 0.1);
      o.connect(g); g.connect(this.musicBus); o.start(s); o.stop(s + 0.12); } };
    const tick = () => {
      while (next < ctx.currentTime + 0.25) {
        const half = beat / 2;
        const m = melody[step % melody.length];
        if (wald) { if (m) flute(m, next, beat * 0.9, 0.16); if (step % 2 === 0) note(bass[(step / 4 | 0) % bass.length] + (step % 4 ? 7 : 0), next, 0.35, 0.16); if (Math.random() < 0.04) bird(next); }
        else note(m, next, 0.6, 0.22);
        if (step % 4 === 0) note(bass[(step / 4 | 0) % bass.length], next, beat * 1.8, 0.18, 'sine');
        // Uhrwerk-Klicken
        if (!wald && step % 2 === 0) { const b = this.buf.tick_002; if (b) { const s = ctx.createBufferSource(); s.buffer = b; const g = ctx.createGain(); g.gain.value = 0.25 + this.tension * 0.4; s.connect(g); g.connect(this.musicBus); s.start(next); } }
        // Spannung: tiefer Puls, der mit tension lauter und schneller wird
        if (this.tension > 0.05 && step % (this.tension > 0.6 ? 1 : 2) === 0) note(36, next, 0.18, 0.12 + this.tension * 0.25, 'sine');
        next += half; step++;
      }
    };
    this.music = setInterval(tick, 60); tick();
  }
  setTension(x) { this.tension = Math.max(0, Math.min(1, x)); }
}
