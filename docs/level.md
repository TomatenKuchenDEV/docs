---
title: Level & Leaderboard
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains the leaderboard and the level system of the bot.
---

## Commands

### Show leaderboard
The command `leaderboard` shows the leaderboard of the server.

This command also links to the leaderboard website of the server. The URL automatically changes if the server has a vanity URL set.

![Leaderboard command](/img/leaderboard.png)

### Displays points of a user
The command `rank` shows the current points and the level progress of a user.

The image background can be changed using the command `usersettings`.

![Rank command](/img/rank.png)

## Settings

### Level message and level roles
Sets level messages and assigns a role to them.

You can set a message and a role for every level. If no setting is found for a level, TomatenKuchen uses the lowest available.

Possible variables:
- `{usermention}`: Mention of the user
- `{username}`: Username
- `{globalname}`: Global display name
- `{displayname}`: Display name
- `{oldlevel}`: Old level
- `{newlevel}`: New/current level

### Stackable level roles
Toggles if user keep level roles they had before or if they only keep the highest one.

### Channel for level messages
Selects the channel in which level up messages are send. You can either select a channel or "Current channel" to send the message in the current channel.

### Exclude channels and roles
Select roles, channels or groups of channels which are excluded from collecting level points, e.g. `bot-spam` channels.

### Multiplier per channel
Sets a multiplier per channel. Can e.g. be used to reduce the amount given in bot channels and increase the points in VIP/Booster/... channels.

### Cooldown
Changes the cooldown in which users cannot earn points. Can be used to reduce spam.

If all messages from users should be counted set the value to `0`.

### Vanity URL
Modifies the leaderboard vanity URL of the server.
This applies to `levels.cf` and `lboard.tk`.

Example:
- https://levels.cf/tk
- https://lboard.tk/chaoshosting
