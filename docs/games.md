---
title: Games
description: TomatenKuchen is a multipurpose Discord bot with a lot of features. The bot has many games available to play, e.g. snake, Uno! and Connect Four.
image: /img/game_snake.png
---

### Rock paper scissors {#rock-paper-scissors}

Play rock paper scissors against a user or the bot.

<Command slash="game scheresteinpapier [user:Opponent]" message="game rps [<Opponent>]"></Command>

### TicTacToe {#tic-tac-toe}

Play tic tac toe with another user or an algorithm of TomatenKuchen.

<Command slash="game tictactoe [user:Opponent]" message="game ttt [<Opponent>]"></Command>

### Hangman {#hangman}

Let other members guess your text before the stickman is dead.

Note that only 25 characters are possible ("A" to "X" and "Z"). Y as well as numbers and other special characters are removed from the input.

<Command slash="game hangman text:Text" message="game hangman <Text>"></Command>

### Connect Four {#connect-four}

Play Connect Four against a user.

<Command slash="game connectfour user:Opponent [fieldsize:Field size]" message="game c4 <Opponent> [<Field size>]"></Command>

### Snake {#snake}

<Command slash="game snake"></Command>

![](/img/game_snake.png)

### Uno {#uno}

Play Uno with other users.

<Command slash="game uno"></Command>

### Chemical equations {#chemistry}

Gives you a random chemistry equation that must be balanced using factors.

<Command slash="game chemie [difficulty:easy|normal|hard]" message="game chemie [easy|normal|hard]"></Command>

![](/img/game_chemie.png)

### Wordsearch {#wordsearch}

Displays a grid of letters in which words are hidden. The words can be distributed vertically, horizontally and diagonally in all directions.

The goal is to uncover all hidden words.

<Command slash="game wordsearch"></Command>
