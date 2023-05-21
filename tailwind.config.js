/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                Roboto: ["Roboto", "sans-serif"],
            },
            backgroundImage: {
                "header-background": "linear-gradient(to right bottom,rgba(24, 57, 110,0.6),transparent)"
            },
            height: {
                'h-75': "19rem"
            }
        },
    },
    plugins: [],
}