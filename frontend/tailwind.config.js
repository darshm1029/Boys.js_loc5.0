/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        "poppins": "'Poppins'",
      },
      colors:{
        purple: "#5000ca",
        light: "#0099ff",
        dark: "#000b76",
        teal: "#3795BD"
      },
    },
  },
  plugins: [],
}