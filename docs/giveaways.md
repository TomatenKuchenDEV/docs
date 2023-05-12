---
title: Giveaways
description: Explains giveaways and giveaway requirements
---

To manage giveaways you need one of the giveaway roles set in the dashboard or the "Manage Guild" permission.

# Commands

## Create

Interactive giveaway setup.

`giveaway start`

## Edit

Button under the giveaway

## Reroll winners

`giveaway reroll <message ID>`

## End

`giveway end <message ID>`

## Delete

`giveway delete <message ID>`

## List giveaways

`giveway list`

# Settings

## Role for creating/managing giveaways
Users with this role can create, edit and delete giveaways.

## Roles which can't join giveaways
Users with this role cannot participate in giveaways. This setting applies, unlike the `notroles` requirement, to all giveaways.

# Requirements
You can add different requirements for participating in a giveaway.

Possible requirements:
* `roles`: Requires all of these roles for participating
	* `roles:123456789123456789`
	* `roles:123456789123456789,987654321987654321`
* `anyRoles`: Requires any of these roles for participating
* `notRoles`: The user must not have any roles to be able to participate
* `minAge`: The account of the user must be at least this time old
	* `minAge:3mo`
	* `minAge:1 week 2 days`
* `minMemberAge`: The user must be on the server for this time
* `minLeaderboardPoints`: The user must have at least this amount of leaderboard points
	* `minLeaderboardPoints:1000`
