/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        50: "50%",
      },
      padding: {
        25: "105px",
        23: "88px",
      },
    },
  },
  plugins: [],
};
