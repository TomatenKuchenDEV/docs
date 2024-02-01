---
title: Movie and series info
description: Mit dieser Funktion kannst du einfach nach bekannten Filmen, Serien und Darstellern suchen.
---

The `misc movie` command allows you to search for movies, series and persons (actors) and display more information about them.

The command uses the public project [TMDB.org](https://themoviedb.org) to request the data.

## Searching (`misc movie search`) {#search}

Use the search query as argument, e.g. "Minecraft movie".

## Information about a movie (`misc movie movie`) {#movie}

Use the movie ID returned by the `movie search` command as argument.

The bot then displays some information about the movie, e.g. the length and well-known actors.

## Information about a series (`misc movie series`) {#series}

Use the series ID returned by the `movie search` command as argument.

The bot then displays some information about the series.

## Information about a person (`misc movie person`) {#person}

Use the person ID returned by the `movie search` command as argument.

The bot then displays some information about the person, e.g. birth and death day, as long as known, as well as well-known movie in which the person acted in.
