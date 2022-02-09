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
        'main-background-left': '#84284D',
        'main-background-right': '#592B73',
        green: {
          '1000': '#0ed145'
        },
        blue: {
          'button-primary': '#B44BF0',
          'button-secondary-left': '#0228A6',
          'button-secondary-right': '#00849E',
        },
        'button-secondary-left': '#0228A6',
        'button-secondary-right': '#00849E',
        'button-card': '#631D76',
        'card-left': '#8A5F9D',
        'card-right': '#200B2A'
      },
      width: {
        '68': '17rem',
      },
      height: {
        'xx': '450px',
        'xl': '408px',
        '400': '400px',
        '9/11': '86%',
        'half': '50vh',
      },
      fontFamily: {
        teste: 'Anton',
      },
      margin:{
        18: '4.5rem',
        '22': '6.5rem',
        'calc': 'calc(33% - 16.5%)'
      },
      padding:{
        50: '12.1rem'
      },
    }
  }
}
