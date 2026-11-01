// Drehbuch des Wortwalds (Kapitel 2). Zeilen-ids = Dateinamen der Aufnahmen unter assets/voice/.
// Sprecher: uhu, rocco, baum (die Plaudereiche) vertont; flitz plappert.

export const LINES = {
  ww_intro1: ['rocco', 'smug', 'Hehehe! Kristall Nummer zwei versteck ich im Wortwald. Da reden sogar die Bäume – aber keiner hört ihnen zu!'],
  ww_intro2: ['uhu', 'shock', 'Der Wortwald? Rocco, da drin geht jedes Wort verloren! Ich hab da mal ein Komma verloren und es nie wiedergefunden.'],
  ww_intro3: ['rocco', 'happy', 'Dann pass gut auf deine Wörter auf, Professor. Tschüssikowski!'],
  ww_intro4: ['uhu', 'think', 'Lehrling, hinterher! Im Wortwald zählt jeder Buchstabe. Wirklich jeder. Sogar das stumme H.'],
  ww_land1: ['uhu', 'happy', 'Willkommen im Wortwald! Hier tippst du die Antworten selbst ein. Buchstabe für Buchstabe.'],
  ww_multi1: ['uhu', 'happy', 'Gleich mehrere Lehrlinge im Wortwald! Wer zuerst den Kristall findet, darf meine Brille putzen. Große Ehre.'],
  ww_multi2: ['rocco', 'smug', 'Und wer verliert, schreibt hundertmal: Rocco ist der Größte. Ohne Tippfehler!'],
  ww_flitz1: ['flitz', 'happy', 'Flitz ist wieder da! Revanche! Diesmal renn ich doppelt so schnell!'],
  ww_flitz1b: ['uhu', 'idle', 'Doppelt so schnell, Flitz? Dann bist du eben doppelt so schnell falsch.'],

  // Roccos verdrehtes Schild
  ww_schild1: ['uhu', 'think', 'Das Schild zeigt zum Kristall – direkt über die Kante. Das war Rocco. Wir gehen lieber geradeaus.'],

  // Tor 1: die Plaudereiche
  ww_baum1: ['baum', 'happy', 'Hohoho! Besuch! Ich bin die Plaudereiche. Ich plaudere seit vierhundert Jahren – und ich bin noch lange nicht fertig!'],
  ww_baum2: ['uhu', 'idle', 'Beantworte schnell ihre Frage. Sonst erzählt sie dir ihre Lebensgeschichte. Alle vierhundert Jahre.'],
  ww_ast0: ['baum', 'shock', 'Hoppla! Mein Ast ist mir ausgerutscht. Das passiert mir nur alle hundert Jahre.'],
  ww_ast1: ['baum', 'sad', 'Verzeihung! Frühjahrsputz. Ich fege gerade alles weg, was falsch ist.'],
  ww_baum3: ['baum', 'happy', 'Richtig! Geh nur durch. Und erzähl allen, wie charmant ich war!'],

  // Tor 2: der Buchstabenbach
  ww_fluss1: ['uhu', 'think', 'Der Buchstabenbach. Bei einer richtigen Antwort tauchen Seerosen auf – und die tragen dich hinüber.'],
  ww_fluss2: ['rocco', 'smug', 'Und bei einer falschen gibt’s ein Bad. Ich hab das Wasser extra kalt bestellt!'],

  // Truhe mit Uhus Feder
  ww_truhe1: ['uhu', 'happy', 'Meine Lieblingsfeder! Die such ich seit der Mauser. Mit ihr siehst du bei einer Frage den ersten Buchstaben.'],
  ww_truhe2: ['rocco', 'sad', 'Hey! Die wollte ich als Staubwedel verkaufen!'],

  // Sprungpilz und Roccos falscher Kristall
  ww_pilz: ['uhu', 'happy', 'Ein Sprungpilz! Wer braucht schon Treppen, wenn er Pilze hat?'],
  ww_falle1: ['rocco', 'happy', 'Reingelegt! Das war ein aufgeblasener Luftballon. Mit Glitzer! Hehehe!'],
  ww_falle2: ['uhu', 'sad', 'Echte Kristalle quietschen nicht, wenn man sie anfasst. Merk dir das, Lehrling.'],

  // Tor 3: Roccos Wortfalle
  ww_tor3a: ['rocco', 'smug', 'Willkommen in meiner Wortfalle! Die Frage hab ich aus drei Wörtern zusammengeklebt. Mit Honig.'],
  ww_tor3b: ['uhu', 'think', 'Rocco, mit Honig klebt man keine Wörter zusammen. Nur Waschbärpfoten.'],

  // Finale
  ww_sieg1: ['rocco', 'shock', 'Nein, nein, nein! Der Wald hat dir vorgesagt, stimmt’s?'],
  ww_sieg2: ['uhu', 'happy', 'Kristall Nummer zwei! Lehrling, du bist ein wandelndes Wörterbuch. Nur handlicher.'],
  ww_sieg3: ['rocco', 'smug', 'Siebzehn hab ich noch! Und das nächste Versteck ist noch verzwickter. Hehehe!'],
  ww_niederlage1: ['rocco', 'happy', 'Zu langsam! Der Kristall gehört wieder mir. Und das Wort dafür heißt: Pech!'],
  ww_niederlage2: ['uhu', 'sad', 'Kopf hoch. Auch Eichen fangen klein an. Als Eichel. Noch mal!'],
  ww_ausgeschieden: ['rocco', 'happy', 'Keine Herzen mehr! Na gut, du kriegst neue. Die lagen unter einem Pilz.'],
};

