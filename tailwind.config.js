/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "rubik": ['Rubik', 'sans-serif']
      },
      colors: {
        lightBeige: '#F3EBD7',
        darkBeige: '#D6C1A7',
        darkGray: '#6C7A79',
        darkBrown: '#2A1F2D',
        darkPurple: '#2A1F2D',
        darkGreen: '#558C82',
      },
    },
  },
  plugins: [],
};