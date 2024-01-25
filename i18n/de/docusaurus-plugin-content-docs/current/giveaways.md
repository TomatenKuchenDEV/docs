---
title: Giveaways
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt die Funktionen des Giveawayssystems.
---

Um Giveaways zu verwalten braucht man eine der im Dashhoard festgelegten Giveaway-Rollen oder die Berechtigung "Server verwalten".

## Befehle {#commands}

### Erstellen {#cmd-start}

Interaktives Setup eines Giveaways.

`giveaway start`

### Bearbeiten {#cmd-edit}

Button unter dem Giveaway

### Neue(n) Gewinner aussuchen {#cmd-reroll}

`giveaway reroll <Nachrichten-ID>`

Diese Funktion wählt einen oder die eingestellte Anzahl an Gewinnern aus. Nutzer können auch mehrfach ausgewählt werden.

### Beenden {#cmd-end}

`giveway end <Nachrichten-ID>`

### Löschen {#cmd-delete}

`giveway delete <Nachrichten-ID>`

### Giveaways auflisten {#cmd-list}

<Command slash="giveaway list"></Command>

## Einstellungen {#settings}

### Giveaway-Nachricht {#settings-message}

Hier kann der Text der Giveaway-Nachricht verändert werden, z. B. um eine Giveaway-Rolle zu erwähnen.

### Rolle zum Erstellen/Verwalten von Giveaways {#settings-manager-role}

Es können Rollen ausgewählt werden, welche Giveaways erstellen und bearbeiten können.

Nutzer mit einer dieser Rollen können alle [Befehle](#commands) dieser Seite ausführen.

### Rollen, welche immer an Giveaways teilnehmen dürfen {#settings-no-requirements-role}

Die ausgewählten Rollen können immer an Giveaways teilnehmen, unabhängig davon, welche Bedingungen für das Giveaway festgelegt sind.

### Verhalten von Zusatzeinträgen {#settings-additional-entries}

#### Mehrfach {#settings-entries-multiple}

Diese Einstellung sorgt dafür, dass die Standardteilnahme, also eins, mit allen Zusatzeinträgen zusammenaddiert werden.

#### Höchste Rolle {#settings-entries-highest-role}

Mit dieser Einstellung zählen die Zusatzteilnahmen der höchsten Rolle, welche der entsprechende Nutzer hat *und* einen Wert für die Zusatzteilnahmen zugewiesen hat.

#### Höchste Zusatzteilnahme {#settings-entries-highest-entry}

Dieser Wert zählt die höchste Zusatzteilnahme, die der Nutzer über seine Rollen hat.

### Zusatzeinträge pro Rolle {#settings-additional-role-entries}

Hier kann pro Rolle eine Anzahl eingegeben werden, die die Rolle an zusätzlichen Einträgen in Giveaways erhält.

Es kann eine Zahl von 0 bis 50 verwendet werden, wobei 0 die Teilnahme dieser Rolle an Giveways effektiv unterbindet.

## Bedingungen {#requirements}

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
