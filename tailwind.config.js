/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#f97316', // orange-500
                'primary-dark': '#ea580c', // orange-600
                'primary-light': '#fb923c', // orange-400
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            spacing: {
                '128': '32rem',
            },
            height: {
                '128': '32rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}