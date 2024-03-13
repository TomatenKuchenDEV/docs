---
title: Customrollen
description: Customrollen erlauben Nutzern auf dem Server, eine eigene Rolle zu erstellen.
image: /img/customrole_info.png
---

Mit Customrollen kannst du deinen Mitgliedern erlauben, sich eine eigene Rolle zu erstellen. Davon können sie den Namen, die Farbe und das Rollenicon (wenn durch Boostlevel freigeschaltet) ändern.

![Customrollen-Info](/img/customrole_info.png)

## Befehle {#commands}

Die Verwaltung einer Customrolle funktioniert mit dem Befehl `customrole`.

### `create` {#cmd-create}

Erstellt eine Customrolle für den aktuellen Nutzer.

- name*: Der Name der Customrolle
- color: Die Farbe der Customrolle

### Name ändern {#cmd-name}

<Command name="customrole name" slash="name:Neuer Name" message="<Neuer Name>"></Command>

Ändert den Namen deiner Customrolle.

### `color` {#cmd-color}

Ändert die Farbe der Customrolle.

- color: Die Farbe der Customrolle. Wenn keine Farbe angegeben ist, wird die Farbe entfernt.

### `icon` {#cmd-icon}

Ändert das Rollenicon.

- icon: Die Bild-URL des neuen Rollenicons. Wenn keine URL angegeben ist, wird das Rollenicon entfernt.

### Löschen {#cmd-delete}

<Command name="customrole delete"></Command>

Löscht die aktuelle Customrolle.

### Info {#cmd-info}

<Command name="customrole info"></Command>

Zeigt Informationen über deine Customrolle an.

## Einstellungen {#settings}

### Rolle, unter der Customrollen erstellt werden {#parent-role}

Unter diesem Rolle werden die Customrollen erstellt. Beachte, dass die höchste Rolle des Bots über dieser Rolle sein muss - wenn nicht, wird die Rolle ganz am Ende der Rollenliste erstellt.

Wenn keine Rolle ausgewählt ist können Customrollen nicht erstellt und nicht bearbeitet werden.

### Rollen, welche Customrollen erstellen dürfen {#create-permissions}

Hier können Rollen ausgewählt werden, welche Customrollen erstellen können. Wenn ein Nutzer keine dieser Rolle hat, kann er den Befehl nicht verwenden.

Du kannst hier z. B. eine Booster- oder VIP-Rolle auswählen.

### Customrollen hoisten {#hoist}

Diese Einstellung verändert, ob Customrollen standardmäßig gehoisted werden. Wenn aktiviert wird die Rolle in der Mitgliederliste an der rechten Seite getrennt von anderen Rollen angezeigt, wenn es die höchste des Nutzers ist. So ist auch der Name und das Rollenicon sichtbar.

Wenn deaktiviert sind Name und Rollenicon nicht in der Mitgliederliste sichtbar.
