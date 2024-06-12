---
title: Access and Management
description: Learn about how permissions work for custom bots.
---

:::info Beta version
Custom bots are still in beta and may contain errors.
However, everyone may test the beta version by joining the [Discord server](https://tomatenkuchen.com/discord).
:::

## Using a team

If you want to allow multiple users access to the bot, create a team in the [Discord Developer Portal](https://discord.com/developers/applications) and add the app to it.
Then you can invite other users using the "Members" tab and assign them permission roles.

Your custom bot automatically updates this list periodically - note that it might take up to two hours for newly added members to gain access.

### Roles

- Admin: Full access
- Read-only: Read-only access
- Other roles: Full access except for deleting the bot

## Management

You can view custom bots that you own or have access to on the [custom bot dashboard](https://tomatenkuchen.com/dashboard/custom).

:::warning

Note that the custom bot will go offline if its balance reaches zero, after sending several warning messages.

:::
