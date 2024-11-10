/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#11151A',  // Dark background color
        secondary: '#A5CBD8', // Light blue
        tertiary: '#B6A8C8',   // Light purple
        accent: '#8EA88A',     // Greenish color
        white: '#FFFFFF',      // White color
        black: '#000000',
      },
    },
  },
  plugins: [],
}
