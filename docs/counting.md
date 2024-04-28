---
title: Counting
description: Explains the counting system
image: /img/countingleaderboard.webp
---

Using the counting system, members can count together on your server with others.

## Commands {#commands}

### Successful counts {#cmd-counting}

`leaderboard counting` shows the counting leaderboard of the server. It lists the amount of successful counts per member overall and of the current run.

![/leaderboard counting](/img/countingleaderboard.webp)

You can also open the link to view the full leaderboard on a website.

### Failed counts {#cmd-countingfail}

The leaderboard shown when using `leaderboard countingfail` displays how many times in total a member made a mistake while counting.

## Settings {#settings}

[Open counting settings](https://tomatenkuchen.com/dashboard/settings#counting)

### Channel {#channel}

Select the channel in which members can count.

### Start {#start}

The start number, used on first message in a counting channel and after a reset. Defaults to 1.

### Step {#step}

The steps/difference between the current and the next number. Defaults to 1.

Example:
- `1`: 1, 2, 3
- `5` and start `0`: 0, 5, 10
- `0.01`: 1, 1.01, 1.02
- `-2`: 1, -1, -3

### Reset on fail {#reset-fail}

Whether the current run is reset if a member makes a mistake. A mistake is counting two times in a row and counting a wrong number.

### Reset on message delete {#reset-delete}

Resets the run if a member deletes their message. Members can get confused if a number is missing.

### Reset on message edit {#reset-edit}

If the current run is reset when a member edits their message *and* changes its number or add normal text while chatting is disabled.

### Allow chat {#allow-chat}

Whether after the valid number normal text is allowed, like `42 I love TomatenKuchen!`

### Use webhooks {#webhooks}

If webhooks should be used. Prevents message editing and deleting. Requires Manage Webhooks permission.

### Use reactions {#reactions}

Whether the bot should react randomly with either "✅" or "☑" on valid counting messages.

Will be ignored if "Use webhooks" is enabled.

Reactions on special numbers, e.g. 42 and 100, can only be disabled by removing the Add Reactions permission from the bot.

### Role on fail {#fail-role}

If and if yes, which role members receive when making a mistake. Possible mistakes:
- Counting two times in a row
- Wrong number
- Chatting while chatting is disabled

### Remove fail role after {#fail-role-time}

After which time the fail role is removed. By default, it's permanent.
