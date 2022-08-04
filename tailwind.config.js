/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      width: {
        '100': '481px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
