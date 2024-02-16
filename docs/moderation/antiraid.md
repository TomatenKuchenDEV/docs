---
title: Antiraid
description: The antiraid system can easily detect and prevent most join raids.
---

Using the antiraid system of TomatenKuchen the bot will handle most server joins raids problemlessly.

If enabled, the system remembers all newly joined users.
If too many members join in the configured time window, the recently joined as well as any new joiníng users are kicked, until the limit is no longer hit.

## Settings {#settings}

### Antiraid mode {#settings-mode}

[This setting](https://tomatenkuchen.com/dashboard/settings#antiraidMode) configures whether the antiraid is enabled and if yes, what to do on a raid.

The option "Disabled" disables the antiraid completely.

The option "Kick members" kicks all newly joined users during a raid.

#### "Disable invites" {#settings-disable-invites}

:::warning Community only

Only available on Discord community servers due to Discord not enabling "Pause invites" for bots on other servers.

:::

The option "Disable invites" pauses the invites on a server once a raid is detected for a specific time.
It also kicks all recently joined users.

After that time ran out, users can join again - if the raid is still ongoing, the server invites are paused again.

If you think that a raid has already ended, simply enable the invites again from Discord Server Settings -> Invites.

## User limit {#settings-limit}

This setting configures how many users can at most join the server in the configured time in seconds.

If this amount of joins is reached within the below configured time window, the bot detects a raid.

## Time window {#settings-seconds}

The time window in seconds allows you, as with modifying the user limit, to configure the sensitivity of the antiraid.

The higher this number is, the less short raids are detected.

## Higher verification level {#settings-verification-level}

If this setting is set to something different as "None", the Discord server verification level is increased when a raid happens to the configured level.

After the raid has ended, the previous value is restored.
This only applies if the verification level hasn't been modified in the meantime to avoid disturbing manual moderation actions.

Also, the verification level is never set to a lower level due to the increasing during a raid, but only to a higher one.
