export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: '#FF8000',
        lightGray: '#F7F7F7',
        lightBlack: '#353839'
      },
      fontSize: {
        '2lg': '1.188rem',
      },
      fontFamily: {
        main: ['Roboto', 'sans-serif'],
      },
      transitionDuration: {
        '450': '450ms',
      }
    },
  },
  plugins: [],
};
