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
        // Puedes ajustar los tonos si quieres algo más específico (ej. 'blue-500', 'blue-600')
        primary: {
          DEFAULT: '#4361ee', // Tu color primary original
          '50': '#E8EBFE',
          '100': '#D1D7FD',
          '200': '#AAB4FC',
          '300': '#8391FA',
          '400': '#5B6EF9',
          '500': '#4361ee', // Tu color primary original
          '600': '#2D4DE0',
          '700': '#1A3AB2',
          '800': '#0D2783',
          '900': '#051355',
          '950': '#030A2F',
        },
        secondary: {
          DEFAULT: '#3f37c9', // Tu color secondary original
          '50': '#E7E6FD',
          '100': '#CFCEFC',
          '200': '#9F9BF8',
          '300': '#6F67F4',
          '400': '#3F37C9', // Tu color secondary original
          '500': '#3931B5',
          '600': '#302999',
          '700': '#27207C',
          '800': '#1D1860',
          '900': '#131144',
          '950': '#0A082A',
        },
        // Colores de estado/feedback
        success: {
          DEFAULT: '#4cc9f0', // Tu color success original
          '50': '#E0F8FF',
          '100': '#B9F1FF',
          '200': '#92E8FF',
          '300': '#6ADFFF',
          '400': '#43D7FF',
          '500': '#4cc9f0', // Tu color success original
          '600': '#39B7DC',
          '700': '#2A9CB0',
          '800': '#1E8088',
          '900': '#146460',
          '950': '#0A433D',
        },
        warning: {
          DEFAULT: '#f72585', // Tu color warning original
          '50': '#FFE0ED',
          '100': '#FFBEE1',
          '200': '#FF96D5',
          '300': '#FF6DC7',
          '400': '#FF45B8',
          '500': '#f72585', // Tu color warning original
          '600': '#DB1F70',
          '700': '#AF195A',
          '800': '#831244',
          '900': '#570B2E',
          '950': '#2E0518',
        },
        info: {
          DEFAULT: '#4895ef', // Tu color info original
          '50': '#E0F1FF',
          '100': '#BFDAFF',
          '200': '#9CC5FF',
          '300': '#78AFFF',
          '400': '#5599FF',
          '500': '#4895ef', // Tu color info original
          '600': '#3C81E0',
          '700': '#2F6CB3',
          '800': '#235887',
          '900': '#17435B',
          '950': '#0F2A3B',
        },
        // Puedes añadir otros colores globales como bg-light y bg-dark si no usas los grises de Tailwind
        'light-bg': '#f8f9fa',
        'dark-bg': '#212529',
      },
    },
  },
  plugins: [],
}
