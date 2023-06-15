---
title: Private Sprachkanäle
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Informationen über die Verwendung und die Befehle privater Sprachkanäle.
---

Sobald ein Nutzer den im Dashboard ausgewählten Kanal betritt, wird ein neuer privater Sprachkanal erstellt.
Die Rechte für diesen Kanal lassen sich mit dem Befehl `permission` einstellen.

# Einstellungen

Du kannst verschiedene Sprachkanäle im Dashboard festlegen und für jeden dieser eine Kategorie festlegen, in dem die privaten Kanäle erstellt werden sollen.
Der Name kann anhand der Nutzer- oder Nicknamens und/oder einer sich erhöhenden ID festgelegt werden.

# Befehle

## Öffnen

Gib jedem die Berechtigung, deinen Sprachkanal zu betreten.

`permission open`

## Schließen

Entferne jedem außer dir die Rechte für den Sprachkanal.
Die Nutzer bleiben noch im Sprachkanal und können weiterhin sprechen, aber nicht erneut beitreten.

`permission close`

## Alle Nutzer im Sprachkanal kicken

Kicke jeden außer dich aus deinem Sprachkanal.

`permission reset`

## Nutzer hinzufügen

Gib einem bestimmten Nutzer Rechte, in deinen Sprachkanal zu gehen.

`permission add <Nutzer>`

Alternativ kannst du auch das Selectmenü in deinem Sprachkanal verwenden.

## Nutzer entfernen

Entferne und kicke den angegeben Nutzer aus deinem Sprachkanal.

`permission remove <Nutzer>`

## Moderator hinzufügen

Moderatoren können, wie der Ersteller, alle permission-Befehle verwenden.
Sie haben auch Stream-Berechtigungen im privaten Kanal.

`permission addmod <Nutzer>`

## Moderator entfernen

`permission removemod <Nutzer>`

## Nutzerlimit festlegen

Setzt ein Limit, wie viele Nutzer dem Sprachkanal beitreten können.

`permission setlimit <Limit>`
