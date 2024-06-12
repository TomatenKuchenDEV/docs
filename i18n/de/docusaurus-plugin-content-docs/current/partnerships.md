---
title: Partnerships
description: Verwalte Partnerschaften mit anderen Servern und Diensten problemlos, und erhalte Statistiken über Affiliate- und Partnermanager.
---

## Befehle {#commands}

### `add` {#cmd-add}

<Command name="partnership add" slash="channel:Partnerkanal message:Nachrichteneditorcode [name:Partnername partnermanager:Manager]" message="<Partnerkanal> <Nachrichteneditorcode> [<Partnername> <Manager>]"></Command>

Fügt einen Partner hinzu.

Durch das Auswählen eines Kanals wird dem Partner automatisch die eingestellte Kategorie zugewiesen.

Wenn alle Eingaben korrekt sind sendet TomatenKuchen die Nachricht in den Partnerkanal.
Wenn du dies nicht möchtest, sende die Nachricht einfach selbst in den Kanal oder bitte den Partnermanager, dies zu tun.

### `list` {#cmd-list}

<Command name="partnership list"></Command>

Listet alle Partner auf und filtert optionalerweise nach den angegebenen Parametern.

### `check` {#cmd-check}

<Command name="partnership check" slash="[time:Letzte-Überprüfungszeit-Filter category:Partnerkategorie]" message="[<Letzte-Überprüfungszeit-Filter> <Partnerkategorie>]"></Command>

Listet Partner auf, welche seit der angegebenen Zeit nicht mehr überprüft wurden, oder überhaupt noch nie.

Damit kannst du z. B. sicherstellen, dass ein Partner oder Affiliate die Werbung an der richtigen Stelle beibehält.

### Leaderboard {#leaderboard}

<Command name="leaderboard partners"></Command>

Das Leaderboard zeigt die Benutzer mit dem meisten Partnerschaften im angegebenen Zeitraum an.

## Einstellungen {#settings}

### Partnerkanäle {#partner-channels}

Jedem Partnerkanal kann eine Kategorie zugewiesen werden, die den Partnern in diesem Kanal zugewiesen wird.
Anhand dieser Kategorie können die Partner dann gefiltert werden. Kategorien können auch mehrfach vergeben werden.

Ebenfalls kann eingestellt werden, welchem Partnermanager bzw. Nutzer der Partner zugeordnet wird, wenn eine Nachricht in den Kanal gesendet wird.
Bei der Verwendung des [Befehls](#cmd-add) kann der Partnermanager manuell festgelegt werden.
