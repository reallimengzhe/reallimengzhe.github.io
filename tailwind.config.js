const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        '3/2': '3 / 2',
        '16/10': '16 / 10',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      klein: {
        50: '#B2C9E7',
        100: '#93B2DA',
        200: '#748CCF',
        300: '#5566C4',
        400: '#3740B9',
        500: '#1F1AAF',
        600: '#002FA7', // main
        700: '#002885',
        800: '#002262',
        900: '#001C40',
        950: '#00161E',
      },
      cyan: {
        50: '#B2FFFF',
        100: '#9DFFFF',
        200: '#88FFFF',
        300: '#73FFFF',
        400: '#5DFFFF',
        500: '#48FFFF',
        600: '#4AFFFF', // main
        700: '#3BCCCC',
        800: '#2C9999',
        900: '#1E6666',
        950: '#0F3333',
      },
      slate: colors.slate,
      black: colors.black,
    },
  },
  plugins: [],
  darkMode: 'class',
  important: true,
}
