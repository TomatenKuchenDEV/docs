---
title: Nachrichten löschen
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärungen zu den Moderationsbefehlen
---

## Syntax

`purge <Anzahl> [<Filter>] [pinned]`

Wenn `pinned` angegeben wird werden auch angepinnte Nachrichten gelöscht.

## Mögliche Filter

`<Filter>` kann einer der folgenden sein:
- `<Nutzer>`: Löscht nur Nachrichten von dem angegebenen Nutzer
- bot: Löscht nur Nachrichten von Bots
- nobot: Löscht nur Nachrichten von Menschen
- embed: Löscht nur Nachrichten mit Embeds
- file: Löscht nur Nachrichten mit Anhängen
- mention: Löscht nur Nachrichten mit Erwähnungen
- link: Löscht nur Nachrichten mit Links
- emoji: Löscht nur Nachrichten mit Emojis
- `contains <Text>`: Löscht nur Nachrichten, die einen bestimmten Text enthalten
- `notcontains <Text>`: Löscht nur Nachrichten, die einen bestimmten Text *nicht* enthalten

Du kannst auch mithilfe der Parameter `-after=<Nachrichten-ID>` und `-before=<Nachrichten-ID>` Nachrichten löschen, die zwischen zwei verschiedenen Nachrichten gesendet wurden.

:::info Nicht alle Nachrichten wurden gelöscht?

Wenn TomatenKuchen nicht die Anzahl an Nachrichten gelöscht hat, die du angegeben hast, kann das folgende Gründe haben:
- Die Nachrichten sind älter als zwei Wochen
- Die Nachrichten sind angepinnt und `pinned` wurde nicht als Argument angegeben
- Die Nachrichten entsprechen nicht dem Filter

Beachte auch, dass die angegebene Anzahl nur die Anzahl der Nachrichten angibt, welche geladen wird -
nicht die Anzahl an Nachrichten, die gelöscht wird.

:::
