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
        'special': 'rgba(0, 0, 0, .4)',
        blue: {
          'comeco': '#8257E6',
          'meio': '#663A9B',
          'fim': '#451744'
        },
        green: {
          '1000': '#0ed145'
        }
      },
      width: {
        '68': '17rem',
      },
      height: {
        'xx': '450px',
        '400': '400px',
        '9/11': '86%'
      },
      fontFamily: {
        teste: 'Anton',
      },
      margin:{
        18: '4.5rem'
      },
      padding:{
        50: '12.1rem'
      },
      keyframes: {
        teste: {
          '0%': { background: '#FFF' },
          '100%': { background: '#000' },
        },
      },
      animation: {
        teste: 'teste 2s infinite',
      },
    }
  }
}
