/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      gray: colors.stone,
      black: colors.black,
      white: colors.white,
      green: colors.lime,
    },
    extend: {
      fontFamily: {
        calluna: ['CallunaSans', ...defaultTheme.fontFamily.sans],
      },
      flex: {
        2: '2 2 0%',
      },
    },
  },
  plugins: [
    require('tailwindcss-hyphens'),
    plugin(({ addUtilities }) => {
      addUtilities({
        '.all-small-caps': {
          'font-variant-caps': 'all-small-caps',
        },
      });
    }),
    plugin(({ addVariant }) => {
      addVariant('children', '&>*');
    }),
  ],
};
