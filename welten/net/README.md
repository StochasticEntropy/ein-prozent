# net/room.js – Mehrspieler-Räume ohne Server

ES-Modul ohne Oberfläche. Geräte verbinden sich direkt per WebRTC über PeerJS. Das Gerät, das den Raum erstellt, ist die **Autorität**: Es hält den Spielzustand, die anderen Geräte schicken nur Eingaben.

```
net/
  room.js                       das Modul
  vendor/peerjs-1.5.4.min.js    PeerJS 1.5.4 (MIT), fest gepinnt, von cdnjs
  vendor/qrcode-generator-1.4.4.min.js   qrcode-generator 1.4.4 (MIT), fest gepinnt, von cdnjs
  demo.html                     Testseite: bewegliche Punkte, Chat, Rätselphase
  test-room.js                  Playwright-Test mit 3 Browsern
```

SHA-256 der Vendor-Dateien:

| Datei | SHA-256 |
|---|---|
| peerjs | `ad5d8870d1e389914f9cba8d35be313c4327c69ee0a221e482e9bf7621136fe5` |
| qrcode | `164fc2c1c9eaf0a03aa8dfdb855e82e41a5c6922fbad8bb3238116207e26bef7` |

Die Bibliotheken werden relativ zu `room.js` geladen, zur Laufzeit gibt es keine CDN-Abhängigkeit. **Die Vermittlung** (Signalisierung, der Austausch der Verbindungsdaten) läuft über den öffentlichen PeerJS-Server `0.peerjs.com`. Mehrspieler braucht deshalb Internet; Einzelspieler-Teile eines Spiels sind davon nicht betroffen.

## Gastgeber

```js
import { createRoom } from './net/room.js';

const room = await createRoom({ name: 'Lena' });
room.code        // 'K7QM' – 4 Zeichen, ohne verwechselbare Zeichen
room.joinUrl     // '<seite>?join=K7QM' (anpassbar über die Option joinUrl: code => url)
room.qrDataUrl   // QR-Code als Bild-Data-URL (<img src>)
room.qrSvg       // derselbe QR-Code als SVG-Text

room.on('peer-join',      ({ peer }) => …);                 // peer = { id, name, meta, connected, rtt }
room.on('peer-leave',     ({ peer, reason }) => …);         // reason: 'lost' | 'paused' | 'left' | 'kicked'
room.on('peer-reconnect', ({ peer }) => …);                 // derselbe Spieler ist wieder da (gleiche id)
room.on('message',        ({ from, msg }) => …);            // Eingaben der Gäste
room.on('latency',        ({ peer, rtt }) => …);            // ms, geglättet; alle heartbeatMs
room.on('state',          ({ state, patch, version }) => …); // nach jedem verschickten Delta
room.on('error',          ({ error }) => …);                // nicht fatal, z. B. Vermittlungsserver kurz weg

room.setState({ phase: 'lobby', players: { [id]: { x: .5, y: .5 } } });  // Merge-Patch, gebündelt
room.setState({ phase: 'riddle' }, { immediate: true });                  // sofort senden
room.broadcast({ type: 'chat', text });          // Nachricht an alle Gäste
room.sendTo(peerId, { type: 'secret', hint });   // an einen Gast (verdeckt)
room.peers();                                    // [{ id, name, meta, connected, rtt }]
room.lock();                                     // keine neuen Spieler (bekannte dürfen wiederverbinden)
room.kick(peerId);
room.close();                                    // Gäste bekommen host-lost { reason: 'closed' }
```

## Gast

```js
import { joinRoom } from './net/room.js';

const me = await joinRoom('K7QM', { name: 'Omar', meta: { avatar: 'fuchs' } });
me.id; me.state; me.rtt; me.status;            // status: 'open' | 'reconnecting' | 'closed'

me.on('state',        ({ state, patch, snapshot }) => render(state));   // snapshot: true = voller Stand
me.on('message',      ({ msg }) => …);
me.on('disconnected', () => …);                // Verbindung weg, Wiederverbinden läuft
me.on('reconnect',    () => …);                // wieder da – gleiche id, frischer Zustand
me.on('host-lost',    ({ reason }) => …);      // 'closed' | 'gone' | 'timeout' → Spiel beenden
me.on('latency',      ({ rtt }) => …);
me.on('error',        ({ error }) => …);       // z. B. kicked

me.send({ type: 'answer', choice: 2 });                   // wird bei Abbruch gepuffert und nachgeschickt
me.send({ type: 'move', x, y }, { key: 'move' });         // Puffer behält nur die neueste Position
me.send({ type: 'emote' }, { volatile: true });           // bei Abbruch verwerfen
me.leave();                                               // endgültig gehen (Identität vergessen)
```

`joinRoom` wirft einen `Error` mit `code` und einer deutschen `message`, die man direkt anzeigen kann:

