---
title: Minecraft commands
description: There are many commands related to the game Minecraft that allow you quick information access.
---

This page lists all commands that are related to the game "Minecraft", and explains their features.

## minecraft player {#cmd-player}

<Command slash="minecraft player name:Player name" message="minecraft player <Player name>"></Command>

Displays information about the given player.

## minecraft recipe {#cmd-recipe}

<Command slash="minecraft recipe item:German Minecraft item name" message="minecraft recipe <German Minecraft item name>"></Command>

Displays the crafting recipe of the given item.

## minecraft update {#cmd-update}

<Command slash="minecraft update"></Command>

Displays a live status of a Minecraft server somewhere on your server.

See [Minecraft server status update](/mcupdate).

## minecraft lint {#cmd-lint}

<Command slash="minecraft lint command:Minecraft commands" message="minecraft lint <Minecraft commands>"></Command>

Validates the given Minecraft commands.

## mcserver {#cmd-mcserver}

<Command slash="mcserver ip:Server IP [port:Server port]" message="mcserver <Server IP> [<Server port>]"></Command>

Displays information about the given Minecraft server.

- ip*: The IP (aka domain) of the server
- port: The port of the server. If not set the default port (`25565`) is used.
