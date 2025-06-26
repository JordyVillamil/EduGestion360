// src/components/shared/Card.jsx
import React from 'react';

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './Card.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

function Card({ title, children, className, bodyClassName }) {
  return (
    // Contenedor principal de la tarjeta con sombra, bordes redondeados y fondo blanco
    <div className={`bg-white rounded-lg shadow-md ${className || ''}`}>
      {title && (
        // Encabezado de la tarjeta con padding y borde inferior
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
      )}
      {/* Cuerpo de la tarjeta con padding, usa bodyClassName para estilos adicionales en el cuerpo */}
      <div className={`p-4 ${bodyClassName || ''}`}>
        {children} {/* Contenido que se pasa al componente Card */}
      </div>
    </div>
  );
}

export default Card;
