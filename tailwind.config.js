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
        beige: '#D0BCA3',
        lightBeige: '#F3EBD7',
        darkBeige: '#D6C1A7',
        darkGray: '#6C7A79',
        darkBrown: '#2A1F2D',
        darkPurple: '#2A1F2D',
        darkGreen: '#558C82',
      },
      keyframes: {
        scrollRight: {
          'from': { transform: 'translateX(0%)' },
          'to': { transform: 'translateX(-50%)' },
        },
        scrollLeft: {
          'from': { transform: 'translateX(-50%)' },
          'to': { transform: 'translateX(0%)' },
        },
        subtleMove: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(5px, -5px)" },
          "100%": { transform: "translate(0, 0)" },
        },
      },
      animation: {
        scrollRight: 'scrollRight 30s linear infinite',
        scrollLeft: 'scrollLeft 30s linear infinite',
        subtleMove: "subtleMove 3s infinite ease-in-out alternate",
      },
    },
  },
  plugins: [],
};