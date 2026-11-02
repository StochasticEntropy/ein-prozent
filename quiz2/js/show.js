// BESSERWISSER – Ablauf der Show. Solo (ein Gerät), Studio-Bühne (Tablet/Laptop) und Handy-Pult.
const { BW, UI, FX, Duo } = window;
const { SFX, wait } = FX;
const $ = s => document.querySelector(s);
const fmt = n => Math.round(n).toLocaleString('de-DE');
const Q = new URLSearchParams(location.search);
const PREFIX = 'besserwisser-v1-';

// ---------- Bildschirme ----------
function screen(id) {
  document.querySelectorAll('.screen').forEach(s => s.hidden = s.id !== id);
  document.body.dataset.screen = id;
}
function toast(text, ms = 2200) {
  const t = $('#toast'); t.textContent = text; t.hidden = false;
  clearTimeout(toast.t); toast.t = setTimeout(() => { t.hidden = true; }, ms);
}

// ---------- Bühne (Solo und Studio teilen sich die Darstellung) ----------
const stage = {
  roundCard(r, nr) {
    const o = $('#roundcard');
    o.innerHTML = `<div class="rc-nr">${r.key === 'final' ? 'Finale' : 'Runde ' + nr}</div><div class="rc-name">${r.name}</div><div class="rc-rule">${RULES[r.key]}</div>`;
    o.hidden = false; o.classList.remove('in'); void o.offsetWidth; o.classList.add('in'); SFX.whoosh(); FX.flash();
    $('#roundname').textContent = r.name;
  },
  hideRound() { $('#roundcard').hidden = true; },
  question(q, meta) {
    window.__bwQ = q;   // für Tests
    const c = $('#card'); c.innerHTML = UI.card(q, meta); c.classList.remove('in'); void c.offsetWidth; c.classList.add('in');
    $('#answer').innerHTML = ''; $('#reveal').hidden = true; $('#answer').classList.remove('locked', 'revealed'); $('.desk').scrollTop = 0;
  },
  blank(html = '') { $('#card').innerHTML = html; $('#answer').innerHTML = ''; $('#answer').classList.remove('locked', 'revealed'); $('#reveal').hidden = true; },
  scores(players, holger) {
    const me = players.length === 1 ? players[0] : null;
    $('#score').innerHTML = me
      ? `<span class="sc-me"><small>Sie</small><b>${fmt(me.score)}</b></span><span class="sc-h"><small>Holger</small><b>${fmt(holger.score)}</b></span>`
      : players.slice().sort((a, b) => b.score - a.score).slice(0, 6).map(p => `<span><small>${UI.esc(p.name)}</small><b>${fmt(p.score)}</b></span>`).join('') + `<span class="sc-h"><small>Holger</small><b>${fmt(holger.score)}</b></span>`;
  },
  timer(sec, onEnd) {
    const el = $('#timer'); el.hidden = false;
    const t0 = performance.now(), dur = sec * 1000 / FX.TEMPO; let stop = false, lastS = -1;
    (function f(t) {
      if (stop) return;
      const left = Math.max(0, dur - (t - t0)), s = Math.ceil(left / 1000 * FX.TEMPO);
      el.style.setProperty('--p', (left / dur).toFixed(4)); el.querySelector('span').textContent = s;
      el.classList.toggle('hurry', s <= 5);
      if (s !== lastS && s <= 5 && s > 0) SFX.tick(); lastS = s;
      if (left <= 0) { el.hidden = true; onEnd(); return; }
      requestAnimationFrame(f);
    })(t0);
    return { stop() { stop = true; el.hidden = true; }, left: () => Math.max(0, dur - (performance.now() - t0)) / dur };
  },
  // Auflösung: Häkchen/Kreuz, Lösung, Erklärung, Punkte. Bei Gruppen eine Liste.
  reveal({ q, ok, delta, lines = [], quote, group }) {
    const r = $('#reveal');
    r.innerHTML = `${group ? '' : `<div class="rv-big ${ok ? 'ok' : 'no'}">${ok ? 'Richtig' : 'Falsch'}${delta ? `<span class="delta">${delta > 0 ? '+' : ''}${fmt(delta)}</span>` : ''}</div>`}
      ${group || ''}
      <div class="rv-sol">Lösung: <b>${UI.esc(BW.solutionText(q))}</b></div>
      ${quote != null ? '<div class="rv-quote"><span class="lbl">So viele schaffen das:</span><span class="odo-box"></span></div>' : ''}
      ${lines.map(l => `<div class="rv-line">${l}</div>`).join('')}
      <div class="rv-ex">${UI.esc(q.ex || '')}</div>
      <div class="rv-btns"><button type="button" class="alt tafel">Lösungsweg</button><button type="button" class="go next">Weiter</button></div>`;
    r.querySelector('.tafel').onclick = () => explain(q, group ? null : ok);
    r.hidden = false; r.classList.remove('in'); void r.offsetWidth; r.classList.add('in');
    $('#answer').classList.add('revealed');
    requestAnimationFrame(() => r.scrollIntoView({ behavior: 'smooth', block: 'end' }));
    return r;
  },
};
const RULES = {
  r1: 'Drei leichte Fragen. Wer schnell ist, bekommt Bonuspunkte.',
  r2: 'Holger legt sich vorher fest. Wer ihm zu Recht widerspricht, bekommt den Besserwisser-Bonus.',
  r3: 'Nach jeder Antwort schätzen Sie: Wie viel Prozent schaffen das? Punkte für beides.',
  r4: 'Erst sehen Sie nur die Quote, dann setzen Sie bis zur Hälfte Ihrer Punkte.',
  final: 'Eine Frage, unter fünf Prozent. Spielen: richtig verdoppelt, falsch halbiert.',
};

