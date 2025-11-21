/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores primarios y secundarios basados en tus definiciones originales
        primary: {
          DEFAULT: '#4361ee',
          '50': '#E8EBFE',
          '100': '#D1D7FD',
          '200': '#AAB4FC',
          '300': '#8391FA',
          '400': '#5B6EF9',
          '500': '#4361ee',
          '600': '#2D4DE0',
          '700': '#1A3AB2',
          '800': '#0D2783',
          '900': '#051355',
          '950': '#030A2F',
        },
        secondary: {
          DEFAULT: '#3f37c9',
          '50': '#E7E6FD',
          '100': '#CFCEFC',
          '200': '#9F9BF8',
          '300': '#6F67F4',
          '400': '#3F37C9',
          '500': '#3931B5',
          '600': '#302999',
          '700': '#27207C',
          '800': '#1D1860',
          '900': '#131144',
          '950': '#0A082A',
        },
        success: {
          DEFAULT: '#4cc9f0',
          '50': '#E0F8FF',
          '100': '#B9F1FF',
          '200': '#92E8FF',
          '300': '#6ADFFF',
          '400': '#43D7FF',
          '500': '#4cc9f0',
          '600': '#39B7DC',
          '700': '#2A9CB0',
          '800': '#1E8088',
          '900': '#146460',
          '950': '#0A433D',
        },
        warning: {
          DEFAULT: '#f72585',
          '50': '#FFE0ED',
          '100': '#FFBEE1',
          '200': '#FF96D5',
          '300': '#FF6DC7',
          '400': '#FF45B8',
          '500': '#f72585',
          '600': '#DB1F70',
          '700': '#AF195A',
          '800': '#831244',
          '900': '#570B2E',
          '950': '#2E0518',
        },
        info: {
          DEFAULT: '#4895ef',
          '50': '#E0F1FF',
          '100': '#BFDAFF',
          '200': '#9CC5FF',
          '300': '#78AFFF',
          '400': '#5599FF',
          '500': '#4895ef',
          '600': '#3C81E0',
          '700': '#2F6CB3',
          '800': '#235887',
          '900': '#17435B',
          '950': '#0F2A3B',
        },
        'light-bg': '#f8f9fa',
        'dark-bg': '#212529',
      },
      // Animaciones personalizadas
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
        'fadeInUp': 'fadeInUp 0.4s ease-out',
        'fadeInDown': 'fadeInDown 0.4s ease-out',
        'slideInLeft': 'slideInLeft 0.3s ease-out',
        'slideInRight': 'slideInRight 0.3s ease-out',
        'scaleIn': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse-slow 2s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 1s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
        'countUp': 'countUp 0.6s ease-out',
        'ripple': 'ripple 0.6s ease-out',
      },
      // Keyframes para las animaciones
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          'from': { opacity: '0', transform: 'translateY(-20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-100%)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(100%)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          'from': { opacity: '0', transform: 'scale(0.9)' },
          'to': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        countUp: {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(4)', opacity: '0' },
        },
      },
      // Transiciones personalizadas
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      // Efectos de backdrop
      backdropBlur: {
        xs: '2px',
      },
      // Border width personalizado
      borderWidth: {
        '3': '3px',
      },
      // Box shadows personalizadas
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(67, 97, 238, 0.5)',
        'glow-success': '0 0 20px rgba(76, 201, 240, 0.5)',
        'glow-warning': '0 0 20px rgba(247, 37, 133, 0.5)',
      },
      // Escalas personalizadas
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
    },
  },
  plugins: [],
}
