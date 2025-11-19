/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        // Modern Engineering Theme
        background: '#030712', // Very dark blue/gray
        surface: '#0f172a',     // Slightly lighter for cards
        primary: '#3b82f6',     // Bright Blue
        secondary: '#8b5cf6',   // Violet
        accent: '#06b6d4',      // Cyan
        
        // Glassmorphism
        'glass-white': 'rgba(255, 255, 255, 0.05)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        
        // Legacy/Specific Theme Colors (Refined)
        'pcb-green': '#10b981',
        'circuit-blue': '#0ea5e9',
        'signal-neon': '#22d3ee',
        'chip-gold': '#fbbf24',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/grid.svg')", // We might need to create this or use CSS
        'circuit-pattern': "url('/images/circuit-pattern.svg')",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px -10px var(--tw-shadow-color)' },
          'to': { boxShadow: '0 0 20px 5px var(--tw-shadow-color)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
