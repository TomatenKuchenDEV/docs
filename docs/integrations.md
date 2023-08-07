---
title: Integrations
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. This page explains the basic setup of integrations, the better version of customcommands.
---

:::info

You can find a list of all functions on the [functions page](/category/action-functions)

:::

Integrations are pretty much customcommands 2.0 - you can still reply to message and slash commands, but you can also use many more triggers for actions.
It is additionally possible to use created integrations on other servers.

Integrations can be managed in the [dashboard](https://tomatenkuchen.com/dashboard/integrations).

## Possible triggers

- Message and slash commands
- Message content contains
- Message content matches RegEx
- Button press
- Select menu select
- Modal submit
- Discord AutoMod triggered (e.g. for custom punishments when triggering a specific rule)
- Slash command uses of another bot (e.g. for /bump reminders)
- Member join/leave
- Reaction add/remove
- Role create/delete
- Channel create/delete
- Webhook create/delete
- Thread (or post) create/delete
- Nickname updated
- Server boost/boostend

## Synchronisation modes

There are different syncing modes that can be selected when importing an integration onto another server:

### No syncing

Disables synchronisation and removes all mentions of the original source of the current integration.

### Manual syncing

Changes can be synced using a button in the dashboard. Contents can be edited but will be replaced when syncing.

### Automatic syncing

Syncs all changes on the original automatically when it gets edited. Is suggested to be used when you trust the owner or server of the integration. Contents cannot be edited.

### Safe syncing

A mixture of manual and automatic syncing. Contents cannot be edited. On changes either - like the manual syncing - a teamler of the server has to approve them, or a TomatenKuchen staff member. Using this combination, changes can be approved faster.

## Examples

These integrations were created by our team or are verified by them.

- [View FiveM server info](https://tomatenkuchen.com/dashboard/integrations?info=fivem), shows the usage of `{jsonAPI}`
- [Display weather info](https://tomatenkuchen.com/dashboard/integrations?info=weather), shows the usage of `{jsonAPI}` and arguments
- [Vote reminder for TomatenKuchen](https://tomatenkuchen.com/dashboard/integrations?info=vote-reminder)
- [Display a random comic from xkcd.com](https://tomatenkuchen.com/dashboard/integrations?info=xkcd)
- [Automatic translation of messages in a channel](https://tomatenkuchen.com/dashboard/integrations?info=autotranslate), shows the usage of several functions for limiting the action execution
