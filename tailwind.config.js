/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 다크 모드 활성화
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        basic: '#172b4d',
      },
      boxShadow: {
        myShadow: '0 0 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};