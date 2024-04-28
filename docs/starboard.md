---
title: Starboard
description: Starboard allows your server members to react with an emoji to a message and save it forever in a special channel.
image: /img/starboard.webp
---

Using the starboard members can save funny or otherwise interesting messages forever: Every user on the server can react with the set emoji onto a message.

Once the set amount of "stars" is reached, the message is sent to the starboard channel.

![Starboard message](/img/starboard.webp)

Messages on the starboard also show images and replies.
Images are stored outside of Discord to allow displaying them even if the original source image was deleted.

## Settings {#settings}

### Starboard channel {#channel}

Sets the channel in which the starboard messages are sent and updated.

### Self star {#self-star}

If users can react on their own messages.

### Required reaction amount {#required-reactions}

How many reactions of the set emoji are needed to send the starboard message.

### Emoji {#reaction-emoji}

Which emoji is used for the starboard. It's used for counting the reactions and displayed in the message footer.

Default value: `⭐`

### Excluded channels {#excluded-channels}

Which channels are blacklisted from the starboard. Can be used to for example exclude team channels or tickets.

Messages in nsfw channels are only sent to the starboard channel if the starboard channel is marked as nsfw too.
