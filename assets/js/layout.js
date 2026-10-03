/*
 * Gedeelde menubalk en voettekst voor alle pagina's.
 * Pas hier het menu, de voettekst of de datum "laatst bijgewerkt" aan; dat geldt dan voor de hele site.
 * Een pagina gebruikt dit met:  <header id="site-header"></header> ... <footer id="site-footer"></footer>
 *                               <script src="assets/js/layout.js"></script>
 */
(function () {
  const LAATST_BIJGEWERKT = '3 oktober 2026';

  const MENU = [
    { label: 'Home', href: 'index.html', page: 'index.html' },
    { label: 'KIES-model', href: 'index.html#kies' },
    { label: 'Leerlingen', href: 'kies-leerlingen.html', page: 'kies-leerlingen.html' },
    { label: 'Docenten', href: 'kies-docenten.html', page: 'kies-docenten.html' },
    { label: 'Toolbox & bronnen', href: 'toolbox.html', page: 'toolbox.html' },
    { label: 'Spelregels', href: 'index.html#spelregels' },
  ];

  const huidigePagina = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const actief = (item) => (item.page && item.page === huidigePagina ? ' aria-current="page"' : '');

  const header = document.getElementById('site-header');
  if (header) {
    header.className = 'sticky top-0 z-50 bg-white shadow-md border-b-4 border-trinitas-green';
    header.innerHTML = `
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20" aria-label="Hoofdmenu">
        <a href="index.html" class="logo-blob flex items-center gap-3 -mt-4 shrink-0" aria-label="AI-vaardigheid Hub, naar de homepage">
          <img src="assets/logo-hf.svg" alt="Han Fortmann" class="h-10">
          <span class="flex flex-col justify-center leading-tight">
            <span class="text-gray-500 font-bold text-xs uppercase tracking-tight">AI-vaardigheid</span>
            <span class="text-gray-500 font-black text-xs uppercase tracking-tight">Hub</span>
          </span>
        </a>
        <div class="hidden lg:flex items-center gap-6 font-semibold">
          ${MENU.map((m) => `<a href="${m.href}" class="nav-link text-trinitas-blue text-sm uppercase whitespace-nowrap"${actief(m)}>${m.label}</a>`).join('')}
        </div>
        <button id="mobile-menu-button" type="button" aria-expanded="false" aria-controls="mobile-menu"
          class="lg:hidden bg-trinitas-blue text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-bold shadow-md hover:bg-blue-800 transition">
          <i class="fas fa-bars" aria-hidden="true"></i><span>Menu</span>
        </button>
      </nav>
      <div id="mobile-menu" class="hidden lg:hidden bg-white px-4 pt-2 pb-6 border-t">
        ${MENU.map((m) => `<a href="${m.href}" class="nav-link block py-2 text-trinitas-blue font-semibold"${actief(m)}>${m.label}</a>`).join('')}
      </div>`;

    const knop = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    knop.addEventListener('click', () => {
      const open = menu.classList.toggle('hidden') === false;
      knop.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => {
        menu.classList.add('hidden');
        knop.setAttribute('aria-expanded', 'false');
      })
    );
  }

  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.className = 'bg-gray-100 py-12 border-t border-gray-200';
    footer.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="text-trinitas-blue font-bold mb-2">Trinitas College | Han Fortmann</p>
        <p class="text-gray-600 text-xs mb-4">Ontwikkeld door de sectie Informatica &amp; AI-werkgroep</p>
        <p class="text-gray-600 text-xs mb-6 max-w-2xl mx-auto leading-relaxed">
          Het KIES-model is ontwikkeld door Marcel Mutsaarts van
          <a href="https://aivoordocenten.nl/" target="_blank" rel="noopener" class="text-trinitas-blue underline hover:text-trinitas-green-text">AI voor Docenten</a>,
          gebaseerd op het internationale AI Fluency-raamwerk. Het model werd besproken in de podcast
          <a href="https://aivoordocenten.nl/ai-tussenuurtje/" target="_blank" rel="noopener" class="text-trinitas-blue underline hover:text-trinitas-green-text">Het AI-tussenuurtje</a>
          (S02E26: AI-verrijking versus AI-verarming in het onderwijs).
        </p>
        <div class="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-6">
          <a href="assets/kies-overzicht.pdf" target="_blank" rel="noopener" class="inline-flex items-center text-trinitas-blue hover:text-trinitas-green-text font-medium">
            <i class="fas fa-file-pdf mr-2 text-red-600" aria-hidden="true"></i>KIES-overzicht om te printen (PDF)
          </a>
          <a href="toolbox.html" class="inline-flex items-center text-trinitas-blue hover:text-trinitas-green-text font-medium">
            <i class="fas fa-toolbox mr-2" aria-hidden="true"></i>Toolbox &amp; bronnen
          </a>
        </div>
        <p class="text-gray-500 text-xs">Laatst bijgewerkt: ${LAATST_BIJGEWERKT}</p>
      </div>`;
  }
})();
