---
title: Rollenbefehl
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Der role-Befehl erlaubt die Verwaltung von Rollen auf deinem Server.
---

Diese Seite listet die Unterbefehle des `role`-Befehls auf und erklärt deren Funktionen.

## info

Zeigt Informationen über die angegebene Rolle.

Wenn keine Rolle angegeben worden ist (oder bei Messagecommands überhaupt kein Argument angegeben worden ist) wird eine Liste aller Rollen des Servers angezeigt.

- role: Die Rolle, worüber Infos angezeigt werden sollen

## bypermission

Listet alle Rollen mit einer bestimmten Berechtigung auf.

- permission*: Die Berechtigung, nach der gefiltert werden soll

## clone

Kopiert die angegebene Rolle.
Die Rolle wird mitsamt ihrer Berechtigungen kopiert, Kanalüberschreibungen der Originalrolle werden aber nicht kopiert.

- role*: Die Rolle

## clearpermissions

Entfernt alle Berechtigungen einer Rolle. Kanalüberschreibungen werden nicht entfernt, daher entspricht dieser Befehl dem Button "Berechtigungen löschen" in der Discord-Server-Rollenliste.

- role*: Die Rolle, von der alle Berechtigungen entfernt werden sollen

## add

Fügt einem Mitglied eine Rolle hinzu.

Wenn keine Zeit angegeben wurde behält der Nutzer die Rolle für immer.

- role*: Die Rolle, welche hinzugefügt werden soll
- user*: Der Nutzer, welcher die Rolle erhalten soll
- time: Für wie lange der Nutzer die Rolle haben soll

## remove

Entfernt eine Rolle von einem Mitglied.

Wenn keine Zeit angegeben wurde wird die Rolle vom Nutzer für immer entfernt.

- role*: Die Rolle, welche entfernt werden soll
- user*: Der Nutzer, welcher die Rolle entfernt bekommen soll
- time: Nach welcher Zeit der Nutzer die Rolle wieder erhält

## massadd

Fügt allen Mitgliedern eine Rolle hinzu.

Du kannst auswählen, ob nur Bots, nur Nutzer oder alle Mitglieder die Rolle erhalten sollen.

- role*: Die Rolle, welche allen hinzugefügt werden soll
- filter: Der Filter

## massremove

Entfernt eine Rolle von allen Mitgliedern.

Du kannst auswählen, ob nur Bots, nur Nutzer oder alle Mitglieder die Rolle entfernt bekommen sollen.

- role*: Die Rolle, welche allen entfernt werden soll
- filter: Der Filter

## randomuser

Wählt zufällig die angegebene Anzahl an Nutzern mit der angegebenen Rolle aus.

- role*: Die Rolle
- amount: Die Anzahl der Nutzer, welche zurückgegeben werden soll
