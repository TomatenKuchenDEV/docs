---
title: RSS and Atom feeds
description: Explains how to use RSS, Atom and Minecraft version feeds.
image: /img/feed_example.png
---

This page will help you to setup RSS and other feeds using TomatenKuchen.

![Discord status feed](/img/feed_example.png)

## RSS/Atom feeds {#rss}

The bot supports all types of RSS and atom feeds. You can add a new feed by creating the "Add" button in the dashboard and filling in the feed url.
The bot will then automatically post new entries to the channel you selected.

Feeds are checked for new content every 10 minutes.

### Default configuration {#default}

![Default RSS feed configuration](/img/rss_feeds_default.png)

- `{author}`: The author of the post, if any
- `{title}`: The title of the post
- `{content}`: The main content of the post, usually from the `description` property. HTML tags will be transformed to Discord markdown.
- `{image}`: The image of the post, if any
- `{domain}`: The domain of the feed

If the feed contains any more properties, you can use them as well. The bot will automatically replace them with the correct value, e.g. `{link}` if the feed contains `"link": "https://tomatenkuchen.com/post/42"`.

## Example feeds {#example}

### Nitter (Twitter/"X") {#nitter}

Feed url: `https://nitter.net/{user}/rss`

### Mastodon {#mastodon}

Feed url: `https://{instance}/users/{user}.atom`

### Reddit {#reddit}

Feed url: `https://www.reddit.com/r/{subreddit}/new/.rss`

## New Minecraft versions {#minecraft}

You create feeds to announce new Minecraft snapshots, pre-releases, release candicates and full releases. You can select a channel for each type.

The message is usually shown within a minute of publication which means it's much faster than Minecraft blog posts or changelogs on Discord.

You can also let the bot send a message once the first [PaperMC server software](https://papermc.io) build for a new full release is published.

## Bluesky {#bluesky}

Using the Bluesky feeds you can let the bot send a message once a user posts something on a Bluesky account.

To do that, you have to enter the handle of the account: `username`

If the user isn't registered on the bsky.app server, you additionally have to enter the server domain: `username@example.com`
