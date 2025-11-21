// src/components/shared/AnimatedBackground.jsx
import React from 'react';

const AnimatedBackground = () => {
  return (
    <>
      {/* Elementos decorativos de fondo con animaciones */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-2000 pointer-events-none"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-success-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow animation-delay-4000 pointer-events-none"></div>
    </>
  );
};

export default AnimatedBackground;
