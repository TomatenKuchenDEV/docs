---
title: Minecraft commands
description: Explains commands related to the video game Minecraft. They allow you to quickly get player, server status or recipe information.
---

This page lists all commands that are related to the game "Minecraft", and explains their features.

## minecraft player {#cmd-player}

<Command name="minecraft player" slash="name:Player name" message="<Player name>"></Command>

Displays information about the given player.

## minecraft recipe {#cmd-recipe}

<Command name="minecraft recipe" slash="item:Minecraft item ID" message="<Minecraft item ID>"></Command>

Displays the crafting recipe of the given item.

## minecraft update {#cmd-update}

<Command name="minecraft update"></Command>

Displays a live status of a Minecraft server somewhere on your server.

See [Minecraft server status update](/mcupdate).

<!--
## minecraft lint {#cmd-lint}

<Command name="minecraft lint" slash="command:Minecraft commands" message="<Minecraft commands>"></Command>

Validates the given Minecraft commands.
-->

## mcserver {#cmd-mcserver}

<Command name="mcserver" slash="ip:Server IP [port:Server port]" message="<Server IP> [<Server port>]"></Command>

Displays information about the given Minecraft server.

- ip*: The IP (aka domain) of the server
- port: The port of the server. If not set the default port (`25565`) is used.
