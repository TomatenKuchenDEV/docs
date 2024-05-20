---
title: Level & Leaderboard
description: Explains the leaderboard and the level system of the bot.
image: /img/leaderboard_level.webp
---

## Commands {#commands}

### Show leaderboard {#cmd-leaderboard}

The command `leaderboard level` shows the level leaderboard of the server.

This command also links to the leaderboard website of the server.
The URL automatically changes if the server has a vanity URL set.

![Leaderboard command](/img/leaderboard_level.webp)

### Displays points of a user {#cmd-points}

The command `rank` shows the current points and the level progress of a user.

The image background can be changed using the command `usersettings`.

![Rank command](/img/rank.webp)

## Number of points needed for a level {#cmd-required-points}

The amount of points needed for a level is calculated using `(<Level> / 0.35)²`.

This means the amount of points needed for a level increases exponentially.

## Settings {#settings}

### Level enabled/disabled {#active}

Configures whether the levelsystem is enabled or disabled.

### Level message and level roles {#roles}

Sets level messages and assigns a role to them.

You can also set the number of points rewarded to users with this level when sending a message.
As levels require higher points automatically, this setting should be **left at 1** (or empty).

You can set a message and a role for every level.

If no setting is found for a level, TomatenKuchen uses the lowest available.
If you want to disable this, [enable the reward-only setting below](#announce-reward-only).

Possible variables:
- `{userMention}`: Mention of the user
- `{username}`: Username
- `{globalName}`: Global display name
- `{displayName}`: Display name
- `{oldLevel}`: Old level
- `{newLevel}`: New/current level

### Stackable level roles {#stackable}

Toggles if user keep level roles they had before or if they only keep the highest one.

### Channel for level messages {#channel}

Selects the channel in which level up messages are send. You can either select a channel or "Current channel" to send the message in the current channel.

### Level up messages with reward only {#announce-reward-only}

[This setting](https://tomatenkuchen.com/dashboard/settings#levelAnnounceRewardOnly) toggles whether the bot sends a level up message every time someone levels up, or only if a level message for the exact level.

### Exclude channels and roles {#excluded}

Select roles, channels or groups of channels which are excluded from collecting level points, e.g. `bot-spam` channels.

### Multiplier per channel {#channel-multipliers}

Sets a multiplier per channel.

Can e.g. be used to reduce the amount given in bot channels and increase the points in VIP/Booster/… channels.

### Cooldown {#cooldown}

Changes the cooldown in which users cannot earn points. Can be used to reduce spam.

If all messages from users should be counted set the value to `0`.

### Vanity URL {#vanity}

Modifies the leaderboard vanity URL of the server.

Example:
- https://tomatenkuchen.com/lb/chaoshosting
- https://tomatenkuchen.com/lb/tk#botvote (directly opens the bot vote tab)

### Points per characters {#points-per-char}

Using this setting, you can define an amount of points to be added (or removed) per sent character.

You can add an entry and set a point amount per message length.

Note that all entries are added together if the set length is the same or longer as the message -
if you want to reduce the amount of points, simply set a negative value.

The setting is disabled by default and is only enabled if one or more message length is set.

By default one message counts one point, unless there are [point multipliers](#channel-multipliers) or the user has a level role which modifies the default point amount.
