/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        "poppins": "'Poppins'",
      },
      colors:{
        darkPurple: "#3A1078",
        purple: "#4E31AA",
        lightPurple: "#2F58CD",
        teal: "#3795BD"
      },
    },
  },
  plugins: [],
}