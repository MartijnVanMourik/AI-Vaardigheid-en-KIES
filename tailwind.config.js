/** Tailwind scant alle HTML-pagina's én de scripts (die ook HTML opbouwen) op gebruikte classes. */
module.exports = {
  content: ['./*.html', './assets/js/**/*.js'],
  theme: {
    extend: {
      colors: {
        trinitas: {
          blue: '#004d91',
          'light-blue': '#0072bc',
          green: '#8cc63f',
          // donkerdere tinten voor groene tekst op een lichte achtergrond (leesbaarheid)
          'green-text': '#4a7a16',
          'green-large': '#5f9324',
        },
      },
    },
  },
  plugins: [],
};
