/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'Csm': '520px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'Clg': '1100px',
      // => @media (min-width: 1100px) { ... }

      'Cmd': '900px',
      // => @media (min-width: 900px) { ... }

      'ClgTwo': '900px',
      // => @media (min-width: 900px) { ... }

      'lg': '900px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }


      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
});