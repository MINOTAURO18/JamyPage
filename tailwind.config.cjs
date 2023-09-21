/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        "8vh": "8vh",
      },
      padding: {
        "8%": "8%",
      },
    },
  },
  plugins: [],
};
