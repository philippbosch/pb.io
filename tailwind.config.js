const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
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
    },
  },
  plugins: [require('tailwindcss-hyphens')],
};
