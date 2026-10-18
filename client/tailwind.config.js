/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Google Sans Display"', '"Google Sans"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        google: {
          blue: '#4285F4',
          red: '#EA4335',
          yellow: '#FBBC04',
          green: '#34A853',
          'blue-50': '#E8F0FE',
          'blue-100': '#D2E3FC',
          'blue-600': '#1A73E8',
          'blue-700': '#1557B0',
          'teal-50': '#E6F4F1',
          'teal-500': '#00897B',
          'teal-600': '#00796B',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'google-sm': '0 1px 3px 0 rgba(60,64,67,0.3), 0 1px 2px 0 rgba(60,64,67,0.15)',
        'google-md': '0 4px 6px -1px rgba(60,64,67,0.15), 0 2px 4px -1px rgba(60,64,67,0.1)',
        'google-lg': '0 10px 40px -8px rgba(60,64,67,0.15), 0 2px 10px rgba(60,64,67,0.06)',
        'google-xl': '0 20px 60px -12px rgba(60,64,67,0.18), 0 4px 16px rgba(60,64,67,0.08)',
        'glow-blue': '0 0 0 3px rgba(66,133,244,0.28)',
        'glow-teal': '0 0 0 3px rgba(0,137,123,0.25)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'google': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundImage: {
        'google-gradient': 'linear-gradient(135deg, #4285F4 0%, #34A853 50%, #00897B 100%)',
        'google-blue-gradient': 'linear-gradient(135deg, #4285F4 0%, #1A73E8 100%)',
      },
    },
  },
  plugins: [],
};

