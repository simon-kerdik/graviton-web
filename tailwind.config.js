const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "graviton-blue": "#0c8ed1",
      },
      fontSize: {
        "7xl": "5rem",
      },
      minHeight: {
        "1/2-screen": "50vh",
      },
    },
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {},
  plugins: [],
}
