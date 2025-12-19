/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'upepo-midnight': '#0B1020',
        'upepo-midnight-light': '#0E1428',
        'upepo-wind': '#3EC5D8',
        'upepo-wind-bright': '#4FD1E8',
        'upepo-ocean': '#1E6F8A',
        'upepo-ocean-deep': '#256D85',
        'upepo-gold': '#F4C97A',
        'upepo-gold-soft': '#E6B65C',
        'upepo-text': '#E8ECF2',
        'upepo-text-muted': '#A8B0C2',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Clash Display', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'wind-gradient': 'linear-gradient(135deg, #E8F4FF 0%, #4A90E2 50%, #1A2B4A 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'drift': 'drift 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(30px)' },
        },
      },
    },
  },
  plugins: [],
}
