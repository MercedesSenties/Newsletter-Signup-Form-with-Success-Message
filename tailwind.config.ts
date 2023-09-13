import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'dark-grey': 'hsl(234, 29%, 20%)',
      'charcoal-grey': 'hsl(235, 18%, 26%)',
      'grey': 'hsl(231, 7%, 60%)',
      'white': 'hsl(0, 0%, 100%)',
      'pink': '#FF527B',
      'orange': '#FE6939',
      'red': '#e80e0e'
    }
  },
  plugins: [],
}
export default config
