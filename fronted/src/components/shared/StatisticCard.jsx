// src/components/shared/StatisticCard.jsx
import React, { useState, useEffect } from 'react';

function StatisticCard({ title, value, footerText, icon, className, color = 'primary', animated = true }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Efecto para animar el contador
  useEffect(() => {
    if (!animated) {
      setDisplayValue(value);
      return;
    }

    const duration = 2000; // 2 segundos
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, animated]);

  // Observador de intersección para animar cuando es visible
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const colorConfig = {
    primary: {
      gradient: 'from-primary-500 to-primary-600',
      iconBg: 'bg-primary-100',
      iconText: 'text-primary-600',
      shadow: 'shadow-primary-200',
      hoverShadow: 'hover:shadow-primary-300'
    },
    success: {
      gradient: 'from-success-500 to-success-600',
      iconBg: 'bg-success-100',
      iconText: 'text-success-600',
      shadow: 'shadow-success-200',
      hoverShadow: 'hover:shadow-success-300'
    },
    warning: {
      gradient: 'from-warning-500 to-warning-600',
      iconBg: 'bg-warning-100',
      iconText: 'text-warning-600',
      shadow: 'shadow-warning-200',
      hoverShadow: 'hover:shadow-warning-300'
    },
    info: {
      gradient: 'from-info-500 to-info-600',
      iconBg: 'bg-info-100',
      iconText: 'text-info-600',
      shadow: 'shadow-info-200',
      hoverShadow: 'hover:shadow-info-300'
    }
  };

  const config = colorConfig[color] || colorConfig.primary;

  return (
    <div 
      className={`
        relative overflow-hidden
        bg-white rounded-2xl shadow-lg p-6 
        transition-all duration-300 
        transform hover:scale-102 hover:-translate-y-1
        hover:shadow-2xl ${config.hoverShadow}
        ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}
        ${className || ''}
      `}
    >
      {/* Efecto de gradiente decorativo en la parte superior */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient}`}></div>
      
      {/* Contenedor del contenido */}
      <div className="relative z-10">
        {/* Header con icono y título */}
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
            {title}
          </h4>
          {icon && (
            <div className={`w-12 h-12 ${config.iconBg} rounded-xl flex items-center justify-center shadow-md transform transition-transform duration-300 hover:rotate-12 hover:scale-110`}>
              <i className={`fas ${icon} text-xl ${config.iconText}`}></i>
            </div>
          )}
        </div>

        {/* Valor principal con animación */}
        <div className="mb-3">
          <p className={`text-5xl font-extrabold bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent animate-countUp`}>
            {typeof displayValue === 'number' ? displayValue.toLocaleString() : displayValue}
          </p>
        </div>

        {/* Texto del pie con icono */}
        {footerText && (
          <div className="flex items-center text-sm text-gray-500">
            <i className="fas fa-info-circle mr-2 text-xs"></i>
            <p>{footerText}</p>
          </div>
        )}
      </div>

      {/* Efecto de brillo decorativo */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-full opacity-50 transform transition-transform duration-500 group-hover:scale-150"></div>
    </div>
  );
}

export default StatisticCard;
