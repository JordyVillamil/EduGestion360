// src/pages/Dashboards/directivo/tabs/EstadisticasTab.jsx
import React from 'react';
// Asegúrate que estas rutas sean correctas para tus componentes compartidos
import StatisticCard from '../../../../components/shared/StatisticCard'; // <-- ¡CAMBIO AQUÍ!
import ChartWrapper from '../../../../components/shared/ChartWrapper';   // <-- ¡CAMBIO AQUÍ!

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './EstadisticasTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const EstadisticasTab = ({ showToast, setShowGlobalSpinner }) => { // Si necesitas props aquí, añádelas
    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            {/* Sección de Filtros (ejemplo de cómo se verían con Tailwind) */}
            <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtros de Estadísticas</h3>
                <div className="flex flex-wrap items-center gap-4">
                    {/* Ejemplo de un filtro de selección */}
                    <div>
                        <label htmlFor="periodFilter" className="block text-sm font-medium text-gray-700">Período:</label>
                        <select id="periodFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Último mes</option>
                            <option>Último trimestre</option>
                            <option>Último año</option>
                        </select>
                    </div>
                    {/* Puedes añadir más filtros aquí */}
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Aplicar Filtros</button>
                </div>
            </div>

            {/* Fila de Tarjetas de Estadísticas (anteriormente Bootstrap .row y .col-md-3) */}
            <div className="flex flex-wrap -mx-2 mb-8"> {/* Usa flex-wrap para responsividad, -mx-2 para compensar el px-2 en los hijos */}
                {/* Columnas, cada una ocupa 1/4 del ancho en pantallas md y arriba, con padding horizontal */}
                <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
                    <StatisticCard title="Rendimiento académico" value="17.5" footerText="Promedio general" />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
                    <StatisticCard title="Asistencia" value="92%" footerText="Promedio general" />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
                    <StatisticCard title="Comportamiento" value="A" footerText="Calificación general" />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/4 px-2 mb-4">
                    <StatisticCard title="Matrículas" value="98%" footerText="Tasa de ocupación" />
                </div>
            </div>

            {/* Fila de Gráficos (anteriormente Bootstrap .row y .col-md-6) */}
            <div className="flex flex-wrap -mx-2">
                {/* Columnas, cada una ocupa 1/2 del ancho en pantallas md y arriba, con padding horizontal */}
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <ChartWrapper title="Rendimiento por cursos" type="bar" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <ChartWrapper title="Rendimiento por materias" type="radar" />
                </div>
            </div>
        </div>
    );
};

export default EstadisticasTab;
