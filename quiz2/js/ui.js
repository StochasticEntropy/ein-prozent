// Frage-Karte und Eingabe (Auswahl, Ziffernblock, Buchstabentastatur) – für Solo, Bühne und Handy-Pult.
(function (root) {
  const LET = 'ABCD';
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function card(q, { round, idx, total, showQuote } = {}) {
    return `<div class="qmeta"><span class="chip">${esc(q.cat || 'Rätsel')}</span>${showQuote ? `<span class="chip quote">${root.BW.pct(q)} % schaffen das</span>` : ''}
      ${round ? `<span class="qnum">${esc(round)} · ${idx}/${total}</span>` : ''}</div>
      <div class="qtext">${q.q}</div>${q.svg ? `<div class="qsvg">${q.svg}</div>` : ''}`;
  }

  // Baut die Eingabe; resolve(value) beim Einloggen. holger = { val } markiert seinen Tipp.
  function answer(box, q, { holger, readOnly } = {}) {
    let resolve, locked = false, value = '';
    const promise = new Promise(r => { resolve = r; });
    const lock = v => {
      if (locked || readOnly) return; locked = true; root.FX.SFX.lock(); root.FX.vibrate(15);
      box.classList.add('locked'); resolve(v);
    };
    if (q.type === 'choice') {
      box.innerHTML = `<div class="opts n${q.opts.length}">${q.opts.map((o, i) =>
        `<button type="button" class="opt" data-i="${i}"><span class="let">${LET[i]}</span><span class="otx">${esc(o)}</span>${
          holger && holger.val === i ? '<span class="htip" title="Holgers Tipp">H</span>' : ''}</button>`).join('')}</div>`;
      box.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
        if (locked || readOnly) return;
        box.querySelectorAll('.opt').forEach(x => x.classList.toggle('picked', x === b));
        lock(Number(b.dataset.i));
      }));
    } else {
      const num = q.type === 'number';
      const rows = num ? [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['⌫', '0', 'OK']]
        : [['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P', 'Ü'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ö', 'Ä'], ['Y', 'X', 'C', 'V', 'B', 'N', 'M', 'ß', '⌫'], ['␣', 'OK']];
      box.innerHTML = `<div class="entry ${num ? 'num' : 'txt'}"><span class="val"></span><span class="caret"></span></div>
        <div class="keys ${num ? 'pad' : 'kbd'}">${rows.map(r => `<div class="krow">${r.map(k =>
          `<button type="button" class="key${k === 'OK' ? ' ok' : ''}${k === '␣' ? ' space' : ''}" data-k="${k}">${k === '␣' ? 'Leerzeichen' : k}</button>`).join('')}</div>`).join('')}</div>`;
      const show = () => { box.querySelector('.val').textContent = value; box.querySelector('.key.ok').disabled = !value.trim(); };
      const press = k => {
        if (locked || readOnly) return;
        if (k === 'OK') { if (value.trim()) lock(num ? Number(value) : value.trim()); return; }
        if (k === '⌫') value = value.slice(0, -1);
        else if (k === '␣') { if (value && !value.endsWith(' ')) value += ' '; }
        else if (value.length < (num ? 9 : 24)) value += k;
        root.FX.SFX.tick(); show();
      };
      box.querySelectorAll('.key').forEach(b => b.addEventListener('click', () => press(b.dataset.k)));
      const onKey = e => {
        if (!box.isConnected) { removeEventListener('keydown', onKey); return; }
        const k = e.key;
        if (k === 'Enter') press('OK'); else if (k === 'Backspace') press('⌫');
        else if (!num && k === ' ') press('␣');
        else if (num && /^[0-9]$/.test(k)) press(k);
        else if (!num && /^[a-zäöüß]$/i.test(k)) press(k === 'ß' ? 'ß' : k.toUpperCase());
      };
      addEventListener('keydown', onKey);
      show();
    }
    if (q.type === 'choice') {
      const onKey = e => {
        if (!box.isConnected) { removeEventListener('keydown', onKey); return; }
        const i = 'abcd1234'.indexOf(e.key.toLowerCase()) % 4;
        if (i >= 0 && i < q.opts.length) box.querySelector(`.opt[data-i="${i}"]`).click();
      };
      addEventListener('keydown', onKey);
    }
    return { promise, cancel: () => { if (!locked) { locked = true; box.classList.add('locked'); resolve(null); } }, get value() { return value; } };
  }

  // Markiert nach dem Einloggen richtig/falsch in der Auswahl bzw. im Eingabefeld.
  function markResult(box, q, val, ok) {
    if (q.type === 'choice') {
      box.querySelectorAll('.opt').forEach(b => {
        const i = Number(b.dataset.i);
        if (i === q.a) b.classList.add('right'); else if (i === val) b.classList.add('wrong'); else b.classList.add('dim');
      });
    } else {
      const e = box.querySelector('.entry'); if (!e) return;
      e.classList.add(ok ? 'right' : 'wrong');
      if (!ok) e.insertAdjacentHTML('beforeend', `<span class="sol">${esc(root.BW.solutionText(q))}</span>`);
    }
  }

  // Schieberegler (Quote schätzen / Einsatz). Liefert den Wert nach „Fertig“.
  function slider(box, { label, min, max, step = 1, start, unit = '', button = 'Fertig', fmt }) {
    return new Promise(res => {
      const f = fmt || (v => v + unit);
      box.innerHTML = `<div class="slider"><label>${label}</label><output>${f(start)}</output>
        <input type="range" min="${min}" max="${max}" step="${step}" value="${start}"><button type="button" class="go">${button}</button></div>`;
      const inp = box.querySelector('input'), out = box.querySelector('output');
      inp.addEventListener('input', () => { out.textContent = f(Number(inp.value)); root.FX.SFX.tick(); });
      box.querySelector('.go').addEventListener('click', () => { root.FX.SFX.lock(); const v = Number(inp.value); box.innerHTML = `<div class="done">${f(v)}</div>`; res(v); }, { once: true });
    });
  }

  function choose(box, label, buttons) {
    return new Promise(res => {
      box.innerHTML = `<div class="choose"><p>${label}</p>${buttons.map((b, i) => `<button type="button" class="${i ? 'alt' : 'go'}" data-v="${esc(b.v)}">${esc(b.t)}</button>`).join('')}</div>`;
      box.querySelectorAll('button').forEach(b => b.addEventListener('click', () => { root.FX.SFX.lock(); box.innerHTML = `<div class="done">${esc(b.textContent)}</div>`; res(b.dataset.v); }, { once: true }));
    });
  }

  root.UI = { card, answer, markResult, slider, choose, esc, LET };
})(window);
