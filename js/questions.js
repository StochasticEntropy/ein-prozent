/*
 * Fragenbank — alle Fragen sind eigene Fragen im Stil des Formats (Logik, Muster,
 * Sprache, Bilder, Zeit). Felder:
 *   id, cat, type: 'choice' | 'number' | 'text'
 *   q     Frage (HTML erlaubt), svg (optional), opts + a (Index der richtigen Option)
 *   a     Lösung (number/text), accept (weitere gültige Texte), contains (Teilstring genügt)
 *   ex    Erklärung, r = Rubrik [S,E,F,W,K] (siehe difficulty.js)
 */
(function (root) {
  // ---------- SVG-Bausteine ----------
  const svg = (vb, body) => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" class="qsvg" role="img">${body}</svg>`;

  function grid(n, size = 160) {
    const o = (200 - size) / 2, c = size / n;
    let s = '';
    for (let i = 0; i <= n; i++) {
      s += `<line class="ln" x1="${o}" y1="${o + i * c}" x2="${o + size}" y2="${o + i * c}"/>`;
      s += `<line class="ln" x1="${o + i * c}" y1="${o}" x2="${o + i * c}" y2="${o + size}"/>`;
    }
    return svg('0 0 200 200', s);
  }

  function triangle(cevians, horizontals = []) {
    const A = [100, 14], L = [14, 186], R = [186, 186];
    const xAt = (y, side) => 100 + side * 86 * (y - 14) / 172;
    let s = `<polygon class="ln" fill="none" points="${A} ${L} ${R}"/>`;
    for (let i = 1; i <= cevians; i++) {
      const x = 14 + 172 * i / (cevians + 1);
      s += `<line class="ln" x1="100" y1="14" x2="${x}" y2="186"/>`;
    }
    for (const y of horizontals) s += `<line class="ln" x1="${xAt(y, -1)}" y1="${y}" x2="${xAt(y, 1)}" y2="${y}"/>`;
    return svg('0 0 200 200', s);
  }

  function clock(h, m, { numbers = true } = {}) {
    let s = `<circle class="ln face" cx="100" cy="100" r="86"/>`;
    for (let i = 0; i < 12; i++) {
      const a = i * Math.PI / 6, r1 = i % 3 ? 76 : 70;
      s += `<line class="ln" x1="${100 + r1 * Math.sin(a)}" y1="${100 - r1 * Math.cos(a)}" x2="${100 + 84 * Math.sin(a)}" y2="${100 - 84 * Math.cos(a)}"/>`;
      if (numbers) {
        const n = i === 0 ? 12 : i;
        s += `<text class="tx" x="${100 + 58 * Math.sin(a)}" y="${100 - 58 * Math.cos(a) + 6}" text-anchor="middle" font-size="16">${n}</text>`;
      }
    }
    if (!numbers) s += `<circle class="accent" cx="100" cy="30" r="5"/>`;
    const ha = ((h % 12) + m / 60) * Math.PI / 6, ma = m * Math.PI / 30;
    s += `<line class="hand" x1="100" y1="100" x2="${100 + 36 * Math.sin(ha)}" y2="${100 - 36 * Math.cos(ha)}" stroke-width="7"/>`;
    s += `<line class="hand" x1="100" y1="100" x2="${100 + 50 * Math.sin(ma)}" y2="${100 - 50 * Math.cos(ma)}" stroke-width="4"/>`;
    s += `<circle class="accent" cx="100" cy="100" r="6"/>`;
    return svg('0 0 200 200', s);
  }

  function gearPath(cx, cy, r, teeth, phase = 0) {
    const pts = [];
    for (let i = 0; i < teeth * 4; i++) {
      const a = i * Math.PI * 2 / (teeth * 4) + phase;
      const rr = (i % 4 < 2) ? r + 7 : r - 3;
      pts.push(`${(cx + rr * Math.cos(a)).toFixed(1)},${(cy + rr * Math.sin(a)).toFixed(1)}`);
    }
    return `<polygon class="gear" points="${pts.join(' ')}"/><circle class="hub" cx="${cx}" cy="${cy}" r="${r * 0.32}"/>`;
  }

  function gears(layout) {
    const sets = {
      chain: [[40, 100], [104, 100], [168, 100], [232, 100]],
      loop: [[100, 62], [160, 62], [130, 114]],
    };
    const P = sets[layout];
    let s = '';
    P.forEach(([x, y], i) => {
      s += gearPath(x, y, 26, 10, i % 2 ? Math.PI / 10 : 0);
      s += `<text class="tx inv" x="${x}" y="${y + 6}" text-anchor="middle" font-size="16" font-weight="700">${'ABCD'[i]}</text>`;
    });
    const [x, y] = P[0];
    s += `<path class="arrow" d="M ${x - 30} ${y - 40} A 46 46 0 0 1 ${x + 30} ${y - 40}" fill="none" marker-end="url(#ah)"/>`;
    const defs = `<defs><marker id="ah" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" class="accent"/></marker></defs>`;
    return svg(layout === 'chain' ? '0 0 272 170' : '40 0 180 160', defs + s);
  }

  function diceNet(nums) {
    // Kreuz: senkrechter Streifen (4 Felder), links/rechts neben dem zweiten Feld je eins.
    const c = 44, x0 = 78, y0 = 6;
    const cells = [[x0, y0, nums[0]], [x0, y0 + c, nums[1]], [x0, y0 + 2 * c, nums[2]], [x0, y0 + 3 * c, nums[3]],
      [x0 - c, y0 + c, nums[4]], [x0 + c, y0 + c, nums[5]]];
    let s = '';
    for (const [x, y, n] of cells) {
      s += `<rect class="cell" x="${x}" y="${y}" width="${c}" height="${c}" rx="4"/>`;
      s += `<text class="tx" x="${x + c / 2}" y="${y + c / 2 + 8}" text-anchor="middle" font-size="22" font-weight="700">${n}</text>`;
    }
    return svg('0 0 200 190', s);
  }

  function cards(labels) {
    let s = '';
    labels.forEach((l, i) => {
      const x = 12 + i * 70;
      s += `<rect class="card" x="${x}" y="14" width="58" height="84" rx="8"/>`;
      s += `<text class="tx" x="${x + 29}" y="68" text-anchor="middle" font-size="30" font-weight="800">${l}</text>`;
    });
    return svg('0 0 292 112', s);
  }

  function letterF() {
    // vier F, drei nur gedreht, eines gespiegelt (C)
    const F = 'M -14 -22 H 14 V -12 H -4 V -4 H 10 V 6 H -4 V 22 H -14 Z';
    const tf = ['rotate(0)', 'rotate(90)', 'scale(-1,1) rotate(180)', 'rotate(270)'];
    let s = '';
    tf.forEach((t, i) => {
      const x = 38 + i * 72;
      s += `<g transform="translate(${x},52) ${t}"><path class="shape" d="${F}"/></g>`;
      s += `<text class="tx" x="${x}" y="112" text-anchor="middle" font-size="16" font-weight="700">${'ABCD'[i]}</text>`;
    });
    return svg('0 0 290 124', s);
  }

  function shapes() {
    const s = [
      `<circle class="shape c1" cx="40" cy="44" r="22"/>`,
      `<rect class="shape c2" x="86" y="22" width="44" height="44"/>`,
      `<polygon class="shape c3" points="186,22 210,66 162,66"/>`,
      `<circle class="shape c2" cx="250" cy="44" r="22"/>`,
      `<polygon class="shape c1" points="40,96 64,140 16,140"/>`,
      `<circle class="shape c3" cx="108" cy="118" r="22"/>`,
      `<rect class="shape c1" x="164" y="96" width="44" height="44"/>`,
    ].join('');
    return svg('0 0 280 160', s);
  }

  const eq = (rows) => `<div class="eq">${rows.map(r => `<div>${r}</div>`).join('')}</div>`;
  const seq = (items) => `<div class="seq">${items.map(x => `<span>${x}</span>`).join('')}</div>`;

  // ---------- Fragen ----------
  const Q = [
    // ===== leicht =====
    { id: 'odd-fruit', cat: 'Sprache', type: 'choice', q: 'Welches Wort passt nicht in die Reihe?',
      opts: ['Karotte', 'Apfel', 'Birne', 'Kirsche'], a: 0, r: [0, 0, 0, 0, 0],
      ex: 'Apfel, Birne und Kirsche sind Obst – die Karotte ist Gemüse.' },
    { id: 'seq-5', cat: 'Zahlen', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([5, 10, 15, 20, '?']),
      a: 25, r: [1, 0, 0, 0, 0], ex: 'Es kommt jedes Mal 5 dazu.' },
    { id: 'day-plus2', cat: 'Zeit', type: 'choice', q: 'Heute ist Donnerstag. Welcher Tag ist übermorgen?',
      opts: ['Samstag', 'Freitag', 'Sonntag', 'Mittwoch'], a: 0, r: [1, 0, 0, 0, 0],
      ex: 'Morgen ist Freitag, übermorgen Samstag.' },
    { id: 'shapes-corners', cat: 'Bilder', type: 'number', q: 'Wie viele der Formen haben Ecken?', svg: shapes(),
      a: 4, r: [1, 0, 0, 1, 0], ex: 'Zwei Quadrate und zwei Dreiecke haben Ecken, die drei Kreise nicht.' },
    { id: 'tallest', cat: 'Logik', type: 'choice', q: 'Anna ist größer als Ben. Ben ist größer als Carla. Wer ist am kleinsten?',
      opts: ['Carla', 'Ben', 'Anna', 'Kann man nicht wissen'], a: 0, r: [1, 0, 0, 0, 0],
      ex: 'Anna > Ben > Carla – Carla ist die Kleinste.' },
    { id: 'comb', cat: 'Sprache', type: 'choice', q: 'Was hat viele Zähne, kann aber nicht beißen?',
      opts: ['Ein Kamm', 'Ein Hai', 'Ein Hund', 'Ein Krokodil'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Die anderen beißen sehr wohl – ein Kamm nicht.' },
    { id: 'clock-445', cat: 'Zeit', type: 'choice', q: 'Wie spät ist es?', svg: clock(4, 45),
      opts: ['Viertel vor fünf', 'Viertel nach vier', 'Viertel vor neun', 'Neun Uhr zwanzig'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Der Minutenzeiger steht auf der 9 (45 Minuten), der Stundenzeiger kurz vor der 5.' },
    { id: 'seq-double', cat: 'Zahlen', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([3, 6, 12, 24, '?']),
      a: 48, r: [1, 0, 0, 1, 0], ex: 'Die Zahl verdoppelt sich jedes Mal.' },
    { id: 'mia', cat: 'Logik', type: 'choice', q: 'Mias Mutter hat drei Kinder: Tick, Trick und …?',
      opts: ['Mia', 'Track', 'Tack', 'Trock'], a: 0, r: [1, 1, 1, 0, 0],
      ex: 'Das dritte Kind ist natürlich Mia selbst.' },
    { id: 'dice-opposite', cat: 'Bilder', type: 'number',
      q: 'Bei einem normalen Spielwürfel ergeben gegenüberliegende Seiten zusammen immer 7. Welche Zahl liegt der 2 gegenüber?',
      a: 5, r: [1, 0, 0, 1, 0], ex: '7 − 2 = 5.' },
    { id: 'bus', cat: 'Zeit', type: 'choice', q: 'Ein Bus fährt um 9:40 Uhr ab und ist 35 Minuten unterwegs. Wann kommt er an?',
      opts: ['10:15 Uhr', '10:05 Uhr', '10:25 Uhr', '9:75 Uhr'], a: 0, r: [1, 0, 0, 2, 0],
      ex: '20 Minuten bis 10:00 Uhr, dann noch 15 Minuten.' },
    { id: 'anagram-tiger', cat: 'Sprache', type: 'text', q: 'Bilde aus diesen Buchstaben ein Tier:' + seq(['R', 'E', 'T', 'I', 'G']),
      a: 'TIGER', r: [1, 1, 0, 1, 0], ex: 'R-E-T-I-G wird zu TIGER.' },
    { id: 'kilo', cat: 'Logik', type: 'choice', q: 'Was ist schwerer: ein Kilo Federn oder ein Kilo Eisen?',
      opts: ['Beide gleich', 'Das Eisen', 'Die Federn', 'Kommt auf das Wetter an'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Ein Kilo ist ein Kilo.' },
    { id: 'short-month', cat: 'Sprache', type: 'choice', q: 'Welcher Monat hat den kürzesten Namen?',
      opts: ['Mai', 'Juni', 'Juli', 'März'], a: 0, r: [1, 0, 0, 0, 0], ex: 'Mai hat nur drei Buchstaben.' },
    { id: 'rope', cat: 'Logik', type: 'number', q: 'Ein Seil soll in 5 Stücke geschnitten werden. Wie viele gerade Schnitte braucht man (ohne zu falten oder Stücke übereinanderzulegen)?',
      a: 4, r: [1, 0, 2, 0, 0], ex: 'Jeder Schnitt macht aus einem Stück zwei. Für 5 Stücke reichen 4 Schnitte.' },
    { id: 'hemd', cat: 'Zahlen', type: 'number', q: 'Ein Hemd kostet 40 €. Es wird um 25 % reduziert. Wie viel Euro kostet es jetzt?',
      a: 30, r: [1, 0, 0, 1, 1], ex: '25 % von 40 € sind 10 €. 40 − 10 = 30.' },
    { id: 'minutes-25h', cat: 'Zeit', type: 'number', q: 'Wie viele Minuten sind zweieinhalb Stunden?',
      a: 150, r: [1, 0, 0, 1, 0], ex: '2 × 60 + 30 = 150.' },

    // ===== mittel-leicht =====
    { id: 'squares-seq', cat: 'Zahlen', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([1, 4, 9, 16, 25, '?']),
      a: 36, r: [1, 1, 0, 0, 1], ex: 'Quadratzahlen: 1², 2², 3², 4², 5², 6² = 36.' },
    { id: 'train', cat: 'Logik', type: 'number', q: 'Ein Zug hat 8 Wagen. Du sitzt im 3. Wagen von vorn. Im wievielten Wagen von hinten sitzt du?',
      a: 6, r: [1, 0, 1, 1, 0], ex: 'Vor dir sind 2 Wagen, hinter dir 5 – also bist du der 6. von hinten (8 − 3 + 1).' },
    { id: 'map-riddle', cat: 'Sprache', type: 'choice',
      q: 'Ich habe Städte, aber keine Häuser. Ich habe Wälder, aber keine Bäume. Ich habe Flüsse, aber keine Fische. Was bin ich?',
      opts: ['Eine Landkarte', 'Ein Traum', 'Eine Postkarte', 'Ein Gemälde'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Auf einer Landkarte ist all das eingezeichnet – aber nicht echt.' },
    { id: 'gears-chain', cat: 'Bilder', type: 'choice', q: 'Zahnrad A dreht sich im Uhrzeigersinn. In welche Richtung dreht sich Zahnrad D?',
      svg: gears('chain'), opts: ['Gegen den Uhrzeigersinn', 'Im Uhrzeigersinn', 'Gar nicht', 'Abwechselnd'], a: 0, noShuffle: true,
      r: [2, 0, 0, 1, 0], ex: 'Ineinandergreifende Zahnräder drehen gegenläufig: A rechts, B links, C rechts, D links.' },
    { id: 'syllogism', cat: 'Logik', type: 'choice', q: 'Alle Flumsen sind Krabbler. Alle Krabbler sind grün. Was stimmt <b>sicher</b>?',
      opts: ['Alle Flumsen sind grün', 'Alle grünen Dinge sind Flumsen', 'Manche Krabbler sind keine Flumsen', 'Nichts davon'], a: 0,
      r: [2, 0, 1, 0, 0], ex: 'Flumsen ⊂ Krabbler ⊂ grün. Mehr folgt nicht.' },
    { id: 'vorgestern', cat: 'Zeit', type: 'choice', q: 'Vorgestern war Freitag. Welcher Tag ist morgen?',
      opts: ['Montag', 'Sonntag', 'Dienstag', 'Samstag'], a: 0, r: [2, 0, 0, 1, 0],
      ex: 'Vorgestern Freitag → heute Sonntag → morgen Montag.' },
    { id: 'shapes-f', cat: 'Bilder', type: 'choice', q: 'Drei Figuren sind nur gedreht. Welche passt nicht dazu?', svg: letterF(),
      opts: ['A', 'B', 'C', 'D'], a: 2, noShuffle: true, r: [1, 1, 0, 1, 0],
      ex: 'C ist gespiegelt – durch bloßes Drehen bekommt man sie nicht.' },
    { id: 'seq-diff', cat: 'Zahlen', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([1, 2, 4, 7, 11, '?']),
      a: 16, r: [1, 1, 0, 1, 0], ex: 'Es kommt jeweils 1, 2, 3, 4, dann 5 dazu.' },
    { id: 'seq-down', cat: 'Zahlen', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([10, 9, 7, 4, '?']),
      a: 0, r: [1, 1, 0, 1, 0], ex: 'Minus 1, minus 2, minus 3 – jetzt minus 4: 0.' },
    { id: 'palindrome', cat: 'Sprache', type: 'choice', q: 'Welches Wort liest sich rückwärts <b>nicht</b> genauso wie vorwärts?',
      opts: ['Regal', 'Radar', 'Kajak', 'Rentner'], a: 0, r: [1, 0, 0, 1, 0],
      ex: 'Rückwärts wird aus „Regal“ „Lager“. Die anderen sind Palindrome.' },
    { id: 'snow', cat: 'Sprache', type: 'text', q: 'Welches Wort passt vor alle drei?' + seq(['…MANN', '…BALL', '…FLOCKE']),
      a: 'SCHNEE', r: [1, 1, 0, 0, 0], ex: 'Schneemann, Schneeball, Schneeflocke.' },

    // ===== mittel =====
    { id: 'shepherd', cat: 'Logik', type: 'number', q: 'Ein Hirte hat 17 Schafe. Alle bis auf 9 laufen weg. Wie viele Schafe bleiben ihm?',
      a: 9, r: [1, 0, 2, 0, 0], ex: '„Alle bis auf 9“ heißt: 9 bleiben.' },
    { id: 'fruit-eq', cat: 'Bilder', type: 'number', q: 'Welche Zahl ergibt die letzte Zeile?' +
      eq(['🍎 + 🍎 + 🍎 = 30', '🍎 + 🍌 + 🍌 = 18', '🍌 + 🍒 = 9', '🍒 + 🍎 + 🍌 = ?']),
      a: 19, r: [3, 0, 0, 2, 0], ex: 'Apfel = 10, Banane = 4, Kirsche = 5. Also 5 + 10 + 4 = 19.' },
    { id: 'fib', cat: 'Zahlen', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([1, 1, 2, 3, 5, 8, '?']),
      a: 13, r: [1, 1, 0, 1, 0], ex: 'Jede Zahl ist die Summe der beiden davor: 5 + 8 = 13.' },
    { id: 'min-day', cat: 'Zeit', type: 'number', q: 'Wie viele Minuten hat ein Tag?',
      a: 1440, r: [1, 0, 0, 2, 0], ex: '24 × 60 = 1440.' },
    { id: 'fence', cat: 'Logik', type: 'number', q: 'Ein 10 m langer Zaun bekommt alle 2 m einen Pfosten – auch an beiden Enden. Wie viele Pfosten braucht man?',
      a: 6, r: [1, 0, 2, 1, 0], ex: '0, 2, 4, 6, 8, 10 m – das sind 6 Pfosten, nicht 5.' },
    { id: 'age-half', cat: 'Zahlen', type: 'number', q: 'Lisa ist 8, ihr Bruder ist halb so alt. Wie alt ist der Bruder, wenn Lisa 20 ist?',
      a: 16, r: [2, 0, 2, 0, 0], ex: 'Der Bruder ist immer 4 Jahre jünger – nicht immer halb so alt.' },
    { id: 'race', cat: 'Logik', type: 'choice', q: 'Du überholst bei einem Rennen die Person auf Platz 2. Auf welchem Platz bist du jetzt?',
      opts: ['Platz 2', 'Platz 1', 'Platz 3', 'Kommt drauf an'], a: 0, r: [1, 1, 1, 0, 0],
      ex: 'Du nimmst ihren Platz ein – das ist Platz 2. Vor dir ist noch jemand.' },
    { id: 'squares-down', cat: 'Zahlen', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([100, 81, 64, 49, '?']),
      a: 36, r: [1, 1, 0, 0, 1], ex: 'Quadratzahlen rückwärts: 10², 9², 8², 7², 6² = 36.' },
    { id: 'anagram-italy', cat: 'Sprache', type: 'text', q: 'Welches Land steckt in diesen Buchstaben?' + seq(['T', 'A', 'L', 'I', 'E', 'N', 'I']),
      a: 'ITALIEN', r: [1, 1, 0, 1, 0], ex: 'T-A-L-I-E-N-I wird zu ITALIEN.' },
    { id: 'queue', cat: 'Logik', type: 'number', q: 'Peter steht in einer Schlange. Er ist der 7. von vorne und der 7. von hinten. Wie viele Personen stehen in der Schlange?',
      a: 13, r: [2, 0, 1, 1, 0], ex: '6 vor ihm, 6 hinter ihm und Peter selbst = 13.' },
    { id: 'odd-prime', cat: 'Zahlen', type: 'choice', q: 'Welche Zahl passt nicht in die Reihe?' + seq([3, 5, 7, 11, 15, 17]),
      opts: ['15', '3', '11', '17'], a: 0, r: [1, 1, 0, 0, 1], ex: 'Alle anderen sind Primzahlen. 15 = 3 × 5.' },
    { id: 'punkt-strich', cat: 'Zahlen', type: 'number', q: 'Wie viel ist 5 + 5 × 5?',
      a: 30, r: [1, 0, 2, 0, 1], ex: 'Punkt vor Strich: 5 × 5 = 25, plus 5 = 30 (nicht 50).' },
    { id: 'blumen', cat: 'Sprache', type: 'text', q: 'Welches Wort passt in die Lücke – es bildet mit beiden Nachbarn ein Wort?' + seq(['SONNEN', '___', 'TOPF']),
      a: 'BLUMEN', accept: ['BLUME'], r: [1, 2, 0, 0, 0], ex: 'Sonnenblumen und Blumentopf.' },
    { id: 'tuer', cat: 'Sprache', type: 'text', q: 'Welches Wort passt in die Lücke – es bildet mit beiden Nachbarn ein Wort?' + seq(['HAUS', '___', 'SCHLÜSSEL']),
      a: 'TÜR', accept: ['TOR', 'TRESOR'], r: [1, 2, 0, 0, 0], ex: 'Haustür und Türschlüssel. (Haustor/Torschlüssel und Haustresor/Tresorschlüssel zählen auch.)' },
    { id: 'months-r', cat: 'Sprache', type: 'number', q: 'Wie viele der zwölf Monatsnamen enthalten den Buchstaben R?',
      a: 8, r: [1, 0, 1, 2, 0], ex: 'Januar, Februar, März, April, September, Oktober, November, Dezember – Mai bis August nicht.' },
    { id: 'golf', cat: 'Logik', type: 'choice', q: 'Einige Ärztinnen spielen Golf. Alle, die Golf spielen, tragen eine Mütze. Was folgt <b>sicher</b>?',
      opts: ['Einige Ärztinnen tragen eine Mütze', 'Alle Ärztinnen tragen eine Mütze', 'Alle Mützenträger spielen Golf', 'Nichts davon'], a: 0,
      r: [2, 0, 1, 0, 0], ex: 'Die golfenden Ärztinnen tragen alle eine Mütze – also zumindest einige.' },
    { id: 'tri-2', cat: 'Bilder', type: 'number', q: 'Wie viele Dreiecke siehst du?', svg: triangle(2),
      a: 6, r: [1, 1, 1, 1, 0], ex: '3 kleine, 2 aus je zwei Teilen und 1 großes = 6.' },
    { id: 'dice-net', cat: 'Bilder', type: 'number', q: 'Dieses Netz wird zu einem Würfel gefaltet. Welche Zahl liegt dann der 1 gegenüber?',
      svg: diceNet([1, 2, 3, 4, 5, 6]), a: 3, r: [2, 1, 0, 1, 0],
      ex: 'Im senkrechten Streifen liegt jedes zweite Feld gegenüber: 1 und 3, 2 und 4. Außerdem 5 und 6.' },
    { id: 'matrix', cat: 'Zahlen', type: 'number', q: 'Welche Zahl gehört an die Stelle des Fragezeichens?' +
      eq(['2 · 4 · 8', '3 · 9 · 27', '4 · 16 · ?']), a: 64, r: [2, 1, 0, 1, 0],
      ex: 'Jede Zeile: Zahl, ihr Quadrat, ihre dritte Potenz. 4³ = 64.' },
    { id: 'jfm', cat: 'Sprache', type: 'choice', q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['J', 'F', 'M', 'A', 'M', 'J', 'J', '?']),
      opts: ['A', 'S', 'O', 'J'], a: 0, r: [1, 2, 0, 0, 0], ex: 'Anfangsbuchstaben der Monate: … Juni, Juli, August.' },
    { id: 'mdm', cat: 'Sprache', type: 'choice', q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['M', 'D', 'M', 'D', 'F', 'S', '?']),
      opts: ['S', 'M', 'D', 'F'], a: 0, r: [1, 2, 0, 0, 0], ex: 'Wochentage: Montag, Dienstag, … Freitag, Samstag, Sonntag.' },
    { id: 'triangular', cat: 'Zahlen', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([1, 3, 6, 10, 15, '?']),
      a: 21, r: [1, 1, 0, 1, 0], ex: 'Es kommt 2, 3, 4, 5, dann 6 dazu: 21.' },
    { id: 'seq-pronic', cat: 'Zahlen', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([2, 6, 12, 20, 30, '?']),
      a: 42, r: [2, 1, 0, 1, 0], ex: 'Die Abstände wachsen um 2: +4, +6, +8, +10, +12 → 42 (oder 6 × 7).' },
    { id: 'day-before-after', cat: 'Zeit', type: 'choice', q: 'Heute ist Mittwoch. Welcher Tag ist der Tag vor übermorgen?',
      opts: ['Donnerstag', 'Mittwoch', 'Dienstag', 'Freitag'], a: 0, r: [2, 0, 1, 1, 0],
      ex: 'Übermorgen ist Freitag, der Tag davor Donnerstag – also morgen.' },

    // ===== mittel-schwer =====
    { id: 'widgets', cat: 'Logik', type: 'number', q: '5 Maschinen stellen in 5 Minuten 5 Teile her. Wie viele Minuten brauchen 100 Maschinen für 100 Teile?',
      a: 5, r: [1, 1, 2, 0, 0], ex: 'Jede Maschine braucht 5 Minuten für ein Teil. 100 Maschinen schaffen 100 Teile also auch in 5 Minuten.' },
    { id: 'lily', cat: 'Zahlen', type: 'number', q: 'Seerosen verdoppeln jeden Tag ihre Fläche. Nach 48 Tagen ist der ganze Teich bedeckt. Nach wie vielen Tagen war er zur Hälfte bedeckt?',
      a: 47, r: [1, 1, 2, 0, 0], ex: 'Einen Tag vor „ganz“ war es „halb“ – Tag 47, nicht 24.' },
    { id: 'bat-ball', cat: 'Zahlen', type: 'number', q: 'Ein Schläger und ein Ball kosten zusammen 1,10 €. Der Schläger kostet 1 € mehr als der Ball. Wie viele <b>Cent</b> kostet der Ball?',
      a: 5, r: [1, 0, 3, 1, 0], ex: 'Ball 5 ct, Schläger 1,05 € – zusammen 1,10 €. Bei 10 ct wäre der Schläger nur 90 ct teurer.' },
    { id: 'brick', cat: 'Logik', type: 'number', q: 'Ein Ziegelstein wiegt 1 kg plus einen halben Ziegelstein. Wie viele Kilogramm wiegt ein ganzer Ziegelstein?',
      a: 2, r: [2, 1, 2, 0, 0], ex: 'Der halbe Stein wiegt 1 kg, also wiegt der ganze 2 kg.' },
    { id: 'socks', cat: 'Logik', type: 'number', q: 'In einer Schublade liegen 10 schwarze und 10 weiße Socken. Es ist stockdunkel. Wie viele Socken musst du mindestens herausnehmen, um sicher zwei gleichfarbige zu haben?',
      a: 3, r: [2, 1, 1, 0, 0], ex: 'Bei 3 Socken müssen zwei dieselbe Farbe haben – es gibt nur zwei Farben.' },
    { id: 'fathers', cat: 'Logik', type: 'number', q: 'Zwei Väter und zwei Söhne gehen angeln. Jeder fängt genau einen Fisch, zusammen sind es aber nur 3 Fische. Wie viele Personen angeln?',
      a: 3, r: [1, 2, 1, 0, 0], ex: 'Großvater, Vater und Sohn: Der Vater ist zugleich Sohn.' },
    { id: 'pills', cat: 'Zahlen', type: 'number', q: 'Du bekommst 3 Tabletten und sollst alle 30 Minuten eine nehmen – die erste sofort. Nach wie vielen Minuten ist die letzte genommen?',
      a: 60, r: [1, 1, 2, 0, 0], ex: 'Minute 0, 30 und 60 – nach 60 Minuten, nicht 90.' },
    { id: 'year-end', cat: 'Zeit', type: 'choice', q: 'Ein Jahr mit 365 Tagen beginnt an einem Montag. An welchem Wochentag endet es?',
      opts: ['Montag', 'Sonntag', 'Dienstag', 'Samstag'], a: 0, r: [2, 1, 1, 1, 1],
      ex: '365 = 52 × 7 + 1. Der 365. Tag ist also wieder ein Montag.' },
    { id: 'march-april', cat: 'Zeit', type: 'choice', q: 'Der 1. März ist ein Dienstag. Welcher Wochentag ist der 1. April?',
      opts: ['Freitag', 'Dienstag', 'Donnerstag', 'Samstag'], a: 0, r: [2, 0, 1, 2, 1],
      ex: 'Der März hat 31 Tage = 4 Wochen + 3 Tage. Dienstag + 3 = Freitag.' },
    { id: 'weekday-letter', cat: 'Sprache', type: 'text', q: 'Welcher Buchstabe kommt in <b>allen sieben</b> Wochentagsnamen vor (Montag bis Sonntag)?',
      a: 'T', r: [2, 1, 2, 1, 0], ex: 'Nur das T: Der Mittwoch hat kein „tag“ – A und G fallen raus.', letters: true },
    { id: 'horse', cat: 'Logik', type: 'number', q: 'Jemand kauft ein Pferd für 60 €, verkauft es für 70 €, kauft es für 80 € zurück und verkauft es für 90 €. Wie viel Euro Gewinn hat er gemacht?',
      a: 20, r: [2, 0, 2, 1, 0], ex: 'Ausgaben 60 + 80 = 140, Einnahmen 70 + 90 = 160. Gewinn 20 €.' },
    { id: 'vier', cat: 'Sprache', type: 'number', q: 'Welche Zahl von 1 bis 10 hat ausgeschrieben genau so viele Buchstaben, wie sie groß ist?',
      a: 4, r: [2, 1, 0, 2, 0], ex: 'V-I-E-R hat 4 Buchstaben – sonst passt keine.' },
    { id: 'tomorrow-riddle', cat: 'Zeit', type: 'choice', q: 'Übermorgen ist der Tag nach Montag. Welcher Tag war gestern?',
      opts: ['Samstag', 'Freitag', 'Sonntag', 'Montag'], a: 0, r: [3, 0, 1, 2, 0],
      ex: 'Übermorgen = Dienstag → heute Sonntag → gestern Samstag.' },
    { id: 'denmark', cat: 'Sprache', type: 'text', q: 'Welches Land steckt in diesen Buchstaben?' + seq(['M', 'Ä', 'N', 'E', 'D', 'A', 'R', 'K']),
      a: 'DÄNEMARK', r: [1, 2, 0, 1, 0], ex: 'M-Ä-N-E-D-A-R-K wird zu DÄNEMARK.' },
    { id: 'mirror-clock', cat: 'Bilder', type: 'choice', q: 'Du siehst eine Uhr ohne Ziffern im <b>Spiegel</b> (der Punkt markiert die 12). Wie spät ist es wirklich?',
      svg: clock(10, 0, { numbers: false }), opts: ['2 Uhr', '10 Uhr', '4 Uhr', '8 Uhr'], a: 0, r: [2, 1, 1, 1, 0],
      ex: 'Im Spiegel sind links und rechts vertauscht. Der Zeiger auf „10“ steht in Wirklichkeit auf der 2.' },
    { id: 'price-pm10', cat: 'Zahlen', type: 'number', q: 'Ein Preis von 100 € steigt um 10 % und sinkt danach um 10 %. Wie viel Euro kostet es jetzt?',
      a: 99, r: [2, 0, 2, 1, 1], ex: '100 → 110. 10 % von 110 sind 11. 110 − 11 = 99.' },

    // ===== schwer =====
    { id: 'ezdv', cat: 'Sprache', type: 'text', q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['E', 'Z', 'D', 'V', 'F', 'S', 'S', 'A', '?']),
      a: 'N', r: [1, 3, 0, 1, 0], ex: 'Eins, Zwei, Drei, Vier, Fünf, Sechs, Sieben, Acht – Neun.', letters: true },
    { id: 'factorial', cat: 'Zahlen', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([1, 2, 6, 24, 120, '?']),
      a: 720, r: [2, 1, 0, 2, 1], ex: 'Mal 2, mal 3, mal 4, mal 5 – jetzt mal 6: 720.' },
    { id: 'wason', cat: 'Logik', type: 'choice',
      q: 'Jede Karte hat vorn einen Buchstaben und hinten eine Zahl. Regel: <i>„Wenn vorn ein Vokal steht, steht hinten eine gerade Zahl.“</i> Vor dir liegen A, K, 4 und 7. Welche Karten musst du umdrehen, um die Regel zu prüfen?',
      svg: cards(['A', 'K', '4', '7']), opts: ['A und 7', 'A und 4', 'Nur A', 'A, 4 und 7'], a: 0,
      r: [1, 3, 3, 0, 0], ex: 'A: hinten muss eine gerade Zahl stehen. 7: vorn darf kein Vokal stehen. K ist kein Vokal – für K gilt die Regel gar nicht. Und die 4 kann die Regel nicht verletzen, egal was vorn steht.' },
    { id: 'grid-3', cat: 'Bilder', type: 'number', q: 'Wie viele Quadrate siehst du?', svg: grid(3),
      a: 14, r: [2, 1, 1, 2, 0], ex: '9 kleine, 4 mittlere (2×2) und 1 großes = 14.' },
    { id: 'rects-2', cat: 'Bilder', type: 'number', q: 'Wie viele <b>Rechtecke</b> siehst du? (Quadrate zählen mit.)', svg: grid(2),
      a: 9, r: [2, 1, 1, 2, 0], ex: '4 kleine, 4 aus zwei Feldern (2 waagrecht, 2 senkrecht) und 1 großes = 9.' },
    { id: 'siblings', cat: 'Logik', type: 'number', q: 'Ein Mädchen hat genauso viele Brüder wie Schwestern. Jeder ihrer Brüder hat doppelt so viele Schwestern wie Brüder. Wie viele Kinder sind es?',
      a: 7, r: [3, 1, 1, 2, 0], ex: '4 Mädchen und 3 Jungen: Ein Mädchen hat 3 Brüder und 3 Schwestern, ein Junge 4 Schwestern und 2 Brüder.' },
    { id: 'boxes', cat: 'Logik', type: 'choice',
      q: 'Drei Kisten sind mit „Äpfel“, „Birnen“ und „Gemischt“ beschriftet – aber <b>alle</b> Schilder sind falsch. Du darfst aus einer Kiste eine einzige Frucht ziehen. Aus welcher, um danach alle richtig zu beschriften?',
      opts: ['Aus „Gemischt“', 'Aus „Äpfel“', 'Aus „Birnen“', 'Geht nicht mit einer Frucht'], a: 0, r: [2, 2, 1, 1, 0],
      ex: '„Gemischt“ ist falsch beschriftet, enthält also nur eine Sorte. Ziehst du dort einen Apfel, ist es die Apfelkiste – der Rest ergibt sich.' },
    { id: 'photo', cat: 'Logik', type: 'choice',
      q: 'Ein Mann zeigt auf ein Foto: „Geschwister habe ich keine. Aber der Vater dieses Mannes ist der Sohn meines Vaters.“ Wer ist auf dem Foto?',
      opts: ['Sein Sohn', 'Er selbst', 'Sein Vater', 'Sein Neffe'], a: 0, r: [3, 1, 2, 1, 0],
      ex: '„Der Sohn meines Vaters“ ist er selbst (keine Geschwister). Er ist also der Vater des Mannes auf dem Foto.' },
    { id: 'clock-angle', cat: 'Zeit', type: 'choice', q: 'Es ist genau 3:15 Uhr. Welchen Winkel bilden Stunden- und Minutenzeiger?',
      opts: ['7,5°', '0°', '15°', '30°'], a: 0, r: [2, 1, 2, 1, 1],
      ex: 'Der Minutenzeiger steht auf der 3. Der Stundenzeiger ist eine Viertelstunde weiter: ¼ von 30° = 7,5°.' },
    { id: 'look-say', cat: 'Zahlen', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([1, 11, 21, 1211, 111221, '?']),
      a: 312211, r: [2, 3, 0, 2, 0], ex: 'Jede Zahl beschreibt die vorige: „drei Einsen, zwei Zweien, eine Eins“ → 312211.' },
    { id: 'planets', cat: 'Sprache', type: 'text', q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['M', 'V', 'E', 'M', 'J', 'S', 'U', '?']),
      a: 'N', r: [1, 3, 0, 1, 1], ex: 'Planeten von innen nach außen: Merkur, Venus, Erde, Mars, Jupiter, Saturn, Uranus, Neptun.', letters: true },
    { id: 'gears-loop', cat: 'Bilder', type: 'choice', q: 'Zahnrad A soll sich im Uhrzeigersinn drehen. Was macht Zahnrad C?',
      svg: gears('loop'), opts: ['Nichts dreht sich – blockiert', 'Im Uhrzeigersinn', 'Gegen den Uhrzeigersinn', 'Abwechselnd'], a: 0, noShuffle: true,
      r: [2, 3, 2, 0, 1], ex: 'Drei Zahnräder im Kreis: A und B müssten gegenläufig drehen, C müsste zu beiden gegenläufig sein – unmöglich. Alles blockiert.' },
    { id: 'alpha-numbers', cat: 'Zahlen', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([8, 3, 1, 5, 9, 6, 7, 4, 10, '?']),
      a: 2, r: [1, 4, 0, 2, 0], ex: 'Die Zahlwörter alphabetisch: acht, drei, eins, fünf, neun, sechs, sieben, vier, zehn – zwei.' },
    { id: 'month-syllables', cat: 'Sprache', type: 'text', q: 'Was wird durch diese Zahlen dargestellt?' + seq([3, 3, 1, 2, 1, 2, 2, 2, 3, 3, 3, 3]),
      a: 'MONATE', contains: ['MONAT'], r: [2, 4, 0, 2, 0],
      ex: 'Die Silben der zwölf Monatsnamen: Ja-nu-ar (3), Fe-bru-ar (3), März (1), A-pril (2), Mai (1) … De-zem-ber (3).' },
    { id: 'book-digits', cat: 'Zahlen', type: 'number', q: 'Für die Seitenzahlen eines Buches wurden insgesamt genau 192 Ziffern gedruckt (Seite 1 hat eine Ziffer, Seite 10 zwei …). Wie viele Seiten hat das Buch?',
      a: 100, r: [3, 1, 1, 2, 0], ex: 'Seiten 1–9: 9 Ziffern, 10–99: 180 Ziffern = 189. Seite 100 bringt 3 weitere = 192.' },
    { id: 'ones-100', cat: 'Zahlen', type: 'number', q: 'Du schreibst alle Zahlen von 1 bis 100 auf. Wie oft schreibst du die Ziffer 1?',
      a: 21, r: [2, 1, 2, 2, 0], ex: 'Einerstelle: 10-mal (1, 11, …, 91). Zehnerstelle: 10-mal (10–19). Dazu die 100: 21.' },
    { id: 'hands-overlap', cat: 'Zeit', type: 'number', q: 'Wie oft stehen Stunden- und Minutenzeiger einer Uhr an einem ganzen Tag (24 Stunden) genau übereinander?',
      a: 22, r: [2, 3, 2, 1, 0], ex: 'Nicht 24: In 12 Stunden überholt der Minutenzeiger nur 11-mal (zwischen 11 und 1 Uhr nur einmal, um 12). 2 × 11 = 22.' },
    { id: 'powers', cat: 'Zahlen', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([1, 4, 27, 256, '?']),
      a: 3125, r: [2, 3, 0, 2, 1], ex: '1¹, 2², 3³, 4⁴ – jetzt 5⁵ = 3125.' },
    { id: 'tri-layer', cat: 'Bilder', type: 'number', q: 'Wie viele Dreiecke siehst du?', svg: triangle(2, [104]),
      a: 12, r: [2, 2, 1, 2, 0], ex: 'Oberhalb der Querlinie stecken 6 Dreiecke (wie ohne Linie), mit der Grundlinie unten noch einmal 6 = 12.' },
    { id: 'chimes', cat: 'Logik', type: 'number', q: 'Eine Turmuhr schlägt um 6 Uhr sechsmal. Vom ersten bis zum letzten Schlag vergehen 5 Sekunden. Wie viele Sekunden dauert es um 12 Uhr vom ersten bis zum letzten Schlag?',
      a: 11, r: [2, 1, 2, 1, 0], ex: '6 Schläge = 5 Pausen à 1 Sekunde. 12 Schläge = 11 Pausen = 11 Sekunden.' },
    { id: 'acfjo', cat: 'Sprache', type: 'text', q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['A', 'C', 'F', 'J', 'O', '?']),
      a: 'U', r: [2, 2, 0, 2, 0], ex: 'Im Alphabet +2, +3, +4, +5, dann +6: A(1) C(3) F(6) J(10) O(15) U(21).', letters: true },
    { id: 'handshakes', cat: 'Logik', type: 'number', q: 'Auf einer Party mit 6 Personen gibt jeder jedem genau einmal die Hand. Wie viele Händedrücke sind das?',
      a: 15, r: [2, 1, 1, 2, 0], ex: '5 + 4 + 3 + 2 + 1 = 15 (nicht 30 – jeder Händedruck zählt nur einmal).' },
    { id: 'snail', cat: 'Logik', type: 'number', q: 'Eine Schnecke sitzt am Boden eines 10 m tiefen Brunnens. Tagsüber kriecht sie 3 m hoch, nachts rutscht sie 2 m ab. An welchem Tag erreicht sie den Rand?',
      a: 8, r: [2, 1, 2, 1, 0], ex: 'Nach 7 Tagen und Nächten ist sie bei 7 m. Am 8. Tag schafft sie die letzten 3 m.' },
    { id: 'tier-code', cat: 'Sprache', type: 'text', q: 'A = 1, B = 2, C = 3 … Welches Wort ergeben diese Zahlen?' + seq([20, 9, 5, 18]),
      a: 'TIER', r: [1, 2, 0, 2, 0], ex: 'T ist der 20., I der 9., E der 5. und R der 18. Buchstabe: TIER.' },
    { id: 'month-days', cat: 'Zeit', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([31, 28, 31, 30, 31, 30, 31, '?']),
      a: 31, r: [1, 3, 1, 1, 1], ex: 'Die Tage der Monate: Januar 31, Februar 28 … Juli 31 – und der August hat wieder 31.' },
    { id: 'upside-down', cat: 'Zahlen', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([1, 8, 11, 69, 88, '?']),
      a: 96, r: [1, 4, 1, 1, 0], ex: 'Zahlen, die auf dem Kopf stehend gleich aussehen: 1, 8, 11, 69, 88, 96, 101 …' },
    { id: 'no-e', cat: 'Zahlen', type: 'number', q: 'Welche Zahl kommt als Nächstes?' + seq([5, 8, 12, 20, 25, '?']),
      a: 28, r: [2, 4, 1, 2, 0], ex: 'Zahlen, deren deutsches Zahlwort kein E enthält: fünf, acht, zwölf, zwanzig, fünfundzwanzig, achtundzwanzig.' },
    { id: 'straight-letters', cat: 'Sprache', type: 'text', q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['A', 'E', 'F', 'H', 'I', 'K', 'L', 'M', 'N', '?']),
      a: 'T', r: [2, 4, 2, 1, 0], ex: 'Großbuchstaben, die nur aus geraden Strichen bestehen. O, P, Q, R, S haben Rundungen – als Nächstes kommt T.', letters: true },
    { id: 'qwertz', cat: 'Sprache', type: 'text', q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['Q', 'A', 'Y', 'W', 'S', 'X', 'E', 'D', '?']),
      a: 'C', r: [1, 4, 1, 1, 1], ex: 'Die deutsche Tastatur, Spalte für Spalte von oben nach unten: Q-A-Y, W-S-X, E-D-C.', letters: true },
    { id: 'zero-square',cat: 'Zahlen', type: 'number', q: 'Welche Zahl (nicht 0) ergibt mit sich selbst multipliziert dasselbe wie mit sich selbst addiert?',
      a: 2, r: [1, 1, 0, 1, 0], ex: '2 × 2 = 4 und 2 + 2 = 4.' },
  ];

  // Musterfamilien: Fragen mit derselben Idee teilen sich eine Familie (nie zwei davon in einer Runde).
  const FAM = { 'tri-2': 'dreiecke-zaehlen', 'tri-layer': 'dreiecke-zaehlen', 'squares-seq': 'quadratzahlen', 'squares-down': 'quadratzahlen',
    'jfm': 'anfangsbuchstaben-reihe', 'mdm': 'anfangsbuchstaben-reihe', 'anagram-italy': 'anagramm-land', 'denmark': 'anagramm-land',
    'blumen': 'wortbruecke', 'tuer': 'wortbruecke', 'golf': 'syllogismus', 'syllogism': 'syllogismus' };
  Q.forEach(q => { q.fam = q.fam || FAM[q.id] || q.id; });
  root.QSVG = { svg, grid, triangle, clock, gears, gearPath, diceNet, cards, letterF, shapes, eq, seq };
  root.QUIZ_BANK = Q.concat(root.QUIZ_EXTRA || []);
  root.QUIZ_ADD = list => { root.QUIZ_BANK.push(...list); };
})(typeof window !== 'undefined' ? window : globalThis);
