/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '../../packages/ui/src/components/**/*.{ts,tsx}',
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html',
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {spacing: {
      '35': '5.6rem', 
    },},
  },
  plugins: [],
}

