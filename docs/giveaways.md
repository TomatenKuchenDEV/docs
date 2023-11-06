---
title: Giveaways
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains giveaways and possible requirements for them.
---

To manage giveaways you need one of the giveaway roles set in the dashboard or the "Manage Guild" permission.

## Commands {#commands}

### Create

Interactive giveaway setup.

`giveaway start`

### Edit

Button under the giveaway

### Reroll winners

`giveaway reroll <Message ID>`

This will pick one or the configured amount of winners again after a giveaway has ended. Users can win multiple times.

### End

`giveway end <Message ID>`

### Delete

`giveway delete <Message ID>`

### List giveaways

`giveway list`

## Settings

### Giveaway message
Change the text of the giveaway message. Can be used for example to ping a giveaway role.

### Role for creating/managing giveaways
Users with this role can create and edit and giveaways.

Users with one of these roles can run all [commands](#commands) on this page.

### Roles which always can participate
Users with this role can always participate in giveaways, ignoring any requirements that have been set for the giveaway.

## Requirements
You can add different requirements for participating in a giveaway.

Possible requirements:
- `roles`: Requires all of these roles for participating
	- `roles:123456789123456789`
	- `roles:123456789123456789,987654321987654321`
- `anyRoles`: Requires any of these roles for participating
- `notRoles`: The user must not have any roles to be able to participate
- `minAge`: The account of the user must be at least this time old
	- `minAge:3mo`
	- `minAge:1 week 2 days`
- `minMemberAge`: The user must be on the server for this time
- `minLeaderboardPoints`: The user must have at least this amount of leaderboard points. Depending on the level cooldown setting one point corresponds to one or two messages.
	- `minLeaderboardPoints:1000`
