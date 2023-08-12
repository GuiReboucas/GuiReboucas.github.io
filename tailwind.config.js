/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: process.env.HUGO_ENVIRONMENT === "production",
  content: ['./layouts/**/*.html', './content/**/*.md', './content/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}