---
title: Feeds
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains how to use RSS, Atom, Minecraft, YouTube and Twitch feeds.
image: /img/feed_example.png
---

This page will help you to setup RSS and other feeds using the Discord bot.

![Discord status feed](/img/feed_example.png)

## RSS/Atom feeds
The bot supports all types of RSS and atom feeds. You can add a new feed by creating the "Add" button in the dashboard and filling in the feed url.
The bot will then automatically post new entries to the channel you selected.
Feeds are checked for new content every 10 minutes.

### Default configuration
![](/img/rss_feeds_default.png)
The fields should be set to this for an optimal experience, but you can of course edit or move them to your liking.

- `{author}`: The author of the post, if any
- `{title}`: The title of the post
- `{content}`: The main content of the post, usually from the `description` property. HTML tags will be transformed to Discord markdown.
- `{image}`: The image of the post, if any
- `{domain}`: The domain of the feed

If the feed contains any more properties, you can use them as well. The bot will automatically replace them with the correct value, e.g. `{link}` if the feed contains `"link": "https://tomatenkuchen.com/post/42"`.

## Example feeds

### Nitter (Twitter)
Feed url: `https://nitter.net/{user}/rss`

### Mastodon
Feed url: `https://{instance}/users/{user}.atom`

### Reddit
Feed url: `https://www.reddit.com/r/{subreddit}/new/.rss`

## YouTube

YouTube notificiations allow configuring a message which is sent by the bot once a new video or short is uploaded.

You can get the YouTube user ID using the `youtube` command or using the "Share" button on a channels info page.

The bot checks for new items every 10 minutes, due to YouTube limiting the feeds it may take a bit longer though.

## Minecraft versions

You create feeds to announce new Minecraft snapshots, pre-releases, release candicates and full releases. You can select a channel for each type.

The message is usually shown within a minute of publication which means it's much faster than Minecraft blog posts or changelogs on Discord.

You can also let the bot send a message once the first [PaperMC server software](https://papermc.io) build for a new full release is published.
