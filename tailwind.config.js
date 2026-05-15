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
        // Cyber-Circuit Pro Palette
        background: '#0e1513',
        surface: '#1a211f',
        'surface-light': '#242b2a',
        'surface-bright': '#333b39',
        'surface-dim': '#0e1513',
        'surface-lowest': '#09100e',
        'surface-container': '#1a211f',
        'surface-container-high': '#242b2a',
        'surface-container-highest': '#2f3634',

        // Primary — Electric Teal
        primary: '#2dd4bf',
        'primary-glow': '#57f1db',
        'primary-dim': '#005047',
        'on-primary': '#003731',

        // Secondary — Neon Amber
        secondary: '#ffb95f',
        'secondary-dim': '#5b3800',
        'on-secondary': '#472a00',

        // Tertiary — Matrix Green
        accent: '#66f3b6',
        'accent-dim': '#005236',

        // Text / On-Surface
        'on-surface': '#dde4e1',
        'on-surface-variant': '#bacac5',
        'outline': '#859490',
        'outline-variant': '#3c4a46',

        // Glassmorphism
        'glass-white': 'rgba(255, 255, 255, 0.04)',
        'glass-border': 'rgba(186, 202, 197, 0.08)',

        // Semantic (PCB theme)
        'trace': '#2dd4bf',
        'copper': '#ffb95f',
        'solder': '#fbbf24',
        'via': '#66f3b6',
        'substrate': '#1a211f',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse at center, rgba(45,212,191,0.10) 0%, transparent 70%)',
        'section-glow': 'radial-gradient(ellipse at top, rgba(45,212,191,0.05) 0%, transparent 50%)',
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
          '0%': { boxShadow: '0 0 5px rgba(255,185,95,0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(255,185,95,0.6)' },
        },
        tealPulse: {
          '0%': { boxShadow: '0 0 5px rgba(45,212,191,0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(45,212,191,0.6)' },
        },
      },
      boxShadow: {
        'emerald': '0 0 15px rgba(45,212,191,0.15)',
        'copper': '0 0 15px rgba(255,185,95,0.15)',
        'emerald-lg': '0 0 30px rgba(45,212,191,0.2)',
        'copper-lg': '0 0 30px rgba(255,185,95,0.2)',
        'teal-glow': '0 0 20px rgba(45,212,191,0.25)',
        'amber-glow': '0 0 20px rgba(255,185,95,0.25)',
      },
    },
  },
  plugins: [],
}
