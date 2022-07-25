/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
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
      blue: '#284952',
      gray: '#505050',
      beige: '#EAE5E3',
      gold: '#BF9441',
      lightGold: '#E2C18D',
      brown: '#685A48',
      lightBrown: '#B8AA99',
      uknowkn: '#DAD2CE',
    },
  },
  plugins: [],
};
