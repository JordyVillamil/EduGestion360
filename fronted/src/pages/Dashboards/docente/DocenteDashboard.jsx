// src/pages/Dashboards/docente/DocenteDashboard.jsx
import React, { useState } from 'react';
// Importar todos los componentes de las pestañas.
// Asegúrate de que estas rutas sean correctas y que los archivos existan.
import CrearActividadesTab from './tabs/CrearActividadesTab';
import CalificacionesDocenteTab from './tabs/CalificacionesDocenteTab';
import AsistenciaDocenteTab from './tabs/AsistenciaDocenteTab';
import ComportamientoDocenteTab from './tabs/ComportamientoDocenteTab';
import PlanificadorTab from './tabs/PlanificadorTab';
import NotificacionesDocenteTab from './tabs/NotificacionesDocenteTab';

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import '../../styles/Dashboards/Docente/DocenteDashboard.css';)
// Los estilos ahora se manejan con Tailwind CSS.

// Array para generar las pestañas dinámicamente
const docenteTabs = [
  { id: 'crear-actividades', label: 'Crear Actividades', icon: 'fas fa-plus-circle' },
  { id: 'calificaciones-docente', label: 'Calificaciones', icon: 'fas fa-star' },
  { id: 'asistencia-docente', label: 'Asistencia', icon: 'fas fa-clipboard-check' },
  { id: 'comportamiento-docente', label: 'Comportamiento', icon: 'fas fa-chart-line' },
  { id: 'planificador', label: 'Planificador', icon: 'fas fa-calendar-alt' },
  { id: 'notificaciones', label: 'Notificaciones', icon: 'fas fa-bell' },
];

const DocenteDashboard = ({ showToast, setShowGlobalSpinner }) => { // Recibe props
  const [activeTab, setActiveTab] = useState('crear-actividades');

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'crear-actividades': return <CrearActividadesTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      case 'calificaciones-docente': return <CalificacionesDocenteTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      case 'asistencia-docente': return <AsistenciaDocenteTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      case 'comportamiento-docente': return <ComportamientoDocenteTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      case 'planificador': return <PlanificadorTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      case 'notificaciones': return <NotificacionesDocenteTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      default: return <p className="text-gray-600 text-center py-8">Selecciona una opción para ver el contenido.</p>;
    }
  };

  return (
    // Contenedor principal del dashboard con estilos Tailwind
    // Fondo blanco, padding generoso, bordes redondeados y sombra
    <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[calc(100vh-160px)]"> {/* Increased padding, rounded corners, shadow */}
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 border-b border-gray-200 pb-4">Dashboard de Docente</h2> {/* Stronger title, bottom border */}

      {/* Navegación de Pestañas con estilos Tailwind mejorados */}
      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto"> {/* Increased margin bottom, added overflow-x for responsiveness */}
        {docenteTabs.map(tab => (
          <button
            key={tab.id}
            className={`
              flex-shrink-0 px-6 py-3 text-base font-semibold whitespace-nowrap
              ${activeTab === tab.id
                ? 'border-b-3 border-primary-600 text-primary-700' // Stronger active indicator
                : 'text-gray-600 hover:text-primary-700 hover:border-primary-300' // Hover color to primary
              }
              focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
              transition-all duration-200 ease-in-out
            `}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            <i className={`${tab.icon} mr-3 text-lg`}></i>{tab.label} {/* Larger icon */}
          </button>
        ))}
      </div>

      {/* Contenido de la Pestaña Activa */}
      <div className="p-6 bg-gray-50 rounded-lg border border-gray-100"> {/* Increased padding, subtle border */}
        {renderActiveTabContent()}
      </div>
    </div>
  );
};

export default DocenteDashboard;
