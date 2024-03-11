---
title: Welcome and leave messages
description: Explains on how to set up member welcome and leave messages.
---

Hier findest du alle Einstellungen, die du im [Dashboard](https://tomatenkuchen.com/dashboard/settings#welcomeChannel) für Willkommens- und Leavenachrichten anpassen kannst.

## Welcome messages channel {#welcome-channel}

Sets the channel in which join messages are sent.
Leave empty to disable them.

## Leave messages channel {#leave-channel}

Sets the channel in which a message is sent when a user leaves the server.

## Welcome message {#welcome-message}

Modify the message which is shown when someone joins the server.

The following variables are available (casing doesn't matter):
- `{serverName}`: Server name
- `{serverIcon}`: Server icon
- `{memberCount}`: Member count
- `{username}`: Username of the user who joined the server
- `{globalName}`:  Global nickname
- `{userId}`: User ID
- `{userMention}`: User mention
- `{userAvatar}`: User avatar
- `{inviterUsername}`: Username of the inviter
- `{inviterId}`: ID of the inviter
- `{inviterMention}`: Mention of the inviter
- `{inviterAvatar}`: Avatar of the inviter

## Leave message {#leave-message}

Modify the message that is displayed when a user leaves the server.

There same variables as for welcome message can be used.

## Delete welcome messages on leave {#delete-welcome-on-leave}

Sets the maximum time the user can have taken to leave the server.

This way, welcome messages from users that were less than for example ten minutes (`10m`) on the server can be deleted.

## Delete leave messages on rejoin {#delete-leave-on-rejoin}

Sets the maximum time the user can have taken to join the server again.

## Remove users on leave {#remove-left-users}

The setting, if enabled, causes the left user, as soon as they leave the server, to be removed from suggestions as voter and giveaways they joined.
