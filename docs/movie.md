---
title: Movie, series and actors
description: Mit dieser Funktion kannst du einfach nach bekannten Filmen, Serien und Darstellern suchen.
---

The `misc movie` command allows you to search for movies, series and persons (actors) and display more information about them.

The command uses the public project [TMDB.org](https://themoviedb.org) to request the data.

## Searching {#search}

<Command name="misc movie search" slash="query:Search query" message="<Search query>"></Command>

Use the search query as argument, e.g. "Minecraft movie".

## Information about a movie {#movie}

<Command name="misc movie movie" slash="id:Movie ID" message="<Movie ID>"></Command>

Use the movie ID returned by the `movie search` command as argument.

The bot then displays some information about the movie, e.g. the length and well-known actors.

## Information about a series {#series}

<Command name="misc movie series" slash="id:Series ID" message="<Series ID>"></Command>

Use the series ID returned by the `movie search` command as argument.

The bot then displays some information about the series.

## Information about a person {#person}

<Command name="misc movie person" slash="id:Person ID" message="<Person ID>"></Command>

Use the person ID returned by the `movie search` command as argument.

The bot then displays some information about the person, e.g. birth and death day, as long as known, as well as well-known movies in which the person acted in.
