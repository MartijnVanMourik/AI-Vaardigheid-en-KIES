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
  - **`index.html`**: homepage met het KIES-overzicht, de gradaties (de K in actie), de vuistregel 80/20 (de E in actie), een samenvatting van beide gidsen en de spelregels.
  - **`kies-leerlingen.html`** en **`kies-docenten.html`**: de gidsen per doelgroep, per KIES-stap.
- **Vluchtig (tools en links):** alles wat snel verandert staat op één plek.
  - **`toolbox.html`**: promptrecepten, tools en externe bronnen, met filters op KIES-stap en doelgroep en een zoekveld.
- **Overig:**
  - **`kies-overzicht.html`**: printversie (A4 liggend) van het KIES-overzicht, met QR-code naar de site. Haalt de inhoud automatisch uit het overzicht op de homepage.
  - **`assets/kies-overzicht.pdf`**: de PDF van die printversie, gelinkt bij het overzicht op de homepage en in de voettekst.
  - **`404.html`**: de pagina die GitHub Pages toont bij een adres dat niet bestaat.

### Printversie (PDF) bijwerken

Pas je het KIES-overzicht op de homepage aan, maak dan ook een nieuwe PDF:
1. Open `kies-overzicht.html` op de live site (of in een preview) in Chrome of Edge.
2. Kies **Afdrukken** > **Opslaan als PDF**. Controleer: A4, liggend, standaardmarges, *achtergrondafbeeldingen* aan.
3. Sla op als `assets/kies-overzicht.pdf` en push.

De pagina schaalt het overzicht zelf zo dat alles op één A4 past. De QR-code en de link bovenaan gebruiken
automatisch het adres waarop de pagina staat; maak de PDF dus vanaf de echte site, niet vanuit een preview.

### Verhuizen naar een ander adres

Komt de site op een ander adres (bijvoorbeeld een eigen domein), pas dan aan:
1. De deelgegevens bovenin elke pagina (`og:url` en `og:image`): zoek op `martijnvanmourik.github.io`.
2. `STANDAARD_URL` in `kies-overzicht.html` (alleen gebruikt in previews).
3. Maak daarna een nieuwe PDF vanaf het nieuwe adres (zie hierboven), zodat de QR-code klopt.

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
3.  Alleen `kies-overzicht.html` heeft een (lokale) webserver nodig, omdat die de homepage inleest. Bijvoorbeeld: `python3 -m http.server` en dan `http://localhost:8000/kies-overzicht.html`.

## Technologie

- **Frontend:** HTML5, CSS3, JavaScript.
- **Framework:** [Tailwind CSS](https://tailwindcss.com/) v3, als vast CSS-bestand (`assets/css/tailwind.css`).
  - Dit bestand wordt **automatisch** door GitHub gebouwd bij elke push (zie `.github/workflows/site.yml`). Gewoon HTML aanpassen en pushen is genoeg.
  - Lokaal zelf bouwen kan ook: `npm install` en daarna `npm run build:css` (of `npm run watch:css` tijdens het werken).
- **Publiceren:** GitHub Pages via GitHub Actions (Settings > Pages > Source: *GitHub Actions*).
- **Icons:** [Font Awesome](https://fontawesome.com/) 6.7.2 (via cdnjs).
- **Lettertype:** Inter (Google Fonts).
- **Afbeeldingen:** `assets/hero-hf.avif` (homepage) en `assets/og-image.jpg` (1200×630), het voorbeeldplaatje bij het delen van links.
- **Video's:** met een posterbeeld (`*-poster.jpg`) en `preload="none"`, zodat de video pas laadt als iemand op afspelen klikt.

## Huisstijl en toegankelijkheid

- `--trinitas-green` (#8cc63f) alleen gebruiken op donkere achtergronden of voor iconen.
- Voor groene **tekst op een lichte achtergrond** `text-trinitas-green-text` (#4a7a16) gebruiken in plaats van het lichtere huisstijlgroen. Zo blijft de tekst ook op een beamer leesbaar.
- KIES-stappen heten overal: **Kiezen, Instrueren, Evalueren, Spelregels**.

## Versies

- De branch `archief-voorjaar-2026` bevat de site zoals die op 9 april 2026 online stond. Daar kun je altijd naar terug.
- De oorspronkelijke analyse (`assets/Analyse KIES model AI Onderwijs.pdf`) staat niet meer op de site, omdat er een voorbeeld-beleid met sancties in stond terwijl het schoolbeleid nog wordt vastgesteld. Het bestand is nog te vinden in de branch `archief-voorjaar-2026`.
- Wijzigingen worden voorgesteld via een pull request. De live site (GitHub Pages) toont alleen wat in `main` staat.

---
*Ontwikkeld voor Han Fortmann | Trinitas College*
