// src/pages/Dashboards/docente/tabs/AsistenciaDocenteTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'
// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './AsistenciaDocenteTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const AsistenciaDocenteTab = ({ showToast, setShowGlobalSpinner }) => { // Si necesitas props aquí, añádelas
    const estudiantes = ['Ana García', 'Carlos Rodríguez', 'Laura Martínez', 'Miguel López', 'Sofía Pérez', 'Diego Torres'];

    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            {/* Sección de Filtros (ejemplo de cómo se verían con Tailwind) */}
            <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtros de Asistencia</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <div>
                        <label htmlFor="courseSelect" className="block text-sm font-medium text-gray-700">Curso:</label>
                        <select id="courseSelect" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>10° A</option>
                            <option>10° B</option>
                            <option>11° C</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="subjectSelect" className="block text-sm font-medium text-gray-700">Materia:</label>
                        <select id="subjectSelect" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Matemáticas</option>
                            <option>Lenguaje</option>
                            <option>Ciencias</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="dateSelect" className="block text-sm font-medium text-gray-700">Fecha:</label>
                        <input type="date" id="dateSelect" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" defaultValue="2025-04-15"/>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Cargar Lista</button>
                </div>
            </div>

            <Card title="Registrar asistencia para: Matemáticas - 10° A (15/04/2025)">
                {/* Contenedor responsivo para la tabla */}
                <div className="overflow-x-auto">
                    {/* Tabla con estilos de Tailwind */}
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estudiante</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Observaciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {estudiantes.map((nombre, i) => (
                                <tr key={i}>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{nombre}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        {/* Grupo de botones de radio con estilos Tailwind */}
                                        <div className="flex rounded-md shadow-sm border border-gray-300">
                                            {/* Presente */}
                                            <input type="radio" className="sr-only peer" name={`asistencia_${i}`} id={`presente_${i}`} defaultChecked={i === 0} /> {/* sr-only oculta el radio button, peer para estilizar el label */}
                                            <label htmlFor={`presente_${i}`} className="cursor-pointer px-3 py-1 text-xs font-medium text-green-700 bg-green-50 rounded-l-md hover:bg-green-100 peer-checked:bg-green-600 peer-checked:text-white transition-colors duration-200">Presente</label>

                                            {/* Tarde */}
                                            <input type="radio" className="sr-only peer" name={`asistencia_${i}`} id={`tarde_${i}`} defaultChecked={i === 1} />
                                            <label htmlFor={`tarde_${i}`} className="cursor-pointer px-3 py-1 text-xs font-medium text-yellow-700 bg-yellow-50 hover:bg-yellow-100 peer-checked:bg-yellow-500 peer-checked:text-white transition-colors duration-200">Tarde</label>

                                            {/* Ausente */}
                                            <input type="radio" className="sr-only peer" name={`asistencia_${i}`} id={`ausente_${i}`} defaultChecked={i === 2} />
                                            <label htmlFor={`ausente_${i}`} className="cursor-pointer px-3 py-1 text-xs font-medium text-red-700 bg-red-50 rounded-r-md hover:bg-red-100 peer-checked:bg-red-600 peer-checked:text-white transition-colors duration-200">Ausente</label>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <input type="text" className="w-full px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm" placeholder="Observaciones..." />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Botón Guardar con estilo Tailwind */}
                <div className="flex justify-end mt-6">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Guardar asistencia</button>
                </div>
            </Card>
        </div>
    );
};

export default AsistenciaDocenteTab;
