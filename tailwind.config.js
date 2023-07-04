/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors:{
        "pale-blue":"hsl(243, 100%, 93%)",
        "gray-blue":"hsl(229, 7%, 55%)",
        "light-blue":"hsl(228, 56%, 26%)",
        "dark-blue":"hsl(229, 57%, 11%)"
      },
      fontFamily:{
        "base-font":['Raleway', 'sans-serif']
      },
      backgroundImage:{
        "desktop":"url('../images/bg-desktop.png')",
        "mobile":"url('../images/bg-mobile.png')",
        "gradient":"linear-gradient(to right, rgba(255, 163, 153, 1), rgba(255, 77, 151, 1))"
      },

    },
  },
  plugins: [],
}