---
title: Custom bots
description: Explaining the free custom bot feature of the multipurpose bot.
---

:::info Beta version
Custom bots are still in beta and may contain errors.
However, everyone may test the beta version by joining the [Discord server](https://tomatenkuchen.com/discord).
:::

Using a custom bot, you can get your own version of TomatenKuchen on your server without it being obvious that it's TomatenKuchen.

## What's that? {#about}

Custom bots, also known as "Custom branding" or "White-label" from other bots, allow you to use a bot created by you with the features of TomatenKuchen.
The advantage of this is that you can enjoy all the great [TomatenKuchen features](/features), but your server members can only see your bot, not TomatenKuchen.

You can also run different bots alongside the TomatenKuchen custom bot by using its token multiple times.
Do note however that we cannot provide support for this and it may cause problems with interactions, like slash commands or buttons.

## Pricing {#payment}

The first custom bot is free for every user, you can use it as long as you want without any costs - do note however that we cannot guarantee the availability and may delete bots on inactive or spam servers.

Because custom bots consume a lot of resources a second bot can only be created in exceptional cases.

## Setup {#setup}

To create a custom bot, simply open the [custom bot dashboard](https://tomatenkuchen.com/dashboard/custom) and click on "Create".

The page then guides you step-by-step through the setup process.

You can obtain the bot token from the [Discord Developer Portal](https://discord.com/developers/applications). You can either create a new bot specifically for the custom bot (recommended to prevent conflicts), or use an existing one.

## Settings {#settings}

### Selected custom bot {#settings-custom-bot}

Every server can choose the bot which is primarily used for responding.

All other TomatenKuchen bots, including TomatenKuchen itself, then ignore all commands and events, and can be removed from the server-

To do that, find out the user ID of the bot, e.g. in the Discord Developer Portal on your bot -> Bot -> "Client ID". This ID is inserted into the field.

To disable this feature and let the main TomatenKuchen respond, leave the field empty.
