---
title: AFK
description: Explains the per user AFK system and AFK roles.
---

The AFK/Away-from-keyboard system can be used to indicate the absence of a user.

Users can enable being AFK using the `afk` command.

When a user marked as AFK is mentioned, the bot will display the message set by the user. Once the AFK user sends a message, they will be shown a list of all mentions.

You can use the parameter `{afk}` in [Autoupdate](/autoupdate) messages to display a list of the currently AFK users.

## AFK role {#role}

You can select an AFK role in the [server settings](https://tomatenkuchen.com/dashboard/settings#afkRole) which will be given to users marked as AFK.

## AFK nickname prefix {#nickname-prefix}

A text which is prepended to the nickname of a user who went AFK, and removed after coming back.

## AFK nickname suffix {#nickname-suffix}

The same as above, but the text is appended at the end of the nickname.
