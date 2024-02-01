---
title: Private Sprachkanäle
description: Informationen über die Verwendung und die Befehle privater Sprachkanäle.
---

Sobald ein Nutzer den im Dashboard ausgewählten Kanal betritt, wird ein neuer privater Sprachkanal erstellt.
Die Rechte für diesen Kanal lassen sich mit dem Befehl `permission` einstellen.

## Einstellungen {#settings}

Du kannst verschiedene Sprachkanäle im Dashboard festlegen und für jeden dieser eine Kategorie festlegen, in dem die privaten Kanäle erstellt werden sollen.
Der Name kann anhand der Nutzer- oder Nicknamens und/oder einer sich erhöhenden ID festgelegt werden.

## Befehle {#commands}

### Öffnen {#cmd-open}

Gib jedem die Berechtigung, deinen Sprachkanal zu betreten.

<Command slash="permission open"></Command>

### Schließen {#cmd-close}

Entferne jedem außer dir die Rechte für den Sprachkanal.
Die Nutzer bleiben noch im Sprachkanal und können weiterhin sprechen, aber nicht erneut beitreten.

<Command slash="permission close"></Command>

### Alle Nutzer im Sprachkanal kicken {#cmd-reset}

Kicke jeden außer dich aus deinem Sprachkanal.

<Command slash="permission reset"></Command>

### Nutzer hinzufügen {#cmd-add}

Gib einem bestimmten Nutzer Rechte, in deinen Sprachkanal zu gehen.

<Command slash="permission add user:Nutzer" message="permission add <Nutzer>"></Command>

Alternativ kannst du auch das Selectmenü in deinem privaten Kanal verwenden.

### Nutzer entfernen {#cmd-remove}

Entferne und kicke den angegeben Nutzer aus deinem Sprachkanal.

<Command slash="permission remove user:Nutzer" message="permission remove <Nutzer>"></Command>

Alternativ kannst du auch das Selectmenü in deinem privaten Kanal verwenden.

### Moderator hinzufügen {#cmd-addmod}

Moderatoren können, wie der Ersteller, alle permission-Befehle verwenden.

Sie haben auch Stream-Berechtigungen im privaten Kanal.

<Command slash="permission addmod user:Nutzer" message="permission addmod <Nutzer>"></Command>

Alternativ kannst du auch das Selectmenü in deinem privaten Kanal verwenden.

### Moderator entfernen {#cmd-removemod}

<Command slash="permission removemod user:Nutzer" message="permission removemod <Nutzer>"></Command>

Alternativ kannst du auch das Selectmenü in deinem privaten Kanal verwenden.

### Nutzerlimit festlegen {#cmd-setlimit}

Setzt ein Limit, wie viele Nutzer dem Sprachkanal beitreten können.

<Command slash="permission setlimit limit:Nutzerlimit" message="permission setlimit <Nutzerlimit>"></Command>
