// Das Moderatoren-Paar: gezeichnete Figuren, Untertitel, Tonspur mit Lippenbewegung.
(function (root) {
  const { MUTE, SILENT, TEMPO, wait } = root.FX;
  const stats = root.__bwVoice = { ended: 0, fallback: 0, errors: [] };   // für Tests
  const NAMES = { v: 'Vera', h: 'Holger' };

  // Halbporträts im Karikaturstil. Bewegliche Teile: .mouth (Öffnung), .lids (Blinzeln), .brows (Heben).
  const SVG = {
    v: `<svg viewBox="0 0 200 230" aria-hidden="true">
      <path class="hair-back" d="M48 96 C40 40 160 34 154 98 L160 168 C140 178 60 178 42 168 Z" fill="#4a2119"/>
      <path d="M8 230 C14 186 52 168 100 166 C148 168 186 186 192 230 Z" fill="#a8232b"/>
      <path d="M78 168 L100 214 L122 168 Z" fill="#f3efe6"/>
      <path d="M62 172 L100 230 L82 230 L54 178 Z M138 172 L100 230 L118 230 L146 178 Z" fill="#7e1820"/>
      <rect x="86" y="132" width="28" height="40" rx="10" fill="#e9bf9f"/>
      <ellipse cx="100" cy="96" rx="43" ry="51" fill="#f1cdb0"/>
      <circle cx="57" cy="112" r="4" fill="#e8b04a"/><circle cx="143" cy="112" r="4" fill="#e8b04a"/>
      <path d="M54 92 C50 46 96 30 132 44 C150 52 156 74 150 104 C146 84 140 66 118 58 C100 70 76 74 58 72 C56 80 55 86 54 92 Z" fill="#5a2a1e"/>
      <g class="eyes"><ellipse cx="82" cy="98" rx="5" ry="5.5" fill="#2a1b17"/><ellipse cx="118" cy="98" rx="5" ry="5.5" fill="#2a1b17"/></g>
      <g class="lids"><rect x="72" y="88" width="20" height="12" fill="#f1cdb0"/><rect x="108" y="88" width="20" height="12" fill="#f1cdb0"/></g>
      <g class="brows"><path d="M70 82 Q82 75 94 81" stroke="#4a2119" stroke-width="3.5" fill="none" stroke-linecap="round"/><path d="M106 79 Q118 73 131 80" stroke="#4a2119" stroke-width="3.5" fill="none" stroke-linecap="round"/></g>
      <g fill="none" stroke="#1d1a22" stroke-width="3"><rect x="68" y="88" width="28" height="20" rx="5"/><rect x="104" y="88" width="28" height="20" rx="5"/><path d="M96 96 Q100 93 104 96"/></g>
      <path d="M100 104 Q96 116 100 120 Q103 121 105 119" stroke="#c99a7c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <g class="mouth" transform="translate(100 132)"><ellipse class="m-in" rx="10" ry="1.5" fill="#4a1414"/><path class="m-lip" d="M-13 0 Q0 -5 13 0 Q0 4 -13 0 Z" fill="#b8323b"/></g>
    </svg>`,
    h: `<svg viewBox="0 0 200 230" aria-hidden="true">
      <path d="M6 230 C12 184 50 164 100 162 C150 164 188 184 194 230 Z" fill="#c38a25"/>
      <path d="M6 230 C12 184 50 164 100 162 C150 164 188 184 194 230 Z" fill="url(#karo)"/>
      <path d="M76 164 L100 206 L124 164 Z" fill="#cfe3f2"/>
      <path d="M95 170 L105 170 L109 226 L100 230 L91 226 Z" fill="#d1493a"/>
      <path d="M58 168 L100 230 L80 230 L48 176 Z M142 168 L100 230 L120 230 L152 176 Z" fill="#9a6a16"/>
      <rect x="84" y="130" width="32" height="40" rx="10" fill="#d99a6c"/>
      <ellipse cx="54" cy="104" rx="7" ry="11" fill="#dc9d70"/><ellipse cx="146" cy="104" rx="7" ry="11" fill="#dc9d70"/>
      <ellipse cx="100" cy="98" rx="46" ry="50" fill="#e4a97c"/>
      <path d="M54 92 C46 50 70 26 108 28 C140 30 160 52 150 92 C148 70 140 60 126 56 C112 64 90 62 74 56 C64 64 58 76 54 92 Z" fill="#c9c7c2"/>
      <path d="M70 52 C80 18 140 14 152 44 C140 34 112 32 96 44 C88 50 78 54 70 52 Z" fill="#e3e1dc"/>
      <g class="eyes"><ellipse cx="82" cy="98" rx="5" ry="4.5" fill="#22303a"/><ellipse cx="118" cy="98" rx="5" ry="4.5" fill="#22303a"/></g>
      <g class="lids"><rect x="73" y="90" width="18" height="11" fill="#e4a97c"/><rect x="109" y="90" width="18" height="11" fill="#e4a97c"/></g>
      <path d="M73 96 L91 96 M109 96 L127 96" stroke="#c78d62" stroke-width="2"/>
      <g class="brows"><path d="M70 84 Q82 76 95 83" stroke="#9c9a95" stroke-width="5.5" fill="none" stroke-linecap="round"/><path d="M105 83 Q118 76 131 84" stroke="#9c9a95" stroke-width="5.5" fill="none" stroke-linecap="round"/></g>
      <path d="M100 100 Q94 116 99 120 Q104 122 108 118" stroke="#b9805a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <g class="mouth" transform="translate(100 134)"><ellipse class="m-in" rx="13" ry="1.5" fill="#3a1410"/><path class="m-lip" d="M-16 -1 Q0 6 16 -1" stroke="#9e5a44" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
      <path d="M74 126 C84 118 96 122 100 125 C104 122 116 118 126 126 C120 130 108 131 100 128 C92 131 80 130 74 126 Z" fill="#8f8b84"/>
      <defs><pattern id="karo" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M0 8 H16 M8 0 V16" stroke="#7d5810" stroke-width="1.4" opacity=".55"/></pattern></defs>
    </svg>`,
  };

  let els = null;
  function mount(container) {
    container.innerHTML = `
      <div class="host" data-who="v">${SVG.v}<div class="plate">Vera Brandt</div></div>
      <div class="host" data-who="h">${SVG.h}<div class="plate">Holger Kranz</div></div>
      <button class="sub" type="button" hidden><b></b><span></span><i>›</i></button>`;
    els = {
      root: container, sub: container.querySelector('.sub'),
      host: { v: container.querySelector('[data-who=v]'), h: container.querySelector('[data-who=h]') },
    };
    els.sub.addEventListener('click', () => skip && skip());
    for (const w of ['v', 'h']) blinkLoop(els.host[w]);
  }
  function blinkLoop(host) {
    const lids = host.querySelector('.lids');
    const go = () => { lids.classList.add('blink'); setTimeout(() => lids.classList.remove('blink'), 140); setTimeout(go, 2500 + Math.random() * 4000); };
    setTimeout(go, 800 + Math.random() * 2000);
  }

  // ---------- Tonspur + Lippen ----------
  const audio = new Audio(); audio.preload = 'auto'; audio.setAttribute('playsinline', ''); audio.muted = SILENT;
  let actx = null, analyser = null, buf = null;
  function unlock() {   // beim ersten Tippen aufrufen (iOS)
    if (MUTE || actx) return;
    try {
      actx = new (root.AudioContext || root.webkitAudioContext)();
      const src = actx.createMediaElementSource(audio);
      analyser = actx.createAnalyser(); analyser.fftSize = 512; buf = new Uint8Array(analyser.fftSize);
      // ?leise=1: Analyse läuft echt, aber über eine Null-Verstärkung – audio.muted greift in WebKit nicht, sobald
      // die Tonspur durch Web Audio geht.
      const out = actx.createGain(); out.gain.value = SILENT ? 0 : 1;
      src.connect(analyser); analyser.connect(out); out.connect(actx.destination);
    } catch { actx = null; }
    if (!SILENT) { audio.src = 'data:audio/mp4;base64,'; audio.play().catch(() => {}); }
  }
  function level() {
    if (!analyser) return 0;
    analyser.getByteTimeDomainData(buf);
    let s = 0; for (let i = 0; i < buf.length; i++) { const v = (buf[i] - 128) / 128; s += v * v; }
    return Math.min(1, Math.sqrt(s / buf.length) * 5);
  }
  let speaking = null, fakeT = 0;
  function mouthLoop() {
    for (const w of ['v', 'h']) {
      if (!els) break;
      const m = els.host[w].querySelector('.m-in');
      let open = 0;
      if (speaking === w) open = analyser && !audio.paused ? level() : (Math.sin(fakeT += 0.45) * 0.5 + 0.5) * (0.4 + Math.random() * 0.6);
      m.setAttribute('ry', (1.5 + open * (w === 'h' ? 10 : 8)).toFixed(1));
    }
    requestAnimationFrame(mouthLoop);
  }
  requestAnimationFrame(mouthLoop);

  // ---------- Szenen ----------
  const lastVariant = {};
  let skip = null, stopAll = false;
  function pick(group) {
    const vs = root.BW_LINES[group]; if (!vs) return null;
    let i = Math.floor(Math.random() * vs.length);
    if (vs.length > 1 && i === lastVariant[group]) i = (i + 1) % vs.length;
    lastVariant[group] = i;
    return i;
  }
  function playLine(id, who, text) {
    return new Promise(resolve => {
      let done = false;
      const fin = () => { if (done) return; done = true; skip = null; speaking = null; audio.onended = audio.onerror = null; resolve(); };
      skip = () => { try { audio.pause(); } catch { /* egal */ } fin(); };
      speaking = who;
      els.sub.hidden = false; els.sub.dataset.who = who;
      els.sub.querySelector('b').textContent = NAMES[who];
      els.sub.querySelector('span').textContent = text;
      for (const w of ['v', 'h']) els.host[w].classList.toggle('speaking', w === who);
      const fallback = why => { if (why) { stats.fallback++; stats.errors.push(id + ':' + why); } setTimeout(fin, Math.max(1100, text.length * 62) / TEMPO); };
      if (MUTE) return fallback();
      audio.onended = () => { stats.ended++; setTimeout(fin, 180); };
      audio.onerror = () => { audio.onerror = null; fallback('error'); };
      audio.src = `voice/${id}.m4a`;
      audio.play().catch(e => fallback('play:' + (e && e.name)));
    });
  }
  // Spielt eine Szene aus einer Gruppe; liefert das Versprechen, das endet, wenn alle Zeilen durch sind.
  async function say(group, variant) {
    const vi = variant ?? pick(group); if (vi == null || !els) return;
    stopAll = false;
    const scene = root.BW_LINES[group][vi];
    for (let li = 0; li < scene.length && !stopAll; li++) {
      const [who, text] = scene[li];
      await playLine(`${group}-${vi}-${li}`, who, text);
    }
    hush();
  }
  function hush() {
    if (!els) return;
    els.sub.hidden = true; speaking = null;
    for (const w of ['v', 'h']) els.host[w].classList.remove('speaking');
  }
  function cut() { stopAll = true; skip && skip(); hush(); }
  function mood(who, m) { if (els) els.host[who].dataset.mood = m || ''; }

  root.Duo = { mount, say, cut, unlock, mood, hush, SVG };
})(window);
