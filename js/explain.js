// Erklär-Bühne: erklärt nach jeder Frage anschaulich die Lösung – Schritt für Schritt, in wechselnden Darstellungen.
// Gemeinsam genutzt vom 3D-Spiel (welten/) und der Quiz-Variante. Daten: window.QUIZ_EXPLAIN[id] (js/explain-data.js,
// erzeugt aus explain/*.json); fehlt eine Erklärung, wird die geprüfte Kurz-Erklärung q.ex an der Tafel gezeigt.
//
//   await Explain.show({ q, cast, ok, skippable, title })   →  'done' | 'skip'
//
// Darstellungen (spec.style):
//   tafel    – „Wir fragen den Professor“: Kreide-Anschrift wächst Schritt für Schritt, der Professor erklärt
//   duo      – die beiden Moderatoren lösen im Wortwechsel auf, Notizzettel in der Mitte
//   lupe     – die Grafik der Frage groß unter der Lupe, Schritt für Schritt kommentiert (eigene Skizzen möglich)
//   rechnung – Rechenweg auf Karopapier, Zeile für Zeile, Ergebnis eingerahmt
// Ein Schritt: { text, who: 'a'|'b'|'prof', board: 'kurze Anschrift (HTML: b,i,u,s,mark,br,sub,sup)', svg: '<svg…>', big: 'großes Wort' }
// spec.merk: Merksatz am Ende (optional).
(function () {
  const root = typeof window !== 'undefined' ? window : globalThis;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const solution = q => q.type === 'choice' ? q.opts[q.a] : String(q.a);
  const HOOKS = {
    tafel: ['Fragen wir den Professor!', 'Ab an die Tafel!', 'Das erklärt uns jetzt der Professor.', 'Kreide raus – so geht’s:'],
    duo: ['Lösen wir das auf!', 'Wer erklärt’s? Wir beide.', 'Also, pass auf …'],
    lupe: ['Schauen wir genau hin!', 'Lupe raus!', 'Ganz nah ran:'],
    rechnung: ['Rechnen wir nach!', 'Schritt für Schritt:', 'Der Rechenweg:'],
  };

  function fallback(q) {
    // ohne ausgebaute Erklärung: die geprüfte Kurz-Erklärung, in Sätze geteilt
    const parts = String(q.ex || '').split(/(?<=[.!?])\s+(?=[A-ZÄÖÜ„])/).filter(Boolean);
    const list = parts.length ? parts : [q.ex || ''], say = ['Passt auf:', 'Und weiter:', 'Genau deshalb:'];
    return { style: 'tafel', steps: list.map((t, i) => ({ who: 'prof', text: i === list.length - 1 && i > 0 ? 'Also:' : say[Math.min(i, 1)], board: esc(t) })) };
  }
  function face(cast, who, mood) {
    const c = who === 'b' ? cast.b : who === 'prof' ? (cast.prof || cast.a) : cast.a;
    return { name: c ? c.name : '', html: c ? (typeof c.face === 'function' ? c.face(mood) : c.face || '') : '' };
  }
  function animateSvg(el) { // Linien zeichnen sich selbst
    el.querySelectorAll('path, line, polyline, polygon, circle, rect, ellipse').forEach((s, i) => {
      if (s.closest('defs')) return;
      s.setAttribute('pathLength', '1'); s.style.strokeDasharray = '1'; s.style.strokeDashoffset = '1';
      s.style.animation = `exDraw .9s ${0.08 * (i % 12)}s ease-out forwards`;
      if (s.getAttribute('fill') && s.getAttribute('fill') !== 'none') { s.style.fillOpacity = '0'; s.style.animation += `, exFill .4s ${0.5 + 0.08 * (i % 12)}s forwards`; }
    });
  }

  function show({ q, cast = {}, ok = null, skippable = true, title = '', spec: given, onStep } = {}) {
    const spec = given || (root.QUIZ_EXPLAIN && root.QUIZ_EXPLAIN[q.id]) || fallback(q);
    const style = HOOKS[spec.style] ? spec.style : 'tafel';
    return new Promise(resolve => {
      const el = document.createElement('div'); el.className = `ex-wrap ex-${style}`;
      const hook = spec.hook || HOOKS[style][Math.floor(Math.random() * HOOKS[style].length)];
      el.innerHTML = `<div class="ex-panel">
        <div class="ex-head"><span class="ex-tag">${style === 'tafel' ? '🎓' : style === 'duo' ? '💬' : style === 'lupe' ? '🔍' : '✏️'} ${esc(hook)}</span>${title ? `<span class="ex-title">${esc(title)}</span>` : ''}
          ${ok == null ? '' : `<span class="ex-res ${ok ? 'ok' : 'bad'}">${ok ? '✓ richtig' : '✗ daneben'}</span>`}</div>
        <div class="ex-stage">
          ${style === 'lupe' ? `<div class="ex-lens"><div class="ex-lens-img">${q.svg || ''}</div></div>` : ''}
          <div class="ex-board"></div>
        </div>
        <div class="ex-talk"><div class="ex-face"></div><div class="ex-bubble"><b class="ex-who"></b><div class="ex-text"></div></div><div class="ex-face2"></div></div>
        <div class="ex-ctl"><button class="ex-skip" ${skippable ? '' : 'hidden'}>Überspringen ⏭</button><div class="ex-dots"></div><button class="ex-next">Weiter ▶</button></div>
      </div>`;
      document.body.appendChild(el); document.body.classList.add('explaining');
      requestAnimationFrame(() => el.classList.add('show'));
      const board = el.querySelector('.ex-board'), text = el.querySelector('.ex-text'), who = el.querySelector('.ex-who');
      const f1 = el.querySelector('.ex-face'), f2 = el.querySelector('.ex-face2'), dots = el.querySelector('.ex-dots'), next = el.querySelector('.ex-next');
      const steps = spec.steps || [];
      dots.innerHTML = steps.map(() => '<i></i>').join('') + '<i></i>';
      let i = -1, done = false;
      const finish = how => { if (done) return; done = true; removeEventListener('keydown', key); el.classList.remove('show'); document.body.classList.remove('explaining'); setTimeout(() => el.remove(), 350); resolve(how); };
      const step = () => {
        i++; if (i > 0 && onStep) try { onStep(i); } catch { /* egal */ }
        dots.querySelectorAll('i').forEach((d, k) => d.classList.toggle('on', k <= i));
        if (i < steps.length) {
          const s = steps[i], speaker = s.who || (style === 'duo' ? (i % 2 ? 'b' : 'a') : style === 'tafel' ? 'prof' : 'a');
          const fc = face(cast, speaker, i === steps.length - 1 ? 'happy' : 'think');
          who.textContent = fc.name; text.textContent = s.text || '';
          const side = style === 'duo' && speaker === 'b';
          (side ? f2 : f1).innerHTML = fc.html; (side ? f1 : f2).classList.add('dim'); (side ? f2 : f1).classList.remove('dim');
          if (style !== 'duo') { f2.innerHTML = ''; }
          el.querySelector('.ex-talk').classList.toggle('right', side);
          const bub = el.querySelector('.ex-bubble'); bub.classList.remove('pop'); void bub.offsetWidth; bub.classList.add('pop');
          if (s.board || s.svg || s.big) {
            const line = document.createElement('div'); line.className = 'ex-line';
            line.innerHTML = (s.big ? `<div class="ex-big">${esc(s.big)}</div>` : '') + (s.board ? `<div class="ex-chalk">${s.board}</div>` : '') + (s.svg ? `<div class="ex-svg">${s.svg}</div>` : '');
            if (style === 'lupe' && s.svg) line.querySelector('.ex-svg').remove();
            board.appendChild(line); line.querySelectorAll('.ex-svg').forEach(animateSvg);
            board.scrollTop = board.scrollHeight;
          }
          if (style === 'lupe') { // Lupe: eigene Skizze des Schritts oder wieder das Bild der Frage
            const img = el.querySelector('.ex-lens-img'), want = s.svg || q.svg || '';
            if (img.dataset.cur !== String(i) && img.innerHTML !== want) { img.innerHTML = want; if (s.svg) animateSvg(img); }
            img.dataset.cur = String(i); el.querySelector('.ex-lens').classList.toggle('zoom', i % 2 === 1 && !s.svg);
          }
          next.textContent = 'Weiter ▶';
        } else if (i === steps.length) {
          // Abschluss: Lösung + Merksatz
          const line = document.createElement('div'); line.className = 'ex-line ex-final';
          line.innerHTML = `<div class="ex-stamp">Lösung: <b>${esc(solution(q))}</b></div>${spec.merk ? `<div class="ex-merk">💡 ${esc(spec.merk)}</div>` : ''}`;
          board.appendChild(line); board.scrollTop = board.scrollHeight;
          next.textContent = 'Fertig ✓';
          el.querySelector('.ex-skip').hidden = true;
        } else finish('done');
      };
      const key = e => { if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowRight') { e.preventDefault(); step(); } if (e.key === 'Escape' && skippable) finish('skip'); };
      addEventListener('keydown', key);
      next.onclick = step; el.querySelector('.ex-skip').onclick = () => finish('skip');
      el.querySelector('.ex-stage').onclick = step;
      step();
    });
  }
  root.Explain = { show, fallback, solution };
})();
