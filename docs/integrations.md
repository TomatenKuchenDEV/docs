---
title: Integrations
description: TomatenKuchen is a multipurpose Discord bot with a lot of features. This page explains the basic setup of integrations, the better version of customcommands.
image: /img/integration_weather.png
---

:::info Function list

You can find a list of all functions on the [functions page](/category/action-functions).

:::

Integrations are pretty much customcommands 2.0 - you can still easily reply to message and slash commands, but you can also use much more triggers for actions.
It is additionally possible to use created integrations on other servers.

Integrations can be managed in the [dashboard](https://tomatenkuchen.com/dashboard/integrations).

## Possible triggers {#trigger}

- Message and/or slash command
	- Argument: Slash command description. If this field is empty, no slash command is registered from this action.
	- Up to 100 slash commands per server.
- Message context menu
	- Argument: Text for this context menu, at most 25 characters.
	- Only up to five per server.
- User context menu
	- Argument: Text for this context menu, at most 25 characters.
	- Only up to five per server.
- Message content contains
	- Argument: Text content to search for
- Message content exact match
	- Argument: Text content to match with same casing
- Message content starts with
	- Argument: Text content to search for
- Message content ends with
	- Argument: Text content to search for
- Message content matches RegEx
	- Argument: RegEx to use for checking the content, ref. [RegEx cheatsheet](#regex-cheatsheet)
- Message attachment
	- Argument: File extensions or groups of them separated by commas
- Button press
	- Argument: Button custom ID
- Select menu select
	- Argument: Select menu custom ID
- Modal submit
	- Argument: Modal custom ID
- Discord AutoMod triggered (e.g. for custom punishments when triggering a specific rule)
	- Argument (optional): ID of a rule
- Slash command uses of another bot (e.g. for `/bump` reminders)
	- Argument: Slashcommand name of another bot
- Member join/leave
	- Argument: `join`, `leave`, or empty to trigger on both
- Reaction add/remove
	- Argument: `add`, `remove`, or empty to trigger on both
- Role created/deleted
	- Argument: `create`, `delete`, or empty to trigger on both
- Channel created/deleted
	- Argument: `create`, `delete`, or empty to trigger on both
- Webhook created/deleted
	- Argument: `create`, `delete`, or empty to trigger on both
- Thread (or post) created/deleted
	- Argument: `create`, `delete`, or empty to trigger on both
- Level up
	- Argument: A level or a range of levels to trigger on, e.g. `8` to trigger only when reaching level 8, or `8..10` to trigger on the levels 8, 9 and 10.
- Nickname updated
- Server boost/boostend
	- Argument: `boost`, `boostend`, or empty to trigger on both
- Interval
	- Argument: Interval time like `45m`, minimum 5 mins, maximum 2 days
	- Note: Due to these times being measured relative to bot restarts, an action may be executed more or less often than wanted as the timer was reset. Use cronjobs instead to avoid this.
- Cronjob
	- Argument: The cronjob, for example from https://crontab.guru, may not trigger more than 12 times per hour
- User joins/leave voice channel
	- Argument: `join`, `leave`, or empty to trigger on both
- User timeouted or untimeouted
	- Argument: `timeout`, `timeoutend`, or empty to trigger on both
- Discord system message
	- Argument: Discord internal system message type: https://discord.com/developers/docs/resources/channel#message-object-message-types

## Synchronisation modes {#sync-modes}

There are different syncing modes that can be selected when importing an integration onto another server:

### No syncing {#sync-none}

Disables synchronisation and removes all mentions of the original source of the current integration.

### Manual syncing {#sync-manual}

Changes can be synced using a button in the dashboard. Contents can be edited but will be replaced when syncing.

### Automatic syncing {#sync-auto}

Syncs all changes on the original automatically when it gets edited. Is suggested to be used when you trust the owner or server of the integration. Contents cannot be edited.

### Safe syncing {#sync-safe}

A mixture of manual and automatic syncing. Contents cannot be edited. On changes either - like the manual syncing - a teamler of the server has to approve them, or a TomatenKuchen staff member. Using this combination, changes can be approved faster.

## Examples {#example}

These integrations were created by our team or are verified by them.

- [View FiveM server info](https://tomatenkuchen.com/dashboard/integrations?info=fivem), shows the usage of `{jsonAPI}`
- [Display weather info](https://tomatenkuchen.com/dashboard/integrations?info=weather), shows the usage of `{jsonAPI}` and arguments
- [Vote reminder for TomatenKuchen](https://tomatenkuchen.com/dashboard/integrations?info=vote-reminder)
- [Display a random comic from xkcd.com](https://tomatenkuchen.com/dashboard/integrations?info=xkcd)
- [Automatic translation of messages in a channel](https://tomatenkuchen.com/dashboard/integrations?info=autotranslate), shows the usage of several functions for limiting the action execution

![Weather integration example](/img/integration_weather.png)

## RegEx cheatsheet {#regex-cheatsheet}

| Character | Description                  | Example                   |
|-----------|------------------------------|---------------------------|
| `.`       | Any character except newline | `a.b` matches "axb"       |
| `\d`      | Digit (0-9)                  | `\d{2}` matches "42"      |
| `\w`      | Word char (a-z, A-Z, 0-9, _) | `\w+` matches "Bot_1"     |
| `\s`      | Whitespace character         | `a\sb` matches "a b"      |
| `[abc]`   | Any character in set         | `[aeiou]` matches "i"     |
| `[^abc]`  | Any character NOT in set     | `[^aeiou]` matches "b"    |
| `a*`      | 0 or more occurrences of a   | `a*` matches "aaa"        |
| `a+`      | 1 or more occurrences of a   | `a+` matches "aa"         |
| `a?`      | 0 or 1 occurrence of a       | `a?` matches "a"          |
| `a{3}`    | Exactly 3 occurrences of a   | `a{3}` matches "aaa"      |
| `a{3,}`   | 3 or more occurrences of a   | `a{3,}` matches "aaaa"    |
| `a{3,5}`  | 3 to 5 occurrences of a      | `a{3,5}` matches "aaa"    |
| `^`       | Start of string              | `^abc` matches "abcxyz"   |
| `$`       | End of string                | `xyz$` matches "abcxyz"   |
| `\b`      | Word boundary                | `\bword\b` matches "word" |
| `(...)`   | Capturing group              | `(abc)` matches "abc"     |

RegEx capturing groups can be read using `{argsObj;groups;<Group ID>}`.
