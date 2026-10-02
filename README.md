# AI-Vaardigheid Hub & KIES-model

Welkom bij de **AI-Vaardigheid Hub**. Dit project is ontwikkeld voor het **Han Fortmann (Trinitas College)** om leerlingen en docenten te ondersteunen bij het verantwoord, legaal en effectief inzetten van Artificiële Intelligentie in het onderwijs.

Centraal in dit project staat het **KIES-model**, een pragmatische aanpak om AI-geletterdheid te vergroten door middel van vier heldere stappen.

## Table of Contents
- [Projectoverzicht](#projectoverzicht)
- [Het KIES-model](#het-kies-model)
- [Onderdelen](#onderdelen)
- [Gebruik](#gebruik)
- [Technologie](#technologie)

---

## Projectoverzicht

De AI-Vaardigheid Hub dient als centrale portal voor informatie over AI-gebruik op school. Het biedt gerichte ondersteuning voor:
- **Leerlingen:** Hoe gebruik je AI als slimme studiepartner zonder de regels te overtreden?
- **Docenten:** Hoe zet je AI in voor werkdrukverlichting en verrijking van je lessen?

## Het KIES-model

Het model is opgebouwd uit vier fasen:
1.  **Kiezen:** Bepaal bewust wanneer je AI wel of niet inzet.
2.  **Instrueren:** Geef AI de juiste context en gedragsrichtlijnen (Prompting).
3.  **Evalueren:** Controleer de output kritisch op feiten, bias en kwaliteit.
4.  **Spelregels:** Houd je aan de kaders van privacy, fraude en transparantie.

## Onderdelen

Het project bestaat uit drie hoofdpagina's:
- **`index.html`**: De hoofdpagina met een overzicht van de AI-niveaus (Vervangen, Aanvullen, Verrijken) en de algemene spelregels.
- **`kies-leerlingen.html`**: Specifieke werkvormen en tips voor leerlingen (o.a. NotebookLM integratie, APA-verbeteraar).
- **`kies-docenten.html`**: Uitgebreide bronnen voor docenten (o.a. Rubric Hulp, Custom Chatbot Bouwer, team-actieplannen).

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
- **Fonts:** Google Fonts (Inter).
- **Afbeeldingen:** infographics als WebP; `assets/og-image.jpg` (1200×630) is het voorbeeldplaatje bij het delen van links.
- **Video's:** met een posterbeeld (`*-poster.jpg`) en `preload="none"`, zodat de video pas laadt als iemand op afspelen klikt.

## Huisstijl en toegankelijkheid

- `--trinitas-green` (#8cc63f) alleen gebruiken op donkere achtergronden of voor iconen.
- Voor groene **tekst op een lichte achtergrond** `text-trinitas-green-text` (#4a7a16) gebruiken, voor grote koppen `text-trinitas-green-large` (#5f9324). Zo blijft de tekst ook op een beamer leesbaar.
- KIES-stappen heten overal: **Kiezen, Instrueren, Evalueren, Spelregels**.

## Versies

- De branch `archief-voorjaar-2026` bevat de site zoals die op 9 april 2026 online stond. Daar kun je altijd naar terug.
- Wijzigingen worden voorgesteld via een pull request. De live site (GitHub Pages) toont alleen wat in `main` staat.

---
*Ontwikkeld voor Han Fortmann | Trinitas College*
