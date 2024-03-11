---
title: Minecraft-Befehle
description: Erklärt Befehle für das Videospiel Minecraft. Diese erlauben dir, schnell Spieler-, Serverstatus- oder Rezeptinformationen herauszufinden.
---

Diese Seite listet die Befehle auf, die mit dem Spiel "Minecraft" zu tun haben, und erklärt deren Funktionen.

## minecraft player {#cmd-player}

<Command name="minecraft player" slash="name:Spielername" message="<Spielername>"></Command>

Zeigt Informationen über den angegebenen Spielernamen.

## minecraft recipe {#cmd-recipe}

<Command name="minecraft recipe" slash="item:Minecraft-Gegenstands-ID" message="<Minecraft-Gegenstands-ID>"></Command>

Zeigt das Herstellungsrezept des angegebenen Gegenstandes.

## minecraft update {#cmd-update}

<Command name="minecraft update"></Command>

Zeigt den Livestatus eines Minecraft-Servers irgendwo auf deinem Server an.

Siehe [Minecraft-Serverstatus-Update](/mcupdate).

## mcserver {#cmd-mcserver}

<Command name="mcserver" slash="ip:Server-IP [port:Serverport]" message="<Server-IP> [<Serverport>]"></Command>

Zeigt Informationen über den angegebenen Minecraft-Server.

- ip*: Die IP (bzw. Domain) des Servers
- port: Der Port des Servers. Wenn nicht angegeben wird der Standardport (`25565`) verwendet.
