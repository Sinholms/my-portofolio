import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        nb: {
          bg: '#FFF5EB',
          surface: '#FFFFFF',
          accent: '#FF6B2C',
          'accent-2': '#00C9A7',
          'accent-3': '#FF2E6C',
          'accent-4': '#7B2FF7',
          'accent-5': '#FFB800',
          border: '#1a1a1a',
          shadow: '#1a1a1a',
          text: '#1a1a1a',
          muted: '#404040',
          cream: '#FFE8D0',
          dark: '#141428',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      boxShadow: {
        nb: '6px 6px 0px #1a1a1a',
        'nb-lg': '8px 8px 0px #1a1a1a',
        'nb-sm': '3px 3px 0px #1a1a1a',
        'nb-xl': '10px 10px 0px #1a1a1a',
        'nb-hover': '2px 2px 0px #1a1a1a',
        'nb-accent': '6px 6px 0px #FF6B2C',
        'nb-accent-2': '6px 6px 0px #00C9A7',
      },
    },
  },
  plugins: [],
}
export default config
