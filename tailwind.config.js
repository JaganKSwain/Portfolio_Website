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
        heading: ['var(--font-jetbrains-mono)', 'monospace'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        // Executive Dark Theme
        background: '#090d14',
        'background-alt': '#0d131f',
        surface: '#111827',
        'surface-light': '#182234',
        'surface-bright': '#222f46',
        'surface-dim': '#090d14',
        'surface-lowest': '#05080d',
        'surface-container': '#0f172a',
        'surface-container-high': '#1e293b',
        'surface-container-highest': '#334155',

        // Primary — Electric Cyan / Teal
        primary: '#06b6d4',
        'primary-glow': '#38bdf8',
        'primary-dim': '#083344',
        'on-primary': '#041d27',

        // Secondary — Warm Amber / Copper
        secondary: '#f59e0b',
        'secondary-dim': '#451a03',
        'on-secondary': '#2e1202',

        // Tertiary — Neon Emerald
        accent: '#10b981',
        'accent-dim': '#022c22',

        // Text / On-Surface
        'on-surface': '#f1f5f9',
        'on-surface-variant': '#94a3b8',
        'outline': '#64748b',
        'outline-variant': '#334155',

        // Glassmorphism
        'glass-white': 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        'glass-border-hover': 'rgba(6, 182, 212, 0.3)',

        // Semantic PCB / Tech
        'trace': '#06b6d4',
        'copper': '#f59e0b',
        'solder': '#fbbf24',
        'via': '#10b981',
        'substrate': '#0f172a',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse at 50% 20%, rgba(6,182,212,0.15) 0%, transparent 60%)',
        'section-glow': 'radial-gradient(ellipse at top, rgba(6,182,212,0.08) 0%, transparent 50%)',
        'accent-glow': 'radial-gradient(ellipse at center, rgba(245,158,11,0.08) 0%, transparent 60%)',
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
        'teal-pulse': 'tealPulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
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
          '0%': { boxShadow: '0 0 5px rgba(245,158,11,0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(245,158,11,0.5)' },
        },
        tealPulse: {
          '0%': { boxShadow: '0 0 5px rgba(6,182,212,0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(6,182,212,0.5)' },
        },
      },
      boxShadow: {
        'emerald': '0 0 15px rgba(16,185,129,0.15)',
        'copper': '0 0 15px rgba(245,158,11,0.15)',
        'emerald-lg': '0 0 30px rgba(16,185,129,0.25)',
        'copper-lg': '0 0 30px rgba(245,158,11,0.25)',
        'teal-glow': '0 0 20px rgba(6,182,212,0.25)',
        'amber-glow': '0 0 20px rgba(245,158,11,0.25)',
        'card-glow': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
        'card-hover': '0 12px 30px -4px rgba(6, 182, 212, 0.15), 0 0 1px 1px rgba(6, 182, 212, 0.3)',
      },
    },
  },
  plugins: [],
}
