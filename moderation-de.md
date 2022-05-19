---
title: Moderation
lang: de
---

# Befehle

## Nutzer bannen

`ban <Nutzer> [Grund]`

## Nutzer entbannen

`unban <Nutzer> [Grund]`

## Gebannte Nutzer anzeigen

`banlist`

## Modlogs eines Benutzers anzeigen

`modlogs <Nutzer>`

## Nutzer kicken

`kick <Nutzer> [Grund]`

## Sperre einen Kanal oder den ganzen Server

`lock server|channel an|aus`

## Lösche bis zu 100 Nachrichten

`purge <Anzahl> [<Nutzer>|<Filter>]`

## Text ausgeben

`say <Nachricht>`

## Ändere den Slowmode vom aktuellen Kanal

`slowmode <Dauer>`

## Mute einen Nutzer

`mute <Nutzer> <Zeit> <Grund>`

## Entmute einen Nutzer

`unmute <Nutzer> <Grund>`

## Verwarne einen Nutzer

`warn <Nutzer> <Grund>`

# Nachrichten mithilfe von RegEx filtern

Du kannst mit einer Einstellung im Dashboard Nachrichten filtern und, wenn der Filter etwas findet, die Nachricht löschen.
Auch kannst du dort RegExps nutzen, auch wenn es dort einige [Einschränkungen](https://npmjs.com/package/re2#limitations-things-re2-does-not-support) gibt.

**Nutzer mit der Berechtigung "Server verwalten" sind hiervon ausgenommen!**

## Ratelimits
Diese Filter haben ein eigenes Ratelimit vom Bot aus, wenn zu viele Nachrichten in kurzer Zeit gesendet werden oder viele Nachrichten vom Bot gelöscht werden, wird kurzzeitig der Filter deaktiviert, um Spam zu vermeiden und wichtigere Aktionen nicht zu blockieren.

## Beispiele
`sus|lol` löscht alle Nachrichten, welche irgendwo "sus" oder "lol" enthalten.
`si?u` löscht alle Nachrichten, welche "siu" oder "su" enthalten.
