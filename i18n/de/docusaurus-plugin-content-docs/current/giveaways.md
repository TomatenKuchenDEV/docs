---
title: Giveaways
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt die Funktionen des Giveawayssystems.
---

Um Giveaways zu verwalten braucht man eine der im Dashhoard festgelegten Giveaway-Rollen oder die Berechtigung "Server verwalten".

# Befehle

## Erstellen

Interaktives Setup eines Giveaways.

`giveaway start`

## Bearbeiten

Button unter dem Giveaway

## Neue(n) Gewinner aussuchen

`giveaway reroll <Nachrichten-ID>`

## Beenden

`giveway end <Nachrichten-ID>`

## Löschen

`giveway delete <Nachrichten-ID>`

# Einstellungen

## Rolle zum Erstellen/Verwalten von Giveaways
Es können Rollen ausgewählt werden, welche Giveaways erstellen, bearbeiten und löschen können.

## Rollen, welche nicht an Giveaways teilnehmen dürfen
Ausgewählte Rollen können nicht an Giveaways teilnehmen. Diese Einstellung gilt im Gegensatz zur `notroles`-Bedingung für alle Giveaways.

# Bedingungen
Es können verschiedene Bedingungen für die Teilnahme an Giveaways festgelegt werden.

Mögliche Bedingungen:
* `roles`: Erfordert alle dieser Rollen für die Teilnahme
	* `roles:123456789123456789`
	* `roles:123456789123456789,987654321987654321`
* `anyRoles`: Erfordert irgendeiner dieser Rollen für die Teilnahme
* `notRoles`: Der Nutzer darf keine dieser Rollen haben, um teilnehmen zu dürfen
* `minAge`: Der Account des Nutzers muss mindestens so alt sein
	* `minAge:3mo`
	* `minAge:1 week 2 days`
* `minMemberAge`: Der Nutzer muss mindestens so lange auf dem Server sein
* `minLeaderboardPoints`: Der Nutzer muss mindestens so viele Punkte auf dem Leaderboard haben
	* `minLeaderboardPoints:1000`
