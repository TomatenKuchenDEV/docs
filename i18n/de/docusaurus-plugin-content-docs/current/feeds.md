---
title: RSS- & Atom-Feeds
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt, wie RSS-, Atom- und Minecraft-Versionen-Feeds verwendet werden können.
image: /img/feed_example.png
---

Diese Seite wird dir beim Einrichten von Feeds mit TomatenKuchen helfen.

![Feed vom Discord-Status](/img/feed_example.png)

## RSS-/Atom-Feeds
Der Bot unterstützt alle Arten von RSS- und Atom-Feeds. Du kannst einen Feed erstellen, indem du den "Add"-Button im Dashboard nutzt und die Feed-URL einfügst.
Der Bot wird dann automatisch neue Feedinhalte in den festgelegten Kanal senden.
Feeds werden alle zehn Minuten nach neuen Inhalten durchsucht.

### Standardkonfiguration
![](/img/rss_feeds_default.png)
Die Felder sollten für die optimale Erfahrung so ausgefüllt sein. Du kannst sie aber natürlich nach Belieben bearbeiten oder verschieben.

- `{author}`: Der Autor des Posts, wenn vorhanden
- `{title}`: Der Titel des Posts, wenn vorhanden
- `{content}`: Der Inhalt/Text des Posts, meist vom `description`-Feld. HTML-Tags werden in Discord-Markdown umgewandelt.
- `{image}`: Das Bild des Posts, wenn vorhanden
- `{domain}`: Die Domain des Feeds

Wenn der Feed weitere Werte enthält, kannst du sie ebenfalls nutzen. Der Bot wird sie automatisch mit dem entsprechenden Wert ersetzen, z. B. `{link}` wenn der Feed `"link": "https://tomatenkuchen.com/post/42"` enthält.

## Beispielfeeds

### Nitter (Twitter)
Feed-URL: `https://nitter.net/{user}/rss`

### Mastodon
Feed-URL: `https://{instance}/users/{user}.atom`

### Reddit
Feed-URL: `https://www.reddit.com/r/{subreddit}/new/.rss`

## Minecraft-Versionen

Es können Feeds erstellt werden, um Snapshots, Prereleases, Release Candidates und Vollversionen von Minecraft anzukündigen. Für jeden dieser Typen kann ein Kanal festgelegt werden.

Die Nachricht erscheint meist innerhalb einer Minute nach der Veröffentlichung und ist damit deutlich schneller als die Minecraft-Blogposts oder Changelogs auf Discord.

Auch kann eine Nachricht angezeigt werden, wenn für eine neue Vollversion der erste [PaperMC-Server-Software](https://papermc.io)-Build veröffentlicht wird.