| `code` | Bedeutung |
|---|---|
| `offline` | keine Internetverbindung |
| `room-not-found` | Code falsch oder Raum geschlossen |
| `server-unreachable` | Vermittlungsserver nicht erreichbar |
| `no-direct-connection` | strenges Netz blockiert WebRTC |
| `room-full` | Raum ist voll |
| `room-locked` | Spiel läuft schon |
| `browser-unsupported` | Browser kann kein WebRTC |
| `lib-missing` | Bibliothek konnte nicht geladen werden |

## Zustand und Nachrichten

- **Zustand** ist ein JSON-Objekt beim Gastgeber, das **alle** sehen. Änderungen verschickt man als JSON-Merge-Patch (RFC 7386): Objekte werden zusammengeführt, `null` löscht einen Eintrag.
  - Patches werden gesammelt und höchstens `tickHz`-mal pro Sekunde (Standard 15) als **Delta** mit Versionsnummer verschickt.
  - Neue oder wiederverbundene Gäste bekommen sofort einen **Snapshot**; zusätzlich gibt es alle `snapshotEveryMs` einen Sicherheits-Snapshot.
  - Bemerkt ein Gast eine Versionslücke, fordert er selbst einen Snapshot an.
- **Geheimnisse gehören nicht in den Zustand.** Antworten, Lösungen und private Hinweise schickt man per `send` an den Gastgeber und per `sendTo` an einzelne Gäste. Erst bei der Auflösung legt man sie in den Zustand. Ein Beispiel ist die Rätselphase in `demo.html`: Im Zustand steht nur `answered: { id: true }`, und erst `reveal` enthält die Antworten.
- **Positionen** (10–15 Hz) schicken Gäste mit `send(…, { key: 'move' })`. Der Gastgeber übernimmt sie per `setState`, und das Bündeln auf `tickHz` passiert automatisch.

## Identität und Wiederverbinden

- Der Gast bekommt pro Raum ein Token in localStorage (`<prefix><code>:token`). Nach Neuladen, Funkloch oder Wechsel zwischen WLAN und Mobilfunk meldet er sich damit wieder an und bekommt **dieselbe Spieler-ID**. Der Gastgeber meldet dann `peer-reconnect`.
- **Herzschlag:** Beide Seiten pingen alle `heartbeatMs`. Daraus entstehen auch die Latenzwerte. Ohne Lebenszeichen für `lostAfterMs` gilt die Verbindung als abgerissen.
  - Ein Gast versucht dann `retryForMs` lang, sich wieder zu verbinden.
  - Danach meldet er `host-lost`.
  - Schlägt ein Senden fehl, startet er sofort neu.
- **Neuladen:** Ein Gast meldet sich beim Neuladen oder Schließen der Seite kurz ab (`pagehide`), damit der Gastgeber nicht in tote Kanäle sendet. Ein Gastgeber schließt den Raum beim Verlassen der Seite.

## Optionen (Standardwerte)

```js
{ prefix: 'raetselwelten-v1-', codeLength: 4, maxPeers: 8, heartbeatMs: 2000, lostAfterMs: 8000,
  retryForMs: 60000, connectTimeoutMs: 12000, tickHz: 15, snapshotEveryMs: 10000, queueLimit: 50,
  iceServers: [Google-STUN], peerOptions: {}, storage: localStorage, joinUrl: code => url, name, meta }
```

- **Strenge Netze** (Firmen-WLAN, manche Mobilfunknetze) brauchen einen TURN-Server, zum Beispiel `iceServers: [{ urls: 'turn:…', username, credential }]`. Ohne TURN kommt dort die Meldung `no-direct-connection`.
- **Eigener Vermittlungsserver:** `peerOptions: { host, port, path, secure }` (siehe PeerJS-Dokumentation).
- **Wegfall des Gastgebers:** Mit den Standardwerten dauert es bis zu `lostAfterMs + retryForMs` (etwa 70 s), bis Gäste `host-lost` melden. Für schnelleres Aufgeben `retryForMs` verkleinern; der Test nutzt 6 s und kommt auf etwa 21 s.

## Test

```bash
python3 -m http.server 8795 --bind 127.0.0.1    # im Projektordner
NODE_PATH=<ordner mit playwright-core 1.47> node net/test-room.js http://127.0.0.1:8795 <ausgabeordner>
```

Der Test nutzt drei getrennte Browser: Gastgeber auf WebKit, Gast 1 auf Chromium, Gast 2 auf WebKit. Er prüft 15 Punkte:
- Beitritt mit eigenen IDs, QR-Code
- Sync-Rate (gemessen 11–13 Updates/s) und Konsistenz der Positionen auf allen Geräten
- Latenz in beide Richtungen, Chat
- verdeckte Antworten bis zur Auflösung, Auflösung
- Neuladen (gleiche ID und Snapshot)
- harter Verbindungsabbruch mit Selbst-Wiederverbinden
- Puffer während des Abbruchs
- falscher Code
- Gastgeber hart beendet (`host-lost` bei beiden Gästen)
- keine JS-Fehler und keine ungefangenen Ausnahmen

Ergebnis: 4 von 4 Läufen grün, Stand 2026-10-31.

Demo zum Ausprobieren: `net/demo.html` in zwei Fenstern öffnen, im einen „Raum erstellen“, im anderen den Code eingeben.
