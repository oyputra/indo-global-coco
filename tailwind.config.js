module.exports = {
  content: ["./dist/*.html"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        inter: "'Inter', sans-serif"
      },
      colors: {
        'coco' : '#370000'
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
        '11': '1.5',
      }
    },
  },
  plugins: [],
}
