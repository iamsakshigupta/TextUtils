/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ] ,
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        'dark-background': '#252B48',
      },
      'my-custom-class': 'dark-mode',
      
      
    },
  },
  plugins: [],
}

