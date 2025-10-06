export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#7B2FF7',
        'neon-pink': '#FF6FB5',
        'neon-cyan': '#22D3EE'
      },
      boxShadow: {
        'neon-sm': '0 8px 30px rgba(124,58,237,0.12)',
        'neon-lg': '0 30px 80px rgba(99,102,241,0.12)'
      },
      keyframes: {
        float: { '0%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' }, '100%': { transform: 'translateY(0)' } }
      },
      animation: {
        float: 'float 4s ease-in-out infinite'
      },
      borderRadius: {
        xxl: '1.25rem'
      }
    }
  },
  plugins: []
}