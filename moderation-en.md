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

## Show modlogs of an user

`modlogs <User>`

## Kick user

`kick <User> [<Reason>]`

## Lock a channel or the whole server

`lock server|channel on|off`

## Delete up to 100 messages

`purge <Amount> [<User>|<Filter>]`

## Let the bot send a custom message

`say <Message>`

## Change the slowmode of the current channel

`slowmode <Amount in seconds>`

## Mute an user

`mute <User> <Time> <Reason>`

## Unmute an user

`unmute <User> [<Reason>]`

## Warn an user

`warn <User> <Reason>`


# Filter messages using a RegEx

You can filter messages with a setting in the dashboard and, if the filter finds something, have the message deleted.
Also you can use there RegExps, although there are some [restrictions](https://npmjs.com/package/re2#limitations-things-re2-does-not-support).

**Users with the permission "Manage Server" are excluded from the message filter!**

## Ratelimits
These filters have their own rate limit; if too many messages are sent in a short time or many messages are deleted from the bot, the filter is briefly disabled to avoid spam and not block more important actions.

## Examples
`sus|lol` deletes all messages which contain "sus" or "lol".
`si?u` deletes all messages which contain "siu" or "su".
