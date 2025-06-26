// src/pages/Dashboards/docente/tabs/CalificacionesDocenteTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'
import ChartWrapper from '../../../../components/shared/ChartWrapper';   // <-- ¡CAMBIO AQUÍ!

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './CalificacionesDocenteTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const CalificacionesDocenteTab = ({ showToast, setShowGlobalSpinner }) => { // Si necesitas props aquí, añádelas
    const estudiantes = [
        { id: 1, nombre: 'Ana García', calificacion: '18', estado: 'Entregado a tiempo', comentarios: '' },
        { id: 2, nombre: 'Carlos Rodríguez', calificacion: '15', estado: 'Entregado a tiempo', comentarios: '' },
        { id: 3, nombre: 'Laura Martínez', calificacion: '20', estado: 'Entregado con retraso', comentarios: 'Excelente trabajo' },
        { id: 4, nombre: 'Miguel López', calificacion: '12', estado: 'No entregado', comentarios: '' },
    ];

    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            {/* Sección de Filtros (ejemplo) */}
            <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtros de Calificaciones</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <div>
                        <label htmlFor="courseSelect" className="block text-sm font-medium text-gray-700">Curso:</label>
                        <select id="courseSelect" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>10° A</option>
                            <option>10° B</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="activitySelect" className="block text-sm font-medium text-gray-700">Actividad:</label>
                        <select id="activitySelect" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Ejercicios de Álgebra</option>
                            <option>Examen Bimestral</option>
                        </select>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Cargar Actividad</button>
                </div>
            </div>

            <Card title="Ingresar Notas para: Ejercicios de Álgebra (15/04/2025)">
                {/* Contenedor responsivo para la tabla */}
                <div className="overflow-x-auto">
                    {/* Tabla con estilos de Tailwind */}
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estudiante</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calificación</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comentarios</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {estudiantes.map((est, i) => (
                                <tr key={est.id || i} className="hover:bg-gray-50"> {/* Usar est.id si existe */}
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{est.nombre}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        <input
                                            type="number"
                                            className="w-20 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                            defaultValue={est.calificacion}
                                            min="0" max="20" // Ejemplo de límites de calificación
                                        />
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        <select className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm">
                                            <option>{est.estado}</option>
                                            <option>Entregado a tiempo</option>
                                            <option>Entregado con retraso</option>
                                            <option>No entregado</option>
                                        </select>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        <input
                                            type="text"
                                            className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                                            defaultValue={est.comentarios}
                                            placeholder="Añadir comentarios..."
                                        />
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Guardar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Botón Guardar Todos los Cambios */}
                <div className="flex justify-end mt-6">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Guardar todos los cambios</button>
                </div>
            </Card>

            <div className="flex flex-wrap -mx-2 mt-6"> {/* Usa flex-wrap y -mx-2 para columnas */}
                <div className="w-full md:w-1/2 px-2 mb-4"> {/* Columna 1/2 en md y arriba */}
                    <ChartWrapper title="Estadísticas de la actividad" type="bar" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4"> {/* Columna 1/2 en md y arriba */}
                    <Card title="Resumen de Calificaciones">
                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
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
