module.exports = {
    purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'dark': '#020206',
            },
            backgroundImage: theme => ({
                'header-img': "url('/images/gradient-bg.svg')",
            })
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
