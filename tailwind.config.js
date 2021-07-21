module.exports = {
  mode:'jit',
  purge: ['./src/**/*.html', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fixedWhite: '#fff',
      },
      fontFamily: {
        Gilroy: ['Gilroy', 'sans-serif'],
        Chronichle: ['Chronichle\\ Display', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}
