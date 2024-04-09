---
title: Auto- & Rejoinroles and Autonickname
description: Explains auto join and rejoin roles.
---

## Autoroles {#autorole}

Autoroles are roles which are given to joining users and bots automatically.
You can select different roles for users and bots.

### Delayed autoroles {#delayed-autoroles}

Using the [delayed user autoroles setting](https://tomatenkuchen.com/dashboard/settings#autoroleUserDelay), you can set a delay of up to half a year to delay giving the auto roles to the newly joined user.

## Rejoinroles {#rejoinrole}

[Rejoinroles](https://tomatenkuchen.com/dashboard/settings#rejoinRoles) allow you to assign the configured roles back to users if they left your server while this setting was active, and they rejoin the server.

:::note Permissions

The bot needs the "Manage Roles" permission to assign the roles.

Additionally, the highest role of the bot must be above the highest role you want to reassign.

:::

## Nickname on join {#join-nick}

You can set a nickname which members receive when joining as default.

The following variables can be used:
- `{username}`: The username of the user
- `{globalName}`: The global display name of the user

If you're looking for configurable nicknames using roles, check [auto nickname](/autonickname).
