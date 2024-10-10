//@type {import('tailwindcss').Config}
module.exports = {
  content: [ 
    "./index.html",
    "./src/client/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blue': '0x0000ff',
        'white': '0xffffff'
      },
    },
  },
  plugins: [],
}