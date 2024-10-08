/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes:{
        typewriter:{
          '0%':{width:'0%'},
          '100%':{width:'100%'},
        },
      },
animation:{
  typewriter:'typewriter 2s linear infinite',
},
colors:{
  bgdeepTurquoise:'#17616E',
  orange:'#FD8916',
  },
  },
  
  },
  plugins: [],
}