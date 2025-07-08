// src/pages/Dashboards/docente/tabs/ComportamientoDocenteTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Ensure this path is correct

const ComportamientoDocenteTab = ({ showToast, setShowGlobalSpinner }) => { // If you need props here, add them
    return (
        // Main tab container with padding
        <div className="p-4">
            {/* Filter Section - Subtle background, rounded borders, and shadow */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Comportamiento</h3>
                <div className="flex flex-wrap items-center gap-6">
                    <div>
                        <label htmlFor="studentSelect" className="block text-sm font-medium text-gray-700 mb-1">Estudiante:</label>
                        <select id="studentSelect" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todos</option>
                            <option>Ana García</option>
                            <option>Carlos Rodríguez</option>
                            {/* ... more students ... */}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="incidentType" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Incidente:</label>
                        <select id="incidentType" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todos</option>
                            <option>Conducta positiva</option>
                            <option>Conducta disruptiva</option>
                            <option>Acoso</option>
                        </select>
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Aplicar Filtros</button>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <Card title="Nuevo registro de comportamiento">
                        {/* Formulario de registro de comportamiento con clases Tailwind */}
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="comportamientoEstudiante" className="block text-sm font-medium text-gray-700 mb-2">Estudiante</label>
                                <select id="comportamientoEstudiante" className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                                    <option>Seleccionar estudiante</option>
                                    <option>Ana García</option>
                                    <option>Carlos Rodríguez</option>
                                    {/* ... map student list ... */}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="tipoComportamiento" className="block text-sm font-medium text-gray-700 mb-2">Tipo de Comportamiento</label>
                                <select id="tipoComportamiento" className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                                    <option>Seleccionar</option>
                                    <option>Excelente Participación</option>
                                    <option>Ayuda a Compañeros</option>
                                    <option>Interrupción de Clase</option>
                                    <option>Falta de Respeto</option>
                                    <option>Acoso Escolar</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="observacionesComportamiento" className="block text-sm font-medium text-gray-700 mb-2">Observaciones</label>
                                <textarea id="observacionesComportamiento" rows="4" className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 placeholder-gray-400 transition-all duration-200" placeholder="Detalles del comportamiento..."></textarea> {/* Increased rows */}
                            </div>
                            <div className="flex justify-end pt-2">
                                <button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md">Registrar</button>
                            </div>
                        </form>
                    </Card>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <Card title="Registros recientes">
                        {/* List of behavior records with polished Tailwind styles */}
                        <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                            <ul className="list-none p-0 m-0">
                                <li className="px-4 py-4 hover:bg-gray-50 text-gray-800 transition-colors duration-200">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-lg text-primary-700">Ana García</span>
                                        <span className="text-gray-500 text-xs"><i className="fas fa-calendar-alt mr-1"></i>25/06/2025</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">Excelente participación en clase.</p>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                        Mérito
                                    </span>
                                </li>
                                <li className="px-4 py-4 hover:bg-gray-50 text-gray-800 transition-colors duration-200">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-lg text-primary-700">Carlos Rodríguez</span>
                                        <span className="text-gray-500 text-xs"><i className="fas fa-calendar-alt mr-1"></i>24/06/2025</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">Interrumpió la clase en varias ocasiones.</p>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">
                                        Observación
                                    </span>
                                </li>
                                <li className="px-4 py-4 hover:bg-gray-50 text-gray-800 transition-colors duration-200">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-lg text-primary-700">Laura Martínez</span>
                                        <span className="text-gray-500 text-xs"><i className="fas fa-calendar-alt mr-1"></i>23/06/2025</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-1">Demostró empatía con un compañero.</p>
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                        Mérito
                                    </span>
                                </li>
                                {/* ... Map over recent records ... */}
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ComportamientoDocenteTab;