function waitNext(r, autoMs) {
  return new Promise(res => {
    const b = r.querySelector('.next'); let t = null;
    const go = () => { clearTimeout(t); r.hidden = true; $('#answer').innerHTML = ''; res(); };
    b.addEventListener('click', go, { once: true });
    // Studio: weiter nach Ablauf – aber nicht, solange jemand an der Tafel den Lösungsweg anschaut
    const auto = () => { t = setTimeout(() => document.body.classList.contains('explaining') ? auto() : go(), autoMs / FX.TEMPO); };
    if (autoMs) auto();
  });
}

// Lösungsweg: die freigegebenen Erklärungen (js/explain-data.js) über die gemeinsame Erklär-Bühne.
// Vera übernimmt den Professor und die Rolle a, Holger die Rolle b (der, der sich zuerst irrt).
const EX_HOOK = { tafel: 'Vera an der Tafel', duo: 'Vera und Holger lösen auf', lupe: 'Genauer hingeschaut', rechnung: 'Der Rechenweg' };
async function explain(q, ok) {
  if (document.body.classList.contains('explaining')) return;
  Duo.cut();
  const base = (window.QUIZ_EXPLAIN && window.QUIZ_EXPLAIN[q.id]) || Explain.fallback(q);
  const vera = { name: 'Vera', face: Duo.SVG.v }, holger = { name: 'Holger', face: Duo.SVG.h };
  await Explain.show({ q, ok, title: 'Lösungsweg', cast: { a: vera, b: holger, prof: vera }, spec: { ...base, hook: EX_HOOK[base.style] || 'Lösungsweg' } });
}
const sayAnd = (g, v) => Duo.say(g, v);

