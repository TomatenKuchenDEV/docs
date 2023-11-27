---
title: Polls
description: TomatenKuchen is a multipurpose Discord bot with many common and innovative features for your server. Create polls on your server - also as normal member.
---

The `poll` command allows you the creation of polls on your server.

By default, everyone can use the command, however you can edit the slash command permissions in the integrations settings of Discord.

## Excluded roles

Users who have one or more of these roles cannot participate in polls on the server.

Still, their vote is counted if they've voted before.

## Creating a poll

1. Gehe in den Kanal, im dem die Umfrage gestartet werden soll.
2. Run the `poll` slash or message command with the arguments you want.
	- `time`*: Das Zeitlimit, wie lange die Umfrage laufen soll. Wenn diese Zeit abgelaufen ist werden die Ergebnisse angezeigt.
	- `title`*: The title of the poll, e.g. "What's your favourite color?"
	- `options`*: Die Optionen, die die Nutzer haben sollen, getrennt mit Kommas, z. B. `Red,Yellow,Green,Blue`
	- `max_votes`: Die Anzahl der Stimmen, die ein Nutzer hat. Standardmäßig kann jeder Nutzer nur eine Option auswählen, mit dieser Einstellung kann dies verändert werden.
	- `hide_votes`: Hides the "Votes" button below the embed so users cannot find out who voted for what.

\*: This argument is required.
