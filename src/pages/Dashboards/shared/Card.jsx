import React from 'react';

// Un componente de tarjeta genérico y reutilizable
const Card = ({ title, children, cardClassName = '', headerClassName = '', bodyClassName = '' }) => {
  return (
    <div className={`card h-100 ${cardClassName}`}>
      {title && (
        <div className={`card-header ${headerClassName}`}>
          {title}
        </div>
      )}
      <div className={`card-body ${bodyClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default Card;