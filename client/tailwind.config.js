/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        backgroundGreen: "#33914C",
        customGray: "#ececec",
      },
      fontSize: {
        hmix: "1.35rem",
      },
      margin: {
        "10vh": "10vh",
      },
      width: {
        86: "86%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
