// GENERIERT von tools/build-bank.js – nicht von Hand bearbeiten.
// ---- alltag.js ----
(function () {
  const { seq } = (typeof window !== 'undefined' ? window : globalThis).QSVG;
  QUIZ_ADD([
    // ---------- leicht / mittel ----------
    { id: 'a-zeiteinheiten', fam: 'zeiteinheiten-folge', cat: 'Zeit', type: 'choice',
      q: 'Was kommt als Nächstes?' + seq(['Sekunde', 'Minute', 'Stunde', 'Tag', '?']),
      opts: ['Woche', 'Monat', 'Jahr', 'Nacht'], a: 0, r: [1, 0, 0, 0, 0],
      ex: 'Die Zeiteinheiten werden immer größer: Nach dem Tag kommt die Woche.' },
    { id: 'a-ampel', fam: 'ampel-phasen', cat: 'Logik', type: 'choice',
      q: 'Eine normale Verkehrsampel in Deutschland zeigt gerade Grün. Was leuchtet als Nächstes?',
      opts: ['Gelb', 'Rot', 'Rot und Gelb zusammen', 'Grün und Gelb zusammen'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Die Reihenfolge ist Rot → Rot-Gelb → Grün → Gelb → Rot. Nach Grün kommt Gelb allein.' },
    { id: 'a-abc-tiere', fam: 'abc-anfangsbuchstaben', cat: 'Logik', type: 'choice',
      q: 'Welches Tier setzt die Reihe fort?' + seq(['Affe', 'Bär', 'Chamäleon', 'Dachs', '?']),
      opts: ['Esel', 'Fuchs', 'Zebra', 'Igel'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Die Anfangsbuchstaben laufen durchs Alphabet: A, B, C, D – dann E wie Esel.' },
    { id: 'a-schulnoten', fam: 'schulnoten-folge', cat: 'Logik', type: 'choice',
      q: 'Was kommt als Nächstes?' + seq(['sehr gut', 'gut', 'befriedigend', '?']),
      opts: ['ausreichend', 'mangelhaft', 'ungenügend', 'durchschnittlich'], a: 0, r: [1, 0, 1, 0, 1],
      ex: 'Schulnoten 1 bis 6: sehr gut, gut, befriedigend, ausreichend, mangelhaft, ungenügend.' },
    { id: 'a-metamorphose', fam: 'entwicklung-schmetterling', cat: 'Logik', type: 'choice',
      q: 'Was kommt als Nächstes?' + seq(['Ei', 'Raupe', 'Puppe', '?']),
      opts: ['Schmetterling', 'Kokon', 'Larve', 'Nest'], a: 0, r: [1, 1, 0, 0, 1],
      ex: 'Aus dem Ei schlüpft die Raupe, sie verpuppt sich, und aus der Puppe schlüpft der Schmetterling.' },
    { id: 'a-notenwerte', fam: 'notenwerte-halbieren', cat: 'Logik', type: 'text',
      q: 'Welches Wort kommt als Nächstes?' + seq(['Ganze', 'Halbe', 'Viertel', '?']),
      a: 'ACHTEL', accept: ['ACHTELNOTE', 'ACHTELNOTEN'], contains: ['ACHTEL'], r: [1, 1, 0, 0, 1],
      ex: 'Jedes Mal wird halbiert – wie bei den Notenwerten: Ganze, Halbe, Viertel, Achtel.' },
    { id: 'a-frage-endwort', fam: 'selbstbezug-frage', cat: 'Logik', type: 'text',
      q: 'Mit welchem Wort endet diese Frage?',
      a: 'FRAGE', r: [1, 1, 0, 0, 0],
      ex: 'Einfach hinschauen: Das letzte Wort der Frage ist „Frage“.' },
    { id: 'a-monate-dreier', fam: 'monate-ueberspringen', cat: 'Zeit', type: 'text',
      q: 'Welcher Monat kommt als Nächstes?' + seq(['Januar', 'April', 'Juli', '?']),
      a: 'OKTOBER', r: [1, 1, 0, 1, 0],
      ex: 'Es geht immer drei Monate weiter – jeweils der erste Monat eines Quartals: Januar, April, Juli, Oktober.' },
    { id: 'a-tage-jeder-zweite', fam: 'wochentage-ueberspringen', cat: 'Zeit', type: 'text',
      q: 'Welcher Wochentag kommt als Nächstes?' + seq(['Montag', 'Mittwoch', 'Freitag', 'Sonntag', '?']),
      a: 'DIENSTAG', r: [1, 1, 1, 0, 0],
      ex: 'Immer ein Tag wird übersprungen. Nach Sonntag kommt Montag (übersprungen), dann Dienstag.' },
    { id: 'a-wortkette', fam: 'wortkette-endbuchstabe', cat: 'Logik', type: 'choice',
      q: 'Welches Wort setzt die Reihe fort?' + seq(['HUND', 'DACH', 'HASE', 'EIMER', '?']),
      opts: ['RABE', 'APFEL', 'ESEL', 'NASE'], a: 0, r: [1, 2, 0, 0, 0],
      ex: 'Jedes Wort beginnt mit dem letzten Buchstaben des vorigen: HunD – DacH – HasE – EimeR – Rabe.' },
    { id: 'a-dritter-j', fam: 'monate-anfangsbuchstabe-j', cat: 'Zeit', type: 'text',
      q: 'Welcher Monat ist im Jahr der <b>dritte</b>, dessen Name mit J beginnt?',
      a: 'JULI', r: [1, 1, 1, 0, 0],
      ex: 'Die J-Monate sind Januar, Juni und Juli – der dritte ist der Juli.' },
    { id: 'a-handschuh', fam: 'raetsel-schuh', cat: 'Logik', type: 'text',
      q: 'Welchen Schuh zieht man niemals über einen Fuß?',
      a: 'HANDSCHUH', accept: ['HANDSCHUHE', 'HEMMSCHUH', 'BREMSSCHUH'], r: [1, 2, 0, 0, 0],
      ex: 'Den Handschuh – er heißt Schuh, gehört aber an die Hand.' },
    { id: 'a-lang-klein', fam: 'namen-gegen-eigenschaft', cat: 'Logik', type: 'choice',
      q: 'Herr Lang ist klein. Herr Klein ist lang. Wer von beiden ist größer?',
      opts: ['Herr Klein', 'Herr Lang', 'Beide gleich', 'Kann man nicht wissen'], a: 0, r: [1, 1, 1, 0, 0],
      ex: 'Die Namen sagen nichts: Herr Klein ist lang, also ist er der Größere.' },
    { id: 'a-datum-nie', fam: 'datum-gibt-es-nicht', cat: 'Zeit', type: 'choice',
      q: 'Welches Datum gibt es in keinem einzigen Jahr?',
      opts: ['31. Juni', '29. Februar', '31. Mai', '31. Oktober'], a: 0, r: [1, 1, 1, 0, 1],
      ex: 'Der Juni hat nur 30 Tage. Den 29. Februar gibt es immerhin in jedem Schaltjahr.' },
    { id: 'a-gleich-lang', fam: 'monatslaenge-ausreisser', cat: 'Zeit', type: 'choice',
      q: 'Drei dieser Monate sind gleich lang. Welcher nicht?',
      opts: ['Oktober', 'April', 'Juni', 'September'], a: 0, r: [1, 1, 1, 0, 1],
      ex: 'April, Juni und September haben je 30 Tage, der Oktober hat 31.' },

    // ---------- schwer ----------
    { id: 'a-richtung', fam: 'himmelsrichtung-abbiegen', cat: 'Logik', type: 'text',
      q: 'Du gehst nach Norden. Dann biegst du zweimal rechts ab und danach einmal links ab. In welche Himmelsrichtung gehst du jetzt?',
      a: 'OSTEN', accept: ['OST'], r: [2, 1, 0, 1, 0],
      ex: 'Norden → rechts → Osten → rechts → Süden → links → Osten.' },
    { id: 'a-nicht-kino', fam: 'doppelte-verneinung', cat: 'Logik', type: 'choice',
      q: 'Ole sagt die Wahrheit: „Es stimmt nicht, dass ich gestern nicht im Kino war.“ War Ole gestern im Kino?',
      opts: ['Ja', 'Nein', 'Kann man nicht wissen'], a: 0, noShuffle: true, r: [1, 2, 1, 0, 0],
      ex: 'Ole sagt: Die Behauptung „ich war nicht im Kino“ stimmt nicht. Also war er im Kino – zwei Verneinungen heben sich auf.' },
    { id: 'a-b-vokale', fam: 'vokal-reihenfolge', cat: 'Logik', type: 'choice',
      q: 'Welches Wort setzt die Reihe fort?' + seq(['BAD', 'BETT', 'BILD', 'BOOT', '?']),
      opts: ['BUCH', 'BAUM', 'BERG', 'BROT'], a: 0, r: [1, 2, 1, 0, 0],
      ex: 'Nach dem B kommen die Vokale der Reihe nach: A, E, I, O – dann U wie BUCH.' },
    { id: 'a-name', fam: 'raetsel-besitz', cat: 'Logik', type: 'text',
      q: 'Es gehört dir ganz allein – trotzdem benutzen es andere viel öfter als du selbst. Was ist es?',
      a: 'NAME', accept: ['NAMEN', 'VORNAME', 'VORNAMEN', 'DEINNAME'], contains: ['NAME'], r: [1, 2, 1, 0, 0],
      ex: 'Dein Name: Er gehört dir, aber vor allem andere sprechen dich damit an.' },
    { id: 'a-gegenueber', fam: 'perspektive-links-rechts', cat: 'Logik', type: 'choice',
      q: 'Anna und Ben stehen sich gegenüber und schauen sich an. Anna streckt ihren <b>linken</b> Arm zur Seite. Auf welcher Seite ist dieser Arm – von Ben aus gesehen?',
      opts: ['Rechts', 'Links', 'Kommt darauf an'], a: 0, noShuffle: true, r: [1, 2, 2, 0, 0],
      ex: 'Wer sich gegenübersteht, hat links und rechts vertauscht: Annas links ist Bens rechts.' },
    { id: 'a-flunkern-schach', fam: 'wer-flunkert', cat: 'Logik', type: 'choice',
      q: 'Drei Kinder erzählen vom Wochenende. Mia: „Beim Fußball habe ich ein Kopfballtor geschossen.“ Lars: „Beim Schach hatte ich Schwarz und durfte anfangen.“ Ida: „Beim Tennis habe ich einen Satz 6:4 gewonnen.“ Wer flunkert?',
      opts: ['Lars', 'Mia', 'Ida'], a: 0, r: [2, 2, 1, 0, 1],
      ex: 'Beim Schach macht immer Weiß den ersten Zug. Wer Schwarz hat, darf nicht anfangen.' },
    { id: 'a-februar-gleich', fam: 'monat-gleicher-wochentag', cat: 'Zeit', type: 'choice',
      q: 'Welcher Monat kann am selben Wochentag beginnen und enden?',
      opts: ['Februar', 'Januar', 'April', 'Keiner'], a: 0, r: [2, 2, 2, 1, 0],
      ex: 'Erster und letzter Tag fallen nur dann auf denselben Wochentag, wenn der Monat 29 Tage hat (vom 1. bis zum 29. sind es genau 28 Tage = 4 Wochen) – das ist der Februar im Schaltjahr.' },
    { id: 'a-buchseiten', fam: 'wer-flunkert', cat: 'Logik', type: 'choice',
      q: 'In einem normalen Buch ist Seite 1 eine rechte Seite. Drei Kinder haben je einen Geldschein darin versteckt. Ali: „Zwischen Seite 20 und 21.“ Bea: „Zwischen Seite 35 und 36.“ Cem: „Zwischen Seite 50 und 51.“ Wer flunkert?',
      opts: ['Bea', 'Ali', 'Cem'], a: 0, r: [2, 3, 2, 0, 0],
      ex: 'Ist Seite 1 rechts, stehen ungerade Seiten immer vorn auf einem Blatt und die nächste gerade Seite auf dessen Rückseite. 35 und 36 sind also dasselbe Blatt – dazwischen passt nichts. 20|21 und 50|51 liegen sich im aufgeschlagenen Buch gegenüber.' },
    { id: 'a-hahn-ei', fam: 'falsche-voraussetzung', cat: 'Logik', type: 'choice',
      q: 'Ein Hahn sitzt genau auf dem Dachfirst einer Scheune und legt ein Ei. Auf welche Seite rollt es?',
      opts: ['Auf keine – Hähne legen keine Eier', 'Nach links', 'Nach rechts', 'Es bleibt oben liegen'], a: 0, r: [1, 1, 2, 0, 0],
      ex: 'Eier legen nur Hennen. Der Hahn legt gar keins.' },
    { id: 'a-dreisilbig', fam: 'autologisch', cat: 'Logik', type: 'choice',
      q: 'Welches dieser Wörter beschreibt sich selbst richtig?',
      opts: ['dreisilbig', 'einsilbig', 'zweisilbig', 'viersilbig'], a: 0, r: [2, 3, 1, 1, 0],
      ex: 'Alle vier Wörter haben drei Silben (drei-sil-big, ein-sil-big …). Nur „dreisilbig“ stimmt also für sich selbst.' },
    { id: 'a-beine', fam: 'tiere-nach-beinen', cat: 'Logik', type: 'choice',
      q: 'Welches Tier setzt die Reihe fort?' + seq(['Wurm', 'Huhn', 'Pferd', 'Käfer', '?']),
      opts: ['Spinne', 'Fisch', 'Vogel', 'Hund'], a: 0, r: [2, 3, 1, 1, 1],
      ex: 'Die Zahl der Beine steigt um zwei: Wurm 0, Huhn 2, Pferd 4, Käfer 6 – die Spinne hat 8.' },
    { id: 'a-witwe', fam: 'falsche-voraussetzung', cat: 'Logik', type: 'choice',
      q: 'Darf ein Mann in Deutschland die Schwester seiner Witwe heiraten?',
      opts: ['Ja, das ist erlaubt', 'Nein, das ist verboten', 'Nur mit Sondergenehmigung', 'Das geht nicht – er ist tot'], a: 3, r: [1, 3, 2, 0, 0],
      ex: 'Wer eine Witwe hinterlässt, ist gestorben. Ein Toter kann niemanden mehr heiraten.' },
    { id: 'a-eigelb', fam: 'grammatik-falle-inhalt', cat: 'Logik', type: 'choice',
      q: 'Welcher Satz ist richtig?',
      opts: ['„Das Eigelb ist weiß.“', '„Das Eigelb sind weiß.“', 'Beide', 'Keiner von beiden'], a: 3, noShuffle: true, r: [1, 2, 3, 0, 0],
      ex: 'Grammatisch passt „ist“ – aber Eigelb ist gelb, nicht weiß. Beide Sätze sind falsch.' },
    { id: 'a-doppelwort', fam: 'doppeltes-wort-uebersehen', cat: 'Logik', type: 'text',
      q: 'In diesem Satz ist genau ein Wort zu viel. Welches?<br><b>„Am Wochenende fahren wir mit dem dem Zug an die See.“</b>',
      a: 'DEM', r: [1, 2, 1, 0, 0],
      ex: '„dem“ steht zweimal hintereinander – das Auge überliest die Wiederholung leicht.' },
    { id: 'a-alphabet-rueck', fam: 'antwort-in-frage', cat: 'Logik', type: 'text',
      q: 'Du sagst das Alphabet rückwärts auf: Z, Y, X … Welcher Buchstabe kommt dabei direkt nach dem Buchstaben, den du direkt vor dem M sagst?',
      a: 'M', letters: true, r: [2, 2, 2, 0, 0],
      ex: 'Rückwärts sagst du … N, M, L … Direkt vor M sagst du N, und direkt nach N kommt wieder M.' },
    { id: 'a-satz-kette', fam: 'antwort-in-frage', cat: 'Logik', type: 'text',
      q: 'Welches Wort steht in diesem Satz direkt vor dem Wort, das direkt nach „Satz“ steht?',
      a: 'SATZ', r: [2, 2, 1, 0, 0],
      ex: 'Nach „Satz“ kommt „direkt“ – und direkt davor steht natürlich wieder „Satz“.' },
    { id: 'a-kompass', fam: 'initialen-kreislauf', cat: 'Logik', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['N', 'O', 'S', 'W', '?']),
      a: 'N', accept: ['NORDEN', 'NORD'], letters: true, r: [1, 3, 1, 0, 0],
      ex: 'Die Himmelsrichtungen im Uhrzeigersinn: Norden, Osten, Süden, Westen – und wieder Norden.' },
    { id: 'a-jahreszeiten-initialen', fam: 'initialen-kreislauf', cat: 'Zeit', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['F', 'S', 'H', '?']),
      a: 'W', accept: ['WINTER'], letters: true, r: [1, 2, 1, 0, 0],
      ex: 'Die Jahreszeiten: Frühling, Sommer, Herbst – dann Winter.' },
    { id: 'a-himmel-erde', fam: 'woertlich-nehmen', cat: 'Logik', type: 'text',
      q: 'Welches Wort mit drei Buchstaben steht zwischen Himmel und Erde?',
      a: 'UND', r: [1, 3, 1, 0, 0],
      ex: 'Wörtlich gelesen: In „Himmel und Erde“ steht zwischen den beiden Wörtern das Wort „und“.' },
    { id: 'a-tag-autofahrer', fam: 'raetsel-sicht-ohne-licht', cat: 'Logik', type: 'text',
      q: 'Ein Auto fährt ohne Licht auf einer Landstraße ohne Laternen, der Mond scheint nicht. Ein ganz in Schwarz gekleideter Mann überquert die Straße – der Fahrer sieht ihn und bremst rechtzeitig. Wie ist das möglich? (Ein Wort)',
      a: 'TAG', accept: ['TAGSÜBER', 'HELL', 'MITTAG', 'TAGESLICHT', 'HELLERTAG', 'HELLLICHTERTAG', 'SONNENSCHEIN', 'TAGHELL'], r: [1, 3, 1, 0, 0],
      ex: 'Es war heller Tag (die Sonne schien) – dann braucht man weder Scheinwerfer noch Mond.' },

    // ---------- sehr schwer ----------
    { id: 'a-kiwi', fam: 'anweisung-woertlich', cat: 'Logik', type: 'text',
      q: 'Streiche SECHS BUCHSTABEN – dann bleibt ein Obst übrig. Welches?<br><b>S K E C H S I B U C H W S T A B E I N</b>',
      a: 'KIWI', accept: ['KIWIS'], r: [2, 4, 2, 1, 0],
      ex: 'Nicht sechs Buchstaben streichen, sondern die Buchstaben von S-E-C-H-S B-U-C-H-S-T-A-B-E-N. Übrig bleiben K, I, W, I.' },
    { id: 'a-lese-esel', fam: 'rueckwaerts-tier-in-frage', cat: 'Logik', type: 'text',
      q: 'Ich lese dir jetzt eine Frage vor: Welches Wort hier ergibt rückwärts gelesen ein Tier?',
      a: 'LESE', r: [2, 3, 1, 2, 0],
      ex: '„lese“ rückwärts ist ESEL. Kein anderes Wort im Text wird rückwärts zu einem Tier.' },
    { id: 'a-fotografin', fam: 'raetsel-beruf-doppelsinn', cat: 'Logik', type: 'text',
      q: 'Eine Frau schießt ihren Mann, hält ihn eine Weile unter Wasser und hängt ihn danach zum Trocknen auf. Abends gehen beide fröhlich essen. Welchen Beruf hat die Frau?',
      a: 'FOTOGRAFIN', accept: ['FOTOGRAF', 'PHOTOGRAPHIN', 'FOTOGRAPHIN'], contains: ['FOTOGRAF', 'PHOTOGRAPH', 'FOTOGRAPH'], r: [2, 3, 1, 0, 1],
      ex: 'Sie schießt ein Foto von ihm, entwickelt es im Wasserbad und hängt den Abzug zum Trocknen auf.' },
    { id: 'a-mitte-i', fam: 'mitte-des-wortes', cat: 'Logik', type: 'text',
      q: 'Was steckt genau in der Mitte von Mainz, genau in der Mitte von Trier und genau in der Mitte vom Nil?',
      a: 'I', accept: ['DASI', 'BUCHSTABEI', 'DERBUCHSTABEI'], letters: true, r: [1, 3, 2, 0, 0],
      ex: 'Gemeint sind die Wörter: MA-I-NZ, TR-I-ER, N-I-L – in der Mitte steht jedes Mal ein I.' },
    { id: 'a-juni-kette', fam: 'kalender-alphabetisch', cat: 'Zeit', type: 'text',
      q: 'Ordne die zwölf Monatsnamen alphabetisch. Welcher steht dann direkt hinter dem Monat, der im Kalender auf den Juni folgt?',
      a: 'JUNI', r: [3, 2, 2, 1, 0],
      ex: 'Auf den Juni folgt der Juli. Alphabetisch: Januar, Juli, Juni – direkt hinter dem Juli steht also der Juni.' },
    { id: 'a-august', fam: 'monatslaenge-nachbar', cat: 'Zeit', type: 'text',
      q: 'Welcher Monat hat genau so viele Tage wie der Monat direkt vor ihm im selben Jahr?',
      a: 'AUGUST', r: [2, 2, 1, 1, 1],
      ex: 'Juli und August haben beide 31 Tage. Bei allen anderen Nachbarn im selben Jahr wechselt die Länge.' },
    { id: 'a-buchstabe-e', fam: 'raetsel-buchstabe', cat: 'Zeit', type: 'text',
      q: 'Ich stehe am Anfang jedes Endes, am Schluss jeder Woche und zweimal in jeder Sekunde – aber nie in einem Monat. Was bin ich?',
      a: 'E', accept: ['DASE', 'BUCHSTABEE', 'DERBUCHSTABEE'], letters: true, r: [2, 3, 1, 0, 0],
      ex: 'Der Buchstabe E: ENDE beginnt mit E, WOCHE endet mit E, SEKUNDE hat zwei E, MONAT hat keins.' },
    { id: 'a-vokal-fehlt', fam: 'selbstbezug-frage', cat: 'Logik', type: 'text',
      q: 'Welcher Vokal kommt in dieser Frage nicht vor?',
      a: 'U', accept: ['Ä', 'Ö', 'Ü', 'Y'], letters: true, r: [1, 3, 1, 1, 0],
      ex: 'In „Welcher Vokal kommt in dieser Frage nicht vor?“ stecken A, E, I und O – aber kein U.' },
    { id: 'a-falsch', fam: 'wort-meint-sich-selbst', cat: 'Logik', type: 'text',
      q: 'Welches Wort schreibt jeder Mensch falsch – sogar jemand, der nie einen Rechtschreibfehler macht?',
      a: 'FALSCH', r: [1, 3, 2, 0, 0],
      ex: 'Das Wort „falsch“: Richtig geschrieben wird es immer f-a-l-s-c-h – also „falsch“.' },
    { id: 'a-jedes-tier', fam: 'woertlich-nehmen', cat: 'Logik', type: 'choice',
      q: 'Welche Tiere können höher springen als ein Haus?',
      opts: ['Alle, die überhaupt springen können', 'Nur Flöhe', 'Nur Kängurus', 'Nur Heuschrecken'], a: 0, r: [1, 3, 2, 0, 0],
      ex: 'Ein Haus kann gar nicht springen. Jedes Tier, das springen kann, springt also höher als ein Haus.' },
  ]);
})();

// ---- bilder.js ----
// Bilderrätsel (Kategorie „Bilder“) – alle Grafiken werden hier als SVG erzeugt.
(function () {
  const { svg } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // ---------- kleine Bausteine ----------
  const PINK = '#ff7ab6', CYAN = '#22d3ee', GOLD = '#ffc940', WHITE = '#f3f4ff', VIOLET = '#a78bfa', DARK = '#1a1240';
  const f1 = (v) => Math.round(v * 10) / 10;
  const pts = (arr) => arr.map(([x, y]) => `${f1(x)},${f1(y)}`).join(' ');
  const ln = (x1, y1, x2, y2, extra = '') => `<line class="ln" x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}"${extra ? ' ' + extra : ''}/>`;
  const tx = (x, y, t, size = 16, extra = '') => `<text class="tx" x="${f1(x)}" y="${f1(y)}" text-anchor="middle" font-size="${size}" font-weight="700"${extra ? ' ' + extra : ''}>${t}</text>`;
  const poly = (arr, extra) => `<polygon points="${pts(arr)}" ${extra}/>`;
  const lnPoly = (arr) => `<polygon class="ln" points="${pts(arr)}"/>`;
  const ngon = (cx, cy, r, n, rot = -90) => Array.from({ length: n }, (_, i) => {
    const a = (rot + i * 360 / n) * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });
  const ABCD = (xs, y) => xs.map((x, i) => tx(x, y, 'ABCD'[i], 16)).join('');

  // Sieben-Segment-Ziffer (Segmente a–g), leuchtend in Gold, aus dunkel angedeutet
  const SEG = { 0: 'abcdef', 1: 'bc', 2: 'abged', 3: 'abgcd', 4: 'fgbc', 5: 'afgcd', 6: 'afgedc', 7: 'abc', 8: 'abcdefg', 9: 'abcdfg' };
  function segDigit(x, y, w, h, d, { off = true, color = GOLD, sw = 6 } = {}) {
    const g = 4, hh = h / 2;
    const S = {
      a: [x + g, y, x + w - g, y], b: [x + w, y + g, x + w, y + hh - g], c: [x + w, y + hh + g, x + w, y + h - g],
      d: [x + g, y + h, x + w - g, y + h], e: [x, y + hh + g, x, y + h - g], f: [x, y + g, x, y + hh - g], g: [x + g, y + hh, x + w - g, y + hh],
    };
    let s = '';
    for (const k of 'abcdefg') {
      const on = SEG[d].includes(k);
      if (!on && !off) continue;
      const [x1, y1, x2, y2] = S[k];
      s += `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke="${on ? color : 'rgba(255,255,255,.08)'}" stroke-width="${sw}" stroke-linecap="round"/>`;
    }
    return s;
  }

  // Streichholz
  function stick(x1, y1, x2, y2) {
    return `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke="#f4d58d" stroke-width="5" stroke-linecap="round"/>` +
      `<circle cx="${f1(x2)}" cy="${f1(y2)}" r="4.2" fill="#ef4444"/>`;
  }
  // Streichholz-Ziffer (Segmente als Hölzer)
  function stickDigit(x, y, w, h, d) {
    const g = 5, hh = h / 2;
    const S = {
      a: [x + g, y, x + w - g, y], b: [x + w, y + g, x + w, y + hh - g], c: [x + w, y + hh + g, x + w, y + h - g],
      d: [x + g, y + h, x + w - g, y + h], e: [x, y + hh + g, x, y + h - g], f: [x, y + g, x, y + hh - g], g: [x + g, y + hh, x + w - g, y + hh],
    };
    return [...SEG[d]].map(k => stick(...S[k])).join('');
  }

  // Isometrische Würfel: Betrachter schaut von (+x,+y,+z)
  function isoCubes(list, { ox = 150, oy = 60, c = 26, top = '#a5f3fc', left = '#22d3ee', right = '#0e7490', stroke = '#0a0d24' } = {}) {
    const a = c * Math.cos(Math.PI / 6), b = c * 0.5;
    const P = (x, y, z) => [ox + (x - y) * a, oy + (x + y) * b - z * c];
    const sorted = [...list].sort((p, q) => (p[0] + p[1] + p[2]) - (q[0] + q[1] + q[2]) || p[2] - q[2]);
    let s = '';
    for (const cube of sorted) {
      const [x, y, z, col] = cube;
      const T = col && col.top || top, L = col && col.left || left, R = col && col.right || right;
      s += poly([P(x, y, z + 1), P(x + 1, y, z + 1), P(x + 1, y + 1, z + 1), P(x, y + 1, z + 1)], `fill="${T}" stroke="${stroke}" stroke-width="1.6" stroke-linejoin="round"`);
      s += poly([P(x + 1, y, z), P(x + 1, y + 1, z), P(x + 1, y + 1, z + 1), P(x + 1, y, z + 1)], `fill="${R}" stroke="${stroke}" stroke-width="1.6" stroke-linejoin="round"`);
      s += poly([P(x, y + 1, z), P(x + 1, y + 1, z), P(x + 1, y + 1, z + 1), P(x, y + 1, z + 1)], `fill="${L}" stroke="${stroke}" stroke-width="1.6" stroke-linejoin="round"`);
    }
    return { s, P };
  }

  // Ein einzelner Würfel mit Zahlen auf oben / links / rechts
  function isoNumberCube(ox, oy, c, t, l, r) {
    const { s, P } = isoCubes([[0, 0, 0]], { ox, oy, c, top: '#ede9fe', left: '#c4b5fd', right: '#a78bfa' });
    const mid = (arr) => [arr.reduce((u, p) => u + p[0], 0) / arr.length, arr.reduce((u, p) => u + p[1], 0) / arr.length];
    const T = mid([P(0, 0, 1), P(1, 0, 1), P(1, 1, 1), P(0, 1, 1)]);
    const R = mid([P(1, 0, 0), P(1, 1, 0), P(1, 1, 1), P(1, 0, 1)]);
    const L = mid([P(0, 1, 0), P(1, 1, 0), P(1, 1, 1), P(0, 1, 1)]);
    const num = ([x, y], n) => `<text x="${f1(x)}" y="${f1(y + 7)}" text-anchor="middle" font-size="20" font-weight="800" fill="${DARK}">${n}</text>`;
    return s + num(T, t) + num(L, l) + num(R, r);
  }

  // Würfelaugen auf einem Quadrat
  function pips(x, y, size, n, fill = DARK) {
    const q = size / 4, cx = x + size / 2, cy = y + size / 2;
    const P = { tl: [x + q, y + q], tr: [x + 3 * q, y + q], ml: [x + q, cy], mr: [x + 3 * q, cy], bl: [x + q, y + 3 * q], br: [x + 3 * q, y + 3 * q], c: [cx, cy] };
    const L = { 1: ['c'], 2: ['tr', 'bl'], 3: ['tr', 'c', 'bl'], 4: ['tl', 'tr', 'bl', 'br'], 5: ['tl', 'tr', 'c', 'bl', 'br'], 6: ['tl', 'tr', 'ml', 'mr', 'bl', 'br'] }[n];
    return L.map(k => `<circle cx="${f1(P[k][0])}" cy="${f1(P[k][1])}" r="${f1(size / 11)}" fill="${fill}"/>`).join('');
  }

  // Balkenwaage mit Gegenständen links und rechts
  function balance(cx, cy, left, right, w = 110) {
    const item = (kind, x, y) => kind === 'T'
      ? poly([[x, y - 18], [x + 10, y], [x - 10, y]], `fill="${GOLD}"`)
      : kind === 'Q' ? `<rect x="${x - 9}" y="${y - 18}" width="18" height="18" fill="${PINK}"/>`
        : `<circle cx="${x}" cy="${y - 9}" r="9" fill="${CYAN}"/>`;
    const drop = 64, half = 44;
    let s = ln(cx, cy, cx, cy + drop + 14) + ln(cx - 22, cy + drop + 14, cx + 22, cy + drop + 14) + ln(cx - w / 2, cy, cx + w / 2, cy);
    s += `<circle cx="${cx}" cy="${cy}" r="4" class="accent"/>`;
    for (const [side, items] of [[-1, left], [1, right]]) {
      const px = cx + side * w / 2;
      s += `<path d="M ${px - half} ${cy + drop} L ${px} ${cy} L ${px + half} ${cy + drop}" fill="none" stroke="#b9bde8" stroke-width="1.5"/>`;
      s += ln(px - half, cy + drop, px + half, cy + drop);
      const n = items.length, gap = 21;
      items.forEach((k, i) => { s += item(k, px + (i - (n - 1) / 2) * gap, cy + drop - 2); });
    }
    return s;
  }

  // Analoguhr in klein
  function miniClock(cx, cy, r, h, m, { minute = true, numbers = false } = {}) {
    let s = `<circle class="ln face" cx="${cx}" cy="${cy}" r="${r}"/>`;
    for (let i = 0; i < 12; i++) {
      const a = i * Math.PI / 6, r1 = i % 3 ? r * 0.86 : r * 0.76;
      s += `<line class="ln" x1="${f1(cx + r1 * Math.sin(a))}" y1="${f1(cy - r1 * Math.cos(a))}" x2="${f1(cx + r * 0.97 * Math.sin(a))}" y2="${f1(cy - r * 0.97 * Math.cos(a))}" stroke-width="2"/>`;
      if (numbers) s += tx(cx + r * 0.6 * Math.sin(a), cy - r * 0.6 * Math.cos(a) + 5, i === 0 ? 12 : i, r * 0.17);
    }
    const ha = ((h % 12) + m / 60) * Math.PI / 6, ma = m * Math.PI / 30;
    s += `<line class="hand" x1="${cx}" y1="${cy}" x2="${f1(cx + r * 0.5 * Math.sin(ha))}" y2="${f1(cy - r * 0.5 * Math.cos(ha))}" stroke-width="${f1(r / 9)}"/>`;
    if (minute) s += `<line class="hand" x1="${cx}" y1="${cy}" x2="${f1(cx + r * 0.78 * Math.sin(ma))}" y2="${f1(cy - r * 0.78 * Math.cos(ma))}" stroke-width="${f1(r / 16)}"/>`;
    s += `<circle class="accent" cx="${cx}" cy="${cy}" r="${f1(r / 14)}"/>`;
    return s;
  }

  const arrowDefs = `<defs><marker id="bah" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${GOLD}"/></marker></defs>`;
  const arrow = (d) => `<path d="${d}" fill="none" stroke="${GOLD}" stroke-width="3.5" marker-end="url(#bah)"/>`;

  // ---------- Grafiken ----------

  // E: pinke Kreise zählen
  function svgPinkCircles() {
    const items = [
      ['c', PINK], ['q', CYAN], ['c', CYAN], ['t', PINK], ['c', PINK], ['q', PINK],
      ['t', GOLD], ['c', PINK], ['c', GOLD], ['q', PINK], ['c', CYAN], ['t', CYAN],
      ['c', PINK], ['q', GOLD],
    ];
    let s = '';
    items.forEach(([k, col], i) => {
      const x = 28 + (i % 7) * 40, y = 40 + Math.floor(i / 7) * 60 + (i % 2) * 10;
      if (k === 'c') s += `<circle cx="${x}" cy="${y}" r="14" fill="${col}"/>`;
      else if (k === 'q') s += `<rect x="${x - 13}" y="${y - 13}" width="26" height="26" fill="${col}"/>`;
      else s += poly([[x, y - 15], [x + 15, y + 12], [x - 15, y + 12]], `fill="${col}"`);
    });
    return svg('0 0 300 140', s);
  }

  // E: Ecken aller Formen zusammen
  function svgCornerSum() {
    let s = '';
    s += poly(ngon(45, 70, 34, 3), `fill="${PINK}"`);
    s += `<rect x="92" y="42" width="56" height="56" fill="${CYAN}"/>`;
    s += poly(ngon(198, 72, 34, 5), `fill="${GOLD}"`);
    s += `<circle cx="268" cy="72" r="26" fill="${VIOLET}"/>`;
    return svg('0 0 300 130', s);
  }


  // E: Spiegelbild einer Fahne
  function svgMirrorFlag() {
    const flag = (x, y, t) => `<g transform="translate(${x},${y}) ${t}"><line x1="0" y1="-24" x2="0" y2="24" stroke="${WHITE}" stroke-width="4" stroke-linecap="round"/>` +
      `<polygon points="0,-24 26,-14 0,-4" fill="${PINK}"/></g>`;
    let s = flag(120, 44, '') + `<line x1="170" y1="12" x2="170" y2="78" stroke="${GOLD}" stroke-width="2.5" stroke-dasharray="6 5"/>`;
    const opts = ['rotate(180)', '', 'scale(-1,1)', 'scale(1,-1)'];
    opts.forEach((t, i) => { s += flag(45 + i * 70, 134, t) + tx(45 + i * 70, 186, 'ABCD'[i]); });
    return svg('0 0 290 196', s);
  }

  // E: einfache Waage
  function svgBalance1() {
    return svg('0 0 260 110', balance(130, 14, ['T'], ['K', 'K'], 160));
  }

  // E: Würfelaugen addieren
  function svgDiceSum() {
    let s = '';
    [3, 5, 6].forEach((n, i) => {
      const x = 22 + i * 92;
      s += `<rect x="${x}" y="22" width="74" height="74" rx="12" fill="#f8f7ff" stroke="#c7c3f5" stroke-width="2"/>`;
      s += pips(x, 22, 74, n);
    });
    return svg('0 0 300 118', s);
  }

  // E: Kreis in Achtel, 2 gefärbt
  function svgPie() {
    const cx = 100, cy = 95, r = 80;
    let s = '';
    for (let i = 0; i < 8; i++) {
      const a1 = (i * 45 - 90) * Math.PI / 180, a2 = ((i + 1) * 45 - 90) * Math.PI / 180;
      const fill = (i === 1 || i === 4) ? GOLD : 'rgba(255,255,255,.05)';
      s += `<path d="M ${cx} ${cy} L ${f1(cx + r * Math.cos(a1))} ${f1(cy + r * Math.sin(a1))} A ${r} ${r} 0 0 1 ${f1(cx + r * Math.cos(a2))} ${f1(cy + r * Math.sin(a2))} Z" fill="${fill}" stroke="${WHITE}" stroke-width="2.5" stroke-linejoin="round"/>`;
    }
    return svg('0 0 200 190', s);
  }

  // E: Pfeilfolge
  function svgArrowTurn() {
    let s = '';
    const rots = [0, 90, 180, null];
    rots.forEach((r, i) => {
      const x = 12 + i * 70;
      s += `<rect class="cell" x="${x}" y="14" width="58" height="58" rx="8"/>`;
      if (r === null) s += tx(x + 29, 54, '?', 30);
      else s += `<g transform="translate(${x + 29},43) rotate(${r})"><path d="M -18 0 H 10" stroke="${GOLD}" stroke-width="6" stroke-linecap="round"/><polygon points="20,0 6,-11 6,11" fill="${GOLD}"/></g>`;
    });
    return svg('0 0 292 86', s);
  }

  // E: Streichhölzer, drei Quadrate in einer Reihe
  function svgStickRow() {
    let s = '';
    const x0 = 30, y0 = 30, L = 70;
    for (let i = 0; i < 3; i++) {
      s += stick(x0 + i * L + 6, y0, x0 + (i + 1) * L - 6, y0);
      s += stick(x0 + i * L + 6, y0 + L, x0 + (i + 1) * L - 6, y0 + L);
    }
    for (let i = 0; i <= 3; i++) s += stick(x0 + i * L, y0 + L - 6, x0 + i * L, y0 + 6);
    return svg('0 0 270 130', s);
  }

  // E: Farbfolge
  function svgColorSeq() {
    const cols = [PINK, CYAN, CYAN, GOLD, PINK, CYAN, CYAN, GOLD, PINK];
    let s = cols.map((c, i) => `<circle cx="${18 + i * 29}" cy="30" r="11" fill="${c}"/>`).join('');
    s += tx(18 + 9 * 29, 38, '?', 24);
    return svg('0 0 300 60', s);
  }

  // E: Puzzleteil
  function svgPuzzle() {
    // Platte mit Aussparung (Stufe) – Aussparung: Breite 3, Höhe 2, mit Treppe
    const u = 16;
    const plate = [[0, 0], [10, 0], [10, 6], [7, 6], [7, 4], [5, 4], [5, 2], [3, 2], [3, 6], [0, 6]];
    // Aussparung = Fläche zwischen x 3..7, y 2..6 minus Stufe: Zellen (3..5,2..6) und (5..7,4..6)
    const piece = [[0, 0], [2, 0], [2, 2], [4, 2], [4, 4], [0, 4]];          // passt
    const wrong1 = [[0, 2], [2, 2], [2, 0], [4, 0], [4, 4], [0, 4]];          // spiegelverkehrt
    const wrong2 = [[0, 0], [2, 0], [2, 1], [4, 1], [4, 4], [0, 4]];          // Stufe zu flach
    const wrong3 = [[0, 0], [3, 0], [3, 2], [4, 2], [4, 4], [0, 4]];          // Stufe zu breit
    const P = (arr, ox, oy, k = u) => arr.map(([x, y]) => [ox + x * k, oy + y * k]);
    let s = poly(P(plate, 72, 8), `fill="${VIOLET}" stroke="${WHITE}" stroke-width="2"`);
    const opts = [wrong1, wrong3, piece, wrong2];
    opts.forEach((o, i) => {
      const ox = 8 + i * 76, oy = 118;
      s += poly(P(o, ox, oy), `fill="${GOLD}" stroke="${WHITE}" stroke-width="2"`);
      s += tx(ox + 32, oy + 86, 'ABCD'[i]);
    });
    return svg('0 0 310 214', s);
  }

  // E: Felder im 4×4-Raster
  function svgFillGrid() {
    const on = ['0,0', '0,2', '1,1', '1,2', '1,3', '2,0', '2,3', '3,1', '3,2'];
    let s = '';
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
      const x = 30 + c * 36, y = 12 + r * 36;
      s += `<rect x="${x}" y="${y}" width="36" height="36" fill="${on.includes(r + ',' + c) ? PINK : 'none'}" stroke="${WHITE}" stroke-width="2.5"/>`;
    }
    return svg('0 0 204 172', s);
  }

  // M: drei Kreise
  function svgVenn() {
    const C = [[110, 82], [170, 82], [140, 134]];
    return svg('0 0 280 200', C.map(([x, y]) => `<circle class="ln" cx="${x}" cy="${y}" r="56"/>`).join(''));
  }

  // M: vier Schnitte durch eine Pizza
  // Endpunkte liegen auf dem Kreis (Mittelpunkt 100/100, Radius 84); alle Kreuzungen innen, gut getrennt
  const chordSegs = () => [[137.3, 24.8, 74.7, 180.1], [108.2, 16.4, 161.8, 156.9], [31.1, 148.1, 172.6, 57.7], [181.2, 121.5, 19, 122.4]];
  function svgPizza() {
    let s = `<circle cx="100" cy="100" r="84" fill="rgba(255,201,64,.14)" stroke="${GOLD}" stroke-width="3"/>`;
    for (const [x1, y1, x2, y2] of chordSegs()) s += ln(x1, y1, x2, y2);
    return svg('0 0 200 200', s);
  }

  // M: drei Ansichten desselben Würfels
  function svgCubeViews() {
    return svg('0 12 300 104', isoNumberCube(52, 66, 42, 1, 2, 3) + isoNumberCube(150, 66, 42, 1, 5, 6) + isoNumberCube(248, 66, 42, 2, 6, 4));
  }

  // M: Würfelnetz „Treppe“
  function svgStairNet() {
    const cells = [[0, 0, 3], [1, 0, 6], [1, 1, 1], [2, 1, 5], [2, 2, 2], [3, 2, 4]];
    const c = 44, x0 = 14, y0 = 10;
    let s = '';
    for (const [col, row, n] of cells) {
      const x = x0 + col * c, y = y0 + row * c;
      s += `<rect class="cell" x="${x}" y="${y}" width="${c}" height="${c}"/>` + tx(x + c / 2, y + c / 2 + 8, n, 22);
    }
    return svg('0 0 204 152', s);
  }

  // M: zwei Waagen
  function svgBalance2() {
    return svg('0 0 280 200', balance(140, 12, ['T'], ['K', 'K', 'K'], 170) + balance(140, 108, ['Q'], ['T', 'K'], 170));
  }

  // M: Riemenscheiben, offen / gekreuzt / offen
  function svgBelts() {
    const X = [34, 98, 196, 260], y = 70, r = 22;
    let s = '';
    // Riemen zuerst (hinter den Scheiben)
    const belt = (d) => `<path d="${d}" fill="none" stroke="${PINK}" stroke-width="3"/>`;
    s += belt(`M ${X[0]} ${y - r} L ${X[1]} ${y - r} M ${X[0]} ${y + r} L ${X[1]} ${y + r}`);
    // gekreuzt: innere Tangenten
    const d = X[2] - X[1], sinA = 2 * r / d, cosA = Math.sqrt(1 - sinA * sinA);
    const t1 = [X[1] + r * sinA, y - r * cosA], t2 = [X[2] - r * sinA, y + r * cosA];
    const t3 = [X[1] + r * sinA, y + r * cosA], t4 = [X[2] - r * sinA, y - r * cosA];
    s += belt(`M ${f1(t1[0])} ${f1(t1[1])} L ${f1(t2[0])} ${f1(t2[1])} M ${f1(t3[0])} ${f1(t3[1])} L ${f1(t4[0])} ${f1(t4[1])}`);
    s += belt(`M ${X[2]} ${y - r} L ${X[3]} ${y - r} M ${X[2]} ${y + r} L ${X[3]} ${y + r}`);
    X.forEach((x, i) => {
      s += `<circle cx="${x}" cy="${y}" r="${r}" fill="#c4b5fd" stroke="${PINK}" stroke-width="3"/>`;
      s += `<circle cx="${x}" cy="${y}" r="5" fill="#ede9fe"/>`;
      s += tx(x, y + r + 26, 'ABCD'[i], 16);
    });
    s += arrow(`M ${X[0] - 22} ${y - 36} A 32 32 0 0 1 ${X[0] + 22} ${y - 36}`);
    return svg('0 0 296 130', arrowDefs + s);
  }

  // M: Uhr nur mit Stundenzeiger
  function svgHourOnly() {
    return svg('0 0 200 200', miniClock(100, 100, 86, 2, 30, { minute: false, numbers: true }));
  }

  // M: Uhrenfolge
  function svgClockSeq() {
    let s = '';
    [[1, 0], [2, 15], [3, 30]].forEach(([h, m], i) => { s += miniClock(42 + i * 72, 44, 34, h, m); });
    s += tx(42 + 3 * 72, 56, '?', 34);
    return svg('0 0 300 90', s);
  }

  // M: 3×3-Matrix mit Formen und Anzahlen
  function shapeGlyph(kind, x, y, sz, col) {
    if (kind === 'K') return `<circle cx="${f1(x)}" cy="${f1(y)}" r="${f1(sz / 2)}" fill="${col}"/>`;
    if (kind === 'Q') return `<rect x="${f1(x - sz / 2)}" y="${f1(y - sz / 2)}" width="${sz}" height="${sz}" fill="${col}"/>`;
    return poly([[x, y - sz / 2 - 1], [x + sz / 2 + 1, y + sz / 2], [x - sz / 2 - 1, y + sz / 2]], `fill="${col}"`);
  }
  function groupCell(kind, n, x, y, w, col) {
    const sz = 14, gap = 19;
    let s = '';
    for (let i = 0; i < n; i++) s += shapeGlyph(kind, x + w / 2 + (i - (n - 1) / 2) * gap, y + w / 2, sz, col);
    return s;
  }
  function svgMatrix() {
    const M = [[['K', 1], ['Q', 2], ['D', 3]], [['Q', 3], ['D', 1], ['K', 2]], [['D', 2], ['K', 3], null]];
    const w = 64, x0 = 58, y0 = 6;
    let s = '';
    M.forEach((row, r) => row.forEach((cell, c) => {
      const x = x0 + c * w, y = y0 + r * w;
      s += `<rect class="cell" x="${x}" y="${y}" width="${w}" height="${w}"/>`;
      s += cell ? groupCell(cell[0], cell[1], x, y, w, CYAN) : tx(x + w / 2, y + w / 2 + 11, '?', 30);
    }));
    const opts = [['Q', 2], ['D', 1], ['Q', 1], ['K', 1]];
    opts.forEach(([k, n], i) => {
      const x = 8 + i * 72, y = 208;
      s += `<rect x="${x}" y="${y}" width="${w}" height="${w}" rx="6" fill="rgba(255,255,255,.05)" stroke="${VIOLET}" stroke-width="2"/>`;
      s += groupCell(k, n, x, y, w, GOLD) + tx(x + w / 2, y + w + 20, 'ABCD'[i]);
    });
    return svg('0 0 300 300', s);
  }

  // M: Punkte und Ecken
  function svgDotsSides() {
    const items = [[4, 5], [3, 4], [6, 5], [5, 6]]; // [Ecken, Punkte]
    let s = '';
    items.forEach(([n, k], i) => {
      const cx = 38 + i * 72, cy = 52;
      s += poly(ngon(cx, cy, 32, n, n === 4 ? -45 : -90), `fill="none" stroke="${CYAN}" stroke-width="3" stroke-linejoin="round"`);
      const rr = k === 1 ? 0 : n === 3 ? 7 : 10;
      for (let j = 0; j < k; j++) {
        const a = (j * 360 / k - 90) * Math.PI / 180;
        s += `<circle cx="${f1(cx + rr * Math.cos(a))}" cy="${f1(cy + (n === 3 ? 2 : 3) + rr * Math.sin(a))}" r="3.2" fill="${GOLD}"/>`;
      }
      s += tx(cx, 112, 'ABCD'[i]);
    });
    return svg('0 0 290 122', s);
  }

  // M: Kreis, Quadrat, Dreieck mit Zahlen
  function svgSets() {
    let s = '';
    s += `<circle cx="100" cy="100" r="76" fill="none" stroke="${PINK}" stroke-width="3"/>`;
    s += `<rect x="130" y="30" width="120" height="120" fill="none" stroke="${CYAN}" stroke-width="3"/>`;
    s += poly([[60, 210], [285, 210], [175, 95]], `fill="none" stroke="${GOLD}" stroke-width="3" stroke-linejoin="round"`);
    const N = [[62, 80, 2], [70, 145, 8], [150, 68, 5], [222, 62, 3], [232, 120, 1], [152, 135, 9], [195, 132, 6], [185, 188, 7]];
    s += N.map(([x, y, n]) => tx(x, y + 7, n, 20)).join('');
    return svg('0 0 300 220', s);
  }

  // M: Raster drehen
  function svgRotateGrid() {
    const base = [[0, 0], [0, 1], [1, 2], [2, 0]]; // [Zeile, Spalte]
    const cw = ([r, c]) => [c, 2 - r], ccw = ([r, c]) => [2 - c, r], half = ([r, c]) => [2 - r, 2 - c], mir = ([r, c]) => [r, 2 - c];
    const draw = (cells, x0, y0, k, col) => {
      let s = '';
      for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
        const on = cells.some(([a, b]) => a === r && b === c);
        s += `<rect x="${x0 + c * k}" y="${y0 + r * k}" width="${k}" height="${k}" fill="${on ? col : 'none'}" stroke="${WHITE}" stroke-width="2"/>`;
      }
      return s;
    };
    let s = draw(base, 96, 8, 22, PINK);
    s += arrow(`M 184 20 A 18 18 0 1 1 182 52`) + tx(222, 46, '90°', 15);
    const opts = [ccw, mir, cw, half].map(f => base.map(f));
    opts.forEach((cells, i) => { s += draw(cells, 10 + i * 72, 100, 18, CYAN) + tx(37 + i * 72, 176, 'ABCD'[i]); });
    return svg('0 0 300 186', arrowDefs + s);
  }

  // M: Farb-Sudoku
  function svgColorSudoku() {
    const C = { P: PINK, C: CYAN, G: GOLD, W: WHITE };
    const grid = ['PCGW', 'G?.C', 'CP.G', '.GC.'];
    let s = '';
    grid.forEach((row, r) => [...row].forEach((ch, c) => {
      const x = 30 + c * 36, y = 8 + r * 36;
      s += `<rect x="${x}" y="${y}" width="36" height="36" fill="none" stroke="#6b6fa8" stroke-width="2"/>`;
      if (C[ch]) s += `<circle cx="${x + 18}" cy="${y + 18}" r="12" fill="${C[ch]}"/>`;
      if (ch === '?') s += tx(x + 18, y + 27, '?', 24);
    }));
    return svg('0 0 204 160', s);
  }

  // M: fünf Geraden – Kreuzungspunkte
  function svgCrossings() {
    // fünf Geraden durch Punkte eines (unregelmäßigen) Sterns, über die Spitzen hinaus verlängert
    const angs = [-84, -10, 62, 128, 200], V = angs.map(a => [130 + 100 * Math.cos(a * Math.PI / 180), 104 + 86 * Math.sin(a * Math.PI / 180)]);
    let s = '';
    for (let i = 0; i < 5; i++) {
      const [x1, y1] = V[i], [x2, y2] = V[(i + 2) % 5], L = Math.hypot(x2 - x1, y2 - y1), e = 16 / L;
      s += ln(x1 - (x2 - x1) * e, y1 - (y2 - y1) * e, x2 + (x2 - x1) * e, y2 + (y2 - y1) * e);
    }
    return svg('0 0 260 210', s);
  }

  // M: Pfeil-Labyrinth
  function svgArrowMaze() {
    const A = { R: 0, D: 90, L: 180, U: 270 };
    const grid = ['RDLD', 'URRD', 'LUDL', 'ZLLU'];
    let s = '';
    grid.forEach((row, r) => [...row].forEach((ch, c) => {
      const x = 22 + c * 40, y = 6 + r * 40;
      s += `<rect class="cell" x="${x}" y="${y}" width="40" height="40"/>`;
      if (ch === 'Z') s += tx(x + 20, y + 28, 'Z', 22);
      else s += `<g transform="translate(${x + 20},${y + 20}) rotate(${A[ch]})"><path d="M -11 0 H 6" stroke="${WHITE}" stroke-width="3.5" stroke-linecap="round"/><polygon points="13,0 4,-7 4,7" fill="${WHITE}"/></g>`;
      if (r === 0 && c === 0) s += `<rect x="${x + 2}" y="${y + 2}" width="36" height="36" fill="none" stroke="${GOLD}" stroke-width="3"/>`;
    }));
    return svg('0 0 204 172', s);
  }

  // M: zwei Folien übereinander
  function svgSheets() {
    const A = [0, 2, 4, 6, 8], B = [1, 4, 7];
    const sheet = (dots, x0, col) => {
      let s = `<rect x="${x0}" y="12" width="96" height="96" rx="6" fill="rgba(255,255,255,.04)" stroke="${WHITE}" stroke-width="2"/>`;
      for (let i = 1; i < 3; i++) s += `<line x1="${x0 + i * 32}" y1="12" x2="${x0 + i * 32}" y2="108" stroke="#6b6fa8" stroke-width="1.5"/><line x1="${x0}" y1="${12 + i * 32}" x2="${x0 + 96}" y2="${12 + i * 32}" stroke="#6b6fa8" stroke-width="1.5"/>`;
      for (const k of dots) s += `<circle cx="${x0 + (k % 3) * 32 + 16}" cy="${12 + Math.floor(k / 3) * 32 + 16}" r="9" fill="${col}"/>`;
      return s;
    };
    return svg('0 0 280 120', sheet(A, 18, PINK) + tx(140, 68, '+', 30) + sheet(B, 166, CYAN));
  }

  // M: wachsende Figur
  function svgGrowL() {
    let s = '';
    const fig = (n, x0, y0) => {
      let t = '';
      for (let i = 0; i < n; i++) t += `<rect x="${x0}" y="${y0 - (i + 1) * 16}" width="16" height="16" fill="${CYAN}" stroke="#0a0d24" stroke-width="1.5"/>`;
      for (let i = 1; i < n; i++) t += `<rect x="${x0 + i * 16}" y="${y0 - 16}" width="16" height="16" fill="${CYAN}" stroke="#0a0d24" stroke-width="1.5"/>`;
      return t;
    };
    s += fig(1, 22, 84) + fig(2, 70, 84) + fig(3, 140, 84) + fig(4, 222, 84);
    [1, 2, 3, 4].forEach((n, i) => { s += tx([30, 86, 164, 254][i], 108, n + '.', 14); });
    return svg('0 0 300 116', s);
  }


  // M: Welche Figur ist spiegelsymmetrisch?
  function svgSymmetry() {
    let s = '';
    const fill = `fill="${GOLD}"`;
    // A Parallelogramm
    s += poly([[18, 80], [44, 30], [80, 30], [54, 80]], fill);
    // B Herz (symmetrisch)
    s += `<path d="M 122 46 C 122 28 98 26 98 46 C 98 62 114 72 122 82 C 130 72 146 62 146 46 C 146 26 122 28 122 46 Z" ${fill}/>`;
    // C Stufe (L mit ungleichen Schenkeln)
    s += poly([[170, 30], [192, 30], [192, 60], [210, 60], [210, 82], [170, 82]], fill);
    // D Pfeil mit einseitigem Widerhaken
    s += poly([[238, 82], [238, 46], [222, 46], [248, 24], [248, 82]], fill);
    s += ABCD([49, 122, 189, 248], 108);
    return svg('0 0 290 118', s);
  }


  // H: Dreiecke im Quadrat (Diagonalen + Mittellinien)
  function svgSquareTri() {
    const a = 20, b = 180, m = 100;
    return svg('0 0 200 200', lnPoly([[a, a], [b, a], [b, b], [a, b]]) + ln(a, a, b, b) + ln(b, a, a, b) + ln(m, a, m, b) + ln(a, m, b, m));
  }


  // H: Würfelpyramide 3×3 / 2×2 / 1
  function svgCubePyramid() {
    const L = [];
    for (let x = 0; x < 3; x++) for (let y = 0; y < 3; y++) L.push([x, y, 0]);
    for (let x = 0; x < 2; x++) for (let y = 0; y < 2; y++) L.push([x, y, 1]);
    L.push([0, 0, 2]);
    return svg('0 0 220 200', isoCubes(L, { ox: 110, oy: 100, c: 30 }).s);
  }

  // H: Wege im Gitter
  function svgPaths(W, H, blocked = null) {
    const k = 44, x0 = 30, y0 = 18;
    const X = (i) => x0 + i * k, Y = (j) => y0 + (H - j) * k; // j nach oben
        let s = '';
    for (let j = 0; j <= H; j++) for (let i = 0; i < W; i++) s += ln(X(i), Y(j), X(i + 1), Y(j));
    for (let i = 0; i <= W; i++) for (let j = 0; j < H; j++) s += ln(X(i), Y(j), X(i), Y(j + 1));
    s += `<circle cx="${X(0)}" cy="${Y(0)}" r="7" fill="${PINK}"/>` + tx(X(0) - 16, Y(0) + 20, 'A', 16);
    s += `<circle cx="${X(W)}" cy="${Y(H)}" r="7" fill="${GOLD}"/>` + tx(X(W) + 16, Y(H) - 8, 'B', 16);
    if (blocked) {
      const [bx, by] = [X(blocked[0]), Y(blocked[1])];
      s += `<circle cx="${bx}" cy="${by}" r="11" fill="#ef4444"/><path d="M ${bx - 5} ${by - 5} L ${bx + 5} ${by + 5} M ${bx + 5} ${by - 5} L ${bx - 5} ${by + 5}" stroke="${WHITE}" stroke-width="3" stroke-linecap="round"/>`;
    }
    return svg(`0 0 ${x0 * 2 + W * k} ${y0 + 30 + H * k}`, s);
  }

  // H: Treppen-Umfang
  function svgStairPerimeter() {
    const u = 34, ox = 40, oy = 160;
    const P = [[0, 0], [6, 0], [6, 1.5], [4.5, 1.5], [4.5, 2.5], [3, 2.5], [3, 3.2], [1.5, 3.2], [1.5, 4], [0, 4]];
    let s = poly(P.map(([x, y]) => [ox + x * u, oy - y * u]), `fill="rgba(34,211,238,.15)" stroke="${CYAN}" stroke-width="3" stroke-linejoin="round"`);
    s += tx(ox + 3 * u, oy + 24, '6 cm', 16) + tx(ox - 22, oy - 2 * u + 6, '4 cm', 16, `transform="rotate(-90 ${ox - 22} ${oy - 2 * u})"`);
    return svg('0 0 280 196', s);
  }

  // H: Dreieck im Rechteck
  function svgHalfTri() {
    const x0 = 30, y0 = 20, w = 220, h = 130;
    let s = `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" fill="none" stroke="${WHITE}" stroke-width="3"/>`;
    s += poly([[x0, y0 + h], [x0 + w, y0 + h], [x0 + w * 0.27, y0]], `fill="${PINK}" stroke="${PINK}" stroke-width="2" stroke-linejoin="round"`);
    return svg('0 0 280 170', s);
  }

  // H: Digitaluhr auf dem Kopf
  function svgDigital() {
    let s = `<rect x="10" y="14" width="280" height="112" rx="14" fill="#05071a" stroke="#3b3f74" stroke-width="2"/>`;
    const X = [32, 92, 172, 232];
    [1, 0, 5, 1].forEach((d, i) => { s += segDigit(X[i], 32, 38, 76, d); });
    s += `<circle cx="150" cy="56" r="4.5" fill="${GOLD}"/><circle cx="150" cy="86" r="4.5" fill="${GOLD}"/>`;
    return svg('0 0 300 140', s);
  }

  // H: Streichholz-Gleichung 5 + 7 = 2
  function svgMatchEq() {
    const w = 34, h = 70, y = 20;
    let s = stickDigit(14, y, w, h, 5);
    s += stick(70, y + h / 2, 102, y + h / 2) + stick(86, y + h / 2 + 16, 86, y + h / 2 - 16);
    s += stickDigit(120, y, w, h, 7);
    s += stick(172, y + h / 2 - 8, 204, y + h / 2 - 8) + stick(172, y + h / 2 + 8, 204, y + h / 2 + 8);
    s += stickDigit(222, y, w, h, 2);
    return svg('0 0 272 110', s);
  }

  // H: Papier zweimal falten, einmal lochen
  function svgFold() {
    const paper = `fill="rgba(243,244,255,.15)" stroke="${WHITE}" stroke-width="2.5"`;
    let s = `<rect x="14" y="20" width="80" height="80" ${paper}/>`;
    s += `<line x1="54" y1="20" x2="54" y2="100" stroke="${GOLD}" stroke-width="2" stroke-dasharray="5 4"/>`;
    s += arrow('M 100 60 L 124 60');
    s += `<rect x="134" y="20" width="40" height="80" ${paper}/>`;
    s += `<line x1="134" y1="60" x2="174" y2="60" stroke="${GOLD}" stroke-width="2" stroke-dasharray="5 4"/>`;
    s += arrow('M 180 60 L 204 60');
    s += `<rect x="214" y="40" width="40" height="40" ${paper}/>`;
    s += `<circle cx="230" cy="62" r="6" fill="#0a0d24" stroke="${PINK}" stroke-width="2.5"/>`;
    s += tx(54, 124, '1', 14) + tx(154, 124, '2', 14) + tx(234, 124, '3', 14);
    return svg('0 0 270 134', arrowDefs + s);
  }



  // H: Welche Figur in einem Zug?
  function svgOneStroke() {
    const k = 26;
    const fig = (ox, oy, edges) => edges.map(([a, b, c, d]) => ln(ox + a * k, oy + b * k, ox + c * k, oy + d * k)).join('');
    const sqDiag = [[0, 0, 2, 0], [2, 0, 2, 2], [2, 2, 0, 2], [0, 2, 0, 0], [0, 0, 2, 2], [2, 0, 0, 2]];
    const twoSqDiag = [[0, 0.5, 2, 0.5], [0, 1.5, 2, 1.5], [0, 0.5, 0, 1.5], [1, 0.5, 1, 1.5], [2, 0.5, 2, 1.5], [0, 0.5, 1, 1.5]];
    const sqMid = [[0, 0, 2, 0], [2, 0, 2, 2], [2, 2, 0, 2], [0, 2, 0, 0], [1, 0, 1, 2], [0, 1, 2, 1]];
    const threeSq = [[0, 0.67, 2, 0.67], [0, 1.33, 2, 1.33], [0, 0.67, 0, 1.33], [0.67, 0.67, 0.67, 1.33], [1.33, 0.67, 1.33, 1.33], [2, 0.67, 2, 1.33]];
    let s = fig(12, 12, sqDiag) + fig(84, 12, twoSqDiag) + fig(156, 12, sqMid) + fig(228, 12, threeSq);
    s += ABCD([38, 110, 182, 254], 92);
    return svg('0 0 292 102', s);
  }



  // H: Springer auf 4×4
  function svgKnight() {
    const k = 40, x0 = 20, y0 = 8;
    let s = '';
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) s += `<rect x="${x0 + c * k}" y="${y0 + r * k}" width="${k}" height="${k}" fill="${(r + c) % 2 ? 'rgba(167,139,250,.35)' : 'rgba(243,244,255,.10)'}" stroke="#6b6fa8" stroke-width="1.5"/>`;
    s += tx(x0 + k / 2, y0 + 3 * k + 29, 'S', 24) + tx(x0 + 3.5 * k, y0 + 3 * k + 29, 'Z', 24);
    for (let i = 0; i < 4; i++) s += tx(x0 + i * k + k / 2, y0 + 4 * k + 16, 'abcd'[i], 12, 'fill-opacity=".6"') + tx(x0 - 10, y0 + (3 - i) * k + k / 2 + 4, i + 1, 12, 'fill-opacity=".6"');
    return svg('0 0 200 192', s);
  }

  // H: Würfel rollt
  function svgDiceRoll() {
    const k = 40, x0 = 14, y0 = 10, W = 5, H = 3;
    let s = '';
    for (let r = 0; r < H; r++) for (let c = 0; c < W; c++) s += `<rect x="${x0 + c * k}" y="${y0 + r * k}" width="${k}" height="${k}" fill="none" stroke="#6b6fa8" stroke-width="1.5"/>`;
    const C = (c, r) => [x0 + c * k + k / 2, y0 + r * k + k / 2];
    // Start (0,2) → (1,2) → (2,2) → (2,1) → (3,1)
    const path = [C(0, 2), C(1, 2), C(2, 2), C(2, 1), C(3, 1)];
    s += `<polyline points="${pts(path.slice(0, -1))} ${f1(path[4][0] - 12)},${f1(path[4][1])}" fill="none" stroke="${GOLD}" stroke-width="3.5" stroke-dasharray="7 5" marker-end="url(#bah)"/>`;
    // Startwürfel
    const sx = x0 + 3, sy = y0 + 2 * k + 3, w = k - 6;
    s += `<rect x="${sx}" y="${sy}" width="${w}" height="${w}" rx="5" fill="#f8f7ff"/>`;
    s += `<text x="${sx + w / 2}" y="${sy + w / 2 + 7}" text-anchor="middle" font-size="19" font-weight="800" fill="${DARK}">1</text>`;
    return svg('0 0 228 150', arrowDefs + s);
  }

  // V: Punktgitter 4×4
  function svgDotGrid() {
    let s = '';
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) s += `<circle cx="${40 + i * 40}" cy="${30 + j * 40}" r="6" fill="${GOLD}"/>`;
    return svg('0 0 200 180', s);
  }

  // V: Münze rollt um Münze
  function svgCoins() {
    let s = `<circle cx="100" cy="100" r="88" fill="none" stroke="${VIOLET}" stroke-width="2" stroke-dasharray="6 6"/>`;
    s += `<circle cx="100" cy="100" r="44" fill="#c0c4d6" stroke="#8b90a8" stroke-width="3"/>`;
    s += `<circle cx="188" cy="100" r="44" fill="${GOLD}" stroke="#c98a0b" stroke-width="3"/>`;
    s += `<path d="M 188 72 L 188 124 M 188 72 L 178 86 M 188 72 L 198 86" stroke="${DARK}" stroke-width="5" stroke-linecap="round" fill="none"/>`;
    s += arrow('M 214 156 A 100 100 0 0 1 150 196');
    return svg('0 0 250 210', arrowDefs + s);
  }

  // V: zwei Quadrate, Ecke im Mittelpunkt
  function svgOverlap() {
    let s = `<rect x="20" y="40" width="120" height="120" fill="${CYAN}" fill-opacity=".55" stroke="${CYAN}" stroke-width="2.5"/>`;
    s += `<g transform="translate(80,100) rotate(28)"><rect x="0" y="0" width="120" height="120" fill="${GOLD}" fill-opacity=".55" stroke="${GOLD}" stroke-width="2.5"/></g>`;
    s += `<circle cx="80" cy="100" r="4" fill="${WHITE}"/>`;
    return svg('0 0 230 272', s);
  }

  // V: Brett ohne zwei Ecken
  function svgDomino() {
    const k = 40, x0 = 20, y0 = 8;
    let s = '';
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
      if ((r === 0 && c === 0) || (r === 3 && c === 3)) continue;
      s += `<rect x="${x0 + c * k}" y="${y0 + r * k}" width="${k}" height="${k}" fill="rgba(34,211,238,.15)" stroke="${CYAN}" stroke-width="2.5"/>`;
    }
    return svg('0 0 200 176', s);
  }

  // V: Fünfeck mit allen Diagonalen
  function svgPentagonStar() {
    const V = ngon(100, 104, 90, 5);
    let s = lnPoly(V);
    for (let i = 0; i < 5; i++) s += ln(...V[i], ...V[(i + 2) % 5]);
    return svg('0 0 200 196', s);
  }

  // V: Würfel fehlen zum 3×3×3
  function svgMissingCubes() {
    const h = [[3, 3, 2], [3, 2, 1], [2, 1, 1]];
    const L = [];
    h.forEach((row, x) => row.forEach((n, y) => { for (let z = 0; z < n; z++) L.push([x, y, z]); }));
    return svg('0 0 220 220', isoCubes(L, { ox: 110, oy: 110, c: 34 }).s);
  }

  // V: Dreiecksgitter Seitenlänge 3
  function svgTriGrid() {
    const A = [140, 16], B = [20, 224], C = [260, 224];
    const lerp = (p, q, t) => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
    let s = lnPoly([A, B, C]);
    for (const t of [1 / 3, 2 / 3]) {
      s += ln(...lerp(A, B, t), ...lerp(A, C, t));        // waagrecht
      s += ln(...lerp(B, A, t), ...lerp(B, C, t));        // parallel zu AC
      s += ln(...lerp(C, A, t), ...lerp(C, B, t));        // parallel zu AB
    }
    return svg('0 0 280 240', s);
  }

  // V: 3×3-Streichholzgitter
  function svgStickGrid() {
    const L = 52, x0 = 26, y0 = 14;
    let s = '';
    for (let r = 0; r <= 3; r++) for (let c = 0; c < 3; c++) s += stick(x0 + c * L + 6, y0 + r * L, x0 + (c + 1) * L - 6, y0 + r * L);
    for (let r = 0; r < 3; r++) for (let c = 0; c <= 3; c++) s += stick(x0 + c * L, y0 + (r + 1) * L - 6, x0 + c * L, y0 + r * L + 6);
    return svg('0 0 208 184', s);
  }


  // E: Welche Figur ist in vier gleiche Teile geteilt?
  function svgEqualParts() {
    const st = `fill="rgba(34,211,238,.15)" stroke="${CYAN}" stroke-width="2.5"`;
    let s = '';
    // A: Kreis, Schnitt durch einen Punkt neben der Mitte
    s += `<circle cx="38" cy="50" r="30" ${st}/>` + ln(8, 58, 68, 58) + ln(46, 20, 46, 80);
    // B: Quadrat mit beiden Diagonalen
    s += `<rect x="84" y="20" width="60" height="60" ${st}/>` + ln(84, 20, 144, 80) + ln(144, 20, 84, 80);
    // C: Rechteck, Streifen deutlich ungleich
    s += `<rect x="160" y="26" width="56" height="48" ${st}/>` + ln(170, 26, 170, 74) + ln(180, 26, 180, 74) + ln(194, 26, 194, 74);
    // D: Dreieck, ungleich geteilt
    s += poly([[262, 20], [292, 80], [232, 80]], st) + ln(262, 20, 262, 80) + ln(247, 50, 277, 50);
    s += ABCD([38, 114, 188, 262], 104);
    return svg('0 0 300 112', s);
  }

  // M: Formenfolge (Ecken wachsen, gefüllt/leer im Wechsel)
  function svgShapeSeq() {
    const f = (n, cx, cy, r, filled) => poly(ngon(cx, cy, r, n, n === 4 ? -45 : -90), filled ? `fill="${PINK}"` : `fill="none" stroke="${PINK}" stroke-width="3" stroke-linejoin="round"`);
    let s = '';
    [[3, true], [4, false], [5, true], [6, false]].forEach(([n, fl], i) => { s += f(n, 34 + i * 62, 40, 24, fl); });
    s += tx(34 + 4 * 62, 50, '?', 30);
    const opts = [[7, false], [6, true], [7, true], [8, true]];
    opts.forEach(([n, fl], i) => {
      const cx = 42 + i * 72;
      s += `<rect x="${cx - 32}" y="88" width="64" height="64" rx="6" fill="rgba(255,255,255,.04)" stroke="${VIOLET}" stroke-width="2"/>`;
      s += f(n, cx, 120, 24, fl) + tx(cx, 176, 'ABCD'[i]);
    });
    return svg('0 0 300 186', s);
  }

  // M: Linien verfolgen
  function svgTangle() {
    const top = [40, 100, 160, 220], bot = [40, 100, 160, 220];
    const map = [2, 0, 3, 1]; // A→3, B→1, C→4, D→2
    const mids = [210, 20, 60, 120]; // so gewählt, dass alle Kreuzungen klar getrennt sind
    let s = '';
    top.forEach((x, i) => {
      const xe = bot[map[i]];
      s += `<path d="M ${x} 30 L ${x} 48 L ${mids[i]} 100 L ${xe} 152 L ${xe} 170" fill="none" stroke="${WHITE}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
      s += tx(x, 22, 'ABCD'[i], 16);
      s += tx(bot[i], 192, i + 1, 16);
    });
    return svg('0 0 260 200', s);
  }

  // M: Spiegeln und ergänzen
  function svgMirrorFill() {
    const k = 26, x0 = 30, y0 = 10, C = 7, R = 4;
    const on = ['0,1', '1,0', '1,2', '2,1', '0,3', '2,3'];
    let s = '';
    for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) {
      s += `<rect x="${x0 + c * k}" y="${y0 + r * k}" width="${k}" height="${k}" fill="${on.includes(r + ',' + c) ? CYAN : 'none'}" stroke="#6b6fa8" stroke-width="1.5"/>`;
    }
    s += `<line x1="${x0 + 3.5 * k}" y1="${y0 - 6}" x2="${x0 + 3.5 * k}" y2="${y0 + R * k + 6}" stroke="${GOLD}" stroke-width="2.5" stroke-dasharray="6 5"/>`;
    return svg('0 0 242 126', s);
  }

  // M: Blätter übereinander
  function svgPaperStack() {
    const rect = (x, y, w, h, col) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${col}" stroke="#0a0d24" stroke-width="3"/>`;
    let s = '';
    s += rect(20, 16, 120, 84, VIOLET);   // ganz unten
    s += rect(96, 52, 120, 80, GOLD);
    s += rect(48, 84, 104, 70, PINK);
    s += rect(168, 20, 100, 72, CYAN);
    return svg('0 0 290 170', s);
  }

  // H: Linien-Matrix (Überlagerung, gleiche Linien verschwinden)
  function svgXorMatrix() {
    const seg = { H: [0, 0.5, 1, 0.5], V: [0.5, 0, 0.5, 1], D: [0, 0, 1, 1], E: [1, 0, 0, 1] };
    const cell = (x, y, w, set, col = WHITE, frame = 'cell') => {
      let t = frame === 'cell' ? `<rect class="cell" x="${x}" y="${y}" width="${w}" height="${w}"/>`
        : `<rect x="${x}" y="${y}" width="${w}" height="${w}" rx="6" fill="rgba(255,255,255,.04)" stroke="${VIOLET}" stroke-width="2"/>`;
      const p = 9;
      for (const k of set) { const [a, b, c, d] = seg[k]; t += `<line x1="${x + p + a * (w - 2 * p)}" y1="${y + p + b * (w - 2 * p)}" x2="${x + p + c * (w - 2 * p)}" y2="${y + p + d * (w - 2 * p)}" stroke="${col}" stroke-width="3" stroke-linecap="round"/>`; }
      return t;
    };
    const M = [['HD', 'HV', 'DV'], ['EHV', 'HD', 'EVD'], ['DV', 'DEH', null]];
    const w = 58, x0 = 63, y0 = 6;
    let s = '';
    M.forEach((row, r) => row.forEach((set, c) => {
      const x = x0 + c * w, y = y0 + r * w;
      s += set === null ? `<rect class="cell" x="${x}" y="${y}" width="${w}" height="${w}"/>` + tx(x + w / 2, y + w / 2 + 11, '?', 30) : cell(x, y, w, set);
    }));
    const opts = ['DVEH', 'D', 'VEH', 'VE'];
    opts.forEach((set, i) => { const x = 14 + i * 70; s += cell(x, 196, w, set, GOLD, 'opt') + tx(x + w / 2, 274, 'ABCD'[i]); });
    return svg('0 0 296 284', s);
  }

  QUIZ_ADD([
    // ================= leicht =================
    { id: 'b-pink-kreise', fam: 'farbe-und-form-zaehlen', cat: 'Bilder', type: 'number',
      q: 'Wie viele <b>pinke Kreise</b> siehst du?', svg: svgPinkCircles(),
      a: 4, r: [1, 0, 1, 1, 0], ex: 'Pink sind auch Quadrate und ein Dreieck – pinke Kreise gibt es genau vier.' },
    { id: 'b-ecken-summe', fam: 'ecken-summe', cat: 'Bilder', type: 'number',
      q: 'Wie viele Ecken haben alle Formen zusammen?', svg: svgCornerSum(),
      a: 12, r: [1, 0, 1, 1, 0], ex: 'Dreieck 3 + Quadrat 4 + Fünfeck 5 + Kreis 0 = 12.' },
    { id: 'b-spiegel-fahne', fam: 'spiegelbild', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welches Bild zeigt die Fahne so, wie sie im Spiegel (gestrichelte Linie) erscheint?', svg: svgMirrorFlag(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [1, 1, 0, 0, 0],
      ex: 'Ein senkrechter Spiegel vertauscht links und rechts: Der Wimpel bleibt oben, zeigt aber nach links.' },
    { id: 'b-waage-einfach', fam: 'waage', cat: 'Bilder', type: 'number',
      q: 'Die Waage ist im Gleichgewicht. Wie viele Kreise wiegen so viel wie <b>drei</b> Dreiecke?', svg: svgBalance1(),
      a: 6, r: [1, 0, 0, 1, 0], ex: 'Ein Dreieck wiegt so viel wie zwei Kreise, drei Dreiecke also wie 6 Kreise.' },
    { id: 'b-augen-summe', fam: 'augen-zaehlen', cat: 'Bilder', type: 'number',
      q: 'Wie viele Augen zeigen die drei Würfel zusammen?', svg: svgDiceSum(),
      a: 14, r: [1, 0, 0, 1, 0], ex: '3 + 5 + 6 = 14.' },
    { id: 'b-torte-prozent', fam: 'anteil-kreis', cat: 'Bilder', type: 'number',
      q: 'Wie viel Prozent der Scheibe sind gelb gefärbt?', svg: svgPie(),
      a: 25, r: [1, 0, 0, 1, 1], ex: 'Die Scheibe hat 8 gleiche Stücke, 2 davon sind gelb: 2/8 = 1/4 = 25 %.' },
    { id: 'b-pfeil-dreht', fam: 'drehfolge-pfeil', cat: 'Bilder', type: 'choice',
      q: 'Wohin zeigt der Pfeil im letzten Feld?', svg: svgArrowTurn(),
      opts: ['Nach oben', 'Nach rechts', 'Nach unten', 'Nach links'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Der Pfeil dreht sich jedes Mal um eine Vierteldrehung im Uhrzeigersinn: rechts, unten, links – dann oben.' },
    { id: 'b-hoelzer-reihe', fam: 'hoelzer-zaehlen', cat: 'Bilder', type: 'number',
      q: 'Wie viele Streichhölzer liegen hier?', svg: svgStickRow(),
      a: 10, r: [1, 0, 1, 1, 0], ex: 'Oben 3, unten 3 und 4 senkrechte Hölzer – die inneren gehören zu zwei Quadraten, liegen aber nur einmal da: 10.' },
    { id: 'b-farbfolge', fam: 'farbfolge', cat: 'Bilder', type: 'choice',
      q: 'Welche Farbe hat der nächste Kreis?', svg: svgColorSeq(),
      opts: ['Türkis', 'Pink', 'Gelb'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Das Muster pink – türkis – türkis – gelb wiederholt sich. Nach Pink kommt Türkis.' },
    { id: 'b-puzzleteil', fam: 'puzzleteil', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welches gelbe Teil füllt die Lücke in der lila Platte genau aus (ohne es zu drehen)?', svg: svgPuzzle(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [1, 1, 1, 0, 0],
      ex: 'Die Lücke ist links doppelt so tief wie rechts, beide Hälften sind gleich breit – genau wie Teil C. A ist spiegelverkehrt, B links zu breit, D rechts zu hoch.' },
    { id: 'b-felder-fehlen', fam: 'felder-fehlen', cat: 'Bilder', type: 'number',
      q: 'Wie viele Felder müssen noch gefärbt werden, damit das ganze Feld pink ist?', svg: svgFillGrid(),
      a: 7, r: [1, 0, 0, 1, 0], ex: 'Das Feld hat 4 × 4 = 16 Kästchen, 9 sind gefärbt: 16 − 9 = 7.' },

    { id: 'b-gleiche-teile', fam: 'gleiche-teile', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welche Figur ist in vier <b>gleich große</b> Teile geteilt?', svg: svgEqualParts(),
      opts: ['A', 'B', 'C', 'D'], a: 1, r: [1, 0, 1, 0, 0],
      ex: 'Die beiden Diagonalen teilen das Quadrat in vier gleiche Dreiecke. Beim Rechteck sind die Streifen unterschiedlich breit, beim Kreis liegt der Schnittpunkt neben der Mitte, und beim Dreieck sind die oberen Teile kleiner als die unteren.' },

    // ================= mittel =================
    { id: 'b-drei-kreise', fam: 'flaechen-zaehlen', cat: 'Bilder', type: 'number',
      q: 'In wie viele einzelne Flächen teilen die drei Kreise das Innere?', svg: svgVenn(),
      a: 7, r: [1, 1, 1, 1, 0], ex: 'Drei Flächen gehören nur zu einem Kreis, drei zu genau zwei Kreisen und eine in der Mitte zu allen drei: 7.' },
    { id: 'b-wuerfel-ansichten', fam: 'wuerfel-ansichten', cat: 'Bilder', type: 'number',
      q: 'Das ist dreimal derselbe Würfel. Welche Zahl liegt der 1 gegenüber?', svg: svgCubeViews(),
      a: 4, r: [2, 1, 1, 1, 0], ex: 'Neben der 1 sieht man 2, 3, 5 und 6. Übrig bleibt die 4 – sie muss gegenüber liegen.' },
    { id: 'b-netz-treppe', fam: 'wuerfelnetz-treppe', cat: 'Bilder', type: 'number',
      q: 'Das Netz wird zu einem Würfel gefaltet. Welche Zahl liegt dann der 1 gegenüber?', svg: svgStairNet(),
      a: 4, r: [2, 2, 1, 1, 0], ex: 'Bei diesem Treppennetz liegen sich Felder gegenüber, zwischen denen in der Kette genau zwei andere liegen: 3–5, 6–2 und 1–4.' },
    { id: 'b-zwei-waagen', fam: 'waage', cat: 'Bilder', type: 'number',
      q: 'Beide Waagen sind im Gleichgewicht. Wie viele Kreise wiegen ein Quadrat und ein Dreieck <b>zusammen</b>?', svg: svgBalance2(),
      a: 7, r: [2, 1, 0, 2, 0], ex: 'Dreieck = 3 Kreise, Quadrat = Dreieck + Kreis = 4 Kreise. Zusammen 7.' },
    { id: 'b-riemen', fam: 'riemen-kreuz', cat: 'Bilder', type: 'choice',
      q: 'Rad A dreht sich im Uhrzeigersinn. Wie dreht sich Rad D?', svg: svgBelts(),
      opts: ['Gegen den Uhrzeigersinn', 'Im Uhrzeigersinn', 'Gar nicht'], a: 0, r: [2, 1, 1, 1, 0],
      ex: 'Ein offener Riemen behält die Richtung bei, ein gekreuzter kehrt sie um: A rechts, B rechts, C links, D links.' },
    { id: 'b-nur-stundenzeiger', fam: 'nur-stundenzeiger', cat: 'Bilder', type: 'choice',
      q: 'Bei dieser Uhr fehlt der Minutenzeiger. Wie spät ist es?', svg: svgHourOnly(),
      opts: ['Halb drei', 'Viertel nach zwei', 'Halb vier', 'Zwei Uhr'], a: 0, r: [1, 1, 1, 0, 0],
      ex: 'Der Stundenzeiger steht genau zwischen 2 und 3 – die halbe Stunde ist vorbei: 2:30 Uhr, also halb drei.' },
    { id: 'b-uhrenfolge', fam: 'uhren-folge', cat: 'Bilder', type: 'choice',
      q: 'Welche Uhrzeit zeigt die nächste Uhr?', svg: svgClockSeq(),
      opts: ['4:45', '4:30', '5:45', '4:00'], a: 0, r: [2, 1, 0, 1, 0],
      ex: 'Von Uhr zu Uhr kommen 1 Stunde und 15 Minuten dazu: 1:00, 2:15, 3:30, 4:45.' },
    { id: 'b-matrix-formen', fam: 'matrix-3x3', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welches Feld gehört an die Stelle des Fragezeichens?', svg: svgMatrix(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [2, 1, 1, 1, 0],
      ex: 'In jeder Zeile und Spalte kommen Kreis, Quadrat und Dreieck sowie die Anzahlen 1, 2, 3 je einmal vor. Es fehlt ein einzelnes Quadrat.' },
    { id: 'b-punkte-ecken', fam: 'punkte-ecken', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welche Figur passt nicht zu den anderen?', svg: svgDotsSides(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [2, 2, 1, 1, 0],
      ex: 'Sonst gilt: ein Punkt mehr als die Figur Ecken hat (Viereck 5, Dreieck 4, Fünfeck 6). Das Sechseck hat aber nur 5 Punkte.' },
    { id: 'b-mengen-zahlen', fam: 'mengen-bild', cat: 'Bilder', type: 'number',
      q: 'Addiere alle Zahlen, die im Quadrat liegen, aber <b>weder</b> im Kreis <b>noch</b> im Dreieck.', svg: svgSets(),
      a: 4, r: [2, 1, 1, 1, 0], ex: 'Nur die 3 und die 1 liegen allein im Quadrat: 3 + 1 = 4. Die 5, 9 und 6 liegen zusätzlich im Kreis oder Dreieck.' },
    { id: 'b-raster-drehen', fam: 'drehen-raster', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Das pinke Muster wird um 90° im Uhrzeigersinn gedreht. Wie sieht es dann aus?', svg: svgRotateGrid(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [2, 1, 2, 0, 0],
      ex: 'Bei einer Vierteldrehung nach rechts wird die obere Zeile zur rechten Spalte. Nur C passt; A ist nach links gedreht, B gespiegelt, D halb gedreht.' },
    { id: 'b-farb-sudoku', fam: 'farb-sudoku', cat: 'Bilder', type: 'choice',
      q: 'In jeder Zeile und jeder Spalte kommt jede der vier Farben genau einmal vor. Welche Farbe gehört zum Fragezeichen?', svg: svgColorSudoku(),
      opts: ['Weiß', 'Pink', 'Türkis', 'Gelb'], a: 0, r: [1, 1, 0, 1, 0],
      ex: 'In der Spalte des Fragezeichens stehen schon Türkis, Pink und Gelb – es fehlt nur noch Weiß.' },
    { id: 'b-kreuzungen', fam: 'schnittpunkte', cat: 'Bilder', type: 'number',
      q: 'An wie vielen Punkten kreuzen sich die Linien?', svg: svgCrossings(),
      a: 10, r: [1, 1, 1, 2, 0], ex: '5 Kreuzungen im Inneren und 5 an den Sternspitzen – dort kreuzen sich die Linien ebenfalls: 10. (Jede Linie trifft jede andere genau einmal.)' },
    { id: 'b-pfeil-labyrinth', fam: 'pfeil-labyrinth', cat: 'Bilder', type: 'number',
      q: 'Starte im gelb umrandeten Feld und gehe immer ein Feld in Pfeilrichtung. Wie viele Schritte brauchst du bis Z?', svg: svgArrowMaze(),
      a: 9, r: [1, 0, 1, 2, 0], ex: 'Rechts, runter, rechts, rechts, runter, links, runter, links, links – 9 Schritte bis Z.' },
    { id: 'b-folien', fam: 'folien', cat: 'Bilder', type: 'number',
      q: 'Die beiden durchsichtigen Folien werden genau übereinandergelegt. Wie viele Felder bleiben dann ohne Punkt?', svg: svgSheets(),
      a: 2, r: [2, 1, 1, 1, 0], ex: 'Links sind die Ecken und die Mitte belegt, rechts die mittlere Spalte. Frei bleiben nur das linke und das rechte Feld der mittleren Zeile.' },
    { id: 'b-wachsende-figur', fam: 'wachsende-figur', cat: 'Bilder', type: 'number',
      q: 'Die Figur wächst immer weiter. Aus wie vielen Kästchen besteht die <b>10.</b> Figur?', svg: svgGrowL(),
      a: 19, r: [2, 1, 1, 1, 0], ex: 'Jede Figur hat 2 Kästchen mehr: 1, 3, 5, 7 … Die 10. hat 2 · 10 − 1 = 19.' },
    { id: 'b-symmetrisch', fam: 'symmetrie-erkennen', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welche Figur ist spiegelsymmetrisch?', svg: svgSymmetry(),
      opts: ['A', 'B', 'C', 'D'], a: 1, r: [1, 1, 1, 0, 0],
      ex: 'Das Herz lässt sich an der senkrechten Mittellinie spiegeln. Das Parallelogramm passt nur nach einer halben Drehung auf sich – gespiegelt nicht. Die Stufe hat ungleiche Schenkel, und Figur D hat nur auf einer Seite eine Spitze.' },

    { id: 'b-formenfolge', fam: 'formenfolge', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welche Figur setzt die Reihe fort?', svg: svgShapeSeq(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [2, 1, 1, 0, 0],
      ex: 'Jede Figur hat eine Ecke mehr (3, 4, 5, 6 – also 7), und gefüllt und leer wechseln sich ab: Das Siebeneck ist gefüllt.' },
    { id: 'b-linien-verfolgen', fam: 'linien-verfolgen', cat: 'Bilder', type: 'number',
      q: 'Folge der Linie, die bei A beginnt. Bei welcher Zahl kommt sie unten an?', svg: svgTangle(),
      a: 3, r: [1, 0, 1, 2, 0], ex: 'Die Linie von A läuft erst weit nach rechts, dann zurück zur Mitte und endet bei 3 – unterwegs kreuzt sie viermal andere Linien.' },
    { id: 'b-spiegeln-ergaenzen', fam: 'spiegeln-ergaenzen', cat: 'Bilder', type: 'number',
      q: 'Das Muster wird an der gestrichelten Linie gespiegelt und ergänzt. Wie viele Kästchen sind danach insgesamt gefärbt?', svg: svgMirrorFill(),
      a: 10, r: [2, 1, 1, 1, 0], ex: 'Die 4 Kästchen links kommen rechts noch einmal dazu (8). Die 2 Kästchen auf der Spiegelachse bleiben, wo sie sind: 10.' },
    { id: 'b-blaetter-stapel', fam: 'stapel-reihenfolge', cat: 'Bilder', type: 'choice',
      q: 'Vier Blätter liegen übereinander. Welches liegt an <b>zweiter</b> Stelle von unten?', svg: svgPaperStack(),
      opts: ['Gelb', 'Lila', 'Pink', 'Türkis'], a: 0, r: [2, 1, 1, 0, 0],
      ex: 'Lila wird von Gelb und Pink verdeckt – es liegt ganz unten. Gelb liegt auf Lila, wird aber selbst von Pink und Türkis verdeckt.' },

    // ================= schwer =================
    { id: 'b-dreiecke-quadrat', fam: 'dreiecke-quadrat', cat: 'Bilder', type: 'number',
      q: 'Wie viele Dreiecke siehst du?', svg: svgSquareTri(),
      a: 16, r: [2, 1, 2, 2, 0], ex: '8 kleine Dreiecke, 4 aus je zwei kleinen (an den Seiten) und 4 große aus je vier kleinen (halbe Quadrate): 16.' },
    { id: 'b-wuerfel-pyramide', fam: 'wuerfel-stapel', cat: 'Bilder', type: 'number',
      q: 'Der Stapel ist innen ganz gefüllt. Aus wie vielen Würfeln besteht er?', svg: svgCubePyramid(),
      a: 14, r: [2, 1, 2, 2, 0], ex: 'Unten 3 × 3 = 9, darüber 2 × 2 = 4, oben 1: 14 – auch die verdeckten Würfel tragen den Stapel.' },
    { id: 'b-wege-gitter', fam: 'wege-zaehlen', cat: 'Bilder', type: 'number',
      q: 'Du gehst auf den Linien von A nach B, immer nur nach rechts oder nach oben. Wie viele verschiedene Wege gibt es?', svg: svgPaths(3, 2),
      a: 10, r: [2, 2, 1, 2, 0], ex: 'Jeder Weg besteht aus 3 Schritten rechts und 2 nach oben. Die 2 Hochschritte kann man auf 10 Arten unter die 5 Schritte verteilen.' },
    { id: 'b-umfang-treppe', fam: 'umfang-treppe', cat: 'Bilder', type: 'number',
      q: 'Alle Ecken der Figur sind rechte Winkel. Wie viele Zentimeter ist ihr Umfang lang?', svg: svgStairPerimeter(),
      a: 20, r: [2, 2, 1, 1, 1], ex: 'Die Stufen nach oben ergeben zusammen 4 cm, die nach links zusammen 6 cm – wie beim Rechteck: 2 · (6 + 4) = 20 cm.' },
    { id: 'b-dreieck-im-rechteck', fam: 'flaechenanteil', cat: 'Bilder', type: 'number',
      q: 'Wie viel Prozent des Rechtecks sind pink gefärbt?', svg: svgHalfTri(),
      a: 50, r: [1, 2, 2, 0, 1], ex: 'Das Dreieck hat die ganze Breite als Grundseite und die ganze Höhe – egal wo die Spitze oben sitzt, ist es halb so groß wie das Rechteck.' },
    { id: 'b-digital-kopfstand', fam: 'kopfstand-digital', cat: 'Bilder', type: 'number',
      q: 'Du stellst die Digitaluhr auf den Kopf. Welche Uhrzeit liest du dann? (Vier Ziffern ohne Doppelpunkt eingeben.)', svg: svgDigital(),
      a: 1501, r: [2, 2, 1, 1, 0], ex: 'Auf dem Kopf kehrt sich die Reihenfolge um, und 1, 5 und 0 sehen gedreht genauso aus: 15:01.' },
    { id: 'b-streichholz-gleichung', fam: 'streichholz-gleichung', cat: 'Bilder', type: 'number',
      q: 'Lege genau <b>ein</b> Streichholz um, damit die Rechnung stimmt. Welche Zahl steht dann ganz vorn?', svg: svgMatchEq(),
      a: 9, r: [2, 2, 1, 1, 0], ex: 'Das senkrechte Holz des Pluszeichens wandert an die 5 und macht daraus eine 9: 9 − 7 = 2.' },
    { id: 'b-papier-lochen', fam: 'papier-falten', cat: 'Bilder', type: 'number',
      q: 'Ein Blatt wird zweimal gefaltet und dann einmal durchgelocht. Wie viele Löcher hat es, wenn man es wieder auffaltet?', svg: svgFold(),
      a: 4, r: [2, 1, 2, 1, 0], ex: 'Nach zwei Faltungen liegen 4 Lagen übereinander – das eine Loch geht durch alle vier.' },
    { id: 'b-ein-strich', fam: 'ein-strich', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welche Figur kannst du in einem Zug zeichnen, ohne abzusetzen und ohne eine Linie doppelt zu ziehen?', svg: svgOneStroke(),
      opts: ['A', 'B', 'C', 'D'], a: 1, r: [2, 2, 1, 1, 0],
      ex: 'Das geht nur, wenn höchstens zwei Punkte eine ungerade Zahl von Linien haben. Bei B sind es genau zwei, bei A, C und D jeweils vier.' },
    { id: 'b-pizza-schnitte', fam: 'flaechen-zaehlen', cat: 'Bilder', type: 'number',
      q: 'Die Pizza wird mit vier geraden Schnitten geteilt. Wie viele Stücke entstehen?', svg: svgPizza(),
      a: 11, r: [2, 1, 1, 2, 0], ex: 'Jeder Schnitt kreuzt alle früheren und bringt so ein Stück mehr als er Kreuzungen hat: 1 + 1 + 2 + 3 + 4 = 11.' },
    { id: 'b-springer', fam: 'springer', cat: 'Bilder', type: 'number',
      q: 'Ein Springer zieht immer zwei Felder geradeaus und dann eins zur Seite. Wie viele Züge braucht er mindestens von S nach Z?', svg: svgKnight(),
      a: 5, r: [3, 1, 2, 2, 0], ex: 'Zum Beispiel a1 → b3 → c1 → d3 → b2 → d1. Auf dem kleinen Brett gibt es keinen kürzeren Weg – der Rand schneidet alle Abkürzungen ab: 5 Züge.' },
    { id: 'b-wuerfel-rollen', fam: 'wuerfel-rollen', cat: 'Bilder', type: 'number',
      q: 'Ein Spielwürfel (Gegenseiten ergeben 7) liegt mit der 1 oben, der 3 rechts und der 2 zum unteren Bildrand. Er kippt Feld für Feld über seine Kanten entlang des Pfeils. Welche Zahl liegt am Ende oben?', svg: svgDiceRoll(),
      a: 3, r: [3, 1, 1, 2, 0], ex: 'Nach rechts kippen holt die linke Seite nach oben: 4. Nochmal rechts: 6 (die alte Unterseite). Nach oben im Bild kippen holt die vordere 2 nach oben. Zuletzt rechts: die 3, die inzwischen links liegt.' },

    { id: 'b-linien-matrix', fam: 'linien-matrix', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welches Feld gehört an die Stelle des Fragezeichens?', svg: svgXorMatrix(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [2, 2, 1, 1, 0],
      ex: 'Legt man die ersten beiden Felder einer Zeile übereinander, verschwinden Linien, die in beiden vorkommen – der Rest ergibt das dritte Feld. Unten bleiben senkrechte, waagrechte und die steigende Diagonale.' },

    // ================= sehr schwer =================
    { id: 'b-punkt-quadrate', fam: 'punkt-quadrate', cat: 'Bilder', type: 'number',
      q: 'Wie viele Quadrate kann man zeichnen, deren vier Ecken alle auf Punkten liegen? (Schräge zählen mit.)', svg: svgDotGrid(),
      a: 20, r: [3, 2, 2, 2, 0], ex: 'Gerade: 9 + 4 + 1 = 14. Schräg: 4 kleine (in je 2 × 2 Kästchen) und 2 große (in 3 × 3) = 6. Zusammen 20.' },
    { id: 'b-muenze-rollt', fam: 'muenze-rollt', cat: 'Bilder', type: 'number',
      q: 'Die gelbe Münze rollt ohne zu rutschen einmal ganz um die gleich große graue herum, bis sie wieder am Start ist. Wie oft hat sie sich dabei um sich selbst gedreht?', svg: svgCoins(),
      a: 2, r: [1, 3, 3, 0, 0], ex: 'Abrollen allein gäbe eine Umdrehung, dazu kommt eine weitere, weil sie dabei selbst einmal im Kreis herumfährt: 2.' },
    { id: 'b-quadrat-ueberlapp', fam: 'ueberlappung', cat: 'Bilder', type: 'number',
      q: 'Beide Quadrate sind gleich groß. Eine Ecke des gelben liegt genau im Mittelpunkt des blauen. Wie viel Prozent des blauen Quadrats werden überdeckt?', svg: svgOverlap(),
      a: 25, r: [2, 3, 2, 0, 1], ex: 'Die beiden Kanten durch den Mittelpunkt schneiden ein Viertel heraus – beim Drehen kommt auf einer Seite so viel dazu, wie auf der anderen wegfällt: 25 %.' },
    { id: 'b-domino-brett', fam: 'domino', cat: 'Bilder', type: 'number',
      q: 'Wie viele Dominosteine (je genau zwei Felder groß) kann man höchstens auf das Brett legen, ohne Überlappung und ohne Überstand?', svg: svgDomino(),
      a: 6, r: [2, 3, 3, 1, 0], ex: 'Färbt man das Brett wie ein Schachbrett, fehlen zwei Felder derselben Farbe: 8 der einen, 6 der anderen. Jeder Stein deckt beide Farben – also höchstens 6. Und 6 Steine lassen sich auch tatsächlich legen.' },
    { id: 'b-fuenfeck-dreiecke', fam: 'dreiecke-stern', cat: 'Bilder', type: 'number',
      q: 'Wie viele Dreiecke siehst du?', svg: svgPentagonStar(),
      a: 35, r: [3, 2, 2, 2, 0], ex: 'Nach Größe sortiert: 5 Sternzacken, 5 stumpfe Dreiecke am Rand, 10 aus Zacke plus stumpfem Dreieck, 10 noch größere und 5 ganz große aus einer Fünfeckseite und der gegenüberliegenden Ecke: 35.' },
    { id: 'b-wuerfel-fehlen', fam: 'wuerfel-stapel', cat: 'Bilder', type: 'number',
      q: 'Jeder Würfel liegt auf dem Boden oder auf einem anderen Würfel. Wie viele Würfel fehlen noch zu einem vollen 3 × 3 × 3-Würfel?', svg: svgMissingCubes(),
      a: 9, r: [2, 2, 2, 2, 0], ex: 'Säulenhöhen von hinten nach vorn: 3, 3, 2 / 3, 2, 1 / 2, 1, 1 = 18 Würfel. 27 − 18 = 9.' },
    { id: 'b-dreiecksgitter', fam: 'dreiecke-gitter', cat: 'Bilder', type: 'number',
      q: 'Wie viele Dreiecke siehst du?', svg: svgTriGrid(),
      a: 13, r: [2, 2, 2, 2, 0], ex: '9 kleine (6 aufrechte, 3 auf dem Kopf), 3 mittlere aus je vier kleinen und das große: 13.' },
    { id: 'b-hoelzer-weg', fam: 'hoelzer-wegnehmen', cat: 'Bilder', type: 'number',
      q: 'Wie viele Streichhölzer musst du mindestens wegnehmen, damit kein einziges Quadrat (egal welcher Größe) übrig bleibt?', svg: svgStickGrid(),
      a: 6, r: [3, 2, 2, 2, 0], ex: 'Die 9 kleinen Quadrate brauchen mindestens 5 Hölzer (ein inneres Holz trifft höchstens zwei). Mit 5 bleibt immer ein Quadrat stehen; mit 6 geht es, z. B. mit 4 inneren und 2 äußeren Hölzern.' },
    { id: 'b-wege-baustelle', fam: 'wege-zaehlen', cat: 'Bilder', type: 'number',
      q: 'Du gehst auf den Linien von A nach B, immer nur nach rechts oder oben. Durch den roten Kreuzungspunkt darfst du nicht. Wie viele verschiedene Wege gibt es?', svg: svgPaths(3, 3, [1, 1]),
      a: 8, r: [3, 2, 1, 2, 0], ex: 'Ohne Sperre gäbe es 20 Wege. Durch den gesperrten Punkt führen 2 · 6 = 12 davon. Übrig bleiben 8.' },
  ]);
})();

// ---- bildlogik.js ----
// Bildlogik (Kategorie „Bilder“, Präfix p-) – Antworten sind Buchstaben/Optionen oder Wörter, keine Zahlen.
(function () {
  const { svg, gearPath } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // ---------- Bausteine ----------
  const PINK = '#ff7ab6', CYAN = '#22d3ee', GOLD = '#ffc940', WHITE = '#f3f4ff', VIOLET = '#a78bfa', DARK = '#1a1240',
    GREEN = '#34d399', BROWN = '#c08457', RED = '#ff4d6d', SOFT = '#b9bde8';
  const f1 = (v) => Math.round(v * 10) / 10;
  const pts = (arr) => arr.map(([x, y]) => `${f1(x)},${f1(y)}`).join(' ');
  const ln = (x1, y1, x2, y2, extra = '') => `<line class="ln" x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}"${extra ? ' ' + extra : ''}/>`;
  const tx = (x, y, t, size = 16, extra = '') => `<text class="tx" x="${f1(x)}" y="${f1(y)}"${extra.includes('text-anchor') ? '' : ' text-anchor="middle"'} font-size="${size}" font-weight="700"${extra ? ' ' + extra : ''}>${t}</text>`;
  const poly = (arr, extra) => `<polygon points="${pts(arr)}" ${extra}/>`;
  const path = (d, extra) => `<path d="${d}" ${extra}/>`;
  const ngon = (cx, cy, r, n, rot = -90) => Array.from({ length: n }, (_, i) => {
    const a = (rot + i * 360 / n) * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });
  const box = (x, y, w, h) => `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="8" fill="rgba(255,255,255,.05)" stroke="${VIOLET}" stroke-width="2"/>`;
  const L = 'ABCDEFGH';

  // ---------- Piktogramme ----------
  function iconTree(cx, cy, s = 1) {
    return `<rect x="${f1(cx - 7 * s)}" y="${f1(cy + 4 * s)}" width="${f1(14 * s)}" height="${f1(34 * s)}" fill="${BROWN}"/>` +
      `<circle cx="${f1(cx)}" cy="${f1(cy - 18 * s)}" r="${f1(24 * s)}" fill="${GREEN}"/>` +
      `<circle cx="${f1(cx - 20 * s)}" cy="${f1(cy)}" r="${f1(16 * s)}" fill="${GREEN}"/>` +
      `<circle cx="${f1(cx + 20 * s)}" cy="${f1(cy)}" r="${f1(16 * s)}" fill="${GREEN}"/>`;
  }
  function iconHouse(cx, cy, s = 1) {
    return `<rect x="${f1(cx - 26 * s)}" y="${f1(cy - 6 * s)}" width="${f1(52 * s)}" height="${f1(44 * s)}" fill="${CYAN}"/>` +
      poly([[cx - 34 * s, cy - 4 * s], [cx, cy - 36 * s], [cx + 34 * s, cy - 4 * s]], `fill="${PINK}"`) +
      `<rect x="${f1(cx - 7 * s)}" y="${f1(cy + 14 * s)}" width="${f1(14 * s)}" height="${f1(24 * s)}" fill="${DARK}"/>` +
      `<rect x="${f1(cx + 10 * s)}" y="${f1(cy + 2 * s)}" width="${f1(10 * s)}" height="${f1(10 * s)}" fill="${DARK}"/>`;
  }
  function iconFish(cx, cy, s = 1) {
    return poly([[cx + 20 * s, cy], [cx + 42 * s, cy - 16 * s], [cx + 42 * s, cy + 16 * s]], `fill="${GOLD}"`) +
      `<ellipse cx="${f1(cx - 4 * s)}" cy="${f1(cy)}" rx="${f1(30 * s)}" ry="${f1(17 * s)}" fill="${GOLD}"/>` +
      `<circle cx="${f1(cx - 20 * s)}" cy="${f1(cy - 4 * s)}" r="${f1(3.5 * s)}" fill="${DARK}"/>` +
      path(`M ${f1(cx - 2 * s)} ${f1(cy - 12 * s)} Q ${f1(cx + 6 * s)} ${f1(cy)} ${f1(cx - 2 * s)} ${f1(cy + 12 * s)}`, `fill="none" stroke="${DARK}" stroke-width="2"`);
  }
  function iconClock(cx, cy, r = 30) {
    let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${WHITE}" stroke="${VIOLET}" stroke-width="4"/>`;
    for (let i = 0; i < 12; i += 3) {
      const a = i * Math.PI / 6;
      s += `<line x1="${f1(cx + r * 0.72 * Math.sin(a))}" y1="${f1(cy - r * 0.72 * Math.cos(a))}" x2="${f1(cx + r * 0.88 * Math.sin(a))}" y2="${f1(cy - r * 0.88 * Math.cos(a))}" stroke="${DARK}" stroke-width="3" stroke-linecap="round"/>`;
    }
    s += `<line x1="${cx}" y1="${cy}" x2="${cx}" y2="${f1(cy - r * 0.62)}" stroke="${DARK}" stroke-width="3.5" stroke-linecap="round"/>`;
    s += `<line x1="${cx}" y1="${cy}" x2="${f1(cx + r * 0.42)}" y2="${f1(cy + r * 0.1)}" stroke="${DARK}" stroke-width="4.5" stroke-linecap="round"/>`;
    return s + `<circle cx="${cx}" cy="${cy}" r="3" fill="${PINK}"/>`;
  }
  function iconHand(cx, cy, s = 1) {
    const sk = `fill="#f5c9a0" stroke="${BROWN}" stroke-width="1.5"`;
    let o = `<rect x="${f1(cx - 18 * s)}" y="${f1(cy - 6 * s)}" width="${f1(36 * s)}" height="${f1(34 * s)}" rx="${f1(9 * s)}" ${sk}/>`;
    [[-15, 30], [-5, 36], [5, 38], [15, 32]].forEach(([dx, h]) => {
      o += `<rect x="${f1(cx + (dx - 4.5) * s)}" y="${f1(cy - (h - 4) * s)}" width="${f1(9 * s)}" height="${f1(h * s)}" rx="${f1(4.5 * s)}" ${sk}/>`;
    });
    o += `<rect x="${f1(cx - 24 * s)}" y="${f1(cy - 2 * s)}" width="${f1(10 * s)}" height="${f1(26 * s)}" rx="${f1(5 * s)}" transform="rotate(-32 ${f1(cx - 18 * s)} ${f1(cy + 22 * s)})" ${sk}/>`;
    o += `<rect x="${f1(cx - 17 * s)}" y="${f1(cy - 2 * s)}" width="${f1(34 * s)}" height="${f1(28 * s)}" rx="${f1(8 * s)}" fill="#f5c9a0"/>`;
    return o;
  }
  function iconEgg(cx, cy, s = 1) {
    return path(`M ${f1(cx)} ${f1(cy - 30 * s)} C ${f1(cx + 22 * s)} ${f1(cy - 30 * s)} ${f1(cx + 26 * s)} ${f1(cy + 26 * s)} ${f1(cx)} ${f1(cy + 26 * s)} C ${f1(cx - 26 * s)} ${f1(cy + 26 * s)} ${f1(cx - 22 * s)} ${f1(cy - 30 * s)} ${f1(cx)} ${f1(cy - 30 * s)} Z`, `fill="#fff4dc" stroke="${BROWN}" stroke-width="2"`);
  }
  function iconRing(cx, cy, s = 1) {
    return `<circle cx="${cx}" cy="${f1(cy + 8 * s)}" r="${f1(20 * s)}" fill="none" stroke="${GOLD}" stroke-width="${f1(6 * s)}"/>` +
      poly([[cx, cy - 26 * s], [cx + 11 * s, cy - 16 * s], [cx, cy - 6 * s], [cx - 11 * s, cy - 16 * s]], `fill="${CYAN}" stroke="${WHITE}" stroke-width="1.5"`);
  }

  // ---------- Grafiken: leicht/mittel ----------

  // Baum + Haus
  function svgBaumHaus() {
    return svg('0 0 280 120', iconTree(70, 54, 1.05) + tx(140, 72, '+', 40) + iconHouse(210, 62, 1.15));
  }

  // Schattenlängen: alle Schatten so lang wie der Pfahl hoch ist – außer einem
  function svgSchatten() {
    const g = 150;
    const sy = 30; // Sonne hoch links: Schatten ≈ 0,6 × Pfahlhöhe entspricht etwa 60° Sonnenhöhe
    let s = `<rect x="8" y="${g}" width="284" height="10" fill="rgba(255,255,255,.06)"/><circle cx="30" cy="${sy}" r="14" fill="${GOLD}"/>`;
    for (let i = 0; i < 8; i++) {
      const a = i * Math.PI / 4;
      s += `<line x1="${f1(30 + 18 * Math.cos(a))}" y1="${f1(sy + 18 * Math.sin(a))}" x2="${f1(30 + 25 * Math.cos(a))}" y2="${f1(sy + 25 * Math.sin(a))}" stroke="${GOLD}" stroke-width="3" stroke-linecap="round"/>`;
    }
    const posts = [[60, 50, 30], [126, 90, 20], [192, 70, 42], [250, 34, 20]]; // Schatten = 0,6 × Höhe, nur B zu kurz
    posts.forEach(([x, h, sl], i) => {
      s += poly([[x + 6, g], [x + 6 + sl, g], [x + 6 + sl, g + 7], [x + 6, g + 7]], `fill="#5a5296"`);
      s += `<rect x="${x - 6}" y="${g - h}" width="12" height="${h}" fill="${CYAN}"/>`;
      s += tx(x, g + 30, L[i]);
    });
    s += ln(8, g, 292, g, 'stroke-width="2"');
    return svg('0 0 300 186', s);
  }

  // Roboter und Schattenrisse
  function robot(cx, cy, { antL = true, armRUp = true, armLUp = false, fill = null } = {}) {
    const c = (k) => fill || k;
    let s = '';
    const ax = antL ? cx - 11 : cx + 11;
    s += `<line x1="${ax}" y1="${cy - 34}" x2="${ax}" y2="${cy - 46}" stroke="${c(SOFT)}" stroke-width="3"/><circle cx="${ax}" cy="${cy - 48}" r="4.5" fill="${c(PINK)}"/>`;
    s += `<rect x="${cx - 16}" y="${cy - 36}" width="32" height="24" rx="4" fill="${c(CYAN)}"/>`;
    if (!fill) s += `<circle cx="${cx - 7}" cy="${cy - 25}" r="3.5" fill="${DARK}"/><circle cx="${cx + 7}" cy="${cy - 25}" r="3.5" fill="${DARK}"/>`;
    s += `<rect x="${cx - 20}" y="${cy - 10}" width="40" height="34" rx="4" fill="${c(VIOLET)}"/>`;
    const arm = (side, up) => up
      ? `<rect x="${side < 0 ? cx - 29 : cx + 21}" y="${cy - 52}" width="8" height="46" rx="4" fill="${c(GOLD)}"/>`
      : `<rect x="${side < 0 ? cx - 29 : cx + 21}" y="${cy - 8}" width="8" height="30" rx="4" fill="${c(GOLD)}"/>`;
    s += arm(-1, armLUp) + arm(1, armRUp);
    s += `<rect x="${cx - 15}" y="${cy + 24}" width="9" height="18" fill="${c(SOFT)}"/><rect x="${cx + 6}" y="${cy + 24}" width="9" height="18" fill="${c(SOFT)}"/>`;
    return s;
  }
  function svgSilhouette() {
    let s = robot(150, 62);
    const opts = [
      { antL: false, armRUp: false, armLUp: true },  // gespiegelt
      { antL: true, armRUp: true, armLUp: false },   // richtig
      { antL: true, armRUp: false, armLUp: true },   // falscher Arm
      { antL: false, armRUp: true, armLUp: false },  // Antenne falsch
    ];
    opts.forEach((o, i) => {
      const cx = 40 + i * 73;
      s += robot(cx, 176, { ...o, fill: '#6d63c9' }) + tx(cx, 244, L[i]);
    });
    return svg('0 0 300 254', s);
  }

  // Ecken werden der Reihe nach abgeschnitten
  function cutSquare(cx, cy, k, col, sz = 46) {
    const h = sz / 2, c = 14;
    const corners = [[cx - h, cy - h], [cx + h, cy - h], [cx + h, cy + h], [cx - h, cy + h]];
    const p = [];
    corners.forEach(([x, y], i) => {
      if (!k.includes(i)) { p.push([x, y]); return; }
      const prev = corners[(i + 3) % 4], next = corners[(i + 1) % 4];
      const toward = (a, b) => [a[0] + Math.sign(b[0] - a[0]) * c, a[1] + Math.sign(b[1] - a[1]) * c];
      p.push(toward([x, y], prev), toward([x, y], next));
    });
    return poly(p, `fill="${col}"`);
  }
  function svgEckenFolge() {
    let s = '';
    const seq = [[[], PINK], [[0], CYAN], [[0, 1], PINK], [[0, 1, 2], CYAN]];
    seq.forEach(([k, col], i) => { s += cutSquare(34 + i * 58, 36, k, col); });
    s += tx(34 + 4 * 58, 48, '?', 34);
    const opts = [[[0, 1, 2, 3], CYAN], [[0, 1, 3], PINK], [[0, 1, 2, 3], PINK], [[], PINK]];
    opts.forEach(([k, col], i) => {
      const cx = 40 + i * 73;
      s += box(cx - 32, 84, 64, 64) + cutSquare(cx, 116, k, col) + tx(cx, 172, L[i]);
    });
    return svg('0 0 300 182', s);
  }

  // Würfelnetze
  const NETS_KEIN = [
    [[0, 0], [1, 0], [1, 1], [2, 1], [3, 1], [3, 2]],
    [[0, 0], [1, 0], [2, 0], [2, 1], [3, 1], [4, 1]],
    [[0, 0], [2, 0], [0, 1], [1, 1], [2, 1], [3, 1]], // kein Würfel: beide Klappen landen oben
    [[1, 0], [0, 1], [1, 1], [2, 1], [3, 1], [3, 2]],
  ];
  function svgNetze() {
    let s = '';
    const c = 22;
    NETS_KEIN.forEach((net, i) => {
      const bx = (i % 2) * 150, by = Math.floor(i / 2) * 104;
      const w = (Math.max(...net.map(p => p[0])) + 1) * c, h = (Math.max(...net.map(p => p[1])) + 1) * c;
      const ox = bx + 22 + (108 - w) / 2, oy = by + 8 + (70 - h) / 2;
      net.forEach(([x, y]) => { s += `<rect class="cell" x="${ox + x * c}" y="${oy + y * c}" width="${c}" height="${c}"/>`; });
      s += tx(bx + 4, by + 30, L[i], 18, 'text-anchor="start"');
    });
    return svg('0 0 300 200', s);
  }

  // Zahnräder unterschiedlicher Größe
  function svgZahnradSchnell() {
    const G = [[60, 92, 38, 16], [120, 72, 16, 7], [169, 98, 28, 12], [218, 64, 20, 8]];
    let s = '';
    G.forEach(([x, y, r, t], i) => { s += gearPath(x, y, r, t, i * 0.2); });
    const lab = [[60, 152], [120, 40], [169, 150], [252, 40]];
    lab.forEach(([x, y], i) => { s += tx(x, y, L[i], 18); });
    return svg('0 0 280 166', s);
  }

  // 3×3: Viertelkreis wandert im Uhrzeigersinn
  function quarter(x, y, w, corner, col) {
    const C = [[x, y], [x + w, y], [x + w, y + w], [x, y + w]][corner];
    const r = w * 0.55;
    const dx = corner === 0 || corner === 3 ? 1 : -1, dy = corner < 2 ? 1 : -1;
    const sweep = (dx * dy > 0) ? 1 : 0;
    return path(`M ${C[0]} ${C[1]} L ${C[0] + dx * r} ${C[1]} A ${r} ${r} 0 0 ${sweep} ${C[0]} ${C[1] + dy * r} Z`, `fill="${col}"`);
  }
  function svgMatrixDrehen() {
    const w = 60, x0 = 60, y0 = 6, cols = [PINK, CYAN, GOLD];
    const start = [0, 1, 2];
    let s = '';
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
      const x = x0 + c * w, y = y0 + r * w;
      s += `<rect class="cell" x="${x}" y="${y}" width="${w}" height="${w}"/>`;
      if (r === 2 && c === 2) s += tx(x + w / 2, y + w / 2 + 11, '?', 30);
      else s += quarter(x + 6, y + 6, w - 12, (start[r] + c) % 4, cols[r]);
    }
    const opts = [[1, GOLD], [3, GOLD], [0, CYAN], [0, GOLD]];
    opts.forEach(([k, col], i) => {
      const x = 12 + i * 72, y = 198;
      s += box(x, y, w, w) + quarter(x + 6, y + 6, w - 12, k, col) + tx(x + w / 2, y + w + 20, L[i]);
    });
    return svg('0 0 300 284', s);
  }

  // Schilder am See (ohne Spiegelbild)
  function svgSeeWoerter() {
    const W = ['ECHO', 'KINO', 'HOSE', 'CHOR'];
    let s = `<rect x="0" y="92" width="300" height="58" fill="rgba(34,211,238,.18)"/>`;
    for (let i = 0; i < 6; i++) s += path(`M ${20 + i * 46} ${112 + (i % 2) * 18} q 8 -5 16 0 t 16 0`, `fill="none" stroke="${CYAN}" stroke-width="2" opacity=".6"`);
    W.forEach((w, i) => {
      const cx = 40 + i * 73;
      s += `<rect x="${cx - 3}" y="56" width="6" height="36" fill="${BROWN}"/>`;
      s += `<rect x="${cx - 33}" y="22" width="66" height="34" rx="5" fill="${WHITE}"/>`;
      s += `<text x="${cx}" y="47" text-anchor="middle" font-size="20" font-weight="800" fill="${DARK}" font-family="sans-serif">${w}</text>`;
    });
    return svg('0 0 300 150', s);
  }

  // Fisch, F = T
  function svgFischTisch() {
    return svg('0 0 240 120', iconFish(96, 46, 1.2) + tx(110, 108, 'F = T', 26));
  }

  // Welche Figur sieht auf dem Kopf genauso aus?
  function svgKopfstand() {
    let s = '';
    const cx = [40, 113, 186, 259], cy = 52;
    s += path(`M ${cx[0]} ${cy + 26} L ${cx[0] - 26} ${cy - 2} A 13 13 0 0 1 ${cx[0]} ${cy - 18} A 13 13 0 0 1 ${cx[0] + 26} ${cy - 2} Z`, `fill="${PINK}"`);
    s += path(`M ${cx[1] + 15.3} ${cy - 25.8} A 30 30 0 1 0 ${cx[1] + 15.3} ${cy + 25.8} A 26 26 0 1 1 ${cx[1] + 15.3} ${cy - 25.8} Z`, `fill="${GOLD}"`);
    s += poly([[cx[2] - 27, cy - 18], [cx[2] + 9, cy - 18], [cx[2] + 9, cy], [cx[2] + 27, cy], [cx[2] + 27, cy + 18], [cx[2] - 9, cy + 18], [cx[2] - 9, cy], [cx[2] - 27, cy]], `fill="${CYAN}"`);
    s += poly([[cx[3], cy - 30], [cx[3] + 24, cy - 4], [cx[3] + 9, cy - 4], [cx[3] + 9, cy + 28], [cx[3] - 9, cy + 28], [cx[3] - 9, cy - 4], [cx[3] - 24, cy - 4]], `fill="${GREEN}"`);
    cx.forEach((x, i) => { s += tx(x, 112, L[i]); });
    return svg('0 0 300 122', s);
  }

  // ---------- Grafiken: schwer ----------

  // Isometrische Würfel (Betrachter von +x,+y,+z; rechte Seite = +x, linke Seite = +y)
  function isoCubes(list, { ox = 150, oy = 60, c = 26, top = '#a5f3fc', left = '#22d3ee', right = '#0e7490', stroke = '#0a0d24' } = {}) {
    const a = c * Math.cos(Math.PI / 6), b = c * 0.5;
    const P = (x, y, z) => [ox + (x - y) * a, oy + (x + y) * b - z * c];
    const sorted = [...list].sort((p, q) => (p[0] + p[1] + p[2]) - (q[0] + q[1] + q[2]) || p[2] - q[2]);
    let s = '';
    for (const [x, y, z, col] of sorted) {
      const T = col ? col[0] : top, Lc = col ? col[1] : left, R = col ? col[2] : right;
      const st = `stroke="${stroke}" stroke-width="1.6" stroke-linejoin="round"`;
      s += poly([P(x, y, z + 1), P(x + 1, y, z + 1), P(x + 1, y + 1, z + 1), P(x, y + 1, z + 1)], `fill="${T}" ${st}`);
      s += poly([P(x + 1, y, z), P(x + 1, y + 1, z), P(x + 1, y + 1, z + 1), P(x + 1, y, z + 1)], `fill="${R}" ${st}`);
      s += poly([P(x, y + 1, z), P(x + 1, y + 1, z), P(x + 1, y + 1, z + 1), P(x, y + 1, z + 1)], `fill="${Lc}" ${st}`);
    }
    return s;
  }
  // zentriert einen Würfelbau auf (cx, cy)
  function isoAt(list, cx, cy, c, opt = {}) {
    const a = c * Math.cos(Math.PI / 6), b = c * 0.5;
    const xs = [], ys = [];
    for (const [x, y, z] of list) for (const [dx, dy, dz] of [[0, 0, 1], [1, 0, 1], [0, 1, 1], [1, 1, 0], [1, 0, 0], [0, 1, 0], [1, 1, 1]]) {
      xs.push((x + dx - y - dy) * a); ys.push((x + dx + y + dy) * b - (z + dz) * c);
    }
    const ox = cx - (Math.min(...xs) + Math.max(...xs)) / 2, oy = cy - (Math.min(...ys) + Math.max(...ys)) / 2;
    return isoCubes(list, { ...opt, ox, oy, c });
  }
  const norm3 = (cs) => { const m = [0, 1, 2].map(k => Math.min(...cs.map(p => p[k]))); return cs.map(p => p.map((v, k) => v - m[k])); };
  const rotZ = (cs, n) => { let r = cs; for (let i = 0; i < n; i++) r = r.map(([x, y, z]) => [y, -x, z]); return norm3(r); };
  const mirX = (cs) => norm3(cs.map(([x, y, z]) => [-x, y, z]));

  // 3D-Bau: gedreht oder gespiegelt?
  // Turm aus drei Würfeln + L-förmige Reihe; in jeder gezeigten Lage ist jeder Würfel sichtbar (z-Buffer geprüft)
  const BAU = [[0, 0, 0], [0, 0, 1], [0, 0, 2], [1, 0, 0], [2, 0, 0], [2, 1, 0]];
  const BAU_OPTS = [mirX(rotZ(BAU, 2)), mirX(BAU), mirX(rotZ(BAU, 3)), rotZ(BAU, 1)]; // nur D ist echt gedreht (Vierteldrehung)
  function svgBau3D() {
    let s = isoAt(BAU, 150, 58, 19);
    BAU_OPTS.forEach((cs, i) => {
      const bx = 6 + i * 74;
      s += box(bx, 118, 68, 84) + isoAt(cs, bx + 34, 160, 13) + tx(bx + 34, 224, L[i]);
    });
    return svg('0 0 304 234', s);
  }

  // Farbiges Würfelnetz (Kreuz) und vier Würfel
  const NETZ_FARBEN = [[1, 0, PINK], [1, 1, CYAN], [1, 2, GOLD], [1, 3, GREEN], [0, 1, WHITE], [2, 1, VIOLET]];
  const FARBWUERFEL = [[PINK, CYAN, VIOLET], [CYAN, PINK, GOLD], [WHITE, PINK, CYAN], [VIOLET, CYAN, PINK]]; // [oben, links, rechts] – bunte Seite außen: nur A möglich (B: Gegenseiten, C/D: spiegelverkehrt)
  function svgFarbNetz() {
    let s = '';
    const c = 30, x0 = 10, y0 = 14;
    for (const [x, y, col] of NETZ_FARBEN) s += `<rect x="${x0 + x * c}" y="${y0 + y * c}" width="${c}" height="${c}" fill="${col}" stroke="#0a0d24" stroke-width="2"/>`;
    FARBWUERFEL.forEach(([t, l, r], i) => {
      const cx = 140 + (i % 2) * 80, cy = 12 + Math.floor(i / 2) * 76;
      s += isoAt([[0, 0, 0, [t, l, r]]], cx + 34, cy + 36, 30) + tx(cx - 4, cy + 30, L[i], 18);
    });
    return svg('0 0 300 164', s);
  }

  // Labyrinth 8 × 8: Zellcode 1 = Wand rechts, 2 = Wand unten (verifiziert per Breitensuche)
  const MAZE = '2100322102323221321032012221011301223123302222312310203122232223';
  const MAZE_ENT = [[2, 0, 'N'], [7, 2, 'E'], [5, 7, 'S'], [0, 5, 'W']];
  function svgLabyrinth() {
    const c = 26, ox = 46, oy = 30, n = 8;
    let s = '';
    const W = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${CYAN}" stroke-width="3" stroke-linecap="round"/>`;
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) {
      const v = +MAZE[y * n + x], X = ox + x * c, Y = oy + y * c;
      const ent = (side) => MAZE_ENT.some(e => e[0] === x && e[1] === y && e[2] === side);
      if (v & 1 && !ent('E')) s += W(X + c, Y, X + c, Y + c);
      if (v & 2 && !ent('S')) s += W(X, Y + c, X + c, Y + c);
      if (y === 0 && !ent('N')) s += W(X, Y, X + c, Y);
      if (x === 0 && !ent('W')) s += W(X, Y, X, Y + c);
    }
    // Ziel (Stern) in Zelle 3,3
    s += poly(Array.from({ length: 10 }, (_, i) => { const a = (-90 + i * 36) * Math.PI / 180, r = i % 2 ? 4.5 : 10; return [ox + 3.5 * c + r * Math.cos(a), oy + 3.5 * c + r * Math.sin(a)]; }), `fill="${GOLD}"`);
    const lab = [[ox + 2.5 * c, oy - 12], [ox + 8 * c + 14, oy + 2.5 * c + 6], [ox + 5.5 * c, oy + 8 * c + 22], [ox - 14, oy + 5.5 * c + 6]];
    lab.forEach(([x, y], i) => { s += tx(x, y, L[i], 18); });
    return svg('0 0 300 270', s);
  }

  // Eimer an Zahnrädern
  function svgEimer() {
    const X = [40, 96, 152, 208], y = 56, r = 26;
    const side = [1, -1, -1, -1]; // Seil rechts (+1) oder links (−1) an der Trommel
    let s = '';
    X.forEach((x, i) => { s += gearPath(x, y, r, 11, i % 2 ? Math.PI / 11 : 0); });
    X.forEach((x, i) => {
      const rx = x + side[i] * 15;
      s += `<line x1="${rx}" y1="${y}" x2="${rx}" y2="${150}" stroke="${WHITE}" stroke-width="3"/>`;
      s += `<circle cx="${x}" cy="${y}" r="15" fill="#6d28d9" stroke="${WHITE}" stroke-width="2"/>`;
      s += path(`M ${rx - 11} 150 L ${rx + 11} 150 L ${rx + 8} 174 L ${rx - 8} 174 Z`, `fill="${GOLD}"`) + path(`M ${rx - 11} 150 Q ${rx} 139 ${rx + 11} 150`, `fill="none" stroke="${GOLD}" stroke-width="2"`);
      s += tx(rx, 198, L[i], 18);
    });
    const ad = `<defs><marker id="p-ah1" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${GOLD}"/></marker></defs>`;
    s += path(`M ${X[0] - 26} ${y - 34} A 40 40 0 0 1 ${X[0] + 26} ${y - 34}`, `fill="none" stroke="${GOLD}" stroke-width="3.5" marker-end="url(#p-ah1)"`);
    return svg('0 0 250 210', ad + s);
  }

  // Ringe: an jeder Kreuzung liegt einer oben, der untere hat dort eine Lücke
  function ringArcs(cx, cy, R, gaps, col, half = 0.3) {
    // Kreis als Bögen zwischen den Lücken (gaps = Winkel in rad)
    const g = [...gaps].map(a => (a + 2 * Math.PI) % (2 * Math.PI)).sort((p, q) => p - q);
    if (!g.length) return `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="${col}" stroke-width="7"/>`;
    let d = '';
    g.forEach((a, i) => {
      const s0 = a + half, e0 = (i + 1 < g.length ? g[i + 1] : g[0] + 2 * Math.PI) - half;
      const large = e0 - s0 > Math.PI ? 1 : 0;
      d += `M ${f1(cx + R * Math.cos(s0))} ${f1(cy + R * Math.sin(s0))} A ${R} ${R} 0 ${large} 1 ${f1(cx + R * Math.cos(e0))} ${f1(cy + R * Math.sin(e0))} `;
    });
    return path(d, `fill="none" stroke="${col}" stroke-width="7" stroke-linecap="butt"`);
  }
  function svgRinge() {
    const R = 32, d = 50, y = 62, cols = [PINK, CYAN, GOLD, GREEN, VIOLET];
    const X = cols.map((_, i) => 50 + i * d);
    // je Paar (i,i+1): wer liegt oben an der oberen bzw. unteren Kreuzung (0 = linker Ring, 1 = rechter Ring)
    const over = [[0, 1], [1, 0], [0, 0], [0, 1]]; // C–D: C liegt an beiden Stellen oben → nicht verhakt
    const gaps = X.map(() => []);
    const h = Math.sqrt(R * R - (d / 2) ** 2);
    over.forEach(([top, bot], i) => {
      [[top, -h], [bot, h]].forEach(([w, dy]) => {
        const k = i + 1 - w; // der untere Ring bekommt die Lücke
        gaps[k].push(Math.atan2(dy, (X[i] + d / 2) - X[k]));
      });
    });
    let s = '';
    X.forEach((x, i) => { s += ringArcs(x, y, R, gaps[i], cols[i]) + tx(x, y + R + 30, L[i], 18); });
    return svg('0 0 300 128', s);
  }

  // Schnur mit drei Kreuzungen (Kleeblatt-Form, aufgeschnitten)
  function knotCurve() {
    const P = [];
    const d = 0.32, n = 260;
    for (let i = 0; i <= n; i++) {
      const t = Math.PI + d + (2 * Math.PI - 2 * d) * i / n;
      P.push([Math.sin(t) + 2 * Math.sin(2 * t), -(Math.cos(t) - 2 * Math.cos(2 * t))]);
    }
    const ext = (a, b) => { const dx = a[0] - b[0], dy = a[1] - b[1], l = Math.hypot(dx, dy); return [a[0] + dx / l * 0.9, a[1] + dy / l * 0.9]; };
    P.unshift(ext(P[0], P[3])); P.push(ext(P[P.length - 1], P[P.length - 4]));
    return P;
  }
  function knotCrossings(P) {
    const X = [];
    for (let i = 0; i < P.length - 1; i++) for (let j = i + 2; j < P.length - 1; j++) {
      const [a, b] = [P[i], P[i + 1]], [c, e] = [P[j], P[j + 1]];
      const den = (b[0] - a[0]) * (e[1] - c[1]) - (b[1] - a[1]) * (e[0] - c[0]);
      if (Math.abs(den) < 1e-12) continue;
      const t = ((c[0] - a[0]) * (e[1] - c[1]) - (c[1] - a[1]) * (e[0] - c[0])) / den;
      const u = ((c[0] - a[0]) * (b[1] - a[1]) - (c[1] - a[1]) * (b[0] - a[0])) / den;
      if (t >= 0 && t < 1 && u >= 0 && u < 1) X.push([i, j]);
    }
    return X;
  }
  // pattern: je Kreuzung (sortiert nach erstem Durchlauf) true = beim ersten Durchlauf oben; der untere Strang bekommt eine Lücke
  function svgKnotCell(ox, oy, sc, pattern, col) {
    const P = knotCurve().map(([x, y]) => [ox + x * sc, oy + y * sc]);
    const X = knotCrossings(P).sort((p, q) => p[0] - q[0]);
    const skip = new Set();
    X.forEach(([i, j], k) => { const u = pattern[k] ? j : i; for (let m = u - 3; m <= u + 4; m++) skip.add(m); });
    let d = '', pen = false;
    P.forEach((p, m) => {
      if (skip.has(m)) { pen = false; return; }
      d += `${pen ? 'L' : 'M'} ${f1(p[0])} ${f1(p[1])} `; pen = true;
    });
    return path(d, `fill="none" stroke="${col}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"`);
  }
  function svgKnoten() {
    // Durchläufe entlang der Schnur: Kreuzung 1,2,3,1,2,3 – abwechselnd über/unter ⇔ pattern [true,false,true]
    const pats = [[true, false, true], [true, true, false], [false, true, true], [true, true, true]];
    let s = '';
    pats.forEach((p, i) => {
      const cx = 78 + (i % 2) * 148, cy = 64 + Math.floor(i / 2) * 128;
      s += svgKnotCell(cx, cy, 15.5, p, [PINK, CYAN, GOLD, GREEN][i]) + tx(cx - 66, cy - 40, L[i], 18);
    });
    return svg('0 0 300 254', s);
  }

  // Papier zweimal falten, dann schneiden
  function paper(x, y, w, h, holes = '') {
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${WHITE}"/>` + holes;
  }
  function unfolded(x, y, s, { center = true, corners = false, notchLR = [true, true], notchTB = false }) {
    // Blatt s×s; Kerben = Dreiecke
    const B = DARK, q = s / 4, k = s * 0.1;
    let o = `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="${WHITE}"/>`;
    if (center) o += `<circle cx="${x + s / 2}" cy="${y + s / 2}" r="${s * 0.12}" fill="${B}"/>`;
    if (corners) for (const [cx, cy, sx, sy] of [[x, y, 1, 1], [x + s, y, -1, 1], [x, y + s, 1, -1], [x + s, y + s, -1, -1]]) {
      const r = s * 0.12;
      o += path(`M ${cx} ${cy} L ${cx + sx * r} ${cy} A ${r} ${r} 0 0 ${sx * sy > 0 ? 1 : 0} ${cx} ${cy + sy * r} Z`, `fill="${B}"`);
    }
    for (const yy of [y + q, y + 3 * q]) {
      if (notchLR[1]) o += poly([[x + s, yy - k], [x + s - k * 1.3, yy], [x + s, yy + k]], `fill="${B}"`);
      if (notchLR[0]) o += poly([[x, yy - k], [x + k * 1.3, yy], [x, yy + k]], `fill="${B}"`);
    }
    if (notchTB) for (const xx of [x + q, x + 3 * q]) {
      o += poly([[xx - k, y], [xx, y + k * 1.3], [xx + k, y]], `fill="${B}"`) + poly([[xx - k, y + s], [xx, y + s - k * 1.3], [xx + k, y + s]], `fill="${B}"`);
    }
    return o;
  }
  function svgPapier() {
    const ad = `<defs><marker id="p-ah2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${GOLD}"/></marker></defs>`;
    let s = ad;
    // 1: senkrecht falten (links auf rechts)
    s += paper(14, 24, 70, 70) + `<line x1="49" y1="20" x2="49" y2="98" stroke="${PINK}" stroke-width="2.5" stroke-dasharray="5 4"/>`;
    s += path('M 26 50 Q 49 28 72 50', `fill="none" stroke="${GOLD}" stroke-width="3" marker-end="url(#p-ah2)"`);
    // 2: waagrecht falten (oben auf unten)
    s += paper(124, 24, 35, 70) + `<line x1="120" y1="59" x2="163" y2="59" stroke="${PINK}" stroke-width="2.5" stroke-dasharray="5 4"/>`;
    s += path('M 168 36 Q 184 59 168 82', `fill="none" stroke="${GOLD}" stroke-width="3" marker-end="url(#p-ah2)"`);
    // 3: schneiden (Faltkanten: links und oben)
    const x = 214, y = 42, w = 35;
    s += paper(x, y, w, w) + path(`M ${x} ${y} L ${x + 8.4} ${y} A 8.4 8.4 0 0 1 ${x} ${y + 8.4} Z`, `fill="${DARK}"`);
    s += poly([[x + w, y + 17.5 - 7], [x + w - 9, y + 17.5], [x + w, y + 17.5 + 7]], `fill="${DARK}"`);
    s += `<line x1="${x}" y1="${y}" x2="${x}" y2="${y + w}" stroke="${PINK}" stroke-width="2.5"/><line x1="${x}" y1="${y}" x2="${x + w}" y2="${y}" stroke="${PINK}" stroke-width="2.5"/>`;
    s += tx(49, 116, '1', 14) + tx(141, 116, '2', 14) + tx(231, 116, '3', 14);
    const opts = [
      { center: true, notchLR: [false, true] },
      { center: true, notchLR: [true, true] },
      { center: false, corners: true, notchLR: [true, true] },
      { center: true, notchLR: [false, false], notchTB: true },
    ];
    opts.forEach((o, i) => { const ox = 12 + i * 72; s += unfolded(ox, 134, 60, o) + tx(ox + 30, 218, L[i]); });
    return svg('0 0 300 228', s);
  }

  // Hand (H → W) + Uhr
  function svgWandUhr() {
    return svg('0 0 300 130', iconHand(62, 52, 1.1) + tx(62, 120, 'H = W', 22) + tx(150, 66, '+', 40) + iconClock(232, 60, 36));
  }

  // Nur das Spiegelbild des Schildes ist zu sehen
  function svgSeeSchild() {
    let s = `<rect x="0" y="0" width="300" height="34" fill="#1f6f4a"/>`;
    s += `<rect x="0" y="34" width="300" height="146" fill="rgba(34,211,238,.22)"/>`;
    s += `<rect x="96" y="0" width="7" height="34" fill="${BROWN}"/><rect x="197" y="0" width="7" height="34" fill="${BROWN}"/>`;
    s += `<rect x="96" y="34" width="7" height="44" fill="${BROWN}" opacity=".75"/><rect x="197" y="34" width="7" height="44" fill="${BROWN}" opacity=".75"/>`;
    s += `<g opacity=".85"><rect x="40" y="78" width="220" height="62" rx="6" fill="${WHITE}"/>`;
    s += `<text x="150" y="-94" transform="scale(1,-1)" text-anchor="middle" font-size="38" font-weight="800" fill="${DARK}" font-family="sans-serif">FREIBAD</text></g>`;
    for (let i = 0; i < 7; i++) s += path(`M ${12 + (i % 3) * 100 + (i > 2 ? 40 : 0)} ${56 + i * 17} q 10 -5 20 0 t 20 0 t 20 0`, `fill="none" stroke="${CYAN}" stroke-width="2" opacity=".55"`);
    return svg('0 0 300 180', s);
  }

  // Bau von vorn
  // kein Würfel darf genau hinter einem anderen liegen (isometrisch fällt (x+1,y+1,z+1) auf (x,y,z)) – sonst zeigt das Bild einen zu wenig
  const VORN = [[0, 0, 0], [1, 0, 0], [2, 0, 0], [0, 2, 0], [0, 0, 1], [0, 0, 2], [2, 0, 1], [1, 2, 0], [1, 2, 1], [2, 2, 0]];
  function gridView(x, y, cells, c = 14) {
    return cells.map(([u, v]) => `<rect x="${x + u * c}" y="${y - (v + 1) * c}" width="${c}" height="${c}" fill="${CYAN}" stroke="#0a0d24" stroke-width="1.5"/>`).join('');
  }
  function svgVorn() {
    let s = isoAt(VORN, 160, 90, 22);
    // Pfeil „vorn“ zeigt auf die linke (+y) Seite
    s += path('M 46 150 L 78 130', `fill="none" stroke="${GOLD}" stroke-width="3.5" marker-end="url(#p-ah3)"`) + tx(40, 170, 'vorn', 15);
    s = `<defs><marker id="p-ah3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${GOLD}"/></marker></defs>` + s;
    const views = {
      front: (() => { const m = {}; VORN.forEach(([x, , z]) => { m[x + ',' + z] = [x, z]; }); return Object.values(m); })(),
      side: (() => { const m = {}; VORN.forEach(([, y, z]) => { m[(2 - y) + ',' + z] = [2 - y, z]; }); return Object.values(m); })(),
      top: (() => { const m = {}; VORN.forEach(([x, y]) => { m[x + ',' + (2 - y)] = [x, 2 - y]; }); return Object.values(m); })(),
    };
    const mirror = views.front.map(([u, v]) => [2 - u, v]);
    [views.side, mirror, views.top, views.front].forEach((cells, i) => {
      const bx = 10 + i * 72;
      s += box(bx, 186, 64, 64) + gridView(bx + 11, 186 + 53, cells) + tx(bx + 32, 272, L[i]);
    });
    return svg('0 0 300 282', s);
  }


  // ---------- Grafiken: sehr schwer ----------

  // Buchstabe + Spiegelbild aneinandergesetzt (Striche in Einheitskoordinaten)
  const STROKES = {
    K: [[0, 0, 0, 1], [1, 0, 0, 0.5], [0, 0.5, 1, 1]],
    L: [[0, 0, 0, 1], [0, 1, 1, 1]],
    M: [[0, 1, 0, 0], [0, 0, 0.5, 0.6], [0.5, 0.6, 1, 0], [1, 0, 1, 1]],
    N: [[0, 1, 0, 0], [0, 0, 1, 1], [1, 1, 1, 0]],
  };
  function mirrorGlyph(x, y, w, h, ch) {
    let s = '';
    for (const [x1, y1, x2, y2] of STROKES[ch]) {
      for (const m of [false, true]) {
        const X = (u) => x + (m ? 2 - u : u) * w;
        s += `<line x1="${f1(X(x1))}" y1="${f1(y + y1 * h)}" x2="${f1(X(x2))}" y2="${f1(y + y2 * h)}" stroke="${GOLD}" stroke-width="4.5" stroke-linecap="round"/>`;
      }
    }
    return s;
  }
  function svgSpiegelBuchstaben() {
    let s = '';
    ['K', 'L', 'M', 'N'].forEach((ch, i) => {
      const x = 6 + i * 58;
      s += `<rect class="cell" x="${x}" y="8" width="52" height="60" rx="6"/>` + mirrorGlyph(x + 9, 20, 17, 36, ch);
    });
    s += `<rect class="cell" x="${6 + 4 * 58}" y="8" width="52" height="60" rx="6"/>` + tx(6 + 4 * 58 + 26, 50, '?', 30);
    return svg('0 0 300 76', s);
  }

  // Schattenschrift: nur die Schatten von Blockbuchstaben sind gezeichnet
  const BLOCK = {
    L: ['X..', 'X..', 'X..', 'X..', 'XXX'], I: ['X', 'X', 'X', 'X', 'X'], C: ['XXX', 'X..', 'X..', 'X..', 'XXX'],
    H: ['X.X', 'X.X', 'XXX', 'X.X', 'X.X'], T: ['XXX', '.X.', '.X.', '.X.', '.X.'],
  };
  function svgSchattenschrift() {
    const u = 14, d = 6, x0 = 32, y0 = 22;
    let cells = [], x = 0;
    for (const ch of 'LICHT') {
      BLOCK[ch].forEach((row, r) => [...row].forEach((v, c) => { if (v === 'X') cells.push([x + c, r]); }));
      x += BLOCK[ch][0].length + 1;
    }
    const rect = ([c, r], off, fill) => `<rect x="${x0 + c * u + off}" y="${y0 + r * u + off}" width="${u + 0.6}" height="${u + 0.6}" fill="${fill}"/>`;
    let s = `<defs><mask id="p-mk-licht"><rect x="0" y="0" width="300" height="120" fill="#fff"/>${cells.map(p => rect(p, 0, '#000')).join('')}</mask></defs>`;
    s += `<g mask="url(#p-mk-licht)">${cells.map(p => rect(p, d, '#8b80d9')).join('')}</g>`;
    return svg('0 0 300 112', s);
  }

  // Anfangsbuchstaben der Bilder
  function svgAnfangsbilder() {
    let s = '';
    const xs = [32, 90, 150, 210, 268];
    s += poly([[xs[0] + 13, 50], [xs[0] + 27, 40], [xs[0] + 27, 60]], `fill="${CYAN}"`) + `<ellipse cx="${xs[0] - 3}" cy="50" rx="19" ry="11" fill="${CYAN}"/><circle cx="${xs[0] - 13}" cy="47" r="2.5" fill="${DARK}"/>`;
    s += iconEgg(xs[1], 52, 0.8) + iconClock(xs[2], 50, 24) + iconEgg(xs[3], 52, 0.8) + iconRing(xs[4], 52, 0.9);
    return svg('0 0 300 96', s);
  }

  // Innen oder außen? Rand eines spiralförmigen Gebiets (eine einzige geschlossene Linie)
  const SPIRALE = ['XXXXXXXXX', '........X', 'XXXXXXX.X', 'X.....X.X', 'X.XXX.X.X', 'X.X...X.X', 'X.XXXXX.X', 'X.......X', 'XXXXXXXXX'];
  const SPIRALE_PUNKTE = [[4, 4, 'A'], [2, 5, 'B'], [6, 5, 'C'], [3, 5, 'D'], [8, 5, 'E'], [4, 2, 'F']];
  function svgInnenAussen() {
    const c = 27, ox = 28, oy = 6, H = SPIRALE.length, W = SPIRALE[0].length;
    const inR = (x, y) => y >= 0 && y < H && x >= 0 && x < W && SPIRALE[y][x] === 'X';
    let s = '';
    for (let y = 0; y <= H; y++) for (let x = 0; x <= W; x++) {
      if (x < W && inR(x, y) !== inR(x, y - 1)) s += ln(ox + x * c, oy + y * c, ox + (x + 1) * c, oy + y * c);
      if (y < H && inR(x, y) !== inR(x - 1, y)) s += ln(ox + x * c, oy + y * c, ox + x * c, oy + (y + 1) * c);
    }
    // Beschriftung in Richtung einer Nachbarzelle ohne Linie dazwischen, damit kein Buchstabe eine Linie berührt
    const labelAt = (x, y) => {
      const free = (dx, dy) => inR(x, y) === inR(x + dx, y + dy);
      if (free(1, 0)) return [8, 4.3, 'start'];
      if (free(-1, 0)) return [-8, 4.3, 'end'];
      if (free(0, 1)) return [0, 17, 'middle'];
      return [0, -8, 'middle'];
    };
    SPIRALE_PUNKTE.forEach(([x, y, l]) => {
      const px = ox + x * c + c / 2, py = oy + y * c + c / 2, [dx, dy, anchor] = labelAt(x, y);
      s += `<circle cx="${px}" cy="${py}" r="4" fill="${PINK}"/>` + tx(px + dx, py + dy, l, 12, `text-anchor="${anchor}"`);
    });
    return svg('0 0 300 256', s);
  }

  // Draufsicht: Türme bilden einen Buchstaben
  const TUERME = [[0, 0, 3], [0, 1, 2], [0, 2, 3], [0, 3, 2], [0, 4, 3], [1, 0, 1], [2, 0, 1], [1, 2, 1], [2, 2, 1], [1, 4, 1], [2, 4, 1]];
  function svgDraufsicht() {
    const cubes = [];
    for (const [x, y, h] of TUERME) for (let z = 0; z < h; z++) cubes.push([x, y, z]);
    const c = 20, a = c * Math.cos(Math.PI / 6), b = c * 0.5;
    const ox = 150 - (3 - 5) * a / 2, oy = 150 - (3 + 5) * b / 2;
    const P = (x, y) => [ox + (x - y) * a, oy + (x + y) * b];
    let s = '';
    for (let x = 0; x < 3; x++) for (let y = 0; y < 5; y++) s += poly([P(x, y), P(x + 1, y), P(x + 1, y + 1), P(x, y + 1)], `fill="rgba(255,255,255,.06)" stroke="rgba(255,255,255,.25)" stroke-width="1"`);
    s += isoCubes(cubes, { ox, oy, c, top: '#fde68a', left: '#ffc940', right: '#b7791f' });
    // Leserichtung: Pfeil neben dem Bau, parallel zum langen Balken, zeigt zur Oberkante des Buchstabens
    const [ax1, ay1] = P(3.75, 3.6), [ax2, ay2] = P(3.75, 0.9);
    s += `<defs><marker id="p-ah5" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${PINK}"/></marker></defs>`;
    s += `<line x1="${f1(ax1)}" y1="${f1(ay1)}" x2="${f1(ax2)}" y2="${f1(ay2)}" stroke="${PINK}" stroke-width="3.5" stroke-linecap="round" marker-end="url(#p-ah5)"/>`;
    const [lx, ly] = P(4.1, 0.1);
    s += `<text class="tx" x="${f1(lx)}" y="${f1(ly + 5)}" text-anchor="start" font-size="15" font-weight="700" fill="${PINK}" style="fill:${PINK}">oben</text>`;
    return svg('0 0 300 230', s);
  }

  // Becher und Röhren
  function cup(cx, top, label, water = 0) {
    const w1 = 56, w2 = 44, h = 50;
    let s = '';
    if (water) s += poly([[cx - w2 / 2 - (w1 - w2) / 2 * water, top + h * (1 - water)], [cx + w2 / 2 + (w1 - w2) / 2 * water, top + h * (1 - water)], [cx + w2 / 2, top + h], [cx - w2 / 2, top + h]], `fill="rgba(34,211,238,.55)"`);
    s += `<polyline points="${pts([[cx - w1 / 2, top], [cx - w2 / 2, top + h], [cx + w2 / 2, top + h], [cx + w1 / 2, top]])}" fill="none" stroke="${WHITE}" stroke-width="3" stroke-linejoin="round"/>`;
    return s + tx(cx, top + 36, label, 18);
  }
  function svgBecher() {
    const pipe = (d) => path(d, `fill="none" stroke="${VIOLET}" stroke-width="6" stroke-linejoin="round"`);
    let s = '';
    // Hahn über A
    s += `<rect x="128" y="0" width="34" height="9" rx="3" fill="${SOFT}"/><rect x="152" y="0" width="10" height="16" rx="3" fill="${SOFT}"/>`;
    s += `<line x1="157" y1="18" x2="157" y2="44" stroke="${CYAN}" stroke-width="3" stroke-dasharray="4 4"/>`;
    // Röhren (Seitenröhre beginnt an der Becherwand in der jeweiligen Höhe)
    s += pipe('M 125.6 35 H 60 V 104');      // A links, hoch → B
    s += pipe('M 172.7 57 H 240 V 104');     // A rechts, tief → C
    s += pipe('M 240 154 V 196');            // C Boden → F (verschlossen)
    s += pipe('M 216.4 118 H 150 V 196');    // C links, Mitte → E
    s += pipe('M 60 154 V 196');             // B Boden → D
    s += `<rect x="229" y="166" width="22" height="10" rx="2" fill="${RED}"/>`;
    s += cup(150, 22, 'A', 0.15) + cup(60, 104, 'B') + cup(240, 104, 'C') + cup(60, 196, 'D') + cup(150, 196, 'E') + cup(240, 196, 'F');
    return svg('0 0 300 254', s);
  }

  // Laser und beidseitige Spiegel
  const LASER = ['.\\...', '\\\\\\..', '.\\\\/.', '.....', '\\\\/..'];
  function svgLaser() {
    const c = 40, ox = 52, oy = 34;
    let s = '';
    for (let i = 0; i <= 5; i++) s += `<line x1="${ox}" y1="${oy + i * c}" x2="${ox + 5 * c}" y2="${oy + i * c}" stroke="rgba(255,255,255,.18)" stroke-width="1"/><line x1="${ox + i * c}" y1="${oy}" x2="${ox + i * c}" y2="${oy + 5 * c}" stroke="rgba(255,255,255,.18)" stroke-width="1"/>`;
    LASER.forEach((row, y) => [...row].forEach((ch, x) => {
      const X = ox + x * c, Y = oy + y * c, m = 7;
      if (ch === '/') s += `<line x1="${X + m}" y1="${Y + c - m}" x2="${X + c - m}" y2="${Y + m}" stroke="#7dd3fc" stroke-width="5" stroke-linecap="round"/>`;
      if (ch === '\\') s += `<line x1="${X + m}" y1="${Y + m}" x2="${X + c - m}" y2="${Y + c - m}" stroke="#7dd3fc" stroke-width="5" stroke-linecap="round"/>`;
    }));
    // Laser kommt von links in Zeile 3
    s += `<rect x="2" y="${oy + 2.5 * c - 8}" width="24" height="16" rx="4" fill="${RED}"/><line x1="26" y1="${oy + 2.5 * c}" x2="${ox + 12}" y2="${oy + 2.5 * c}" stroke="${RED}" stroke-width="3"/>`;
    // alle Randausgänge beschriftet (im Uhrzeigersinn ab rechts oben), außer dem Eingang
    const T = [];
    for (let i = 0; i < 5; i++) T.push([ox + 5 * c + 14, oy + (i + 0.5) * c + 5]);
    for (let i = 4; i >= 0; i--) T.push([ox + (i + 0.5) * c, oy + 5 * c + 20]);
    for (let i = 4; i >= 0; i--) if (i !== 2) T.push([ox - 13, oy + (i + 0.5) * c + 5]);
    for (let i = 0; i < 5; i++) T.push([ox + (i + 0.5) * c, oy - 10]);
    T.forEach(([x, y], i) => { s += tx(x, y, 'ABCDEFGHIJKLMNOPQRS'[i], 15); });
    return svg('0 0 300 270', s);
  }

  // Sternvielecke: einer besteht aus zwei getrennten Linien
  function star(cx, cy, r, n, k, col) {
    const V = ngon(cx, cy, r, n);
    let s = '';
    for (let i = 0; i < n; i++) { const [a, b] = [V[i], V[(i + k) % n]]; s += `<line x1="${f1(a[0])}" y1="${f1(a[1])}" x2="${f1(b[0])}" y2="${f1(b[1])}" stroke="${col}" stroke-width="2.5" stroke-linecap="round"/>`; }
    return s;
  }
  function svgSterne() {
    let s = '';
    [[7, 3], [10, 4], [9, 2], [8, 3]].forEach(([n, k], i) => { const cx = 40 + i * 73; s += star(cx, 44, 32, n, k, CYAN) + tx(cx, 100, L[i]); });
    return svg('0 0 300 110', s);
  }

  // Zahnräder mit Buchstabenscheibe
  function svgZahnradBuchstabe() {
    const A = [66, 104, 50, 15], B = [147, 104, 27, 8], D = [222, 104, 40, 12];
    let s = gearPath(A[0], A[1], A[2], A[3], 0) + gearPath(B[0], B[1], B[2], B[3], Math.PI / 8) + gearPath(D[0], D[1], D[2], D[3], Math.PI / 12);
    const letters = ['K', 'T', 'R', 'N', 'S', 'P', 'M', 'H'];
    letters.forEach((l, i) => {
      const a = i * Math.PI / 4;
      s += `<text x="${f1(D[0] + 25 * Math.sin(a))}" y="${f1(D[1] - 25 * Math.cos(a) + 5)}" text-anchor="middle" font-size="13" font-weight="800" fill="${DARK}" font-family="sans-serif">${l}</text>`;
    });
    s += `<circle cx="${D[0]}" cy="${D[1]}" r="6" fill="#8b5cf6"/>`;
    s += poly([[D[0] - 8, D[1] - 66], [D[0] + 8, D[1] - 66], [D[0], D[1] - 52]], `fill="${RED}"`);
    s += `<text x="${A[0]}" y="${A[1] + 6}" text-anchor="middle" font-size="18" font-weight="800" fill="${DARK}" font-family="sans-serif">A</text><text x="${B[0]}" y="${B[1] + 5}" text-anchor="middle" font-size="13" font-weight="800" fill="${DARK}" font-family="sans-serif">B</text>`;
    s += tx(A[0], 186, '15 Zähne', 13) + tx(B[0], 186, '8 Zähne', 13) + tx(D[0], 186, '12 Zähne', 13);
    const ad = `<defs><marker id="p-ah4" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${GOLD}"/></marker></defs>`;
    s += path(`M ${A[0] - 40} ${A[1] - 62} A 66 66 0 0 1 ${A[0] + 40} ${A[1] - 62}`, `fill="none" stroke="${GOLD}" stroke-width="3.5" marker-end="url(#p-ah4)"`);
    return svg('0 0 280 196', ad + s);
  }

  // Kugelbahn mit Kippweichen
  const WEICHEN = [0, 1, 0, 1, 1, 1, 0]; // 0 = nach links, 1 = nach rechts (oben, Mitte l/r, unten 1–4)
  function svgKugelbahn() {
    const bx = (i) => 21 + i * 36.9, Y = [44, 92, 140], yb = 176;
    const nx = (lvl, k) => { const span = 8 / (1 << lvl); return (bx(k * span) + bx(k * span + span - 1)) / 2; };
    let s = '';
    const lane = (x1, y1, x2, y2) => `<line x1="${f1(x1)}" y1="${y1}" x2="${f1(x2)}" y2="${y2}" stroke="rgba(185,189,232,.55)" stroke-width="3"/>`;
    for (let lvl = 0; lvl < 3; lvl++) for (let k = 0; k < (1 << lvl); k++) {
      const x = nx(lvl, k), y = Y[lvl];
      for (const d of [0, 1]) {
        const [x2, y2] = lvl < 2 ? [nx(lvl + 1, 2 * k + d), Y[lvl + 1]] : [bx(2 * k + d), yb];
        s += lane(x, y, x2, y2);
      }
    }
    for (let i = 0; i < 8; i++) s += `<rect x="${f1(bx(i) - 15)}" y="${yb}" width="30" height="30" rx="4" fill="rgba(255,255,255,.06)" stroke="${VIOLET}" stroke-width="2"/>` + tx(bx(i), yb + 22, L[i], 15);
    let n = 0;
    for (let lvl = 0; lvl < 3; lvl++) for (let k = 0; k < (1 << lvl); k++, n++) {
      const x = nx(lvl, k), y = Y[lvl], dir = WEICHEN[n] ? 1 : -1;
      s += `<line x1="${f1(x - dir * 11)}" y1="${y - 11}" x2="${f1(x + dir * 13)}" y2="${y + 11}" stroke="${GOLD}" stroke-width="6" stroke-linecap="round"/><circle cx="${f1(x)}" cy="${y}" r="3.5" fill="${DARK}"/>`;
    }
    [1, 2, 3].forEach((b, i) => { const x = 150 - i * 26; s += `<circle cx="${x}" cy="13" r="10" fill="${PINK}"/>` + `<text x="${x}" y="18" text-anchor="middle" font-size="13" font-weight="800" fill="${DARK}" font-family="sans-serif">${b}</text>`; });
    s += `<line x1="${f1(nx(0, 0))}" y1="22" x2="${f1(nx(0, 0))}" y2="${Y[0] - 12}" stroke="rgba(185,189,232,.55)" stroke-width="3"/>`;
    return svg('0 0 300 212', s);
  }

  // ---------- Fragen ----------
  QUIZ_ADD([
    // ===== leicht / mittel =====
    { id: 'p-baumhaus', fam: 'rebus-kompositum', cat: 'Bilder', type: 'text',
      q: 'Welches Wort zeigen die beiden Bilder zusammen?', svg: svgBaumHaus(),
      a: 'BAUMHAUS', r: [1, 1, 0, 0, 0], ex: 'Baum + Haus = Baumhaus.' },
    { id: 'p-schatten-laenge', fam: 'schatten-laenge', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Die Sonne scheint auf vier Pfähle. Welcher Schatten kann so nicht stimmen?', svg: svgSchatten(),
      opts: ['A', 'B', 'C', 'D'], a: 1, r: [2, 1, 1, 0, 0],
      ex: 'Bei gleichem Sonnenstand gilt: Je höher der Pfahl, desto länger der Schatten – hier ist jeder gut halb so lang wie sein Pfahl. Nur der höchste Pfahl B hat einen viel zu kurzen Schatten.' },
    { id: 'p-silhouette', fam: 'silhouette', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welcher Schattenriss gehört zu dem Roboter oben?', svg: svgSilhouette(),
      opts: ['A', 'B', 'C', 'D'], a: 1, r: [1, 1, 1, 0, 0],
      ex: 'Antenne links, der Arm rechts im Bild oben – das passt nur bei B. A ist spiegelverkehrt, bei C ist der falsche Arm oben, bei D sitzt die Antenne rechts.' },
    { id: 'p-ecken-folge', fam: 'ecken-abschneiden', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welches Feld setzt die Reihe fort?', svg: svgEckenFolge(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [1, 1, 1, 0, 0],
      ex: 'Im Uhrzeigersinn wird jedes Mal eine Ecke mehr abgeschnitten, und die Farbe wechselt pink – türkis. Als Nächstes: alle vier Ecken weg, pink.' },
    { id: 'p-netz-kein-wuerfel', fam: 'netz-kein-wuerfel', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Drei dieser Netze lassen sich zu einem Würfel falten. Welches nicht?', svg: svgNetze(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [2, 1, 1, 1, 0],
      ex: 'Bei C bilden die vier Felder unten den Rundum-Streifen. Beide oberen Felder klappen dann auf dieselbe Deckelseite – eine Seite bleibt offen.' },
    { id: 'p-zahnrad-schnell', fam: 'zahnrad-tempo', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Die Zahnräder greifen ineinander und drehen sich. Welches dreht sich am schnellsten?', svg: svgZahnradSchnell(),
      opts: ['A', 'B', 'C', 'D'], a: 1, r: [1, 1, 1, 0, 0],
      ex: 'Am Rand laufen alle Zähne gleich schnell vorbei. Das kleinste Rad (B) braucht dafür die meisten Umdrehungen.' },
    { id: 'p-matrix-viertel', fam: 'matrix-drehen', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welches Feld gehört an die Stelle des Fragezeichens?', svg: svgMatrixDrehen(),
      opts: ['A', 'B', 'C', 'D'], a: 3, r: [2, 1, 1, 0, 0],
      ex: 'Von Feld zu Feld wandert der Viertelkreis eine Ecke im Uhrzeigersinn weiter, jede Zeile hat ihre Farbe. Unten: rechts unten, links unten, links oben – in Gold.' },
    { id: 'p-see-woerter', fam: 'wasser-spiegel', cat: 'Bilder', type: 'choice',
      q: 'Die Schilder spiegeln sich gleich im ruhigen See. Bei welchem Wort sieht das Spiegelbild genauso aus wie das Schild?', svg: svgSeeWoerter(),
      opts: ['ECHO', 'KINO', 'HOSE', 'CHOR'], a: 0, r: [2, 2, 1, 0, 0],
      ex: 'Im Wasser stehen die Buchstaben auf dem Kopf, aber die Reihenfolge bleibt. E, C, H und O sind oben und unten gleich. N, S und R werden verdreht.' },
    { id: 'p-fisch-tisch', fam: 'rebus-tausch', cat: 'Bilder', type: 'text',
      q: 'Welches Wort ergibt dieses Bilderrätsel?', svg: svgFischTisch(),
      a: 'TISCH', r: [1, 2, 0, 0, 0], ex: 'Im FISCH wird das F durch ein T ersetzt: TISCH.' },
    { id: 'p-kopfstand-form', fam: 'symmetrie-erkennen', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Du drehst das Handy einmal auf den Kopf. Welche Figur sieht danach genauso aus wie vorher?', svg: svgKopfstand(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [1, 1, 2, 0, 0],
      ex: 'Herz, Mond und Pfeil sehen auf dem Kopf anders aus: Das Herz steht dann mit der Spitze nach oben, der Mond öffnet sich nach links statt nach rechts, der Pfeil zeigt nach unten. Nur die Treppenform C geht durch eine halbe Drehung in sich selbst über.' },
    // ===== schwer =====
    { id: 'p-bau-gedreht', fam: 'bau-drehen-spiegeln', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welcher der vier Würfelbauten ist derselbe wie oben – nur auf dem Tisch gedreht?', svg: svgBau3D(),
      opts: ['A', 'B', 'C', 'D'], a: 3, r: [2, 2, 1, 1, 0],
      ex: 'D ist der Bau, um eine Vierteldrehung gedreht. Geht man vom Turm aus die Dreierreihe entlang, knickt der letzte Würfel nach rechts ab – so auch bei D. Bei A, B und C knickt er nach links ab: Das sind Spiegelbilder, durch Drehen allein bekommt man sie nicht.' },
    { id: 'p-farbwuerfel', fam: 'farbnetz-wuerfel', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Das bunte Netz wird zu einem Würfel gefaltet, die bunte Seite kommt nach außen. Welcher Würfel kann daraus entstehen?', svg: svgFarbNetz(),
      opts: ['A', 'B', 'C', 'D'], a: 0, r: [2, 2, 1, 1, 0],
      ex: 'Gegenüber liegen Pink–Gelb, Türkis–Grün und Weiß–Lila. B zeigt Pink und Gelb gleichzeitig – unmöglich. Gefaltet liegt Türkis vorn, Pink oben, Lila rechts: genau die Ecke von A. C und D zeigen zwar drei Nachbarfarben, aber in spiegelverkehrter Reihenfolge – so sähe der Würfel nur aus, wenn die bunte Seite innen läge.' },
    { id: 'p-labyrinth', fam: 'labyrinth-eingang', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Durch welchen Eingang kommst du zum Stern in der Mitte?', svg: svgLabyrinth(),
      opts: ['A', 'B', 'C', 'D'], a: 3, r: [2, 1, 1, 1, 0],
      ex: 'Nur der Weg von D (links) führt bis zum Stern. Von A, B und C aus landet man in abgeschlossenen Bereichen. Tipp: Man kann auch rückwärts vom Stern aus suchen.' },
    { id: 'p-eimer-hoch', fam: 'zahnrad-eimer', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Das erste Zahnrad dreht sich in Pfeilrichtung. Jeder Eimer hängt an einem Seil, das auf die Achse seines Rads gewickelt ist. Welcher Eimer wird hochgezogen?', svg: svgEimer(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [2, 2, 1, 1, 0],
      ex: 'Die Räder drehen abwechselnd rechts- und linksherum. Ein Seil wird aufgewickelt, wenn seine Seite der Achse nach oben läuft: beim 3. Rad (rechtsherum) ist das die linke Seite – dort hängt C. Alle anderen Seile werden abgewickelt.' },
    { id: 'p-ringe', fam: 'ringe-verhakt', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Fünf Ringe liegen auf dem Tisch. Du hebst Ring A hoch. Welche Ringe hängen dann daran?', svg: svgRinge(),
      opts: ['Nur B', 'B und C', 'B, C und D', 'Alle vier'], a: 1, r: [2, 1, 2, 1, 0],
      ex: 'Zwei Ringe sind nur verhakt, wenn einer an einer Kreuzung oben und an der anderen unten liegt. C liegt an beiden Kreuzungen über D – die beiden sind gar nicht verbunden.' },
    { id: 'p-knoten', fam: 'knoten-ziehen', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Du ziehst jede Schnur an beiden Enden kräftig auseinander. Bei welcher bleibt ein Knoten übrig?', svg: svgKnoten(),
      opts: ['A', 'B', 'C', 'D'], a: 0, r: [2, 2, 1, 1, 0],
      ex: 'Bei nur drei Kreuzungen bleibt ein Knoten nur, wenn die Schnur entlang ihres Weges immer abwechselnd oben und unten durchläuft. Das ist nur bei A so – bei den anderen läuft sie zweimal hintereinander oben drüber, die Schlingen rutschen heraus.' },
    { id: 'p-papier-schnitt', fam: 'papier-falten', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Ein Blatt wird zweimal gefaltet, dann wird an der Faltecke und am Rand geschnitten (3). Wie sieht es aufgefaltet aus?', svg: svgPapier(),
      opts: ['A', 'B', 'C', 'D'], a: 1, r: [2, 2, 1, 1, 0],
      ex: 'Die Ecke mit beiden Faltkanten ist die Blattmitte: Aus dem Viertelkreis wird ein Loch in der Mitte. Die Kerbe am offenen Rand wird zweimal gespiegelt – vier Kerben, links und rechts.' },
    { id: 'p-wanduhr', fam: 'rebus-tausch-kompositum', cat: 'Bilder', type: 'text',
      q: 'Welches Wort ergibt dieses Bilderrätsel?', svg: svgWandUhr(),
      a: 'WANDUHR', r: [2, 2, 1, 0, 0], ex: 'HAND mit W statt H wird WAND – dazu die UHR: WANDUHR.' },
    { id: 'p-see-schild', fam: 'wasser-spiegel', cat: 'Bilder', type: 'text',
      q: 'Das Schild am Ufer ist hier abgeschnitten – du siehst nur sein Spiegelbild im See. Was steht auf dem Schild?', svg: svgSeeSchild(),
      a: 'FREIBAD', r: [1, 1, 1, 0, 0], ex: 'Im Wasser steht die Schrift auf dem Kopf, die Reihenfolge der Buchstaben bleibt aber: FREIBAD.' },
    { id: 'p-vorderansicht', fam: 'wuerfelbau-ansicht', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Wie sieht der Würfelbau von vorn aus, also aus Pfeilrichtung?', svg: svgVorn(),
      opts: ['A', 'B', 'C', 'D'], a: 3, r: [2, 2, 1, 1, 0],
      ex: 'Von vorn sieht man links den Turm aus drei Würfeln, daneben zwei Spalten mit je zwei Würfeln: D. A ist die Ansicht von rechts, B spiegelverkehrt, C die Ansicht von oben.' },
    // ===== sehr schwer =====
    { id: 'p-spiegel-buchstaben', fam: 'buchstabe-mit-spiegelbild', cat: 'Bilder', type: 'text', letters: true,
      q: 'Welcher Buchstabe steckt im nächsten Bild?', svg: svgSpiegelBuchstaben(),
      a: 'O', r: [2, 4, 1, 0, 0],
      ex: 'Jedes Bild ist ein Buchstabe, an den rechts sein Spiegelbild angesetzt ist: K, L, M, N – als Nächstes kommt O.' },
    { id: 'p-schattenschrift', fam: 'schattenschrift', cat: 'Bilder', type: 'text',
      q: 'Welches Wort ist hier zu sehen?', svg: svgSchattenschrift(),
      a: 'LICHT', r: [1, 2, 1, 0, 0],
      ex: 'Gezeichnet sind nur die Schatten von unsichtbaren Blockbuchstaben – die Lücken darüber bilden das Wort LICHT.' },
    { id: 'p-anfangsbilder', fam: 'bilder-anfangsbuchstaben', cat: 'Bilder', type: 'text',
      q: 'Welches Wort verstecken diese Bilder?', svg: svgAnfangsbilder(),
      a: 'FEUER', r: [2, 2, 1, 0, 0],
      ex: 'Die Anfangsbuchstaben: Fisch, Ei, Uhr, Ei, Ring – FEUER.' },
    { id: 'p-innen-aussen', fam: 'innen-aussen', cat: 'Bilder', type: 'text', letters: true,
      q: 'Die weiße Linie ist eine einzige geschlossene Linie. Fünf Punkte liegen innerhalb, einer außerhalb. Welcher liegt außerhalb?', svg: svgInnenAussen(),
      a: 'D', r: [2, 2, 1, 2, 0],
      ex: 'Vom Rand aus wechselt man bei jedem Überqueren einer Linie zwischen außen und innen. D liegt im Gang, der von links oben als Außenbereich hineinführt – alle anderen Punkte liegen im Innern des spiralförmigen Bandes.' },
    { id: 'p-draufsicht-buchstabe', fam: 'wuerfelbau-ansicht', cat: 'Bilder', type: 'text', letters: true,
      q: 'Von oben betrachtet bilden die Würfeltürme einen Großbuchstaben – der Pfeil zeigt, wo bei ihm oben ist. Welcher Buchstabe ist es? (Kein Turm ist verdeckt.)', svg: svgDraufsicht(),
      a: 'E', r: [2, 2, 1, 1, 0],
      ex: 'Von oben zählt nur, welche Bodenfelder belegt sind, nicht die Höhe: ein langer Balken in Pfeilrichtung, links davon, mit drei Armen nach rechts – oben, in der Mitte und unten. Das ist ein E.' },
    { id: 'p-becher', fam: 'becher-roehren', cat: 'Bilder', type: 'text', letters: true,
      q: 'Wasser läuft langsam in Becher A. Der rote Stopfen ist zu. Welcher Becher ist als Erster bis zum Rand voll?', svg: svgBecher(),
      a: 'E', r: [3, 2, 2, 1, 0],
      ex: 'A läuft über das tiefere rechte Rohr nach C ab, bevor es das linke Rohr erreicht – B und D bleiben leer. In C ist das Bodenrohr verstopft, also steigt das Wasser bis zum Seitenrohr und fließt nach E. E hat keinen Abfluss und wird als Erster voll.' },
    { id: 'p-laser', fam: 'laser-spiegel', cat: 'Bilder', type: 'text', letters: true,
      q: 'Der Laserstrahl wird von den Spiegeln abgelenkt (sie spiegeln auf beiden Seiten). Bei welchem Buchstaben verlässt er das Feld?', svg: svgLaser(),
      a: 'O', r: [2, 2, 2, 2, 0],
      ex: 'Rechts, runter, rechts, hoch, links – dann trifft er den ersten Spiegel noch einmal von hinten und läuft nach oben, links und oben hinaus bei O. Wer den Spiegel nur als einseitig ansieht, landet woanders.' },
    { id: 'p-sterne', fam: 'sternlinien', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Drei Sterne bestehen aus einer einzigen geschlossenen Zickzacklinie. Einer besteht aus zwei getrennten Linien. Welcher?', svg: svgSterne(),
      opts: ['A', 'B', 'C', 'D'], a: 1, r: [2, 2, 1, 2, 0],
      ex: 'B (zehn Spitzen, immer vier weiter verbunden) sind zwei übereinanderliegende Fünfsterne. Bei den anderen kommt man beim Nachfahren erst nach allen Spitzen wieder am Start an.' },
    { id: 'p-zahnrad-buchstabe', fam: 'zahnrad-buchstabe', cat: 'Bilder', type: 'text', letters: true,
      q: 'Rad A dreht sich genau einmal ganz herum, in Pfeilrichtung. Welcher Buchstabe des rechten Rads steht danach unter dem roten Zeiger?', svg: svgZahnradBuchstabe(),
      a: 'M', r: [3, 2, 1, 2, 1],
      ex: 'A schiebt 15 Zähne weiter, das rechte Rad (12 Zähne) dreht sich also 1¼-mal – über das Zwischenrad B in dieselbe Richtung wie A, im Uhrzeigersinn. Die Viertelumdrehung bringt den Buchstaben von links (M) nach oben.' },
    { id: 'p-kugelbahn', fam: 'kugelbahn-weichen', cat: 'Bilder', type: 'text', letters: true,
      q: 'Drei Kugeln rollen nacheinander hinein. Jede Weiche lenkt eine Kugel zu ihrem tiefer liegenden Ende und klappt danach auf die andere Seite um. In welches Fach fällt die dritte Kugel?', svg: svgKugelbahn(),
      a: 'B', r: [3, 2, 1, 2, 0],
      ex: 'Kugel 1: links, rechts, rechts → D. Kugel 2: oben jetzt rechts, dann links, rechts → F. Kugel 3: oben wieder links, die Weiche darunter ist inzwischen links tiefer, die unterste rechts → B.' },
  ]);
})();

// ---- logik.js ----
(function () {
  QUIZ_ADD([
    // ---------- leicht ----------
    { id: 'l-shelf', fam: 'links-rechts-kette', cat: 'Logik', type: 'choice',
      q: 'Auf einem Regal stehen drei Bücher. Das rote steht links vom blauen, das grüne steht rechts vom blauen. Welches Buch steht in der Mitte?',
      opts: ['Das blaue', 'Das rote', 'Das grüne', 'Kann man nicht wissen'], a: 0, r: [1, 0, 0, 0, 0],
      ex: 'Rot – Blau – Grün: Das blaue steht zwischen den beiden anderen.' },
    { id: 'l-vor-nach', fam: 'vor-nach-zieleinlauf', cat: 'Logik', type: 'choice',
      q: 'Bei einem Wettlauf kommt Mia vor Ole ins Ziel, aber nach Pia. Wer gewinnt von den dreien?',
      opts: ['Pia', 'Mia', 'Ole', 'Kann man nicht wissen'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Pia ist vor Mia, Mia vor Ole – also Pia, Mia, Ole.' },
    { id: 'l-nasse-strasse', fam: 'modus-tollens', cat: 'Logik', type: 'choice',
      q: 'Wenn es regnet, wird die Straße nass. Die Straße ist trocken. Was folgt daraus?',
      opts: ['Es regnet nicht', 'Es regnet', 'Es hat gestern geregnet', 'Nichts'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Würde es regnen, wäre die Straße nass. Sie ist es nicht – also regnet es nicht.' },
    { id: 'l-pizza', fam: 'gerecht-teilen-stuecke', cat: 'Logik', type: 'number',
      q: 'Drei Freunde teilen sich zwei Pizzen gerecht. Jede Pizza ist in 6 Stücke geschnitten. Wie viele Stücke bekommt jeder?',
      a: 4, r: [1, 0, 0, 1, 0], ex: '2 × 6 = 12 Stücke, geteilt durch 3 = 4.' },
    { id: 'l-cousine', fam: 'verwandt-cousine', cat: 'Logik', type: 'choice',
      q: 'Der Bruder meines Vaters hat eine Tochter. Was ist sie für mich?',
      opts: ['Meine Cousine', 'Meine Nichte', 'Meine Tante', 'Meine Schwester'], a: 0, r: [1, 0, 0, 0, 0],
      ex: 'Der Bruder des Vaters ist der Onkel – seine Tochter ist die Cousine.' },
    { id: 'l-urgross', fam: 'verwandt-vorfahrenkette', cat: 'Logik', type: 'choice',
      q: 'Wer ist die Mutter vom Vater meiner Mutter?',
      opts: ['Meine Urgroßmutter', 'Meine Großmutter', 'Meine Tante', 'Meine Großtante'], a: 0, r: [2, 0, 0, 1, 0],
      ex: 'Der Vater meiner Mutter ist mein Großvater – seine Mutter ist meine Urgroßmutter.' },
    { id: 'l-enkel', fam: 'verwandt-geschwister-enkel', cat: 'Logik', type: 'choice',
      q: 'Tim und Lena sind Geschwister mit denselben Eltern. Lena ist die Enkelin von Oma Berg. Was ist Tim für Oma Berg?',
      opts: ['Ihr Enkel', 'Ihr Sohn', 'Ihr Neffe', 'Ihr Urenkel'], a: 0, r: [1, 0, 0, 0, 0],
      ex: 'Geschwister haben dieselben Großeltern – Tim ist also auch ihr Enkel.' },
    { id: 'l-bello', fam: 'gueltiger-schluss-einzelfall', cat: 'Logik', type: 'choice',
      q: 'Alle Hunde in diesem Park tragen ein Halsband. Bello ist ein Hund in diesem Park. Was stimmt <b>sicher</b>?',
      opts: ['Bello trägt ein Halsband', 'Bello ist angeleint', 'Alle Tiere im Park tragen ein Halsband', 'Nichts davon'], a: 0, r: [1, 0, 0, 0, 0],
      ex: 'Bello gehört zu „alle Hunde in diesem Park“ – also trägt er ein Halsband.' },
    { id: 'l-farben', fam: 'ausschluss-drei-farben', cat: 'Logik', type: 'choice',
      q: 'Anna, Ben und Cem tragen je eine andere Farbe: Rot, Blau oder Grün. Anna trägt nicht Rot. Ben trägt weder Rot noch Blau. Welche Farbe trägt Cem?',
      opts: ['Rot', 'Blau', 'Grün', 'Kann man nicht wissen'], a: 0, r: [2, 0, 0, 1, 0],
      ex: 'Ben bleibt nur Grün. Anna trägt nicht Rot, also Blau. Für Cem bleibt Rot.' },
    { id: 'l-schalter-7', fam: 'schalter-umschalten', cat: 'Logik', type: 'choice',
      q: 'Eine Lampe mit normalem Kippschalter ist aus. Du betätigst den Schalter genau 7-mal. Ist die Lampe danach an oder aus?',
      opts: ['An', 'Aus', 'Kommt auf den Schalter an'], a: 0, r: [1, 0, 0, 1, 0],
      ex: 'Jedes Umlegen wechselt den Zustand: an, aus, an, aus … Nach einer ungeraden Zahl (7) ist sie an.' },
    { id: 'l-bank', fam: 'sitzreihe-bank', cat: 'Logik', type: 'choice',
      q: 'Ali, Bea, Cem und Dora sitzen nebeneinander auf einer Bank. Ali sitzt ganz links. Bea sitzt nicht neben Ali. Cem sitzt direkt rechts neben Bea. Wer sitzt neben Ali?',
      opts: ['Dora', 'Bea', 'Cem', 'Kann man nicht wissen'], a: 0, r: [2, 0, 0, 1, 0],
      ex: 'Bea kann nur auf Platz 3 sitzen (rechts von ihr muss Cem Platz haben). Für Platz 2 neben Ali bleibt Dora.' },
    { id: 'l-aufzug', fam: 'aufrunden-fahrten', cat: 'Logik', type: 'number',
      q: 'Ein Aufzug fasst 4 Personen. 13 Personen wollen nach oben, der Aufzug fährt jedes Mal leer wieder herunter. Wie oft muss er mindestens nach oben fahren?',
      a: 4, r: [1, 0, 1, 1, 0], ex: 'Drei volle Fahrten bringen 12 Personen hoch – für die 13. braucht es eine vierte.' },
    { id: 'l-mehrheit', fam: 'mehrheit-stimmen', cat: 'Logik', type: 'number',
      q: 'Neun Personen stimmen ab, jede hat eine Stimme. Ein Vorschlag braucht die Mehrheit aller neun Stimmen. Wie viele Ja-Stimmen braucht er mindestens?',
      a: 5, r: [1, 0, 0, 1, 0], ex: 'Mehrheit heißt mehr als die Hälfte von 9 – also mindestens 5.' },
    { id: 'l-kuchen-halb', fam: 'halbieren-stuecke', cat: 'Logik', type: 'number',
      q: 'Ein Kuchen wird einmal in zwei Hälften geschnitten. Danach wird nur eine der Hälften noch einmal halbiert. Wie viele Stücke gibt es jetzt?',
      a: 3, r: [1, 0, 1, 1, 0], ex: 'Eine Hälfte bleibt ganz, die andere wird zu zwei Vierteln: 1 + 2 = 3.' },
    { id: 'l-treppe', fam: 'stockwerk-stufen', cat: 'Logik', type: 'number',
      q: 'Lisa wohnt im 4. Stock. Zwischen zwei Stockwerken liegen jeweils 18 Stufen. Wie viele Stufen steigt sie vom Erdgeschoss bis zu ihrer Wohnung?',
      a: 72, r: [1, 0, 1, 1, 0], ex: 'Vom Erdgeschoss in den 4. Stock sind es 4 Treppen: 4 × 18 = 72.' },

    // ---------- mittel ----------
    { id: 'l-aelteste-offen', fam: 'reihenfolge-unbestimmt', cat: 'Logik', type: 'choice',
      q: 'Paul ist älter als Eva. Kim ist ebenfalls älter als Eva. Wer ist von den dreien am ältesten?',
      opts: ['Kann man nicht wissen', 'Paul', 'Kim', 'Eva'], a: 0, r: [1, 1, 2, 0, 0],
      ex: 'Wir wissen nur, dass Eva die Jüngste ist. Ob Paul oder Kim älter ist, steht nirgends.' },
    { id: 'l-monate-13', fam: 'schubfach-monate', cat: 'Logik', type: 'number',
      q: 'Wie viele Menschen müssen mindestens in einem Raum sein, damit <b>sicher</b> zwei von ihnen im selben Monat Geburtstag haben?',
      a: 13, r: [1, 1, 1, 0, 0], ex: '12 Menschen könnten in 12 verschiedenen Monaten Geburtstag haben. Der 13. muss einen Monat doppelt belegen.' },
    { id: 'l-ritter-ja', fam: 'ritter-selbstauskunft', cat: 'Logik', type: 'choice',
      q: 'Auf einer Insel sagen Ritter immer die Wahrheit, Schurken lügen immer. Du fragst einen Bewohner: „Bist du ein Ritter?“ Was antwortet er?',
      opts: ['Sicher „Ja“', 'Sicher „Nein“', 'Ritter „Ja“, Schurke „Nein“', 'Kann man nicht sagen'], a: 0, r: [1, 2, 2, 0, 0],
      ex: 'Ein Ritter sagt wahrheitsgemäß „Ja“. Ein Schurke lügt – und sagt ebenfalls „Ja“.' },
    { id: 'l-hund-katze-klasse', fam: 'mengen-ueberschneidung', cat: 'Logik', type: 'number',
      q: 'In einer Klasse mit 20 Kindern hat jedes Kind einen Hund, eine Katze oder beides. 12 Kinder haben einen Hund, 10 eine Katze. Wie viele haben beides?',
      a: 2, r: [1, 1, 1, 1, 0], ex: '12 + 10 = 22 – das sind 2 mehr als 20 Kinder. Diese 2 wurden doppelt gezählt.' },
    { id: 'l-muenze-serie', fam: 'spielerfehlschluss', cat: 'Logik', type: 'choice',
      q: 'Eine faire Münze ist fünfmal hintereinander auf „Kopf“ gefallen. Was ist beim sechsten Wurf wahrscheinlicher?',
      opts: ['Beides gleich wahrscheinlich', '„Zahl“', '„Kopf“'], a: 0, r: [1, 1, 1, 0, 0],
      ex: 'Die Münze hat kein Gedächtnis – jeder Wurf ist wieder 50 : 50.' },
    { id: 'l-gerade-groesser3', fam: 'wuerfel-ereignis-vergleich', cat: 'Logik', type: 'choice',
      q: 'Du würfelst einmal mit einem normalen Würfel. Was ist wahrscheinlicher: eine gerade Zahl oder eine Zahl größer als 3?',
      opts: ['Beides gleich wahrscheinlich', 'Eine gerade Zahl', 'Eine Zahl größer als 3'], a: 0, r: [1, 1, 1, 1, 0],
      ex: 'Gerade: 2, 4, 6. Größer als 3: 4, 5, 6. Beides sind je drei von sechs Zahlen.' },
    { id: 'l-rosen-welken', fam: 'ungueltiger-schluss-einige', cat: 'Logik', type: 'choice',
      q: 'Alle Rosen sind Blumen. Einige Blumen welken schnell. Was folgt <b>sicher</b>?',
      opts: ['Nichts davon folgt sicher', 'Einige Rosen welken schnell', 'Alle Rosen welken schnell', 'Keine Rose welkt schnell'], a: 0, r: [1, 1, 2, 0, 0],
      ex: 'Die schnell welkenden Blumen könnten lauter andere Blumen sein – über Rosen sagt das nichts.' },
    { id: 'l-fieber', fam: 'bejahung-des-nachsatzes', cat: 'Logik', type: 'choice',
      q: 'Wenn Ben Fieber hat, bleibt er zu Hause. Heute ist Ben zu Hause. Was folgt <b>sicher</b>?',
      opts: ['Nichts davon folgt sicher', 'Ben hat Fieber', 'Ben hat kein Fieber', 'Ben ist krank'], a: 0, r: [1, 1, 2, 0, 0],
      ex: 'Die Regel sagt nur: Fieber → zu Hause. Ben kann auch aus anderen Gründen zu Hause sein.' },
    { id: 'l-grossonkel', fam: 'verwandt-grossonkel', cat: 'Logik', type: 'choice',
      q: 'Lea ist die Tochter von Ina. Ina ist die Tochter von Ute. Rolf ist Utes Bruder. Was ist Rolf für Lea?',
      opts: ['Ihr Großonkel', 'Ihr Onkel', 'Ihr Großvater', 'Ihr Cousin'], a: 0, r: [2, 0, 0, 1, 1],
      ex: 'Ute ist Leas Großmutter. Der Bruder der Großmutter ist der Großonkel.' },
    { id: 'l-augensumme', fam: 'zwei-wuerfel-summe', cat: 'Logik', type: 'number',
      q: 'Du würfelst mit zwei normalen Würfeln und addierst die Augen. Welche Summe kommt am häufigsten vor?',
      a: 7, r: [1, 1, 1, 1, 0], ex: '7 geht auf sechs Arten (1+6, 2+5, 3+4 und umgekehrt) – jede andere Summe auf weniger.' },
    { id: 'l-laden-montag', fam: 'regelkette-wochentag', cat: 'Logik', type: 'choice',
      q: 'Der Laden hat montags geschlossen. Lea kauft nur ein, wenn der Laden offen ist. Lea war heute dort einkaufen. Was folgt <b>sicher</b>?',
      opts: ['Heute ist nicht Montag', 'Heute ist Dienstag', 'Morgen ist Montag', 'Nichts'], a: 0, r: [2, 1, 1, 0, 0],
      ex: 'Lea war einkaufen → der Laden war offen → es ist nicht Montag. Welcher andere Tag, bleibt offen.' },
    { id: 'l-tante-schwester', fam: 'verwandt-tante-ausschluss', cat: 'Logik', type: 'choice',
      q: 'Lisa ist Toms leibliche Tante (nicht angeheiratet). Toms Vater hat keine Geschwister. Was ist Lisa für Toms Mutter?',
      opts: ['Ihre Schwester', 'Ihre Schwägerin', 'Ihre Cousine', 'Ihre Tante'], a: 0, r: [2, 1, 1, 0, 0],
      ex: 'Eine leibliche Tante ist die Schwester eines Elternteils. Der Vater ist Einzelkind – also ist Lisa die Schwester der Mutter.' },
    { id: 'l-eier', fam: 'gleichzeitig-statt-nacheinander', cat: 'Logik', type: 'number',
      q: 'Ein Ei ist nach 6 Minuten im kochenden Wasser hart. Wie viele Minuten brauchen 3 Eier, die gemeinsam im selben Topf kochen?',
      a: 6, r: [1, 1, 2, 0, 0], ex: 'Die Eier kochen gleichzeitig – jedes braucht 6 Minuten, alle zusammen also auch.' },
    { id: 'l-chirurgin', fam: 'rollenannahme', cat: 'Logik', type: 'choice',
      q: 'Ein Junge wird nach einem Sportunfall ins Krankenhaus gebracht. Sein Vater wartet draußen. Im OP sagt die Ärztin: „Ich kann ihn nicht operieren – er ist mein Sohn.“ Wie ist das möglich?',
      opts: ['Die Ärztin ist seine Mutter', 'Er ist adoptiert', 'Der Vater lügt', 'Sie verwechselt ihn'], a: 0, r: [1, 2, 1, 0, 0],
      ex: 'Ganz einfach: Die Ärztin ist die Mutter des Jungen.' },
    { id: 'l-drei-muenzen', fam: 'muenzen-ausgaenge-zaehlen', cat: 'Logik', type: 'number',
      q: 'Du wirfst drei Münzen. Es gibt 8 mögliche Ausgänge (z. B. Kopf-Zahl-Kopf). Bei wie vielen davon zeigen <b>genau zwei</b> Münzen Kopf?',
      a: 3, r: [2, 1, 1, 1, 0], ex: 'Die eine Zahl-Münze kann die erste, zweite oder dritte sein: KKZ, KZK, ZKK.' },
    { id: 'l-seiten-lesen', fam: 'inklusiv-zaehlen', cat: 'Logik', type: 'number',
      q: 'Du liest heute ein Buch von Seite 12 bis einschließlich Seite 20. Wie viele Seiten hast du gelesen?',
      a: 9, r: [1, 1, 2, 1, 0], ex: '20 − 12 = 8 zählt nur die Abstände. Beide Endseiten mitgezählt sind es 9 Seiten.' },
    { id: 'l-fuenf-schwestern', fam: 'gemeinsamer-bruder', cat: 'Logik', type: 'number',
      q: 'In einer Familie gibt es fünf Schwestern. Jede von ihnen hat genau einen Bruder. Wie viele Kinder hat die Familie?',
      a: 6, r: [1, 1, 2, 1, 0], ex: 'Alle fünf haben denselben Bruder: 5 Mädchen + 1 Junge = 6 Kinder.' },
    { id: 'l-zieleinlauf-5', fam: 'platzierung-fuenf', cat: 'Logik', type: 'choice',
      q: 'Udo, Vera, Will, Xenia und Yusuf laufen um die Wette. Will ist Letzter. Vera kommt direkt nach Udo. Xenia ist vor Udo, aber nicht Erste. Wer gewinnt?',
      opts: ['Yusuf', 'Xenia', 'Udo', 'Vera'], a: 0, r: [2, 1, 0, 1, 0],
      ex: 'Udo und Vera brauchen zwei Plätze hintereinander vor Will. Xenia ist vor Udo, aber nicht Erste → Xenia 2, Udo 3, Vera 4. Platz 1: Yusuf.' },
    { id: 'l-haustiere', fam: 'raster-alter-tier', cat: 'Logik', type: 'choice',
      q: 'Ali, Bea und Cleo sind 7, 8 und 9 Jahre alt und haben je ein anderes Tier: Hund, Katze, Fisch. Ali ist 7 und hat keinen Hund. Das Kind mit der Katze ist älter als Bea. Wer hat die Katze?',
      opts: ['Cleo', 'Bea', 'Ali', 'Kann man nicht wissen'], a: 0, r: [2, 1, 1, 1, 0],
      ex: 'Die Katze gehört jemandem, der älter als Bea ist – nicht Ali (7), nicht Bea. Also Cleo, und Bea ist 8.' },

    // ---------- schwer ----------
    { id: 'l-handschuhe', fam: 'schubfach-links-rechts', cat: 'Logik', type: 'number',
      q: 'In einer Kiste liegen 10 Paar gleiche schwarze Handschuhe, jedes Paar aus einem linken und einem rechten. Wie viele musst du im Dunkeln mindestens ziehen, um <b>sicher</b> ein tragbares Paar zu haben?',
      a: 11, r: [1, 2, 2, 0, 0], ex: 'Im Pech ziehst du zuerst alle 10 linken. Der 11. Handschuh ist dann sicher ein rechter.' },
    { id: 'l-jede-farbe', fam: 'schlimmster-fall-jede-farbe', cat: 'Logik', type: 'number',
      q: 'In einem Beutel liegen 5 rote, 7 blaue und 9 grüne Kugeln. Wie viele musst du blind mindestens ziehen, um <b>sicher</b> von jeder Farbe eine zu haben?',
      a: 17, r: [2, 2, 2, 1, 0], ex: 'Im schlimmsten Fall ziehst du zuerst alle 9 grünen und 7 blauen. Erst die 17. Kugel ist sicher rot.' },
    { id: 'l-faehre', fam: 'faehrmann-rueckfahrt', cat: 'Logik', type: 'number',
      q: 'Ein Fährmann kann außer sich selbst 2 Personen mitnehmen. 6 Personen wollen übersetzen, nur er kann rudern. Wie viele Fahrten braucht er mindestens (hin und zurück zählen einzeln)?',
      a: 5, r: [2, 1, 2, 1, 0], ex: 'Hin (2 drüben), zurück, hin (4), zurück, hin (6). Nach der letzten Fahrt muss er nicht mehr zurück: 5.' },
    { id: 'l-beide-luegner', fam: 'luegner-wir-beide', cat: 'Logik', type: 'choice',
      q: 'Jeder sagt immer die Wahrheit oder lügt immer. A sagt: „B und ich sind beide Lügner.“ Was stimmt?',
      opts: ['A lügt, B sagt die Wahrheit', 'Beide lügen', 'A sagt die Wahrheit, B lügt', 'Beide sagen die Wahrheit'], a: 0, r: [2, 2, 1, 1, 0],
      ex: 'Wäre A ehrlich, wäre er ein Lügner – Widerspruch. Also lügt A, und „beide lügen“ ist falsch: B ist ehrlich.' },
    { id: 'l-tee-kaffee', fam: 'mengen-ueberschneidung', cat: 'Logik', type: 'number',
      q: 'In einem Büro trinken 70 % der Leute Kaffee und 60 % Tee. Wie viel Prozent trinken <b>mindestens</b> beides?',
      a: 30, r: [2, 2, 1, 1, 0], ex: '70 % + 60 % = 130 %. Mehr als 100 % gibt es nicht – mindestens 30 % werden doppelt gezählt.' },
    { id: 'l-waage-9', fam: 'waage-schwere-kugel', cat: 'Logik', type: 'number',
      q: 'Von 9 gleich aussehenden Kugeln ist genau eine etwas schwerer. Wie oft musst du mit einer Balkenwaage (ohne Gewichte) mindestens wiegen, um sie <b>sicher</b> zu finden?',
      a: 2, r: [2, 2, 2, 0, 0], ex: 'Drei Gruppen à 3: Eine Wägung zeigt die schwere Gruppe. Von deren 3 Kugeln legst du je eine auf jede Seite – fertig.' },
    { id: 'l-zwei-muenzen', fam: 'kombination-vs-gleiche', cat: 'Logik', type: 'choice',
      q: 'Du wirfst zwei Münzen. Was ist wahrscheinlicher?',
      opts: ['Einmal Kopf und einmal Zahl', 'Zweimal Kopf', 'Beides gleich wahrscheinlich'], a: 0, r: [2, 2, 2, 0, 0],
      ex: 'Die Ausgänge sind KK, KZ, ZK, ZZ. „Je einmal“ trifft zwei davon, „zweimal Kopf“ nur einen.' },
    { id: 'l-drei-brueder', fam: 'genau-ein-luegner', cat: 'Logik', type: 'choice',
      q: 'Von drei Brüdern lügt genau einer, die anderen sagen die Wahrheit. A: „B ist der Lügner.“ B: „Ich bin nicht der Lügner.“ C: „A ist der Lügner.“ Wer lügt?',
      opts: ['A', 'B', 'C', 'Kann man nicht sagen'], a: 0, r: [2, 1, 1, 2, 0],
      ex: 'Lügt B, wäre Cs Aussage falsch – zwei Lügner. Lügt C, wäre As Aussage falsch – auch zwei. Nur „A lügt“ passt.' },
    { id: 'l-runder-tisch', fam: 'luegner-im-kreis', cat: 'Logik', type: 'number',
      q: 'Sechs Leute sitzen an einem runden Tisch. Jeder sagt immer die Wahrheit oder lügt immer. Jeder sagt: „Mein rechter Nachbar lügt.“ Wie viele Lügner sitzen am Tisch?',
      a: 3, r: [2, 2, 1, 1, 0], ex: 'Ehrliche haben einen Lügner rechts, Lügner einen Ehrlichen. Es geht also abwechselnd: 3 und 3.' },
    { id: 'l-mindestens-eine-6', fam: 'zwei-wuerfel-mindestens', cat: 'Logik', type: 'number',
      q: 'Zwei Würfel (ein roter, ein blauer) ergeben 36 mögliche Würfe. Bei wie vielen davon ist <b>mindestens eine</b> Sechs dabei?',
      a: 11, r: [2, 1, 2, 1, 0], ex: '6 Würfe mit roter Sechs plus 6 mit blauer Sechs – aber 6-6 wurde doppelt gezählt: 11.' },
    { id: 'l-kerzen', fam: 'was-bleibt-uebrig', cat: 'Logik', type: 'number',
      q: 'In einem Raum brennen 10 Kerzen. Ein Windstoß löscht 3 davon, niemand zündet sie wieder an. Die übrigen brennen weiter, bis sie ganz heruntergebrannt sind. Wie viele Kerzen bleiben am Ende übrig?',
      a: 3, r: [1, 2, 2, 0, 0], ex: 'Die 7 brennenden Kerzen verbrennen vollständig. Übrig bleiben nur die 3 gelöschten.' },
    { id: 'l-wer-kommt', fam: 'kontraposition-kette', cat: 'Logik', type: 'choice',
      q: 'Wenn Ina kommt, kommt auch Jo. Wenn Jo kommt, kommt Kai nicht. Kai kommt. Wer kommt <b>sicher nicht</b>?',
      opts: ['Jo und Ina', 'Nur Jo', 'Nur Ina', 'Niemand'], a: 0, r: [2, 1, 2, 0, 0],
      ex: 'Kai kommt, also kommt Jo nicht. Käme Ina, käme Jo mit – also kommt auch Ina nicht.' },
    { id: 'l-klasse-25', fam: 'schubfach-monate', cat: 'Logik', type: 'choice',
      q: 'In einer Klasse sind 25 Kinder. Was stimmt <b>sicher</b>?',
      opts: ['Mindestens drei haben im selben Monat Geburtstag', 'Mindestens vier haben im selben Monat Geburtstag', 'Zwei haben am selben Tag Geburtstag', 'Mindestens eins hat im Januar Geburtstag'], a: 0,
      r: [2, 2, 1, 1, 0], ex: 'Mit je 2 pro Monat sind erst 24 Kinder verteilt – das 25. macht einen Monat dreifach. Mehr ist nicht garantiert.' },
    { id: 'l-ahnen', fam: 'vorfahren-zaehlen', cat: 'Logik', type: 'number',
      q: 'Ich habe vier Großeltern. Wie viele Großeltern haben meine vier Großeltern zusammen, wenn es keine gemeinsamen Vorfahren gibt?',
      a: 16, r: [2, 1, 2, 1, 0], ex: 'Jeder meiner 4 Großeltern hat selbst 4 Großeltern: 4 × 4 = 16 (meine Ururgroßeltern).' },
    { id: 'l-fuenf-saetze', fam: 'selbstbezug-saetze', cat: 'Logik', type: 'number',
      q: 'Auf einem Zettel stehen fünf Sätze. Satz 1: „Genau 1 Satz hier ist falsch.“ Satz 2: „Genau 2 Sätze hier sind falsch.“ … Satz 5: „Genau 5 Sätze hier sind falsch.“ Welcher Satz ist wahr? (Nummer)',
      a: 4, r: [2, 3, 1, 1, 0], ex: 'Die Sätze widersprechen sich, höchstens einer ist wahr. Keiner geht nicht (dann wäre Satz 5 wahr). Also ist genau einer wahr, 4 sind falsch – das sagt Satz 4.' },
    { id: 'l-bonbons', fam: 'maximum-bei-verschieden', cat: 'Logik', type: 'number',
      q: 'Fünf Kinder bekommen zusammen 20 Bonbons. Jedes Kind bekommt mindestens eines, und keine zwei bekommen gleich viele. Wie viele Bonbons kann das Kind mit den meisten <b>höchstens</b> haben?',
      a: 10, r: [2, 2, 1, 1, 0], ex: 'Die anderen vier bekommen so wenig wie möglich: 1 + 2 + 3 + 4 = 10. Es bleiben 10.' },
    { id: 'l-quadrat-tisch', fam: 'blickrichtung-links-rechts', cat: 'Logik', type: 'choice',
      q: 'Anna, Bernd, Clara und Dieter sitzen an einem quadratischen Tisch, je einer pro Seite, alle schauen zur Mitte. Anna sitzt Bernd gegenüber. Clara sitzt links von Anna. Wer sitzt rechts von Bernd?',
      opts: ['Clara', 'Dieter', 'Anna', 'Kann man nicht wissen'], a: 0, r: [2, 2, 2, 1, 0],
      ex: 'Bernd schaut Anna an, also in die Gegenrichtung. Was für Anna links ist, ist für Bernd rechts – dort sitzt Clara.' },
    { id: 'l-wohnort', fam: 'raster-stadt-verkehr', cat: 'Logik', type: 'choice',
      q: 'Ina, Jule und Kim wohnen in Bonn, Kiel und Ulm und fahren Rad, Bus oder Bahn – jede anders. Wer in Kiel wohnt, fährt Bus. Ina fährt weder Bus noch Rad. Jule wohnt nicht in Kiel. Wer fährt Rad?',
      opts: ['Jule', 'Kim', 'Ina', 'Kann man nicht wissen'], a: 0, r: [3, 1, 1, 1, 0],
      ex: 'Ina fährt Bahn, wohnt also nicht in Kiel. Jule auch nicht – Kim wohnt in Kiel und fährt Bus. Für Jule bleibt das Rad.' },

    // ---------- sehr schwer ----------
    { id: 'l-lampen-100', fam: 'teiler-umschalten', cat: 'Logik', type: 'number',
      q: '100 Lampen sind aus. Person 1 schaltet jede Lampe um, Person 2 jede zweite, Person 3 jede dritte – und so weiter bis Person 100. Wie viele Lampen brennen am Ende?',
      a: 10, r: [3, 3, 1, 2, 0], ex: 'Lampe n wird so oft umgeschaltet, wie n Teiler hat. Ungerade viele Teiler haben nur Quadratzahlen: 1, 4, 9 … 100 – das sind 10.' },
    { id: 'l-doppel-ko', fam: 'turnier-spiele', cat: 'Logik', type: 'number',
      q: 'Bei einem Turnier mit 20 Spielern scheidet aus, wer zum zweiten Mal verliert. Gespielt wird, bis nur noch einer übrig ist. Wie viele Spiele gibt es <b>höchstens</b>?',
      a: 39, r: [2, 3, 2, 1, 0], ex: 'Jedes Spiel erzeugt genau eine Niederlage. 19 Ausgeschiedene haben je 2, der Sieger höchstens 1: 38 + 1 = 39.' },
    { id: 'l-broetchen', fam: 'fairer-anteil', cat: 'Logik', type: 'number',
      q: 'Anna bringt 3 Brötchen mit, Ben 5. Die beiden teilen alle 8 mit Cem, jeder isst gleich viel. Cem zahlt dafür 8 €. Wie viele Euro stehen Anna fairerweise zu?',
      a: 1, r: [3, 3, 3, 1, 0], ex: 'Jeder isst 8/3 Brötchen. Anna gibt Cem nur 3 − 8/3 = 1/3 ab, Ben 7/3. Die 8 € teilen sich also 1 : 7 – Anna bekommt 1 €.' },
    { id: 'l-waage-27', fam: 'waage-schwere-kugel', cat: 'Logik', type: 'number',
      q: 'Unter gleich aussehenden Kugeln ist genau eine schwerer. Du hast 3 Wägungen mit einer Balkenwaage ohne Gewichte. Wie viele Kugeln dürfen es <b>höchstens</b> sein, damit du die schwere sicher findest?',
      a: 27, r: [3, 3, 1, 1, 0], ex: 'Jede Wägung hat 3 Ausgänge (links, rechts, gleich) und drittelt die Kandidaten: 3 × 3 × 3 = 27.' },
    { id: 'l-gewichtssteine', fam: 'gewichte-beide-schalen', cat: 'Logik', type: 'number',
      q: 'Mit einer Balkenwaage willst du jede ganze Kilozahl von 1 bis 40 abwiegen. Gewichtsstücke dürfen auf <b>beide</b> Schalen. Wie viele Gewichtsstücke brauchst du mindestens?',
      a: 4, r: [3, 3, 1, 1, 1], ex: '1, 3, 9 und 27 kg reichen (z. B. 2 = 3 − 1). Drei Stücke können höchstens 13 verschiedene positive Werte ergeben.' },
    { id: 'l-hund-katze-maus', fam: 'flussueberquerung', cat: 'Logik', type: 'number',
      q: 'Ein Bauer will Hund, Katze und Maus über einen Fluss bringen; ins Boot passt neben ihm nur ein Tier. Allein gelassen jagt der Hund die Katze und die Katze die Maus. Wie viele Überfahrten braucht er mindestens?',
      a: 7, r: [3, 2, 1, 2, 0], ex: 'Katze rüber, leer zurück, Hund rüber, Katze zurück, Maus rüber, leer zurück, Katze rüber: 7 Fahrten.' },
    { id: 'l-bruecke', fam: 'bruecke-taschenlampe', cat: 'Logik', type: 'number',
      q: 'Vier Personen müssen nachts über eine Brücke: höchstens zwei gleichzeitig, mit der einzigen Taschenlampe. Allein brauchen sie 1, 3, 6 und 8 Minuten, zu zweit zählt das langsamere Tempo. Wie viele Minuten brauchen alle mindestens?',
      a: 18, r: [3, 3, 2, 2, 0], ex: '1+3 rüber (3), 1 zurück (1), 6+8 rüber (8), 3 zurück (3), 1+3 rüber (3) = 18. Die beiden Langsamen gehen zusammen.' },
    { id: 'l-ein-ehrlicher', fam: 'je-zwei-ein-luegner', cat: 'Logik', type: 'number',
      q: 'Ein Verein hat 30 Mitglieder. Mindestens eines sagt immer die Wahrheit. Von je zwei beliebigen Mitgliedern lügt mindestens eines. Wie viele Mitglieder sagen immer die Wahrheit?',
      a: 1, r: [2, 3, 2, 0, 0], ex: 'Gäbe es zwei Ehrliche, wäre dieses Paar ohne Lügner. Also höchstens einer – und mindestens einer ist vorgegeben.' },
    { id: 'l-drei-schalter', fam: 'schalter-waerme', cat: 'Logik', type: 'number',
      q: 'Im Keller sind drei Schalter, einer davon gehört zu einer alten Glühbirne auf dem Dachboden. Du darfst die Schalter beliebig betätigen. Wie oft musst du mindestens hochgehen, um sicher zu wissen, welcher es ist?',
      a: 1, r: [2, 3, 2, 0, 0], ex: 'Schalter 1 lange an, dann aus, Schalter 2 an, hochgehen: Brennt sie → 2. Aus, aber warm → 1. Aus und kalt → 3.' },
    { id: 'l-ameisen', fam: 'zusammenstoss-tauschen', cat: 'Logik', type: 'number',
      q: 'Auf einem 100 cm langen Stab krabbeln 7 Ameisen mit je 1 cm pro Sekunde in beliebige Richtungen. Treffen sich zwei, kehren beide um. Am Ende fallen sie herunter. Nach spätestens wie vielen Sekunden sind sicher alle unten?',
      a: 100, r: [2, 3, 2, 0, 0], ex: 'Zwei Ameisen, die umkehren, sehen aus wie zwei, die aneinander vorbeilaufen. Jede „Spur“ läuft also geradeaus – höchstens 100 cm.' },
    { id: 'l-muenzhaufen', fam: 'umdrehen-im-dunkeln', cat: 'Logik', type: 'number',
      q: 'Im Dunkeln liegen 20 Münzen, genau 7 zeigen Kopf. Du sollst sie in zwei Haufen mit gleich vielen Kopf-Münzen teilen und darfst Münzen umdrehen. Wie viele Münzen muss der kleinere Haufen haben?',
      a: 7, r: [2, 3, 2, 1, 0], ex: 'Nimm 7 beliebige Münzen und drehe alle um. Lagen darin x Köpfe, sind es danach 7 − x – genau so viele wie im anderen Haufen.' },
  ]);
})();

// ---- sprache.js ----
(function () {
  const { seq, eq } = (typeof window !== 'undefined' ? window : globalThis).QSVG;
  QUIZ_ADD([
    // ===== leicht =====
    { id: 's-kiefer', fam: 'teekessel', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort bezeichnet sowohl einen Baum als auch einen Knochen?',
      opts: ['Kiefer', 'Eiche', 'Rippe', 'Birke'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Die Kiefer ist ein Nadelbaum – und der Kiefer ist der Knochen, in dem die Zähne sitzen.' },
    { id: 's-fisch', fam: 'leiter', cat: 'Sprache', type: 'text',
      q: 'Ändere genau einen Buchstaben, sodass aus <b>TISCH</b> ein Tier wird.',
      a: 'FISCH', r: [1, 1, 0, 0, 0], ex: 'T wird zu F: TISCH → FISCH.' },
    { id: 's-nebel', fam: 'umkehr', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort ergibt rückwärts gelesen ein anderes sinnvolles Wort?',
      opts: ['Nebel', 'Zebra', 'Kerze', 'Blume'], a: 0, r: [1, 1, 0, 1, 0],
      ex: 'NEBEL rückwärts ist LEBEN. ARBEZ, EZREK und EMULB sind keine Wörter.' },
    { id: 's-silben-tier', fam: 'silben', cat: 'Sprache', type: 'choice',
      q: 'Welcher Tiername hat die meisten Silben?',
      opts: ['Hund', 'Pferd', 'Katze', 'Krokodil'], a: 3, r: [1, 0, 0, 1, 0],
      ex: 'Kro-ko-dil hat drei Silben, Kat-ze zwei, Hund und Pferd je eine.' },
    { id: 's-silben-zahl', fam: 'silben', cat: 'Sprache', type: 'number',
      q: 'Wie viele Silben hat das Wort <b>Schokoladenkuchen</b>?',
      a: 6, r: [1, 0, 0, 1, 0], ex: 'Scho-ko-la-den-ku-chen: sechs Silben.' },
    { id: 's-eule', fam: 'wort-im-wort', cat: 'Sprache', type: 'text',
      q: 'Welches Tier steckt in allen drei Wörtern?' + seq(['BEULE', 'KEULE', 'HEULEN']),
      a: 'EULE', r: [1, 1, 0, 0, 0], ex: 'B-EULE, K-EULE, H-EULE-N: Überall steckt die EULE.' },
    { id: 's-ernte', fam: 'anfang-ende', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort beginnt und endet mit demselben Buchstaben?',
      opts: ['Nase', 'Rose', 'Ernte', 'Tomate'], a: 2, r: [1, 0, 0, 1, 0],
      ex: 'ERNTE beginnt und endet mit E. Die anderen enden zwar auf E, beginnen aber anders.' },
    { id: 's-baer', fam: 'umlaut', cat: 'Sprache', type: 'text',
      q: 'Setze zwei Pünktchen auf einen Buchstaben – aus <b>BAR</b> wird ein Tier.',
      a: 'BÄR', accept: ['BAER'], r: [1, 1, 0, 0, 0], ex: 'Aus dem A wird ein Ä: BAR → BÄR.' },
    { id: 's-balkon', fam: 'abc-sortieren', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort steht im Wörterbuch an erster Stelle?',
      opts: ['Ball', 'Balkon', 'Bank', 'Banane'], a: 1, r: [1, 0, 1, 1, 0],
      ex: 'BALK… kommt vor BALL…, weil K vor L steht. BAN… kommt erst danach. Kürzer heißt nicht früher.' },
    { id: 's-leid', fam: 'streichen', cat: 'Sprache', type: 'text',
      q: 'Streiche einen Buchstaben – aus <b>KLEID</b> wird ein Gefühl.',
      a: 'LEID', r: [1, 1, 0, 0, 0], ex: 'Ohne das K bleibt LEID übrig.' },
    { id: 's-hausgabel', fam: 'kompositum-falsch', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort ergibt mit „Haus“ davor <b>kein</b> gängiges Wort?',
      opts: ['Tür', 'Schuh', 'Aufgabe', 'Gabel'], a: 3, r: [1, 1, 0, 0, 0],
      ex: 'Haustür, Hausschuh und Hausaufgabe gibt es – eine „Hausgabel“ nicht.' },
    { id: 's-birne', fam: 'anagramm-obst', cat: 'Sprache', type: 'text',
      q: 'Welches Obst steckt in diesen Buchstaben?' + seq(['N', 'E', 'R', 'I', 'B']),
      a: 'BIRNE', r: [1, 1, 0, 1, 0], ex: 'N-E-R-I-B wird zu BIRNE.' },
    { id: 's-ente', fam: 'buchstaben-sprechen', cat: 'Sprache', type: 'text',
      q: 'Sprich diese beiden Buchstaben laut aus. Welches Tier hörst du?' + seq(['N', 'T']),
      a: 'ENTE', r: [1, 1, 0, 0, 0], ex: 'N heißt „En“, T heißt „Te“: En-Te – die ENTE.' },
    { id: 's-achterbahn', fam: 'zahl-rebus', cat: 'Sprache', type: 'text',
      q: 'Welches Wort ist gemeint?' + seq(['8ERBAHN']),
      a: 'ACHTERBAHN', r: [1, 1, 0, 0, 0], ex: 'Die 8 wird als ACHT gelesen: ACHT-ERBAHN = ACHTERBAHN.' },

    // ===== mittel =====
    { id: 's-igel', fam: 'versteckt-satz', cat: 'Sprache', type: 'text',
      q: 'Welches Tier versteckt sich – über die Wortgrenzen hinweg – in diesem Satz?<br><i>„Er kauft zwei gelbe Tulpen.“</i>',
      a: 'IGEL', r: [1, 2, 0, 1, 0], ex: 'zwe<b>I GEL</b>be: Über die Wortgrenze hinweg steht IGEL.' },
    { id: 's-golf', fam: 'leiter', cat: 'Sprache', type: 'text',
      q: 'Ändere in jedem Schritt genau einen Buchstaben, jedes Zwischenwort muss ein echtes Wort sein. Welches Wort steht in der Mitte?' + seq(['WOLF', '?', 'GOLD']),
      a: 'GOLF', r: [1, 1, 0, 1, 0], ex: 'WOLF → GOLF → GOLD. Der andere Weg über „WOLD“ ergibt kein Wort.' },
    { id: 's-hantel', fam: 'schuettel', cat: 'Sprache', type: 'text',
      q: 'Vertausche die Anfangsbuchstaben von <b>HUND</b> und <b>MANTEL</b>. Es entstehen ein Körperteil und ein Sportgerät. Welches Sportgerät?',
      a: 'HANTEL', r: [1, 1, 0, 1, 0], ex: 'HUND + MANTEL wird zu MUND + HANTEL.' },
    { id: 's-drei', fam: 'vor-nach-allen', cat: 'Sprache', type: 'text',
      q: 'Welches Wort passt vor alle vier?' + seq(['…ECK', '…SATZ', '…KLANG', '…RAD']),
      a: 'DREI', r: [1, 2, 1, 0, 0],
      ex: 'Dreieck, Dreisatz, Dreiklang, Dreirad. „Ein“ passt zu Einsatz, Einklang und Einrad – aber ein „Eineck“ gibt es nicht.' },
    { id: 's-schirm', fam: 'vor-nach-allen', cat: 'Sprache', type: 'text',
      q: 'Welches Wort passt hinter alle drei?' + seq(['REGEN…', 'SONNEN…', 'BILD…']),
      a: 'SCHIRM', r: [1, 2, 0, 0, 0], ex: 'Regenschirm, Sonnenschirm, Bildschirm.' },
    { id: 's-regal', fam: 'umkehr', cat: 'Sprache', type: 'text',
      q: 'Ein Möbelstück ergibt rückwärts gelesen einen Raum, in dem man Vorräte aufbewahrt. Welches Möbelstück?',
      a: 'REGAL', r: [1, 2, 0, 1, 0], ex: 'REGAL rückwärts gelesen ist LAGER.' },
    { id: 's-gips', fam: 'abc-reihenfolge', cat: 'Sprache', type: 'choice',
      q: 'Bei welchem Wort stehen die Buchstaben in alphabetischer Reihenfolge?',
      opts: ['Gips', 'Gans', 'Hose', 'Brot'], a: 0, r: [1, 1, 0, 2, 0],
      ex: 'G – I – P – S: jeder Buchstabe kommt im Alphabet nach dem vorigen. Bei Gans (G→A), Hose (S→E) und Brot (R→O) klappt das nicht.' },
    { id: 's-laeufer', fam: 'teekessel', cat: 'Sprache', type: 'text',
      q: 'Welches Wort bezeichnet zugleich eine Schachfigur, einen langen schmalen Teppich und einen Sportler?',
      a: 'LÄUFER', accept: ['LAEUFER'], r: [1, 2, 0, 0, 1],
      ex: 'Der Läufer im Schach, der Läufer im Flur und der Läufer auf der Bahn.' },
    { id: 's-reittier', fam: 'palindrom-offen', cat: 'Sprache', type: 'text',
      q: 'Gesucht ist ein Wort mit 8 Buchstaben, das vorwärts und rückwärts gelesen gleich ist – man kann darauf reiten.',
      a: 'REITTIER', r: [1, 2, 0, 1, 0], ex: 'R-E-I-T-T-I-E-R liest sich in beide Richtungen gleich.' },
    { id: 's-mehrzahl', fam: 'mehrzahl', cat: 'Sprache', type: 'choice',
      q: 'Bilde von jedem Wort die Mehrzahl. Welches passt dann nicht zu den anderen?',
      opts: ['Maus', 'Laus', 'Haus', 'Gans'], a: 2, r: [1, 1, 1, 1, 0],
      ex: 'Mäuse, Läuse, Gänse – alle mit Umlaut und -e. Nur Haus wird zu Häuser (-er). Die Gans reimt sich zwar nicht, passt aber.' },
    { id: 's-arzt', fam: 'anagramm-beruf', cat: 'Sprache', type: 'text',
      q: 'Diese Buchstaben ergeben einen <b>Beruf</b>:' + seq(['Z', 'R', 'A', 'T']),
      a: 'ARZT', r: [1, 1, 1, 1, 0], ex: 'Z-R-A-T wird zu ARZT. „ZART“ liegt näher, ist aber kein Beruf.' },
    { id: 's-licht', fam: 'bruecke', cat: 'Sprache', type: 'text',
      q: 'Welches Wort passt in die Lücke – es bildet mit beiden Nachbarn ein Wort?' + seq(['KERZEN', '___', 'JAHR']),
      a: 'LICHT', r: [1, 2, 0, 0, 0], ex: 'Kerzenlicht und Lichtjahr.' },
    { id: 's-silbenraetsel', fam: 'silbenraetsel', cat: 'Sprache', type: 'text',
      q: 'Aus diesen Silben lassen sich drei Tiere bilden. Welche Silbe bleibt übrig?' + seq(['MEL', 'PIN', 'DO', 'BRA', 'KA', 'IN', 'ZE', 'GU']),
      a: 'DO', r: [2, 1, 0, 2, 0], ex: 'KA-MEL, ZE-BRA und PIN-GU-IN – übrig bleibt DO.' },
    { id: 's-stehgreif', fam: 'rechtschreibung', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort ist <b>falsch</b> geschrieben?',
      opts: ['Rhythmus', 'Stehgreif', 'Libelle', 'Reparatur'], a: 1, r: [1, 1, 2, 0, 0],
      ex: 'Richtig heißt es „aus dem Stegreif“ (vom Steigbügel), ohne h. Rhythmus, Libelle und Reparatur sind korrekt.' },
    { id: 's-finger', fam: 'initialen-finger', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['D', 'Z', 'M', 'R', '?']),
      a: 'K', r: [1, 3, 0, 0, 0], letters: true,
      ex: 'Die Finger einer Hand: Daumen, Zeigefinger, Mittelfinger, Ringfinger – und der kleine Finger.' },
    { id: 's-karten', fam: 'karten', cat: 'Sprache', type: 'text',
      q: 'Was kommt als Nächstes?' + seq(['7', '8', '9', '10', 'B', 'D', 'K', '?']),
      a: 'A', r: [1, 2, 1, 0, 0], letters: true,
      ex: 'Die Spielkarten der Reihe nach: … 10, Bube, Dame, König – und dann das Ass.' },
    { id: 's-und-zaehlen', fam: 'versteckt-zaehlen', cat: 'Sprache', type: 'number',
      q: 'Wie oft steckt die Buchstabenfolge <b>UND</b> in diesem Satz?<br><i>„Eine Stunde stand der Hund gesund und munter am runden Brunnen.“</i>',
      a: 5, r: [1, 1, 1, 2, 0],
      ex: 'St<b>und</b>e, H<b>und</b>, ges<b>und</b>, <b>und</b>, r<b>und</b>en – fünfmal. „munter“ und „Brunnen“ sind nur Beinahe-Treffer.' },
    { id: 's-13-hinten', fam: 'alphabet-position', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe steht im Alphabet an 13. Stelle – <b>von hinten</b> gezählt?',
      a: 'N', r: [1, 1, 1, 2, 0], letters: true,
      ex: 'Z, Y, X, W, V, U, T, S, R, Q, P, O, N. Von vorn ist M der 13., von hinten N.' },
    { id: 's-zickzack', fam: 'alphabet-zickzack', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['A', 'Z', 'B', 'Y', 'C', 'X', 'D', '?']),
      a: 'W', r: [1, 1, 0, 1, 0], letters: true,
      ex: 'Abwechselnd von vorn und von hinten durchs Alphabet: A, Z, B, Y, C, X, D, W.' },
    { id: 's-kein-e', fam: 'selbstbezug', cat: 'Sprache', type: 'number',
      q: 'Wie viele Wörter in dieser Frage enthalten kein E?',
      a: 1, r: [1, 2, 1, 1, 0],
      ex: 'Wie, viele, Wörter, dieser, Frage, enthalten, kein, E – alle mit E. Nur „in“ hat keins.' },
    { id: 's-biene', fam: 'ei-ie', cat: 'Sprache', type: 'text',
      q: 'Tausche „ei“ gegen „ie“: Aus einem Körperteil in der Mehrzahl wird ein Insekt. Welches?',
      a: 'BIENE', r: [1, 2, 0, 1, 0], ex: 'BEINE → BIENE.' },

    // ===== schwer =====
    { id: 's-mali', fam: 'versteckt-satz', cat: 'Sprache', type: 'text',
      q: 'In diesem Satz versteckt sich – <b>rückwärts</b> gelesen und über Wortgrenzen hinweg – ein Land.<br><i>„Bei Lampenlicht liest Oma.“</i>',
      a: 'MALI', r: [2, 3, 0, 2, 0], ex: 'Be<b>I LAM</b>penlicht: I-L-A-M rückwärts gelesen ergibt MALI.' },
    { id: 's-tonleiter', fam: 'tonleiter', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes (in der in Deutschland üblichen Bezeichnung)?' + seq(['C', 'D', 'E', 'F', 'G', 'A', '?']),
      a: 'H', r: [1, 2, 2, 0, 1], letters: true,
      ex: 'Die deutsche Tonleiter: C, D, E, F, G, A, H. Wer im Alphabet weiterzählt, landet beim falschen B.' },
    { id: 's-caesar', fam: 'caesar', cat: 'Sprache', type: 'text',
      q: 'Welches Tier verbirgt sich hinter diesem Code?' + seq(['I', 'V', 'O', 'E']),
      a: 'HUND', r: [2, 3, 0, 2, 0],
      ex: 'Jeder Buchstabe ist um eins im Alphabet verschoben: I→H, V→U, O→N, E→D.' },
    { id: 's-sterne', fam: 'anagramm-gruppe', cat: 'Sprache', type: 'choice',
      q: 'Drei dieser Wörter bestehen aus genau denselben Buchstaben. Welches nicht?',
      opts: ['SIRENE', 'SERIEN', 'RIESEN', 'STERNE'], a: 3, r: [2, 1, 1, 2, 0],
      ex: 'SIRENE, SERIEN und RIESEN bestehen alle aus E, E, I, N, R, S. STERNE hat ein T statt des I.' },
    { id: 's-schienbein', fam: 'anagramm-lang', cat: 'Sprache', type: 'text',
      q: 'Welcher Körperteil steckt in diesen Buchstaben?' + seq(['I', 'N', 'E', 'B', 'C', 'H', 'S', 'N', 'I', 'E']),
      a: 'SCHIENBEIN', r: [2, 2, 0, 2, 0], ex: 'Die zehn Buchstaben ergeben SCHIENBEIN.' },
    { id: 's-acht', fam: 'vorbuchstabe', cat: 'Sprache', type: 'text',
      q: 'Welches Wort wird mit <b>N</b>, <b>M</b>, <b>W</b> oder <b>Y</b> davor jeweils zu einem neuen Wort?',
      a: 'ACHT', r: [2, 2, 1, 1, 0],
      ex: 'Nacht, Macht, Wacht, Yacht. „Ein“ passt zu Nein, Mein und Wein – aber nicht zu Y.' },
    { id: 's-dekade', fam: 'buchstaben-sprechen', cat: 'Sprache', type: 'text',
      q: 'Welcher Zeitraum ist hier gemeint?' + seq(['D', 'K', 'D']),
      a: 'DEKADE', r: [1, 4, 0, 1, 0],
      ex: 'Laut buchstabiert: De – Ka – De = DEKADE, ein Zeitraum von zehn Jahren.' },
    { id: 's-schifffahrt', fam: 'rechtschreibung', cat: 'Sprache', type: 'number',
      q: 'Schreibe <b>Schiff</b> und <b>Fahrt</b> zu einem Wort zusammen (heutige Rechtschreibung). Wie oft steht darin der Buchstabe F?',
      a: 3, r: [1, 1, 2, 0, 1],
      ex: 'Schifffahrt – seit der Rechtschreibreform bleiben alle drei F stehen.' },
    { id: 's-alphabet-fehlend', fam: 'alphabet-fehlend', cat: 'Sprache', type: 'number',
      q: 'Wie viele Buchstaben des Alphabets (A bis Z) kommen im Wort <b>ALPHABET</b> <b>nicht</b> vor?',
      a: 19, r: [2, 1, 2, 2, 0],
      ex: 'ALPHABET hat 8 Buchstaben, aber nur 7 verschiedene (A, L, P, H, B, E, T) – das A kommt doppelt vor. 26 − 7 = 19.' },
    { id: 's-zahn', fam: 'zahlwort-wandel', cat: 'Sprache', type: 'number',
      q: 'Schreibe eine Zahl von null bis zwölf als Wort und ändere genau einen Buchstaben – es entsteht ein Körperteil. Welche Zahl ist es?',
      a: 10, r: [2, 2, 0, 1, 0], ex: 'ZEHN → ZAHN (oder ZEHE). Bei keiner anderen Zahl klappt das.' },
    { id: 's-acht-eins', fam: 'abc-reihenfolge', cat: 'Sprache', type: 'number',
      q: 'Bei genau zwei Zahlwörtern von EINS bis ZWÖLF stehen die Buchstaben in alphabetischer Reihenfolge. Wie viel ergeben diese beiden Zahlen zusammen?',
      a: 9, r: [3, 1, 0, 2, 0], ex: 'A-C-H-T und E-I-N-S sind alphabetisch geordnet: 8 + 1 = 9.' },
    { id: 's-wochentage-rueck', fam: 'rueckwaerts-kette', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['G', 'A', 'T', 'N', 'O', 'M', 'G', 'A', 'T', 'S', 'N', 'E', 'I', 'D', '?']),
      a: 'H', r: [2, 3, 0, 2, 0], letters: true,
      ex: 'Die Wochentage rückwärts geschrieben: GATNOM (Montag), GATSNEID (Dienstag), dann HCOWTTIM (Mittwoch).' },
    { id: 's-ohne-vokale', fam: 'zahlwort-rechnen', cat: 'Sprache', type: 'number',
      q: 'Welches Ergebnis ist gemeint?' + eq(['ZWLF − NN + VR = ?']),
      a: 7, r: [2, 3, 0, 2, 0], ex: 'Die Vokale fehlen: ZWÖLF − NEUN + VIER = 12 − 9 + 4 = 7.' },
    { id: 's-wurst', fam: 'abc-folge-im-wort', cat: 'Sprache', type: 'choice',
      q: 'In welchem Wort stehen drei Buchstaben nebeneinander, die auch im Alphabet direkt aufeinanderfolgen?',
      opts: ['Wurst', 'Brot', 'Käse', 'Milch'], a: 0, r: [2, 2, 0, 2, 0],
      ex: 'Wu<b>RST</b>: R, S, T folgen im Alphabet direkt aufeinander.' },
    { id: 's-satz-woerter', fam: 'satz-zaehlen', cat: 'Sprache', type: 'number',
      q: 'Wie viele Wörter hat dieser Satz?<br><i>„Dieser Satz hat genau fünf Wörter.“</i>',
      a: 6, r: [1, 1, 2, 1, 0], ex: 'Dieser – Satz – hat – genau – fünf – Wörter: sechs. Der Satz lügt.' },
    { id: 's-t-z', fam: 'alphabet-position', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe ist im Alphabet genauso weit von A entfernt wie T von Z?',
      a: 'G', r: [2, 1, 1, 2, 0], letters: true,
      ex: 'Von T bis Z sind es 6 Schritte (T→U→V→W→X→Y→Z). 6 Schritte nach A kommt G (A→B→C→D→E→F→G).' },
    { id: 's-frage-initialen', fam: 'selbstbezug', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['W', 'B', 'K', 'A', '?']),
      a: 'N', r: [1, 4, 1, 0, 0], letters: true,
      ex: 'Es sind die Anfangsbuchstaben der Frage selbst: <b>W</b>elcher <b>B</b>uchstabe <b>k</b>ommt <b>a</b>ls <b>N</b>ächstes?' },
    { id: 's-lachs', fam: 'anagramm-analogie', cat: 'Sprache', type: 'text',
      q: 'TORTE verhält sich zu OTTER wie SCHAL zu …?',
      a: 'LACHS', r: [2, 3, 0, 2, 0],
      ex: 'OTTER besteht aus den Buchstaben von TORTE – und LACHS aus den Buchstaben von SCHAL. Jeweils wird aus einem Ding ein Tier.' },
    { id: 's-hering', fam: 'wort-im-wort', cat: 'Sprache', type: 'text',
      q: 'Welcher Fisch steckt in dem Schmuckstück, das Verheiratete am Finger tragen?',
      a: 'HERING', r: [2, 2, 0, 1, 0], ex: 'Im E<b>HERING</b> steckt der HERING.' },
    { id: 's-staubecken', fam: 'segmentierung', cat: 'Sprache', type: 'text',
      q: 'Welches Wort bezeichnet sowohl einen künstlichen See hinter einer Staumauer als auch schmutzige Zimmerecken?',
      a: 'STAUBECKEN', r: [2, 3, 0, 1, 0],
      ex: 'Stau-Becken oder Staub-Ecken – je nachdem, wo man das Wort trennt.' },
    { id: 's-achtzehn', fam: 'anagramm-zahl', cat: 'Sprache', type: 'number',
      q: 'Diese Buchstaben ergeben – richtig sortiert – ein Zahlwort. Welche Zahl ist es?' + seq(['H', 'Z', 'N', 'C', 'T', 'A', 'E', 'H']),
      a: 18, r: [2, 2, 0, 2, 0], ex: 'H-Z-N-C-T-A-E-H wird zu ACHTZEHN – also 18.' },

    // ===== sehr schwer =====
    { id: 's-buchstabennamen', fam: 'buchstabennamen', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['F', 'L', 'M', 'N', 'R', '?']),
      a: 'S', r: [2, 4, 1, 1, 0], letters: true,
      ex: 'Buchstaben, deren Name mit „E“ beginnt: Ef, El, Em, En, Er – und Es.' },
    { id: 's-drehung', fam: 'drehsymmetrie', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['H', 'I', 'N', 'O', 'S', 'X', '?']),
      a: 'Z', r: [2, 4, 2, 1, 0], letters: true,
      ex: 'Großbuchstaben, die auf dem Kopf stehend gleich aussehen: H, I, N, O, S, X – und Z. Das Y sieht kopfüber anders aus.' },
    { id: 's-zahlen-summe', fam: 'zahlwort-rechnen', cat: 'Sprache', type: 'number',
      q: 'Wie viel ergibt diese Rechnung?' + eq(['KLAVIER + HELFER + NACHT + LEINSAMEN = ?']),
      a: 24, r: [2, 4, 1, 2, 0],
      ex: 'In jedem Wort steckt eine Zahl: KLA<b>VIER</b>, H<b>ELF</b>ER, N<b>ACHT</b>, L<b>EINS</b>AMEN. 4 + 11 + 8 + 1 = 24.' },
    { id: 's-monate-zweiter', fam: 'monate-zweiter', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['A', 'E', 'Ä', 'P', 'A', 'U', 'U', 'U', 'E', '?']),
      a: 'K', r: [2, 4, 0, 2, 0], letters: true,
      ex: 'Jeweils der zweite Buchstabe der Monate: jAnuar, fEbruar, mÄrz, aPril, mAi, jUni, jUli, aUgust, sEptember, oKtober.' },
    { id: 's-primzahlen', fam: 'primzahlen', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['B', 'C', 'E', 'G', 'K', 'M', '?']),
      a: 'Q', r: [2, 3, 0, 2, 1], letters: true,
      ex: 'Die Stellen im Alphabet sind Primzahlen: 2, 3, 5, 7, 11, 13 – als Nächstes 17 = Q.' },
    { id: 's-tastatur', fam: 'tastatur-verrutscht', cat: 'Sprache', type: 'text',
      q: 'Beim Tippen lagen beide Hände eine Taste zu weit rechts. Heraus kam <b>LSZUR</b>. Welches Tier war gemeint?',
      a: 'KATZE', r: [2, 3, 0, 2, 1],
      ex: 'Auf der deutschen Tastatur liegt rechts neben K das L, neben A das S, neben T das Z, neben Z das U, neben E das R.' },
    { id: 's-zahlwort-ende', fam: 'zahlwort-buchstaben', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['S', 'I', 'I', 'R', 'F', 'S', 'N', 'T', '?']),
      a: 'N', r: [2, 4, 0, 2, 0], letters: true,
      ex: 'Jeweils der letzte Buchstabe der Zahlwörter: einS, zweI, dreI, vieR, fünF, sechS, siebeN, achT – und neuN.' },
    { id: 's-spiegel-uhu', fam: 'spiegelwort', cat: 'Sprache', type: 'text',
      q: 'Welches Tier sieht in Großbuchstaben geschrieben in Spiegelschrift genauso aus wie normal?',
      a: 'UHU', r: [2, 4, 0, 1, 0],
      ex: 'U und H sind links-rechts-symmetrisch, und UHU ist vorwärts wie rückwärts gleich – im Spiegel ändert sich nichts.' },
    { id: 's-loecher-folge', fam: 'loecher', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['A', 'B', 'D', 'O', 'P', 'Q', '?']),
      a: 'R', r: [1, 4, 1, 1, 0], letters: true,
      ex: 'Großbuchstaben mit einer geschlossenen Fläche („Loch“): A, B, D, O, P, Q – und R.' },
  ]);
})();

// ---- wortspiel.js ----
(function () {
  const { seq, eq } = (typeof window !== 'undefined' ? window : globalThis).QSVG;
  QUIZ_ADD([
    // ===== leicht / mittel =====
    { id: 'w-schloss', fam: 'w-teekessel-gebaeude', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort bezeichnet sowohl ein Gebäude, in dem Könige wohnen, als auch etwas, das an einer Tür sitzt?',
      opts: ['Schloss', 'Burg', 'Riegel', 'Palast'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Das Schloss ist der Königssitz – und das Türschloss, in das der Schlüssel kommt.' },
    { id: 'w-meer', fam: 'w-gleichklang', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort klingt ausgesprochen genauso wie „mehr“?',
      opts: ['Meer', 'Mehl', 'Moor', 'Herr'], a: 0, r: [1, 1, 0, 0, 0],
      ex: '„Meer“ und „mehr“ werden gleich ausgesprochen, aber verschieden geschrieben.' },
    { id: 'w-palme', fam: 'w-anagramm-drilling', cat: 'Sprache', type: 'text',
      q: 'Aus den Buchstaben von <b>LAMPE</b> kann man zwei andere Wörter legen: Eines regelt den Verkehr, das andere wächst am Strand. Welches wächst am Strand?',
      a: 'PALME', r: [1, 1, 0, 1, 0],
      ex: 'LAMPE, AMPEL und PALME bestehen aus genau denselben fünf Buchstaben.' },
    { id: 'w-leiter', fam: 'w-artikel-bedeutung', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort bedeutet mit „der“ davor etwas ganz anderes als mit „die“?',
      opts: ['Leiter', 'Gabel', 'Lampe', 'Tasche'], a: 0, r: [1, 2, 0, 0, 0],
      ex: 'Die Leiter stellt man an die Wand, der Leiter ist der Chef einer Abteilung.' },
    { id: 'w-auge-genus', fam: 'w-genus-falle', cat: 'Sprache', type: 'choice',
      q: 'Alle vier Wörter enden auf -e. Welches davon ist <b>nicht</b> weiblich?',
      opts: ['Rose', 'Tasche', 'Auge', 'Lampe'], a: 2, r: [1, 1, 1, 0, 0],
      ex: 'Es heißt die Rose, die Tasche, die Lampe – aber das Auge.' },
    { id: 'w-leute', fam: 'w-nur-mehrzahl', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort gibt es nur in der Mehrzahl?',
      opts: ['Leute', 'Menschen', 'Freunde', 'Gäste'], a: 0, r: [1, 1, 1, 0, 0],
      ex: 'Mensch, Freund und Gast haben eine Einzahl – „ein Leut“ gibt es nicht.' },
    { id: 'w-material', fam: 'w-fremdwort-mehrzahl', cat: 'Sprache', type: 'choice',
      q: 'Was ist die richtige Mehrzahl von „das Material“?',
      opts: ['Materials', 'Materialen', 'Materialien', 'Materiale'], a: 2, r: [1, 0, 1, 0, 1],
      ex: 'Laut Duden heißt es die Materialien.' },
    { id: 'w-seit', fam: 'w-seit-seid', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort gehört in die Lücke? „Wir warten schon ___ zwei Stunden.“',
      opts: ['seit', 'seid'], a: 0, r: [1, 0, 2, 0, 0], noShuffle: true,
      ex: '„seit“ mit t sagt, seit wann oder wie lange etwas schon dauert. „seid“ mit d kommt von „sein“ (ihr seid).' },
    { id: 'w-oman', fam: 'w-ausruf-land', cat: 'Sprache', type: 'text',
      q: 'Jemand ruft genervt: „Oh, Mann!“ Sprich es laut aus. Welches Land hörst du?',
      a: 'OMAN', r: [1, 2, 0, 0, 1],
      ex: '„Oh, Mann“ klingt fast genau wie „Oman“, ein Land auf der Arabischen Halbinsel.' },
    { id: 'w-tier-im-tier', fam: 'w-tier-im-tiernamen', cat: 'Sprache', type: 'choice',
      q: 'In drei dieser Tiernamen steckt ein anderes Tier. In welchem nicht?',
      opts: ['Ameise', 'Schwalbe', 'Truthahn', 'Zebra'], a: 3, r: [2, 1, 1, 1, 0],
      ex: 'A-MEISE, SCH-WAL-BE, TRUT-HAHN – nur im ZEBRA steckt kein weiteres Tier.' },
    { id: 'w-schmetterling', fam: 'w-ohne-vokale', cat: 'Sprache', type: 'text',
      q: 'Bei diesem Tier wurden alle Vokale gestrichen. Welches Tier ist es?' + seq(['S', 'C', 'H', 'M', 'T', 'T', 'R', 'L', 'N', 'G']),
      a: 'SCHMETTERLING', accept: ['SCHMETTERLINGE'], r: [1, 1, 0, 1, 0],
      ex: 'S-c-h-m-E-t-t-E-r-l-I-n-g: Mit E, E und I wird daraus SCHMETTERLING.' },
    { id: 'w-bank-plural', fam: 'w-zwei-mehrzahlen', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort hat zwei verschiedene Mehrzahlformen – je nachdem, was gemeint ist?',
      opts: ['Bank', 'Tisch', 'Stuhl', 'Schrank'], a: 0, r: [1, 2, 0, 0, 0],
      ex: 'Zum Sitzen sind es Bänke, beim Geld sind es Banken. Tische, Stühle und Schränke haben nur eine Mehrzahl.' },
    { id: 'w-nagel', fam: 'w-redewendung-woertlich', cat: 'Sprache', type: 'choice',
      q: 'Welche Redewendung beschreibt – wörtlich genommen – einen gelungenen Hammerschlag?',
      opts: ['Den Nagel auf den Kopf treffen', 'Ein Brett vor dem Kopf haben', 'Auf dem Holzweg sein', 'Holz vor der Hütte haben'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Wer den Nagel auf den Kopf trifft, hat wörtlich genau richtig gehämmert – im übertragenen Sinn genau das Richtige gesagt.' },
    { id: 'w-loewenzahn', fam: 'w-scharade', cat: 'Sprache', type: 'text',
      q: 'Das Erste brüllt, das Zweite beißt – das Ganze blüht gelb auf der Wiese. Was ist es?',
      a: 'LÖWENZAHN', r: [2, 1, 0, 0, 0],
      ex: 'Der Löwe brüllt, der Zahn beißt: zusammen ergibt das den Löwenzahn.' },
    { id: 'w-geier', fam: 'w-anfang-streichen', cat: 'Sprache', type: 'text',
      q: 'Streiche bei einem Greifvogel den ersten Buchstaben – übrig bleibt etwas, das viele zum Frühstück essen. Welcher Vogel ist es?',
      a: 'GEIER', r: [2, 1, 0, 1, 0],
      ex: 'GEIER ohne G ergibt EIER.' },

    // ===== schwer =====
    { id: 'w-q-kuh', fam: 'w-buchstabe-klingt', cat: 'Sprache', type: 'text', letters: true,
      q: 'Welcher Buchstabe des Alphabets klingt, wenn man ihn laut ausspricht, wie ein Tier?',
      a: 'Q', r: [1, 3, 1, 0, 0],
      ex: 'Das Q spricht man „Ku“ – genau wie die Kuh.' },
    { id: 'w-saite', fam: 'w-homophon-paar', cat: 'Sprache', type: 'choice',
      q: 'Bei welchem Paar klingen beide Wörter <b>genau</b> gleich?',
      opts: ['Wal – Wall', 'Saite – Seite', 'Hüte – Hütte', 'Bett – Beet'], a: 1, r: [2, 2, 2, 0, 0],
      ex: 'Saite und Seite spricht man identisch. Bei Wal/Wall, Hüte/Hütte und Bett/Beet ist der Vokal einmal lang und einmal kurz.' },
    { id: 'w-endgueltig', fam: 'w-duden-end-ent', cat: 'Sprache', type: 'choice',
      q: 'Welche Schreibweise ist richtig?',
      opts: ['entgültig', 'endgültig', 'entgültich', 'endgültich'], a: 1, r: [1, 1, 2, 0, 1],
      ex: 'Richtig ist endgültig – es kommt von „Ende“. Die Vorsilbe „ent-“ (wie in entdecken) passt hier nicht.' },
    { id: 'w-widerspruch', fam: 'w-wider-wieder', cat: 'Sprache', type: 'text',
      q: 'Ein Wort in diesem Satz ist falsch geschrieben. Schreibe es richtig: „Die Zeugen machten wiedersprüchliche Angaben.“',
      a: 'WIDERSPRÜCHLICHE', accept: ['WIDERSPRÜCHLICH'], r: [2, 1, 2, 0, 1],
      ex: '„wider“ (ohne e) heißt „gegen“ – es geht um Aussagen, die sich widersprechen, nicht um eine Wiederholung.' },
    { id: 'w-muttern', fam: 'w-zwei-mehrzahlen', cat: 'Sprache', type: 'text',
      q: 'Bilde die Mehrzahl von „Mutter“ – gemeint ist aber das Gegenstück zur Schraube.',
      a: 'MUTTERN', accept: ['SCHRAUBENMUTTERN'], r: [1, 2, 2, 0, 0],
      ex: 'Frauen mit Kindern sind in der Mehrzahl Mütter – das Gegenstück zur Schraube heißt in der Mehrzahl Muttern (ohne Umlaut).' },
    { id: 'w-band', fam: 'w-artikel-bedeutung', cat: 'Sprache', type: 'text',
      q: 'Mit „der“ ist es ein Buch einer Reihe, mit „die“ eine Musikgruppe, mit „das“ ein schmaler Stoffstreifen. Welches Wort ist es?',
      a: 'BAND', r: [2, 2, 1, 0, 0],
      ex: 'Der Band (Buch), die Band (Musikgruppe), das Band (Stoffstreifen).' },
    { id: 'w-bremse', fam: 'w-insekt-im-auto', cat: 'Sprache', type: 'text',
      q: 'Welches Insekt ist in jedes Auto eingebaut?',
      a: 'BREMSE', r: [2, 2, 1, 0, 0],
      ex: 'Die Bremse ist eine stechende Fliege – und das, womit man das Auto anhält.' },
    { id: 'w-fluegel', fam: 'w-teekessel-drei', cat: 'Sprache', type: 'text',
      q: 'Welches Wort bezeichnet ein Musikinstrument, einen Teil eines Vogels und den Seitenteil eines großen Gebäudes?',
      a: 'FLÜGEL', r: [2, 2, 0, 1, 0],
      ex: 'Der Konzertflügel, der Vogelflügel und der Gebäudeflügel (z. B. Ostflügel eines Schlosses).' },
    { id: 'w-montage', fam: 'w-aussprache-wechsel', cat: 'Sprache', type: 'text',
      q: 'Welches Wort bedeutet je nach Aussprache „mehrere bestimmte Wochentage“ oder „der Zusammenbau von etwas“?',
      a: 'MONTAGE', r: [2, 2, 1, 0, 0],
      ex: 'Mon-ta-ge sind die Wochentage, die Mon-ta-sche ist der Aufbau, etwa einer Küche.' },
    { id: 'w-gastanker', fam: 'w-kompositum-zweideutig', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort lässt sich an zwei verschiedenen Stellen in zwei sinnvolle Wörter trennen?',
      opts: ['Gastanker', 'Haustür', 'Regenschirm', 'Bahnhof'], a: 0, r: [2, 2, 1, 1, 0],
      ex: 'GAS-TANKER (ein Schiff) oder GAST-ANKER. Die anderen Wörter lassen nur eine Trennung zu.' },
    { id: 'w-rueckstand', fam: 'w-rebus-text', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort ist gemeint?' + seq(['D', 'N', 'A', 'T', 'S']),
      opts: ['Abstand', 'Rückstand', 'Bestand', 'Zustand'], a: 1, r: [2, 2, 1, 0, 0],
      ex: 'Dort steht STAND – rückwärts geschrieben. Also: Rückstand.' },
    { id: 'w-telestichon', fam: 'w-satz-buchstaben-versteck', cat: 'Sprache', type: 'text',
      q: 'Welches Tier versteckt sich in diesem Satz? „Heute kommen nicht alle.“',
      a: 'ENTE', r: [2, 4, 1, 0, 0],
      ex: 'Die <b>letzten</b> Buchstaben der vier Wörter ergeben E-N-T-E. Zusammenhängend und in den Anfangsbuchstaben steckt kein Tier.' },
    { id: 'w-unentwegt', fam: 'w-un-ohne-gegenstueck', cat: 'Sprache', type: 'choice',
      q: 'Bei welchem Wort ergibt sich ohne die Vorsilbe „un“ kein echtes Wort?',
      opts: ['unentwegt', 'unfreundlich', 'unklar', 'unsicher'], a: 0, r: [2, 2, 1, 0, 1],
      ex: 'Freundlich, klar und sicher gibt es – „entwegt“ gibt es nicht.' },
    { id: 'w-farbe-tausch', fam: 'w-ein-buchstabe-farbe', cat: 'Sprache', type: 'choice',
      q: 'Ändere in jedem Wort genau einen Buchstaben, sodass eine Farbe entsteht. Bei welchem Wort klappt das <b>nicht</b>?',
      opts: ['GELD', 'ROST', 'BRAUT', 'BROT'], a: 3, r: [2, 2, 2, 1, 0],
      ex: 'GELD → GELB, ROST → ROSA, BRAUT → BRAUN. Aus BROT wird ROT nur durch Streichen, nicht durch Ändern.' },
    { id: 'w-gotteshaus', fam: 'w-wortkette-kreis', cat: 'Sprache', type: 'text',
      q: 'Jedes Wort beginnt mit dem Ende des vorigen, und die Kette schließt sich wieder bei HAUSTÜR. Welches Wort fehlt?' + seq(['HAUSTÜR', 'TÜRSCHLOSS', 'SCHLOSSHERR', 'HERRGOTT', '?']),
      a: 'GOTTESHAUS', r: [2, 2, 1, 1, 0],
      ex: 'Das fehlende Wort muss mit GOTT beginnen und mit HAUS enden: Gotteshaus – danach geht es mit Haustür weiter.' },
    { id: 'w-abdecken', fam: 'w-wort-eigenes-gegenteil', cat: 'Sprache', type: 'text',
      q: 'Welches Verb bedeutet beim Gemüsebeet „etwas zudecken“ – beim Esstisch nach dem Essen aber genau das Gegenteil, nämlich „alles wegräumen“?',
      a: 'ABDECKEN', r: [2, 3, 1, 0, 1],
      ex: 'Man deckt ein Beet mit Folie ab (zudecken) – und man deckt den Tisch ab (Geschirr wegräumen, freimachen).' },
    { id: 'w-hai', fam: 'w-tier-rueckwaerts-laut', cat: 'Sprache', type: 'text',
      q: 'Welches Tier ergibt rückwärts gelesen das Geräusch, das ein Esel macht?',
      a: 'HAI', r: [2, 2, 1, 0, 0],
      ex: 'HAI rückwärts ist IAH.' },
    { id: 'w-gefangene', fam: 'w-grossschreibung-sinn', cat: 'Sprache', type: 'text',
      q: 'In „der gefangene floh“ ist alles kleingeschrieben. Welches Wort musst du großschreiben, damit ein Mensch entkommen ist?',
      a: 'GEFANGENE', r: [2, 2, 2, 0, 0],
      ex: '„Der Gefangene floh“ – ein Häftling ist entwischt. Schreibt man dagegen „Floh“ groß, ist ein gefangenes Insekt gemeint.' },
    { id: 'w-alle-vokale', fam: 'w-fuenf-vokale', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort enthält alle fünf Vokale A, E, I, O und U?',
      opts: ['Daumenkino', 'Bauernopfer', 'Zitronenkuchen', 'Geburtstagskind'], a: 0, r: [1, 1, 1, 2, 0],
      ex: 'DAUMENKINO hat A, U, E, I und O. Bauernopfer fehlt das I, Zitronenkuchen das A, Geburtstagskind das O.' },
    { id: 'w-satz-tier', fam: 'w-versteckt-ueber-grenzen', cat: 'Sprache', type: 'choice',
      q: 'In drei Sätzen versteckt sich – über Wortgrenzen hinweg – ein Tier. In welchem nicht?',
      opts: ['Am Abend spielt Ella mal Klavier.', 'Der Bäcker ehrt seine Kunden.', 'Ich traf Ruth und ihre Schwester.', 'Mein Onkel wohnt am Rand der Stadt.'], a: 3, r: [2, 2, 1, 1, 0],
      ex: 'Ella mal → LAMA, Bäcker ehrt → REH, Ruth und → HUND. Im Satz über den Onkel steckt kein Tier.' },
    { id: 'w-umfahren', fam: 'w-betonung', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort kann je nach Betonung zwei gegensätzliche Dinge bedeuten?',
      opts: ['umfahren', 'abfahren', 'losfahren', 'mitfahren'], a: 0, r: [2, 3, 1, 0, 1],
      ex: 'UMfahren heißt umstoßen, umFAHREN heißt drumherum fahren, um es gerade nicht zu treffen.' },
    { id: 'w-darm', fam: 'w-koerperteil-davor', cat: 'Sprache', type: 'text',
      q: 'Setze vor einen Körperteil einen einzigen Buchstaben – und es entsteht ein anderer Körperteil. Welcher Körperteil entsteht?',
      a: 'DARM', r: [2, 2, 0, 1, 0],
      ex: 'Aus ARM wird mit einem D davor der DARM.' },
    { id: 'w-krapfen', fam: 'w-nachbarn-tauschen', cat: 'Sprache', type: 'text',
      q: 'Vertausche in einem Süßwasserfisch zwei nebeneinanderstehende Buchstaben – und es entsteht ein Gebäck. Welches Gebäck?',
      a: 'KRAPFEN', r: [2, 2, 1, 1, 0],
      ex: 'KARPFEN: A und R tauschen die Plätze – heraus kommt KRAPFEN.' },
    { id: 'w-aufheben', fam: 'w-verb-drei-bedeutungen', cat: 'Sprache', type: 'text',
      q: 'Welches Verb kann bedeuten: etwas vom Boden nehmen, etwas aufbewahren – und ein Verbot abschaffen?',
      a: 'AUFHEBEN', r: [2, 2, 1, 0, 1],
      ex: 'Man hebt einen Stift auf, man hebt Briefe auf, und man hebt ein Gesetz auf.' },
    { id: 'w-lid', fam: 'w-homophon-koerper', cat: 'Sprache', type: 'text',
      q: 'Welcher Körperteil klingt ausgesprochen genauso wie etwas, das man singt?',
      a: 'LID', accept: ['AUGENLID'], r: [2, 2, 2, 0, 0],
      ex: 'Das Lid (am Auge) klingt genau wie das Lied – geschrieben wird es ohne e.' },
    { id: 'w-doppeldecker', fam: 'w-rebus-text', cat: 'Sprache', type: 'text',
      q: 'Welches Wort ist gemeint?' + seq(['DECKER', 'DECKER']),
      a: 'DOPPELDECKER', accept: ['ZWEIDECKER'], r: [2, 3, 0, 0, 0],
      ex: 'Zweimal DECKER – also doppelt: ein Doppeldecker, wie der Bus oder das Flugzeug.' },

    // ===== sehr schwer =====
    { id: 'w-modern', fam: 'w-betonung', cat: 'Sprache', type: 'text',
      q: 'Welches Wort bedeutet je nach Betonung „zeitgemäß“ oder „langsam verfaulen“?',
      a: 'MODERN', r: [2, 3, 1, 0, 1],
      ex: 'moDERN heißt zeitgemäß, MOdern heißt vermodern, also verrotten.' },
    { id: 'w-lehrer', fam: 'w-steigerung-klang', cat: 'Sprache', type: 'text',
      q: 'Welcher Beruf klingt ausgesprochen genauso wie die Steigerung von „leer“?',
      a: 'LEHRER', r: [2, 3, 1, 0, 0],
      ex: 'leer – leerer – am leersten. „Leerer“ klingt genau wie „Lehrer“.' },
    { id: 'w-schweinehund', fam: 'w-zwei-tiere-wort', cat: 'Sprache', type: 'text',
      q: 'Welches Wort setzt sich aus zwei Tieren zusammen und bezeichnet die Bequemlichkeit, die man überwinden muss, bevor man zum Sport geht?',
      a: 'SCHWEINEHUND', contains: ['SCHWEINEHUND'], r: [2, 2, 0, 0, 0],
      ex: 'Schwein + Hund: der „innere Schweinehund“.' },
    { id: 'w-ton', fam: 'w-bruecke-rueckwaerts', cat: 'Sprache', type: 'text',
      q: 'Gesucht ist ein Wort, das vor LEITER passt – und rückwärts gelesen vor AUSGANG.',
      a: 'TON', r: [3, 2, 1, 1, 0],
      ex: 'TONLEITER – und TON rückwärts ist NOT: NOTAUSGANG.' },
    { id: 'w-blumentopferde', fam: 'w-kompositum-zweideutig', cat: 'Sprache', type: 'text',
      q: 'Lies dieses Wort an einer anderen Stelle getrennt. Welche Tiere stecken darin?' + seq(['BLUMENTOPFERDE']),
      a: 'PFERDE', accept: ['PFERD'], r: [2, 2, 0, 0, 0],
      ex: 'Statt BLUMENTOPF-ERDE liest man BLUMENTO-PFERDE.' },
    { id: 'w-untiefe', fam: 'w-wort-eigenes-gegenteil', cat: 'Sprache', type: 'text',
      q: 'Welches Wort kann laut Duden sowohl eine besonders flache als auch eine besonders tiefe Stelle im Wasser bezeichnen?',
      a: 'UNTIEFE', accept: ['UNTIEFEN'], r: [2, 3, 2, 0, 1],
      ex: 'Untiefe heißt einerseits seichte Stelle, andererseits auch große Tiefe (das „un-“ verstärkt dann wie in „Unmenge“).' },
    { id: 'w-status', fam: 'w-fremdwort-mehrzahl', cat: 'Sprache', type: 'text',
      q: 'Was ist laut Duden die Mehrzahl von „der Status“?',
      a: 'STATUS', r: [1, 3, 3, 0, 1],
      ex: 'Die Mehrzahl lautet ebenfalls „die Status“ (mit lang gesprochenem u). „Stati“ und „Statusse“ sind falsch.' },
    { id: 'w-akrostichon', fam: 'w-satz-buchstaben-versteck', cat: 'Sprache', type: 'text',
      q: 'Welches Tier versteckt sich in diesem Satz? „Katrin aß täglich zwei Eier.“',
      a: 'KATZE', r: [2, 3, 2, 0, 0],
      ex: 'Die Anfangsbuchstaben der fünf Wörter ergeben K-A-T-Z-E. Zusammenhängend steckt kein Tier im Satz.' },
    { id: 'w-praktikum', fam: 'w-mehrzahl-kuerzer', cat: 'Sprache', type: 'choice',
      q: 'Bei welchem Wort hat die Mehrzahl <b>weniger</b> Buchstaben als die Einzahl?',
      opts: ['Praktikum', 'Thema', 'Firma', 'Datum'], a: 0, r: [2, 2, 1, 1, 1],
      ex: 'Praktikum → Praktika (ein Buchstabe weniger). Thema → Themen und Firma → Firmen werden länger, Datum → Daten bleibt gleich lang.' },
  ]);
})();

// ---- zahlen.js ----
(function () {
  const { seq, eq, svg } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // 7-Segment-Anzeige: leuchtende Segmente je Ziffer (nur die hier gebrauchten Ziffern).
  function seg7(digits) {
    const on = { 1: 'bc', 2: 'abged', 3: 'abgcd', 4: 'fgbc' };
    const w = 40, h = 72, t = 8, gap = 22;
    let s = '';
    [...digits].forEach((d, i) => {
      const x = 14 + i * (w + gap), y = 14, half = h / 2, l = half - 1.5 * t;
      const R = {
        a: [x + t, y, w - 2 * t, t], b: [x + w - t, y + t, t, l], c: [x + w - t, y + half + t / 2, t, l],
        d: [x + t, y + h - t, w - 2 * t, t], e: [x, y + half + t / 2, t, l], f: [x, y + t, t, l],
        g: [x + t, y + half - t / 2, w - 2 * t, t],
      };
      for (const k of on[d]) { const [rx, ry, rw, rh] = R[k]; s += `<rect class="shape c2" x="${rx}" y="${ry}" width="${rw}" height="${rh}" rx="2"/>`; }
    });
    return svg(`0 0 ${28 + digits.length * (w + gap) - gap} 100`, s);
  }

  // Vier Dreiecke: Zahlen an den Ecken, Ergebnis in der Mitte.
  function cornerTriangles(rows) {
    let s = '';
    rows.forEach(([bl, br, top, mid], i) => {
      const cx = i % 2 ? 210 : 70, y = i < 2 ? 0 : 132;
      s += `<polygon class="ln" fill="none" points="${cx},${y + 24} ${cx - 52},${y + 104} ${cx + 52},${y + 104}"/>`;
      s += `<text class="tx" x="${cx}" y="${y + 18}" text-anchor="middle" font-size="17" font-weight="700">${top}</text>`;
      s += `<text class="tx" x="${cx - 60}" y="${y + 122}" text-anchor="middle" font-size="17" font-weight="700">${bl}</text>`;
      s += `<text class="tx" x="${cx + 60}" y="${y + 122}" text-anchor="middle" font-size="17" font-weight="700">${br}</text>`;
      s += `<text class="tx" x="${cx}" y="${y + 88}" text-anchor="middle" font-size="20" font-weight="800">${mid}</text>`;
    });
    return svg('0 0 280 262', s);
  }

  // Zahlenmauer mit drei Steinen unten.
  function wall(top, bottom) {
    let s = '';
    const brick = (x, y, txt) => {
      s += `<rect class="cell" x="${x}" y="${y}" width="64" height="40" rx="4"/>`;
      if (txt !== '') s += `<text class="tx" x="${x + 32}" y="${y + 27}" text-anchor="middle" font-size="19" font-weight="700">${txt}</text>`;
    };
    brick(68, 6, top);
    brick(36, 50, ''); brick(100, 50, '');
    bottom.forEach((b, i) => brick(4 + i * 64, 94, b));
    return svg('0 0 200 140', s);
  }

  QUIZ_ADD([
    // ===== leicht =====
    { id: 'z-segment-summe', fam: 'segment-total', cat: 'Zahlen', type: 'number',
      q: 'Auf dieser Digitalanzeige leuchten einzelne Striche. Wie viele Striche leuchten insgesamt?', svg: seg7('1234'),
      a: 16, r: [1, 0, 0, 2, 0], ex: 'Die 1 hat 2 Striche, die 2 und die 3 je 5, die 4 hat 4: 2 + 5 + 5 + 4 = 16.' },
    { id: 'z-reissverschluss', fam: 'interleave-easy', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([1, 10, 2, 20, 3, 30, '?']),
      a: 4, r: [1, 1, 0, 0, 0], ex: 'Zwei Reihen im Wechsel: 1, 2, 3, … und 10, 20, 30, … Als Nächstes ist die erste Reihe dran: 4.' },
    { id: 'z-broetchen', fam: 'change-cents', cat: 'Zahlen', type: 'number',
      q: 'Du kaufst 3 Brötchen zu je 40 Cent und zahlst mit 2 €. Wie viele Cent bekommst du zurück?',
      a: 80, r: [1, 0, 0, 1, 0], ex: '3 × 40 Cent = 1,20 €. 2,00 € − 1,20 € = 80 Cent.' },
    { id: 'z-mia-paul', fam: 'age-chain', cat: 'Zahlen', type: 'number',
      q: 'Mia ist 3 Jahre älter als Paul. Paul ist 7 Jahre alt. Wie alt ist Mia in 2 Jahren?',
      a: 12, r: [2, 0, 0, 1, 0], ex: 'Mia ist heute 7 + 3 = 10, in 2 Jahren also 12.' },
    { id: 'z-zwanziger', fam: 'coins-in-euro', cat: 'Zahlen', type: 'number',
      q: 'Wie viele 20-Cent-Münzen brauchst du für genau 3 €?',
      a: 15, r: [1, 0, 0, 1, 0], ex: '5 Münzen sind 1 €, also 3 × 5 = 15 Münzen.' },
    { id: 'z-vierer-reihe', fam: 'intruder-4', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl passt nicht in die Reihe?' + seq([4, 8, 12, 15, 16, 20]),
      a: 15, r: [1, 1, 0, 0, 0], ex: 'Die Reihe ist die Viererreihe: 4, 8, 12, 16, 20. Die 15 gehört nicht dazu.' },
    { id: 'z-dutzend', fam: 'dozen', cat: 'Zahlen', type: 'number',
      q: 'Du kaufst zwei Dutzend Eier. Auf dem Heimweg gehen 5 kaputt. Wie viele Eier sind noch heil?',
      a: 19, r: [2, 0, 0, 1, 0], ex: 'Ein Dutzend sind 12 Stück, zwei Dutzend also 24. 24 − 5 = 19.' },
    { id: 'z-beine', fam: 'legs', cat: 'Zahlen', type: 'number',
      q: 'Auf einer Wiese stehen 3 Hühner und 2 Kühe. Wie viele Beine haben sie zusammen?',
      a: 14, r: [1, 0, 0, 1, 0], ex: '3 × 2 Hühnerbeine + 2 × 4 Kuhbeine = 6 + 8 = 14.' },
    { id: 'z-waage', fam: 'balance', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl gehört an die Stelle des Fragezeichens?' + eq(['5 + ? = 3 × 4']),
      a: 7, r: [1, 0, 0, 1, 0], ex: '3 × 4 = 12, und 5 + 7 = 12.' },
    { id: 'z-gerade-20', fam: 'count-even', cat: 'Zahlen', type: 'number',
      q: 'Wie viele gerade Zahlen gibt es von 1 bis 20 (beide mitgezählt)?',
      a: 10, r: [1, 0, 0, 1, 0], ex: '2, 4, 6, … 20 – jede zweite Zahl, also 10.' },
    { id: 'z-wuerfel-augen', fam: 'die-total', cat: 'Zahlen', type: 'number',
      q: 'Wie viele Augen hat ein normaler Spielwürfel auf allen sechs Seiten zusammen?',
      a: 21, r: [1, 0, 0, 1, 0], ex: '1 + 2 + 3 + 4 + 5 + 6 = 21.' },
    { id: 'z-taschengeld', fam: 'halving-money', cat: 'Zahlen', type: 'number',
      q: 'Lena hat 80 €. Sie gibt die Hälfte aus, dann die Hälfte vom Rest und dann noch einmal die Hälfte vom Rest. Wie viele Euro hat sie noch?',
      a: 10, r: [2, 0, 0, 1, 0], ex: '80 → 40 → 20 → 10.' },
    { id: 'z-wenig-muenzen', fam: 'min-coins', cat: 'Zahlen', type: 'number',
      q: 'Du kaufst für 3,70 € ein und zahlst mit einem 5-€-Schein. Das Wechselgeld bekommst du mit möglichst wenigen Euro-Münzen. Wie viele Münzen sind das?',
      a: 3, r: [2, 0, 0, 1, 0], ex: 'Zurück gibt es 1,30 €: eine 1-€-Münze, eine 20-Cent- und eine 10-Cent-Münze = 3 Münzen.' },
    { id: 'z-dreher', fam: 'swap-pairs', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([13, 31, 24, 42, 35, '?']),
      a: 53, r: [1, 1, 0, 0, 0], ex: 'Jede Zahl wird danach mit vertauschten Ziffern wiederholt: 35 → 53.' },

    // ===== mittel =====
    { id: 'z-taschenrechner', fam: 'calc-word', cat: 'Zahlen', type: 'text',
      q: 'Tippe 5317 in einen Taschenrechner mit Digitalanzeige und dreh ihn auf den Kopf. Welches Wort liest du?',
      a: 'LIES', r: [1, 2, 0, 1, 0], ex: 'Auf dem Kopf wird die Reihenfolge umgedreht: 7 → L, 1 → I, 3 → E, 5 → S. Das ergibt LIES.' },
    { id: 'z-wortwert', fam: 'word-value', cat: 'Zahlen', type: 'number',
      q: 'A = 1, B = 2, C = 3 … Z = 26. Wie viel ist das Wort <b>ZAHL</b> wert, wenn du die Werte seiner Buchstaben addierst?',
      a: 47, r: [1, 1, 0, 2, 0], ex: 'Z = 26, A = 1, H = 8, L = 12. Zusammen 47.' },
    { id: 'z-magisch', fam: 'magic-square', cat: 'Zahlen', type: 'number',
      q: 'In diesem Quadrat ergeben alle Zeilen, Spalten und Diagonalen dieselbe Summe. Welche Zahl fehlt?' + eq(['8 · 1 · 6', '3 · 5 · 7', '4 · 9 · ?']),
      a: 2, r: [1, 1, 0, 1, 0], ex: 'Jede Zeile ergibt 15 (8 + 1 + 6). 4 + 9 + 2 = 15.' },
    { id: 'z-dreieck-mitte', fam: 'corner-formula', cat: 'Zahlen', type: 'number',
      q: 'In jedem Dreieck ergeben die drei Eckzahlen nach derselben Regel die Zahl in der Mitte. Welche Zahl gehört ins letzte Dreieck?',
      svg: cornerTriangles([[2, 3, 4, 20], [1, 5, 3, 18], [4, 2, 6, 36], [3, 3, 5, '?']]),
      a: 30, r: [2, 1, 0, 1, 0], ex: 'Die beiden unteren Zahlen addieren, dann mit der oberen malnehmen: (2 + 3) × 4 = 20 … (3 + 3) × 5 = 30.' },
    { id: 'z-prozent-prozent', fam: 'pct-chain', cat: 'Zahlen', type: 'number',
      q: 'Wie viel sind 50 % von 50 % von 80?',
      a: 20, r: [2, 0, 1, 1, 0], ex: '50 % von 80 sind 40, davon 50 % sind 20. (Nicht 0 – die Prozente werden nicht abgezogen.)' },
    { id: 'z-primzahlen', fam: 'primzahlen', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([2, 3, 5, 7, 11, 13, '?']),
      a: 17, r: [1, 1, 1, 0, 1], ex: 'Die Primzahlen. 15 ist durch 3 und 5 teilbar, die nächste Primzahl ist 17.' },
    { id: 'z-muenzmix', fam: 'coin-mix', cat: 'Zahlen', type: 'number',
      q: 'Du hast genau 1 € – nur in 10-Cent- und 20-Cent-Münzen, zusammen 7 Münzen. Wie viele 20-Cent-Münzen sind dabei?',
      a: 3, r: [2, 1, 0, 2, 0], ex: '3 × 20 Cent + 4 × 10 Cent = 60 + 40 = 100 Cent bei 7 Münzen.' },
    { id: 'z-haelfte-doppelt', fam: 'half-double', cat: 'Zahlen', type: 'number',
      q: 'Die Hälfte einer Zahl ist 15. Wie viel ist das Doppelte dieser Zahl?',
      a: 60, r: [2, 0, 1, 1, 0], ex: 'Die Zahl ist 30, ihr Doppeltes 60 – nicht 30.' },
    { id: 'z-komma', fam: 'decimal-compare', cat: 'Zahlen', type: 'choice',
      q: 'Welche Zahl ist am größten?',
      opts: ['0,5', '0,45', '0,399', '0,41'], a: 0, r: [1, 0, 2, 0, 1],
      ex: '0,5 = 0,500 ist größer als 0,450, 0,410 und 0,399. Mehr Nachkommastellen machen eine Zahl nicht größer.' },
    { id: 'z-gaeste-kaffee', fam: 'percent-share', cat: 'Zahlen', type: 'number',
      q: 'Von 40 Gästen trinken 14 Kaffee. Wie viel Prozent der Gäste sind das?',
      a: 35, r: [2, 0, 0, 1, 1], ex: '14 von 40 = 7 von 20 = 35 von 100, also 35 %.' },
    { id: 'z-euro-werte', fam: 'euro-series', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([1, 2, 5, 10, 20, 50, 100, 200, '?']),
      a: 500, r: [1, 1, 0, 1, 0], ex: 'Immer im Muster 1 – 2 – 5, wie bei Münzen und Scheinen: nach 100 und 200 kommt 500.' },
    { id: 'z-neunerprobe', fam: 'div9', cat: 'Zahlen', type: 'choice',
      q: 'Welche dieser Zahlen ist durch 9 teilbar?',
      opts: ['4581', '3214', '7778', '5555'], a: 0, r: [1, 1, 0, 1, 1],
      ex: 'Eine Zahl ist durch 9 teilbar, wenn ihre Quersumme es ist: 4 + 5 + 8 + 1 = 18. Die anderen haben 10, 29 und 20.' },
    { id: 'z-drei-muenzen', fam: 'coin-flips', cat: 'Zahlen', type: 'number',
      q: 'Du wirfst eine Münze dreimal hintereinander und notierst jedes Mal Kopf oder Zahl. Wie viele verschiedene Abfolgen sind möglich?',
      a: 8, r: [1, 1, 1, 1, 0], ex: 'Jeder Wurf verdoppelt die Möglichkeiten: 2 × 2 × 2 = 8 (KKK, KKZ, KZK, … ZZZ).' },
    { id: 'z-ziffern-tausch', fam: 'riddle-swap', cat: 'Zahlen', type: 'number',
      q: 'Ich bin eine zweistellige Zahl mit der Quersumme 7. Vertauscht man meine beiden Ziffern, werde ich um 27 größer. Wer bin ich?',
      a: 25, r: [2, 1, 0, 2, 0], ex: '25 hat die Quersumme 7, und 52 − 25 = 27.' },
    { id: 'z-quadrat-kubik', fam: 'square-cube', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl zwischen 2 und 100 ist zugleich eine Quadratzahl und eine Kubikzahl (Hochdrei-Zahl)?',
      a: 64, r: [2, 1, 0, 1, 1], ex: '64 = 8 × 8 = 4 × 4 × 4.' },
    { id: 'z-gedankenzahl', fam: 'think-number', cat: 'Zahlen', type: 'number',
      q: 'Denk dir eine Zahl. Verdopple sie, addiere 10, halbiere das Ergebnis und ziehe deine gedachte Zahl ab. Was kommt heraus?',
      a: 5, r: [2, 1, 0, 1, 0], ex: 'Aus x wird 2x + 10, halbiert x + 5, minus x bleibt immer 5 – egal, welche Zahl du gewählt hast.' },
    { id: 'z-vierfache-quersumme', fam: 'digitsum-multiple', cat: 'Zahlen', type: 'number',
      q: 'Wie viele zweistellige Zahlen sind genau viermal so groß wie ihre Quersumme?',
      a: 4, r: [2, 1, 0, 2, 0], ex: '12, 24, 36 und 48: z. B. 36 = 4 × (3 + 6). Die Einerziffer muss doppelt so groß sein wie die Zehnerziffer.' },
    { id: 'z-mutter-tochter', fam: 'age-sum-future', cat: 'Zahlen', type: 'number',
      q: 'Mutter und Tochter sind heute zusammen 50 Jahre alt. Wie alt sind sie zusammen in 5 Jahren?',
      a: 60, r: [1, 1, 2, 1, 0], ex: 'Beide werden 5 Jahre älter: 50 + 5 + 5 = 60, nicht 55.' },
    { id: 'z-wuerfelecke', fam: 'dice-corner', cat: 'Zahlen', type: 'number',
      q: 'Ein normaler Würfel liegt so, dass du genau drei Seiten siehst. Wie viele Augen kannst du dabei höchstens sehen?',
      a: 15, r: [2, 1, 1, 1, 0], ex: '6, 5 und 4 liegen nicht gegenüber (Gegenseiten ergeben 7), sie treffen sich an einer Ecke: 6 + 5 + 4 = 15.' },
    { id: 'z-augensummen', fam: 'dice-sums', cat: 'Zahlen', type: 'number',
      q: 'Du wirfst zwei normale Würfel und addierst die Augen. Wie viele <b>verschiedene</b> Summen sind möglich?',
      a: 11, r: [1, 1, 2, 1, 0], ex: 'Die Summen reichen von 2 bis 12 – das sind 11 verschiedene, nicht 12 (die 1 ist unmöglich).' },
    { id: 'z-pulli-shirt', fam: 'price-ratio', cat: 'Zahlen', type: 'number',
      q: 'Ein Pullover kostet dreimal so viel wie ein T-Shirt. Zusammen kosten beide 48 €. Wie viele Euro kostet der Pullover?',
      a: 36, r: [2, 1, 0, 1, 0], ex: 'Zusammen sind es 4 T-Shirt-Preise: 48 : 4 = 12 €. Der Pullover kostet 3 × 12 = 36 €.' },

    // ===== schwer =====
    { id: 'z-links-nach-rechts', fam: 'left-to-right', cat: 'Zahlen', type: 'number',
      q: 'Wie viel ist das?' + eq(['8 : 2 × 4 = ?']),
      a: 16, r: [1, 1, 2, 1, 1], ex: 'Punkt- vor Strichrechnung reicht hier nicht: Geteilt und Mal sind gleichrangig, also von links nach rechts: 8 : 2 = 4, 4 × 4 = 16 (nicht 1).' },
    { id: 'z-punkteschnitt', fam: 'avg-needed', cat: 'Zahlen', type: 'number',
      q: 'In 4 Spielen hast du im Schnitt 15 Punkte geholt. Wie viele Punkte brauchst du im 5. Spiel, damit dein Schnitt auf 16 steigt?',
      a: 20, r: [2, 1, 2, 2, 0], ex: 'Bisher 4 × 15 = 60 Punkte. Für einen Schnitt von 16 braucht man 5 × 16 = 80. Also 80 − 60 = 20, nicht 17.' },
    { id: 'z-badewanne', fam: 'work-rate', cat: 'Zahlen', type: 'number',
      q: 'Hahn A füllt eine Badewanne allein in 6 Minuten, Hahn B allein in 3 Minuten. Nach wie vielen Minuten ist die Wanne voll, wenn beide gleichzeitig laufen?',
      a: 2, r: [2, 1, 2, 2, 1], ex: 'A schafft pro Minute ein Sechstel, B ein Drittel = zwei Sechstel. Zusammen drei Sechstel = halbe Wanne pro Minute → 2 Minuten.' },
    { id: 'z-vater-sohn', fam: 'age-double', cat: 'Zahlen', type: 'number',
      q: 'Ein Vater ist 40, sein Sohn 10 Jahre alt. In wie vielen Jahren ist der Vater nur noch doppelt so alt wie sein Sohn?',
      a: 20, r: [2, 1, 2, 1, 0], ex: 'In 20 Jahren: Vater 60, Sohn 30. Der Altersunterschied bleibt immer 30 – doppelt so alt ist er, wenn der Sohn 30 ist.' },
    { id: 'z-drei-oder-fuenf', fam: 'incl-excl', cat: 'Zahlen', type: 'number',
      q: 'Wie viele der Zahlen von 1 bis 100 sind durch 3 <b>oder</b> durch 5 teilbar (oder durch beide)?',
      a: 47, r: [2, 1, 2, 2, 1], ex: '33 durch 3, 20 durch 5 – aber die 6 Zahlen durch 15 (15, 30 … 90) sind doppelt gezählt: 33 + 20 − 6 = 47.' },
    { id: 'z-ko-turnier', fam: 'turnier-spiele', cat: 'Logik', type: 'number',
      q: 'Bei einem Tischtennisturnier scheidet aus, wer ein Spiel verliert. Unentschieden gibt es nicht. 20 Spieler treten an. Wie viele Spiele werden gespielt, bis der Sieger feststeht?',
      a: 19, r: [2, 2, 2, 1, 0], ex: 'Jedes Spiel scheidet genau einen Spieler aus. Bis nur einer übrig ist, müssen 19 ausscheiden – also 19 Spiele, egal wie gelost wird.' },
    { id: 'z-murmeln', fam: 'remainder', cat: 'Zahlen', type: 'number',
      q: 'Teilst du deine Murmeln in Zweier-, Dreier- oder Vierergruppen auf, bleibt jedes Mal genau eine übrig. In Fünfergruppen geht es auf. Du hast weniger als 50. Wie viele Murmeln hast du?',
      a: 25, r: [2, 1, 1, 2, 0], ex: 'Eins mehr als ein Vielfaches von 12 (gemeinsames Vielfaches von 2, 3 und 4): 1, 13, 25, 37, 49. Nur 25 ist durch 5 teilbar.' },
    { id: 'z-quersumme-dazu', fam: 'digitsum-add', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([1, 2, 4, 8, 16, 23, 28, 38, 49, '?']),
      a: 62, r: [2, 2, 1, 2, 0], ex: 'Es wird immer die Quersumme dazugezählt: 16 + 7 = 23, 23 + 5 = 28 … 49 + 13 = 62. Am Anfang sieht es nach Verdoppeln aus – weil bei einstelligen Zahlen die Quersumme die Zahl selbst ist.' },
    { id: 'z-umdrehen-addieren', fam: 'reverse-add', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([19, 110, 121, 242, '?']),
      a: 484, r: [2, 2, 0, 2, 0], ex: 'Jede Zahl plus ihre Rückwärtszahl: 19 + 91 = 110, 110 + 011 = 121, 121 + 121 = 242, 242 + 242 = 484.' },
    { id: 'z-mal-minus', fam: 'alt-ops', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([3, 6, 4, 8, 6, 12, 10, '?']),
      a: 20, r: [2, 2, 1, 1, 0], ex: 'Abwechselnd mal 2 und minus 2: 3 → 6 → 4 → 8 → 6 → 12 → 10 → 20.' },
    { id: 'z-roemisch-ohne-i', fam: 'roman-no-i', cat: 'Zahlen', type: 'number',
      q: 'Wie viele der Zahlen von 1 bis 20 schreibt man in römischen Zahlzeichen <b>ohne</b> ein I?',
      a: 4, r: [2, 1, 1, 2, 1], ex: 'Nur V (5), X (10), XV (15) und XX (20). Alle anderen brauchen ein I, z. B. IV, IX, XIV, XIX.' },
    { id: 'z-quadrat-ziffern', fam: 'square-digits', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([1, 4, 9, 1, 6, 2, 5, 3, 6, '?']),
      a: 4, r: [1, 3, 1, 1, 0], ex: 'Die Quadratzahlen 1, 4, 9, 16, 25, 36, 49 Ziffer für Ziffer hintereinander geschrieben. Als Nächstes kommt die 4 von 49.' },
    { id: 'z-ziffernprodukt', fam: 'digit-product', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([679, 378, 168, 48, 32, '?']),
      a: 6, r: [1, 3, 0, 2, 0], ex: 'Jede Zahl ist das Produkt der Ziffern der vorigen: 6 × 7 × 9 = 378, 3 × 7 × 8 = 168 … 3 × 2 = 6.' },
    { id: 'z-halber-preis', fam: 'pct-recover', cat: 'Zahlen', type: 'number',
      q: 'Ein Preis wird um 50 % gesenkt. Um wie viel Prozent muss der neue Preis steigen, damit wieder der alte Preis erreicht ist?',
      a: 100, r: [2, 1, 3, 1, 0], ex: 'Aus 100 € werden 50 €. Um wieder 100 € zu erreichen, müssen 50 € dazu – das sind 100 % von 50 €, nicht 50 %.' },
    { id: 'z-zahlenmauer', fam: 'number-wall', cat: 'Zahlen', type: 'number',
      q: 'In dieser Zahlenmauer ist jeder Stein die Summe der beiden Steine direkt darunter. Welche Zahl gehört an die Stelle des Fragezeichens?',
      svg: wall(35, [4, '?', 9]),
      a: 11, r: [2, 1, 1, 1, 1], ex: 'Die Mitte unten zählt doppelt zur Spitze: 4 + 2 × ? + 9 = 35, also ? = 11. Probe: 15 und 20 ergeben 35.' },
    { id: 'z-primluecken', fam: 'prime-gaps', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([1, 2, 2, 4, 2, 4, 2, 4, 6, '?']),
      a: 2, r: [2, 2, 1, 2, 1], ex: 'Die Abstände zwischen den Primzahlen 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31: von 29 bis 31 sind es 2.' },
    { id: 'z-teileranzahl', fam: 'divisor-count', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([1, 2, 2, 3, 2, 4, 2, 4, 3, '?']),
      a: 4, r: [2, 2, 0, 2, 1], ex: 'Die Anzahl der Teiler von 1, 2, 3 … 10. Die 10 hat die Teiler 1, 2, 5 und 10 – also 4.' },
    { id: 'z-hundert-minus', fam: 'alternating-sum', cat: 'Zahlen', type: 'number',
      q: 'Rechne im Kopf:' + eq(['100 − 99 + 98 − 97 + … + 2 − 1']),
      a: 50, r: [2, 2, 1, 2, 0], ex: 'Immer zwei zusammenfassen: (100 − 99) + (98 − 97) + … + (2 − 1) = 50 Paare mit je 1 = 50.' },

    // ===== sehr schwer =====
    { id: 'z-segmente', fam: 'segment-sequence', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([6, 2, 5, 5, 4, '?']),
      a: 5, r: [1, 4, 0, 2, 0], ex: 'So viele Striche leuchten auf einer Digitalanzeige für 0, 1, 2, 3, 4 – und die 5 braucht 5 Striche.' },
    { id: 'z-roemisch-laenge', fam: 'roman-length', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([1, 2, 3, 2, 1, 2, 3, 4, 2, '?']),
      a: 1, r: [1, 4, 0, 2, 1], ex: 'Die Zeichenzahl der römischen Zahlen: I, II, III, IV, V, VI, VII, VIII, IX – und X hat 1 Zeichen.' },
    { id: 'z-zahlwort-laenge', fam: 'zahlwort-buchstaben', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([4, 4, 4, 4, 4, 5, 6, 4, 4, 4, 3, 5, '?']),
      a: 8, r: [1, 4, 0, 2, 0], ex: 'Die Buchstaben der Zahlwörter: eins (4), zwei, drei, vier, fünf, sechs (5), sieben (6), acht, neun, zehn, elf (3), zwölf (5) – dreizehn hat 8.' },
    { id: 'z-zweierpotenz-quersumme', fam: 'pow2-digitsum', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([1, 2, 4, 8, 7, 5, 10, 11, 13, '?']),
      a: 8, r: [2, 2, 2, 2, 0], ex: 'Die Quersummen der Verdopplungen 1, 2, 4, 8, 16, 32, 64, 128, 256 – als Nächstes 512 mit der Quersumme 8.' },
    { id: 'z-ziffernloecher', fam: 'loecher', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl gehört an die Stelle des Fragezeichens?' + eq(['8061 = 4', '3992 = 2', '7115 = 0', '6088 = ?']),
      a: 6, r: [2, 4, 0, 2, 0], ex: 'Gezählt werden die geschlossenen Löcher in den Ziffern: 0, 6 und 9 haben eins, 8 hat zwei. 6088: 1 + 1 + 2 + 2 = 6.' },
    { id: 'z-domino', fam: 'domino-pips', cat: 'Zahlen', type: 'number',
      q: 'Ein Dominospiel enthält jede Kombination von 0|0 bis 6|6 genau einmal – das sind 28 Steine. Wie viele Augen sind auf allen Steinen zusammen?',
      a: 168, r: [3, 2, 1, 2, 1], ex: 'Jede Zahl von 0 bis 6 kommt genau 8-mal vor (auf 7 Steinen, beim Pasch doppelt). 8 × (0 + 1 + … + 6) = 8 × 21 = 168.' },
    { id: 'z-endnullen', fam: 'trailing-zeros', cat: 'Zahlen', type: 'number',
      q: 'Multipliziere alle Zahlen von 1 bis 20 miteinander: 1 × 2 × 3 × … × 20. Mit wie vielen Nullen endet das Ergebnis?',
      a: 4, r: [2, 2, 2, 2, 1], ex: 'Jede Endnull braucht ein Paar 2 × 5. Zweien gibt es genug, Fünfen nur in 5, 10, 15 und 20 – also 4 Nullen.' },
    { id: 'z-erstes-m', fam: 'first-letter-m', cat: 'Zahlen', type: 'number',
      q: 'Du schreibst die Zahlen ab 1 der Reihe nach als deutsche Zahlwörter aus: eins, zwei, drei … Bei welcher Zahl schreibst du zum ersten Mal ein M?',
      a: 1000000, r: [2, 3, 1, 2, 0], ex: 'Kein Baustein bis 999 999 hat ein M (eins … zwölf, -zehn, -zig/-ßig, und, hundert, tausend). Das erste M steht in „eine Million“.' },
    { id: 'z-roemische-woerter', fam: 'roman-words', cat: 'Zahlen', type: 'number',
      q: 'Wie viel ist das?' + eq(['MIX − DIV = ?']),
      a: 505, r: [2, 4, 0, 2, 1], ex: 'Als römische Zahlen gelesen: MIX = 1000 + 9 = 1009, DIV = 500 + 4 = 504. 1009 − 504 = 505.' },
  ]);
})();

// ---- zeit.js ----
(function () {
  const { seq } = (typeof window !== 'undefined' ? window : globalThis).QSVG;
  QUIZ_ADD([
    // ===== leicht =====
    { id: 't-week-hours', fam: 'woche-stunden', cat: 'Zeit', type: 'number',
      q: 'Wie viele Stunden hat eine Woche?',
      a: 168, r: [1, 0, 0, 1, 0], ex: '7 × 24 Stunden = 168 Stunden.' },
    { id: 't-feb-2028', fam: 'februar-schaltjahr', cat: 'Zeit', type: 'choice',
      q: 'Wie viele Tage hat der Februar im Jahr 2028?',
      opts: ['29', '28', '30', '31'], a: 0, r: [1, 0, 0, 0, 1],
      ex: '2028 ist durch 4 teilbar – ein Schaltjahr. Der Februar hat 29 Tage.' },
    { id: 't-train-minutes', fam: 'fahrzeit-minuten', cat: 'Zeit', type: 'number',
      q: 'Ein Zug fährt um 14:48 Uhr ab und kommt um 15:13 Uhr an. Wie viele Minuten dauert die Fahrt?',
      a: 25, r: [1, 0, 1, 1, 0], ex: '12 Minuten bis 15:00 Uhr, dann noch 13 Minuten: 25 Minuten.' },
    { id: 't-1740', fam: '24h-stundenzeiger', cat: 'Zeit', type: 'choice',
      q: 'Eine Digitaluhr zeigt 17:40. Wo steht der kleine Stundenzeiger auf einer Zeigeruhr?',
      opts: ['Zwischen 5 und 6', 'Zwischen 7 und 8', 'Genau auf der 5', 'Zwischen 6 und 7'], a: 0, r: [1, 0, 1, 1, 0],
      ex: '17 Uhr ist 5 Uhr nachmittags. Um 17:40 Uhr steht der Stundenzeiger zwischen 5 und 6 – schon zwei Drittel des Weges zur 6.' },
    { id: 't-month-plus', fam: 'monat-plus', cat: 'Zeit', type: 'choice',
      q: 'Welcher Monat ist 8 Monate nach dem Juli?',
      opts: ['März', 'Februar', 'April', 'Januar'], a: 0, r: [1, 0, 1, 1, 0],
      ex: 'August (1), September, Oktober, November, Dezember (5), Januar, Februar, März (8).' },
    { id: 't-stopwatch', fam: 'stoppuhr-sekunden', cat: 'Zeit', type: 'number',
      q: 'Eine Stoppuhr zeigt <b>1:45</b> (Minuten:Sekunden). Wie viele Sekunden sind das insgesamt?',
      a: 105, r: [1, 0, 1, 1, 0], ex: 'Eine Minute sind 60 Sekunden: 60 + 45 = 105 (nicht 145).' },
    { id: 't-xmas-silvester', fam: 'feiertag-abstand', cat: 'Zeit', type: 'number',
      q: 'Wie viele Tage nach Heiligabend (24. Dezember) ist Silvester (31. Dezember)?',
      a: 7, r: [1, 0, 1, 1, 0], ex: '31 − 24 = 7 – Silvester ist genau eine Woche nach Heiligabend.' },
    { id: 't-recipe', fam: 'rezept-skalieren', cat: 'Logik', type: 'number',
      q: 'Ein Kuchenrezept für 4 Personen braucht 300 g Mehl. Wie viel Gramm Mehl brauchst du für 6 Personen?',
      a: 450, r: [2, 0, 0, 1, 0], ex: 'Pro Person 75 g. 6 × 75 g = 450 g.' },
    { id: 't-bike', fam: 'tempo-minuten', cat: 'Zeit', type: 'number',
      q: 'Eine Radfahrerin fährt gleichmäßig 18 km pro Stunde. Wie viele Minuten braucht sie für 3 km?',
      a: 10, r: [2, 0, 0, 1, 0], ex: '18 km in 60 Minuten heißt 3 km in 10 Minuten (ein Sechstel).' },
    { id: 't-weekday-13', fam: 'wochentag-13', cat: 'Zeit', type: 'choice',
      q: 'Ein Monat beginnt an einem Sonntag. Auf welchen Wochentag fällt der 13.?',
      opts: ['Freitag', 'Samstag', 'Donnerstag', 'Sonntag'], a: 0, r: [1, 1, 0, 1, 0],
      ex: 'Der 1. und der 8. sind Sonntage, also ist der 13. fünf Tage nach dem 8.: Freitag.' },

    // ===== mittel =====
    { id: 't-bedtime', fam: 'schlafenszeit', cat: 'Zeit', type: 'choice',
      q: 'Dein Wecker klingelt um 6:40 Uhr. Du willst 8 Stunden schlafen und brauchst 15 Minuten zum Einschlafen. Wann musst du ins Bett?',
      opts: ['22:25 Uhr', '22:55 Uhr', '22:40 Uhr', '23:25 Uhr'], a: 0, r: [2, 0, 1, 1, 0],
      ex: '8 Stunden vor 6:40 Uhr ist 22:40 Uhr, 15 Minuten früher: 22:25 Uhr.' },
    { id: 't-1000-days', fam: 'wochentag-plus-n', cat: 'Zeit', type: 'choice',
      q: 'Heute ist Montag. Welcher Wochentag ist in 1000 Tagen?',
      opts: ['Sonntag', 'Montag', 'Samstag', 'Dienstag'], a: 0, r: [2, 1, 0, 1, 0],
      ex: '1000 = 142 × 7 + 6. Montag plus 6 Tage ist Sonntag.' },
    { id: 't-slow-clock', fam: 'nachgehende-uhr', cat: 'Zeit', type: 'choice',
      q: 'Eine Uhr geht pro Stunde 2 Minuten nach. Um 8:00 Uhr wird sie richtig gestellt. Was zeigt sie, wenn es wirklich 14:00 Uhr ist?',
      opts: ['13:48 Uhr', '14:12 Uhr', '13:58 Uhr', '13:52 Uhr'], a: 0, r: [2, 0, 1, 1, 0],
      ex: '6 Stunden × 2 Minuten = 12 Minuten zu wenig: 13:48 Uhr.' },
    { id: 't-lap', fam: 'rundenzeit', cat: 'Zeit', type: 'number',
      q: 'Eine Läuferin läuft 5 Runden. Nach Runde 3 zeigt ihre Stoppuhr 6:00, nach Runde 5 zeigt sie 10:30 (Minuten:Sekunden). Wie viele Sekunden brauchte sie im Schnitt für Runde 4 und 5?',
      a: 135, r: [2, 0, 1, 2, 0], ex: 'Für die zwei Runden: 4:30 = 270 Sekunden. Pro Runde 135 Sekunden.' },
    { id: 't-days-until-xmas', fam: 'tage-bis', cat: 'Zeit', type: 'number',
      q: 'Heute ist der 1. November. In wie vielen Tagen ist Heiligabend (24. Dezember)?',
      a: 53, r: [2, 0, 1, 2, 0], ex: 'Bis zum 1. Dezember sind es 30 Tage (der November hat 30), dann noch 23 Tage: 53.' },
    { id: 't-months-backward', fam: 'monate-rueckwaerts', cat: 'Zeit', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['D', 'N', 'O', 'S', 'A', 'J', 'J', '?']),
      a: 'M', letters: true, r: [1, 2, 0, 1, 0],
      ex: 'Die Monate rückwärts: Dezember, November, Oktober, September, August, Juli, Juni – Mai.' },
    { id: 't-timezone-ny', fam: 'zeitzone-ankunft', cat: 'Zeit', type: 'choice',
      q: 'Ein Flug startet in Berlin um 10:00 Uhr Ortszeit und ist 9 Stunden unterwegs. In New York ist es 6 Stunden früher als in Berlin. Wie spät ist es in New York bei der Landung?',
      opts: ['13:00 Uhr', '19:00 Uhr', '16:00 Uhr', '7:00 Uhr'], a: 0, r: [2, 1, 1, 1, 0],
      ex: 'Bei der Landung ist es in Berlin 19:00 Uhr. In New York 6 Stunden früher: 13:00 Uhr.' },
    { id: 't-mondays-30', fam: 'wochentage-im-monat', cat: 'Zeit', type: 'number',
      q: 'Ein Monat mit 30 Tagen beginnt an einem Samstag. Wie viele <b>Montage</b> hat er?',
      a: 4, r: [2, 1, 1, 1, 0], ex: 'Montage sind der 3., 10., 17. und 24. – der 31. existiert nicht. Fünfmal kommen nur Samstag und Sonntag vor.' },
    { id: 't-bundle', fam: 'drei-fuer-zwei', cat: 'Logik', type: 'number',
      q: 'Angebot „Nimm 3, zahl 2“: Ein Joghurt kostet 0,60 €. Du nimmst 7 Becher. Wie viele <b>Cent</b> zahlst du?',
      a: 300, r: [2, 1, 1, 1, 0], ex: 'Zweimal 3 Becher (je 2 bezahlt) plus 1 einzelner: 5 × 60 Cent = 300 Cent.' },
    { id: 't-100-days', fam: 'datum-plus-100', cat: 'Zeit', type: 'choice',
      q: 'Heute ist der 1. März. Welches Datum ist in 100 Tagen?',
      opts: ['9. Juni', '10. Juni', '8. Juni', '1. Juni'], a: 0, r: [2, 0, 1, 2, 1],
      ex: 'März 31 + April 30 + Mai 31 = 92 Tage bis zum 1. Juni. Noch 8 Tage weiter: 9. Juni.' },
    { id: 't-stopped-clock', fam: 'stehende-uhr', cat: 'Logik', type: 'number',
      q: 'Eine Zeigeruhr ist stehen geblieben. Wie oft an einem ganzen Tag (24 Stunden) zeigt sie trotzdem die richtige Uhrzeit?',
      a: 2, r: [1, 2, 1, 0, 0], ex: 'Die Zeiger stehen fest – die gezeigte Zeit kommt an einem Tag zweimal vor (vormittags und abends).' },
    { id: 't-five-days-ago', fam: 'kette-vergangenheit', cat: 'Zeit', type: 'choice',
      q: 'Vor fünf Tagen war der Tag nach Donnerstag. Welcher Tag ist heute?',
      opts: ['Mittwoch', 'Dienstag', 'Donnerstag', 'Montag'], a: 0, r: [2, 0, 1, 1, 0],
      ex: 'Vor fünf Tagen war Freitag. Freitag plus 5 Tage ist Mittwoch.' },
    { id: 't-feb29-birthday', fam: 'schalttag-geburtstag', cat: 'Zeit', type: 'number',
      q: 'Lena wurde am 29. Februar 2008 geboren. Wie oft konnte sie bis Ende 2026 an einem echten 29. Februar Geburtstag feiern (Geburtstag selbst nicht mitgezählt)?',
      a: 4, r: [2, 1, 1, 1, 1], ex: 'Schaltjahre nach 2008 bis 2026: 2012, 2016, 2020, 2024 – also 4-mal.' },
    { id: 't-litre-cube', fam: 'kubikmeter-liter', cat: 'Logik', type: 'number',
      q: 'Wie viele Liter Wasser passen in einen Würfel mit 1 m Kantenlänge?',
      a: 1000, r: [1, 1, 2, 0, 1], ex: '1 Liter ist ein Würfel mit 10 cm Kante. In 1 m passen 10 × 10 × 10 = 1000 solcher Würfel.' },
    { id: 't-advent-doors', fam: 'einschliesslich-zaehlen', cat: 'Zeit', type: 'number',
      q: 'Du öffnest an jedem Tag vom 5. bis einschließlich 20. Dezember ein Türchen deines Adventskalenders. Wie viele Türchen sind das?',
      a: 16, r: [1, 1, 2, 1, 0], ex: '20 − 5 = 15, aber der 5. zählt mit: 16 Türchen.' },
    { id: 't-cuckoo', fam: 'kuckucksuhr', cat: 'Zeit', type: 'number',
      q: 'Eine Kuckucksuhr ruft zu jeder vollen Stunde so oft, wie es Uhr ist (1 bis 12), und zu jeder halben Stunde einmal. Wie oft ruft sie an einem ganzen Tag?',
      a: 180, r: [2, 1, 1, 2, 0], ex: '1 + 2 + … + 12 = 78, zweimal am Tag = 156. Dazu 24 halbe Stunden: 180.' },
    { id: 't-new-year-age', fam: 'silvester-geburt', cat: 'Zeit', type: 'number',
      q: 'Max wurde am 31. Dezember 2010 geboren. Wie viele Jahre alt ist er am 1. Januar 2012?',
      a: 1, r: [1, 1, 2, 1, 0], ex: 'Seinen ersten Geburtstag hatte er am 31.12.2011 – am Tag danach ist er 1 Jahr alt, nicht 2.' },

    // ===== schwer =====
    { id: 't-year-later', fam: 'wochentag-ein-jahr', cat: 'Zeit', type: 'choice',
      q: 'Der 10. Mai 2027 ist ein Montag. Welcher Wochentag ist der 10. Mai 2028?',
      opts: ['Mittwoch', 'Dienstag', 'Montag', 'Donnerstag'], a: 0, r: [2, 1, 2, 1, 1],
      ex: 'Dazwischen liegt der 29. Februar 2028: 366 Tage = 52 Wochen + 2 Tage. Montag + 2 = Mittwoch.' },
    { id: 't-chain-day-before', fam: 'kette-tag-nach-tag-vor', cat: 'Zeit', type: 'choice',
      q: 'Der Tag nach dem Tag vor gestern ist Mittwoch. Welcher Tag ist heute?',
      opts: ['Donnerstag', 'Mittwoch', 'Freitag', 'Dienstag'], a: 0, r: [2, 1, 2, 1, 0],
      ex: 'Der Tag vor gestern ist vorgestern, der Tag danach ist gestern. Gestern war Mittwoch – heute ist Donnerstag.' },
    { id: 't-chain-today', fam: 'kette-tag-vor-morgen', cat: 'Zeit', type: 'text',
      q: 'Drei Tage nach dem Tag vor morgen ist Samstag. Welcher Wochentag ist heute?',
      a: 'MITTWOCH', r: [2, 2, 2, 1, 0],
      ex: 'Der Tag vor morgen ist heute. Heute + 3 Tage = Samstag, also ist heute Mittwoch.' },
    { id: 't-same-digits', fam: 'digitaluhr-gleiche-ziffern', cat: 'Zeit', type: 'number',
      q: 'Eine Digitaluhr zeigt 00:00 bis 23:59. Wie oft am Tag zeigt sie vier <b>gleiche</b> Ziffern (wie 11:11)?',
      a: 3, r: [2, 1, 2, 1, 0], ex: 'Nur 00:00, 11:11 und 22:22. 33:33 und höher gibt es nicht.' },
    { id: 't-digit-sum-max', fam: 'digitaluhr-quersumme', cat: 'Zeit', type: 'number',
      q: 'Eine Digitaluhr zeigt 00:00 bis 23:59. Wie groß ist die größte Summe der vier Ziffern, die sie je anzeigt?',
      a: 24, r: [2, 2, 2, 1, 0], ex: 'Nicht 23:59 (Summe 19): Bei 19:59 ergibt sich 1 + 9 + 5 + 9 = 24.' },
    { id: 't-five-minutes', fam: 'digitaluhr-ziffer-5', cat: 'Zeit', type: 'number',
      q: 'Eine Digitaluhr zeigt 00:00 bis 23:59. An wie vielen Minuten des Tages ist mindestens eine Ziffer 5 zu sehen?',
      a: 450, r: [3, 1, 2, 2, 0],
      ex: 'Stunden 05 und 15: je 60 Minuten = 120. In den anderen 22 Stunden je 15 Minuten (05, 15, 25, 35, 45, 50–59) = 330. Zusammen 450.' },
    { id: 't-age-ratio', fam: 'alter-verhaeltnis', cat: 'Logik', type: 'number',
      q: 'Ein Vater ist heute dreimal so alt wie seine Tochter. In 12 Jahren ist er nur noch doppelt so alt wie sie. Wie alt ist der Vater heute?',
      a: 36, r: [2, 1, 1, 2, 1], ex: 'Tochter 12, Vater 36. In 12 Jahren: 24 und 48 – doppelt so alt.' },
    { id: 't-flight-minutes', fam: 'zeitzone-dauer', cat: 'Zeit', type: 'number',
      q: 'Ein Flug startet in Frankfurt um 13:00 Uhr und landet in New York um 15:30 Uhr Ortszeit. New York ist 6 Stunden hinter Frankfurt. Wie viele Minuten dauert der Flug?',
      a: 510, r: [2, 1, 2, 2, 0], ex: '15:30 Uhr in New York ist 21:30 Uhr in Frankfurt. Von 13:00 bis 21:30 Uhr: 8,5 Stunden = 510 Minuten.' },
    { id: 't-century', fam: 'jahrhundertbeginn', cat: 'Zeit', type: 'number',
      q: 'In welchem Jahr begann das 21. Jahrhundert (am 1. Januar)?',
      a: 2001, r: [1, 2, 2, 0, 1], ex: 'Es gibt kein Jahr 0: Das 1. Jahrhundert umfasst die Jahre 1–100, das 21. die Jahre 2001–2100.' },
    { id: 't-every-tenth', fam: 'jeder-zehnte-tag', cat: 'Zeit', type: 'choice',
      q: 'Ein Kurs findet alle 10 Tage statt. Der erste Termin ist an einem Montag. Auf welchen Wochentag fällt der 8. Termin?',
      opts: ['Montag', 'Mittwoch', 'Donnerstag', 'Sonntag'], a: 0, r: [2, 1, 2, 1, 0],
      ex: 'Vom 1. zum 8. Termin sind es 7 Abstände × 10 = 70 Tage = genau 10 Wochen. Also wieder Montag.' },
    { id: 't-weekday-skip', fam: 'wochentage-jeder-zweite', cat: 'Zeit', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['M', 'M', 'F', 'S', 'D', 'D', 'S', '?']),
      a: 'M', letters: true, r: [2, 2, 1, 1, 0],
      ex: 'Jeder zweite Wochentag: Montag, Mittwoch, Freitag, Sonntag, Dienstag, Donnerstag, Samstag – dann wieder Montag.' },
    { id: 't-53-weekdays', fam: 'jahr-53-wochentage', cat: 'Zeit', type: 'number',
      q: 'In einem Jahr gibt es 53 Montage <b>und</b> 53 Dienstage. Wie viele Tage hat dieses Jahr?',
      a: 366, r: [2, 2, 1, 1, 1], ex: '365 Tage = 52 Wochen + 1 Tag – nur ein Wochentag kommt 53-mal vor. Für zwei braucht es 52 Wochen + 2 Tage: ein Schaltjahr.' },
    { id: 't-consecutive-digits', fam: 'digitaluhr-aufsteigend', cat: 'Zeit', type: 'number',
      q: 'Eine Digitaluhr zeigt 00:00 bis 23:59. Wie oft am Tag zeigt sie vier aufeinanderfolgende Ziffern in aufsteigender Reihenfolge (wie 12:34)?',
      a: 3, r: [2, 2, 2, 1, 0], ex: '12:34 und 23:45 – und die oft übersehene 01:23 mit der führenden Null. 34:56 gibt es nicht. Also 3.' },
    { id: 't-hand-gap', fam: 'zeiger-winkel-stunde', cat: 'Zeit', type: 'number',
      q: 'Um wie viel Grad dreht sich der Minutenzeiger in einer Stunde <b>weiter</b> als der Stundenzeiger?',
      a: 330, r: [2, 1, 2, 1, 1], ex: 'Der Minutenzeiger schafft 360°, der Stundenzeiger ein Zwölftel davon, 30°. Differenz: 330°.' },

    // ===== sehr schwer =====
    { id: 't-palindrome-clock', fam: 'digitaluhr-palindrom', cat: 'Zeit', type: 'number',
      q: 'Eine Digitaluhr zeigt 00:00 bis 23:59. Wie viele Uhrzeiten am Tag lesen sich vorwärts und rückwärts gleich (wie 12:21)?',
      a: 16, r: [3, 2, 1, 2, 0],
      ex: 'Die Minuten sind die gespiegelte Stunde – die zweite Stundenziffer wird zur Zehnerminute und darf höchstens 5 sein. Möglich: 00–05, 10–15, 20–23 = 6 + 6 + 4 = 16.' },
    { id: 't-calendar-repeat', fam: 'kalender-wiederholung', cat: 'Zeit', type: 'number',
      q: 'Das Jahr 2026 begann an einem Donnerstag und ist kein Schaltjahr. In welchem Jahr passt der Kalender von 2026 zum ersten Mal wieder genau (gleiche Wochentage an allen Daten)?',
      a: 2037, r: [3, 2, 2, 2, 1],
      ex: 'Jedes Jahr verschiebt sich der Neujahrstag um 1 Tag, nach Schaltjahren um 2: 2027 Fr, 2028 Sa, 2029 Mo, 2030 Di, 2031 Mi, 2032 Do (aber Schaltjahr), 2033 Sa … 2037 Do – ohne Schalttag.' },
    { id: 't-avg-speed', fam: 'durchschnittstempo', cat: 'Zeit', type: 'number',
      q: 'Du fährst 60 km mit 60 km/h hin und dieselben 60 km mit 30 km/h zurück. Wie viele km/h beträgt deine Durchschnittsgeschwindigkeit insgesamt?',
      a: 40, r: [2, 1, 3, 2, 1],
      ex: 'Nicht 45: Hin 1 Stunde, zurück 2 Stunden. 120 km in 3 Stunden = 40 km/h.' },
    { id: 't-cumulative-days', fam: 'monate-aufsummiert', cat: 'Zeit', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([31, 59, 90, 120, 151, '?']),
      a: 181, r: [2, 3, 0, 2, 1],
      ex: 'Die Tage des Jahres bis Monatsende: Januar 31, + Februar 28 = 59, + März 31 = 90 … + Juni 30 = 181.' },
    { id: 't-advent-first', fam: 'advent-datum', cat: 'Zeit', type: 'number',
      q: 'Der 4. Advent ist der letzte Sonntag vor dem 25. Dezember. In einem Jahr ist Heiligabend (24. Dezember) ein Sonntag. Am wievielten Dezember ist dann der 1. Advent?',
      a: 3, r: [2, 2, 2, 1, 1],
      ex: 'Heiligabend selbst ist dann der 4. Advent. Drei Wochen davor, am 3. Dezember, ist der 1. Advent (nicht am 26. November).' },
    { id: 't-pancakes', fam: 'pfanne-planen', cat: 'Logik', type: 'number',
      q: 'In eine Pfanne passen genau 2 Pfannkuchen. Jede Seite braucht 1 Minute. Wie viele Minuten brauchst du mindestens, um 3 Pfannkuchen auf beiden Seiten zu braten?',
      a: 3, r: [2, 3, 2, 1, 0],
      ex: 'Minute 1: A und B Seite 1. Minute 2: A Seite 2 und C Seite 1. Minute 3: B Seite 2 und C Seite 2. Die Pfanne ist nie halb leer.' },
    { id: 't-drift-clocks', fam: 'uhren-auseinander', cat: 'Zeit', type: 'number',
      q: 'Zwei Zeigeruhren zeigen jetzt beide 12:00 Uhr. Die eine geht pro Tag 1 Minute vor, die andere 1 Minute nach. Nach wie vielen Tagen zeigen sie zum ersten Mal wieder dieselbe Uhrzeit?',
      a: 360, r: [3, 2, 2, 2, 0],
      ex: 'Der Abstand wächst um 2 Minuten pro Tag. Gleich sehen sie wieder aus, wenn er 12 Stunden = 720 Minuten beträgt: nach 360 Tagen.' },
    { id: 't-train-tunnel', fam: 'zug-tunnel', cat: 'Zeit', type: 'number',
      q: 'Ein 200 m langer Zug fährt mit 72 km/h durch einen 400 m langen Tunnel. Wie viele Sekunden vergehen von der Einfahrt der Lok bis zum Moment, in dem der letzte Wagen den Tunnel verlässt?',
      a: 30, r: [3, 2, 2, 2, 1],
      ex: '72 km/h = 20 m pro Sekunde. Die Lok muss 400 m Tunnel plus 200 m Zuglänge zurücklegen, bis der letzte Wagen draußen ist: 600 m : 20 = 30 Sekunden.' },
    { id: 't-month-start', fam: 'monatsanfang-wochentag', cat: 'Zeit', type: 'number',
      q: 'In einem Jahr ohne 29. Februar: Wie viele <b>andere</b> Monate beginnen am selben Wochentag wie der Januar?',
      a: 1, r: [3, 2, 1, 2, 1],
      ex: 'Ein Monat beginnt am selben Wochentag, wenn die Tage davor ein Vielfaches von 7 sind. Das klappt nur beim Oktober: 273 Tage = 39 Wochen.' },
  ]);
})();
