// src/pages/Dashboards/directivo/DirectivoDashboard.jsx
import React, { useState } from 'react';
// Importa tus pestañas. Asegúrate de que estas rutas sean correctas.
import ReunionesTab from './tabs/ReunionesTab';
import InformesTab from './tabs/InformesTab';
import EstadisticasTab from './tabs/EstadisticasTab';
import HorariosTab from './tabs/HorariosTab';
import ComunicadosTab from './tabs/ComunicadosTab';
import UsuariosTab from './tabs/UsuariosTab';

// Array para generar las pestañas dinámicamente
const dashboardTabs = [
  { id: 'reuniones', label: 'Reuniones', icon: 'fas fa-users' },
  { id: 'informes', label: 'Informes', icon: 'fas fa-file-alt' },
  { id: 'estadisticas', label: 'Estadísticas', icon: 'fas fa-chart-bar' },
  { id: 'horarios', label: 'Horarios', icon: 'fas fa-clock' },
  { id: 'comunicados', label: 'Comunicados', icon: 'fas fa-bullhorn' },
  { id: 'usuarios', label: 'Usuarios', icon: 'fas fa-user-cog' },
];

const DirectivoDashboard = ({ showToast, setShowGlobalSpinner }) => {
  const [activeTab, setActiveTab] = useState('reuniones');

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'reuniones': return <ReunionesTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      case 'informes': return <InformesTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      case 'estadisticas': return <EstadisticasTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      case 'horarios': return <HorariosTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      case 'comunicados': return <ComunicadosTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      case 'usuarios': return <UsuariosTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      default: return <p className="text-gray-600 text-center py-8">Selecciona una opción para ver el contenido.</p>;
    }
  };

  return (
    // Contenedor principal del dashboard con estilos Tailwind
    // Fondo blanco, padding generoso, bordes redondeados y sombra
    <div className="bg-white p-8 rounded-2xl shadow-lg min-h-[calc(100vh-160px)]"> {/* Increased padding, rounded corners, shadow */}
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 border-b border-gray-200 pb-4">Dashboard de Directivo</h2> {/* Stronger title, bottom border */}

      {/* Navegación de Pestañas con estilos Tailwind mejorados */}
      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto"> {/* Increased margin bottom, added overflow-x for responsiveness */}
        {dashboardTabs.map(tab => (
          <button
            key={tab.id}
            className={`
              flex-shrink-0 px-6 py-3 text-lg font-semibold whitespace-nowrap
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

export default DirectivoDashboard;
