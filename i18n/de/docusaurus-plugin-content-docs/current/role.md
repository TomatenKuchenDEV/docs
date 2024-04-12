---
title: Rollenbefehl
description: Der role-Befehl erlaubt die Verwaltung von Rollen und deren Nutzer auf einem Server.
---

Diese Seite listet die Unterbefehle des `role`-Befehls auf und erklärt deren Funktionen.

## list {#cmd-info}

Listet Rollen des Servers und filtert diese optionalerweise.

- filter: Filter, welche auf alle Rollen angewendet werden sollen:
	`-managed`/`-unmanaged`: Ob die Rolle manuell erstellt wurde und vollständig bearbeitbar ist, oder ob sie von einer Discord-Integration, z. B. einem Bot, verwaltet wird.
	`-withmembers`/`-withoutmembers`: Ob es auf dem Server mindestens ein (gecachtes) Mitglied mit dieser Rolle gibt.
	`-hoisted`/`-unhoisted`: Ob die Rolle in der Mitgliederliste separat dargestellt wird.
	`-mentionable`/`-unmentionable`: Ob die Rolle standardmäßig erwähnbar ist.
	`-startswith=<Name>`/`-endswith=<Name>`: Ob der Rollenname mit diesem Text beginnt bzw. endet.
	`-includes=<Name>`/`-notincludes=<Name>`: Ob der Rollenname diesen Text enthält (Groß- und Kleinschreibung wird ignoriert).

## info {#cmd-info}

Zeigt Informationen über die angegebene Rolle.

- role: Die Rolle, worüber Infos angezeigt werden sollen

## bypermission {#cmd-bypermission}

Listet alle Rollen mit einer bestimmten Berechtigung auf.

- permission*: Die Berechtigung, nach der gefiltert werden soll

## clone {#cmd-clone}

<Command name="role clone" slash="role:Rolle" message="<Rolle>"></Command>

Kopiert die angegebene Rolle mitsamt ihrer Berechtigungen.

Kanalüberschreibungen der Rolle werden nicht kopiert.

## clearpermissions {#cmd-clearpermissions}

<Command name="role clearpermissions" slash="role:Rolle" message="<Rolle>"></Command>

Entfernt alle Berechtigungen einer Rolle.

Kanalüberschreibungen werden nicht entfernt, daher entspricht dieser Befehl von der Funktion her dem Button "Berechtigungen löschen" in der Discord-Server-Rollenliste.

## add {#cmd-add}

Fügt einem Mitglied eine Rolle hinzu.

Wenn keine Zeit angegeben wurde behält der Nutzer die Rolle für immer.

- role*: Die Rolle, welche hinzugefügt werden soll
- user*: Der Nutzer, welcher die Rolle erhalten soll
- time: Für wie lange der Nutzer die Rolle haben soll

## remove {#cmd-remove}

Entfernt eine Rolle von einem Mitglied.

Wenn keine Zeit angegeben wurde wird die Rolle vom Nutzer für immer entfernt.

- role*: Die Rolle, welche entfernt werden soll
- user*: Der Nutzer, welcher die Rolle entfernt bekommen soll
- time: Nach welcher Zeit der Nutzer die Rolle wieder erhält

## massadd {#cmd-massadd}

Fügt allen Mitgliedern eine Rolle hinzu.

Siehe die [Massenaktionen](/moderation/massactions#cmd-role-massadd)-Dokumentation für mehr Informationen.

## massremove {#cmd-massremove}

Entfernt eine Rolle von allen Mitgliedern.

Siehe die [Massenaktionen](/moderation/massactions#cmd-role-massremove)-Dokumentation für mehr Informationen.

## randomuser {#cmd-randomuser}

Wählt zufällig die angegebene Anzahl an Nutzern mit der angegebenen Rolle aus.

- role*: Die Rolle
- amount: Die Anzahl der Nutzer, welche zurückgegeben werden soll, standardmäßig 1
