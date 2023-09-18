/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ] ,
  darkMode: 'class',
  theme: {
    extend: {
      'my-custom-class': 'dark-mode',
      
    },
  },
  plugins: [],
}

