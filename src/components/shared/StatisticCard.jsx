// src/components/shared/StatisticCard.jsx
import React from 'react';

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './StatisticCard.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

function StatisticCard({ title, value, footerText, className }) {
  return (
    // Tarjeta estilizada con Tailwind: fondo blanco, sombras, redondeado, padding
    <div className={`bg-white rounded-lg shadow-md p-6 text-center ${className || ''}`}>
      <h4 className="text-lg font-semibold text-gray-600 mb-2">{title}</h4>
      <p className="text-5xl font-bold text-blue-600 mb-4">{value}</p> {/* Valor principal grande */}
      <p className="text-sm text-gray-500">{footerText}</p> {/* Texto del pie */}
    </div>
  );
}

export default StatisticCard;
