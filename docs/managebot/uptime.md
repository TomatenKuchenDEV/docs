---
title: Uptime tracking
description: The Manage Bot allows you to control Pterodactyl servers using Discord. It also allows you to track web pages and nodes.
---

The Manage Bot allows you to track an unlimited amount of websites and Pterodactyl nodes.

## Adding an uptime tracker

For the bot to track a web page or a node you have to add it using the command `/uptime add`. You can either use the URL of the page or the internal admin ID of the node. To be able to do that, the Manage Bot must be linked to an admin API key which can be done using `/adminsetup`.

If the page or node is reachable when adding it'll be crawled - depending on the amount of trackers on the server - once a minute. Note that the first crawling may take a few minutes.

Once the page or node has been crawled the first time you can see stats using `/uptime list`.

The bot checks every minute a web page or node per server, a minute later the next one and so on. If the server has only one URL or node set it's crawled every minute.
