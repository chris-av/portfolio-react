/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./design-system/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#434179",
          deep: "#24223f",
          light: "#8f8ce0",
        },
        white: {
          DEFAULT: "#e9e9e9",
        },
        green: {
          DEFAULT: "#13C253",
        },
      }
    },
  },
  plugins: [],
}
