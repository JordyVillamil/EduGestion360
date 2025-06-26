// src/pages/Dashboards/Estudiante/tabs/ComportamientoTab.jsx
import React from 'react';
// Asegúrate que estas rutas sean correctas para tus componentes compartidos
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'
import ChartWrapper from '../../../../components/shared/ChartWrapper';   // <-- ¡CAMBIO AQUÍ!

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
        if (tipo === 'Mérito') return 'bg-green-100 text-green-800'; // Equivalente a bg-success
        if (tipo === 'Observación') return 'bg-yellow-100 text-yellow-800'; // Equivalente a bg-warning text-dark
        if (tipo === 'Demérito') return 'bg-red-100 text-red-800';     // Equivalente a bg-danger
        return 'bg-gray-100 text-gray-800'; // Por defecto
    };

    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Mi Comportamiento</h3>

            {/* Sección de Filtros (ejemplo) */}
            <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtros de Comportamiento</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <div>
                        <label htmlFor="typeFilter" className="block text-sm font-medium text-gray-700">Tipo:</label>
                        <select id="typeFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todos</option>
                            <option>Mérito</option>
                            <option>Observación</option>
                            <option>Demérito</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="dateRangeFilter" className="block text-sm font-medium text-gray-700">Rango de Fecha:</label>
                        <input type="date" id="dateRangeFilterStart" className="mt-1 mr-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        <input type="date" id="dateRangeFilterEnd" className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Aplicar Filtros</button>
                </div>
            </div>

            <Card title="Registro de Comportamiento">
                {/* Contenedor responsivo para la tabla */}
                <div className="overflow-x-auto">
                    {/* Tabla con estilos de Tailwind */}
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Materia</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Docente</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {comportamientoData.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.fecha}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.materia}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        {/* Badge para el tipo de comportamiento con clases condicionales de Tailwind */}
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getBadgeClass(item.tipo)}`}>
                                            {item.tipo}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500">{item.desc}</td> {/* No whitespace-nowrap para descripciones largas */}
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.docente}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Fila inferior con gráfico y estadísticas */}
            <div className="flex flex-wrap -mx-2 mt-6"> {/* Usa flex-wrap y -mx-2 para columnas */}
                <div className="w-full md:w-1/2 px-2 mb-4"> {/* Columna 1/2 en md y arriba */}
                    <ChartWrapper title="Resumen de Comportamiento" type="doughnut" />
                </div>
                <div className="w-full md:w-1/2 px-2 mb-4"> {/* Columna 1/2 en md y arriba */}
                    <Card title="Estadísticas de Comportamiento">
                        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                            <li>Méritos registrados: 2</li>
                            <li>Observaciones: 1</li>
                            <li>Deméritos: 1</li>
                            <li>Comportamiento general: Bueno</li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ComportamientoTab;
