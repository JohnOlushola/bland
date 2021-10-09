module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grey: "#3a3d3b",
        "grey-light": "#444543",
        "grey-lighter": "#5f605f",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
