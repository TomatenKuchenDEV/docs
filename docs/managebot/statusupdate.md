---
title: Statusupdate
description: The Manage Bot allows you to control Pterodactyl servers using Discord. This page explains how to set up automatic node and server stats.
---

The Manage Bot can display the status, the configuration or the resource usage of one or multiple servers or nodes using the statusupdate feature.

1. `/statusupdate`
d
	Zuerst führst du den Statusupdate-Befehl aus. Dabei kannst du optional den Kanal auswählen, standardmäßig wird der aktuelle Kanal verwendet. Du kannst auch den Panelalias eines Panels angeben, bei dem sowohl Client- als auch Application-API-Key angegeben worden sind.

2. Edit message

	Using the buttons you can edit the message to look like however you want. Genauere Informationen zur Verwendung der Variablen folgt noch, aber zusätzlich zu den Variablen der TomatenKuchen-Actions existiert `{node;<ID>[;<Wert>]}`, um einen bestimmten Wert einer Node anzuzeigen, und `{nodeconfig;<ID>[;<Wert>]}`, um Informationen über die Konfiguration einer Node anzuzeigen. Ebenfalls ist `{nextUpdate}` verfügbar, um den Zeitraum bis zur nächsten Aktualisierung der Nachricht anzugeben.

3. Send message
4. Done!

Make sure the bot has all needed permissions in the channel and in the panel. Once it loses them the statusupdate message will be deleted out of the system and has to be recrated.

Some information about TomatenKuchen actions:
- Function names are incasesentitive
- The most important function are likely `{formatBytes;<Bytes>[;<Decimals, default 2>]}` and the mathimatical functions `{*}` `{/}`
