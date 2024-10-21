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

      //.Rectangle-121 {  width: 205px;  height: 58.7px;  margin: 61px 337px 64.3px 338px;  padding: 0 0 6.7px;  border-radius: 85px;  border: solid 4px #018abe;}
      fontSize: {
        'label': '1.625rem'
      },
      padding: {
        'inputPad': "0.7rem"

      },
      borderRadius: {
        'borderr': '50px',
        'btnRadius':'85px'
      },
      borderWidth: {
        'borderw': '3px',
        'btnBorder': 'solid 4px #018abe'
      },
      borderColor: {
        'inputColor': '#D9D9D9'
      },
      margin: {
        'pat': '92px',
        'page-rigth': '90px'
      },
      width: {
        'inputW': '54.938rem',
        'btnW':'205px'

      },
      height: {
        'inputH': '3.313rem',
        'btnH':'58.7px'
      },
      screens: {
        'moveis': {'max': '850px'}
      }
    
    },


  },
  plugins: [],
}