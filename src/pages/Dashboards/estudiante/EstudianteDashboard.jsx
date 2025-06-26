// src/pages/Dashboards/Estudiante/EstudianteDashboard.jsx
import React, { useState, useEffect } from 'react';

// Importa los componentes para cada pestaña. Asegúrate de que las rutas sean correctas.
import AsistenciaTab from './tabs/AsistenciaTab';
import TareasTab from './tabs/TareasTab';
import CalificacionesTab from './tabs/CalificacionesTab';
import ComportamientoTab from './tabs/ComportamientoTab';
import DocumentosTab from './tabs/DocumentosTab';
import CalendarioTab from './tabs/CalendarioTab';
import RecursosTab from './tabs/RecursosTab';

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import '../../styles/Dashboards/Estudiante/EstudianteDashboard.css';)
// Los estilos ahora se manejan con Tailwind CSS.

function EstudianteDashboard({ setShowGlobalSpinner, showToast }) {
    // Estado para controlar qué pestaña está activa
    const [activeTab, setActiveTab] = useState('asistencia'); // 'asistencia' será la pestaña predeterminada

    // Array para generar las pestañas dinámicamente con iconos
    const studentTabs = [
        { id: 'asistencia', label: 'Asistencia', icon: 'fas fa-clipboard-check' },
        { id: 'tareas', label: 'Tareas', icon: 'fas fa-tasks' },
        { id: 'calificaciones', label: 'Calificaciones', icon: 'fas fa-star' },
        { id: 'comportamiento', label: 'Comportamiento', icon: 'fas fa-chart-line' },
        { id: 'documentos', label: 'Documentos', icon: 'fas fa-file-alt' },
        { id: 'calendario', label: 'Calendario', icon: 'fas fa-calendar-alt' },
        { id: 'recursos', label: 'Recursos', icon: 'fas fa-book-open' },
    ];

    const handleUploadDocumentClick = () => {
        showToast('Abriendo modal de subir documento (funcionalidad pendiente)', 'info');
        // Aquí iría la lógica para abrir el modal de subir documento
    };

    const renderActiveTabContent = () => {
        switch (activeTab) {
            case 'asistencia': return <AsistenciaTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
            case 'tareas': return <TareasTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
            case 'calificaciones': return <CalificacionesTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
            case 'comportamiento': return <ComportamientoTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
            case 'documentos': return <DocumentosTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
            case 'calendario': return <CalendarioTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
            case 'recursos': return <RecursosTab showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />;
            default: return <p className="text-gray-600">Selecciona una opción para ver el contenido.</p>;
        }
    };

    return (
        // Contenedor principal del dashboard con estilos Tailwind
        <div className="bg-white p-6 rounded-lg shadow-md min-h-[calc(100vh-160px)]"> {/* Ajusta min-h para tu contenido */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800">Dashboard de Estudiante</h2>
                {/* Botón flotante para subir documentos, ahora con clases Tailwind */}
                {activeTab === 'documentos' && ( // Visible solo en la pestaña de documentos
                    <button
                        className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold w-12 h-12 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform duration-200 transform hover:scale-105"
                        onClick={handleUploadDocumentClick}
                        aria-label="Subir documento"
                        title="Subir nuevo documento"
                    >
                        <i className="fas fa-upload text-lg"></i>
                    </button>
                )}
            </div>

            {/* Navegación por pestañas con estilos Tailwind */}
            <div className="flex border-b border-gray-200 mb-6 overflow-x-auto"> {/* overflow-x-auto para pestañas en móviles */}
                {studentTabs.map(tab => (
                    <button
                        key={tab.id}
                        className={`
                            flex-shrink-0 px-4 py-2 text-sm font-medium whitespace-nowrap
                            ${activeTab === tab.id
                                ? 'border-b-2 border-blue-600 text-blue-600' // Estilo de pestaña activa
                                : 'text-gray-600 hover:text-gray-800 hover:border-gray-300' // Estilo de pestaña inactiva
                            }
                            focus:outline-none focus:text-blue-800 focus:border-blue-800
                            transition-colors duration-200 ease-in-out
                        `}
                        onClick={() => setActiveTab(tab.id)}
                        role="tab"
                        aria-controls={tab.id}
                        aria-selected={activeTab === tab.id}
                    >
                        <i className={`${tab.icon} mr-2`}></i>{tab.label}
                    </button>
                ))}
            </div>

            {/* Contenido de las pestañas */}
            <div className="p-4 bg-gray-50 rounded-lg"> {/* Fondo ligero para el contenido de la pestaña */}
                {renderActiveTabContent()}
            </div>
        </div>
    );
}

export default EstudianteDashboard;
