/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        boxShadow: {
          'custom': '10px 0px 30px rgba(75, 0, 130, 0.6)',
        },
      },
    },
    plugins: [],
  };