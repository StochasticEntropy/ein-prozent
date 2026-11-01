// Drehbuch des Spiegelkabinetts (Kapitel 3). Zeilen-ids = Dateinamen der Aufnahmen unter assets/voice/.
// Sprecher: uhu, rocco, spieglein (der eitle Zauberspiegel am ersten Tor) vertont; flitz plappert.

export const LINES = {
  sk_intro1: ['rocco', 'smug', 'Hehehe! Kristall Nummer drei steckt in meinem Spiegelkabinett. Da drin gibt’s mich gleich zehnmal!'],
  sk_intro2: ['uhu', 'shock', 'Zehn Roccos? Rocco, einer von dir ist schon zu viel für diese Welt!'],
  sk_intro3: ['rocco', 'happy', 'Danke für das Kompliment! Wir sehen uns – von allen Seiten!'],
  sk_intro4: ['uhu', 'think', 'Lehrling, hinterher! Im Spiegelkabinett ist links rechts und rechts links. Nur ich bleibe, wie ich bin.'],
  sk_land1: ['uhu', 'happy', 'Schau mal in den Zerrspiegel! Ich sehe darin aus wie ein Pinguin. Ein sehr kluger Pinguin.'],
  sk_multi1: ['uhu', 'happy', 'Alle Lehrlinge doppelt – einmal echt, einmal im Spiegel. Wer als Erster den echten Kristall hat, gewinnt.'],
  sk_multi2: ['rocco', 'smug', 'Und die Spiegelbilder waschen meine Socken. Spiegelverkehrt!'],
  sk_flitz1: ['flitz', 'happy', 'Flitz ist da! Und Flitz im Spiegel auch! Doppelt so viel Flitz!'],
  sk_flitz1b: ['uhu', 'idle', 'Doppelt so viel Flitz heißt leider nicht doppelt so viel Verstand.'],

  // Tor 1: das Spieglein
  sk_spiegel1: ['spieglein', 'happy', 'Spieglein, Spieglein am Tor – wer steht denn da davor? Durch kommt nur, wer meine Frage löst. Und mir sagt, wie schön ich bin!'],
  sk_spiegel2: ['uhu', 'idle', 'Ein eitler Spiegel. Beantworte einfach die Frage. Das Kompliment kannst du dir sparen.'],
  sk_zerr0: ['spieglein', 'happy', 'Huch, du bist ja ganz verzerrt! Steht dir aber.'],
  sk_zerr1: ['spieglein', 'smug', 'Falsch! Ich spiegle dich einfach zurück.'],
  sk_spiegel3: ['spieglein', 'happy', 'Richtig! Du darfst durch. Aber vergiss nicht: Der Schönste hier bin ich.'],

  // Tor 2: der Boxspiegel
  sk_box1: ['uhu', 'think', 'Der Boxspiegel. Wer hier falsch antwortet, bekommt einen Stupser. Ganz sanft. Mit Federn.'],
  sk_box2: ['rocco', 'smug', 'Mit Federn? Die hab ich gegen Sprungfedern getauscht. Hehehe!'],

  // Truhe mit dem Taschenspiegel
  sk_truhe1: ['uhu', 'happy', 'Ein Taschenspiegel! Hältst du ihn schräg, zeigt er dir bei einer Frage, was nicht stimmt.'],
  sk_truhe2: ['rocco', 'sad', 'Hey! Mit dem prüf ich jeden Morgen meine Frisur!'],

  // Das falsche Spiegelbild
  sk_zwilling1: ['uhu', 'think', 'Dein Spiegelbild macht alles nach. Fast alles. Moment mal …'],
  sk_zwilling2: ['rocco', 'happy', 'Buh! Ich war die ganze Zeit dein Spiegelbild! Ist dir nicht aufgefallen, wie gut du aussiehst?'],
  sk_zwilling3: ['uhu', 'sad', 'Rocco, ein Spiegelbild hat keinen Ringelschwanz.'],

  // Tor 3: Roccos Spiegelsaal
  sk_tor3a: ['rocco', 'smug', 'Willkommen in meinem Spiegelsaal! Na, welcher von uns ist der echte Rocco?'],
  sk_tor3b: ['uhu', 'think', 'Ganz einfach: Der echte ist der, der am lautesten lacht. Also alle drei.'],
  sk_torte: ['rocco', 'happy', 'Sahnetorte! Drei Stück, frisch gespiegelt!'],

  // Finale
  sk_sieg1: ['rocco', 'shock', 'Das gibt’s doch nicht! Ich hab mich in meinen eigenen Spiegeln verlaufen!'],
  sk_sieg2: ['uhu', 'happy', 'Kristall Nummer drei! Lehrling, du durchschaust einfach alles. Sogar Spiegel.'],
  sk_sieg3: ['rocco', 'smug', 'Sechzehn hab ich noch! Und im nächsten Versteck ist es so heiß, da schmilzt dir das Gehirn. Hehehe!'],
  sk_niederlage1: ['rocco', 'happy', 'Zu langsam! Und das Beste: Im Spiegel hab ich sogar zweimal gewonnen!'],
  sk_niederlage2: ['uhu', 'sad', 'Nicht verzagen, Lehrling. Dreh die Sache um und versuch es noch mal!'],
  sk_ausgeschieden: ['rocco', 'happy', 'Keine Herzen mehr! Ich spiegle dir einfach drei neue her. Bitte schön.'],
};

