import React from 'react';
import Card from './Card'; // Usa la tarjeta genérica

// Una tarjeta específica para mostrar una estadística clave
const StatisticCard = ({ title, value, footerText }) => {
  return (
    <Card bodyClassName="text-center">
      <h5 className="card-title">{title}</h5>
      <div className="display-4 my-3 fw-bold text-primary">{value}</div>
      {footerText && <p className="card-text text-muted">{footerText}</p>}
    </Card>
  );
};

export default StatisticCard;