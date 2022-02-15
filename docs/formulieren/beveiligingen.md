---
sidebar_position: 4
---

# Beveiliging

Om ongewenste mail/Spam te voorkomen in je formulieren, heeft Gravity Forms beveligingen.

Dit zijn ReCaptcha en Honeypot. Korte uitleg wat ze doen:

## ReCaptcha

"I'm not a robot."

"Select all images with fire hydrants."

We kennen ze allemaal, ReCaptchas. We stellen deze bij livegang in op websites voor het tegenhouden van Spam.

Dit gebeurt dan wel door een ReCaptcha **V2** of een ReCaptcha **V3**.

### ReCaptcha V2

<img src="https://wiki.pageking.nl/img/formulieren/newCaptchaAnchor.gif"></img>

We kennen hem, de klassieke versie van ReCaptcha. Hij stamt uit 2014. Het grote nadeel hieraan is dat deze ondertussen is ingehaald door spammers/scammers. Er bestaan websites die mensen betalen om deze op te lossen, ten behoeve van spammers

### ReCaptcha V3

ReCpatcha geeft je voor iedere keer dat je een website bezoekt een score. Deze zit tussen 0 of 1. 0 betekend dat je een robot zou zijn, met waarde 1 ben je een mens. Deze waarde bepaalt, door een aantal factoren die deze score opmaken, of je een formulier mag en kan versturen.

## Honeypot

Honeypot is een mechanisme dat onzichtbare velden plaatst bij een formulier. Zodra deze niet gevuld zijn, weet het systeem dat je een mens bent. Zou je deze kunnen zien en vullen, betekend dat 2 dingen;

Of je hebt in de code gekeken en ze daar handmatig gevuld;
Of je bent een bot.

Dat tweede is uiteraard de meest voor de hand liggende. 