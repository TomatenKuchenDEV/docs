---
title: Giveaways
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt die Funktionen des Giveawayssystems.
---

Um Giveaways zu verwalten braucht man eine der im Dashhoard festgelegten Giveaway-Rollen oder die Berechtigung "Server verwalten".

## Befehle {#commands}

### Erstellen

Interaktives Setup eines Giveaways.

`giveaway start`

### Bearbeiten

Button unter dem Giveaway

### Neue(n) Gewinner aussuchen

`giveaway reroll <Nachrichten-ID>`

Diese Funktion wählt einen oder die eingestellte Anzahl an Gewinnern aus. Nutzer können auch mehrfach ausgewählt werden.

### Beenden

`giveway end <Nachrichten-ID>`

### Löschen

`giveway delete <Nachrichten-ID>`

## Einstellungen

### Giveaway-Nachricht

Hier kann der Text der Giveaway-Nachricht verändert werden, z. B. um eine Giveaway-Rolle zu erwähnen.

### Rolle zum Erstellen/Verwalten von Giveaways

Es können Rollen ausgewählt werden, welche Giveaways erstellen und bearbeiten können.

Nutzer mit einer dieser Rollen können alle [Befehle](#commands) dieser Seite ausführen.

### Rollen, welche immer an Giveaways teilnehmen dürfen

Die ausgewählten Rollen können immer an Giveaways teilnehmen, unabhängig davon, welche Bedingungen für das Giveaway festgelegt sind.

### Verhalten von Zusatzeinträgen

#### Mehrfach

Diese Einstellung sorgt dafür, dass die Standardteilnahme, also eins, mit allen Zusatzeinträgen zusammenaddiert werden.

#### Höchste Rolle

Mit dieser Einstellung zählen die Zusatzteilnahmen der höchsten Rolle, welche der entsprechende Nutzer hat *und* einen Wert für die Zusatzteilnahmen zugewiesen hat.

#### Höchste Zusatzteilnahme

Dieser Wert zählt die höchste Zusatzteilnahme, die der Nutzer über seine Rollen hat.

### Zusatzeinträge pro Rolle

Hier kann pro Rolle eine Anzahl eingegeben werden, die die Rolle an zusätzlichen Einträgen in Giveaways erhält.

Es kann eine Zahl von 0 bis 50 verwendet werden, wobei 0 die Teilnahme dieser Rolle an Giveways effektiv unterbindet.

## Bedingungen

Es können verschiedene Bedingungen für die Teilnahme an Giveaways festgelegt werden.

Mögliche Bedingungen:
- `roles`: Erfordert alle dieser Rollen für die Teilnahme
	- `roles:123456789123456789`
	- `roles:123456789123456789,987654321987654321`
- `anyRoles`: Erfordert irgendeiner dieser Rollen für die Teilnahme
- `notRoles`: Der Nutzer darf keine dieser Rollen haben, um teilnehmen zu dürfen
- `minAge`: Der Account des Nutzers muss mindestens so alt sein
	- `minAge:3mo`
	- `minAge:1 week 2 days`
- `minMemberAge`: Der Nutzer muss mindestens so lange auf dem Server sein
- `minLeaderboardPoints`: Der Nutzer muss mindestens so viele Punkte auf dem Leaderboard haben. Je nach Levelcooldown entspricht ein Levelpunkt ein bis zwei Nachrichten.
	- `minLeaderboardPoints:1000`
