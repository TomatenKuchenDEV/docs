---
title: Private voicechannels
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains private channels and their commands
---

As soon as a user enters the channel selected in the dashboard, a new private voice channel is created.
The permissions for this channel can be set with the `permission` command.

## Settings {#settings}

You can set different voice channels in the dashboard, and select for each of them a category for the channel to be created in.
The name can be configured too using the user- or nickname and/or an incrementing ID.

## Commands {#commands}

### Open {#cmd-open}

Allow everyone to join and speak in your private channel.

`permission open`

### Close {#cmd-close}

Remove private channel permissions from everyone but you.
Users who joined before can stay and still speak in the voice channel, but cannot rejoin.

`permission close`

### Kick all users {#cmd-reset}

Kick everyone out of your voice channel except you.

`permission reset`

### Add user {#cmd-add}

Allow the specified user to join your voice channel.

`permission add <User>`

Alternatively, you can use the select menu in your private channel.

### Remove user {#cmd-remove}

Kicks the specified user from your voice channel and remove their permissions to rejoin.

`permission remove <User>`

Alternatively, you can use the select menu in your private channel.

### Add a moderator {#cmd-addmod}

Moderators can, like the owner, use all private channel commands.

They also have Stream permissions.

`permission addmod <User>`

Alternatively, you can use the select menu in your private channel.

### Remove a moderator {#cmd-removemod}

`permission removemod <User>`

Alternatively, you can use the select menu in your private channel.

### Set the user limit {#cmd-setlimit}

Limit how many users can join your voice channel.

`permission setlimit <Limit>`