// ---------- Die Show selbst. io kapselt, woher die Antworten kommen (Solo-Gerät oder Handys). ----------
async function runShow(io) {
  const rng = BW.rngFrom(Number(Q.get('seed')) || Date.now());
  const game = BW.pickGame(rng);
  const players = io.players();
  const holger = { score: 0, right: 0 };
  let lokal = 0, qNo = 0;
  stage.scores(players, holger);
  screen('show');
  Duo.mood('h', ''); Duo.mood('v', '');
  stage.blank(`<div class="welcome"><div class="logo">BESSER<span>WISSER</span></div><p>Die Quizshow für Leute, die es immer schon gewusst haben.</p></div>`);
  SFX.tusch();
  await sayAnd('intro');

  for (let ri = 0; ri < game.length; ri++) {
    const R = game[ri];
    stage.roundCard(R, ri + 1);
    await sayAnd(R.key);
    stage.hideRound();
    if (R.key === 'final') { await runFinal(io, R, players, holger, rng); break; }
    for (let qi = 0; qi < R.qs.length; qi++) {
      qNo++;
      if (qi > 0) {
        if (lokal < 3 && rng() < 0.3) { lokal++; await sayAnd('lokal'); await sayAnd('lokalCount', lokal - 1); }
        else if (rng() < 0.5) await sayAnd('next');
      }
      const q = BW.prepare(R.qs[qi], rng);
      BW.markSeen(q);
      const tip = BW.holgerTip(q, rng);
      const meta = { round: R.name, idx: qi + 1, total: R.qs.length, showQuote: R.key === 'r4' };

      // Einsatz vor der Frage
      let stakes = null;
      if (R.key === 'r4') {
        stage.blank(`<div class="teaser"><span class="chip">${UI.esc(q.cat || 'Rätsel')}</span><div class="t-quote">${BW.pct(q)} %</div><p>schaffen die nächste Frage. Wie viel setzen Sie?</p></div>`);
        stakes = await io.collect('stake', { players, maxOf: p => Math.floor(p.score / 2) });
        const vals = [...stakes.values()], maxes = players.map(p => Math.floor(p.score / 2));
        if (vals.every(v => !v)) await sayAnd('stakeZero');
        else if (vals.some((v, i) => v && v >= maxes[i])) await sayAnd('stakeMax');
        else await sayAnd('stakeMid');
      }

      stage.question(q, meta);
      if (R.key === 'r2') await sayAnd('tip' + UI.LET[tip.val]);
      const t0 = performance.now();
      const answers = await io.collect('answer', { q, holger: R.key === 'r2' ? tip : null, time: R.time, meta });
      const ms = performance.now() - t0;
      let estimates = null;
      if (R.key === 'r3') estimates = await io.collect('estimate', { q });

      // Auswerten
      const real = BW.pct(q);
      const res = players.map(p => {
        const a = answers.get(p.id) || {}, ok = BW.isCorrect(q, a.val);
        let delta = 0;
        if (R.key === 'r1' && ok) delta = R.base + Math.round(50 * (a.left ?? 0));
        if (R.key === 'r2' && ok) delta = R.base + (tip.right ? 0 : 100);
        if (R.key === 'r3') delta = (ok ? R.base : 0) + BW.scoreEstimate(estimates.get(p.id) ?? 50, real);
        if (R.key === 'r4') { const s = stakes.get(p.id) || 0; delta = ok ? R.base + s : -s; }
        p.score = Math.max(0, p.score + delta); if (ok) p.right++;
        return { p, ok, delta, val: a.val, est: estimates?.get(p.id) };
      });
      if (tip.right) holger.right++;
      holger.score += tip.right ? (R.key === 'r1' ? R.base + 25 : R.base) : 0;
      if (R.key === 'r3') holger.score += BW.scoreEstimate(BW.HOLGER_ESTIMATE, real);
      if (R.key === 'r4') { const s = Math.floor(holger.score / 2); holger.score += tip.right ? R.base + s : -s; }

      const nOk = res.filter(r => r.ok).length, majority = nOk * 2 >= res.length && nOk > 0;
      io.marked(q, res);
      if (majority) { SFX.right(); FX.vibrate(30); } else { SFX.wrong(); FX.vibrate([60, 40, 60]); }
      if (R.key === 'r1' && majority) FX.confetti(3);

      const lines = [];
      if (R.key === 'r2') lines.push(`Holger hatte <b>${UI.LET[tip.val]}</b> getippt – ${tip.right ? 'richtig.' : 'falsch.'}`);
      if (R.key === 'r3' && players.length === 1) lines.push(`Ihre Schätzung: <b>${res[0].est} %</b> · Holger: <b>${BW.HOLGER_ESTIMATE} %</b>`);
      const rv = stage.reveal({ q, ok: res[0].ok, delta: res[0].delta, lines, quote: (R.key === 'r3' || R.key === 'r4') ? real : null, group: io.groupHtml && io.groupHtml(res) });
      stage.scores(players, holger);
      io.revealed(q, res);

      // Kommentare
      if (R.key === 'r2') {
        const h = document.querySelector('.opt .htip')?.closest('.opt');
        if (!tip.right && h) { await wait(300); FX.redPen(h); }
        const followedWrong = !tip.right && res.some(r => r.val === tip.val);
        if (tip.right) await sayAnd(nOk ? 'holgerRight' : 'ignoredRight');
        else if (nOk) await sayAnd('beatHolger');
        else if (followedWrong) await sayAnd('followedWrong');
        else await sayAnd('holgerWrong');
      } else if (R.key === 'r3' || R.key === 'r4') {
        await FX.odometer(rv.querySelector('.odo-box'), real);
        await sayAnd('quote' + window.Difficulty.tierOf(q.p));
        if (R.key === 'r3') {
          const best = Math.min(...res.map(r => Math.abs((r.est ?? 50) - real)));
          await sayAnd(best <= 5 ? 'estClose' : best <= 15 ? 'estMid' : 'estFar');
        } else await sayAnd(majority ? 'rightHard' : 'wrongHard');
      } else {
        const timedOut = res.every(r => r.val == null);
        await sayAnd(timedOut ? 'timeout' : majority ? 'rightEasy' : 'wrongEasy');
      }
      await waitNext(rv, io.autoNext);
      void ms;
    }
    if ((R.key === 'r2' || R.key === 'r3') && players.length === 1) {
      await sayAnd(players[0].score >= holger.score ? 'playerAhead' : 'holgerAhead');
    }
  }
  await runEnd(io, players, holger);
}

