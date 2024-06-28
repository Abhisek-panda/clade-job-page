/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        nav: "0px 4px 4px 0px rgba(217, 217, 217, 0.1)",
      },
      colors: {
        accent: "#DC4A2D",
        primary: "#3D3D3D",
        secondary: "#6E6D6D",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        general: ["General Sans", "sans-serif"],
      },
      lineHeight: {
        default: "27px",
      },
    },
  },
  plugins: [],
};
