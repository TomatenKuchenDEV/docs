---
title: Uptime tracking
description: The Manage Bot allows you to control Pterodactyl servers using Discord. It also allows you to track web pages and nodes.
---

The Manage Bot allows you to track an unlimited number of websites and Pterodactyl nodes.

## Adding an uptime tracker

To track a web page or a node with the bot, you need to add it using the `/uptime add` command. You can use either the URL of the page or the internal admin ID of the node. To do this, the Manage Bot must be linked to an admin API key, which can be done using `/adminsetup`.

If the page or node is reachable when adding it, it will be crawled once a minute, depending on the number of trackers on the server. Note that the first crawling may take a few minutes.

Once the page or node has been crawled for the first time, you can view stats using the `/uptime list` command.

The bot checks one web page or node per server every minute, and then proceeds to check the next one a minute later. If the server has only one URL or node set, it will be crawled every minute.
