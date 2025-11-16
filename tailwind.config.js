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
        // Electronics/VLSI Theme Colors
        'pcb-green': '#1a4d3a',
        'pcb-dark-green': '#0d2818',
        'pcb-light-green': '#2d6a4f',
        'circuit-blue': '#0a192f',
        'circuit-dark': '#020c1b',
        'signal-neon': '#00ff88',
        'signal-cyan': '#00d9ff',
        'signal-purple': '#b026ff',
        'chip-gold': '#ffd700',
        'trace-copper': '#b87333',
        'board-green': '#2d5016',
      },
      backgroundImage: {
        'circuit-pattern': "url('/images/circuit-pattern.svg')",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1.5s linear infinite',
        'signal-flow': 'signal-flow 3s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0.3' },
        },
        'signal-flow': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

