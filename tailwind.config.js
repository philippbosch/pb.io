/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
        calluna: ["CallunaSans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
