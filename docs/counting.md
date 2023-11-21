---
title: Counting
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains the counting system
image: /img/countingleaderboard.png
---

Using the counting system, members can count on your server. Kind of boring, but... why not?

## Commands

### Successful counts

`leaderboard counting` shows the counting leaderboard of the server. It lists the amount of successful counts per user overall and of the current run.

![/leaderboard counting](/img/countingleaderboard.png)

### Failed counts

The leaderboard displayed when using the command `leaderboard countingfail` lists all users that have failed a count.
It displays how many times a user failed in total.

## Settings

### Channel
Select the channel in which members can count.

### Start
The start number, used on first message in a counting channel and after reset. Defaults to 1.

### Step
The steps/difference between the current and the next number. Defaults to 1.

Example:
- `1`: 1, 2, 3
- `5` and start `0`: 0, 5, 10
- `0.01`: 1, 1.01, 1.02
- `-2`: 1, -1, -3

### Reset on mistake
If the current run is reset if a user makes a mistake. A mistake is counting two times in a row and counting a wrong number.

### Reset on message delete
Resets the run if a user deletes their message. Members can get confused if a number is missing.

### Reset on message edit
If the current run is reset if a user edits their message *and* changes it's number or add normal text while chatting is disabled.

### Allow chat
Whether after the number normal text is allowed, like `42 Hello :D`

### Use webhooks
If webhooks should be used. Prevents message editing and deleting. Requires Manage Webhooks permission.

### Use reactions
Whether the bot should react on correct counting messages. Disabled if "Use webhooks" is enabled.

Reacts with "✅" or "☑" on every correct message. Reactions on special numbers, e.g. 42 and 100, can only be disabled by removing the Add Reactions permission from the bot.

### Role on fail
If and if yes, which role users receive when making a mistake. Possible mistakes:
- Counting two times in a row
- Wrong number
- Chatting while chatting is disabled

### Remove fail role after
After which time the fail role is removed. By default, it's permanent.
