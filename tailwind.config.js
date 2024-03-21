/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Mukta', 'sans-serif']
      },
      colors: {
        primary: {
          grey: '#D9D9D9',
          greenDark: '#20261E',
          green: '#6D776E',
          creampie: '#D0C5BF',
          greenWhite: '#A6ACAA',
          black: '#242424',
        }
      }
    },
  },
  plugins: [],
}

