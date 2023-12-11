---
title: YouTube-Feeds
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Der Bot hat unter anderem die Möglichkeit, hochgeladene Videos oder Shorts von YouTube-Kanälen anzukündigen.
---

YouTube-Benachrichtigungen erlauben dir, eine Nachricht zu senden, wenn ein Nutzer ein neues Video oder Short auf YouTube hochlädt.
Wenn ein Nutzer eine Premiere plant wird diese auch gesendet.

Der Bot sucht alle zehn Minuten nach neuen Videos, aufgrund von Limitierungen von YouTube kann es in Einzelfällen aber auch mal etwas länger dauern.

## Befehl {#command}

Der Befehl `youtube <Suche nach Kanalname>` zeigt dir eine Liste von Kanälen an, die mit deiner Suchanfrage übereinstimmen.
Durch das Auswählen eines Kanals werden weitere Informationen angezeigt, z. B. die Anzahl der Videos und der Abonnenten.

## Einstellungen {#settings}

Die YouTube-Nutzer-ID für das `channel`-Feld erhältst du mit dem `youtube`-Befehl oder mit dem "Teilen"-Button auf der Kanalinfo-Seite eines Kanals, indem man auf die Beschreibung und dann den Teilen-Button klickt.

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
