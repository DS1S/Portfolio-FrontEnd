const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      textColor: theme => theme('colors'),
      textColor: {
        'primary': '#FFFFFF',
        'secondary': '#000000',
        'danger': '#FF0000',
        'highlight': '#5680E9'
      },
      colors: {
        ...colors,
        'bb': '#5680E9',
        'dg': '#84CEEB',
        'lg': '#5AB9EA',
        'slg': '#C1C8E4',
        'wb': '#8860D0'
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }