---
title: Modals
description: Modals ("Forms") erlauben dir das Abfragen von Informationen, z. B. in Tickets, durch Popups in Discord.
---

## Befehl {#commands}

Modals werden mit dem Befehl `modal` verwaltet.

### Erstellen {#cmd-create}

Die Erstellung erfolgt mit `modal create <ID> <Titel>`, wo `<ID>` eine von dir gewählte ID ist, und `<Titel>` der Modaltitel.

Die ID wird verwendet, um das Modal eindeutig zu identifizieren und an anderen Stellen im Bot zu verwenden, z. B. in [Ticketkategorien](/tickets/general).

Der Titel wird oberhalb des Popups angezeigt und kann nachträglich jederzeit geändert werden.

### Bearbeiten {#cmd-edit}

Bearbeiten funktioniert an sich genauso wie das Erstellen, nur mit dem Befehl `modal edit <ID>`.

## Verwendung {#usage}

### Tickets {#tickets}

Modal-IDs können in das `modal`-Feld bei Ticketkategorien eingesetzt werden, um Informationen bezogen auf das Ticket abfragen zu können.

Dadurch öffnet sich für den Nutzer erst ein Popup, in dem die bis zu fünf Fragen beantwortet werden müssen, und erst nachdem dieses abgesendet worden ist, das Ticket.
Im Ticket wird dann mithilfe von Embedfeldern angezeigt, wie der Nutzer geantwortet hat.

### Integrationen {#integrations}

Modals können auch mit [Integrationen](/integrations) verwendet werden: Dafür gibt es die [Aktions-Funktion](/functions/misc) `{modal;<Modal-ID>}`, um ein Modal zu öffnen, und die Funktion `{modalField;<Modal-ID>;<Labelname>}`, um die Nutzerantwort auf ein Feld abzufragen.
