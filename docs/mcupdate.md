---
title: Minecraft server status update
description: TomatenKuchen is a multipurpose Discord bot with a lot of features. Display the current status of a Minecraft server in a channel name or topic, or in a message.
---

Using this feature you can display your current Minecraft Java server status, as well as, if enabled, the list of players and some more information.

You can select between the following display types:
- Channel name
- Channel topic (only text based channels)
- Message

Channel name and topic are only updated once every five minutes due to a Discord limit, the messages usually every two minutes - this way your players are always up to date on the current status.

## Setup {#setup}

To start the setup you have to run the command `misc mcupdate` with the required permissions.

It first asks you what the server domain/hostname is, which can be for example `vanillaminigames.net`.

Next the port, if the server got a custom domain it's usually `25565`.

If you've enabled the query port, enter it **additionally** using the argument `-query=<Port>`, for example `25565 -query=25566`.
Using the query port more information can be displayed, e.g. the current player names, used plugins and a few more.

Next up is the type which is explained above already.
The bot also wants to know the channel and format to know how you want the status to be formatted.

After you've completed the setup it may take a few minutes until the status is displayed.
