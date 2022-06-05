---
title: Private voicechannels
lang: en
---

Sobald ein Nutzer den im Dashboard ausgewählten Kanal betritt, wird ein neuer privater Sprachkanal erstellt.
Die Rechte für diesen Kanal lassen sich mit dem Befehl `permission` einstellen.

## Open

Allow everyone to join your voice channel.

`permission open`

## Close

Entferne jedem außer dir die Rechte für den Sprachkanal.
Die Nutzer können noch im Sprachkanal bleiben und auch sprechen, aber nicht erneut beitreten.

`permission close`

## Kick all users

Kick everyone except you out of your voice channel.

`permission reset`

## Add user

Allow the specified user to join your voice channel.

`permission add <Nutzer>`

## Remove user

Remove the specified user from your voice channel and remove their perms to rejoin.

`permission remove <Nutzer>`

## Set the user limit

Sets a limit how many users can join your voice channel.

`permission setlimit <Limit>`
