---
title: Private voicechannels
lang: en
---

As soon as a user enters the channel selected in the dashboard, a new private voice channel is created.
The permissions for this channel can be set with the `permission` command.

## Open

Allow everyone to join your voice channel.

`permission open`

## Close

Remove voice channel permissions from everyone but you.
Users who joined before can still stay in the voice channel and speak as well, but cannot rejoin.

`permission close`

## Kick all users

Kick everyone out of your voice channel except you.

`permission reset`

## Add user

Allow the specified user to join your voice channel.

`permission add <User>`

Alternatively, you can use the select menu in your voice channel.

## Remove user

Remove the specified user from your voice channel and remove their permissions to rejoin.

`permission remove <User>`

## Set the user limit

Limit how many users can join your voice channel.

`permission setlimit <Limit>`
