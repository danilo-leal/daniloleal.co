module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        tiny: '10px',
      },
      colors: {
        blackish: '#121212',
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
