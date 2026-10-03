# AI-vaardigheid Hub & KIES-model

Welkom bij de **AI-vaardigheid Hub**. Dit project is ontwikkeld voor het **Han Fortmann (Trinitas College)** om leerlingen en docenten te ondersteunen bij het verantwoord, legaal en effectief inzetten van Artificiële Intelligentie in het onderwijs.

Centraal in dit project staat het **KIES-model**, een pragmatische aanpak om AI-geletterdheid te vergroten door middel van vier heldere stappen.

## Table of Contents
- [Projectoverzicht](#projectoverzicht)
- [Het KIES-model](#het-kies-model)
- [Onderdelen](#onderdelen)
- [Gebruik](#gebruik)
- [Technologie](#technologie)

---

## Projectoverzicht

De AI-vaardigheid Hub dient als centrale portal voor informatie over AI-gebruik op school. Het biedt gerichte ondersteuning voor:
- **Leerlingen:** Hoe gebruik je AI als slimme studiepartner zonder de regels te overtreden?
- **Docenten:** Hoe zet je AI in voor werkdrukverlichting en verrijking van je lessen?

## Het KIES-model

Het model is opgebouwd uit vier fasen:
1.  **Kiezen:** Bepaal bewust wanneer je AI wel of niet inzet.
2.  **Instrueren:** Geef AI de juiste context en gedragsrichtlijnen (Prompting).
3.  **Evalueren:** Controleer de output kritisch op feiten, bias en kwaliteit.
4.  **Spelregels:** Houd je aan de kaders van privacy, fraude en transparantie.

## Onderdelen

De site bestaat uit twee lagen:

- **Stabiel (de principes):** wat je per KIES-stap doet en waarom. Hier staan zo min mogelijk merknamen, zodat de teksten niet verouderen.
  - **`index.html`**: homepage met het KIES-model, de gradaties (vervangen, aanvullen, verrijken) en de afspraken.
  - **`kies-leerlingen.html`** en **`kies-docenten.html`**: de gidsen per doelgroep, per KIES-stap.
- **Vluchtig (tools en links):** alles wat snel verandert staat op één plek.
  - **`toolbox.html`**: promptrecepten, tools en externe bronnen, met filters op KIES-stap en doelgroep en een zoekveld.

### Gedeelde onderdelen

| Bestand | Wat |
|---|---|
| `assets/js/layout.js` | Menubalk en voettekst voor alle pagina's, inclusief de datum **"laatst bijgewerkt"**. |
| `assets/js/toolbox-data.js` | **De inhoud van de Toolbox.** Hier voeg je recepten, tools en bronnen toe of pas je ze aan (uitleg staat bovenin het bestand). |
| `assets/js/toolbox.js` | Bouwt de Toolbox-pagina op en regelt filters, het zoekveld en de kopieerknoppen. Hoef je normaal niet aan te passen. |
| `assets/css/site.css` | Eigen stijlen naast Tailwind (huisstijl, menubalk, detailpagina's). |

### Linken naar de Toolbox

- Naar één item: `toolbox.html#recept-starr`, `toolbox.html#tool-notebooklm`, `toolbox.html#bron-tintara` (het deel na `#` is `recept-`, `tool-` of `bron-` plus de `id` uit `toolbox-data.js`).
- Gefilterd: `toolbox.html?stap=E` of `toolbox.html?voor=docenten` (combineren kan: `?stap=K&voor=leerlingen`).
- Met zoekterm: `toolbox.html?zoek=quiz` (ook te combineren met de filters).

### Links nalopen

Elk item in `toolbox-data.js` heeft een veld `gecontroleerd`. Vul daar de datum in (JJJJ-MM-DD) als je de link hebt gecontroleerd; de datum verschijnt dan op de kaart.

## Gebruik

Dit is een statisch webproject. Om de site lokaal te bekijken:
1.  Clone de repository.
2.  Open `index.html` in een moderne webbrowser.
3.  Zorg dat de map `assets/` aanwezig is voor afbeeldingen, video's en iconen.

## Technologie

- **Frontend:** HTML5, CSS3, JavaScript.
- **Framework:** [Tailwind CSS](https://tailwindcss.com/) v3, als vast CSS-bestand (`assets/css/tailwind.css`).
  - Dit bestand wordt **automatisch** door GitHub gebouwd bij elke push (zie `.github/workflows/site.yml`). Gewoon HTML aanpassen en pushen is genoeg.
  - Lokaal zelf bouwen kan ook: `npm install` en daarna `npm run build:css` (of `npm run watch:css` tijdens het werken).
- **Publiceren:** GitHub Pages via GitHub Actions (Settings > Pages > Source: *GitHub Actions*).
- **Icons:** [Font Awesome](https://fontawesome.com/) 6.7.2 (via cdnjs).
- **Lettertype:** Inter (Google Fonts).
- **Afbeeldingen:** infographics als WebP; `assets/og-image.jpg` (1200×630) is het voorbeeldplaatje bij het delen van links.
- **Video's:** met een posterbeeld (`*-poster.jpg`) en `preload="none"`, zodat de video pas laadt als iemand op afspelen klikt.

## Huisstijl en toegankelijkheid

- `--trinitas-green` (#8cc63f) alleen gebruiken op donkere achtergronden of voor iconen.
- Voor groene **tekst op een lichte achtergrond** `text-trinitas-green-text` (#4a7a16) gebruiken, voor grote koppen `text-trinitas-green-large` (#5f9324). Zo blijft de tekst ook op een beamer leesbaar.
- KIES-stappen heten overal: **Kiezen, Instrueren, Evalueren, Spelregels**.

## Versies

- De branch `archief-voorjaar-2026` bevat de site zoals die op 9 april 2026 online stond. Daar kun je altijd naar terug.
- De oorspronkelijke analyse (`assets/Analyse KIES model AI Onderwijs.pdf`) staat niet meer op de site, omdat er een voorbeeld-beleid met sancties in stond terwijl het schoolbeleid nog wordt vastgesteld. Het bestand is nog te vinden in de branch `archief-voorjaar-2026`.
- Wijzigingen worden voorgesteld via een pull request. De live site (GitHub Pages) toont alleen wat in `main` staat.

---
*Ontwikkeld voor Han Fortmann | Trinitas College*
