// Spielkern: Fragen aus der vorhandenen Bank (../js/*.js, nur gelesen), Runden, Wertung, Holger als Mittelwert.
(function (root) {
  const D = root.Difficulty;
  const BANK = root.QUIZ_BANK.map(q => D.annotate({ ...q }));

  const store = {
    get(k, d) { try { const v = localStorage.getItem('bw-' + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem('bw-' + k, JSON.stringify(v)); } catch { /* privates Fenster */ } },
  };

  function rngFrom(seed) {
    let s = seed >>> 0 || 1;
    return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
  }
  function shuffle(a, rng) {
    a = a.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  // Runden: Quote-Band, Fragetypen, Anzahl, Zeit (s), Grundpunkte.
  const ROUNDS = [
    { key: 'r1', name: 'Aufwärmen', lo: 0.7, hi: 1.01, n: 3, time: 20, base: 100 },
    { key: 'r2', name: 'Holgers Tipp', lo: 0.4, hi: 0.7, n: 3, time: 40, base: 150, types: ['choice'] },
    { key: 'r3', name: 'Quote schätzen', lo: 0.15, hi: 0.4, n: 3, time: 60, base: 200 },
    { key: 'r4', name: 'Einsatz', lo: 0.05, hi: 0.2, n: 2, time: 75, base: 250 },
    { key: 'final', name: 'Finale', lo: 0, hi: 0.05, n: 1, time: 90, base: 0 },
  ];

  // Zieht die Fragen einer Partie: ungesehene zuerst, keine Musterfamilie doppelt.
  function pickGame(rng) {
    const seen = new Set(store.get('seen', []));
    const fams = new Set(), used = new Set();
    return ROUNDS.map(r => {
      const pool = BANK.filter(q => q.p >= r.lo && q.p < r.hi && (!r.types || r.types.includes(q.type)));
      const fresh = shuffle(pool.filter(q => !seen.has(q.id)), rng), old = shuffle(pool.filter(q => seen.has(q.id)), rng);
      const out = [];
      for (const q of fresh.concat(old)) {
        if (out.length >= r.n) break;
        if (used.has(q.id) || (q.fam && fams.has(q.fam))) continue;
        out.push(q); used.add(q.id); if (q.fam) fams.add(q.fam);
      }
      return { ...r, qs: out };
    });
  }
  function markSeen(q) {
    const seen = store.get('seen', []);
    if (!seen.includes(q.id)) { seen.push(q.id); store.set('seen', seen.length > 500 ? seen.slice(-500) : seen); }
  }

  function norm(s) {
    return String(s).trim().toUpperCase().replace(/Ä/g, 'AE').replace(/Ö/g, 'OE').replace(/Ü/g, 'UE').replace(/ß/g, 'SS').replace(/[^A-Z0-9]/g, '');
  }
  // Wie im klassischen Spiel: Füllwörter am Anfang („Den Handschuh“) zählen nicht.
  function isCorrect(q, val) {
    if (val == null || val === '') return false;
    if (q.type === 'choice') return val === q.a;
    if (q.type === 'number') return Number(String(val).replace(',', '.')) === q.a;
    const ok = v => [q.a, ...(q.accept || [])].map(norm).includes(v) || (q.contains || []).some(c => v.includes(norm(c)));
    if (ok(norm(val))) return true;
    const FILL = new Set(['DER', 'DIE', 'DAS', 'DEN', 'DEM', 'DES', 'EIN', 'EINE', 'EINEN', 'EINEM', 'EINER', 'NACH', 'IM', 'AM', 'AUF', 'IN', 'ZUM', 'ZUR', 'ES', 'IST', 'WAR']);
    const words = String(val).trim().toUpperCase().split(/\s+/);
    while (words.length > 1 && FILL.has(words[0].replace(/[^A-ZÄÖÜ]/g, ''))) words.shift();
    return ok(norm(words.join(' ')));
  }
  const solutionText = q => q.type === 'choice' ? q.opts[q.a] : String(q.a);
  const pct = q => Math.max(1, Math.min(99, Math.round(q.p * 100)));

  // Auswahl-Reihenfolge je Frage festlegen (außer noShuffle). Liefert eine Kopie mit gemischten opts und neuem a.
  function prepare(q, rng) {
    if (q.type !== 'choice' || q.noShuffle) return { ...q };
    const order = shuffle(q.opts.map((_, i) => i), rng);
    return { ...q, opts: order.map(i => q.opts[i]), a: order.indexOf(q.a) };
  }

  // Holger ist statistisch exakt Durchschnitt: richtig mit Wahrscheinlichkeit p.
  function holgerTip(q, rng) {
    const right = rng() < q.p;
    if (q.type === 'choice') {
      if (right) return { val: q.a, right };
      const wrong = q.opts.map((_, i) => i).filter(i => i !== q.a);
      return { val: wrong[Math.floor(rng() * wrong.length)], right };
    }
    return { val: right ? q.a : null, right };
  }

  const scoreEstimate = (est, real) => Math.max(0, 100 - 5 * Math.abs(est - real));
  const HOLGER_ESTIMATE = 90;

  // Titel nach Anzahl richtiger Antworten (Holger schafft im Mittel etwa fünf von zwölf).
  const TITLES = [
    { min: 0, name: 'Holger-Niveau', line: 'title0' },
    { min: 6, name: 'Solides Mittelfeld', line: 'title1' },
    { min: 8, name: 'Besserwisser in Ausbildung', line: 'title2' },
    { min: 10, name: 'Besserwisser', line: 'title3' },
    { min: 12, name: 'Amtlich geprüfter Besserwisser', line: 'title4' },
  ];
  const titleFor = nRight => TITLES.filter(t => nRight >= t.min).pop();

  root.BW = { BANK, ROUNDS, store, rngFrom, shuffle, pickGame, markSeen, isCorrect, solutionText, pct, prepare, holgerTip,
    scoreEstimate, HOLGER_ESTIMATE, TITLES, titleFor, norm };
})(typeof window !== 'undefined' ? window : globalThis);
