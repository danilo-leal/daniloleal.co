module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Rubik'],
    },
    extend: {
      fontSize: {
        tiny: '10px',
      },
      colors: {
        black: '#131319',
        blackish: '#18181b',
        draplin: '#e57928',
        lightdraplin: '#ffeddf',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
