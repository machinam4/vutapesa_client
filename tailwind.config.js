/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        body: "#2e1065",
        background: "#3b0764",
        primary: "#FF8F00",
        secondary: "#26355D",
        danger: "#b91c1c",
        info: "#1d4ed8",
        neon: "#06D001"
      }
    },
  },
  plugins: [],
}

