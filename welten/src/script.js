// Drehbuch der Uhrwerk-Insel. Jede Zeile hat eine id (= Dateiname der vertonten Fassung unter
// assets/voice/<id>.m4a). Sprecher: uhu, rocco (vertont), flitz und kuckuck (Plapper-Stimme + Untertitel).
// Gibt es (noch) keine Audiodatei, läuft die Zeile als Untertitel mit passender Lesezeit.

export const LINES = {
  // ---------- Intro ----------
  intro1: ['rocco', 'smug', 'Hehehe! Neunzehn Denkkristalle – und alle gehören jetzt mir! Den ersten hab ich auf der Uhrwerk-Insel versteckt.'],
  intro2: ['uhu', 'shock', 'Rocco! Das sind Museumsstücke! Und das da ist mein Lieblingsportal!'],
  intro3: ['rocco', 'happy', 'War. War dein Lieblingsportal. Tschüssi!'],
  intro4: ['uhu', 'think', 'Lehrling, hinterher! Aber Vorsicht: Auf dieser Insel tickt alles. Sogar ich, wenn ich mich aufrege.'],
  land1: ['uhu', 'happy', 'Gelandet! Tipp einfach dorthin, wo du hinlaufen willst. Ich fliege mit – mental.'],
  multi1: ['uhu', 'happy', 'Gleich mehrere Lehrlinge! Wunderbar. Wer zuerst den Kristall hat, bekommt mein ewiges Lob.'],
  multi2: ['rocco', 'smug', 'Und wer zuletzt kommt, putzt meinen Mülleimer. Los geht’s, ihr Schlaumeier!'],
  flitz1: ['flitz', 'happy', 'Bin Flitz! Schnellster Rätselläufer der Welt! Wer zuerst den Kristall hat, gewinnt!'],
  flitz1b: ['uhu', 'idle', 'Flitz ist schnell. Aber schnell und richtig ist nicht dasselbe. Frag mal seine Zahnräder.'],

  // ---------- Tor 1: Kuckuck ----------
  kuckuck1: ['kuckuck', 'happy', 'KUCKUCK! Nur wer meine Frage weiß, kommt durch! KUCKUCK!'],
  kuckuck2: ['uhu', 'idle', 'Der Kuckuck. Seit dreihundert Jahren zu früh dran. Hör gut zu.'],

  // ---------- Tor 2: Spiegel-Zahnräder ----------
  tor2a: ['uhu', 'think', 'Die Spiegelbrücke. Wer hier links und rechts verwechselt, nimmt die Abkürzung. Nach unten.'],
  tor2b: ['rocco', 'smug', 'Ich hab die Falltür frisch geölt. Nur für dich.'],

  // ---------- Truhe ----------
  truhe1: ['uhu', 'happy', 'Ein Fernglas! Damit siehst du bei der nächsten Frage eine falsche Antwort schon von Weitem.'],
  truhe2: ['rocco', 'sad', 'Hey! Das ist meins! Das hab ich … ehrlich gefunden.'],

  // ---------- Tor 3: Roccos Turm ----------
  tor3a: ['rocco', 'smug', 'Na gut, Schlaumeier. Letztes Tor. Diese Frage hab ich selbst gebaut. Um drei Uhr nachts.'],
  tor3b: ['uhu', 'think', 'Um drei Uhr nachts baut man keine Fragen, Rocco. Da baut man Mist.'],

  // ---------- Roccos Bananen-Sabotage ----------
  banane1: ['rocco', 'smug', 'Ups! Da hab ich wohl meine Banane verloren. So ein Pech aber auch. Hehehe.'],
  banane2: ['uhu', 'sad', 'Die Bananenschale. Der älteste Trick der Welt – und er funktioniert immer noch.'],
  banane3: ['uhu', 'happy', 'Elegant drumherum! Rocco, deine Tricks werden alt.'],

  // ---------- Finale ----------
  sieg1: ['rocco', 'shock', 'WAS?! Das … das war geraten!'],
  sieg2: ['uhu', 'happy', 'Der erste Denkkristall! Lehrling, ich bin so stolz, mir fallen gleich die Federn aus.'],
  sieg3: ['rocco', 'smug', 'Achtzehn hab ich noch! Wir sehen uns in der nächsten Welt. Hehehe!'],
  niederlage1: ['rocco', 'happy', 'Flitz war schneller! Und ich hab den Kristall wieder. Doppelt gewonnen!'],
  niederlage2: ['uhu', 'sad', 'Kopf hoch, Lehrling. Noch mal – diesmal mit Anlauf.'],
  ausgeschieden: ['rocco', 'happy', 'Keine Herzen mehr! Ich lass dich trotzdem noch mal rein. Ich bin ja kein Unmensch. Ich bin ein Waschbär.'],
};

