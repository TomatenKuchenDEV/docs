---
title: Automatic nickname based on roles
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Get help for setting up the automated role based nicknames.
image: /img/autonick.png
---

TomatenKuchen can change the nickname of users based on their roles.

## Settings

![](/img/autonick.png)

### Format of the nickname

This value changes how the bot builds the nickname.

The following variables can be used:
- `{roles}`: One or more role abbreviations (depending on settings)
- `{name}`: Previous displayname
- `{username}`: Username
- `{globalName}`: Global displayname of the user

### Maximum amount of roles in the nickname

Sets the amount of roles shown in the nickname. Keep in mind that nicknames have a character limit of 32 characters.
