/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        curve: ['"Afacad Flux"', 'sans-serif' ],
        titl: ['"Comic Neue"', 'cursive' ],
        Prodtit: ['"Amaranth"', 'sans-serif' ], 
        forpop: ['"Poppins"', 'sans-serif' ],
        headfon:['"Waterfall"','system-ui'] 
      }
    },
    },
  plugins: [],
}

// <!--  font-family: "Waterfall", system-ui;
//   font-weight: 400;
//   font-style: normal; -->
//   <!-- .waterfall-regular {
//   font-family: "Waterfall", cursive;
//   font-weight: 400;
//   font-style: normal;
// }
//  -->