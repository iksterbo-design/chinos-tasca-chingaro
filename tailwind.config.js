module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        chino: { 900: "#0a0a0a", 800: "#141414" },
        chili: { 500: "#e63946", 600: "#c1121f" },
        gold: { 400: "#f4a261", 500: "#e9c46a" },
        jade: { 500: "#2a9d8f" }
      },
      fontFamily: { display: ["Bebas Neue", "sans-serif"] }
    }
  },
  plugins: []
};
