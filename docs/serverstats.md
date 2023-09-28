---
title: Server statistics
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains the setup and usage of server statistics.
---

## Stats in channel names

![](https://tomatenkuchen.com/assets/images/stats.webp)

You can set the channels in which and how the statistics are displayed in the [settings](https://tomatenkuchen.com/dashboard/settings).
Most [action functions](/category/action-functions) can be used here.

The stats are automatically updated every **10 minutes**.

## Stats on the bot website and `stats`

Example: [Vanilla Minigames statistics](https://tomatenkuchen.com/stats?guild=608640398595719170)

TomatenKuchen collects daily statistics of your server. These include:
- Member count
- Boost count
- Messages per day
- Active chatter amount (how many unique users sent a message on your server that day)

The last two are only collected if the [visibility](#visibility) is set to "Public".

### Possible filters

Filters are appended to the URL as query parameters: `https://tomatenkuchen.com/stats?guild=608640398595719170&type=messages&time=2w`.

- `type`: Only shows the specified stat type.
	- `&type=members`: Member count
	- `&type=messages`: Messages per day
	- `&type=boosts`: Boost count
	- `&type=chatters`: Active chatter amount
- `time`: Only shows statistics within the given time span:
	- `&time=1mo`: Only shows statistics of the last month.
	- `&time=5d`: Only shows statistics of the last five days.

Those options can also be used for the `stats` command. The command also generates an URL for easier sharing.

## Settings

### Visibility

You change change the visibility of the statistics. You can choose from `Public`, `Only Members` and `Disabled`.

Note that "Only Members" and "Disabled" will disable tracking of message statistics (amount of messages per day & of active chatters).

### Excluded channels

You can select channels which will be excluded from message statistic tracking, e.g. for bot spam channels.
