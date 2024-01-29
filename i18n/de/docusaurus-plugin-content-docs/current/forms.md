---
title: Formulare
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Mit den Onlineformularen kannst du z. B. Entbannungsanträge oder Bewerbungsformulare erstellen.
image: /img/forms_example.png
---

Mit TomatenKuchen kannst du schnell und einfach Onlineformulare für alle möglichen Zwecke erstellen.

![Formularbeispiel](/img/forms_example.png)

## Formular erstellen {#create}

<Command slash="form add slug:URL-slug title:Formtitel" message="form add <URL-Slug> <Formtitel>"></Command>

## Formular bearbeiten {#edit}

<Command slash="form edit id:ID oder URL-slug" message="form edit <ID oder URL-Slug>"></Command>

## Einstellungen für jedes Formular {#settings}

Bei jedem Formular können die folgenden Einstellungen individuell angepasst werden:
- Titel, der über dem Formular angezeigt wird
- Slug, der in der URL verwendet wird. Der Slug lässt sich einfacher merken als die zufällig generierte ID.
- Ob nur Mitglieder des Servers eine Antwort absenden können oder alle mit der Form-URL
- Ob die Antworten anonym in den Ergebniskanal gesendet werden oder nicht. Beachte, dass sich der Nutzer trotzdem noch anmelden muss, diese Einstellung ändert nur, ob Nutzerinformationen auf Discord angezeigt werden oder nicht.
- Ob der Bot einen Thread auf einer Ergebnisnachricht auf Discord zur Diskussion erstellt
- Ob ein Nutzer nur eine Antwort senden kann oder mehrere
- Wie lange ein Nutzer zwischen zwei Antworten warten muss (Standard: fünf Minuten)

## Feldtypen {#field-types}

Es gibt verschiedene Feldtypen, welche beim Bearbeiten von Feldern geändert werden können.

Je nach Typ gibt es zusätzliche Einstellungen.
Alle dieser Typen können einen Standardwert gesetzt haben.

- Einzeiliges, mehrzeiliges Textfeld und Passwortfeld
	- Minimallänge
	- Maximallänge
- Zahl & Rangeauswahl für eine Zahl
	- Minimalwert
	- Maximalwert
	- Schrittgröße zwischen Zahlen
- Auswahl oder Checkboxen
	- Minimalauswahl
	- Maximalauswahl
	- Liste der Optionen
- Datumsauswahl
- Zeitauswahl
- Farbauswahl
