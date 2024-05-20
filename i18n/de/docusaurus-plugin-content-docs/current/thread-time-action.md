---
title: Thread-Zeit-Aktion
description: Führe Aktionen in einem Thread oder Forum-/Medienkanal nach der angegebenen Zeit aus.
---

Die [Thread-Zeit-Aktions-Einstellung](https://tomatenkuchen.com/dashboard/settings#threadTimeAction) erlaubt es, einen Thread-kompatiblen Kanal auszuwählen und die eingestellte Aktion in den Threads davon auszuführen.

Mehrere Aktionen können für einen einzelnen Kanal definiert werden, jedoch nur eine jeden Aktionstyps.

## Aktionstypen {#action-types}

- `close`: Schließt/Archiviert den Thread. Dies nicht *nicht* dasselbe, wie die in Discord eingebaute Einstellung, da diese den Thread nur versteckt, aber nicht schließt.
- `lock`: Sperrt den Thread, damit nicht-Moderatoren u. A. die Möglichkeit verlieren, Nachrichten zu senden und Reaktionen hinzuzufügen.
- `closelock`: Schließt und sperrt den Thread.
- `delete`: Löscht den Thread nach der angegebenen Zeit.
- `addLabel:<List of labels separated by ",">`: Fügt die angegebenen Label hinzu. Funktioniert nur, wenn der Kanal ein Forum- oder Medienkanal ist. Beachte, dass du die [Tag-ID](/#id), anstelle des Namens angeben musst.
- `removeLabel:<List of labels separated by ",">`: Entfernt die angegebenen Label. Siehe oben.
