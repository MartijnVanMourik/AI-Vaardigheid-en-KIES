/*
 * Bouwt de Toolbox & bronnen-pagina op uit assets/js/toolbox-data.js
 * en regelt de filters (KIES-stap en doelgroep), het zoekveld en de kopieerknoppen.
 * Inhoud aanpassen? Dat doe je in toolbox-data.js, niet hier.
 */
(function () {
  const data = window.TOOLBOX;
  if (!data) return;

  const STAPPEN = {
    K: { naam: 'Kiezen', kleur: 'bg-green-100 text-green-900 border-green-300' },
    I: { naam: 'Instrueren', kleur: 'bg-blue-100 text-blue-900 border-blue-300' },
    E: { naam: 'Evalueren', kleur: 'bg-orange-100 text-orange-900 border-orange-300' },
    S: { naam: 'Spelregels', kleur: 'bg-purple-100 text-purple-900 border-purple-300' },
  };
  const DOELGROEP = {
    leerlingen: { naam: 'Leerlingen', icoon: 'fa-user-graduate' },
    docenten: { naam: 'Docenten', icoon: 'fa-chalkboard-user' },
    directie: { naam: 'Directie', icoon: 'fa-school' },
  };

  const esc = (t) =>
    String(t).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

  const datum = (iso) => {
    if (!iso) return '';
    const d = new Date(iso + 'T12:00:00');
    return d.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  const stapLabels = (stappen) =>
    stappen.length
      ? stappen
          .map(
            (s) =>
              `<span class="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full border ${STAPPEN[s].kleur}" title="KIES-stap: ${STAPPEN[s].naam}"><span aria-hidden="true">${s}</span><span class="sr-only sm:not-sr-only">${STAPPEN[s].naam}</span></span>`
          )
          .join('')
      : '<span class="text-xs font-semibold px-2 py-0.5 rounded-full border bg-gray-100 text-gray-700 border-gray-300">Algemeen</span>';

  const doelgroepLabels = (voor) =>
    voor
      .map(
        (v) =>
          `<span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-white text-gray-700 border border-gray-300"><i class="fas ${DOELGROEP[v].icoon} mr-1" aria-hidden="true"></i>${DOELGROEP[v].naam}</span>`
      )
      .join('');

  const dataAttrs = (item) => `data-stappen="${item.stappen.join(' ')}" data-voor="${item.voor.join(' ')}"`;

  // ---------- Promptrecepten ----------
  const receptKaart = (r) => `
    <article id="recept-${esc(r.id)}" class="toolbox-item bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col scroll-mt-28" ${dataAttrs(r)}>
      <div class="flex items-start gap-4 mb-3">
        <div class="bg-trinitas-blue text-white w-11 h-11 rounded-xl shrink-0 flex items-center justify-center"><i class="fas ${esc(r.icoon || 'fa-wand-magic-sparkles')}" aria-hidden="true"></i></div>
        <div>
          <h3 class="font-bold text-lg text-trinitas-blue leading-snug">${esc(r.titel)}</h3>
          <div class="flex flex-wrap gap-1.5 mt-2">${stapLabels(r.stappen)}${doelgroepLabels(r.voor)}</div>
        </div>
      </div>
      <p class="text-sm text-gray-700 leading-relaxed mb-4">${esc(r.samenvatting)}</p>
      ${r.origineel ? `<p class="text-xs text-gray-600 -mt-2 mb-4"><i class="fas fa-lightbulb text-trinitas-green-text mr-1" aria-hidden="true"></i>Geïnspireerd op de chatbot <a href="${esc(r.origineel.url)}" target="_blank" rel="noopener" class="text-trinitas-blue underline">${esc(r.origineel.naam)}</a> van AI voor Docenten<span class="sr-only"> (opent in nieuw tabblad)</span></p>` : ''}
      <details class="mt-auto group rounded-xl border border-gray-200 bg-gray-50">
        <summary class="flex items-center justify-between px-4 py-3 font-semibold text-sm text-trinitas-blue">
          <span><i class="fas fa-scroll mr-2" aria-hidden="true"></i>Bekijk het recept</span>
          <i class="fas fa-chevron-down chevron transition-transform" aria-hidden="true"></i>
        </summary>
        <div class="px-4 pb-4">
          <pre class="prompt-text bg-white border border-gray-200 rounded-lg p-4 text-gray-800 max-h-96 overflow-auto">${esc(r.prompt)}</pre>
          <button type="button" class="copy-btn mt-3 inline-flex items-center gap-2 bg-trinitas-blue hover:bg-blue-800 text-white text-sm font-bold px-4 py-2 rounded-full transition" data-recept="${esc(r.id)}">
            <i class="fas fa-copy" aria-hidden="true"></i><span>Kopieer recept</span>
          </button>
        </div>
      </details>
    </article>`;

  // ---------- Tools ----------
  const toolKaart = (t) => `
    <article id="tool-${esc(t.id)}" class="toolbox-item bg-white rounded-2xl border border-gray-200 shadow-sm p-5 flex flex-col scroll-mt-28" ${dataAttrs(t)}>
      <div class="flex items-start gap-3 mb-2">
        <div class="bg-green-50 text-trinitas-green-text w-10 h-10 rounded-xl shrink-0 flex items-center justify-center"><i class="fas ${esc(t.icoon || 'fa-toolbox')}" aria-hidden="true"></i></div>
        <div class="min-w-0">
          <h3 class="font-bold text-trinitas-blue leading-snug">
            <a href="${esc(t.url)}" target="_blank" rel="noopener" class="hover:underline">${esc(t.naam)}<i class="fas fa-arrow-up-right-from-square text-xs ml-1.5 text-gray-400" aria-hidden="true"></i><span class="sr-only"> (opent in nieuw tabblad)</span></a>
          </h3>
          ${t.maker ? `<p class="text-xs text-gray-500">${esc(t.maker)}</p>` : ''}
        </div>
      </div>
      <p class="text-sm text-gray-700 leading-relaxed mb-3">${esc(t.wat)}</p>
      ${t.letop ? `<p class="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-3 flex gap-2"><i class="fas fa-circle-exclamation mt-0.5" aria-hidden="true"></i><span>${esc(t.letop)}</span></p>` : ''}
      <div class="flex flex-wrap gap-1.5 mb-3">${stapLabels(t.stappen)}${doelgroepLabels(t.voor)}</div>
      <p class="mt-auto text-xs text-gray-500 flex flex-wrap gap-x-4 gap-y-1">
        <span><i class="fas fa-tag mr-1" aria-hidden="true"></i>${esc(t.kosten || 'Zie website')}</span>
        ${t.gecontroleerd ? `<span><i class="fas fa-circle-check mr-1" aria-hidden="true"></i>Gecontroleerd: ${datum(t.gecontroleerd)}</span>` : ''}
      </p>
    </article>`;

  // ---------- Bronnen ----------
  const bronKaart = (b) => `
    <article id="bron-${esc(b.id)}" class="toolbox-item bg-white rounded-2xl border-l-4 border-trinitas-green border-y border-r border-gray-200 shadow-sm p-6 flex flex-col scroll-mt-28" ${dataAttrs(b)}>
      <div class="flex items-start gap-3 mb-3">
        <div class="bg-trinitas-blue/10 text-trinitas-blue w-11 h-11 rounded-xl shrink-0 flex items-center justify-center"><i class="fas ${esc(b.icoon || 'fa-globe')}" aria-hidden="true"></i></div>
        <div class="min-w-0">
          <h3 class="font-bold text-lg text-trinitas-blue leading-snug">
            <a href="${esc(b.url)}" target="_blank" rel="noopener" class="hover:underline">${esc(b.naam)}<i class="fas fa-arrow-up-right-from-square text-xs ml-1.5 text-gray-400" aria-hidden="true"></i><span class="sr-only"> (opent in nieuw tabblad)</span></a>
          </h3>
          ${b.maker ? `<p class="text-xs text-gray-500">${esc(b.maker)}</p>` : ''}
        </div>
      </div>
      <p class="text-sm text-gray-700 leading-relaxed mb-3">${esc(b.wat)}</p>
      ${
        b.aanbod && b.aanbod.length
          ? `<ul class="text-sm text-gray-700 space-y-1 mb-4">${b.aanbod
              .map((a) => `<li class="flex gap-2"><i class="fas fa-check text-trinitas-green-text mt-1 text-xs" aria-hidden="true"></i><span>${esc(a)}</span></li>`)
              .join('')}</ul>`
          : ''
      }
      ${b.letop ? `<p class="text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-3 flex gap-2"><i class="fas fa-circle-exclamation mt-0.5" aria-hidden="true"></i><span>${esc(b.letop)}</span></p>` : ''}
      ${b.links && b.links.length ? `<div class="flex flex-wrap gap-2 mb-4">${b.links.map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener" class="inline-flex items-center text-xs font-bold text-trinitas-blue bg-blue-50 border border-blue-200 rounded-full px-3 py-1 hover:bg-blue-100">${esc(l.label)}<i class="fas fa-arrow-up-right-from-square text-xs ml-1.5" aria-hidden="true"></i></a>`).join('')}</div>` : ''}
      <div class="flex flex-wrap gap-1.5 mb-3">${stapLabels(b.stappen)}${doelgroepLabels(b.voor)}</div>
      <p class="mt-auto text-xs text-gray-500 flex flex-wrap gap-x-4 gap-y-1">
        <span><i class="fas fa-tag mr-1" aria-hidden="true"></i>${esc(b.kosten || 'Zie website')}</span>
        ${b.gecontroleerd ? `<span><i class="fas fa-circle-check mr-1" aria-hidden="true"></i>Gecontroleerd: ${datum(b.gecontroleerd)}</span>` : ''}
      </p>
    </article>`;

  const vul = (id, items, kaart) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = items.map(kaart).join('');
  };
  vul('lijst-recepten', data.recepten, receptKaart);
  vul('lijst-tools', data.tools, toolKaart);
  vul('lijst-bronnen', data.bronnen, bronKaart);

  // ---------- Kopiëren ----------
  document.querySelectorAll('.copy-btn').forEach((knop) => {
    knop.addEventListener('click', async () => {
      const recept = data.recepten.find((r) => r.id === knop.dataset.recept);
      const tekst = knop.querySelector('span');
      try {
        await navigator.clipboard.writeText(recept.prompt);
        tekst.textContent = 'Gekopieerd!';
      } catch (e) {
        // Valt terug op selecteren, zodat je zelf kunt kopiëren
        const pre = knop.parentElement.querySelector('pre');
        const range = document.createRange();
        range.selectNodeContents(pre);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        tekst.textContent = 'Geselecteerd: druk op Ctrl/Cmd+C';
      }
      setTimeout(() => (tekst.textContent = 'Kopieer recept'), 2500);
    });
  });

  // ---------- Filters en zoeken ----------
  const filter = { stap: 'alle', voor: 'alle', zoek: '' };
  const params = new URLSearchParams(location.search);
  if (STAPPEN[(params.get('stap') || '').toUpperCase()]) filter.stap = params.get('stap').toUpperCase();
  if (DOELGROEP[(params.get('voor') || '').toLowerCase()]) filter.voor = params.get('voor').toLowerCase();
  filter.zoek = (params.get('zoek') || '').trim();

  // Zoeken zonder hoofdletters en accenten: "creeer" vindt ook "creëer"
  const normaal = (t) => t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const items = Array.from(document.querySelectorAll('.toolbox-item'));
  items.forEach((item) => (item.dataset.zoektekst = normaal(item.textContent)));

  const zoekveld = document.getElementById('zoek');
  const zoekStatus = document.getElementById('zoek-status');
  if (zoekveld) zoekveld.value = filter.zoek;

  const toepassen = () => {
    const woorden = normaal(filter.zoek).split(/\s+/).filter(Boolean);
    let totaal = 0;
    items.forEach((item) => {
      const okStap = filter.stap === 'alle' || item.dataset.stappen.split(' ').includes(filter.stap);
      const okVoor = filter.voor === 'alle' || item.dataset.voor.split(' ').includes(filter.voor);
      const okZoek = woorden.every((w) => item.dataset.zoektekst.includes(w));
      item.hidden = !(okStap && okVoor && okZoek);
      if (!item.hidden) totaal++;
    });
    if (zoekStatus) zoekStatus.textContent = woorden.length ? `${totaal} ${totaal === 1 ? 'resultaat' : 'resultaten'} voor "${filter.zoek}"` : '';
    document.querySelectorAll('[data-sectie]').forEach((sectie) => {
      const zichtbaar = sectie.querySelectorAll('.toolbox-item:not([hidden])').length;
      sectie.querySelector('.leeg-melding').hidden = zichtbaar > 0;
      const teller = sectie.querySelector('.teller');
      if (teller) teller.textContent = `(${zichtbaar})`;
    });
    document.querySelectorAll('.filter-chip').forEach((chip) => {
      chip.setAttribute('aria-pressed', String(filter[chip.dataset.filter] === chip.dataset.waarde));
    });
    // Filter in de adresbalk zetten, zodat je een gefilterde link kunt delen
    const p = new URLSearchParams();
    if (filter.stap !== 'alle') p.set('stap', filter.stap);
    if (filter.voor !== 'alle') p.set('voor', filter.voor);
    if (filter.zoek) p.set('zoek', filter.zoek);
    const qs = p.toString();
    history.replaceState(null, '', location.pathname + (qs ? '?' + qs : '') + location.hash);
  };

  document.querySelectorAll('.filter-chip').forEach((chip) =>
    chip.addEventListener('click', () => {
      filter[chip.dataset.filter] = chip.dataset.waarde;
      toepassen();
    })
  );
  if (zoekveld) {
    zoekveld.addEventListener('input', () => {
      filter.zoek = zoekveld.value.trim();
      toepassen();
    });
  }
  toepassen();

  // Direct naar een item springen (bijv. toolbox.html#recept-starr) en het recept openklappen
  if (location.hash) {
    const doel = document.querySelector(location.hash);
    if (doel) {
      doel.hidden = false;
      const details = doel.querySelector('details');
      if (details) details.open = true;
      setTimeout(() => doel.scrollIntoView({ block: 'start' }), 50);
    }
  }
})();
