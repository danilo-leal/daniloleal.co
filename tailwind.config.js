const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Rubik"],
    },
    extend: {
      fontSize: {
        tiny: "10px",
        code: "12px",
        regular: "15px",
      },
      colors: {
        black: "#131319",
        blackish: "#18181b",
        draplin: "#e57928",
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
