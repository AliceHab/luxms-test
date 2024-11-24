import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      colors: {
        'luxms-gray': '#898290',
        'luxms-blue': '#4ab6e8',
        'luxms-fiolet': '#aa6fac',
        'luxms-pink': '#E85498',
        'luxms-orange': '#FC440F',
        'luxms-green': '#00CC99',
      },
    },
  },
  plugins: [],
}
export default config
