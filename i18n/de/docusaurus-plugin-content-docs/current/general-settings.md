---
title: Generelle Einstellungen
description: Diese Seite erklärt die wichtigsten Einstellungen, um das Verhalten des Discord-Bots anzupassen.
---

Diese Seite erklärt Servereinstellungen, die für viele Server nützlich sein könnten.

## Serversprache {#lang}

Die Serversprache ändert die Sprache sowie die Formatierung von Zahlen von Botantworten.
Die Einstellung kann [im Dashboard](https://tomatenkuchen.com/dashboard/settings#lang) geändert werden, ist aber standardmäßig auf die aktuelle Discord-Serversprache gesetzt, sofern eine Übersetzung vorhanden ist.

Mithilfe von [Weblate](/weblate) kannst du sehr einfach beim Übersetzen des Bots mithelfen und neue Sprachen hinzufügen.

## Prefix {#prefix}

Hier können mehrere Message-Command-Prefixe festgelegt werden, also der Text, der vor Befehlen eingegeben wird: `tk!` -> `tk!help`.

Der Prefix von Slashcommands lässt sich nicht ändern, da Discord diese Funktion nicht hinzufügen will.

:::tip Mehrere Bots mit Slashcommands

Wenn du nur die Befehle eines Bots in der Slashcommand-Auswahl sehen willst, erwähne einfach den Bot in der Chatbox und fange dann an, den Namen eines Befehls zu schreiben, z. B.: `@TomatenKuchen help`

:::

## Message-Commands löschen {#delete-command}

Stellt ein, ob bei der Verwendung von Message-Commands die Nachricht gelöscht wird, die die Ausführung eines Befehls ausgelöst hat.

:::tip Pro Befehl überschreiben

Mithilfe von [Integrationen](/integrations) und den Aktionsfunktionen `run` und `delete` bzw. `noDelete` kannst du diese Einstellung auch pro Befehl ändern.

:::

## Zeitzone {#timezone}

Die Serverzeitzone, anhand der Sendezeitpunkt von Geburtstagsnachrichten festgelegt wird.

Um deine aktuelle Zeitzone zu sehen, nutze z. B. die Website https://xske.github.io/tz.
Die Eingabe muss ein gültiger Wert aus dieser [Wikipedia-Liste](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) sein.

## Dashboard-Zugriff {#dashboard-access}

Alle Nutzer mit den hier ausgewählten Rollen haben Zugriff auf alle Seiten des Dashboards.

Beachte, dass der Serverbesitzer sowie Mitglieder mit der "Administrator"-Berechtigung immer Zugriff haben.

:::warning Server-verwalten-Berechtigung

Sobald du hier eine oder mehrere Rollen ausgewählt hast wird Servermitgliedern, welche nur die Berechtigung "Server verwalten" und keine der ausgewählten Rollen besitzen, der Zugriff entzogen.

:::
