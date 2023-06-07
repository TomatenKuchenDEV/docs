---
title: Automatic nickname based on roles
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Hilft beim Einrichten der rollenbasierten Nicknamen.
---

TomatenKuchen can change the nickname of users based on their roles.

# Format of the nickname

Hier kann festgelegt werden, wie der Bot den Nicknamen aufbaut. Standardwert ist `[{roles}] {name}`, wo `{roles}` für eine oder mehrere Rollen - je nach Einstellung - steht, `{name}` für den vorherigen Anzeigenamen und `{username}` für den Nutzernamen des Nutzers.
This value changes how the bot builds the nickname. Default value is `[{roles}] {name}` where `{roles}` stands for one or more roles - as configured - `{name}` for the old displayname and `{username}` for the username of the user.

# Maximum amount of roles in the nickname

Sets the amount of roles shown in the nickname. Keep in mind that nicknames have a character limit of 32 characters.

![](/img/autonick.png)
