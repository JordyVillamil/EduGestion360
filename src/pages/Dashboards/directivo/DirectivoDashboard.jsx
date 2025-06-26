// src/pages/Dashboards/directivo/DirectivoDashboard.jsx
import React, { useState } from 'react';
// Importa tus pestañas. Asegúrate de que estas rutas sean correctas.
import ReunionesTab from './tabs/ReunionesTab';
import InformesTab from './tabs/InformesTab';
import EstadisticasTab from './tabs/EstadisticasTab';
import HorariosTab from './tabs/HorariosTab';
import ComunicadosTab from './tabs/ComunicadosTab';
import UsuariosTab from './tabs/UsuariosTab';

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import '../../styles/Dashboards/Directivo/DirectivoDashboard.css';)
// Los estilos ahora se manejan con Tailwind CSS.

const dashboardTabs = [
  { id: 'reuniones', label: 'Reuniones', icon: 'fas fa-users' },
  { id: 'informes', label: 'Informes', icon: 'fas fa-file-alt' },
  { id: 'estadisticas', label: 'Estadísticas', icon: 'fas fa-chart-bar' },
  { id: 'horarios', label: 'Horarios', icon: 'fas fa-clock' },
  { id: 'comunicados', label: 'Comunicados', icon: 'fas fa-bullhorn' },
  { id: 'usuarios', label: 'Usuarios', icon: 'fas fa-user-cog' },
];

const DirectivoDashboard = ({ showToast, setShowGlobalSpinner }) => { // Recibe props si son necesarias
  const [activeTab, setActiveTab] = useState('reuniones');

  const renderActiveTabContent = () => {
    switch (activeTab) {
      case 'reuniones': return <ReunionesTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      case 'informes': return <InformesTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      case 'estadisticas': return <EstadisticasTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      case 'horarios': return <HorariosTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      case 'comunicados': return <ComunicadosTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      case 'usuarios': return <UsuariosTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
      default: return <p className="text-gray-600">Selecciona una opción para ver el contenido.</p>;
    }
  };

  return (
    // Contenedor principal del dashboard con estilos Tailwind
    <div className="bg-white p-6 rounded-lg shadow-md min-h-[calc(100vh-160px)]"> {/* Ajusta min-h para tu contenido */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard de Directivo</h2>

      {/* Navegación de Pestañas (anteriormente nav-tabs) con estilos Tailwind */}
      <div className="flex border-b border-gray-200 mb-6">
        {dashboardTabs.map(tab => (
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

export default DirectivoDashboard;
