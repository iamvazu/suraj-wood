import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#E63946',
                    hover: '#D62828'
                },
                suraj: {
                    secondary: '#457B9D',
                    accent: '#1D3557',
                }
            },
            fontFamily: {
                inter: ['var(--font-inter)'],
                playfair: ['var(--font-playfair)'],
            },
            spacing: {
                'xs': '4px',
                'sm': '8px',
                'md': '16px',
                'lg': '24px',
                'xl': '40px',
                '2xl': '64px',
                '3xl': '104px',
                '4xl': '168px',
            }
        },
    },
    plugins: [],
}
export default config
