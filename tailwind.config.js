/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'black': '#000000',
      'dark-background': '#100e0c',
      'white-background': '#EFF1F3',
      'white-section': '#FEFEFE',
      'white-text': '#F2F2F2',
      'green': '#4AA82D',
      'pink': '#ff49db',
      'orange': '#F56A00',
      'light-blue': '#3DC7FF',
      'blue': '#0073E6',
      'dark-blue': '#00005C',
      'light-purple': '#9747FF',
      'dark-purple': '#663894',
    },
    fontFamily: {
      regular: ['Biennale', 'regular'],
      medium: ['Biennale', 'medium'],
      bold: ['Biennale', 'bold'],
    },
    extend: {
      // spacing: {
      //   '8xl': '96rem',
      //   '9xl': '128rem',
      // },
      // borderRadius: {
      //   '4xl': '2rem',
      // }
    }
  },
  plugins: [],
};
