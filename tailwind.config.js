/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#64FFDA',
      light: '#C7D2F1',
      grey: '#8892B0',
      darkBlue: '#0A192F',
      lightBlue: '#112240',
    },
    screens: {
      mobile: '320px',
      desktop: '764px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      fira: ['Fira Mono', 'monospace'],
    },
    fontWeight: {
      sm: 400,
      lg: 700,
    },
    extend: {
      letterSpacing: {
        lg: '2px',
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateY(-80%)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateY(-50%)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideContent: {
          '0%': {
            transform: 'translateY(-80%)',
            opacity: '0',
          },
          '50%': {
            transform: 'translateY(-50%)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        nav: 'slide 800ms linear',
        'sub-title': 'slideContent 1s ease-in',
        title: 'slideContent 1100ms ease-in',
        desc: 'slideContent 1200ms ease-in',
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#64FFDA',
          secondary: '#CCD6F6',
          accent: '#3ABFF8',
          neutral: '#191D24',
          'base-100': '#0A192F',
          lightBlue: '#112240',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
          cyan: '#64FFDA',
          light: '#CCD6F6',
          grey: '#8892B0',
        },
      },
      'cupcake',
    ],
  },
  plugins: [require('daisyui')],
};
