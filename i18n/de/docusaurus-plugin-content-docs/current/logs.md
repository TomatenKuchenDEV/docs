---
title: Logs
description: Diese Seite erklärt das Logsystem.
---

TomatenKuchen hat ein sehr funktionsreiches Logsystem, was die meisten aller Aktionen loggt, die Bots feststellen können.

Beachte, dass für die meisten Logs die Berechtigung "Auditlog ansehen" benötigt wird.

## Logkanäle mit Kategorien {#categories}

Logs sind in verschiedene Kategorien zusammengefasst. Für jede Kategorie kann ein Kanal ausgewählt werden, in den die Logs gesendet werden sollen. Die Kategorien sind:

- `messageUpdate`: Nachricht eines Nutzers bearbeitet
- `messageDelete`: Nachricht eines Nutzers gelöscht
- `channelThread`: Kanal oder Thread erstellt/bearbeitet/gelöscht
- `emojiSticker`: Emoji oder Sticker erstellt/bearbeitet/gelöscht
- `guild`: Sonstige Serveränderungen, z. B. Name oder Icon
- `event`: Event erstellt/bearbeitet/gelöscht
- `user`: Nutzer ändert den globalen Benutzernamen, Anzeigenamen oder Avatar
- `member`: Sonstige Nutzeränderungen, z. B. Name, Avatar oder Rollen
- `timeout`: Nutzer getimeouted oder enttimeouted
- `kick`: Nutzer gekickt
- `ban`: Nutzer gebannt oder entbannt
- `voice`: Aktionen im Sprachkanal

## Von Logs ignorierte Kanäle {#excluded-channels}

Hier können Kanäle festgelegt werden, von denen keine Logs gesendet werden.
