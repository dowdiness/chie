module.exports = {
  theme: {
    extend: {}
  },
  variants: {
    fontSize: ['responsive', 'hover'],
  },
  plugins: [
    require('tailwindcss-transitions')(),
    require('@tailwindcss/custom-forms'),
  ]
}
