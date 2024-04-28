---
title: Automatic role-based nicknames
description: Get help with setting up automated role-based nicknames.
image: /img/autonick.webp
---

TomatenKuchen can change the nicknames of users based on their roles.

## Settings {#settings}

![Example setup of the auto nick feature](/img/autonick.webp)

### Role abbreviations {#roles}

You can link each role to an abbreviation that will be displayed in the nickname. For example, you can use "A" as the abbreviation for the "Admin" role.

Only the roles entered in this field will be displayed in the nickname.

### Format of the nickname {#format}

This value determines how the bot constructs the nickname.

The following variables can be used:
- `{roles}`: One or more role abbreviations (depending on the settings)
- `{name}`: Previous display name
- `{username}`: Username
- `{globalName}`: Global display name of the user

### Maximum amount of roles in the nickname {#max-roles}

This sets the maximum number of roles to be shown in the nickname. Please note that nicknames have a character limit of 32 characters.
