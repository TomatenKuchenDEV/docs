---
title: RSS- & Atom-Feeds
description: Erklärt, wie RSS-, Atom- und Minecraft-Versionen-Feeds verwendet werden können.
image: /img/feed_rss.webp
---

Diese Seite wird dir beim Einrichten von Feeds mit TomatenKuchen helfen.

![Feed vom Discord-Status](/img/feed_rss.webp)

## RSS-/Atom-Feeds {#rss}

Der Bot unterstützt alle Arten von RSS- und Atom-Feeds. Du kannst einen Feed erstellen, indem du den "Add"-Button im Dashboard nutzt und die Feed-URL einfügst.
Der Bot wird dann automatisch neue Feedinhalte in den festgelegten Kanal senden.

Feeds werden alle zehn Minuten nach neuen Inhalten durchsucht.

### Standardkonfiguration {#default}

- `{author}`: Der Autor des Posts, wenn vorhanden
- `{title}`: Der Titel des Posts, wenn vorhanden
- `{content}`: Der Inhalt/Text des Posts, meist vom `description`-Feld. HTML-Tags werden in Discord-Markdown umgewandelt.
- `{image}`: Das Bild des Posts, wenn vorhanden
- `{domain}`: Die Domain des Feeds

Wenn der Feed weitere Werte enthält, kannst du sie ebenfalls nutzen. Der Bot wird sie automatisch mit dem entsprechenden Wert ersetzen, z. B. `{link}` wenn der Feed `"link": "https://tomatenkuchen.com/post/42"` enthält.

## Beispielfeeds {#example}

### Nitter (Twitter/"X") {#nitter}

Feed-URL: `https://nitter.net/{user}/rss`

### Mastodon {#mastodon}

Feed-URL: `https://{instance}/users/{user}.atom`

### Reddit {#reddit}

Feed-URL: `https://www.reddit.com/r/{subreddit}/new/.rss`

## Neue Minecraft-Versionen {#minecraft}

Es können Feeds erstellt werden, um Snapshots, Prereleases, Release Candidates und Vollversionen von Minecraft anzukündigen. Für jeden dieser Typen kann ein Kanal festgelegt werden.

Die Nachricht erscheint meist innerhalb einer Minute nach der Veröffentlichung und ist damit deutlich schneller als die Minecraft-Blogposts oder Changelogs auf Discord.

Auch kann eine Nachricht angezeigt werden, wenn für eine neue Vollversion der erste [PaperMC-Server-Software](https://papermc.io)-Build veröffentlicht wird.

## Bluesky {#bluesky}

Mit den Bluesky-Feeds kann eine Nachricht gesendet werden, sobald ein Nutzer etwas auf einem Bluesky-Account postet.

Dafür muss der Handle des Accounts eingegeben werden: `nutzername`

Wenn der Nutzer nicht auf dem bsky.app-Server registriert ist muss zusätzlich die Serverdomain angegeben werden: `nutzername@example.com`
