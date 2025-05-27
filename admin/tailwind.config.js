
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        secondary: {
          light: '#f3f4f6',
          dark: '#2d2d2d',
        },
        text: {
          light: '#111827',
          dark: '#f3f4f6',
        }
      },
    },
  },
  plugins: [],
}