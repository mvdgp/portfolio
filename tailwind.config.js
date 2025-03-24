module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,scss}',
  ],
  theme: {
    extend: {
      colors: {
        'white-primary': '#F5F5F5',
        'white-secondary': '#FFFFFF',
        'black-primary': '#121212',
        'black-secondary': '#181818',
      },
      fonts: {
        'main-font': ['Poppins', 'sans-serif'],
      },
      animation: {
        driftDown: 'driftDown 45s linear infinite',
      },
      keyframes: {
        driftDown: {
          '0%': { objectPosition: 'center' },
          '100%': { objectPosition: 'bottom' },
        },
      },
    },
  },
  plugins: [],
}