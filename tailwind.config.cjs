/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: {
          DEFAULT: "#4FC193",
          50: "#D7F1E6",
          100: "#C8ECDD",
          200: "#AAE1CB",
          300: "#8BD6B8",
          400: "#6DCCA6",
          500: "#4FC193",
          600: "#38A076",
          700: "#2A7657",
          800: "#1B4D39",
          900: "#133527",
        },
      },
    },
  },
  plugins: [],
};
