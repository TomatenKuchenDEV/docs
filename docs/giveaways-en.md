---
title: Giveaways
lang: en
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
* `anyroles`: Requires any of these roles for participating
* `notroles`: The user must not have any roles to be able to participate
* `minage`: The account of the user must be at least this time old
	* `minage:3mo`
	* `minmemberage:1 week 2 days`
* `minmemberage`: The user must be on the server for this time
* `minleaderboardpoints`: The user must have at least this amount of leaderboard points
	* `minleaderboardpoints:1000`
