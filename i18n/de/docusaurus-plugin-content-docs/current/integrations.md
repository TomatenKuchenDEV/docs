---
title: Integrationen
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Diese Seite erklärt die Verwendung von Integrationen, die nächste Version von Customcommands.
---

:::info

Eine Liste aller Funktionen findest du auf der [Funktionen-Seite](/category/action-functions)

:::

Integrationen sind im Prinzip Customcommands 2.0 - du kannst auf Message- und Slashcommands antworten, aber du hast zusätzlich die Möglichkeit, viele weitere Auslöser für Aktionen zu nutzen.
Außerdem ist es möglich, erstellte Integrationen auf anderen Servern zu verwenden.

Integrationen können im [Dashboard](https://tomatenkuchen.eu/dashboard/integrations) verwaltet werden.

# Mögliche Auslöser

- Message and slash commands
- Message content contains
- Message content matches RegEx
- Button press
- Select menu select
- Modal submit
- Discord AutoMod triggered (z. B. für eigene Bestrafungen, wenn eine bestimmte Regel ausgelöst wird)
- Slash command uses of another bot (z. B. für /bump-Erinnerungen)
- Member join/leave
- Reaction add/remove
- Role create/delete
- Channel create/delete
- Webhook create/delete
- Thread (or post) create/delete
- Nickname updated
- Server boost/boostend

# Synchronisations-Modi

Es gibt verschiedene Sync-Modi, die beim Importieren einer Integration auf einen anderen Server ausgewählt werden können:

## Keine Synchronisation

Deaktiviert jegliche Synchronisation und entfernt den Hinweis, von welcher Integration die aktuelle ursprünglich stammt.

## Manuelle Synchronisation

Änderungen können manuell mit einem Button im Dashboard synchronisiert werden. Die Inhalte können normal bearbeitet werden, werden beim Synchronisieren aber überschrieben.

## Automatische Synchronisation

Synchronisiert alle Änderungen am Original automatisch, sobald dieses bearbeitet wird. Wird empfohlen, wenn du dem Besitzer bzw. Server der Integration vertraust. Inhalte können nicht bearbeitet werden.

## Sichere Synchronisation

Eine Mischung zwischen manueller und automatischer Synchronisation. Die Inhalte können nicht bearbeitet werden. Bei einer Änderung muss entweder - wie bei der manuellen Synchronisation - ein Teammitglied der Servers die Änderung annehmen, oder ein TomatenKuchen-Teamler. Durch diese Kombination können Änderungen schneller zugelassen werden.

# Beispiele

Diese Integrationen wurden von unserem Team erstellt oder von diesem verifiziert.

- [FiveM-Server-Info anzeigen](https://tomatenkuchen.eu/dashboard/integrations?info=fivem), zeigt die Verwendung von `{jsonAPI}`
- [Wetterinfo eines Ortes anzeigen](https://tomatenkuchen.eu/dashboard/integrations?info=weather), zeigt die Verwendung von `{jsonAPI}` und Argumenten
- [Vote-Reminder für TomatenKuchen](https://tomatenkuchen.eu/dashboard/integrations?info=vote-reminder), zeigt, wie mehrere Befehle in einer Aktion ausgeführt werden können
