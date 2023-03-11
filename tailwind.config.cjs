/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768.02px",
      md: "1060px",
      lg: "1200px",
      xl: "1440px",
      xxl: "1700px"
    },

    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        hoverWhite: "rgba(255, 255, 255, 0.85)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        abel: ["Abel", "sans-serif"]
      }
    },
  },
  plugins: [],
}
