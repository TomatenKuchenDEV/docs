---
title: Geburtstage
description: Mit dem Geburtstagssystem kann man Geburtstage pro Nutzer und pro Server erstellen. Du kannst auch Geburtstagskalender und eigene Erinnerungen erstellen.
---

Geburtstagsnachrichten werden täglich um 0 Uhr (Mitternacht) in der festgelegten Serverzeitzone gesendet.

## Reale Nutzer {#users}

### Geburtstag setzen/bearbeiten {#create}

Jeder Nutzer kann seinen Geburtstag global mithilfe von dem Befehl `birthday set <Tag> <Monat> [<Jahr>] [public]` festlegen.

Das Jahr ist optional, wenn angegeben ist bei Geburtstagsnachrichten und [automatisch updatenden Nachrichten](/autoupdate) der Parameter `{age}` verfügbar, womit das neue Alter angezeigt werden kann. Wenn das Jahr nicht angegeben wird ist der Alters-Parameter leer.

Mit der Option `public` wird festgelegt, ob der Geburtstag beim `user`-Befehl und beim `{birthday}`-Argument von Autoupdate-Nachrichten angezeigt wird.
Geburtstagsankündigungen sind hiervon nicht betroffen.

- `birthday set 29 2 2000 public`
	- Legt einen öffentlichen Geburtstag fest, der jedes Jahr am 29.02. angekündigt wird. Wenn das Jahr kein Schaltjahr ist, so erscheint die Nachricht am 01.03.
- `birthday set 1 4`
	- Legt einen nicht öffentlichen Geburtstag fest, der jedes Jahr am 01.04. angekündigt wird.

### Geburtstag löschen {#delete}

<Command name="birthday delete"></Command>

## Fiktive Geburtstage {#fictive}

Fiktive Geburtstage sind pro Server und können von Servermoderatoren erstellt und verwaltet werden.

### Erstellen oder bearbeiten {#fictive-create}

<Command name="birthday setfictive" slash="name:Name day:Tag month:Monat [year:Jahr]" message="<Name> <Tag> <Monat> [<Jahr>]"></Command>

Fiktive Geburtstage müssen einen Namen haben, um sie identifizieren zu können. Mithilfe dieses Namens werden Geburtstagsnachrichten erstellt - die Argumente bleiben gleich und werden vom Bot automatisch angepasst - und `{birthday}` generiert.

- `birthday setfictive Minecraft 17 5 2009`
- `birthday setfictive 🎇Sylvester🎆 31 12`

### Löschen {#fictive-delete}

<Command name="birthday delete" slash="name:Name" message="<Name>"></Command>

## Einstellungen {#settings}

### Nachricht {#settings-message}

Hier kann die Nachricht eingestellt werden, die gesendet wird, wenn ein realer oder fiktiver Nutzer am heutigen Datum Geburtstag hat.

### Geburtstagsnachricht löschen nach {#settings-delete-after}

Diese Einstellung erlaubt es dir, eine relative Zeit anzugeben, nachdem eine Geburtstagsnachricht gelöscht wird, z. B. `1d` für einen Tag.

### Kanal {#settings-channel}

Geburtstagsnachrichten werden in den [ausgewählten Kanal](https://tomatenkuchen.com/dashboard/settings#birthdayChannel) gesendet.

### Rolle {#settings-role}

Es kann eine Rolle ausgewählt werden, die Nutzer am Geburtstag für 24 Stunden erhalten.
