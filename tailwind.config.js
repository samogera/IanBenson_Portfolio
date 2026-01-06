/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "!./src/data.js",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                text: '#f3f4f6',
                accent: '#3b82f6',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                header: ['Oswald', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
