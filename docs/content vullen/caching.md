---
sidebar_position: 12
---

# Caching

Het klinkt vaak vrij apart, een systeem op je server dat je website met wel 40% kan versnellen. Dit is waar Caching aan meewerkt. Hoe werkt het en hoe gebruiken wij dit op onze servers? Dat leggen we je in dit artikel uit.

## Wat is caching?

Caching is een systeem dat ervoor zorgt dat je website sneller wordt. Dit gebeurt door het combineren van bestanden en het weghalen van "Dynamische Queries". Dit klink lastig, maar hier een uitleg;

WordPress haalt alle teksten, afbeeldingen en dergelijke uit een database, geïnstalleerd op de webserver. Bij het laden van een pagina gebeurd dan ook het volgende;

- Ophalen data uit de database, zoals de layout.
- Het inladen van onder andere
- - Teksten
- - Afbeeldingen
- - Stijl bestanden (CSS)
- - Scripts (JavaScript)

Gemiddeld worden er op een website 150 verzoeken gedaan naar bestanden op de server, nog niet te kijken naar rijen in de database.

## Hoe werkt caching?

Uit de uitleg hierboven zie je uiteraard dat er veel verzoeken gedaan worden. Wat caching doet is het volgende;

- Het combineert HTML uit verschillende bestanden in 1 HTML bestand.
- Het combineert CSS uit verschillende bestanden in 1 CSS bestand.
- Het combineert JavaScript uit verschillende bestanden in 1 JavaScript bestand.
- Het haalt een statische versie van je website op en toont deze aan de gebruiker.

## Waarom caching?

Effectief zorgt dit ervoor dat het aantal verzoeken gereduceerd wordt. Omdat de browser minder verschillende bestanden moet aanroepen, wordt de website sneller geladen.

Dit zorgt ervoor dat Google jouw website hoger indexeerd. Dit is een belangrijke pijler. Daarnaast, als een website een te lange laadtijd heeft, zijn er meer bounces van mensen die het te lang vinden duren.

## Hoe updaten wij caching?

Wij updaten caching automatisch bij het aanpassen of aanmaken van een post. Hierdoor is de snelheid altijd optimaal. Er is 1 laadpoging waarin de website iets trager is na zo'n update, om de cache opnieuw op te bouwen, daarna is deze weer snel.

Ook kunnen we handmatig aangeven of we de cache willen verversen, echter is dit meestal niet nodig.