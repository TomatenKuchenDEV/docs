---
title: Welcome and leave messages
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains on how to set up member welcome and leave messages.
---

Hier findest du alle Einstellungen, die du im [Dashboard](https://tomatenkuchen.com/dashboard/settings#welcomeChannel) für Willkommens- und Leavenachrichten anpassen kannst.

## Welcome messages channel {#settings-welcome-channel}

Sets the channel in which join messages are sent.
Leave empty to disable them.

## Leave messages channel {#settings-leave-channel}

Sets the channel in which a message is sent when a user leaves the server.

## Welcome message {#settings-welcome-message}

Modify the message which is shown when someone joins the server.

The following variables are available:
- `{serverName}`: Server name
- `{serverIcon}`: Server icon
- `{memberCount}`: Member count
- `{username}`: Username
- `{globalName}`:  Global nickname
- `{userid}`: User ID
- `{userMention}`: User mention
- `{userAvatar}`: User avatar
- `{inviterUsername}`: Username of the inviter
- `{inviterid}`: ID of the inviter
- `{inviterMention}`: Mention of the inviter
- `{inviterAvatar}`: Avatar of the inviter

## Leave message {#settings-leave-message}

Modify the message that is displayed when a user leaves the server.

There same variables as for welcome message can be used.

## Delete welcome messages on leave {#settings-delete-welcome-on-leave}

Sets the maximum time the user can have taken to leave the server.

This way, welcome messages from users that were less than for example ten minutes (`10m`) on the server can be deleted.

## Delete leave messages on rejoin {#settings-delete-leave-on-rejoin}

Sets the maximum time the user can have taken to join the server again.
