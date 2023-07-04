---
title: Customcommands
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Explains custom commands and their variables
---

:::caution

Customcommands are deprecated and shouldn't be used anyone. They were replaced by [integrations](/integrations) - you can find more information there.

:::

In order to manage customcommands you need the permission "Manage Server".
We suggest you to use our [Dashboard](https://tomatenkuchen.eu/dashboard/customcommands) to manage customcommands.

# Commands

## Create

`customcommand <Name> <Content>`

Example:
`customcommand hi Hey ^^`

## Edit

`customcommand <Name> <New content>`

Example:
`customcommand hi Hello!`

## Delete

`customcommand <Name> del`

Example:
`customcommand hi del`

## Display raw code

`customcommand <Name> raw`

Example:
`customcommand hi raw`

## Test code

`customcommand test <Customcommand code>`

Example:
`customcommand test Hello **{author.name}**! :D`

# Variables

* Mention: `{author}`
* User ID: `{author.id}`
* Nickname: `{author.name}`
* Username: `{author.username}`
* Discriminator: `{author.discrim}`
* Avatar: `{author.avatar}`
* Account created: `{author.created}`
* Joined: `{author.joined}`
* Server name: `{server.name}`
* Server ID: `{server.id}`
* Server icon: `{server.icon}`
* Server owner: `{server.owner}`
* Members on the server: `{server.members}`
* Bots: `{server.members.bots}`
* Users: `{server.members.humans}`
* Channel mention: `{channel}`
* Channel name: `{channel.name}`
* Channel ID: `{channel.id}`
* Channel topic: `{channel.topic}`
* Channel category: `{channel.category}`
* Channel category ID: `{channel.category.id}`
* Prefix: `{prefix}`
* Unix timestamp: `{unix}`
* Unix timestamp in seconds: `{unixsec}`

* Add alias for another customcommand: `{alias:<Name>}`
* Force role on author: `{requirerole:<ID>}`

* Arguments: `{1} {2} {3} ... {args}`
* Force arguments: `{!1} {!2} {!3} ...`
* Run bot command: `{run:<Befehl>}`
* JSON API: `{jsonapi:<URL> <Property|RANDOM>}`
* Dont delete invoke message: `{nodel}`

**Embeds:**
* Enable embed: `[embed]`
* Set title: `[title:<Text>]`
* Set description: `[description:<Text>]`
* Set image: `[image:<Bild-URL>]`
* Set footer: `[footer:<Text>]`
