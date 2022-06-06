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

## Lock a channel or the whole server

`lock server|channel on|off`

## Delete up to 100 messages

`purge <Amount> [<User>|<Filter>]`

## Display a text

`say <Message>`

## Change the slowmode of the current channel

`slowmode <Amount in seconds>`

## Mute a User

`mute <User> <Time> <Reason>`

## Unmute a user

`unmute <User> [<Reason>]`

## Warn a user

`warn <User> <Reason>`


# Filter messages using a RegEx

Du kannst mit einer Einstellung im Dashboard Nachrichten filtern und, wenn der Filter etwas findet, die Nachricht löschen.
Auch kannst du dort RegExps nutzen, auch wenn es dort einige [Einschränkungen](https://npmjs.com/package/re2#limitations-things-re2-does-not-support) gibt.

**Users with the permission "Manage Server" are excluded from this!**

## Ratelimits
Diese Filter haben ein eigenes Ratelimit vom Bot aus, wenn zu viele Nachrichten in kurzer Zeit gesendet werden oder viele Nachrichten vom Bot gelöscht werden, wird kurzzeitig der Filter deaktiviert, um Spam zu vermeiden und wichtigere Aktionen nicht zu blockieren.

## Examples
`sus|lol` deletes all messages which contain "sus" or "lol".
`si?u` deletes all messages which contain "siu" or "su".
