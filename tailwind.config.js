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
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      colors: {
        // Precision Engineering Palette
        background: '#0a0a0f',
        surface: '#12121a',
        'surface-light': '#1a1a25',

        primary: '#10b981',       // Emerald — PCB traces
        'primary-dim': '#065f46', // Dimmed emerald
        secondary: '#d97706',     // Copper/Amber — solder points
        'secondary-dim': '#92400e',
        accent: '#14b8a6',        // Teal — signal flow

        // Glassmorphism
        'glass-white': 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.06)',

        // Semantic (PCB theme)
        'trace': '#10b981',
        'copper': '#d97706',
        'solder': '#fbbf24',
        'via': '#14b8a6',
        'substrate': '#12121a',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse at center, rgba(16,185,129,0.08) 0%, transparent 70%)',
        'section-glow': 'radial-gradient(ellipse at top, rgba(16,185,129,0.04) 0%, transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'trace-flow': 'traceFlow 3s linear infinite',
        'scan-line': 'scanLine 4s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'copper-pulse': 'copperPulse 2s ease-in-out infinite alternate',
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
        traceFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        copperPulse: {
          '0%': { boxShadow: '0 0 5px rgba(217,119,6,0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(217,119,6,0.6)' },
        },
      },
      boxShadow: {
        'emerald': '0 0 15px rgba(16,185,129,0.15)',
        'copper': '0 0 15px rgba(217,119,6,0.15)',
        'emerald-lg': '0 0 30px rgba(16,185,129,0.2)',
        'copper-lg': '0 0 30px rgba(217,119,6,0.2)',
      },
    },
  },
  plugins: [],
}
