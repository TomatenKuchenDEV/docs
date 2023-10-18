---
title: YouTube feeds
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. The bot is for example able to send messages when a YouTube channel uploads a new video or short.
---

YouTube notificiations allow sending a message when the user uploads a new video or short to YouTube.
If a user schedules a video or livestream, the bot will also announce it.

The bot checks for new items every 10 minutes, due to YouTube limiting the feeds it rarely may take a bit longer.

## Settings

You can get the YouTube user ID for the `channel` field using the `youtube` command or using the "Share" button on a channels info page.

Every server can add up to ten different users and receive notifications for them.

## Variables

This is an explanation of all variables that can be used in YouTube messages.

- `{link}`: The link to the newly uploaded video or short
- `{title}`: The video title
- `{thumbnail}`: Image URL of the thumbnail
- `{description}`: The video description
- `{channelName}`: Publisher channel name
- `{channelLink}`: Publisher channel link
- `{published}`: When the video was published
- `{updated}`: When the video was last updated - due to the short timespan until detecting the video usually the same as or similar to the publish time.
