// src/components/examples/ComponentShowcase.jsx
// Este archivo muestra ejemplos de uso de los componentes mejorados
import React, { useState } from 'react';
import Button from '../UI/Button';
import StatisticCard from '../shared/StatisticCard';
import Toast from '../UI/Toast';
import Spinner from '../UI/Spinner';

function ComponentShowcase() {
  const [toasts, setToasts] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [spinnerVariant, setSpinnerVariant] = useState('default');

  const addToast = (message, type) => {
    const id = Date.now();
    setToasts([...toasts, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts(toasts.filter(t => t.id !== id));
  };

  const showSpinnerDemo = (variant) => {
    setSpinnerVariant(variant);
    setShowSpinner(true);
    setTimeout(() => setShowSpinner(false), 3000);
  };

  return (
    <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInDown">
          <h1 className="text-5xl font-extrabold text-gradient-primary mb-4">
            Showcase de Componentes
          </h1>
          <p className="text-xl text-gray-600">
            Ejemplos de uso de los componentes mejorados del sistema
          </p>
        </div>

        {/* Botones */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-fadeInUp">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="fas fa-mouse-pointer text-primary-600 mr-3"></i>
            Botones
          </h2>
          
          <div className="space-y-6">
            {/* Variantes */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Variantes</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" icon="fa-check">Primary</Button>
                <Button variant="secondary" icon="fa-star">Secondary</Button>
                <Button variant="success" icon="fa-check-circle">Success</Button>
                <Button variant="warning" icon="fa-exclamation-triangle">Warning</Button>
                <Button variant="danger" icon="fa-times">Danger</Button>
                <Button variant="ghost" icon="fa-ghost">Ghost</Button>
                <Button variant="outline" icon="fa-heart">Outline</Button>
                <Button variant="link" icon="fa-link">Link</Button>
              </div>
            </div>

            {/* Tamaños */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Tamaños</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="xs" variant="primary">Extra Small</Button>
                <Button size="sm" variant="primary">Small</Button>
                <Button size="md" variant="primary">Medium</Button>
                <Button size="lg" variant="primary">Large</Button>
                <Button size="xl" variant="primary">Extra Large</Button>
              </div>
            </div>

            {/* Estados */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Estados</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" icon="fa-upload">Normal</Button>
                <Button variant="primary" icon="fa-spinner" loading>Loading</Button>
                <Button variant="primary" icon="fa-ban" disabled>Disabled</Button>
              </div>
            </div>

            {/* Con iconos */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Con Iconos</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" icon="fa-download" iconPosition="left">
                  Descargar
                </Button>
                <Button variant="success" icon="fa-arrow-right" iconPosition="right">
                  Siguiente
                </Button>
                <Button variant="danger" icon="fa-trash">
                  Eliminar
                </Button>
              </div>
            </div>

            {/* Full width */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-3">Ancho Completo</h3>
              <Button variant="primary" fullWidth icon="fa-save">
                Guardar Cambios
              </Button>
            </div>
          </div>
        </section>

        {/* Tarjetas de Estadísticas */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="fas fa-chart-bar text-primary-600 mr-3"></i>
            Tarjetas de Estadísticas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatisticCard
              title="Total Estudiantes"
              value={1248}
              icon="fa-user-graduate"
              color="primary"
              footerText="Activos este semestre"
              animated={true}
            />
            <StatisticCard
              title="Calificaciones Publicadas"
              value={856}
              icon="fa-file-alt"
              color="success"
              footerText="+12% vs mes anterior"
              animated={true}
            />
            <StatisticCard
              title="Tareas Pendientes"
              value={24}
              icon="fa-tasks"
              color="warning"
              footerText="Vencen esta semana"
              animated={true}
            />
            <StatisticCard
              title="Promedio General"
              value="8.5"
              icon="fa-chart-line"
              color="info"
              footerText="Sobre 10 puntos"
              animated={true}
            />
          </div>
        </section>

        {/* Toasts */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="fas fa-bell text-primary-600 mr-3"></i>
            Notificaciones Toast
          </h2>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <Button 
              variant="primary" 
              icon="fa-info-circle"
              onClick={() => addToast('Esta es una notificación informativa', 'info')}
            >
              Info Toast
            </Button>
            <Button 
              variant="success" 
              icon="fa-check-circle"
              onClick={() => addToast('¡Operación completada exitosamente!', 'success')}
            >
              Success Toast
            </Button>
            <Button 
              variant="warning" 
              icon="fa-exclamation-triangle"
              onClick={() => addToast('Advertencia: Revisa los datos ingresados', 'warning')}
            >
              Warning Toast
            </Button>
            <Button 
              variant="danger" 
              icon="fa-times-circle"
              onClick={() => addToast('Error: No se pudo completar la operación', 'error')}
            >
              Error Toast
            </Button>
          </div>

          {/* Contenedor de toasts */}
          <div className="fixed top-20 right-4 z-[9999] space-y-2">
            {toasts.map(toast => (
              <Toast
                key={toast.id}
                id={toast.id}
                message={toast.message}
                type={toast.type}
                onClose={removeToast}
              />
            ))}
          </div>
        </section>

        {/* Spinners */}
        <section className="bg-white rounded-2xl shadow-xl p-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="fas fa-spinner text-primary-600 mr-3"></i>
            Indicadores de Carga
          </h2>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary"
              onClick={() => showSpinnerDemo('default')}
            >
              Default Spinner
            </Button>
            <Button 
              variant="secondary"
              onClick={() => showSpinnerDemo('dots')}
            >
              Dots Spinner
            </Button>
            <Button 
              variant="success"
              onClick={() => showSpinnerDemo('pulse')}
            >
              Pulse Spinner
            </Button>
            <Button 
              variant="info"
              onClick={() => showSpinnerDemo('ring')}
            >
              Ring Spinner
            </Button>
            <Button 
              variant="warning"
              onClick={() => showSpinnerDemo('gradient')}
            >
              Gradient Spinner
            </Button>
          </div>

          {showSpinner && (
            <Spinner 
              variant={spinnerVariant} 
              size="lg" 
              message="Cargando..."
            />
          )}
        </section>

        {/* Elementos decorativos */}
        <section className="bg-gradient-primary rounded-2xl shadow-xl p-8 text-white animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold mb-4 flex items-center">
            <i className="fas fa-paint-brush mr-3"></i>
            Elementos Decorativos
          </h2>
          <p className="text-lg mb-6">
            Todos los componentes incluyen animaciones suaves, transiciones fluidas y efectos hover interactivos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-magic text-4xl mb-3"></i>
              <h3 className="font-bold text-xl mb-2">Animaciones CSS</h3>
              <p className="text-sm text-white/90">Keyframes personalizados con Tailwind</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-palette text-4xl mb-3"></i>
              <h3 className="font-bold text-xl mb-2">Gradientes</h3>
              <p className="text-sm text-white/90">Colores vibrantes y modernos</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <i className="fas fa-bolt text-4xl mb-3"></i>
              <h3 className="font-bold text-xl mb-2">Micro-interacciones</h3>
              <p className="text-sm text-white/90">Efectos ripple y hover mejorados</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default ComponentShowcase;
