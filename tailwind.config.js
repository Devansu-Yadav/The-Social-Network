/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: {
          light: "#CE80FF",
          DEFAULT: "#9D00FF",
          dark: "#5A0092"
        },
        secondaryColor: {
          light: "#263C7F",
          DEFAULT: "#101935",
          dark: "#080D1B"
        },
        tertiaryColor: {
          light: "#B38CFF",
          DEFAULT: "#8A4FFF",
          dark: "#681DFF"
        },
        accentColor: {
          light: "#FFF199",
          DEFAULT: "#FFE74C",
          dark: "#EDCD00"
        },
        whiteColor: "#F2FDFF"
      }
    },
    fontFamily: {
      sans: ['Lato', 'Poppins', 'sans-serif'],
      serif: ['Playfair Display', 'serif']
    }
  },
  plugins: [],
}
