// src/components/shared/StatisticCard.jsx
import React from 'react';

function StatisticCard({ title, value, footerText, className }) {
  return (
    // Tarjeta estilizada con Tailwind: fondo blanco, sombras, redondeado, padding, y texto centrado
    <div className={`bg-white rounded-xl shadow-md p-6 text-center ${className || ''} transition-all duration-300 hover:shadow-lg`}>
      <h4 className="text-lg font-semibold text-gray-600 mb-3">{title}</h4> {/* Margen inferior ajustado */}
      <p className="text-5xl font-extrabold text-primary-600 mb-4">{value}</p> {/* Valor principal más grande y color primario */}
      {footerText && <p className="text-sm text-gray-500">{footerText}</p>} {/* Texto del pie, condicional */}
    </div>
  );
}

export default StatisticCard;
