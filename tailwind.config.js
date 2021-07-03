module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif",
      },
      backgroundImage: (theme) => ({
        preloader: "url('/Assets/preloader.gif')",
      }),
      flex: {
        2: "2 1 0%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
