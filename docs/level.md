---
title: Level & Leaderboard
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains the leaderboard and the level system of the bot.
image: /img/leaderboard.png
---

## Commands

### Show leaderboard

The command `leaderboard level` shows the level leaderboard of the server.

This command also links to the leaderboard website of the server.
The URL automatically changes if the server has a vanity URL set.

![Leaderboard command](/img/leaderboard.png)

### Displays points of a user

The command `rank` shows the current points and the level progress of a user.

The image background can be changed using the command `usersettings`.

![Rank command](/img/rank.png)

## Number of points needed for a level

The amount of points needed for a level is calculated using `(<Level> / 0.35)²`.

This means the amount of points needed for a level increases exponentially.

## Settings

### Level enabled/disabled

Configures whether the levelsystem is enabled or disabled.

### Level message and level roles

Sets level messages and assigns a role to them.

You can also set the number of points rewarded to users with this level when sending a message.
As levels require higher points automatically, this setting should be **left at 1** (or empty).

You can set a message and a role for every level.

If no setting is found for a level, TomatenKuchen uses the lowest available.

Possible variables:
- `{usermention}`: Mention of the user
- `{username}`: Username
- `{globalName}`: Global display name
- `{displayName}`: Display name
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
- https://levels.cf/tk#botvote
- https://lboard.tk/chaoshosting

### Points per characters

Using this setting, you can define an amount of points to be added (or removed) per sent character.

You can add an entry and set a point amount per message length.

Note that all entries are added together if the set length is the same or longer as the message -
if you want to reduce the amount of points, simply set a negative value.

The setting is disabled by default and is only enabled if one or more message length is set.
By default one message counts one point, unless the user has a level role which modify the default point amount.
