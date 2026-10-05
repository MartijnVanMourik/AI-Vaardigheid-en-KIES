/*
 * Werkblad vibecoden (vibecoden.html).
 * Bouwt van de drie invulvakken het bouwidee en de bouwprompt op, vult de voorbeeldideeën in
 * en regelt de kopieerknoppen. Wat iemand invult, blijft alleen in de eigen browser bewaard.
 * Voorbeeldideeën aanpassen? Dat doe je in de lijst IDEEEN hieronder.
 */
(function () {
  const IDEEEN = [
    { vak: 'Frans, Duits, Engels', wie: 'mijn havo 3-klas Frans', wat: "woordjes overhoort met flitskaarten die je kunt omdraaien, met knoppen 'ken ik' en 'ken ik nog niet'", waarom: 'ze zelfstandig oefenen en de lastige woorden vaker terugkomen' },
    { vak: 'Nederlands', wie: 'mijn brugklas', wat: 'een d/t-trainer is met zinnen waarin ze het juiste werkwoord kiezen en direct uitleg krijgen bij een fout', waarom: 'ze de regel toepassen en meteen zien waarom iets fout is' },
    { vak: 'Geschiedenis', wie: 'mijn vwo 2-klas geschiedenis', wat: 'acht gebeurtenissen laat slepen in de juiste chronologische volgorde en daarna controleert', waarom: 'ze tijdvakken en oorzaak-gevolg beter leren ordenen' },
    { vak: 'Wiskunde', wie: 'mijn havo 2-klas', wat: 'steeds een nieuwe breuk geeft om te vereenvoudigen en het antwoord nakijkt', waarom: 'ze eindeloos kunnen oefenen met directe feedback' },
    { vak: 'Aardrijkskunde', wie: 'mijn brugklas aardrijkskunde', wat: 'een quiz is over hoofdsteden van Europa met vier keuzes en een score', waarom: 'ze de topografie spelenderwijs herhalen' },
    { vak: 'Biologie, scheikunde', wie: 'mijn havo 4-klas biologie', wat: 'een begrip laat raden aan de hand van een omschrijving, met een hint-knop', waarom: 'ze vakbegrippen actief ophalen in plaats van alleen herlezen' },
    { vak: 'Mentoruur, elk vak', wie: 'mijn klas', wat: 'een timer is die bij elke ronde een willekeurige opdrachtkaart laat zien', waarom: 'werkvormen vlot verlopen en iedereen weet wat er verwacht wordt' },
  ];

  const fWie = document.getElementById('f-wie');
  const fWat = document.getElementById('f-wat');
  const fWaarom = document.getElementById('f-waarom');
  const uit = document.getElementById('idea-out');
  const bouw = document.getElementById('p-bouw');
  if (!fWie || !fWat || !fWaarom || !uit || !bouw) return;

  const esc = (t) =>
    String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const waarde = (el) => el.value.trim();

  const ideeTekst = () =>
    `Voor ${waarde(fWie) || '[voor wie]'} wil ik een appje dat ${waarde(fWat) || '[één duidelijke actie]'}, zodat ${waarde(fWaarom) || '[het leren makkelijker wordt]'}.`;

  const opslaan = () => {
    try {
      localStorage.setItem('hub-vibecoden-idee', JSON.stringify([fWie.value, fWat.value, fWaarom.value]));
    } catch (e) {
      // Opslaan lukt niet (bijv. privévenster); de pagina werkt gewoon door.
    }
  };

  const toon = () => {
    const deel = (el, leeg) =>
      waarde(el) ? esc(waarde(el)) : `<span class="bg-green-100 text-green-900 rounded px-1">${leeg}</span>`;
    uit.innerHTML = `Voor ${deel(fWie, 'voor wie')} wil ik een appje dat ${deel(fWat, 'één duidelijke actie')}, zodat ${deel(fWaarom, 'het leren makkelijker wordt')}.`;
    bouw.textContent =
      'Ik ben docent en ik wil een simpele onderwijswebapp maken.\n\n' +
      'Mijn bouwidee is:\n' + ideeTekst() + '\n\n' +
      'Maak een compleet HTML-bestand met HTML, CSS en JavaScript in hetzelfde bestand, zodat ik maar één bestand hoef te downloaden en te openen.\n' +
      'Gebruik geen database, geen inlog en geen API-sleutels: de app moet direct in de browser werken.\n' +
      'Zorg dat de app ook op een telefoon goed werkt en dat alle tekst in het Nederlands is.\n' +
      'Zet onderaan de app een korte regel dat hij met AI is gemaakt.\n\n' +
      'Geef een downloadbaar HTML-bestand terug.';
    opslaan();
  };

  try {
    const bewaard = JSON.parse(localStorage.getItem('hub-vibecoden-idee') || 'null');
    if (Array.isArray(bewaard) && bewaard.length === 3) {
      [fWie.value, fWat.value, fWaarom.value] = bewaard;
    }
  } catch (e) {
    // Niets bewaard of geen toegang: begin met lege vakken.
  }

  [fWie, fWat, fWaarom].forEach((el) => el.addEventListener('input', toon));
  toon();

  // ---------- Voorbeeldideeën ----------
  const lijst = document.getElementById('ideas');
  if (lijst) {
    lijst.innerHTML = IDEEEN.map(
      (idee, i) => `
      <div class="bg-white rounded-2xl border border-dashed border-gray-300 p-5 flex flex-col gap-3">
        <p class="text-xs font-bold uppercase tracking-wide text-trinitas-green-text">${esc(idee.vak)}</p>
        <p class="text-sm text-gray-700 leading-relaxed">Een appje dat ${esc(idee.wat)}.</p>
        <button type="button" class="gebruik-idee mt-auto self-start inline-flex items-center gap-2 text-xs font-bold text-trinitas-blue bg-blue-50 border border-blue-200 rounded-full px-3 py-1 hover:bg-blue-100" data-i="${i}">
          <i class="fas fa-arrow-up" aria-hidden="true"></i>Gebruik dit idee
        </button>
      </div>`
    ).join('');

    lijst.addEventListener('click', (e) => {
      const knop = e.target.closest('.gebruik-idee');
      if (!knop) return;
      const idee = IDEEEN[Number(knop.dataset.i)];
      fWie.value = idee.wie;
      fWat.value = idee.wat;
      fWaarom.value = idee.waarom;
      toon();
      document.getElementById('idee').scrollIntoView({ block: 'start' });
      fWie.focus({ preventScroll: true });
    });
  }

  // ---------- Kopiëren ----------
  document.querySelectorAll('.copy-btn').forEach((knop) => {
    const label = knop.querySelector('span');
    const origineel = label.textContent;
    knop.addEventListener('click', async () => {
      const pre = document.getElementById(knop.dataset.copy);
      try {
        await navigator.clipboard.writeText(pre.textContent);
        label.textContent = 'Gekopieerd!';
      } catch (e) {
        // Valt terug op selecteren, zodat je zelf kunt kopiëren
        const range = document.createRange();
        range.selectNodeContents(pre);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        label.textContent = 'Geselecteerd: druk op Ctrl/Cmd+C';
      }
      setTimeout(() => (label.textContent = origineel), 2500);
    });
  });
})();
