module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#16161e",
        darker: "#0f0f15",
      },
      backgroundImage: (theme) => ({
        "header-img": "url('/images/gradient-bg.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
