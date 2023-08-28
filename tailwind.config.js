/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#21967A',
      secondary: '#7E7E7E',
      white: '#FFF',
      black: '#000'
    },
    extend: {
      backgroundImage: {
        'desk': "url('./bg-desk.jpg')",
      }
    },
  },
  plugins: [],
}

