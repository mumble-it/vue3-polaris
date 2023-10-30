/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    content: [],
    theme: {
        extend: {
            colors: {
                font: '#303030',
                primary: {
                    DEFAULT: '#303030',
                    500: '#303030',
                    600: '#1a1a1a',
                },
                success: {
                    DEFAULT: '#29845a',
                    100: '#cdfee1',
                    400: '#29845a',
                    500: '#136f45',
                    800: '#0c5132',
                },
                critical: {
                    DEFAULT: '#EF4D2F',
                    100: '#fee9e8',
                    300: '#fedad9',
                    400: '#EF4D2F',
                    500: '#e51c00',
                    600: '#b5260b',
                    800: '#8e1f0b',
                    900: '#5f1507',
                },
                warning: {
                    DEFAULT: '#B28400',
                    100: '#fff1e3',
                    200: '#ffd6a4',
                    300: '#ffb800',
                    400: '#B28400',
                    800: '#5e4200',
                },
                caution: {
                    DEFAULT: '#998A00',
                    100: '#fff1e3',
                    200: '#ffef9d',
                    400: '#998A00',
                    800: '#4f4700',
                },
                subdued: '#616161',
                surface: {
                    DEFAULT: '#ffffff',
                    50: '#ffffff',
                    100: '#fdfdfd',
                    200: '#f7f7f7',
                    300: '#e3e3e3',
                    disabled: '#0000000d',
                },
                emphasis: {
                    DEFAULT: '#005bd3',
                    200: '#f0f2ff',
                    400: '#005bd3',
                    600: '#004299',
                },
                info: {
                    DEFAULT: '#0094d5',
                    100: '#eaf4ff',
                    200: '#e0f0ff',
                    300: '#91d0ff',
                    400: '#0094D5',
                    800: '#00527c',
                },
                magic: {
                    DEFAULT: '#8051ff',
                    400: '#8051ff',
                    800: '#5700d1',
                },
                disabled: '#b5b5b5',
            },
            screens: {
                xs: '0px',
                sm: '490px',
                md: '768px',
                lg: '1040px',
                xl: '1440px',
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
        'sr-only',
        'form-checkbox',
    ],
    plugins: [
        require('@tailwindcss/forms')({
            strategy: 'class',
        }),
    ],
}
