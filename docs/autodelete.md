---
title: Autodelete
description: Explains the setup of the autodelete feature to automatically delete messages after a set time.
---

You can select channels in which the messages will be deleted after the given time (± one minute).

This setting is useful for e.g. advertising channels by deleting messages for example after six hours.

## Settings per channel {#settings}

The time is set using the bots default time format:
- `5m`: Five minutes
- `1h30m`: One hour and 30 minutes
- `6h`: Six hours after the message was sent

You can enter a time of up to one year.

## Autopurge {#autopurge}

The bot will delete the last 1000 messages in the configured interval in the [autopurge settings](https://tomatenkuchen.com/dashboard/settings#autoPurge) of the selected channel.

The interval must be at least 30 minutes, and the messages to be deleted may not be older than 14 days.
