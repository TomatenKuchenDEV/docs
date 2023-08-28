---
title: Integrationen
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Diese Seite erklärt die Verwendung von Integrationen, die nächste Version von Customcommands.
---

:::info

Eine Liste aller Funktionen findest du auf der [Funktionen-Seite](/category/action-functions)

:::

Integrationen sind im Prinzip Customcommands 2.0 - du kannst auf Message- und Slashcommands antworten, aber du hast zusätzlich die Möglichkeit, viele weitere Auslöser für Aktionen zu nutzen.
Außerdem ist es möglich, erstellte Integrationen auf anderen Servern zu verwenden.

Integrationen können im [Dashboard](https://tomatenkuchen.com/dashboard/integrations) verwaltet werden.

## Mögliche Auslöser

- Nachrichten- oder Slashcommands
	- Argument: Slash command description, if empty disables slash cmd
- Nachrichteninhalt enthält
	- Argument: Text content
- Nachrichteninhalt matcht RegEx
	- Argument: RegEx, mit dem geprüft werden soll, siehe [RegEx-Cheatsheet](#regex-cheatsheet)
- Button gedrückt
	- Argument: Button custom ID
- Selectmenü ausgewählt
	- Argument: Select menu custom ID
- Modal abgesendet
	- Argument: Modal custom ID
- Discord-AutoMod ausgelöst (z. B. für eigene Bestrafungen, wenn eine bestimmte Regel ausgelöst wird)
	- Argument (optional): ID einer Regel
- Slashcommand eines anderen Bots verwendet (z. B. für /bump-Erinnerungen)
	- Argument: Slashcommand-Name des anderen Bots
- Mitglied beigetreten/verlassen
	- Argument: <code>join</code>, <code>leave</code> oder <code>all</code>/leer
- Reaktion hinzugefügt/entfernt
	- Argument: <code>add</code>, <code>remove</code> oder <code>all</code>/leer
- Rolle erstellt/gelöscht
	- Argument: <code>create</code>, <code>delete</code> oder <code>all</code>/leer
- Kanal erstellt/gelöscht
	- Argument: <code>create</code>, <code>delete</code> oder <code>all</code>/leer
- Webhook erstellt/gelöscht
	- Argument: <code>create</code>, <code>delete</code> oder <code>all</code>/leer
- Thread (oder Post) erstellt/gelöscht
	- Argument: <code>create</code>, <code>delete</code> oder <code>all</code>/leer
- Nickname geändert
- Server geboosted/Boosts entfernt
	- Argument: <code>boost</code>, <code>boostend</code> oder <code>all</code>/leer
- Intervall
	- Argument: Interval time like <code>45m</code>, can have random offsets after bot restarts, min 5 mins, max 2 days
- Cronjob
	- Argument: The cronjob, e.g. from <a href='https://crontab.guru' target='_blank' rel='noopener'>crontab.guru</a>, min 5 mins
- Nutzer betritt/verlässt Sprachkanal
	- Argument: <code>join</code>, <code>leave</code> oder <code>all</code>/leer
- Nutzer ge- oder enttimeouted
	- Argument: <code>timeout</code>, <code>timeoutend</code> oder <code>all</code>/leer
- Discord-Systemnachricht
	- Argument: <a href='https://discord.com/developers/docs/resources/channel#message-object-message-types' target='_blank' rel='noopener'>Internal system message ID</a>

## Synchronisations-Modi

Es gibt verschiedene Sync-Modi, die beim Importieren einer Integration auf einen anderen Server ausgewählt werden können:

### Keine Synchronisation

Deaktiviert jegliche Synchronisation und entfernt den Hinweis, von welcher Integration die aktuelle ursprünglich stammt.

### Manuelle Synchronisation

Änderungen können manuell mit einem Button im Dashboard synchronisiert werden. Die Inhalte können normal bearbeitet werden, werden beim Synchronisieren aber überschrieben.

### Automatische Synchronisation

Synchronisiert alle Änderungen am Original automatisch, sobald dieses bearbeitet wird. Wird empfohlen, wenn du dem Besitzer bzw. Server der Integration vertraust. Inhalte können nicht bearbeitet werden.

### Sichere Synchronisation

Eine Mischung zwischen manueller und automatischer Synchronisation. Die Inhalte können nicht bearbeitet werden. Bei einer Änderung muss entweder - wie bei der manuellen Synchronisation - ein Teammitglied der Servers die Änderung annehmen, oder ein TomatenKuchen-Teamler. Durch diese Kombination können Änderungen schneller zugelassen werden.

## Beispiele

Diese Integrationen wurden von unserem Team erstellt oder von diesem verifiziert.

- [FiveM-Server-Info anzeigen](https://tomatenkuchen.com/dashboard/integrations?info=fivem), zeigt die Verwendung von `{jsonAPI}`
- [Wetterinfo eines Ortes anzeigen](https://tomatenkuchen.com/dashboard/integrations?info=weather), zeigt die Verwendung von `{jsonAPI}` und Argumenten
- [Vote-Reminder für TomatenKuchen](https://tomatenkuchen.com/dashboard/integrations?info=vote-reminder)
- [Zufälligen Comic von xkcd.com anzeigen](https://tomatenkuchen.com/dashboard/integrations?info=xkcd)
- [Automatische Übersetzung von Nachrichten in einem Kanal](https://tomatenkuchen.com/dashboard/integrations?info=autotranslate), zeigt die Verwendung verschiedener Funktionen zur Aktionseinschränkung

## RegEx-Cheatsheet
