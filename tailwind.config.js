import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}', './src/components/**/*.{js,jsx}', './app/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        '3/2': '3 / 2',
        '16/10': '16 / 10',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-12px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-down': {
          '0%': {
            transform: 'translateY(-100%)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-down': 'slide-down 0.5s ease-out',
      },
      height: {
        128: '32rem',
      },
    },
    colors: {
      border: 'hsl(var(--border))',
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
      white: colors.white,
      amber: colors.amber,
      red: colors.red,
      emerald: colors.emerald,
    },
  },
  plugins: [],
  important: true,
}
