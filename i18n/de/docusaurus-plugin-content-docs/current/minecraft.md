---
title: Minecraft-Befehle
description: Es gibt viele Befehle für das Spiel Minecraft, welche dir schnellen Zugriff auf Informationen ermöglichen.
---

Diese Seite listet die Befehle auf, die mit dem Spiel "Minecraft" zu tun haben, und erklärt deren Funktionen.

## minecraft player {#cmd-player}

<Command slash="minecraft player name:Spielername" message="minecraft player <Spielername>"></Command>

Zeigt Informationen über den angegebenen Spielernamen.

## minecraft recipe {#cmd-recipe}

<Command slash="minecraft recipe item:Deutscher Name eines Minecraft-Gegenstandes" message="minecraft recipe <Deutscher Name eines Minecraft-Gegenstandes>"></Command>

Zeigt das Herstellungsrezept des angegebenen Gegenstandes.

## minecraft update {#cmd-update}

<Command slash="minecraft update"></Command>

Zeigt den Livestatus eines Minecraft-Servers irgendwo auf deinem Server an.

Siehe [Minecraft-Serverstatus-Update](/mcupdate).

## minecraft lint {#cmd-lint}

<Command slash="minecraft lint command:Minecraft-Befehle" message="minecraft lint <Minecraft-Befehle>"></Command>

Validiert die eingegebenen Minecraft-Befehle.

## mcserver {#cmd-mcserver}

<Command slash="mcserver ip:Server-IP [port:Serverport]" message="mcserver <Server-IP> [<Serverport>]"></Command>

Zeigt Informationen über den angegebenen Minecraft-Server.

- ip*: Die IP (bzw. Domain) des Servers
- port: Der Port des Servers. Wenn nicht angegeben wird der Standardport (`25565`) verwendet.
