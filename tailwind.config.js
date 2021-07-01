module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: ['./index.html'],
  mode: 'jit',
  theme: {
    extend: {
      fontSize: {
        '2xs': '0.65rem'
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
  // purge: {
  //   // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
  //   enabled: process.env.NODE_ENV === 'production',
  //   content: [
  //     'index.html'
  //   ]
  // }
}
