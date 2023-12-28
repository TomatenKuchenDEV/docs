---
title: Polls
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Create polls on your server - also as normal member.
---

## Command {#commands}

The `poll` command allows you the creation of polls on your server.

By default, everyone can use the command, however you can edit the slash command permissions in the integrations settings of Discord.

## Creating a poll {#create}

1. Open the channel you want to start the poll in.
2. Run the `poll` slash or message command with the arguments you want.
	- `time`*: The time limit on how the poll should last. Once the time runs out the results are shown.
	- `title`*: The title of the poll, e.g. "What's your favourite color?"
	- `options`*: The options which the users can choose from, seperated by commands, e.g. `Red,Yellow,Green,Blue`
	- `max_votes`: The amount of votes users have. By default every user can only select one option, this can be changed using this setting.
	- `hide_votes`: Hides the "Votes" button below the embed so users cannot find out who voted for what.

\*: This argument is required.

## Excluded roles {#settings-excluded-roles}

Users who have one or more of these roles cannot participate in polls on the server.

Still, their vote is counted if they've voted before.
