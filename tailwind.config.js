/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        boxShadow: {
          myShadow: "0 0 4px rgba(0, 0, 0, 0.25)"
        }
      }
    },
    plugins: [],
    darkMode: 'class'
  }