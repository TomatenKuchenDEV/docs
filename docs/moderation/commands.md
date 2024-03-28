---
title: Commands
description: Lists moderation commands
---

If the [setting "Enforce reason"](./settings#enforce-reason) is enabled, the argument "Reason" is not optional anymore.

## Ban user {#cmd-ban}

<Command name="ban" slash="user:User [time:Temp ban time] [reason:Reason] [forceban:Forceban user?]" message="<User> [<Temp ban time> <...Reason>] [forceban]"></Command>

If `forceban` is used, the bot won't check if the user is already banned.

## Unban user {#cmd-unban}

<Command name="unban" slash="user:User [reason:Reason]" message="<User> [<...Reason>]"></Command>

## List banned or muted users {#cmd-banlist}

<Command name="banlist" slash="[user:User]" message="[<User>]"></Command>

Lists bans and currently timeouted users on the server.

You can optionally specify a user to make the bot display information about the specific action instead, e.g. the ban reason.

## View user modlogs {#cmd-modlogs}

<Command name="modlogs" slash="[user:User] [moderator:Moderator to filter by]" message="[<User>] [<Moderator to filter by>]"></Command>

Shows the modlogs of a user.

You can optionally filter by the moderator which applied the sanction.

## Kick user {#cmd-kick}

<Command name="kick" slash="user:User [reason:Reason]" message="<User> [<...Reason>]"></Command>

Kicks a user from the server.

## Lock one or multiple channels {#cmd-lock}

<Command name="lock lock" slash="channels:Channels to lock [reason:Reason]" message="<...Channels> [<...Reason>]"></Command>

<Command name="lock unlock" slash="channels:Channels to unlock [reason:Reason]" message="<...Channels> [<...Reason>]"></Command>

## Let the bot send a custom message {#cmd-text-output}

<Command name="say" slash="text:Output text [attachment:Attachment]" message="<...Output text> [Attachment]"></Command>

<Command name="embed" slash="[input/file:Message input] [channel:Channel]" message="[<...Content> <Channel>]"></Command>

## Change the slowmode of a channel {#cmd-slowmode}

<Command name="slowmode" slash="[time:New slowmode]" message="[<New slowmode>]"></Command>

The "New slowmode" value cannot be longer then 6 hours.

If no time is entered, the current slowmode is returned.
Using `0` the slowmode can be disabled.

## Mute a user {#cmd-mute}

<Command name="mute" slash="user:User [time:Mute time] [reason:Reason]" message="<User> [<Mute time>] [<...Reason>]"></Command>

This uses the Discord timeout feature to prevent users from sending DMs, pressing buttons and adding reactions in addition to the normal role-mute behavior.

## Unmute a user {#cmd-unmute}

<Command name="unmute" slash="user:User [reason:Reason]" message="<User> [<...Reason>]"></Command>v

## Voice mute a user {#cmd-voicemute}

<Command name="voicemute" slash="user:User time:Time [scope:Mute|Deaf|Both] [channels:Voice channels] [reason:Reason]" message="<User> <Time> [<Scope>] [<...Voice channels>] [<...Reason>]"></Command>

Mutes or deafs a user in all or only the selected voice channels.

"Scope" allows you to select the action type, possible options are:
- Mute only
- Deaf only
- Mute and deaf

## Warn a user {#cmd-warn}

<Command name="warn" slash="user:User [reason:Reason]" message="<User> [<...Reason>]"></Command>

## View statistics {#cmd-mod-stats}

<Command name="stats moderation"></Command>
