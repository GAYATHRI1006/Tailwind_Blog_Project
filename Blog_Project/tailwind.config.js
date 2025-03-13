/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px', // Custom breakpoint for extra small screens
      },

    },
  },
  plugins: [],
}

