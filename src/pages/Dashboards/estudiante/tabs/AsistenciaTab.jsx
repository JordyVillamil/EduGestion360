// src/pages/Dashboards/Estudiante/tabs/AsistenciaTab.jsx
import React from 'react';
// Asegúrate que estas rutas sean correctas para tus componentes compartidos
import ChartWrapper from '../../../../components/shared/ChartWrapper';   // <-- ¡CAMBIO AQUÍ!
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import '../../../styles/Dashboards/Estudiante/AsistenciaTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

function AsistenciaTab({ showToast, setShowGlobalSpinner }) { // Recibe props si son necesarias
    const attendanceRecords = [
        { date: '2025-06-24', subject: 'Matemáticas', status: 'Presente' },
        { date: '2025-06-23', subject: 'Lenguaje', status: 'Tarde' },
        { date: '2025-06-22', subject: 'Ciencias', status: 'Presente' },
        { date: '2025-06-21', subject: 'Historia', status: 'Ausente' },
    ];

    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Mi Asistencia</h3>

            {/* Sección de Resumen de Asistencia */}
            <div className="flex flex-wrap -mx-2 mb-8">
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <Card title="Resumen General">
                        <ul className="list-disc list-inside text-gray-700 text-base space-y-2">
                            <li>Clases asistidas: 75 / 80</li>
                            <li>Porcentaje de asistencia: <span className="font-semibold text-green-600">93.75%</span></li>
                            <li>Días de retraso: 3</li>
                            <li>Días de ausencia: 2</li>
                        </ul>
                    </Card>
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4">
                    <ChartWrapper title="Asistencia Mensual" type="bar" />
                </div>
            </div>

            {/* Sección de Historial Detallado de Asistencia */}
            <Card title="Historial Detallado de Asistencia">
                <div className="mb-4 bg-gray-100 p-3 rounded-lg">
                    <label htmlFor="periodFilter" className="block text-sm font-medium text-gray-700 mb-1">Filtrar por Período:</label>
                    <select id="periodFilter" className="block w-full md:w-1/3 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                        <option>Últimos 30 días</option>
                        <option>Último trimestre</option>
                        <option>Año escolar actual</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Materia</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Observaciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {attendanceRecords.map((record, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.date}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{record.subject}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            record.status === 'Presente' ? 'bg-green-100 text-green-800' :
                                            record.status === 'Tarde' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}>
                                            {record.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {record.status === 'Tarde' ? 'Llegó 15 minutos tarde' :
                                         record.status === 'Ausente' ? 'Falta justificada' : '-'}
                                    </td>
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
