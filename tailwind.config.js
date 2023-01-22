/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: "#434179",
        },
        white: {
          DEFAULT: "#e9e9e9",
        }
      }
    },
  },
  plugins: [],
}
