---
title: Moderation
lang: en
---

# Commands

## Ban user

`ban <User> [<Reason>]`

## Unban user

`unban <User> [<Reason>]`

## Show banned users

`banlist`

## Show modlogs of a user

`modlogs <User>`

## Kick user

`kick <User> [<Reason>]`

## Sperre einen Kanal oder den ganzen Server

`lock server|channel on|off`

## Delete up to 100 messages

`purge <Amoung> [<User>|<Filter>]`

## Display a text

`say <Message>`

## Ändere den Slowmode vom aktuellen Kanal

`slowmode <Amount in seconds>`

## Mute a User

`mute <User> <Time> <Reason>`

## Unmute a user

`unmute <User> <Reason>`

## Warn a user

`warn <User> <Reason>`

# Nachrichten mithilfe von RegEx filtern

Du kannst mit einer Einstellung im Dashboard Nachrichten filtern und, wenn der Filter etwas findet, die Nachricht löschen.
Auch kannst du dort RegExps nutzen, auch wenn es dort einige [Einschränkungen](https://npmjs.com/package/re2#limitations-things-re2-does-not-support) gibt.

**Nutzer mit der Berechtigung "Server verwalten" sind hiervon ausgenommen!**

## Ratelimits
Diese Filter haben ein eigenes Ratelimit vom Bot aus, wenn zu viele Nachrichten in kurzer Zeit gesendet werden oder viele Nachrichten vom Bot gelöscht werden, wird kurzzeitig der Filter deaktiviert, um Spam zu vermeiden und wichtigere Aktionen nicht zu blockieren.

## Beispiele
`sus|lol` löscht alle Nachrichten, welche irgendwo "sus" oder "lol" enthalten.
`si?u` löscht alle Nachrichten, welche "siu" oder "su" enthalten.
