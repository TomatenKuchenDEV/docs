---
title: Statusupdate
description: The Manage Bot allows you to control Pterodactyl servers using Discord. This page explains how to set up automatic node and server stats.
---

The Manage Bot can display the status, the configuration or the resource usage of one or multiple servers or nodes using the statusupdate feature.

1. `/statusupdate`

	Zuerst führst du den Statusupdate-Befehl aus. Dabei kannst du optional den Kanal auswählen, standardmäßig wird der aktuelle Kanal verwendet. Du kannst auch den Panelalias eines Panels angeben, bei dem sowohl Client- als auch Application-API-Key angegeben worden sind.

2. Edit message

	Using the buttons you can edit the message to look like however you want. There will be more information in the future, but in addition to the functions of the [TomatenKuchen actions](/category/action-functions) there are `{node;<ID>[;<Value>]}` to display statistics from a node, and `{nodeConfig;<ID>[;<Property>]}` to display configuration information from a node.
	There's also `{nextUpdate}` available for displaying the next scheduled update of the message. Using `{nodeStatus;<ID>[;<Online>;<Offline>]}` you can display a text depending on if the node is online or offline.

3. Send message
4. Done!

Make sure the bot has all needed permissions in the channel and in the panel. Once it loses them the statusupdate message will be deleted out of the system and has to be recrated.

Some information about TomatenKuchen actions:
- Function names are incasesentitive
- The most important function are likely `{formatBytes;<Bytes>[;<Decimals, default 2>]}` and the mathimatical functions `{*}` `{/}`
