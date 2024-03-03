/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'wp-content/themes/themedir/*.php',
    'wp-content/themes/themedir/layouts/**.php',
    'wp-content/themes/themedir/**/*.{php,js,json,html}',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        '2xl': '0rem'
      }
    },
    fontFamily: {

    },
    fontWeight: {
    },
    transitionDuration: {

    },
    colors: {
      transparent: "transparent",
      inherit: "inherit",
      current: 'currentColor',
      white: '#fff',
      black: '#000',
    },
    extend: {
      transitionTimingFunction: {
        DEFAULT: 'ease-out',
      },
      screens: {
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            strong: {
              color: 'inherit'
            },
            h1: {
              color: 'inherit'
            },
            h2: {
              color: 'inherit'
            },
            h3: {
              color: 'inherit'
            },
            h4: {
              color: 'inherit'
            },
            'li::marker': {
              color: 'inherit'
            }
          }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')({
      className: 'rtc',
    }),
  ],
}

