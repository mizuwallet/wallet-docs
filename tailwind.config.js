/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./theme.config.tsx",
  ],
  theme: {
    spacing: {
      "fill-body": "calc(100vh - 229px)",
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
