module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.scss"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'main-span': '72px'
      },
      colors: {
        'primary': '#4f3cc9',
        'parimary-dark': '#4232aa',
        'secondary': '#ffffff',
        'fb-bg': '#18191a',
        'fb-header': '#242526',
        'fb-input': '#3a3b3c',
        'fb-popover': '#3e4042',
        'fb-active': '#323436',
        'fb-card': '#242526',
        'fb': '#2e89ff',
        'ecommerce-primary': '#FA592F'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // see more about @tailwindcss/forms https://github.com/tailwindlabs/tailwindcss-forms
    require("@tailwindcss/forms")({
      strategy: 'class',
    })
  ],
}
