import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
      colors: {
        "light": "#e5e5e5",
        "dark": "#171717",
        "danger": "#ed252f",
        "danger-light": "#ff9595",
        "danger-dark": "#920000",
        "primary": "#0365FF",
        "primary-light": "#8F95FF",
        "primary-dark": "#000888",
        "safe": "#24e138",
        "safe-light": "#bbffcc",
        "safe-dark": "#004800",
        "info": "#e6ea0c",
        "info-light": "#feffbf",
        "info-dark": "#656200",
        "focus": "#06b6d4",
        "focus-light": "#3edbf7",
        "focus-dark": "#037d93",
        "theme": {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        "brand": {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
      },
    },
  },
  plugins: [],
}
export default config
