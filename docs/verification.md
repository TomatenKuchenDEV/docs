---
title: Verification
description: Setup and usage of verification to prevent bots from joining and raiding your Discord server.
image: /img/verification_website.png
---

Verification can be used to prevent bots from joining the server. You can choose from multiple verification modes to use.

![Website verification example](/img/verification_website.png)

## Commands {#commands}

The command `verify` can be used to send a verification message. The settings can be configured using the [dashboard](https://tomatenkuchen.com/dashboard/settings#verificationRole).
There is no limit to the number of messages that can be created per server.

## Settings {#settings}

### Verification mode {#settings-mode}

Currently, you can choose one of the following modes:
- No verification
- Captcha
- Math task
- Website captcha

"No verification" immediately adds the selected roles to the user when they click the verify button.

### Verification roles {#settings-roles}

You can select the roles that users will receive after verification here.

### Actions on incorrect verification answers {#settings-fail}

You can set punishments based on the number of failed verification tries.

Possible actions:
- Ban
- Kick
- Mute
- Cooldown until the user can start verification again
- Reset of fail counter

When using "mute" or "cooldown", you must specify the duration for which the user will be muted or how long they have to wait.

Note that "cooldown" does not prevent users from sending DM messages.
To prevent this, use "mute", which disables buttons as well as new DMs using a Discord timeout and displays the wait time better than the bot can.

### Task difficulty {#settings-difficulty}

You can change the difficulty of the modes (except "none") here. This changes the maximum reply time, and for:
- Captcha the amount of characters
- Math tasks the complexity of tasks
