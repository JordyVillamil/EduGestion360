// src/pages/Dashboards/Estudiante/tabs/CalificacionesTab.jsx
import React from 'react';
// Asegúrate que estas rutas sean correctas para tus componentes compartidos
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'
import ChartWrapper from '../../../../components/shared/ChartWrapper';   // <-- ¡CAMBIO AQUÍ!
import StatisticCard from '../../../../components/shared/StatisticCard'; // <-- ¡CAMBIO AQUÍ!
// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import '../../../styles/Dashboards/Estudiante/CalificacionesTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

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

            {/* Sección de Filtros (ejemplo) */}
            <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtros de Calificaciones</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <div>
                        <label htmlFor="subjectFilter" className="block text-sm font-medium text-gray-700">Materia:</label>
                        <select id="subjectFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todas</option>
                            <option>Matemáticas</option>
                            <option>Lenguaje</option>
                            <option>Ciencias</option>
                            <option>Historia</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="periodFilter" className="block text-sm font-medium text-gray-700">Período:</label>
                        <select id="periodFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todas</option>
                            <option>Bimestre 1</option>
                            <option>Bimestre 2</option>
                        </select>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Aplicar Filtros</button>
                </div>
            </div>

            {/* Sección de Promedios por Materia */}
            <div className="flex flex-wrap -mx-2 mb-8"> {/* Usa flex-wrap y -mx-2 para columnas responsivas */}
                {promedios.map((item, i) => (
                    <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4" key={i}> {/* Columnas de 1/4 en lg, 1/2 en sm */}
                        <StatisticCard title={item.materia} value={item.promedio} footerText="Promedio actual" />
                    </div>
                ))}
            </div>
            
            {/* Tarjeta de Detalle de Calificaciones */}
            <Card title="Detalle de calificaciones">
                {/* Contenedor responsivo para la tabla */}
                <div className="overflow-x-auto">
                    {/* Tabla con estilos de Tailwind */}
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Materia</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actividad</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calificación</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {detalleCalificaciones.map((item, i) => (
                                <tr key={item.id || i} className="hover:bg-gray-50"> {/* Usar item.id si existe */}
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.fecha}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.materia}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.actividad}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{item.calificacion}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Fila inferior con gráfico y promedio general */}
            <div className="flex flex-wrap -mx-2 mt-6"> {/* Usa flex-wrap y -mx-2 para columnas */}
                <div className="w-full md:w-1/2 px-2 mb-4"> {/* Columna 1/2 en md y arriba */}
                    <ChartWrapper title="Progreso académico por materias" type="line" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4"> {/* Columna 1/2 en md y arriba */}
                    <StatisticCard title="Promedio General del Periodo" value="17.5" footerText="Basado en calificaciones actuales" />
                </div>
            </div>
        </div>
    );
};

export default CalificacionesTab;
