/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Pink: "#FE3796",
        Black: "#121212",
        White: "#F5F7FA",
        Green: "#52D377",
        Yellow: "#FA9A2A",
        Red: "#EE3232",
        Black1: "#1C1D21",
        Black2: "#1B1B1B",
      },

      fontFamily: {
        "Jakarta-Sans": ["Plus Jakarta Sans"],
      },
      rotate: {
        4: "-4deg",
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};
