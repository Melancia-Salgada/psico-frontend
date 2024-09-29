/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui'],
    },
    colors: {
      'azul': '#018ABE',
      'roxo': '#7B5ABA',
      'cinza': '#D9D9D9',
      'preto-whitemode': '#4D4545',
      'branco-whitemode': '#F1F1F1',
      'preto-darkmode': '#121214',
      'branco-darkmode': '#FFFFFF'
    },
  },
  plugins: [],
}