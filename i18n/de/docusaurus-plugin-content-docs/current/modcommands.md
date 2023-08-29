---
title: Moderations-Befehle
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärungen zu den Moderationsbefehlen
---

Wenn die Einstellung "Grund erzwingen" aktiviert ist, ist das Argument `<Grund>` nicht mehr optional.

## Nutzer bannen

`ban <Nutzer> [<Zeit> <Grund>] [forceban]`

Wenn `forceban` verwendet wird überprüft der Bot nicht, ob der Nutzer bereits gebannt ist.

## Nutzer entbannen

`unban <Nutzer> [<Grund>]`

## Gebannte oder gemutete Nutzer anzeigen

`banlist [<Nutzer>]`

## Modlogs eines Benutzers anzeigen

`modlogs <Nutzer>`

## Nutzer kicken

`kick <Nutzer> [<Grund>]`

## Sperre einen oder mehrere Kanäle

`lock lock|unlock [<Kanäle>]`

## Nachrichten löschen

`purge <Anzahl> [<Filter>] [pinned]`

`<Filter>` kann einer der folgenden sein:
* `<Nutzer>`: Löscht alle Nachrichten von einem Nutzer
* bot: Löscht alle Nachrichten von Bots
* nobot: Löscht alle Nachrichten von Menschen
* embed: Löscht alle Nachrichten mit Embeds
* file: Löscht alle Nachrichten mit Anhängen
* mention: Löscht alle Nachrichten mit Erwähnungen
* link: Löscht alle Nachrichten mit Links
* emoji: Löscht alle Nachrichten mit Emojis
* `contains <Text>`: Löscht alle Nachrichten, die einen bestimmten Text enthalten
* `notcontains <Text>`: Löscht alle Nachrichten, die einen bestimmten Text *nicht* enthalten

Wenn `pinned` angegeben wird werden auch angepinnte Nachrichten gelöscht.

## Text ausgeben

`say <Nachricht>`
`embed [<Inhalt> <Kanal>]`

Du kannst auch Anhänge, z. B. Bilder, verwenden.

## Ändere den Slowmode vom aktuellen Kanal

`slowmode <Dauer>`

## Mute einen Nutzer

`mute <Nutzer> <Zeit> <Grund>`

## Entmute einen Nutzer

`unmute <Nutzer> [<Grund>]`

## Verwarne einen Nutzer

`warn <Nutzer> <Grund>`

## Massenaktionen

### Nutzer bannen

`mass ban <Grund> <Liste von Nutzern, getrennt mit " ", "," oder ";">`

### Nutzer kicken

`mass kick <Grund> <Liste von Nutzern, getrennt mit " ", "," oder ";">`

### Rolle zu vielen Nutzern hinzufügen

`role massadd <Rolle> [<Filter>]`

### Rolle von vielen Nutzern entfernen

`role massremove <Rolle> [<Filter>]`
