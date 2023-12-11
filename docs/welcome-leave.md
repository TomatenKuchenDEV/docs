---
title: Welcome and leave messages
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains on how to set up member welcome and leave messages.
---

## Settings

### Welcome messages channel

Sets the channel in which join messages are sent.
Leave empty to disable them.

### Leave messages channel

Sets the channel in which a message is sent when a user leaves the server.

### Welcome message

Modify the message which is shown when someone joins the server.

The following variables are available:
- `{servername}`: Server name
- `{servericon}`: Server icon
- `{membercount}`: Member count
- `{username}`: Username
- `{globalname}`:  Global nickname
- `{userid}`: User ID
- `{usermention}`: User mention
- `{useravatar}`: User avatar
- `{inviterusername}`: Username of the inviter
- `{inviterid}`: ID of the inviter
- `{invitermention}`: Mention of the inviter
- `{inviteravatar}`: Avatar of the inviter

### Leave message

Modify the message that is displayed when a user leaves the server.

There same variables as for welcome message can be used.

### Delete welcome messages on leave

Sets the maximum time the user can have taken to leave the server.

This way, welcome messages from users that were less than for example ten minutes (`10m`) on the server can be deleted.

### Delete leave messages on rejoin

Sets the maximum time the user can have taken to join the server again.
