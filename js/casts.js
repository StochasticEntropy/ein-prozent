// GENERIERT von tools/build-casts.js – nicht von Hand bearbeiten.
// ---- wette.js ----
// Moderatoren-Team „Die Wette“: Professor Uhu (erklärt, gelehrt, nervös) und Rocco
// (frecher Waschbär, hat die Fallen gebaut). Rocco hat gewettet, dass heute niemand die
// 1 %-Frage knackt – Uhu hält dagegen und setzt auf dich. Wer verliert, putzt das ganze Studio.
(function () {
  const K = '#1b1430';
  const L = (w = 3, cls = '') => `class="c-line${cls ? ' ' + cls : ''}" stroke="${K}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
  const MIRROR = 'matrix(-1 0 0 1 120 0)';
  const fx = {
    star: (x, y, s = 1) => `<path d="M${x} ${y - 7 * s} L${x + 2 * s} ${y - 2 * s} L${x + 7 * s} ${y} L${x + 2 * s} ${y + 2 * s} L${x} ${y + 7 * s} L${x - 2 * s} ${y + 2 * s} L${x - 7 * s} ${y} L${x - 2 * s} ${y - 2 * s} Z" fill="#ffc940" stroke="${K}" stroke-width="1"/>`,
    drop: (x, y) => `<path d="M${x} ${y - 7} Q${x + 6} ${y + 2} ${x} ${y + 6} Q${x - 6} ${y + 2} ${x} ${y - 7} Z" fill="#7fd6ff" stroke="${K}" stroke-width="1.5"/>`,
    dots: (x, y) => `<circle cx="${x}" cy="${y}" r="2.5" fill="#fff"/><circle cx="${x + 7}" cy="${y - 7}" r="3.5" fill="#fff"/><circle cx="${x + 16}" cy="${y - 15}" r="5" fill="#fff"/>`,
  };
  const tube = (d, color, w) => `<path d="${d}" fill="none" stroke="${K}" stroke-width="${w + 5}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;

  // ---------- Prof. Uhu ----------
  function uhu(mood = 'idle') {
    const BR = '#a8743f', DK = '#7a4f2a', CREAM = '#f3d9a8';
    const eye = cx => {
      const cy = 52;
      let s = `<circle cx="${cx}" cy="${cy}" r="14" fill="#fff"/>`;
      if (mood === 'happy') s += `<path d="M${cx - 8} ${cy + 3} Q${cx} ${cy - 8} ${cx + 8} ${cy + 3}" fill="none" ${L(4.5)}/>`;
      else {
        const [px, py, pr] = { shock: [cx, cy, 2.6], smug: [cx + 3, cy + 3, 5], sad: [cx, cy + 5, 5], think: [cx - 4, cy - 5, 5] }[mood] || [cx, cy + 1, 6.5];
        s += `<circle cx="${px}" cy="${py}" r="${pr}" fill="${K}" class="pupil"/><circle cx="${px + 2}" cy="${py - 2.5}" r="1.8" fill="#fff"/>`;
        if (mood === 'smug') s += `<path d="M${cx - 14} ${cy + 1} H${cx + 14} V${cy - 15} H${cx - 14} Z" fill="${BR}"/><path d="M${cx - 13} ${cy + 1} H${cx + 13}" ${L(3)}/>`;
        if (mood === 'sad') { const o = cx < 60 ? -1 : 1; s += `<path d="M${cx + 14 * o} ${cy + 2} L${cx - 14 * o} ${cy - 6} V${cy - 15} H${cx + 14 * o} Z" fill="${BR}"/><path d="M${cx + 13 * o} ${cy + 2} L${cx - 13 * o} ${cy - 6}" ${L(3)}/>`; }
        s += `<rect x="${cx - 14}" y="${cy - 14}" width="28" height="28" class="lid" fill="${BR}" transform="scale(1 0)"/>`;
      }
      // Brille (Rand über dem Lid)
      return s + `<circle cx="${cx}" cy="${cy}" r="15" fill="none" stroke="#2b2b3a" stroke-width="3.5"/>`;
    };
    const brows = {
      idle: 'M30 32 Q40 28 52 32 M90 32 Q80 28 68 32',
      happy: 'M30 29 Q40 23 52 29 M90 29 Q80 23 68 29',
      shock: 'M30 25 Q40 18 52 25 M90 25 Q80 18 68 25',
      smug: 'M30 35 L52 35 M90 27 Q80 18 68 26',
      sad: 'M30 36 L50 28 M90 36 L70 28',
      think: 'M30 29 Q40 22 52 30 M90 34 L68 34',
    }[mood];
    const open = mood === 'happy' || mood === 'shock';
    const beak = open
      ? `<path d="M54 68 L66 68 L60 ${mood === 'shock' ? 86 : 80} Z" fill="#7a1f3d"/><path d="M52 64 L68 64 L60 71 Z" fill="#ffb02e" ${L(2.5)}/><path d="M54 74 L66 74 L60 ${mood === 'shock' ? 88 : 82} Z" fill="#f08c00" ${L(2.5, 'beak-low')}/>`
      : `<path d="M52 64 L68 64 L60 76 Z" fill="#ffb02e" ${L(2.5)}/><path d="M54 71 L66 71 L60 79 Z" fill="#f08c00" ${L(2.5, 'beak-low')}/>`;
    const wing = m => ({
      idle: 'M22 88 Q4 110 22 130 Q28 110 30 94 Z',
      happy: 'M22 92 Q0 76 6 50 Q20 64 30 86 Z',
      shock: 'M22 90 Q0 92 -2 74 Q16 72 30 86 Z',
      sad: 'M24 94 Q12 116 24 138 Q30 118 32 100 Z',
      chin: 'M22 92 Q16 72 48 84 Q38 92 32 102 Z',
      point: 'M22 88 Q8 68 14 40 Q18 38 22 42 Q24 64 32 86 Z',
    }[m]);
    const wl = wing(mood === 'think' || mood === 'smug' ? 'idle' : mood);
    const wr = wing(mood === 'think' ? 'chin' : mood === 'smug' ? 'point' : mood);
    const cap = { shock: 'translate(0 -10) rotate(-14 60 18)', sad: 'translate(2 3) rotate(10 60 18)', happy: 'rotate(-6 60 18)' }[mood] || 'rotate(-4 60 18)';
    const extra = {
      happy: fx.star(106, 34) + fx.star(12, 30, 0.7),
      shock: fx.drop(98, 40) + `<path d="M8 40 l-6 -4 M112 56 h6 M8 56 h-6" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`,
      sad: fx.drop(32, 68),
      think: fx.dots(94, 26),
      smug: fx.star(104, 30, 0.6),
    }[mood] || '';
    return `<svg viewBox="0 0 120 150" class="char uhu mood-${mood}" aria-hidden="true">
      <g class="c-body">
        <path d="M44 139 l-6 7 M50 140 v7 M70 140 v7 M76 139 l6 7" stroke="#ffb02e" stroke-width="4.5" stroke-linecap="round"/>
        <ellipse cx="60" cy="98" rx="40" ry="44" fill="${BR}" ${L(3.5)}/>
        <ellipse cx="60" cy="110" rx="26" ry="30" fill="${CREAM}" ${L(2.5)}/>
        <path d="M46 104 q7 7 14 0 q7 7 14 0 M46 118 q7 7 14 0 q7 7 14 0" fill="none" ${L(2)}/>
        <g class="wing-l"><path d="${wl}" fill="${DK}" ${L(3)}/></g>
        <path d="M22 40 L24 12 L42 28 Z M98 40 L96 12 L78 28 Z" fill="${DK}" ${L(3)}/>
        <ellipse cx="60" cy="54" rx="42" ry="34" fill="${BR}" ${L(3.5)}/>
        <path d="M60 30 Q50 40 40 40 Q30 52 40 70 Q50 74 60 66 Q70 74 80 70 Q90 52 80 40 Q70 40 60 30 Z" fill="#c99560"/>
        <g class="eyes">${eye(41)}${eye(79)}</g>
        <path d="M56 50 h8" stroke="#2b2b3a" stroke-width="3.5" stroke-linecap="round"/>
        <path d="${brows}" fill="none" ${L(4.5)}/>
        ${beak}
        <path d="M46 88 L60 94 L74 88 L74 100 L60 94 L46 100 Z" fill="#e63e6d" ${L(2.5)}/><circle cx="60" cy="94" r="3" fill="#ff7aa0" ${L(2)}/>
        <g transform="${cap}"><path d="M60 8 L88 17 L60 26 L32 17 Z" fill="#3b2f63" ${L(3)}/><path d="M60 17 L84 19 L84 30" fill="none" stroke="#ffc940" stroke-width="2.5" stroke-linecap="round"/><circle cx="84" cy="31" r="3" fill="#ffc940" ${L(1.5)}/></g>
        <g class="wing-r"><g transform="${MIRROR}"><path d="${wr}" fill="${DK}" ${L(3)}/></g></g>
        ${extra}
      </g></svg>`;
  }

  // ---------- Rocco ----------
  function rocco(mood = 'idle') {
    const GR = '#9a9ab4', MASK = '#2e2a40', ARM = '#4a4660';
    const eye = cx => {
      const cy = 54;
      if (mood === 'happy') return `<path d="M${cx - 7} ${cy + 3} Q${cx} ${cy - 6} ${cx + 7} ${cy + 3}" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/>`;
      const r = mood === 'shock' ? 10 : 8;
      const [px, py, pr] = { shock: [cx, cy, 2.2], smug: [cx + 3, cy + 2, 3.6], sad: [cx, cy + 3, 3.8], think: [cx + 3, cy - 3.5, 3.6] }[mood] || [cx + 1, cy + 1, 4.2];
      let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff"/><circle cx="${px}" cy="${py}" r="${pr}" fill="${K}" class="pupil"/><circle cx="${px + 1.5}" cy="${py - 1.5}" r="1.3" fill="#fff"/>`;
      if (mood === 'smug') s += `<path d="M${cx - 9} ${cy + 1} H${cx + 9} V${cy - 10} H${cx - 9} Z" fill="${MASK}"/><path d="M${cx - 8} ${cy + 1} H${cx + 8}" stroke="#fff" stroke-width="2" stroke-linecap="round"/>`;
      if (mood === 'sad') { const o = cx < 60 ? -1 : 1; s += `<path d="M${cx + 9 * o} ${cy} L${cx - 9 * o} ${cy - 5} V${cy - 10} H${cx + 9 * o} Z" fill="${MASK}"/>`; }
      return s + `<rect x="${cx - 10}" y="${cy - 10}" width="20" height="20" class="lid" fill="${MASK}" transform="scale(1 0)"/>`;
    };
    const brows = {
      idle: 'M34 40 Q42 37 50 40 M86 40 Q78 37 70 40',
      happy: 'M34 38 Q42 33 50 38 M86 38 Q78 33 70 38',
      shock: 'M34 34 Q42 28 50 34 M86 34 Q78 28 70 34',
      smug: 'M34 42 L51 44 M86 36 Q78 30 70 40',
      sad: 'M34 42 L50 37 M86 42 L70 37',
      think: 'M34 41 L51 41 M86 37 Q78 31 70 38',
    }[mood];
    const tooth = `<path d="M57 83 h6 v4 h-6 Z" fill="#fff" ${L(1.5)}/>`;
    const mouth = {
      idle: `<path d="M50 82 Q60 90 70 82" fill="none" ${L(3, 'mouth')}/>`,
      happy: `<path d="M47 80 Q60 98 73 80 Z" fill="#7a1f3d" ${L(3, 'mouth')}/><path d="M53 89 Q60 85 67 89 Q60 94 53 89 Z" fill="#ff8fab"/>`,
      shock: `<ellipse cx="60" cy="87" rx="6" ry="7.5" fill="#7a1f3d" ${L(2.5, 'mouth')}/>`,
      smug: `<path d="M48 84 Q62 90 73 78" fill="none" ${L(3, 'mouth')}/>${tooth}`,
      sad: `<path d="M50 89 Q60 81 70 89" fill="none" ${L(3, 'mouth')}/>`,
      think: `<path d="M51 86 Q55.5 82 60 86 T69 86" fill="none" ${L(3, 'mouth')}/>`,
    }[mood];
    const ears = mood === 'sad'
      ? `<path d="M26 42 L8 40 L22 24 Z M94 42 L112 40 L98 24 Z" fill="${GR}" ${L(3)}/><path d="M22 36 L14 38 L21 29 Z M98 36 L106 38 L99 29 Z" fill="${MASK}"/>`
      : `<path d="M24 38 L18 ${mood === 'shock' ? 4 : 12} L44 26 Z M96 38 L102 ${mood === 'shock' ? 4 : 12} L76 26 Z" fill="${GR}" ${L(3)}/><path d="M26 30 L23 ${mood === 'shock' ? 13 : 19} L35 26 Z M94 30 L97 ${mood === 'shock' ? 13 : 19} L85 26 Z" fill="${MASK}"/>`;
    const arm = m => {
      const [d, x, y] = {
        idle: ['M34 104 Q20 112 20 124', 20, 127],
        happy: ['M34 100 Q16 92 16 72', 16, 69],
        shock: ['M34 100 Q14 98 10 82', 10, 79],
        sad: ['M36 108 Q30 122 30 134', 30, 137],
        chin: ['M34 104 Q30 98 46 92', 49, 92],
        rub: ['M34 104 Q40 120 50 112', 52, 110],
      }[m];
      return tube(d, ARM, 8) + `<circle cx="${x}" cy="${y}" r="5.5" fill="${ARM}" ${L(2.5)}/>`;
    };
    const al = arm(mood === 'smug' ? 'rub' : mood === 'think' ? 'idle' : mood);
    const ar = arm(mood === 'think' ? 'chin' : mood === 'smug' ? 'rub' : mood);
    const extra = {
      happy: fx.star(106, 26) + fx.star(14, 30, 0.7),
      shock: fx.drop(100, 46) + fx.drop(20, 50),
      sad: fx.drop(40, 70),
      think: fx.dots(92, 22),
      smug: fx.star(104, 30, 0.7),
    }[mood] || '';
    return `<svg viewBox="0 0 120 150" class="char rocco mood-${mood}" aria-hidden="true">
      <g class="c-body">
        <g class="tail"><path d="M84 122 Q118 110 112 64 Q100 60 98 70 Q104 98 80 108 Z" fill="${GR}" ${L(3)}/>
          <path d="M100 74 Q107 72 111 76 M100 88 Q107 88 110 92 M94 101 Q100 103 103 107" fill="none" stroke="${MASK}" stroke-width="6" stroke-linecap="round"/>
          <path d="M98 68 Q105 60 112 64 L112 70 Q105 66 99 72 Z" fill="${MASK}"/></g>
        <ellipse cx="44" cy="143" rx="11" ry="4.5" fill="${MASK}" ${L(2.5)}/><ellipse cx="76" cy="143" rx="11" ry="4.5" fill="${MASK}" ${L(2.5)}/>
        <ellipse cx="60" cy="112" rx="31" ry="31" fill="${GR}" ${L(3.5)}/>
        <ellipse cx="60" cy="118" rx="18" ry="20" fill="#dcdcea"/>
        ${ears}
        <ellipse cx="60" cy="60" rx="42" ry="33" fill="${GR}" ${L(3.5)}/>
        <path d="M18 56 Q30 42 48 46 Q56 48 60 52 Q64 48 72 46 Q90 42 102 56 Q92 68 76 66 Q66 64 60 60 Q54 64 44 66 Q28 68 18 56 Z" fill="${MASK}"/>
        <path d="M60 30 Q57 38 60 46 Q63 38 60 30 Z" fill="${MASK}"/>
        <g class="eyes">${eye(43)}${eye(77)}</g>
        <path d="${brows}" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
        <ellipse cx="60" cy="80" rx="19" ry="13" fill="#f1f1f8" ${L(2.5)}/>
        <ellipse cx="60" cy="72" rx="6" ry="4.5" fill="${K}"/><ellipse cx="58" cy="70.5" rx="2" ry="1.2" fill="#fff" opacity=".7"/>
        ${mouth}
        <g class="arm-l">${al}</g><g class="arm-r"><g transform="${MIRROR}">${ar}</g></g>
        ${extra}
      </g></svg>`;
  }

  // ---------- Dialoge ----------
  const STAGE = {
    90: [[['b', 'smug', 'Hundert Kandidaten! Und ich wette, dass <b>keiner</b> die 1 %-Frage knackt.'], ['a', 'idle', 'Angenommen, Rocco. Ich setze auf dich – ja, genau dich da vorn.']],
      [['a', 'happy', 'Willkommen! Ich bin Professor Uhu. Die Wette steht: Wer verliert, putzt das ganze Studio.'], ['b', 'smug', 'Ich hab die Fallen gebaut. Und dir schon eine Zahnbürste gekauft, Uhu.']]],
    85: [[['b', 'idle', 'Aufwärmrunde. Die schafft sogar mein Onkel Kurt.'], ['a', 'think', 'Dein Onkel Kurt wohnt in einer Mülltonne, Rocco.'], ['b', 'smug', 'In einer sehr gepflegten Mülltonne!']],
      [['a', 'idle', 'Ein ganz freundlicher Einstieg. Nur keine Hektik.'], ['b', 'smug', 'Freundlich. So sehen meine Fallen von außen immer aus.']]],
    80: [[['a', 'idle', 'Zwei von zehn Menschen stolpern hier.'], ['b', 'happy', 'Weil sie zu schnell lesen! Hehehe.']],
      [['b', 'happy', 'Ich hab schon mal den Putzeimer für Uhu bereitgestellt.'], ['a', 'smug', 'Wie aufmerksam. Stell ihn ruhig neben deine Pfoten.']]],
    75: [[['a', 'happy', 'Der <b>erste Joker</b> ist frei! Er kostet 500 € und rettet dich über eine Frage.'], ['b', 'sad', 'Joker sind Schummeln mit Quittung.']],
      [['b', 'smug', 'Ab jetzt gibt es einen <b>Joker</b>. 500 €! Teurer Spaß.'], ['a', 'idle', 'Dafür trägt er dich über eine Frage. Gut angelegtes Geld, wenn es klemmt.']]],
    70: [[['b', 'smug', 'Diese hier hab ich nachts um drei gebaut.'], ['a', 'think', 'Das merkt man. Ruhig bleiben, lesen, denken.']],
      [['a', 'think', 'Interessant, wie viele noch im Rennen sind.'], ['b', 'idle', 'Noch. Ich hab hinten im Lager noch Fallen für drei Wochen.']]],
    65: [[['a', 'idle', 'Muster erkennen! Das Gehirn liebt Muster.'], ['b', 'smug', 'Und ich liebe Gehirne, die Muster sehen, wo keine sind.']],
      [['b', 'happy', 'Uhu, wie fühlt sich so ein Wischmopp eigentlich an?'], ['a', 'smug', 'Frag mich nach der 1 %-Frage. Dann zeigst du es mir.']]],
    60: [[['b', 'happy', 'Schau, die Reihen lichten sich!'], ['a', 'sad', 'Du musst nicht so schadenfroh sein.'], ['b', 'smug', 'Muss ich nicht. Will ich aber.']],
      [['a', 'idle', 'Gut die Hälfte ist noch dabei. Und du mittendrin.'], ['b', 'think', 'Hm. Mittendrin ist ein gefährlicher Ort. Ich hab da was gebaut.']]],
    55: [[['a', 'think', 'Ab hier ist die naheliegende Antwort oft ein Köder.'], ['b', 'shock', 'Verrat doch nicht meine Tricks!']],
      [['b', 'smug', 'Diese hier ist mein Meisterstück. Mit Schleife drum.'], ['a', 'think', 'Schleifen sind hübsch. Aber man sollte trotzdem reinschauen.']]],
    50: [[['a', 'happy', 'Halbzeit! Die Hälfte aller Menschen scheitert hier – und <b>Joker Nummer zwei</b> ist frei.'], ['b', 'smug', 'Fifty-fifty. Wie meine Wette. Nur dass ich gewinne.']],
      [['b', 'idle', 'Der <b>zweite Joker</b> ist ab jetzt zu haben. Wieder 500 €.'], ['a', 'happy', 'Rocco erklärt die Regeln! Er wird ja richtig fair.'], ['b', 'sad', 'Steht im Vertrag. Leider.']]],
    45: [[['b', 'idle', 'Willkommen auf der dunklen Seite der Statistik.'], ['a', 'idle', 'Bauchgefühl ist hier ein schlechter Berater.']],
      [['a', 'smug', 'Rocco, du schwitzt ja.'], ['b', 'shock', 'Das ist … Fell-Kondenswasser. Völlig normal.']]],
    40: [[['a', 'think', 'Vier von zehn schaffen das.'], ['b', 'smug', 'Und sechs von zehn schreiben mir Dankesbriefe.']],
      [['b', 'think', 'Ich rechne kurz: Wie lange putzt man so ein Studio?'], ['a', 'happy', 'Mit Zahnbürste? Etwa bis Ostern.']]],
    35: [[['b', 'happy', 'Diese Frage hat eine Falltür. Ich hab sie geölt.'], ['a', 'sad', 'Er hat sie wirklich geölt. Ich hab es gesehen.']],
      [['a', 'idle', 'Ganz ruhig. Wer genau liest, findet den Boden unter den Füßen.'], ['b', 'smug', 'Oder eben die Falltür. Hehe.']]],
    30: [[['a', 'idle', 'Die 30 %-Frage! Wer sie schafft, darf danach mit seinem Geld <b>aussteigen</b>.'], ['b', 'smug', 'Feiglinge gehen. Helden fallen. Hehe.']],
      [['b', 'happy', 'Nach dieser Frage darfst du mit dem Geld <b>aussteigen</b>. Ich halte dir die Tür auf!'], ['a', 'think', 'Wer aussteigt, rettet sein Geld. Aber Roccos Wette wackelt erst, wenn du bleibst.']]],
    25: [[['b', 'think', 'Hm. Du bist ja immer noch da.'], ['a', 'happy', 'Das ist das beste Viertel des Landes, Rocco!']],
      [['a', 'smug', 'Rocco, ich hab dir einen Wischmopp gekauft. In deiner Lieblingsfarbe.'], ['b', 'shock', 'Das ist noch nicht entschieden! Gar nichts ist entschieden!']]],
    20: [[['a', 'idle', 'Nur jeder Fünfte. Wer es sieht, lacht.'], ['b', 'smug', 'Und wer es nicht sieht, über den lache ich.']],
      [['b', 'sad', 'Meine Fallen gehen mir langsam aus.'], ['a', 'happy', 'Und dein Grinsen auch, wie ich sehe.']]],
    15: [[['b', 'smug', 'Für die hier musst du um die Ecke denken. Um <i>meine</i> Ecke.'], ['a', 'think', 'Perspektivwechsel! Dreh die Frage im Kopf um.']],
      [['a', 'happy', 'Nur noch eine Handvoll übrig. Und du bist dabei!'], ['b', 'shock', 'Wer hat die Kandidaten heute so schlau gemacht?! Ich will einen Schuldigen!']]],
    10: [[['a', 'shock', 'Einer von zehn! Mir werden die Federn feucht.'], ['b', 'shock', 'Moment … das läuft nicht nach Plan.']],
      [['b', 'sad', 'Uhu … können wir die Wette auf „halbes Studio“ ändern?'], ['a', 'smug', 'Keine Chance. Wette ist Wette.']]],
    5: [[['b', 'sad', 'Okay, okay. Wenn du die schaffst, stehst du im <b>Finale</b>.'], ['a', 'happy', 'Und dann geht es um die Wette, Rocco!']],
      [['a', 'idle', 'Die Tür zum <b>Finale</b>. Eine noch, dann wird es ernst.'], ['b', 'think', 'Ich hab den Putzeimer heimlich wieder zu Uhu geschoben. Nur so.']]],
    1: [[['b', 'smug', 'Die <b>1 %-Frage</b>. Neunundneunzig von hundert scheitern. Meine Wette ist so gut wie gewonnen.'], ['a', 'think', 'Lies jedes Wort. Auch die harmlosen. <i>Besonders</i> die harmlosen.']],
      [['a', 'idle', 'Die <b>1 %-Frage</b>. Hier entscheidet sich die Wette.'], ['b', 'shock', 'Ich kann nicht hinsehen! … Na gut, ein bisschen.']]],
  };

  const REACT = {
    correct: [[['a', 'happy', 'Richtig! Wunderbar!'], ['b', 'shock', 'Was?! Wer hat dir das verraten?']],
      [['b', 'sad', 'Mist. Die Falle war so schön.'], ['a', 'happy', 'Sauber gelöst!']],
      [['a', 'happy', 'Bravo!'], ['b', 'think', 'Ich notiere: gefährlich klug.']]],
    wrong: [[['b', 'happy', 'HEHEHE! Reingefallen!'], ['a', 'sad', 'Kopf hoch. Ich zeig dir den Trick.']],
      [['b', 'happy', 'Klapp! Die Falltür ist zu.'], ['a', 'think', 'Schauen wir uns an, wie es geht.']]],
    timeout: [[['b', 'smug', 'Tick, tack … zu spät!'], ['a', 'sad', 'Nächstes Mal früher einloggen.']],
      [['a', 'sad', 'Die Zeit ist abgelaufen. Ärgerlich!'], ['b', 'happy', 'Die Uhr ist meine beste Falle. Und ich musste sie nicht mal bauen.']]],
    joker: [[['b', 'sad', 'Ein Joker! Feigling. Aber ein reicher Feigling.'], ['a', 'happy', 'Klug gespielt. Weiter geht es.']],
      [['a', 'idle', 'Joker eingesetzt. Kluge Leute wissen, wann sie Hilfe brauchen.'], ['b', 'smug', 'Kluge Leute bauen Fallen, die Joker kosten. Hehe.']]],
    ghost: [[['a', 'idle', 'Außer Konkurrenz, aber mit Stil.'], ['b', 'smug', 'Für die Ehre. Die bezahlt nur leider keiner.']],
      [['b', 'happy', 'Du spielst jetzt nur noch zum Spaß? Dann darfst du meine Fallen bewundern.'], ['a', 'happy', 'Und lernen, wie man sie umgeht. Das ist der eigentliche Spaß.']]],
    out: [[['b', 'happy', 'Tschüss! Winke, winke!'], ['a', 'sad', 'Du kannst außer Konkurrenz weiterspielen – wie die Promis am Rand.']],
      [['a', 'sad', 'Leider ausgeschieden. Aber bleib dabei, außer Konkurrenz!'], ['b', 'smug', 'Ein Kandidat weniger. Meine Wette wird immer sicherer.']]],
    cashout: [[['b', 'smug', 'Da ist die Tür. Nimm das Geld und lauf!'], ['a', 'think', 'Oder bleib, und wir holen uns den Jackpot. Deine Entscheidung.']],
      [['a', 'idle', 'Jetzt darfst du mit deinem Geld aussteigen.'], ['b', 'happy', 'Bitte, bitte steig aus! Ich will nicht putzen!']]],
    final: [[['a', 'happy', 'Du bist im Finale!'], ['b', 'shock', 'Jetzt wird es ernst. Für meine Wette.']],
      [['b', 'think', 'Nimm doch einfach deinen Anteil der 10.000 €. Ganz entspannt. Ohne Risiko.'], ['a', 'smug', 'Oder spiel die 1 %-Frage um den Jackpot – und um Roccos Putzplan.']]],
    win: [[['b', 'shock', 'NEIN! Meine Wette!'], ['a', 'happy', 'JA! Ein Prozent! Rocco, du putzt jetzt das ganze Studio.']],
      [['a', 'happy', 'Geknackt! Ich wusste es, ich wusste es!'], ['b', 'sad', 'Wo ist die Zahnbürste …'], ['a', 'smug', 'Unter deinen Fallen. Fang da an.']]],
    lose: [[['b', 'happy', 'Gewonnen! Die Wette gehört mir!'], ['a', 'sad', 'So knapp. Nächstes Mal, versprochen.']],
      [['a', 'sad', 'Fast! Die letzte Falle war wirklich gemein.'], ['b', 'happy', 'Danke! Hier, Uhu: deine Zahnbürste. Fang beim Teppich an.']]],
    safe: [[['a', 'idle', 'Sicher ist sicher.'], ['b', 'smug', 'Und meine Wette gilt als gewonnen. Hehe.']],
      [['b', 'happy', 'Kluge Wahl! Und ich muss nicht putzen.'], ['a', 'happy', 'Du gehst mit Geld nach Hause. Das ist auch ein Sieg. Nur eben für uns alle.']]],
    curtain: [[['b', 'smug', 'Alle anderen: Augen zu! Nur {name} schaut.']],
      [['a', 'idle', '{name}, du bist dran. Keine Hilfe aus dem Publikum!']]],
    training: [[['a', 'happy', 'Trainingsraum! Keine Uhr, kein Ausscheiden.'], ['b', 'smug', 'Ich übe hier neue Fallen. Pass auf dich auf.']],
      [['b', 'idle', 'Hier zählt nichts. Nicht mal meine Wette.'], ['a', 'think', 'Perfekt zum Lernen. Jede Falle, die du hier siehst, erwischt dich später nicht mehr.']]],
    party: [[['b', 'smug', 'Party! Mehrere Opfer auf einmal.'], ['a', 'happy', 'Mitspieler, Rocco. Mitspieler.']],
      [['a', 'happy', 'Party-Modus! Ich setze auf euch alle.'], ['b', 'smug', 'Und ich wette gegen euch alle. Fair ist fair.']]],
  };
  // Kurze Sprüche während der Frage (eine Zeile, nur Rocco = Störenfried)
  const TEASE = ['Na? Schon nervös?', 'Ich sehe Schweiß. Viel Schweiß.', 'Die erste Antwort ist immer falsch. Oder?', 'Ganz ruhig … tick … tack …',
    'Psst: Die Antwort ist … nein, sag ich nicht.', 'Deine Nachbarn haben schon eingeloggt.', 'Du denkst zu viel. Oder zu wenig?',
    'Ich hab die Zahnbürste für Uhu schon ausgepackt.', 'Diese Falle hat Schleife UND Falltür.'];

  Cast.register({
    id: 'wette', title: 'Die Wette', tagline: 'Prof. Uhu gegen Waschbär Rocco – wer gewinnt die Wette?',
    a: { name: 'Prof. Uhu', draw: uhu }, b: { name: 'Rocco', draw: rocco },
    stage: STAGE, react: REACT, tease: TEASE,
  });
})();

