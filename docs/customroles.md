---
title: Customroles
description: TomatenKuchen is a multipurpose Discord bot with a lot of features for your server. Customroles allow users to created their own customized role on the server.
image: /img/customrole_info.png
---

Using customroles you can allow your users to create their own role. They can change it's name, color and role icon (if unlocked through boost level).

Customroles are configured using the command `customrole`.

![Customrole info](/img/customrole_info.png)

## Settings {#settings}

### Role which custom roles are created under {#below-role}

Customroles are created under this role. Note that the highest role of the bot must be above this role - if not, the role will be created at the end of the role list.

If no role is selected customroles cannot be created or edited.

### Roles which can create customroles {#roles-createable}

You can select roles which can create customroles here. If a user has none of these roles, they can't use the command.

You can select for example a booster or VIP role.

### Hoisting custom roles {#hoisted}

This setting changes whether customroles are hoisted by default or not. If enabled the role is displayed seperately from other roles in the member list on the right side if it's the highest of the user. This also shows the name and the role icon.

If disabled, name and role icon aren't visible in the member list.
