module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern-desktop': "url('/src/images/bg-intro-desktop.svg')",
        'hero-pattern-mobile': "url('/src/images/bg-intro-mobile.svg')",
      },
      fontFamily: {
        public: "'Public Sans', sans-serif"
      },
      colors: {
        "lime-green": "hsl(136, 65%, 51%)",
        "bright-cyan": "hsl(192, 70%, 51%)",
        "grayish-blue": "hsl(233, 8%, 62%)",
        "light-grayish-blue": "hsl(220, 16%, 96%)",
        "off-white": "hsl(0, 0%, 92%)",
        "shifted-white": "hsl(0, 0%, 97%)",
        "dark-blue": "hsl(233, 26%, 24%)"
      }
    },
    container: {
      padding: "1rem",
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px"
      }
    }
  },
  plugins: [],
}