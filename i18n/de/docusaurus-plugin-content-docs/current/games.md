---
title: Spiele
description: TomatenKuchen ist ein All-in-One-Discord-Bot mit vielen verschiedenen Funktionen. Der Bot hat viele Spiele, z. B. Snake, Uno! und Vier gewinnt.
image: /img/game_snake.png
---

### Schere Stein Papier {#rock-paper-scissors}

Spielt Schere Stein Papier gegen den Bot oder andere Spieler.

`game ssp [<Nutzer>]`

### TicTacToe {#tic-tac-toe}

Spiele TicTacToe gegen den angegebenen Nutzer oder gegen einen Algorithmus von TomatenKuchen.

`game ttt [<Nutzer>]`

### Hangman {#hangman}

Lasse andere Nutzer den angegebenen Text erraten, bevor das Galgenmännchen vollständig ist.

Beachte, dass nur 25 Buchstaben zugelassen sind, und zwar A bis X und Z. Y sowie einige Zahlen und Sonderzeichen werden von deiner Eingabe entfernt.

`game hangman <Text>`

### Vier gewinnt {#connect-four}

Spiele Vier gewinnt gegen einen anderen Spieler.

<Command slash="game connectfour user:Gegner [fieldsize:Feldgröße]" message="game c4 <Gegner> [<Feldgröße>]"></Command>

### Snake {#snake}

<Command slash="game snake"></Command>

![](/img/game_snake.png)

### Uno {#uno}

Spielt Uno mit anderen Nutzern.

<Command slash="game uno"></Command>

### Chemiegleichungen {#chemistry}

Gibt dir eine zufällige Chemiegleichung, die mithilfe von Faktoren ausgeglichen werden muss.

`game chemie [leicht|mittel|schwer]`

![](/img/game_chemie.png)

### Wordsearch {#wordsearch}

Zeigt ein Raster an Buchstaben an, in dem Wörter versteckt sind. Die Wörter können senkrecht, waagerecht und diagonal in allen Richtungen verteilt sein.

Das Ziel ist es, alle versteckten Wörter aufzudecken.

<Command slash="game wordsearch"></Command>
