// src/components/shared/Card.jsx
import React from 'react';

function Card({ title, children, className, bodyClassName }) {
  return (
    // Contenedor principal de la tarjeta con fondo blanco, bordes redondeados y una sombra sutil
    <div className={`bg-white rounded-xl shadow-md ${className || ''} transition-all duration-300 hover:shadow-lg`}> {/* Sombra mejorada y transición */}
      {title && (
        // Encabezado de la tarjeta con padding, borde inferior y texto estilizado
        <div className="p-5 border-b border-gray-200"> {/* Mayor padding */}
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
      )}
      {/* Cuerpo de la tarjeta con padding, usando bodyClassName para estilos adicionales */}
      <div className={`p-5 ${bodyClassName || ''}`}> {/* Mayor padding */}
        {children} {/* Contenido que se pasa al componente Card */}
      </div>
    </div>
  );
}

export default Card;