async function runFinal(io, R, players, holger, rng) {
  const q = BW.prepare(R.qs[0], rng);
  BW.markSeen(q);
  stage.blank(`<div class="teaser"><span class="chip">${UI.esc(q.cat || 'Rätsel')}</span><div class="t-quote">${BW.pct(q)} %</div><p>schaffen diese Frage.</p></div>`);
  await sayAnd('final');
  const choice = await io.collect('final', { players });
  const anyPlay = [...choice.values()].some(v => v === 'play');
  await sayAnd(anyPlay ? 'finalPlay' : 'finalTake');
  FX.slowmo(true); SFX.drumroll(2.2); SFX.heartbeat(3); FX.vibrate([80, 120, 80, 600, 80, 120, 80]);
  await wait(2300);
  stage.question(q, { round: 'Finale', idx: 1, total: 1, showQuote: true });
  const answers = await io.collect('answer', { q, time: R.time, meta: { round: 'Finale', idx: 1, total: 1 } });
  FX.slowmo(false);
  const res = players.map(p => {
    const a = answers.get(p.id) || {}, ok = BW.isCorrect(q, a.val), play = choice.get(p.id) === 'play';
    const before = p.score;
    if (play) p.score = ok ? p.score * 2 + 300 : Math.floor(p.score / 2);
    if (ok) p.right++;
    return { p, ok, delta: p.score - before, val: a.val, play };
  });
  const hRight = rng() < q.p;
  holger.score = hRight ? holger.score * 2 + 300 : Math.floor(holger.score / 2); if (hRight) holger.right++;
  io.marked(q, res);
  const win = res.some(r => r.ok);
  if (win) { SFX.tusch(); FX.confetti(180); FX.vibrate([40, 40, 40, 40, 200]); } else SFX.wrong();
  const rv = stage.reveal({ q, ok: res[0].ok, delta: res[0].delta, quote: BW.pct(q),
    lines: [`Holger hat auch gespielt – und lag ${hRight ? 'richtig. Er ist selbst überrascht.' : 'daneben.'}`], group: io.groupHtml && io.groupHtml(res) });
  stage.scores(players, holger);
  io.revealed(q, res);
  await FX.odometer(rv.querySelector('.odo-box'), BW.pct(q));
  await sayAnd(win ? 'finalWin' : 'finalLose');
  await waitNext(rv, io.autoNext);
}