// Reaktionen – zufällig, damit es nicht langweilig wird.
export const REACT = {
  richtig: [
    ['uhu', 'happy', 'Glasklar! Das Tor dreht auf – wie mein Puls bei Prüfungen.'],
    ['uhu', 'happy', 'Richtig! Ich hab’s doch immer gesagt. Also, heute zum ersten Mal, aber laut.'],
    ['rocco', 'sad', 'Pfff. Die war ja auch für Anfänger.'],
    ['rocco', 'shock', 'Moment – wer hat dir die Lösung gesteckt? Uhu, warst du das?'],
  ],
  falsch: [
    ['rocco', 'happy', 'Hahaha! Falsch! Ich hab’s gefilmt!'],
    ['rocco', 'happy', 'Klappe auf, Lehrling runter! Hehehe!'],
    ['uhu', 'sad', 'Autsch. Halb so wild – du hast noch Herzen. Und ich hab noch Nerven. Theoretisch.'],
  ],
  zeit: [
    ['uhu', 'shock', 'Die Zeit! Auf der Uhrwerk-Insel wartet nicht mal die Uhr.'],
    ['rocco', 'happy', 'Tick, tack, zu spät! Das ist mein Lieblingslied.'],
  ],
  denken: [
    ['rocco', 'smug', 'Tick, tack … ich hör dein Gehirn rattern.'],
    ['rocco', 'smug', 'Psst – die richtige Antwort ist … ach, vergessen.'],
    ['uhu', 'think', 'Ganz ruhig. Lies jedes Wort. Auch die kleinen.'],
  ],
  fernglas: [
    ['uhu', 'happy', 'Fernglas raus! Diese Antwort da hinten ist es schon mal nicht.'],
  ],
  flitzFalsch: [
    ['flitz', 'shock', 'Uiiiii!'],
    ['rocco', 'happy', 'Flitz fliegt! Gute Reise, Kumpel!'],
  ],
  flitzRichtig: [
    ['flitz', 'happy', 'Zu langsam! Hihi!'],
  ],
  flitzVorbei: [
    ['flitz', 'happy', 'Platz da, Platz da!'],
  ],
};

export const SPEAKERS = {
  uhu: { name: 'Prof. Uhu', voice: true },
  rocco: { name: 'Rocco', voice: true },
  flitz: { name: 'Flitz', voice: false, babble: 520 },
  kuckuck: { name: 'Kuckuck', voice: false, babble: 880 },
};

// Rätsel der Insel (ids aus der geprüften Fragenbank). Pro Tor: erste Frage + Ersatzfragen nach Fehlern.
export const GATES = [
  { id: 'tor1', pool: ['day-plus2', 'tallest', 's-kiefer', 'comb'] },
  { id: 'tor2', pool: ['mirror-clock', 'tomorrow-riddle', 'vorgestern', 'golf'] },
  { id: 'tor3', pool: ['gears-loop', 'clock-angle', 't-year-later', 't-chain-day-before'] },
];
