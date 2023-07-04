---
title: Server statistics
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains on how to set up server statistics
---

# Stats in channel names

![](https://tomatenkuchen.eu/assets/images/stats.webp)

You can set the channels in which and how the statistics are displayed in the [settings](https://tomatenkuchen.eu/dashboard/settings).
Possible variables:
- `{members}`: Amount of all members on the server
- `{members.humans}`: Amount of non-bots on the server
- `{members.bots}`: Amount of bots on the server
- `{emojis}`: Amount of emojis on the server
- `{stickers}`: Amount of stickers on the server
- `{roles}`: Amount of roles
- `{boosts}`: Amount of boosts
- `{channels}`: Amount of all channels
- `{voicechannels}`: Amount of voice channels
- `{textchannels}`: Amount of text channels
- `{categories}`: Amount of categories
- `{usersWithRole:<id>}`: Amount of members with a specific role. Replace `<id>` with a role ID.

The stats are automatically updated every **10 minutes**.

# Stats on the bot website and `stats`

Example: [Vanilla Minigames statistics](https://tomatenkuchen.eu/stats/?guild=608640398595719170)

TomatenKuchen collects daily statistics of your server. These include:
- Member count
- Messages per day
- Boost count
- Active chatter amount (how many unique users sent a message on your server that day)

## Possible filters
Filter werden als Query-Parameter an die URL angehängt: `https://tomatenkuchen.eu/stats/?guild=608640398595719170?type=messages&time=2w`. Die Verwendung der `?` und `&` in dieser Form ist wichtig.

- `type`: Only shows the specified stat type.
	- `?type=members`: Member count
	- `?type=messages`: Messages per day
	- `?type=boosts`: Boost count
	- `?type=chatters`: Active chatter amount
- `time`: Only shows statistics within the given time span:
	- `?time=1mo`: Only shows statistics of the last months.

Those options can also be used for the `stats` command. The command also generates an URL for easier sharing.

# Settings

## Visibility
You change change the visibility of the statistics. You can choose from `Public`, `Only Members` and `Disabled`.

## Excluded channels
You can select channels which will be excluded from message statistic tracking, e.g. for bot spam channels.
