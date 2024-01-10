module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary": "#ECFDEC",
        "secondary": "#7FE05D",
        "accent": "#7EBDC3",
        "dark": "#7A6263",
        "highlight": "#CED097"
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

