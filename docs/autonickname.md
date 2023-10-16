---
title: Automatic nickname based on roles
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Hilft beim Einrichten der rollenbasierten Nicknamen.
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
- `{globalname}`: Global displayname of the user

### Maximum amount of roles in the nickname

Sets the amount of roles shown in the nickname. Keep in mind that nicknames have a character limit of 32 characters.
