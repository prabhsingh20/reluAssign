/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        "black-1": "#303030",
        "black-2": "#101010",
        "grey-1": "#F3F3F3",
        "grey-2": "#F5F5F5",
        "grey-3": "#00000029",
        "grey-4": "#8D8D8D",
        "grey-5": "#9A9A9E",
        "green-1": "#88C2BB",
        "green-2": "#0EC297",
        pink: "#FF5E8A",
      },
      fontFamily: { parkin: ["Parkinsans", " sans-serif"] },
    },
  },
  plugins: [],
};
