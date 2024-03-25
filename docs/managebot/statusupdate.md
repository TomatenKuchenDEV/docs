---
title: Statusupdate
description: The Manage Bot allows you to control Pterodactyl servers using Discord. This page explains how to set up automatic node and server stats.
---

The Manage Bot can display the status, configuration, or resource usage of one or multiple servers or nodes using the statusupdate feature.

1. `/statusupdate`

	First you execute the statusupdate command. You can optionally select a channel, by default the current channel is selected. You can also select a panel alias of a
	panel which has **both client** (`/setup`) **as well as admin API keys** (`/adminsetup`) set.

2. Edit message

	Using the buttons you can edit the message to look like however you want. There will be more information in the future, but in addition to the functions of the [TomatenKuchen actions](/category/action-functions) there are `{node;<ID>[;<Value>]}` to display statistics from a node, and `{nodeConfig;<ID>[;<Property>]}` to display configuration information from a node.
	There's also `{nextUpdate}` available for displaying the next scheduled update of the message. Using `{nodeStatus;<ID>[;<Online>;<Offline>]}` you can display a text depending on if the node is online or offline.

3. Send message
4. Done!

Make sure the bot has all the necessary permissions in the channel and in the panel. Once it loses them, the statusupdate message will be deleted from the system and has to be recreated.

Some information about TomatenKuchen action functions:
- Function names are case insensitive.
- The most important functions are probably `{formatBytes;<Bytes>[;<Decimals, default 2>]}` to format storage units and the mathematical functions for multiplying `{*;<First value>;<Second value>}` and division `{/;<First value>;<Second value>}`.
