export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: '#FF8000',
        lightGray: '#F7F7F7',
        lightBlack: '#353839',
        steelGray: '#37383C',
        nightShade: '#22242A',
        stormGray: '#6B6D70',
        snow: '#F5F5F5',
        utOrange: '#FF8200'
      },
      fontSize: {
        '2lg': '1.188rem',
      },
      fontFamily: {
        main: ['Roboto', 'sans-serif'],
        headings: ['Montserrat', 'sans-serif']
      },
      transitionDuration: {
        '450': '450ms',
      },
      backgroundImage: {
        'orangeGradient': 'linear-gradient(to right, #f74c06, #f9bc2c)',
      },

    },
  },
  plugins: [],
};
