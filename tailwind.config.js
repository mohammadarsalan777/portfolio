/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B1120',
        'bg-soft': '#111827',
        primary: '#3B82F6',
        secondary: '#8B5CF6',
        accent: '#06B6D4',
        ink: '#FFFFFF',
        muted: '#94A3B8',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'grad-accent': 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
        'grad-radial-hero':
          'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.18), transparent 40%), radial-gradient(circle at 80% 30%, rgba(139,92,246,0.16), transparent 45%), radial-gradient(circle at 50% 90%, rgba(6,182,212,0.12), transparent 45%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(59,130,246,0.45)',
        'glow-violet': '0 0 40px -10px rgba(139,92,246,0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(6deg)' },
        },
        'gradient-move': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.95)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-move': 'gradient-move 8s ease infinite',
        blob: 'blob 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
