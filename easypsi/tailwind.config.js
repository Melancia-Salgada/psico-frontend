/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      fontSize: {
        'label': '1.625rem'
      },
      padding: {
        'inputPad': "0.7rem"

      },
      borderRadius: {
        'borderr': '50px'
      },
      borderWidth: {
        'borderw': '3px'
      },
      borderColor: {
        'inputColor': '#D9D9D9'
      },
      margin: {
        'pat': '92px',
        'page-rigth': '90px'
      },
      width: {
        'inputW': '54.938rem'
      },
      height: {
        'inputH': '3.313'
      }
    }


  },
  plugins: [],
}