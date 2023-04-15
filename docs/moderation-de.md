---
title: Moderation
lang: de
---

# Befehle

## Nutzer bannen

`ban <Nutzer> [<Grund>]`

## Nutzer entbannen

`unban <Nutzer> [<Grund>]`

## Gebannte oder gemutete Nutzer anzeigen

`banlist [<Nutzer>]`

## Modlogs eines Benutzers anzeigen

`modlogs <Nutzer>`

## Nutzer kicken

`kick <Nutzer> [<Grund>]`

## Sperre einen Kanal oder den ganzen Server

`lock server|channel an|aus`

## Lösche bis zu 100 Nachrichten

`purge <Anzahl> [<Filter>] [pinned]`

`<Filter>` kann einer der folgenden sein:
* <Nutzer>: Löscht alle Nachrichten von einem Nutzer
* bot: Löscht alle Nachrichten von Bots
* nobot: Löscht alle Nachrichten von Menschen
* embed: Löscht alle Nachrichten mit Embeds
* file: Löscht alle Nachrichten mit Anhängen
* mention: Löscht alle Nachrichten mit Mentions
* link: Löscht alle Nachrichten mit Links
* emoji: Löscht alle Nachrichten mit Emojis
* contains <Text>: Löscht alle Nachrichten, die einen bestimmten Text enthalten

## Text ausgeben

`say <Nachricht>`
`embed [<Kanal>]`

Du kannst auch Anhänge, z.B. Bilder, verwenden.

## Ändere den Slowmode vom aktuellen Kanal

`slowmode <Dauer>`

## Mute einen Nutzer

`mute <Nutzer> <Zeit> <Grund>`

## Entmute einen Nutzer

`unmute <Nutzer> [<Grund>]`

## Verwarne einen Nutzer

`warn <Nutzer> <Grund>`

# Massenaktionen

## Nutzer bannen

`mass ban <Grund> <Liste von Nutzern>`

## Nutzer kicken

`mass kick <Grund> <Liste von Nutzern>`
