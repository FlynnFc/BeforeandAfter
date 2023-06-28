/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["night"],
  },
  theme: {
    extend: {
      colors: {
        glassbg: "rgba(28, 22, 47, .4)",
      },
    },
  },
  plugins: [require("daisyui")],
};
