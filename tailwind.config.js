module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
       'rick': "url('public/images/bg-next.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '60%': '80%',
      '16': '4rem',
    }
  }
}

module.exports = {
  theme: {
    extend: {
      colors: {
        'purple': '#6c1c76',
        'homebg-light': '#b4e0eb',
        'homebg-dark': '#111828',
        'card-bg': '#202938',
      },
      height: {
        'xx': '450px',
        '400': '400px',
      },
      fontFamily: {
        teste: 'Anton',
      },
      margin:{
        18: '4.5rem'
      }
    }
  }
}
