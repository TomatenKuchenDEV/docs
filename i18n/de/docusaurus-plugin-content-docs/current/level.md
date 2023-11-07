---
title: Level & Leaderboard
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Erklärt das Levelsystem und Leaderboards von TomatenKuchen
image: /img/leaderboard.png
---

## Befehle

### Leaderboard anzeigen

Mit dem Befehl `leaderboard` kann das Leaderboard des Servers angezeigt werden.

Dieser Befehl verlinkt auch auf die Leaderboard-Website des Servers. Die URL wird automatisch angepasst, wenn der Server eine Vanity-URL für das Leaderboard verwendet.

![Leaderboard-Befehl](/img/leaderboard.png)

### Punkte eines Nutzers anzeigen

Der Befehl `rank` zeigt die aktuellen Punkte und den Level-Fortschritt eines Nutzers an.

Der Bildhintergrund kann mithilfe des Befehls `usersettings` angepasst werden.

![Rank-Befehl](/img/rank.png)

## Einstellungen

### Levelnachricht und Levelrollen

Legt eine Levelnachricht und dazugehörige Levelrollen fest.

Ebenfalls kann eine Anzahl an Punkten festgelegt werden, die Nutzer beim Senden einer Nachricht mit diesem Level erhalten.
Da die Level automatisch mehr Punkte erfordern, sollte dieser Wert bei **1 belassen** werden.

Es kann für jedes Level eine Nachricht und eine Rolle festgelegt werden.

Wenn für ein Level keine Einstellung gefunden wird, wird die nächsttiefere verwendet.

Mögliche Variablen:
- `{usermention}`: Erwähnung des Nutzers
- `{username}`: Nutzername
- `{globalName}`: Globaler Anzeigename
- `{displayName}`: Nickname
- `{oldlevel}`: Altes Level
- `{newlevel}`: Neues/aktuelles Level

### Levelrollen stackbar

Stellt ein, ob Nutzer vorherige Levelrollen behalten oder immer nur die höchste erhalten.

### Kanal für Levelnachrichten

Hier kann der Kanal ausgewählt werden, in dem Level-up-Nachrichten gesendet werden. Es kann entweder ein Kanal oder "Current channel" ausgewählt werden, um die Nachricht in den aktuellen Kanal zu senden.

### Kanäle und Rollen ausschließen

Es können einzelne oder Gruppierungen von Kanälen bzw. Rollen vom Sammeln von Levelpunkten ausgenommen werden, z. B. für einen `bot-spam`-Kanal.

### Multiplier pro Kanal

Legt einen Multiplier pro Kanal fest. Kann z. B. verwendet werden, um in Botkanälen weniger Punkte zu verteilen und in VIP-/Booster-/...-Kanälen mehr.

### Cooldown

Hier kann der Cooldown festgelegt werden, in dem Nutzer keine Punkte erhalten. Dient dazu, Spam zu verhindern.

Wenn alle Nachrichten der Nutzer gezählt werden sollen, setze diesen Wert auf `0`.

### Vanity-URL

Hier kann die Vanity-URL für die Leaderboardwebsite angepasst werden.
Diese gilt für `levels.cf` und `lboard.tk`.

Beispiel:
- https://levels.cf/tk
- https://lboard.tk/chaoshosting
