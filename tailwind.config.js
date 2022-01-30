module.exports = {
  purge: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#16161e",
        darker: "#111117",
        "purple-dark": "#1f0c3c",
      },
      backgroundImage: (theme) => ({
        "header-img": "url('/images/gradient-bg.svg')",
      }),
      fontFamily: {
        beyno: "beyno",
      },
    },
    fontFamily: {
      sans: ["Nunito", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
