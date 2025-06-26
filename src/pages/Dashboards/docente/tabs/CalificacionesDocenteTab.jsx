// src/pages/Dashboards/docente/tabs/CalificacionesDocenteTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Ensure this path is correct
import ChartWrapper from '../../../../components/shared/ChartWrapper';

const CalificacionesDocenteTab = ({ showToast, setShowGlobalSpinner }) => { // If you need props here, add them
    const estudiantes = [
        { id: 1, nombre: 'Ana García', calificacion: '18', estado: 'Entregado a tiempo', comentarios: '' },
        { id: 2, nombre: 'Carlos Rodríguez', calificacion: '15', estado: 'Entregado a tiempo', comentarios: '' },
        { id: 3, nombre: 'Laura Martínez', calificacion: '20', estado: 'Entregado con retraso', comentarios: 'Excelente trabajo' },
        { id: 4, nombre: 'Miguel López', calificacion: '12', estado: 'No entregado', comentarios: '' },
    ];

    return (
        // Main tab container with padding
        <div className="p-4">
            {/* Filter Section - Subtle background, rounded borders, and shadow */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Calificaciones</h3>
                <div className="flex flex-wrap items-center gap-6">
                    <div>
                        <label htmlFor="courseSelect" className="block text-sm font-medium text-gray-700 mb-1">Curso:</label>
                        <select id="courseSelect" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>10° A</option>
                            <option>10° B</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="activitySelect" className="block text-sm font-medium text-gray-700 mb-1">Actividad:</label>
                        <select id="activitySelect" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Ejercicios de Álgebra</option>
                            <option>Examen Bimestral</option>
                        </select>
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Cargar Actividad</button>
                </div>
            </div>

            <Card title="Ingresar Notas para: Ejercicios de Álgebra (15/04/2025)">
                {/* Responsive table container */}
                <div className="overflow-x-auto">
                    {/* Table with Tailwind styles */}
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Estudiante</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Calificación</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Estado</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Comentarios</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {estudiantes.map((est) => (
                                <tr key={est.id} className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{est.nombre}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        <input
                                            type="number"
                                            className="w-24 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm text-gray-800 transition-all duration-200" // Adjusted width and padding
                                            defaultValue={est.calificacion}
                                            min="0" max="20" // Example score limits
                                        />
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm text-gray-800 transition-all duration-200"> // Adjusted padding
                                            <option>{est.estado}</option>
                                            <option>Entregado a tiempo</option>
                                            <option>Entregado con retraso</option>
                                            <option>No entregado</option>
                                        </select>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        <input
                                            type="text"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm placeholder-gray-400 transition-all duration-200" // Adjusted padding
                                            defaultValue={est.comentarios}
                                            placeholder="Añadir comentarios..."
                                        />
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-sm hover:shadow-md transition-all duration-200">Guardar</button> {/* Adjusted padding and shadow */}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Save All Changes Button */}
                <div className="flex justify-end mt-6 pt-2">
                    <button className="bg-success-600 hover:bg-success-700 text-white font-bold py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-success-500 focus:ring-offset-2 shadow-md hover:shadow-lg transition-all duration-200">Guardar todos los cambios</button>
                </div>
            </Card>

            <div className="flex flex-wrap -mx-3 mt-8"> {/* Adjusted margin top and negative x-margin */}
                <div className="w-full md:w-1/2 px-3 mb-6"> {/* px-3 and mb-6 */}
                    <ChartWrapper title="Estadísticas de la actividad" type="bar" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                    <Card title="Resumen de Calificaciones">
                        <ul className="list-disc list-inside text-gray-700 text-base space-y-2"> {/* Adjusted text size and spacing */}
                            <li>Promedio del curso: 17.0</li>
                            <li>Calificación más alta: 20</li>
                            <li>Calificación más baja: 12</li>
                            <li>Actividades sin calificar: 2</li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CalificacionesDocenteTab;
