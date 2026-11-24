/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040711',
          900: '#070D1F',
          850: '#0B1430',
          800: '#0F1C42',
          750: '#152554',
          700: '#1D316C',
          600: '#2A4595',
          500: '#3D5EBE',
          border: 'rgba(56, 189, 248, 0.12)',
          surface: '#0B1430',
          'surface-hover': '#111D42',
        },
        brand: {
          orange: {
            DEFAULT: '#FF6B00',
            light: '#FF8533',
            dark: '#E05500',
            glow: 'rgba(255, 107, 0, 0.35)',
            subtle: 'rgba(255, 107, 0, 0.12)',
          },
          cyan: {
            DEFAULT: '#00D2FF',
            light: '#38BDF8',
            dark: '#0284C7',
            glow: 'rgba(0, 210, 255, 0.3)',
            subtle: 'rgba(0, 210, 255, 0.1)',
          },
          navy: '#0B132B',
          white: '#F8FAFC',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        editorial: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 1vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 1.3vw, 1rem)',
        'fluid-base': 'clamp(1rem, 1.8vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 2.2vw, 1.375rem)',
        'fluid-xl': 'clamp(1.35rem, 3vw, 1.75rem)',
        'fluid-2xl': 'clamp(1.75rem, 4vw, 2.5rem)',
        'fluid-3xl': 'clamp(2.25rem, 5vw, 3.5rem)',
        'fluid-4xl': 'clamp(3rem, 7vw, 4.75rem)',
        'fluid-5xl': 'clamp(3.75rem, 9vw, 6.5rem)',
        'fluid-hero': 'clamp(3.2rem, 8.5vw, 7.5rem)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 3.5s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marqueeReverse 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.85' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      backgroundImage: {
        'noise': "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 0)",
        'radial-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'hero-ambient': 'radial-gradient(ellipse 70% 50% at 50% 10%, rgba(255,107,0,0.12) 0%, rgba(0,210,255,0.07) 40%, rgba(7,13,31,0) 80%)',
        'cyan-orange-gradient': 'linear-gradient(135deg, #00D2FF 0%, #FF6B00 100%)',
      },
      boxShadow: {
        'orange-glow': '0 0 35px -5px rgba(255, 107, 0, 0.45)',
        'cyan-glow': '0 0 35px -5px rgba(0, 210, 255, 0.4)',
        'card-elevated': '0 20px 40px -15px rgba(4, 7, 17, 0.7)',
        'glass-edge': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
}
