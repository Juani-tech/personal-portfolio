/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        flickering: {
          "0%, 50%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        tilt: {
          "0%, 50% 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
      },
      animation: {
        flickering: "flickering 1s linear infinite",
        tilt: "tilt 10s infinite linear",
      },
    },
  },
  plugins: [],
};
