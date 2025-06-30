// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // Ajoutez d'autres chemins si nécessaire
  ],
  theme: {
    extend: {
      spacing: {
        '25': '6.25rem', // 100px (4 * 16px par défaut = 64px, 6.25 * 16px = 100px)
        '-25': '-6.25rem', // Définir la valeur négative pour -bottom-25
        // Vous pouvez ajuster '6.25rem' selon l'espacement désiré en pixels (1rem = 16px par défaut)
        // Par exemple, si -25px est ce que vous voulez: '25px': '25px', '-25px': '-25px'
      },
      // ... autres extensions
    },
  },
  plugins: [],
}