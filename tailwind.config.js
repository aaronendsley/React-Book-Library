/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'Store-Background': "url('/src/assets/bobs-books.jpg')"
      }
    }
  },
  plugins: []
};
