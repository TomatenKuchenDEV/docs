---
title: DM reporting/Message verification
description: By using the DM reporting feature you are able to easily verify the existence and the exact content of a message sent in a DM, which is mainly useful when reporting DM advertisers.
---

The DM reporting feature allows you to easily verify the existence and the content of a message which was sent in a direct/private message (DM) or a group DM channel (GDM).

This feature doesn't need any setup from server staff, instead, it works right out of the box with setup intructions for users.

The main idea is being able to verifiably report real messages from scammers or DM advertisers.

## Usage {#usage}

<Command name="dm-report"></Command>

Simply use the above command in a private channel.

:::tip Why a private channel?

The command cannot be used in channels in which the @everyone role has View Messages permissions, to combat potential abuse.

Reports are handled in private (or should be), therefore there's no need to (accidentially) publicly blame someone.

:::

This returns a message, in which the user has to confirm the correct usage, and add the bot as user application so it's able to add the "Report Message" context menu.
The setup only needs to be done once.

After the setup is finished, the code returned on the button tap is pasted into the modal which appears when using the context menu (right clicking/holding the message to report in DMs -> "Apps" -> "Report Message").

After submitting, the message content (and any eventual embeds from bots) are edited into the original message on the server the command was used on.
