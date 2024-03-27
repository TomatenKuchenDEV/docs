---
title: Filme, Serien und Schauspieler
description: Mit dieser Funktion kannst du einfach nach bekannten Filmen, Serien und Darstellern suchen.
---

Der `misc movie`-Befehl erlaubt dir, nach Filmen, Serien oder Personen (Schauspieler/Darsteller) zu suchen und weitere Informationen über diese anzuzeigen.

Der Befehl verwendet das öffentliche Projekt [TMDB.org](https://themoviedb.org) zum Abfragen der Daten.

## Suche {#search}

<Command name="misc movie search" slash="query:Suchbegriff" message="<Suchbegriff>"></Command>

Als Argument gibst du einfach den Suchbegriff an, z. B. "Minecraft movie".

## Information über einen Film {#movie}

<Command name="misc movie movie" slash="id:Film-ID" message="<Film-ID>"></Command>

Als Argument wird die Film-ID verwendet, die vom `movie search`-Befehl zurückgegeben wird.

Der Bot zeigt dann verschiedene Informationen über den Film an, z. B. die Länge und bekannte Schauspieler.

## Information über eine Serie {#series}

<Command name="misc movie series" slash="id:Serien-ID" message="<Serien-ID>"></Command>

Als Argument wird die Serien-ID verwendet, die vom `movie search`-Befehl zurückgegeben wird.

Der Bot zeigt dann verschiedene Informationen über die Serie an.

## Information über eine Person {#person}

<Command name="misc movie person" slash="id:Personen-ID" message="<Personen-ID>"></Command>

Als Argument wird die Personen-ID verwendet, die vom `movie search`-Befehl zurückgegeben wird.

Der Bot zeigt dann verschiedene Informationen über die Person an, z. B. Geburts- und Todestag, sofern bekannt, sowie bekannte Filme, in denen die Person mitgespielt hat.
