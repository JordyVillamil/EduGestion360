// src/main.jsx (DESPUÉS)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Tus estilos globales personalizados (donde vivirá Tailwind después)
import './styles/global.css';

// ¡ASEGÚRATE QUE ESTA LÍNEA ESTÉ AQUÍ!
import '@fortawesome/fontawesome-free/css/all.min.css'; // <--- ¡Asegúrate que esta línea exista y esté activa!


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);