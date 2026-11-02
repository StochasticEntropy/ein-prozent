// Drehbuch des Duos. Jede Gruppe hat Varianten; eine Variante ist eine kurze Szene aus Zeilen [Sprecher, Text].
// v = Vera Brandt, h = Holger Kranz. Die Tonspur einer Zeile liegt unter voice/<gruppe>-<variante>-<zeile>.m4a.
// Zahlen stehen ausgeschrieben im Text, damit Sprachausgabe und Spracherkennungs-Prüfung sie gleich lesen.
(function (root) {
  const L = {
    intro: [
      [['v', 'Guten Abend und willkommen bei Besserwisser! Ich bin Vera Brandt.'],
       ['h', 'Und ich bin Holger Kranz. Siebenundzwanzig Jahre Wetteransage, nie einen Schirm vergessen.'],
       ['v', 'Holger ist heute Abend unser Vergleichswert. Statistisch gesehen ist er exakt der Durchschnitt.'],
       ['h', 'Danke, Vera.'],
       ['v', 'Das war kein Kompliment.']],
      [['v', 'Guten Abend! Schön, dass Sie da sind. Holger ist leider auch da.'],
       ['h', 'Ich bin immer da, Vera. Das nennt man Verlässlichkeit.'],
       ['v', 'Bei Schimmel nennt man es anders. Zwölf Fragen, fünf Runden, und am Ende wissen wir, wer hier der Besserwisser ist.'],
       ['h', 'Ich. Wie jedes Mal.']],
      [['h', 'Meine Damen und Herren, willkommen zur einzigen Quizshow, bei der der Moderator klüger ist als die Fragen!'],
       ['v', 'Holger meint mich.'],
       ['h', 'Ich meinte nicht dich.'],
       ['v', 'Ich weiß. Deshalb habe ich es korrigiert. Viel Spaß!']],
    ],
    r1: [
      [['v', 'Runde eins: Aufwärmen. Leichte Fragen, zwanzig Sekunden. Wer schnell ist, bekommt Bonuspunkte.'],
       ['h', 'Leicht ist relativ, Vera.'],
       ['v', 'Für dich, Holger. Für alle anderen ist es leicht.']],
      [['v', 'Wir fangen gemütlich an. Drei Fragen, die fast alle schaffen. Schnelle Antworten bringen Bonuspunkte.'],
       ['h', 'Fast alle. Ich schaffe immer alle.'],
       ['v', 'Du schaffst genau so viele wie der Durchschnitt. Das ist dein Fachgebiet.']],
    ],
    r2: [
      [['v', 'Runde zwei: Holgers Tipp. Holger sagt Ihnen vorher, was er nehmen würde.'],
       ['h', 'Kostenlos! Normalerweise nehme ich dafür Geld.'],
       ['v', 'Wer Holger widerspricht und recht hat, bekommt den Besserwisser-Bonus. Wer ihm folgt, ist selbst schuld.']],
      [['h', 'Jetzt komme ich! Ich gebe Ihnen bei jeder Frage meinen Tipp.'],
       ['v', 'Holger liegt übrigens genau so oft richtig wie der Rest des Landes. Bei schweren Fragen also fast nie.'],
       ['h', 'Fast nie ist nicht nie, Vera.'],
       ['v', 'Widersprechen Sie ihm zu Recht, gibt es Bonuspunkte.']],
    ],
    r3: [
      [['v', 'Runde drei: Quote schätzen. Nach jeder Antwort schätzen Sie, wie viel Prozent der Deutschen das lösen.'],
       ['h', 'Ich schätze immer neunzig. Ich gehe von mir aus.'],
       ['v', 'Genau deshalb liegt er immer daneben. Punkte gibt es für die Antwort und für eine gute Schätzung.']],
      [['v', 'Jetzt wird es schwerer. Nach jeder Antwort schätzen Sie, wie viele das schaffen.'],
       ['h', 'Das ist meine Lieblingsrunde. Ich schätze Menschen sehr.'],
       ['v', 'Er meint das mathematisch nicht.']],
    ],
    r4: [
      [['v', 'Runde vier: Einsatz. Sie sehen nur, wie schwer die Frage ist, und setzen dann bis zur Hälfte Ihrer Punkte.'],
       ['h', 'Ich setze immer alles.'],
       ['v', 'Deshalb fährt er ein Auto mit Kassettendeck.']],
      [['v', 'Runde vier. Bevor Sie die Frage sehen, setzen Sie Punkte. Richtig gibt es sie dazu, falsch sind sie weg.'],
       ['h', 'Wie an der Börse!'],
       ['v', 'Holger hat an der Börse Telefonkarten gekauft.']],
    ],
    final: [
      [['v', 'Das Finale. Eine einzige Frage. Die schaffen weniger als fünf Prozent.'],
       ['h', 'Also ich.'],
       ['v', 'Sie haben die Wahl: Spielen Sie, verdoppeln sich bei einer richtigen Antwort Ihre Punkte. Bei einer falschen halbieren sie sich.'],
       ['h', 'Oder Sie nehmen die Punkte und gehen. Das wäre feige. Ich würde es genau so machen.']],
    ],
    finalPlay: [
      [['h', 'Mutig! Trommelwirbel, bitte. Haben wir einen Trommelwirbel?'], ['v', 'Wir haben ein Budget, Holger.']],
      [['v', 'Sie spielen. Holger, halt bitte für einen Moment den Mund.'], ['h', 'Ich halte gar nichts.']],
    ],
    finalTake: [
      [['v', 'Vernünftig. Das ist selten in dieser Sendung.'], ['h', 'Langweilig ist das.']],
    ],
    finalWin: [
      [['v', 'Richtig! Sie gehören zu den ganz wenigen. Holger, das Konfetti.'], ['h', 'Das ganze?'], ['v', 'Das ganze.']],
    ],
    finalLose: [
      [['v', 'Leider falsch. Aber Sie haben es versucht, und das ist mehr, als Holger je versucht hat.'], ['h', 'Ich war beim Lokalsender!']],
    ],

    // ---- Reaktionen auf eine Antwort ----
    rightEasy: [
      [['v', 'Richtig. Das war auch nicht schwer.']],
      [['v', 'Stimmt. Holger ist stolz auf Sie.'], ['h', 'Bin ich nicht.']],
      [['v', 'Richtig. Drei Schnipsel Konfetti, bitte.']],
      [['v', 'Korrekt. So kann es weitergehen.']],
    ],
    wrongEasy: [
      [['v', 'Oh. Das hätten fast alle gewusst.']],
      [['h', 'Willkommen im Club! Wir treffen uns donnerstags.']],
      [['v', 'Falsch. Und das bei einer leichten Frage. Holger, sag was Nettes.'], ['h', 'Morgen wird es sonnig.']],
    ],
    rightHard: [
      [['v', 'Richtig! Das schaffen nur wenige. Ich bin beeindruckt.']],
      [['h', 'Das hätte ich auch gewusst.'], ['v', 'Hast du aber nicht.']],
      [['v', 'Respekt. Sie dürfen ab sofort Holger korrigieren.'], ['h', 'Das darf niemand.']],
    ],
    wrongHard: [
      [['v', 'Falsch, aber in bester Gesellschaft. Die meisten liegen hier daneben.']],
      [['h', 'Die Frage war unfair. Ich habe sie auch nicht verstanden.'], ['v', 'Du verstehst auch die Mikrowelle nicht, Holger.']],
      [['v', 'Knapp daneben ist auch daneben. Aber elegant.']],
    ],
    timeout: [
      [['v', 'Die Zeit ist um.'], ['h', 'Nachdenken wird überschätzt.']],
      [['v', 'Zu spät. Holger kennt das, er kommt auch immer zu spät.']],
    ],

    // ---- Holgers Tipp (Runde 2) ----
    tipA: [[['h', 'Ganz klar A. Bauchgefühl.']], [['h', 'Nehmen Sie A. Vertrauen Sie mir.']]],
    tipB: [[['h', 'Ich sag B. Ganz sicher B.']], [['h', 'B. Hundert Prozent. Na gut, achtzig.']]],
    tipC: [[['h', 'C! Das sieht man doch sofort.']], [['h', 'Ich nehme C. Das hat mir noch nie geschadet.']]],
    tipD: [[['h', 'D. Ich bin mir sicher wie beim Wetter.']], [['h', 'Antwort D. Glauben Sie einem Profi.']]],
    holgerRight: [
      [['h', 'Sehen Sie? Erfahrung!']],
      [['h', 'Holger hat es gewusst. Schreib das auf, Vera.'], ['v', 'Ich notiere: Ausnahme.']],
    ],
    holgerWrong: [
      [['v', 'Und Holger lag daneben. Rotstift.']],
      [['v', 'Holger: falsch. Ich streiche das mal eben durch.'], ['h', 'Das war ein Test!']],
    ],
    beatHolger: [
      [['v', 'Sie haben Holger widersprochen und recht behalten. Besserwisser-Bonus!']],
      [['h', 'Ich habe Sie absichtlich auf die falsche Fährte gelockt.'], ['v', 'Natürlich hast du das. Bonus für Sie.']],
    ],
    followedWrong: [
      [['v', 'Sie sind Holger gefolgt. Das ist menschlich. Aber falsch.']],
      [['h', 'Wir sitzen im selben Boot!'], ['v', 'Und es sinkt.']],
    ],
    ignoredRight: [
      [['h', 'Hätten Sie mal auf mich gehört!']],
      [['v', 'Ausnahmsweise hätte man auf Holger hören sollen. Das passiert nicht oft.']],
    ],

    // ---- Quote schätzen (Runde 3) ----
    estClose: [
      [['v', 'Ihre Schätzung ist fast perfekt. Sie sollten beim Amt anfangen.']],
      [['v', 'Sehr gut geschätzt.'], ['h', 'Ich lag auch gut.'], ['v', 'Du hast neunzig gesagt.']],
    ],
    estMid: [
      [['v', 'Nicht schlecht geschätzt. Da geht noch was.']],
      [['h', 'Ordentlich geschätzt! Fast so gut wie ich.']],
    ],
    estFar: [
      [['v', 'Da lagen Sie deutlich daneben. Holger auch, aber bei ihm ist das normal.']],
      [['h', 'Schätzen ist Glückssache. Sagen wir es so.']],
    ],

    // ---- Einsatz (Runde 4) ----
    stakeZero: [[['v', 'Null Punkte gesetzt. Vorsichtig.'], ['h', 'Feige.'], ['v', 'Klug, Holger. Das Wort heißt klug.']]],
    stakeMax: [[['h', 'Alles auf eine Karte! So mag ich das!'], ['v', 'Holger mag auch Lotto.']]],
    stakeMid: [[['v', 'Ein vernünftiger Einsatz.']], [['h', 'Da geht noch mehr. Aber gut.']]],

    // ---- Zwischendurch ----
    next: [
      [['v', 'Nächste Frage.']],
      [['v', 'Weiter geht es.']],
      [['v', 'Und die nächste, bitte.']],
    ],
    lokal: [
      [['h', 'Damals beim Lokalsender hatten wir nur eine Frage pro Woche.']],
      [['h', 'Beim Lokalsender hatte ich übrigens eine eigene Quizsendung. Drei Folgen.']],
      [['h', 'Das erinnert mich an den Lokalsender. Da war ich ein Star.']],
    ],
    lokalCount: [
      [['v', 'Lokalsender. Das war Nummer eins heute.']],
      [['v', 'Lokalsender, Nummer zwei.']],
      [['v', 'Nummer drei. Ich hole schon mal die Strichliste.']],
    ],
    holgerAhead: [
      [['h', 'Zwischenstand: Ich führe! Gegen einen echten Menschen!'], ['v', 'Das wird sich ändern.']],
    ],
    playerAhead: [
      [['v', 'Zwischenstand: Sie liegen vor Holger. Wie erwartet.'], ['h', 'Noch.']],
    ],

    // ---- Ende ----
    title0: [[['v', 'Sie haben ungefähr so gespielt wie Holger. Ich sage dazu nichts weiter.']]],
    title1: [[['v', 'Solide. Nicht spektakulär, aber solide. Wie ein Kombi.']]],
    title2: [[['v', 'Da ist Potenzial. Holger, nimm dir ein Beispiel.'], ['h', 'Woran denn?']]],
    title3: [[['v', 'Ein echter Besserwisser. Ihre Familie hat es sicher nicht leicht mit Ihnen.']]],
    title4: [[['v', 'Amtlich geprüft. Ich stelle Ihnen eine Urkunde aus. Holger, unterschreib als Zeuge.'], ['h', 'Mit Vergnügen. Wo ist der Stift?'], ['v', 'Der rote ist meiner.']]],
    bye: [
      [['v', 'Das war Besserwisser. Schalten Sie wieder ein.'], ['h', 'Und bleiben Sie durchschnittlich!']],
    ],

    // ---- Studio (Gruppe) ----
    lobby: [
      [['v', 'Scannen Sie den Code mit dem Handy, dann sind Sie dabei.'],
       ['h', 'Das ist wie Fernsehen, nur dass man mitreden darf. Furchtbar.']],
    ],
    waiting: [
      [['v', 'Wir warten noch auf ein paar Antworten.'], ['h', 'Ich warte nie. Ich weiß es immer sofort.']],
      [['h', 'Kommen Sie, so schwer ist das nicht.'], ['v', 'Sagt der Mann, der an der Drehtür gescheitert ist.']],
    ],
    allIn: [
      [['v', 'Alle haben eingeloggt.']],
    ],
  };

  // Ansage der Quote, je Stufe eine Zeile (Runde 3 und 4).
  const WORD = { 90: 'neunzig', 85: 'fünfundachtzig', 80: 'achtzig', 75: 'fünfundsiebzig', 70: 'siebzig', 65: 'fünfundsechzig', 60: 'sechzig',
    55: 'fünfundfünfzig', 50: 'fünfzig', 45: 'fünfundvierzig', 40: 'vierzig', 35: 'fünfunddreißig', 30: 'dreißig', 25: 'fünfundzwanzig',
    20: 'zwanzig', 15: 'fünfzehn', 10: 'zehn', 5: 'fünf', 1: 'ein' };
  for (const t of Object.keys(WORD)) L['quote' + t] = [[['v', `Gelöst haben das etwa ${WORD[t]} Prozent.`]]];

  root.BW_LINES = L;
})(typeof window !== 'undefined' ? window : globalThis);
