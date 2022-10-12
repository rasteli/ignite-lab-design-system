/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx", "index.html"],
  theme: {
    fontSize: {
      xs: "0.875rem",
      sm: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem"
    },
    colors: {
      transparent: "transparent",
      black: "#000000",
      gray: {
        900: "#121214",
        800: "#202024",
        400: "#7C7C8A",
        200: "#C4C4CC",
        100: "#E1E1E6"
      },
      cyan: {
        500: "#81D8F7",
        300: "#B5E8FA"
      }
    },
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif"
      }
    }
  },
  plugins: []
}
