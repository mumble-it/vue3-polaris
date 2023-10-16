/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{js,vue}'],
  theme: {
    extend: {
      colors: {
        'font': '#303030',
        'primary': {
          DEFAULT: '#303030',
          "500": '#303030',
          "600": '#1a1a1a'
        },
        'success': '#0c5132',
        'critical': '#8e1f0b',
        'caution': '#4f4700',
        'subdued': '#616161',
        'surface': '#ffffff',
        'surface-hover': '#f7f7f7',
        'text-inverse': '#e3e3e3',
        'emphasis': {
          DEFAULT: '#005bd3',
          '500': '#005bd3',
          '600': '#004299',
        },
      },
      fontSize: {
        sm: '0.75rem',
        base: '0.8125rem',
        lg: '0.875rem',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
};