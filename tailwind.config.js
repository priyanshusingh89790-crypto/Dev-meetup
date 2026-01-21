export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['Lato', 'system-ui', 'sans-serif'],
        sans: ['system-ui', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(var(--primary))',
        
      },
    },
  },
  plugins: [],
}
