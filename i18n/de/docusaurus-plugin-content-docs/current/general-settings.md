---
title: Generelle Einstellungen
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Mit dieser Funktion kannst du einfach nach bekannten Filmen, Serien und Darstellern suchen.
---

Diese Seite erklärt Servereinstellungen, die für viele Server nützlich sein könnten.

## Serversprache {#settings-lang}

Die Serversprache ändert die Sprache sowie die Formatierung von Zahlen von Botantworten.
Die Einstellung kann [im Dashboard](https://tomatenkuchen.com/dashboard/settings#lang) geändert werden, ist aber standardmäßig auf die aktuelle Discord-Serversprache gesetzt, sofern eine Übersetzung vorhanden ist.

Mithilfe von [Weblate](/weblate) kannst du sehr einfach beim Übersetzen des Bots mithelfen und neue Sprachen hinzufügen.

## Prefix {#settings-prefix}

Hier können mehrere Message-Command-Prefixe festgelegt werden, also der Text, der vor Befehlen eingegeben wird: `tk!` -> `tk!help`.

Der Prefix von Slashcommands lässt sich von Discord aus nicht ändern.

:::tip Slashcommands

Wenn du nur die Befehle eines Bots in der Slashcommand-Auswahl angezeigt bekommen willst, erwähne einfach den Bot in der Chatbox und fange dann an, den Namen des Befehls zu schreiben: `@TomatenKuchen help`

:::

## Message-Commands löschen {#settings-delete-command}

Stellt ein, ob bei der Verwendung von Message-Commands die Nachricht gelöscht wird, die die Ausführung eines Befehls ausgelöst hat.

:::tip Pro Befehl überschreiben

Mithilfe von [Integrationen](/integrations) und den Aktionsfunktionen `run` und `delete` bzw. `noDelete` kannst du diese Einstellung auch pro Befehl ändern.

:::

## Zeitzone {#settings-timezone}

Die Serverzeitzone, anhand der Sendezeitpunkt von Geburtstagsnachrichten festgelegt wird.

Um deine aktuelle Zeitzone zu sehen, nutze z. B. die Website https://xske.github.io/tz.
Die Eingabe muss ein gültiger Wert aus dieser [Wikipedia-Liste](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) sein.

## Dashboard-Zugriff {#settings-dashboard-access}

Alle Nutzer mit den hier ausgewählten Rollen haben Zugriff auf alle Seiten des Dashboards.

Beachte, dass der Serverbesitzer sowie Mitglieder mit der "Administrator"-Berechtigung immer Zugriff haben.

:::warning Server-verwalten-Berechtigung

Sobald du hier eine oder mehrere Rollen ausgewählt hast wird Servermitgliedern, welche nur die Berechtigung "Server verwalten" und keine der ausgewählten Rollen besitzen, der Zugriff entzogen.

:::
