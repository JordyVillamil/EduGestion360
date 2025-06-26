// src/pages/Dashboards/Estudiante/tabs/ComportamientoTab.jsx
import React from 'react';
// Asegúrate que estas rutas sean correctas para tus componentes compartidos
import Card from '../../../../components/shared/Card';
import ChartWrapper from '../../../../components/shared/ChartWrapper';

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import '../../../styles/Dashboards/Estudiante/ComportamientoTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const ComportamientoTab = ({ showToast, setShowGlobalSpinner }) => { // Recibe props si son necesarias
    const comportamientoData = [
        { id: 1, fecha: '10/04/2025', materia: 'Matemáticas', tipo: 'Mérito', desc: 'Ayudó a compañeros con un problema difícil.', docente: 'Prof. Martínez' },
        { id: 2, fecha: '05/04/2025', materia: 'Lenguaje', tipo: 'Observación', desc: 'Conversación durante la clase en momentos inadecuados.', docente: 'Prof. García' },
        { id: 3, fecha: '20/03/2025', materia: 'Historia', tipo: 'Demérito', desc: 'No entregó tarea a tiempo sin justificación válida.', docente: 'Prof. López' },
        { id: 4, fecha: '15/03/2025', materia: 'Ciencias', tipo: 'Mérito', desc: 'Participación activa y preguntas perspicaces.', docente: 'Prof. Ramírez' },
    ];

    // Función para determinar las clases Tailwind para el badge del tipo de comportamiento
    const getBadgeClass = (tipo) => {
        if (tipo === 'Mérito') return 'bg-green-100 text-green-800';
        if (tipo === 'Observación') return 'bg-yellow-100 text-yellow-800';
        if (tipo === 'Demérito') return 'bg-red-100 text-red-800';
        return 'bg-gray-100 text-gray-800'; // Default
    };

    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Mi Comportamiento</h3>

            {/* Sección de Filtros - Fondo sutil, bordes redondeados y sombra */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Comportamiento</h3>
                <div className="flex flex-wrap items-center gap-6">
                    <div>
                        <label htmlFor="typeFilter" className="block text-sm font-medium text-gray-700 mb-1">Tipo:</label>
                        <select id="typeFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todos</option>
                            <option>Mérito</option>
                            <option>Observación</option>
                            <option>Demérito</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="dateRangeFilter" className="block text-sm font-medium text-gray-700 mb-1">Rango de Fecha:</label>
                        <input type="date" id="dateRangeFilterStart" className="mt-1 mr-3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200" />
                        <input type="date" id="dateRangeFilterEnd" className="mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200" />
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Aplicar Filtros</button>
                </div>
            </div>

            <Card title="Registro de Comportamiento">
                {/* Responsive table container */}
                <div className="overflow-x-auto">
                    {/* Table with Tailwind styles */}
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Fecha</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Materia</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Tipo</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Descripción</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Docente</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {comportamientoData.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.fecha}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.materia}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        {/* Badge for behavior type with conditional Tailwind classes */}
                                        <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getBadgeClass(item.tipo)}`}>
                                            {item.tipo}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500">{item.desc}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.docente}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Bottom row with chart and statistics */}
            <div className="flex flex-wrap -mx-3 mt-8"> {/* Adjusted negative x-margin and increased top margin */}
                <div className="w-full md:w-1/2 px-3 mb-6"> {/* px-3 and mb-6 */}
                    <ChartWrapper title="Resumen de Comportamiento" type="doughnut" />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6">
                    <Card title="Estadísticas de Comportamiento">
                        <ul className="list-disc list-inside text-gray-700 text-base space-y-2"> {/* Adjusted text size and spacing */}
                            <li>Méritos registrados: <span className="font-semibold">2</span></li>
                            <li>Observaciones: <span className="font-semibold">1</span></li>
                            <li>Deméritos: <span className="font-semibold">1</span></li>
                            <li>Comportamiento general: <span className="font-semibold text-primary-600">Bueno</span></li> {/* Highlighted text */}
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ComportamientoTab;
