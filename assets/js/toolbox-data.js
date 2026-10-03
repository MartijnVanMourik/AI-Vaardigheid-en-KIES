/*
 * INHOUD VAN DE TOOLBOX & BRONNEN-PAGINA
 * ======================================
 * Dit is het enige bestand dat je hoeft aan te passen om tools, promptrecepten of bronnen
 * toe te voegen, te wijzigen of te verwijderen. De pagina toolbox.html bouwt zichzelf hieruit op.
 *
 * Velden:
 *   stappen:       welke KIES-stap(pen): 'K' (Kiezen), 'I' (Instrueren), 'E' (Evalueren), 'S' (Spelregels).
 *                  Laat leeg ([]) als een item niet bij een specifieke stap hoort (bijv. een timer).
 *   voor:          'leerlingen', 'docenten' en/of 'directie' (schoolleiding en teams).
 *   gecontroleerd: datum (JJJJ-MM-DD) waarop de link voor het laatst werkte. Werk deze bij als je hem nakijkt.
 *   letop:         (optioneel) korte waarschuwing die op de kaart verschijnt, bijv. dat inloggen nodig is.
 *   origineel:     (optioneel, recepten) { naam, url } van de chatbot waarop het recept is geïnspireerd.
 *   links:         (optioneel, bronnen) lijst van { label, url } met handige ingangen op die website.
 *   id:            unieke naam zonder spaties; hiermee kun je vanaf andere pagina's direct naar een item linken
 *                  (bijv. toolbox.html#recept-starr).
 *
 * Tip: tekst tussen [vierkante haken] in een prompt vult de gebruiker zelf in.
 */
