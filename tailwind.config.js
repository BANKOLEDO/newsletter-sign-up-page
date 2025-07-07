/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(4, 100%, 67%)',       // Red
        blue: {
          800: 'hsl(234, 29%, 20%)',        // Dark Blue
          700: 'hsl(235, 18%, 26%)',        // Medium Blue
        },
        gray: {
          DEFAULT: 'hsl(0, 0%, 58%)',       // Neutral Gray
        },
        white: 'hsl(0, 0%, 100%)',           // White
      },
    },
  },
  plugins: [],
}

