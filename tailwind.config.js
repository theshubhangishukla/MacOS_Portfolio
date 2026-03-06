/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        georama: ["Georama", "sans-serif"],
        roboto: ["Roboto Mono", "monospace"],
      },
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
}