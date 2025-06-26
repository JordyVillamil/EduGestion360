// src/components/shared/ChartWrapper.jsx
import React from 'react';

function ChartWrapper({ title, type, className }) {
  // Aquí iría la lógica para renderizar el gráfico según el 'type'
  // Por ahora, es un placeholder

  return (
    // Contenedor principal del gráfico con estilo de tarjeta (similar a Card.jsx)
    <div className={`bg-white rounded-xl shadow-md p-6 ${className || ''} transition-all duration-300 hover:shadow-lg`}>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      {/* Placeholder para el área del gráfico, con un fondo sutil y texto centrado */}
      <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg text-gray-400 text-base border border-gray-200">
        {/* Este es un placeholder. Aquí iría el componente de tu gráfico real. */}
        <p className="text-center">Gráfico de {type} iría aquí.</p>
      </div>
    </div>
  );
}

export default ChartWrapper;