// ---- coup.js ----
// Moderatoren-Team „Der Coup“: Lady Elster (Meisterdiebin, kann nichts Glänzendem widerstehen) und
// Mats (kurzsichtiger Maulwurf, gräbt gern in die falsche Richtung). Unter dem Studio liegt der goldene
// Prozent-Pokal im Tresor – jede Frage ist ein Schloss, und du bist ihr Insider.
(function () {
  const K = '#1b1430';
  const L = (w = 3, cls = '') => `class="c-line${cls ? ' ' + cls : ''}" stroke="${K}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
  const MIRROR = 'matrix(-1 0 0 1 120 0)';
  const fx = {
    star: (x, y, s = 1) => `<path d="M${x} ${y - 7 * s} L${x + 2 * s} ${y - 2 * s} L${x + 7 * s} ${y} L${x + 2 * s} ${y + 2 * s} L${x} ${y + 7 * s} L${x - 2 * s} ${y + 2 * s} L${x - 7 * s} ${y} L${x - 2 * s} ${y - 2 * s} Z" fill="#ffc940" stroke="${K}" stroke-width="1"/>`,
    drop: (x, y) => `<path d="M${x} ${y - 7} Q${x + 6} ${y + 2} ${x} ${y + 6} Q${x - 6} ${y + 2} ${x} ${y - 7} Z" fill="#7fd6ff" stroke="${K}" stroke-width="1.5"/>`,
    dots: (x, y) => `<circle cx="${x}" cy="${y}" r="2.5" fill="#fff"/><circle cx="${x + 7}" cy="${y - 7}" r="3.5" fill="#fff"/><circle cx="${x + 16}" cy="${y - 15}" r="5" fill="#fff"/>`,
  };

  // ---------- Lady Elster ----------
  function elster(mood = 'idle') {
    const SL = '#5c5684', MASK = '#e63e6d', TEAL = '#2ec4b6';
    const eye = cx => {
      const cy = 48;
      if (mood === 'happy') return `<path d="M${cx - 7} 51 Q${cx} 40 ${cx + 7} 51" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/>`;
      const r = mood === 'shock' ? 10 : 8;
      const [px, py, pr] = { shock: [cx, cy, 2.4], smug: [cx + 3, cy + 3, 3.6], sad: [cx, cy + 3, 4], think: [cx + 3, cy - 3, 3.6] }[mood] || [cx + 1, cy + 1, 4];
      let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fff" ${L(2.5)}/><circle cx="${px}" cy="${py}" r="${pr}" fill="${K}" class="pupil"/><circle cx="${px + 1.5}" cy="${py - 1.5}" r="1.3" fill="#fff"/>`;
      if (mood === 'smug') s += `<path d="M${cx - 9} ${cy + 1} L${cx + 9} ${cy + 1} L${cx + 9} ${cy - 10} L${cx - 9} ${cy - 10} Z" fill="${MASK}"/><path d="M${cx - 8} ${cy + 1} H${cx + 8}" ${L(2.5)}/>`;
      if (mood === 'sad') {
        const o = cx < 60 ? -1 : 1;
        s += `<path d="M${cx + 9 * o} ${cy} L${cx - 9 * o} ${cy - 6} L${cx - 9 * o} ${cy - 11} L${cx + 9 * o} ${cy - 11} Z" fill="${MASK}"/><path d="M${cx + 8 * o} ${cy} L${cx - 8 * o} ${cy - 6}" ${L(2.5)}/>`;
      }
      return s + `<rect x="${cx - 10}" y="${cy - 11}" width="20" height="22" class="lid" fill="${MASK}" transform="scale(1 0)"/>`;
    };
    const brows = {
      idle: 'M38 33 Q46 30 54 33 M66 33 Q74 30 82 33',
      happy: 'M38 30 Q46 25 54 30 M66 30 Q74 25 82 30',
      shock: 'M38 26 Q46 20 54 26 M66 26 Q74 20 82 26',
      smug: 'M38 35 L55 34 M66 30 Q74 21 83 27',
      sad: 'M38 35 L54 28 M82 35 L66 28',
      think: 'M38 34 L54 34 M66 30 Q74 23 82 28',
    }[mood];
    const open = mood === 'happy' || mood === 'shock';
    const beak = open
      ? `<path d="M54 62 L66 62 L60 ${mood === 'shock' ? 78 : 72} Z" fill="#7a1f3d"/><path d="M52 56 L68 56 L60 63 Z" fill="#ffc940" ${L(2.5)}/><path d="M54 67 L66 67 L60 ${mood === 'shock' ? 82 : 76} Z" fill="#f08c00" ${L(2.5, 'beak-low')}/>`
      : `<path d="M52 57 L68 57 L60 70 Z" fill="#ffc940" ${L(2.5)}/><path d="M54 64 L66 64 L60 73 Z" fill="#f08c00" ${L(2.5, 'beak-low')}/>`;
    // Flügel in linken Koordinaten, rechter Flügel wird gespiegelt
    const wing = m => ({
      idle: 'M34 88 Q12 104 20 130 Q32 122 38 104 Z',
      happy: 'M34 92 Q8 80 12 52 Q26 66 38 84 Z',
      shock: 'M34 90 Q8 92 2 76 Q20 74 38 84 Z',
      sad: 'M36 92 Q24 112 30 136 Q38 124 40 106 Z',
      chin: 'M34 92 Q22 80 46 70 Q44 82 40 100 Z',
      hip: 'M34 88 Q10 94 22 114 Q30 104 38 102 Z',
    }[m]);
    const wl = wing(mood === 'think' || mood === 'smug' ? 'idle' : mood);
    const wr = wing(mood === 'think' ? 'chin' : mood === 'smug' ? 'hip' : mood);
    const wingG = (cls, d, mir) => `<g class="${cls}"><g${mir ? ` transform="${MIRROR}"` : ''}><path d="${d}" fill="${TEAL}" ${L(3)}/></g></g>`;
    const beret = { shock: 'translate(0 -10) rotate(-24 66 24)', sad: 'translate(4 4) rotate(14 66 24)', happy: 'rotate(-18 66 24)' }[mood] || 'rotate(-12 66 24)';
    const pearls = [[44, 80], [49.5, 84], [54.5, 86.5], [60, 87.5], [65.5, 86.5], [70.5, 84], [76, 80]].map(([x, y]) => `<circle cx="${x}" cy="${y}" r="2.8" fill="#fff" stroke="${K}" stroke-width="1"/>`).join('');
    const extra = {
      happy: fx.star(100, 26) + fx.star(18, 34, 0.7),
      shock: fx.drop(94, 34) + `<path d="M14 40 l-8 -4 M14 52 h-9 M106 52 h9" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`,
      sad: fx.drop(39, 62),
      think: fx.dots(92, 26),
      smug: fx.star(76, 82, 0.6),
    }[mood] || '';
    return `<svg viewBox="0 0 120 150" class="char elster mood-${mood}" aria-hidden="true">
      <path d="M52 136 L50 145 M68 136 L70 145" stroke="#f0a500" stroke-width="4" stroke-linecap="round"/><path d="M43 146 h13 M64 146 h13" stroke="#f0a500" stroke-width="3.5" stroke-linecap="round"/>
      <g class="tail"><path d="M70 122 L102 88 Q110 74 118 80 Q122 90 108 96 L80 130 Z" fill="${TEAL}" ${L(3)}/><path d="M104 86 Q111 77 117 81 Q119 88 109 93 Z" fill="#1d8f86"/></g>
      <g class="c-body">
        <ellipse cx="60" cy="104" rx="30" ry="36" fill="${SL}" ${L(3.5)}/>
        <ellipse cx="60" cy="110" rx="19" ry="25" fill="#f4f4fb"/>
        ${wingG('wing-l', wl, false)}${wingG('wing-r', wr, true)}
        <circle cx="60" cy="52" r="30" fill="${SL}" ${L(3.5)}/>
        ${pearls}
        <path d="M90 46 L106 38 L104 50 Z M90 50 L104 56 L96 62 Z" fill="${MASK}" ${L(2.5)}/>
        <path d="M26 44 Q40 34 60 41 Q80 34 94 44 Q96 55 86 58 Q72 61 60 54 Q48 61 34 58 Q24 55 26 44 Z" fill="${MASK}" ${L(3)}/>
        <g class="eyes">${eye(46)}${eye(74)}</g>
        <path d="${brows}" fill="none" ${L(4)}/>
        ${beak}
        <g transform="${beret}"><ellipse cx="66" cy="24" rx="26" ry="9" fill="#8b5cf6" ${L(3)}/><path d="M66 15 l2 -7" ${L(3)}/></g>
        ${extra}
      </g></svg>`;
  }

  // ---------- Mats ----------
  function mats(mood = 'idle') {
    const FUR = '#9a7668', PINK = '#ff8fab', LENS = '#eef6ff';
    const eye = cx => {
      const cy = 64;
      let s = `<circle cx="${cx}" cy="${cy}" r="13" fill="${LENS}"/>`;
      if (mood === 'happy') s += `<path d="M${cx - 7} ${cy + 3} Q${cx} ${cy - 7} ${cx + 7} ${cy + 3}" fill="none" ${L(4)}/>`;
      else {
        const [px, py, pr] = { shock: [cx, cy, 2.4], smug: [cx + 4, cy + 3, 4.5], sad: [cx, cy + 5, 4.5], think: [cx - 4, cy - 5, 4.5] }[mood] || [cx, cy + 1, 5.5];
        s += `<circle cx="${px}" cy="${py}" r="${pr}" fill="${K}" class="pupil"/><circle cx="${px + 2}" cy="${py - 2}" r="1.6" fill="#fff"/>`;
        if (mood === 'smug') s += `<path d="M${cx - 13} ${cy} H${cx + 13} V${cy - 14} H${cx - 13} Z" fill="#c7b2a8"/><path d="M${cx - 12} ${cy} H${cx + 12}" ${L(3)}/>`;
        if (mood === 'sad') { const o = cx < 60 ? -1 : 1; s += `<path d="M${cx + 13 * o} ${cy + 1} L${cx - 13 * o} ${cy - 7} V${cy - 14} H${cx + 13 * o} Z" fill="#c7b2a8"/><path d="M${cx + 12 * o} ${cy + 1} L${cx - 12 * o} ${cy - 7}" ${L(3)}/>`; }
        s += `<rect x="${cx - 13}" y="${cy - 13}" width="26" height="26" class="lid" fill="#c7b2a8" transform="scale(1 0)"/>`;
      }
      return s + `<circle cx="${cx}" cy="${cy}" r="13" fill="none" ${L(4)}/><path d="M${cx - 6} ${cy - 8} q3 -3 7 -3" stroke="#fff" stroke-width="2" fill="none" opacity=".8"/>`;
    };
    const teeth = y => `<rect x="55" y="${y}" width="5" height="5" rx="1" fill="#fff" ${L(1.5)}/><rect x="60" y="${y}" width="5" height="5" rx="1" fill="#fff" ${L(1.5)}/>`;
    const mouth = {
      idle: `<path d="M50 91 Q60 97 70 91" fill="none" ${L(3, 'mouth')}/>${teeth(93)}`,
      happy: `<path d="M46 89 Q60 108 74 89 Z" fill="#7a1f3d" ${L(3, 'mouth')}/>${teeth(89)}`,
      shock: `<ellipse cx="60" cy="96" rx="6" ry="6.5" fill="#7a1f3d" ${L(2.5, 'mouth')}/>`,
      smug: `<path d="M48 93 Q62 97 73 87" fill="none" ${L(3, 'mouth')}/>${teeth(94)}`,
      sad: `<path d="M50 97 Q60 89 70 97" fill="none" ${L(3, 'mouth')}/>`,
      think: `<path d="M51 94 Q55.5 90 60 94 T69 94" fill="none" ${L(3, 'mouth')}/>`,
    }[mood];
    const arm = m => {
      const [d, x, y] = {
        idle: ['M34 104 Q20 110 18 122', 17, 126],
        happy: ['M34 100 Q18 92 16 74', 16, 70],
        shock: ['M34 100 Q14 96 10 82', 9, 78],
        sad: ['M36 108 Q28 122 28 134', 28, 137],
        head: ['M34 100 Q12 84 20 60', 20, 56],
        belly: ['M34 104 Q30 122 44 120', 46, 120],
      }[m];
      return `<path d="${d}" fill="none" stroke="${K}" stroke-width="14" stroke-linecap="round"/><path d="${d}" fill="none" stroke="${FUR}" stroke-width="8" stroke-linecap="round"/>
        <ellipse cx="${x}" cy="${y}" rx="10" ry="8" fill="${PINK}" ${L(2.5)}/><path d="M${x - 6} ${y + 5} l-2 5 M${x} ${y + 7} v5 M${x + 6} ${y + 5} l2 5" stroke="#f6efe4" stroke-width="2.5" stroke-linecap="round"/>`;
    };
    const al = arm(mood === 'think' || mood === 'smug' ? 'idle' : mood);
    const ar = arm(mood === 'think' ? 'head' : mood === 'smug' ? 'belly' : mood);
    const lampOn = mood === 'happy' || mood === 'think';
    const helmetT = { shock: 'translate(0 -12)', sad: 'rotate(10 60 40) translate(0 3)', smug: 'rotate(-8 60 40)' }[mood] || '';
    const helmet = `<g transform="${helmetT}">
        ${lampOn ? `<path d="M60 12 V2 M45 16 L38 8 M75 16 L82 8" stroke="#ffe14d" stroke-width="3.5" stroke-linecap="round"/>` : ''}
        <path d="M24 48 Q24 14 60 14 Q96 14 96 48 Z" fill="#ffc940" ${L(3)}/>
        <rect x="16" y="43" width="88" height="9" rx="4.5" fill="#f0a500" ${L(3)}/>
        <circle cx="60" cy="30" r="8" fill="${lampOn ? '#fffbe0' : mood === 'sad' ? '#6b6b80' : '#d8d4c0'}" ${L(2.5)}/>
      </g>`;
    const extra = {
      shock: fx.drop(100, 66) + fx.drop(20, 66) + `<path d="M34 8 l-6 -5 M86 8 l6 -5 M24 20 h-8 M96 20 h8" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`,
      sad: fx.drop(34, 82),
      happy: fx.star(104, 30) + fx.star(14, 40, 0.7),
      think: fx.dots(94, 30),
    }[mood] || '';
    return `<svg viewBox="0 0 120 150" class="char mats mood-${mood}" aria-hidden="true">
      <g class="c-body">
        <g class="tail"><path d="M88 128 Q104 132 106 122" fill="none" stroke="${K}" stroke-width="7" stroke-linecap="round"/><path d="M88 128 Q104 132 106 122" fill="none" stroke="${PINK}" stroke-width="3.5" stroke-linecap="round"/></g>
        <ellipse cx="44" cy="143" rx="12" ry="4.5" fill="${PINK}" ${L(2.5)}/><ellipse cx="76" cy="143" rx="12" ry="4.5" fill="${PINK}" ${L(2.5)}/>
        <ellipse cx="60" cy="112" rx="33" ry="31" fill="${FUR}" ${L(3.5)}/>
        <ellipse cx="60" cy="118" rx="19" ry="20" fill="#c3a294"/>
        <ellipse cx="60" cy="62" rx="38" ry="36" fill="${FUR}" ${L(3.5)}/>
        <path d="M32 62 L23 57 M88 62 L97 57" ${L(3)}/>
        <g class="eyes">${eye(45)}${eye(75)}</g>
        <path d="M57 63 h6" ${L(3.5)}/>
        <path d="M48 84 L34 81 M48 87 L35 91 M72 84 L86 81 M72 87 L85 91" ${L(1.6)}/>
        <ellipse cx="60" cy="84" rx="9.5" ry="6.5" fill="${PINK}" ${L(2.5)}/><ellipse cx="57" cy="82" rx="3" ry="1.8" fill="#fff" opacity=".7"/>
        ${mouth}
        ${helmet}
        <g class="arm-l">${al}</g><g class="arm-r"><g transform="${MIRROR}">${ar}</g></g>
        ${extra}
      </g></svg>`;
  }

  // ---------- Dialoge ----------
  const STAGE = {
    90: [[['a', 'smug', 'Psst. Unter diesem Studio liegt ein Tresor. Darin: der goldene Prozent-Pokal.'], ['b', 'happy', 'Und wir brauchen jemanden, der 19 Schlösser mit dem Kopf knackt. Dich!']],
      [['a', 'idle', 'Lady Elster, Meisterdiebin. Der Maulwurf da ist Mats, mein Tunnelbauer.'], ['b', 'happy', 'Hallo! Ich sehe dich nicht, aber du siehst bestimmt toll aus.'], ['a', 'smug', 'Der Pokal gehört dem, der die 1 %-Frage knackt. Also bald uns. Technisch völlig legal.']]],
    85: [[['b', 'think', 'Ich hab den Bauplan! … Moment, ich halte ihn verkehrt herum.'], ['a', 'sad', 'Mats. Das ist eine Pizzakarte.']],
      [['a', 'idle', 'Schloss Nummer zwei. Reine Fingerübung.'], ['b', 'happy', 'Ich hab Finger! Sehr große sogar. Zum Graben.']]],
    80: [[['b', 'happy', 'Ich grabe schon mal vor! Wohin, Chefin?'], ['a', 'smug', 'Nach unten, Mats. Es ist immer nach unten.']],
      [['a', 'think', 'Zwei von zehn stolpern hier. Wir stolpern nicht. Wir schleichen.'], ['b', 'shock', 'Ich bin gerade über meine eigene Schaufel gestolpert.']]],
    75: [[['a', 'smug', 'Der <b>erste Joker</b> ist frei: ein Dietrich vom Schwarzmarkt. 500 €, rettet dich über eine Frage.'], ['b', 'happy', 'Ich hab ihn getestet. Er öffnet Türen, Dosen und Herzen.']],
      [['b', 'idle', 'Chefin, da drüben verkauft einer <b>Joker</b>. 500 € das Stück.'], ['a', 'think', 'Ab jetzt ist einer zu haben. Er bringt dich über eine Frage. Teuer, aber diskret.']]],
    70: [[['a', 'shock', 'Laserflur! Rote Strahlen, überall.'], ['b', 'happy', 'Oh, schön! Ich sehe zum ersten Mal Farben!']],
      [['b', 'think', 'Wie kommen wir an den Lasern vorbei?'], ['a', 'smug', 'Elegant, Mats. Jede Frage zweimal lesen und dann durchtanzen.']]],
    65: [[['b', 'shock', 'Da liegt ein Wachhund! Er schläft …'], ['a', 'idle', 'Dann flüstern wir. Und du denkst leise.']],
      [['a', 'think', 'Der Wachhund heißt Bello. Er liebt Kekse und hasst Hektik.'], ['b', 'happy', 'Ich hab ihm mein Pausenbrot gegeben. Wir sind jetzt beste Freunde.']]],
    60: [[['b', 'happy', 'Durchbruch! Ich bin drin!'], ['a', 'sad', 'Du bist in der Kantine, Mats.'], ['b', 'happy', 'Ja! Und es gibt Kartoffelsalat!']],
      [['a', 'idle', 'Die Reihen lichten sich. Weniger Zeugen.'], ['b', 'think', 'Ich hab Kartoffelsalat aus der Kantine mitgebracht. Für die Zeugen.']]],
    55: [[['a', 'think', 'Lüftungsschacht. Ab hier ist die naheliegende Tür oft nur aufgemalt.'], ['b', 'shock', 'Wie mein Tunnel gestern. Der endete in einem Besenschrank.']],
      [['a', 'happy', 'Oh! Da glänzt was!'], ['b', 'sad', 'Chefin. Konzentration. Das ist ein Kronkorken.'], ['a', 'smug', 'Ein sehr hübscher Kronkorken.']]],
    50: [[['a', 'happy', 'Halbzeit im Tresorgang! <b>Joker Nummer zwei</b> ist frei – ein Ersatzdietrich für 500 €.'], ['b', 'happy', 'Ich halte ihn warm. In meiner Backentasche.']],
      [['b', 'idle', 'Die Hälfte aller Einbrecher gibt hier auf.'], ['a', 'smug', 'Wir nicht. Und falls es eng wird: Der <b>zweite Joker</b> ist ab jetzt im Angebot. 500 €.']]],
    45: [[['a', 'shock', 'Druckplatten im Boden! Ein falscher Schritt …'], ['b', 'idle', 'Ich bin zu leicht für die. Glaub ich. Hoff ich.']],
      [['b', 'think', 'Meine Helmlampe flackert. Ist das schlimm?'], ['a', 'idle', 'Nur wenn du wieder Richtung Decke gräbst.']]],
    40: [[['a', 'smug', 'Vier von zehn schaffen dieses Schloss. Wir sind eher Typ „einer von hundert“.'], ['b', 'happy', 'Ich bin eher Typ Maulwurf.']],
      [['b', 'shock', 'Chefin, ich höre Schritte!'], ['a', 'idle', 'Das ist dein Herz, Mats. Atme.']]],
    35: [[['b', 'smug', 'Ich hab ein Ablenkungsmanöver gebaut! Eine Torte mit Wecker drin.'], ['a', 'shock', 'Mats! Keine Torten mit Weckern!']],
      [['a', 'think', 'Diese Tür hat ein Rätselschloss. Nur wer genau liest, kommt durch.'], ['b', 'happy', 'Ich lese immer genau! Mit der Nase. Ganz nah am Papier.']]],
    30: [[['a', 'idle', 'Die 30 %-Frage! Wer sie knackt, darf danach mit seiner Beute <b>aussteigen</b>.'], ['b', 'happy', 'Der Fluchtwagen steht bereit! Es ist ein Skateboard.']],
      [['b', 'think', 'Hinter dieser Tür ist der Notausgang. Danach kann man mit dem Geld <b>aussteigen</b>.'], ['a', 'smug', 'Aber echte Profis gehen erst, wenn der Pokal glänzt.']]],
    25: [[['a', 'shock', 'Ich sehe die Tresortür. Mats … sie <i>funkelt</i>.'], ['b', 'sad', 'Bitte nicht wieder stehen bleiben und anstarren.']],
      [['b', 'happy', 'Von der ganzen Bande ist nur noch ein Viertel übrig!'], ['a', 'happy', 'Das beste Viertel. Das mit den ruhigen Händen.']]],
    20: [[['a', 'think', 'Der Tresor hat drei Schlösser. Das hier ist das erste.'], ['b', 'happy', 'Ich hab vier Pfoten. Statistisch gewinnen wir.']],
      [['b', 'shock', 'Bello ist aufgewacht!'], ['a', 'idle', 'Er wedelt nur. Er will zuschauen. Lass dich nicht ablenken.']]],
    15: [[['b', 'sad', 'Meine Brille ist beschlagen. Ich sehe nur Nebel.'], ['a', 'think', 'Dann denk um die Ecke, Mats. Manchmal ist die Tür in der Seitenwand.']],
      [['a', 'smug', 'Das zweite Tresorschloss. Hier hilft nur ein Perspektivwechsel.'], ['b', 'think', 'Ich hab mich umgedreht. Jetzt sehe ich die Wand.']]],
    10: [[['b', 'shock', 'Einer von zehn schafft das! Ich hab Gänsehaut unterm Fell!'], ['a', 'shock', 'Und mir zittern die Federn. So nah war ich noch nie.']],
      [['a', 'sad', 'Zwanzig Jahre im Geschäft, und so nah war ich dem Pokal noch nie.'], ['b', 'happy', 'Ich bin seit Dienstag dabei. Ist das immer so aufregend?']]],
    5: [[['a', 'idle', 'Das letzte Schloss vor dem Tresorraum. Schaffst du das, stehst du im <b>Finale</b>.'], ['b', 'shock', 'Ich halte die Taschenlampe. Und die Luft an.']],
      [['b', 'happy', 'Mein Tunnel reicht jetzt bis direkt vor die Tresortür!'], ['a', 'smug', 'Wer diese knackt, steht im <b>Finale</b> – direkt vor dem Pokal.']]],
    1: [[['a', 'think', 'Die <b>1 %-Frage</b>. Die Kombination, an der 99 von 100 scheitern.'], ['b', 'shock', 'Wenn man falsch tippt, singt der Tresor. Hab ich gehört.'], ['a', 'idle', 'Lies jedes Wort. Ein Profi rät nicht.']],
      [['b', 'sad', 'Chefin, ich hab Angst. Die <b>1 %-Frage</b>!'], ['a', 'smug', 'Angst ist was für Amateure. Lies langsam, denk schnell.']]],
  };

  const REACT = {
    correct: [[['a', 'happy', 'Klick! Schloss offen. Sauber.'], ['b', 'happy', 'Ich hab nichts gemacht und bin trotzdem stolz!']],
      [['b', 'shock', 'Wie hast du das so schnell geknackt?'], ['a', 'smug', 'Talent, Mats. Und Handschuhe.']],
      [['a', 'happy', 'Lautlos und elegant. So mag ich das.'], ['b', 'happy', 'Ich klatsche mal leise. Mit den Schaufeln.']]],
    wrong: [[['b', 'shock', 'Uh-oh. Das war die Alarmanlage.'], ['a', 'sad', 'Keine Panik. Ich zeig dir, wo der Draht verlief.']],
      [['a', 'sad', 'Falsches Schloss. Das passiert den Besten.'], ['b', 'sad', 'Mir passiert das jeden Tag. Komm, wir schauen uns den Trick an.']]],
    timeout: [[['b', 'shock', 'Die Wache kommt! Zu langsam!'], ['a', 'sad', 'Beim nächsten Schloss schneller sein, Liebes.']],
      [['a', 'sad', 'Das Zeitfenster ist zu. Ein Coup braucht Timing.'], ['b', 'think', 'Ich hätte noch Kekse für Bello gehabt …']]],
    joker: [[['b', 'happy', 'Der Dietrich glüht! Wir sind durch!'], ['a', 'smug', '500 € gut investiert. Leise und edel.']],
      [['a', 'idle', 'Joker benutzt. Kein feines Handwerk, aber wirkungsvoll.'], ['b', 'happy', 'Ich hab ihn danach poliert. Er glänzt jetzt.'], ['a', 'happy', 'Oh! Glänzt!']]],
    ghost: [[['a', 'idle', 'Du stehst jetzt Schmiere. Außer Konkurrenz, aber unverzichtbar.'], ['b', 'happy', 'Schmiere stehen ist mein Lieblingsjob! Man darf dabei snacken.']],
      [['b', 'think', 'Spielst du jetzt nur noch zum Spaß?'], ['a', 'smug', 'Für die Ehre, Mats. Die passt in jede Tasche.']]],
    out: [[['b', 'sad', 'Erwischt! Der Wachhund hat dich am Ärmel.'], ['a', 'idle', 'Keine Sorge: Du kannst außer Konkurrenz weiterspielen – als unsere Schmiere.']],
      [['a', 'sad', 'Die Alarmanlage hat dich erwischt. Aber eine Elster lässt niemanden zurück.'], ['b', 'happy', 'Spiel einfach außer Konkurrenz weiter! Nur ohne Beute.']]],
    cashout: [[['b', 'happy', 'Der Fluchtwagen ist da! Willst du mit deiner Beute verschwinden?'], ['a', 'think', 'Oder du bleibst, und wir holen uns den Pokal. Deine Entscheidung.']],
      [['a', 'idle', 'Notausgang offen. Wer jetzt geht, geht mit vollen Taschen.'], ['b', 'think', 'Wer bleibt, geht vielleicht mit Pokal. Oder mit Hund am Ärmel.']]],
    final: [[['a', 'shock', 'Wir stehen vor der Tresortür. Mir zittern die Federn.'], ['b', 'think', 'Nimm deinen Anteil der 10.000 € – oder knack die letzte Kombination für den Jackpot!']],
      [['b', 'shock', 'Finale! Nur noch die letzte Kombination!'], ['a', 'smug', 'Sicherer Anteil oder alles riskieren? Ein Profi entscheidet mit kühlem Kopf.']]],
    win: [[['b', 'shock', 'Der Tresor … er ist OFFEN!'], ['a', 'happy', 'Der goldene Pokal! Er gehört dir. Wir wollten nur wissen, ob es geht.'], ['b', 'happy', 'Ich lass ein Kärtchen da: „Die Elster-Bande war hier.“']],
      [['a', 'happy', 'EIN PROZENT! Der Coup des Jahrhunderts!'], ['b', 'happy', 'Und völlig legal – der Pokal gehört dem, der knackt. Also DIR!'], ['a', 'smug', 'Ich behalte nur das Glitzerpapier. Als Andenken.']]],
    lose: [[['b', 'shock', 'ALARM! Rückzug! Ich grabe!'], ['a', 'sad', 'So nah dran. Nächsten Dienstag, gleicher Tresor, gleiche Bande?']],
      [['a', 'sad', 'Die letzte Kombination war zu gut gesichert.'], ['b', 'happy', 'Kopf hoch! Mein Fluchttunnel führt direkt zum Kartoffelsalat.']]],
    safe: [[['a', 'idle', 'Du nimmst deinen Anteil und verschwindest leise. Sehr profihaft.'], ['b', 'happy', 'Ich fahr dich mit dem Skateboard raus! Festhalten!']],
      [['b', 'think', 'Der Pokal bleibt im Tresor … aber dein Geld ist sicher.'], ['a', 'smug', 'Die klügsten Diebe wissen, wann man geht. Bis zum nächsten Coup.']]],
    curtain: [[['a', 'smug', 'Alle anderen: Augen zu! Nur {name} sieht den Bauplan.']],
      [['b', 'happy', '{name}, du bist dran! Die anderen bitte wegschauen. Ich auch. Ich seh eh nix.']]],
    training: [[['b', 'happy', 'Übungstresor in der Garage! Keine Wachen, keine Uhr.'], ['a', 'idle', 'Hier darf man scheitern. Da unten nicht.']],
      [['a', 'think', 'Trainingsrunde. Ein Profi übt, bevor er einsteigt.'], ['b', 'happy', 'Ich übe Graben. Ich bin schon unterm Sofa.']]],
    party: [[['a', 'smug', 'Party-Modus! Eine ganze Bande. Das gefällt mir.'], ['b', 'happy', 'Ich hab Masken für alle gebastelt! Aus Pizzakarton.']],
      [['b', 'happy', 'So viele Komplizen!'], ['a', 'idle', 'Jeder knackt sein eigenes Schloss. Ehrensache unter Ganoven.']]],
  };

  const TEASE = ['Psst … nicht so laut denken.', 'Ich höre den Wachhund schnarchen.', 'Mats gräbt gerade unter deinem Stuhl.',
    'Ein Profi liest das Kleingedruckte.', 'Oh, da glänzt was! … Nein. Konzentration.', 'Die Uhr tickt. Der Tresor auch.',
    'Keine Fingerabdrücke auf der falschen Antwort!', 'Mats hat seine Brille verlegt. Schon wieder.', 'Atmen. Auch Meisterdiebe atmen.'];

  Cast.register({
    id: 'coup', title: 'Der Coup', tagline: 'Lady Elster und Maulwurf Mats knacken den Prozent-Tresor – mit dir als Insider.',
    a: { name: 'Lady Elster', draw: elster }, b: { name: 'Mats', draw: mats },
    stage: STAGE, react: REACT, tease: TEASE,
  });
})();

