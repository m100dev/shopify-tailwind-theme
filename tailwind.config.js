/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/*.{liquid, json}",
    "./layout/*.{liquid, json}",
    "./sections/*.{liquid, json}",
    "./snippets/*.{liquid, json}",
    "./templates/*.{liquid, json}",
    "./templates/customers/*.{liquid, json}"
  ],
  theme: {
    extend: {
      height: {
        '94': '22rem'
      }
    },
  },
  plugins: [],
}
