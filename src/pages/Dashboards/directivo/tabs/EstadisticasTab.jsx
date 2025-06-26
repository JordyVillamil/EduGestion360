// src/pages/Dashboards/directivo/tabs/EstadisticasTab.jsx
import React from 'react';
// Asegúrate que estas rutas sean correctas para tus componentes compartidos
import StatisticCard from '../../../../components/shared/StatisticCard';
import ChartWrapper from '../../../../components/shared/ChartWrapper';

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './EstadisticasTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const EstadisticasTab = ({ showToast, setShowGlobalSpinner }) => { // Si necesitas props aquí, añádelas
    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            {/* Sección de Filtros - Fondo sutil, bordes redondeados y sombra */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Estadísticas</h3>
                <div className="flex flex-wrap items-center gap-6">
                    {/* Ejemplo de un filtro de selección */}
                    <div>
                        <label htmlFor="periodFilter" className="block text-sm font-medium text-gray-700 mb-1">Período:</label>
                        <select id="periodFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Último mes</option>
                            <option>Último trimestre</option>
                            <option>Último año</option>
                        </select>
                    </div>
                    {/* Puedes añadir más filtros aquí */}
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Aplicar Filtros</button>
                </div>
            </div>

            {/* Fila de Tarjetas de Estadísticas */}
            <div className="flex flex-wrap -mx-3 mb-8"> {/* Usa -mx-3 para compensar el px-3 en las columnas */}
                {/* Columnas, cada una ocupa 1/4 del ancho en pantallas md y arriba, con padding horizontal */}
                <div className="w-full sm:w-1/2 md:w-1/4 px-3 mb-6"> {/* px-3 y mb-6 para espaciado */}
                    <StatisticCard title="Rendimiento académico" value="17.5" footerText="Promedio general" />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 px-3 mb-6">
                    <StatisticCard title="Asistencia" value="92%" footerText="Promedio general" />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 px-3 mb-6">
                    <StatisticCard title="Comportamiento" value="A" footerText="Calificación general" />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 px-3 mb-6">
                    <StatisticCard title="Matrículas" value="98%" footerText="Tasa de ocupación" />
                </div>
            </div>

            {/* Fila de Gráficos */}
            <div className="flex flex-wrap -mx-3">
                {/* Columnas, cada una ocupa 1/2 del ancho en pantallas md y arriba, con padding horizontal */}
                <div className="w-full md:w-1/2 px-3 mb-6">
                    <ChartWrapper title="Rendimiento por cursos" type="bar" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                    <ChartWrapper title="Rendimiento por materias" type="radar" />
                </div>
            </div>
        </div>
    );
};

export default EstadisticasTab;
