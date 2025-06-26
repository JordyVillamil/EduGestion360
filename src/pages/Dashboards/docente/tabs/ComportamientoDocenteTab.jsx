// src/pages/Dashboards/docente/tabs/ComportamientoDocenteTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './ComportamientoDocenteTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const ComportamientoDocenteTab = ({ showToast, setShowGlobalSpinner }) => { // Si necesitas props aquí, añádelas
    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            {/* Sección de Filtros (ejemplo) */}
            <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtros de Comportamiento</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <div>
                        <label htmlFor="studentSelect" className="block text-sm font-medium text-gray-700">Estudiante:</label>
                        <select id="studentSelect" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todos</option>
                            <option>Ana García</option>
                            <option>Carlos Rodríguez</option>
                            {/* ... más estudiantes ... */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="incidentType" className="block text-sm font-medium text-gray-700">Tipo de Incidente:</label>
                        <select id="incidentType" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todos</option>
                            <option>Conducta positiva</option>
                            <option>Conducta disruptiva</option>
                            <option>Acoso</option>
                        </select>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Aplicar Filtros</button>
                </div>
            </div>

            <div className="flex flex-wrap -mx-2"> {/* Contenedor de fila con columnas responsivas */}
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0"> {/* Columna 1/2 en md y arriba */}
                    <Card title="Nuevo registro de comportamiento">
                        {/* Formulario de registro de comportamiento con clases Tailwind */}
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="comportamientoEstudiante" className="block text-sm font-medium text-gray-700">Estudiante</label>
                                <select id="comportamientoEstudiante" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                    <option>Seleccionar estudiante</option>
                                    <option>Ana García</option>
                                    <option>Carlos Rodríguez</option>
                                    {/* ... mapear la lista de estudiantes ... */}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="tipoComportamiento" className="block text-sm font-medium text-gray-700">Tipo de Comportamiento</label>
                                <select id="tipoComportamiento" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                                    <option>Seleccionar</option>
                                    <option>Excelente Participación</option>
                                    <option>Ayuda a Compañeros</option>
                                    <option>Interrupción de Clase</option>
                                    <option>Falta de Respeto</option>
                                    <option>Acoso Escolar</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="observacionesComportamiento" className="block text-sm font-medium text-gray-700">Observaciones</label>
                                <textarea id="observacionesComportamiento" rows="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Detalles del comportamiento..."></textarea>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Registrar</button>
                            </div>
                        </form>
                    </Card>
                </div>
                <div className="w-full md:w-1/2 px-2">
                    <Card title="Registros recientes">
                        {/* Lista de registros de comportamiento con estilos Tailwind */}
                        <div className="divide-y divide-gray-200">
                            <ul className="list-none p-0 m-0"> {/* Quita estilos por defecto de ul */}
                                <li className="px-4 py-3 hover:bg-gray-50 text-gray-800 text-sm">
                                    <span className="font-semibold">Ana García:</span> Excelente participación en clase. <span className="text-gray-500 text-xs float-right">25/06/2025</span>
                                </li>
                                <li className="px-4 py-3 hover:bg-gray-50 text-gray-800 text-sm">
                                    <span className="font-semibold">Carlos Rodríguez:</span> Interrumpió la clase en varias ocasiones. <span className="text-gray-500 text-xs float-right">24/06/2025</span>
                                </li>
                                <li className="px-4 py-3 hover:bg-gray-50 text-gray-800 text-sm">
                                    <span className="font-semibold">Laura Martínez:</span> Demostró empatía con un compañero. <span className="text-gray-500 text-xs float-right">23/06/2025</span>
                                </li>
                                {/* ... Mapear sobre registros recientes ... */}
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ComportamientoDocenteTab;
