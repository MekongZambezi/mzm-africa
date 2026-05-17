/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        dark: '#080C14',
        surface: '#0F1520',
        gold: '#C4A04A',
        'gold-light': '#E0CA8E',
        'gold-dim': '#7A6230',
        muted: '#7A8096',
        'muted-2': '#3A4060',
        forest: '#1A3D28',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}