/*
 * Schwierigkeitsmodell — schätzt, wie viel Prozent der Bevölkerung eine Frage lösen.
 *
 * Jede Frage trägt eine Rubrik r = [S, E, F, W, K]:
 *   S  Denkschritte        0 Antwort springt ins Auge · 1 ein Schritt · 2 zwei–drei · 3 lange Kette
 *   E  Einsicht nötig      0 keine · 1 offensichtliche Regel · 2 versteckte Regel / umdeuten
 *                          3 Perspektivwechsel gegen die Intuition · 4 abwegige Kodierung
 *   F  Falle               0 keine · 1 leichte Fehlerquelle · 2 verlockende Falschantwort
 *                          3 sehr starke intuitive Falschantwort
 *   W  Arbeitsgedächtnis   0 nichts · 1 einfaches Rechnen/Zählen · 2 mehrere Zwischenwerte
 *   K  Wissen              0 Alltag · 1 Schulwissen · 2 Spezialwissen
 *
 * score  = S + 1.6·E + 1.3·F + 0.8·W + 0.8·K
 * p_open = 0.97 · exp(-(score/τ)^κ)              (offene Antwort)
 * p      = p_open + (1-p_open) · 0.5/n           (Auswahl mit n Optionen: halbes Raten)
 *
 * τ und κ werden aus zwei Ankern gefittet (siehe ANCHORS) und danach gegen weitere
 * Anker gegengeprüft (tools/check-bank.js). Der Spieler-Prozentwert ist eine Schätzung,
 * keine Umfrage — das Spiel sammelt lokal echte Lösungsquoten zur Nachkalibrierung.
 */
(function (root) {
  const W = [1, 1.6, 1.3, 0.8, 0.8];
  const TIERS = [90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 1];

  // Anker mit bekannter Lösungsquote (Literatur bzw. Sendung).
  const ANCHORS = [
    // Fit-Anker
    { name: 'Schläger & Ball (CRT, Frederick 2005)', r: [1, 0, 3, 1, 0], n: 0, p: 0.30, fit: true },
    { name: '1%-Frage der Sendung (Silben des Alphabets)', r: [2, 4, 1, 2, 0], n: 0, p: 0.01, fit: true },
    // Prüf-Anker (nur zur Kontrolle, nicht gefittet)
    { name: 'Wason-Kartenaufgabe (ca. 10 %, 4 Optionen)', r: [1, 3, 3, 0, 0], n: 4, p: 0.10 },
    { name: 'Seerosen (CRT, meist häufiger gelöst als Schläger & Ball)', r: [1, 1, 2, 0, 0], n: 0, p: 0.40 },
  ];

  function score(r) {
    return r.reduce((s, v, i) => s + v * W[i], 0);
  }

  function fit() {
    const [a, b] = ANCHORS.filter(x => x.fit);
    const sa = score(a.r), sb = score(b.r);
    const la = -Math.log(a.p / 0.97), lb = -Math.log(b.p / 0.97);
    const kappa = Math.log(lb / la) / Math.log(sb / sa);
    const tau = sa / Math.pow(la, 1 / kappa);
    return { tau, kappa };
  }
  const { tau, kappa } = fit();

  function pOpen(s) {
    return 0.97 * Math.exp(-Math.pow(s / tau, kappa));
  }

  function estimate(r, nOptions) {
    const po = pOpen(score(r));
    return nOptions ? po + (1 - po) * 0.5 / nOptions : po;
  }

  // Einrasten auf die nächste Stufe in log-Abstand (1 % und 5 % sind sonst zu nah an 0).
  function tierOf(p) {
    let best = TIERS[0], bd = Infinity;
    for (const t of TIERS) {
      const d = Math.abs(Math.log(p) - Math.log(t / 100));
      if (d < bd) { bd = d; best = t; }
    }
    return best;
  }

  // Kalibrierte Quote (js/calib.js, geeicht an echten Sendungsfragen) hat Vorrang;
  // die Autoren-Rubrik dient nur noch als Rückfall für neue, unbewertete Fragen.
  function annotate(q) {
    const n = q.type === 'choice' ? q.opts.length : 0;
    q.score = score(q.r);
    q.pRubric = estimate(q.r, n);
    const cal = root.QUIZ_CALIB && root.QUIZ_CALIB[q.id];
    q.p = cal != null ? cal : q.pRubric;
    q.calibrated = cal != null;
    q.tier = tierOf(q.p);
    return q;
  }

  root.Difficulty = { TIERS, ANCHORS, score, estimate, tierOf, annotate, tau, kappa };
})(typeof window !== 'undefined' ? window : globalThis);
