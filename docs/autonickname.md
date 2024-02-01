---
title: Automatic nickname based on roles
description: Get help for setting up the automated role based nicknames.
image: /img/autonick.png
---

TomatenKuchen can change the nickname of users based on their roles.

## Settings {#settings}

![](/img/autonick.png)

### Role abbreviations {#settings-abb}

Every role can get linked to an abbreviation here which is displayed in the nickname, for example for the "Admin" role an "A".

Only in this field entered roles are displayed in the nickname.

### Format of the nickname {#settings-format}

This value changes how the bot builds the nickname.

The following variables can be used:
- `{roles}`: One or more role abbreviations (depending on settings)
- `{name}`: Previous displayname
- `{username}`: Username
- `{globalName}`: Global displayname of the user

### Maximum amount of roles in the nickname {#settings-max-roles}

Sets the amount of roles shown in the nickname. Keep in mind that nicknames have a character limit of 32 characters.
