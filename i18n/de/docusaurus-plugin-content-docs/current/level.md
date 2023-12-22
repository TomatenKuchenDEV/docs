---
title: Level & Leaderboard
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt das Levelsystem und Leaderboards von TomatenKuchen.
image: /img/leaderboard.png
---

## Befehle {#commands}

### Leaderboard anzeigen {#cmd-leaderboard}

Mit dem Befehl `leaderboard level` kann das Level-Leaderboard des Servers angezeigt werden.

Dieser Befehl verlinkt auch auf die Leaderboard-Website des Servers.
Die URL wird automatisch angepasst, wenn der Server eine Vanity-URL für das Leaderboard verwendet.

![Leaderboard-Befehl](/img/leaderboard.png)

### Punkte eines Nutzers anzeigen {#cmd-points}

Der Befehl `rank` zeigt die aktuellen Punkte und den Level-Fortschritt eines Nutzers an.

Der Bildhintergrund kann mithilfe des Befehls `usersettings` angepasst werden.

![Rank-Befehl](/img/rank.png)

## Für ein Level benötigte Punkte {#cmd-required-points}

Die Anzahl der Punkte, die für ein Level benötigt werden, wird mit `(<Level> / 0.35)²` berechnet.

Das heißt, dass die Anzahl der Punkte, die für ein Level benötigt werden, exponentiell ansteigt.

## Einstellungen {#settings}

### Level (de)aktiviert {#settings-active}

Stellt ein, ob das Levelsystem aktiviert oder deaktiviert ist.

### Levelnachricht und Levelrollen {#settings-roles}

Legt eine Levelnachricht und dazugehörige Levelrollen fest.

Ebenfalls kann eine Anzahl an Punkten festgelegt werden, die Nutzer beim Senden einer Nachricht mit diesem Level erhalten.
Da die Level automatisch mehr Punkte erfordern, sollte dieser Wert bei **1 belassen** (oder leer gelassen) werden.

Es kann für jedes Level eine Nachricht und eine Rolle festgelegt werden.

Wenn für ein Level keine Einstellung gefunden wird, wird die nächsttiefere verwendet.

Mögliche Variablen:
- `{usermention}`: Erwähnung des Nutzers
- `{username}`: Nutzername
- `{globalName}`: Globaler Anzeigename
- `{displayName}`: Nickname
- `{oldlevel}`: Altes Level
- `{newlevel}`: Neues/aktuelles Level

### Levelrollen stackbar {#settings-stackable}

Stellt ein, ob Nutzer vorherige Levelrollen behalten oder immer nur die höchste erhalten.

### Kanal für Levelnachrichten {#settings-channel}

Hier kann der Kanal ausgewählt werden, in dem Level-up-Nachrichten gesendet werden. Es kann entweder ein Kanal oder "Current channel" ausgewählt werden, um die Nachricht in den aktuellen Kanal zu senden.

### Kanäle und Rollen ausschließen {#settings-excluded}

Es können einzelne oder Gruppierungen von Kanälen bzw. Rollen vom Sammeln von Levelpunkten ausgenommen werden, z. B. für einen `bot-spam`-Kanal.

### Multiplier pro Kanal {#settings-multiplier}

Legt einen Multiplier pro Kanal fest. Kann z. B. verwendet werden, um in Botkanälen weniger Punkte zu verteilen und in VIP-/Booster-/…-Kanälen mehr.

### Cooldown {#settings-cooldown}

Hier kann der Cooldown festgelegt werden, in dem Nutzer keine Punkte erhalten. Dient dazu, Spam zu verhindern.

Wenn alle Nachrichten der Nutzer gezählt werden sollen, setze diesen Wert auf `0`.

### Vanity-URL {#settings-vanity}

Hier kann die Vanity-URL für die Leaderboardwebsite angepasst werden.
Diese gilt für `levels.cf` und `lboard.tk`.

Beispiel:
- https://levels.cf/tk
- https://lboard.tk/chaoshosting

### Punkte pro Zeichen {#settings-points-per-char}

Mithilfe dieser Einstellung kannst du eine Anzahl an Punkten festlegen, die pro gesendetem Zeichen hinzugefügt (oder entfernt) werden.

Du kannst einen Eintrag hinzufügen und eine Punkteanzahl pro Nachrichtenlänge festlegen.

Beachte, dass alle Einträge zusammenaddiert werden, wenn die festgelegte Länge der Länge der Nachricht entspricht oder länger ist -
wenn du die Anzahl der Punkte reduzieren möchtest, setze einfach einen negativen Wert.

Diese Einstellung ist standardmäßig deaktiviert und wird nur aktiviert, wenn eine oder mehr Nachrichtenlängen festgelegt worden sind.
Im Normalfall zählt eine Nachricht einen Punkt, außer es gibt [Multiplier](#settings-multiplier) oder der Nutzer hat eine Levelrolle, welche die Standardpunkteanzahl verändert.
