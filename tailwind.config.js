/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: ['Pathway Gothic One', 'sans-serif'],
        cursive: ['Alex Brush', 'cursive'],
      },
    },
    colors: {
      darkBlue: '#2A505B',
      blue: '#5B646A',
      gray: '#4E4E4E',
      beige: '#EAE5E3',
      gold: '#B3863C',
      lightGold: '#E2C18D',
      brown: '#685A48',
      lightBrown: '#B8AA99',
      uknowkn: '#DAD2CE',
      dark: '#303030',
    },
  },
  plugins: [],
};
