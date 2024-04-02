---
title: Customroles
description: Customroles allow server members to create their own role and modify it to their liking.
image: /img/customrole_info.png
---

Using customroles you can allow your users to create their own role. They can change it's name, color and role icon (if unlocked through boost level).

![Customrole info](/img/customrole_info.png)

## Commands {#commands}

Customroles are configured using the command `customrole`.

### `create` {#cmd-create}

Creates a customrole for the current user.

- name*: The name of the customrole
- color: The color of the customrole

### Name editing {#cmd-name}

<Command name="customrole name" slash="name:New name" message="<New name>"></Command>

Changes the name of your customrole.

### `color` {#cmd-color}

Changes the color of the customrole.

- color: The color of the customrole. If no color is specified, the color is removed.

### `icon` {#cmd-icon}

Changes the role icon.

- icon: The image URL of the new role icon. If no URL is specified, the role icon is removed.

### Deleting {#cmd-delete}

<Command name="customrole delete"></Command>

Deletes the current customrole.

### Info {#cmd-info}

<Command name="customrole info"></Command>

Displays the information about your customrole.

## Settings {#settings}

### Role which customroles are created under {#parent}

Customroles are created under this role. Note that the highest role of the bot must be above this role - if not, the role will be created at the end of the role list.

If no role is selected customroles cannot be created or edited.

### Roles which can create customroles {#create-permissions}

You can select roles which can create customroles here. If a user has none of these roles, they can't use the command.

You can select for example a booster or VIP role.

### Hoisting customroles {#hoist}

This setting changes whether customroles are hoisted by default or not. If enabled the role is displayed seperately from other roles in the member list on the right side if it's the highest of the user. This also shows the name and the role icon.

If disabled, name and role icon aren't visible in the member list.
