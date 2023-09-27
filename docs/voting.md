---
title: Vote announcements
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains vote announcements
image: /img/voteannouncements.png
---

By using the vote announcements you can send a custom message once someone votes for your server or bot.

![Vote announcements](/img/voteannouncements.png)

## Settings

### Channel
Select the channel in which the vote messages will be sent.

### Messages
You can customize the server and bot vote message here.

You can use the following variables:
- `{usermention}`: Mention of the user who voted
- `{userid}`: ID of the voting user
- `{username}`: Username of the voting user
- `{globalname}`: Global nickname of the voting user
- `{useravatar}`: Avatar URL of the voting user
- `{domain}`: The domain the user voted on
- `{url}`: URL of the bot or server
- `{voteurl}`: Vote URL of the bot or server

### Vote role
Here you can select a role users will receive after voting. It will be automatically removed after the set time.

## Supported server and bot lists

Depending on the server or bot list used, insert the url as webhook url and the in the dashboard mentioned secret as webhook secret.

- Top.gg: `topgg`
  - Server: `https://api.tomatenkuchen.com/servervote/<Server-ID>/topgg`
  - Bots: `https://api.tomatenkuchen.com/botvote/<Server-ID>/topgg`
- Discordbotlist.com: `dbl`
  - Bots: `https://api.tomatenkuchen.com/botvote/<Server-ID>/dbl/<Bot-ID>`
- Discords.com: `discords`
  - Bots: `https://api.tomatenkuchen.com/botvote/<Server-ID>/discords`

Missing a site? Feel free to suggest it on our [support server](https://tomatenkuchen.com/discord).
