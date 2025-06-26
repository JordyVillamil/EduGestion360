// src/pages/Dashboards/docente/DocenteDashboard.jsx
import React, { useState } from 'react';
// Importar todos los componentes de las pestañas.
// Asegúrate de que estas rutas sean correctas y que los archivos existan.
import CrearActividadesTab from './tabs/CrearActividadesTab';
import CalificacionesDocenteTab from './tabs/CalificacionesDocenteTab';
import AsistenciaDocenteTab from './tabs/AsistenciaDocenteTab';
import ComportamientoDocenteTab from './tabs/ComportamientoDocenteTab'; // Asumiendo este nombre
import PlanificadorTab from './tabs/PlanificadorTab';
import NotificacionesDocenteTab from './tabs/NotificacionesDocenteTab'; // Asumiendo este nombre

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
      default: return <p className="text-gray-600">Selecciona una opción para ver el contenido.</p>;
    }
  };

  return (
    // Contenedor principal del dashboard con estilos Tailwind
    <div className="bg-white p-6 rounded-lg shadow-md min-h-[calc(100vh-160px)]"> {/* Ajusta min-h para tu contenido */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard de Docente</h2>

      {/* Navegación de Pestañas (anteriormente nav-tabs) con estilos Tailwind */}
      <div className="flex border-b border-gray-200 mb-6">
        {docenteTabs.map(tab => (
          <button
            key={tab.id}
            className={`
              px-4 py-2 text-sm font-medium
              ${activeTab === tab.id
                ? 'border-b-2 border-blue-600 text-blue-600' // Estilo de pestaña activa
                : 'text-gray-600 hover:text-gray-800 hover:border-gray-300' // Estilo de pestaña inactiva
              }
              focus:outline-none focus:text-blue-800 focus:border-blue-800
              transition-colors duration-200 ease-in-out
            `}
            onClick={() => setActiveTab(tab.id)}
            role="tab"
            aria-selected={activeTab === tab.id}
          >
            <i className={`${tab.icon} mr-2`}></i>{tab.label}
          </button>
        ))}
      </div>

      {/* Contenido de la Pestaña Activa */}
      <div className="p-4 bg-gray-50 rounded-lg"> {/* Fondo ligero para el contenido de la pestaña */}
        {renderActiveTabContent()}
      </div>
    </div>
  );
};

export default DocenteDashboard;