async function runEnd(io, players, holger) {
  const ranked = players.slice().sort((a, b) => b.score - a.score);
  const top = ranked[0], title = BW.titleFor(top.right);
  const solo = players.length === 1;
  $('#end').innerHTML = `
    <div class="urkunde">
      <div class="u-head">Urkunde</div>
      <p class="u-lead">Hiermit wird ${solo ? 'Ihnen' : `<b>${UI.esc(top.name)}</b>`} bescheinigt:</p>
      <div class="u-title">${title.name}</div>
      <p class="u-facts">${top.right} von 12 richtig · ${fmt(top.score)} Punkte · Holger: ${fmt(holger.score)}</p>
      <div class="u-sign"><span>Vera Brandt</span><span class="stamp">GEPRÜFT</span><span>Holger Kranz <small>(Zeuge)</small></span></div>
    </div>
    ${solo ? '' : `<ol class="ranking">${ranked.map(p => `<li><span>${UI.esc(p.name)}</span><b>${fmt(p.score)}</b><small>${p.right}/12</small></li>`).join('')}</ol>`}
    <div class="end-btns"><button type="button" class="go" id="again">Noch eine Sendung</button>${solo ? '<button type="button" class="alt" id="share">Ergebnis teilen</button>' : ''}<a class="alt" href="./">Zum Start</a></div>`;
  $('#end').hidden = false; $('#end').classList.add('in');
  stage.blank('');
  io.ended(ranked, title);
  SFX.tusch();
  if (title.line === 'title4') FX.confetti(120);
  $('#again').onclick = () => location.reload();
  const sh = $('#share');
  if (sh) sh.onclick = async () => {
    const text = `BESSERWISSER: „${title.name}“ – ${top.right} von 12 richtig, ${fmt(top.score)} Punkte. Holger: ${fmt(holger.score)}.`;
    try { if (navigator.share) await navigator.share({ text, url: location.href.split('?')[0] }); else { await navigator.clipboard.writeText(text); toast('In die Zwischenablage kopiert.'); } } catch { /* abgebrochen */ }
  };
  await sayAnd(title.line);
  await sayAnd('bye');
}

// ---------- Solo: Antworten kommen vom eigenen Bildschirm ----------
function soloIO() {
  const me = { id: 'me', name: 'Sie', score: 0, right: 0 };
  return {
    players: () => [me],
    async collect(kind, o) {
      const box = $('#answer');
      if (kind === 'answer') {
        const h = UI.answer(box, o.q, { holger: o.holger });
        let left = 0;
        const tm = stage.timer(o.time, () => { h.cancel(); });
        const val = await h.promise; left = tm.left(); tm.stop();
        return new Map([[me.id, { val, left }]]);
      }
      if (kind === 'estimate') {
        const est = document.createElement('div'); est.className = 'estbox'; box.appendChild(est);
        est.scrollIntoView({ behavior: 'smooth', block: 'end' });
        const v = await UI.slider(est, { label: 'Wie viel Prozent der Deutschen schaffen das?', min: 1, max: 99, start: 50, unit: ' %', button: 'Schätzung abgeben' });
        est.remove();
        return new Map([[me.id, v]]);
      }
      if (kind === 'stake') {
        const max = o.maxOf(me);
        $('#answer').classList.remove('locked');
        if (max <= 0) { await UI.choose(box, 'Sie haben noch nichts zu setzen. Es gibt trotzdem Punkte, wenn Sie richtig liegen.', [{ v: 0, t: 'Weiter' }]); return new Map([[me.id, 0]]); }
        const v = await UI.slider(box, { label: 'Ihr Einsatz', min: 0, max, step: Math.max(1, Math.round(max / 20)), start: Math.round(max / 2), button: 'Setzen', fmt: v => fmt(v) + ' Punkte' });
        return new Map([[me.id, v]]);
      }
      if (kind === 'final') {
        const v = await UI.choose(box, `Sie haben ${fmt(me.score)} Punkte.`, [{ v: 'play', t: 'Ich spiele' }, { v: 'take', t: 'Ich nehme die Punkte' }]);
        return new Map([[me.id, v]]);
      }
    },
    marked(q, res) { UI.markResult($('#answer'), q, res[0].val, res[0].ok); },
    revealed() {},
    ended() {},
  };
}

