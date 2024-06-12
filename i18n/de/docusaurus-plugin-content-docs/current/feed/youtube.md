---
title: YouTube-Feeds
description: TomatenKuchen hat unter anderem die Möglichkeit, hochgeladene Videos oder Shorts von YouTube-Kanälen anzukündigen.
---

YouTube-Benachrichtigungen erlauben dir, eine Nachricht zu senden, wenn ein Nutzer ein neues Video oder Short auf YouTube hochlädt.
Wenn ein Nutzer eine Premiere plant wird diese auch gesendet.

Die App sucht alle zehn Minuten nach neuen Videos.

## Befehl {#command}

<Command name="youtube" slash="channel:Kanalname" message="<Kanalname>"></Command>

Der Befehl zeigt dir eine Liste von Kanälen an, die mit deiner Suchanfrage übereinstimmen.
Durch das Auswählen eines Kanals werden weitere Informationen angezeigt, z. B. die Anzahl der Videos und der Abonnenten.

## Video-Feeds {#feeds}

Die YouTube-Nutzer-ID für das `channel`-Feld in den [YouTube-Feedeinstellungen](https://tomatenkuchen.com/dashboard/settings#ytChannels) erhältst du mit dem `youtube`-Befehl oder mit dem "Teilen"-Button auf der Kanalinfo-Seite eines Kanals, indem man auf die Beschreibung und dann den Teilen-Button klickt.

Jeder Server kann bis zu zehn YouTube-Kanäle hinzufügen und für diese Benachrichtigungen erhalten.

## Variablen {#variables}

Hier findest du eine Erklärung aller Variablen, die in YouTube-Nachrichten verwendet werden können.

- `{link}`: Der Link zum neu hochgeladenen Video oder Short
- `{title}`: Der Titel des Videos
- `{thumbnail}`: Bild-URL zum Thumbnail
- `{description}`: Die Videobeschreibung
- `{channelName}`: Der Kanalname
- `{channelLink}`: Link zum veröffenlichenden Kanal
- `{published}`: Wann das Video veröffentlicht wurde
- `{updated}`: Wann das Video zuletzt bearbeitet wurde - aufgrund der kurzen Zeitspanne bis zur Erkennung meist gleich oder ähnlich zum Veröffentlichungszeitpunkt.
