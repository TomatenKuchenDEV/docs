---
title: Custom-Bots
description: Erklärt die kostenlose Custom-Bots-Funktion des Multipurpose-Bots.
---

:::info Beta-Version
Custom-Bots sind noch in der Beta und können daher Fehler enthalten.
Jedoch ist jeder eingeladen, die Betaversion durch das Beitreten des [Discord-Servers](https://tomatenkuchen.com/discord) zu testen.
:::

Mit einem Custom-Bot kannst du deine eigene Version von TomatenKuchen auf deinen Server holen, ohne, dass man diesen einfach als TomatenKuchen erkennen kann.

## Was ist das? {#about}

Custom-Bots, von anderen Bots auch als "Custom Branding" oder "White-Label" bezeichnet, bedeutet, dass du einen von dir erstellten Bot mit den Funktionen von TomatenKuchen verwenden kannst.
Der Vorteil davon ist, dass du alle tollen [TomatenKuchen-Features](/features) nutzen kannst, deine Servermitglieder aber nicht TomatenKuchen, sondern deinen Bot sehen.

Auch kannst du zusätzlich zu deinem TomatenKuchen Custom-Bot noch andere Bots auf demselben Bot laufen lassen, indem du denselben Token mehrmals verwendest.
Beachte jedoch, dass für diese Möglichkeit kein Support angeboten werden kann und sie Probleme mit Interaktionen, wie Slashcommands oder Buttons, verursachen kann.

## Kosten {#payment}

Der erste Custom-Bot ist für jeden Nutzer kostenlos, du kannst ihn so lange du willst ohne Kosten verwenden - beachte jedoch, dass wir die Verfügbarkeit nicht garantieren können und Bots auf inaktiven oder Spamservern löschen können.

Da Custom-Bots enorm viel Leistung verbrauchen kann nur in Ausnahmefällen ein zweiter Bot erstellt werden.

## Einrichtung {#setup}

Um einen Custom-Bot zu erstellen, öffne einfach das [Custom-Bot-Dashboard](https://tomatenkuchen.com/dashboard/custom) und klicke auf "Hinzufügen".

Die Seite führt dich dann mit einer Schritt-für-Schritt-Anleitung durch den Einrichtungsprozess.

Den Bottoken erhältst du aus dem [Discord-Developer-Portal](https://discord.com/developers/applications), du kannst dort wahlweise einen neuen Bot extra für den Custom Bot erstellen (empfohlen, um Konflikte zu verhindern) oder einen vorhandenen verwenden.

## Einstellungen {#settings}

### Ausgewählter Custom-Bot {#custom-bot}

Auf jedem Server kann der Bot ausgewählt werden, welcher primär für Antworten verwendet wird.

Alle anderen TomatenKuchen-Bots, auch TomatenKuchen selbst, ignorieren dann jegliche Befehle und Events, und können vom Server entfernt werden.

Finde dazu die Nutzer-ID des Bots heraus, z. B. im Discord-Developer-Discord auf deinem Bot -> Bot -> "Client ID". Diese ID wird im Feld eingetragen.

Um diese Funktion zu deaktivieren und den Haupt-TomatenKuchen antworten zu lassen, lasse das Feld leer.
