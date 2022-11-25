/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./day24/**/*.{html,js}"],
  theme: {
    screens: {
      // "xs": "350px",
      // "sm": "500px",
      "md": "768px",
      "lg": "992px",
      "xl": "1200px",
      "2xl": "1536px",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        // sm: "2rem",
        md: "2rem",
        lg: "1.5rem",
        xl: "4rem",
        "2xl": "5rem",
      },
      center: true,
    },
    extend: {
      backgroundImage: {
        galaxy: "url('../day24/images/galaxy.gif')"
      },
      textShadow: {
        heading: "2px 1.5px 0px rgb(200 200 200 / 56%)"
      },
      fontFamily: {
        montserrat: ["'Montserrat'", "sans-serif"]
      },
      spacing: {
        mainMob: "calc(100vh - 168px)",
        main: "calc(100vh - 176px)"
      }
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
