// src/pages/Dashboards/Estudiante/tabs/CalificacionesTab.jsx
import React from 'react';
// Asegúrate que estas rutas sean correctas para tus componentes compartidos
import Card from '../../../../components/shared/Card';
import ChartWrapper from '../../../../components/shared/ChartWrapper';
import StatisticCard from '../../../../components/shared/StatisticCard';

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import '../../../styles/Dashboards/Estudiante/CalificacionesTab.css';)
// Los estilos ahora se manejan con Tailwind CSS.

const CalificacionesTab = ({ showToast, setShowGlobalSpinner }) => { // Recibe props si son necesarias
    // Datos de ejemplo
    const promedios = [
        { materia: 'Matemáticas', promedio: '17' },
        { materia: 'Lenguaje', promedio: '19' },
        { materia: 'Ciencias', promedio: '18' },
        { materia: 'Historia', promedio: '16' },
    ];

    const detalleCalificaciones = [
        { id: 1, fecha: '10/04/2025', materia: 'Matemáticas', actividad: 'Examen parcial', calificacion: '17/20' },
        { id: 2, fecha: '05/04/2025', materia: 'Historia', actividad: 'Informe histórico', calificacion: '18/20' },
        { id: 3, fecha: '02/04/2025', materia: 'Lenguaje', actividad: 'Presentación oral', calificacion: '19/20' },
        { id: 4, fecha: '28/03/2025', materia: 'Física', actividad: 'Laboratorio #1', calificacion: '15/20' },
    ];

    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Mis Calificaciones</h3>

            {/* Sección de Filtros - Fondo sutil, bordes redondeados y sombra */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Calificaciones</h3>
                <div className="flex flex-wrap items-center gap-6">
                    <div>
                        <label htmlFor="subjectFilter" className="block text-sm font-medium text-gray-700 mb-1">Materia:</label>
                        <select id="subjectFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todas</option>
                            <option>Matemáticas</option>
                            <option>Lenguaje</option>
                            <option>Ciencias</option>
                            <option>Historia</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="periodFilter" className="block text-sm font-medium text-gray-700 mb-1">Período:</label>
                        <select id="periodFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todas</option>
                            <option>Bimestre 1</option>
                            <option>Bimestre 2</option>
                        </select>
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Aplicar Filtros</button>
                </div>
            </div>

            {/* Sección de Promedios por Materia */}
            <div className="flex flex-wrap -mx-3 mb-8"> {/* Usa flex-wrap y -mx-3 para columnas responsivas */}
                {promedios.map((item, i) => (
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6" key={i}> {/* Columnas de 1/4 en lg, 1/2 en sm, px-3 y mb-6 para espaciado */}
                        <StatisticCard title={item.materia} value={item.promedio} footerText="Promedio actual" />
                    </div>
                ))}
            </div>
            
            {/* Tarjeta de Detalle de Calificaciones */}
            <Card title="Detalle de calificaciones">
                {/* Contenedor responsivo para la tabla */}
                <div className="overflow-x-auto">
                    {/* Tabla con estilos de Tailwind */}
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Fecha</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Materia</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Actividad</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Calificación</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {detalleCalificaciones.map((item) => (
                                <tr key={item.id || item.fecha + item.materia} className="hover:bg-gray-50 transition-colors duration-150"> {/* Usar id o una combinación de propiedades para la key */}
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.fecha}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.materia}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.actividad}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{item.calificacion}</td> {/* Bold for score */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Fila inferior con gráfico y promedio general */}
            <div className="flex flex-wrap -mx-3 mt-8"> {/* Usa flex-wrap y -mx-3 para columnas, mt-8 para mayor margen superior */}
                <div className="w-full md:w-1/2 px-3 mb-6"> {/* Columna 1/2 en md y arriba, px-3 y mb-6 para espaciado */}
                    <ChartWrapper title="Progreso académico por materias" type="line" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                    <StatisticCard title="Promedio General del Periodo" value="17.5" footerText="Basado en calificaciones actuales" />
                </div>
            </div>
        </div>
    );
};

export default CalificacionesTab;
