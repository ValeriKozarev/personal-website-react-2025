/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5fa',
          100: '#e0ebf5',
          200: '#c2d7eb',
          300: '#9abedc',
          400: '#6b9ec9',
          500: '#527eaf',  // Base color
          600: '#436896',
          700: '#37537a',
          800: '#2e4565',
          900: '#293a55',
        },
      },
    },
  },
}
