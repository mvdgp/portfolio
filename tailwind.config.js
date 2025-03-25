module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,scss}',
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        'white-primary': '#F5F5F5',
        'white-secondary': '#FFFFFF',
        'black-primary': '#121212',
        'black-secondary': '#181818',
      },
      fonts: {
        'main-font': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}