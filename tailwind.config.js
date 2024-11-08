/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        card: "2px 2px 10px 0px rgba(151,13,186,0.3)",
      },
    },
  },
  plugins: [],
};
