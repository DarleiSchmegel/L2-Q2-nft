/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        blur: 'url(/public/assets/blur-background.png)',
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        cyan: {
          300: '#76decc',
        },
        blue: {
          400: '#514CFF',
          600: '#2A27C9',
        },
        pink: {
          500: '#EA6CBC',
        },
        red: {
          500: '#FB4539',
        },
        gray: {
          100: '#F2F3F6',
          200: '#F1F2F6',
          300: '#DDE0EB',
          500: '#7780A1',
          600: '#262840',
          700: '#060714',
          900: '#09090A',
        },
      },
    },
  },
  plugins: [],
};
