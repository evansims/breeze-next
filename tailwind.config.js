/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}', './ui/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            sans: [
                'Inter var, sans-serif',
                { fontFeatureSettings: '"cv11", "ss01"' },
            ],
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
