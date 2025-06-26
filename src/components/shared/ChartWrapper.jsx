// src/components/shared/ChartWrapper.jsx
import React from 'react';
// Aquí irían las importaciones de tu librería de gráficos (ej. import { Bar, Radar } from 'react-chartjs-2';)
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
// También los datos de ejemplo y opciones del gráfico

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './ChartWrapper.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

function ChartWrapper({ title, type, className }) {
  // Aquí iría la lógica para renderizar el gráfico según el 'type'
  // Por ahora, es un placeholder

  return (
    // Contenedor principal del gráfico con estilo de tarjeta
    <div className={`bg-white rounded-lg shadow-md p-6 ${className || ''}`}>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-md text-gray-400 text-sm">
        {/* Este es un placeholder. Aquí iría el componente de tu gráfico real. */}
        {type === 'bar' && <p>Gráfico de Barras aquí</p>}
        {type === 'radar' && <p>Gráfico de Radar aquí</p>}
        {type !== 'bar' && type !== 'radar' && <p>Gráfico {type} no implementado</p>}
      </div>
      {/* Puedes añadir una leyenda o controles aquí si es necesario */}
    </div>
  );
}

export default ChartWrapper;
