---
title: Private voicechannels
description: Explains private channels and their commands
---

As soon as a user enters the channel selected in the dashboard, a new private voice channel is created.
The permissions for this channel can be set with the `permission` command.

## Private channels {#setting}

The [private voice channel setting](https://tomatenkuchen.com/dashboard/settings#privateVoiceChannel) allows you to select voice channels which will create a new private channel for a user once they join it. The user is automatically moved to their own channel and can modify it using the commands below.

You are able to change the category under which the channels are created, and the default channel name.

## Channel name variables {#vars}

- `{id}`: A temporary unique ID which can be re-assigned if the previous channel was deleted
- `{username}`: The username of the user who created the channel
- `{displayName}`: The display name of the user
- `{globalName}`: The global display name of the user

## Commands {#commands}

### Open {#cmd-open}

Allow everyone to join and speak in your private channel.

<Command name="permission open"></Command>

### Close {#cmd-close}

Remove private channel permissions from everyone but you.
Users who joined before can stay and still speak in the voice channel, but cannot rejoin.

<Command name="permission close"></Command>

### Kick all users {#cmd-reset}

Kick everyone out of your voice channel except you.

<Command name="permission reset"></Command>

### Add user {#cmd-add}

Allow the specified user to join your voice channel.

<Command name="permission add" slash="user:User" message="<User>"></Command>

Alternatively, you can use the select menu in your private channel.

### Remove user {#cmd-remove}

Kicks the specified user from your voice channel and remove their permissions to rejoin.

<Command name="permission remove" slash="user:User" message="<User>"></Command>

Alternatively, you can use the select menu in your private channel.

### Add a moderator {#cmd-addmod}

Moderators can, like the owner, use all private channel commands.

They also have Stream permissions.

<Command name="permission addmod" slash="user:User" message="<User>"></Command>

Alternatively, you can use the select menu in your private channel.

### Remove a moderator {#cmd-removemod}

<Command name="permission removemod" slash="user:User" message="<User>"></Command>

Alternatively, you can use the select menu in your private channel.

### Set the user limit {#cmd-setlimit}

Limit how many users can join your voice channel.

<Command name="permission setlimit" slash="limit:User limit" message="<User limit>"></Command>
