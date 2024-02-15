/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6C2A80",
        primaryDark: "#5a206b",
        grayDefault: "#918893",
        grayDark: "#E5E5E5",
        secondary: "#F4F4F4",
        black: "#4F4F4F",
      },
    },
    fontFamily: {
      sans: ["IBM Plex Sans Arabic", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
