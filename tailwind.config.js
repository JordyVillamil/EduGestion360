// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Esta línea es clave para que Tailwind escanee tus archivos
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}