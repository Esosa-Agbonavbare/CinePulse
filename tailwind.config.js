/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'maven-pro': ['Maven Pro', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
      backgroundImage: {
        'starry-night': "url('/src/assets/background/starrynight.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

