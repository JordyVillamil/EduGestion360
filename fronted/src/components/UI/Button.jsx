// src/components/UI/Button.jsx
import React, { useState } from 'react';

function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon, 
  iconPosition = 'left',
  fullWidth = false,
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
  className = '',
  ...props 
}) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    if (disabled || loading) return;

    // Crear efecto ripple
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple = {
      x,
      y,
      id: Date.now()
    };

    setRipples([...ripples, newRipple]);
    setTimeout(() => {
      setRipples(ripples => ripples.filter(r => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  // Configuración de variantes
  const variantClasses = {
    primary: 'bg-gradient-primary text-white hover:shadow-glow shadow-lg hover:scale-102',
    secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:shadow-lg shadow-md hover:scale-102',
    success: 'bg-gradient-success text-white hover:shadow-glow-success shadow-lg hover:scale-102',
    warning: 'bg-gradient-warning text-white hover:shadow-glow-warning shadow-lg hover:scale-102',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:shadow-lg shadow-md hover:scale-102',
    ghost: 'bg-transparent text-gray-700 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400',
    outline: 'bg-transparent text-primary-600 border-2 border-primary-600 hover:bg-primary-50',
    link: 'bg-transparent text-primary-600 hover:text-primary-700 underline-offset-4 hover:underline',
  };

  // Configuración de tamaños
  const sizeClasses = {
    xs: 'px-3 py-1.5 text-xs',
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  // Clases base
  const baseClasses = `
    relative overflow-hidden
    inline-flex items-center justify-center
    font-semibold rounded-xl
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
    active:scale-95
    ${variantClasses[variant] || variantClasses.primary}
    ${sizeClasses[size] || sizeClasses.md}
    ${fullWidth ? 'w-full' : ''}
    ${disabled || loading ? 'pointer-events-none' : ''}
    ${className}
  `;

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      {...props}
    >
      {/* Efecto ripple */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 10,
            height: 10,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}

      {/* Spinner de carga */}
      {loading && (
        <svg 
          className="animate-spin h-5 w-5 mr-2" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {/* Icono izquierdo */}
      {icon && iconPosition === 'left' && !loading && (
        <i className={`fas ${icon} ${children ? 'mr-2' : ''}`}></i>
      )}

      {/* Contenido del botón */}
      <span className="relative z-10">{children}</span>

      {/* Icono derecho */}
      {icon && iconPosition === 'right' && !loading && (
        <i className={`fas ${icon} ${children ? 'ml-2' : ''}`}></i>
      )}
    </button>
  );
}

export default Button;
