// Moderations-Engine: wählbare Moderatoren-Teams (je zwei Comic-Figuren mit eigener
// Rahmengeschichte). Ein Team registriert sich mit Cast.register({...}) – siehe casts/*.js
// und docs/CASTS.md für das Format.
(function (root) {
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const TEAMS = {};
  let cur = null;
  const DEFAULT_STAGE = [[['a', 'idle', 'Weiter geht es!']]];

  function register(team) { TEAMS[team.id] = team; if (!cur) cur = team; }
  function use(id) { if (TEAMS[id]) cur = TEAMS[id]; return cur; }
  const list = () => Object.values(TEAMS);
  const team = () => cur;
  const fill = (lines, vars) => lines.map(([who, mood, text]) => [who, mood, text.replace(/\{(\w+)\}/g, (_, v) => vars[v] ?? '')]);
  const scene = (key, vars = {}) => fill(pick(cur.react[key] || cur.react.correct), vars);
  const stage = tier => fill(pick(cur.stage[tier] || DEFAULT_STAGE), {});
  const tease = () => pick(cur.tease);

  // ---------- Darstellung ----------
  // Eine "Bühne" mit beiden Figuren und einer Sprechblase; spielt eine Szene Zeile für Zeile.
  function boothHTML(compact = false) {
    return `<div class="booth ${compact ? 'compact' : ''}" data-team="${cur.id}">
      <div class="actor a-slot">${cur.a.draw('idle')}</div>
      <div class="bubble-wrap"><div class="who"></div><div class="bubble"></div></div>
      <div class="actor b-slot">${cur.b.draw('idle')}</div></div>`;
  }

  const reduced = () => document.body.classList.contains('calm') || matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Spielt eine Szene; resolve, wenn fertig (oder sofort bei Tippen auf die Blase).
  function play(booth, lines, { pace = 1 } = {}) {
    if (!booth) return Promise.resolve();
    const bubble = booth.querySelector('.bubble'), who = booth.querySelector('.who');
    booth._token = (booth._token || 0) + 1;
    const token = booth._token;
    return new Promise(async resolve => {
      let skip = false;
      booth.onclick = () => { skip = true; };
      for (const [name, mood, text] of lines) {
        if (booth._token !== token || !booth.isConnected) return resolve();
        const slot = booth.querySelector(`.${name}-slot`);
        const other = booth.querySelector(`.${name === 'a' ? 'b' : 'a'}-slot`);
        slot.innerHTML = cur[name].draw(mood);
        slot.classList.add('talking', 'active'); other.classList.remove('talking', 'active');
        booth.dataset.speaker = name;
        who.textContent = cur[name].name;
        const tmp = document.createElement('div'); tmp.innerHTML = text;
        const plain = tmp.textContent;
        if (reduced() || skip) bubble.innerHTML = text;
        else {
          bubble.innerHTML = '';
          for (let i = 0; i <= plain.length; i += 2) {
            if (skip || booth._token !== token) break;
            bubble.textContent = plain.slice(0, i);
            await new Promise(r => setTimeout(r, 20));
          }
          bubble.innerHTML = text;
        }
        slot.classList.remove('talking');
        await new Promise(r => setTimeout(r, skip ? 250 : Math.max(700, plain.length * 28) * pace));
      }
      resolve();
    });
  }

  // Einzelne Figur mit Stimmung setzen (z. B. Rocco grinst bei Falschantwort).
  function pose(booth, name, mood) {
    const slot = booth?.querySelector(`.${name}-slot`);
    if (slot) slot.innerHTML = cur[name].draw(mood);
  }

  root.Cast = { register, use, list, team, boothHTML, play, pose, scene, stage, tease };
})(window);
