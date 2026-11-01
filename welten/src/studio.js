// Studio-Modus: Ein Gerät (Tablet/Fernseher) ist die Bühne mit der 3D-Welt, alle Spieler antworten auf ihren Handys.
// Bühne: Die Gruppe läuft automatisch von Tor zu Tor (Route = chapter.rivalPath), an jedem Tor kommt eine Frage auf
// alle Handys; wer falsch liegt, bekommt den Slapstick des Tors ab, wer richtig liegt, sammelt Punkte (100 + Tempo-Bonus).
// Liegen alle falsch, gibt es eine neue Frage. Die Gags der Welt erwischen den vordersten Spieler. Am Kristall: Siegerehrung.
// Handy: zeigt Frage + Antwortknöpfe/Tastatur, loggt ein, zeigt danach das eigene Ergebnis und am Ende den Platz.
// Netz: Zustand unter state.studio (Frage, eingeloggte Spieler, Auflösung, Punkte, Rangliste); Antworten als Nachricht 'ans'.
import { AVATARS, COLORS, figModel } from './multi.js';

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const KEYS = ['QWERTZUIOPÜ', 'ASDFGHJKLÖÄ', 'YXCVBNMß'];

export function createStudio(api) {
  const { V, sleep } = api;
  const S = {
    on: false, pad: false, players: [], n: 0, cur: null, scores: {},

    // ======================= Bühne =======================
    startStage(slots, hostId) {
      S.on = true;
      S.players = Object.entries(slots).filter(([id, p]) => id !== hostId && p && p.name && !p.stage)
        .map(([id, p], i) => ({ id, name: p.name, slot: p.slot ?? i + 1, fig: p.fig, score: 0 }));
      for (const pl of S.players) { pl.actor = api.makeActor(figModel(pl), pl.name, COLORS[pl.slot % COLORS.length]); pl.actor.obj.visible = false; pl.actor.studioId = pl.id; S.scores[pl.id] = 0; }
      api.setPlayer(S.players[0].actor);
      S.publish({ scores: S.scores });
      S.board();
    },
    actors() { return S.players.map(p => p.actor); },
    followers() { return S.players.slice(1).map(p => p.actor); },
    byActor(a) { return S.players.find(p => p.actor === a); },
    publish(patch) { api.multi.room && api.multi.room.setState({ studio: patch }, { immediate: true }); },

    // Mitspieler springen nach dem Anführer aus dem Portal
    async spawn() {
      const P = api.world.portal;
      for (const [i, a] of S.followers().entries()) {
        a.obj.visible = true; a.pos.set(P.x, 1.5, P.z - 0.2); api.audio.sfx('phaseJump1', { rate: 1 + i * 0.1 });
        api.burst(V(P.x, 1.3, P.z), { n: 30, colors: [COLORS[S.players[i + 1].slot % COLORS.length], '#ffffff'] });
        a.launch(6, V(P.x + (i % 2 ? 0.8 : -0.8), 0, P.z - 2.6 - (i >> 1) * 0.8)).then(() => a.play('emote-yes', { once: true }));
        await sleep(350);
      }
      await sleep(600);
    },
    // Formation hinter dem Anführer, Münzen für alle
    update(dt) {
      if (!S.on || !api.state.playing) return;
      const lead = api.player();
      S.followers().forEach((a, i) => {
        a.update(dt);
        if (a.busy || a.air || S.frozen) return;
        const row = 1 + (i >> 1), want = V(lead.pos.x + (i % 2 ? 0.75 : -0.75) * (1 + row * 0.15), 0, lead.pos.z + row * 0.95);
        if (Math.hypot(a.pos.x - want.x, a.pos.z - want.z) > 0.55) { if (!a.target || a.target.distanceTo(want) > 0.4) a.target = want; }
      });
      for (const c of api.world.coins) if (c.visible) for (const pl of S.players) if (pl.actor.pos.distanceTo(c.position) < 0.9) {
        c.visible = false; S.add(pl, 10); api.audio.sfx('handleCoins', { vol: 0.5 }); api.burst(c.position, { n: 14, colors: ['#ffc940'], up: 3, speed: 1.5, life: 0.6 }); api.ticker(`🪙 +10 für ${pl.name}`); break;
      }
    },
    add(pl, pts) { pl.score += pts; S.scores[pl.id] = pl.score; S.publish({ scores: { [pl.id]: pl.score } }); S.board(); },
    board() {
      const el = $('#board'); el.hidden = !S.on;
      el.innerHTML = [...S.players].sort((a, b) => b.score - a.score).map((p, i) => `<div class="bd-row"><span class="bd-rank">${i + 1}</span><span class="lb-dot" style="background:${COLORS[p.slot % COLORS.length]}"></span><b>${esc(p.name)}</b><span class="bd-pts">${p.score}</span></div>`).join('');
    },

    // Ablauf: Route des Kapitels abgehen, an Toren Fragen stellen, am Ende Siegerehrung
    async run() {
      const CH = api.CH();
      for (const step of CH.rivalPath) {
        if (api.state.over) return;
        if (typeof step === 'string') await S.gate(CH.gates.findIndex(g => g.id === step));
        else await S.walk(step[0], step[1]);
      }
      const C = api.world.crystal; await S.walk(C.x, C.z + 1.7);
      await S.finale();
    },
    async walk(x, z) {
      const p = api.player();
      for (let i = 0; i < 700 && !api.state.over; i++) {
        if (!p.busy && !p.air) { if (Math.hypot(p.pos.x - x, p.pos.z - z) < 0.35) return; if (!p.target) p.target = V(x, 0, z); }
        await sleep(100);
      }
    },
    async gate(gi) {
      const CH = api.CH(), world = api.world, gate = world.gates[gi], def = CH.gates[gi], lead = api.player();
      gate.asking = true; S.frozen = true;
      lead.busy = true; lead.target = null; lead.play('idle'); lead.face(gate.x, gate.z);
      for (const a of S.followers()) { a.target = V(a.pos.x, 0, Math.max(a.pos.z, gate.z + 1.4)); }
      api.gateShot(gate, true);
      if (!gate.introduced) { gate.introduced = true; await CH.gateIntro(api.ctx, gi); }
      for (;;) {
        const q = api.nextQ(def, gate);
        const res = await S.ask(q, gate);
        // Erklärung auf der Bühne; überspringbar nur, wenn alle richtig lagen. Handys zeigen solange einen Hinweis.
        S.publish({ expl: S.n }); await api.explain(q, null, { skippable: S.players.every(p => res[p.id] && res[p.id].ok) }); S.publish({ expl: null });
        const right = S.players.filter(p => res[p.id] && res[p.id].ok), wrong = S.players.filter(p => !(res[p.id] && res[p.id].ok));
        if (wrong.length) { api.audio.sfx('jingles_SAX02'); world.drawClock(gate, 0, false, right.length ? '' : 'bad'); await Promise.all(wrong.map(p => CH.slap(api.ctx, p.actor, gi))); }
        if (right.length) {
          api.audio.sfx('jingles_PIZZI01'); world.drawClock(gate, 1, false, 'ok'); await sleep(400);
          api.audio.sfx('doorOpen_1'); world.spinGate(gate, 1); api.burst(V(gate.x, 2.2, gate.z + 0.2), { n: 70 }); api.cam.shake = 0.25;
          for (const a of S.actors()) a.passed.add(gate.id);
          if (def.bridge && !world.bridge.built) world.buildBridge(() => api.audio.sfx(CH.bridgeSfx || 'impactMetal_heavy_002', { vol: 0.4, rate: 1.3 }));
          api.say(api.react('richtig'), { wait: false });
          await sleep(1200); world.drawClock(gate, 1, false);
          CH.onPassed && CH.onPassed(api.ctx, gi);
          break;
        }
        await api.say(api.react('falsch'));
        api.gateShot(gate, true);
      }
      gate.asking = false; S.frozen = false; lead.busy = false; api.camFollow(lead);
    },

    // Frage an alle Handys, Antworten sammeln, auf der Bühne auflösen
    ask(q, gate) {
      return new Promise(resolve => {
        // ohne Limit: höchstens 3 Minuten, damit ein verschwundenes Handy das Spiel nicht anhält
        const n = ++S.n, T = api.zeit.forQ(q, 180), t0 = performance.now(), answers = {};
        S.cur = { n, q, answers, done: false };
        S.publish({ q: { n, id: q.id, T }, ans: null, rev: null });
        const el = $('#riddle'), text = q.type !== 'choice';
        const letterOpts = !text && q.opts.every(o => /^[A-D]$/.test(o));
        el.innerHTML = `<div class="r-card stage"><div class="r-tier"><b>${q.tier}</b>%<small>lösen das</small></div>
          <div class="r-q">${q.q}</div>${q.svg ? `<div class="r-svg">${q.svg}</div>` : ''}
          ${text ? '<div class="st-type">✍️ Tippt die Antwort auf euren Handys!</div>' : `<div class="r-opts ${letterOpts ? 'letters' : ''}">${q.opts.map((o, i) => `<div class="r-opt" data-oi="${i}"><span>${'ABCD'[i]}</span>${letterOpts ? '' : o}</div>`).join('')}</div>`}
          <div class="st-chips">${S.players.map(p => `<div class="st-chip" data-id="${p.id}"><span class="lb-dot" style="background:${COLORS[p.slot % COLORS.length]}"></span>${esc(p.name)}<i>…</i></div>`).join('')}</div>
          <div class="r-time"><i></i></div></div>`;
        el.hidden = false; requestAnimationFrame(() => el.classList.add('show'));
        api.audio.sfx('question_001');
        const bar = el.querySelector('.r-time i'); let teased = false, lastSec = T;
        const tick = () => {
          if (S.cur.done) return;
          const left = Math.max(0, T - (performance.now() - t0) / 1000), frac = left / T;
          bar.style.width = frac * 100 + '%'; bar.classList.toggle('urgent', left < 6);
          api.world.drawClock(gate, frac, true); api.audio.setTension(1 - frac);
          const s = Math.ceil(left); if (s !== lastSec) { lastSec = s; if (s <= 5) api.audio.sfx('tick_004', { vol: 0.9, rate: 1.4 }); }
          if (!teased && T - left > Math.min(T * 0.4, 20)) { teased = true; api.say(api.react('denken'), { wait: false }); }
          if (left <= 0 || S.players.every(p => answers[p.id])) return reveal();
          requestAnimationFrame(tick);
        };
        S.cur.onAnswer = (id, val) => {
          if (answers[id] || S.cur.done) return;
          answers[id] = { val, left: Math.max(0, T - (performance.now() - t0) / 1000) };
          const chip = el.querySelector(`.st-chip[data-id="${id}"]`); if (chip) { chip.classList.add('in'); chip.querySelector('i').textContent = '🔒'; }
          api.audio.sfx('confirmation_002', { vol: 0.6 }); S.publish({ ans: { [id]: 1 } });
        };
        const reveal = async () => {
          S.cur.done = true; api.audio.setTension(0);
          const res = {};
          for (const p of S.players) { const a = answers[p.id], ok = !!a && api.isCorrect(q, a.val), pts = ok ? 100 + Math.round(50 * a.left / T) : 0;
            res[p.id] = { ok, pts, val: a ? (text ? String(a.val).slice(0, 24) : q.opts[a.val]) : null }; }
          await sleep(500); api.audio.sfx('jingles_HIT00', { vol: 0.7 }); await sleep(600);
          if (!text) el.querySelector(`.r-opt[data-oi="${q.a}"]`).classList.add('right');
          else el.querySelector('.st-type').innerHTML = `Lösung: <b>${esc(String(q.a))}</b>`;
          for (const p of S.players) { const r = res[p.id], chip = el.querySelector(`.st-chip[data-id="${p.id}"]`); if (!chip) continue;
            chip.classList.add(r.ok ? 'ok' : 'bad'); chip.querySelector('i').textContent = r.ok ? `✓ +${r.pts}` : r.val == null ? '⏰' : `✗ ${text ? r.val : ''}`.trim();
            if (r.ok) S.add(p, r.pts); }
          S.publish({ rev: { n, a: text ? String(q.a) : q.opts[q.a], res } });
          await sleep(3200);
          el.classList.remove('show'); setTimeout(() => (el.hidden = true), 300);
          resolve(res);
        };
        tick();
      });
    },
    answer(from, msg) { if (S.cur && msg && msg.n === S.cur.n && S.cur.onAnswer) S.cur.onAnswer(from, msg.val); },

    async finale() {
      const CH = api.CH(), C = api.world.crystal, rank = [...S.players].sort((a, b) => b.score - a.score), win = rank[0];
      api.state.over = true; C.taken = true;
      api.camShot(V(...CH.endShot[0]), V(...CH.endShot[1]), 2.4);
      win.actor.target = null; win.actor.play('emote-yes', { once: true });
      api.audio.sfx('jingles_PIZZI03'); api.audio.sfx('powerUp2', { delay: 0.3 });
      for (let i = 0; i < 6; i++) setTimeout(() => { api.burst(V(C.x + (Math.random() - 0.5) * 4, 2 + Math.random() * 2, C.z + (Math.random() - 0.5) * 3), { n: 60, speed: 5, up: 6 }); api.audio.sfx('pepSound1', { vol: 0.5, rate: 0.8 + Math.random() * 0.6 }); }, i * 380);
      C.mesh.position.y = C.y + 0.8;
      S.publish({ end: { rank: rank.map(p => ({ id: p.id, name: p.name, score: p.score })) } });
      api.ticker(`🏆 ${win.name} holt den Kristall!`);
      api.showRocco(V(...CH.roccoEnd));
      for (const l of CH.seq.win) await api.say(l);
      api.hideRocco(); api.progress.win(CH.id);
      $('#end').innerHTML = `<div class="end-card"><h2>🏆 ${esc(win.name)} gewinnt!</h2><p>${esc(CH.title)} – Kristall ${CH.nr} von 19</p>
        <ol class="podium">${rank.map((p, i) => `<li><span>${['🥇', '🥈', '🥉'][i] || i + 1 + '.'}</span><span class="lb-dot" style="background:${COLORS[p.slot % COLORS.length]}"></span><b>${esc(p.name)}</b><em>${p.score}</em></li>`).join('')}</ol>
        <a class="btn-go" href="?k=${CH.id}">Neues Studio</a></div>`;
      $('#end').hidden = false;
    },

    // ======================= Handy =======================
    startPad() {
      S.pad = true; document.body.classList.add('pad-mode');
      $('#pad').hidden = false; S.padView('wait');
    },
    padState(state) {
      if (!S.pad) return;
      const s = state.studio || {}, me = api.multi.id, myScore = (s.scores || {})[me] || 0;
      const meP = (state.players || {})[me] || {};
      $('#pad-head').innerHTML = `<span class="lb-dot" style="background:${COLORS[(meP.slot ?? 1) % COLORS.length]}"></span><b>${esc(meP.name || 'Ich')}</b><span class="pad-pts">${myScore} Punkte</span>`;
      if (s.end) { const i = s.end.rank.findIndex(r => r.id === me); return S.padView('end', { place: i + 1, of: s.end.rank.length, rank: s.end.rank }); }
      if (s.q && !(s.rev && s.rev.n === s.q.n)) {
        if (S.padN !== s.q.n) { S.padN = s.q.n; S.padLocked = false; S.padQuestion(s.q); }
        return;
      }
      if (s.expl && s.expl === S.padN && S.padExpl !== s.expl) { S.padExpl = s.expl; const r = (s.rev && s.rev.res[me]) || {}; return S.padView('explain', { ok: r.ok, pts: r.pts, a: s.rev ? s.rev.a : '' }); }
      if (!s.expl && S.padExpl === S.padN && S.padBack !== S.padN && S.padShown === S.padN) { S.padBack = S.padN; return S.padView('wait'); }
      if (s.rev && s.rev.n === S.padN && S.padShown !== s.rev.n) { S.padShown = s.rev.n; const r = s.rev.res[me] || {}; S.padView('result', { ok: r.ok, pts: r.pts, a: s.rev.a, none: r.val == null }); }
    },
    padView(kind, d = {}) {
      const body = $('#pad-body'); clearInterval(S.padTimer);
      if (kind === 'wait') body.innerHTML = `<div class="pad-msg"><div class="pad-big">📺</div>Schau auf die Bühne!<small>Die nächste Frage kommt hierher.</small></div>`;
      if (kind === 'locked') body.innerHTML = `<div class="pad-msg"><div class="pad-big">🔒</div>Eingeloggt!<small>Die Auflösung gibt's auf der Bühne.</small></div>`;
      if (kind === 'result') { body.innerHTML = `<div class="pad-msg ${d.ok ? 'ok' : 'bad'}"><div class="pad-big">${d.ok ? '✓' : d.none ? '⏰' : '✗'}</div>${d.ok ? `Richtig! +${d.pts}` : d.none ? 'Zu spät!' : 'Leider falsch'}<small>Lösung: ${esc(d.a)}</small></div>`;
        api.audio.sfx(d.ok ? 'jingles_PIZZI01' : 'jingles_SAX02', { vol: 0.6 }); navigator.vibrate && navigator.vibrate(d.ok ? 40 : [80, 50, 80]); }
      if (kind === 'explain') body.innerHTML = `<div class="pad-msg ${d.ok ? 'ok' : 'bad'}"><div class="pad-big">📖</div>Erklärung auf der Bühne<small>${d.ok ? `Du lagst richtig (+${d.pts})` : 'Diesmal daneben'} – Lösung: ${esc(d.a)}</small></div>`;
      if (kind === 'end') body.innerHTML = `<div class="pad-msg"><div class="pad-big">${['🥇', '🥈', '🥉'][d.place - 1] || '🏁'}</div>Platz ${d.place} von ${d.of}
        <ol class="podium small">${d.rank.map(r => `<li><b>${esc(r.name)}</b><em>${r.score}</em></li>`).join('')}</ol></div>`;
    },
    padQuestion(sq) {
      const q = api.BANK[sq.id]; if (!q) return S.padView('wait');
      const body = $('#pad-body'), text = q.type !== 'choice', letterOpts = !text && q.opts.every(o => /^[A-D]$/.test(o));
      const order = text ? [] : q.noShuffle ? q.opts.map((_, i) => i) : q.opts.map((_, i) => i).sort(() => Math.random() - 0.5);
      body.innerHTML = `<div class="r-card pad-card"><div class="r-q">${q.q}</div>${q.svg ? `<div class="r-svg">${q.svg}</div>` : ''}
        ${text ? `<div class="r-input"><div class="r-typed"><span class="r-caret"></span></div></div>
          <div class="r-keys">${KEYS.map((row, ri) => `<div class="r-row">${[...row].map(k => `<button class="r-key" data-k="${k}">${k}</button>`).join('')}${ri === 2 ? '<button class="r-key wide" data-k="⌫">⌫</button>' : ''}</div>`).join('')}
          <div class="r-row"><button class="r-key space" data-k=" ">Leerzeichen</button><button class="r-key ok" data-k="OK">Einloggen 🔒</button></div></div>`
        : `<div class="r-opts ${letterOpts ? 'letters' : ''}">${order.map((oi, k) => `<button class="r-opt" data-oi="${oi}"><span>${'ABCD'[k]}</span>${letterOpts ? '' : q.opts[oi]}</button>`).join('')}</div>`}
        <div class="r-time"><i></i></div></div>`;
      api.audio.sfx('question_001'); navigator.vibrate && navigator.vibrate(30);
      const until = performance.now() + sq.T * 1000 - 300, bar = body.querySelector('.r-time i');
      S.padTimer = setInterval(() => { const f = Math.max(0, (until - performance.now()) / (sq.T * 1000)); bar.style.width = f * 100 + '%'; bar.classList.toggle('urgent', f < 0.2); if (f <= 0) { clearInterval(S.padTimer); if (!S.padLocked) S.padView('wait'); } }, 200);
      const send = val => { if (S.padLocked) return; S.padLocked = true; api.multi.me && api.multi.me.send({ type: 'ans', n: sq.n, val }); api.audio.sfx('confirmation_002'); S.padView('locked'); };
      if (!text) body.querySelectorAll('.r-opt').forEach(b => (b.onclick = () => { api.audio.unlock(); send(+b.dataset.oi); }));
      else {
        let typed = '';
        const show = () => (body.querySelector('.r-typed').innerHTML = `${esc(typed)}<span class="r-caret"></span>`);
        body.querySelectorAll('.r-key').forEach(b => (b.onclick = () => {
          api.audio.unlock(); const k = b.dataset.k;
          if (k === 'OK') { if (typed.trim()) send(typed); return; }
          typed = k === '⌫' ? typed.slice(0, -1) : typed.length < 24 ? typed + k : typed; api.audio.sfx('select_002', { vol: 0.35 }); show();
        }));
      }
    },
  };
  return S;
}
