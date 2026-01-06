/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Black and Gold Luxury Palette
        black: {
          DEFAULT: '#000000',
          900: '#0a0a0a',
          800: '#141414',
          700: '#1a1a1a',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          DEFAULT: '#d4af37', // Classic gold
          light: '#f4d56f',
          dark: '#aa8a2e',
        },
        // Seven Laws - Gold Variations
        laws: {
          mentalism: '#f4d56f',      // Light Gold
          correspondence: '#d4af37',  // Classic Gold
          rhythm: '#e8c547',          // Bright Gold
          causeEffect: '#c9a13b',     // Deep Gold
          gender: '#f0e68c',          // Pale Gold
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['Monaco', 'Courier New', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra-wide': '0.3em',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'stop-pulse': 'stopPulse 5s ease-out forwards',
        'gold-glow': 'goldGlow 2s ease-in-out infinite',
      },
      keyframes: {
        stopPulse: {
          '0%': { 
            transform: 'scale(0.5)', 
            opacity: '0' 
          },
          '10%': { 
            transform: 'scale(1)', 
            opacity: '1' 
          },
          '30%': { 
            transform: 'scale(1.05)', 
            opacity: '1' 
          },
          '50%': { 
            transform: 'scale(1)', 
            opacity: '1' 
          },
          '70%': { 
            transform: 'scale(1.05)', 
            opacity: '1' 
          },
          '85%': { 
            transform: 'scale(1)', 
            opacity: '1' 
          },
          '100%': { 
            transform: 'scale(1)', 
            opacity: '0',
            pointerEvents: 'none'
          },
        },
        goldGlow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)' 
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.2)' 
          },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f4d56f 0%, #d4af37 50%, #aa8a2e 100%)',
        'gold-radial': 'radial-gradient(circle, #f4d56f 0%, #d4af37 50%, #aa8a2e 100%)',
        'black-gold-gradient': 'linear-gradient(to bottom, #000000 0%, #141414 100%)',
      },
      boxShadow: {
        'gold': '0 4px 14px 0 rgba(212, 175, 55, 0.39)',
        'gold-lg': '0 10px 40px rgba(212, 175, 55, 0.3)',
        'gold-inner': 'inset 0 2px 4px 0 rgba(212, 175, 55, 0.1)',
      },
    },
  },
  plugins: [
    // Add text shadow utility
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
        },
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.9)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.9)',
        },
        '.text-shadow-gold': {
          textShadow: '0 0 20px rgba(212, 175, 55, 0.5), 0 2px 4px rgba(0, 0, 0, 0.9)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
