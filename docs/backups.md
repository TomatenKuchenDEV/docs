---
title: Backups and Templates
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Backups allow you to restore a griefed server fast. Using templates you can easily use from other users published server designs on an existing server.
---

## Backups

Using backups you can in case of a server grief or the accidental deletion of e.g. a channel easily restore it.

### What are TomatenKuchen backups?

- Backups are stored forever by default
	- Due to a Discord rule the messages of backups may get deleted after 30 days.
- Creating and loading is free for all users
- All settings of Discord servers are stored that can be restored by the bot.
- Normal users can have up to four backups at a time
- Backups may not be larger than a few Megabytes - this limit is mainly only reached when using the so-called safe storing of images.

### Creating a backup

Using the command `backup create` you can create a backup of the current server.

You get to select parts of the server that you want to get stored.

Those options are especially useful when using the setting "Safe storing" of images to be able to reduce the backup size.

### "Safe" storing of attachments

Using this setting attachments and other images, like the server icon and banner, are not stored as URLs, but as complete file.

This setting' advantage is that attachments can be restored, even if the original message was edited or e.g. the server icon changed.

The disadvantage is that storing the raw file data the backup grows in size pretty fast - for example a two Megabyte big attachment causes the backup to be also at least two Megabytes in size.

## Discord templates {#templates}

Using the command `template <discord.new link or code>` you can load a Discord template onto the current server.

Using this all channels (except when using the argument `-ignorechannels`) and roles (except when using the argument `-ignoreroles`) deleted and created again according to the template.

You can get templates from your own servers under the settings tab "Server template", from other users or from websites that provide a list of those templates.
