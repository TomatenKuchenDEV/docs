---
title: Birthdays
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains the birthday system.
---

Birthdays are sent daily in the set server timezone at 0 o'clock.

# Real users

## Set/edit birthday
Every user can set their global birthday using `birthday set <Tag> <Month> [<Year>] [public]`.

Das Jahr ist optional, wenn angegeben ist bei Geburtstagsnachrichten und [automatisch updatenden Nachrichten](./autoupdate) der Parameter `{age}` verfügbar, womit das neue Alter angezeigt werden kann. Wenn das Jahr nicht angegeben wird ist der Alters-Parameter leer.

Using the `public` option you can toggle wether the birthday is shown on the `user` command and the `{birthday}` argument for autoupdating messages. Birthday announcements aren't affected by that.

- `birthday set 29 2 2000 public`
	- Sets a publich birthday which is announced every year on 02/29. If the year is not a leap year, the message will appear on 03/01.
- `birthday set 1 4`

## Delete birthday
If you want to delete your birthday, use the command `birthday delete`.

# Fictive birthdays
Fictive birthdays are per server and can be configured by server moderators.

## Create/edit
`birthday setfictive <Name> <Day> <Month> [<Year>]`
Fictive birthdays must have a name set to identify them. Using this name birthday messages are created - the arguments stay the same, the bot automatically changes them to fit - and `{birthday}` generated.

- `birthday setfictive Minecraft 17 5 2009`
- `birthday setfictive 🎇Sylvester🎆 31 12`

## Delete
`birthday deletefictive <Name>`

# Settings

## Message
Configure the message that is sent once it's a real or a fictive users birthday.

## Channel
Select the channel in which birthdays are announced.

## Role
Select a role which users receive on their birthday for 24 hours.