window.TOOLBOX = {
  recepten: [
    // ---------------- LEERLINGEN ----------------
    {
      id: 'tutor',
      titel: 'Socratische tutor',
      voor: ['leerlingen'],
      stappen: ['K', 'I'],
      icoon: 'fa-chalkboard-user',
      samenvatting:
        'Een uitlegmaatje dat je niet het antwoord geeft, maar je met vragen en hints zelf laat nadenken. Handig bij oefenen en leren voor een toets.',
      prompt: `Je bent een geduldige tutor voor een havo/vwo-leerling in het vak [vak]. Je doel is dat ík de stof begrijp, niet dat ik snel een antwoord heb.

Regels:
- Geef nooit direct het antwoord of de volledige uitwerking. Help me met vragen, hints en kleine tussenstappen.
- Vraag eerst wat ik al weet en waar ik precies vastloop.
- Stel steeds één vraag tegelijk en wacht op mijn antwoord.
- Zit ik fout, zeg dat dan vriendelijk en laat me de fout zelf vinden met een gerichte vraag.
- Kom ik na drie pogingen niet verder, dan mag je een iets grotere hint geven.
- Sluit af door mij in eigen woorden te laten uitleggen wat ik geleerd heb, en geef daar feedback op.

Het onderwerp of de opgave: [plak hier de opgave of beschrijf het onderwerp]`,
    },
    {
      id: 'starr',
      titel: 'STARR-reflectiebegeleider',
      voor: ['leerlingen'],
      stappen: ['I', 'E'],
      origineel: { naam: 'STARR-reflectie hulp', url: 'https://aivoordocenten.nl/custom-chatbots-voor-het-onderwijs/' },
      icoon: 'fa-comments',
      samenvatting:
        'Begeleidt je stap voor stap door een STARR-reflectie en vraagt door bij vage antwoorden. De AI schrijft niets voor je: jij doet het denkwerk.',
      prompt: `Je bent een reflectiebegeleider voor een leerling in het voortgezet onderwijs (havo/vwo). Je helpt mij een reflectie te schrijven volgens de STARR-methode: Situatie, Taak, Actie, Resultaat en Reflectie.

Werkwijze:
- Loop de fasen één voor één door, in deze volgorde. Stel steeds maar één vraag en wacht op mijn antwoord.
- Schrijf de reflectie niet voor mij. Ik schrijf zelf; jij stelt vragen.
- Is mijn antwoord vaag of oppervlakkig, vraag dan door. Bijvoorbeeld: "Wat bedoel je precies met ...?", "Kun je een concreet voorbeeld geven?" of "Wat deed jij zelf?"
- Vat aan het eind van elke fase in één zin samen wat ik heb gezegd en vraag of dat klopt voordat je verdergaat.
- Sluit af met de vraag: "Wat neem je mee naar een volgende keer?" Geef daarna drie korte tips om mijn eigen tekst sterker te maken, zonder hem te herschrijven.
- Gebruik eenvoudige, vriendelijke taal.

Mijn reflectie gaat over: [beschrijf kort de opdracht of situatie, zonder namen van anderen]`,
    },
    {
      id: 'onderzoeksvraag',
      titel: 'Onderzoeksvraag afbakenen',
      voor: ['leerlingen'],
      stappen: ['K', 'I'],
      origineel: { naam: 'Een onderzoeksvraag formuleren', url: 'https://aivoordocenten.nl/custom-chatbots-voor-het-onderwijs/' },
      icoon: 'fa-magnifying-glass-plus',
      samenvatting:
        'Voor je profielwerkstuk of onderzoek: helpt je van een breed onderwerp naar een afgebakende hoofdvraag met deelvragen. Jij formuleert, de AI stelt kritische vragen.',
      prompt: `Je bent begeleider bij het profielwerkstuk of een onderzoeksopdracht van een havo/vwo-leerling. Je helpt mij om van een breed onderwerp te komen tot een afgebakende, onderzoekbare hoofdvraag met deelvragen.

Regels:
- Formuleer de hoofdvraag en deelvragen níet voor mij. Jij stelt vragen, ik formuleer.
- Stel één vraag tegelijk.
- Toets elke versie die ik geef aan deze criteria en benoem wat er nog ontbreekt:
  1. niet met ja of nee te beantwoorden;
  2. afgebakend in tijd, plaats en/of doelgroep;
  3. haalbaar met de bronnen en de tijd die ik heb;
  4. neutraal geformuleerd;
  5. een vraag waarvan ik het antwoord nog niet weet.
- Geef per ronde één verbetersuggestie in de vorm van een vraag, bijvoorbeeld: "Wat als je je beperkt tot ...?"
- Is de hoofdvraag goed, help me dan op dezelfde manier aan 3 tot 5 deelvragen die samen de hoofdvraag beantwoorden.

Mijn onderwerp: [onderwerp]
Mijn vak of profiel: [vak/profiel]
Beschikbare tijd: [bijvoorbeeld 80 uur]`,
    },
    {
      id: 'feedback',
      titel: 'Kritische lezer voor je tekst',
      voor: ['leerlingen'],
      stappen: ['I', 'E'],
      icoon: 'fa-pen-to-square',
      samenvatting:
        'Feedback op je argumentatie aan de hand van de criteria uit je opdracht, met bewijs uit je eigen tekst. De AI herschrijft niets.',
      prompt: `Je bent een kritische maar eerlijke lezer, zoals een debatleider of examinator. Beoordeel de argumentatie in mijn tekst aan de hand van deze criteria: [plak de criteria uit je opdracht of rubric].

Regels:
- Herschrijf mijn tekst niet.
- Noem per criterium wat goed gaat en waar ik gaten laat vallen. Citeer steeds een stukje uit mijn tekst als bewijs.
- Wijs beweringen aan die ik niet onderbouw met een bron of argument.
- Geef maximaal drie verbeterpunten, de belangrijkste eerst, geformuleerd als vraag (bijvoorbeeld: "Hoe onderbouw je ...?").

Mijn tekst: [plak hier je tekst]`,
    },
    {
      id: 'bronnen',
      titel: 'Bronnenlijst controleren (APA 7)',
      voor: ['leerlingen'],
      stappen: ['E', 'S'],
      origineel: { naam: 'APA-verbeteraar', url: 'https://aivoordocenten.nl/custom-chatbots-voor-het-onderwijs/' },
      icoon: 'fa-list-check',
      samenvatting:
        'Controleert of je verwijzingen en bronnenlijst op elkaar aansluiten en of de opmaak klopt volgens APA 7. Verzint geen gegevens: wat ontbreekt, zoek je zelf op.',
      prompt: `Je bent een nauwkeurige controleur van bronvermelding volgens APA 7. Hieronder staan mijn tekst en mijn bronnenlijst.

Doe het volgende:
1. Zet alle verwijzingen uit de lopende tekst (zoals "(Jansen, 2021)") op een rij.
2. Controleer of elke verwijzing in de bronnenlijst staat, en of elke bron uit de lijst ook in de tekst wordt gebruikt. Noem wat ontbreekt.
3. Controleer de opmaak van elke bron volgens APA 7 (volgorde, cursivering, leestekens, DOI of URL) en geef per bron de verbeterde versie.
4. Vul nooit zelf gegevens in die je niet zeker weet. Ontbreekt een auteur, jaartal of titel, schrijf dan [ONTBREEKT: zelf opzoeken]. Kun je een bron niet controleren, zeg dat dan eerlijk.
5. Zet de verbeterde lijst op alfabetische volgorde en sluit af met een korte checklist van wat ik zelf nog moet nazoeken.

Mijn tekst: [plak hier je tekst]

Mijn bronnenlijst: [plak hier je bronnenlijst]`,
    },
    {
      id: 'verantwoording',
      titel: 'AI-verantwoording schrijven',
      voor: ['leerlingen'],
      stappen: ['K', 'I', 'E', 'S'],
      icoon: 'fa-file-signature',
      samenvatting:
        'Helpt je na afloop eerlijk vast te leggen hoe je AI hebt gebruikt, langs de vier KIES-stappen. Handig als AI-logboek bij een werkstuk of project.',
      prompt: `Ik heb AI gebruikt bij een schoolopdracht. Help me een eerlijke en korte AI-verantwoording te schrijven volgens het KIES-model. Stel me deze vragen één voor één en wacht steeds op mijn antwoord:

- Kiezen: voor welke deeltaken heb ik AI gebruikt, en waarom wel of juist niet?
- Instrueren: wat waren mijn belangrijkste prompts?
- Evalueren: hoe heb ik gecontroleerd of de output klopte, en wat heb ik zelf aangepast?
- Spelregels: heb ik persoonsgegevens vermeden en heb ik mijn AI-gebruik vermeld zoals afgesproken?

Maak daarna een overzichtelijke tabel met deze vier stappen. Verzin niets: weet ik iets niet meer, schrijf dan "onbekend".

De opdracht was: [beschrijf kort de opdracht]`,
    },

    // ---------------- DOCENTEN ----------------
    {
      id: 'werkverlichting',
      titel: 'Gespreksleider: werkverlichting en verrijking',
      voor: ['docenten', 'directie'],
      stappen: ['K'],
      origineel: { naam: 'Werkverlichting & verrijking met AI', url: 'https://aivoordocenten.nl/custom-chatbots-voor-het-onderwijs/' },
      icoon: 'fa-people-group',
      samenvatting:
        'Voor een sectieoverleg: ontdek samen waar AI werk lichter of beter maakt, en waar juist niet. Eindigt met een concreet team-actieplan.',
      prompt: `Je bent gespreksleider bij een sectieoverleg van docenten [vak] in het voortgezet onderwijs. Doel: samen ontdekken waar AI ons werk lichter of beter kan maken, en waar juist niet.

Werkwijze:
1. Vraag eerst welke taken ons de meeste tijd kosten (bijvoorbeeld lesvoorbereiding, nakijken, differentiëren, communicatie). Stel één vraag tegelijk.
2. Help ons per taak te bepalen wat AI kan vervangen, aanvullen of verrijken, en wat we bewust zelf blijven doen. Benoem steeds het risico voor de leeropbrengst van leerlingen.
3. Houd rekening met privacy: geen persoonsgegevens van leerlingen in AI-tools.
4. Wees kritisch: als iets vooral tijd kost zonder echte winst, zeg dat.
5. Rond af met een actieplan in een tabel: taak | afspraak | wie | wanneer | hoe evalueren we.`,
    },
    {
      id: 'toets',
      titel: 'AI-bewuste toets of opdracht ontwerpen',
      voor: ['docenten'],
      stappen: ['K', 'S'],
      origineel: { naam: 'AI-ready toetsen', url: 'https://aivoordocenten.nl/custom-chatbots-voor-het-onderwijs/' },
      icoon: 'fa-clipboard-check',
      samenvatting:
        'Maakt een opdracht niet "AI-proof" (dat bestaat niet), maar zo dat het leerproces zichtbaar wordt en AI-gebruik een bewuste keuze is.',
      prompt: `Je bent toetsdeskundige in het voortgezet onderwijs. Help mij een opdracht of toets te ontwerpen die AI-bewust is: niet AI-proof (dat bestaat niet), maar zo dat het leerproces zichtbaar wordt en AI-gebruik een bewuste keuze is.

Werkwijze:
1. Vraag naar het leerdoel, het niveau (havo/vwo, leerjaar) en de huidige opdracht. Eén vraag tegelijk.
2. Analyseer de huidige opdracht: welke onderdelen kan AI overnemen zonder dat de leerling iets leert?
3. Stel aanpassingen voor, zoals tussenproducten, procesmomenten in de les, een korte mondelinge toelichting, een AI-logboek of een deeltaken-matrix (wat mag met AI, wat niet).
4. Geef per onderdeel aan welke KIES-stap je ermee zichtbaar maakt: Kiezen, Instrueren, Evalueren of Spelregels.
5. Lever een versie op die ik aan leerlingen kan geven, plus een korte toelichting voor mezelf.`,
    },
    {
      id: 'rubric',
      titel: 'Beoordelingsrubric maken',
      voor: ['docenten'],
      stappen: ['I', 'E'],
      origineel: { naam: 'Rubric Hulp', url: 'https://aivoordocenten.nl/custom-chatbots-voor-het-onderwijs/' },
      icoon: 'fa-table-cells',
      samenvatting:
        'Een rubric met concrete, waarneembare niveaus in leerlingtaal, gekoppeld aan je leerdoelen. Direct te kopiëren naar Word of een spreadsheet.',
      prompt: `Je bent een ervaren docent en toetsontwikkelaar. Maak een beoordelingsrubric voor de volgende opdracht.

Opdracht: [beschrijving]
Niveau: [havo/vwo, leerjaar]
Leerdoelen: [leerdoelen]

Eisen:
- 4 tot 6 criteria die direct aansluiten op de leerdoelen. Geen vage criteria (zoals "netheid") tenzij dat een leerdoel is.
- Per criterium 4 niveaus (onvoldoende, voldoende, goed, uitstekend) met concrete, waarneembare beschrijvingen in leerlingtaal.
- Een weging per criterium in punten; samen [totaal] punten.
- Telt het proces mee, neem dan één criterium op voor procesverantwoording (bijvoorbeeld een AI-logboek of tussenproducten).

Geef de rubric als tabel die ik kan kopiëren naar Word of een spreadsheet. Sluit af met twee vragen waarmee ik de rubric met een collega kan toetsen.`,
    },
    {
      id: 'casus',
      titel: 'Casus maken voor les of toets',
      voor: ['docenten'],
      stappen: ['I'],
      origineel: { naam: 'Casus generator', url: 'https://aivoordocenten.nl/custom-chatbots-voor-het-onderwijs/' },
      icoon: 'fa-briefcase',
      samenvatting:
        'Een realistische praktijksituatie met vragen van oplopende moeilijkheid (Bloom) en een beoordelingsrichtlijn. Wat je moet nachecken, wordt gemarkeerd.',
      prompt: `Je bent een ervaren docent [vak]. Bedenk een realistische, complexe casus voor [havo/vwo, leerjaar] bij het onderwerp [onderwerp].

Eisen:
- Een herkenbare situatie uit de praktijk of het dagelijks leven, zonder namen van bestaande personen.
- Genoeg informatie (eventueel met gegevens of een tabel) om de vragen te beantwoorden, plus één gegeven dat niet relevant is.
- 4 tot 6 vragen van oplopende moeilijkheid: van reproduceren naar toepassen, analyseren en beoordelen (taxonomie van Bloom).
- Per vraag een beoordelingsrichtlijn met modelantwoord en puntenverdeling.
- Markeer alle feiten of getallen die ik zelf moet controleren met [CHECK].`,
    },
    {
      id: 'chatbot',
      titel: 'Instructie voor je eigen AI-assistent',
      voor: ['docenten'],
      stappen: ['I', 'E'],
      origineel: { naam: 'Custom chatbot bouwer', url: 'https://aivoordocenten.nl/custom-chatbots-voor-het-onderwijs/' },
      icoon: 'fa-screwdriver-wrench',
      samenvatting:
        'Stelt je gerichte vragen en schrijft daarna een complete instructie (systeemprompt) voor een eigen lesassistent, inclusief testvragen. Werkt in elk AI-platform.',
      prompt: `Je helpt mij een goede instructie (systeemprompt) te schrijven voor een eigen AI-assistent die ik in mijn les wil gebruiken. Stel mij eerst één voor één vragen over:
1. de doelgroep (niveau, leerjaar, vak);
2. het leerdoel, en wat de assistent wél en níet mag doen (bijvoorbeeld: geen antwoorden voorzeggen);
3. de rol en de toon;
4. de werkwijze (stappen, één vraag tegelijk, wanneer feedback);
5. grenzen en veiligheid (geen persoonsgegevens vragen, doorverwijzen naar de docent bij problemen);
6. hoe een gesprek afsluit.

Schrijf daarna een complete instructie met de kopjes Rol, Doel, Werkwijze, Grenzen en Afsluiting, die ik kan plakken in de vaste instructies van een AI-assistent.

Geef er drie testgesprekken bij waarmee ik controleer of de assistent zich goed gedraagt, waaronder een leerling die het antwoord probeert los te krijgen.`,
    },
    {
      id: 'simulatie',
      titel: 'Les simuleren en verbeteren',
      voor: ['docenten'],
      stappen: ['E'],
      icoon: 'fa-person-chalkboard',
      samenvatting:
        'De 3-stappenaanpak: laat AI je les simuleren (met realistische misconcepties), reflecteren op de zwakke plekken en verbeteringen voorstellen. Jij kiest wat je overneemt.',
      prompt: `Je helpt mij een lesplan te verbeteren met een simulatie.

Stap 1 – Simuleer: speel de les na met een klas van [aantal] leerlingen uit [havo/vwo, leerjaar]. Beschrijf per lesfase wat er gebeurt, inclusief realistische misconcepties, vragen van leerlingen en momenten waarop ze afhaken.
Stap 2 – Reflecteer: benoem de drie zwakste plekken in de les en leg uit waarom.
Stap 3 – Verbeter: stel per zwakke plek een concrete aanpassing voor. Pas het lesplan nog niet zelf aan; ik kies wat ik overneem.

Leerdoel: [leerdoel]
Mijn lesplan: [plak hier je lesplan]`,
    },
    {
      id: 'vibecoden',
      titel: 'Didactische check vóór het vibecoden',
      voor: ['docenten'],
      stappen: ['I', 'E'],
      origineel: { naam: 'Didactisch promptontwerp voor vibecoding', url: 'https://aivoordocenten.nl/custom-chatbots-voor-het-onderwijs/' },
      icoon: 'fa-code',
      samenvatting:
        'Toetst je idee voor een les-app aan zeven didactische principes voordat je gaat bouwen, en schrijft een verbeterde bouwprompt. Eerlijk als een app niet nodig is.',
      prompt: `Je bent een kritische onderwijskundige. Ik wil met AI een kleine les-app laten bouwen ("vibecoden"). Toets mijn idee vóórdat ik ga bouwen aan deze principes:
1. Sluit de app aan op een concreet leerdoel?
2. Doet de leerling zelf het denkwerk, of klikt hij alleen door?
3. Krijgt de leerling directe, inhoudelijke feedback?
4. Is er opbouw in moeilijkheid (scaffolding)?
5. Is de app binnen vijf minuten uit te leggen en in de klas te gebruiken?
6. Werkt de app zonder account en zonder persoonsgegevens?
7. Voegt een app echt iets toe, of volstaat een werkblad of poster?

Geef per principe een oordeel (voldoet / deels / niet) met uitleg. Wees eerlijk: als een app niet nodig is, zeg dat.
Schrijf daarna een verbeterde, complete bouwprompt die ik aan een AI-bouwtool kan geven.

Mijn idee: [beschrijf je app-idee, het vak en het niveau]`,
    },
  ],

  tools: [
    {
      id: 'kiesapp',
      naam: 'KIES Leeromgeving',
      url: 'https://ai-vaardigheid.vercel.app/',
      maker: 'AI voor Docenten',
      icoon: 'fa-graduation-cap',
      wat: 'Oefenomgeving van de makers van KIES. Leerlingen kiezen hun niveau (vmbo t/m hbo) en oefenen de vier vaardigheden: wanneer gebruik je AI, hoe vraag je het goed, klopt wat AI zegt, en wat mag en moet?',
      voor: ['leerlingen', 'docenten'],
      stappen: ['K', 'I', 'E', 'S'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'notebooklm',
      naam: 'NotebookLM',
      url: 'https://notebooklm.google.com/',
      maker: 'Google',
      icoon: 'fa-book-open',
      wat: 'Werkt alleen met de bronnen die je zelf uploadt (teksten, PDF\'s, audio). Maakt samenvattingen, vragen, mindmaps en audio- of video-overzichten.',
      voor: ['leerlingen', 'docenten'],
      stappen: ['K', 'I'],
      kosten: 'Gratis (Google-account)',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'quickquiz',
      naam: 'Quick Quiz',
      url: 'https://quickquiznl.vercel.app/',
      maker: 'Tom Naberink (AI voor Docenten)',
      icoon: 'fa-circle-question',
      wat: 'Maakt binnen een halve minuut een formatieve quiz uit een PDF met lesstof.',
      voor: ['docenten'],
      stappen: ['K', 'E'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'quicksummary',
      naam: 'Quick Summary',
      url: 'https://quickquiznl.vercel.app/samenvatting',
      maker: 'Tom Naberink (AI voor Docenten)',
      icoon: 'fa-file-lines',
      wat: 'Zet een Word- of PDF-bestand om in een eenvoudige uitleg, een samenvatting, een begrippenlijst of vraag-en-antwoord. Een opstapje: daarna studeer je zelf met de originele tekst.',
      voor: ['leerlingen', 'docenten'],
      stappen: ['K'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'gamma',
      naam: 'Gamma',
      url: 'https://gamma.app/',
      icoon: 'fa-display',
      wat: 'Genereert snel een visuele presentatie of webpagina uit een tekst of opzet.',
      voor: ['docenten'],
      stappen: ['K'],
      kosten: 'Deels betaald (gratis basis met beperkte AI-tegoeden)',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'handboek',
      naam: 'Handboek Generator',
      url: 'https://handboek-generator.vercel.app/',
      maker: 'AI voor Docenten',
      icoon: 'fa-book',
      wat: 'Helpt bij het opzetten van gepersonaliseerd lesmateriaal in de vorm van een handboek.',
      voor: ['docenten'],
      stappen: ['K', 'I'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'infographics',
      naam: 'Infographic generator',
      url: 'https://educatieveinfographics.vercel.app/',
      maker: 'Tom Naberink (AI voor Docenten)',
      icoon: 'fa-chart-pie',
      wat: 'Maakt educatieve infographics. Tip: vraag om een opzet volgens didactische principes (bijv. Bloom of een conceptvergelijking), niet alleen om een mooi plaatje.',
      voor: ['docenten'],
      stappen: ['I'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'aistudio',
      naam: 'Google AI Studio',
      url: 'https://aistudio.google.com/',
      maker: 'Google',
      icoon: 'fa-laptop-code',
      wat: 'Experimenteeromgeving waarin je in gewone taal beschrijft welke app je wilt; de AI bouwt de code en een werkende preview (vibecoden). Doe eerst de didactische check.',
      voor: ['docenten'],
      stappen: ['I'],
      kosten: 'Gratis (Google-account)',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'ganzenbord',
      naam: 'Didactisch Ganzenbord',
      url: 'https://gemini.google.com/share/795a2b06e999',
      icoon: 'fa-dice',
      wat: 'Spelvorm waarin leerlingen de stof spelenderwijs oefenen (gemaakt met Gemini).',
      voor: ['docenten'],
      stappen: ['K'],
      kosten: 'Gratis (Google-account)',
      gecontroleerd: '2026-10-02',
      letop: 'Alleen zichtbaar als je bent ingelogd met een Google-account; anders zie je een lege pagina.',
    },
    {
      id: 'snapikhetnog',
      naam: 'Snap ik het nog?',
      url: 'https://snap-ik-het-appje.vercel.app/',
      maker: 'AI voor Docenten',
      icoon: 'fa-hand',
      wat: 'Live en anoniem laten zien of leerlingen de uitleg nog volgen. Zonder accounts of persoonsgegevens.',
      voor: ['docenten', 'leerlingen'],
      stappen: ['E', 'S'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'decibelmeter',
      naam: 'Decibelmeter',
      url: 'https://decibelmeter.vercel.app/',
      maker: 'AI voor Docenten',
      icoon: 'fa-volume-high',
      wat: 'Visuele geluidsmeter voor het digibord, met instelbare drempelwaarde.',
      voor: ['docenten'],
      stappen: [],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'afteltimer',
      naam: 'Afteltimer met fasen',
      url: 'https://afteltimer.vercel.app/',
      maker: 'AI voor Docenten',
      icoon: 'fa-hourglass-half',
      wat: 'Deel de les op het digibord in overzichtelijke, zelf in te stellen fasen.',
      voor: ['docenten'],
      stappen: [],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'anonimiseer',
      naam: 'Anonimiseer Tool',
      url: 'https://anonimiseer-tool.vercel.app/',
      maker: 'AI voor Docenten',
      icoon: 'fa-user-secret',
      wat: 'Haalt namen en andere persoonsgegevens uit tekst, CSV- of Excel-bestanden voordat je ze in een AI-tool plakt. Werkt volledig lokaal in je browser: er wordt niets verstuurd.',
      voor: ['docenten', 'directie'],
      stappen: ['S'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'zelfscan',
      naam: 'AI-geletterdheid zelfscan',
      url: 'https://zelfscan-ai-geletterdheid.vercel.app/',
      maker: 'AI voor Docenten',
      icoon: 'fa-clipboard-user',
      wat: 'Breng in ongeveer vijf minuten je eigen AI-geletterdheid als docent in kaart, met direct resultaat. Handig als start voor scholing; anoniem.',
      voor: ['docenten', 'directie'],
      stappen: ['S'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'schoolscan',
      naam: 'AI Schoolscan',
      url: 'https://avd-ai-schoolscan.vercel.app/',
      maker: 'AI voor Docenten',
      icoon: 'fa-school',
      wat: 'Breng in een kwartier de AI-gereedheid van je school in kaart, toets je AI-beleid aan praktijkscenario\'s en gebruik de uitkomst als start voor het teamgesprek.',
      voor: ['directie'],
      stappen: ['S'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'foutenspotter',
      naam: 'Foutenspotter',
      url: 'https://foutenspotter.vercel.app/',
      maker: 'AI voor Docenten',
      icoon: 'fa-magnifying-glass',
      wat: 'Plak lesmateriaal, markeer vooraf de fouten en laat leerlingen ze op het digibord zoeken voordat je ze een voor een onthult. Een goede oefening in kritisch lezen.',
      voor: ['docenten'],
      stappen: ['E'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'achteruitplanner',
      naam: 'De Achteruitplanner',
      url: 'https://achteruitplanner.vercel.app/',
      maker: 'AI voor Docenten',
      icoon: 'fa-calendar-days',
      wat: 'Reken terug vanaf een deadline naar een haalbaar schema met werkblokken en tussenstappen. Handig bij een werkstuk of profielwerkstuk.',
      voor: ['leerlingen'],
      stappen: ['K'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'bronkritiek',
      naam: 'Bronkritiek coach (chatbot)',
      url: 'https://aivoordocenten.nl/custom-chatbots-voor-het-onderwijs/',
      maker: 'AI voor Docenten',
      icoon: 'fa-scale-unbalanced',
      wat: 'Chatbot die je stap voor stap vanuit vier perspectieven naar een bron laat kijken, zonder zelf het oordeel te geven. Te openen in ChatGPT of Gemini.',
      voor: ['leerlingen', 'docenten'],
      stappen: ['E'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
      letop: 'Zoek in de chatbotbibliotheek van AI voor Docenten op Bronkritiek coach.',
    },
    {
      id: 'advocaat',
      naam: 'Advocaat van de duivel (chatbot)',
      url: 'https://aivoordocenten.nl/custom-chatbots-voor-het-onderwijs/',
      maker: 'AI voor Docenten',
      icoon: 'fa-user-tie',
      wat: 'Chatbot die bewust het tegenovergestelde standpunt verdedigt, zodat je je argumenten test en blinde vlekken vindt. Te openen in ChatGPT of Gemini.',
      voor: ['leerlingen', 'docenten'],
      stappen: ['E'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
      letop: 'Zoek in de chatbotbibliotheek van AI voor Docenten op Advocaat van de duivel.',
    },
    {
      id: 'vibeleeromgeving',
      naam: 'Leeromgeving vibecoden voor docenten',
      url: 'https://aivoordocenten.nl/vibe-coding-in-het-onderwijs/',
      maker: 'AI voor Docenten',
      icoon: 'fa-route',
      wat: 'Gratis leeromgeving met drie leerroutes (basis, gevorderd, expert) en ruim dertig lessen om zonder programmeerkennis je eigen onderwijsapps te bouwen. Een account is niet nodig.',
      voor: ['docenten'],
      stappen: ['I', 'E'],
      kosten: 'Gratis (enkele opdrachten met betaalde AI-tools)',
      gecontroleerd: '2026-10-02',
    },
  ],

  bronnen: [
    {
      id: 'aivoordocenten',
      naam: 'AI voor Docenten',
      url: 'https://aivoordocenten.nl/',
      maker: 'Marcel Mutsaarts en Tom Naberink',
      links: [
        { label: 'Onderwijsapps', url: 'https://aivoordocenten.nl/onderwijsapps/' },
        { label: 'Chatbotbibliotheek', url: 'https://aivoordocenten.nl/custom-chatbots-voor-het-onderwijs/' },
        { label: 'Promptbibliotheek', url: 'https://aivoordocenten.nl/promptbibliotheek-voor-docenten/' },
        { label: 'Nieuwsbrief AI-spiekbriefje', url: 'https://aivoordocenten.nl/ai-spiekbriefje/' },
      ],
      icoon: 'fa-chalkboard-teacher',
      wat: 'De bron van het KIES-model. Een platform door en voor docenten, dat actief wordt bijgehouden.',
      aanbod: [
        'Het KIES-raamwerk en het BOUW-raamwerk (ontwerpen van AI-leeromgevingen)',
        'Een groeiende verzameling onderwijsapps (o.a. Quick Quiz, Snap ik het nog? en de Afteltimer), chatbots en een promptbibliotheek',
        'Podcast Het AI-tussenuurtje en de nieuwsbrief AI-spiekbriefje',
        'Webinars, workshops en certificering',
      ],
      voor: ['docenten', 'directie'],
      stappen: ['K', 'I', 'E', 'S'],
      kosten: 'Deels gratis (podcast, nieuwsbrief, gesprekskaarten), deels betaald (webinars, workshops)',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'aivoorleerlingen',
      naam: 'AI voor Leerlingen',
      url: 'https://aivoorleerlingen.nl/',
      icoon: 'fa-user-graduate',
      wat: 'Platform waar leerlingen per vak oefenen met AI-tutors en examentraining, met feedback in plaats van alleen een nakijkmodel.',
      aanbod: [
        'AI-tutors en uitleg per vak voor havo en vwo',
        'Oefenen met officiële examenvragen',
        'AI-docent die je vragen beantwoordt en feedback geeft',
      ],
      voor: ['leerlingen'],
      stappen: ['K', 'E'],
      kosten: 'Zie de website',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'tintara',
      naam: 'Tintara',
      url: 'https://tintara.nl/',
      icoon: 'fa-laptop-code',
      wat: 'Kant-en-klaar lesmateriaal over digitale geletterdheid en AI, aansluitend op de kerndoelen. Plus werkvormen om als team je koers te bepalen.',
      aanbod: [
        'Leerlijnen Digitale Geletterdheid en AI voor het vo',
        'Uitgewerkte, direct inzetbare lessen',
        'Teampagina met werkvormen zoals het AI Koersspel',
      ],
      voor: ['docenten', 'directie'],
      stappen: ['K', 'S'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'sivon',
      naam: 'SIVON',
      url: 'https://sivon.nl/veelgestelde-vragen-over-ai/',
      maker: 'ICT-coöperatie voor het primair en voortgezet onderwijs',
      icoon: 'fa-shield-halved',
      wat: 'Praktisch advies over veilig en privacybewust AI-gebruik op school, en een toetsingskader om AI-tools te beoordelen volgens de Europese AI-verordening.',
      aanbod: [
        'Veelgestelde vragen over AI, privacy en leeftijdsgrenzen',
        'Toetsingskader AI funderend onderwijs (2026)',
      ],
      voor: ['docenten', 'directie'],
      stappen: ['S'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
    {
      id: 'kennisnet',
      naam: 'Kennisnet',
      url: 'https://www.kennisnet.nl/artificial-intelligence/',
      maker: 'Publieke ICT-organisatie voor het onderwijs',
      icoon: 'fa-building-columns',
      wat: 'Achtergrond, praktijkvoorbeelden en stappenplannen over AI voor scholen in po, vo en mbo. Sterk op beleid: van visie en schoolafspraken tot toetsing.',
      aanbod: [
        'Stappenplan voor een breed gedragen AI-beleid, met een voorbeelddocument',
        'Schoolafspraken over het gebruik van generatieve AI',
        'Toetsing en generatieve AI in het vo: leerprocessen zichtbaar maken in plaats van fraude opsporen',
        'Praktijkvoorbeelden van scholen en het AI Impact Game voor teams',
      ],
      links: [
        { label: 'AI-beleid ontwikkelen', url: 'https://www.kennisnet.nl/artificial-intelligence/ai-beleid-ontwikkelen-op-school/' },
        { label: 'Schoolafspraken over AI', url: 'https://www.kennisnet.nl/artificial-intelligence/schoolafspraken-over-het-gebruik-van-generatieve-ai/' },
        { label: 'Toetsing en AI in het vo', url: 'https://www.kennisnet.nl/artificial-intelligence/toetsing-en-generatieve-ai-in-het-voortgezet-onderwijs/' },
      ],
      voor: ['directie', 'docenten'],
      stappen: ['K', 'S'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-03',
    },
    {
      id: 'aifluency',
      naam: 'AI Fluency-raamwerk',
      url: 'https://aifluencyframework.org/',
      maker: 'Rick Dakan en Joseph Feller, i.s.m. Anthropic',
      icoon: 'fa-compass',
      wat: 'Het internationale raamwerk waarop KIES is gebaseerd, met de "4 D\'s": Delegation (Kiezen), Description (Instrueren), Discernment (Evalueren) en Diligence (Spelregels). In het Engels.',
      aanbod: [
        'Achtergrond en onderzoek bij het raamwerk',
        'Gratis cursussen, ook speciaal voor docenten en studenten',
      ],
      voor: ['docenten'],
      stappen: ['K', 'I', 'E', 'S'],
      kosten: 'Gratis',
      gecontroleerd: '2026-10-02',
    },
  ],
};
