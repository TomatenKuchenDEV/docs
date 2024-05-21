---
title: Polls
description: Create polls on your server - also as normal member.
---

## Command {#commands}

The `poll` command allows you the creation of polls on your server.

By default, everyone can use the command, however you can edit the slash command permissions in the integrations settings of Discord.

:::note Discord in-built polls

This command existed long before Discord added polls.

Usually, using the in-built polls is preferred now, however, they don't support a custom poll duration and are limited to five options only, making this command still useful in some cases.

:::

## Creating a poll {#create}

1. Open the channel you want to start the poll in.
2. Run the `poll` slash or message command with the arguments you want.
	- `time`*: The time limit on how the poll should last. After that time was reached, users cannot vote anymore. Use `0` to let the poll run forever.
	- `title`*: The title of the poll, e.g. "What's your favourite color?" If you're using the message command, you now need to insert the pipe separator (` | `) after it to split title and the possible options.
	- `options`*: The options which the users can choose from, seperated by commas, e.g. `Red,Yellow,Green,Blue`
	- `max_votes`: The amount of votes users have. By default every user can only select one option, this can be changed using this setting.
	- `hide_votes`: Hides the "Votes" button below the embed so users cannot find out who voted for what.

\*: This argument is required.

## Excluded roles {#excluded-roles}

Users who have one or more of these roles cannot participate in polls on the server.

However, their vote is still counted if they've voted before.
