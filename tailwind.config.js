/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'blond': '#F0E2B6',  
        'none': '#808080',
        'brown': '#8B4513',
        'black': '#000000',
        'white': '#FFFFFF',
        'grey':'#808080',
      }
    },
  },
  plugins: [],
}