// Reaktionen, die im Spiegelkabinett die allgemeinen ersetzen (Aufnahme-ids: spiegel_<schlüssel><nr>).
export const REACT = {
  richtig: [
    ['uhu', 'happy', 'Spiegelglatt gelöst! Da sieht sogar der Spiegel alt aus.'],
    ['uhu', 'happy', 'Richtig! Von vorn und von hinten.'],
    ['rocco', 'sad', 'Pfff. Das hast du doch spiegelverkehrt geraten.'],
    ['rocco', 'shock', 'Was? Hast du etwa um die Ecke gedacht? Das ist mein Trick!'],
  ],
  falsch: [
    ['rocco', 'happy', 'Hahaha! Falsch – und im Spiegel gleich doppelt falsch!'],
    ['rocco', 'happy', 'Links, rechts, daneben! Hehehe!'],
    ['uhu', 'sad', 'Autsch. Spiegel sind tückisch. Dreh die Sache im Kopf noch einmal um.'],
  ],
  zeit: [
    ['uhu', 'shock', 'Die Zeit ist um! Im Spiegelkabinett läuft sie anscheinend doppelt so schnell.'],
    ['rocco', 'happy', 'Zu spät! Dein Spiegelbild wäre schon längst fertig.'],
  ],
  denken: [
    ['rocco', 'smug', 'Tipp: Dreh dich dreimal im Kreis. Hilft nicht, sieht aber lustig aus.'],
    ['uhu', 'think', 'Überleg genau, wo der Spiegel steht. Davon hängt ab, was sich umdreht.'],
    ['rocco', 'smug', 'Ich seh’s dir an: Du denkst gerade spiegelverkehrt.'],
  ],
  taschenspiegel: [
    ['uhu', 'happy', 'Der Taschenspiegel blitzt! Er zeigt dir, was nicht stimmt.'],
  ],
};

export const SPEAKERS = {
  spieglein: { name: 'Spieglein', voice: true, babble: 760, face: 'spieglein' },
};

// Spiegel-, Dreh- und Ansichtsrätsel aus der geprüften Fragenbank, je Tor leichter → schwerer.
export const POOLS = {
  tor1: ['b-spiegel-fahne', 'b-symmetrisch', 'a-gegenueber', 'b-pfeil-dreht', 's-nebel'],
  tor2: ['p-see-schild', 'p-kopfstand-form', 'p-silhouette', 'b-raster-drehen', 'shapes-f'],
  tor3: ['p-see-woerter', 'p-bau-gedreht', 'a-richtung', 's-regal', 'p-schattenschrift'],
};
