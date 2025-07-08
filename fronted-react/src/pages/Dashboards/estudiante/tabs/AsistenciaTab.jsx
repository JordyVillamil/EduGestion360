// src/pages/Dashboards/Estudiante/tabs/AsistenciaTab.jsx
import React from 'react';
// Asegúrate que estas rutas sean correctas para tus componentes compartidos
import ChartWrapper from '../../../../components/shared/ChartWrapper';
import Card from '../../../../components/shared/Card';

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import '../../../styles/Dashboards/Estudiante/AsistenciaTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

function AsistenciaTab({ showToast, setShowGlobalSpinner }) { // Recibe props si son necesarias
    const attendanceRecords = [
        { id: 1, date: '2025-06-24', subject: 'Matemáticas', status: 'Presente', observations: '-' },
        { id: 2, date: '2025-06-23', subject: 'Lenguaje', status: 'Tarde', observations: 'Llegó 15 minutos tarde' },
        { id: 3, date: '2025-06-22', subject: 'Ciencias', status: 'Presente', observations: '-' },
        { id: 4, date: '2025-06-21', subject: 'Historia', status: 'Ausente', observations: 'Falta justificada (cita médica)' },
        { id: 5, date: '2025-06-20', subject: 'Educación Física', status: 'Presente', observations: '-' },
    ];

    // Helper para las clases de badge de estado
    const getStatusBadgeClass = (status) => {
        if (status === 'Presente') return 'bg-green-100 text-green-800';
        if (status === 'Tarde') return 'bg-yellow-100 text-yellow-800';
        if (status === 'Ausente') return 'bg-red-100 text-red-800';
        return 'bg-gray-100 text-gray-800';
    };

    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Mi Asistencia</h3>

            {/* Sección de Resumen de Asistencia */}
            <div className="flex flex-wrap -mx-3 mb-8"> {/* Adjusted negative margin */}
                <div className="w-full md:w-1/2 px-3 mb-6"> {/* Adjusted padding and margin bottom */}
                    <Card title="Resumen General">
                        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
                            <li className="flex items-center"><i className="fas fa-check-circle mr-2 text-green-500"></i>Clases asistidas: <span className="font-semibold ml-auto">75 / 80</span></li>
                            <li className="flex items-center"><i className="fas fa-percent mr-2 text-primary-500"></i>Porcentaje de asistencia: <span className="font-semibold text-primary-600 ml-auto">93.75%</span></li>
                            <li className="flex items-center"><i className="fas fa-clock mr-2 text-yellow-500"></i>Días de retraso: <span className="font-semibold ml-auto">3</span></li>
                            <li className="flex items-center"><i className="fas fa-times-circle mr-2 text-red-500"></i>Días de ausencia: <span className="font-semibold ml-auto">2</span></li>
                        </ul>
                    </Card>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                    <ChartWrapper title="Asistencia Mensual" type="bar" />
                </div>
            </div>

            {/* Sección de Historial Detallado de Asistencia */}
            <Card title="Historial Detallado de Asistencia">
                {/* Filtros de tabla */}
                <div className="mb-6 bg-gray-100 p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Historial</h3>
                    <div className="flex flex-wrap items-center gap-6">
                        <div>
                            <label htmlFor="periodFilter" className="block text-sm font-medium text-gray-700 mb-1">Filtrar por Período:</label>
                            <select id="periodFilter" className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                                <option>Últimos 30 días</option>
                                <option>Último trimestre</option>
                                <option>Año escolar actual</option>
                            </select>
                        </div>
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Aplicar Filtros</button>
                    </div>
                </div>

                {/* Contenedor responsivo para la tabla */}
                <div className="overflow-x-auto">
                    {/* Tabla con estilos de Tailwind */}
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Fecha</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Materia</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Estado</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Observaciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {attendanceRecords.map((record) => (
                                <tr key={record.id} className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.date}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{record.subject}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(record.status)}`}>
                                            {record.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500">{record.observations}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}

export default AsistenciaTab;
