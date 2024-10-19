/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      //keyframes are used to implement animation
      //here we are defining new keyframes
      keyframes: {
        shimmer: {
          //move elements 100% to right hand side
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        //find shimmer, take 1.5 s to move element from here to there
        // n do it infinite times
        shimmer: "shimmer 1.5s infinite",
      },
    },
  },
  plugins: [],
};
