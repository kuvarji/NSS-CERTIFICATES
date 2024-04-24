/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      rale: ["Raleway"],
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

