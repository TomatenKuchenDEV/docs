---
title: PN melden/Nachrichtenverifikation
description: Indem du die PN-melden-Funktion verwendest hast du die Möglichkeit, einfach die Existenz und den exakten Inhalt einer Nachricht zu verifizieren, welche in einer Direktnachricht gesendet wurde. Das ist besonders beim Melden von PN-Werbenden nützlich.
image: /img/dm-report.png
---

Die PN-melden-Funktion erlaubt dir, problemlos die Existenz und den Inhalt einer Nachricht zu verifizieren, welche in einer Direkt-/Privatnachricht (PN) oder einer Gruppen-PN (GDM) gesendet wurde.

Dieses Feature benötigt keinerlei Einrichtung seitens der Serveradministration, stattdessen funktioniert es einfach mit einer Einrichtungsanleitung für Nutzer.

Die Hauptidee ist, dass reale Nachrichten von Scammern oder PN-Werbenden verifiziert gemeldet werden können.

![Eine mit dem PN-melde-Befehl gemeldete Nachricht](/img/dm-report.png)

## Verwendung {#usage}

<Command name="dm-report"></Command>

Nutze einfach den Befehl oben in einem privaten Kanal.

:::tip Warum ein privater Kanal?

Der Befehl kann nicht in Kanälen verwendet werden, in denen die @everyone-Rolle die Berechtigung "Kanal ansehen" hat, um möglichem Missbrauch vorzubeugen.

Reports werden (oder sollten) vertraulich behandelt (werden), deswegen sollte es keine Möglichkeit geben, jemanden (ausversehen) öffentlich bloßzustellen.

:::

Der Befehl gibt eine Nachricht zurück, auf der der Nutzer die korrekte Anwendung bestätigen muss, und den Bot als User-Application hinzufügen muss, damit der Bot die Möglichkeit zum Hinzufügen des "Nachricht melden"-Kontextmenüs hat.
Dieses Setup muss nur einmalig durchgeführt werden.

Nachdem das Setup fertiggestellt wurde wird der Code, welcher beim Buttonklick zurückgegeben wird, in das Modal eingefügt, welches beim Auswählen des Kontextmenüs (Rechtsklick/lange auf die Nachricht drücken -> "Apps" -> "Nachricht melden") angezeigt wird.

Nach dem Absenden wird der Nachrichteninhalt (und alle eventuellen Embeds von Bots) in die Originalnachricht, also die Nachricht auf dem Server, auf dem der Befehl verwendet wurde, bearbeitet.