// ---------- Studio: Bühne + Handys ----------
async function studioHost() {
  screen('lobby');
  const { createRoom } = await import('../net/room.js');
  let room;
  try { room = await createRoom({ prefix: PREFIX, name: 'Bühne', joinUrl: c => location.origin + location.pathname + '?join=' + c }); }
  catch (e) { $('#lobby .lb-status').textContent = e.message || 'Raum konnte nicht geöffnet werden.'; return; }
  const players = new Map();   // id -> { id, name, score, right }
  const renderLobby = () => {
    $('#lobby .lb-code').textContent = room.code;
    $('#lobby .lb-qr').innerHTML = room.qrSvg || `<img alt="QR-Code" src="${room.qrDataUrl}">`;
    $('#lobby .lb-url').textContent = room.joinUrl.replace(/^https?:\/\//, '');
    $('#lobby .lb-players').innerHTML = [...players.values()].map(p => `<li>${UI.esc(p.name)}</li>`).join('') || '<li class="muted">Noch niemand da …</li>';
    $('#lobby .go').disabled = players.size === 0;
    $('#lobby .lb-status').textContent = players.size ? `${players.size} ${players.size === 1 ? 'Person' : 'Personen'} am Pult` : 'Warten auf Mitspieler';
  };
  room.on('peer-join', ({ peer }) => { if (!players.has(peer.id)) players.set(peer.id, { id: peer.id, name: String(peer.name || 'Gast').slice(0, 16), score: 0, right: 0 }); renderLobby(); sync(); });
  room.on('peer-leave', () => renderLobby());
  let phase = { id: 0, kind: 'lobby' }, waiter = null;
  const got = new Map();
  room.on('message', ({ from: peer, msg }) => {
    const from = peer && peer.id;
    if (!from || !msg || msg.phase !== phase.id || !waiter) return;
    if (got.has(from)) return;
    got.set(from, msg.val); room.setState({ answered: { [from]: true } });
    renderWaiting();
    if ([...players.keys()].every(id => got.has(id) || !room.peers().find(p => p.id === id)?.connected)) waiter();
  });
  const pub = q => ({ id: q.id, type: q.type, cat: q.cat, q: q.q, svg: q.svg || '', opts: q.opts || null });
  function sync(extra = {}) {
    room.setState({ players: Object.fromEntries([...players.values()].map(p => [p.id, { name: p.name, score: p.score, right: p.right }])), ...extra }, { immediate: true });
  }
  function renderWaiting() {
    const box = $('#answer .waitlist'); if (!box) return;
    box.innerHTML = [...players.values()].map(p => `<span class="pchip ${got.has(p.id) ? 'in' : ''}">${UI.esc(p.name)}</span>`).join('');
  }
  renderLobby();
  Duo.say('lobby');
  await new Promise(res => { $('#lobby .go').onclick = res; });
  room.lock();
  const list = () => [...players.values()];

  const io = {
    autoNext: 14000,
    players: list,
    async collect(kind, o) {
      phase = { id: phase.id + 1, kind }; got.clear();
      const state = { phase: phase.id, kind, answered: null, reveal: null };
      if (kind === 'answer') { state.q = pub(o.q); state.tip = o.holger ? o.holger.val : null; state.meta = o.meta; }
      if (kind === 'estimate') state.q = pub(o.q);
      if (kind === 'stake') state.max = Object.fromEntries(list().map(p => [p.id, o.maxOf(p)]));
      room.setState(state, { immediate: true });
      const box = $('#answer');
      if (kind === 'answer') { UI.answer(box, o.q, { holger: o.holger, readOnly: true }); box.insertAdjacentHTML('beforeend', '<div class="waitlist"></div>'); }
      else box.innerHTML = `<p class="studio-hint">${{ estimate: 'Jetzt auf dem Handy schätzen: Wie viel Prozent schaffen das?', stake: 'Jetzt auf dem Handy den Einsatz wählen.', final: 'Jetzt auf dem Handy entscheiden: spielen oder Punkte nehmen?' }[kind]}</p><div class="waitlist"></div>`;
      renderWaiting();
      const time = o.time || 45;
      await new Promise(res => {
        let tm = null, nag = null;
        waiter = () => { clearTimeout(nag); tm && tm.stop(); waiter = null; res(); };
        tm = stage.timer(time, () => waiter && waiter());
        nag = setTimeout(() => { if (got.size < players.size) Duo.say('waiting'); }, time * 600 / FX.TEMPO);
        if (players.size === 0) waiter();
      });
      Duo.cut();
      if (got.size === players.size) await sayAnd('allIn');
      const out = new Map();
      for (const p of list()) {
        const v = got.get(p.id);
        if (kind === 'answer') out.set(p.id, { val: v ?? null, left: 0 });
        else if (kind === 'estimate') out.set(p.id, v == null ? 50 : Math.max(1, Math.min(99, Number(v))));
        else if (kind === 'stake') out.set(p.id, Math.max(0, Math.min(Math.floor(p.score / 2), Number(v) || 0)));
        else out.set(p.id, v === 'play' ? 'play' : 'take');
      }
      return out;
    },
    marked(q) { UI.markResult($('#answer'), q, -1, false); },
    groupHtml(res) {
      return `<ul class="grp">${res.map(r => `<li class="${r.ok ? 'ok' : 'no'}"><span>${UI.esc(r.p.name)}</span><b>${r.delta > 0 ? '+' : ''}${fmt(r.delta)}</b></li>`).join('')}</ul>`;
    },
    revealed(q, res) {
      sync({ phase: ++phase.id, kind: 'reveal', reveal: Object.fromEntries(res.map(r => [r.p.id, { ok: r.ok, delta: r.delta }])), sol: BW.solutionText(q), ex: q.ex || '' });
    },
    ended(ranked, title) { sync({ phase: ++phase.id, kind: 'end', title: title.name, ranking: ranked.map(p => p.id) }); },
  };
  sync();
  await runShow(io);
}

// ---------- Handy-Pult ----------
async function controller(code) {
  screen('pad');
  const name = await new Promise(res => {
    const inp = $('#pad .pd-name'); inp.value = BW.store.get('name', '');
    $('#pad .pd-code').textContent = code;
    $('#pad .pd-join').onclick = () => { const n = inp.value.trim().slice(0, 16); if (n) { BW.store.set('name', n); res(n); } else inp.focus(); };
  });
  $('#pad .pd-form').hidden = true;
  const st = $('#pad .pd-status'); st.textContent = 'Verbinde …';
  const { joinRoom } = await import('../net/room.js');
  let me;
  try { me = await joinRoom(code, { prefix: PREFIX, name }); } catch (e) { st.textContent = e.message || 'Verbindung fehlgeschlagen.'; $('#pad .pd-form').hidden = false; return; }
  st.textContent = 'Drin! Schau auf die Bühne.';
  let shown = -1;
  const main = $('#pad .pd-main');
  me.on('host-lost', () => { st.textContent = 'Die Bühne ist weg. Sendung beendet.'; });
  me.on('disconnected', () => { st.textContent = 'Verbindung weg – verbinde neu …'; });
  me.on('reconnect', () => { st.textContent = 'Wieder da.'; });
  me.on('state', ({ state }) => {
    const mine = state.players?.[me.id];
    if (mine) $('#pad .pd-score').textContent = fmt(mine.score) + ' Punkte';
    if (state.phase === shown) return;
    shown = state.phase;
    const send = val => { me.send({ phase: state.phase, val }); main.innerHTML = '<div class="pd-wait">Eingeloggt. Schau auf die Bühne.</div>'; };
    if (state.kind === 'answer' && state.q) {
      main.innerHTML = `<div class="card mini">${UI.card(state.q, state.meta)}</div><div class="answer"></div>`;
      const h = UI.answer(main.querySelector('.answer'), state.q, { holger: state.tip != null ? { val: state.tip } : null });
      h.promise.then(v => v != null && send(v));
    } else if (state.kind === 'estimate') {
      UI.slider(main, { label: 'Wie viel Prozent schaffen das?', min: 1, max: 99, start: 50, unit: ' %', button: 'Schätzung abgeben' }).then(send);
    } else if (state.kind === 'stake') {
      const max = state.max?.[me.id] || 0;
      if (max <= 0) { send(0); main.innerHTML = '<div class="pd-wait">Noch keine Punkte zum Setzen – du spielst ohne Einsatz.</div>'; }
      else UI.slider(main, { label: 'Dein Einsatz', min: 0, max, step: Math.max(1, Math.round(max / 20)), start: Math.round(max / 2), button: 'Setzen', fmt: v => fmt(v) + ' Punkte' }).then(send);
    } else if (state.kind === 'final') {
      UI.choose(main, 'Finale: spielen oder Punkte nehmen?', [{ v: 'play', t: 'Ich spiele' }, { v: 'take', t: 'Punkte nehmen' }]).then(send);
    } else if (state.kind === 'reveal') {
      const r = state.reveal?.[me.id];
      main.innerHTML = r ? `<div class="pd-res ${r.ok ? 'ok' : 'no'}">${r.ok ? 'Richtig' : 'Falsch'}<span>${r.delta > 0 ? '+' : ''}${fmt(r.delta)}</span></div><p class="pd-sol">Lösung: <b>${UI.esc(state.sol)}</b></p>` : '<div class="pd-wait">Auflösung auf der Bühne.</div>';
      FX.vibrate(r?.ok ? 30 : [60, 40, 60]);
    } else if (state.kind === 'end') {
      const place = (state.ranking || []).indexOf(me.id) + 1;
      main.innerHTML = `<div class="pd-res ok">Platz ${place || '–'}</div><p class="pd-sol">Siegertitel: <b>${UI.esc(state.title || '')}</b></p>`;
    } else main.innerHTML = '<div class="pd-wait">Gleich geht es los. Schau auf die Bühne.</div>';
  });
}

// ---------- Start ----------
function boot() {
  Duo.mount($('#duo'));
  $('.t-duo').innerHTML = Duo.SVG.v + Duo.SVG.h;
  const join = Q.get('join');
  if (FX.MUTE) document.body.classList.add('muted');
  const first = () => { Duo.unlock(); SFX.unlock(); };
  if (join) { document.addEventListener('pointerdown', first, { once: true }); controller(join.toUpperCase()); return; }
  screen('title');
  $('#btn-solo').onclick = () => { first(); runShow(soloIO()); };
  $('#btn-studio').onclick = () => { first(); studioHost(); };
  $('#join-form').onsubmit = e => {
    e.preventDefault(); const c = $('#join-code').value.trim().toUpperCase();
    if (c) location.search = '?join=' + encodeURIComponent(c) + (FX.MUTE ? '&stumm=1' : '');
  };
  $('#btn-quit').onclick = () => { if (confirm('Sendung abbrechen?')) location.href = location.pathname + (FX.MUTE ? '?stumm=1' : ''); };
}
boot();
