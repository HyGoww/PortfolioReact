// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // Fichier HTML
    "./src/**/*.{js,jsx,ts,tsx}", // Fichiers JS, JSX, TS, et TSX dans le dossier src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
