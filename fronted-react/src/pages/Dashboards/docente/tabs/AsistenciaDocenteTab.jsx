// src/pages/Dashboards/docente/tabs/AsistenciaDocenteTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Ensure this path is correct

const AsistenciaDocenteTab = ({ showToast, setShowGlobalSpinner }) => { // If you need props here, add them
    const estudiantes = [
        { id: 1, nombre: 'Ana García', asistencia: 'presente' },
        { id: 2, nombre: 'Carlos Rodríguez', asistencia: 'tarde' },
        { id: 3, nombre: 'Laura Martínez', asistencia: 'presente' },
        { id: 4, nombre: 'Miguel López', asistencia: 'ausente' },
        { id: 5, nombre: 'Sofía Pérez', asistencia: 'presente' },
        { id: 6, nombre: 'Diego Torres', asistencia: 'tarde' },
    ];

    return (
        // Main tab container with padding
        <div className="p-4">
            {/* Filter Section - Subtle background, rounded borders, and shadow */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Asistencia</h3>
                <div className="flex flex-wrap items-center gap-6">
                    <div>
                        <label htmlFor="courseSelect" className="block text-sm font-medium text-gray-700 mb-1">Curso:</label>
                        <select id="courseSelect" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>10° A</option>
                            <option>10° B</option>
                            <option>11° C</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="subjectSelect" className="block text-sm font-medium text-gray-700 mb-1">Materia:</label>
                        <select id="subjectSelect" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Matemáticas</option>
                            <option>Lenguaje</option>
                            <option>Ciencias</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="dateSelect" className="block text-sm font-medium text-gray-700 mb-1">Fecha:</label>
                        <input type="date" id="dateSelect" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200" defaultValue="2025-04-15"/>
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Cargar Lista</button>
                </div>
            </div>

            <Card title="Registrar asistencia para: Matemáticas - 10° A (15/04/2025)">
                {/* Responsive table container */}
                <div className="overflow-x-auto">
                    {/* Table with Tailwind styles */}
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Estudiante</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Estado</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Observaciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {estudiantes.map((est, i) => (
                                <tr key={est.id || i} className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{est.nombre}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        {/* Grupo de botones de radio con estilos Tailwind avanzados */}
                                        <div className="flex rounded-lg shadow-sm overflow-hidden border border-gray-300"> {/* Rounded corners for the group */}
                                            {/* Presente */}
                                            <input type="radio" className="sr-only peer" name={`asistencia_${i}`} id={`presente_${i}`} defaultChecked={est.asistencia === 'presente'} />
                                            <label htmlFor={`presente_${i}`} className="cursor-pointer flex-1 text-center px-4 py-2 text-sm font-medium text-green-700 bg-green-50 hover:bg-green-100 peer-checked:bg-green-600 peer-checked:text-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-500 peer-focus:z-10 transition-colors duration-200 border-r border-gray-300">Presente</label> {/* flex-1 para distribuir espacio */}

                                            {/* Tarde */}
                                            <input type="radio" className="sr-only peer" name={`asistencia_${i}`} id={`tarde_${i}`} defaultChecked={est.asistencia === 'tarde'} />
                                            <label htmlFor={`tarde_${i}`} className="cursor-pointer flex-1 text-center px-4 py-2 text-sm font-medium text-yellow-700 bg-yellow-50 hover:bg-yellow-100 peer-checked:bg-yellow-500 peer-checked:text-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 peer-focus:z-10 transition-colors duration-200 border-r border-gray-300">Tarde</label>

                                            {/* Ausente */}
                                            <input type="radio" className="sr-only peer" name={`asistencia_${i}`} id={`ausente_${i}`} defaultChecked={est.asistencia === 'ausente'} />
                                            <label htmlFor={`ausente_${i}`} className="cursor-pointer flex-1 text-center px-4 py-2 text-sm font-medium text-red-700 bg-red-50 hover:bg-red-100 peer-checked:bg-red-600 peer-checked:text-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-500 peer-focus:z-10 transition-colors duration-200">Ausente</label>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm placeholder-gray-400 transition-all duration-200" placeholder="Observaciones..." />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Botón Guardar con estilo Tailwind */}
                <div className="flex justify-end mt-6 pt-2"> {/* Added padding top */}
                    <button className="bg-success-600 hover:bg-success-700 text-white font-bold py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-success-500 focus:ring-offset-2 shadow-md hover:shadow-lg transition-all duration-200">Guardar asistencia</button>
                </div>
            </Card>
        </div>
    );
};

export default AsistenciaDocenteTab;
