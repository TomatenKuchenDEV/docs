---
title: Modals
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Modals ("Forms") erlauben dir das Abfragen von Informationen, z. B. in Tickets, durch Popups in Discord.
---

## Befehl

Modals werden mit dem Befehl `modal` verwaltet.

### Erstellen

Die Erstellung erfolgt mit `modal create <ID> <Titel>`, wo `<ID>` eine von dir gewählte ID ist, und `<Titel>` der Modaltitel.

Die ID wird verwendet, um das Modal eindeutig zu identifizieren und an anderen Stellen im Bot zu verwenden, z. B. in [Ticketkategorien](/ticket/general).

Der Titel wird oberhalb des Popups angezeigt und kann nachträglich jederzeit geändert werden.

### Bearbeiten

Bearbeiten funktioniert an sich genauso wie das Erstellen, nur mit dem Befehl `modal edit <ID>`.

## Verwendung

### Tickets

Modal-IDs können in das `modal`-Feld bei Ticketkategorien eingesetzt werden, um Informationen bezogen auf das Ticket abfragen zu können.

Dadurch öffnet sich für den Nutzer erst ein Popup, in dem die bis zu fünf Fragen beantwortet werden müssen, und erst nachdem dieses abgesendet worden ist, das Ticket.
Im Ticket wird dann mithilfe von Embedfeldern angezeigt, wie der Nutzer geantwortet hat.

### Integrationen

Modals können auch mit [Integrationen](/integrations) verwendet werden: Dafür gibt es die [Aktions-Funktion](/functions/misc) `{modal}`, um ein Modal zu öffnen, und die Funktion `{modalField;<Modal-ID>;<Labelname>}`, um die Antwort auf ein Feld abzufragen.
