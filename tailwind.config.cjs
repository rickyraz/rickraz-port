/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["'Sora', sans-serif"],
        inter: ["'Inter', sans-serif"],
      },
    },
  },
  plugins: [],
};