// Reaktionen, die im Wortwald die allgemeinen ersetzen (Aufnahme-ids: wortwald_<schlüssel><nr>).
export const REACT = {
  richtig: [
    ['uhu', 'happy', 'Wortgewandt! Das hätte ich nicht besser gekonnt. Doch, hätte ich. Aber knapp!'],
    ['uhu', 'happy', 'Richtig! Ein Wort wie eine Eiche. Fest verwurzelt.'],
    ['rocco', 'sad', 'Pfff. Das Wort stand doch praktisch im Wörterbuch.'],
    ['rocco', 'shock', 'Woher weißt du das? Hast du etwa ein Buch gelesen?!'],
  ],
  falsch: [
    ['rocco', 'happy', 'Hahaha! Falsch! Das hab ich gefilmt – in Zeitlupe!'],
    ['rocco', 'happy', 'Buchstabe daneben, Lehrling daneben! Hehehe!'],
    ['uhu', 'sad', 'Autsch. Halb so wild. Manche Wörter muss man zweimal anschauen.'],
  ],
  zeit: [
    ['uhu', 'shock', 'Die Zeit! Die Blätter sind schon alle welk.'],
    ['rocco', 'happy', 'Zu spät! Im Wald tickt die Uhr nicht – sie raschelt. Und jetzt ist Ruhe.'],
  ],
  denken: [
    ['rocco', 'smug', 'Na, fehlt dir ein Buchstabe? Ich hab noch ein paar übrig. Gebrauchte.'],
    ['uhu', 'think', 'Sprich das Wort leise vor dich hin. Manchmal hört man die Antwort, bevor man sie sieht.'],
    ['rocco', 'smug', 'Psst – die Antwort fängt mit einem Buchstaben an. Mehr verrat ich nicht.'],
  ],
  feder: [
    ['uhu', 'happy', 'Die Feder verrät dir den ersten Buchstaben. Nicht weitersagen – das ist Schummeln mit Stil.'],
  ],
};

export const SPEAKERS = {
  baum: { name: 'Plaudereiche', voice: true, babble: 230, face: 'baum' },
};

// Wortspiel-Rätsel aus der geprüften Fragenbank, je Tor leichter → schwerer (1-%-Stufe laut Kalibrierung).
export const POOLS = {
  tor1: ['snow', 'anagram-tiger', 's-fisch', 'w-meer', 's-leid'],
  tor2: ['w-loewenzahn', 'blumen', 's-eule', 's-schirm', 'w-tier-im-tier'],
  tor3: ['w-blumentopferde', 's-ente', 'w-hai', 's-hering', 'w-akrostichon'],
};