// ---- geister.js ----
// Moderatoren-Team „Geisterstunde“: Gisela (Gespenst im Flapper-Stirnband, scheiterte 1926 an der
// 1 %-Frage und spukt seitdem im Studio) und Graf Kunibert (grummeliger Vampir-Nachtportier, Vegetarier,
// Tomatensaft). Nur wer die 1 %-Frage knackt, erlöst Gisela – und Kunibert taut Stufe für Stufe auf.
(function () {
  const K = '#1b1430';
  const L = (w = 3, cls = '') => `class="c-line${cls ? ' ' + cls : ''}" stroke="${K}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
  const MIRROR = 'matrix(-1 0 0 1 120 0)';
  const fx = {
    star: (x, y, s = 1) => `<path d="M${x} ${y - 7 * s} L${x + 2 * s} ${y - 2 * s} L${x + 7 * s} ${y} L${x + 2 * s} ${y + 2 * s} L${x} ${y + 7 * s} L${x - 2 * s} ${y + 2 * s} L${x - 7 * s} ${y} L${x - 2 * s} ${y - 2 * s} Z" fill="#ffc940" stroke="${K}" stroke-width="1"/>`,
    drop: (x, y) => `<path d="M${x} ${y - 7} Q${x + 6} ${y + 2} ${x} ${y + 6} Q${x - 6} ${y + 2} ${x} ${y - 7} Z" fill="#7fd6ff" stroke="${K}" stroke-width="1.5"/>`,
    dots: (x, y) => `<circle cx="${x}" cy="${y}" r="2.5" fill="#fff"/><circle cx="${x + 7}" cy="${y - 7}" r="3.5" fill="#fff"/><circle cx="${x + 16}" cy="${y - 15}" r="5" fill="#fff"/>`,
  };
  const tube = (d, color, w) => `<path d="${d}" fill="none" stroke="${K}" stroke-width="${w + 5}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;

  // ---------- Gisela ----------
  function gisela(mood = 'idle') {
    const W = mood === 'sad' ? '#dfe4ff' : '#f1f2ff', SH = '#c9cff5';
    const eye = cx => {
      const cy = 60;
      if (mood === 'happy') return `<path d="M${cx - 8} ${cy + 3} Q${cx} ${cy - 8} ${cx + 8} ${cy + 3}" fill="none" ${L(4.5)}/>`;
      let s;
      if (mood === 'shock') s = `<circle cx="${cx}" cy="${cy}" r="10" fill="#fff" ${L(3)}/><circle cx="${cx}" cy="${cy}" r="3" fill="${K}" class="pupil"/>`;
      else {
        const [dx, dy, ry] = { think: [3, -3, 9.5], sad: [0, 3, 8], smug: [3, 1, 9] }[mood] || [0, 0, 10];
        s = `<ellipse cx="${cx + dx}" cy="${cy + dy}" rx="7" ry="${ry}" fill="${K}" class="pupil"/><circle cx="${cx + dx + 2.5}" cy="${cy + dy - 4}" r="2.6" fill="#fff"/>`;
      }
      if (mood === 'smug') s += `<path d="M${cx - 9} ${cy + 1} H${cx + 10} V${cy - 12} H${cx - 9} Z" fill="${W}"/><path d="M${cx - 8} ${cy + 1} H${cx + 9} M${cx + 9} ${cy + 1} l3 -3" fill="none" ${L(3)}/>`;
      if (mood === 'sad') { const o = cx < 60 ? -1 : 1; s += `<path d="M${cx + 9 * o} ${cy + 3} L${cx - 9 * o} ${cy - 3} V${cy - 12} H${cx + 9 * o} Z" fill="${W}"/><path d="M${cx + 8 * o} ${cy + 3} L${cx - 8 * o} ${cy - 3}" fill="none" ${L(2.5)}/>`; }
      return s + `<rect x="${cx - 11}" y="${cy - 12}" width="22" height="24" class="lid" fill="${W}" transform="scale(1 0)"/>`;
    };
    const brows = {
      idle: '', happy: '', shock: 'M38 42 Q46 37 54 42 M66 42 Q74 37 82 42',
      smug: 'M66 44 Q74 40 82 44', sad: 'M38 49 L53 45 M82 49 L67 45', think: 'M68 42 Q76 38 83 43',
    }[mood];
    const mouth = {
      idle: `<path d="M54 80 Q60 86 66 80" fill="none" ${L(3, 'mouth')}/>`,
      happy: `<path d="M47 78 Q60 98 73 78 Z" fill="#7a1f3d" ${L(3, 'mouth')}/><path d="M53 89 Q60 85 67 89 Q60 94 53 89 Z" fill="#ff8fab"/>`,
      shock: `<ellipse cx="60" cy="86" rx="6.5" ry="9" fill="#7a1f3d" ${L(3, 'mouth')}/>`,
      smug: `<path d="M51 83 Q62 87 70 78" fill="none" ${L(3, 'mouth')}/>`,
      sad: `<path d="M52 87 Q60 79 68 87" fill="none" ${L(3, 'mouth')}/>`,
      think: `<ellipse cx="64" cy="84" rx="3.5" ry="3" fill="#7a1f3d" ${L(2.5, 'mouth')}/>`,
    }[mood];
    const arm = m => ({
      idle: 'M26 76 Q8 84 12 98 Q20 98 26 90 Z',
      happy: 'M26 72 Q6 60 10 44 Q20 50 28 64 Z',
      shock: 'M26 70 Q8 54 16 38 Q24 48 30 62 Z',
      sad: 'M26 84 Q14 98 18 112 Q24 104 26 98 Z',
      chin: 'M25 78 Q20 100 50 97 Q54 90 44 87 Q34 86 31 72 Z',
      hip: 'M26 76 Q12 84 20 96 Q24 90 28 88 Z',
    }[m]);
    const al = arm(mood === 'think' || mood === 'smug' ? 'idle' : mood);
    const ar = arm(mood === 'think' ? 'chin' : mood === 'smug' ? 'hip' : mood);
    const lift = mood === 'shock' ? -6 : mood === 'sad' ? 4 : 0;
    const extra = {
      happy: fx.star(104, 24) + fx.star(16, 30, 0.7) + fx.star(102, 98, 0.6),
      shock: `<path d="M8 66 q-4 6 0 12 M112 66 q4 6 0 12 M6 50 q-4 6 0 12 M114 50 q4 6 0 12" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`,
      sad: fx.drop(38, 76),
      think: fx.dots(92, 24),
      smug: fx.star(100, 30, 0.6),
    }[mood] || '';
    return `<svg viewBox="0 0 120 150" class="char gisela mood-${mood}" aria-hidden="true">
      <ellipse cx="60" cy="144" rx="${mood === 'shock' ? 20 : 26}" ry="4" fill="#8f9bff" opacity=".35"/>
      <g class="c-body"><g transform="translate(0 ${lift})">
        <g class="tail"><path d="M84 120 Q100 136 112 128 Q104 126 98 116 Z" fill="${W}" ${L(3)}/></g>
        <path d="M60 18 C88 18 98 42 98 70 L98 122 Q92 132 86 124 Q80 116 74 126 Q67 136 60 126 Q53 116 46 126 Q39 136 32 124 Q26 116 22 124 L22 70 C22 42 32 18 60 18 Z" fill="${W}" ${L(3.5)}/>
        <path d="M90 44 Q96 64 94 116 Q90 122 86 118 Q90 80 84 50 Z" fill="${SH}"/>
        <g class="arm-l"><path d="${al}" fill="${W}" ${L(3)}/></g><g class="arm-r"><g transform="${MIRROR}"><path d="${ar}" fill="${W}" ${L(3)}/></g></g>
        <path d="M27 40 Q60 26 93 40" fill="none" stroke="${K}" stroke-width="9" stroke-linecap="round"/><path d="M27 40 Q60 26 93 40" fill="none" stroke="#e63e6d" stroke-width="5" stroke-linecap="round"/>
        <path d="M80 34 Q84 14 98 6 Q94 20 86 34 Z" fill="#8b5cf6" ${L(2.5)}/><circle cx="82" cy="35" r="4.5" fill="#ffc940" ${L(2)}/>
        <g class="eyes">${eye(46)}${eye(74)}</g>
        ${brows ? `<path d="${brows}" fill="none" ${L(3.5)}/>` : ''}
        <ellipse cx="35" cy="74" rx="6" ry="3.5" fill="#ffb3c8"/><ellipse cx="85" cy="74" rx="6" ry="3.5" fill="#ffb3c8"/>
        ${mouth}
        ${extra}
      </g></g></svg>`;
  }

  // ---------- Graf Kunibert ----------
  function kunibert(mood = 'idle') {
    const SKIN = '#cfe6d2', SUIT = '#4b3478', CAPE = '#5d3f94', RED = '#d62839';
    const eye = cx => {
      const cy = 51;
      const bags = `<path d="M${cx - 6} ${cy + 8} Q${cx} ${cy + 11} ${cx + 6} ${cy + 8}" fill="none" stroke="#97b39c" stroke-width="2" stroke-linecap="round"/>`;
      if (mood === 'happy') return bags + `<path d="M${cx - 7} ${cy + 2} Q${cx} ${cy - 7} ${cx + 7} ${cy + 2}" fill="none" ${L(4)}/>`;
      const r = mood === 'shock' ? 8.5 : 6.5;
      const [px, py, pr] = { shock: [cx, cy, 2], smug: [cx + 2, cy + 1, 3], sad: [cx, cy + 2.5, 3], think: [cx - 3, cy - 2.5, 3] }[mood] || [cx, cy + 0.5, 3.2];
      let s = bags + `<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${r - 0.5}" fill="#fff" ${L(2.5)}/><circle cx="${px}" cy="${py}" r="${pr}" fill="${RED}" class="pupil"/><circle cx="${px}" cy="${py}" r="${pr / 2.2}" fill="${K}"/>`;
      if (mood === 'idle' || mood === 'smug') s += `<path d="M${cx - 7} ${cy - 1} H${cx + 7} V${cy - 8} H${cx - 7} Z" fill="${SKIN}"/><path d="M${cx - 7} ${cy - 1} H${cx + 7}" ${L(2.5)}/>`;
      if (mood === 'sad') { const o = cx < 60 ? -1 : 1; s += `<path d="M${cx + 7 * o} ${cy + 1} L${cx - 7 * o} ${cy - 4} V${cy - 8} H${cx + 7 * o} Z" fill="${SKIN}"/><path d="M${cx + 7 * o} ${cy + 1} L${cx - 7 * o} ${cy - 4}" ${L(2.5)}/>`; }
      return s + `<rect x="${cx - 9}" y="${cy - 9}" width="18" height="18" class="lid" fill="${SKIN}" transform="scale(1 0)"/>`;
    };
    const brows = {
      idle: 'M39 41 L55 45 M81 41 L65 45',
      happy: 'M39 38 Q47 34 55 38 M81 38 Q73 34 65 38',
      shock: 'M39 35 Q47 30 55 35 M81 35 Q73 30 65 35',
      smug: 'M39 44 L55 45 M81 36 Q73 33 65 40',
      sad: 'M39 44 L55 38 M81 44 L65 38',
      think: 'M39 38 Q47 34 55 40 M81 43 L65 43',
    }[mood];
    const fang = (x, y, h = 6) => `<path d="M${x} ${y} l2.5 ${h} l2.5 -${h} Z" fill="#fff" ${L(1.5)}/>`;
    const mouth = {
      idle: `<path d="M50 69 Q60 72 70 69" fill="none" ${L(3, 'mouth')}/>${fang(53, 70)}${fang(62, 70)}`,
      happy: `<path d="M46 66 Q60 84 74 66 Z" fill="#7a1f3d" ${L(3, 'mouth')}/>${fang(50, 67, 7)}${fang(65, 67, 7)}`,
      shock: `<ellipse cx="60" cy="73" rx="7" ry="9" fill="#7a1f3d" ${L(3, 'mouth')}/>${fang(54, 65.5)}${fang(61, 65.5)}`,
      smug: `<path d="M49 71 Q62 74 72 65" fill="none" ${L(3, 'mouth')}/>${fang(63, 70.5, 7)}`,
      sad: `<path d="M50 74 Q60 66 70 74" fill="none" ${L(3, 'mouth')}/>${fang(55, 69.5, 5)}${fang(60.5, 69.5, 5)}`,
      think: `<path d="M51 71 Q56 68 61 71 T71 70" fill="none" ${L(3, 'mouth')}/>${fang(57, 71.5, 5)}`,
    }[mood];
    const arm = m => {
      const [d, x, y] = {
        idle: ['M40 86 Q30 100 32 114', 32, 117],
        happy: ['M40 84 Q22 76 14 60', 13, 57],
        shock: ['M40 84 Q26 70 34 56', 34, 53],
        sad: ['M40 88 Q34 106 36 122', 36, 125],
        chin: ['M40 86 Q30 100 48 82', 52, 80],
        hip: ['M40 86 Q26 96 36 106', 38, 108],
      }[m];
      return tube(d, SUIT, 8) + `<circle cx="${x}" cy="${y}" r="5.5" fill="${SKIN}" ${L(2.5)}/>`;
    };
    const al = arm(mood === 'think' || mood === 'smug' ? 'idle' : mood);
    const ar = arm(mood === 'think' ? 'chin' : mood === 'smug' ? 'hip' : mood);
    const capeOpen = mood === 'happy' || mood === 'shock';
    const cape = capeOpen
      ? `<path d="M40 74 Q8 80 4 134 L30 126 L60 140 L90 126 L116 134 Q112 80 80 74 Z" fill="${CAPE}" ${L(3.5)}/><path d="M42 80 Q18 90 14 126 L32 120 L60 132 L88 120 L106 126 Q102 90 78 80 Z" fill="${RED}"/>`
      : `<path d="M38 74 Q18 90 18 140 L102 140 Q102 90 82 74 Z" fill="${CAPE}" ${L(3.5)}/><path d="M42 80 Q28 96 28 136 L92 136 Q92 96 78 80 Z" fill="${RED}"/>`;
    const extra = {
      happy: fx.star(104, 22) + fx.star(14, 26, 0.7),
      shock: fx.drop(92, 34) + `<path d="M22 22 l-6 -6 M98 22 l6 -6 M60 4 v-4" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`,
      sad: fx.drop(40, 62),
      think: fx.dots(90, 26),
      smug: fx.star(76, 96, 0.6),
    }[mood] || '';
    return `<svg viewBox="0 0 120 150" class="char kunibert mood-${mood}" aria-hidden="true">
      <g class="c-body">
        ${cape}
        <path d="M30 72 L16 30 L48 60 Z M90 72 L104 30 L72 60 Z" fill="${RED}" ${L(3)}/><path d="M30 72 L16 30 L24 64 Z M90 72 L104 30 L96 64 Z" fill="${CAPE}"/>
        <path d="M48 134 V145 M72 134 V145" stroke="${K}" stroke-width="9" stroke-linecap="round"/><path d="M48 134 V144 M72 134 V144" stroke="#2c2340" stroke-width="5" stroke-linecap="round"/>
        <path d="M40 145 h14 M66 145 h14" stroke="${K}" stroke-width="5" stroke-linecap="round"/>
        <path d="M40 76 L80 76 L84 136 L36 136 Z" fill="${SUIT}" ${L(3.5)}/>
        <path d="M50 76 L70 76 L60 104 Z" fill="#fff" ${L(2.5)}/>
        <path d="M52 80 L60 84 L68 80 L68 88 L60 84 L52 88 Z" fill="${RED}" ${L(2)}/>
        <circle cx="60" cy="112" r="5" fill="#ffc940" ${L(2)}/>
        <path d="M36 42 L20 32 L34 60 Z M84 42 L100 32 L86 60 Z" fill="${SKIN}" ${L(3)}/>
        <path d="M34 40 Q34 18 60 18 Q86 18 86 40 L84 60 Q76 82 60 84 Q44 82 36 60 Z" fill="${SKIN}" ${L(3.5)}/>
        <path d="M31 44 Q30 10 60 10 Q90 10 89 44 Q82 28 72 28 L60 42 L48 28 Q38 28 31 44 Z" fill="#3a2858" ${L(3)}/>
        <path d="M42 18 Q52 13 62 14" fill="none" stroke="#8a6cc0" stroke-width="3" stroke-linecap="round"/>
        <g class="eyes">${eye(47)}${eye(73)}</g>
        <path d="${brows}" fill="none" ${L(4.5)}/>
        <path d="M58 56 Q60 63 64 62" fill="none" ${L(2.5)}/>
        ${mood === 'happy' ? `<ellipse cx="40" cy="66" rx="5" ry="3" fill="#ff8fab" opacity=".8"/><ellipse cx="80" cy="66" rx="5" ry="3" fill="#ff8fab" opacity=".8"/>` : ''}
        ${mouth}
        <g class="arm-l">${al}</g><g class="arm-r"><g transform="${MIRROR}">${ar}</g></g>
        ${extra}
      </g></svg>`;
  }

  // ---------- Dialoge ----------
  const STAGE = {
    90: [[['a', 'happy', 'Huuuh! Ich bin Gisela. 1926 bin ich hier an der 1 %-Frage gescheitert. Seitdem spuke ich.'], ['b', 'idle', 'Graf Kunibert, Nachtportier. Ich will nur meine Ruhe. Und einen Tomatensaft.']],
      [['b', 'sad', 'Mitternacht. Ein Quiz. Schon wieder.'], ['a', 'happy', 'Kunibert! Vielleicht erlöst mich heute jemand! Vielleicht DU da vorn!']]],
    85: [[['a', 'happy', 'Ich hab extra meine Ketten poliert. Aus dem Baumarkt!'], ['b', 'sad', 'Sie rasseln, Gisela. Es ist Mitternacht.']],
      [['b', 'smug', 'Aufwärmrunde. Die schaffen sogar meine Fledermäuse.'], ['a', 'think', 'Deine Fledermäuse hängen kopfüber im Requisitenschrank und schnarchen.']]],
    80: [[['a', 'idle', 'Damals lief das Quiz noch im Radio. Man hörte mich nur scheitern.'], ['b', 'smug', 'Heute sieht man es in Farbe. Fortschritt.']],
      [['b', 'idle', 'Zwei von zehn stolpern hier.'], ['a', 'sad', 'Ich bin 1926 auch gestolpert. Über meinen Rock. Nicht über die Frage.']]],
    75: [[['a', 'happy', 'Der <b>erste Joker</b> ist frei! Er kostet 500 € und rettet dich über eine Frage.'], ['b', 'smug', 'Zu meiner Zeit bezahlte man mit Goldtalern. Und Knoblauchverzicht.']],
      [['b', 'idle', 'Ab jetzt gibt es einen <b>Joker</b>. 500 €, eine Frage gerettet.'], ['a', 'sad', 'Hätte es den 1926 gegeben … ich wäre längst im Ruhestand.']]],
    70: [[['a', 'shock', 'HUUUH!'], ['b', 'sad', 'Gisela. Du sollst die Kandidaten nicht erschrecken.'], ['a', 'happy', 'Ich übe nur! Für später, wenn ich frei bin.']],
      [['b', 'think', 'Diese Frage ist so finster wie mein Keller.'], ['a', 'smug', 'Dein Keller hat Lichterketten, Kunibert.']]],
    65: [[['a', 'think', 'Muster erkennen! Ich starre seit hundert Jahren auf das Muster der Tapete.'], ['b', 'idle', 'Das ist kein Muster. Das ist ein Fleck. Den hast du gemacht.']],
      [['b', 'idle', 'Ich trinke jetzt einen Tomatensaft. Ganz ruhig.'], ['a', 'smug', 'Er ist Vegetarier. Seit 1803. Er redet nicht gern drüber.']]],
    60: [[['a', 'happy', 'Die Reihen werden lichter!'], ['b', 'smug', 'Lichter? Ich bevorzuge dunkler.']],
      [['b', 'sad', 'Das halbe Publikum denkt schon ans Bett. Ich an meinen Sarg.'], ['a', 'smug', 'Du schläfst in einer Hängematte, Kunibert.']]],
    55: [[['a', 'think', 'Ab hier spukt es in den Fragen. Die erste Idee ist oft ein Trugbild.'], ['b', 'idle', 'Wie Gisela im Spiegel. Man sieht nichts und erschrickt trotzdem.']],
      [['b', 'think', 'Die Uhr schlägt eins. Geisterstunde vorbei?'], ['a', 'happy', 'Nicht für mich! Meine dauert, bis jemand die 1 %-Frage knackt.']]],
    50: [[['a', 'happy', 'Halbzeit! <b>Joker Nummer zwei</b> ist frei – er kostet 500 €.'], ['b', 'idle', 'Halbe Strecke. Ich bin halb wach. Passt.']],
      [['b', 'idle', 'Hier scheitert die Hälfte. Der <b>zweite Joker</b> ist ab jetzt zu haben, 500 €.'], ['a', 'happy', 'Kunibert hilft! Er mag dich!'], ['b', 'smug', 'Ich erkläre lediglich die Regeln.']]],
    45: [[['a', 'idle', 'Ich schwebe mal zur Tür und schaue, ob die Lösung reinkommt.'], ['b', 'smug', 'Die kommt nicht durch Türen. Die kommt durch Denken.']],
      [['b', 'think', 'Bauchgefühl ist hier ein schlechter Berater.'], ['a', 'think', 'Ich hab keinen Bauch. Nur Laken. Und das Laken sagt: Lies nochmal.']]],
    40: [[['a', 'happy', 'Vier von zehn schaffen das! Kunibert, siehst du?'], ['b', 'sad', 'Ich sehe gar nichts. Ich hab kein Spiegelbild und keine Brille.']],
      [['b', 'idle', 'Ich habe dem Kandidaten eine Decke gebracht. Gegen den Durchzug.'], ['a', 'happy', 'Kunibert! Du fieberst ja mit!'], ['b', 'smug', 'Durchzug ist ungesund. Mehr nicht.']]],
    35: [[['a', 'sad', 'Diese Frage hat eine Falltür. Ich bin 1926 durchgefallen. Wortwörtlich.'], ['b', 'idle', 'Langsam lesen. Langsam denken. Wie ein Vampir am Sonntag.']],
      [['b', 'shock', 'Es zieht! Gisela, schwebst du wieder durch die Lüftung?'], ['a', 'shock', 'Ich bin nervös! Wir kommen meiner Erlösung näher!']]],
    30: [[['a', 'idle', 'Die 30 %-Frage! Wer sie schafft, darf danach mit dem Geld <b>aussteigen</b>.'], ['b', 'smug', 'Durch die Hintertür. Die knarrt. Ich öle sie nie, das ist Atmosphäre.']],
      [['b', 'idle', 'Nach dieser Frage darf man mit seinem Geld <b>aussteigen</b>.'], ['a', 'sad', 'Aber bitte bleib! Du bist meine beste Chance seit hundert Jahren!']]],
    25: [[['a', 'happy', 'Nur noch ein Viertel! So weit kam 1926 niemand.'], ['b', 'smug', 'Weil damals alle vor dir weggelaufen sind.']],
      [['b', 'shock', 'Ich hab meinen Tomatensaft vergessen. So spannend ist das.'], ['a', 'happy', 'Kunibert fiebert mit! Das gab es seit 1890 nicht!']]],
    20: [[['b', 'sad', 'Gisela … wenn dich jemand erlöst, wer rasselt dann nachts mit den Ketten?'], ['a', 'happy', 'Kunibert! Wirst du etwa sentimental?'], ['b', 'smug', 'Unsinn. Staub im Auge.']],
      [['a', 'shock', 'Nur jeder Fünfte schafft das. Ich halte die Luft an.'], ['b', 'idle', 'Du atmest gar nicht, Gisela.'], ['a', 'smug', 'Dann halte ich eben die Ketten an.']]],
    15: [[['b', 'think', 'Für diese musst du um die Ecke denken. Wie eine Fledermaus im Dunkeln.'], ['a', 'think', 'Oder wie ein Gespenst durch die Wand. Einfach mal andersherum.']],
      [['a', 'shock', 'Ich werde ganz durchsichtig vor Aufregung!'], ['b', 'idle', 'Du bist IMMER durchsichtig. Lass den Kandidaten in Ruhe denken.']]],
    10: [[['a', 'shock', 'Einer von zehn! Mein Laken flattert!'], ['b', 'shock', 'Und mein Umhang. Ich gebe es zu: Ich drücke die Daumen.']],
      [['b', 'sad', 'Hundert Jahre sitze ich nachts mit dieser Nervensäge hier.'], ['a', 'think', 'Und?'], ['b', 'happy', 'Und ich will, dass sie es endlich schafft. So. Jetzt ist es raus.']]],
    5: [[['a', 'happy', 'Wer diese schafft, steht im <b>Finale</b>! Ganz nah an meiner Erlösung!'], ['b', 'idle', 'Ich mache schon mal das große Studiolicht an. Nur zur Sicherheit.']],
      [['b', 'idle', 'Das Tor zum <b>Finale</b>. Dahinter wartet so eine Frage wie die, an der Gisela scheiterte.'], ['a', 'shock', 'Ich bin so aufgeregt, ich spuke rückwärts!']]],
    1: [[['a', 'think', 'Die <b>1 %-Frage</b>. So eine hat mich 1926 erwischt.'], ['b', 'idle', 'Lies jedes Wort. Die harmlosen zuerst. Die sind am gefährlichsten.']],
      [['b', 'think', 'Die <b>1 %-Frage</b>. Neunundneunzig von hundert scheitern.'], ['a', 'happy', 'Und einer erlöst ein altes Gespenst. Kein Druck! … Viel Druck.']]],
  };

  const REACT = {
    correct: [[['a', 'happy', 'Richtig! Huuuh – vor Freude!'], ['b', 'smug', 'Hm. Nicht übel. Für einen Sterblichen.']],
      [['b', 'happy', 'Richtig! … Ich meine: akzeptabel.'], ['a', 'happy', 'Er hat gelächelt! Ich hab es genau gesehen!']],
      [['a', 'happy', 'Bravo! Meine Ketten klimpern Beifall!'], ['b', 'idle', 'Gut gemacht. Weiter, bevor die Sonne aufgeht.']]],
    wrong: [[['a', 'sad', 'Oh nein … ich weiß genau, wie sich das anfühlt.'], ['b', 'idle', 'Kopf hoch. Ich zeige dir, wo die Falle im Dunkeln lag.']],
      [['b', 'sad', 'Falsch. Selbst ich habe kurz gezittert.'], ['a', 'think', 'Schauen wir uns den Trick an. Dann spukt er dir nie wieder im Kopf herum.']]],
    timeout: [[['b', 'smug', 'Die Uhr hat zugeschlagen. Sie schlägt öfter als ich.'], ['a', 'sad', 'Nächstes Mal schneller, ja? Sonst warte ich noch hundert Jahre.']],
      [['a', 'shock', 'Zeit um! Hast du ein Gespenst gesehen?'], ['b', 'idle', 'Ja. Dich. Ständig.']]],
    joker: [[['a', 'happy', 'Ein Joker! Wie eine Geheimtür im Schloss!'], ['b', 'smug', '500 € für eine Abkürzung. Sehr aristokratisch.']],
      [['b', 'idle', 'Joker eingesetzt. Auch Vampire nehmen manchmal die Treppe statt zu fliegen.'], ['a', 'happy', 'Hauptsache, du bist noch dabei!']]],
    ghost: [[['a', 'happy', 'Willkommen im Club! Außer Konkurrenz spuken ist wunderbar.'], ['b', 'smug', 'Für die Ehre. Die verstaubt wenigstens nicht.']],
      [['b', 'idle', 'Du spielst jetzt außer Konkurrenz. Wie Gisela seit 1926.'], ['a', 'happy', 'Und ich hab trotzdem jede Nacht Spaß!']]],
    out: [[['a', 'sad', 'Ausgeschieden … Aber du kannst außer Konkurrenz weiterspielen. Wie ich!'], ['b', 'idle', 'Bleib ruhig sitzen. Ich koche dir einen Tee. Ohne Knoblauch.']],
      [['b', 'sad', 'Dich hat es erwischt. Mein Beileid. Sagt man das so?'], ['a', 'happy', 'Spiel einfach außer Konkurrenz weiter! Glaub mir, man gewöhnt sich dran.']]],
    cashout: [[['b', 'idle', 'Die knarrende Hintertür ist offen. Gehst du mit deinem Geld?'], ['a', 'sad', 'Oder du bleibst und erlöst mich vielleicht … Kein Druck! Deine Entscheidung.']],
      [['a', 'think', 'Sicheres Geld oder weiter in die Nacht?'], ['b', 'smug', 'Kluge Leute gehen vor Sonnenaufgang. Mutige bleiben bis zum Hahnenschrei.']]],
    final: [[['a', 'shock', 'Das Finale! Kunibert, halt mich fest!'], ['b', 'sad', 'Geht nicht. Meine Hand rutscht durch dich durch.'], ['a', 'think', 'Nimm deinen Anteil der 10.000 € – oder spiel die 1 %-Frage um den Jackpot. Und für mich.']],
      [['b', 'idle', 'Finale. Sicheres Geld – oder die Frage, die Gisela erlösen kann.'], ['a', 'happy', 'Egal wie du dich entscheidest: Du warst wunderbar!']]],
    win: [[['a', 'happy', 'Geknackt! Ich bin ERLÖST! Ich leuchte!'], ['b', 'sad', 'Dann … gehst du jetzt?'], ['a', 'happy', 'Erlöst heißt frei. Und frei entscheide ich: Ich bleibe. Mach Tee, Kunibert!']],
      [['b', 'shock', 'Geschafft! Hundert Jahre Spuk – vorbei!'], ['a', 'happy', 'Ich bin frei! Ich kann jetzt sogar durch geschlossene Türen … ach, konnte ich ja schon.'], ['b', 'happy', 'Ich weine nicht. Das ist Tomatensaft.']]],
    lose: [[['a', 'sad', 'Nicht erlöst … noch ein Jahr spuken.'], ['b', 'happy', 'Noch ein Jahr Kettengerassel. Wie … schrecklich.'], ['a', 'smug', 'Du freust dich ja, Kunibert!']],
      [['b', 'sad', 'So knapp. Die Frage war finsterer als mein Keller.'], ['a', 'idle', 'Macht nichts. Ich warte gern. Ich hab ja Zeit. Sehr viel Zeit.']]],
    safe: [[['a', 'idle', 'Du nimmst das Geld. Vernünftig. Dann spuke ich eben noch ein bisschen.'], ['b', 'smug', 'Halb erlöst ist sie trotzdem: Sie darf jetzt tagsüber in die Kantine.']],
      [['b', 'idle', 'Sicher ist sicher. Das sage ich auch immer zum Sonnenlicht.'], ['a', 'happy', 'Gut gemacht! Komm nächste Mitternacht wieder – und dann erlöst du mich.']]],
    curtain: [[['a', 'happy', 'Alle anderen: Augen zu! Nur {name} darf schauen. Ich spuke Wache.']],
      [['b', 'smug', '{name}, du bist dran. Der Rest dreht sich um. Ich merke es, auch ohne Spiegel.']]],
    training: [[['b', 'idle', 'Die Übungsgruft. Keine Uhr, kein Ausscheiden, kein Sonnenlicht.'], ['a', 'happy', 'Hier hab ich hundert Jahre lang geübt!']],
      [['a', 'happy', 'Übungsrunde! Hier darf man sich vertun.'], ['b', 'smug', 'Ich übe derweil grimmiges Schauen. Läuft gut.']]],
    party: [[['a', 'happy', 'Party! So viele Leute um Mitternacht!'], ['b', 'shock', 'Gäste?! Ich hab nur einen Sarg zum Sitzen.']],
      [['b', 'smug', 'Party-Modus. Ich hole die guten Kerzen.'], ['a', 'happy', 'Und ich rassle im Takt!']]],
  };

  const TEASE = ['Huuuh … nur die Ruhe.', 'Kunibert schlürft Tomatensaft. Laut.', 'Irgendwo knarrt eine Tür.',
    'Gisela schwebt gerade hinter dir. Keine Panik.', 'Die Uhr tickt. Die Ketten rasseln.', 'Ein Vampir zählt mit. Sehr langsam.',
    'Lies es nochmal – im Kerzenschein.', 'Gisela hält die Ketten an. Und den Atem.', 'Kein Spiegelbild, aber volle Konzentration.'];

  Cast.register({
    id: 'geister', title: 'Geisterstunde', tagline: 'Gespenst Gisela spukt seit 1926 im Studio – nur die 1 %-Frage kann sie erlösen.',
    a: { name: 'Gisela', draw: gisela }, b: { name: 'Graf Kunibert', draw: kunibert },
    stage: STAGE, react: REACT, tease: TEASE,
  });
})();

