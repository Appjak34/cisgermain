/** @type {import('tailwindcss').Config} */
const percentageWidth = require('tailwindcss-percentage-width'); // load the plugin

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"

  ],

  theme: {

    colors: {
      primary: '#1468BE',
      secondary: '#93C8FD',
      'red-logo': '#ec534e',
    },
    extend: {
      important: true,
      backgroundImage: {
        'portada': "url('assets/imgs/portada.png')",
        'portada-mobile': "url('assets/imgs/portada_mobile.jpeg')",
        'p-1': "url('assets/imgs/p-1.jpeg')",
        'img-conta': "url('assets/imgs/conta.jpeg')",
        'img-edu': "url('assets/imgs/edu.jpeg')",
        'img-pos': "url('assets/imgs/pos.jpeg')",
        'img-contact': "url('assets/imgs/contact.jpeg')",
      },
    },
    fontFamily: {
      'masque': ['Masque', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'geometry': ['Geometry', 'sans-serif'],
    },
  },
  plugins: [
    percentageWidth,
    require('flowbite/plugin')
  ],
}
