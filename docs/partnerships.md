---
title: Partnerships
description: Easily manage partnerships with other servers and services, and view statistics of affiliate and partner managers.
---

## Commands {#commands}

### `add` {#cmd-add}

<Command name="partnership add" slash="channel:Partner channel message:Message editor code [name:Partner name partnermanager:Manager]" message="<Partner channel> <Message editor code> [<Partner name> <Manager>]"></Command>

Adds a partner.

By choosing a channel, the partner automatically receives the configured category.

If all inputs are correct, the app automatically sends the message into the partner channel on Discord.
If you don't want that, simply send the message into the channel by yourself or ask the partner manager to do so.

### `list` {#cmd-list}

<Command name="partnership list"></Command>

Lists all partners and allows you to edit them.

### `check` {#cmd-check}

<Command name="partnership check" slash="[time:Last check time category:Partner category]" message="[<Last check time> <Partner category>]"></Command>

Lists partners which haven't been checked since the given time, or never before at all.

This e.g. allows you to ensure a partner or affiliate keeps your advertising in the correct spot.

### Leaderboard {#leaderboard}

<Command name="leaderboard partners"></Command>

The leaderboard shows the users with the most partnerships in the given time frame.

## Settings {#settings}

### Partner channels {#partner-channels}

Every partner channel can be assigned a category which is assigned to the partners within that channel by default.
Using this category, partners can be filtered. Categories can be assigned multiple times.

You can also configure which partner manager or user the partner is assigned when a message is sent into the channel.
When using the [command](#cmd-add) the partner manager can be set manually.
