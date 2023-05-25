---
title: RSS- & Atom-Feeds
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt, wie RSS- und Atom-Feeds verwendet werden können
---

Diese Seite wird dir beim Einrichten von Feeds mit dem Bot helfen.

# RSS-/Atom-Feeds
Der Bot unterstützt alle Arten von RSS- und Atom-Feeds. Du kannst einen Feed erstellen, indem du den "Add"-Button im Dashboard nutzt und die Feed-URL einfügst.
Der Bot wird dann automatisch neue Feedinhalte in den festgelegten Kanal senden.
Feeds are checked for new content every 10 minutes, and up to 10 embeds are displayed.

## Standardkonfiguration
![](/img/rss_feeds_default.png)
Die Felder sollten für die optimale Erfahrung so ausgefüllt sein. Du kannst sie aber natürlich nach Belieben bearbeiten oder verschieben.

* `{author}`: Der Autor des Posts, wenn vorhanden
* `{title}`: Der Titel des Posts, wenn vorhanden
* `{content}`: Der Hauptinhalt des Posts, meist vom `description`-Feld. HTML-Tags werden in Discord-Markdown umgewandelt.
* `{image}`: Das Bild des Posts, wenn vorhanden
* `{domain}`: Die Domain des Feeds

Wenn der Feed weitere Werte enthält, kannst du sie ebenfalls nutzen. Der Bot wird sie automatisch mit dem entsprechenden Wert ersetzen, z. B. `{link}` wenn der Feed `"link": "https://tomatenkuchen.eu/post/42"` enthält.

## Beispielfeeds

### YouTube
Auch wenn es einen eigenen YouTube-Feed gibt kannst du auch RSS-Feeds dafür verwenden.

Feed-URL: `https://www.youtube.com/feeds/videos.xml?channel_id=UC...`, wobei `UC...` die Kanal-ID ist. Die Kanal-ID erhältst du mithilfe des `youtube`-Befehls.

`content`: `**{user}** hat ein neues Video hochgeladen! {link}`
Embedfelder sollten leer gelassen werden, da sich Videos nicht in benutzerdefinierten Embeds einfügen lassen.

### Nitter (Twitter)
Feed-URL: `https://nitter.net/{user}/rss`

### Mastodon
Feed-URL: `https://{instance}/users/{user}.atom`

### Reddit
Feed-URL: `https://www.reddit.com/r/{subreddit}/new/.rss`

# Minecraft-Versionen
Es können Feeds erstellt werden, um Snapshots, Prereleases, Release Candidates und Vollversionen von Minecraft anzukündigen. Für jeden dieser Typen kann ein Kanal festgelegt werden.

Die Nachricht erscheint meist innerhalb einer Minute nach der Veröffentlichung und ist damit deutlich schneller als Minecraft-Blogposts oder Discord-Changelogs selbst.
