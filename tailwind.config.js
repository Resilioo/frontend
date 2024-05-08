/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      // 10px
      xxs: '0.625rem',
      // 12px
      xs: '0.75rem',
      // 14px
      sm: '0.875rem',
      // 16px
      base: '1rem',
      // 18px
      lg: '1.125rem',
      // 20px
      xl: '1.25rem',
      // 27px
      '1xl': '1.5rem',
      // 27px
      '2xl': '1.688rem',

      //30rem
      '2.5xl': '1.875rem',

      // 32px
      '3xl': '2rem',

      // 32px
      '4xl': '2.25rem',

      // 42px
      '4.5xl': '2.625rem',

      //49px
      '5xl': '3.063rem',

      //55px
      '6xl': '3.38rem',

      // 60px
      '7xl': '3.75rem',

      // 92px
      '10xl': '5.75rem',
    },
    animation: {
      'fade-in': 'fade-in 0.5s ease-out',
      'fade-up': 'fade-up 0.5s ease-out',
      spin: 'spin 1s linear infinite',
    },
    keyframes: {
      'fade-in': {
        '0%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
        },
      },
      'fade-up': {
        '0%': {
          opacity: '0',
          transform: 'translateY(40px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },

      spin: {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        secondary: 'var(--color-secondary)',
        'secondary-hover': 'var(--color-secondary-hover)',
        'secondary-600': 'var(--color-secondary-600)',
        'secondary-500': 'var(--color-secondary-500)',
        'secondary-400': 'var(--color-secondary-400)',
        'secondary-300': 'var(--color-secondary-300)',
        'secondary-100': 'var(--color-secondary-100)',
        darkgray: 'var(--color-darkgray)',
        'gray-100': 'var(--color-gray-100)',
        'gray-300': 'var(--color-gray-300)',
        'gray-200': 'var(--color-gray-200)',
        'gray-250': 'var(--color-gray-250)',
        'gray-400': 'var(--color-gray-400)',
        success: 'var(--color-success)',
        danger: 'var(--color-danger)',
        'orange-400': 'var(--color-orange-400)',
      },
      fontFamily: {
        poppins: 'Poppins',
        mont: 'Montserrat',
        barlow: 'Barlow',
        bals: 'Balsamiq Sans',
        kalam: 'Kalam',
      },
      screens: {
        xsm: '375px',
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1600px',
        '3.5xl': '1680px',
        '4xl': '1920px',
      },
      boxShadow: {
        primary: '0px 0px 15px var(--color-primary)',
      },
      spacing: {
        0.25: '0.063rem',
        0.5: '0.125rem',
        15: '3.75rem',
        18: '4.5rem',
        30: '7.5rem',
        50: '12.5rem',
        75: '23rem',
        120: '30rem',
      },
      lineHeight: {
        15: '3.8rem',
      },
      height: {
        26: '6.5rem',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [
    plugin(({ addVariant, addUtilities }) => {
      addVariant('select-svg', ['&>div>span>svg>path']),
        addUtilities({
          '.flex-centered': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '.centered-xy': {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
          '.container-max': {
            maxWidth: 1920,
            margin: 'auto',
          },
        });
    }),
  ],
};
