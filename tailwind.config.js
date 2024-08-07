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
      },
      animation: {
        flickering: "flickering 1s linear infinite",
      },
    },
  },
  plugins: [],
};
