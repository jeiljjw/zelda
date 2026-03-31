/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        sidebar: '#111827',
        card: '#1e293b',
        'card-hover': '#334155',
        accent: '#10b981',
        'accent-secondary': '#8b5cf6',
        'text-primary': '#f1f5f9',
        'text-secondary': '#94a3b8',
        border: '#334155',
      },
    },
  },
  plugins: [],
}