// ---- kontakt.js ----
// Moderatoren-Team „Erstkontakt“: Zirp (einäugiger Alien-Prüfer vom Planeten Quaxx, sitzt in einer
// Mini-Untertasse) und Blechbert (Roboter aus einem Toaster, Verteidiger der Erde). Schafft heute niemand die
// 1 %-Frage, wird die Erde zum galaktischen Minigolfplatz – Zirp entdeckt unterwegs Kekse und die Erde lieben.
(function () {
  const K = '#1b1430';
  const L = (w = 3, cls = '') => `class="c-line${cls ? ' ' + cls : ''}" stroke="${K}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;
  const MIRROR = 'matrix(-1 0 0 1 120 0)';
  const fx = {
    star: (x, y, s = 1) => `<path d="M${x} ${y - 7 * s} L${x + 2 * s} ${y - 2 * s} L${x + 7 * s} ${y} L${x + 2 * s} ${y + 2 * s} L${x} ${y + 7 * s} L${x - 2 * s} ${y + 2 * s} L${x - 7 * s} ${y} L${x - 2 * s} ${y - 2 * s} Z" fill="#ffc940" stroke="${K}" stroke-width="1"/>`,
    drop: (x, y) => `<path d="M${x} ${y - 7} Q${x + 6} ${y + 2} ${x} ${y + 6} Q${x - 6} ${y + 2} ${x} ${y - 7} Z" fill="#7fd6ff" stroke="${K}" stroke-width="1.5"/>`,
    dots: (x, y) => `<circle cx="${x}" cy="${y}" r="2.5" fill="#fff"/><circle cx="${x + 7}" cy="${y - 7}" r="3.5" fill="#fff"/><circle cx="${x + 16}" cy="${y - 15}" r="5" fill="#fff"/>`,
  };
  // Linie mit dunkler Kontur (zwei Striche übereinander)
  const tube = (d, color, w) => `<path d="${d}" fill="none" stroke="${K}" stroke-width="${w + 5}" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;

  // ---------- Zirp ----------
  function zirp(mood = 'idle') {
    const G = '#7cf05a', GD = '#55c93a';
    const ant = {
      idle: ['M50 30 Q44 18 38 10', 38, 10, 'M70 30 Q76 18 82 10', 82, 10],
      happy: ['M50 30 Q38 20 40 6', 40, 6, 'M70 30 Q82 20 80 6', 80, 6],
      shock: ['M52 30 L46 2', 46, 4, 'M68 30 L74 2', 74, 4],
      smug: ['M50 30 Q44 18 38 10', 38, 10, 'M70 30 Q84 26 92 30', 92, 30],
      sad: ['M50 30 Q36 24 26 36', 26, 36, 'M70 30 Q84 24 94 36', 94, 36],
      think: ['M50 30 Q44 18 38 10', 38, 10, 'M70 30 Q80 14 74 6 Q68 2 70 12', 70, 12],
    }[mood];
    const ball = { happy: '#ffe14d', shock: '#ff6b6b', sad: '#9aa3c7', think: '#5ce1e6' }[mood] || '#ff5fa2';
    const antennae = tube(ant[0], G, 4) + tube(ant[3], G, 4) +
      `<circle cx="${ant[1]}" cy="${ant[2]}" r="5.5" fill="${ball}" ${L(2.5)}/><circle cx="${ant[4]}" cy="${ant[5]}" r="5.5" fill="${ball}" ${L(2.5)}/>` +
      (mood === 'happy' || mood === 'shock' ? `<path d="M${ant[1] - 10} ${ant[2]} h-5 M${ant[4] + 10} ${ant[5]} h5 M${ant[1]} ${ant[2] + 10} v0" stroke="#ffe14d" stroke-width="2.5" stroke-linecap="round"/>` : '');
    // großes Auge
    let eye;
    if (mood === 'happy') eye = `<path d="M42 66 Q60 44 78 66" fill="none" ${L(5)}/>`;
    else {
      const [rx, ry, ix, iy, ir] = { shock: [24, 22, 60, 62, 6], smug: [21, 19, 65, 66, 9], sad: [20, 18, 60, 69, 9], think: [21, 19, 67, 55, 9] }[mood] || [21, 19, 60, 63, 10];
      eye = `<ellipse cx="60" cy="62" rx="${rx}" ry="${ry}" fill="#fff" ${L(3)}/><circle cx="${ix}" cy="${iy}" r="${ir}" fill="#8b5cf6"/><circle cx="${ix}" cy="${iy}" r="${ir / 2}" fill="${K}" class="pupil"/><circle cx="${ix + ir / 3}" cy="${iy - ir / 3}" r="${ir / 4}" fill="#fff"/>`;
      if (mood === 'smug') eye += `<path d="M38 62 Q60 54 82 62 L82 40 L38 40 Z" fill="${G}"/><path d="M39 61 Q60 54 81 61" fill="none" ${L(3)}/>`;
      if (mood === 'sad') eye += `<path d="M39 58 Q60 50 81 58 L81 42 L39 42 Z" fill="${G}"/><path d="M40 57 Q60 50 80 57" fill="none" ${L(3)}/>`;
      eye += `<rect x="37" y="41" width="46" height="42" class="lid" fill="${G}" transform="scale(1 0)"/>`;
    }
    const brow = {
      idle: 'M44 37 Q60 33 76 37', happy: 'M42 36 Q60 28 78 36', shock: 'M40 32 Q60 24 80 32',
      smug: 'M42 40 Q60 38 78 32', sad: 'M42 44 L60 36 L78 44', think: 'M42 38 Q51 32 60 38 Q69 44 78 34',
    }[mood];
    const mouth = {
      idle: `<path d="M48 93 Q60 101 72 93" fill="none" ${L(3, 'mouth')}/>`,
      happy: `<path d="M42 88 Q60 114 78 88 Z" fill="#2a1d4a" ${L(3, 'mouth')}/><path d="M52 101 Q60 96 68 101 Q60 107 52 101 Z" fill="#ff5fa2"/>`,
      shock: `<ellipse cx="60" cy="98" rx="8" ry="9" fill="#2a1d4a" ${L(3, 'mouth')}/>`,
      smug: `<path d="M46 95 Q62 101 75 89" fill="none" ${L(3, 'mouth')}/>`,
      sad: `<path d="M48 101 Q60 91 72 101" fill="none" ${L(3, 'mouth')}/>`,
      think: `<path d="M50 97 Q55 93 60 97 T70 97" fill="none" ${L(3, 'mouth')}/>`,
    }[mood];
    const arm = m => tube({
      idle: 'M36 100 Q22 104 16 112',
      happy: 'M36 94 Q16 86 16 62 Q16 56 22 58',
      shock: 'M36 94 Q12 92 8 70',
      sad: 'M36 102 Q26 110 22 116',
      chin: 'M36 100 Q40 114 54 106',
      hip: 'M36 100 Q20 96 22 108 Q24 114 32 110',
    }[m], G, 7);
    const al = arm(mood === 'think' || mood === 'smug' ? 'idle' : mood);
    const ar = arm(mood === 'think' ? 'chin' : mood === 'smug' ? 'hip' : mood);
    const lights = [[20, 130, '#ffe14d'], [38, 134, '#ff5fa2'], [60, 136, '#5ce1e6'], [82, 134, '#ff5fa2'], [100, 130, '#ffe14d']]
      .map(([x, y, c]) => `<circle cx="${x}" cy="${y}" r="3.6" fill="${mood === 'sad' ? '#6b7390' : c}" stroke="${K}" stroke-width="1.5"/>`).join('');
    const extra = {
      happy: fx.star(104, 44) + fx.star(14, 50, 0.7),
      shock: fx.drop(92, 46) + fx.drop(26, 50),
      sad: fx.drop(80, 82),
      think: fx.dots(88, 30),
      smug: fx.star(98, 60, 0.6),
    }[mood] || '';
    return `<svg viewBox="0 0 120 150" class="char zirp mood-${mood}" aria-hidden="true">
      <g class="c-body">
        ${antennae}
        <path d="M60 26 C88 26 96 52 92 78 C90 96 84 112 80 122 L40 122 C36 112 30 96 28 78 C24 52 32 26 60 26 Z" fill="${G}" ${L(3.5)}/>
        <circle cx="38" cy="44" r="3" fill="${GD}"/><circle cx="84" cy="50" r="4" fill="${GD}"/><circle cx="34" cy="84" r="2.5" fill="${GD}"/><circle cx="88" cy="88" r="3" fill="${GD}"/>
        ${mood === 'happy' ? `<ellipse cx="36" cy="76" rx="6" ry="3.5" fill="#ff8fab" opacity=".8"/><ellipse cx="84" cy="76" rx="6" ry="3.5" fill="#ff8fab" opacity=".8"/>` : ''}
        <g class="eyes">${eye}</g>
        <path d="${brow}" fill="none" ${L(4)}/>
        ${mouth}
        <ellipse cx="60" cy="141" rx="18" ry="5" fill="#7f8ea6" ${L(2.5)}/>
        <path d="M8 127 Q60 106 112 127 Q60 148 8 127 Z" fill="#c3d0e0" ${L(3.5)}/>
        <path d="M20 122 Q60 110 100 122" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>
        ${lights}
        <g class="arm-l">${al}</g><g class="arm-r"><g transform="${MIRROR}">${ar}</g></g>
        ${extra}
      </g></svg>`;
  }

  // ---------- Blechbert ----------
  function blechbert(mood = 'idle') {
    const SCR = mood === 'sad' ? '#12234a' : '#0e2233', CY = mood === 'shock' ? '#ff8f6b' : '#5ce1e6', METAL = '#b8c7d9';
    const toastY = { happy: 6, shock: -4, sad: 22, smug: 12 }[mood] ?? 12;
    const toastR = mood === 'shock' ? 'rotate(-18 48 20)' : '';
    const toastR2 = mood === 'shock' ? 'rotate(14 72 20)' : '';
    const toast = (x, t, dy) => `<g transform="${t} translate(0 ${dy})"><rect x="${x}" y="${toastY}" width="18" height="22" rx="5" fill="#e8b26a" ${L(2.5)}/><rect x="${x + 3}" y="${toastY + 3}" width="12" height="15" rx="3" fill="#f6d79a"/></g>`;
    const eye = cx => {
      const cy = 44;
      let s;
      if (mood === 'happy') s = `<path d="M${cx - 7} ${cy + 3} L${cx} ${cy - 5} L${cx + 7} ${cy + 3}" fill="none" stroke="${CY}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
      else if (mood === 'shock') s = `<circle cx="${cx}" cy="${cy}" r="7.5" fill="none" stroke="${CY}" stroke-width="3"/><circle cx="${cx}" cy="${cy}" r="2" fill="${CY}"/>`;
      else if (mood === 'smug') s = `<rect x="${cx - 6}" y="${cy}" width="12" height="5" rx="2" fill="${CY}"/>`;
      else if (mood === 'sad') { const o = cx < 60 ? -1 : 1; s = `<rect x="${cx - 4}" y="${cy - 2}" width="8" height="9" rx="2" fill="${CY}"/><path d="M${cx - 7 * o} ${cy - 8} L${cx + 7 * o} ${cy - 4}" stroke="${CY}" stroke-width="3" stroke-linecap="round"/>`; }
      else if (mood === 'think') s = `<rect x="${cx - 1}" y="${cy - 9}" width="8" height="8" rx="2" fill="${CY}"/>`;
      else s = `<rect x="${cx - 4}" y="${cy - 7}" width="8" height="14" rx="3" fill="${CY}"/>`;
      return s + `<rect x="${cx - 8}" y="${cy - 10}" width="16" height="20" class="lid" fill="${SCR}" transform="scale(1 0)"/>`;
    };
    const tear = mood === 'sad' ? `<rect x="42" y="54" width="3" height="3" fill="${CY}"/><rect x="42" y="59" width="3" height="3" fill="${CY}" opacity=".6"/>` : '';
    const mouth = {
      idle: `<path d="M50 58 Q60 61 70 58" fill="none" stroke="${CY}" stroke-width="3" stroke-linecap="round" class="mouth"/>`,
      happy: `<path d="M47 54 Q60 66 73 54 Z" fill="${CY}" class="mouth"/>`,
      shock: `<path d="M45 59 l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4" fill="none" stroke="${CY}" stroke-width="2.6" stroke-linejoin="round" class="mouth"/>`,
      smug: `<path d="M50 59 Q62 61 71 53" fill="none" stroke="${CY}" stroke-width="3" stroke-linecap="round" class="mouth"/>`,
      sad: `<path d="M49 61 Q60 53 71 61" fill="none" stroke="${CY}" stroke-width="3" stroke-linecap="round" class="mouth"/>`,
      think: `<g class="mouth"><circle cx="52" cy="58" r="2.4" fill="${CY}"/><circle cx="60" cy="58" r="2.4" fill="${CY}" opacity=".7"/><circle cx="68" cy="58" r="2.4" fill="${CY}" opacity=".4"/></g>`,
    }[mood];
    // Brust-Anzeige: Zeiger (Winkel in Grad, -180 = links, 0 = rechts)
    const ang = { idle: -90, happy: -35, shock: -8, smug: -55, sad: -165, think: -120 }[mood] * Math.PI / 180;
    const nx = (60 + 13 * Math.cos(ang)).toFixed(1), ny = (108 + 13 * Math.sin(ang)).toFixed(1);
    const arm = m => {
      const [d, x, y] = {
        idle: ['M30 92 Q16 98 16 114', 16, 118],
        happy: ['M30 90 Q12 82 14 62', 14, 58],
        shock: ['M30 90 Q10 88 6 70', 6, 66],
        sad: ['M30 96 Q22 110 22 124', 22, 128],
        head: ['M30 90 Q10 70 20 50', 20, 46],
        thumb: ['M30 94 Q18 100 24 112', 26, 114],
      }[m];
      return tube(d, '#aebdd0', 6) + tube(`M${x - 6} ${y + 3} a6 6 0 1 1 12 0`, '#d7e1ee', 3.5);
    };
    const al = arm(mood === 'think' || mood === 'smug' ? 'idle' : mood);
    const ar = arm(mood === 'think' ? 'head' : mood === 'smug' ? 'thumb' : mood);
    const extra = {
      shock: `<path d="M20 20 l-6 -6 l5 0 l-5 -6 M100 20 l6 -6 l-5 0 l5 -6" fill="none" stroke="#ffe14d" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`,
      happy: fx.star(106, 30) + fx.star(12, 34, 0.7),
      think: fx.dots(92, 22),
      sad: `<path d="M84 18 q4 -6 0 -12 M92 20 q4 -6 0 -12" fill="none" stroke="#9aa3c7" stroke-width="2.5" stroke-linecap="round"/>`,
      smug: fx.star(102, 92, 0.6),
    }[mood] || '';
    return `<svg viewBox="0 0 120 150" class="char blechbert mood-${mood}" aria-hidden="true">
      <g class="c-body">
        ${toast(38, toastR, 0)}${toast(64, toastR2, mood === 'happy' ? 3 : 0)}
        <rect x="52" y="72" width="16" height="10" fill="#8796ab" ${L(3)}/>
        <rect x="22" y="22" width="76" height="52" rx="12" fill="${METAL}" ${L(3.5)}/>
        <rect x="36" y="20" width="20" height="5" rx="2" fill="#4a4e69"/><rect x="64" y="20" width="20" height="5" rx="2" fill="#4a4e69"/>
        <circle cx="22" cy="48" r="5" fill="#8796ab" ${L(2.5)}/><circle cx="98" cy="48" r="5" fill="#8796ab" ${L(2.5)}/>
        <rect x="30" y="30" width="60" height="36" rx="7" fill="${SCR}" ${L(3)}/>
        <path d="M34 34 h14" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".25"/>
        <g class="eyes">${eye(45)}${eye(75)}</g>${tear}
        ${mouth}
        <rect x="28" y="124" width="64" height="20" rx="10" fill="#4a4e69" ${L(3)}/>
        <circle cx="40" cy="134" r="6" fill="#8796ab" ${L(2)}/><circle cx="60" cy="134" r="6" fill="#8796ab" ${L(2)}/><circle cx="80" cy="134" r="6" fill="#8796ab" ${L(2)}/>
        <rect x="28" y="80" width="64" height="44" rx="9" fill="#ff9f43" ${L(3.5)}/>
        <circle cx="34" cy="86" r="1.8" fill="${K}"/><circle cx="86" cy="86" r="1.8" fill="${K}"/><circle cx="34" cy="118" r="1.8" fill="${K}"/><circle cx="86" cy="118" r="1.8" fill="${K}"/>
        <path d="M43 108 A17 17 0 0 1 77 108 Z" fill="#fff4e0" ${L(2.5)}/>
        <path d="M46 108 A14 14 0 0 1 50 98" fill="none" stroke="#ff6b6b" stroke-width="3"/><path d="M70 98 A14 14 0 0 1 74 108" fill="none" stroke="#2fe39f" stroke-width="3"/>
        <path d="M60 108 L${nx} ${ny}" ${L(3)}/><circle cx="60" cy="108" r="2.5" fill="${K}"/>
        <g class="arm-l">${al}</g><g class="arm-r"><g transform="${MIRROR}">${ar}</g></g>
        ${extra}
      </g></svg>`;
  }

  // ---------- Dialoge ----------
  const STAGE = {
    90: [[['a', 'idle', 'Grüße, Erdlinge! Ich bin Zirp vom Planeten Quaxx. Ich prüfe, ob ihr klug genug seid.'], ['b', 'happy', 'Und ich bin Blechbert, Verteidiger der Erde. Gebaut aus einem Toaster. Fragen?']],
      [['a', 'smug', 'Knackt heute niemand die 1 %-Frage, wird die Erde ein galaktischer Minigolfplatz.'], ['b', 'shock', 'MINIGOLF?! Keine Panik, Leute. Ich hab gerechnet: Wir schaffen das. Zu 97 Prozent. Ungefähr.']]],
    85: [[['a', 'think', 'Ich scanne das Publikum. Hundert Gehirne. Eins summt Schlager.'], ['b', 'idle', 'Das bin ich. Mein Lüfter summt, wenn ich nervös bin.']],
      [['b', 'happy', 'Zirp, das hier ist ein Quiz. Man beantwortet Fragen.'], ['a', 'shock', 'Freiwillig?! Auf Quaxx macht man das nur zur Strafe!']]],
    80: [[['a', 'idle', 'Ich notiere: Erdlinge lesen von links nach rechts. Faszinierend.'], ['b', 'smug', 'Und manchmal sogar die ganze Frage. Unser Geheimtrick.']],
      [['b', 'think', 'Was schreibst du da auf?'], ['a', 'smug', '„Kandidat lebt noch. Hat Haare. Wirkt entschlossen.“']]],
    75: [[['b', 'happy', 'Der <b>erste Joker</b> ist frei! Für 500 € rettet er dich über eine Frage.'], ['a', 'shock', 'Ihr bezahlt mit bedrucktem Papier?! Wie … niedlich.']],
      [['a', 'think', 'Was ist ein „<b>Joker</b>“?'], ['b', 'idle', 'Galaktische Nachbarschaftshilfe. Ab jetzt zu haben: 500 €, eine Frage gerettet.']]],
    70: [[['a', 'shock', 'Mein Raumschiff hat einen Strafzettel! „Parken auf dem Sendemast“?!'], ['b', 'smug', 'Willkommen auf der Erde, Zirp.']],
      [['b', 'idle', 'Zirp, warum leuchten deine Antennen?'], ['a', 'think', 'Ich empfange eure Gedanken. Sie sind laut. Und voller Pizza.']]],
    65: [[['a', 'think', 'Erklär mir „Spaß“, Blechbert.'], ['b', 'happy', 'Spaß ist, wenn man fast scheitert – und dann doch nicht.'], ['a', 'idle', 'Ich notiere: Erdlinge sind seltsam.']],
      [['b', 'idle', 'Bei dieser hier lohnt es sich, Muster zu erkennen.'], ['a', 'smug', 'Auf Quaxx erkennen wir Muster schon im Ei.']]],
    60: [[['a', 'happy', 'Blechbert! Was ist DAS?'], ['b', 'happy', 'Ein Keks. Erdlinge machen sie aus Butter und Liebe.'], ['a', 'happy', 'Ich prüfe weiter. Aber mit Keks.']],
      [['b', 'shock', 'Die Reihen lichten sich, Zirp!'], ['a', 'think', 'Ich sehe es. Die Übriggebliebenen gefallen mir. Und dieser … Keks.']]],
    55: [[['b', 'shock', 'Achtung, ich überhitze! … Oh. Toast.'], ['a', 'happy', 'Ihr habt Maschinen, die Frühstück machen, wenn sie Angst haben?!']],
      [['a', 'smug', 'Ab hier lauern Fallen. Selbst auf Quaxx stolpert man über so was.'], ['b', 'shock', 'Zirp! Hilfst du etwa?'], ['a', 'think', 'Ich habe nichts gesagt. Notiere das nicht.']]],
    50: [[['b', 'idle', 'Halbzeit! <b>Joker Nummer zwei</b> ist frei – 500 €, eine Frage gerettet.'], ['a', 'think', 'Die Hälfte der Erdlinge scheitert hier. Auf Quaxx wären es mehr. Sag das keinem.']],
      [['a', 'idle', 'Das Mutterschiff will einen Zwischenstand.'], ['b', 'happy', 'Sag ihnen: Halbzeit, <b>zweiter Joker</b> frei für 500 €, Erde in Topform!']]],
    45: [[['a', 'shock', 'Das Mutterschiff fragt, ob es die Minigolfschläger schon einpacken soll.'], ['b', 'sad', 'Sag Nein! Bitte sag Nein.'], ['a', 'idle', 'Ich habe „Vielleicht“ gesagt.']],
      [['b', 'think', 'Bauchgefühl ist hier gefährlich.'], ['a', 'think', 'Ich habe drei Bäuche. Alle drei sind verwirrt.']]],
    40: [[['a', 'happy', 'Vier von zehn schaffen das. Ich würde gern sehen, wie du es schaffst.'], ['b', 'smug', 'Zirp! Du drückst uns die Daumen!'], ['a', 'sad', 'Ich habe keine Daumen. Aber … gedanklich: ja.']],
      [['b', 'shock', 'Akku bei 40 Prozent! Passt ja zur Frage.'], ['a', 'idle', 'Ihr Erdlinge zählt alles in Prozent. Ich langsam auch.']]],
    35: [[['a', 'think', 'Diese Frage hat einen Haken. Ich spüre ihn in den Antennen.'], ['b', 'idle', 'Ruhig bleiben, lesen, denken. Steht so in meiner Bedienungsanleitung.']],
      [['b', 'happy', 'Zirp, du hast eben gelächelt!'], ['a', 'shock', 'Lüge! Das war ein … Antennenkrampf.']]],
    30: [[['b', 'idle', 'Die 30 %-Frage! Wer sie schafft, darf danach mit dem Geld <b>aussteigen</b>.'], ['a', 'think', 'Die Rettungskapsel. Für Erdlinge, die lieber sicher landen.']],
      [['a', 'idle', 'Nach dieser Frage öffnet sich die Rettungskapsel: <b>Aussteigen</b> mit dem Geld ist dann erlaubt.'], ['b', 'happy', 'Oder weiterfliegen! Richtung Ruhm, Ehre und Kekse.']]],
    25: [[['a', 'sad', 'Blechbert … ich glaube, ich mag diesen Planeten.'], ['b', 'happy', 'Das sagt jeder nach dem ersten Keks.']],
      [['b', 'happy', 'Nur noch ein Viertel ist übrig!'], ['a', 'smug', 'Das kluge Viertel. Ich habe es im Bericht farbig markiert.']]],
    20: [[['a', 'smug', 'Ich habe heimlich Kekse in die Untertasse gepackt. Für … Forschungszwecke.'], ['b', 'happy', 'Forschungszwecke. Klar.']],
      [['b', 'think', 'Jeder Fünfte schafft das. Ich rechne, wie viele Fünftel wir sind.'], ['a', 'idle', 'Rechne nicht so laut. Hier wird gedacht.']]],
    15: [[['a', 'shock', 'Das Mutterschiff wird ungeduldig! Es hat den Minigolfplatz schon vermessen!'], ['b', 'think', 'Zeit für einen Perspektivwechsel. Dreh die Frage im Kopf um.']],
      [['b', 'smug', 'Die hier muss man von der Seite anschauen.'], ['a', 'think', 'Ich habe nur ein Auge. Ich schaue von vorn. Sehr gründlich.']]],
    10: [[['a', 'shock', 'Einer von zehn! Meine Antennen glühen!'], ['b', 'shock', 'Und mein Toast brennt an! Weiter, weiter!']],
      [['b', 'sad', 'Zirp … wenn wir scheitern, besuchst du uns trotzdem?'], ['a', 'sad', 'Auf einem Minigolfplatz? … Natürlich. Jeden Dienstag.']]],
    5: [[['a', 'idle', 'Letzte Prüfung vor dem Urteil. Wer diese schafft, steht im <b>Finale</b>.'], ['b', 'shock', 'Lüfter auf Maximum! Toast auf Maximum! Hoffnung auf Maximum!']],
      [['b', 'happy', 'Noch eine Frage bis zum <b>Finale</b>, Erde!'], ['a', 'think', 'Das Mutterschiff schaut live zu. Bitte nicht in die Kamera winken.']]],
    1: [[['a', 'idle', 'Die <b>1 %-Frage</b>. Sie entscheidet: Quizliga oder Minigolf.'], ['b', 'think', 'Lies jedes Wort. Auch die kleinen. <i>Besonders</i> die kleinen.']],
      [['b', 'shock', 'Die <b>1 %-Frage</b>! Neunundneunzig von hundert scheitern.'], ['a', 'smug', 'Zeig dem Universum, was ein Erdling kann.']]],
  };

  const REACT = {
    correct: [[['a', 'shock', 'Richtig?! Ich notiere: Erdling erstaunlich.'], ['b', 'happy', 'Die Erde bleibt rund und minigolffrei!']],
      [['b', 'happy', 'Treffer! Ein Toast auf dich!'], ['a', 'happy', 'Zehn Pluspunkte für den Planeten.']],
      [['a', 'happy', 'Korrekt. Das Mutterschiff applaudiert. Mit allen Tentakeln.'], ['b', 'smug', 'Wusste ich. Zu 97 Prozent.']]],
    wrong: [[['a', 'sad', 'Falsch. Ich muss es notieren … in sehr kleiner Schrift.'], ['b', 'sad', 'Kopf hoch. Schauen wir uns an, wo der Haken war.']],
      [['b', 'shock', 'Fehlzündung!'], ['a', 'think', 'Keine Sorge, auch auf Quaxx fällt man mal in einen Krater. Hier ist der Trick.']]],
    timeout: [[['a', 'smug', 'Zeit um. Auf Quaxx dauert eine Sekunde drei Jahre. Hier leider nicht.'], ['b', 'sad', 'Nächstes Mal schneller tippen!']],
      [['b', 'shock', 'Zeitüberschreitung! Sogar mein Toast war schneller.'], ['a', 'idle', 'Ich notiere: Zögern. Verständlich.']]],
    joker: [[['b', 'happy', 'Joker aktiviert! Galaktische Nachbarschaftshilfe!'], ['a', 'think', '500 Papierchen für eine Frage. Ihr seid großzügig mit euch selbst.']],
      [['a', 'idle', 'Joker benutzt. Auf Quaxx nennen wir das „Plan B“.'], ['b', 'smug', 'Hier heißt das: klug investiert.']]],
    ghost: [[['a', 'idle', 'Außer Konkurrenz, aber weiter Teil der Studie.'], ['b', 'happy', 'Du bist jetzt Ehrenbeobachter der Erde! Mit Abzeichen. Aus Alufolie.']],
      [['b', 'idle', 'Du spielst für die Ehre weiter?'], ['a', 'smug', 'Ich notiere: Erdlinge spielen auch ohne Preis. Rührend.']]],
    out: [[['a', 'sad', 'Du bist raus. Aber das Mutterschiff hat dich als „sympathisch“ gespeichert.'], ['b', 'idle', 'Du kannst außer Konkurrenz weiterspielen! Die Erde braucht jede Hilfe.']],
      [['b', 'sad', 'Oh nein, ausgeschieden!'], ['a', 'idle', 'Spiel ruhig außer Konkurrenz weiter. Ich beobachte dich trotzdem. Freundlich.']]],
    cashout: [[['b', 'think', 'Die Rettungskapsel ist bereit. Steigst du mit deinem Geld aus?'], ['a', 'smug', 'Oder du bleibst und rettest die Erde vor dem Minigolf. Deine Entscheidung.']],
      [['a', 'idle', 'Sicher landen oder weiterfliegen? Beides ist erlaubt.'], ['b', 'happy', 'Ich halte zu dir. Egal wie. Notfalls mit Toast.']]],
    final: [[['a', 'shock', 'Finale! Das Mutterschiff ist im Anflug.'], ['b', 'think', 'Nimm einen Anteil der 10.000 € – oder spiel die 1 %-Frage um den Jackpot!']],
      [['b', 'shock', 'Wir sind im Finale! Meine Schaltkreise kribbeln!'], ['a', 'idle', 'Sicheres Geld – oder die Frage, die über den Planeten entscheidet. Du wählst.']]],
    win: [[['a', 'happy', 'Geknackt! Die Erde ist aufgenommen in die Galaktische Quizliga!'], ['b', 'happy', 'KEIN MINIGOLF! Ich toaste vor Freude!'], ['a', 'smug', 'Erster Beschluss: ein Handelsabkommen. Kekse gegen Sternenstaub.']],
      [['b', 'shock', 'Ist das … ein Sieg?'], ['a', 'happy', 'Ein Sieg! Du bist ab heute Ehrenbotschafter der Erde. Und ich bleibe zum Kaffee.']]],
    lose: [[['a', 'sad', 'Knapp daneben. Ich müsste jetzt den Minigolf-Bericht abschicken …'], ['b', 'sad', 'Zirp?'], ['a', 'smug', '… aber er liegt leider unter einem Keks. Ich prüfe nächste Woche nochmal.']],
      [['b', 'sad', 'Die Erde ist durchgefallen?'], ['a', 'idle', 'Nur vorläufig. Ich habe „Wiederholungsprüfung“ angekreuzt. Gut gespielt, Erdling.']]],
    safe: [[['a', 'idle', 'Sicher gelandet. Die Erde bekommt Beobachterstatus. Und ich einen Keks.'], ['b', 'happy', 'Kein Minigolf, keine Liga – aber Geld in der Tasche!']],
      [['b', 'think', 'Du nimmst das sichere Geld?'], ['a', 'smug', 'Klug. Auf Quaxx nennt man das „erwachsen“. Die Erde darf vorerst bleiben, wie sie ist.']]],
    curtain: [[['a', 'idle', 'Alle anderen Erdlinge: Sehorgane schließen! Nur {name} schaut.']],
      [['b', 'happy', '{name}, du bist dran! Die anderen bitte wegschauen. Ich schalte meinen Bildschirm aus.']]],
    training: [[['b', 'happy', 'Trainingssimulator! Keine Uhr, kein Ausscheiden.'], ['a', 'think', 'Hier werte ich nicht. Ich schaue nur. Sehr intensiv.']],
      [['a', 'idle', 'Übungsmodus. Auch auf Quaxx übt man vor der Prüfung.'], ['b', 'smug', 'Ich übe Toasten. Läuft.']]],
    party: [[['a', 'shock', 'Mehrere Erdlinge gleichzeitig?! Das ist eine Delegation!'], ['b', 'happy', 'Das ist eine Party, Zirp. Mit Chips.']],
      [['b', 'happy', 'Party-Modus! Alle gegen alle, aber freundlich.'], ['a', 'smug', 'Ich bewerte die Gruppe. Und das Knabberzeug.']]],
  };

  const TEASE = ['Zirp scannt dein Gehirn. Es summt.', 'Blechbert macht Toast. Aus Nervosität.', 'Das Mutterschiff schaut zu. Kein Druck.',
    'Zirp notiert etwas. Wahrscheinlich Gutes.', 'Minigolfschläger bereit? Nein? Sehr gut.', 'Psst. Auf Quaxx würde man jetzt flüstern.',
    'Lüfter auf Stufe drei …', 'Zirp hat einen Keks in der Antenne.', 'Die Galaxis hält den Atem an.'];

  Cast.register({
    id: 'kontakt', title: 'Erstkontakt', tagline: 'Alien-Prüfer Zirp entscheidet über die Erde – Toaster-Roboter Blechbert kämpft für uns.',
    a: { name: 'Zirp', draw: zirp }, b: { name: 'Blechbert', draw: blechbert },
    stage: STAGE, react: REACT, tease: TEASE,
  });
})();
