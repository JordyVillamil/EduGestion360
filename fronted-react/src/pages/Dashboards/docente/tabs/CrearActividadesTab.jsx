// src/pages/Dashboards/docente/tabs/CrearActividadesTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Ensure this path is correct

const CrearActividadesTab = ({ showToast, setShowGlobalSpinner }) => { // If you need props here, add them
    const actividadesRecientes = [
        { id: 1, titulo: 'Ejercicios de Álgebra', fecha: '12/04/2025', info: 'Tarea • Matemáticas • 10° A' },
        { id: 2, titulo: 'Ensayo literario', fecha: '10/04/2025', info: 'Tarea • Lenguaje • 11° B' },
        { id: 3, titulo: 'Examen parcial', fecha: '05/04/2025', info: 'Examen • Matemáticas • 10° A, 10° B' }
    ];

    return (
        // Main tab container with padding
        <div className="p-4">
            <div className="flex flex-wrap -mx-3"> {/* Adjusted negative margin for columns */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"> {/* Adjusted padding for columns */}
                    <Card title="Nueva Actividad">
                        {/* Formulario de nueva actividad con clases Tailwind pulidas */}
                        <form className="space-y-6"> {/* Increased vertical space */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="actividadTitulo">Título de la actividad</label>
                                <input
                                    type="text"
                                    className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 placeholder-gray-400 transition-all duration-200"
                                    id="actividadTitulo"
                                    placeholder="Ej: Ejercicios de Geometría"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="actividadTipo">Tipo de actividad</label>
                                <select className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200" id="actividadTipo" required>
                                    <option value="">Seleccionar tipo</option>
                                    <option value="tarea">Tarea</option>
                                    <option value="examen">Examen</option>
                                    <option value="proyecto">Proyecto</option>
                                    <option value="actividad-clase">Actividad en Clase</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="actividadDescripcion">Descripción</label>
                                <textarea
                                    className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 placeholder-gray-400 transition-all duration-200"
                                    id="actividadDescripcion"
                                    rows="5" // Increased rows for more space
                                    placeholder="Detalles sobre la actividad..."
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="actividadFechaEntrega">Fecha de Entrega</label>
                                <input type="date" className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200" id="actividadFechaEntrega" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="actividadCurso">Curso(s)</label>
                                <select multiple className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 h-32 transition-all duration-200" id="actividadCurso" required>
                                    <option>10° A</option>
                                    <option>10° B</option>
                                    <option>11° A</option>
                                    <option>11° B</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="actividadArchivos">Adjuntar archivos</label>
                                <input
                                    type="file"
                                    className="block w-full text-sm text-gray-500
                                               file:mr-4 file:py-2 file:px-4
                                               file:rounded-md file:border-0
                                               file:text-sm file:font-semibold
                                               file:bg-primary-50 file:text-primary-700
                                               hover:file:bg-primary-100 cursor-pointer" // Adjusted colors to primary palette, added cursor-pointer
                                    id="actividadArchivos"
                                    multiple
                                />
                            </div>
                            <div className="flex justify-end pt-2">
                                <button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Crear actividad</button>
                            </div>
                        </form>
                    </Card>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <Card title="Actividades creadas recientemente">
                        {/* List of recent activities with polished Tailwind styles */}
                        <ul className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                            {actividadesRecientes.map((act) => (
                                <li className="py-4 px-4 hover:bg-gray-50 transition-colors duration-200" key={act.id}>
                                    <div className="flex justify-between items-center mb-1">
                                        <h6 className="text-lg font-bold text-primary-700">{act.titulo}</h6> {/* Stronger title, primary color */}
                                        <small className="text-gray-500 text-xs"><i className="fas fa-calendar-alt mr-1"></i>{act.fecha}</small> {/* Icon for date */}
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">{act.info}</p> {/* More margin-bottom */}
                                    <div className="flex justify-end space-x-3"> {/* Increased space-x */}
                                        <button className="text-primary-600 hover:text-primary-800 text-sm font-medium transition-colors duration-200"><i className="fas fa-edit mr-1"></i> Editar</button>
                                        <button className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors duration-200"><i className="fas fa-trash mr-1"></i> Eliminar</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CrearActividadesTab;
