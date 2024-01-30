---
title: Private voicechannels
description: TomatenKuchen is a multipurpose Discord bot with a lot of features. Explains private channels and their commands
---

As soon as a user enters the channel selected in the dashboard, a new private voice channel is created.
The permissions for this channel can be set with the `permission` command.

## Settings {#settings}

You can set different voice channels in the dashboard, and select for each of them a category for the channel to be created in.
The name can be configured too using the user- or nickname and/or an incrementing ID.

## Commands {#commands}

### Open {#cmd-open}

Allow everyone to join and speak in your private channel.

<Command slash="permission open"></Command>

### Close {#cmd-close}

Remove private channel permissions from everyone but you.
Users who joined before can stay and still speak in the voice channel, but cannot rejoin.

<Command slash="permission close"></Command>

### Kick all users {#cmd-reset}

Kick everyone out of your voice channel except you.

<Command slash="permission reset"></Command>

### Add user {#cmd-add}

Allow the specified user to join your voice channel.

<Command slash="permission add user:User" message="permission add <User>"></Command>

Alternatively, you can use the select menu in your private channel.

### Remove user {#cmd-remove}

Kicks the specified user from your voice channel and remove their permissions to rejoin.

<Command slash="permission remove user:User" message="permission remove <User>"></Command>

Alternatively, you can use the select menu in your private channel.

### Add a moderator {#cmd-addmod}

Moderators can, like the owner, use all private channel commands.

They also have Stream permissions.

<Command slash="permission addmod user:User" message="permission addmod <User>"></Command>

Alternatively, you can use the select menu in your private channel.

### Remove a moderator {#cmd-removemod}

<Command slash="permission removemod user:User" message="permission removemod <User>"></Command>

Alternatively, you can use the select menu in your private channel.

### Set the user limit {#cmd-setlimit}

Limit how many users can join your voice channel.

<Command slash="permission setlimit limit:User limit" message="permission setlimit <User limit>"></Command>
