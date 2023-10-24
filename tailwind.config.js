/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    content: [],
    theme: {
        extend: {
            colors: {
                'font': '#303030',
                'primary': {
                    DEFAULT: '#303030',
                    "500": '#303030',
                    "600": '#1a1a1a'
                },
                'success': {
                    DEFAULT: '#0c5132',
                    '200': '#cdfee1',
                    '400': '#29845a',
                    '500': '#0c5132',
                    '600': '#136f45',
                },
                'critical': {
                    DEFAULT: '#e51c00',
                    "200": '#fee9e8',
                    "500": '#e51c00',
                    "600": '#b5260b',
                    "700": '#8e1f0b',
                    "800": '#5f1507',
                },
                'warning': {
                    DEFAULT: '#ffb800',
                    "200": '#fff1e3',
                    "500": '#ffb800',
                },
                'caution': {
                    "200": '#fff1e3',
                    "800": '#4f4700',
                },
                'subdued': '#616161',
                'surface': {
                    DEFAULT: '#ffffff',
                    '50': '#ffffff',
                    '100': '#fdfdfd',
                    '200': '#f7f7f7',
                    '300': '#e3e3e3',
                },
                'emphasis': {
                    DEFAULT: '#005bd3',
                    '200': '#f0f2ff',
                    '500': '#005bd3',
                    '600': '#004299',
                },
                'info': {
                    DEFAULT: '#91d0ff',
                    '200': '#eaf4ff',
                    '500': '#91d0ff',
                },
                'disabled': '#b5b5b5',
            },
            screens: {
                'xs': '0px',
                'sm': '490px',
                'md': '768px',
                'lg': '1040px',
                'xl': '1440px',
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
    safelist: [
        {
            pattern: /p-space-/,
            variants: ['xs', 'sm', 'md', 'lg', 'xl'],
        },
        'sr-only'
    ],
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
};