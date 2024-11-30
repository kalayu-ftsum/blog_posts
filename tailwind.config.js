/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Merriweather', 'serif'],
        'sans': ['Jaldi', 'sans-serif']
      },
      colors: {
        primary: '#B7C177',
        bodyColor: '#222222',
      }
    },
  },

  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html : { color: theme("colors.bodyColor") },
      });
    })
  ]
}