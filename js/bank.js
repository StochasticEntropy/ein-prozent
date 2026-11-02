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

// ---- alltag2a.js ----
(function () {
  const { seq, svg } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // Tic-Tac-Toe-Stellung: Zeilen von oben, '.' = frei
  function svgTicTacToe(rows) {
    let s = '';
    for (const p of [70, 130]) {
      s += `<line class="ln" x1="${p}" y1="12" x2="${p}" y2="188"/>`;
      s += `<line class="ln" x1="12" y1="${p}" x2="188" y2="${p}"/>`;
    }
    rows.forEach((row, r) => [...row].forEach((ch, c) => {
      const x = 40 + 60 * c, y = 40 + 60 * r;
      if (ch === 'X') {
        s += `<line class="hand" x1="${x - 17}" y1="${y - 17}" x2="${x + 17}" y2="${y + 17}" stroke-width="7"/>`;
        s += `<line class="hand" x1="${x + 17}" y1="${y - 17}" x2="${x - 17}" y2="${y + 17}" stroke-width="7"/>`;
      } else if (ch === 'O') {
        s += `<circle class="ln" cx="${x}" cy="${y}" r="19" style="stroke-width:6"/>`;
      }
    }));
    return svg('0 0 200 200', s);
  }

  QUIZ_ADD([
    // ---------- leicht ----------
    { id: 'a2a-ampel-mitte', fam: 'ampel-lichter-anordnung', cat: 'Logik', type: 'choice',
      q: 'Eine normale Verkehrsampel hat drei Lichter senkrecht übereinander. Welche Farbe hat das <b>mittlere</b> Licht?',
      opts: ['Gelb', 'Rot', 'Grün'], a: 0, r: [1, 0, 0, 0, 0],
      ex: 'Von oben nach unten: Rot, Gelb, Grün. Das mittlere Licht ist also Gelb.' },
    { id: 'a2a-noten-plus-minus', fam: 'noten-plus-minus', cat: 'Logik', type: 'choice',
      q: 'In der Schule ist die 1 die beste Note. Was ist besser: eine 2 minus oder eine 3 plus?',
      opts: ['Die 2 minus', 'Die 3 plus', 'Beide gleich gut'], a: 0, noShuffle: true, r: [1, 0, 1, 0, 0],
      ex: 'Die 2 minus ist eine schwache Zwei, die 3 plus eine starke Drei – aber auch eine schwache Zwei ist besser als jede Drei.' },
    { id: 'a2a-halbzeit-tore', fam: 'halbzeit-tore', cat: 'Logik', type: 'number',
      q: 'Beim Fußball führt die Heimmannschaft zur Halbzeit 1:0. Am Ende gewinnen die Gäste 2:1. Wie viele Tore fielen in der zweiten Halbzeit?',
      a: 2, r: [1, 0, 1, 1, 0],
      ex: 'Insgesamt fielen 3 Tore, eins davon schon vor der Pause. In der zweiten Halbzeit fielen also 2 – beide für die Gäste.' },
    { id: 'a2a-tictactoe', fam: 'tictactoe-gewinnzug', cat: 'Logik', type: 'number',
      q: 'Beim Tic-Tac-Toe gewinnt, wer drei eigene Zeichen in einer Reihe hat – waagerecht, senkrecht oder schräg. X ist am Zug. Auf wie vielen freien Feldern gewinnt X sofort?',
      svg: svgTicTacToe(['X.X', 'OX.', 'OO.']),
      a: 2, r: [1, 0, 1, 1, 0],
      ex: 'X gewinnt oben in der Mitte (obere Reihe) und unten rechts (Schräge von oben links). Das freie Feld rechts in der Mitte bringt keine Dreierreihe.' },
    { id: 'a2a-basketball', fam: 'basketball-punkte', cat: 'Logik', type: 'number',
      q: 'Beim Basketball zählt ein normaler Korb 2 Punkte, ein Wurf von weit draußen 3 Punkte und ein Freiwurf 1 Punkt. Ein Team trifft 5 normale Körbe, 2 Dreier und 3 Freiwürfe. Wie viele Punkte hat es?',
      a: 19, r: [1, 0, 0, 2, 0],
      ex: '5 × 2 = 10 Punkte, 2 × 3 = 6 Punkte und 3 × 1 = 3 Punkte – zusammen 19.' },
    { id: 'a2a-schulstunde', fam: 'schulstunde-45', cat: 'Zeit', type: 'number',
      q: 'Eine Schulstunde dauert 45 Minuten. Wie viele Schulstunden ergeben zusammen genau 3 Zeitstunden?',
      a: 4, r: [1, 0, 1, 1, 0],
      ex: '3 Stunden sind 180 Minuten, und 180 : 45 = 4.' },

    // ---------- mittel ----------
    { id: 'a2a-ampel-zyklus', fam: 'ampel-zyklus', cat: 'Zeit', type: 'choice',
      q: 'Eine Ampel wiederholt immer denselben Ablauf: 30 Sekunden Grün, 3 Sekunden Gelb, 45 Sekunden Rot, 2 Sekunden Rot und Gelb. Gerade ist sie auf Grün gesprungen. Was zeigt sie genau 100 Sekunden später?',
      opts: ['Grün', 'Gelb', 'Rot', 'Rot und Gelb'], a: 0, r: [2, 1, 1, 1, 0],
      ex: 'Ein Durchlauf dauert 30 + 3 + 45 + 2 = 80 Sekunden. Nach 100 Sekunden läuft also schon seit 20 Sekunden die nächste Grünphase.' },
    { id: 'a2a-abpfiff', fam: 'spielzeit-mit-pause', cat: 'Zeit', type: 'choice',
      q: 'Ein Fußballspiel wird um 15:30 Uhr angepfiffen. Gespielt werden zweimal 45 Minuten, dazwischen liegt eine Halbzeitpause von 15 Minuten. Nachspielzeit gibt es nicht. Wann ist Abpfiff?',
      opts: ['17:15 Uhr', '17:00 Uhr', '17:30 Uhr', '16:45 Uhr'], a: 0, r: [2, 0, 1, 1, 0],
      ex: '45 + 15 + 45 = 105 Minuten, also 1 Stunde 45 Minuten nach 15:30 Uhr: Abpfiff ist um 17:15 Uhr.' },
    { id: 'a2a-eigentor', fam: 'eigentor-zaehlen', cat: 'Logik', type: 'choice',
      q: 'Beim Fußball trifft Mannschaft A zweimal ins gegnerische Tor. Mannschaft B trifft einmal ins gegnerische Tor und einmal ins eigene. Wie lautet das Endergebnis (A : B)?',
      opts: ['3:1', '2:2', '2:1', '3:2'], a: 0, r: [1, 1, 2, 0, 0],
      ex: 'Ein Eigentor zählt für den Gegner. A hat also 2 + 1 = 3 Tore, B nur 1.' },
    { id: 'a2a-zwei-uhren', fam: 'zwei-uhren-falsch', cat: 'Zeit', type: 'choice',
      q: 'Die Kirchturmuhr geht 10 Minuten vor, deine Armbanduhr geht 5 Minuten nach. Gerade zeigt die Kirchturmuhr genau 12:00 Uhr. Was zeigt deine Armbanduhr?',
      opts: ['11:45 Uhr', '11:55 Uhr', '12:05 Uhr', '12:15 Uhr'], a: 0, r: [2, 1, 1, 1, 0],
      ex: 'Wirklich ist es 10 Minuten früher als bei der Kirchturmuhr, also 11:50 Uhr. Deine Uhr zeigt noch 5 Minuten weniger: 11:45 Uhr.' },
    { id: 'a2a-schach-reihe', fam: 'schach-grundreihe', cat: 'Logik', type: 'text',
      q: 'Welcher Buchstabe kommt als Nächstes?' + seq(['T', 'S', 'L', 'D', 'K', 'L', 'S', '?']),
      a: 'T', letters: true, r: [1, 2, 0, 0, 1],
      ex: 'Das sind die Schachfiguren der Grundreihe: Turm, Springer, Läufer, Dame, König, Läufer, Springer – und zum Schluss wieder ein Turm. Bis auf Dame und König in der Mitte ist die Reihe spiegelbildlich.' },
    { id: 'a2a-puzzle-rand', fam: 'puzzle-randteile', cat: 'Logik', type: 'number',
      q: 'Ein rechteckiges Puzzle besteht aus 10 mal 10 Teilen. Wie viele Teile liegen am Rand, haben also mindestens eine gerade Kante?',
      a: 36, r: [1, 1, 2, 1, 0],
      ex: 'Innen liegen 8 × 8 = 64 Teile ohne gerade Kante, also gibt es 100 − 64 = 36 Randteile. Wer 4 × 10 = 40 rechnet, zählt die vier Ecken doppelt.' },
    { id: 'a2a-schere-stein-papier', fam: 'schere-stein-papier-drei', cat: 'Logik', type: 'number',
      q: 'Drei Kinder spielen gleichzeitig Schere, Stein, Papier – das ergibt 27 mögliche Kombinationen. Unentschieden ist es, wenn alle dasselbe zeigen oder wenn alle drei Zeichen vorkommen. Bei wie vielen der 27 Kombinationen ist es unentschieden?',
      a: 9, r: [2, 1, 1, 1, 0],
      ex: 'Alle gleich geht auf 3 Arten (dreimal Schere, Stein oder Papier). Alle verschieden geht auf 3 × 2 × 1 = 6 Arten. Zusammen 9.' },

    // ---------- schwer ----------
    { id: 'a2a-notenschnitt', fam: 'avg-needed', cat: 'Logik', type: 'number',
      q: 'Ina hatte in ihren bisherigen Klassenarbeiten genau den Notenschnitt 2,0 (alle Arbeiten zählen gleich). Dann schreibt sie eine 5, und ihr Schnitt liegt jetzt bei genau 2,5. Wie viele Arbeiten hat sie jetzt insgesamt geschrieben?',
      a: 6, r: [2, 2, 1, 1, 0],
      ex: 'Die 5 ist 3 Notenstufen schlechter als der alte Schnitt 2,0. Verteilt auf alle Arbeiten verschlechtert sie den Schnitt um 0,5 – das geht nur, wenn 3 : 0,5 = 6 Arbeiten mitzählen (5 bisherige plus die neue).' },
    { id: 'a2a-vorsprung', fam: 'vorsprung-kette', cat: 'Logik', type: 'number',
      q: 'Über 100 m ist Anna im Ziel, wenn Ben erst 90 m gelaufen ist, und Ben ist im Ziel, wenn Cem erst 90 m gelaufen ist. Jeder läuft stets gleichmäßig. Jetzt laufen Anna und Cem gegeneinander 100 m. Wie viele Meter fehlen Cem noch, wenn Anna im Ziel ist?',
      a: 19, r: [2, 2, 2, 1, 0],
      ex: 'Cem schafft immer 90 % von Bens Strecke, Ben 90 % von Annas. Während Anna 100 m läuft, kommt Cem auf 90 % von 90 m = 81 m – es fehlen 19 m, nicht 20.' },
    { id: 'a2a-datum-vertauscht', fam: 'datum-tag-monat-vertauscht', cat: 'Zeit', type: 'number',
      q: 'Lisa notiert Daten als Tag.Monat, Tom liest sie als Monat.Tag – aus Lisas 3.5. (3. Mai) wird für ihn der 5. März. An wie vielen Tagen eines Jahres ergibt Lisas Notiz für Tom ein gültiges, aber falsches Datum?',
      a: 132, r: [2, 2, 2, 1, 0],
      ex: 'Toms „Monat“ muss höchstens 12 sein, das klappt nur an den Tagen 1 bis 12 jedes Monats: 12 × 12 = 144. Bei den 12 Daten wie 7.7. liest er richtig, also 144 − 12 = 132.' },
    { id: 'a2a-sonntage-gerade', fam: 'sonntage-gerade-daten', cat: 'Zeit', type: 'text',
      q: 'In einem Monat fallen genau drei Sonntage auf ein gerades Datum. Auf welchen Wochentag fällt der 25. dieses Monats?',
      a: 'DIENSTAG', r: [3, 2, 1, 1, 0],
      ex: 'Die Sonntage wechseln zwischen geraden und ungeraden Daten, drei gerade gibt es also nur bei fünf Sonntagen, deren erster auf ein gerades Datum fällt. Fünf Sonntage hat ein Monat nur, wenn der erste spätestens am 3. ist – also sind es der 2., 9., 16., 23. und 30., und der 25. ist ein Dienstag.' },
    { id: 'a2a-rabatt-aufteilen', fam: 'rabatt-aufteilen', cat: 'Logik', type: 'number',
      q: 'Ein Laden zieht bei jedem Einkauf ab 50 € genau 10 € ab. Du willst 12 Bücher zu je 10 € kaufen und darfst sie beliebig auf mehrere Einkäufe verteilen. Wie viele Euro zahlst du mindestens?',
      a: 100, r: [2, 2, 1, 1, 0],
      ex: 'Jeder Rabatt braucht mindestens 5 Bücher, bei 12 Büchern sind also höchstens zwei Rabatte drin, etwa mit 6 + 6 Büchern. Das macht 120 − 20 = 100 €.' },
    { id: 'a2a-elfmeter', fam: 'elfmeter-frueh-entschieden', cat: 'Logik', type: 'number',
      q: 'Beim Elfmeterschießen schießen zwei Mannschaften abwechselnd, jede höchstens fünfmal. Es endet, sobald eine Mannschaft die andere auch mit allen restlichen Schüssen nicht mehr einholen kann. Nach wie vielen Schüssen insgesamt kann es frühestens vorbei sein?',
      a: 6, r: [2, 2, 1, 2, 0],
      ex: 'Trifft die erste Mannschaft dreimal und die zweite dreimal nicht, steht es 3:0 und die zweite hat nur noch 2 Schüsse – nach 6 Schüssen ist Schluss. Nach 5 Schüssen hätte sie noch 3 Schüsse zum Ausgleich.' },
    { id: 'a2a-rueckwaerts-uhr', fam: 'uhren-auseinander', cat: 'Zeit', type: 'number',
      q: 'Eine Zeigeruhr läuft genauso schnell wie eine normale – aber rückwärts. Um 12 Uhr zeigt sie die richtige Zeit. Nach wie vielen Stunden zeigt sie zum ersten Mal wieder die richtige Uhrzeit?',
      a: 6, r: [2, 2, 2, 1, 0],
      ex: 'Echte Zeit und Uhr entfernen sich gleich schnell in entgegengesetzter Richtung von der 12. Sie treffen sich nach je einem halben Umlauf bei der 6 – also nach 6 Stunden.' },

    // ---------- sehr schwer ----------
    { id: 'a2a-schalttag-2100', fam: 'schalttag-geburtstag', cat: 'Zeit', type: 'number',
      q: 'Mila wird am 29. Februar 2088 geboren. Wie alt wird sie an ihrem dritten echten Geburtstag, also am dritten 29. Februar nach ihrer Geburt?',
      a: 16, r: [2, 2, 3, 1, 1],
      ex: 'Die echten Geburtstage sind 2092 und 2096 – aber 2100 ist als volles Jahrhundert, das nicht durch 400 teilbar ist, kein Schaltjahr. Der dritte 29. Februar kommt erst 2104: Dann wird sie 16.' },
    { id: 'a2a-nim', fam: 'streichholz-nim', cat: 'Logik', type: 'number',
      q: 'Auf dem Tisch liegen 20 Streichhölzer. Ihr nehmt abwechselnd 1, 2 oder 3 Hölzer weg. Wer das letzte Holz nehmen muss, verliert. Du fängst an. Wie viele Hölzer musst du nehmen, um bei klugem Weiterspielen sicher zu gewinnen?',
      a: 3, r: [2, 3, 2, 1, 0],
      ex: 'Wer bei 17, 13, 9, 5 oder 1 Hölzern am Zug ist, verliert, denn der andere ergänzt jeden Zug auf 4. Also nimmst du 3 und lässt 17 liegen.' },
    { id: 'a2a-gruppe-sicher', fam: 'gruppe-sicher-weiter', cat: 'Logik', type: 'number',
      q: 'In einer Gruppe spielen vier Mannschaften jede einmal gegen jede. Ein Sieg bringt 3 Punkte, ein Unentschieden beiden je 1. Wie viele Punkte braucht eine Mannschaft mindestens, damit sicher höchstens eine andere gleich viele oder mehr hat?',
      a: 7, r: [3, 2, 2, 2, 0],
      ex: 'Mit 6 Punkten reicht es nicht: Drei Teams schlagen sich reihum und alle das vierte – dann haben drei je 6. Für dreimal 7 Punkte bräuchte man 21, die 6 Spiele bringen aber höchstens 18.' },
    { id: 'a2a-treppe', fam: 'treppe-schrittarten', cat: 'Logik', type: 'number',
      q: 'Eine Treppe hat 8 Stufen. Bei jedem Schritt nimmst du entweder eine oder zwei Stufen auf einmal. Auf wie viele verschiedene Arten kannst du die Treppe hinaufgehen?',
      a: 34, r: [3, 3, 1, 2, 0],
      ex: 'Auf Stufe n kommst du von Stufe n − 1 oder n − 2, also addieren sich jeweils die beiden vorigen Anzahlen: 1, 2, 3, 5, 8, 13, 21, 34.' },
    { id: 'a2a-gutschein', fam: 'gutschein-reihenfolge', cat: 'Logik', type: 'number',
      q: 'Ein Pullover ist um 20 % reduziert, und du hast zusätzlich einen 10-€-Gutschein. Die Kasse kann den Gutschein vor oder nach dem Rabatt abziehen. Um wie viele Euro unterscheiden sich die beiden Endpreise?',
      a: 2, r: [2, 3, 2, 1, 0],
      ex: 'Zieht die Kasse den Gutschein zuerst ab, gelten die 20 % Rabatt nicht mehr für diese 10 € – dir entgehen 20 % von 10 € = 2 €. Das gilt bei jedem Preis, solange der Gutschein voll angerechnet wird.' },
    { id: 'a2a-kalenderwuerfel', fam: 'kalenderwuerfel', cat: 'Logik', type: 'number',
      q: 'Ein Tischkalender zeigt mit zwei Würfeln jeden Tag von 01 bis 31. Auf jeder der zwölf Seiten steht eine Ziffer, die 6 kann umgedreht auch als 9 dienen. Wie viele Ziffern kommen auf beiden Würfeln vor – auf dem einen und auch auf dem anderen?',
      a: 3, r: [3, 3, 1, 2, 0],
      ex: 'Stünde die 0 nur auf einem Würfel, bräuchte der andere für 01 bis 09 die Ziffern 1 bis 8 (die 9 ist die umgedrehte 6) – 8 Ziffern auf nur 6 Seiten. Also hat jeder Würfel eine 0 und wegen 11 und 22 auch je eine 1 und eine 2; die übrigen 6 Seiten reichen genau für 3, 4, 5, 6, 7 und 8 – doppelt stehen nur 0, 1 und 2.' },
  ]);
})();

// ---- alltag2b.js ----
(function () {
  QUIZ_ADD([
    // ---------- leicht ----------
    { id: 'a2b-huhn-waage', fam: 'gewicht-bein-hochziehen', cat: 'Logik', type: 'number',
      q: 'Ein Huhn steht mit beiden Beinen auf einer Waage, sie zeigt 2 kg. Dann zieht es ein Bein hoch und steht nur noch auf dem anderen. Wie viele Kilogramm zeigt die Waage jetzt?',
      a: 2, r: [1, 0, 1, 0, 0],
      ex: 'Das Huhn wird nicht leichter, nur weil es auf einem Bein steht. Die Waage zeigt weiter 2 kg.' },
    { id: 'a2b-zug-rueckwaerts', fam: 'sitz-gegen-fahrtrichtung', cat: 'Logik', type: 'text',
      q: 'Du sitzt in einem Zug, der genau nach Westen fährt. Dein Platz ist entgegen der Fahrtrichtung, und du schaust geradeaus. In welche Himmelsrichtung schaust du?',
      a: 'OSTEN', accept: ['OST', 'OSTWÄRTS'], r: [1, 1, 0, 0, 0],
      ex: 'Wer entgegen der Fahrtrichtung sitzt, schaut nach hinten – also genau entgegengesetzt zu Westen: nach Osten.' },
    { id: 'a2b-flasche', fam: 'comb', cat: 'Logik', type: 'text',
      q: 'Was hat einen Hals, aber keinen Kopf – und oft steckt ein Korken darin?',
      a: 'FLASCHE', accept: ['FLASCHEN', 'KARAFFE'], contains: ['FLASCHE'], r: [1, 1, 0, 0, 0],
      ex: 'Die Flasche: Ihr schmaler oberer Teil heißt Flaschenhals, darin steckt oft ein Korken – einen Kopf wie ein Lebewesen hat sie nicht.' },
    { id: 'a2b-rechte-hand', fam: 'eigene-hand-dreht-mit', cat: 'Logik', type: 'choice',
      q: 'Du hebst deine rechte Hand. Dann drehst du dich um, sodass du in die Gegenrichtung schaust. Welche Hand hältst du jetzt hoch?',
      opts: ['Die rechte', 'Die linke', 'Kommt auf die Blickrichtung an'], a: 0, noShuffle: true, r: [0, 1, 1, 0, 0],
      ex: 'Deine Hände drehen sich mit dir mit. Die erhobene Hand bleibt deine rechte – egal, wohin du schaust.' },
    { id: 'a2b-milch', fam: 'milchfarbe-fell', cat: 'Logik', type: 'choice',
      q: 'Auf einer Weide stehen drei schwarze und zwei braune Kühe. Welche Farbe hat die Milch der schwarzen Kühe?',
      opts: ['Weiß', 'Schwarz', 'Grau', 'Braun'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Kuhmilch ist immer weiß – ganz egal, welche Farbe das Fell der Kuh hat.' },
    { id: 'a2b-parkbank', fam: 'einschlafen-bleibt-sitzen', cat: 'Logik', type: 'number',
      q: 'Auf einer Parkbank sitzen fünf Leute. Zwei von ihnen schlafen ein. Wie viele Leute sitzen jetzt auf der Bank?',
      a: 5, r: [1, 0, 1, 0, 0],
      ex: 'Wer einschläft, sitzt trotzdem weiter auf der Bank. Es sind immer noch fünf Leute.' },

    // ---------- mittel ----------
    { id: 'a2b-weihnachten-sommer', fam: 'weihnachten-suedhalbkugel', cat: 'Logik', type: 'choice',
      q: 'In Australien ist im Dezember Sommer und im Juni Winter. In welchem Monat feiern die meisten Menschen dort Weihnachten?',
      opts: ['Im Dezember', 'Im Juni', 'Im Juli', 'Im Januar'], a: 0, r: [1, 1, 2, 0, 0],
      ex: 'Weihnachten hängt am Datum, nicht an der Jahreszeit: Auch in Australien feiert man am 24./25. Dezember – eben im Sommer.' },
    { id: 'a2b-monat-28', fam: 'jeder-monat-hat-28', cat: 'Logik', type: 'number',
      q: 'Wie viele Monate eines Jahres haben einen 28. Tag?',
      a: 12, r: [1, 1, 2, 0, 0],
      ex: 'Jeder Monat hat mindestens 28 Tage, also gibt es in allen 12 Monaten einen 28. Der Februar hört nur meistens genau dort auf.' },
    { id: 'a2b-streichholz', fam: 'streichholz-zuerst', cat: 'Logik', type: 'text',
      q: 'Du hast nur ein einziges Streichholz und kommst in eine kalte, dunkle Hütte. Dort stehen eine Kerze, eine Öllampe und ein Kaminofen. Was zündest du zuerst an?',
      a: 'STREICHHOLZ', accept: ['ZÜNDHOLZ'], contains: ['STREICHHOLZ', 'ZÜNDHOLZ'], r: [1, 2, 1, 0, 0],
      ex: 'Bevor du Kerze, Lampe oder Ofen anzünden kannst, musst du zuerst das Streichholz anzünden.' },
    { id: 'a2b-glatze', fam: 'glatze-regen', cat: 'Logik', type: 'text',
      q: 'Herr Kern läuft ohne Schirm, Hut oder Kapuze durch einen heftigen Regenguss. Seine Kleidung wird klatschnass, aber kein einziges Haar auf seinem Kopf. Warum? (Ein Wort)',
      a: 'GLATZE', accept: ['GLATZKOPF', 'KAHLKOPF', 'KAHL', 'HAARLOS', 'KEINEHAARE'], contains: ['GLATZ', 'KAHL', 'HAARLOS', 'KEINEHAARE'], r: [1, 2, 1, 0, 0],
      ex: 'Herr Kern hat eine Glatze: Auf seinem Kopf gibt es gar kein Haar, das nass werden könnte.' },
    { id: 'a2b-stadionrunde', fam: 'runde-zurueck-am-start', cat: 'Logik', type: 'number',
      q: 'Eine Läuferin startet an der Startlinie einer 400-m-Bahn und läuft genau eine Runde. Wie viele Meter ist sie danach von ihrem Startpunkt entfernt?',
      a: 0, r: [1, 2, 2, 0, 0],
      ex: 'Nach genau einer Runde steht sie wieder an ihrem Startpunkt. Gelaufen ist sie 400 m, entfernt ist sie 0 m.' },
    { id: 'a2b-letzten-ueberholen', fam: 'race', cat: 'Logik', type: 'choice',
      q: 'Bei einem Lauf quer durch die Stadt (ohne Runden) überholst du die Person, die gerade auf dem letzten Platz liegt. Auf welchem Platz bist du danach?',
      opts: ['Das geht gar nicht', 'Auf dem vorletzten', 'Auf dem letzten', 'Kommt auf die Teilnehmerzahl an'], a: 0, r: [1, 2, 1, 0, 0],
      ex: 'Hinter der Person auf dem letzten Platz ist niemand. Du kannst also gar nicht von hinten kommen und sie überholen.' },
    { id: 'a2b-everest', fam: 'vermessen-aendert-nichts', cat: 'Logik', type: 'choice',
      q: 'Welcher Berg war der höchste der Erde, bevor man den Mount Everest vermessen und als höchsten Berg erkannt hatte?',
      opts: ['Der Mount Everest', 'Der K2', 'Der Mont Blanc', 'Der Kilimandscharo'], a: 0, r: [1, 2, 2, 0, 0],
      ex: 'Ein Berg wird nicht höher, nur weil man ihn vermessen hat. Der Mount Everest war schon vorher der höchste – man wusste es nur noch nicht.' },

    // ---------- schwer ----------
    { id: 'a2b-treffpunkt', fam: 'treffpunkt-gleich-weit', cat: 'Logik', type: 'choice',
      q: 'Lea radelt mit 25 km/h von Bonn nach Köln. Zur selben Zeit geht Tom auf demselben Weg mit 5 km/h von Köln nach Bonn. Wer von beiden ist näher an Köln, wenn sie sich treffen?',
      opts: ['Beide sind gleich weit entfernt', 'Lea', 'Tom', 'Kommt auf die Strecke an'], a: 0, r: [1, 2, 3, 0, 0],
      ex: 'Wenn sie sich treffen, stehen beide an derselben Stelle – also gleich weit von Köln entfernt. Das Tempo bestimmt nur, wo diese Stelle liegt.' },
    { id: 'a2b-keine-zwillinge', fam: 'keine-zwillinge', cat: 'Logik', type: 'text',
      q: 'Paula und Pia wurden von derselben Mutter am selben Tag geboren, nur wenige Minuten nacheinander. Trotzdem sind die beiden keine Zwillinge. Wie ist das möglich? (Ein Wort)',
      a: 'DRILLINGE', accept: ['DRILLING', 'VIERLINGE', 'MEHRLINGE'], contains: ['DRILLING', 'VIERLING', 'FÜNFLING', 'MEHRLING'], r: [1, 3, 2, 0, 0],
      ex: 'Sie sind zwei von Drillingen (oder sogar Vierlingen): Bei drei Kindern aus einer Geburt spricht man nicht mehr von Zwillingen.' },
    { id: 'a2b-kaese-wiegen', fam: 'was-wiegt-sie', cat: 'Logik', type: 'text',
      q: 'Frau Berg verkauft auf dem Wochenmarkt Käse. Sie ist 1,68 m groß, 45 Jahre alt und trägt Schuhgröße 39. Was wiegt sie?',
      a: 'KÄSE', contains: ['KÄSE'], r: [1, 3, 2, 0, 0],
      ex: '„Was wiegt sie?“ kann man zweifach verstehen. Wie schwer sie selbst ist, lässt sich aus Größe, Alter und Schuhgröße gar nicht bestimmen. Gemeint ist, was sie an ihrem Stand auf die Waage legt: Käse.' },
    { id: 'a2b-wanderin', fam: 'auf-und-ab-treffpunkt', cat: 'Logik', type: 'number',
      q: 'Eine Wanderin steigt an einem Tag von 8 bis 16 Uhr auf einen Berg, am nächsten Tag von 8 bis 12 Uhr denselben Weg hinab – Tempo und Pausen beliebig. Wie viele Stellen des Weges gibt es mindestens, an denen sie an beiden Tagen zur selben Uhrzeit ist?',
      a: 1, r: [2, 3, 2, 0, 0],
      ex: 'Stell dir beide Tage gleichzeitig vor: Eine Wanderin geht hinauf, eine kommt herunter. Auf demselben Weg treffen sie sich irgendwo – an dieser Stelle ist sie an beiden Tagen zur selben Uhrzeit. Mehr als eine solche Stelle ist nicht garantiert.' },
    { id: 'a2b-mitternacht-72', fam: 'mitternacht-72-stunden', cat: 'Logik', type: 'number',
      q: 'In Hamburg ist es genau Mitternacht, und es regnet. Ab dem kommenden Morgen ist eine Woche lang wolkenloser Himmel vorhergesagt – und das trifft auch ein. Wie viel Prozent beträgt die Chance, dass genau 72 Stunden nach jetzt in Hamburg die Sonne scheint?',
      a: 0, r: [2, 2, 3, 0, 0],
      ex: '72 Stunden später ist es in Hamburg wieder mitten in der Nacht (auch bei einer Zeitumstellung höchstens eine Stunde daneben) – und nachts scheint dort keine Sonne, auch bei wolkenlosem Himmel nicht.' },

    // ---------- sehr schwer ----------
    { id: 'a2b-strickleiter', fam: 'boot-steigt-mit-flut', cat: 'Logik', type: 'number',
      q: 'Ein Boot schwimmt im Hafen. An seiner Seite hängt eine Strickleiter, deren unterste 3 Sprossen unter Wasser sind. Die Sprossen liegen 25 cm auseinander. Bei Flut steigt das Wasser um 1 m. Wie viele Sprossen sind dann unter Wasser?',
      a: 3, r: [2, 3, 3, 1, 0],
      ex: 'Das Boot schwimmt und hebt sich mit dem Wasser – die Leiter steigt mit. Es bleiben 3 Sprossen unter Wasser, nicht 3 + 4 = 7.' },
    { id: 'a2b-hut-im-fluss', fam: 'hut-im-fluss', cat: 'Logik', type: 'number',
      q: 'Ein Ruderer fährt flussaufwärts. Unbemerkt fällt sein Hut ins Wasser und treibt mit der Strömung davon. 10 Minuten später bemerkt er es, wendet sofort und rudert gleich kräftig flussabwärts. Nach wie vielen Minuten erreicht er den Hut?',
      a: 10, r: [2, 3, 2, 1, 0],
      ex: 'Die Strömung trägt Boot und Hut gleich mit. Vom Wasser aus gesehen liegt der Hut still, und das Boot entfernt sich 10 Minuten lang und kommt gleich schnell zurück – also wieder 10 Minuten.' },
    { id: 'a2b-muenze-v-chr', fam: 'v-chr-aufschrift', cat: 'Logik', type: 'number',
      q: 'Ein Händler bietet eine Münze an, auf der „37 v. Chr.“ eingeprägt ist – angeblich wurde sie genau in diesem Jahr geprägt. Wie viele echte Münzen, die im Jahr 37 vor Christus mit genau dieser Aufschrift geprägt wurden, kann es höchstens geben?',
      a: 0, r: [2, 3, 2, 0, 1],
      ex: 'Im Jahr 37 vor Christus konnte niemand wissen, dass man später ab Christi Geburt zählen würde. Eine Münze mit „v. Chr.“ kann damals nicht geprägt worden sein – es gibt also keine einzige echte.' },
    { id: 'a2b-busfahrer', fam: 'busfahrer-zaehlt-mit', cat: 'Logik', type: 'number',
      q: 'Du fährst einen Bus, der ohne Fahrgäste losfährt. Erste Haltestelle: 9 steigen ein. Zweite: 4 aus, 6 ein. Dritte: 7 aus, 2 ein. Vierte: 3 aus, 5 ein. Wie viele Menschen sind jetzt im Bus?',
      a: 9, r: [2, 2, 3, 2, 0],
      ex: 'Es sind 9 − 4 + 6 − 7 + 2 − 3 + 5 = 8 Fahrgäste – und dazu du selbst als Fahrer. Im Bus sind also 9 Menschen.' },
    { id: 'a2b-haus-nordpol', fam: 'haus-am-nordpol', cat: 'Logik', type: 'text',
      q: 'Jemand baut ein Haus mit vier Wänden und in jeder Wand ein Fenster – alle vier Fenster zeigen nach Süden. Da läuft ein Bär am Haus vorbei. Welche Farbe hat sein Fell?',
      a: 'WEISS', accept: ['WEIß', 'FARBLOS', 'TRANSPARENT'], contains: ['WEISS'], r: [2, 3, 2, 0, 1],
      ex: 'Nur am Nordpol zeigt jede Richtung nach Süden. Ein Bär so weit im Norden kann nur ein Eisbär sein – sein Fell sieht weiß aus (die einzelnen Haare sind eigentlich farblos).' },
    { id: 'a2b-seil-masten', fam: 'seil-durchhang', cat: 'Logik', type: 'number',
      q: 'Ein 20 m langes Seil ist an den Spitzen zweier 15 m hoher Masten befestigt. Sein tiefster Punkt hängt 5 m über dem Boden. Wie viele Meter stehen die beiden Masten auseinander?',
      a: 0, r: [2, 3, 2, 1, 0],
      ex: 'Das Seil hängt 10 m durch: 10 m hinunter und 10 m wieder hinauf verbrauchen schon alle 20 m – das geht nur senkrecht. Die Masten (als dünne Stangen gedacht) stehen also direkt aneinander, 0 m auseinander.' },
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

// ---- bilder2a.js ----
// Paket bilder2a – Zählen im Bild: Dreiecke, Quadrate, Rechtecke, Schnittpunkte, Ecken, Flächen,
// Würfel in Stapeln, Linienzüge. Alle Grafiken werden hier als SVG erzeugt.
(function () {
  const { svg } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // ---------- kleine Bausteine ----------
  const PINK = '#ff7ab6', CYAN = '#22d3ee', GOLD = '#ffc940', WHITE = '#f3f4ff', VIOLET = '#a78bfa', DARK = '#1a1240';
  const f1 = (v) => Math.round(v * 10) / 10;
  const pts = (arr) => arr.map(([x, y]) => `${f1(x)},${f1(y)}`).join(' ');
  const ln = (x1, y1, x2, y2, extra = '') => `<line class="ln" x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}"${extra ? ' ' + extra : ''}/>`;
  const line = (x1, y1, x2, y2, col, w = 3, cap = 'round') => `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke="${col}" stroke-width="${w}" stroke-linecap="${cap}"/>`;
  const tx = (x, y, t, size = 16) => `<text class="tx" x="${f1(x)}" y="${f1(y)}" text-anchor="middle" font-size="${size}" font-weight="700">${t}</text>`;
  const poly = (arr, extra) => `<polygon points="${pts(arr)}" ${extra}/>`;
  const lnPoly = (arr) => `<polygon class="ln" points="${pts(arr)}"/>`;
  const ngon = (cx, cy, r, n, rot = -90) => Array.from({ length: n }, (_, i) => {
    const a = (rot + i * 360 / n) * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });

  // Isometrie: Betrachter schaut von (+x,+y,+z); sichtbar sind oben (+z), rechts (+x) und links (+y).
  const isoP = (ox, oy, c) => {
    const a = c * Math.cos(Math.PI / 6), b = c * 0.5;
    return (x, y, z) => [ox + (x - y) * a, oy + (x + y) * b - z * c];
  };
  function isoCubes(list, { ox = 110, oy = 100, c = 30, top = '#a5f3fc', left = '#22d3ee', right = '#0e7490', stroke = '#0a0d24' } = {}) {
    const P = isoP(ox, oy, c);
    const sorted = [...list].sort((p, q) => (p[0] + p[1] + p[2]) - (q[0] + q[1] + q[2]) || p[2] - q[2]);
    const st = `stroke="${stroke}" stroke-width="1.6" stroke-linejoin="round"`;
    let s = '';
    for (const [x, y, z] of sorted) {
      s += poly([P(x, y, z + 1), P(x + 1, y, z + 1), P(x + 1, y + 1, z + 1), P(x, y + 1, z + 1)], `fill="${top}" ${st}`);
      s += poly([P(x + 1, y, z), P(x + 1, y + 1, z), P(x + 1, y + 1, z + 1), P(x + 1, y, z + 1)], `fill="${right}" ${st}`);
      s += poly([P(x, y + 1, z), P(x + 1, y + 1, z), P(x + 1, y + 1, z + 1), P(x, y + 1, z + 1)], `fill="${left}" ${st}`);
    }
    return { s, P };
  }

  // ---------- Grafiken ----------

  // L: vier Kreise in einer Kette
  function svgKreiskette() {
    const cols = [CYAN, PINK, GOLD, VIOLET];
    return svg('0 0 262 120', [45, 102, 159, 216].map((x, i) =>
      `<circle cx="${x}" cy="60" r="36" fill="none" stroke="${cols[i]}" stroke-width="3.5"/>`).join(''));
  }

  // L: liegendes Dreiecksprisma, verdeckte Kanten gestrichelt
  function svgPrisma() {
    const h = 86.6, d = [80, -45];
    const F1 = [30, 160], F2 = [130, 160], F3 = [80, 160 - h];
    const [B1, B2, B3] = [F1, F2, F3].map(([x, y]) => [x + d[0], y + d[1]]);
    let s = poly([F2, F3, B3, B2], `fill="rgba(34,211,238,.28)"`) + poly([F1, F2, F3], `fill="rgba(255,122,182,.30)"`);
    const dash = `stroke="${WHITE}" stroke-width="2.5" stroke-dasharray="7 6"`;
    s += `<line x1="${B1[0]}" y1="${B1[1]}" x2="${B2[0]}" y2="${B2[1]}" ${dash}/><line x1="${B1[0]}" y1="${B1[1]}" x2="${f1(B3[0])}" y2="${f1(B3[1])}" ${dash}/><line x1="${F1[0]}" y1="${F1[1]}" x2="${B1[0]}" y2="${B1[1]}" ${dash}/>`;
    for (const [p, q] of [[F1, F2], [F2, F3], [F3, F1], [F2, B2], [F3, B3], [B2, B3]]) s += ln(...p, ...q);
    return svg('0 0 240 180', s);
  }

  // L: vier Würfel – drei in einer Reihe, einer auf dem hinteren
  function svgWuerfelT() {
    return svg('0 0 220 160', isoCubes([[0, 0, 0], [1, 0, 0], [2, 0, 0], [0, 0, 1]], { ox: 90, oy: 80, c: 34 }).s);
  }

  // L: Pluszeichen
  function svgKreuz() {
    return svg('0 0 200 180', poly([[75, 15], [125, 15], [125, 65], [175, 65], [175, 115], [125, 115], [125, 165], [75, 165], [75, 115], [25, 115], [25, 65], [75, 65]],
      `fill="${CYAN}" stroke="${WHITE}" stroke-width="2" stroke-linejoin="round"`));
  }

  // L: Diagonale durch ein 4 × 3-Gitter
  function svgDiagGitter() {
    const k = 44, x0 = 20, y0 = 14, W = 4, H = 3;
    let s = '';
    for (let i = 0; i <= W; i++) s += ln(x0 + i * k, y0, x0 + i * k, y0 + H * k);
    for (let j = 0; j <= H; j++) s += ln(x0, y0 + j * k, x0 + W * k, y0 + j * k);
    s += line(x0, y0 + H * k, x0 + W * k, y0, GOLD, 4);
    return svg('0 0 216 160', s);
  }

  // M: Hexagramm aus zwei Dreiecken
  function svgHexagramm() {
    return svg('0 0 220 210', lnPoly(ngon(110, 105, 94, 3, -90)) + lnPoly(ngon(110, 105, 94, 3, 90)));
  }

  // M: drei ineinander gesetzte Quadrate (jeweils durch die Seitenmitten)
  function svgQuadratImQuadrat() {
    return svg('0 0 200 200', lnPoly([[20, 20], [180, 20], [180, 180], [20, 180]]) +
      lnPoly([[100, 20], [180, 100], [100, 180], [20, 100]]) + lnPoly([[60, 60], [140, 60], [140, 140], [60, 140]]));
  }

  // M: Haus vom Nikolaus
  function svgNikolaus() {
    const a = 40, b = 160, t = 80, u = 200;
    return svg('0 0 200 214', lnPoly([[a, t], [b, t], [b, u], [a, u]]) + ln(a, t, b, u) + ln(b, t, a, u) + ln(a, t, 100, 18) + ln(100, 18, b, t));
  }

  // M: Gitter (#) mit zwei Diagonalen
  function svgGitterDiagonalen() {
    let s = ln(80, 20, 80, 200) + ln(140, 20, 140, 200) + ln(20, 80, 200, 80) + ln(20, 140, 200, 140);
    s += line(20, 20, 200, 200, GOLD, 3.5) + line(200, 20, 20, 200, GOLD, 3.5);
    return svg('0 0 220 220', s);
  }

  // M: 2 × 2-Gitter mit Raute durch die Seitenmitten
  function svgRauteImGitter() {
    let s = lnPoly([[20, 20], [180, 20], [180, 180], [20, 180]]) + ln(100, 20, 100, 180) + ln(20, 100, 180, 100);
    s += lnPoly([[100, 20], [180, 100], [100, 180], [20, 100]]);
    return svg('0 0 200 200', s);
  }

  // M: Siebenstern aus einer einzigen geschlossenen Linie
  function svgSiebenstern() {
    const V = ngon(110, 110, 96, 7);
    const order = [0, 2, 4, 6, 1, 3, 5].map(i => V[i]);
    return svg('0 0 220 214', `<polygon points="${pts(order)}" fill="none" stroke="${GOLD}" stroke-width="3" stroke-linejoin="round"/>`);
  }

  // S: L-förmiger Körper
  function svgLKoerper() {
    const P = isoP(70, 125, 36);
    const st = `stroke="#0a0d24" stroke-width="2" stroke-linejoin="round"`;
    let s = '';
    s += poly([[0, 0], [3, 0], [3, 1], [1, 1], [1, 3], [0, 3]].map(([x, z]) => P(x, 1, z)), `fill="#22d3ee" ${st}`); // vorn (L)
    s += poly([P(1, 0, 1), P(3, 0, 1), P(3, 1, 1), P(1, 1, 1)], `fill="#a5f3fc" ${st}`);   // Fuß oben
    s += poly([P(0, 0, 3), P(1, 0, 3), P(1, 1, 3), P(0, 1, 3)], `fill="#a5f3fc" ${st}`);   // Säule oben
    s += poly([P(3, 0, 0), P(3, 1, 0), P(3, 1, 1), P(3, 0, 1)], `fill="#0e7490" ${st}`);   // rechts unten
    s += poly([P(1, 0, 1), P(1, 1, 1), P(1, 1, 3), P(1, 0, 3)], `fill="#0e7490" ${st}`);   // rechts oben
    return svg('0 0 210 210', s);
  }

  // S: Würfel mit abgesägter Ecke (Schrägbild), verdeckte Kanten gestrichelt
  function svgEckeAb() {
    // x nach rechts, y nach hinten (schräg nach rechts oben), z nach oben
    const P = (x, y, z) => [28 + 110 * x + 60 * y, 186 - 110 * z - 44 * y], t = 0.4;
    const st = `stroke="${WHITE}" stroke-width="2.5" stroke-linejoin="round"`;
    const A = P(1 - t, 0, 1), B = P(1, t, 1), C = P(1, 0, 1 - t);
    const dash = (p, q) => `<line x1="${f1(p[0])}" y1="${f1(p[1])}" x2="${f1(q[0])}" y2="${f1(q[1])}" stroke="${WHITE}" stroke-width="2" stroke-dasharray="7 6"/>`;
    let s = '';
    s += poly([P(0, 0, 1), A, B, P(1, 1, 1), P(0, 1, 1)], `fill="rgba(165,243,252,.30)" ${st}`);   // oben
    s += poly([P(1, 0, 0), P(1, 1, 0), P(1, 1, 1), B, C], `fill="rgba(14,116,144,.55)" ${st}`);   // rechts
    s += dash(P(0, 1, 0), P(1, 1, 0)) + dash(P(0, 1, 0), P(0, 0, 0)) + dash(P(0, 1, 0), P(0, 1, 1));
    s += poly([P(0, 0, 0), P(1, 0, 0), C, A, P(0, 0, 1)], `fill="rgba(34,211,238,.30)" ${st}`);   // vorn
    s += poly([A, B, C], `fill="${GOLD}" ${st}`);
    return svg('0 0 210 200', s);
  }

  // S: Turm aus drei Spielwürfeln
  function svgWuerfelturm() {
    const c = 50, P = isoP(80, 165, c);
    const st = `stroke="#9b97d6" stroke-width="1.6" stroke-linejoin="round"`;
    const L = { 1: [[.5, .5]], 2: [[.75, .25], [.25, .75]], 3: [[.75, .25], [.5, .5], [.25, .75]], 4: [[.25, .25], [.75, .25], [.25, .75], [.75, .75]],
      5: [[.25, .25], [.75, .25], [.5, .5], [.25, .75], [.75, .75]], 6: [[.25, .25], [.75, .25], [.25, .5], [.75, .5], [.25, .75], [.75, .75]] };
    const pipsOn = (map, n) => L[n].map(([u, v]) => { const [x, y] = map(u, v); return `<circle cx="${f1(x)}" cy="${f1(y)}" r="4.3" fill="${DARK}"/>`; }).join('');
    // je Würfel: [oben, rechts (+x), links (+y)] – Augenzahlen eines echten Würfels
    const dice = [[null, 3, 2], [null, 4, 6], [5, 1, 3]];
    let s = '';
    dice.forEach(([tp, rt, lf], z) => {
      s += poly([P(0, 0, z + 1), P(1, 0, z + 1), P(1, 1, z + 1), P(0, 1, z + 1)], `fill="#f8f7ff" ${st}`);
      s += poly([P(1, 0, z), P(1, 1, z), P(1, 1, z + 1), P(1, 0, z + 1)], `fill="#c9c6f2" ${st}`);
      s += poly([P(0, 1, z), P(1, 1, z), P(1, 1, z + 1), P(0, 1, z + 1)], `fill="#e4e2fb" ${st}`);
      if (tp) s += pipsOn((u, v) => P(u, v, z + 1), tp);
      s += pipsOn((u, v) => P(1, u, z + 1 - v), rt) + pipsOn((u, v) => P(u, 1, z + 1 - v), lf);
    });
    s += line(4, 216, 156, 216, '#6b6fa8', 3);
    return svg('0 0 160 222', s);
  }

  // S: Quader aus 3 × 3 × 2 Würfeln, rot angemalt
  function svgBemalt() {
    const L = [];
    for (let x = 0; x < 3; x++) for (let y = 0; y < 3; y++) for (let z = 0; z < 2; z++) L.push([x, y, z]);
    return svg('0 0 220 180', isoCubes(L, { ox: 110, oy: 82, c: 30, top: '#fca5a5', left: '#ef4444', right: '#a61b1b', stroke: '#2a0b0b' }).s);
  }

  // S: zwei gleich große Quadrate, eines um 45° gedreht
  function svgAchtstern() {
    const c = 110, h = 65, r = h * Math.SQRT2;
    return svg('0 0 220 220', poly([[c - h, c - h], [c + h, c - h], [c + h, c + h], [c - h, c + h]], `fill="rgba(34,211,238,.25)" stroke="${CYAN}" stroke-width="3" stroke-linejoin="round"`) +
      poly([[c, c - r], [c + r, c], [c, c + r], [c - r, c]], `fill="rgba(255,122,182,.25)" stroke="${PINK}" stroke-width="3" stroke-linejoin="round"`));
  }

  // S: Sechseck mit den drei langen Diagonalen
  function svgSechseckDrei() {
    const V = ngon(110, 100, 95, 6, 0);
    return svg('0 0 220 200', lnPoly(V) + ln(...V[0], ...V[3]) + ln(...V[1], ...V[4]) + ln(...V[2], ...V[5]));
  }

  // S: drei gleich große Quadrate, schräg versetzt
  function svgQuadratKette() {
    const sq = (x, y) => lnPoly([[x, y], [x + 100, y], [x + 100, y + 100], [x, y + 100]]);
    return svg('0 0 240 240', sq(20, 20) + sq(70, 70) + sq(120, 120));
  }

  // V: regelmäßiges Sechseck mit allen Diagonalen
  function svgSechseckAlle() {
    const V = ngon(115, 105, 100, 6, 0);
    let s = lnPoly(V);
    for (let i = 0; i < 6; i++) for (let j = i + 2; j < 6; j++) if (!(i === 0 && j === 5)) s += line(...V[i], ...V[j], GOLD, 2.2);
    return svg('0 0 230 210', s);
  }

  // V: 3 × 3 × 3-Würfel mit drei Tunneln
  function svgTunnel() {
    const L = [];
    for (let x = 0; x < 3; x++) for (let y = 0; y < 3; y++) for (let z = 0; z < 3; z++) if ((x === 1) + (y === 1) + (z === 1) < 2) L.push([x, y, z]);
    return svg('0 0 220 200', isoCubes(L, { ox: 110, oy: 98, c: 30 }).s);
  }

  // V: Kantengerüst aus kleinen Würfeln (4 je Kante)
  function svgKantenmodell() {
    const L = [], n = 4, e = (v) => v === 0 || v === n - 1;
    for (let x = 0; x < n; x++) for (let y = 0; y < n; y++) for (let z = 0; z < n; z++) if (e(x) + e(y) + e(z) >= 2) L.push([x, y, z]);
    return svg('0 0 220 210', isoCubes(L, { ox: 110, oy: 104, c: 24, top: '#fde68a', left: '#fbbf24', right: '#b45309', stroke: '#2a1a05' }).s);
  }

  // V: Dreieck mit den drei Seitenhalbierenden
  function svgSeitenhalbierende() {
    const A = [110, 14], B = [14, 190], C = [206, 190], m = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
    return svg('0 0 220 204', lnPoly([A, B, C]) + ln(...A, ...m(B, C)) + ln(...B, ...m(A, C)) + ln(...C, ...m(A, B)));
  }

  // V: Bild aus farbigen Rechteckfeldern
  function svgFelderbild() {
    const u = 40, o = 10, X = (v) => o + v * u;
    const R = [[0, 0, 2, 2, PINK], [2, 0, 4, 2, '#1d2350'], [4, 0, 6, 1, GOLD], [4, 1, 6, 2, CYAN], [0, 2, 1, 4, GOLD], [1, 2, 2, 4, '#1d2350'], [2, 2, 6, 4, VIOLET]];
    let s = R.map(([x1, y1, x2, y2, col]) => `<rect x="${X(x1)}" y="${X(y1)}" width="${(x2 - x1) * u}" height="${(y2 - y1) * u}" fill="${col}"/>`).join('');
    const W = (x1, y1, x2, y2) => line(X(x1), X(y1), X(x2), X(y2), WHITE, 5, 'square');
    s += W(0, 0, 6, 0) + W(0, 4, 6, 4) + W(0, 0, 0, 4) + W(6, 0, 6, 4) + W(2, 0, 2, 4) + W(0, 2, 6, 2) + W(4, 0, 4, 2) + W(4, 1, 6, 1) + W(1, 2, 1, 4);
    return svg('0 0 260 180', s);
  }

  // V: 3 × 3-Gitter
  function svgGitter3() {
    let s = '';
    for (let i = 0; i <= 3; i++) s += ln(25 + i * 50, 25, 25 + i * 50, 175) + ln(25, 25 + i * 50, 175, 25 + i * 50);
    return svg('0 0 200 200', s);
  }

  QUIZ_ADD([
    // ================= leicht =================
    { id: 'b2a-kreiskette', fam: 'kreiskette-schnittpunkte', cat: 'Bilder', type: 'number',
      q: 'An wie vielen Punkten schneiden sich die Kreislinien?', svg: svgKreiskette(),
      a: 6, r: [1, 0, 0, 1, 0], ex: 'Jeder Kreis überlappt nur seine direkten Nachbarn, und zwei überlappende Kreise schneiden sich in genau 2 Punkten: 3 Nachbarpaare × 2 = 6.' },
    { id: 'b2a-prisma-kanten', fam: 'koerper-kanten', cat: 'Bilder', type: 'number',
      q: 'Wie viele Kanten hat dieser Körper? Die gestrichelten Linien sind verdeckte Kanten.', svg: svgPrisma(),
      a: 9, r: [1, 0, 1, 1, 0], ex: 'Jede der beiden Dreiecksflächen hat 3 Kanten, dazu kommen die 3 Kanten, die die beiden Dreiecke Ecke für Ecke verbinden: 3 + 3 + 3 = 9.' },
    { id: 'b2a-wuerfel-seiten', fam: 'sichtbare-wuerfelflaechen', cat: 'Bilder', type: 'number',
      q: 'Wie viele Würfelseiten kannst du auf dem Bild sehen?', svg: svgWuerfelT(),
      a: 9, r: [1, 0, 1, 1, 0], ex: 'Vorn links sieht man 4 Seiten (eine je Würfel), oben 3 (der linke untere Würfel ist oben bedeckt) und rechts 2 (die anderen liegen aneinander): 4 + 3 + 2 = 9.' },
    { id: 'b2a-kreuz-ecken', fam: 'umriss-ecken', cat: 'Bilder', type: 'number',
      q: 'Wie viele Ecken hat diese Figur? Nach innen zeigende Ecken zählen mit.', svg: svgKreuz(),
      a: 12, r: [1, 0, 0, 1, 0], ex: 'Jeder der 4 Arme hat 2 äußere Ecken (8), dazu kommen die 4 nach innen zeigenden Ecken zwischen den Armen: 12.' },
    { id: 'b2a-diagonale-gitter', fam: 'diagonale-durch-gitter', cat: 'Bilder', type: 'number',
      q: 'Durch wie viele Kästchen läuft die gelbe Linie?', svg: svgDiagGitter(),
      a: 6, r: [1, 0, 1, 1, 0], ex: 'Die Linie trifft nie genau eine Gitterecke. Sie beginnt in einem Kästchen und wechselt 3-mal nach rechts und 2-mal nach oben in ein neues: 1 + 3 + 2 = 6.' },

    // ================= mittel =================
    { id: 'b2a-hexagramm', fam: 'dreiecke-hexagramm', cat: 'Bilder', type: 'number',
      q: 'Wie viele Dreiecke siehst du?', svg: svgHexagramm(),
      a: 8, r: [1, 1, 2, 1, 0], ex: 'Die 2 großen Dreiecke, aus denen der Stern besteht, und seine 6 kleinen Zacken: 2 + 6 = 8. Das Sechseck in der Mitte ist kein Dreieck.' },
    { id: 'b2a-quadrat-im-quadrat', fam: 'quadrat-im-quadrat', cat: 'Bilder', type: 'number',
      q: 'Wie viele Dreiecke siehst du?', svg: svgQuadratImQuadrat(),
      a: 8, r: [1, 1, 1, 1, 0], ex: 'Das gedrehte Quadrat schneidet vom äußeren 4 Ecken ab, das innerste vom gedrehten noch einmal 4: 4 + 4 = 8.' },
    { id: 'b2a-nikolaus-dreiecke', fam: 'nikolaus-dreiecke', cat: 'Bilder', type: 'number',
      q: 'Wie viele Dreiecke stecken im „Haus vom Nikolaus“?', svg: svgNikolaus(),
      a: 9, r: [2, 1, 1, 2, 0], ex: '4 kleine Dreiecke um den Kreuzungspunkt, 4 große, die jeweils ein halbes Quadrat bilden, und das Dach: 4 + 4 + 1 = 9.' },
    { id: 'b2a-gitter-diagonalen', fam: 'schnittpunkte', cat: 'Bilder', type: 'number',
      q: 'An wie vielen Punkten treffen sich mindestens zwei Linien?', svg: svgGitterDiagonalen(),
      a: 5, r: [1, 1, 2, 1, 0], ex: 'Die gelben Linien treffen die weißen nur in den 4 Kreuzungen des Gitters – dort laufen jeweils drei Linien durch einen Punkt. Dazu kommt die Mitte, wo sich die beiden gelben kreuzen: 4 + 1 = 5.' },
    { id: 'b2a-raute-quadrate', fam: 'grid-3', cat: 'Bilder', type: 'number',
      q: 'Wie viele Quadrate siehst du?', svg: svgRauteImGitter(),
      a: 6, r: [1, 1, 2, 1, 0], ex: '4 kleine und 1 großes Quadrat – und die auf der Spitze stehende Figur: Sie hat 4 gleich lange Seiten und rechte Winkel, ist also auch ein Quadrat: 6.' },
    { id: 'b2a-siebenstern', fam: 'linienzug-kreuzungen', cat: 'Bilder', type: 'number',
      q: 'Der Stern ist eine einzige geschlossene Linie. An wie vielen Stellen kreuzt sie sich selbst?', svg: svgSiebenstern(),
      a: 7, r: [1, 1, 1, 1, 0], ex: 'Die Kreuzungen sind die 7 Ecken des kleinen Siebenecks in der Mitte. An den 7 Zacken knickt die Linie nur ab, dort kreuzt sie nichts.' },

    // ================= schwer =================
    { id: 'b2a-l-koerper', fam: 'koerper-flaechen', cat: 'Bilder', type: 'number',
      q: 'Wie viele Flächen hat dieser Körper? Zähle auch die, die du nicht sehen kannst.', svg: svgLKoerper(),
      a: 8, r: [2, 1, 2, 1, 0], ex: 'Vorn und hinten je eine L-förmige Fläche, dazu ringsum 6 Rechtecke – eines für jede der 6 Seiten des L: 2 + 6 = 8.' },
    { id: 'b2a-ecke-abgesaegt', fam: 'wuerfel-ecke-abgesaegt', cat: 'Bilder', type: 'number',
      q: 'Von diesem Würfel wurde eine Ecke gerade abgesägt (gelbe Schnittfläche). Wie viele Ecken hat der Körper jetzt?', svg: svgEckeAb(),
      a: 10, r: [2, 1, 2, 1, 0], ex: 'Der Würfel hatte 8 Ecken. Eine fällt weg, aber die dreieckige Schnittfläche bringt 3 neue: 8 − 1 + 3 = 10.' },
    { id: 'b2a-wuerfelturm', fam: 'verdeckte-augen-turm', cat: 'Bilder', type: 'number',
      q: 'Drei Spielwürfel stehen als Turm auf dem Tisch. Gegenüberliegende Seiten ergeben immer 7. Wie viele Augen haben die 5 Seiten, die aufeinander oder auf dem Tisch liegen, zusammen?', svg: svgWuerfelturm(),
      a: 16, r: [2, 2, 1, 2, 0], ex: 'Unter der 5 oben liegt die 2. Beim mittleren und beim unteren Würfel sind jeweils Ober- und Unterseite verdeckt, das sind je 7 Augen: 2 + 7 + 7 = 16.' },
    { id: 'b2a-bemalter-quader', fam: 'bemalter-quader', cat: 'Bilder', type: 'number',
      q: 'Der Quader aus 18 kleinen Würfeln wird rundherum rot angemalt, auch unten. Dann nimmt man ihn auseinander. Wie viele kleine Würfel haben genau zwei rote Seiten?', svg: svgBemalt(),
      a: 8, r: [2, 2, 1, 2, 0], ex: 'Jeder Würfel liegt ganz oben oder ganz unten, hat also schon eine rote Seite. Genau eine weitere haben in jeder Schicht die 4 Würfel in der Mitte der Außenkanten (die Eckwürfel haben drei): 4 + 4 = 8.' },
    { id: 'b2a-zwei-quadrate-umriss', fam: 'umriss-ecken', cat: 'Bilder', type: 'number',
      q: 'Du schneidest die beiden übereinanderliegenden Quadrate als ein Stück entlang ihres äußeren Rands aus. Wie viele Ecken hat das Stück? Nach innen zeigende Ecken zählen mit.', svg: svgAchtstern(),
      a: 16, r: [2, 1, 2, 2, 0], ex: 'Beide Quadrate ragen mit je 4 Spitzen heraus (8 Ecken), und zwischen zwei benachbarten Spitzen liegt jeweils eine nach innen zeigende Ecke (8): 16.' },
    { id: 'b2a-sechseck-vierecke', fam: 'vierecke-im-sechseck', cat: 'Bilder', type: 'number',
      q: 'Wie viele Vierecke siehst du?', svg: svgSechseckDrei(),
      a: 12, r: [2, 2, 2, 1, 0], ex: '6 Rauten aus je zwei benachbarten Dreiecken und 6 Trapeze aus je drei – jede der 3 langen Diagonalen teilt das Sechseck in 2 solche Hälften: 6 + 6 = 12.' },
    { id: 'b2a-quadrat-kette', fam: 'quadrate-ueberlappt', cat: 'Bilder', type: 'number',
      q: 'Wie viele Quadrate siehst du?', svg: svgQuadratKette(),
      a: 7, r: [2, 2, 2, 1, 0], ex: 'Die 3 großen Quadrate. Dazu teilen die Seiten des ersten und des letzten Quadrats das mittlere in 4 kleine Quadrate: 3 + 4 = 7.' },

    // ================= sehr schwer =================
    { id: 'b2a-sechseck-diagonalen', fam: 'diagonalen-schnittpunkte', cat: 'Bilder', type: 'number',
      q: 'Im regelmäßigen Sechseck sind alle Diagonalen eingezeichnet. An wie vielen Punkten <b>im Inneren</b> kreuzen sich Linien?', svg: svgSechseckAlle(),
      a: 13, r: [3, 2, 2, 2, 0], ex: '6 Punkte, an denen sich zwei kurze Diagonalen kreuzen, 6, an denen eine lange eine kurze kreuzt, und die Mitte, durch die alle 3 langen gehen – dort fallen 3 Kreuzungen in einen Punkt zusammen: 6 + 6 + 1 = 13.' },
    { id: 'b2a-wuerfel-tunnel', fam: 'wuerfel-tunnel', cat: 'Bilder', type: 'number',
      q: 'Der Würfel bestand aus 27 kleinen Würfeln. Von der Mitte jeder Seite führt ein Tunnel, einen Würfel breit, geradewegs bis zur Gegenseite. Aus wie vielen kleinen Würfeln besteht der Rest?', svg: svgTunnel(),
      a: 20, r: [2, 2, 3, 2, 0], ex: 'Es sind 3 Tunnel (jeder verbindet zwei Gegenseiten) zu je 3 Würfeln, aber alle drei laufen durch denselben Würfel in der Mitte. Es fehlen also 9 − 2 = 7 Würfel: 27 − 7 = 20.' },
    { id: 'b2a-kantengeruest', fam: 'wuerfel-kantengeruest', cat: 'Bilder', type: 'number',
      q: 'Entlang der 12 Kanten eines großen Würfels sind kleine Würfel aufgereiht, jede Kante ist vier kleine Würfel lang (die Eckwürfel mitgezählt). Aus wie vielen kleinen Würfeln besteht das Gerüst?', svg: svgKantenmodell(),
      a: 32, r: [2, 2, 2, 2, 0], ex: 'Die 8 Eckwürfel gehören zu je drei Kanten. Außer den beiden Eckwürfeln hat jede Kante noch 2 eigene Würfel: 8 + 12 × 2 = 32.' },
    { id: 'b2a-seitenhalbierende', fam: 'dreiecke-seitenhalbierende', cat: 'Bilder', type: 'number',
      q: 'Wie viele Dreiecke siehst du?', svg: svgSeitenhalbierende(),
      a: 16, r: [3, 2, 2, 2, 0], ex: '6 kleine Dreiecke, 3 aus je zwei kleinen mit der Spitze im Kreuzungspunkt der drei Linien, 6 halbe Dreiecke (jede der 3 Linien halbiert das große) und das große selbst: 6 + 3 + 6 + 1 = 16.' },
    { id: 'b2a-felderbild', fam: 'rects-2', cat: 'Bilder', type: 'number',
      q: 'Wie viele Rechtecke siehst du? (Quadrate zählen mit.)', svg: svgFelderbild(),
      a: 17, r: [3, 2, 2, 2, 0], ex: 'In der oberen Hälfte (4 Senkrechte) gibt es 6, in der unteren (4 Senkrechte) 6, über die ganze Höhe (3 durchgehende Senkrechte) 3, dazu die 2 kleinen Felder oben rechts: 6 + 6 + 3 + 2 = 17.' },
    { id: 'b2a-gitter-zuege', fam: 'ein-strich', cat: 'Bilder', type: 'number',
      q: 'Wie viele Züge ohne Absetzen brauchst du mindestens, um dieses Gitter nachzuzeichnen? Keine Linie darf doppelt gezogen werden, abbiegen ist an jedem Punkt erlaubt.', svg: svgGitter3(),
      a: 4, r: [2, 3, 2, 2, 0], ex: 'Wer durch einen Punkt hindurchzieht, verbraucht dort zwei Linienstücke – eins hinein, eins hinaus. An den 8 Randpunkten ohne die Ecken gehen aber drei Stücke ab, eins bleibt übrig: Dort muss ein Zug beginnen oder enden. Jeder Zug hat nur 2 Enden, also braucht man mindestens 8 : 2 = 4 Züge – und 4 reichen auch.' },
  ]);
})();

// ---- bilder2b.js ----
// Bilder 2b (Präfix b2b-): Drehen, Spiegeln, Falten, Würfelnetze, Ansichten von oben/vorn.
(function () {
  const { svg } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // ---------- Bausteine ----------
  const PINK = '#ff7ab6', CYAN = '#22d3ee', GOLD = '#ffc940', WHITE = '#f3f4ff', VIOLET = '#a78bfa', DARK = '#1a1240',
    SOFT = '#b9bde8', GRID = '#6b6fa8', CYANF = 'rgba(34,211,238,.18)';
  const f1 = (v) => Math.round(v * 10) / 10;
  const pts = (arr) => arr.map(([x, y]) => `${f1(x)},${f1(y)}`).join(' ');
  const tx = (x, y, t, size = 16, extra = '') => `<text class="tx" x="${f1(x)}" y="${f1(y)}" text-anchor="middle" font-size="${size}" font-weight="700"${extra ? ' ' + extra : ''}>${t}</text>`;
  const ttx = (x, y, t, size, fill) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="middle" font-size="${size}" font-weight="800" fill="${fill}" style="font-family: Arial, Helvetica, sans-serif">${t}</text>`;
  const poly = (arr, extra) => `<polygon points="${pts(arr)}" ${extra}/>`;
  const line = (x1, y1, x2, y2, extra) => `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" ${extra}/>`;
  const rect = (x, y, w, h, extra) => `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" ${extra}/>`;
  const box = (x, y, w, h) => rect(x, y, w, h, `rx="8" fill="rgba(255,255,255,.05)" stroke="${VIOLET}" stroke-width="2"`);
  const DASH = `stroke="${GOLD}" stroke-width="3" stroke-dasharray="8 6"`;
  const arrowDefs = `<defs><marker id="b2bah" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${GOLD}"/></marker></defs>`;
  const arrow = (d, col = GOLD) => `<path d="${d}" fill="none" stroke="${col}" stroke-width="3.5" stroke-linecap="round" marker-end="url(#b2bah)"/>`;
  const star = (cx, cy, r, fill = GOLD) => poly(Array.from({ length: 10 }, (_, i) => {
    const a = (-90 + i * 36) * Math.PI / 180, rr = i % 2 ? r * 0.45 : r;
    return [cx + rr * Math.cos(a), cy + rr * Math.sin(a)];
  }), `fill="${fill}"`);
  // F-Form (ohne Schrift), Ursprung oben links, 28 × 40
  const F_PTS = [[0, 0], [28, 0], [28, 8], [8, 8], [8, 16], [20, 16], [20, 23], [8, 23], [8, 40], [0, 40]];
  const fShape = (cx, cy, tf, fill) => `<g transform="translate(${cx} ${cy}) ${tf}"><g transform="translate(-14 -20)">${poly(F_PTS, `fill="${fill}"`)}</g></g>`;

  // ---------- leicht ----------

  // Draufsicht: Quadrat mit beiden Diagonalen und Spitze in der Mitte
  function svgDraufsicht() {
    let s = rect(50, 20, 130, 130, `fill="${CYANF}" stroke="${CYAN}" stroke-width="3"`);
    s += line(50, 20, 180, 150, `stroke="${CYAN}" stroke-width="3"`) + line(180, 20, 50, 150, `stroke="${CYAN}" stroke-width="3"`);
    s += `<circle cx="115" cy="85" r="5" fill="${GOLD}"/>`;
    s += tx(115, 176, 'Blick von oben', 14);
    return svg('0 0 230 186', s);
  }

  // Falten: linke Hälfte klappt auf die rechte
  function svgFaltenStern() {
    const c = 46, x0 = 20, y0 = 40;
    let s = '';
    const nums = { '2,0': 1, '3,0': 2, '2,1': 3, '3,1': 4, '2,2': 5, '3,2': 6 };
    for (let r = 0; r < 3; r++) for (let k = 0; k < 4; k++) {
      s += rect(x0 + k * c, y0 + r * c, c, c, `fill="${CYANF}" stroke="${CYAN}" stroke-width="2.5"`);
      const n = nums[k + ',' + r];
      if (n) s += tx(x0 + k * c + c / 2, y0 + r * c + c / 2 + 8, n, 22);
    }
    s += star(x0 + 1.5 * c, y0 + 1.5 * c, 16);
    s += line(x0 + 2 * c, y0 - 8, x0 + 2 * c, y0 + 3 * c + 8, DASH);
    s += arrow(`M ${x0 + 0.6 * c} ${y0 - 6} Q ${x0 + 2 * c} ${y0 - 44} ${x0 + 3.3 * c} ${y0 - 8}`);
    return svg('0 0 224 186', arrowDefs + s);
  }

  // Halbes M an der Spiegelachse
  function svgHalbM() {
    let s = line(110, 8, 110, 162, DASH);
    s += `<polyline points="45,145 45,25 110,112" fill="none" stroke="${PINK}" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`;
    return svg('0 0 220 170', s);
  }

  // Gefaltetes Quadrat, Knick links
  function svgFaltMass() {
    let s = rect(60, 20, 120, 120, `fill="${CYANF}" stroke="${CYAN}" stroke-width="3"`);
    s += line(60, 20, 60, 140, `stroke="${GOLD}" stroke-width="7" stroke-linecap="round"`);
    s += tx(36, 84, 'Knick', 13, `transform="rotate(-90 36 84)"`);
    s += line(60, 156, 180, 156, `stroke="${SOFT}" stroke-width="2"`) + line(60, 150, 60, 162, `stroke="${SOFT}" stroke-width="2"`) + line(180, 150, 180, 162, `stroke="${SOFT}" stroke-width="2"`);
    s += tx(120, 178, '10 cm', 15);
    return svg('0 0 220 186', s);
  }

  // Pfeil über dem See
  function svgPfeilSee() {
    let s = rect(10, 100, 220, 80, `fill="rgba(34,211,238,.16)"`);
    s += `<path d="M 10 100 Q 37 92 65 100 T 120 100 T 175 100 T 230 100" fill="none" stroke="${CYAN}" stroke-width="3"/>`;
    s += line(85, 86, 150, 28, `stroke="${PINK}" stroke-width="8" stroke-linecap="round"`);
    s += poly([[160, 19], [133, 27], [152, 48]], `fill="${PINK}"`);
    s += tx(120, 152, '?', 34, `fill-opacity="0.8"`);
    return svg('0 0 240 186', s);
  }

  // N mit Drehpfeil
  function svgNDreh() {
    let s = `<polyline points="55,140 55,40 115,140 115,40" fill="none" stroke="${PINK}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>`;
    s += arrow('M 150 40 A 62 62 0 0 1 172 118');
    s += tx(190, 76, '¼', 20);
    return svg('0 0 220 170', arrowDefs + s);
  }

  // ---------- mittel ----------

  // Quadrat kippt dreimal nach rechts
  function svgKippen() {
    const g = 130, a = 56, x0 = 14;
    let s = line(6, g, 254, g, `stroke="${SOFT}" stroke-width="3"`);
    s += rect(x0, g - a, a, a, `fill="${CYANF}" stroke="${CYAN}" stroke-width="3"`);
    s += `<circle cx="${x0 + 11}" cy="${g - a + 11}" r="6" fill="${GOLD}"/>`;
    for (let i = 1; i <= 3; i++) {
      s += rect(x0 + i * a, g - a, a, a, `fill="none" stroke="${GRID}" stroke-width="2" stroke-dasharray="5 5"`);
      s += tx(x0 + i * a + a / 2, g + 20, i + '.', 13);
    }
    s += tx(x0 + 3 * a + a / 2, g - a / 2 + 9, '?', 26);
    s += arrow(`M ${x0 + 30} ${g - a - 12} Q ${x0 + 2 * a} ${g - a - 52} ${x0 + 3 * a + 20} ${g - a - 12}`);
    return svg('0 0 260 160', arrowDefs + s);
  }

  // Zeiger mit 135°-Schritt
  function svgZeiger() {
    const cx = 110, cy = 100, r = 72;
    let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${CYANF}" stroke="${CYAN}" stroke-width="3"/>`;
    for (let i = 0; i < 8; i++) {
      const al = i * Math.PI / 4;
      s += line(cx + (r - 12) * Math.sin(al), cy - (r - 12) * Math.cos(al), cx + r * Math.sin(al), cy - r * Math.cos(al), `stroke="${WHITE}" stroke-width="3"`);
    }
    s += line(cx, cy, cx, cy - r + 20, `stroke="${GOLD}" stroke-width="7" stroke-linecap="round"`);
    s += poly([[cx, cy - r + 8], [cx - 9, cy - r + 24], [cx + 9, cy - r + 24]], `fill="${GOLD}"`);
    s += `<circle cx="${cx}" cy="${cy}" r="7" fill="${GOLD}"/>`;
    const p = (deg, rr) => [cx + rr * Math.sin(deg * Math.PI / 180), cy - rr * Math.cos(deg * Math.PI / 180)];
    const [ax, ay] = p(10, 38), [bx, by] = p(130, 38);
    s += arrow(`M ${f1(ax)} ${f1(ay)} A 38 38 0 0 1 ${f1(bx)} ${f1(by)}`, PINK);
    s += tx(cx + 30, cy + 8, '135°', 14);
    return svg('0 0 220 186', `<defs><marker id="b2bahp" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="${PINK}"/></marker></defs>` + s.replace('url(#b2bah)', 'url(#b2bahp)'));
  }

  // Rechteck
  function svgRechteck() {
    return svg('0 0 240 150', rect(30, 30, 180, 90, `class="shape c1"`));
  }

  // Karte mit Nordpfeil nach unten
  function svgKarte() {
    let s = rect(14, 12, 252, 166, `rx="10" fill="rgba(52,211,153,.12)" stroke="${VIOLET}" stroke-width="2"`);
    s += `<path d="M 14 60 Q 110 80 266 50 M 90 12 Q 100 100 70 178 M 180 12 Q 200 110 230 178" fill="none" stroke="${GRID}" stroke-width="5"/>`;
    s += `<circle cx="140" cy="100" r="9" fill="${PINK}"/>` + tx(140, 130, 'du', 15);
    s += star(55, 100, 18);
    // Nordpfeil nach unten
    s += line(236, 26, 236, 66, `stroke="${WHITE}" stroke-width="4"`) + poly([[236, 82], [226, 62], [246, 62]], `fill="${WHITE}"`);
    s += tx(236, 104, 'N', 20);
    return svg('0 0 280 190', s);
  }

  // Drei Ansichten: Kreis, Quadrat, Quadrat
  function svgDreiAnsichten() {
    let s = '';
    ['von oben', 'von vorn', 'von der Seite'].forEach((t, i) => {
      const x = 8 + i * 92;
      s += box(x, 8, 84, 100) + tx(x + 42, 126, t, 13);
      if (i === 0) s += `<circle cx="${x + 42}" cy="58" r="30" fill="${CYAN}"/>`;
      else s += rect(x + 12, 28, 60, 60, `fill="${CYAN}"`);
    });
    return svg('0 0 284 136', s);
  }

  // Stempel: Gummiseite und vier Abdrücke
  function svgStempel() {
    let s = rect(100, 6, 90, 90, `rx="12" fill="#3b3f63" stroke="${SOFT}" stroke-width="3"`);
    s += fShape(145, 51, 'scale(-1 1) scale(1.4)', '#d9dcf5');
    s += tx(145, 114, 'Gummi von unten', 13);
    const opts = ['', 'scale(-1 1)', 'rotate(180) scale(-1 1)', 'rotate(90) scale(-1 1)'];
    opts.forEach((tf, i) => {
      const x = 8 + i * 70;
      s += box(x, 128, 62, 70) + fShape(x + 31, 163, tf, PINK) + tx(x + 31, 220, 'ABCD'[i], 16);
    });
    return svg('0 0 290 228', s);
  }

  // Schräge Gläser mit Wasser
  function clip(polyPts, nx, ny, c) { // behält Punkte mit nx*x + ny*y >= c
    const out = [];
    for (let i = 0; i < polyPts.length; i++) {
      const P = polyPts[i], Q = polyPts[(i + 1) % polyPts.length];
      const dp = nx * P[0] + ny * P[1] - c, dq = nx * Q[0] + ny * Q[1] - c;
      if (dp >= 0) out.push(P);
      if ((dp >= 0) !== (dq >= 0)) { const t = dp / (dp - dq); out.push([P[0] + t * (Q[0] - P[0]), P[1] + t * (Q[1] - P[1])]); }
    }
    return out;
  }
  function svgGlaeser() {
    const tilt = 28 * Math.PI / 180, surf = [0, 28, -28, 58];
    let s = '';
    surf.forEach((deg, i) => {
      const bx = 8 + i * 70, cx = bx + 31, cy = 82;
      s += box(bx, 8, 62, 150);
      const rot = ([x, y]) => [cx + x * Math.cos(tilt) - y * Math.sin(tilt), cy + x * Math.sin(tilt) + y * Math.cos(tilt)];
      const glass = [[-16, -42], [16, -42], [16, 42], [-16, 42]].map(rot);
      // Wasser: alles unterhalb der Linie durch die Glasmitte mit Neigung deg
      const a = deg * Math.PI / 180, nx = -Math.sin(a), ny = Math.cos(a);
      const water = clip(glass, nx, ny, nx * cx + ny * cy);
      s += poly(water, `fill="${CYAN}" fill-opacity="0.75"`);
      const [p0, p1, p2, p3] = glass;
      s += `<polyline points="${pts([p0, p3, p2, p1])}" fill="none" stroke="${WHITE}" stroke-width="3" stroke-linejoin="round"/>`;
      s += tx(cx, 178, 'ABCD'[i], 16);
    });
    return svg('0 0 290 188', s);
  }

  // ---------- schwer ----------

  // 7-Segment-Ziffern
  const SEG = { a: [[3, 0], [27, 0]], b: [[30, 3], [30, 27]], c: [[30, 33], [30, 57]], d: [[3, 60], [27, 60]], e: [[0, 33], [0, 57]], f: [[0, 3], [0, 27]], g: [[3, 30], [27, 30]] };
  const DIG = { 0: 'abcdef', 1: 'bc', 2: 'abged', 3: 'abgcd', 4: 'fgbc', 5: 'afgcd', 6: 'afgedc', 7: 'abc', 8: 'abcdefg', 9: 'abcdfg' };
  function seg7(x, y, d) {
    return [...DIG[d]].map(k => { const [[x1, y1], [x2, y2]] = SEG[k]; return line(x + x1, y + y1, x + x2, y + y2, `stroke="${CYAN}" stroke-width="7" stroke-linecap="round"`); }).join('');
  }
  function svgDigitalSpiegel() {
    let s = rect(10, 10, 260, 140, `rx="16" fill="rgba(167,139,250,.14)" stroke="${SOFT}" stroke-width="5"`);
    s += line(30, 30, 60, 22, `stroke="${WHITE}" stroke-opacity=".35" stroke-width="4" stroke-linecap="round"`);
    let d = seg7(40, 50, 1) + seg7(86, 50, 2) + seg7(164, 50, 1) + seg7(210, 50, 5);
    d += `<circle cx="140" cy="66" r="5" fill="${CYAN}"/><circle cx="140" cy="94" r="5" fill="${CYAN}"/>`;
    s += `<g transform="translate(280 0) scale(-1 1)">${d}</g>`;
    s += tx(140, 172, 'Spiegel', 14);
    return svg('0 0 280 182', s);
  }

  // 3 × 3-Buchstabenfeld mit Drehpfeil
  function svgGitterDrehen() {
    const L = ['R', 'E', 'H', 'H', 'A', 'U', 'O', 'R', 'T'], c = 50, x0 = 20, y0 = 20;
    let s = '';
    // Pfeil und „¼“ vor den Karten: sonst färbt die Regel „rect.card ~ .tx“ das ¼ dunkel wie Kartentext
    s += arrow('M 196 30 A 70 70 0 0 1 214 130');
    s += tx(244, 86, '¼', 20);
    L.forEach((ch, i) => {
      const x = x0 + (i % 3) * c, y = y0 + Math.floor(i / 3) * c;
      s += rect(x + 3, y + 3, c - 6, c - 6, `rx="6" class="card"`) + `<text x="${x + c / 2}" y="${y + c / 2 + 10}" text-anchor="middle" font-size="28" font-weight="800" fill="${DARK}">${ch}</text>`;
    });
    return svg('0 0 262 190', arrowDefs + s);
  }

  // Netz einer Dreieckspyramide
  function svgTetraeder() {
    const A = [130, 14], B = [20, 204.5], C = [240, 204.5];
    const m = (P, Q) => [(P[0] + Q[0]) / 2, (P[1] + Q[1]) / 2];
    const AB = m(A, B), AC = m(A, C), BC = m(B, C);
    let s = poly([A, B, C], `fill="${CYANF}" stroke="${CYAN}" stroke-width="3.5" stroke-linejoin="round"`);
    s += poly([AB, AC, BC], `fill="none" stroke="${GOLD}" stroke-width="3" stroke-dasharray="8 6"`);
    return svg('0 0 260 216', s);
  }

  // Windrad mit sechs Flügeln: pink, pink, türkis …
  function svgWindrad() {
    const cx = 120, cy = 105, cols = [PINK, PINK, CYAN, PINK, PINK, CYAN];
    let s = '';
    cols.forEach((col, i) => {
      const a = (-90 + i * 60) * Math.PI / 180, b = a + 42 * Math.PI / 180;
      s += poly([[cx, cy], [cx + 88 * Math.cos(a), cy + 88 * Math.sin(a)], [cx + 58 * Math.cos(b), cy + 58 * Math.sin(b)]], `fill="${col}" stroke="${DARK}" stroke-width="2" stroke-linejoin="round"`);
    });
    s += `<circle cx="${cx}" cy="${cy}" r="9" fill="${GOLD}"/>`;
    return svg('0 0 240 210', s);
  }

  // Original und sechs Kandidaten (2 nur gedreht, 4 gespiegelt)
  const POLY = [[0, 0], [1, 0], [2, 0], [0, 1], [0, 2], [1, 2]];
  const pnorm = (c) => { const mx = Math.min(...c.map(p => p[0])), my = Math.min(...c.map(p => p[1])); return c.map(([x, y]) => [x - mx, y - my]); };
  const prot = (c) => pnorm(c.map(([x, y]) => [-y, x]));
  const pmir = (c) => pnorm(c.map(([x, y]) => [-x, y]));
  const prots = (c, n) => { let r = c; for (let i = 0; i < n; i++) r = prot(r); return r; };
  // A: gespiegelt · B: ¼ gedreht · C: gespiegelt+¼ · D: gespiegelt+½ · E: ½ gedreht · F: gespiegelt+¾
  const NG_OPTS = [pmir(POLY), prots(POLY, 1), prots(pmir(POLY), 1), prots(pmir(POLY), 2), prots(POLY, 2), prots(pmir(POLY), 3)];
  function polyo(cells, cx, cy, k, fill) {
    const w = Math.max(...cells.map(p => p[0])) + 1, h = Math.max(...cells.map(p => p[1])) + 1;
    return cells.map(([x, y]) => rect(cx - w * k / 2 + x * k, cy - h * k / 2 + y * k, k, k, `fill="${fill}" stroke="${DARK}" stroke-width="2"`)).join('');
  }
  function svgNurGedreht() {
    let s = box(105, 6, 80, 80) + polyo(POLY, 145, 46, 20, GOLD);
    NG_OPTS.forEach((c, i) => {
      const x = 8 + (i % 3) * 92, y = 100 + Math.floor(i / 3) * 96;
      s += box(x, y, 84, 88) + polyo(c, x + 42, y + 50, 18, CYAN) + tx(x + 12, y + 17, 'ABCDEF'[i], 13);
    });
    return svg('0 0 284 296', s);
  }

  // Drei Schritte mit dem F
  function svgKette() {
    let s = box(6, 20, 64, 80) + fShape(38, 60, 'scale(1.2)', PINK);
    const steps = ['¼ drehen', 'spiegeln', '¼ drehen'];
    steps.forEach((t, i) => {
      const x = 76 + i * 64;
      s += arrow(`M ${x} 60 L ${x + 50} 60`) + tx(x + 25, 44, t, 12);
    });
    s += tx(284, 72, '?', 34);
    // senkrechte Spiegelachse als Symbol
    s += line(141, 70, 141, 92, `stroke="${WHITE}" stroke-width="2" stroke-dasharray="3 3"`);
    return svg('0 0 304 116', arrowDefs + s);
  }

  // Wortschilder
  const WOERTER = ['OTTO', 'ANNA', 'TAT', 'EBBE', 'RADAR', 'AHA', 'HUT', 'MAMA'];
  function svgWoerter() {
    let s = '';
    WOERTER.forEach((w, i) => {
      const x = 10 + (i % 2) * 136, y = 8 + Math.floor(i / 2) * 50;
      s += rect(x, y, 126, 42, `rx="8" class="card"`) + ttx(x + 63, y + 31, w, 26, DARK);
    });
    return svg('0 0 272 210', s);
  }

  // ---------- sehr schwer ----------

  // Streifen mit 8 Feldern
  function svgStreifen8() {
    const c = 32, x0 = 12, y0 = 70;
    let s = '';
    for (let i = 0; i < 8; i++) s += rect(x0 + i * c, y0, c, 44, `fill="${CYANF}" stroke="${CYAN}" stroke-width="2.5"`) + tx(x0 + i * c + c / 2, y0 + 30, i + 1, 20);
    s += line(x0 + 4 * c, y0 - 10, x0 + 4 * c, y0 + 54, DASH);
    s += arrow(`M ${x0 + 7 * c} ${y0 - 8} Q ${x0 + 4 * c} ${y0 - 64} ${x0 + 1.2 * c} ${y0 - 10}`);
    return svg('0 0 280 126', arrowDefs + s);
  }

  // Würfelnetz (1-3-2) mit Punkt an einer Ecke
  const NETZ_ECKE = [[0, 0, 4], [0, 1, 2], [1, 1, 6], [2, 1, 1], [2, 2, 5], [3, 2, 3]];
  const NETZ_LAGE = [[0, 0, 3], [1, 0, 1], [1, 1, 5], [2, 1, 2], [3, 1, 6], [3, 2, 4]];
  function svgNetz(cells, dot) {
    const c = 52, x0 = 22, y0 = 14;
    let s = '';
    cells.forEach(([x, y, n]) => { s += rect(x0 + x * c, y0 + y * c, c, c, `rx="3" class="cell"`) + tx(x0 + x * c + c / 2, y0 + y * c + c / 2 + 9, n, 26); });
    if (dot) s += `<circle cx="${x0 + dot[0] * c}" cy="${y0 + dot[1] * c}" r="8" fill="${GOLD}" stroke="${DARK}" stroke-width="2"/>`;
    return svg('0 0 252 186', s);
  }

  // Ansichten von vorn und von rechts
  function svgAnsichtenMax() {
    const k = 26;
    let s = '';
    const view = (x0, hs, label) => {
      let o = line(x0 - 6, 140, x0 + 3 * k + 6, 140, `stroke="${SOFT}" stroke-width="3"`);
      hs.forEach((h, i) => { for (let j = 0; j < h; j++) o += rect(x0 + i * k, 140 - (j + 1) * k, k, k, `fill="${CYAN}" stroke="${DARK}" stroke-width="2"`); });
      return o + tx(x0 + 1.5 * k, 164, label, 14);
    };
    s += view(26, [3, 1, 2], 'von vorn') + view(166, [2, 3, 1], 'von rechts');
    return svg('0 0 280 174', s);
  }

  // Gefaltetes Bündel (dreimal gefaltet) mit zwei Schnitten
  function svgBuendel() {
    // Lagen von unten nach oben (Abschnitt-Nummern 0..7) und Knickseiten aus der Faltung berechnet
    const N = 8, xL = 70, xR = 230, yB = 150, gap = 15;
    const fold = (x) => { let u = x; for (const h of [1 / 2, 1 / 4, 1 / 8]) if (u > h) u = 2 * h - u; return u; };
    const level = {}; [0, 7, 4, 3, 2, 5, 6, 1].forEach((seg, lv) => { level[seg] = lv; });
    const y = (seg) => yB - level[seg] * gap;
    let s = '';
    for (let i = 0; i < N; i++) s += line(xL, y(i), xR, y(i), `stroke="${CYAN}" stroke-width="4" stroke-linecap="round"`);
    for (let i = 0; i < N - 1; i++) {
      const left = fold((i + 1) / N) < 1 / 16;
      const y1 = y(i), y2 = y(i + 1), r = Math.abs(y1 - y2) / 2, x = left ? xL : xR;
      s += `<path d="M ${x} ${y1} A ${r} ${r} 0 0 ${(left ? (y1 > y2 ? 1 : 0) : (y1 > y2 ? 0 : 1))} ${x} ${y2}" fill="none" stroke="${CYAN}" stroke-width="4"/>`;
    }
    for (const xc of [115, 185]) s += line(xc, 20, xc, 170, `stroke="${PINK}" stroke-width="3" stroke-dasharray="7 5"`);
    s += tx(150, 18, 'zwei Schnitte', 13);
    return svg('0 0 300 186', s);
  }

  QUIZ_ADD([
    // ================= leicht =================
    { id: 'b2b-draufsicht-pyramide', fam: 'koerper-aus-ansicht', cat: 'Bilder', type: 'choice',
      q: 'So sieht ein Körper genau von oben aus. Die Linien sind Kanten. Welcher Körper kann es sein?', svg: svgDraufsicht(),
      opts: ['Eine Pyramide', 'Ein Würfel', 'Ein Kegel', 'Ein Zylinder'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Von oben sieht man die quadratische Grundfläche und vier Kanten, die zur Spitze in der Mitte laufen. Ein Würfel wäre ein Quadrat ohne Diagonalen, Kegel und Zylinder wären rund.' },
    { id: 'b2b-falten-stern', fam: 'falten-feld-treffen', cat: 'Bilder', type: 'number',
      q: 'Das Blatt wird an der gestrichelten Linie gefaltet: Die linke Hälfte klappt auf die rechte. Auf welcher Zahl liegt der Stern dann?', svg: svgFaltenStern(),
      a: 3, r: [1, 1, 0, 0, 0],
      ex: 'Der Stern liegt direkt links neben der Faltlinie in der mittleren Zeile. Beim Umklappen landet er direkt rechts daneben – auf der 3.' },
    { id: 'b2b-halbes-m', fam: 'spiegeln-ergaenzen', cat: 'Bilder', type: 'text', letters: true,
      q: 'Die Figur wird an der gestrichelten Linie gespiegelt und so ergänzt. Welcher Großbuchstabe entsteht?', svg: svgHalbM(),
      a: 'M', r: [1, 1, 0, 0, 0],
      ex: 'Der senkrechte Strich und die Schräge zur Mitte bekommen rechts ihr Spiegelbild: zwei Striche außen, in der Mitte ein V – ein M.' },
    { id: 'b2b-falten-mass', fam: 'falten-masse', cat: 'Bilder', type: 'number',
      q: 'Ein Rechteck wurde einmal genau in der Mitte gefaltet. Jetzt ist es ein Quadrat mit 10 cm Seitenlänge. Wie viele Zentimeter ist die lange Seite des Rechtecks lang?', svg: svgFaltMass(),
      a: 20, r: [1, 0, 0, 1, 0],
      ex: 'Das Falten in der Mitte halbiert die lange Seite. Aufgefaltet ist sie also doppelt so lang wie die Quadratseite: 2 · 10 cm = 20 cm.' },
    { id: 'b2b-pfeil-see', fam: 'spiegelbild', cat: 'Bilder', type: 'choice',
      q: 'Der Pfeil spiegelt sich im ruhigen See. Wohin zeigt der Pfeil im Spiegelbild?', svg: svgPfeilSee(),
      opts: ['Nach rechts unten', 'Nach rechts oben', 'Nach links unten', 'Nach links oben'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Eine Wasserfläche vertauscht oben und unten, links und rechts bleiben. Aus „nach rechts oben“ wird „nach rechts unten“.' },
    { id: 'b2b-n-vierteldrehung', fam: 'buchstabe-drehen', cat: 'Bilder', type: 'text', letters: true,
      q: 'Das N wird eine Vierteldrehung im Uhrzeigersinn gedreht. Welcher Großbuchstabe ist dann zu sehen?', svg: svgNDreh(),
      a: 'Z', r: [1, 1, 0, 0, 0],
      ex: 'Die beiden senkrechten Striche werden waagrecht – oben und unten. Der Schrägstrich kippt mit und läuft jetzt von rechts oben nach links unten: Aus dem N wird ein Z.' },

    // ================= mittel =================
    { id: 'b2b-quadrat-kippen', fam: 'quadrat-kippen', cat: 'Bilder', type: 'choice',
      q: 'Das Quadrat kippt dreimal nach rechts, jedes Mal über seine rechte untere Ecke. Wo ist der gelbe Punkt danach?', svg: svgKippen(),
      opts: ['Unten links', 'Oben links', 'Oben rechts', 'Unten rechts'], a: 0, r: [2, 1, 1, 1, 0],
      ex: 'Jedes Kippen ist eine Vierteldrehung im Uhrzeigersinn: Der Punkt wandert von oben links nach oben rechts, dann nach unten rechts und zuletzt nach unten links.' },
    { id: 'b2b-zeiger-klicks', fam: 'zeiger-klicks-135', cat: 'Bilder', type: 'number',
      q: 'Der Zeiger zeigt nach oben. Bei jedem Klick dreht er sich um 135° im Uhrzeigersinn weiter. Nach wie vielen Klicks zeigt er zum ersten Mal wieder nach oben?', svg: svgZeiger(),
      a: 8, r: [2, 1, 1, 1, 1],
      ex: 'Er braucht ein Vielfaches von 360°, das auch eines von 135° ist. Das kleinste ist 1080° = 3 volle Drehungen, also 1080 : 135 = 8 Klicks.' },
    { id: 'b2b-rechteck-achsen', fam: 'spiegelachsen-zaehlen', cat: 'Bilder', type: 'number',
      q: 'Wie viele Spiegelachsen hat dieses Rechteck?', svg: svgRechteck(),
      a: 2, r: [1, 1, 2, 0, 1],
      ex: 'Nur die senkrechte und die waagrechte Mittellinie. Klappt man an einer Diagonale, landen die Ecken nicht aufeinander – das klappt nur beim Quadrat.' },
    { id: 'b2b-karte-verkehrt', fam: 'karte-verdreht', cat: 'Bilder', type: 'choice',
      q: 'Auf dieser Karte zeigt der Nordpfeil nach unten. In welcher Himmelsrichtung liegt der Stern von dir aus?', svg: svgKarte(),
      opts: ['Osten', 'Westen', 'Norden', 'Süden'], a: 0, r: [2, 1, 2, 0, 0],
      ex: 'Die Karte steht auf dem Kopf: Norden ist unten, Süden oben – und Osten deshalb links. Der Stern links von dir liegt im Osten.' },
    { id: 'b2b-drei-ansichten', fam: 'koerper-aus-ansicht', cat: 'Bilder', type: 'choice',
      q: 'Ein Körper sieht von oben wie ein Kreis aus, von vorn und von der Seite wie ein Quadrat. Welcher Körper ist es?', svg: svgDreiAnsichten(),
      opts: ['Ein Zylinder', 'Ein Würfel', 'Ein Kegel', 'Eine Kugel'], a: 0, r: [2, 1, 1, 0, 0],
      ex: 'Ein Würfel wäre auch von oben eckig, Kugel und Kegel wären von vorn rund oder spitz. Ein Zylinder, der so hoch wie breit ist, passt: oben rund, von vorn und von der Seite quadratisch.' },
    { id: 'b2b-stempel', fam: 'stempel-abdruck', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Oben siehst du die Gummiseite eines Stempels, von unten betrachtet. Welcher Abdruck kann damit auf dem Papier entstehen?', svg: svgStempel(),
      opts: ['A', 'B', 'C', 'D'], a: 0, r: [1, 2, 1, 0, 0],
      ex: 'Beim Stempeln wird das Bild gespiegelt: Ein spiegelverkehrtes F auf dem Gummi druckt ein richtiges F. B, C und D sind alle noch spiegelverkehrt – nur unterschiedlich gedreht.' },
    { id: 'b2b-wasserglas', fam: 'wasser-bleibt-waagrecht', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Ein halb volles Glas Wasser wird schräg gehalten und ruhig festgehalten. Welches Bild zeigt das Wasser richtig?', svg: svgGlaeser(),
      opts: ['A', 'B', 'C', 'D'], a: 0, r: [1, 1, 2, 0, 0],
      ex: 'Die Wasseroberfläche bleibt immer waagrecht, egal wie das Glas gekippt ist – nur bei A. Bei B liegt sie parallel zum schrägen Glasboden, bei C und D ist sie in andere Richtungen geneigt.' },

    // ================= schwer =================
    { id: 'b2b-gitter-drehen', fam: 'gitter-drehen-lesen', cat: 'Bilder', type: 'text',
      q: 'Das Buchstabenfeld wird eine Vierteldrehung im Uhrzeigersinn gedreht. Welches Wort steht danach in der obersten Reihe, von links nach rechts gelesen?', svg: svgGitterDrehen(),
      a: 'OHR', r: [2, 1, 2, 1, 0],
      ex: 'Bei der Drehung nach rechts wird die linke Spalte zur obersten Reihe – das untere Feld landet ganz links: O, H, R. REH stand vorher oben, HUT käme bei einer Drehung gegen den Uhrzeigersinn.' },
    { id: 'b2b-tetraeder-kanten', fam: 'tetraeder-netz', cat: 'Bilder', type: 'number',
      q: 'Das große Dreieck wird an den gestrichelten Linien gefaltet, bis sich die drei Ecken oben treffen. Wie viele Kanten hat der entstandene Körper?', svg: svgTetraeder(),
      a: 6, r: [2, 1, 2, 1, 0],
      ex: 'Es entsteht eine Dreieckspyramide mit 4 Flächen und 6 Kanten: die 3 Faltlinien und 3 Kanten, an denen je zwei der 6 Randstücke aufeinandertreffen.' },
    { id: 'b2b-windrad', fam: 'drehwinkel-minimal', cat: 'Bilder', type: 'number',
      q: 'Um wie viel Grad musst du das Windrad mindestens drehen, damit es mit allen Farben wieder genau gleich aussieht?', svg: svgWindrad(),
      a: 180, r: [2, 1, 2, 1, 1],
      ex: 'Die Flügel stehen alle 60°, aber die Farbfolge pink, pink, türkis kommt ringsum nur zweimal vor. Erst nach drei Flügeln, also 180°, passt alles wieder.' },
    { id: 'b2b-nur-gedreht', fam: 'shapes-f', cat: 'Bilder', type: 'number',
      q: 'Wie viele der sechs türkisen Figuren sind dieselbe wie die gelbe oben – nur gedreht, nicht gespiegelt?', svg: svgNurGedreht(),
      a: 2, r: [2, 1, 2, 2, 0],
      ex: 'Nur B (Vierteldrehung) und E (halbe Drehung). A, C, D und F sind Spiegelbilder: Dreht man sie so, dass die Öffnung wie oben nach rechts zeigt, liegt der lange Arm unten statt oben.' },
    { id: 'b2b-drehen-spiegeln', fam: 'drehen-spiegeln-kette', cat: 'Bilder', type: 'choice',
      q: 'Eine Figur wird eine Vierteldrehung im Uhrzeigersinn gedreht, dann links und rechts gespiegelt, dann wieder eine Vierteldrehung im Uhrzeigersinn gedreht. Welcher einzelne Schritt hätte dasselbe ergeben?', svg: svgKette(),
      opts: ['Links und rechts spiegeln', 'Oben und unten spiegeln', 'Eine halbe Drehung', 'Gar keiner – sie ist wieder wie vorher'], a: 0, r: [2, 2, 2, 1, 0],
      ex: 'Prüf es mit zwei Pfeilen: Ein Pfeil nach oben wird zu rechts, links und wieder oben. Ein Pfeil nach rechts wird zu unten, unten und dann links. Oben bleibt, rechts wird links – das ist Spiegeln links–rechts.' },
    { id: 'b2b-spiegel-woerter', fam: 'spiegelwort', cat: 'Bilder', type: 'number',
      q: 'Jedes Schild wird in einen Spiegel gehalten, der links und rechts vertauscht. Bei wie vielen Schildern sieht das Spiegelbild genauso aus wie das Schild?', svg: svgWoerter(),
      a: 3, r: [2, 2, 2, 2, 0],
      ex: 'Das Wort muss rückwärts gleich sein und nur aus spiegelgleichen Buchstaben bestehen: OTTO, TAT und AHA. ANNA, EBBE und RADAR scheitern an N, E, B, R und D; HUT und MAMA lauten rückwärts anders.' },

    // ================= sehr schwer =================
    { id: 'b2b-streifen-stapel', fam: 'streifen-falten-stapel', cat: 'Bilder', type: 'number',
      q: 'Der Streifen wird dreimal gefaltet. Jedes Mal klappt die rechte Hälfte genau auf die linke. Welche Nummer hat das Feld, das danach ganz oben liegt?', svg: svgStreifen8(),
      a: 2, r: [3, 2, 2, 2, 0],
      ex: 'Stapel von unten nach oben: nach dem 1. Falten 1-8, dann 1-8-5-4, nach dem 3. Falten 1-8-5-4-3-6-7-2. Die 2 kommt als Letztes obendrauf.' },
    { id: 'b2b-netz-ecke', fam: 'wuerfelnetz-ecke-summe', cat: 'Bilder', type: 'number',
      q: 'Das Netz wird zu einem Würfel gefaltet. An der Ecke mit dem gelben Punkt treffen sich dann drei Flächen. Wie groß ist die Summe ihrer drei Zahlen?', svg: svgNetz(NETZ_ECKE, [0, 0]),
      a: 8, r: [3, 2, 2, 2, 0],
      ex: 'Mit der 6 vorn liegen 2 links, 1 rechts, 4 oben, 5 unten und 3 hinten. Der Punkt ist die Ecke oben rechts hinten: 4 + 1 + 3 = 8.' },
    { id: 'b2b-ansichten-max', fam: 'ansichten-wuerfelzahl', cat: 'Bilder', type: 'number',
      q: 'Ein Bau aus gleich großen Würfeln steht auf einem 3 × 3-Feld. Jeder Würfel liegt auf dem Tisch oder auf einem anderen. Das sind die Ansichten von vorn und von rechts. Aus höchstens wie vielen Würfeln besteht der Bau?', svg: svgAnsichtenMax(),
      a: 14, r: [3, 2, 2, 2, 0],
      ex: 'Auf jedes Feld passt höchstens die kleinere der beiden Höhen aus seiner Spalte (vorn: 3, 1, 2) und seiner Reihe (rechts: 2, 3, 1). Mit diesen Höhen stimmen beide Ansichten, und die Summe ist 5 + 6 + 3 = 14.' },
    { id: 'b2b-streifen-schnitt', fam: 'streifen-schneiden', cat: 'Bilder', type: 'number',
      q: 'Ein langer Papierstreifen wird dreimal hintereinander in der Mitte gefaltet. Dann wird das Bündel an zwei Stellen quer durchgeschnitten. In wie viele Stücke zerfällt der Streifen?', svg: svgBuendel(),
      a: 17, r: [3, 2, 2, 2, 0],
      ex: 'Dreimal Falten ergibt 8 Lagen. Jeder Schnitt trennt alle 8, das sind 16 Schnittstellen im Streifen – und 16 Schnitte zerlegen einen Streifen in 17 Stücke.' },
    { id: 'b2b-netz-lage', fam: 'wuerfelnetz-lage', cat: 'Bilder', type: 'number',
      q: 'Das Netz wird zu einem Würfel gefaltet, die Zahlen außen. Er wird so hingestellt, dass die 3 oben liegt und die 5 nach vorn zeigt. Welche Zahl siehst du rechts?', svg: svgNetz(NETZ_LAGE),
      a: 1, r: [3, 2, 2, 2, 0],
      ex: 'Mit der 2 vorn liegen 5 links, 6 rechts, 1 oben, 3 hinten und 4 unten. Dreht man die 5 nach vorn, wandert die 3 nach links; kippt man sie dann nach oben, landet die 1 rechts.' },
  ]);
})();

// ---- bilder2c.js ----
// Bilderrätsel, Paket 2c (Kategorie „Bilder“): Muster, Matrizen, Bildfolgen, Formenlogik, Bild-Gleichungen.
(function () {
  const { svg } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // ---------- kleine Bausteine ----------
  const PINK = '#ff7ab6', CYAN = '#22d3ee', GOLD = '#ffc940', WHITE = '#f3f4ff', DARK = '#1a1240', TILE = '#161b48';
  const f1 = (v) => Math.round(v * 10) / 10;
  const pts = (arr) => arr.map(([x, y]) => `${f1(x)},${f1(y)}`).join(' ');
  const tx = (x, y, t, size = 16, extra = '') => `<text class="tx" x="${f1(x)}" y="${f1(y)}" text-anchor="middle" font-size="${size}" font-weight="700"${extra ? ' ' + extra : ''}>${t}</text>`;
  const ln = (x1, y1, x2, y2, extra = '') => `<line class="ln" x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}"${extra ? ' ' + extra : ''}/>`;
  const box = (x, y, w, h, extra = '') => `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="8" fill="${TILE}" stroke="rgba(255,255,255,.35)" stroke-width="1.5"${extra ? ' ' + extra : ''}/>`;
  const qbox = (x, y, w, h) => `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" rx="8" fill="none" stroke="${GOLD}" stroke-width="2.5" stroke-dasharray="6 4"/>` + tx(x + w / 2, y + h / 2 + 10, '?', 28);
  const ngon = (cx, cy, r, n, rot = -90) => Array.from({ length: n }, (_, i) => {
    const a = (rot + i * 360 / n) * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });
  const starPts = (cx, cy, r) => Array.from({ length: 10 }, (_, i) => {
    const a = (-90 + i * 36) * Math.PI / 180, rr = i % 2 ? r * 0.45 : r;
    return [cx + rr * Math.cos(a), cy + rr * Math.sin(a)];
  });
  // Zeichen: star | circle | tri | sq | pent | hex
  function sym(kind, cx, cy, r, fill, extra = '') {
    const e = extra ? ' ' + extra : '';
    if (kind === 'star') return `<polygon points="${pts(starPts(cx, cy + r * 0.06, r * 1.05))}" fill="${fill}"${e}/>`;
    if (kind === 'circle') return `<circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r * 0.82)}" fill="${fill}"${e}/>`;
    if (kind === 'tri') return `<polygon points="${pts(ngon(cx, cy + r * 0.18, r * 1.02, 3))}" fill="${fill}"${e}/>`;
    if (kind === 'sq') return `<rect x="${f1(cx - r * 0.74)}" y="${f1(cy - r * 0.74)}" width="${f1(r * 1.48)}" height="${f1(r * 1.48)}" fill="${fill}"${e}/>`;
    if (kind === 'pent') return `<polygon points="${pts(ngon(cx, cy + r * 0.06, r * 0.92, 5))}" fill="${fill}"${e}/>`;
    if (kind === 'hex') return `<polygon points="${pts(ngon(cx, cy, r * 0.9, 6))}" fill="${fill}"${e}/>`;
    return '';
  }
  const SC = { star: GOLD, circle: CYAN, tri: PINK };
  // Würfelaugen auf einem Quadrat
  function pips(x, y, size, n, fill = DARK) {
    const q = size / 4, cx = x + size / 2, cy = y + size / 2;
    const P = { tl: [x + q, y + q], tr: [x + 3 * q, y + q], ml: [x + q, cy], mr: [x + 3 * q, cy], bl: [x + q, y + 3 * q], br: [x + 3 * q, y + 3 * q], c: [cx, cy] };
    const L = { 1: ['c'], 2: ['tr', 'bl'], 3: ['tr', 'c', 'bl'], 4: ['tl', 'tr', 'bl', 'br'], 5: ['tl', 'tr', 'c', 'bl', 'br'], 6: ['tl', 'tr', 'ml', 'mr', 'bl', 'br'] }[n] || [];
    return L.map(k => `<circle cx="${f1(P[k][0])}" cy="${f1(P[k][1])}" r="${f1(size / 10)}" fill="${fill}"/>`).join('');
  }
  // Pfeil vom Mittelpunkt, Winkel im Uhrzeigersinn ab „oben“
  function needle(cx, cy, len, deg, col, w = 5, head = 11, hw = 7) {
    const a = deg * Math.PI / 180, ux = Math.sin(a), uy = -Math.cos(a);
    const tipX = cx + len * ux, tipY = cy + len * uy, bx = cx + (len - head) * ux, by = cy + (len - head) * uy;
    return `<line x1="${cx}" y1="${cy}" x2="${f1(bx)}" y2="${f1(by)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"/>` +
      `<polygon points="${pts([[tipX, tipY], [bx - hw * uy, by + hw * ux], [bx + hw * uy, by - hw * ux]])}" fill="${col}"/>`;
  }
  // Streichholz
  function stick(x1, y1, x2, y2) {
    return `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke="#f4d58d" stroke-width="4" stroke-linecap="round"/>` +
      `<circle cx="${f1(x2)}" cy="${f1(y2)}" r="3.4" fill="#ef4444"/>`;
  }

  // ---------- Grafiken ----------

  // E: Fliesenmuster mit Lücke – je vier Viertelkreise bilden einen Kreis
  function svgKachel() {
    const T = 40, ox = 60, oy = 8, R = 34;
    const quarter = (x, y, corner, col) => {
      const right = corner === 'TR' || corner === 'BR', bottom = corner === 'BL' || corner === 'BR';
      const cx = right ? x + T : x, cy = bottom ? y + T : y, sx = right ? -1 : 1, sy = bottom ? -1 : 1;
      return `<path d="M ${cx} ${cy} L ${cx + sx * R} ${cy} A ${R} ${R} 0 0 ${sx * sy > 0 ? 1 : 0} ${cx} ${cy + sy * R} Z" fill="${col}"/>`;
    };
    const tile = (x, y, corner, col) => `<rect x="${x}" y="${y}" width="${T}" height="${T}" fill="${TILE}" stroke="rgba(255,255,255,.4)" stroke-width="1.5"/>` + quarter(x, y, corner, col);
    let s = '';
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
      const x = ox + c * T, y = oy + r * T;
      if (r === 2 && c === 1) { s += `<rect x="${x + 2}" y="${y + 2}" width="${T - 4}" height="${T - 4}" fill="none" stroke="${GOLD}" stroke-width="2.5" stroke-dasharray="5 4"/>` + tx(x + T / 2, y + T / 2 + 8, '?', 22); continue; }
      const corner = [['BR', 'BL'], ['TR', 'TL']][r % 2][c % 2];
      const col = (Math.floor(r / 2) + Math.floor(c / 2)) % 2 ? CYAN : PINK;
      s += tile(x, y, corner, col);
    }
    const opts = [['BR', CYAN], ['BL', PINK], ['BL', CYAN], ['TR', CYAN]];
    opts.forEach(([cn, col], i) => { const x = 22 + i * 64; s += tile(x, 190, cn, col) + tx(x + T / 2, 254, 'ABCD'[i]); });
    return svg('0 0 280 262', s);
  }

  // E: drei Zeichen rücken weiter
  function svgSymRot() {
    const frames = [['star', 'circle', 'tri'], ['tri', 'star', 'circle'], ['circle', 'tri', 'star']];
    const opts = [['star', 'tri', 'circle'], ['circle', 'star', 'tri'], ['star', 'circle', 'tri'], ['tri', 'circle', 'star']];
    let s = '';
    frames.forEach((f, i) => {
      const y = 6 + i * 50;
      s += box(8, y, 138, 42);
      f.forEach((k, j) => { s += sym(k, 40 + j * 37, y + 21, 14, SC[k]); });
    });
    s += qbox(8, 156, 138, 42);
    opts.forEach((f, i) => {
      const y = 6 + i * 50;
      s += box(166, y, 128, 42) + tx(182, y + 27, 'ABCD'[i], 16);
      f.forEach((k, j) => { s += sym(k, 214 + j * 30, y + 21, 11, SC[k]); });
    });
    return svg('0 0 300 206', s);
  }

  // E: Dominofolge
  function svgDomino() {
    const dom = (x, y, w, a, b) => `<rect x="${x}" y="${y}" width="${w}" height="${2 * w}" rx="6" fill="#f8f7ff" stroke="#c7c3f5" stroke-width="2"/>` +
      `<line x1="${x + 5}" y1="${y + w}" x2="${x + w - 5}" y2="${y + w}" stroke="${DARK}" stroke-width="2"/>` + pips(x, y, w, a) + pips(x, y + w, w, b);
    let s = '';
    [[1, 6], [2, 5], [3, 4], [4, 3]].forEach(([a, b], i) => { s += dom(14 + i * 56, 8, 36, a, b); });
    s += qbox(238, 8, 36, 72);
    [[5, 3], [2, 5], [5, 2], [4, 2]].forEach(([a, b], i) => { const x = 28 + i * 66; s += dom(x, 104, 36, a, b) + tx(x + 18, 202, 'ABCD'[i]); });
    return svg('0 0 290 210', s);
  }

  // E: Streifenmuster mit einem Fehler
  function svgMusterFehler() {
    const C = 36, ox = 60, oy = 8, cols = [PINK, CYAN, GOLD];
    const labels = { '0,3': 'A', '3,1': 'B', '1,1': 'C', '4,4': 'D' };
    let s = '';
    for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) {
      let col = cols[(r + c) % 3];
      if (r === 3 && c === 1) col = GOLD; // Fehler (richtig wäre Türkis)
      s += `<rect x="${ox + c * C}" y="${oy + r * C}" width="${C}" height="${C}" fill="${col}" stroke="${DARK}" stroke-width="2"/>`;
      const L = labels[r + ',' + c];
      if (L) s += `<text x="${ox + c * C + C / 2}" y="${oy + r * C + C / 2 + 7}" text-anchor="middle" font-size="19" font-weight="800" fill="${DARK}">${L}</text>`;
    }
    return svg('0 0 300 196', s);
  }

  // E: Zeile bestimmt die Form, Spalte die Farbe
  function svgZeileSpalte() {
    const C = 56, ox = 66, oy = 6, shapes = ['circle', 'sq', 'tri'], cols = [PINK, CYAN, GOLD];
    let s = '';
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
      const x = ox + c * C, y = oy + r * C;
      if (r === 2 && c === 2) { s += qbox(x + 3, y + 3, C - 6, C - 6); continue; }
      s += `<rect class="cell" x="${x}" y="${y}" width="${C}" height="${C}"/>` + sym(shapes[r], x + C / 2, y + C / 2, 19, cols[c]);
    }
    const opts = [['tri', PINK], ['sq', GOLD], ['tri', CYAN], ['tri', GOLD]];
    opts.forEach(([k, col], i) => { const x = 18 + i * 66; s += box(x, 186, 50, 50) + sym(k, x + 25, 211, 17, col) + tx(x + 25, 258, 'ABCD'[i]); });
    return svg('0 0 300 266', s);
  }

  // E: Zeichen zählen und Werte addieren (4 Sterne, 3 Kreise, 5 Dreiecke)
  function svgSymbolwerte() {
    const order = ['tri', 'star', 'circle', 'tri', 'star', 'tri', 'circle', 'tri', 'star', 'circle', 'tri', 'star'];
    let s = '';
    order.forEach((k, i) => {
      const x = 34 + (i % 6) * 46 + (Math.floor(i / 6) % 2) * 0, y = 34 + Math.floor(i / 6) * 58 + (i % 2) * 12;
      s += sym(k, x, y, 17, SC[k]);
    });
    return svg('0 0 300 150', s);
  }

  // M: Analogie – innen und außen tauschen
  function svgAnalogie() {
    const fig = (x, y, outer, oc, inner, ic) => box(x, y, 62, 62) + sym(outer, x + 31, y + 31, 26, oc) +
      sym(inner, x + 31, y + 33, 10, ic, `stroke="${DARK}" stroke-width="2"`);
    const arr = (x, y) => `<line x1="${x}" y1="${y}" x2="${x + 12}" y2="${y}" stroke="${WHITE}" stroke-width="3"/><polygon points="${x + 18},${y} ${x + 10},${y - 6} ${x + 10},${y + 6}" fill="${WHITE}"/>`;
    let s = fig(4, 8, 'circle', PINK, 'sq', CYAN) + arr(70, 39) + fig(92, 8, 'sq', CYAN, 'circle', PINK);
    s += `<line x1="164" y1="12" x2="164" y2="66" stroke="rgba(255,255,255,.3)" stroke-width="2"/>`;
    s += fig(172, 8, 'tri', GOLD, 'circle', PINK) + arr(238, 39) + qbox(260, 8, 36, 62);
    const opts = [['circle', GOLD, 'tri', PINK], ['circle', PINK, 'tri', GOLD], ['tri', PINK, 'circle', GOLD], ['circle', CYAN, 'tri', GOLD]];
    opts.forEach((o, i) => { const x = 14 + i * 72; s += fig(x, 100, ...o) + tx(x + 31, 184, 'ABCD'[i]); });
    return svg('0 0 300 192', s);
  }

  // M: Punkte-Matrix – links + Mitte = rechts
  function svgPunkteMatrix() {
    const C = 62, ox = 57, oy = 6, M = [[1, 4, 5], [3, 3, 6], [2, 5, null]];
    let s = '';
    M.forEach((row, r) => row.forEach((n, c) => {
      const x = ox + c * C, y = oy + r * C;
      if (n === null) { s += qbox(x + 4, y + 4, C - 8, C - 8); return; }
      s += `<rect class="cell" x="${x}" y="${y}" width="${C}" height="${C}"/>` + pips(x + 4, y + 4, C - 8, n, WHITE);
    }));
    return svg('0 0 300 198', s);
  }

  // M: Kreis, Quadrat, Dreieck – wo gibt es Kreis ∩ Dreieck ohne Quadrat?
  const OVL = {
    A: { c: [24, 30, 17], s: [18, 16, 38], t: [[46, 8], [66, 56], [26, 56]] },
    B: { c: [44, 44, 17], s: [8, 8, 34], t: [[22, 20], [64, 62], [14, 62]] },
    C: { c: [20, 22, 14], s: [18, 30, 34], t: [[54, 8], [66, 62], [38, 62]] },
    D: { c: [46, 26, 17], s: [10, 14, 40], t: [[24, 6], [42, 60], [4, 60]] },
  };
  function svgUeberlapp() {
    let s = '';
    'ABCD'.split('').forEach((k, i) => {
      const p = OVL[k], ox = 2 + i * 76, oy = 4;
      s += `<g transform="translate(${ox},${oy})">` + box(-2, -2, 72, 72) +
        `<rect x="${p.s[0]}" y="${p.s[1]}" width="${p.s[2]}" height="${p.s[2]}" fill="rgba(34,211,238,.18)" stroke="${CYAN}" stroke-width="2.5"/>` +
        `<circle cx="${p.c[0]}" cy="${p.c[1]}" r="${p.c[2]}" fill="rgba(255,122,182,.18)" stroke="${PINK}" stroke-width="2.5"/>` +
        `<polygon points="${pts(p.t)}" fill="rgba(255,201,64,.16)" stroke="${GOLD}" stroke-width="2.5" stroke-linejoin="round"/></g>`;
      s += tx(ox + 34, 96, k);
    });
    return svg('0 0 300 104', s);
  }

  // Gleichungszeile aus Zeichen und Text
  function eqRow(y, items, h = 18) {
    // items: ['star'] | ['txt', '+'] …  – gleichmäßig von links
    let s = '', x = 14;
    for (const it of items) {
      if (it[0] === 'txt') { s += tx(x + 12, y + 8, it[1], 24); x += 26; }
      else if (it[0] === 'num') { s += tx(x + 20, y + 9, it[1], 26); x += 42; }
      else { s += sym(it[0], x + h, y, h, SC[it[0]]); x += 2 * h + 8; }
    }
    return s;
  }

  // M: drei Paarsummen
  function svgPaarsummen() {
    const rows = [[['star'], ['txt', '+'], ['circle'], ['txt', '='], ['num', 14]],
      [['circle'], ['txt', '+'], ['tri'], ['txt', '='], ['num', 11]],
      [['star'], ['txt', '+'], ['tri'], ['txt', '='], ['num', 13]]];
    return svg('0 0 210 156', rows.map((r, i) => eqRow(28 + i * 50, r)).join(''));
  }

  // M: Punkt springt um ein Quadrat (8 Plätze, im Uhrzeigersinn ab oben links)
  const RING8 = [[0, 0], [0.5, 0], [1, 0], [1, 0.5], [1, 1], [0.5, 1], [0, 1], [0, 0.5]];
  function ringFrame(x, y, w, pos) {
    let s = `<rect x="${x}" y="${y}" width="${w}" height="${w}" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="2"/>`;
    RING8.forEach(([u, v], i) => { s += `<circle cx="${f1(x + u * w)}" cy="${f1(y + v * w)}" r="${i === pos ? 8 : 4}" fill="${i === pos ? PINK : '#3a3f72'}"/>`; });
    return s;
  }
  function svgPunktWandert() {
    let s = '';
    [0, 1, 3, 6].forEach((p, i) => { const x = 18 + i * 72; s += ringFrame(x, 14, 44, p) + tx(x + 22, 84, i + 1, 14, 'opacity=".7"'); });
    [1, 2, 4, 7].forEach((p, i) => { const x = 18 + i * 72; s += box(x - 12, 104, 68, 68) + ringFrame(x, 116, 44, p) + tx(x + 22, 194, 'ABCD'[i]); });
    return svg('0 0 300 202', s);
  }

  // M: zwei Pfeile – einer passt nicht
  function svgFehlerFolge() {
    // beide Pfeile gleich lang mit schmaler Spitze, damit sie sich bei 45° Abstand nicht überdecken
    const gold = [0, 90, 180, 270, 0], pink = [90, 45, 0, 225, 270]; // richtig wäre bei C (Index 3) 315°
    let s = '';
    for (let i = 0; i < 5; i++) {
      const x = 2 + i * 60, cx = x + 28, cy = 34;
      s += box(x, 6, 56, 56) + needle(cx, cy, 25, gold[i], GOLD, 4, 8, 4.5) + needle(cx, cy, 25, pink[i], PINK, 4, 8, 4.5) + `<circle cx="${cx}" cy="${cy}" r="3.5" fill="${WHITE}"/>`;
      s += tx(cx, 84, i === 0 ? 'Start' : 'ABCD'[i - 1], i === 0 ? 12 : 16);
    }
    return svg('0 0 300 92', s);
  }

  // M: Perlenkette
  function svgPerlen() {
    const pat = [PINK, PINK, CYAN, GOLD, CYAN];
    let s = `<line x1="6" y1="28" x2="270" y2="28" stroke="rgba(255,255,255,.5)" stroke-width="2"/>`;
    for (let i = 0; i < 12; i++) s += `<circle cx="${16 + i * 21}" cy="28" r="9" fill="${pat[i % 5]}"/>`;
    s += tx(284, 34, '…', 20);
    return svg('0 0 300 54', s);
  }

  // H: Ecken je Zeile und Spalte
  function svgEckenMatrix() {
    const C = 58, ox = 63, oy = 4, M = [['tri', 'pent', 'sq'], ['hex', 'tri', 'tri'], ['tri', null, 'pent']];
    let s = '';
    M.forEach((row, r) => row.forEach((k, c) => {
      const x = ox + c * C, y = oy + r * C;
      if (k === null) { s += qbox(x + 4, y + 4, C - 8, C - 8); return; }
      s += `<rect class="cell" x="${x}" y="${y}" width="${C}" height="${C}"/>` + sym(k, x + C / 2, y + C / 2, 21, GOLD);
    }));
    ['sq', 'tri', 'pent', 'hex'].forEach((k, i) => { const x = 18 + i * 68; s += box(x, 188, 52, 52) + sym(k, x + 26, 214, 18, GOLD) + tx(x + 26, 262, 'ABCD'[i]); });
    return svg('0 0 300 270', s);
  }

  // H: Spirale aus Zeichen
  function svgSpirale() {
    const N = 5, C = 40, ox = 50, oy = 4, cyc = ['star', 'circle', 'tri'];
    const order = []; { let t = 0, b = N - 1, l = 0, r = N - 1;
      while (t <= b && l <= r) {
        for (let c = l; c <= r; c++) order.push([t, c]); t++;
        for (let rr = t; rr <= b; rr++) order.push([rr, r]); r--;
        if (t <= b) { for (let c = r; c >= l; c--) order.push([b, c]); b--; }
        if (l <= r) { for (let rr = b; rr >= t; rr--) order.push([rr, l]); l++; }
      } }
    let s = '';
    order.forEach(([r, c], i) => {
      const x = ox + c * C, y = oy + r * C;
      if (r === 2 && c === 2) { s += `<rect class="cell" x="${x}" y="${y}" width="${C}" height="${C}"/>` + tx(x + C / 2, y + C / 2 + 9, '?', 26); return; }
      const k = cyc[i % 3];
      s += `<rect class="cell" x="${x}" y="${y}" width="${C}" height="${C}"/>` + sym(k, x + C / 2, y + C / 2, 13, SC[k]);
    });
    return svg('0 0 300 208', s);
  }

  // H: Formen als Rechenbefehle (Kreis ×2, Quadrat +3, innen zuerst)
  function nested(cx, cy, kinds, num) {
    // kinds: von außen nach innen, z. B. ['circle', 'sq']
    let s = '', size = 27, prev = null;
    kinds.forEach((k) => {
      if (prev) size *= prev === 'circle' ? (k === 'sq' ? 0.66 : 0.72) : (k === 'circle' ? 0.84 : 0.72);
      s += k === 'circle' ? `<circle cx="${cx}" cy="${cy}" r="${f1(size)}" fill="none" stroke="${PINK}" stroke-width="3"/>`
        : `<rect x="${f1(cx - size)}" y="${f1(cy - size)}" width="${f1(2 * size)}" height="${f1(2 * size)}" fill="none" stroke="${CYAN}" stroke-width="3"/>`;
      prev = k;
    });
    return s + tx(cx, cy + 6, num, 17);
  }
  function svgRechen() {
    const rows = [[['circle'], 4, 8], [['sq'], 4, 7], [['circle', 'sq'], 2, 10], [['circle', 'circle', 'sq'], 1, '?']];
    let s = '';
    rows.forEach(([k, n, v], i) => { const y = 34 + i * 66; s += nested(64, y, k, n) + tx(132, y + 9, '=', 26) + tx(184, y + 10, v, 28); });
    return svg('0 0 236 266', s);
  }

  // H: Dreieck mit Löchern, Schritt 1 bis 4
  function svgSierpinski() {
    const tri = (A, B, C, d, out) => {
      if (d === 0) { out.push(`<polygon points="${pts([A, B, C])}" fill="${PINK}"/>`); return; }
      const m = (p, q) => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
      tri(A, m(A, B), m(A, C), d - 1, out); tri(m(A, B), B, m(B, C), d - 1, out); tri(m(A, C), m(B, C), C, d - 1, out);
    };
    let s = '';
    [0, 1, 2, 3].forEach((d, i) => {
      const ox = 14 + (i % 2) * 150, oy = 8 + Math.floor(i / 2) * 128, w = 122, h = 106;
      const out = []; tri([ox + w / 2, oy], [ox, oy + h], [ox + w, oy + h], d, out);
      s += out.join('') + tx(ox + w / 2, oy + h + 18, i + 1, 14, 'opacity=".75"');
    });
    return svg('0 0 300 262', s);
  }

  // H: zwei Punkte auf einem Ring mit 8 Plätzen
  function svgWanderer() {
    const P = [0, 1, 2], T = [5, 3, 1];
    let s = '';
    for (let i = 0; i < 3; i++) {
      const cx = 52 + i * 98, cy = 50, R = 34;
      s += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="rgba(255,255,255,.4)" stroke-width="2"/>`;
      for (let k = 0; k < 8; k++) {
        const a = k * Math.PI / 4, x = cx + R * Math.sin(a), y = cy - R * Math.cos(a);
        s += `<circle cx="${f1(x)}" cy="${f1(y)}" r="4" fill="#3a3f72"/>`;
        if (P[i] === k) s += `<circle cx="${f1(x)}" cy="${f1(y)}" r="9" fill="${PINK}"/>`;
        if (T[i] === k) s += `<circle cx="${f1(x)}" cy="${f1(y)}" r="9" fill="${CYAN}"/>`;
      }
      s += tx(cx, 112, `Bild ${i + 1}`, 14);
    }
    return svg('0 0 300 120', s);
  }

  // H: Vielecke mit allen Diagonalen (Seiten weiß, Diagonalen pink)
  function svgDiagonalen() {
    let s = '';
    [3, 4, 5, 6].forEach((n, i) => {
      const P = ngon(40 + i * 73, 48, 30, n, n === 4 ? -135 : -90);
      for (let a = 0; a < n; a++) for (let b = a + 2; b < n; b++) {
        if (a === 0 && b === n - 1) continue; // Nachbarn: das ist eine Seite
        s += `<line x1="${f1(P[a][0])}" y1="${f1(P[a][1])}" x2="${f1(P[b][0])}" y2="${f1(P[b][1])}" stroke="${PINK}" stroke-width="2.4"/>`;
      }
      s += `<polygon points="${pts(P)}" fill="none" stroke="${WHITE}" stroke-width="2.4" stroke-linejoin="round"/>`;
      P.forEach(([x, y]) => { s += `<circle cx="${f1(x)}" cy="${f1(y)}" r="3.5" fill="${GOLD}"/>`; });
    });
    return svg('0 0 300 92', s);
  }

  // H: Treppe aus Streichhölzern, 1 bis 3 Stufen
  function svgTreppe() {
    const L = 22, g = 3;
    const stair = (x0, yb, n) => {
      const E = new Set(); let s = '';
      for (let c = 0; c < n; c++) for (let h = 0; h <= c; h++) {
        E.add(`h,${c},${h}`); E.add(`h,${c},${h + 1}`); E.add(`v,${c},${h}`); E.add(`v,${c + 1},${h}`);
      }
      for (const e of E) {
        const [t, a, b] = e.split(','), i = +a, j = +b;
        if (t === 'h') s += stick(x0 + i * L + g, yb - j * L, x0 + (i + 1) * L - g, yb - j * L);
        else s += stick(x0 + i * L, yb - j * L - g, x0 + i * L, yb - (j + 1) * L + g);
      }
      return s;
    };
    let s = stair(14, 84, 1) + stair(62, 84, 2) + stair(140, 84, 3);
    s += tx(25, 106, '1', 14) + tx(84, 106, '2', 14) + tx(173, 106, '3', 14);
    s += tx(262, 70, '…', 26);
    return svg('0 0 300 114', s);
  }

  // S: Lampenreihe (Zweiersystem)
  function svgLampen() {
    let s = '';
    for (let n = 1; n <= 5; n++) {
      const y = 22 + (n - 1) * 42;
      s += tx(34, y + 6, `Bild ${n}`, 13, 'opacity=".75"');
      for (let k = 0; k < 4; k++) {
        const on = (n >> (3 - k)) & 1, x = 98 + k * 40;
        s += on ? `<circle cx="${x}" cy="${y}" r="15" fill="${GOLD}" opacity=".25"/><circle cx="${x}" cy="${y}" r="12" fill="${GOLD}"/>`
          : `<circle cx="${x}" cy="${y}" r="12" fill="#262b5c" stroke="rgba(255,255,255,.35)" stroke-width="1.5"/>`;
      }
    }
    return svg('0 0 250 214', s);
  }

  // S: Siebensegment-Negativ – es leuchtet, was der Ziffer fehlt
  const SEG = { 1: 'bc', 2: 'abged', 3: 'abgcd', 4: 'fgbc' };
  function negDigit(x, y, w, h, d) {
    const gp = 4, hh = h / 2;
    const S = {
      a: [x + gp, y, x + w - gp, y], b: [x + w, y + gp, x + w, y + hh - gp], c: [x + w, y + hh + gp, x + w, y + h - gp],
      d: [x + gp, y + h, x + w - gp, y + h], e: [x, y + hh + gp, x, y + h - gp], f: [x, y + gp, x, y + hh - gp], g: [x + gp, y + hh, x + w - gp, y + hh],
    };
    let s = '';
    for (const k of 'abcdefg') {
      const lit = !SEG[d].includes(k), [x1, y1, x2, y2] = S[k];
      s += `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke="${lit ? GOLD : 'rgba(255,255,255,.2)'}" stroke-width="6" stroke-linecap="round"/>`;
    }
    return s;
  }
  function svgSegment() {
    let s = '';
    [1, 2, 3, 4].forEach((d, i) => { const x = 8 + i * 58; s += box(x, 6, 50, 84) + negDigit(x + 12, 18, 26, 60, d); });
    s += qbox(240, 6, 50, 84);
    return svg('0 0 300 96', s);
  }

  // S: Ballon-Gleichung – Anzahl der Ballons beachten
  function bunch(cx, y, n) {
    const xs = n === 3 ? [-12, 0, 12] : n === 2 ? [-7, 7] : [0];
    const ys = n === 3 ? [4, -6, 4] : [0, 0];
    let s = '';
    xs.forEach((dx, i) => { s += `<line x1="${cx + dx}" y1="${y + ys[i] + 9}" x2="${cx}" y2="${y + 26}" stroke="rgba(255,255,255,.7)" stroke-width="1.4"/>`; });
    xs.forEach((dx, i) => { s += `<ellipse cx="${cx + dx}" cy="${y + ys[i]}" rx="7.5" ry="9.5" fill="${PINK}" stroke="${DARK}" stroke-width="1.5"/>`; });
    return s;
  }
  function svgBallon() {
    let s = '';
    const T = (x, y, t) => tx(x, y + 8, t, 24);
    // Zeile 1: B3 + B3 + B3 = 18
    let y = 18;
    s += bunch(30, y, 3) + T(62, y + 4, '+') + bunch(94, y, 3) + T(126, y + 4, '+') + bunch(158, y, 3) + T(192, y + 4, '=') + tx(232, y + 13, 18, 26);
    // Zeile 2: B3 + ★ + ★ = 16
    y = 72;
    s += bunch(30, y, 3) + T(62, y + 4, '+') + sym('star', 94, y + 4, 15, GOLD) + T(126, y + 4, '+') + sym('star', 158, y + 4, 15, GOLD) + T(192, y + 4, '=') + tx(232, y + 13, 16, 26);
    // Zeile 3: B2 + ★ × B3 = ?
    y = 126;
    s += bunch(30, y, 2) + T(62, y + 4, '+') + sym('star', 94, y + 4, 15, GOLD) + T(126, y + 4, '×') + bunch(158, y, 3) + T(192, y + 4, '=') + tx(232, y + 13, '?', 26);
    return svg('0 0 260 168', s);
  }

  // S: Mobile mit Hebelarmen
  function svgMobile() {
    const u = 30, P = 180, yTop = 34, yLow = 96;
    const dots = (x0, n, y) => Array.from({ length: n }, (_, i) => `<circle cx="${x0 + i * u}" cy="${y}" r="3.5" fill="${GOLD}"/>`).join('');
    let s = `<line x1="${P}" y1="4" x2="${P}" y2="${yTop}" stroke="${WHITE}" stroke-width="2"/>`;
    // obere Stange: links 3 Einheiten (Unterstange), rechts 2 Einheiten (Stern)
    s += `<line x1="${P - 3 * u}" y1="${yTop}" x2="${P + 2 * u}" y2="${yTop}" stroke="${WHITE}" stroke-width="5" stroke-linecap="round"/>` + dots(P - 3 * u, 6, yTop);
    s += `<circle cx="${P}" cy="${yTop}" r="5" fill="${WHITE}"/>`;
    s += `<line x1="${P + 2 * u}" y1="${yTop}" x2="${P + 2 * u}" y2="${yTop + 34}" stroke="${WHITE}" stroke-width="1.6"/>` + sym('star', P + 2 * u, yTop + 52, 18, GOLD);
    // untere Stange hängt bei P − 3u: links 2 Einheiten Kreis, rechts 3 Einheiten Dreieck
    const Q = P - 3 * u;
    s += `<line x1="${Q}" y1="${yTop}" x2="${Q}" y2="${yLow}" stroke="${WHITE}" stroke-width="1.6"/>`;
    s += `<line x1="${Q - 2 * u}" y1="${yLow}" x2="${Q + 3 * u}" y2="${yLow}" stroke="${WHITE}" stroke-width="5" stroke-linecap="round"/>` + dots(Q - 2 * u, 6, yLow);
    s += `<circle cx="${Q}" cy="${yLow}" r="5" fill="${WHITE}"/>`;
    s += `<line x1="${Q - 2 * u}" y1="${yLow}" x2="${Q - 2 * u}" y2="${yLow + 30}" stroke="${WHITE}" stroke-width="1.6"/>` + sym('circle', Q - 2 * u, yLow + 46, 19, CYAN);
    s += tx(Q - 2 * u, yLow + 52, '6 g', 13, `fill="${DARK}" style="fill:${DARK}"`);
    s += `<line x1="${Q + 3 * u}" y1="${yLow}" x2="${Q + 3 * u}" y2="${yLow + 30}" stroke="${WHITE}" stroke-width="1.6"/>` + sym('tri', Q + 3 * u, yLow + 48, 19, PINK);
    return svg('0 0 280 170', s);
  }

  // S: Sechseck-Fliese aus 6 Dreiecken
  function hexTile(cx, cy, R, bits) {
    const V = ngon(cx, cy, R, 6, -90);
    let s = '';
    for (let i = 0; i < 6; i++) {
      const a = V[i], b = V[(i + 1) % 6];
      s += `<polygon points="${pts([[cx, cy], a, b])}" fill="${bits[i] ? PINK : CYAN}" stroke="${DARK}" stroke-width="2.5" stroke-linejoin="round"/>`;
    }
    return s;
  }
  function svgFliesen() {
    const A = [1, 1, 0, 1, 0, 0], B = [0, 1, 1, 0, 1, 0]; // B = A um 60° gedreht
    let s = hexTile(70, 56, 46, A) + tx(150, 66, '=', 30) + hexTile(230, 56, 46, B);
    s += tx(150, 122, 'gleiche Fliese, nur gedreht', 13, 'opacity=".75"');
    return svg('0 0 300 130', s);
  }

  // S: Spiegelachse mit möglichst wenig neuen Feldern
  function svgSymmetrie() {
    const on = ['0,0', '0,1', '0,2', '0,3', '1,0', '1,2', '2,0'], C = 44, ox = 62, oy = 6;
    let s = '';
    for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) {
      s += `<rect x="${ox + c * C}" y="${oy + r * C}" width="${C}" height="${C}" fill="${on.includes(r + ',' + c) ? PINK : '#f3f4ff'}" stroke="${DARK}" stroke-width="2.5"/>`;
    }
    return svg('0 0 300 188', s);
  }

  QUIZ_ADD([
    // ================= leicht =================
    { id: 'b2c-kachel-luecke', fam: 'kachel-luecke', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welche Fliese gehört in die Lücke?', svg: svgKachel(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [1, 1, 0, 0, 0],
      ex: 'Je vier Fliesen bilden einen Kreis, und die Kreise wechseln pink – türkis wie auf einem Schachbrett. In die Lücke gehört ein türkisfarbener Viertelkreis, dessen Ecke unten links in der Fliese liegt.' },
    { id: 'b2c-symbole-rotieren', fam: 'symbole-rotieren', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welche Reihe gehört an die Stelle des Fragezeichens?', svg: svgSymRot(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [1, 1, 0, 0, 0],
      ex: 'Von Reihe zu Reihe rückt jedes Zeichen einen Platz nach rechts, das rechte springt nach vorn. Nach drei Schritten steht wieder Stern, Kreis, Dreieck da.' },
    { id: 'b2c-domino-folge', fam: 'domino-folge', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welcher Dominostein setzt die Reihe fort?', svg: svgDomino(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [1, 1, 0, 0, 0],
      ex: 'Oben kommt jedes Mal ein Auge dazu (1, 2, 3, 4 – also 5), unten fällt eins weg (6, 5, 4, 3 – also 2).' },
    { id: 'b2c-muster-fehler', fam: 'fehler-im-muster', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'In genau einem der markierten Felder stimmt das Muster nicht. In welchem?', svg: svgMusterFehler(),
      opts: ['A', 'B', 'C', 'D'], a: 1, r: [1, 1, 0, 0, 0],
      ex: 'Die Farben laufen in schrägen Streifen pink – türkis – gelb. Im Feld B müsste Türkis stehen, es ist aber gelb.' },
    { id: 'b2c-matrix-zeile-spalte', fam: 'matrix-3x3', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welches Feld gehört an die Stelle des Fragezeichens?', svg: svgZeileSpalte(),
      opts: ['A', 'B', 'C', 'D'], a: 3, r: [1, 1, 0, 0, 0],
      ex: 'Jede Zeile hat ihre Form (Kreis, Quadrat, Dreieck), jede Spalte ihre Farbe (pink, türkis, gelb). Unten rechts fehlt also ein gelbes Dreieck.' },
    { id: 'b2c-symbolwerte', fam: 'symbolwerte-zaehlen', cat: 'Bilder', type: 'number',
      q: 'Ein Stern ist 3 wert, ein Kreis 2 und ein Dreieck 1. Wie viel sind alle Zeichen im Bild zusammen wert?', svg: svgSymbolwerte(),
      a: 23, r: [1, 0, 0, 2, 0],
      ex: '4 Sterne × 3 = 12, 3 Kreise × 2 = 6 und 5 Dreiecke × 1 = 5. Zusammen 23.' },

    // ================= mittel =================
    { id: 'b2c-formen-analogie', fam: 'formen-analogie', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Links wird aus dem ersten Bild das zweite. Was wird nach derselben Regel aus dem gelben Dreieck?', svg: svgAnalogie(),
      opts: ['A', 'B', 'C', 'D'], a: 1, r: [1, 1, 1, 0, 0],
      ex: 'Außen- und Innenform tauschen die Plätze, jede behält dabei ihre Farbe. Also wird der pinke Kreis groß und das gelbe Dreieck klein.' },
    { id: 'b2c-punkte-addieren', fam: 'matrix-punkte-summe', cat: 'Bilder', type: 'number',
      q: 'Wie viele Punkte gehören in das leere Feld?', svg: svgPunkteMatrix(),
      a: 7, r: [2, 1, 0, 1, 0],
      ex: 'In jeder Zeile ergeben die Punkte links und in der Mitte zusammen die Punkte rechts: 1 + 4 = 5, 3 + 3 = 6, also 2 + 5 = 7.' },
    { id: 'b2c-ueberlapp-bereich', fam: 'mengen-bild', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'In welchem Bild gibt es eine Stelle, die im Kreis <b>und</b> im Dreieck liegt, aber <b>nicht</b> im Quadrat?', svg: svgUeberlapp(),
      opts: ['A', 'B', 'C', 'D'], a: 1, r: [2, 1, 1, 0, 0],
      ex: 'Nur in B ragt die Überlappung von Kreis und Dreieck unten rechts aus dem Quadrat heraus. In A und D liegt sie ganz im Quadrat, in C berühren sich Kreis und Dreieck gar nicht.' },
    { id: 'b2c-symbol-paarsummen', fam: 'symbol-paarsummen', cat: 'Bilder', type: 'number',
      q: 'Gleiche Zeichen haben gleiche Werte. Welchen Wert hat der Kreis?', svg: svgPaarsummen(),
      a: 6, r: [2, 1, 0, 2, 0],
      ex: 'Alle drei Zeilen zusammen enthalten jedes Zeichen zweimal: 14 + 11 + 13 = 38, also sind Stern, Kreis und Dreieck zusammen 19. Ohne Stern + Dreieck (13) bleibt für den Kreis 6.' },
    { id: 'b2c-punkt-wandert', fam: 'punkt-wandert', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Der Punkt wandert nach einer Regel um das Quadrat. Wo steht er im nächsten Bild?', svg: svgPunktWandert(),
      opts: ['A', 'B', 'C', 'D'], a: 1, r: [2, 1, 1, 1, 0],
      ex: 'Der Punkt springt im Uhrzeigersinn erst 1, dann 2, dann 3 Plätze weiter – jetzt also 4: von unten links über links Mitte, oben links und oben Mitte nach oben rechts.' },
    { id: 'b2c-fehler-in-folge', fam: 'fehler-im-muster', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Ein Bild hält sich nicht an die Regel der Reihe. Welches?', svg: svgFehlerFolge(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [2, 1, 1, 1, 0],
      ex: 'Der gelbe Pfeil dreht sich jedes Mal eine Vierteldrehung im Uhrzeigersinn, der pinke eine Achteldrehung gegen den Uhrzeigersinn. In C müsste der pinke Pfeil nach links oben zeigen, nicht nach links unten.' },
    { id: 'b2c-perlen-periode', fam: 'farbfolge', cat: 'Bilder', type: 'number',
      q: 'Die Perlenkette geht immer nach demselben Muster weiter. Wie viele der ersten 52 Perlen sind pink?', svg: svgPerlen(),
      a: 22, r: [2, 1, 1, 2, 0],
      ex: 'Pink, pink, türkis, gelb, türkis wiederholt sich alle 5 Perlen. 50 Perlen sind 10 Durchgänge mit je 2 pinken = 20, und die Perlen 51 und 52 sind wieder pink: 22.' },

    // ================= schwer =================
    { id: 'b2c-ecken-zeilensumme', fam: 'ecken-zeilensumme', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Welche Form gehört an die Stelle des Fragezeichens?', svg: svgEckenMatrix(),
      opts: ['A', 'B', 'C', 'D'], a: 0, r: [2, 2, 1, 1, 0],
      ex: 'In jeder Zeile und jeder Spalte haben die Formen zusammen 12 Ecken, z. B. 3 + 5 + 4 und 6 + 3 + 3. Unten fehlen 12 − 3 − 5 = 4 Ecken: ein Quadrat.' },
    { id: 'b2c-symbol-spirale', fam: 'symbol-spirale', cat: 'Bilder', type: 'choice',
      q: 'Welches Zeichen gehört in die Mitte?', svg: svgSpirale(),
      opts: ['Stern', 'Kreis', 'Dreieck'], a: 0, r: [2, 2, 1, 1, 0],
      ex: 'Lies das Feld als Spirale: Oben links beginnend geht es im Uhrzeigersinn nach innen, immer Stern, Kreis, Dreieck. Das 25. Feld, die Mitte, ist wieder ein Stern.' },
    { id: 'b2c-formen-rechenbefehle', fam: 'formen-rechenbefehle', cat: 'Bilder', type: 'number',
      q: 'Jede Form verändert die Zahl, die in ihr steht, immer auf dieselbe Weise. Welche Zahl ergibt das letzte Bild?', svg: svgRechen(),
      a: 16, r: [3, 2, 1, 2, 0],
      ex: 'Der Kreis verdoppelt, das Quadrat zählt 3 dazu – und zuerst wirkt die innerste Form (Zeile 3: 2 + 3 = 5, verdoppelt 10). Unten: 1 + 3 = 4, verdoppelt 8, noch einmal verdoppelt 16.' },
    { id: 'b2c-zwei-wanderer', fam: 'zwei-wanderer', cat: 'Bilder', type: 'number',
      q: 'Beide Punkte springen von Bild zu Bild immer gleich weit, jeder in seine Richtung. In welchem Bild stehen sie zum ersten Mal auf demselben Platz?', svg: svgWanderer(),
      a: 8, r: [3, 1, 1, 2, 0],
      ex: 'Pink springt 1 Platz im Uhrzeigersinn, Türkis 2 Plätze dagegen. Im Uhrzeigersinn gezählt liegt Türkis zuerst 5 Plätze vor Pink, danach 2, 7, 4, 1, 6, 3 – und in Bild 8 sind es 0 Plätze: beide stehen links oben.' },
    { id: 'b2c-zehneck-diagonalen', fam: 'vieleck-diagonalen', cat: 'Bilder', type: 'number',
      q: 'Pink eingezeichnet sind alle Diagonalen – Linien zwischen zwei Ecken, die nicht nebeneinanderliegen. Wie viele Diagonalen hat ein Vieleck mit 10 Ecken?', svg: svgDiagonalen(),
      a: 35, r: [3, 1, 1, 2, 1],
      ex: 'Von jeder der 10 Ecken gehen Diagonalen zu allen anderen außer den beiden Nachbarn: 7. Jede Diagonale hat zwei Enden, also 10 × 7 : 2 = 35. Die Bilder zeigen 0, 2, 5, 9 – weiter geht es mit 14, 20, 27, 35.' },
    { id: 'b2c-sierpinski-loecher', fam: 'sierpinski-loecher', cat: 'Bilder', type: 'number',
      q: 'Die Figur entsteht Schritt für Schritt nach derselben Regel. Wie viele dreieckige Löcher (große und kleine zusammen) hat sie im 5. Schritt?', svg: svgSierpinski(),
      a: 40, r: [3, 2, 1, 2, 0],
      ex: 'In jedem Schritt bekommt jedes volle pinke Dreieck in der Mitte ein Loch, und es bleiben dreimal so viele volle Dreiecke. Die Löcher: 0, 1, 1 + 3 = 4, 4 + 9 = 13 und im 5. Schritt 13 + 27 = 40.' },
    { id: 'b2c-hoelzer-treppe', fam: 'wachsende-figur', cat: 'Bilder', type: 'number',
      q: 'Die Treppe aus Streichhölzern bekommt immer eine Stufe mehr. Wie viele Streichhölzer braucht die Treppe mit 10 Stufen?', svg: svgTreppe(),
      a: 130, r: [3, 1, 1, 2, 0],
      ex: 'Die Treppen brauchen 4, 10 und 18 Hölzer – jede neue Stufe kostet 2 mehr als die vorige (+6, +8, +10 …). Für 10 Stufen: 4 + 6 + 8 + … + 22 = 130.' },

    // ================= sehr schwer =================
    { id: 'b2c-binaer-lampen', fam: 'lampen-code', cat: 'Bilder', type: 'number',
      q: 'Die Lampenreihe folgt einer festen Regel. Im wievielten Bild leuchten zum ersten Mal alle vier Lampen?', svg: svgLampen(),
      a: 15, r: [2, 3, 1, 2, 1],
      ex: 'Die Lampen zählen im Zweiersystem: Die rechte steht für 1, die nächsten für 2, 4 und 8. Bild 5 = 4 + 1. Alle vier leuchten erst bei 8 + 4 + 2 + 1 = 15.' },
    { id: 'b2c-segment-negativ', fam: 'segment-negativ', cat: 'Bilder', type: 'number',
      q: 'Wie viele Striche leuchten in der nächsten Anzeige?', svg: svgSegment(),
      a: 2, r: [2, 4, 1, 1, 0],
      ex: 'Die dunklen Striche zeigen die Ziffern 1, 2, 3, 4 – es leuchtet jeweils der Rest. Als Nächstes kommt die 5. Ihr fehlen nur die Striche rechts oben und links unten, also leuchten 2.' },
    { id: 'b2c-ballon-gleichung', fam: 'fruit-eq', cat: 'Bilder', type: 'number',
      q: 'Gleiche Zeichen haben gleiche Werte, und jeder einzelne Ballon zählt gleich viel. Welche Zahl gehört an die Stelle des Fragezeichens?', svg: svgBallon(),
      a: 34, r: [3, 1, 3, 2, 0],
      ex: 'Drei Ballons sind 6 wert (18 : 3), ein Ballon also 2, und ein Stern 5 ((16 − 6) : 2). Unten hängen nur 2 Ballons (4), und Punkt vor Strich: 4 + 5 × 6 = 34.' },
    { id: 'b2c-mobile', fam: 'mobile-hebel', cat: 'Bilder', type: 'number',
      q: 'Das Mobile hängt im Gleichgewicht. Stangen und Fäden wiegen nichts, die Punkte auf den Stangen haben gleiche Abstände. Der Kreis wiegt 6 g. Wie viele Gramm wiegt der Stern?', svg: svgMobile(),
      a: 15, r: [3, 2, 2, 2, 1],
      ex: 'Im Gleichgewicht ist Gewicht mal Abstand auf beiden Seiten gleich. Unten: 6 g × 2 = Dreieck × 3, das Dreieck wiegt 4 g, beide zusammen 10 g. Oben: 10 g × 3 = Stern × 2, also 15 g.' },
    { id: 'b2c-fliesen-drehgleich', fam: 'fliesen-drehgleich', cat: 'Bilder', type: 'number',
      q: 'Jede Fliese besteht aus sechs Dreiecken: genau drei pinkfarbenen und drei türkisfarbenen. Fliesen, die durch Drehen gleich aussehen, zählen als eine; umdrehen geht nicht. Wie viele verschiedene Fliesen gibt es?', svg: svgFliesen(),
      a: 4, r: [2, 2, 2, 1, 0],
      ex: 'Zähle rundherum, wie viele türkisfarbene Dreiecke zwischen je zwei pinkfarbenen liegen: 3, 0, 0 (alle pinkfarbenen nebeneinander), 1, 1, 1 (abwechselnd) oder 2, 1, 0 – das letzte rechts- oder linksherum, und diese Spiegelbilder werden durch Drehen nicht gleich. Andere Aufteilungen der 3 gibt es nicht, also 1 + 1 + 2 = 4.' },
    { id: 'b2c-symmetrie-minimal', fam: 'symmetrie-minimal', cat: 'Bilder', type: 'number',
      q: 'Wie viele weiße Felder musst du mindestens pink färben, damit das ganze Quadrat spiegelsymmetrisch ist?', svg: svgSymmetrie(),
      a: 2, r: [3, 2, 2, 2, 0],
      ex: 'Mögliche Spiegelachsen sind die Mittellinien und die Diagonalen. Senkrecht bräuchte es 3 Felder, waagrecht 5, an der Diagonale von rechts oben nach links unten 5 – an der Diagonale von links oben nach rechts unten nur 2: das Feld links unten und das Feld in Zeile 3, Spalte 2.' },
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

// ---- bildlogik2.js ----
// Bildlogik 2 (Kategorie „Bilder“, Präfix p2-) – räumliches und mechanisches Denken:
// Zahnräder, Riemen, Waagen, Wege und Labyrinthe, Wasser/Gefäße, Schatten, Schnitte.
(function () {
  const { svg } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // ---------- Bausteine ----------
  const PINK = '#ff7ab6', CYAN = '#22d3ee', GOLD = '#ffc940', WHITE = '#f3f4ff', VIOLET = '#a78bfa', DARK = '#1a1240',
    GREEN = '#34d399', BROWN = '#c08457', RED = '#ff4d6d', SOFT = '#b9bde8', GEARF = '#c4b5fd', GEARS = '#8b5cf6';
  const f1 = (v) => Math.round(v * 10) / 10;
  const pts = (arr) => arr.map(([x, y]) => `${f1(x)},${f1(y)}`).join(' ');
  const line = (x1, y1, x2, y2, col = WHITE, w = 3, extra = '') =>
    `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke="${col}" stroke-width="${w}" stroke-linecap="round"${extra ? ' ' + extra : ''}/>`;
  const tx = (x, y, t, size = 16, extra = '') => `<text class="tx" x="${f1(x)}" y="${f1(y)}" text-anchor="middle" font-size="${size}" font-weight="700"${extra ? ' ' + extra : ''}>${t}</text>`;
  const txd = (x, y, t, size = 16) => `<text class="tx inv" x="${f1(x)}" y="${f1(y)}" text-anchor="middle" font-size="${size}" font-weight="700">${t}</text>`;
  const poly = (arr, extra) => `<polygon points="${pts(arr)}" ${extra}/>`;
  const circ = (cx, cy, r, extra) => `<circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r)}" ${extra}/>`;
  const L = 'ABCDEFGH';
  // Pfeilspitze an (x, y), zeigt in Richtung ang (Bogenmaß)
  const head = (x, y, ang, s = 11, col = GOLD) => poly([
    [x + s * Math.cos(ang), y + s * Math.sin(ang)],
    [x + s * 0.7 * Math.cos(ang + 2.4), y + s * 0.7 * Math.sin(ang + 2.4)],
    [x + s * 0.7 * Math.cos(ang - 2.4), y + s * 0.7 * Math.sin(ang - 2.4)]], `fill="${col}"`);
  // Bogenpfeil um (cx, cy) von Winkel a0 nach a1 (Grad, Bildschirm: wachsend = im Uhrzeigersinn)
  function arcArrow(cx, cy, r, a0, a1, col = GOLD) {
    const p = (a) => [cx + r * Math.cos(a * Math.PI / 180), cy + r * Math.sin(a * Math.PI / 180)];
    const [x0, y0] = p(a0), [x1, y1] = p(a1);
    const cw = a1 > a0, large = Math.abs(a1 - a0) > 180 ? 1 : 0;
    const a = a1 * Math.PI / 180, tang = cw ? a + Math.PI / 2 : a - Math.PI / 2;
    return `<path d="M ${f1(x0)} ${f1(y0)} A ${r} ${r} 0 ${large} ${cw ? 1 : 0} ${f1(x1)} ${f1(y1)}" fill="none" stroke="${col}" stroke-width="4" stroke-linecap="round"/>` +
      head(x1, y1, tang, 12, col);
  }
  // Zahnrad mit eigener Farbe (Zahnmitte bei phase + 0.5 Schritt, Lückenmitte bei phase + 2.5 Schritt)
  function gear(cx, cy, r, teeth, phase = 0, fill = GEARF, stroke = GEARS, hub = true) {
    const p = [];
    for (let i = 0; i < teeth * 4; i++) {
      const a = i * Math.PI * 2 / (teeth * 4) + phase;
      const rr = (i % 4 < 2) ? r + 7 : r - 3;
      p.push([cx + rr * Math.cos(a), cy + rr * Math.sin(a)]);
    }
    return poly(p, `fill="${fill}" stroke="${stroke}" stroke-width="2"`) + (hub ? circ(cx, cy, Math.max(5, r * 0.3), `fill="#ede9fe"`) : '');
  }
  const gapAt = (teeth, ang) => ang - 2.5 * Math.PI * 2 / (teeth * 4);   // Phase: Lücke zeigt in Richtung ang
  const toothAt = (teeth, ang) => ang - 0.5 * Math.PI * 2 / (teeth * 4); // Phase: Zahn zeigt in Richtung ang

  // ===================== leicht =====================

  // Wasserrad: Wasser fällt links auf die Schaufeln
  function svgWasserrad() {
    const cx = 165, cy = 116, R = 56;
    let s = `<rect x="24" y="190" width="262" height="14" rx="3" fill="${CYAN}" opacity=".35"/>`;
    s += line(cx, cy, cx - 46, 196, SOFT, 5) + line(cx, cy, cx + 46, 196, SOFT, 5);
    for (let k = 0; k < 8; k++) {
      const a = (13 + k * 45) * Math.PI / 180, c = Math.cos(a), si = Math.sin(a), px = -si, py = c;
      s += line(cx, cy, cx + R * c, cy + R * si, SOFT, 3);
      const r0 = R - 2, r1 = R + 20, w = 7;
      s += poly([[cx + r0 * c + w * px, cy + r0 * si + w * py], [cx + r1 * c + w * px, cy + r1 * si + w * py],
        [cx + r1 * c - w * px, cy + r1 * si - w * py], [cx + r0 * c - w * px, cy + r0 * si - w * py]], `fill="${GOLD}"`);
    }
    s += circ(cx, cy, R, `fill="none" stroke="${VIOLET}" stroke-width="5"`) + circ(cx, cy, 9, `fill="${WHITE}"`);
    // Rohr und Wasserstrahl (links von der Achse)
    s += `<rect x="14" y="12" width="118" height="18" rx="4" fill="${BROWN}"/>`;
    s += `<rect x="117" y="30" width="13" height="26" fill="${CYAN}"/>`;
    s += circ(112, 62, 3, `fill="${CYAN}"`) + circ(134, 64, 2.5, `fill="${CYAN}"`);
    return svg('0 0 300 210', s);
  }

  // Zahnstange über einem Zahnrad, Pfeil unten nach rechts (= gegen den Uhrzeigersinn)
  function svgZahnstange() {
    const cx = 150, cy = 122, r = 40, T = 12, pitch = 2 * Math.PI * r / T;
    let s = `<rect x="14" y="36" width="272" height="30" rx="3" fill="${BROWN}"/>`;
    for (let k = -6; k <= 6; k++) {
      const x = cx + k * pitch;
      if (x < 20 || x > 280) continue;
      s += poly([[x - 6, 65], [x + 6, 65], [x + 3.5, 84], [x - 3.5, 84]], `fill="${BROWN}"`);
    }
    s += gear(cx, cy, r, T, gapAt(T, -Math.PI / 2));
    s += arcArrow(cx, cy, 62, 150, 30);
    return svg('0 0 300 200', s);
  }

  // Zwei Balkenwaagen
  function balance(cx, tilt, left, right) {
    const py = 52, half = 48, t = tilt * Math.PI / 180;
    const lx = cx - half * Math.cos(t), ly = py + half * Math.sin(t), rx = cx + half * Math.cos(t), ry = py - half * Math.sin(t);
    let s = poly([[cx - 26, 152], [cx + 26, 152], [cx, 132]], `fill="${SOFT}"`) + line(cx, 140, cx, py, SOFT, 5);
    s += line(lx, ly, rx, ry, WHITE, 5) + circ(cx, py, 5, `fill="${GOLD}"`);
    [[lx, ly, left], [rx, ry, right]].forEach(([x, y, shape]) => {
      const pan = y + 46;
      s += line(x, y, x - 18, pan, SOFT, 2) + line(x, y, x + 18, pan, SOFT, 2);
      s += `<path d="M ${f1(x - 23)} ${f1(pan)} Q ${f1(x)} ${f1(pan + 13)} ${f1(x + 23)} ${f1(pan)} Z" fill="${SOFT}"/>`;
      if (shape === 'kreis') s += circ(x, pan - 13, 13, `fill="${PINK}"`);
      if (shape === 'quadrat') s += `<rect x="${f1(x - 13)}" y="${f1(pan - 26)}" width="26" height="26" fill="${CYAN}"/>`;
      if (shape === 'dreieck') s += poly([[x - 15, pan], [x + 15, pan], [x, pan - 27]], `fill="${GOLD}"`);
    });
    return s;
  }
  function svgWaagen() {
    return svg('0 0 300 160', balance(72, 12, 'kreis', 'quadrat') + balance(228, -12, 'kreis', 'dreieck'));
  }

  // Sonne und Schatten in vier Bildern
  function sunScene(x0, sunX, sunY, dir, len) {
    let s = `<rect x="${x0}" y="6" width="66" height="104" rx="8" fill="rgba(255,255,255,.05)" stroke="${VIOLET}" stroke-width="2"/>`;
    s += `<rect x="${x0 + 2}" y="80" width="62" height="24" fill="#4f8a55"/>`;
    const bx = x0 + 33;
    s += poly([[bx, 82], [bx + dir * len, 82], [bx + dir * len + dir * 3, 90], [bx + 1 * dir, 90]], `fill="#173a1f"`);
    s += `<rect x="${bx - 3}" y="56" width="6" height="28" fill="${BROWN}"/>` + circ(bx, 48, 13, `fill="${GREEN}"`);
    s += circ(sunX, sunY, 7, `fill="${GOLD}"`);
    for (let i = 0; i < 8; i++) {
      const a = i * Math.PI / 4;
      s += line(sunX + 10 * Math.cos(a), sunY + 10 * Math.sin(a), sunX + 14 * Math.cos(a), sunY + 14 * Math.sin(a), GOLD, 2);
    }
    return s;
  }
  function svgSonne() {
    const xs = [6, 79, 152, 225];
    let s = sunScene(xs[0], xs[0] + 52, 24, 1, 26) + sunScene(xs[1], xs[1] + 14, 24, -1, 26) +
      sunScene(xs[2], xs[2] + 14, 24, 1, 26) + sunScene(xs[3], xs[3] + 14, 30, -1, 22);
    xs.forEach((x, i) => { s += tx(x + 33, 130, L[i]); });
    return svg('0 0 300 138', s);
  }

  // Roboter auf einem 4×4-Feld mit Pfeil-Befehlen
  function arrowGlyph(x, y, dir) {
    const a = { u: -Math.PI / 2, d: Math.PI / 2, l: Math.PI, r: 0 }[dir], c = Math.cos(a), si = Math.sin(a);
    return line(x - 9 * c, y - 9 * si, x + 4 * c, y + 4 * si, GOLD, 4) + head(x + 3 * c, y + 3 * si, a, 10);
  }
  function svgRoboter() {
    const grid = ['LFRM', 'HKBT', 'DPWG', '*NSZ'], c = 46, x0 = 58, y0 = 6;
    let s = '';
    for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) {
      const x = x0 + k * c, y = y0 + r * c;
      s += `<rect x="${x}" y="${y}" width="${c}" height="${c}" fill="rgba(34,211,238,.10)" stroke="${CYAN}" stroke-width="2"/>`;
      const ch = grid[r][k];
      if (ch === '*') {
        const st = [];
        for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? 7 : 16; st.push([x + c / 2 + rr * Math.cos(a), y + c / 2 + rr * Math.sin(a)]); }
        s += poly(st, `fill="${GOLD}"`);
      } else s += tx(x + c / 2, y + c / 2 + 8, ch, 22);
    }
    'urruuld'.split('').forEach((d, i) => { s += arrowGlyph(48 + i * 34, 218, d); });
    return svg('0 0 300 236', s);
  }

  // Großes und kleines Zahnrad
  function svgUebersetzung() {
    let s = gear(100, 92, 60, 24, gapAt(24, 0)) + gear(184, 92, 20, 8, toothAt(8, Math.PI));
    s += tx(100, 186, '24 Zähne', 15) + tx(184, 140, '8 Zähne', 15);
    return svg('0 0 260 196', s);
  }

  // ===================== mittel =====================

  // Teekanne mit Ausguss, vier Höhenlinien
  function svgTeekanne() {
    let s = `<path d="M 80 70 L 200 70 Q 222 122 206 178 Q 140 194 74 178 Q 58 122 80 70 Z" fill="#6d63c9" stroke="${WHITE}" stroke-width="2"/>`;
    s += poly([[204, 124], [242, 104], [258, 104], [210, 166]], `fill="#6d63c9"`) +
      `<path d="M 204 124 L 242 104 M 258 104 L 210 166" fill="none" stroke="${WHITE}" stroke-width="2"/>` + `<ellipse cx="250" cy="104" rx="8" ry="2.5" fill="#0a0d24" stroke="${WHITE}" stroke-width="1.5"/>`;
    s += `<path d="M 92 70 Q 140 40 188 70 Z" fill="#8b80e0" stroke="${WHITE}" stroke-width="2"/>` + circ(140, 50, 6, `fill="#8b80e0" stroke="${WHITE}" stroke-width="2"`);
    s += `<path d="M 74 92 C 26 92 26 162 70 160" fill="none" stroke="#6d63c9" stroke-width="9" stroke-linecap="round"/>`;
    [[70, 'A'], [86, 'B'], [104, 'C'], [140, 'D']].forEach(([y, l]) => {
      s += line(34, y, 284, y, GOLD, 2, 'stroke-dasharray="6 5"') + tx(18, y + 6, l, 16);
    });
    return svg('0 0 300 200', s);
  }

  // Zahnrad-Netz (Baum aus sieben Rädern)
  function svgZahnradNetz() {
    const G = [['A', 140, 112, 10], ['B', 84.2, 112, 8], ['C', 195.8, 112, 8], ['D', 60.6, 61.4, 10], ['E', 62.7, 158, 8], ['F', 219.4, 61.4, 10], ['G', 270, 85, 8]];
    let s = '';
    G.forEach(([n, x, y, t], i) => { s += gear(x, y, t * 16 / (2 * Math.PI), t, i * 0.37); });
    G.forEach(([n, x, y]) => { s += txd(x, y + 6, n, 15); });
    s += arcArrow(140, 112, 44, 236, 304);
    return svg('0 0 300 192', s);
  }

  // Würfel mit Schnitt durch zwei gegenüberliegende Kanten
  function cubePts(x0 = 70, y0 = 80, a = 100, dx = 50, dy = -40) {
    return { f00: [x0, y0], f10: [x0 + a, y0], f11: [x0 + a, y0 + a], f01: [x0, y0 + a],
      b00: [x0 + dx, y0 + dy], b10: [x0 + a + dx, y0 + dy], b11: [x0 + a + dx, y0 + a + dy], b01: [x0 + dx, y0 + a + dy] };
  }
  function cubeFrame(P) {
    const E = (a, b, dash) => line(P[a][0], P[a][1], P[b][0], P[b][1], WHITE, 2.5, dash ? 'stroke-dasharray="6 5" opacity=".7"' : '');
    let s = poly([P.f00, P.f10, P.f11, P.f01], `fill="rgba(34,211,238,.12)"`) + poly([P.f00, P.f10, P.b10, P.b00], `fill="rgba(34,211,238,.18)"`) +
      poly([P.f10, P.b10, P.b11, P.f11], `fill="rgba(34,211,238,.08)"`);
    s += E('b00', 'b01', 1) + E('b01', 'b11', 1) + E('f01', 'b01', 1);
    return { s, E };
  }
  function svgDiagonal() {
    const P = cubePts();
    const { s: base, E } = cubeFrame(P);
    let s = base + poly([P.f00, P.f10, P.b11, P.b01], `fill="${GOLD}" opacity=".5" stroke="${GOLD}" stroke-width="2"`);
    [['f00', 'f10'], ['f10', 'f11'], ['f11', 'f01'], ['f01', 'f00'], ['f00', 'b00'], ['f10', 'b10'], ['f11', 'b11'], ['b00', 'b10'], ['b10', 'b11']].forEach(([a, b]) => { s += E(a, b); });
    return svg('0 0 290 200', s);
  }

  // Wippe mit Klötzen
  function svgWippe() {
    let s = line(10, 172, 290, 172, SOFT, 2) + poly([[150, 128], [128, 172], [172, 172]], `fill="${SOFT}"`);
    s += `<rect x="14" y="118" width="272" height="10" rx="3" fill="${BROWN}"/>`;
    for (let d = 1; d <= 4; d++) {
      [150 - 32 * d, 150 + 32 * d].forEach((x) => { s += line(x, 128, x, 136, WHITE, 2) + tx(x, 152, String(d), 13); });
    }
    for (let i = 0; i < 4; i++) s += `<rect x="43" y="${94 - i * 24}" width="22" height="22" rx="2" fill="${CYAN}" stroke="${DARK}" stroke-width="1.5"/>`;
    s += `<rect x="203" y="70" width="22" height="46" rx="3" fill="none" stroke="${GOLD}" stroke-width="2.5" stroke-dasharray="5 4"/>` + tx(214, 100, '?', 22);
    return svg('0 0 300 180', s);
  }

  // Labyrinth 5×5 mit einer Schleife
  const MAZE_OPEN = [[0, 0, 1, 0], [1, 0, 1, 1], [1, 1, 2, 1], [2, 1, 3, 1], [3, 1, 4, 1], [4, 1, 4, 2], [4, 2, 4, 3], [3, 3, 4, 3], [3, 2, 3, 3], [2, 2, 3, 2],
    [1, 2, 2, 2], [1, 2, 1, 3], [1, 3, 2, 3], [2, 3, 2, 4], [2, 4, 3, 4], [3, 4, 4, 4], [1, 4, 2, 4], [0, 4, 1, 4], [0, 3, 0, 4], [0, 2, 0, 3],
    [0, 1, 0, 2], [4, 0, 4, 1], [3, 0, 4, 0], [2, 0, 3, 0], [3, 1, 3, 2]];
  function svgLabyrinth() {
    const N = 5, c = 44, x0 = 40, y0 = 8;
    const open = new Set(MAZE_OPEN.map(([a, b, cc, d]) => [a, b, cc, d].join()));
    const isOpen = (a, b, cc, d) => open.has([a, b, cc, d].join()) || open.has([cc, d, a, b].join());
    let s = `<rect x="${x0}" y="${y0}" width="${N * c}" height="${N * c}" fill="rgba(34,211,238,.08)"/>`;
    s += tx(x0 + c / 2, y0 + c / 2 + 8, 'S', 22) + tx(x0 + 4.5 * c, y0 + 4.5 * c + 8, 'Z', 22, `fill="${GOLD}"`);
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      if (x < N - 1 && !isOpen(x, y, x + 1, y)) s += line(x0 + (x + 1) * c, y0 + y * c, x0 + (x + 1) * c, y0 + (y + 1) * c, WHITE, 4);
      if (y < N - 1 && !isOpen(x, y, x, y + 1)) s += line(x0 + x * c, y0 + (y + 1) * c, x0 + (x + 1) * c, y0 + (y + 1) * c, WHITE, 4);
    }
    s += `<rect x="${x0}" y="${y0}" width="${N * c}" height="${N * c}" fill="none" stroke="${WHITE}" stroke-width="5"/>`;
    return svg('0 0 300 236', s);
  }

  // Gefäß und vier Füllkurven
  function svgFuellkurve() {
    let s = `<path d="M 45 40 L 45 110 L 20 110 L 20 180 L 100 180 L 100 110 L 75 110 L 75 40" fill="rgba(34,211,238,.12)" stroke="${WHITE}" stroke-width="3" stroke-linejoin="round"/>`;
    s += `<rect x="56" y="8" width="8" height="40" fill="${CYAN}"/>`;
    const curves = [[[0, 0], [1, 1]], [[0, 0], [0.25, 0.5], [1, 1]], [[0, 0], [0.75, 0.5], [1, 1]], [[0, 0], [0.4, 0.3], [0.6, 0.7], [1, 1]]];
    curves.forEach((cv, i) => {
      const gx = 136 + (i % 2) * 82, gy = 14 + Math.floor(i / 2) * 96;
      s += line(gx, gy, gx, gy + 66, WHITE, 2) + line(gx, gy + 66, gx + 68, gy + 66, WHITE, 2);
      s += head(gx, gy - 2, -Math.PI / 2, 7, WHITE) + head(gx + 70, gy + 66, 0, 7, WHITE);
      s += `<polyline points="${pts(cv.map(([t, h]) => [gx + 2 + 60 * t, gy + 66 - 60 * h]))}" fill="none" stroke="${GOLD}" stroke-width="3.5" stroke-linejoin="round"/>`;
      s += tx(gx - 12, gy + 14, L[i], 15);
    });
    return svg('0 0 300 200', s);
  }

  // Lampe und Schatten dreier Pfähle
  function svgLampe() {
    const g = 170, lamp = [110, 30];
    let s = `<rect x="6" y="${g}" width="288" height="14" fill="#8f94c4"/>`;
    [[60, 40], [180, 50], [250, 30]].forEach(([x, h]) => {
      const tip = lamp[0] + (x - lamp[0]) * (g - lamp[1]) / ((g - h) - lamp[1]);
      s += poly([[x, g], [tip, g], [tip, g + 8], [x, g + 8]], `fill="#05061a"`);
      s += `<rect x="${x - 4}" y="${g - h}" width="8" height="${h}" fill="${CYAN}"/>`;
    });
    [[60, 50], [110, 30], [160, 40], [220, 20]].forEach(([x, y], i) => {
      s += `<rect x="${x - 4}" y="${y - 13}" width="8" height="6" fill="${SOFT}"/>` + circ(x, y, 7, `fill="${GOLD}"`) + tx(x + 16, y + 6, L[i], 15);
    });
    return svg('0 0 300 190', s);
  }

  // ===================== schwer =====================

  // Riemen um sechs Räder, zwei davon von außen angedrückt
  function beltPath(P) {
    // P: [{x, y, r, s}] in Laufrichtung (im Uhrzeigersinn); s = +1: Rad innerhalb der Schlaufe, -1: außerhalb
    const n = P.length, seg = [];
    for (let i = 0; i < n; i++) {
      const a = P[i], b = P[(i + 1) % n], Dx = b.x - a.x, Dy = b.y - a.y, D = Math.hypot(Dx, Dy);
      const ra = a.s * a.r, rb = b.s * b.r, phi = Math.atan2(Dy, Dx), al = Math.acos((rb - ra) / D);
      let best = null;
      for (const psi of [phi + al, phi - al]) {
        const nx = Math.cos(psi), ny = Math.sin(psi), dx = ny, dy = -nx;
        if (Dx * dx + Dy * dy > 0) best = { nx, ny };
      }
      seg.push({ p1: [a.x - ra * best.nx, a.y - ra * best.ny], p2: [b.x - rb * best.nx, b.y - rb * best.ny] });
    }
    let d = `M ${f1(seg[0].p1[0])} ${f1(seg[0].p1[1])}`;
    for (let i = 0; i < n; i++) {
      const sg = seg[i], nxt = seg[(i + 1) % n], c = P[(i + 1) % n];
      d += ` L ${f1(sg.p2[0])} ${f1(sg.p2[1])}`;
      const a0 = Math.atan2(sg.p2[1] - c.y, sg.p2[0] - c.x), a1 = Math.atan2(nxt.p1[1] - c.y, nxt.p1[0] - c.x);
      let sweep = c.s > 0 ? a1 - a0 : a0 - a1;
      while (sweep < 0) sweep += 2 * Math.PI;
      d += ` A ${c.r} ${c.r} 0 ${sweep > Math.PI ? 1 : 0} ${c.s > 0 ? 1 : 0} ${f1(nxt.p1[0])} ${f1(nxt.p1[1])}`;
    }
    return d + ' Z';
  }
  function svgRiemen() {
    const P = [{ n: 'A', x: 62, y: 62, r: 28, s: 1 }, { n: 'E', x: 150, y: 58, r: 15, s: -1 }, { n: 'B', x: 236, y: 54, r: 22, s: 1 },
      { n: 'F', x: 258, y: 112, r: 14, s: -1 }, { n: 'C', x: 236, y: 172, r: 26, s: 1 }, { n: 'D', x: 76, y: 170, r: 22, s: 1 }];
    let s = '';
    P.forEach((p) => { s += circ(p.x, p.y, p.r, `fill="${GEARF}" stroke="${GEARS}" stroke-width="2"`); });
    s += `<path d="${beltPath(P)}" fill="none" stroke="${GOLD}" stroke-width="5" stroke-linejoin="round"/>`;
    P.forEach((p) => { s += txd(p.x, p.y + 6, p.n, p.r > 18 ? 17 : 14); });
    s += arcArrow(62, 62, 42, 5, 95);
    return svg('0 0 300 206', s);
  }

  // Flaschenzug mit fester und loser Rolle
  function svgFlaschenzug() {
    let s = `<rect x="30" y="8" width="240" height="12" fill="${SOFT}"/>`;
    for (let x = 36; x < 270; x += 14) s += line(x, 8, x + 8, 0, SOFT, 2);
    s += line(166, 20, 166, 50, SOFT, 4) + line(130, 130, 130, 166, SOFT, 4);
    s += circ(166, 50, 18, `fill="${GEARF}" stroke="${GEARS}" stroke-width="2"`) + circ(166, 50, 4, `fill="${DARK}"`);
    s += circ(130, 130, 18, `fill="${GEARF}" stroke="${GEARS}" stroke-width="2"`) + circ(130, 130, 4, `fill="${DARK}"`);
    s += `<path d="M 112 20 L 112 130 A 18 18 0 0 0 148 130 L 148 50 A 18 18 0 0 1 184 50 L 184 164" fill="none" stroke="${GOLD}" stroke-width="3.5"/>`;
    s += `<rect x="102" y="166" width="56" height="38" rx="4" fill="${BROWN}"/>` + txd(130, 191, 'Last', 15);
    s += line(206, 120, 206, 168, PINK, 4) + head(206, 170, Math.PI / 2, 12, PINK) + tx(236, 150, 'ziehen', 13);
    return svg('0 0 300 212', s);
  }

  // Würfel mit abgeschnittener Ecke (Dreieck als Schnittfläche)
  function svgEckschnitt() {
    const P = cubePts();
    const { s: base, E } = cubeFrame(P);
    const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
    let s = base;
    [['f00', 'f10'], ['f10', 'f11'], ['f11', 'f01'], ['f01', 'f00'], ['f00', 'b00'], ['f10', 'b10'], ['f11', 'b11'], ['b00', 'b10'], ['b10', 'b11']].forEach(([a, b]) => { s += E(a, b); });
    s += poly([mix(P.f10, P.f00, 0.45), mix(P.f10, P.f11, 0.45), mix(P.f10, P.b10, 0.6)], `fill="${GOLD}" opacity=".75" stroke="${GOLD}" stroke-width="2"`);
    return svg('0 0 290 200', s);
  }

  // Holzwürfel aus 3 × 3 × 3 kleinen Würfeln (isometrisch)
  function svgWuerfel27() {
    const n = 3, u = 36, cx = 150, cy = 116;
    const P = (x, y, z) => [cx + (x - y) * 0.866 * u, cy + (x + y) * 0.5 * u - z * u];
    const quad = (a, b, c, d, fill) => poly([a, b, c, d], `fill="${fill}" stroke="${DARK}" stroke-width="2"`);
    let s = '';
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      s += quad(P(i, j, n), P(i + 1, j, n), P(i + 1, j + 1, n), P(i, j + 1, n), '#e0a873');
      s += quad(P(n, i, j), P(n, i + 1, j), P(n, i + 1, j + 1), P(n, i, j + 1), '#a96f3e');
      s += quad(P(i, n, j), P(i + 1, n, j), P(i + 1, n, j + 1), P(i, n, j + 1), BROWN);
    }
    return svg('0 0 300 232', s);
  }

  // Laterne, Mann und Schatten
  function svgLaterne() {
    const g = 170, m = 22, px = 40, mx = px + 6 * m, top = g - 5 * m, head = g - 2 * m, tip = mx + 4 * m;
    let s = `<rect x="6" y="${g}" width="288" height="10" fill="#8f94c4"/>`;
    s += poly([[mx, g], [tip, g], [tip, g + 6], [mx, g + 6]], `fill="#05061a"`);
    s += line(px + 10, top, tip, g, GOLD, 1.5, 'stroke-dasharray="5 4" opacity=".8"');
    s += `<rect x="${px - 4}" y="${top}" width="8" height="${5 * m}" fill="${SOFT}"/>` + `<rect x="${px - 2}" y="${top - 4}" width="16" height="6" fill="${SOFT}"/>` + circ(px + 10, top + 5, 7, `fill="${GOLD}"`);
    s += circ(mx, head + 7, 7, `fill="${PINK}"`) + `<rect x="${mx - 6}" y="${head + 14}" width="12" height="${2 * m - 14}" rx="4" fill="${PINK}"/>`;
    s += line(px, g + 22, mx, g + 22, WHITE, 1.5) + line(px, g + 16, px, g + 28, WHITE, 1.5) + line(mx, g + 16, mx, g + 28, WHITE, 1.5) + tx((px + mx) / 2, g + 40, '6 m', 14);
    s += tx(px - 20, top + 2.5 * m + 5, '5 m', 13) + tx(mx - 22, head + m + 5, '2 m', 13);
    return svg('0 0 300 214', s);
  }

  // Schachtel 12 × 3 × 2 cm mit Ecken A und B
  function svgSchachtel() {
    const k = 16, x0 = 44, yb = 150, h = 2 * k, w = 12 * k, dx = 3 * k * 0.8, dy = -3 * k * 0.62;
    const f00 = [x0, yb - h], f10 = [x0 + w, yb - h], f11 = [x0 + w, yb], f01 = [x0, yb];
    const b00 = [f00[0] + dx, f00[1] + dy], b10 = [f10[0] + dx, f10[1] + dy], b11 = [f11[0] + dx, f11[1] + dy];
    let s = poly([f00, f10, b10, b00], `fill="#e0a873"`) + poly([f10, b10, b11, f11], `fill="#a96f3e"`) + poly([f00, f10, f11, f01], `fill="${BROWN}"`);
    [[f00, f10], [f10, f11], [f11, f01], [f01, f00], [f00, b00], [b00, b10], [b10, f10], [b10, b11], [b11, f11]].forEach(([a, b]) => { s += line(a[0], a[1], b[0], b[1], DARK, 2); });
    s += circ(f01[0], f01[1], 6, `fill="${PINK}"`) + tx(f01[0] - 2, f01[1] + 24, 'A', 16);
    s += circ(b10[0], b10[1], 6, `fill="${GOLD}"`) + tx(b10[0] + 2, b10[1] - 12, 'B', 16);
    s += tx(x0 + w / 2, yb + 26, '12 cm', 14) + tx(x0 + w + dx / 2 + 20, yb + dy / 2 + 8, '3 cm', 13) + tx(x0 - 22, yb - h / 2 + 5, '2 cm', 13);
    return svg('0 0 300 186', s);
  }

  // Straßennetz mit Einbahnstraßen
  const ONEWAY = [['00', '01', 1], ['01', '02', 0], ['02', '03', -1], ['10', '11', -1], ['11', '12', 1], ['12', '13', 0], ['20', '21', 1], ['21', '22', 1],
    ['22', '23', -1], ['00', '10', -1], ['10', '20', -1], ['01', '11', 1], ['11', '21', -1], ['02', '12', -1], ['12', '22', 0], ['03', '13', 1], ['13', '23', 1]];
  function svgEinbahn() {
    const pos = (k) => [40 + (+k[1]) * 73, 30 + (+k[0]) * 70];
    let s = '';
    ONEWAY.forEach(([a, b]) => { const [x1, y1] = pos(a), [x2, y2] = pos(b); s += line(x1, y1, x2, y2, '#5b58a0', 12); });
    ONEWAY.forEach(([a, b, d]) => {
      if (!d) return;
      const [x1, y1] = pos(d > 0 ? a : b), [x2, y2] = pos(d > 0 ? b : a);
      s += head((x1 + x2) / 2 - 4 * Math.sign(x2 - x1), (y1 + y2) / 2 - 4 * Math.sign(y2 - y1), Math.atan2(y2 - y1, x2 - x1), 13, GOLD);
    });
    for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) {
      const [x, y] = pos(`${r}${c}`);
      s += r + c === 0 ? circ(x, y, 13, `fill="${PINK}"`) + txd(x, y + 6, 'S', 16) : circ(x, y, 8, `fill="${WHITE}"`);
    }
    return svg('0 0 300 200', s);
  }

  // Straßenkarte mit Kilometern
  const ROUTE_POS = { A: [30, 100], B: [105, 35], C: [105, 165], D: [195, 35], E: [195, 165], F: [270, 100] };
  const ROUTE_EDGES = [['A', 'B', 7], ['A', 'C', 4], ['B', 'C', 2], ['B', 'D', 6], ['C', 'E', 9], ['D', 'E', 2], ['D', 'F', 5], ['E', 'F', 3], ['C', 'D', 10]];
  function svgRoute() {
    let s = '';
    ROUTE_EDGES.forEach(([a, b]) => { const [x1, y1] = ROUTE_POS[a], [x2, y2] = ROUTE_POS[b]; s += line(x1, y1, x2, y2, SOFT, 4); });
    ROUTE_EDGES.forEach(([a, b, w]) => {
      const [x1, y1] = ROUTE_POS[a], [x2, y2] = ROUTE_POS[b], mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      s += `<rect x="${f1(mx - 12)}" y="${f1(my - 11)}" width="24" height="22" rx="5" fill="#0a0d24" stroke="${GOLD}" stroke-width="1.5"/>` + tx(mx, my + 6, String(w), 15, `fill="${GOLD}"`);
    });
    Object.entries(ROUTE_POS).forEach(([k, [x, y]]) => { s += circ(x, y, 15, `fill="${CYAN}"`) + txd(x, y + 6, k, 16); });
    return svg('0 0 300 200', s);
  }

  // ===================== sehr schwer =====================

  // Brett auf zwei Rollen
  function svgRollen() {
    let s = `<rect x="6" y="172" width="288" height="12" fill="#3a3f75"/>`;
    [100, 200].forEach((x) => {
      s += circ(x, 150, 22, `fill="${BROWN}" stroke="#8a5a34" stroke-width="2"`) + circ(x, 150, 13, `fill="none" stroke="#8a5a34" stroke-width="2"`) + circ(x, 150, 4, `fill="#8a5a34"`);
    });
    s += `<rect x="50" y="118" width="210" height="10" rx="2" fill="${GOLD}"/>`;
    s += line(120, 98, 186, 98, PINK, 4) + head(190, 98, 0, 13, PINK);
    return svg('0 0 300 190', s);
  }

  // Zahnräder mit gemeinsamer Achse (B und C)
  function svgAchse() {
    const bx = 150, by = 100, a = 40 * Math.PI / 180, dx = bx + 64 * Math.cos(a), dy = by + 64 * Math.sin(a);
    let s = gear(66, by, 20, 10, toothAt(10, 0)) + gear(bx, by, 60, 30, gapAt(30, Math.PI), '#7c6fd6', '#5b4fc0', false);
    // Schatten: C und D liegen sichtbar vor B
    s += gear(bx + 3, by + 4, 20, 10, toothAt(10, a), 'rgba(0,0,0,.45)', 'none', false);
    s += gear(bx, by, 20, 10, toothAt(10, a), '#5eead4', '#0f9d8a', false) + circ(bx, by, 6, `fill="${DARK}"`);
    s += gear(dx + 4, dy + 5, 40, 20, gapAt(20, a + Math.PI), 'rgba(0,0,0,.45)', 'none', false);
    s += gear(dx, dy, 40, 20, gapAt(20, a + Math.PI), '#5eead4', '#0f9d8a');
    s += txd(66, by + 6, 'A', 15) + tx(bx - 34, by - 26, 'B', 17) + txd(bx, by - 7, 'C', 12) + txd(dx, dy + 6, 'D', 17);
    return svg('0 0 270 204', s);
  }

  // Zwei Krüge (7 l und 4 l)
  function jug(x, w, h, label) {
    const yb = 186, yt = yb - h;
    return `<path d="M ${x} ${yt} L ${x + w} ${yt} L ${x + w} ${yb} L ${x} ${yb} Z" fill="rgba(34,211,238,.12)" stroke="${WHITE}" stroke-width="3" stroke-linejoin="round"/>` +
      `<path d="M ${x + w} ${yt + 14} C ${x + w + 26} ${yt + 14} ${x + w + 26} ${yt + 54} ${x + w} ${yt + 54}" fill="none" stroke="${WHITE}" stroke-width="4"/>` +
      poly([[x - 2, yt], [x - 14, yt - 8], [x + 8, yt]], `fill="${WHITE}"`) + tx(x + w / 2, yb - h / 2 + 8, label, 22);
  }
  function svgKruege() {
    let s = jug(60, 70, 140, '7 l') + jug(180, 56, 84, '4 l');
    s += `<rect x="8" y="16" width="40" height="12" rx="3" fill="${SOFT}"/>` + `<rect x="36" y="16" width="12" height="24" rx="3" fill="${SOFT}"/>` + circ(42, 48, 3, `fill="${CYAN}"`);
    return svg('0 0 280 196', s);
  }

  // Rutsch-Labyrinth 6×6
  const SLIDE_BLOCKS = [[1, 2], [2, 3], [3, 0], [0, 3], [5, 4], [5, 5]];
  function svgRutsch() {
    const N = 6, c = 36, x0 = 42, y0 = 6;
    let s = '';
    for (let r = 0; r < N; r++) for (let k = 0; k < N; k++) s += `<rect x="${x0 + k * c}" y="${y0 + r * c}" width="${c}" height="${c}" fill="rgba(34,211,238,.08)" stroke="${CYAN}" stroke-width="1.5"/>`;
    SLIDE_BLOCKS.forEach(([x, y]) => { s += `<rect x="${x0 + x * c + 3}" y="${y0 + y * c + 3}" width="${c - 6}" height="${c - 6}" rx="5" fill="${BROWN}"/>`; });
    s += circ(x0 + 3.5 * c, y0 + 2.5 * c, 12, `fill="#000" stroke="${GOLD}" stroke-width="3"`);
    s += circ(x0 + 0.5 * c, y0 + 5.5 * c, 12, `fill="${PINK}"`);
    return svg('0 0 300 228', s);
  }

  // Würfel mit abgesägten Ecken
  function svgAbgesaegt() {
    const t = 0.2, V = [];
    for (let x = 0; x <= 1; x++) for (let y = 0; y <= 1; y++) for (let z = 0; z <= 1; z++) V.push([x, y, z]);
    const cut = (v, axis) => { const p = v.slice(); p[axis] = v[axis] === 0 ? t : 1 - t; return p; };
    const faces = [];
    // sechs Achtecke
    for (let axis = 0; axis < 3; axis++) for (const val of [0, 1]) {
      const o = [0, 1, 2].filter((k) => k !== axis), cyc = [[0, 0], [1, 0], [1, 1], [0, 1]].map(([u, w]) => { const p = [0, 0, 0]; p[axis] = val; p[o[0]] = u; p[o[1]] = w; return p; });
      const f = [];
      cyc.forEach((c, i) => {
        const prev = cyc[(i + 3) % 4], next = cyc[(i + 1) % 4];
        const ax = (q) => [0, 1, 2].find((k) => q[k] !== c[k]);
        f.push(cut(c, ax(prev)), cut(c, ax(next)));
      });
      faces.push({ f, kind: axis * 2 + val });
    }
    // acht Dreiecke
    V.forEach((v) => faces.push({ f: [cut(v, 0), cut(v, 1), cut(v, 2)], kind: 'tri' }));
    const u = 104, proj = ([x, y, z]) => [145 + (x - y) * 0.866 * u, 96 + (x + y) * 0.5 * u - z * u];
    const view = [1, 1, 1];
    const fill = { 1: '#17738a', 3: '#1f8fa8', 5: '#3cc4dc', tri: GOLD };
    let s = '';
    faces.forEach(({ f, kind }) => {
      // Normale nach außen
      const c = [0, 1, 2].map((k) => f.reduce((a, p) => a + p[k], 0) / f.length);
      const u = [0, 1, 2].map((k) => f[1][k] - f[0][k]), w = [0, 1, 2].map((k) => f[2][k] - f[0][k]);
      let nrm = [u[1] * w[2] - u[2] * w[1], u[2] * w[0] - u[0] * w[2], u[0] * w[1] - u[1] * w[0]];
      if (nrm[0] * (c[0] - 0.5) + nrm[1] * (c[1] - 0.5) + nrm[2] * (c[2] - 0.5) < 0) nrm = nrm.map((q) => -q);
      if (nrm[0] * view[0] + nrm[1] * view[1] + nrm[2] * view[2] <= 1e-9) return;
      s += poly(f.map(proj), `fill="${fill[kind] || '#1f8fa8'}" stroke="${WHITE}" stroke-width="2" stroke-linejoin="round"`);
    });
    return svg('0 0 290 214', s);
  }

  QUIZ_ADD([
    // ===== leicht =====
    { id: 'p2-wasserrad', fam: 'wasserrad', cat: 'Bilder', type: 'choice',
      q: 'Das Wasser fällt von oben auf die Schaufeln des Rads. In welche Richtung dreht sich das Rad?', svg: svgWasserrad(),
      opts: ['Gegen den Uhrzeigersinn', 'Im Uhrzeigersinn'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Das Wasser trifft die Schaufeln links von der Achse und drückt diese Seite nach unten. Links abwärts heißt: gegen den Uhrzeigersinn.' },
    { id: 'p2-zahnstange', fam: 'zahnstange-richtung', cat: 'Bilder', type: 'choice',
      q: 'Das Zahnrad dreht sich in Pfeilrichtung. In welche Richtung bewegt sich die Zahnstange darüber?', svg: svgZahnstange(),
      opts: ['Nach links', 'Nach rechts'], a: 0, r: [1, 1, 1, 0, 0],
      ex: 'Der Pfeil zeigt unten nach rechts – das Rad dreht sich gegen den Uhrzeigersinn. Oben, wo die Zahnstange eingreift, laufen die Zähne dann nach links und nehmen sie mit.' },
    { id: 'p2-waagen-leichteste', fam: 'tallest', cat: 'Bilder', type: 'choice',
      q: 'Welche Form ist am leichtesten?', svg: svgWaagen(),
      opts: ['Das Quadrat', 'Der Kreis', 'Das Dreieck', 'Kann man nicht wissen'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Die schwerere Seite sinkt nach unten: Der Kreis ist schwerer als das Quadrat, das Dreieck schwerer als der Kreis. Also ist das Quadrat am leichtesten.' },
    { id: 'p2-schatten-sonne', fam: 'schatten-richtung', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'In welchem Bild kann der Schatten des Baums so stimmen?', svg: svgSonne(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [1, 1, 0, 0, 0],
      ex: 'Ein Schatten fällt immer auf die Seite, die von der Sonne abgewandt ist. Nur in C steht die Sonne links und der Schatten liegt rechts. In A, B und D fällt er zur Sonne hin – das geht nicht.' },
    { id: 'p2-roboter-pfeile', fam: 'pfeil-befehle', cat: 'Bilder', type: 'text', letters: true,
      q: 'Der Roboter startet auf dem Stern und fährt die Pfeile unten der Reihe nach ab – jeder Pfeil bedeutet ein Feld weiter. Auf welchem Buchstaben bleibt er stehen?', svg: svgRoboter(),
      a: 'K', r: [2, 0, 0, 1, 0],
      ex: 'Vom Stern: hoch auf D, rechts auf P und W, hoch auf B und R, links auf F, runter auf K.' },
    { id: 'p2-zahnrad-uebersetzung', fam: 'zahnrad-tempo', cat: 'Bilder', type: 'number',
      q: 'Das große Zahnrad dreht sich genau einmal ganz herum. Wie oft dreht sich dabei das kleine?', svg: svgUebersetzung(),
      a: 3, r: [1, 1, 0, 1, 0],
      ex: 'Bei einer Umdrehung schiebt das große Rad 24 Zähne weiter. Das kleine hat 8 Zähne, dreht sich also 24 : 8 = 3-mal.' },

    // ===== mittel =====
    { id: 'p2-teekanne', fam: 'teekanne-fuellhoehe', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Bis zu welcher Linie kannst du diese Kanne höchstens mit Wasser füllen, ohne dass etwas herausläuft?', svg: svgTeekanne(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [1, 1, 2, 0, 0],
      ex: 'Kanne und Ausguss sind unten verbunden, in beiden steht das Wasser gleich hoch. Erreicht es die Öffnung des Ausgusses (C), läuft es dort heraus – höher geht es nicht.' },
    { id: 'p2-zahnrad-netz', fam: 'gears-chain', cat: 'Bilder', type: 'number',
      q: 'Rad A dreht sich im Uhrzeigersinn, alle Räder greifen dort ineinander, wo sie sich berühren. Wie viele der sieben Räder drehen sich im Uhrzeigersinn? (A zählt mit.)', svg: svgZahnradNetz(),
      a: 4, r: [2, 1, 1, 1, 0],
      ex: 'Zwei Räder, die ineinandergreifen, drehen sich gegenläufig. B und C laufen also gegen den Uhrzeigersinn, D, E und F wieder mit, G gegen. Im Uhrzeigersinn: A, D, E und F.' },
    { id: 'p2-diagonalschnitt', fam: 'wuerfel-querschnitt', cat: 'Bilder', type: 'choice',
      q: 'Ein Holzwürfel wird entlang der gelben Fläche durchgesägt, also durch zwei gegenüberliegende Kanten. Welche Form hat die Schnittfläche?', svg: svgDiagonal(),
      opts: ['Ein Rechteck, das kein Quadrat ist', 'Ein Quadrat', 'Eine Raute mit schiefen Winkeln', 'Ein Dreieck'], a: 0, r: [1, 1, 2, 0, 1],
      ex: 'Zwei Seiten der Fläche sind Würfelkanten, die beiden anderen sind Diagonalen von Würfelseiten – und die sind länger als eine Kante. Alle Ecken sind rechte Winkel: ein Rechteck, aber kein Quadrat.' },
    { id: 'p2-wippe', fam: 'hebel-wippe', cat: 'Bilder', type: 'number',
      q: 'Alle Klötze wiegen gleich viel, das leere Brett ist im Gleichgewicht. Wie viele Klötze müssen auf das Feld mit dem Fragezeichen, damit die Wippe waagerecht bleibt?', svg: svgWippe(),
      a: 6, r: [1, 1, 1, 1, 1],
      ex: 'Gewicht mal Abstand muss auf beiden Seiten gleich sein: links 4 Klötze × Abstand 3 = 12, rechts also 6 Klötze × Abstand 2 = 12.' },
    { id: 'p2-labyrinth-kurz', fam: 'labyrinth-eingang', cat: 'Bilder', type: 'number',
      q: 'Du gehst von S nach Z, immer von Feld zu Nachbarfeld, nicht durch Wände. Wie viele Schritte brauchst du mindestens?', svg: svgLabyrinth(),
      a: 12, r: [2, 0, 1, 2, 0],
      ex: 'Der kürzeste Weg: rechts, runter, 2 × rechts, runter, 2 × links, runter, rechts, runter, 2 × rechts – 12 Schritte. Der Umweg ein Stück die rechte Spalte hinunter und wieder zurück hat 16.' },
    { id: 'p2-fuellkurve', fam: 'fuellkurve', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'In das Gefäß links läuft gleichmäßig Wasser. Welche Kurve zeigt, wie hoch das Wasser mit der Zeit steht (nach rechts die Zeit, nach oben die Höhe)?', svg: svgFuellkurve(),
      opts: ['A', 'B', 'C', 'D'], a: 2, r: [1, 2, 1, 0, 1],
      ex: 'Unten ist das Gefäß breit, das Wasser steigt langsam – die Kurve ist flach. Ab der halben Höhe wird es schmal, das Wasser steigt schnell – die Kurve wird steil. Das ist C.' },
    { id: 'p2-schatten-lampe', fam: 'schatten-lampe', cat: 'Bilder', type: 'choice', noShuffle: true,
      q: 'Nur eine der vier Lampen ist an. Welche wirft diese Schatten der drei Pfähle?', svg: svgLampe(),
      opts: ['A', 'B', 'C', 'D'], a: 1, r: [2, 1, 1, 0, 0],
      ex: 'Verlängert man jeweils die Linie vom Schattenende über die Pfahlspitze, treffen sich alle drei bei Lampe B. Unter A hätte der linke Pfahl gar keinen Schatten, bei C wäre sein Schatten viel länger, bei D fiele der mittlere nach links.' },

    // ===== schwer =====
    { id: 'p2-riemen-schlange', fam: 'riemen-kreuz', cat: 'Bilder', type: 'number',
      q: 'Rad A treibt den Riemen an und dreht sich im Uhrzeigersinn. Wie viele der anderen Räder drehen sich gegen den Uhrzeigersinn?', svg: svgRiemen(),
      a: 2, r: [2, 2, 1, 1, 0],
      ex: 'Räder innerhalb der Riemenschlaufe drehen sich wie A. E und F liegen außen, der Riemen läuft nur an ihrer Innenseite vorbei – sie drehen sich andersherum.' },
    { id: 'p2-flaschenzug', fam: 'flaschenzug', cat: 'Bilder', type: 'number',
      q: 'Das Seil ist links oben an der Decke festgebunden. Du ziehst das freie Ende 60 cm nach unten. Um wie viele Zentimeter steigt die Last?', svg: svgFlaschenzug(),
      a: 30, r: [1, 2, 2, 0, 1],
      ex: 'Die Last hängt an der losen Rolle, und die hängt in zwei Seilstücken. Die 60 cm Seil verteilen sich auf beide Stücke – jedes wird nur 30 cm kürzer.' },
    { id: 'p2-wuerfel-siebeneck', fam: 'wuerfel-querschnitt', cat: 'Bilder', type: 'choice',
      q: 'Ein Würfel wird mit einem einzigen geraden Schnitt geteilt. Schneidet man eine Ecke ab, ist die Schnittfläche ein Dreieck. Welche Form kann die Schnittfläche nie haben?', svg: svgEckschnitt(),
      opts: ['Ein Siebeneck', 'Ein Fünfeck', 'Ein Sechseck', 'Ein Rechteck'], a: 0, r: [2, 2, 2, 0, 1],
      ex: 'Jede Kante der Schnittfläche liegt auf einer anderen Würfelseite – und der Würfel hat nur sechs. Mehr als ein Sechseck geht also nicht; Fünf- und Sechsecke entstehen bei schrägen Schnitten.' },
    { id: 'p2-wuerfel-27-schnitte', fam: 'wuerfel-schnitte-minimum', cat: 'Bilder', type: 'number',
      q: 'Der Holzwürfel soll in die 27 kleinen Würfel zersägt werden. Nach jedem geraden Schnitt darfst du die Teile beliebig umstapeln und mehrere auf einmal durchsägen. Wie viele Schnitte brauchst du mindestens?', svg: svgWuerfel27(),
      a: 6, r: [2, 2, 2, 1, 0],
      ex: 'Der kleine Würfel ganz in der Mitte hat sechs Seiten, die alle erst durch Schnitte entstehen – und jeder Schnitt erzeugt an ihm höchstens eine. Also braucht man 6, und 6 reichen auch ohne Umstapeln.' },
    { id: 'p2-laterne-schatten', fam: 'schatten-strahlensatz', cat: 'Bilder', type: 'number',
      q: 'Die Lampe der Laterne hängt 5 m hoch. Ein 2 m großer Mann steht 6 m von der Laterne entfernt. Wie viele Meter lang ist sein Schatten?', svg: svgLaterne(),
      a: 4, r: [2, 2, 1, 1, 1],
      ex: 'Der Lichtstrahl über den Kopf sinkt auf den 6 m bis zum Mann um 3 m (von 5 m auf 2 m), also 1 m auf je 2 m. Für die letzten 2 m bis zum Boden braucht er noch 4 m – so lang ist der Schatten.' },
    { id: 'p2-einbahn', fam: 'einbahn-erreichbar', cat: 'Bilder', type: 'number',
      q: 'Straßen mit Pfeil sind Einbahnstraßen, die übrigen darf man in beide Richtungen fahren. Wie viele der anderen elf Kreuzungen kannst du von S aus erreichen?', svg: svgEinbahn(),
      a: 8, r: [3, 1, 1, 2, 0],
      ex: 'Die Kreuzung rechts oben und die linke untere haben nur Straßen, die von ihnen wegführen. Die zweite von links unten erreicht man nur von dieser linken unteren aus – also auch nicht. Alle anderen 8 sind erreichbar.' },
    { id: 'p2-kuerzeste-route', fam: 'kuerzeste-route', cat: 'Bilder', type: 'number',
      q: 'Die Zahlen geben die Länge der Straßen in Kilometern an. Wie viele Kilometer ist der kürzeste Weg von A nach F?', svg: svgRoute(),
      a: 16, r: [2, 1, 2, 2, 0],
      ex: 'Am kürzesten ist A–C–E–F mit 4 + 9 + 3 = 16 km. Der Weg oben herum A–B–D–F hat 18 km, auch der Umweg A–C–B–D–F hat noch 17 km.' },

    // ===== sehr schwer =====
    { id: 'p2-rollen-brett', fam: 'rollen-brett', cat: 'Bilder', type: 'number',
      q: 'Ein Brett liegt auf zwei runden Stämmen mit je 50 cm Umfang. Du schiebst das Brett, und die Stämme machen, ohne zu rutschen, genau eine Umdrehung. Um wie viele Zentimeter hat sich das Brett über den Boden bewegt?', svg: svgRollen(),
      a: 100, r: [2, 3, 3, 1, 0],
      ex: 'Bei einer Umdrehung rollen die Stämme 50 cm über den Boden. Zugleich rollt das Brett 50 cm über die Stämme hinweg – gegenüber dem Boden sind das zusammen 100 cm.' },
    { id: 'p2-zahnrad-achse', fam: 'zahnrad-gemeinsame-achse', cat: 'Bilder', type: 'number',
      q: 'A und C haben 10 Zähne, B hat 30, D hat 20. A greift in B. C sitzt vor B fest auf derselben Achse und dreht sich mit; D greift nur in C. A dreht sich 12-mal ganz herum. Wie oft dreht sich D?', svg: svgAchse(),
      a: 2, r: [3, 2, 2, 2, 0],
      ex: 'A schiebt 120 Zähne weiter, B (30 Zähne) dreht sich also 4-mal – und C mit ihm. C schiebt 4 × 10 = 40 Zähne weiter, D (20 Zähne) dreht sich 2-mal.' },
    { id: 'p2-umfuellen', fam: 'umfuellen', cat: 'Bilder', type: 'number',
      q: 'Du hast einen 7-Liter- und einen 4-Liter-Krug ohne Markierungen und einen Wasserhahn. Jedes Vollmachen, Ausleeren und Umgießen zählt als ein Schritt. Wie viele Schritte brauchst du mindestens, bis in einem Krug genau 5 Liter sind?', svg: svgKruege(),
      a: 8, r: [3, 2, 2, 2, 0],
      ex: 'Mit dem kleinen Krug anfangen: 4 füllen, in den großen; 4 füllen, den großen auffüllen (1 bleibt); großen leeren; die 1 hinübergießen; 4 füllen, dazugießen – 5 Liter nach 8 Schritten. Wer immer vom großen in den kleinen Krug gießt, braucht 12.' },
    { id: 'p2-rutsch-labyrinth', fam: 'rutsch-labyrinth', cat: 'Bilder', type: 'number',
      q: 'Du kippst das Brett, die pinke Kugel rollt dann geradeaus, bis ein Stein oder der Rand sie stoppt. Rollt sie über das Loch, fällt sie hinein. Wie oft musst du mindestens kippen?', svg: svgRutsch(),
      a: 6, r: [3, 2, 2, 2, 0],
      ex: 'Rechts, hoch, rechts, runter, links bis vor den Stein, dann hoch ins Loch – 6-mal kippen. Ins Loch kommt sie nur von unten (links, rechts oder über dem Loch hält sie nie an), und dort steht sie frühestens nach 5-mal Kippen.' },
    { id: 'p2-wuerfel-abgesaegt', fam: 'wuerfel-ecke-abgesaegt', cat: 'Bilder', type: 'number',
      q: 'Von einem Holzwürfel wird an allen acht Ecken ein kleines Stück gerade abgesägt, wie im Bild. Wie viele Kanten hat der neue Körper?', svg: svgAbgesaegt(),
      a: 36, r: [2, 2, 2, 2, 1],
      ex: 'Die 12 alten Kanten bleiben, nur kürzer. Jede abgesägte Ecke bringt ein Dreieck mit 3 neuen Kanten dazu: 12 + 8 × 3 = 36.' },
    { id: 'p2-ameise-schachtel', fam: 'ameise-oberflaeche', cat: 'Bilder', type: 'number',
      q: 'Eine Ameise krabbelt außen auf der geschlossenen Schachtel (12 cm lang, 3 cm tief, 2 cm hoch) von Ecke A zur gegenüberliegenden Ecke B. Wie viele Zentimeter ist ihr kürzester Weg lang?', svg: svgSchachtel(),
      a: 13, r: [2, 3, 2, 2, 1],
      ex: 'Klappt man Vorderseite und Deckel flach auf, entsteht ein Rechteck von 12 cm × 5 cm. Der kürzeste Weg ist seine Diagonale: 5² + 12² = 13². Über die Kanten wären es 17 cm.' },
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

// ---- logik2a.js ----
// Logik-Paket 2a (Präfix l2a-): Verwandtschaft, Wahrheit und Lüge, Aussagenlogik,
// Schlussfolgerungen (alle/einige/kein), Wer-war-es-Rätsel.
(function () {
  const { svg } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // Vier Schatzkisten mit Schildern (Kiste 1 ganz links).
  function chests(signs) {
    const xs = [40, 113, 187, 260];
    let body = '';
    xs.forEach((cx, i) => {
      body += `<line class="ln" x1="${cx}" y1="50" x2="${cx}" y2="78"/>`;
      body += `<rect class="shape c3" x="${cx - 28}" y="92" width="56" height="38" rx="4"/>`;
      body += `<path class="shape c3" d="M${cx - 28} 92 Q${cx} 70 ${cx + 28} 92 Z"/>`;
      body += `<line class="ln" x1="${cx - 28}" y1="104" x2="${cx + 28}" y2="104"/>`;
      body += `<text class="tx" x="${cx}" y="158" text-anchor="middle" font-size="20" font-weight="700">${i + 1}</text>`;
    });
    xs.forEach((cx, i) => {
      body += `<rect class="card" x="${cx - 34}" y="6" width="68" height="44" rx="6"/>`;
      body += `<text class="tx" x="${cx}" y="25" text-anchor="middle" font-size="14" font-weight="700">${signs[i][0]}</text>`;
      body += `<text class="tx" x="${cx}" y="43" text-anchor="middle" font-size="14" font-weight="700">${signs[i][1]}</text>`;
    });
    return svg('0 0 300 168', body);
  }

  QUIZ_ADD([
    // ---------- leicht ----------
    { id: 'l2a-luegnerin-hausaufgaben', fam: 'immer-luegner-aussage', cat: 'Logik', type: 'choice',
      q: 'Lena lügt immer. Sie sagt: „Ich muss heute keine Hausaufgaben machen.“ Muss Lena heute Hausaufgaben machen?',
      opts: ['Ja', 'Nein', 'Kann man nicht wissen'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Was Lena sagt, ist immer falsch. Das Gegenteil von „keine Hausaufgaben“ stimmt: Sie muss welche machen.' },
    { id: 'l2a-eis-oder-kuchen', fam: 'oder-ausschluss', cat: 'Logik', type: 'choice',
      q: 'Tim sagt die Wahrheit: „Zum Nachtisch nehme ich Eis oder Kuchen – mindestens eins von beiden.“ Kuchen nimmt er nicht. Was folgt sicher?',
      opts: ['Er nimmt Eis', 'Er nimmt gar nichts', 'Er nimmt beides', 'Nichts folgt sicher'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Mindestens eins von beiden nimmt er. Fällt der Kuchen weg, bleibt nur das Eis.' },
    { id: 'l2a-joghurt-weg', fam: 'wer-war-es-ausschluss', cat: 'Logik', type: 'choice',
      q: 'Heute Mittag ist ein Joghurt aus dem Kühlschrank verschwunden. Nur Oma, Lisa oder Tom kommen dafür infrage. Oma und Tom waren mittags nicht zu Hause. Wer hat den Joghurt genommen?',
      opts: ['Lisa', 'Oma', 'Tom', 'Kann man nicht wissen'], a: 0, r: [1, 0, 0, 0, 0],
      ex: 'Oma und Tom scheiden aus, weil sie mittags weg waren. Von den drei Verdächtigen bleibt nur Lisa.' },
    { id: 'l2a-gelber-vogel', fam: 'gueltiger-schluss-einzelfall', cat: 'Logik', type: 'choice',
      q: 'Kein Vogel in diesem Käfig ist gelb. Der Vogel Pip ist gelb. Was stimmt <b>sicher</b>?',
      opts: ['Pip sitzt nicht in diesem Käfig', 'Pip sitzt in diesem Käfig', 'Im Käfig sitzen gar keine Vögel', 'Nichts davon'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Säße Pip im Käfig, gäbe es dort einen gelben Vogel. Das ist ausgeschlossen – also sitzt Pip woanders.' },
    { id: 'l2a-stiefbruder', fam: 'verwandt-stiefgeschwister', cat: 'Logik', type: 'choice',
      q: 'Noras Mutter heiratet Leos Vater. Nora und Leo haben keinen Elternteil gemeinsam. Was ist Leo jetzt für Nora?',
      opts: ['Ihr Stiefbruder', 'Ihr Halbbruder', 'Ihr Cousin', 'Ihr Schwager'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Leos Vater ist jetzt Noras Stiefvater, Leo also ihr Stiefbruder. Ein Halbbruder hätte mit ihr einen Elternteil gemeinsam.' },
    { id: 'l2a-schwaegerin', fam: 'verwandt-schwaegerin', cat: 'Logik', type: 'choice',
      q: 'Lisa ist mit Paul verheiratet. Mara ist Pauls Schwester. Was ist Mara für Lisa?',
      opts: ['Ihre Schwägerin', 'Ihre Cousine', 'Ihre Schwiegermutter', 'Ihre Nichte'], a: 0, r: [1, 0, 0, 0, 0],
      ex: 'Die Schwester des Ehemanns ist die Schwägerin.' },

    // ---------- mittel ----------
    { id: 'l2a-einzige-tochter', fam: 'photo', cat: 'Logik', type: 'choice',
      q: 'Ich bin eine Frau. Die einzige Tochter meiner Mutter hat einen Sohn namens Ben. Was bin ich für Ben?',
      opts: ['Seine Mutter', 'Seine Tante', 'Seine Großmutter', 'Seine Cousine'], a: 0, r: [2, 1, 2, 0, 0],
      ex: 'Als Frau bin ich selbst eine Tochter meiner Mutter – und zwar die einzige. Ben ist also mein Sohn.' },
    { id: 'l2a-alle-luegen', fam: 'wer-war-es-alle-luegen', cat: 'Logik', type: 'choice',
      q: 'Genau eines der drei Kinder hat die Vase zerbrochen. Alle drei lügen. Ali sagt: „Bea war es.“ Bea sagt: „Ali war es.“ Cem sagt: „Ali war es.“ Wer war es?',
      opts: ['Cem', 'Ali', 'Bea', 'Kann man nicht sagen'], a: 0, r: [2, 1, 1, 1, 0],
      ex: 'Alis Lüge schließt Bea aus, Beas Lüge schließt Ali aus. Übrig bleibt Cem.' },
    { id: 'l2a-gleicher-typ', fam: 'ritter-gleicher-typ', cat: 'Logik', type: 'choice',
      q: 'Auf einer Insel sagen Ritter immer die Wahrheit, Schurken lügen immer. A sagt: „B ist ein Schurke.“ B sagt: „A und ich sind beide Ritter oder beide Schurken.“ Was sind die beiden?',
      opts: ['A ist Ritter, B ist Schurke', 'A ist Schurke, B ist Ritter', 'Beide sind Ritter', 'Beide sind Schurken'], a: 0, r: [2, 1, 1, 1, 0],
      ex: 'Wäre A ein Schurke, wäre B in Wahrheit ein Ritter – dann müsste Bs Satz stimmen, doch die beiden wären verschieden. Also ist A ein Ritter und B ein Schurke; Bs Satz ist tatsächlich gelogen.' },
    { id: 'l2a-hund-und-katze', fam: 'verneinung-und', cat: 'Logik', type: 'choice',
      q: 'Ole lügt immer. Er sagt: „Ich habe einen Hund und eine Katze.“ Was stimmt <b>sicher</b>?',
      opts: ['Er hat höchstens eines der beiden Tiere', 'Er hat weder Hund noch Katze', 'Er hat einen Hund, aber keine Katze', 'Er hat eine Katze, aber keinen Hund'], a: 0, r: [1, 2, 2, 0, 0],
      ex: 'Falsch ist der Satz schon, wenn nur eines der Tiere fehlt. Sicher ist also nur: Beide zusammen hat er nicht.' },
    { id: 'l2a-tante-tim', fam: 'verwandt-tante-ausschluss', cat: 'Logik', type: 'choice',
      q: 'Opa Karl hat genau eine Tochter: Annas Mutter. Tim ist Karls Enkel und Annas Cousin. Was ist Annas Mutter für Tim?',
      opts: ['Seine Tante', 'Seine Mutter', 'Seine Großmutter', 'Seine Cousine'], a: 0, r: [2, 1, 1, 1, 0],
      ex: 'Als Annas Cousin ist Tim nicht ihr Bruder, also stammt er von einem Sohn Karls ab. Annas Mutter ist die Schwester von Tims Vater – seine Tante.' },
    { id: 'l2a-entweder-oder', fam: 'kontraposition-kette', cat: 'Logik', type: 'choice',
      q: 'Zum Ausflug fährt entweder Ida oder Jan mit – nicht beide. Wenn Jan mitfährt, fährt auch Kim mit. Kim bleibt zu Hause. Wer von Ida und Jan fährt mit?',
      opts: ['Nur Ida', 'Nur Jan', 'Beide', 'Keiner von beiden'], a: 0, r: [2, 1, 1, 0, 0],
      ex: 'Ohne Kim kann Jan nicht dabei sein. Weil genau einer der beiden mitfährt, ist es Ida.' },
    { id: 'l2a-ein-luegner-taeter', fam: 'genau-ein-luegner', cat: 'Logik', type: 'choice',
      q: 'Genau einer von dreien hat den Ball durchs Fenster geschossen. Genau einer der drei lügt. Ali: „Ich war es.“ Bea: „Ali war es nicht.“ Cem: „Bea war es.“ Wer war es?',
      opts: ['Bea', 'Ali', 'Cem', 'Kann man nicht sagen'], a: 0, r: [2, 1, 1, 1, 0],
      ex: 'Ali und Bea widersprechen sich, einer von ihnen ist der Lügner. Also sagt Cem die Wahrheit: Bea war es.' },

    // ---------- schwer ----------
    { id: 'l2a-nie-bei-regen', fam: 'verneinung-des-vordersatzes', cat: 'Logik', type: 'choice',
      q: 'Es stimmt: Opa geht nie spazieren, wenn es regnet. Heute regnet es nicht. Was folgt <b>sicher</b>?',
      opts: ['Nichts davon folgt sicher', 'Opa geht heute spazieren', 'Opa bleibt heute zu Hause', 'Gestern hat es geregnet'], a: 0, r: [2, 2, 2, 0, 0],
      ex: 'Die Regel sagt nur, was bei Regen passiert. Bei trockenem Wetter kann Opa spazieren gehen oder auch zu Hause bleiben.' },
    { id: 'l2a-wobbel', fam: 'syllogismus-kein-einige', cat: 'Logik', type: 'choice',
      q: 'Auf dem Planeten Zork gilt: Kein Wobbel ist blau. Einige blaue Wesen können fliegen. Was folgt <b>sicher</b>?',
      opts: ['Einige fliegende Wesen sind keine Wobbel', 'Kein Wobbel kann fliegen', 'Einige Wobbel können fliegen', 'Nichts davon folgt sicher'], a: 0, r: [2, 2, 2, 0, 0],
      ex: 'Die blauen Flieger sind keine Wobbel, weil kein Wobbel blau ist. Ob nicht blaue Wobbel fliegen, bleibt offen.' },
    { id: 'l2a-schatzkisten', fam: 'schatzkisten-schilder', cat: 'Logik', type: 'number',
      q: 'Nur in einer Kiste liegt ein Schatz, und nur ein Schild sagt die Wahrheit. „Weiter links/rechts“ heißt: in irgendeiner Kiste links/rechts davon. „Neben mir“ heißt: in einer direkt benachbarten Kiste. In welcher Kiste liegt der Schatz?',
      svg: chests([['Weiter', 'links!'], ['Weiter', 'rechts!'], ['Neben', 'mir!'], ['Nicht', 'hier!']]),
      a: 1, r: [2, 2, 1, 2, 0],
      ex: 'Liegt der Schatz in Kiste 2, 3 oder 4, stimmen jeweils zwei Schilder. Nur bei Kiste 1 stimmt allein „Nicht hier!“ – links von Kiste 1 gibt es nichts.' },
    { id: 'l2a-schwester-schwieger', fam: 'verwandt-schwieger-ruecklauf', cat: 'Logik', type: 'text',
      q: 'Ein Mann sagt über eine Frau: „Ihr Vater ist der einzige Sohn der Schwiegermutter meiner Mutter.“ Seine Eltern sind miteinander verheiratet, andere Ehen gab es nicht. Was ist die Frau für den Mann?',
      a: 'SCHWESTER', accept: ['HALBSCHWESTER', 'SEINESCHWESTER', 'SEINEHALBSCHWESTER'], r: [3, 1, 2, 2, 0],
      ex: 'Die Schwiegermutter seiner Mutter ist die Mutter seines Vaters. Ihr einziger Sohn ist sein Vater – die Frau hat also denselben Vater: Sie ist seine Schwester. Hat sie eine andere Mutter, ist sie seine Halbschwester – auch das zählt als richtig.' },
    { id: 'l2a-dora', fam: 'wer-war-es-ein-ehrlicher', cat: 'Logik', type: 'text',
      q: 'Einer der vier hat den Kuchen genascht. Nur einer von ihnen sagt die Wahrheit. Ali: „Dora lügt.“ Bea: „Cem war es.“ Cem: „Dora war es nicht.“ Dora: „Bea war es.“ Wer hat genascht?',
      a: 'DORA', r: [3, 2, 1, 2, 0],
      ex: 'Lügt Ali, sagt Dora die Wahrheit – dann war es Bea, und Cem sagt auch die Wahrheit: zu viele Ehrliche. Also ist Ali der Ehrliche, alle anderen lügen: Dora war es.' },
    { id: 'l2a-abwechselnd', fam: 'abwechselnd-luegner', cat: 'Logik', type: 'number',
      q: 'Lisa sagt abwechselnd die Wahrheit und eine Lüge – womit sie anfängt, weißt du nicht. Sie sagt nacheinander: „Ich habe keinen Bruder.“ „Ich habe genau drei Geschwister.“ „Ich habe mehr Brüder als Schwestern.“ Wie viele Schwestern hat Lisa?',
      a: 2, r: [3, 2, 1, 2, 0],
      ex: 'Wer abwechselnd lügt, sagt mit Satz 1 und 3 beide Male die Wahrheit oder beide Male nicht – beide wahr geht nicht (kein Bruder, aber mehr Brüder als Schwestern). Also stimmt nur Satz 2: drei Geschwister, mindestens ein Bruder, nicht mehr Brüder als Schwestern – 1 Bruder und 2 Schwestern.' },

    // ---------- sehr schwer ----------
    { id: 'l2a-reihe-luegner', fam: 'luegner-reihe-dahinter', cat: 'Logik', type: 'number',
      q: 'Zehn Leute stehen hintereinander in einer Schlange. Jeder sagt immer die Wahrheit oder lügt immer. Jeder sagt: „Irgendwo hinter mir steht mindestens ein Lügner.“ Wie viele Lügner stehen in der Schlange?',
      a: 1, r: [2, 3, 2, 1, 0],
      ex: 'Hinter dem Letzten steht niemand – seine Aussage ist falsch, er lügt. Damit haben alle neun vor ihm recht: genau ein Lügner.' },
    { id: 'l2a-mindestens-k', fam: 'selbstbezug-saetze', cat: 'Logik', type: 'number',
      q: 'Zehn Leute, jeder lügt immer oder sagt immer die Wahrheit. Der 1. sagt: „Mindestens einer von uns lügt.“ Der 2.: „Mindestens zwei von uns lügen.“ … Der 10.: „Mindestens zehn von uns lügen.“ Wie viele von ihnen lügen?',
      a: 5, r: [3, 3, 1, 2, 0],
      ex: 'Lügen L Leute, haben genau die Personen 1 bis L recht, die übrigen 10 − L lügen. Also 10 − L = L, das heißt L = 5.' },
    { id: 'l2a-stirnklecks', fam: 'stirnklecks-schweigen', cat: 'Logik', type: 'number',
      q: 'Drei kluge, ehrliche Kinder sehen die Stirn der anderen, nicht die eigene. Die Lehrerin sagt: „Mindestens eines von euch hat einen Klecks auf der Stirn.“ Zweimal fragt sie: „Weiß jemand, ob er selbst einen hat?“ Beide Male schweigen alle. Wie viele Kleckse gibt es?',
      a: 3, r: [3, 3, 1, 2, 0],
      ex: 'Bei einem Klecks wüsste dessen Träger es sofort, bei zwei wüssten es beide nach dem ersten Schweigen. Erst bei drei schweigen alle auch beim zweiten Mal.' },
    { id: 'l2a-waechter', fam: 'zwei-waechter-frage', cat: 'Logik', type: 'text',
      q: 'Zwei Türen, nur eine führt ins Freie. Von zwei Wächtern lügt einer immer, der andere nie – du weißt nicht, wer. Du fragst einen: „Welche Tür würde mir der andere als Ausgang zeigen?“ Er zeigt auf die linke. Welche Tür führt ins Freie? (links/rechts)',
      a: 'RECHTS', accept: ['RECHTE', 'DIERECHTE'], r: [2, 3, 2, 1, 0],
      ex: 'Egal, wen du fragst: Die Antwort läuft genau einmal über den Lügner und ist deshalb immer falsch. Der Ausgang ist also die rechte Tür.' },
    { id: 'l2a-wochenende', fam: 'wochentag-luegner', cat: 'Logik', type: 'text',
      q: 'Ida lügt nur samstags und sonntags, Udo lügt nur freitags. An allen anderen Tagen sagen beide die Wahrheit. Heute sagen beide: „Gestern habe ich gelogen.“ Welcher Wochentag ist heute?',
      a: 'SAMSTAG', accept: ['SONNABEND'], r: [3, 2, 2, 2, 0],
      ex: 'Für Ida passt der Satz nur montags (ehrlich nach Lügentag) und samstags (lügt nach ehrlichem Tag), für Udo nur freitags und samstags. Für beide zugleich passt nur der Samstag.' },
  ]);
})();

// ---- logik2b.js ----
(function () {
  const { svg } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // Drei Bände im Regal, Buchrücken zum Betrachter, Band 1 links
  function svgShelf() {
    let s = '<line class="ln" x1="30" y1="170" x2="250" y2="170"/>';
    [1, 2, 3].forEach((n, i) => {
      const x = 70 + i * 50;
      s += `<rect class="cell" x="${x}" y="40" width="44" height="128" rx="3"/>`;
      s += `<line class="ln" x1="${x + 4}" y1="62" x2="${x + 40}" y2="62"/>`;
      s += `<line class="ln" x1="${x + 4}" y1="146" x2="${x + 40}" y2="146"/>`;
      s += `<text class="tx" x="${x + 22}" y="114" text-anchor="middle" font-size="30" font-weight="bold">${n}</text>`;
    });
    return svg('0 0 280 190', s);
  }

  QUIZ_ADD([
    // ---------- leicht ----------
    { id: 'l2b-namen-abc', fam: 'namen-alphabetisch', cat: 'Logik', type: 'text',
      q: 'Ordne diese Namen alphabetisch: Otto, Ida, Emil, Ute, Anna. Welcher Name steht dann an dritter Stelle?',
      a: 'IDA', r: [1, 0, 0, 1, 0],
      ex: 'Alphabetisch geordnet: Anna, Emil, Ida, Otto, Ute – an dritter Stelle steht Ida.' },
    { id: 'l2b-vordraengeln', fam: 'vordraengeln-schlange', cat: 'Logik', type: 'number',
      q: 'An der Kasse steht eine Person vor dir und zwei hinter dir. Dann drängelt sich jemand direkt vor dich. Wie viele Personen stehen jetzt vor dir?',
      a: 2, r: [1, 0, 0, 1, 0],
      ex: 'Zu der einen Person vor dir kommt der Drängler hinzu: 1 + 1 = 2. Die Leute hinter dir spielen keine Rolle.' },
    { id: 'l2b-vorletzter', fam: 'vorletzter-platz', cat: 'Logik', type: 'number',
      q: 'Zehn Kinder laufen um die Wette, keine zwei kommen gleichzeitig ins Ziel. Jonas wird Vorletzter. Auf welchem Platz landet er?',
      a: 9, r: [1, 0, 1, 0, 0],
      ex: 'Der Letzte belegt Platz 10, der Vorletzte steht direkt davor: Platz 9.' },
    { id: 'l2b-ko-sieger', fam: 'ko-sieger-spiele', cat: 'Logik', type: 'number',
      q: 'Bei einem Tennisturnier mit 16 Spielern scheidet aus, wer ein Spiel verliert. Spielfrei hat niemand, jede Runde halbiert das Feld. Wie viele Spiele bestreitet der Turniersieger?',
      a: 4, r: [2, 0, 0, 1, 0],
      ex: '16 → 8 → 4 → 2 → 1: Das sind vier Runden, und der Sieger spielt in jeder genau einmal.' },
    { id: 'l2b-turm', fam: 'turm-stapelfolge', cat: 'Logik', type: 'choice',
      q: 'Vier Bauklötze bilden einen Turm. Der rote liegt ganz unten, der grüne ganz oben, und der blaue liegt direkt auf dem gelben. Welcher Klotz liegt direkt auf dem roten?',
      opts: ['Der gelbe', 'Der blaue', 'Der grüne', 'Kann man nicht wissen'], a: 0, r: [2, 0, 0, 1, 0],
      ex: 'Für Gelb und Blau bleiben die beiden mittleren Plätze. Da Blau auf Gelb liegt, ist Gelb direkt über Rot.' },

    // ---------- mittel ----------
    { id: 'l2b-ueberholen', fam: 'ueberholen-protokoll', cat: 'Logik', type: 'text',
      q: 'Bei einem Lauf liegen die Läuferinnen in dieser Reihenfolge: Ada, Bea, Cleo, Dana, Eva. Dann überholt Dana zwei Läuferinnen, danach Eva eine. Ada fällt ganz ans Ende zurück, zuletzt überholt Bea eine. Wer liegt jetzt auf Platz 2?',
      a: 'DANA', r: [3, 0, 0, 2, 0],
      ex: 'Ada, Dana, Bea, Cleo, Eva → Ada, Dana, Bea, Eva, Cleo → Dana, Bea, Eva, Cleo, Ada → Bea, Dana, Eva, Cleo, Ada. Auf Platz 2 liegt Dana.' },
    { id: 'l2b-podest-zaehlen', fam: 'podest-verteilen', cat: 'Logik', type: 'number',
      q: 'Fünf Läuferinnen treten zu einem Rennen an, Gleichstand gibt es nicht. Wie viele verschiedene Möglichkeiten gibt es, Gold, Silber und Bronze zu verteilen?',
      a: 60, r: [2, 1, 1, 1, 0],
      ex: 'Für Gold kommen 5 infrage, für Silber danach noch 4, für Bronze noch 3: 5 × 4 × 3 = 60.' },
    { id: 'l2b-vor-hinter', fam: 'vor-hinter-verhaeltnis', cat: 'Logik', type: 'number',
      q: 'Bei einem Lauf mit 22 Teilnehmern kommt Mia so ins Ziel, dass doppelt so viele Läufer hinter ihr sind wie vor ihr. Gleichstand gibt es nicht. Welchen Platz belegt Mia?',
      a: 8, r: [2, 1, 1, 1, 0],
      ex: 'Außer Mia gibt es 21 Läufer: 7 vor ihr und 14 hinter ihr. Mit 7 Läufern vor sich ist sie Achte.' },
    { id: 'l2b-gleich-viele-siege', fam: 'rundenturnier-gleiche-siege', cat: 'Logik', type: 'number',
      q: 'Fünf Spielerinnen tragen ein Tischtennisturnier aus: Jede spielt genau einmal gegen jede andere, Unentschieden gibt es nicht. Am Ende haben alle gleich viele Siege. Wie viele Siege hat jede?',
      a: 2, r: [2, 1, 0, 1, 0],
      ex: 'Es gibt 10 Spiele (5 × 4 : 2) und damit genau 10 Siege. Gleichmäßig auf 5 Spielerinnen verteilt, sind das 2 für jede.' },
    { id: 'l2b-spieltage', fam: 'liga-spieltage', cat: 'Logik', type: 'number',
      q: 'In einer Liga mit sechs Mannschaften spielt jede gegen jede andere zweimal: ein Hin- und ein Rückspiel. An jedem Spieltag hat jede Mannschaft genau ein Spiel. Wie viele Spieltage hat die Saison?',
      a: 10, r: [2, 1, 1, 1, 0],
      ex: 'Jede Mannschaft hat 5 Gegner und spielt gegen jeden zweimal, also 10 Spiele. Bei einem Spiel pro Spieltag sind das 10 Spieltage.' },
    { id: 'l2b-kino-mitte', fam: 'sitzreihe-bank', cat: 'Logik', type: 'choice',
      q: 'Anna, Ben, Cem, Dora und Emil sitzen im Kino auf fünf Plätzen nebeneinander. Ben sitzt direkt neben Emil, Cem direkt neben Dora. Anna sitzt nicht an einem der beiden Enden. Wer sitzt in der Mitte?',
      opts: ['Anna', 'Ben', 'Dora', 'Kann man nicht wissen'], a: 0, r: [2, 2, 1, 1, 0],
      ex: 'Säße Anna auf Platz 2 oder 4, bliebe ein einzelner Randplatz übrig, den keines der beiden Paare füllen kann. Also sitzt Anna in der Mitte, die Paare links und rechts von ihr.' },
    { id: 'l2b-kreis-gegenueber', fam: 'kreis-gegenueber-anzahl', cat: 'Logik', type: 'number',
      q: 'Kinder stehen in gleichen Abständen im Kreis und sind reihum durchnummeriert: 1, 2, 3 und so weiter. Kind 7 steht Kind 18 genau gegenüber. Wie viele Kinder stehen im Kreis?',
      a: 22, r: [2, 1, 1, 1, 0],
      ex: 'Von 7 bis 18 sind es 11 Schritte – das ist der halbe Kreis. Der ganze Kreis hat also 22 Kinder.' },

    // ---------- schwer ----------
    { id: 'l2b-nachbartausch', fam: 'nachbartausch-sortieren', cat: 'Logik', type: 'number',
      q: 'Fünf Bände stehen in der Reihenfolge 2 – 5 – 1 – 4 – 3 im Regal. Du darfst immer nur zwei benachbarte Bände vertauschen. Wie viele Vertauschungen brauchst du mindestens, bis sie als 1 – 2 – 3 – 4 – 5 dastehen?',
      a: 5, r: [2, 2, 1, 2, 0],
      ex: 'Falsch herum stehen die Paare 2/1, 5/1, 5/4, 5/3 und 4/3. Jede Vertauschung benachbarter Bände behebt höchstens eines davon – also mindestens 5, und 5 reichen auch.' },
    { id: 'l2b-sieger-luegt', fam: 'sieger-luegt', cat: 'Logik', type: 'text',
      q: 'Vier Kinder sind um die Wette gelaufen, ohne Gleichstand. Nur wer gewonnen hat, lügt – die anderen sagen die Wahrheit. Ali: „Ich wurde Dritter.“ Bea: „Ich wurde Vierte.“ Cem: „Ich war vor Ali.“ Dora: „Ich wurde Dritte.“ Wer hat gewonnen?',
      a: 'DORA', r: [3, 2, 1, 2, 0],
      ex: 'Ali und Dora können nicht beide Dritte sein, also lügt einer von ihnen. Wäre Ali Sieger, könnte Cem nicht vor ihm sein – also hat Dora gewonnen (Dora, Cem, Ali, Bea).' },
    { id: 'l2b-zwillinge', fam: 'nicht-nebeneinander-bank', cat: 'Logik', type: 'number',
      q: 'Fünf Kinder setzen sich nebeneinander auf eine Bank. Zwei davon sind Zwillinge, die auf keinen Fall Sitznachbarn sein wollen. Wie viele verschiedene Sitzordnungen gibt es?',
      a: 72, r: [2, 2, 1, 2, 0],
      ex: 'Ohne Bedingung gibt es 5 × 4 × 3 × 2 × 1 = 120 Ordnungen. Mit den Zwillingen nebeneinander sind es 4 Platzpaare × 2 Reihenfolgen × 6 für die anderen = 48 – bleiben 72.' },
    { id: 'l2b-tisch-abstand', fam: 'kreis-kein-nachbar', cat: 'Logik', type: 'number',
      q: 'An einem runden Tisch stehen 9 Stühle in gleichen Abständen. Gäste setzen sich so, dass niemand direkt neben einem anderen Gast sitzt. Wie viele Gäste passen höchstens an den Tisch?',
      a: 4, r: [2, 2, 2, 1, 0],
      ex: 'Jeder Gast braucht rechts von sich einen freien Stuhl, also 2 Stühle pro Gast. 9 Stühle reichen damit nur für 4 – bei 5 säßen im geschlossenen Kreis zwei nebeneinander.' },
    { id: 'l2b-abzaehlen', fam: 'abzaehlen-im-kreis', cat: 'Logik', type: 'number',
      q: 'Zehn Kinder stehen im Kreis, nummeriert von 1 bis 10. Reihum wird abgezählt: Kind 1 bleibt, Kind 2 scheidet aus, Kind 3 bleibt, Kind 4 scheidet aus … Es geht immer weiter im Kreis, Ausgeschiedene werden übersprungen. Welches Kind bleibt als letztes übrig?',
      a: 5, r: [3, 1, 1, 2, 0],
      ex: 'Zuerst scheiden 2, 4, 6, 8 und 10 aus. Dann bleibt 1, 3 fällt, 5 bleibt, 7 fällt, 9 bleibt, 1 fällt, 5 bleibt, 9 fällt – übrig ist Kind 5.' },
    { id: 'l2b-teilordnung', fam: 'teilordnung-zieleinlauf', cat: 'Logik', type: 'number',
      q: 'Fünf Läufer kommen nacheinander ins Ziel, Gleichstand gibt es nicht. Bekannt ist nur: Anna war vor Ben, und Ben war vor Cem. Wie viele verschiedene Zieleinläufe sind damit möglich?',
      a: 20, r: [2, 2, 1, 2, 0],
      ex: 'Ohne Wissen gäbe es 120 Reihenfolgen. Anna, Ben und Cem können in 6 Reihenfolgen untereinander ankommen, nur eine davon passt: 120 : 6 = 20.' },
    { id: 'l2b-reihe-nachbar', fam: 'reihe-zwangsnachbar', cat: 'Logik', type: 'number',
      q: 'In einer Reihe stehen 10 Stühle. Wie viele Personen müssen sich mindestens hinsetzen, damit jeder, der danach dazukommt, direkt neben jemandem sitzen muss?',
      a: 4, r: [2, 2, 1, 1, 0],
      ex: 'Jede Person deckt höchstens drei Stühle ab: ihren eigenen und die beiden daneben. Drei Personen schaffen also höchstens 9 Stühle; 4 reichen, z. B. auf den Stühlen 2, 5, 8 und 10.' },

    // ---------- sehr schwer ----------
    { id: 'l2b-zweitschwerste', fam: 'zweitschwerste-finden', cat: 'Logik', type: 'number',
      q: 'Acht Kugeln sind alle verschieden schwer. Bei jeder Wägung vergleichst du zwei Kugeln auf einer Balkenwaage. Wie viele Wägungen brauchst du mindestens, um in jedem Fall die schwerste und die zweitschwerste Kugel zu kennen?',
      a: 9, r: [3, 3, 2, 2, 0],
      ex: 'Im K.-o.-System steht die schwerste nach 7 Wägungen fest. Die zweitschwerste kann nur von ihr geschlagen worden sein, ist also eine der 3 Kugeln, die direkt gegen die schwerste verloren haben – 2 weitere Wägungen entscheiden: 7 + 2 = 9. Mit 8 geht es nicht in jedem Fall: Jede Kugel außer der schwersten muss einmal verlieren (7 Wägungen), und im ungünstigsten Fall hat die schwerste dabei 3 Kugeln direkt geschlagen, von denen 2 noch ein zweites Mal verlieren müssen.' },
    { id: 'l2b-sortieren-waage', fam: 'sortieren-mit-waage', cat: 'Logik', type: 'number',
      q: 'Vier Gewichte sind alle verschieden schwer. Bei jeder Wägung vergleichst du zwei davon auf einer Balkenwaage. Wie viele Wägungen brauchst du mindestens, um in jedem Fall ihre genaue Reihenfolge vom leichtesten bis zum schwersten zu kennen?',
      a: 5, r: [3, 2, 2, 2, 0],
      ex: 'Es gibt 24 mögliche Reihenfolgen, und 4 Wägungen können höchstens 16 Fälle unterscheiden. Mit 5 klappt es: A mit B und C mit D wiegen, die beiden schwereren vergleichen, dann das übrige Gewicht mit höchstens zwei Wägungen einsortieren.' },
    { id: 'l2b-gleichstand', fam: 'zieleinlauf-gleichstand', cat: 'Logik', type: 'number',
      q: 'Drei Läuferinnen kommen ins Ziel. Gleichstand ist möglich – zu zweit oder sogar zu dritt; wer gleichzeitig ankommt, teilt sich den Platz. Wie viele verschiedene Zieleinläufe gibt es?',
      a: 13, r: [3, 2, 2, 2, 0],
      ex: '6 Reihenfolgen ohne Gleichstand, 6 mit genau zwei Gleichzeitigen (3 mögliche Paare, jeweils vor oder hinter der Dritten) und 1, wenn alle gleichzeitig ankommen: 6 + 6 + 1 = 13.' },
    { id: 'l2b-buecherwurm', fam: 'buecherwurm-regal', cat: 'Logik', type: 'number',
      q: 'Drei gewöhnliche Bände stehen im Regal, von links nach rechts Band 1, 2, 3, die Buchrücken zu dir. Jeder Seitenblock ist 30 mm dick, jeder Deckel 2 mm. Ein Wurm bohrt sich geradewegs von der ersten Seite von Band 1 bis zur letzten von Band 3. Wie viele Millimeter frisst er?',
      svg: svgShelf(), a: 38, r: [2, 3, 3, 1, 0],
      ex: 'Steht ein Buch aufrecht mit dem Rücken zu dir, liegt seine erste Seite rechts und seine letzte links. Der Wurm frisst also nur den vorderen Deckel von Band 1, ganz Band 2 (2 + 30 + 2 = 34) und den hinteren Deckel von Band 3: 2 + 34 + 2 = 38.' },
    { id: 'l2b-alter-platz', fam: 'keiner-am-alten-platz', cat: 'Logik', type: 'number',
      q: 'Vier Kinder sitzen nebeneinander auf vier Stühlen. Sie stehen auf und setzen sich neu hin – so, dass keines wieder auf seinem alten Stuhl sitzt. Wie viele verschiedene neue Sitzordnungen sind möglich?',
      a: 9, r: [3, 2, 2, 2, 0],
      ex: 'Kind k saß vorher auf Stuhl k. Kind 1 hat 3 Stühle zur Wahl, etwa Stuhl 2. Setzt sich Kind 2 dann auf Stuhl 1, müssen Kind 3 und 4 tauschen; nimmt Kind 2 Stuhl 3 oder 4, ist der Rest jeweils festgelegt. Das sind 3 Möglichkeiten. Wählt Kind 1 Stuhl 3 oder 4, gibt es ebenso je 3: 3 × 3 = 9.' },
    { id: 'l2b-kreis-nachbarn', fam: 'kreis-nachbarn-zaehlen', cat: 'Logik', type: 'number',
      q: 'Fünf Freunde setzen sich an einen runden Tisch. Zwei Sitzordnungen gelten als gleich, wenn jeder wieder dieselben beiden Nachbarn hat – egal auf welcher Seite. Wie viele verschiedene Sitzordnungen gibt es?',
      a: 12, r: [3, 2, 2, 2, 0],
      ex: 'Setzt man einen Freund fest hin, lassen sich die anderen vier auf 4 × 3 × 2 × 1 = 24 Arten verteilen. Jede Ordnung und ihr Spiegelbild haben dieselben Nachbarn: 24 : 2 = 12.' },
  ]);
})();

// ---- logik2c.js ----
(function () {
  // Paket logik2c: Denkfallen vom CRT-Typ, Wahrscheinlichkeits-Intuition,
  // Schubfachprinzip, Mengen und Überschneidungen, Grenzfälle.
  QUIZ_ADD([
    // ---------- leicht ----------
    { id: 'l2c-oder-hund', fam: 'oder-ausschluss', cat: 'Logik', type: 'choice',
      q: 'Jeder Hund in unserer Straße ist braun oder klein (oder beides). Bello ist ein Hund aus unserer Straße und nicht braun. Was folgt <b>sicher</b>?',
      opts: ['Bello ist klein', 'Bello ist groß', 'Bello ist schwarz', 'Nichts davon'], a: 0, r: [1, 0, 0, 0, 0],
      ex: 'Ist ein Hund aus der Straße nicht braun, muss die andere Bedingung zutreffen – Bello ist also klein. Seine Farbe kennt man nicht.' },
    { id: 'l2c-sechs-wuerfe', fam: 'sechs-wuerfe-keine-garantie', cat: 'Logik', type: 'choice',
      q: 'Bei einem normalen Würfel ist die Chance auf eine Sechs 1 von 6 (also 1/6). Du würfelst genau sechsmal. Ist dann sicher mindestens eine Sechs dabei?',
      opts: ['Nein, es kann auch keine fallen', 'Ja, ganz sicher', 'Ja, sogar genau eine'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Jeder Wurf ist unabhängig – sechsmal keine Sechs ist durchaus möglich (Chance etwa 1 von 3: (5/6)⁶ ≈ 33 %). Mindestens eine Sechs ist nur wahrscheinlich, nicht sicher.' },
    { id: 'l2c-quadrat-rechteck', fam: 'teilmenge-quadrat-rechteck', cat: 'Logik', type: 'choice',
      q: 'Ein Rechteck ist ein Viereck mit vier rechten Winkeln. Welche Aussage stimmt?',
      opts: ['Jedes Quadrat ist ein Rechteck', 'Jedes Rechteck ist ein Quadrat', 'Kein Quadrat ist ein Rechteck', 'Quadrat und Rechteck sind dasselbe'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Ein Quadrat hat vier rechte Winkel, ist also ein Rechteck – eins mit vier gleich langen Seiten. Umgekehrt gilt das nicht.' },
    { id: 'l2c-keine-aepfel', fam: 'komplement-zaehlen', cat: 'Logik', type: 'number',
      q: 'In einem Korb liegen nur Äpfel und Birnen. 7 der Früchte sind keine Äpfel, 5 der Früchte sind keine Birnen. Wie viele Früchte liegen im Korb?',
      a: 12, r: [1, 1, 0, 1, 0],
      ex: 'Was kein Apfel ist, ist eine Birne: 7 Birnen. Was keine Birne ist, ist ein Apfel: 5 Äpfel. Zusammen 12.' },
    { id: 'l2c-beide-sorten', fam: 'schlimmster-fall-jede-farbe', cat: 'Logik', type: 'choice',
      q: 'In einer Tüte sind 3 Äpfel und 3 Birnen. Du nimmst blind 4 Früchte heraus. Was ist <b>sicher</b>?',
      opts: ['Du hast beide Sorten', 'Du hast mindestens 2 Äpfel', 'Du hast genau 2 Birnen', 'Nichts davon'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Höchstens 3 der 4 Früchte können Äpfel sein und höchstens 3 Birnen – also ist von jeder Sorte mindestens eine dabei. Die anderen Aussagen sind nicht sicher: Du könntest z. B. 1 Apfel und 3 Birnen ziehen.' },
    { id: 'l2c-eintritt', fam: 'altersgrenze-stichtag', cat: 'Logik', type: 'choice',
      q: 'Kinder unter 6 Jahren zahlen im Zoo keinen Eintritt. Lena feiert morgen ihren 6. Geburtstag. Muss sie heute Eintritt zahlen?',
      opts: ['Nein', 'Ja', 'Kann man nicht wissen'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Heute ist Lena noch 5 Jahre alt, also unter 6 – sie zahlt nichts. 6 Jahre alt ist sie erst ab morgen.' },

    // ---------- mittel ----------
    { id: 'l2c-leere-regel', fam: 'leere-bedingung', cat: 'Logik', type: 'choice',
      q: 'Im Bus gilt: „Wer hier isst, zahlt 5 € Strafe.“ Heute hat niemand im Bus gegessen, und niemand hat Strafe gezahlt. Wurde die Regel heute gebrochen?',
      opts: ['Nein', 'Ja', 'Kann man nicht wissen'], a: 0, r: [1, 1, 1, 0, 0],
      ex: 'Die Regel verlangt nur etwas von Leuten, die im Bus essen. Gab es keine, hat auch niemand gegen sie verstoßen.' },
    { id: 'l2c-lotto', fam: 'lotto-muster', cat: 'Logik', type: 'choice',
      q: 'Beim Lotto „6 aus 49“ werden 6 der 49 Kugeln zufällig gezogen. Was ist wahrscheinlicher – dass genau 1, 2, 3, 4, 5, 6 gezogen werden oder genau 3, 11, 17, 28, 35, 42?',
      opts: ['Beides gleich wahrscheinlich', '3, 11, 17, 28, 35, 42', '1, 2, 3, 4, 5, 6'], a: 0, r: [1, 1, 2, 0, 0],
      ex: 'Jede bestimmte Kombination aus sechs Zahlen hat genau dieselbe Chance. Die Reihe 1 bis 6 wirkt nur weniger zufällig.' },
    { id: 'l2c-loch', fam: 'leeres-loch', cat: 'Logik', type: 'number',
      q: 'Ein Gärtner hebt ein Loch aus, das 2 m lang, 2 m breit und 1 m tief ist. Wie viele Kubikmeter Erde sind jetzt noch in dem Loch?',
      a: 0, r: [1, 1, 2, 0, 0],
      ex: 'Die 2 × 2 × 1 = 4 m³ Erde hat der Gärtner herausgeholt – im ausgehobenen Loch ist jetzt keine Erde mehr.' },
    { id: 'l2c-null-gerade', fam: 'null-gerade', cat: 'Logik', type: 'choice',
      q: 'Ist die Zahl 0 gerade, ungerade oder keins von beidem?',
      opts: ['Gerade', 'Ungerade', 'Keins von beidem'], a: 0, r: [1, 1, 2, 0, 1],
      ex: 'Gerade heißt: ohne Rest durch 2 teilbar. 0 : 2 = 0 ohne Rest – außerdem liegt die 0 zwischen den ungeraden Zahlen −1 und 1.' },
    { id: 'l2c-sprachen', fam: 'mindest-vereinigung', cat: 'Logik', type: 'number',
      q: 'In einer Gruppe sprechen 20 Personen Französisch und 15 Personen Spanisch. Jede Person der Gruppe spricht mindestens eine der beiden Sprachen. Wie viele Personen hat die Gruppe <b>mindestens</b>?',
      a: 20, r: [1, 1, 2, 1, 0],
      ex: 'Am wenigsten sind es, wenn alle 15 Spanischsprecher auch Französisch sprechen – dann besteht die Gruppe nur aus den 20.' },
    { id: 'l2c-teich', fam: 'fence', cat: 'Logik', type: 'number',
      q: 'Ein geschlossener runder Zaun um einen Teich ist 30 m lang. Alle 3 m steht ein Pfosten. Wie viele Pfosten braucht man?',
      a: 10, r: [1, 1, 1, 1, 0],
      ex: 'Der Zaun ist geschlossen: Der letzte Abschnitt endet wieder am ersten Pfosten. 30 : 3 = 10 Abschnitte, also 10 Pfosten – nicht 11.' },
    { id: 'l2c-prozentpunkte', fam: 'prozentpunkte', cat: 'Logik', type: 'number',
      q: 'Der Zinssatz einer Bank steigt von 2 % auf 3 %. Um wie viel Prozent ist der Zinssatz gestiegen?',
      a: 50, r: [1, 1, 2, 1, 0],
      ex: 'Er steigt um 1 Prozentpunkt. Gemessen am alten Wert von 2 % ist das die Hälfte – eine Steigerung um 50 %.' },

    // ---------- schwer ----------
    { id: 'l2c-hennen', fam: 'widgets', cat: 'Logik', type: 'number',
      q: 'Anderthalb Hennen legen in anderthalb Tagen anderthalb Eier. Wie viele Eier legen 3 Hennen in 3 Tagen, wenn alle Hennen gleich fleißig sind?',
      a: 6, r: [2, 1, 3, 1, 0],
      ex: 'Doppelt so viele Hennen legen doppelt so viele Eier, doppelt so viele Tage verdoppeln das noch einmal: 1,5 × 2 × 2 = 6.' },
    { id: 'l2c-summe-elf', fam: 'schubfach-summenpaare', cat: 'Logik', type: 'number',
      q: 'Du wählst verschiedene Zahlen von 1 bis 10. Wie viele musst du mindestens wählen, damit <b>sicher</b> zwei darunter sind, die zusammen 11 ergeben?',
      a: 6, r: [2, 2, 2, 1, 0],
      ex: 'Es gibt 5 Paare mit Summe 11: 1+10, 2+9, 3+8, 4+7, 5+6. Mit 5 Zahlen kannst du aus jedem Paar eine nehmen – die sechste vervollständigt sicher ein Paar.' },
    { id: 'l2c-fliege', fam: 'fliege-pendelt', cat: 'Logik', type: 'number',
      q: 'Zwei Radfahrer sind 30 km voneinander entfernt und fahren mit je 15 km/h aufeinander zu. Eine Fliege fliegt mit 40 km/h ständig zwischen ihnen hin und her, bis sie sich treffen. Wie viele Kilometer fliegt sie insgesamt?',
      a: 40, r: [2, 2, 2, 1, 0],
      ex: 'Die Radfahrer kommen sich mit 30 km/h näher und treffen sich nach genau einer Stunde. So lange fliegt die Fliege mit 40 km/h – also 40 km.' },
    { id: 'l2c-wein-wasser', fam: 'wein-wasser-tausch', cat: 'Logik', type: 'choice',
      q: 'Ein Glas Wein und ein Glas Wasser sind gleich voll. Du gibst einen Löffel Wein ins Wasser, rührst um und gibst einen gleich vollen Löffel der Mischung zurück. Was ist jetzt mehr: Wein im Wasserglas oder Wasser im Weinglas?',
      opts: ['Beides gleich viel', 'Wein im Wasserglas', 'Wasser im Weinglas', 'Kommt auf die Löffelgröße an'], a: 0, r: [2, 2, 3, 0, 0],
      ex: 'Am Ende ist in beiden Gläsern wieder genauso viel wie vorher. So viel Wein, wie ins Wasserglas gewandert ist, fehlt im Weinglas – und genau diese Lücke füllt Wasser.' },
    { id: 'l2c-karten-rot', fam: 'zwei-seiten-karten', cat: 'Logik', type: 'choice',
      q: 'In einem Beutel sind drei Karten: eine beidseitig rot, eine beidseitig weiß, eine mit einer roten und einer weißen Seite. Du ziehst blind eine und legst sie zufällig hin. Oben ist Rot. Wie wahrscheinlich ist die Unterseite auch rot?',
      opts: ['Zwei Drittel', 'Die Hälfte', 'Ein Drittel', 'Drei Viertel'], a: 0, r: [2, 2, 3, 0, 0],
      ex: 'Oben kann jede der drei roten Seiten liegen, alle gleich wahrscheinlich. Zwei davon gehören zur beidseitig roten Karte, nur eine zur rot-weißen.' },
    { id: 'l2c-mantel', fam: 'mantel-zufall', cat: 'Logik', type: 'number',
      q: '10 Gäste geben ihre Mäntel an der Garderobe ab. Beim Gehen werden die 10 Mäntel rein zufällig an die 10 Gäste verteilt, jeder bekommt einen. Wie viele Gäste bekommen im Durchschnitt ihren eigenen Mantel?',
      a: 1, r: [2, 2, 2, 1, 0],
      ex: 'Jeder Gast bekommt mit einer Chance von 1 von 10 (1/10) seinen eigenen Mantel. Bei 10 Gästen sind das im Schnitt 10 × 1/10 = 1. Auch wenn die Mäntel voneinander abhängen – für den Durchschnitt darf man die Einzelchancen einfach addieren.' },

    // ---------- sehr schwer ----------
    { id: 'l2c-gurken', fam: 'wasseranteil-trocknen', cat: 'Logik', type: 'number',
      q: '100 kg frische Gurken bestehen zu 99 % aus Wasser. Nach einigen Tagen in der Sonne ist Wasser verdunstet, jetzt bestehen sie nur noch zu 98 % aus Wasser. Wie viele Kilogramm wiegen die Gurken jetzt?',
      a: 50, r: [2, 3, 3, 1, 0],
      ex: 'Die Trockenmasse bleibt 1 kg. Vorher war sie 1 % des Gewichts, jetzt sind es 2 % – die Gurken wiegen also nur noch 50 kg.' },
    { id: 'l2c-erste-sechs', fam: 'erste-sechs-haeufigst', cat: 'Logik', type: 'number',
      q: 'Du würfelst mit einem normalen Würfel so lange, bis die erste Sechs fällt, und zählst die Würfe. Welche Anzahl von Würfen ist dabei am wahrscheinlichsten?',
      a: 1, r: [2, 3, 3, 0, 0],
      ex: 'Schon beim ersten Wurf klappt es mit der Chance 1/6. Für jede größere Anzahl müssen zusätzlich alle Würfe davor danebengehen – das macht sie immer unwahrscheinlicher.' },
    { id: 'l2c-teilbar', fam: 'schubfach-teiler', cat: 'Logik', type: 'number',
      q: 'Du wählst verschiedene Zahlen von 1 bis 20. Wie viele musst du mindestens wählen, damit <b>sicher</b> eine der gewählten Zahlen durch eine andere gewählte teilbar ist?',
      a: 11, r: [3, 3, 2, 2, 0],
      ex: 'Die zehn Zahlen 11 bis 20 teilen sich gegenseitig nicht. Halbiert man jede Zahl, bis sie ungerade ist, gibt es nur 10 Ergebnisse (1, 3 … 19) – bei 11 Zahlen landen zwei beim selben, und die kleinere teilt die größere.' },
    { id: 'l2c-test-positiv', fam: 'basisrate-test', cat: 'Logik', type: 'number',
      q: 'Von 1000 Menschen haben 10 eine Krankheit. Ein Test erkennt jeden Kranken, schlägt aber auch bei jedem zehnten Gesunden an. Bei Ben, einem der 1000, schlägt er an. Wie viel Prozent beträgt seine Chance, krank zu sein (gerundet)?',
      a: 9, r: [2, 2, 3, 2, 0],
      ex: 'Von den 990 Gesunden zeigt der Test bei 99 fälschlich an, dazu kommen die 10 Kranken. Nur 10 der 109 positiv Getesteten sind krank – etwa 9 %.' },
    { id: 'l2c-ziegen', fam: 'ziegenproblem', cat: 'Logik', type: 'number',
      q: 'Hinter einer von 3 Türen steht ein Auto. Du wählst eine Tür. Der Moderator weiß alles, öffnet danach immer eine andere Tür ohne Auto und lässt dich wechseln. Du wechselst immer. Wie viele von 300 Spielen gewinnst du im Schnitt?',
      a: 200, r: [2, 3, 3, 1, 0],
      ex: 'Deine erste Wahl trifft nur in 1 von 3 Fällen. In den anderen 2 von 3 Fällen steht das Auto hinter der einzigen Tür, zu der du wechseln kannst – also 200 von 300.' },
    { id: 'l2c-haendedruck', fam: 'schubfach-haendedruck', cat: 'Logik', type: 'number',
      q: 'Auf einer Feier mit 10 Gästen geben sich manche die Hand – jedes Paar höchstens einmal. Danach nennt jeder, wie vielen anderen er die Hand gegeben hat. Wie viele <b>verschiedene</b> Zahlen können dabei höchstens vorkommen?',
      a: 9, r: [3, 3, 2, 1, 0],
      ex: 'Denkbar wären 0 bis 9, also 10 Werte. Aber 0 und 9 schließen sich aus: Wer 9 Hände schüttelt, hat jedem die Hand gegeben. Es bleiben höchstens 9 – und die sind erreichbar, z. B. mit den Zahlen 1, 2, 3, 4, 5, 5, 6, 7, 8, 9 (nur die 5 kommt doppelt vor).' },
  ]);
})();

// ---- mix2a.js ----
(function () {
  const { svg } = (typeof window !== 'undefined' ? window : globalThis).QSVG;
  const tx = (x, y, t, size = 26) => `<text class="tx" x="${x}" y="${y}" text-anchor="middle" font-size="${size}" font-weight="700">${t}</text>`;
  const zitat = t => `<br><b>„${t}“</b>`;

  // Buchstabenraster: Zeilen als Strings, Leerzeichen = leeres Feld, '?' = Fragezeichen-Feld, '#' = kein Feld
  function letterGrid(rows, c = 52) {
    const o = 8;
    let s = '';
    rows.forEach((row, r) => [...row].forEach((ch, k) => {
      if (ch === '#') return;
      const x = o + k * c, y = o + r * c;
      s += `<rect class="cell" x="${x}" y="${y}" width="${c}" height="${c}"/>`;
      if (ch !== ' ') s += tx(x + c / 2, y + c / 2 + 10, ch, ch === '?' ? 24 : 28);
    }));
    const w = 2 * o + rows[0].length * c, h = 2 * o + rows.length * c;
    return svg(`0 0 ${w} ${h}`, s);
  }

  QUIZ_ADD([
    // ===== leicht =====
    { id: 'm2a-treppensatz', fam: 'm2a-treppensatz', cat: 'Sprache', type: 'choice',
      q: 'In diesem Satz hat jedes Wort genau einen Buchstaben mehr als das Wort davor. Welches Wort gehört in die Lücke?' + zitat('Wo ist Omas ___ Garten?'),
      opts: ['alter', 'großer', 'kleiner', 'schöner'], a: 0, r: [1, 1, 0, 1, 0],
      ex: 'Wo (2), ist (3), Omas (4), ? (5), Garten (6): Gesucht ist ein Wort mit fünf Buchstaben – nur „alter“ passt. „großer“ hat sechs, „kleiner“ und „schöner“ haben sieben.' },

    // ===== mittel =====
    { id: 'm2a-komma-krank', fam: 'm2a-komma-sinn', cat: 'Sprache', type: 'choice',
      q: 'Wer soll laut diesem Satz krank sein?' + zitat('Lea, sagt Tom, ist krank.'),
      opts: ['Lea', 'Tom', 'Beide', 'Niemand'], a: 0, r: [1, 1, 2, 0, 0],
      ex: 'Die beiden Kommas schließen „sagt Tom“ als Einschub ein: Tom sagt, dass Lea krank ist. Erst „Lea sagt, Tom ist krank.“ würde bedeuten, dass Tom krank sein soll.' },
    { id: 'm2a-wortquadrat', fam: 'm2a-wortquadrat', cat: 'Sprache', type: 'text',
      q: 'In diesem Wortquadrat stehen waagerecht dieselben Wörter wie senkrecht: Die 1. Zeile ist zugleich die 1. Spalte, die 2. Zeile die 2. Spalte und so weiter. Welches Wort gehört in die Zeile mit den Fragezeichen?',
      svg: letterGrid(['ROSE', 'OBER', 'SEIL', '????']),
      a: 'ERLE', r: [1, 2, 0, 1, 0],
      ex: 'Die 4. Zeile muss genauso beginnen wie die 4. Spalte: E-R-L-… – das einzige passende Wort ist ERLE. Dann heißen alle Zeilen und Spalten ROSE, OBER, SEIL, ERLE.' },
    { id: 'm2a-wortlaengen-zahl', fam: 'm2a-wortlaengen-ziffern', cat: 'Sprache', type: 'number',
      q: 'Schreibe für jedes Wort dieses Satzes der Reihe nach die Anzahl seiner Buchstaben als Ziffer auf. Welche Zahl entsteht?' + zitat('Opa schnarcht sehr laut.'),
      a: 3944, r: [1, 1, 1, 1, 0],
      ex: '„Opa“ hat 3 Buchstaben, „schnarcht“ 9 (s-c-h-n-a-r-c-h-t), „sehr“ 4 und „laut“ 4 – hintereinander geschrieben 3944.' },

    // ===== schwer =====
    { id: 'm2a-roesselsprung', fam: 'springer', cat: 'Sprache', type: 'text',
      q: 'Der Springer beim Schach zieht immer zwei Felder geradeaus und dann eins zur Seite. Springe so von Buchstabe zu Buchstabe, bis du jeden der acht Buchstaben genau einmal besucht hast. Welches Tier liest du?',
      svg: letterGrid(['ANF', 'O M', 'ILG'], 64),
      a: 'FLAMINGO', r: [3, 1, 1, 2, 0],
      ex: 'Die Springerzüge führen im Kreis um die leere Mitte. Beginnt man beim F oben rechts, liest man F → L → A → M → I → N → G → O: FLAMINGO.' },
    { id: 'm2a-alphabet-im-satz', fam: 'm2a-alphabet-im-satz', cat: 'Sprache', type: 'text',
      q: 'Lies den Satz von vorn nach hinten: Suche ein A, dahinter ein B, dahinter ein C und so weiter. Bis zu welchem Buchstaben des Alphabets kommst du höchstens? (Groß oder klein ist egal.)' + zitat('Am Bach campen drei Eulen, fünf graue Hasen jagen kleine Mäuse.'),
      a: 'I', letters: true, r: [3, 1, 1, 2, 0],
      ex: 'A (Am), B und C (Bach), D und E (drei), F (fünf), G (graue), H (Hasen), I (kleine). Das einzige J steht in „jagen“ – und das liegt vor dem I. Also ist beim I Schluss.' },
    { id: 'm2a-unveraenderlich', fam: 'm2a-innen-vertauscht', cat: 'Sprache', type: 'number',
      q: 'Du darfst in jedem Wort die Buchstaben zwischen dem ersten und dem letzten beliebig vertauschen. Bei wie vielen Wörtern dieses Satzes kann sich dadurch gar nichts verändern, egal wie du tauschst?' + zitat('Am Meer lag ein leeres Boot neben dem alten Haus.'),
      a: 6, r: [2, 2, 2, 2, 0],
      ex: 'Unveränderlich sind Wörter mit höchstens einem Buchstaben in der Mitte (Am, lag, ein, dem) und Wörter, deren Mitte aus lauter gleichen Buchstaben besteht (Meer, Boot). Bei „leeres“ lässt sich das R verschieben. Zusammen sind es 6.' },

    // ===== sehr schwer =====
    { id: 'm2a-autogramm-e', fam: 'satz-zaehlen', cat: 'Sprache', type: 'number',
      q: 'Welche Zahl muss – als Wort ausgeschrieben – in die Lücke, damit der Satz stimmt? Gib sie in Ziffern ein. Groß- und Kleinbuchstaben zählen gleich.' + zitat('Wer genau hinsieht, merkt: In diesem Satz steht der Buchstabe E genau ___mal.'),
      a: 13, r: [3, 2, 2, 2, 0],
      ex: 'Ohne das Zahlwort stehen schon 11 E im Satz, die Zahl ist also mindestens elf. „elf“ ergäbe 12 E, „zwölf“ nur 11, „dreizehn“ mit seinen zwei E genau 13. Ab vierzehn bringt kein Zahlwort genug E mit, um mitzuhalten.' },
    { id: 'm2a-vokaltausch-mund', fam: 'm2a-vokaltausch', cat: 'Sprache', type: 'text',
      q: 'Jemand hat in einem Satz jeden Vokal (A, E, I, O, U) nach einer festen Regel durch einen anderen Vokal ersetzt – zwei verschiedene Vokale nie durch denselben. Heraus kam:' + zitat('Doi Ketzi loigt antir dim Tosch.') + '<br>Wie schreibt er nach dieser Regel das Wort MOND?',
      a: 'MUND', r: [3, 2, 2, 2, 0],
      ex: 'Gemeint ist „Die Katze liegt unter dem Tisch.“ – also wird A zu E, E zu I, I zu O und U zu A. Für das O bleibt nur noch das U: E, I, O und A sind schon als Ersatz vergeben, und O selbst darf es nicht bleiben. Aus MOND wird MUND.' },
    { id: 'm2a-kaskade-zebra', fam: 'm2a-ersetzungskaskade', cat: 'Sprache', type: 'text',
      q: 'Ein Programm ersetzt in einem Wort erst alle A durch B, dann alle B durch C, dann alle C durch D und so weiter, zuletzt alle Z durch A. Jeder Schritt arbeitet mit dem Wort, wie es gerade ist. Was wird aus ZEBRA?',
      a: 'AAAAA', r: [2, 3, 3, 1, 0],
      ex: 'Ein Buchstabe, der gerade ersetzt wurde, wird gleich im nächsten Schritt wieder erfasst – so rutscht er bis zum Z hoch. Vor dem letzten Schritt steht ZZZZZ da, und „alle Z durch A“ macht daraus AAAAA.' },
  ]);
})();

// ---- mix2b.js ----
(function () {
  QUIZ_ADD([
    // ===== leicht =====
    { id: 'm2b-aufzug-start', fam: 'aufzug-rueckwaerts', cat: 'Zahlen', type: 'number',
      q: 'Lisa steigt in einen Aufzug. Sie fährt 5 Stockwerke nach oben, dann 8 nach unten und dann 3 nach oben. Jetzt ist sie im 6. Stock. In welchem Stock ist sie eingestiegen?',
      a: 6, r: [1, 0, 0, 1, 0],
      ex: 'Rückwärts gerechnet: 6 − 3 + 8 − 5 = 6. Hoch und runter heben sich genau auf (5 + 3 = 8), sie ist also wieder dort, wo sie eingestiegen ist: im 6. Stock.' },
    { id: 'm2b-tage-aelter', fam: 'tage-aelter-geburtstag', cat: 'Zeit', type: 'choice',
      q: 'Tom ist genau 3 Tage älter als sein Cousin Ole. Ole hat am 2. Juni Geburtstag. An welchem Tag hat Tom Geburtstag?',
      opts: ['30. Mai', '5. Juni', '31. Mai', '1. Juni'], a: 0, r: [1, 0, 1, 1, 0],
      ex: 'Älter heißt früher geboren. Drei Tage vor dem 2. Juni liegen der 1. Juni, der 31. Mai und der 30. Mai – Tom hat am 30. Mai Geburtstag.' },

    // ===== mittel =====
    { id: 'm2b-ankunft-kette', fam: 'ankunft-zeitkette', cat: 'Zeit', type: 'choice',
      q: 'Ben kommt um 9:10 Uhr an. Anna kommt 15 Minuten vor Ben, Cem 10 Minuten nach Anna und Dora 5 Minuten vor Cem. Wer ist als Zweites da?',
      opts: ['Dora', 'Anna', 'Cem', 'Ben'], a: 0, r: [2, 0, 1, 2, 0],
      ex: 'Anna kommt um 8:55 Uhr, Cem um 9:05 Uhr, Dora um 9:00 Uhr und Ben um 9:10 Uhr. Die Reihenfolge ist Anna, Dora, Cem, Ben – als Zweite ist Dora da.' },
    { id: 'm2b-gepaeck-schnitt', fam: 'durchschnittstempo', cat: 'Zahlen', type: 'number',
      q: 'Bei einer Wanderung tragen die 10 Erwachsenen der Gruppe im Durchschnitt 8 kg Gepäck, die 30 Kinder im Durchschnitt 4 kg. Wie viele Kilogramm Gepäck trägt jede der 40 Personen im Durchschnitt?',
      a: 5, r: [2, 0, 2, 1, 0],
      ex: 'Die Erwachsenen tragen zusammen 80 kg, die Kinder 120 kg – das sind 200 kg für 40 Personen, also 5 kg pro Person. Die Mitte von 8 und 4 (= 6) stimmt nicht, weil es dreimal so viele Kinder wie Erwachsene gibt.' },
    { id: 'm2b-praktikum-arbeitstage', fam: 'arbeitstage-zaehlen', cat: 'Zeit', type: 'choice',
      q: 'Ein Praktikum dauert 12 Arbeitstage. Gearbeitet wird nur montags bis freitags, Feiertage gibt es keine. Der erste Arbeitstag ist ein Mittwoch. Auf welchen Wochentag fällt der letzte?',
      opts: ['Donnerstag', 'Freitag', 'Mittwoch', 'Dienstag'], a: 0, r: [2, 0, 1, 2, 0],
      ex: 'Mittwoch bis Freitag sind 3 Arbeitstage, die ganze nächste Woche bringt 5 dazu – zusammen 8. Die Arbeitstage 9 bis 12 sind Montag bis Donnerstag der dritten Woche.' },

    // ===== schwer =====
    { id: 'm2b-zeitung-boegen', fam: 'bogen-seiten-ineinander', cat: 'Zahlen', type: 'number',
      q: 'Eine Zeitung besteht aus Bögen, die ineinandergelegt und gemeinsam in der Mitte gefaltet sind – so trägt jeder Bogen vier Seiten. Die Seiten 3 und 22 stehen auf demselben Bogen. Wie viele Seiten hat die Zeitung?',
      a: 24, r: [3, 2, 1, 2, 0],
      ex: 'Der äußerste Bogen trägt die Seiten 1, 2 und die beiden letzten, der zweite die Seiten 3, 4 sowie die viertletzte und die drittletzte Seite. 22 ist also die viertletzte (dann 25 Seiten) oder die drittletzte (dann 24 Seiten) – und weil jeder Bogen vier Seiten trägt, muss die Seitenzahl durch 4 teilbar sein: 24 Seiten, Bogen 2 trägt 3, 4, 21 und 22.' },
    { id: 'm2b-gleicher-wochentag', fam: 'gleicher-wochentag-daten', cat: 'Zeit', type: 'number',
      q: 'Der 4. April eines Jahres ist ein Montag. Wie viele der Daten 6. Juni, 8. August, 10. Oktober und 12. Dezember desselben Jahres sind ebenfalls Montage?',
      a: 4, r: [3, 2, 1, 2, 0],
      ex: 'Vom 4.4. zum 6.6., vom 6.6. zum 8.8., vom 8.8. zum 10.10. und vom 10.10. zum 12.12. sind es jeweils genau 63 Tage, also 9 volle Wochen. Alle vier sind Montage.' },
    { id: 'm2b-zeiger-auf-zahl', fam: 'zeiger-beide-auf-zahl', cat: 'Zeit', type: 'number',
      q: 'Die Zeiger einer Uhr laufen gleichmäßig, ohne zu springen. Wie oft an einem ganzen Tag (24 Stunden) zeigen der Stunden- und der Minutenzeiger gleichzeitig genau auf je eine Zahl des Zifferblatts (nicht unbedingt dieselbe)?',
      a: 24, r: [2, 2, 2, 1, 0],
      ex: 'Der Stundenzeiger steht nur zu jeder vollen Stunde genau auf einer Zahl, sonst immer dazwischen. Zur vollen Stunde zeigt der Minutenzeiger auf die 12 – das klappt also genau 24-mal.' },

    // ===== sehr schwer =====
    { id: 'm2b-kein-jahr-null', fam: 'jahrhundertbeginn', cat: 'Zeit', type: 'number',
      q: 'Ein Römer wurde am 1. Mai des Jahres 5 v. Chr. geboren. Er starb an seinem Geburtstag im Jahr 5 n. Chr. Wie viele Jahre alt wurde er?',
      a: 9, r: [2, 2, 3, 1, 1],
      ex: 'Ein Jahr 0 gibt es nicht – auf 1 v. Chr. folgt direkt 1 n. Chr. Von 5 v. Chr. bis 1 v. Chr. sind es 4 Jahre, dann 1 Jahr bis 1 n. Chr. und 4 Jahre bis 5 n. Chr.: zusammen 9.' },
    { id: 'm2b-geburtstag-sprung', fam: 'wochentag-ein-jahr', cat: 'Zeit', type: 'text',
      q: 'Lisa kam 2001 an einem Sonntag zur Welt. Ihr 1., 2., 3. und 4. Geburtstag fielen der Reihe nach auf einen Montag, Dienstag, Mittwoch und Freitag. Auf welchen Wochentag fiel ihr 8. Geburtstag?',
      a: 'MITTWOCH', r: [3, 2, 2, 2, 0],
      ex: 'Pro Jahr rückt der Wochentag um 1 weiter, über einen 29. Februar hinweg um 2. Der Sprung vom 3. zum 4. Geburtstag (über den 29.2.2004) kommt erst vom 7. zum 8. wieder (über den 29.2.2008): Der 5. bis 7. Geburtstag sind Samstag, Sonntag und Montag, der 8. ist ein Mittwoch.' },
    { id: 'm2b-kilometer-ohne-vier', fam: 'zaehler-ueberspringt-ziffer', cat: 'Zahlen', type: 'number',
      q: 'Ein defekter Kilometerzähler überspringt jeden Stand, in dem die Ziffer 4 vorkommt: Auf 3 folgt 5, auf 39 folgt 50, auf 399 folgt 500. Er stand auf 0 und zeigt jetzt 1000. Wie viele Kilometer ist das Auto wirklich gefahren?',
      a: 729, r: [3, 2, 2, 2, 0],
      ex: 'Jede der drei Stellen kann nur 9 Ziffern zeigen, von 000 bis 999 gibt es also nur 9 × 9 × 9 = 729 Stände, die 0 eingeschlossen. Nach 728 Kilometern steht er auf 999, beim 729. Kilometer springt er auf 1000.' },
  ]);
})();

// ---- mix2c.js ----
// Paket mix2c (Kategorien „Logik“ und „Bilder“): Ausschlusslogik, Zuordnung und einfache Bildlogik
// mit neuen Ideen – Steckbrief-Ausschluss, Rohrnetz, Teile-Puzzle, Tabelle zurückrechnen, Zahlenschloss,
// Brücken sperren, Minensuche, Schlüssel probieren, Lichter aus, Katze in Kisten, Mützenreihe.
(function () {
  const { svg, eq } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // ---------- kleine Bausteine ----------
  const PINK = '#ff7ab6', CYAN = '#22d3ee', GOLD = '#ffc940', WHITE = '#f3f4ff', DARK = '#1a1240', TILE = '#161b48', GREY = '#5a5f8f';
  const f1 = (v) => Math.round(v * 10) / 10;
  const pts = (arr) => arr.map(([x, y]) => `${f1(x)},${f1(y)}`).join(' ');
  const tx = (x, y, t, size = 16, fill = WHITE) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="middle" font-size="${size}" font-weight="700" fill="${fill}" font-family="sans-serif">${t}</text>`;
  const ngon = (cx, cy, r, n, rot = -90) => Array.from({ length: n }, (_, i) => {
    const a = (rot + i * 360 / n) * Math.PI / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  });
  const starPts = (cx, cy, r) => Array.from({ length: 10 }, (_, i) => {
    const a = (-90 + i * 36) * Math.PI / 180, rr = i % 2 ? r * 0.45 : r;
    return [cx + rr * Math.cos(a), cy + rr * Math.sin(a)];
  });
  // Zeichen: star | circle | tri | sq
  function sym(kind, cx, cy, r, fill) {
    if (kind === 'star') return `<polygon points="${pts(starPts(cx, cy + r * 0.06, r * 1.05))}" fill="${fill}"/>`;
    if (kind === 'circle') return `<circle cx="${f1(cx)}" cy="${f1(cy)}" r="${f1(r * 0.82)}" fill="${fill}"/>`;
    if (kind === 'tri') return `<polygon points="${pts(ngon(cx, cy + r * 0.18, r * 1.02, 3))}" fill="${fill}"/>`;
    if (kind === 'sq') return `<rect x="${f1(cx - r * 0.74)}" y="${f1(cy - r * 0.74)}" width="${f1(r * 1.48)}" height="${f1(r * 1.48)}" fill="${fill}"/>`;
    return '';
  }

  // ---------- Grafiken ----------

  // L: elf Figuren, fünf Form-Farb-Paare und ein Einzelstück (türkiser Stern)
  function svgPaare() {
    const P = [[40, 40], [110, 35], [180, 45], [245, 38], [70, 105], [145, 100], [215, 108], [35, 170], [105, 165], [175, 170], [245, 165]];
    const F = [['star', GOLD], ['circle', PINK], ['tri', CYAN], ['circle', GOLD], ['tri', PINK], ['star', GOLD],
      ['circle', PINK], ['circle', GOLD], ['star', CYAN], ['tri', PINK], ['tri', CYAN]];
    return svg('0 0 280 205', P.map(([x, y], i) => sym(F[i][0], x, y, 24, F[i][1])).join(''));
  }

  // L: sechs Figuren A–F (groß/klein, Form, Farbe)
  function svgFiguren() {
    const F = [['circle', PINK, 1], ['tri', CYAN, 0], ['sq', GOLD, 1], ['sq', PINK, 0], ['tri', CYAN, 1], ['circle', GOLD, 0]];
    let s = '';
    F.forEach(([k, col, big], i) => {
      const cx = 50 + (i % 3) * 90, cy = 48 + Math.floor(i / 3) * 100;
      s += sym(k, cx, cy, big ? 34 : 16, col) + tx(cx, cy + 50, 'ABCDEF'[i], 17);
    });
    return svg('0 0 280 205', s);
  }

  // L: Rohrnetz mit Ventilen; offen = türkiser Ring, zu = pink mit Kreuz
  function svgVentile() {
    const pipe = (x1, y1, x2, y2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#aab2e6" stroke-width="7" stroke-linecap="round"/>`;
    const open = (x, y) => `<circle cx="${x}" cy="${y}" r="10" fill="${TILE}" stroke="${CYAN}" stroke-width="4"/>`;
    const shut = (x, y) => `<circle cx="${x}" cy="${y}" r="11" fill="${PINK}"/>` +
      `<path d="M ${x - 5} ${y - 5} L ${x + 5} ${y + 5} M ${x + 5} ${y - 5} L ${x - 5} ${y + 5}" stroke="${DARK}" stroke-width="3" stroke-linecap="round"/>`;
    const bucket = (x, L) => `<polygon points="${pts([[x - 22, 168], [x + 22, 168], [x + 17, 202], [x - 17, 202]])}" fill="none" stroke="${WHITE}" stroke-width="3" stroke-linejoin="round"/>` + tx(x, 194, L, 17);
    let s = '';
    s += pipe(140, 14, 140, 40) + pipe(90, 40, 240, 40) + pipe(90, 40, 90, 100) + pipe(40, 100, 140, 100) +
      pipe(40, 100, 40, 160) + pipe(140, 100, 140, 160) + pipe(240, 40, 240, 160);
    s += `<polygon points="130,2 150,2 140,14" fill="${CYAN}"/>`;
    s += open(90, 70) + shut(40, 132) + open(140, 132) + shut(240, 75) + open(240, 132);
    s += bucket(40, 'A') + bucket(140, 'B') + bucket(240, 'C');
    return svg('0 0 280 206', s);
  }

  // M: Zielquadrat 3 × 3 und vier Teile A–D (A = Ecke, B = T, C = U, D = L)
  function svgTeile() {
    const u = 16;
    const piece = (ox, oy, cells) => cells.map(([r, c]) => `<rect x="${ox + c * u}" y="${oy + r * u}" width="${u}" height="${u}" fill="${CYAN}" stroke="${DARK}" stroke-width="2"/>`).join('');
    let s = '';
    for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) s += `<rect x="${113 + c * 18}" y="${6 + r * 18}" width="18" height="18" fill="none" stroke="${GOLD}" stroke-width="2" stroke-dasharray="4 3"/>`;
    const P = [
      [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]],
      [[0, 1], [1, 0], [1, 1], [1, 2]],
      [[0, 0], [0, 1], [1, 0], [2, 0], [2, 1]],
      [[0, 0], [1, 0], [2, 0], [2, 1]],
    ];
    P.forEach((cells, i) => {
      const x = 10 + i * 68;
      s += `<rect x="${x}" y="78" width="62" height="62" rx="8" fill="${TILE}" stroke="rgba(255,255,255,.35)" stroke-width="1.5"/>`;
      const h = Math.max(...cells.map(c => c[0])) + 1, w = Math.max(...cells.map(c => c[1])) + 1;
      s += piece(x + 31 - w * u / 2, 109 - h * u / 2, cells) + tx(x + 31, 162, 'ABCD'[i], 17);
    });
    return svg('0 0 282 170', s);
  }

  // S: Inseln und Brücken; kleinster Schnitt = 2 (oben links und unten rechts)
  function svgBruecken() {
    const N = { A: [18, 100], T1: [78, 35], M1: [78, 100], L1: [78, 165], T2: [140, 35], M2: [140, 100], L2: [140, 165], T3: [202, 35], M3: [202, 100], L3: [202, 165], B: [262, 100] };
    const E = [['A', 'T1'], ['A', 'M1'], ['A', 'L1'], ['T1', 'M1'], ['M1', 'M2'], ['M1', 'L1'], ['L1', 'L2'], ['M2', 'L2'], ['T1', 'T2'], ['L2', 'L3'],
      ['T2', 'T3'], ['T3', 'B'], ['M3', 'B'], ['L3', 'B'], ['T3', 'M3'], ['M3', 'L3'], ['T2', 'M3']];
    let s = E.map(([a, b]) => `<line x1="${N[a][0]}" y1="${N[a][1]}" x2="${N[b][0]}" y2="${N[b][1]}" stroke="${WHITE}" stroke-width="5" stroke-linecap="round"/>`).join('');
    for (const [k, [x, y]] of Object.entries(N)) {
      if (k === 'A' || k === 'B') s += `<circle cx="${x}" cy="${y}" r="15" fill="${GOLD}"/>` + tx(x, y + 6, k, 17, DARK);
      else s += `<circle cx="${x}" cy="${y}" r="13" fill="#145f6e" stroke="${CYAN}" stroke-width="3"/>`;
    }
    return svg('0 0 280 200', s);
  }

  // S: Minensuche 4 × 4 – null = graues Feld, Zahl = aufgedecktes Feld
  function svgMinen() {
    const B = [[null, null, 1, null], [2, 3, null, 1], [1, null, 2, null], [null, 1, 1, null]];
    const c = 46, o = 8;
    let s = '';
    B.forEach((row, r) => row.forEach((v, k) => {
      const x = o + k * c, y = o + r * c;
      if (v === null) s += `<rect x="${x + 1}" y="${y + 1}" width="${c - 2}" height="${c - 2}" rx="5" fill="${GREY}" stroke="#8d92c4" stroke-width="2"/>`;
      else s += `<rect x="${x + 1}" y="${y + 1}" width="${c - 2}" height="${c - 2}" rx="5" fill="${TILE}" stroke="rgba(255,255,255,.3)" stroke-width="1.5"/>` + tx(x + c / 2, y + c / 2 + 8, v, 24, GOLD);
    }));
    return svg('0 0 200 200', s);
  }

  // SS: 3 × 3-Lichterfeld, nur die Mitte leuchtet
  function svgLichter() {
    const c = 54, o = 9;
    let s = '';
    for (let r = 0; r < 3; r++) for (let k = 0; k < 3; k++) {
      const on = r === 1 && k === 1, x = o + k * c, y = o + r * c;
      s += `<rect x="${x + 3}" y="${y + 3}" width="${c - 6}" height="${c - 6}" rx="8" fill="${on ? GOLD : TILE}" stroke="${on ? '#fff1b8' : 'rgba(255,255,255,.35)'}" stroke-width="2"/>`;
    }
    return svg('0 0 180 180', s);
  }

  // SS: fünf Kisten in einer Reihe
  function svgKisten() {
    let s = '';
    for (let i = 0; i < 5; i++) {
      const x = 8 + i * 54;
      s += `<rect x="${x}" y="14" width="46" height="40" rx="4" fill="#7a5230" stroke="#d6a56b" stroke-width="2.5"/>` +
        `<line x1="${x}" y1="26" x2="${x + 46}" y2="26" stroke="#d6a56b" stroke-width="2"/>` + tx(x + 23, 47, i + 1, 17);
    }
    return svg('0 0 280 66', s);
  }

  QUIZ_ADD([
    // ---------- leicht ----------
    { id: 'm2c-ohne-partner', fam: 'paar-ohne-partner', cat: 'Bilder', type: 'choice',
      q: 'Fast jede Figur gibt es im Bild genau zweimal – gleiche Form, gleiche Farbe. Nur eine hat keinen Partner. Welche?',
      svg: svgPaare(),
      opts: ['Der türkise Stern', 'Der gelbe Stern', 'Das türkise Dreieck', 'Der pinke Kreis'], a: 0, r: [1, 0, 0, 1, 0],
      ex: 'Gelber Stern, pinker Kreis, gelber Kreis, pinkes und türkises Dreieck kommen je zweimal vor. Nur der türkise Stern ist allein.' },
    { id: 'm2c-steckbrief', fam: 'figur-steckbrief', cat: 'Bilder', type: 'text',
      q: 'Gesucht ist eine Figur aus dem Bild: Sie ist nicht gelb, sie hat Ecken, und sie ist groß. Welcher Buchstabe gehört zu ihr?',
      svg: svgFiguren(),
      a: 'E', letters: true, r: [2, 0, 0, 1, 0],
      ex: 'Nicht gelb sind A, B, D und E. Ecken haben davon nur B, D und E – und groß ist unter ihnen nur das türkise Dreieck E.' },
    { id: 'm2c-ventile', fam: 'becher-roehren', cat: 'Bilder', type: 'choice',
      q: 'Oben läuft Wasser in die Rohre. Durch ein türkises Ventil fließt es hindurch, ein pinkes mit Kreuz ist zu. In welche Eimer läuft Wasser?',
      svg: svgVentile(),
      opts: ['Nur in B', 'Nur in C', 'In B und C', 'In A und B'], a: 0, r: [1, 0, 1, 1, 0],
      ex: 'Das rechte Rohr ist schon oben gesperrt, das offene Ventil darunter hilft C nicht. Links fließt das Wasser weiter, an der Abzweigung ist der Weg nach A zu – es kommt nur in B an.' },

    // ---------- mittel ----------
    { id: 'm2c-zwei-teile', fam: 'puzzleteil', cat: 'Bilder', type: 'choice',
      q: 'Welche zwei Teile ergeben zusammen genau das Quadrat oben? Die Teile dürfen gedreht werden.',
      svg: svgTeile(),
      opts: ['B und C', 'A und B', 'A und D', 'C und D'], a: 0, r: [2, 1, 1, 0, 0],
      ex: 'Das U-förmige Teil C lässt in der Mitte eine Lücke, in die das T-förmige Teil B nach einer Vierteldrehung genau passt. Die anderen Paare gehen nicht auf: Neben A bleibt immer ein 2×2-Block frei, in den weder B noch D passt, und neben C bleibt eine T-Form frei, in die D nicht passt.' },
    { id: 'm2c-tabelle', fam: 'tabelle-rueckrechnen', cat: 'Logik', type: 'choice',
      q: 'Drei Mannschaften spielen jede einmal gegen jede. Ein Sieg bringt 3 Punkte, ein Unentschieden beiden je 1, eine Niederlage nichts. Am Ende hat A 4 Punkte, B 2 und C 1. Wie endete das Spiel B gegen C?',
      opts: ['Unentschieden', 'B hat gewonnen', 'C hat gewonnen', 'Kann man nicht wissen'], a: 0, r: [1, 1, 2, 0, 0],
      ex: 'Mit zwei Spielen kommt B nur durch zwei Unentschieden auf genau 2 Punkte – ein Sieg allein brächte schon 3. Also endete auch B gegen C unentschieden.' },

    // ---------- schwer ----------
    { id: 'm2c-bruecken', fam: 'bruecken-sperren', cat: 'Bilder', type: 'number',
      q: 'Die Linien sind Brücken zwischen Inseln. Wie viele Brücken musst du mindestens sperren, damit man von A aus nicht mehr nach B kommt?',
      svg: svgBruecken(),
      a: 2, r: [2, 1, 2, 1, 0],
      ex: 'Sperre in der oberen Reihe die Brücke zwischen linker und mittlerer Insel und in der unteren Reihe die zwischen mittlerer und rechter Insel (A und B zählen nicht mit): Von der Insel in der Bildmitte führt keine Brücke nach rechts, also ist A abgeschnitten. Eine Sperre reicht nicht, weil oben und unten zwei getrennte Wege von A nach B führen.' },
    { id: 'm2c-minen', fam: 'minensuche', cat: 'Bilder', type: 'number',
      q: 'Unter einigen grauen Feldern liegt eine Mine. Jede Zahl gibt an, wie viele Minen in den bis zu acht Nachbarfeldern liegen – schräg zählt mit. Wie viele Minen liegen unter den grauen Feldern insgesamt?',
      svg: svgMinen(),
      a: 3, r: [3, 1, 1, 2, 0],
      ex: 'Die 3 grenzt an dieselben grauen Felder wie die 2 links von ihr und zusätzlich an das Feld rechts daneben – dort liegt also eine Mine. Damit ist die 1 oben schon voll, die grauen Felder links und rechts neben ihr sind frei. Der 2 links bleiben nur die Ecke links oben und das Feld unter der 3 – beides Minen. Alle übrigen Zahlen sind damit schon erfüllt, also sind die anderen grauen Felder frei: 3 Minen.' },

    // ---------- sehr schwer ----------
    { id: 'm2c-lichter-aus', fam: 'lichter-aus', cat: 'Bilder', type: 'number',
      q: 'Tippst du auf ein Feld, wechseln dieses Feld und seine direkten Nachbarn (oben, unten, links, rechts) zwischen an und aus. Nur die Mitte leuchtet. Wie oft musst du mindestens tippen, bis alle neun Felder aus sind?',
      svg: svgLichter(),
      a: 5, r: [3, 2, 2, 2, 0],
      ex: 'Tippe auf die Mitte und die vier Randmitten: Die Mitte wechselt fünfmal und ist dann aus, jedes andere Feld wechselt genau zweimal und bleibt aus. Die Reihenfolge ist egal, und zweimal auf dasselbe Feld tippen hebt sich auf. Weniger geht nicht: Jede Randmitte muss gerade oft wechseln, also tippst du gerade viele Randmitten, und die Mitte musst du selbst tippen. Damit ist auch jede Ecke festgelegt, und mit null oder zwei getippten Randmitten bleibt eine Randmitte an – es braucht alle vier.' },
    { id: 'm2c-katze', fam: 'katze-in-kisten', cat: 'Logik', type: 'number',
      q: 'Eine Katze schläft in einer von fünf Kisten, die in einer Reihe stehen. Jede Nacht zieht sie in eine direkt benachbarte Kiste um. Jeden Morgen darfst du in genau eine Kiste schauen. Wie viele Morgen brauchst du mindestens, um sie sicher zu finden?',
      svg: svgKisten(),
      a: 6, r: [3, 3, 1, 2, 0],
      ex: 'Die Katze wechselt jede Nacht zwischen gerader und ungerader Kistennummer. Schau in 2, 3, 4 und noch einmal in 2, 3, 4: Startete sie auf einer geraden Nummer, steht sie in der ersten Runde bei jedem Blick auf derselben Sorte Nummer wie deine Kiste und kann nicht an dir vorbei; sonst gilt das für die zweite Runde. Weniger geht nicht: Jeder Blick erwischt nur eine der beiden Startsorten (gerade oder ungerade Startnummer), und jede braucht drei Blicke, denn nach dem ersten Fehlblick für eine Startsorte kann die Katze beim nächsten Blick für diese noch in mindestens zwei Kisten sein.' },
    { id: 'm2c-muetzen', fam: 'stirnklecks-schweigen', cat: 'Logik', type: 'text',
      q: 'Drei kluge, ehrliche Kinder stehen hintereinander; jedes sieht nur die Mützen vor sich. Alle wissen: Die drei Mützen stammen aus 3 roten und 2 blauen. Das hinterste sagt: „Ich kenne meine Farbe nicht.“ Dann das mittlere: „Ich auch nicht.“ Welche Farbe hat die vorderste Mütze?',
      a: 'ROT', accept: ['ROTE'], r: [3, 3, 1, 2, 0],
      ex: 'Wären beide vorderen Mützen blau, wüsste das hinterste Kind, dass seine rot ist – also ist höchstens eine blau. Wäre die vorderste blau, wüsste das mittlere Kind daher sofort, dass seine rot ist; weil es das nicht weiß, ist die vorderste rot.' },
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

// ---- sprache2a.js ----
(function () {
  const { seq, eq, svg } = (typeof window !== 'undefined' ? window : globalThis).QSVG;
  const f1 = v => Math.round(v * 10) / 10;
  const tx = (x, y, t, size = 22) => `<text class="tx" x="${f1(x)}" y="${f1(y)}" text-anchor="middle" font-size="${size}" font-weight="700">${t}</text>`;

  // Buchstabengitter: Zeilen als Strings, Zellen 40 × 40
  function letterGrid(rows) {
    const c = 40, o = 10;
    let s = '';
    rows.forEach((row, r) => [...row].forEach((ch, k) => {
      s += `<rect class="cell" x="${o + k * c}" y="${o + r * c}" width="${c}" height="${c}"/>`;
      s += tx(o + k * c + c / 2, o + r * c + c / 2 + 8, ch, 24);
    }));
    const w = 2 * o + rows[0].length * c, h = 2 * o + rows.length * c;
    return svg(`0 0 ${w} ${h}`, s);
  }

  // Buchstabenkreis: Wort gegen den Uhrzeigersinn, Start bei startDeg (im Uhrzeigersinn ab oben gemessen)
  function letterCircle(word, startDeg) {
    const cx = 110, cy = 110, r = 78, n = word.length;
    let s = `<circle class="ln" cx="${cx}" cy="${cy}" r="100"/><circle class="ln" cx="${cx}" cy="${cy}" r="56"/>`;
    [...word].forEach((ch, k) => {
      const a = (startDeg - k * 360 / n) * Math.PI / 180;
      s += tx(cx + r * Math.sin(a), cy - r * Math.cos(a) + 8, ch, 24);
    });
    return svg('0 0 220 220', s);
  }

  QUIZ_ADD([
    // ===== leicht =====
    { id: 's2a-haut', fam: 's2a-buchstabe-einfuegen', cat: 'Sprache', type: 'text',
      q: 'Füge in <b>HUT</b> einen Buchstaben ein – es entsteht ein Körperteil. Welcher?',
      a: 'HAUT', r: [1, 1, 0, 0, 0],
      ex: 'Mit einem A zwischen H und U wird aus dem HUT die HAUT.' },
    { id: 's2a-traube-r', fam: 's2a-gleicher-buchstabe-weg', cat: 'Sprache', type: 'text',
      q: 'Streiche aus jedem Wort denselben Buchstaben – jedes Mal entsteht ein neues Wort. Welcher Buchstabe ist es?' + seq(['TRAUBE', 'GRAS', 'BRAND']),
      a: 'R', letters: true, r: [1, 1, 0, 0, 0],
      ex: 'Ohne R: TRAUBE → TAUBE, GRAS → GAS, BRAND → BAND.' },
    { id: 's2a-h-davor', fam: 'vorbuchstabe', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe macht aus allen vier ein Wort, wenn du ihn vorn anfügst?' + seq(['…ASE', '…OSE', '…ERZ', '…UND']),
      a: 'H', letters: true, r: [1, 1, 0, 0, 0],
      ex: 'Mit H davor entstehen HASE, HOSE, HERZ und HUND. Kein anderer Buchstabe passt vor alle vier.' },
    { id: 's2a-rede', fam: 's2a-teilwort-legen', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort kannst du nur mit Buchstaben aus <b>ERDBEERE</b> legen – jeden Buchstaben höchstens so oft, wie er dort vorkommt?',
      opts: ['REDE', 'BREI', 'BRETT', 'REDNER'], a: 0, r: [1, 1, 0, 1, 0],
      ex: 'REDE braucht R, D und zwei E – alles steckt in ERDBEERE. BREI bräuchte ein I, BRETT ein T, REDNER ein N.' },
    { id: 's2a-maus-esel', fam: 's2a-reissverschluss', cat: 'Sprache', type: 'text',
      q: 'Zwei Tiere wurden ineinandergeschoben – immer abwechselnd ein Buchstabe vom einen, einer vom anderen. Eines ist die MAUS. Welches ist das andere?' + seq(['M', 'E', 'A', 'S', 'U', 'E', 'S', 'L']),
      a: 'ESEL', r: [1, 1, 0, 1, 0],
      ex: 'Der 1., 3., 5. und 7. Buchstabe ergeben M-A-U-S, der 2., 4., 6. und 8. ergeben E-S-E-L.' },

    // ===== mittel =====
    { id: 's2a-alpaka-vokal', fam: 's2a-einziger-vokal', cat: 'Sprache', type: 'choice',
      q: 'In welchem Tiernamen kommt außer dem A kein anderer Vokal vor?',
      opts: ['KAKADU', 'ALPAKA', 'PAVIAN', 'ANAKONDA'], a: 1, r: [1, 1, 1, 1, 0],
      ex: 'In ALPAKA steht als Vokal nur das A (dreimal). KAKADU endet auf U, PAVIAN hat ein I und ANAKONDA ein O.' },
    { id: 's2a-punkte-fruehjahr', fam: 's2a-punkte-zaehlen', cat: 'Sprache', type: 'number',
      q: 'Du schreibst das Wort <b>FRÜHJAHRSMÜDIGKEIT</b> in Kleinbuchstaben ab. Wie viele Punkte setzt du dabei?',
      a: 7, r: [1, 1, 1, 1, 0],
      ex: 'In „frühjahrsmüdigkeit“ bekommen die beiden ü je zwei Punkte, das j und die beiden i je einen: 2 + 2 + 1 + 1 + 1 = 7.' },
    { id: 's2a-kollegin', fam: 's2a-rueckwaerts-im-wort', cat: 'Sprache', type: 'text',
      q: 'Welches Tier steckt – rückwärts gelesen – im Wort <b>KOLLEGIN</b>?',
      a: 'IGEL', r: [1, 2, 0, 1, 0],
      ex: 'Rückwärts ergibt KOLLEGIN die Buchstaben N-<b>I-G-E-L</b>-L-O-K – darin steckt der IGEL.' },
    { id: 's2a-blumentopf', fam: 's2a-kein-buchstabe-doppelt', cat: 'Sprache', type: 'choice',
      q: 'In welchem Wort kommt kein einziger Buchstabe doppelt vor?',
      opts: ['BLUMENTOPF', 'KUCHENGABEL', 'WINTERSCHUH', 'DACHFENSTER'], a: 0, r: [1, 1, 1, 2, 0],
      ex: 'BLUMENTOPF hat zehn verschiedene Buchstaben. KUCHENGABEL und DACHFENSTER haben zwei E, WINTERSCHUH hat zwei H.' },
    { id: 's2a-otter-kette', fam: 'wortkette-endbuchstabe', cat: 'Sprache', type: 'text',
      q: 'Welches Wort fehlt in dieser Kette?' + seq(['BOOT', '?', 'ERBSE', 'SEGEL', 'ELCH']),
      a: 'OTTER', r: [2, 2, 0, 1, 0],
      ex: 'Jedes Wort beginnt mit den letzten zwei Buchstaben des vorigen: BO<b>OT</b> → <b>OT</b>T<b>ER</b> → <b>ER</b>B<b>SE</b> → <b>SE</b>G<b>EL</b> → <b>EL</b>CH.' },
    { id: 's2a-schalter', fam: 's2a-ueberlappung', cat: 'Sprache', type: 'text',
      q: 'Ein Halstuch für den Winter und das, was an jedem Geburtstag um eins steigt, werden verschmolzen: Das Ende des ersten Wortes ist zugleich der Anfang des zweiten. Heraus kommt etwas, womit man das Licht anknipst. Was?',
      a: 'SCHALTER', accept: ['LICHTSCHALTER'], r: [2, 2, 0, 1, 0],
      ex: 'SCH<b>AL</b> und <b>AL</b>TER teilen sich das AL – verschmolzen ergibt das SCHALTER.' },
    { id: 's2a-ananas-ana', fam: 'versteckt-zaehlen', cat: 'Sprache', type: 'number',
      q: 'An wie vielen Stellen im Wort <b>ANANAS</b> beginnt die Buchstabenfolge ANA?',
      a: 2, r: [1, 1, 1, 1, 0],
      ex: 'Beim 1. Buchstaben (<b>ANA</b>NAS) und beim 3. (AN<b>ANA</b>S) – die beiden ANA teilen sich das mittlere A.' },

    // ===== schwer =====
    { id: 's2a-fuchs-fehler', fam: 's2a-falscher-buchstabe', cat: 'Sprache', type: 'text',
      q: 'In jedem Tiernamen wurde genau ein Buchstabe durch einen falschen ersetzt. Die ursprünglichen Buchstaben an den fünf Fehlerstellen ergeben der Reihe nach ein weiteres Tier. Welches?' + seq(['AFKE', 'HOND', 'ELSH', 'HUKN', 'AMTEL']),
      a: 'FUCHS', r: [2, 1, 1, 2, 0],
      ex: 'Gemeint sind AFFE, HUND, ELCH, HUHN und AMSEL. Richtig eingesetzt an den fünf Fehlerstellen ergeben F, U, C, H und S der Reihe nach FUCHS.' },
    { id: 's2a-zebra-raetsel', fam: 's2a-buchstabenraetsel', cat: 'Sprache', type: 'text',
      q: 'Jede Zeile liefert einen Buchstaben: Er steckt im ersten Wort, aber nicht im zweiten. Welches Tier ergeben die fünf Buchstaben?' + eq(['ZIEGE – GEIGE', 'HEFT – HAFT', 'BRAUT – TRAUM', 'ORT – TOT', 'LAGER – REGEL']),
      a: 'ZEBRA', r: [2, 1, 1, 2, 0],
      ex: 'Von ZIEGE fehlt in GEIGE nur das Z, von HEFT in HAFT nur das E, von BRAUT in TRAUM nur das B, von ORT in TOT nur das R und von LAGER in REGEL nur das A: Z-E-B-R-A.' },
    { id: 's2a-kuckuck-muster', fam: 's2a-buchstabenmuster', cat: 'Sprache', type: 'text',
      q: 'Gleiche Zahlen stehen für gleiche Buchstaben, verschiedene Zahlen für verschiedene Buchstaben. Welcher Vogel hat dieses Muster?' + seq([1, 2, 3, 1, 2, 3, 1]),
      a: 'KUCKUCK', r: [2, 2, 0, 2, 0],
      ex: 'K-U-C-K-U-C-K: K = 1, U = 2, C = 3. Zweimal KUC und zum Schluss noch ein K.' },
    { id: 's2a-salamander-kreis', fam: 's2a-buchstabenkreis', cat: 'Sprache', type: 'text',
      q: 'In diesem Kreis steckt ein Tier, das aus allen zehn Buchstaben besteht. Anfang und Leserichtung musst du selbst finden. Welches Tier ist es?',
      svg: letterCircle('SALAMANDER', 108),
      a: 'SALAMANDER', r: [2, 1, 1, 2, 0],
      ex: 'Gegen den Uhrzeigersinn ab dem S gelesen: S-A-L-A-M-A-N-D-E-R. Das LAMA darin ist nur ein Teil davon.' },
    { id: 's2a-adlerchering', fam: 's2a-ueberlappung', cat: 'Sprache', type: 'text',
      q: 'In diesem Kunstwort wurden drei Tiere so zusammengeschoben, dass jedes mit dem Ende des vorigen beginnt: <b>ADLERCHERING</b>. Welches Tier steckt in der Mitte?',
      a: 'LERCHE', r: [2, 2, 1, 1, 0],
      ex: 'ADLER, LERCHE und HERING: ADLER und LERCHE teilen sich das LER, LERCHE und HERING das HE. Ohne die LERCHE bliebe das C zwischen ADLER und HERING übrig.' },
    { id: 's2a-pangramm-p', fam: 's2a-fast-pangramm', cat: 'Sprache', type: 'text',
      q: 'In diesem Satz kommt jeder Buchstabe des Alphabets vor – bis auf einen. Welcher fehlt? „Jakob zeigt Max auf der Fahrt quer durch Bayern viele schöne Wildgänse.“',
      a: 'P', letters: true, r: [3, 1, 1, 2, 0],
      ex: 'Sogar J, Q, X und Y kommen vor – nur ein P sucht man vergeblich.' },
    { id: 's2a-eis-gitter', fam: 's2a-buchstabengitter', cat: 'Sprache', type: 'number',
      q: 'Wie oft steht das Wort EIS in diesem Gitter? Es kann waagerecht, senkrecht oder schräg stehen – auch rückwärts.',
      svg: letterGrid(['TRISE', 'EASIE', 'SSSEA', 'IIKEK', 'ESEAI']),
      a: 6, r: [2, 1, 2, 2, 0],
      ex: 'Sechsmal: zweimal senkrecht von unten nach oben (4. Spalte ab dem E in Zeile 3, 1. Spalte ab dem E unten links), einmal waagerecht von rechts nach links (2. Zeile) und dreimal schräg – vom E oben rechts nach links unten, vom E unten links nach rechts oben und vom E unten in der Mitte nach links oben. Waagerecht von links nach rechts oder senkrecht von oben nach unten steht EIS kein einziges Mal.' },
    { id: 's2a-kaffeekanne', fam: 's2a-einzelbuchstaben', cat: 'Sprache', type: 'number',
      q: 'Wie viele Buchstaben kommen im Wort <b>KAFFEEKANNE</b> genau einmal vor?',
      a: 0, r: [2, 1, 2, 2, 0],
      ex: 'Keiner: K, A, F und N stehen je zweimal darin, das E sogar dreimal.' },
    { id: 's2a-pappe-folgen', fam: 's2a-umstellungen-zaehlen', cat: 'Sprache', type: 'number',
      q: 'Wie viele verschiedene Buchstabenfolgen kannst du aus allen fünf Buchstaben von <b>PAPPE</b> legen – sinnvolle und sinnlose zusammengezählt, PAPPE selbst eingeschlossen?',
      a: 20, r: [2, 1, 2, 2, 1],
      ex: 'Entscheidend ist nur, wo A und E stehen: 5 Plätze für das A, danach 4 für das E – 5 × 4 = 20. Die drei P lassen sich untereinander nicht unterscheiden.' },

    // ===== sehr schwer =====
    { id: 's2a-hund-lachs', fam: 's2a-reissverschluss', cat: 'Sprache', type: 'text',
      q: 'In dieser Buchstabenreihe stecken zwei Tiere ineinandergeschoben – jeder Buchstabe gehört zu genau einem von beiden, und innerhalb jedes Tiers bleibt die Reihenfolge erhalten. Welches ist das längere Tier?' + seq(['H', 'U', 'N', 'L', 'D', 'A', 'C', 'H', 'S']),
      a: 'LACHS', r: [2, 2, 2, 2, 0],
      ex: 'HUND und LACHS wurden ineinandergeschoben: H-U-N-(L)-D-(A-C-H-S) – die Buchstaben in Klammern ergeben LACHS, die übrigen HUND. Der DACHS ist eine Falle: Dann blieben H, U, N, L übrig, und das ist kein Tier.' },
    { id: 's2a-lampe-ampel', fam: 's2a-tauschzuege', cat: 'Sprache', type: 'number',
      q: 'Bei einem Tauschzug vertauschst du zwei beliebige Buchstaben. Wie viele Tauschzüge brauchst du mindestens, um aus <b>LAMPE</b> das Wort <b>AMPEL</b> zu machen?',
      a: 4, r: [2, 2, 2, 2, 0],
      ex: 'Jeder Buchstabe rückt einen Platz nach vorn und das L ganz nach hinten – alle fünf bilden einen einzigen Ring, und so ein Fünferring lässt sich nur mit 4 Tauschzügen auflösen. Zum Beispiel das L nacheinander mit A, M, P und E tauschen: ALMPE, AMLPE, AMPLE, AMPEL.' },
    { id: 's2a-doppel-elster', fam: 's2a-doppelbuchstaben-wort', cat: 'Sprache', type: 'text',
      q: 'Diese sechs Wörter verraten nach einer einfachen Regel ein Tier. Welches?' + seq(['MEER', 'BALL', 'TASSE', 'MITTE', 'BEET', 'HERR']),
      a: 'ELSTER', r: [2, 3, 1, 2, 0],
      ex: 'Jedes Wort hat einen Doppelbuchstaben: M<b>EE</b>R, BA<b>LL</b>, TA<b>SS</b>E, MI<b>TT</b>E, B<b>EE</b>T, HE<b>RR</b>. E, L, S, T, E, R ergibt ELSTER.' },
    { id: 's2a-treppe-pinguin', fam: 's2a-treppenwort', cat: 'Sprache', type: 'text',
      q: 'In dieser Wortreihe versteckt sich nach einer einfachen Regel ein Tier. Welches?' + seq(['PAKET', 'KISTE', 'SONNE', 'BERG', 'RADAU', 'SAFARI', 'KAPITÄN']),
      a: 'PINGUIN', r: [3, 3, 1, 2, 0],
      ex: 'Wie auf einer Treppe: vom 1. Wort der 1. Buchstabe, vom 2. Wort der 2., … vom 7. Wort der 7. – P-I-N-G-U-I-N.' },
  ]);
})();

// ---- sprache2b.js ----
(function () {
  const { seq, eq, svg } = (typeof window !== 'undefined' ? window : globalThis).QSVG;
  const GOLD = '#ffc940';

  // Linke Hälften senkrecht-symmetrischer Großbuchstaben, je mit gestrichelter Spiegelachse.
  function halfLetters(word) {
    const W = 40, top = 25, bot = 85, h = 14;
    let s = '';
    [...word].forEach((c, i) => {
      const cx = 14 + W * i + W / 2, L = cx - h;
      s += `<line x1="${cx}" y1="12" x2="${cx}" y2="98" stroke="${GOLD}" stroke-width="2" stroke-dasharray="5 4"/>`;
      let d = '';
      if (c === 'A') d = `M${L} ${bot} L${cx} ${top} M${(L + h * (bot - 65) / (bot - top)).toFixed(1)} 65 L${cx} 65`;
      if (c === 'U') d = `M${L} ${top} V71 A14 14 0 0 0 ${cx} ${bot}`;
      if (c === 'T') d = `M${L} ${top} H${cx} V${bot}`;
      if (c === 'O') d = `M${cx} ${top} A${h} 30 0 0 0 ${cx} ${bot}`;
      if (c === 'M') d = `M${L} ${bot} V${top} L${cx} 62`;
      s += `<path class="ln" d="${d}"/>`;
    });
    return svg('0 0 300 110', s);
  }

  QUIZ_ADD([
    // ===== leicht =====
    { id: 's2b-reim-hand', fam: 'reim-ausreisser', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort reimt sich <b>nicht</b> auf „Hand“?',
      opts: ['Hund', 'Sand', 'Wand', 'Land'], a: 0, r: [1, 0, 0, 0, 0],
      ex: 'Sand, Wand und Land klingen hinten wie Hand. Hund hat ein U statt des A und reimt sich nicht.' },
    { id: 's2b-schwan', fam: 'reim-raetsel', cat: 'Sprache', type: 'text',
      q: 'Welches Tier mit langem Hals reimt sich auf „Zahn“?',
      a: 'SCHWAN', r: [1, 0, 0, 0, 0],
      ex: 'Schwan reimt sich auf Zahn und hat einen langen Hals. Der Hahn reimt sich zwar auch, hat aber keinen langen Hals.' },
    { id: 's2b-lkw', fam: 'abkuerzung-aufloesen', cat: 'Sprache', type: 'choice',
      q: 'Wofür steht die Abkürzung „Lkw“?',
      opts: ['Lastkraftwagen', 'Leichtkraftwagen', 'Langkraftwagen', 'Lastkarrenwagen'], a: 0, r: [1, 0, 0, 0, 0],
      ex: 'Lkw heißt Lastkraftwagen – der Laster. Das Gegenstück ist der Pkw, der Personenkraftwagen.' },
    { id: 's2b-abc-mitte', fam: 'abc-mitte', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe steht im Alphabet genau in der Mitte zwischen A und I?',
      a: 'E', letters: true, r: [1, 0, 0, 1, 0],
      ex: 'A ist der 1., I der 9. Buchstabe. Genau in der Mitte liegt der 5. – das E, mit B, C, D davor und F, G, H danach.' },
    { id: 's2b-kopfstand-m', fam: 'kopfstand-buchstabe', cat: 'Sprache', type: 'choice',
      q: 'Welcher Großbuchstabe wird zu einem <b>anderen</b> Buchstaben, wenn man ihn auf den Kopf stellt?',
      opts: ['M', 'O', 'H', 'X'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Auf den Kopf gestellt wird aus dem M ein W. O, H und X sehen danach genauso aus wie vorher.' },
    { id: 's2b-x-kreuz', fam: 'buchstabe-beschreiben', cat: 'Sprache', type: 'choice',
      q: 'Welcher Großbuchstabe besteht aus genau zwei geraden Strichen, die sich in der Mitte kreuzen?',
      opts: ['X', 'T', 'V', 'L'], a: 0, r: [1, 0, 0, 0, 0],
      ex: 'Beim X kreuzen sich zwei schräge Striche in der Mitte. Bei T, V und L stoßen die beiden Striche nur aneinander.' },

    // ===== mittel =====
    { id: 's2b-salami', fam: 'erste-silben', cat: 'Sprache', type: 'text',
      q: 'Nimm von jedem Wort die erste Silbe und hänge sie aneinander. Welche Wurst entsteht?' + seq(['SALAT', 'LAMA', 'MINUTE']),
      a: 'SALAMI', r: [2, 1, 0, 1, 0],
      ex: 'SA-lat, LA-ma, MI-nu-te: SA + LA + MI ergibt SALAMI.' },
    { id: 's2b-fasan', fam: 'silbenkette', cat: 'Sprache', type: 'text',
      q: 'Jedes Wort beginnt mit der letzten Silbe des vorigen Wortes. Welcher Vogel fehlt?' + seq(['SOFA', '?', 'SANDALE']),
      a: 'FASAN', r: [2, 1, 0, 1, 0],
      ex: 'So-FA → FA-SAN → SAN-da-le. Der Fasan beginnt mit „Fa“ und endet mit „san“.' },
    { id: 's2b-kuh-h', fam: 'stummes-h', cat: 'Sprache', type: 'choice',
      q: 'In welchem Wort spricht man das H <b>nicht</b> aus?',
      opts: ['Kuh', 'Uhu', 'Ahorn', 'Hose'], a: 0, r: [1, 1, 1, 0, 0],
      ex: 'In „Kuh“ zeigt das H nur an, dass das U lang ist – hören kann man es nicht. In U-hu, A-horn und Hose spricht man das H.' },
    { id: 's2b-abc-zwischen', fam: 'abc-zwischen', cat: 'Sprache', type: 'number',
      q: 'Wie viele Buchstaben stehen im Alphabet <b>zwischen</b> K und P?',
      a: 4, r: [1, 1, 2, 1, 0],
      ex: 'Zwischen K und P stehen L, M, N und O – also 4. P steht zwar 5 Stellen nach K, zählt aber selbst nicht mit.' },
    { id: 's2b-chor', fam: 'ch-aussprache', cat: 'Sprache', type: 'choice',
      q: 'In welchem Wort spricht man das „ch“ wie ein K?',
      opts: ['Chor', 'Chef', 'Dach', 'Licht'], a: 0, r: [1, 1, 1, 0, 0],
      ex: 'Chor spricht man „Kor“. Bei Chef klingt das ch wie „sch“, bei Dach und Licht wie ein gewöhnliches ch.' },
    { id: 's2b-mai', fam: 'abc-haelfte', cat: 'Sprache', type: 'text',
      q: 'Welcher Monat wird nur mit Buchstaben aus der ersten Hälfte des Alphabets (A bis M) geschrieben?',
      a: 'MAI', r: [2, 1, 1, 2, 0],
      ex: 'M, A und I liegen alle zwischen A und M. Jeder andere Monatsname enthält einen Buchstaben ab N – etwa JUNI das U und das N.' },
    { id: 's2b-reim-rechnen', fam: 'reim-rechnen', cat: 'Sprache', type: 'number',
      q: 'Ersetze jedes Wort durch die Zahl, auf die es sich reimt. Was kommt heraus?' + eq(['STIER + MACHT − SCHIEBEN = ?']),
      a: 5, r: [2, 1, 0, 2, 0],
      ex: 'Stier reimt sich auf vier, Macht auf acht und schieben auf sieben: 4 + 8 − 7 = 5.' },

    // ===== schwer =====
    { id: 's2b-schach', fam: 'laute-zaehlen', cat: 'Sprache', type: 'number',
      q: 'Das Wort <b>SCHACH</b> hat sechs Buchstaben. Wie viele Laute hört man, wenn man es ausspricht?',
      a: 3, r: [1, 2, 2, 1, 1],
      ex: '„Sch“ ist ein einziger Laut, dann kommt das A, und „ch“ ist wieder nur ein Laut: Sch – a – ch, also 3 Laute.' },
    { id: 's2b-abc-kreis', fam: 'abc-kreis', cat: 'Sprache', type: 'text',
      q: 'Die 26 Buchstaben A bis Z stehen in gleichen Abständen auf einem Kreis. Welcher Buchstabe steht dem E genau gegenüber?',
      a: 'R', letters: true, r: [2, 1, 2, 1, 0],
      ex: 'Gegenüber heißt: einen halben Kreis, also 13 Stellen weiter. E ist der 5. Buchstabe, 5 + 13 = 18 – das ist das R.' },
    { id: 's2b-sos-kopfstand', fam: 'drehsymmetrie', cat: 'Sprache', type: 'choice',
      q: 'Welche dieser Buchstabenfolgen sieht in Großbuchstaben genauso aus, wenn man sie auf den Kopf stellt?',
      opts: ['SOS', 'OTTO', 'UHU', 'NUN'], a: 0, r: [2, 2, 2, 1, 0],
      ex: 'S und O sehen auf dem Kopf gleich aus, und SOS ist rückwärts wieder SOS. Bei OTTO, UHU und NUN stehen danach T oder U verkehrt herum.' },
    { id: 's2b-wochentag-kuerzel', fam: 'wochentag-kuerzel', cat: 'Sprache', type: 'text',
      q: 'Die Wochentage kürzt man so ab: Mo, Di, Mi, Do, Fr, Sa, So. Welcher Buchstabe kommt in diesen sieben Kürzeln am häufigsten vor?',
      a: 'O', letters: true, r: [2, 2, 2, 2, 0],
      ex: 'Das O steckt in Mo, Do und So – dreimal. M, D, S und I kommen nur je zweimal vor, F, R und A einmal.' },
    { id: 's2b-doppelt-symmetrisch', fam: 'doppelt-symmetrisch', cat: 'Sprache', type: 'number',
      q: 'Wie viele Großbuchstaben von A bis Z sind in einfacher Blockschrift sowohl an einer senkrechten als auch an einer waagerechten Linie spiegelsymmetrisch?',
      a: 4, r: [2, 2, 1, 2, 0],
      ex: 'Nur H, I, O und X bleiben gleich, egal ob man sie links-rechts oder oben-unten spiegelt. A, M oder T sind nur an einer senkrechten Linie symmetrisch, B, C oder E nur an einer waagerechten.' },
    { id: 's2b-automat', fam: 'halbe-buchstaben', cat: 'Sprache', type: 'text',
      q: 'Jeder Buchstabe ist an seiner gestrichelten Linie spiegelsymmetrisch – du siehst nur seine linke Hälfte. Welches Wort steht da?',
      svg: halfLetters('AUTOMAT'),
      a: 'AUTOMAT', r: [2, 2, 1, 1, 0],
      ex: 'Ergänzt man jede Hälfte durch ihr Spiegelbild, entstehen A, U, T, O, M, A, T – das Wort AUTOMAT.' },
    { id: 's2b-stadt-reime', fam: 'reim-vokallaenge', cat: 'Sprache', type: 'number',
      q: 'Wie viele dieser Wörter reimen sich auf „Stadt“?' + seq(['Staat', 'Blatt', 'Rat', 'matt', 'Draht', 'glatt', 'Saat', 'satt']),
      a: 4, r: [2, 2, 2, 2, 0],
      ex: 'Stadt spricht man mit kurzem A, wie „statt“. Darauf reimen sich Blatt, matt, glatt und satt; Staat, Rat, Draht und Saat haben ein langes A.' },

    // ===== sehr schwer =====
    { id: 's2b-striche-zaehlen', fam: 'striche-zaehlen', cat: 'Sprache', type: 'number',
      q: 'Welche Zahl gehört an die Stelle des Fragezeichens?' + eq(['TAL = 7', 'ELF = 9', 'NETZ = ?']),
      a: 12, r: [2, 4, 1, 2, 0],
      ex: 'Gezählt werden die geraden Striche der Großbuchstaben: T 2 + A 3 + L 2 = 7, E 4 + L 2 + F 3 = 9, also N 3 + E 4 + T 2 + Z 3 = 12.' },
    { id: 's2b-zahlwort-silben', fam: 'zahlwort-silben', cat: 'Sprache', type: 'number',
      q: 'Wie viele Zahlen von 1 bis 99 haben ein Zahlwort mit genau drei Silben?',
      a: 0, r: [2, 2, 3, 2, 0],
      ex: 'Keine: Bis zwölf hat jedes Zahlwort eine Silbe (nur sie-ben zwei), 13 bis 19 und die Zehner haben zwei, Zahlen wie ein-und-zwan-zig vier und solche mit sieben fünf.' },
    { id: 's2b-gerade-zahlwoerter', fam: 'straight-letters', cat: 'Sprache', type: 'number',
      q: 'Welches ist die größte Zahl von 1 bis 12, deren Zahlwort in Großbuchstaben nur aus geraden Strichen besteht?',
      a: 11, r: [1, 1, 2, 1, 0],
      ex: 'ZWÖLF scheitert am runden Ö. ELF besteht nur aus E, L und F – lauter gerade Striche. Also 11.' },
    { id: 's2b-alphabet-silben', fam: 'alphabet-silben', cat: 'Sprache', type: 'number',
      q: 'Du sagst das Alphabet von A bis Z laut auf. Wie viele Silben sprichst du dabei?',
      a: 28, r: [2, 2, 3, 2, 0],
      ex: 'Jeder Buchstabenname hat eine Silbe – nur das Y heißt Yp-si-lon und hat drei. Also 25 + 3 = 28.' },
  ]);
})();

// ---- sprache2c.js ----
(function () {
  const { seq, eq } = (typeof window !== 'undefined' ? window : globalThis).QSVG;
  QUIZ_ADD([
    // ===== leicht =====
    { id: 's2c-schnell-rasch', fam: 's2c-kein-gegensatzpaar', cat: 'Sprache', type: 'choice',
      q: 'Welches Wortpaar besteht <b>nicht</b> aus zwei Gegenteilen?',
      opts: ['schnell – rasch', 'hell – dunkel', 'laut – leise', 'nass – trocken'], a: 0, r: [1, 1, 0, 0, 0],
      ex: '„Schnell“ und „rasch“ bedeuten dasselbe. Die anderen drei Paare sind Gegenteile.' },
    { id: 's2c-adjektiv', fam: 's2c-wortart-finden', cat: 'Sprache', type: 'choice',
      q: 'Welches dieser Wörter ist ein Adjektiv (Eigenschaftswort)?',
      opts: ['grün', 'Gras', 'wachsen', 'unter'], a: 0, r: [1, 0, 0, 0, 1],
      ex: '„grün“ sagt, wie etwas ist (das grüne Gras). „Gras“ ist ein Nomen, „wachsen“ ein Verb, „unter“ eine Präposition.' },
    { id: 's2c-tot', fam: 's2c-nicht-steigerbar', cat: 'Sprache', type: 'choice',
      q: 'Welches Adjektiv kann man eigentlich <b>nicht</b> steigern?',
      opts: ['tot', 'groß', 'schnell', 'warm'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Tot ist man oder nicht – „töter“ gibt es nicht. Groß, schnell und warm lassen sich steigern: größer, schneller, wärmer.' },
    { id: 's2c-maschine', fam: 'w-duden-end-ent', cat: 'Sprache', type: 'choice',
      q: 'Wie schreibt man das Wort für ein Gerät, das Arbeit übernimmt, nach Duden richtig?',
      opts: ['Maschine', 'Maschiene', 'Machine', 'Maschinne'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Richtig ist „Maschine“ – mit einfachem i, obwohl man es lang spricht. Das Wort kommt aus dem Französischen (machine) und behält dessen einfaches i, wie viele Fremdwörter, etwa Kino oder Musik.' },
    { id: 's2c-ebbe', fam: 's2c-gegenteil-meer', cat: 'Sprache', type: 'text',
      q: 'Was ist das Gegenteil von „Ebbe“?',
      a: 'FLUT', r: [1, 0, 0, 0, 0],
      ex: 'Ebbe und Flut: Bei Ebbe zieht sich das Meer zurück, bei Flut steigt es wieder.' },

    // ===== mittel =====
    { id: 's2c-seepferdchen', fam: 's2c-kompositum-pferd', cat: 'Sprache', type: 'choice',
      q: 'Welches dieser Wörter bezeichnet ein lebendes Tier?',
      opts: ['Seepferdchen', 'Schaukelpferd', 'Steckenpferd', 'Seitpferd'], a: 0, r: [1, 1, 1, 0, 0],
      ex: 'Das Seepferdchen ist ein Fisch. Schaukelpferd und Steckenpferd sind Spielzeuge, das Seitpferd ist ein Turngerät.' },
    { id: 's2c-frau-genus', fam: 's2c-genus-natuerlich', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort hat einen anderen Artikel als die anderen drei?',
      opts: ['Frau', 'Mädchen', 'Fräulein', 'Kind'], a: 0, r: [1, 1, 1, 0, 0],
      ex: 'Es heißt die Frau – aber das Mädchen, das Fräulein und das Kind.' },
    { id: 's2c-altes-brot', fam: 's2c-gegenteil-kontext', cat: 'Sprache', type: 'choice',
      q: 'Bei Menschen ist „jung“ das Gegenteil von „alt“. Was ist das Gegenteil von „alt“ bei Brot?',
      opts: ['frisch', 'jung', 'neu', 'warm'], a: 0, r: [1, 2, 1, 0, 0],
      ex: 'Man spricht von altem und von frischem Brot. Das Gegenteil von „alt“ hängt davon ab, worum es geht.' },
    { id: 's2c-fussball-tausch', fam: 's2c-kompositum-tausch', cat: 'Sprache', type: 'choice',
      q: 'Aus „Taschengeld“ wird mit vertauschten Teilen „Geldtasche“ – wieder ein echtes Wort. Bei welchem Wort klappt dieser Tausch <b>nicht</b>?',
      opts: ['Fußball', 'Spielball', 'Blumentopf', 'Hausgarten'], a: 0, r: [2, 1, 1, 1, 0],
      ex: 'Spielball → Ballspiel, Blumentopf → Topfblume, Hausgarten → Gartenhaus. Einen „Ballfuß“ gibt es nicht.' },
    { id: 's2c-hundekuchen', fam: 's2c-kompositum-bezug', cat: 'Sprache', type: 'choice',
      q: 'Im Apfelkuchen stecken Äpfel. In welchem Kuchen steckt das, was der erste Wortteil nennt, <b>nicht</b>?',
      opts: ['Hundekuchen', 'Zwiebelkuchen', 'Mohnkuchen', 'Nusskuchen'], a: 0, r: [1, 2, 1, 0, 0],
      ex: 'Ein Hundekuchen ist ein Gebäck <i>für</i> Hunde. Im Zwiebel-, Mohn- und Nusskuchen stecken dagegen Zwiebeln, Mohn und Nüsse.' },
    { id: 's2c-durst', fam: 'w-nur-mehrzahl', cat: 'Sprache', type: 'choice',
      q: 'Welches Wort hat laut Duden <b>keine</b> Mehrzahl?',
      opts: ['Durst', 'Hund', 'Buch', 'Tag'], a: 0, r: [1, 1, 1, 0, 0],
      ex: '„Durst“ gibt es nur in der Einzahl. Die anderen haben eine Mehrzahl: Hunde, Bücher, Tage.' },
    { id: 's2c-nicht-unmoeglich', fam: 'doppelte-verneinung', cat: 'Sprache', type: 'choice',
      q: 'Im Wetterbericht heißt es: „Schnee ist morgen nicht unmöglich.“ Was bedeutet das?',
      opts: ['Schnee ist möglich', 'Schnee ist unmöglich', 'Es schneit sicher', 'Es schneit sicher nicht'], a: 0, r: [1, 1, 1, 0, 0],
      ex: '„Nicht“ und „un-“ heben sich auf: „nicht unmöglich“ heißt „möglich“. Es kann schneien, muss aber nicht.' },

    // ===== schwer =====
    { id: 's2c-gut-besser', fam: 's2c-steigerung-buchstaben', cat: 'Sprache', type: 'choice',
      q: 'Bei welchem Wort hat die erste Steigerungsform <b>keinen einzigen</b> Buchstaben mit der Grundform gemeinsam?',
      opts: ['gut', 'viel', 'hoch', 'nah'], a: 0, r: [2, 1, 2, 1, 1],
      ex: 'gut → besser: kein g, u oder t. viel → mehr teilt das e, hoch → höher das h, nah → näher das n und das h.' },
    { id: 's2c-verlernen', fam: 's2c-ver-gegenteil', cat: 'Sprache', type: 'choice',
      q: 'Bei welchem Verb macht die Vorsilbe „ver-“ aus dem Grundwort sein Gegenteil?',
      opts: ['verlernen', 'verlieben', 'verbessern', 'verstecken'], a: 0, r: [2, 2, 1, 0, 0],
      ex: 'Wer etwas verlernt, kann es nicht mehr – das Gegenteil von „lernen“. Verlieben, verbessern und verstecken drehen die Bedeutung nicht um.' },
    { id: 's2c-ss-zaehlen', fam: 's2c-ss-oder-sz', cat: 'Sprache', type: 'number',
      q: 'In jede Lücke gehört entweder ß oder ss. In wie viele Lücken gehört nach Duden ß?' + seq(['Fu_', 'Flu_', 'Gru_', 'Ku_', 'Nu_', 'Flei_', 'Sto_', 'Schlo_']),
      a: 4, r: [2, 1, 1, 2, 1],
      ex: 'Nach langem Vokal oder Doppellaut steht ß: Fuß, Gruß, Fleiß, Stoß. Nach kurzem Vokal steht ss: Fluss, Kuss, Nuss, Schloss.' },
    { id: 's2c-naechstgelegen', fam: 's2c-doppelt-gesteigert', cat: 'Sprache', type: 'choice',
      q: 'Welche Form ist nach Duden richtig?',
      opts: ['die nächstgelegene Apotheke', 'die nächstgelegenste Apotheke', 'die nächstgelegendste Apotheke', 'die am nächstgelegenste Apotheke'], a: 0, r: [2, 1, 2, 0, 1],
      ex: '„Nächst-“ ist schon der Superlativ von „nah“. Ein zusätzliches „-ste“ wäre doppelt gesteigert.' },
    { id: 's2c-vorgaenger', fam: 's2c-gegenteil-unsymmetrisch', cat: 'Sprache', type: 'text',
      q: 'Was ist das Gegenteil von „Vorgänger“?',
      a: 'NACHFOLGER', accept: ['NACHFOLGERIN'], r: [1, 1, 2, 0, 0],
      ex: 'Das Gegenteil ist der Nachfolger – einen „Nachgänger“ gibt es nicht.' },
    { id: 's2c-mittwoch', fam: 's2c-genus-ausnahme', cat: 'Sprache', type: 'text',
      q: 'Zusammengesetzte Nomen bekommen meist den Artikel ihres letzten Teils. Welcher Wochentag ist männlich, obwohl die beiden Wörter, aus denen er besteht, weiblich sind?',
      a: 'MITTWOCH', r: [2, 2, 1, 1, 0],
      ex: 'Der Mittwoch ist die Mitte der Woche: die Mitte + die Woche – trotzdem heißt es der Mittwoch, wie bei allen Wochentagen (der Montag, der Dienstag …), die sich nach „der Tag“ richten.' },
    { id: 's2c-laut', fam: 's2c-wortart-wechsel', cat: 'Sprache', type: 'text',
      q: 'Welches Wort ist je nach Satz ein Nomen, ein Adjektiv oder eine Präposition, die „gemäß“ bedeutet?',
      a: 'LAUT', r: [2, 2, 1, 1, 1],
      ex: 'Laut (gemäß) Wetterbericht wird der Sturm laut (Adjektiv) – und jeder Laut (Nomen) ist ein Geräusch.' },

    // ===== sehr schwer =====
    { id: 's2c-nicht-nicht-krank', fam: 's2c-quantor-verneinung', cat: 'Sprache', type: 'number',
      q: 'In einer Klasse sind 20 Kinder. Die Lehrerin sagt wahrheitsgemäß: „Nicht alle Kinder sind nicht krank.“ Wie viele Kinder sind mindestens krank?',
      a: 1, r: [2, 3, 3, 0, 0],
      ex: '„Nicht alle sind nicht krank“ heißt: Mindestens ein Kind ist krank. Dass alle 20 krank sind, folgt daraus nicht.' },
    { id: 's2c-gross-zaehlen', fam: 's2c-grossschreibung-zaehlen', cat: 'Sprache', type: 'number',
      q: 'Hier ist alles kleingeschrieben. Wie viele Wörter muss man nach Duden großschreiben (der Satzanfang zählt mit)?<br>„gestern abend hat das kind beim laufen im grünen etwas schönes gefunden, das ihm am besten gefiel.“',
      a: 6, r: [2, 2, 2, 2, 1],
      ex: '„Gestern Abend hat das Kind beim Laufen im Grünen etwas Schönes gefunden, das ihm am besten gefiel.“ Groß: Gestern (Satzanfang), Abend, Kind, Laufen, Grünen, Schönes – „am besten“ bleibt klein.' },
    { id: 's2c-komma-zaehlen', fam: 's2c-komma-zaehlen', cat: 'Sprache', type: 'number',
      q: 'Wie viele Kommas fehlen in diesem Satz?<br>„Ich weiß dass Tim lieber Tee als Kaffee trinkt und dass er morgens joggt obwohl er es hasst.“',
      a: 2, r: [2, 2, 2, 2, 1],
      ex: '„Ich weiß, dass Tim lieber Tee als Kaffee trinkt und dass er morgens joggt, obwohl er es hasst.“ Vor „als Kaffee“ steht kein Komma (kein eigener Satz), vor „und dass“ auch nicht (zwei gleichrangige, mit „und“ verbundene Nebensätze).' },
    { id: 's2c-artikel-zaehlen', fam: 's2c-artikel-oder-pronomen', cat: 'Sprache', type: 'number',
      q: 'Wie viele der Wörter „das“, „den“ und „der“ sind in diesem Satz Artikel?<br>„Das Kind, das den Ball warf, sah den Hund, der den Ball fing.“',
      a: 4, r: [2, 2, 3, 1, 1],
      ex: 'Artikel sind: Das (Kind), den (Ball), den (Hund), den (Ball). Das „das“ nach „Kind,“ und das „der“ nach „Hund,“ sind Relativpronomen – sie leiten die Nebensätze ein.' },
    { id: 's2c-eher-bald', fam: 's2c-steigerung-grundform', cat: 'Sprache', type: 'text',
      q: '„Je eher, desto besser.“ Von welchem Wort ist „eher“ laut Duden die Steigerung?',
      a: 'BALD', r: [2, 3, 2, 0, 1],
      ex: 'Laut Duden wird „bald“ so gesteigert: bald – eher – am ehesten.' },
    { id: 's2c-faecher', fam: 's2c-mehrzahl-ist-ding', cat: 'Sprache', type: 'text',
      q: 'Die Mehrzahl welches Nomens ist zugleich ein Gegenstand, mit dem man sich an heißen Tagen Luft zuwedelt?',
      a: 'FACH', r: [2, 3, 2, 0, 0],
      ex: 'Ein Fach – viele Fächer. Und der Fächer ist das Ding, mit dem man sich Luft zuwedelt.' },
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

// ---- wortspiel2a.js ----
(function () {
  const { seq, eq } = (typeof window !== 'undefined' ? window : globalThis).QSVG;
  QUIZ_ADD([
    // ===== leicht =====
    { id: 'w2a-kater', fam: 'w2a-teekessel-ichraetsel', cat: 'Sprache', type: 'text',
      q: 'Ich jage nachts Mäuse – und nach einer durchzechten Feier hat mancher Mensch am nächsten Morgen einen von mir. Was bin ich?',
      a: 'KATER', r: [1, 1, 0, 0, 0],
      ex: 'Der Kater ist die männliche Katze – und umgangssprachlich auch das Unwohlsein nach zu viel Alkohol.' },
    { id: 'w2a-schuh', fam: 'w2a-kreuzbruecke', cat: 'Sprache', type: 'text',
      q: 'Welches Wort passt hinter alle drei Wörter der ersten Reihe und vor alle drei Wörter der zweiten Reihe?' + seq(['HAND…', 'TURN…', 'HAUS…']) + seq(['…LÖFFEL', '…KARTON', '…GRÖSSE']),
      a: 'SCHUH', r: [1, 1, 0, 0, 0],
      ex: 'Handschuh, Turnschuh, Hausschuh – und Schuhlöffel, Schuhkarton, Schuhgröße.' },
    { id: 'w2a-arm', fam: 'w2a-teekessel-gross-klein', cat: 'Sprache', type: 'text',
      q: 'Welches Wort ist großgeschrieben ein Körperteil und kleingeschrieben das Gegenteil von „reich“?',
      a: 'ARM', r: [1, 1, 0, 0, 0],
      ex: 'Der Arm ist ein Körperteil, und wer wenig Geld hat, ist arm – das Gegenteil von reich.' },

    // ===== mittel =====
    { id: 'w2a-koelner', fam: 'w2a-einwohner-speise', cat: 'Sprache', type: 'choice',
      q: 'Drei dieser Wörter für Einwohner einer Stadt bezeichnen auch etwas zum Essen. Welches nicht?',
      opts: ['Berliner', 'Hamburger', 'Wiener', 'Kölner'], a: 3, r: [2, 1, 1, 0, 0],
      ex: 'Ein Berliner ist ein Gebäck, ein Hamburger ein Brötchen mit Frikadelle, ein Wiener ein Würstchen. Einen essbaren „Kölner“ gibt es nicht.' },
    { id: 'w2a-elch', fam: 'w2a-teekessel-ausreisser', cat: 'Sprache', type: 'choice',
      q: 'Drei dieser Tiernamen bezeichnen auch einen Gegenstand. Welcher nicht?',
      opts: ['Maus', 'Hahn', 'Fliege', 'Elch'], a: 3, r: [2, 1, 1, 1, 0],
      ex: 'Die Computermaus, der Wasserhahn und die Fliege als Schleife am Hemdkragen – nur der Elch ist ausschließlich ein Tier.' },
    { id: 'w2a-uhr', fam: 'w2a-doppelbruecke', cat: 'Sprache', type: 'text',
      q: 'Welches Wort passt in beide Lücken – es bildet jedes Mal mit beiden Nachbarn ein Wort?' + seq(['SAND', '___', 'ZEIT']) + seq(['TURM', '___', 'WERK']),
      a: 'UHR', r: [2, 1, 0, 1, 0],
      ex: 'Sanduhr und Uhrzeit, Turmuhr und Uhrwerk.' },
    { id: 'w2a-brot', fam: 'w2a-bruecken-initialen', cat: 'Sprache', type: 'text',
      q: 'Jede Lücke bildet mit beiden Nachbarn ein Wort. Die Anfangsbuchstaben der vier Lückenwörter ergeben von oben nach unten etwas zum Essen. Was?' +
        eq(['REGEN · ___ · SCHÜTZE', 'RIESEN · ___ · WEG', 'KACHEL · ___ · ROHR', 'BLUMEN · ___ · LAPPEN']),
      a: 'BROT', r: [3, 1, 0, 2, 0],
      ex: 'Regenbogen/Bogenschütze, Riesenrad/Radweg, Kachelofen/Ofenrohr, Blumentopf/Topflappen: B-R-O-T.' },
    { id: 'w2a-rochen', fam: 'w2a-teekessel-verbform', cat: 'Sprache', type: 'text',
      q: 'Welches Wort bezeichnet einen flachen Meeresfisch – und ist zugleich eine Vergangenheitsform von „riechen“?',
      a: 'ROCHEN', r: [2, 2, 1, 0, 0],
      ex: 'Der Rochen ist ein flacher Fisch, und „wir rochen“ ist das Präteritum von „riechen“ (wir riechen – wir rochen).' },

    // ===== schwer =====
    { id: 'w2a-bauer', fam: 'w2a-teekessel-lueckensaetze', cat: 'Sprache', type: 'text',
      q: 'Welches Wort passt in beide Lücken? „Auf dem Schachbrett zieht der ___ ein Feld vor.“ – „Der Wellensittich sitzt in seinem ___.“',
      a: 'BAUER', r: [2, 2, 1, 0, 1],
      ex: 'Der Bauer ist eine Schachfigur – und „das Bauer“ ist ein altes Wort für einen Vogelkäfig.' },
    { id: 'w2a-nase', fam: 'w2a-raetsel-wortteile', cat: 'Sprache', type: 'text',
      q: 'Ich habe einen Rücken, zwei Flügel und eine Wurzel – und bin doch weder Tier noch Pflanze. Was bin ich?',
      a: 'NASE', r: [2, 3, 1, 0, 0],
      ex: 'Nasenrücken, Nasenflügel und Nasenwurzel: Die Nase hat alles davon.' },
    { id: 'w2a-ei', fam: 'w2a-fragment-ergaenzen', cat: 'Sprache', type: 'text',
      q: 'Welches Wort passt hinter alle vier Buchstabengruppen, sodass jedes Mal ein neues Wort entsteht?' + seq(['BL…', 'BR…', 'FR…', 'SCHR…']),
      a: 'EI', r: [2, 2, 1, 1, 0],
      ex: 'Mit EI entstehen BLEI, BREI, FREI und SCHREI.' },
    { id: 'w2a-rot', fam: 'w2a-fragment-ergaenzen', cat: 'Sprache', type: 'text',
      q: 'Welches Wort passt vor alle drei Buchstabengruppen, sodass jedes Mal ein neues Wort entsteht?' + seq(['…OR', '…ATION', '…UNDE']),
      a: 'ROT', r: [2, 3, 1, 1, 1],
      ex: 'ROTOR, ROTATION und ROTUNDE (ein runder Bau). In keinem der drei Wörter hat das ROT etwas mit der Farbe zu tun.' },
    { id: 'w2a-weh', fam: 'w2a-bruecke-buchstabenname', cat: 'Sprache', type: 'text',
      q: 'Welcher Buchstabe des Alphabets passt – laut ausgesprochen – in die Lücke, sodass er mit beiden Nachbarn ein Wort bildet?' + seq(['HEIM', '___', 'MUT']),
      a: 'W', accept: ['WEH'], letters: true, r: [2, 2, 1, 0, 0],
      ex: 'Man muss den Buchstaben aussprechen: W klingt wie „weh“. So entstehen HEIMWEH und WEHMUT.' },
    { id: 'w2a-zahlbruecke', fam: 'w2a-bruecke-zahlwort', cat: 'Sprache', type: 'number',
      q: 'Jede Lücke bildet mit beiden Nachbarn ein Wort. Welches Ergebnis hat die Rechnung?' + eq(['(JAHR · ___ · SASSA) − (FUSSBALL · ___ · METER)']),
      a: 989, r: [3, 2, 1, 2, 0],
      ex: 'Die Lückenwörter sind Zahlen: Jahrtausend/Tausendsassa und Fußballelf/Elfmeter. 1000 − 11 = 989.' },

    // ===== sehr schwer =====
    { id: 'w2a-zahl-teekessel', fam: 'w2a-zahlwort-teekessel', cat: 'Sprache', type: 'number',
      q: 'Jede Klammer umschreibt ein Wort. Welche Zahl ergibt die Rechnung?' + eq(['(Märchenwesen) × (Mehl durch ein Sieb schütteln) − (etwas außer ___ lassen)']),
      a: 69, r: [3, 3, 1, 2, 0],
      ex: 'Gemeint sind Zahlwörter: ein Elf (Märchenwesen), sieben (Mehl sieben) und „außer Acht lassen“. 11 × 7 − 8 = 69.' },
  ]);
})();

// ---- wortspiel2b.js ----
// Wortspiel 2b (Kategorie „Sprache“): Wortsuche mit Regel – Wörter in Wörtern, rückwärts lesen,
// Buchstaben tauschen, Kategorien, Wort-Gleichungen.
(function () {
  const { seq, eq, svg } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // Buchstabengitter: jede Zeile ein String, Kästchen 50 × 50
  const letterGrid = (rows) => {
    const s = 50;
    let b = '';
    rows.forEach((row, i) => [...row].forEach((ch, j) => {
      b += `<rect class="cell" x="${j * s + 3}" y="${i * s + 3}" width="${s - 6}" height="${s - 6}" rx="6"/>`;
      b += `<text class="tx" x="${j * s + s / 2}" y="${i * s + s / 2 + 10}" text-anchor="middle" font-size="28" font-weight="700">${ch}</text>`;
    }));
    return svg(`0 0 ${rows[0].length * s} ${rows.length * s}`, b);
  };

  QUIZ_ADD([
    // ===== leicht =====
    { id: 'w2b-bauch', fam: 'w2b-wortgleichung', cat: 'Sprache', type: 'text',
      q: 'Löse die Wortgleichung:' + eq(['BAUM − M + CH = ?']),
      a: 'BAUCH', r: [1, 1, 0, 0, 0],
      ex: 'BAUM ohne das M ist BAU, mit CH dahinter wird daraus BAUCH.' },
    { id: 'w2b-neid', fam: 'w2b-rand-tausch', cat: 'Sprache', type: 'choice',
      q: 'Vertausche den ersten und den letzten Buchstaben. Bei welchem Wort entsteht wieder ein echtes Wort?',
      opts: ['NEID', 'HUND', 'ROSE', 'KATZE'], a: 0, r: [1, 1, 0, 0, 0],
      ex: 'Aus NEID wird DEIN. HUND wird zu DUNH, ROSE zu EOSR, KATZE zu EATZK.' },
    { id: 'w2b-zebra', fam: 'w2b-mitte-streichen', cat: 'Sprache', type: 'choice',
      q: 'Streiche bei jedem Tier den mittleren Buchstaben. Bei welchem entsteht dabei <b>kein</b> Wort?',
      opts: ['ZEBRA', 'TIGER', 'VIPER', 'ADLER'], a: 0, r: [1, 1, 0, 1, 0],
      ex: 'TIGER → TIER, VIPER → VIER, ADLER → ADER. Aus ZEBRA wird ZERA – das gibt es nicht.' },
    { id: 'w2b-hocker', fam: 'w2b-zwei-tauschen', cat: 'Sprache', type: 'choice',
      q: 'Welches Möbelstück wird zu einem Küchengerät, wenn du zwei seiner Buchstaben vertauschst?',
      opts: ['Hocker', 'Sessel', 'Regal', 'Schrank'], a: 0, r: [1, 1, 0, 1, 0],
      ex: 'Tauscht man H und K, wird aus HOCKER ein KOCHER – ein Gerät zum Kochen, wie der Wasser- oder Eierkocher.' },

    { id: 'w2b-hirschkaefer', fam: 'w-zwei-tiere-wort', cat: 'Sprache', type: 'choice',
      q: 'Welches dieser Tiere hat einen Namen, der aus zwei anderen Tiernamen zusammengesetzt ist?',
      opts: ['Hirschkäfer', 'Marienkäfer', 'Seehund', 'Maulwurf'], a: 0, r: [1, 1, 0, 1, 0],
      ex: 'HIRSCH + KÄFER. Im Marienkäfer und im Seehund steckt nur ein Tier, im Maulwurf gar keins.' },
    { id: 'w2b-sehne', fam: 'w-nachbarn-tauschen', cat: 'Sprache', type: 'choice',
      q: 'Vertausche in einem dieser Wörter zwei nebeneinanderstehende Buchstaben – es entsteht ein Teil des Körpers. In welchem Wort geht das?',
      opts: ['SEHEN', 'RIECHEN', 'SCHMECKEN', 'TASTEN'], a: 0, r: [1, 1, 0, 1, 0],
      ex: 'Tauscht man in SEHEN die letzten beiden Buchstaben E und N, wird daraus die SEHNE. RIECHEN wird so höchstens zu REICHEN, bei SCHMECKEN und TASTEN entsteht gar kein Wort – kein Körperteil.' },

    // ===== mittel =====
    { id: 'w2b-hundert', fam: 'w2b-tier-im-zahlwort', cat: 'Sprache', type: 'text',
      q: 'Welches Tier steckt in jeder ausgeschriebenen Zahl von 100 bis 199?',
      a: 'HUND', r: [1, 2, 0, 0, 0],
      ex: 'Jede dieser Zahlen enthält das Wort „hundert“ – und darin steckt HUND.' },
    { id: 'w2b-kamel', fam: 'w2b-zwei-tauschen', cat: 'Sprache', type: 'text',
      q: 'Vertausche bei einem Wüstentier zwei Buchstaben – es entsteht ein Wort für einen Fehler, zum Beispiel einen Schönheitsfehler. Welches Wort entsteht?',
      a: 'MAKEL', r: [2, 1, 0, 1, 0],
      ex: 'Tauscht man K und M, wird aus KAMEL ein MAKEL.' },
    { id: 'w2b-stiefel', fam: 'w2b-jeder-zweite', cat: 'Sprache', type: 'text',
      q: 'Lies bei einem Kleidungsstück nur den 2., 4. und 6. Buchstaben – es ergibt ein Getränk. Welches Kleidungsstück ist es?',
      a: 'STIEFEL', accept: ['STIEFELETTE', 'STIEFELETTEN'], r: [2, 1, 0, 2, 0],
      ex: 'In STIEFEL sind der 2., 4. und 6. Buchstabe T, E und E – zusammen TEE.' },
    { id: 'w2b-greis', fam: 'w-anfang-streichen', cat: 'Sprache', type: 'text',
      q: 'Streiche bei einem Wort den ersten Buchstaben – es bleibt ein Getreide. Streiche noch einen – es bleibt etwas Kaltes zum Schlecken. Das Wort selbst bezeichnet einen sehr alten Mann. Welches Wort?',
      a: 'GREIS', r: [2, 1, 0, 1, 0],
      ex: 'GREIS → REIS → EIS. KREIS und PREIS führen auch zu REIS und EIS, sind aber kein alter Mann.' },
    { id: 'w2b-nagel', fam: 'w2b-zwei-regeln', cat: 'Sprache', type: 'text',
      q: 'Vertauschst du bei einem Wort die ersten beiden Buchstaben, kann man damit Fische fangen. Vertauschst du stattdessen den ersten und den letzten Buchstaben, entstehen Schichten. Welches Wort ist es?',
      a: 'NAGEL', r: [2, 2, 0, 1, 0],
      ex: 'NAGEL wird zu ANGEL, wenn N und A tauschen, und zu LAGEN, wenn N und L tauschen.' },
    { id: 'w2b-tunika', fam: 'w2b-buchstabe-wandert', cat: 'Sprache', type: 'text',
      q: 'Stellst du bei einem Kleidungsstück den ersten Buchstaben ans Ende, wird daraus ein Einzelstück, das es nur einmal gibt. Welches Kleidungsstück ist es?',
      a: 'TUNIKA', r: [2, 2, 0, 1, 1],
      ex: 'Das T von TUNIKA wandert ans Ende: UNIKAT.' },
    { id: 'w2b-ruebe', fam: 'w2b-buchstabe-wandert', cat: 'Sprache', type: 'text',
      q: 'Welches Wort gehört an die Stelle des Fragezeichens?' + eq(['BLAU → LAUB', 'LINSE → INSEL', 'RANKE → ANKER', 'RÜBE → ?']),
      a: 'ÜBER', r: [2, 2, 0, 1, 0],
      ex: 'Immer wandert der erste Buchstabe ans Ende: Aus R-ÜBE wird ÜBE-R, also ÜBER.' },

    { id: 'w2b-volk', fam: 'w2b-wortgleichung', cat: 'Sprache', type: 'text',
      q: 'Löse die Wortgleichung:' + eq(['(Gegenteil von LEER) − L + K = ?']),
      a: 'VOLK', r: [2, 1, 0, 1, 0],
      ex: 'Das Gegenteil von LEER ist VOLL. Ohne ein L bleibt VOL, mit K dahinter wird daraus VOLK.' },
    { id: 'w2b-sieben', fam: 'w2b-zahlwort-kuerzen', cat: 'Sprache', type: 'number',
      q: 'Streichst du im Zahlwort einer Zahl die letzten beiden Buchstaben, bleibt ein Küchengerät übrig. Welche Zahl ist es?',
      a: 7, r: [2, 1, 0, 1, 0],
      ex: 'SIEBEN ohne EN ergibt SIEB – ein Küchengerät, auch ohne Stecker. Bei keinem anderen Zahlwort bleibt ein Küchengerät stehen – aus EINS wird zum Beispiel nur EI.' },

    // ===== schwer =====
    { id: 'w2b-natter', fam: 'w2b-rand-tausch', cat: 'Sprache', type: 'text',
      q: 'Vertausche bei einem Tier den ersten und den letzten Buchstaben – heraus kommen gleich mehrere Tiere einer ganz anderen Art. Welches Tier war es?',
      a: 'NATTER', r: [2, 2, 1, 2, 0],
      ex: 'Aus NATTER wird RATTEN: Aus einer Schlange werden mehrere Nagetiere.' },
    { id: 'w2b-gitter-fehlt', fam: 's2a-buchstabengitter', cat: 'Sprache', type: 'text',
      q: 'Vier dieser Tiere stecken im Gitter – waagrecht, senkrecht oder schräg, auch rückwärts. Welches fehlt?' + seq(['ESEL', 'IGEL', 'HASE', 'ENTE', 'HUND']),
      svg: letterGrid(['IATHD', 'EIGAE', 'TIGSU', 'NEEEL', 'ELDIL']),
      a: 'HUND', r: [3, 1, 1, 2, 0],
      ex: 'HASE läuft in Spalte 4 nach unten, ENTE in Spalte 1 nach oben, IGEL und ESEL stehen schräg. HUND steht nirgends.' },
    { id: 'w2b-zweite-reihe', fam: 'w2b-jeder-zweite', cat: 'Sprache', type: 'text',
      q: 'Welches Wort gehört an die Stelle des Fragezeichens?' + eq(['KANTINE → KNIE', 'DIAGRAMM → DARM', 'FALTUNG → FLUG', 'EINSTIEG → ?']),
      a: 'ENTE', r: [2, 2, 1, 2, 0],
      ex: 'Gelesen wird nur jeder zweite Buchstabe, beginnend beim ersten: E-i-N-s-T-i-E-g ergibt ENTE.' },
    { id: 'w2b-leber-reihe', fam: 'w2b-mitte-streichen', cat: 'Sprache', type: 'text',
      q: 'Welches Wort gehört an die Stelle des Fragezeichens?' + eq(['TEUER → TEER', 'BAUCH → BACH', 'KIRSCHE → KIRCHE', 'LEBER → ?']),
      a: 'LEER', r: [2, 2, 2, 1, 0],
      ex: 'Immer fällt der mittlere Buchstabe weg: TE(U)ER, BA(U)CH, KIR(S)CHE – also LE(B)ER → LEER. EBER passt nicht, dort fehlt der erste Buchstabe.' },
    { id: 'w2b-gans-reihe', fam: 's2a-rueckwaerts-im-wort', cat: 'Sprache', type: 'text',
      q: 'Welches Tier gehört an die Stelle des Fragezeichens?' + eq(['GEWÖLBE → LÖWE', 'KNIFF → FINK', 'REITSCHULE → STIER', 'FUSSNAGEL → ?']),
      a: 'GANS', r: [2, 2, 1, 2, 0],
      ex: 'Rückwärts gelesen steckt in jedem Wort ein Tier: EBLÖWEG, FFINK, ELUHCSTIER – und FUSSNAGEL rückwärts ist LEGANSSUF.' },
    { id: 'w2b-luchs', fam: 'schuettel', cat: 'Sprache', type: 'text',
      q: 'Verteile die Anfangsbuchstaben dieser vier Wörter neu, sodass vier Tiere entstehen. Welches Tier wird aus WUCHS?' + seq(['WUCHS', 'NASE', 'HERZ', 'LANZE']),
      a: 'LUCHS', r: [2, 1, 2, 2, 0],
      ex: 'Mit dem H wird NASE zu HASE, mit dem N wird HERZ zu NERZ, mit dem W wird LANZE zu WANZE. Für WUCHS bleibt das L: LUCHS. Ein F für FUCHS ist nicht dabei.' },
    { id: 'w2b-paartausch', fam: 'w2b-paartausch', cat: 'Sprache', type: 'text',
      q: 'Diese Wörter sind alle nach derselben Regel verschlüsselt. Welches Wort ist mit ENEBL gemeint?' + eq(['UHDN = HUND', 'AKZTE = KATZE', 'ENEBL = ?']),
      a: 'NEBEL', r: [2, 3, 2, 1, 0],
      ex: 'Getauscht werden jeweils der 1. mit dem 2. und der 3. mit dem 4. Buchstaben: EN-EB-L wird zu NE-BE-L. LEBEN hat dieselben Buchstaben, folgt aber nicht der Regel.' },

    // ===== sehr schwer =====
    { id: 'w2b-zeitung', fam: 's2a-teilwort-legen', cat: 'Sprache', type: 'number',
      q: 'Welches ist die größte Zahl, deren Zahlwort man nur mit Buchstaben aus dem Wort <b>ZEITUNG</b> schreiben kann? Jeder Buchstabe darf beliebig oft vorkommen.',
      a: 90, r: [3, 2, 2, 2, 0],
      ex: 'NEUN geht (N, E, U) – aber auch NEUNZIG (N, E, U, Z, I, G). Jede größere Zahl braucht Buchstaben, die in ZEITUNG fehlen: D für „und“, H, D und R für „hundert“, A, S und D für „tausend“, L für „Million“, „Milliarde“ und alles darüber.' },
    { id: 'w2b-ohr', fam: 'w2b-dreifach-versteckt', cat: 'Sprache', type: 'text',
      q: 'In allen drei Wörtern versteckt sich dasselbe Körperteil aus drei Buchstaben. Dafür liest du rückwärts, nur jeden zweiten Buchstaben – oder beides. Welches Körperteil?' + seq(['LEDERHOSE', 'JOGHURT', 'FRÜHSOMMER']),
      a: 'OHR', r: [3, 2, 1, 2, 0],
      ex: 'LEDERHOSE rückwärts gelesen heißt ESOHREDEL – darin steckt OHR. In JOGHURT ergeben der 2., 4. und 6. Buchstabe O-H-R, in FRÜHSOMMER jeder zweite rückwärts gelesen: der 6., 4. und 2. Buchstabe.' },
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

// ---- zahlen2a.js ----
(function () {
  const { seq } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // Paket zahlen2a – Zahlenfolgen und Zahleigenschaften (Teiler, Quadrat-/Kubikzahlen, Quersummen, gerade/ungerade).
  QUIZ_ADD([
    // ===== leicht =====
    { id: 'z2a-ziffern-treppe', fam: 'ziffern-treppe', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([1, 22, 333, 4444, '?']),
      a: 55555, r: [1, 1, 0, 0, 0], ex: 'Die n-te Zahl besteht aus n-mal der Ziffer n: Nach viermal der 4 kommt fünfmal die 5, also 55555.' },
    { id: 'z2a-zwei-ungerade', fam: 'summe-zweier-ungerader', cat: 'Zahlen', type: 'choice',
      q: 'Du addierst zwei ungerade Zahlen. Was gilt für das Ergebnis immer?',
      opts: ['Es ist gerade', 'Es ist ungerade', 'Mal gerade, mal ungerade', 'Es ist größer als 10'],
      a: 0, r: [1, 1, 0, 0, 0], ex: 'Jede ungerade Zahl ist eine gerade Zahl plus 1. Zweimal „plus 1“ ergibt 2, also ist die Summe immer gerade – etwa 3 + 5 = 8 oder 1 + 1 = 2.' },
    { id: 'z2a-steckbrief-14', fam: 'zahl-steckbrief', cat: 'Zahlen', type: 'number',
      q: 'Ich bin eine Zahl zwischen 10 und 25. Ich bin gerade und durch 7 teilbar. Welche Zahl bin ich?',
      a: 14, r: [1, 0, 0, 1, 0], ex: 'Zwischen 10 und 25 sind 14 und 21 durch 7 teilbar – gerade ist nur 14.' },
    { id: 'z2a-groesste-quersumme', fam: 'quersumme-vergleich', cat: 'Zahlen', type: 'choice',
      q: 'Welche dieser Zahlen hat die größte Quersumme (Summe ihrer Ziffern)?',
      opts: ['99', '1000', '501', '810'],
      a: 0, r: [1, 0, 1, 1, 0], ex: '99 hat die Quersumme 9 + 9 = 18. Die größte Zahl 1000 hat nur die Quersumme 1, 501 hat 6 und 810 hat 9.' },
    { id: 'z2a-gerade-endziffer', fam: 'gerade-an-endziffer', cat: 'Zahlen', type: 'choice',
      q: 'Welche dieser Zahlen ist gerade?',
      opts: ['1234', '4321', '2341', '3421'],
      a: 0, r: [1, 0, 0, 0, 0], ex: 'Ob eine Zahl gerade ist, entscheidet nur ihre letzte Ziffer: 1234 endet auf 4. Die anderen drei enden auf 1 und sind ungerade.' },
    { id: 'z2a-teiler-36', fam: 'teiler-ausreisser', cat: 'Zahlen', type: 'choice',
      q: 'Durch welche Zahl lässt sich 36 <b>nicht</b> ohne Rest teilen?',
      opts: ['8', '9', '4', '6'],
      a: 0, r: [1, 0, 0, 1, 0], ex: '36 : 9 = 4, 36 : 4 = 9 und 36 : 6 = 6 gehen auf. 36 : 8 = 4 Rest 4.' },

    // ===== mittel =====
    { id: 'z2a-ungerade-summe', fam: 'summe-ungerader-zahlen', cat: 'Zahlen', type: 'number',
      q: 'Wie viel ergibt 1 + 3 + 5 + 7 + … + 19, also die Summe aller ungeraden Zahlen von 1 bis 19?',
      a: 100, r: [2, 1, 0, 2, 0], ex: 'Es sind zehn Zahlen, und je zwei von außen ergeben 20 (1 + 19, 3 + 17 …): 5 × 20 = 100. Allgemein ist die Summe der ersten n ungeraden Zahlen n², hier 10² = 100.' },
    { id: 'z2a-verdoppeln-minus-eins', fam: 'verdoppeln-minus-eins', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([2, 3, 5, 9, 17, '?']),
      a: 33, r: [1, 2, 0, 1, 0], ex: 'Jede Zahl ist das Doppelte der vorigen minus 1 (die Abstände 1, 2, 4, 8 verdoppeln sich): 2 × 17 − 1 = 33.' },
    { id: 'z2a-quadrat-endziffer', fam: 'quadrat-endziffer', cat: 'Zahlen', type: 'choice',
      q: 'Auf welche Ziffer kann eine Quadratzahl (1, 4, 9, 16, 25 …) niemals enden?',
      opts: ['7', '1', '6', '9'],
      a: 0, r: [1, 1, 1, 1, 1], ex: 'Die Endziffer einer Quadratzahl hängt nur von der Endziffer der Grundzahl ab: 0² bis 9² enden auf 0, 1, 4, 9, 6, 5, 6, 9, 4, 1. Eine 7 ist nie dabei – 1 (81), 6 (16) und 9 (49) dagegen schon.' },
    { id: 'z2a-kleinste-quersumme-20', fam: 'kleinste-zur-quersumme', cat: 'Zahlen', type: 'number',
      q: 'Welches ist die kleinste natürliche Zahl mit der Quersumme 20?',
      a: 299, r: [2, 1, 1, 1, 0], ex: 'Zweistellig geht höchstens 9 + 9 = 18. Dreistellig mit einer 1 vorne schafft man höchstens 1 + 9 + 9 = 19, also muss vorne die 2 stehen – mit 9 und 9 dahinter: 299.' },
    { id: 'z2a-vollkommene-zahl', fam: 'vollkommene-zahl', cat: 'Zahlen', type: 'number',
      q: 'Die Teiler von 6 ohne die 6 selbst sind 1, 2 und 3 – zusammen genau 6. Welche nächstgrößere Zahl ist ebenfalls genau die Summe ihrer Teiler ohne sich selbst?',
      a: 28, r: [3, 1, 0, 2, 0], ex: '1 + 2 + 4 + 7 + 14 = 28. Alle Zahlen von 7 bis 27 liegen daneben, etwa 12 mit 1 + 2 + 3 + 4 + 6 = 16.' },
    { id: 'z2a-primzahlen-zaehlen', fam: 'primzahlen-zaehlen', cat: 'Zahlen', type: 'number',
      q: 'Wie viele Primzahlen liegen zwischen 20 und 40?',
      a: 4, r: [2, 0, 1, 2, 1], ex: 'Es sind 23, 29, 31 und 37. Ungerade Zahlen wie 21, 27, 33, 39 (durch 3) oder 25 und 35 (durch 5) sind keine Primzahlen.' },
    { id: 'z2a-quadrat-steckbrief', fam: 'zahl-steckbrief', cat: 'Zahlen', type: 'number',
      q: 'Ich bin eine zweistellige Quadratzahl und gerade. Auch meine Quersumme ist eine Quadratzahl. Welche Zahl bin ich?',
      a: 36, r: [2, 1, 0, 2, 1], ex: 'Gerade zweistellige Quadratzahlen sind 16, 36 und 64. Ihre Quersummen sind 7, 9 und 10 – nur 9 = 3 × 3 ist eine Quadratzahl, also 36.' },

    // ===== schwer =====
    { id: 'z2a-wechsel-zahl-quadrat', fam: 'wechsel-zahl-quadrat', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([1, 4, 3, 16, 5, 36, 7, '?']),
      a: 64, r: [1, 2, 2, 1, 1], ex: 'Jede Zahl gehört zu ihrer Platznummer: Auf ungeraden Plätzen steht die Platznummer selbst, auf geraden ihr Quadrat (2², 4², 6²). Platz 8 bekommt 8² = 64 – nicht 7² = 49.' },
    { id: 'z2a-primzahlen-plus-eins', fam: 'primzahlen-verschoben', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([3, 4, 6, 8, 12, 14, 18, 20, '?']),
      a: 24, r: [1, 2, 2, 1, 1], ex: 'Das sind die Primzahlen 2, 3, 5, 7, 11, 13, 17, 19, jeweils plus 1. Die nächste Primzahl ist 23, also kommt 24.' },
    { id: 'z2a-endziffer-ungerade', fam: 'endziffer-ungerades-produkt', cat: 'Zahlen', type: 'number',
      q: 'Du multiplizierst alle ungeraden Zahlen von 1 bis 99 miteinander: 1 × 3 × 5 × … × 99. Auf welche Ziffer endet das Ergebnis?',
      a: 5, r: [2, 2, 2, 1, 0], ex: 'Das Produkt enthält den Faktor 5, ist also durch 5 teilbar und endet auf 0 oder 5. Gerade ist es nicht (kein Faktor 2), also endet es auf 5.' },
    { id: 'z2a-kgv-bis-zehn', fam: 'kleinstes-gemeinsames-vielfaches', cat: 'Zahlen', type: 'number',
      q: 'Welches ist die kleinste Zahl, die sich durch jede der Zahlen von 1 bis 10 ohne Rest teilen lässt?',
      a: 2520, r: [2, 1, 1, 2, 1], ex: 'Es genügen die höchsten Potenzen der Primfaktoren: 8 (2³), 9 (3²), 5 und 7. 8 × 9 × 5 × 7 = 2520 – das Produkt aller Zahlen von 1 bis 10 wäre viel zu groß.' },
    { id: 'z2a-zahl-doppelt', fam: 'zahl-doppelt-schreiben', cat: 'Zahlen', type: 'number',
      q: 'Schreibe eine beliebige dreistellige Zahl zweimal hintereinander: Aus 472 wird 472472. Welches ist die größte Zahl, durch die das Ergebnis immer teilbar ist – egal, womit du beginnst?',
      a: 1001, r: [2, 2, 1, 1, 0], ex: 'Zweimal hintereinander schreiben heißt Zahl × 1000 + Zahl = Zahl × 1001, etwa 472472 = 472 × 1001 – also immer durch 1001 teilbar. Größer geht nicht: 100100 = 100 × 1001 und 101101 = 101 × 1001 haben als größten gemeinsamen Teiler genau 1001, weil 100 und 101 außer 1 keinen gemeinsamen Teiler haben.' },
    { id: 'z2a-meiste-teiler', fam: 'meiste-teiler', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl unter 30 hat die meisten Teiler (1 und die Zahl selbst mitgezählt)?',
      a: 24, r: [2, 1, 1, 2, 1], ex: '24 hat 8 Teiler: 1, 2, 3, 4, 6, 8, 12, 24. Keine andere Zahl unter 30 kommt auf so viele – 12, 18, 20 und 28 haben nur je 6.' },

    // ===== sehr schwer =====
    { id: 'z2a-plus-minus', fam: 'plus-minus-paritaet', cat: 'Zahlen', type: 'number',
      q: 'Setze zwischen die Zahlen 1 bis 10 jeweils ein Plus oder ein Minus: 1 ? 2 ? 3 ? … ? 10. Das Ergebnis soll möglichst nah an 0 liegen. Wie groß ist der kleinste mögliche Abstand zu 0?',
      a: 1, r: [2, 3, 2, 1, 0], ex: 'Mit lauter Plus ergibt sich die ungerade 55, und jedes Minus statt Plus zieht das Doppelte einer Zahl ab – das Ergebnis bleibt also immer ungerade und nie 0. Abstand 1 klappt: 1 + 2 + 3 + 4 + 5 + 6 + 7 − 8 − 9 − 10 = 1.' },
    { id: 'z2a-quadrate-rueckwaerts', fam: 'square-digits', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([1, 4, 9, 61, 52, 63, 94, 46, '?']),
      a: 18, r: [2, 3, 2, 2, 1], ex: 'Es sind die Quadratzahlen 1, 4, 9, 16, 25, 36, 49, 64 – jeweils rückwärts geschrieben. Als Nächstes kommt 81, rückwärts also 18.' },
    { id: 'z2a-selbstbeschreibend', fam: 'selbstbeschreibende-zahl', cat: 'Zahlen', type: 'number',
      q: 'Ich bin fünfstellig. Meine Ziffern geben der Reihe nach an, wie oft die Ziffern 0, 1, 2, 3 und 4 in mir vorkommen. Welche Zahl bin ich?',
      a: 21200, r: [3, 3, 1, 2, 0], ex: 'Weil die Zahl fünf Ziffern hat, müssen ihre Ziffern zusammen 5 ergeben. In 21200 stehen zwei Nullen, eine Eins, zwei Zweien, keine Drei und keine Vier – genau das sagen die Ziffern 2, 1, 2, 0, 0. Eine andere fünfstellige Zahl schafft das nicht.' },
    { id: 'z2a-primzahl-palindrom', fam: 'primzahl-palindrom', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([2, 3, 5, 7, 11, 101, 131, '?']),
      a: 151, r: [2, 3, 1, 2, 1], ex: 'Es sind die Primzahlen, die rückwärts gelesen gleich bleiben. Zweistellige wie 22, 33 … 99 sind alle durch 11 teilbar, darum folgt auf 11 gleich 101; 111 = 3 × 37, 121 = 11 × 11 und 141 = 3 × 47 sind keine Primzahlen, 151 schon.' },
    { id: 'z2a-siebtel', fam: 'periode-eines-siebtels', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([1, 4, 2, 8, 5, 7, '?']),
      a: 1, r: [1, 4, 1, 1, 1], ex: 'Das sind die Nachkommastellen von 1 : 7 = 0,142857142857… Die sechs Ziffern wiederholen sich immer wieder, also kommt die 1.' },
    { id: 'z2a-durch-quersumme', fam: 'durch-eigene-quersumme', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, '?']),
      a: 36, r: [2, 3, 2, 2, 0], ex: 'Jede Zahl ist durch ihre eigene Quersumme teilbar (12 : 3, 20 : 2, 27 : 9). 33 fällt heraus, weil 33 : 6 nicht aufgeht – die nächste passende ist 36 : 9 = 4.' },
  ]);
})();

// ---- zahlen2b.js ----
(function () {
  // Paket zahlen2b – Alltagsrechnen mit Falle (Geld, Rabatte, Wechselgeld, Mengen, Rezepte,
  // Durchschnitt, Prozent-Intuition, Verhältnisse, Arbeit/Leistung). Keine Bilder.
  QUIZ_ADD([
    // ===== leicht =====
    { id: 'z2b-kaffee-budget', fam: 'geld-abrunden', cat: 'Zahlen', type: 'number',
      q: 'Ein Kaffee kostet 2,80 €. Wie viele Kaffees kannst du dir für 20 € höchstens kaufen?',
      a: 7, r: [1, 0, 1, 1, 0], ex: '7 Kaffees kosten 19,60 €, 8 Kaffees schon 22,40 € – also reicht das Geld für höchstens 7.' },
    { id: 'z2b-kaese-kilo', fam: 'kilopreis-hochrechnen', cat: 'Zahlen', type: 'number',
      q: '100 g Käse kosten 1,80 €. Wie viele Euro kostet ein ganzes Kilo dieses Käses?',
      a: 18, r: [1, 0, 0, 1, 0], ex: 'Ein Kilo sind 1000 g, also zehnmal 100 g: 10 × 1,80 € = 18 €.' },
    { id: 'z2b-pfand', fam: 'pfand-pro-flasche', cat: 'Zahlen', type: 'number',
      q: 'Du kaufst 6 Flaschen Saft zu je 0,75 €. Auf jede Flasche kommen noch 0,25 € Pfand. Wie viele Euro zahlst du insgesamt?',
      a: 6, r: [1, 0, 1, 1, 0], ex: 'Mit Pfand kostet jede Flasche 0,75 € + 0,25 € = 1 €, sechs Flaschen also 6 €.' },
    { id: 'z2b-wechselgeld-glatt', fam: 'change-cents', cat: 'Zahlen', type: 'number',
      q: 'Dein Einkauf kostet 7,80 €. Du gibst einen 10-€-Schein und zusätzlich 80 Cent. Wie viele Euro bekommst du zurück?',
      a: 3, r: [1, 0, 0, 1, 0], ex: 'Du gibst 10,80 €. 10,80 € − 7,80 € = 3 € – genau deshalb legt man die 80 Cent dazu.' },
    { id: 'z2b-pizza-sechstel', fam: 'bruch-gleichwertig', cat: 'Zahlen', type: 'choice',
      q: 'Was ist mehr Pizza: die Hälfte einer Pizza oder drei Sechstel derselben Pizza?',
      opts: ['Beides gleich viel', 'Die Hälfte', 'Drei Sechstel'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Drei Sechstel sind 3/6 = 1/2, also genau die Hälfte. Beide Mengen sind gleich groß.' },
    { id: 'z2b-zusammenlegen', fam: 'geld-gerecht-teilen', cat: 'Zahlen', type: 'number',
      q: 'Drei Freunde haben 4 €, 7 € und 13 €. Sie legen alles zusammen und teilen es gerecht auf. Wie viele Euro hat danach jeder?',
      a: 8, r: [1, 0, 0, 1, 0], ex: 'Zusammen sind es 4 + 7 + 13 = 24 €. Gerecht geteilt bekommt jeder 24 : 3 = 8 €.' },

    // ===== mittel =====
    { id: 'z2b-viererpack', fam: 'grosspackung-teurer', cat: 'Zahlen', type: 'number',
      q: 'Ein Joghurt kostet einzeln 45 Cent, im Viererpack 1,89 €. Du brauchst genau 4 Becher. Wie viele Cent zahlst du, wenn du so günstig wie möglich kaufst?',
      a: 180, r: [1, 0, 2, 1, 0], ex: 'Vier einzelne Becher kosten 4 × 45 = 180 Cent, das Viererpack 189 Cent. Einzeln ist hier billiger.' },
    { id: 'z2b-stundenlohn', fam: 'lohn-teilstunde', cat: 'Zahlen', type: 'number',
      q: 'Jana verdient 15 € pro Stunde. Wie viele Euro verdient sie für 2 Stunden und 20 Minuten Arbeit?',
      a: 35, r: [2, 0, 1, 1, 0], ex: '20 Minuten sind eine Drittelstunde, also 15 € : 3 = 5 €. Dazu 2 × 15 € = 30 € – zusammen 35 €.' },
    { id: 'z2b-elektriker', fam: 'angefangene-stunde', cat: 'Zahlen', type: 'number',
      q: 'Ein Elektriker berechnet 30 € Anfahrt und 40 € für jede angefangene Arbeitsstunde. Er arbeitet 2 Stunden und 10 Minuten. Wie viele Euro kostet das insgesamt?',
      a: 150, r: [2, 0, 2, 1, 0], ex: 'Die dritte Stunde ist angefangen und zählt voll: 3 × 40 € = 120 €, plus 30 € Anfahrt = 150 €.' },
    { id: 'z2b-maler', fam: 'arbeiter-tage', cat: 'Zahlen', type: 'number',
      q: '3 Maler streichen ein Haus in 12 Tagen. Wie viele Tage brauchen 4 Maler, die genauso schnell arbeiten, für das gleiche Haus?',
      a: 9, r: [2, 0, 2, 1, 0], ex: 'Das Haus braucht 3 × 12 = 36 Malertage. Auf 4 Maler verteilt sind das 36 : 4 = 9 Tage – mehr Maler, weniger Tage.' },
    { id: 'z2b-tank', fam: 'anteil-differenz', cat: 'Zahlen', type: 'number',
      q: 'Ein Tank ist zu einem Viertel voll. Nachdem du 30 Liter nachgefüllt hast, ist er zu drei Vierteln voll. Wie viele Liter passen in den vollen Tank?',
      a: 60, r: [2, 0, 1, 1, 0], ex: 'Von einem Viertel auf drei Viertel sind es zwei Viertel, also die Hälfte des Tanks. Die Hälfte sind 30 Liter, voll also 60 Liter.' },
    { id: 'z2b-ausgleichen', fam: 'differenz-halbieren', cat: 'Zahlen', type: 'number',
      q: 'Anna hat 20 € mehr als Ben. Wie viele Euro muss Anna Ben geben, damit beide gleich viel haben?',
      a: 10, r: [1, 1, 2, 0, 0], ex: 'Gibt Anna 10 € ab, hat sie 10 € weniger und Ben 10 € mehr – der Abstand von 20 € ist weg. Mit 20 € hätte Ben 20 € mehr als Anna.' },
    { id: 'z2b-sirup', fam: 'mischverhaeltnis-teile', cat: 'Zahlen', type: 'number',
      q: 'Sirup wird im Verhältnis 1 : 4 mit Wasser gemischt – 1 Teil Sirup auf 4 Teile Wasser. Wie viele Milliliter Sirup brauchst du für genau 1 Liter fertiges Getränk?',
      a: 200, r: [2, 0, 2, 1, 0], ex: '1 + 4 = 5 Teile ergeben 1 Liter, ein Teil sind also 1000 ml : 5 = 200 ml Sirup (dazu 800 ml Wasser).' },

    // ===== schwer =====
    { id: 'z2b-kino-gruppe', fam: 'mehr-kaufen-billiger', cat: 'Zahlen', type: 'number',
      q: 'Eine Kinokarte kostet 9 €. Wer mindestens 10 Karten auf einmal kauft, zahlt für jede Karte nur 7 €. Ihr seid zu acht. Wie viele Euro müsst ihr mindestens ausgeben, damit alle ins Kino kommen?',
      a: 70, r: [2, 2, 2, 1, 0], ex: '8 Karten kosten 8 × 9 € = 72 €. 10 Karten kosten nur 10 × 7 € = 70 € – zwei Karten mehr zu kaufen ist billiger.' },
    { id: 'z2b-doppelrabatt', fam: 'price-pm10', cat: 'Zahlen', type: 'number',
      q: 'Eine Jacke ist um 20 % reduziert. An der Kasse bekommst du auf den reduzierten Preis noch einmal 20 % Rabatt. Um wie viel Prozent ist die Jacke insgesamt billiger als ursprünglich?',
      a: 36, r: [2, 1, 2, 1, 0], ex: 'Aus 100 € werden erst 80 €, dann 80 % davon = 64 €. Gespart sind 36 %, nicht 40 % – der zweite Rabatt gilt auf den kleineren Preis.' },
    { id: 'z2b-hecke', fam: 'work-rate', cat: 'Zahlen', type: 'number',
      q: 'Ben schneidet eine Hecke allein in 4 Stunden. Zusammen mit Lea schafft er sie in 3 Stunden. Beide arbeiten gleichmäßig. Wie viele Stunden bräuchte Lea allein?',
      a: 12, r: [2, 1, 2, 1, 0], ex: 'Ben schafft pro Stunde 1/4 der Hecke, beide zusammen 1/3. Lea schafft also 1/3 − 1/4 = 1/12 pro Stunde und braucht allein 12 Stunden.' },
    { id: 'z2b-muffins', fam: 'engpass-zutat', cat: 'Zahlen', type: 'number',
      q: 'Ein Rezept für 12 Muffins braucht 3 Eier und 250 g Mehl. Du hast 5 Eier und 500 g Mehl, alles andere ist reichlich da. Wie viele Muffins kannst du höchstens backen, wenn du das Rezept passend umrechnest?',
      a: 20, r: [2, 1, 2, 1, 0], ex: 'Ein Ei reicht für 12 : 3 = 4 Muffins, 5 Eier also für 20. Das Mehl würde für 24 reichen – die Eier sind der Engpass.' },
    { id: 'z2b-kronkorken', fam: 'tausch-gegen-reste', cat: 'Zahlen', type: 'number',
      q: 'Bei einer Aktion bekommst du für 4 Kronkorken eine neue, volle Flasche Limo. Du kaufst 16 Flaschen. Wie viele Flaschen kannst du insgesamt trinken, wenn du jeden möglichen Kronkorken einlöst?',
      a: 21, r: [2, 1, 2, 1, 0], ex: '16 Kronkorken bringen 4 neue Flaschen, deren 4 Kronkorken noch eine: 16 + 4 + 1 = 21. Am Ende bleibt ein Kronkorken übrig.' },
    { id: 'z2b-mehr-inhalt', fam: 'pct-recover', cat: 'Zahlen', type: 'number',
      q: 'Eine Tafel Schokolade bekommt 25 % mehr Inhalt, der Preis bleibt gleich. Um wie viel Prozent ist der Preis pro Gramm gesunken?',
      a: 20, r: [2, 2, 3, 1, 0], ex: 'Statt 100 g gibt es 125 g zum selben Preis. Pro Gramm zahlst du 100/125 = 80 % des alten Preises – also 20 % weniger, nicht 25 %.' },
    { id: 'z2b-mauern', fam: 'arbeiter-tage', cat: 'Zahlen', type: 'number',
      q: '6 Arbeiter bauen in 4 Tagen 3 gleiche Mauern. Wie viele Tage brauchen 4 Arbeiter, die genauso schnell arbeiten, für 4 solche Mauern?',
      a: 8, r: [3, 1, 2, 2, 0], ex: '3 Mauern kosten 6 × 4 = 24 Arbeitertage, eine Mauer also 8. Für 4 Mauern sind es 32 Arbeitertage, mit 4 Arbeitern 32 : 4 = 8 Tage.' },

    // ===== sehr schwer =====
    { id: 'z2b-fahrradhaendler', fam: 'gewinn-verlust-gleich', cat: 'Zahlen', type: 'number',
      q: 'Ein Händler verkauft zwei Fahrräder für je 600 €. Am einen verdient er 20 % seines Einkaufspreises, am anderen verliert er 20 % seines Einkaufspreises. Wie viele Euro Verlust macht er insgesamt?',
      a: 50, r: [3, 2, 2, 2, 0], ex: 'Eingekauft hat er für 600 : 1,2 = 500 € und 600 : 0,8 = 750 €, zusammen 1250 €. Verkauft hat er für 1200 € – das sind 50 € Verlust.' },
    { id: 'z2b-pizza-flaeche', fam: 'flaeche-quadratisch', cat: 'Zahlen', type: 'number',
      q: 'Eine runde Pizza mit 20 cm Durchmesser kostet 8 €. Wie viele Euro müsste eine gleich dicke Pizza mit 30 cm Durchmesser kosten, damit du pro Quadratzentimeter genau gleich viel zahlst?',
      a: 18, r: [2, 2, 3, 1, 1], ex: 'Der Durchmesser wächst um das 1,5-Fache, die Fläche um 1,5 × 1,5 = 2,25. 8 € × 2,25 = 18 € – nicht 12 €.' },
    { id: 'z2b-kerzen', fam: 'kerzen-doppelt-so-lang', cat: 'Zahlen', type: 'number',
      q: 'Zwei gleich lange Kerzen werden gleichzeitig angezündet. Die eine brennt gleichmäßig in 3 Stunden ganz ab, die andere gleichmäßig in 2 Stunden. Nach wie vielen Minuten ist die eine zum ersten Mal genau doppelt so lang wie die andere?',
      a: 90, r: [3, 2, 2, 1, 0], ex: 'Nach t Stunden ist noch 1 − t/3 bzw. 1 − t/2 übrig. Aus 1 − t/3 = 2 · (1 − t/2) = 2 − t folgt 2t/3 = 1, also t = 1,5 Stunden = 90 Minuten: Dann ist noch die Hälfte bzw. ein Viertel übrig.' },
  ]);
})();

// ---- zahlen2c.js ----
(function () {
  const { seq, eq, svg } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // ---------- Hilfen ----------
  const T = (x, y, t, size = 16, extra = '') => `<text class="tx" x="${x}" y="${y}" text-anchor="middle" font-size="${size}" font-weight="700"${extra ? ' ' + extra : ''}>${t}</text>`;

  // 7-Segment-Ziffern. Leuchtende Striche cyan, dunkle Striche nur schwach umrandet.
  const SEG = { 0: 'abcdef', 1: 'bc', 2: 'abdeg', 3: 'abcdg', 4: 'bcfg', 5: 'acdfg', 6: 'acdefg', 7: 'abc', 8: 'abcdefg', 9: 'abcdfg' };
  function digit(x, y, d, { w = 40, h = 72, t = 8 } = {}) {
    const half = h / 2, l = half - 1.5 * t;
    const R = {
      a: [x + t, y, w - 2 * t, t], b: [x + w - t, y + t, t, l], c: [x + w - t, y + half + t / 2, t, l],
      d: [x + t, y + h - t, w - 2 * t, t], e: [x, y + half + t / 2, t, l], f: [x, y + t, t, l],
      g: [x + t, y + half - t / 2, w - 2 * t, t],
    };
    let s = '';
    for (const k of 'abcdefg') {
      const [rx, ry, rw, rh] = R[k];
      s += SEG[d].includes(k)
        ? `<rect class="shape c2" x="${rx}" y="${ry}" width="${rw}" height="${rh}" rx="2"/>`
        : `<rect class="ln" x="${rx}" y="${ry}" width="${rw}" height="${rh}" rx="2" opacity="0.18" style="stroke-width:1.5"/>`;
    }
    return s;
  }
  const display = (x, y, digits, gap = 16) => [...digits].map((d, i) => digit(x + i * (40 + gap), y, d)).join('');

  // Zahlenmauer: rows von unten nach oben, Einträge '' = leer.
  function wall(rows, bw = 50, bh = 34) {
    const n = rows[0].length, W = n * bw + 8;
    let s = '';
    rows.forEach((row, r) => {
      const y = 4 + (rows.length - 1 - r) * (bh + 4), x0 = 4 + r * bw / 2;
      row.forEach((v, i) => {
        const x = x0 + i * bw;
        s += `<rect class="cell" x="${x + 1}" y="${y}" width="${bw - 2}" height="${bh}" rx="4"/>`;
        if (v !== '') s += T(x + bw / 2, y + bh / 2 + 6, v, 17);
      });
    });
    return svg(`0 0 ${W} ${rows.length * (bh + 4) + 4}`, s);
  }

  // Formen für das Symbolgitter.
  function sym(k, cx, cy) {
    if (k === 'o') return `<circle class="shape c1" cx="${cx}" cy="${cy}" r="15"/>`;
    if (k === 's') return `<rect class="shape c2" x="${cx - 14}" y="${cy - 14}" width="28" height="28" rx="3"/>`;
    return `<polygon class="shape c3" points="${cx},${cy - 16} ${cx - 16},${cy + 13} ${cx + 16},${cy + 13}"/>`;
  }

  QUIZ_ADD([
    // ===== leicht =====
    { id: 'z2c-roemisch-jahr', fam: 'roemisch-jahr-lesen', cat: 'Zahlen', type: 'number',
      q: 'Über der Tür eines alten Hauses steht in römischen Zahlzeichen das Baujahr: <b>MDCCCL</b>. In welchem Jahr wurde das Haus gebaut?',
      a: 1850, r: [1, 0, 0, 1, 1], ex: 'M = 1000, D = 500, CCC = 300, L = 50. Zusammen 1850.' },
    { id: 'z2c-acht-ohne-mitte', fam: 'segment-strich-aus', cat: 'Zahlen', type: 'number',
      q: 'Die Digitalanzeige zeigt eine 8. Jetzt geht nur der mittlere waagerechte Strich aus. Welche Ziffer ist dann zu sehen?',
      svg: svg('0 0 120 100', display(40, 14, '8')),
      a: 0, r: [1, 1, 0, 0, 0], ex: 'Ohne den mittleren Strich bleibt der äußere Rahmen aus sechs Strichen stehen – das ist die 0.' },
    { id: 'z2c-lampen-code', fam: 'lampen-code', cat: 'Zahlen', type: 'number',
      q: 'Jede Lampe hat den Wert, der darunter steht. Die Zahl ergibt sich, wenn man die Werte aller leuchtenden (gelben) Lampen addiert. Welche Zahl zeigen die Lampen?',
      svg: svg('0 0 270 96', [16, 8, 4, 2, 1].map((v, i) => {
        const cx = 31 + i * 52, on = [1, 0, 1, 0, 1][i];
        return (on ? `<circle class="shape c3" cx="${cx}" cy="36" r="20"/>` : `<circle class="ln" cx="${cx}" cy="36" r="20"/>`) + T(cx, 86, v, 18);
      }).join('')),
      a: 21, r: [1, 0, 0, 1, 0], ex: 'Es leuchten die Lampen mit 16, 4 und 1: 16 + 4 + 1 = 21.' },
    { id: 'z2c-strichliste', fam: 'strichliste', cat: 'Zahlen', type: 'number',
      q: 'Ida und Ben zählen vorbeifahrende Autos mit einer Strichliste. Jedes Bündel aus vier Strichen mit Querstrich steht für 5. Wie viele Autos haben beide zusammen gezählt?',
      svg: (() => {
        let s = '';
        const row = (y, label, bundles, rest) => {
          s += `<text class="tx" x="4" y="${y + 26}" font-size="17" font-weight="700">${label}</text>`;
          let x = 58;
          for (let b = 0; b < bundles; b++) {
            for (let k = 0; k < 4; k++) s += `<line class="ln" x1="${x + k * 9}" y1="${y}" x2="${x + k * 9}" y2="${y + 36}"/>`;
            s += `<line class="ln" x1="${x - 5}" y1="${y + 30}" x2="${x + 32}" y2="${y + 6}"/>`;
            x += 50;
          }
          for (let k = 0; k < rest; k++) s += `<line class="ln" x1="${x + k * 9}" y1="${y}" x2="${x + k * 9}" y2="${y + 36}"/>`;
        };
        row(8, 'Ida', 3, 2); row(64, 'Ben', 2, 4);
        return svg('0 0 260 112', s);
      })(),
      a: 31, r: [1, 0, 0, 1, 0], ex: 'Ida: 3 Bündel und 2 Striche = 17. Ben: 2 Bündel und 4 Striche = 14. Zusammen 31.' },
    { id: 'z2c-handytastatur', fam: 'handytastatur', cat: 'Zahlen', type: 'number',
      q: 'Auf dieser Telefontastatur stehen Buchstaben auf den Zifferntasten. Welche vier Ziffern tippst du für das Wort <b>ESEL</b>?',
      svg: (() => {
        const L = { 1: '', 2: 'ABC', 3: 'DEF', 4: 'GHI', 5: 'JKL', 6: 'MNO', 7: 'PQRS', 8: 'TUV', 9: 'WXYZ' };
        let s = '';
        for (let d = 1; d <= 9; d++) {
          const c = (d - 1) % 3, r = Math.floor((d - 1) / 3), x = 6 + c * 80, y = 6 + r * 58;
          s += `<rect class="cell" x="${x}" y="${y}" width="72" height="50" rx="8"/>`;
          s += T(x + 36, y + 26, d, 22);
          if (L[d]) s += T(x + 36, y + 44, L[d], 13);
        }
        return svg('0 0 250 182', s);
      })(),
      a: 3735, r: [2, 0, 0, 1, 0], ex: 'E liegt auf der 3, S auf der 7, E wieder auf der 3 und L auf der 5: 3735.' },
    { id: 'z2c-hundertertafel-unter', fam: 'hundertertafel', cat: 'Zahlen', type: 'number',
      q: 'In der Hundertertafel stehen die Zahlen 1 bis 100 in zehn Zeilen: oben 1 bis 10, darunter 11 bis 20 und so weiter. Welche Zahl steht direkt unter der 47?',
      a: 57, r: [1, 0, 0, 1, 0], ex: 'Jede Zeile hat 10 Zahlen, eine Zeile tiefer ist also immer 10 mehr: 47 + 10 = 57.' },

    // ===== mittel =====
    { id: 'z2c-stern-ziffer', fam: 'symbol-ziffern', cat: 'Zahlen', type: 'number',
      q: 'Jedes Zeichen steht für eine Ziffer, verschiedene Zeichen für verschiedene Ziffern. ●★ ist eine zweistellige Zahl. Welche?' + eq(['★ + ★ + ★ = ●★']),
      a: 15, r: [2, 2, 0, 1, 0], ex: 'Dreimal ★ muss wieder auf die Ziffer ★ enden – das gilt nur für 0 und 5. Mit ★ = 0 wäre auch ● = 0: Dann hätten zwei verschiedene Zeichen dieselbe Ziffer, und 00 ist keine zweistellige Zahl. Also 5 + 5 + 5 = 15.' },
    { id: 'z2c-hundertertafel-plus', fam: 'hundertertafel', cat: 'Zahlen', type: 'number',
      q: 'Aus der Hundertertafel (1 bis 100, zehn Zahlen pro Zeile) wird ein Plus aus fünf Feldern ausgeschnitten. In der Mitte steht 56. Wie groß ist die Summe aller fünf Zahlen?',
      svg: (() => {
        let s = '';
        [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2]].forEach(([c, r]) => {
          s += `<rect class="cell" x="${4 + c * 52}" y="${4 + r * 52}" width="48" height="48" rx="4"/>`;
          if (c === 1 && r === 1) s += T(4 + 52 + 24, 4 + 52 + 31, 56, 20);
        });
        return svg('0 0 164 164', s);
      })(),
      a: 280, r: [2, 1, 0, 1, 0], ex: 'Oben 46, unten 66, links 55, rechts 57. Je zwei gegenüberliegende Zahlen ergeben zusammen 112 = 2 × 56, insgesamt also 5 × 56 = 280.' },
    { id: 'z2c-segmente-umschalten', fam: 'segment-umschalten', cat: 'Zahlen', type: 'number',
      q: 'Die Anzeige springt von 19 auf 20. Wie viele Striche ändern sich dabei – gehen also an oder aus?',
      svg: svg('0 0 300 100', display(6, 14, '19') + `<line class="hand" x1="122" y1="50" x2="170" y2="50" stroke-width="4"/><polygon class="accent" points="178,50 166,42 166,58"/>` + display(190, 14, '20')),
      a: 7, r: [2, 1, 0, 2, 0], ex: 'Von 1 auf 2 gehen 4 Striche an und einer aus (5 Änderungen). Von 9 auf 0 geht der mittlere aus und unten links einer an (2). Zusammen 7.' },
    { id: 'z2c-symbolgitter', fam: 'symbolgitter-summen', cat: 'Zahlen', type: 'number',
      q: 'Jede Form steht für eine Zahl. Am Rand stehen die Summen der Zeilen und Spalten. Welche Zahl gehört an die Stelle des Fragezeichens?',
      svg: (() => {
        const G = [['o', 'o', 't'], ['s', 't', 't'], ['o', 's', 's']];
        const rs = [10, 11, '?'], cs = [15, 13, 11];
        let s = '';
        G.forEach((row, r) => row.forEach((k, c) => {
          s += `<rect class="ln" x="${6 + c * 52}" y="${6 + r * 52}" width="52" height="52" opacity="0.35"/>`;
          s += sym(k, 32 + c * 52, 32 + r * 52);
        }));
        rs.forEach((v, r) => { s += T(190, 39 + r * 52, v, 20); });
        cs.forEach((v, c) => { s += T(32 + c * 52, 190, v, 20); });
        return svg('0 0 220 200', s);
      })(),
      a: 18, r: [2, 1, 0, 2, 0], ex: 'Alle Zeilen zusammen ergeben dasselbe wie alle Spalten: 15 + 13 + 11 = 39, also ? = 39 − 10 − 11 = 18. (Kreis 4, Dreieck 2, Quadrat 7.)' },
    { id: 'z2c-jahr-verschiedene-ziffern', fam: 'jahr-verschiedene-ziffern', cat: 'Zahlen', type: 'number',
      q: 'In der Jahreszahl 2026 kommt die 2 doppelt vor. Welches ist das nächste Jahr nach 2026, in dem alle vier Ziffern verschieden sind?',
      a: 2031, r: [2, 1, 1, 1, 0], ex: '2027, 2028 und 2029 haben noch zwei Zweien, 2030 hat zwei Nullen. 2031 hat die vier verschiedenen Ziffern 2, 0, 3 und 1.' },
    { id: 'z2c-zifferblatt-ziffern', fam: 'book-digits', cat: 'Zahlen', type: 'number',
      q: 'Auf einem Zifferblatt stehen die Zahlen 1 bis 12. Wie viele <b>Ziffern</b> sind das insgesamt?',
      a: 15, r: [1, 1, 2, 1, 0], ex: '1 bis 9 haben je eine Ziffer (9), 10, 11 und 12 je zwei (6). Zusammen 15 Ziffern, nicht 12.' },
    { id: 'z2c-zahlenstrahl', fam: 'zahlenstrahl-ablesen', cat: 'Zahlen', type: 'number',
      q: 'Auf diesem Zahlenstrahl haben alle Striche denselben Abstand. Auf welche Zahl zeigt der Pfeil?',
      svg: (() => {
        let s = '<line class="ln" x1="10" y1="64" x2="270" y2="64"/>';
        for (let i = 0; i <= 10; i++) s += `<line class="ln" x1="${20 + i * 24}" y1="54" x2="${20 + i * 24}" y2="74"/>`;
        s += T(68, 96, 40, 17) + T(164, 96, 60, 17);
        s += `<line class="hand" x1="236" y1="26" x2="236" y2="44" stroke-width="4"/><polygon class="accent" points="236,52 228,40 244,40"/>` + T(236, 20, '?', 18);
        return svg('0 0 280 106', s);
      })(),
      a: 75, r: [2, 1, 1, 1, 0], ex: 'Von 40 bis 60 sind es vier Abstände, ein Abstand ist also 5 (nicht 10). Der Pfeil steht drei Striche rechts von 60: 60 + 3 × 5 = 75.' },

    // ===== schwer =====
    { id: 'z2c-tacho-palindrom', fam: 'tacho-palindrom', cat: 'Zahlen', type: 'number',
      q: 'Der Kilometerzähler eines Autos zeigt 39993 – vorwärts und rückwärts gelesen dieselbe Zahl. Nach wie vielen weiteren Kilometern zeigt er zum ersten Mal wieder eine solche Zahl?',
      a: 11, r: [2, 1, 2, 1, 0], ex: 'Die nächste Zahl, die rückwärts gleich bleibt, ist 40004. 40004 − 39993 = 11 Kilometer.' },
    { id: 'z2c-sechzehn-siebzehn', fam: 'zahlwort-schreibweise', cat: 'Zahlen', type: 'number',
      q: 'Schreibe die Zahlen 16 und 17 in richtiger Rechtschreibung als Wörter aus. Wie viele Buchstaben haben beide Wörter zusammen?',
      a: 16, r: [2, 1, 2, 1, 1], ex: 'Es heißt „sechzehn“ (ohne s in der Mitte) und „siebzehn“ (ohne en) – je 8 Buchstaben, zusammen 16.' },
    { id: 'z2c-zahlenschloss', fam: 'zahlenschloss-klicks', cat: 'Zahlen', type: 'number',
      q: 'Ein Schloss hat vier Rädchen mit den Ziffern 0 bis 9 im Kreis. Ein Klick dreht ein Rädchen um eine Ziffer vor oder zurück. Es zeigt 0000. Wie viele Klicks brauchst du mindestens für 9182?',
      a: 6, r: [2, 2, 2, 1, 0], ex: 'Rückwärts ist die 9 nur einen Klick von der 0 entfernt, die 8 zwei. Also 1 + 1 + 2 + 2 = 6 Klicks statt 9 + 1 + 8 + 2 = 20.' },
    { id: 'z2c-roemisch-laengstes-jahr', fam: 'roemisch-laengste', cat: 'Zahlen', type: 'number',
      q: 'Welches Jahr von 1000 bis 2026 hat in der üblichen römischen Schreibweise (z. B. 1990 = MCMXC) die meisten Zeichen?',
      a: 1888, r: [2, 2, 1, 2, 1], ex: 'Jede Stelle wird bei der 8 am längsten: VIII, LXXX und DCCC haben je 4 Zeichen. 1888 = MDCCCLXXXVIII mit 13 Zeichen.' },
    { id: 'z2c-segment-spiegel', fam: 'segment-spiegel', cat: 'Zahlen', type: 'number',
      q: 'Du hältst diese Digitalanzeige vor einen Spiegel (gestrichelte Linie). Welche Zahl liest du im Spiegelbild?',
      svg: svg('0 0 260 100', display(6, 14, '2508', 14) + `<line class="ln" x1="236" y1="4" x2="236" y2="96" stroke-dasharray="6 6"/>`),
      a: 8025, r: [2, 2, 1, 2, 0], ex: 'Im Spiegel kehrt sich die Reihenfolge um, und jede Ziffer wird seitenverkehrt: Aus der 2 wird eine 5, aus der 5 eine 2, 0 und 8 bleiben. 2508 wird so zu 8025.' },
    { id: 'z2c-ziffern-legen', fam: 'ziffern-anordnen', cat: 'Zahlen', type: 'number',
      q: 'Du hast vier Ziffernkärtchen: 2, 0, 2 und 6. Wie viele verschiedene vierstellige Zahlen kannst du damit legen, wenn du jedes Kärtchen benutzt? Eine Zahl darf nicht mit 0 beginnen.',
      a: 9, r: [2, 1, 2, 2, 0], ex: 'Vorne die 6: 6022, 6202, 6220. Vorne eine 2: 2026, 2062, 2206, 2260, 2602, 2620. Zusammen 9 – die beiden Zweien sind gleich.' },
    { id: 'z2c-buchstaben-ziffern', fam: 'symbol-ziffern', cat: 'Zahlen', type: 'number',
      q: 'Jeder Buchstabe steht für eine Ziffer, verschiedene Buchstaben für verschiedene Ziffern. Keine Zahl beginnt mit 0. Welche Zahl ist CBC?' + eq(['AA + BB = CBC']),
      a: 121, r: [2, 2, 1, 2, 0], ex: 'Zwei zweistellige Zahlen ergeben weniger als 200, also C = 1. Aus 11 × A + 11 × B = 101 + 10 × B wird 11 × A + B = 101. Da B höchstens 9 ist, muss A = 9 sein, also B = 2. Probe: 99 + 22 = 121.' },

    // ===== sehr schwer =====
    { id: 'z2c-roemisch-palindrom', fam: 'roemisch-palindrom', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([1, 2, 3, 5, 10, 19, 20, 30, '?']),
      a: 50, r: [2, 4, 1, 2, 1], ex: 'Zahlen, deren römische Schreibweise rückwärts gelesen gleich bleibt: I, II, III, V, X, XIX, XX, XXX – und als Nächstes L = 50.' },
    { id: 'z2c-zahlwort-kette', fam: 'zahlwort-kette', cat: 'Zahlen', type: 'number',
      q: 'Welche Zahl kommt als Nächstes?' + seq([777, 29, 14, 8, 4, '?']),
      a: 4, r: [2, 4, 3, 1, 0], ex: 'Jede Zahl gibt an, wie viele Buchstaben das Zahlwort davor hat: siebenhundertsiebenundsiebzig (29), neunundzwanzig (14), vierzehn (8), acht (4) – und „vier“ hat wieder 4.' },
    { id: 'z2c-tastenfeld-vertauscht', fam: 'tastenfeld-vertauscht', cat: 'Zahlen', type: 'number',
      q: 'Lena kennt ihren Code 1478 nur als Fingerbewegung auf dem Tastenfeld eines Telefons. Sie tippt genau dieselbe Bewegung auf einem Taschenrechner. Welche Zahl erscheint auf dem Rechner?',
      a: 7412, r: [2, 3, 2, 1, 1], ex: 'Beim Telefon ist 1 2 3 die oberste Reihe, beim Taschenrechner 7 8 9. Oben links ist also die 7 statt der 1: Aus 1, 4, 7, 8 wird 7, 4, 1, 2.' },
    { id: 'z2c-mauer-maximum', fam: 'number-wall', cat: 'Zahlen', type: 'number',
      q: 'In dieser Zahlenmauer ist jeder Stein die Summe der beiden darunter. Unten kommen die Zahlen 1 bis 5 in beliebiger Reihenfolge hinein. Welche Zahl kann oben höchstens stehen?',
      svg: wall([['', '', '', '', ''], ['', '', '', ''], ['', '', ''], ['', ''], ['']], 46, 30),
      a: 61, r: [3, 3, 1, 2, 0], ex: 'Die unteren Steine zählen von links nach rechts 1-, 4-, 6-, 4- und 1-mal zur Spitze. Die 5 gehört in die Mitte, 4 und 3 daneben: 6 × 5 + 4 × 4 + 4 × 3 + 2 + 1 = 61.' },
    { id: 'z2c-ziffern-produkt', fam: 'ziffern-produkt-maximum', cat: 'Zahlen', type: 'number',
      q: 'Setze die Ziffern 1, 2, 3, 4 und 5 – jede genau einmal – in die Kästchen ein. Wie groß kann das Ergebnis höchstens werden?' + eq(['□□□ × □□']),
      a: 22412, r: [3, 2, 2, 2, 0], ex: 'Die beiden größten Ziffern gehören nach vorn, aber auf beide Zahlen verteilt: 431 × 52 = 22412. Knapp dahinter liegt 521 × 43 = 22403, und 543 × 21 ergibt nur 11403.' },
    { id: 'z2c-groesste-quersumme-10', fam: 'groesste-zahl-quersumme', cat: 'Zahlen', type: 'number',
      q: 'Gesucht ist die größte Zahl, deren Ziffern alle verschieden sind und zusammen genau 10 ergeben. Welche Zahl ist es?',
      a: 43210, r: [3, 2, 2, 2, 0], ex: 'Mehr Stellen schlagen große Ziffern. Sechs verschiedene Ziffern ergeben schon mindestens 0 + 1 + 2 + 3 + 4 + 5 = 15 – zu viel. Fünf ergeben mindestens 0 + 1 + 2 + 3 + 4 = 10 – genau passend. Absteigend sortiert: 43210 (nicht 910).' },
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

// ---- zeit2a.js ----
(function () {
  const { svg } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // Leeres Monatsblatt: Kopfzeile Mo–So, sechs Wochenzeilen.
  const kalenderblatt = (() => {
    const tage = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
    let s = '';
    tage.forEach((t, i) => { s += `<text class="tx" x="${26 + i * 38}" y="24" text-anchor="middle" font-size="15">${t}</text>`; });
    for (let r = 0; r < 6; r++) for (let c = 0; c < 7; c++) s += `<rect class="cell" x="${9 + c * 38}" y="${36 + r * 32}" width="34" height="28" rx="3"/>`;
    return svg('0 0 280 232', s);
  })();

  QUIZ_ADD([
    // ===== leicht =====
    { id: 't2a-mind-30-tage', fam: 'monate-mindestens-30', cat: 'Zeit', type: 'number',
      q: 'Wie viele Monate eines Jahres haben mindestens 30 Tage?',
      a: 11, r: [1, 0, 1, 0, 0], ex: 'Alle Monate außer dem Februar haben 30 oder 31 Tage – das sind 11.' },
    { id: 't2a-nach-30-april', fam: 'datum-morgen-monatsende', cat: 'Zeit', type: 'choice',
      q: 'Heute ist der 30. April. Welches Datum ist morgen?',
      opts: ['1. Mai', '31. April', '1. April', '30. Mai'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Der April hat nur 30 Tage, auf den 30. April folgt der 1. Mai.' },
    { id: 't2a-quartal-ende', fam: 'quartal-grenze', cat: 'Zeit', type: 'choice',
      q: 'Ein Kalenderjahr wird in vier Quartale zu je drei Monaten eingeteilt, das erste beginnt im Januar. Mit welchem Monat endet das dritte Quartal?',
      opts: ['September', 'März', 'Juni', 'Juli'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Drei Quartale sind 3 × 3 = 9 Monate: Januar bis September. Das dritte Quartal umfasst Juli, August und September.' },
    { id: 't2a-monat-mitte', fam: 'monat-mitte', cat: 'Zeit', type: 'text',
      q: 'Welcher Monat liegt im Kalender eines Jahres genau in der Mitte zwischen März und November?',
      a: 'JULI', r: [1, 0, 0, 1, 0], ex: 'März ist der 3., November der 11. Monat. Genau dazwischen liegt der 7. Monat: Juli.' },
    { id: 't2a-tag-60', fam: 'tag-des-jahres', cat: 'Zeit', type: 'text',
      q: 'In welchem Monat liegt der 60. Tag eines Jahres ohne 29. Februar?',
      a: 'MÄRZ', accept: ['MAERZ'], r: [1, 0, 1, 1, 0],
      ex: 'Januar und Februar haben zusammen 31 + 28 = 59 Tage. Der 60. Tag ist also der 1. März.' },
    { id: 't2a-mo-fr-dazwischen', fam: 'einschliesslich-zaehlen', cat: 'Zeit', type: 'number',
      q: 'Wie viele Tage liegen zwischen einem Montag und dem Freitag derselben Woche, wenn man Montag und Freitag selbst nicht mitzählt?',
      a: 3, r: [1, 0, 1, 0, 0], ex: 'Dazwischen liegen nur Dienstag, Mittwoch und Donnerstag – also 3 Tage, nicht 4.' },

    // ===== mittel =====
    { id: 't2a-kw-zehn-tage', fam: 'kalenderwoche-plus-tage', cat: 'Zeit', type: 'number',
      q: 'Kalenderwochen laufen von Montag bis Sonntag. Heute ist Mittwoch in der Kalenderwoche 20. In welcher Kalenderwoche liegt der Tag in genau 10 Tagen?',
      a: 21, r: [2, 0, 1, 1, 0],
      ex: 'In 5 Tagen ist Montag, der Beginn von KW 21. Der Tag in 10 Tagen ist der Samstag derselben Woche – also KW 21.' },
    { id: 't2a-urlaub-naechte', fam: 'urlaub-naechte', cat: 'Zeit', type: 'number',
      q: 'Ihr kommt am 1. August im Hotel an und reist am 16. August wieder ab. Wie viele Nächte übernachtet ihr dort?',
      a: 15, r: [1, 0, 2, 1, 0], ex: 'Die erste Nacht ist die vom 1. auf den 2. August, die letzte die vom 15. auf den 16.: 16 − 1 = 15 Nächte.' },
    { id: 't2a-woche-schalttag', fam: 'woche-ueber-schalttag', cat: 'Zeit', type: 'choice',
      q: 'Welches Datum ist genau eine Woche nach dem 25. Februar 2028?',
      opts: ['3. März', '4. März', '2. März', '1. März'], a: 0, r: [1, 0, 2, 1, 1],
      ex: '2028 ist ein Schaltjahr: 26., 27., 28., 29. Februar, 1., 2., 3. März – der siebte Tag ist der 3. März.' },
    { id: 't2a-wochenendtage', fam: 'wochenendtage-jahr', cat: 'Zeit', type: 'number',
      q: 'Ein Jahr mit 365 Tagen beginnt an einem Samstag. Wie viele Samstage und Sonntage hat es zusammen?',
      a: 105, r: [2, 1, 2, 1, 0],
      ex: 'Die ersten 364 Tage sind 52 volle Wochen mit je einem Samstag und einem Sonntag. Der 365. Tag ist wieder ein Samstag: 53 + 52 = 105.' },
    { id: 't2a-countdown-100h', fam: 'wochentag-plus-n', cat: 'Zeit', type: 'choice',
      q: 'Ein Countdown über genau 100 Stunden startet am Montag um 22:00 Uhr. An welchem Wochentag läuft er ab?',
      opts: ['Samstag', 'Freitag', 'Donnerstag', 'Sonntag'], a: 0, r: [2, 1, 2, 1, 0],
      ex: '100 Stunden sind 4 Tage und 4 Stunden. Vier Tage nach Montag 22:00 Uhr ist Freitag 22:00 Uhr, die restlichen 4 Stunden reichen bis Samstag 2:00 Uhr. 2:00 Uhr nachts gehört nach Datum schon zum Samstag.' },
    { id: 't2a-schaltjahre-400', fam: 'schaltjahre-400', cat: 'Zeit', type: 'number',
      q: 'Schaltjahre sind durch 4 teilbar – volle Jahrhunderte (wie 1900) aber nur, wenn sie auch durch 400 teilbar sind. Wie viele Schaltjahre gibt es in 400 aufeinanderfolgenden Jahren?',
      a: 97, r: [2, 0, 2, 1, 0],
      ex: '100 der 400 Jahre sind durch 4 teilbar. Die 4 vollen Jahrhunderte fallen weg, eines davon (durch 400 teilbar) zählt wieder: 100 − 4 + 1 = 97.' },

    // ===== schwer =====
    { id: 't2a-kw-vierter', fam: 'kalenderwoche-vierter-januar', cat: 'Zeit', type: 'number',
      q: 'Die Kalenderwoche 1 ist die erste Woche (Montag bis Sonntag), die mindestens vier Tage des neuen Jahres enthält. Welcher Tag im Januar (Zahl) liegt in jedem Jahr in der KW 1?',
      a: 4, r: [2, 3, 1, 1, 0],
      ex: 'KW 1 enthält mindestens vier Januartage, ihr Montag liegt also zwischen dem 29. Dezember und dem 4. Januar – der 4. Januar ist immer dabei. Der 1. bis 3. können noch zur alten Woche gehören, und ab dem 5. kann schon KW 2 sein.' },
    { id: 't2a-drei-monate-min', fam: 'drei-monate-minimum', cat: 'Zeit', type: 'number',
      q: 'In einem Jahr ohne 29. Februar wählst du drei direkt aufeinanderfolgende Monate, die zusammen möglichst wenige Tage haben. Wie viele Tage sind das?',
      a: 89, r: [2, 1, 2, 2, 0],
      ex: 'Am kürzesten sind Februar, März und April: 28 + 31 + 30 = 89 Tage. Januar bis März hat dagegen 90.' },
    { id: 't2a-sechs-zeilen', fam: 'kalenderblatt-sechs-zeilen', cat: 'Zeit', type: 'number',
      q: 'Ein Kalenderblatt zeigt einen Monat: eine Spalte je Wochentag, jede Woche in einer eigenen Zeile. Dieses Blatt braucht sechs Zeilen. Wie viele Tage hat der Monat mindestens?',
      svg: kalenderblatt, a: 30, r: [2, 2, 1, 1, 0],
      ex: 'Am wenigsten Tage braucht es, wenn der 1. ein Sonntag ist: Zeile 1 enthält nur den 1., die Zeilen 2 bis 5 den 2. bis 29. – erst der 30. eröffnet die sechste Zeile.' },
    { id: 't2a-jahresmitte', fam: 'jahresmitte', cat: 'Zeit', type: 'number',
      q: 'In einem Jahr mit 365 Tagen gibt es genau einen Tag, vor dem gleich viele Tage des Jahres liegen wie nach ihm. Auf den wievielten Juli fällt er?',
      a: 2, r: [2, 1, 2, 2, 0],
      ex: 'Es ist der 183. Tag – mit 182 Tagen davor und 182 danach. Januar bis Juni haben 181 Tage, also ist es der 2. Juli.' },
    { id: 't2a-kalender-14', fam: 'kalender-anzahl', cat: 'Zeit', type: 'number',
      q: 'Ein schlichter Jahreskalender ohne Jahreszahl und ohne Feiertage zeigt nur, auf welchen Wochentag jedes Datum fällt. Wie viele verschiedene solcher Kalender braucht man mindestens, damit für jedes Jahr ein passender dabei ist?',
      a: 14, r: [2, 1, 2, 1, 0],
      ex: 'Ein solcher Kalender ist festgelegt durch den Wochentag des 1. Januar (7 Möglichkeiten) und dadurch, ob es einen 29. Februar gibt (2 Möglichkeiten). Alle 7 × 2 = 14 Kombinationen kommen vor.' },
    { id: 't2a-fuenf-sonntage', fam: 'monate-fuenf-sonntage', cat: 'Zeit', type: 'number',
      q: 'Wie viele Monate mit fünf Sonntagen hat jedes Kalenderjahr mindestens?',
      a: 4, r: [2, 2, 2, 1, 0],
      ex: 'Jedes Jahr hat mindestens 52 Sonntage, jeder Monat mindestens 4 und höchstens 5. Zwölf Monate mit je 4 Sonntagen ergeben nur 48 – die übrigen mindestens 4 Sonntage sind jeweils der fünfte eines anderen Monats.' },

    // ===== sehr schwer =====
    { id: 't2a-kw53', fam: 'kalenderwoche-53', cat: 'Zeit', type: 'number',
      q: 'Die Kalenderwoche 1 ist die erste Woche (Montag bis Sonntag), die mindestens vier Tage des neuen Jahres enthält. Der 1. Januar ist ein Freitag. In welcher Kalenderwoche liegt er?',
      a: 53, r: [3, 3, 2, 1, 0],
      ex: 'Seine Woche hat nur drei neue Tage (Freitag bis Sonntag), gehört also als letzte Woche zum alten Jahr. Dessen KW 1 begann schon am 29. oder 30. Dezember davor, und bis zu diesem Sonntag sind es 371 Tage = 53 Wochen.' },
    { id: 't2a-zwei-jahre-sonntage', fam: 'zwei-jahre-sonntage', cat: 'Zeit', type: 'number',
      q: 'Wie viele Sonntage können zwei direkt aufeinanderfolgende Kalenderjahre zusammen höchstens haben?',
      a: 105, r: [2, 3, 3, 1, 0],
      ex: 'Zwei Jahre haben höchstens 731 Tage = 104 Wochen und 3 Tage, also höchstens 105 Sonntage. Das wird auch erreicht, etwa 2017 (53 Sonntage) und 2018 (52).' },
    { id: 't2a-neujahr-2100', fam: 'wochentag-jahrhundert', cat: 'Zeit', type: 'text',
      q: 'Der 1. Januar 2000 war ein Samstag. Auf welchen Wochentag fällt der 1. Januar 2100?',
      a: 'FREITAG', r: [3, 2, 2, 2, 1],
      ex: 'Von Neujahr zu Neujahr rückt der Wochentag einen Tag weiter, nach einem Schaltjahr zwei. 2000 bis 2096 sind 25 Schaltjahre (2000 zählt mit): 100 + 25 = 125 = 17 × 7 + 6, Samstag plus 6 Tage ist Freitag.' },
    { id: 't2a-schalttag-samstag', fam: 'schalttag-wochentag', cat: 'Zeit', type: 'number',
      q: 'Der 29. Februar 2020 war ein Samstag. In welchem Jahr fällt der 29. Februar das nächste Mal auf einen Samstag?',
      a: 2048, r: [3, 2, 2, 2, 0],
      ex: 'Von einem 29. Februar zum nächsten sind es 4 × 365 + 1 = 1461 Tage = 208 Wochen und 5 Tage. Erst nach 7 solchen Sprüngen (7 × 5 = 35 Tage = 5 Wochen) passt der Wochentag wieder: 2020 + 28 = 2048.' },
    { id: 't2a-mehr-dienstage', fam: 'wochentage-im-monat', cat: 'Zeit', type: 'text',
      q: 'Ein Monat hat mehr Dienstage als Mittwoche, aber mehr Sonntage als Samstage. Auf welchen Wochentag fällt der 1. dieses Monats?',
      a: 'SONNTAG', r: [3, 3, 1, 2, 0],
      ex: 'Die Wochentage, die fünfmal vorkommen, folgen direkt aufeinander, und der erste von ihnen ist der Wochentag des Monatsersten. Sonntag ist dabei, Samstag nicht – die Reihe beginnt also am Sonntag; Dienstag ist dabei, Mittwoch nicht – sie endet am Dienstag. Die Reihe ist Sonntag, Montag, Dienstag (ein Monat mit 31 Tagen), der 1. ist ein Sonntag.' },
    { id: 't2a-februar-fuenf-freitage', fam: 'februar-fuenf-freitage', cat: 'Zeit', type: 'text',
      q: 'In einem Jahr hat der Februar fünf Freitage. Auf welchen Wochentag fällt der 31. Dezember dieses Jahres?',
      a: 'MITTWOCH', r: [3, 2, 2, 2, 0],
      ex: 'Fünf Freitage gibt es nur in einem Februar mit 29 Tagen, der an einem Freitag beginnt – dann ist auch der 29. Februar ein Freitag. Bis zum 31. Dezember sind es 306 Tage = 43 Wochen und 5 Tage: Freitag plus 5 ist Mittwoch.' },
  ]);
})();

// ---- zeit2b.js ----
// Zeit – Paket 2b: Uhren und Uhrzeiten (Zeigerwinkel, Digitalziffern, Zeitzonen, Dauer, Stoppuhr, Spiegeluhr)
(function () {
  const { svg, clock } = (typeof window !== 'undefined' ? window : globalThis).QSVG;

  // ---------- kleine Bausteine ----------
  const GOLD = '#ffc940';
  const f1 = (v) => Math.round(v * 10) / 10;
  const tx = (x, y, t, size = 16, weight = 700) => `<text class="tx" x="${f1(x)}" y="${f1(y)}" text-anchor="middle" font-size="${size}" font-weight="${weight}">${t}</text>`;

  // Sieben-Segment-Ziffer (Segmente a–g); `drop` = Segmente, die nie leuchten (defekt)
  const SEG = { 0: 'abcdef', 1: 'bc', 2: 'abged', 3: 'abgcd', 4: 'fgbc', 5: 'afgcd', 6: 'afgedc', 7: 'abc', 8: 'abcdefg', 9: 'abcdfg' };
  function segDigit(x, y, w, h, d, drop = '') {
    const g = 4, hh = h / 2;
    const S = {
      a: [x + g, y, x + w - g, y], b: [x + w, y + g, x + w, y + hh - g], c: [x + w, y + hh + g, x + w, y + h - g],
      d: [x + g, y + h, x + w - g, y + h], e: [x, y + hh + g, x, y + h - g], f: [x, y + g, x, y + hh - g], g: [x + g, y + hh, x + w - g, y + hh],
    };
    let s = '';
    for (const k of 'abcdefg') {
      const on = SEG[d].includes(k) && !drop.includes(k);
      const [x1, y1, x2, y2] = S[k];
      s += `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2)}" y2="${f1(y2)}" stroke="${on ? GOLD : 'rgba(255,255,255,.08)'}" stroke-width="6" stroke-linecap="round"/>`;
    }
    return s;
  }
  // Digitaluhr hh:mm im Kasten 300 × 140
  function digitalBody(digits, drop = '') {
    let s = `<rect x="10" y="14" width="280" height="112" rx="14" fill="#05071a" stroke="#3b3f74" stroke-width="2"/>`;
    const X = [32, 92, 172, 232];
    digits.forEach((d, i) => { s += segDigit(X[i], 32, 38, 76, d, drop); });
    s += `<circle cx="150" cy="56" r="4.5" fill="${GOLD}"/><circle cx="150" cy="86" r="4.5" fill="${GOLD}"/>`;
    return s;
  }

  // H: Digitaluhr ohne Mittelstrich zeigt scheinbar 10:00
  function svgOhneMittelstrich() {
    return svg('0 0 300 140', digitalBody([1, 0, 0, 0], 'g'));
  }
  // S: Digitaluhr 15:20 im Spiegel (links-rechts vertauscht)
  function svgSpiegelDigital() {
    return svg('0 0 300 140', `<g transform="translate(300,0) scale(-1,1)">${digitalBody([1, 5, 2, 0])}</g>`);
  }

  QUIZ_ADD([
    // ===== leicht =====
    { id: 't2b-gegenueber-zeiger', fam: 'zeiger-gestreckt', cat: 'Zeit', type: 'choice',
      q: 'Zu welcher vollen Stunde zeigen Stunden- und Minutenzeiger genau in entgegengesetzte Richtungen?',
      opts: ['6 Uhr', '12 Uhr', '3 Uhr', '9 Uhr'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Um 6 Uhr steht der Minutenzeiger auf der 12 und der Stundenzeiger auf der 6 – genau gegenüber.' },
    { id: 't2b-stoppuhr-0059', fam: 'stoppuhr-uebertrag', cat: 'Zeit', type: 'choice',
      q: 'Eine Stoppuhr zeigt <b>0:59</b> (Minuten:Sekunden). Was zeigt sie eine Sekunde später?',
      opts: ['1:00', '0:60', '1:59', '0:100'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Nach 59 Sekunden ist eine volle Minute erreicht: Die Sekunden springen auf 00, die Minute auf 1 – also 1:00.' },
    { id: 't2b-minutenzeiger-runden', fam: 'zeiger-umdrehungen', cat: 'Zeit', type: 'number',
      q: 'Wie oft dreht sich der Minutenzeiger einer Uhr an einem ganzen Tag (24 Stunden) einmal ganz herum?',
      a: 24, r: [1, 0, 1, 0, 0],
      ex: 'Der Minutenzeiger schafft jede Stunde genau eine Runde, in 24 Stunden also 24. Der Stundenzeiger dagegen dreht sich nur zweimal.' },
    { id: 't2b-mitte-zeit', fam: 'uhrzeit-mitte', cat: 'Zeit', type: 'choice',
      q: 'Welche Uhrzeit liegt genau in der Mitte zwischen 10:00 Uhr und 13:00 Uhr?',
      opts: ['11:30 Uhr', '11:00 Uhr', '12:00 Uhr', '11:50 Uhr'], a: 0, r: [1, 0, 1, 1, 0],
      ex: 'Dazwischen liegen 3 Stunden, die Hälfte davon ist 1 Stunde 30 Minuten: 10:00 + 1:30 = 11:30 Uhr.' },
    { id: 't2b-viertel-nach-acht', fam: 'abends-24h', cat: 'Zeit', type: 'choice',
      q: 'Was zeigt eine Digitaluhr mit 24-Stunden-Anzeige um Viertel nach acht am Abend?',
      opts: ['20:15', '08:15', '20:45', '19:45'], a: 0, r: [1, 0, 1, 0, 0],
      ex: 'Am Abend zählt man 12 Stunden dazu: 8 + 12 = 20. Viertel nach heißt 15 Minuten – also 20:15.' },

    // ===== mittel =====
    { id: 't2b-nachtschicht', fam: 'dauer-ueber-mitternacht', cat: 'Zeit', type: 'number',
      q: 'Eine Nachtschicht dauert von 21:30 Uhr bis 6:15 Uhr am nächsten Morgen. Wie viele Minuten sind das?',
      a: 525, r: [2, 0, 1, 2, 0],
      ex: 'Bis Mitternacht sind es 2 Stunden 30 Minuten, danach 6 Stunden 15 Minuten: zusammen 8 Stunden 45 Minuten = 480 + 45 = 525 Minuten.' },
    { id: 't2b-tokio', fam: 'zeitzone-datumswechsel', cat: 'Zeit', type: 'choice',
      q: 'Im Januar ist es in Tokio 8 Stunden später als in Berlin. Du rufst am Montag um 20:00 Uhr Berliner Zeit in Tokio an. Welcher Tag und welche Uhrzeit ist es dort?',
      opts: ['Dienstag, 4:00 Uhr', 'Montag, 12:00 Uhr', 'Dienstag, 12:00 Uhr', 'Montag, 4:00 Uhr'], a: 0, r: [2, 0, 1, 1, 0],
      ex: '20:00 Uhr plus 8 Stunden ergibt 28 Uhr – das ist 4:00 Uhr am nächsten Tag, also Dienstag.' },
    { id: 't2b-stundenzeiger-grad', fam: 'stundenzeiger-grad', cat: 'Zeit', type: 'number',
      q: 'Um wie viel Grad dreht sich der <b>Stundenzeiger</b> von 9:00 Uhr bis 9:40 Uhr weiter?',
      a: 20, r: [2, 1, 1, 1, 1],
      ex: 'Für 30° (von einer Zahl zur nächsten) braucht der Stundenzeiger eine ganze Stunde. 40 Minuten sind zwei Drittel davon: 20°.' },
    { id: 't2b-stunde-gleich-minute', fam: 'digitaluhr-stunde-gleich-minute', cat: 'Zeit', type: 'number',
      q: 'Eine Digitaluhr zeigt 00:00 bis 23:59. Wie oft am Tag sind Stundenzahl und Minutenzahl gleich (wie bei 07:07)?',
      a: 24, r: [1, 1, 1, 1, 0],
      ex: 'Jede der 24 Stunden von 00 bis 23 hat genau eine passende Minute: 00:00, 01:01 … 23:23 – das sind 24.' },
    { id: 't2b-zwoelf-bis-eins', fam: 'zeiger-strecke-sekunden', cat: 'Zeit', type: 'number',
      q: 'Wie viele Sekunden braucht der Minutenzeiger, um von der 12 bis zur 1 zu wandern?',
      a: 300, r: [2, 0, 1, 1, 0],
      ex: 'Von der 12 zur 1 sind es für den Minutenzeiger 5 Minuten, also 5 × 60 = 300 Sekunden.' },
    { id: 't2b-kuechenwecker', fam: 'countdown-restzeit', cat: 'Zeit', type: 'number',
      q: 'Ein Küchenwecker wird auf 15 Minuten gestellt und zählt rückwärts. Jetzt zeigt er <b>6:20</b> (Minuten:Sekunden). Wie viele Sekunden sind schon vergangen?',
      a: 520, r: [2, 0, 1, 2, 0],
      ex: '15:00 − 6:20 = 8:40 – vergangen sind 8 Minuten 40 Sekunden, also 8 × 60 + 40 = 520 Sekunden.' },

    // ===== schwer =====
    { id: 't2b-sommerzeit-schlaf', fam: 'zeitumstellung', cat: 'Zeit', type: 'number',
      q: 'In der Nacht der Zeitumstellung im März wird die Uhr um 2:00 Uhr auf 3:00 Uhr vorgestellt. Du gehst um 22:00 Uhr ins Bett und stehst um 7:00 Uhr auf. Wie viele Stunden lagst du im Bett?',
      a: 8, r: [2, 1, 2, 1, 0],
      ex: 'Von 22 bis 7 Uhr wären es sonst 9 Stunden. Die Stunde von 2 bis 3 Uhr fällt in dieser Nacht aber weg: 8 Stunden.' },
    { id: 't2b-funkuhr-oktober', fam: 'zeitumstellung', cat: 'Zeit', type: 'number',
      q: 'Eine Funkuhr mit 24-Stunden-Anzeige (00:00 bis 23:59) stellt sich in einer Nacht im Oktober um 3:00 Uhr selbst auf 2:00 Uhr zurück. Wie viele Minuten lang zeigt sie an diesem Tag eine Uhrzeit an, die mit 02 beginnt?',
      a: 120, r: [2, 1, 2, 1, 0],
      ex: 'Die Uhr zeigt 02:00 bis 02:59, springt um 3 Uhr zurück auf 02:00 und zeigt diese Stunde noch einmal: 2 × 60 = 120 Minuten.' },
    { id: 't2b-mittelstrich', fam: 'digitaluhr-defektes-segment', cat: 'Zeit', type: 'number',
      q: 'Bei dieser Digitaluhr (00:00 bis 23:59) leuchtet in keiner Ziffer der waagrechte Mittelstrich – er ist kaputt. Wie viele verschiedene Uhrzeiten könnten es gerade wirklich sein?',
      svg: svgOhneMittelstrich(), a: 4, r: [2, 2, 1, 2, 0],
      ex: 'Ohne Mittelstrich sieht eine 8 genauso aus wie eine 0. Möglich sind 10:00, 10:08, 18:00 und 18:08 – eine 8 als Minutenzehner gibt es nicht.' },
    { id: 't2b-zehntel', fam: 'stoppuhr-zehntel', cat: 'Zeit', type: 'number',
      q: 'Bei einem Lauf zeigt die Stoppuhr für Anna <b>59,8</b> Sekunden, für Ben <b>1:00,2</b> (Minuten:Sekunden,Zehntel). Um wie viele Zehntelsekunden war Anna schneller?',
      a: 4, r: [2, 1, 2, 1, 0],
      ex: '1:00,2 sind 60,2 Sekunden. 60,2 − 59,8 = 0,4 Sekunden – Anna war also 4 Zehntelsekunden schneller.' },
    { id: 't2b-alle-ziffern', fam: 'digitaluhr-alle-wechseln', cat: 'Zeit', type: 'number',
      q: 'Eine Digitaluhr zeigt 00:00 bis 23:59. Wie oft am Tag ändern sich beim Weiterspringen alle vier Ziffern gleichzeitig?',
      a: 3, r: [2, 1, 2, 2, 0],
      ex: 'Dazu müssen die Minuten von 59 auf 00 springen und beide Stundenziffern wechseln: 09:59 → 10:00, 19:59 → 20:00 und 23:59 → 00:00.' },

    // ===== sehr schwer =====
    { id: 't2b-spiegel-digital', fam: 'spiegel-digitaluhr', cat: 'Zeit', type: 'number',
      q: 'Du siehst eine Digitaluhr (00:00 bis 23:59) in einem Spiegel – so wie im Bild. Wie spät ist es wirklich? (Vier Ziffern ohne Doppelpunkt eingeben.)',
      svg: svgSpiegelDigital(), a: 1520, r: [2, 3, 2, 1, 0],
      ex: 'Im Spiegel ist die Reihenfolge umgedreht und jede Ziffer gespiegelt – eine gespiegelte 2 sieht aus wie eine 5 und umgekehrt, die 0 bleibt gleich, und die 1 rutscht auf die andere Seite ihres Feldes. Aus dem Spiegelbild „05:21“ wird so 15:20.' },
    { id: 't2b-rechte-winkel', fam: 'hands-overlap', cat: 'Zeit', type: 'number',
      q: 'Wie oft bilden Stunden- und Minutenzeiger einer Uhr an einem ganzen Tag (24 Stunden) genau einen rechten Winkel?',
      a: 44, r: [3, 3, 2, 2, 0],
      ex: 'Der Minutenzeiger überrundet den Stundenzeiger in 24 Stunden 22-mal. Zwischen zwei Überholungen stehen die Zeiger genau zweimal im rechten Winkel: 22 × 2 = 44.' },
    { id: 't2b-zeigerwecker', fam: 'zeigerwecker-12h', cat: 'Zeit', type: 'number',
      q: 'Du stellst einen einfachen Zeigerwecker (mit normalem 12-Stunden-Zifferblatt) um 18:00 Uhr auf 7 Uhr und schaltest den Alarm ein. Nach wie vielen Stunden klingelt er zum ersten Mal?',
      a: 1, r: [2, 3, 2, 1, 0],
      ex: 'Ein Zeigerwecker kennt kein Vormittag und Nachmittag: Er klingelt, sobald der Stundenzeiger die 7 erreicht – schon um 19:00 Uhr, also nach 1 Stunde.' },
    { id: 't2b-drei-zeiger', fam: 'drei-zeiger-deckung', cat: 'Zeit', type: 'number',
      q: 'Um 12:00 Uhr stehen Stunden-, Minuten- und Sekundenzeiger genau übereinander. Alle drei laufen gleichmäßig. Nach wie vielen Stunden stehen alle drei zum ersten Mal wieder genau übereinander?',
      a: 12, r: [2, 3, 3, 1, 0],
      ex: 'Stunden- und Minutenzeiger treffen sich etwa um 1:05:27, 2:10:55 … – doch der Sekundenzeiger steht dann jedes Mal woanders. Alle drei treffen sich erst um 12 Uhr wieder, nach 12 Stunden.' },
  ]);
})();

// ---- zeit2c.js ----
(function () {
  QUIZ_ADD([
    // ===== leicht =====
    { id: 't2c-arbeitstag-pause', fam: 'arbeitszeit-mit-pause', cat: 'Zeit', type: 'number',
      q: 'Nina arbeitet heute von 8:30 Uhr bis 17:00 Uhr und macht dazwischen eine halbe Stunde Mittagspause. Wie viele Stunden arbeitet sie?',
      a: 8, r: [1, 0, 0, 1, 0],
      ex: 'Von 8:30 Uhr bis 17:00 Uhr sind es 8½ Stunden. Ohne die halbe Stunde Pause bleiben 8 Stunden.' },
    { id: 't2c-wochenstunden', fam: 'wochenarbeitszeit', cat: 'Zeit', type: 'number',
      q: 'Jana arbeitet montags bis donnerstags je 8 Stunden und 45 Minuten, freitags nur 5 Stunden. Wie viele Stunden arbeitet sie in der ganzen Woche?',
      a: 40, r: [1, 0, 0, 2, 0],
      ex: 'Vier Tage zu je 8¾ Stunden ergeben 35 Stunden, dazu kommen 5 Stunden am Freitag: 40 Stunden.' },
    { id: 't2c-kerze-rest', fam: 'kerze-restbrenndauer', cat: 'Zeit', type: 'number',
      q: 'Eine Kerze brennt insgesamt 5 Stunden lang. Du zündest sie um 18:30 Uhr an und pustest sie um 20:45 Uhr aus. Wie viele Minuten kann sie danach noch brennen?',
      a: 165, r: [2, 0, 0, 1, 0],
      ex: 'Von 18:30 Uhr bis 20:45 Uhr hat sie 2 Stunden 15 Minuten = 135 Minuten gebrannt. Von 5 Stunden = 300 Minuten bleiben 300 − 135 = 165 Minuten.' },
    { id: 't2c-tram-warten', fam: 'abfahrt-minutentakt', cat: 'Zeit', type: 'number',
      q: 'Die Straßenbahn fährt jede Stunde zur Minute 10 und zur Minute 40 ab. Du kommst um 9:47 Uhr an die Haltestelle. Wie viele Minuten musst du auf die nächste Bahn warten?',
      a: 23, r: [1, 0, 0, 1, 0],
      ex: 'Die Bahn von 9:40 Uhr ist weg, die nächste fährt um 10:10 Uhr: 13 Minuten bis 10 Uhr plus 10 Minuten = 23 Minuten.' },
    { id: 't2c-pace', fam: 'pace-minuten-sekunden', cat: 'Zeit', type: 'number',
      q: 'Eine Läuferin braucht für jeden Kilometer genau 5 Minuten und 20 Sekunden. Wie viele Minuten braucht sie in diesem Tempo für 15 Kilometer?',
      a: 80, r: [2, 0, 1, 2, 0],
      ex: '15 × 5 Minuten = 75 Minuten, dazu 15 × 20 Sekunden = 300 Sekunden = 5 Minuten: zusammen 80 Minuten – nicht 78, denn 20 Sekunden sind ⅓ Minute, nicht 0,2.' },
    { id: 't2c-verspaetung', fam: 'verspaetung-aufholen', cat: 'Zeit', type: 'choice',
      q: 'Laut Fahrplan fährt dein Zug um 7:56 Uhr ab und kommt um 8:21 Uhr an. Heute fährt er 12 Minuten zu spät ab, holt unterwegs aber 5 Minuten auf. Wann kommt er an?',
      opts: ['8:28 Uhr', '8:33 Uhr', '8:16 Uhr', '8:38 Uhr'], a: 0, r: [2, 0, 0, 1, 0],
      ex: 'Bei der Ankunft bleiben 12 − 5 = 7 Minuten Verspätung: 8:21 Uhr + 7 Minuten = 8:28 Uhr.' },

    // ===== mittel =====
    { id: 't2c-ampel-gruen', fam: 'ampel-gruenanteil', cat: 'Zeit', type: 'number',
      q: 'Eine Fußgängerampel zeigt immer abwechselnd 60 Sekunden Rot und 30 Sekunden Grün. Wie viele Minuten ist sie in einer ganzen Stunde insgesamt grün?',
      a: 20, r: [2, 0, 1, 1, 0],
      ex: 'Ein Durchgang dauert 90 Sekunden, davon ist genau ein Drittel grün. Ein Drittel von 60 Minuten sind 20 Minuten.' },
    { id: 't2c-hoerbuch-tempo', fam: 'abspieltempo-ersparnis', cat: 'Zeit', type: 'number',
      q: 'Ein Hörbuch dauert bei normalem Tempo 6 Stunden. Du hörst es komplett mit 1,5-facher Geschwindigkeit. Wie viele Minuten sparst du dadurch?',
      a: 120, r: [2, 0, 2, 1, 0],
      ex: 'Mit 1,5-facher Geschwindigkeit dauert es 6 : 1,5 = 4 Stunden. Du sparst also 2 Stunden = 120 Minuten – nicht 180, denn 1,5-fach schneller heißt nicht halb so lang, sondern nur zwei Drittel der Zeit.' },
    { id: 't2c-familie-tochter', fam: 'age-sum-future', cat: 'Zeit', type: 'number',
      q: 'Vor 5 Jahren waren Vater, Mutter und Sohn zusammen 82 Jahre alt. Inzwischen ist eine Tochter dazugekommen, und heute sind alle vier zusammen 100 Jahre alt. Wie alt ist die Tochter?',
      a: 3, r: [2, 1, 1, 1, 0],
      ex: 'Vater, Mutter und Sohn sind je 5 Jahre älter geworden: 82 + 15 = 97. Für die Tochter bleiben 100 − 97 = 3 Jahre.' },
    { id: 't2c-spaetestens-los', fam: 'schlafenszeit', cat: 'Zeit', type: 'choice',
      q: 'Du musst um 9:00 Uhr im Büro sein: 8 Minuten zu Fuß zur Haltestelle, 23 Minuten Bahnfahrt, danach 12 Minuten zu Fuß. Die Bahn fährt immer zur Minute 05, 20, 35 und 50. Wann musst du spätestens zu Hause los?',
      opts: ['8:12 Uhr', '8:17 Uhr', '8:27 Uhr', '7:57 Uhr'], a: 0, r: [2, 0, 1, 2, 0],
      ex: 'Du musst spätestens um 8:48 Uhr aus der Bahn steigen, also spätestens um 8:25 Uhr abfahren – das ist die Bahn um 8:20 Uhr. Dafür musst du um 8:12 Uhr los.' },
    { id: 't2c-muelltonnen', fam: 'leerung-gemeinsam', cat: 'Zeit', type: 'number',
      q: 'Die Biotonne wird alle 14 Tage geleert, die Papiertonne alle 21 Tage – ohne Verschiebungen. Heute wurden beide geleert. In wie vielen Tagen werden sie das nächste Mal am selben Tag geleert?',
      a: 42, r: [2, 1, 1, 1, 0],
      ex: 'Gesucht ist die kleinste Zahl, die durch 14 und durch 21 teilbar ist: 42 = 3 × 14 = 2 × 21.' },
    { id: 't2c-zwei-kassen', fam: 'schlange-zwei-kassen', cat: 'Zeit', type: 'number',
      q: 'An zwei Kassen braucht jeder Kunde genau 4 Minuten. Gerade beginnen beide Kassen mit einem neuen Kunden. In der gemeinsamen Schlange warten außerdem noch 7 Leute vor dir. Nach wie vielen Minuten bist du fertig?',
      a: 20, r: [2, 0, 2, 1, 0],
      ex: 'Vor dir sind 2 + 7 = 9 Kunden, du bist der 10. Alle 4 Minuten werden zwei fertig – du kommst in der 5. Runde dran und bist nach 5 × 4 = 20 Minuten fertig.' },
    { id: 't2c-pforte', fam: 'besetzung-rund-um-die-uhr', cat: 'Zeit', type: 'number',
      q: 'Die Pforte einer Klinik muss rund um die Uhr an allen sieben Wochentagen mit genau einer Person besetzt sein. Jeder Mitarbeiter arbeitet höchstens 40 Stunden pro Woche. Wie viele Mitarbeiter braucht man mindestens?',
      a: 5, r: [2, 1, 1, 1, 0],
      ex: 'Eine Woche hat 7 × 24 = 168 Stunden. Vier Mitarbeiter schaffen nur 160 Stunden, also braucht man 5.' },

    // ===== schwer =====
    { id: 't2c-takt-nie', fam: 'takt-versetzt-nie', cat: 'Zeit', type: 'choice',
      q: 'Linie 1 fährt ab 6:00 Uhr alle 12 Minuten, Linie 2 ab 6:05 Uhr alle 15 Minuten – beide von derselben Haltestelle, den ganzen Tag. Wann fahren beide zum ersten Mal zur selben Minute ab?',
      opts: ['Nie', '7:00 Uhr', '7:05 Uhr', '8:05 Uhr'], a: 0, r: [2, 2, 2, 1, 0],
      ex: 'Linie 1 fährt immer zur Minute 00, 12, 24, 36 oder 48, Linie 2 immer zur Minute 05, 20, 35 oder 50. Diese Minuten stimmen nie überein.' },
    { id: 't2c-ueberrunden', fam: 'ueberrunden-statt-kgv', cat: 'Zeit', type: 'number',
      q: 'Anna und Ben starten gleichzeitig an derselben Stelle einer Laufbahn und laufen in dieselbe Richtung. Anna braucht für eine Runde 60 Sekunden, Ben 100 Sekunden. Nach wie vielen Sekunden überholt Anna Ben zum ersten Mal?',
      a: 150, r: [2, 2, 2, 1, 0],
      ex: 'Nach 150 Sekunden hat Anna 2½ Runden geschafft, Ben 1½ – sie hat genau eine Runde Vorsprung und überholt ihn. Bei 300 Sekunden (dem kgV) überholt sie ihn schon zum zweiten Mal.' },
    { id: 't2c-zuglaenge', fam: 'zug-tunnel', cat: 'Zeit', type: 'number',
      q: 'Ein Zug fährt mit gleichbleibendem Tempo in 6 Sekunden an einem Mast vorbei. Über eine 300 m lange Brücke braucht er 21 Sekunden: von der Auffahrt der Lok bis der letzte Wagen die Brücke verlässt. Wie viele Meter ist der Zug lang?',
      a: 120, r: [2, 2, 1, 2, 0],
      ex: 'Die Brücke kostet 21 − 6 = 15 Sekunden mehr, also schafft der Zug 300 m in 15 Sekunden – 20 m pro Sekunde. Am Mast ist er in 6 Sekunden vorbei: 6 × 20 = 120 m.' },
    { id: 't2c-waschen-trocknen', fam: 'waschen-trocknen-engpass', cat: 'Zeit', type: 'number',
      q: 'Eine Waschmaschine braucht für eine Ladung 90 Minuten, der Trockner 120 Minuten. Jedes Gerät schafft nur eine Ladung auf einmal, jede Ladung wird erst gewaschen, dann getrocknet. Du hast 3 Ladungen. Wie viele Minuten dauert es mindestens, bis alles trocken ist?',
      a: 450, r: [2, 2, 2, 1, 0],
      ex: 'Der Trockner ist der Engpass: Er kann erst nach 90 Minuten anfangen. Jede weitere Ladung ist gewaschen (nach 180 und 270 Minuten), bevor der Trockner frei wird (nach 210 und 330 Minuten) – er läuft also 3 × 120 = 360 Minuten ohne Pause: 90 + 360 = 450 Minuten.' },
    { id: 't2c-tage-alt', fam: 'alter-in-tagen', cat: 'Zeit', type: 'number',
      q: 'Mila wurde am 1. März 2027 geboren. Wie viele Tage sind von ihrer Geburt bis zu ihrem 3. Geburtstag vergangen?',
      a: 1096, r: [2, 1, 2, 1, 1],
      ex: 'Drei Jahre zu 365 Tagen wären 1095 Tage. Dazwischen liegt aber der 29. Februar 2028 – also sind es 1096 Tage.' },
    { id: 't2c-quadratjahr', fam: 'quadratjahr-alter', cat: 'Zeit', type: 'number',
      q: 'Herr Kurz wurde im 20. Jahrhundert geboren. In einem Jahr, dessen Jahreszahl eine Quadratzahl ist, wurde er genauso alt wie die Wurzel aus dieser Jahreszahl. In welchem Jahr wurde er geboren?',
      a: 1980, r: [2, 2, 1, 2, 1],
      ex: '45 × 45 = 2025: Wer 2025 genau 45 Jahre alt wurde, ist 1980 geboren. 44 × 44 = 1936 passt nicht – die Geburt wäre 1892 gewesen, also im 19. Jahrhundert –, und bei 46 × 46 = 2116 erst 2070, im 21. Jahrhundert.' },
    { id: 't2c-busumlauf', fam: 'busumlauf-anzahl', cat: 'Zeit', type: 'number',
      q: 'Ein Bus braucht für eine Richtung seiner Linie 25 Minuten. An jeder der beiden Endhaltestellen macht er 5 Minuten Pause und fährt dann zurück. Die Linie soll in beide Richtungen alle 10 Minuten fahren. Wie viele Busse braucht man mindestens?',
      a: 6, r: [2, 2, 1, 1, 0],
      ex: 'Ein Bus ist erst nach 25 + 5 + 25 + 5 = 60 Minuten wieder am Start. Damit dort alle 10 Minuten einer abfährt, braucht man 60 : 10 = 6 Busse.' },

    // ===== sehr schwer =====
    { id: 't2c-gegenbusse', fam: 'gegenverkehr-begegnungen', cat: 'Zeit', type: 'number',
      q: 'Zwischen Adorf und Bestadt fahren rund um die Uhr Busse: An beiden Orten fährt zu jeder vollen Stunde einer los, die Fahrzeit beträgt genau 3 Stunden. Wie vielen entgegenkommenden Bussen begegnet ein Bus unterwegs? (Begegnungen an den Endhaltestellen zählen nicht.)',
      a: 5, r: [2, 3, 2, 1, 0],
      ex: 'Fährt unser Bus von 12 bis 15 Uhr, trifft er unterwegs die Gegenbusse, die um 10, 11, 12, 13 und 14 Uhr losfahren – die von 10 und 11 Uhr sind bei seiner Abfahrt schon unterwegs. Der von 9 Uhr kommt genau bei seiner Abfahrt an, der von 15 Uhr fährt genau bei seiner Ankunft los.' },
    { id: 't2c-wartezeit-paradox', fam: 'wartezeit-ungleicher-takt', cat: 'Zeit', type: 'number',
      q: 'Der Abstand zwischen zwei aufeinanderfolgenden Bussen beträgt abwechselnd 4 und 12 Minuten: 8:00, 8:04, 8:16, 8:20, 8:32 Uhr und so weiter. Du kommst zu einem rein zufälligen Zeitpunkt an die Haltestelle. Wie viele Minuten wartest du im Durchschnitt auf den nächsten Bus?',
      a: 5, r: [2, 3, 3, 2, 1],
      ex: 'In 12 von 16 Minuten landest du in der langen Lücke und wartest im Schnitt 6 Minuten, sonst im Schnitt 2: ¾ × 6 + ¼ × 2 = 5 Minuten – nicht 4, wie der mittlere Abstand von 8 Minuten vermuten lässt.' },
    { id: 't2c-opa-silvester', fam: 'silvester-geburt', cat: 'Zeit', type: 'number',
      q: 'Am 1. Januar sagt Opa Karl, und er sagt die Wahrheit: „Vorgestern war ich noch 70 – und nächstes Jahr werde ich 73.“ Wie alt ist er heute?',
      a: 71, r: [2, 3, 2, 1, 0],
      ex: 'Karl hat am 31. Dezember Geburtstag: Am 30. Dezember war er 70, gestern wurde er 71, Ende dieses Jahres wird er 72 und nächstes Jahr 73. Heute ist er 71.' },
    { id: 't2c-damals-als', fam: 'alter-damals-als', cat: 'Zeit', type: 'number',
      q: 'Anna ist heute doppelt so alt, wie Ben damals war, als Anna so alt war, wie Ben heute ist. Zusammen sind die beiden heute 35 Jahre alt. Wie alt ist Anna heute?',
      a: 20, r: [3, 2, 2, 2, 0],
      ex: 'Anna ist 20, Ben 15: Vor 5 Jahren war Anna 15 – so alt wie Ben heute –, und Ben war 10. Heute ist Anna doppelt so alt wie diese 10.' },
    { id: 't2c-entgegenlaufen', fam: 'abholen-entgegenlaufen', cat: 'Zeit', type: 'number',
      q: 'Papa ist sonst genau um 16:00 Uhr an der Schule und fährt mit Mia sofort heim. Heute läuft Mia ihm ab 15:30 Uhr entgegen. Papa fährt wie immer los, nimmt sie unterwegs auf, wendet sofort – und sie sind 10 Minuten früher daheim. Wie viele Minuten lief Mia?',
      a: 25, r: [2, 3, 2, 1, 0],
      ex: 'Das Auto spart 10 Minuten, also 5 Minuten pro Richtung: Papa trifft Mia 5 Minuten vor der Schule, um 15:55 Uhr. Mia war also 25 Minuten unterwegs.' },
    { id: 't2c-bustakt', fam: 'busse-ueberholen-begegnen', cat: 'Zeit', type: 'number',
      q: 'Du gehst gleichmäßig eine Straße entlang. Busse fahren dort in beide Richtungen, alle gleich schnell und in beiden Richtungen im gleichen Abstand. Alle 6 Minuten überholt dich einer, alle 3 Minuten kommt dir einer entgegen. In welchem Minutentakt fahren die Busse?',
      a: 4, r: [3, 3, 2, 2, 0],
      ex: 'Pro Minute schrumpft der Abstand zu einem Bus von hinten um ⅙ des Busabstands (Bustempo minus dein Tempo), zu einem entgegenkommenden um ⅓ (Bustempo plus dein Tempo). Der Mittelwert ¼ ist das Bustempo allein – also kommt alle 4 Minuten ein Bus.' },
  ]);
})();
