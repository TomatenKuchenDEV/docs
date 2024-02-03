---
title: Backups and Templates
description: Backups allow you to restore a griefed server fast. Using templates you can easily use from other users published server designs on an existing server.
---

## Backups {#backups}

Using backups you can in case of a server grief or the accidental deletion of e.g. a channel easily restore it.

### What are TomatenKuchen backups? {#about-backups}

- Backups are stored forever by default
- All settings of Discord servers are stored that can be restored by the bot.
	- Due to a Discord rule, backup messages may be deleted after 30 days.
- Creating and loading backups is free for all users.
- Normal users can have up to four backups at a time.
- Backups must not exceed a few Megabytes in file size. This limit is typically only reached when using the so-called "safe storing" of images.

### Creating a backup {#backup-create}

By using the command `backup create`, you can create a backup of the current server.

You can choose which parts of the server you want to store.

These options are particularly useful when using the "safe storing" setting for images, as it helps reduce backup size.

### "Safe" storing of attachments {#backup-safe-storing-attachments}

When this setting is enabled, attachments and other images such as the server icon and banner are stored as complete files rather than URLs.

This settings advantage is that attachments can be restored, even if the original message was edited or e.g. the server icon changed.

However, the disadvantage is that storing the raw file data increases the backup size significantly. For example, a two Megabyte attachment will cause the backup size to be at least two Megabytes.

## Discord templates {#templates}

Using the command `template <discord.new link or code>` you can load a Discord template onto the current server.

Using this command will delete and recreate all channels (except when using the `-ignorechannels` argument) and roles (except when using the `-ignoreroles` argument) according to the template.

You can obtain templates from your own servers under the "Server template" section in the settings tab, from other users, or from websites that provide a list of templates.
