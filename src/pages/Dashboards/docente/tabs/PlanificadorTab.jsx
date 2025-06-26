// src/pages/Dashboards/docente/tabs/PlanificadorTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Ensure this path is correct

const PlanificadorTab = ({ showToast, setShowGlobalSpinner }) => { // If you need props here, add them
    return (
        // Main tab container with padding
        <div className="p-4">
            {/* Filter Section - Subtle background, rounded borders, and shadow */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros del Planificador</h3>
                <div className="flex flex-wrap items-center gap-6">
                    <div>
                        <label htmlFor="planMonth" className="block text-sm font-medium text-gray-700 mb-1">Mes:</label>
                        <select id="planMonth" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Julio 2025</option>
                            <option>Agosto 2025</option>
                            <option>Septiembre 2025</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="planCourse" className="block text-sm font-medium text-gray-700 mb-1">Curso:</label>
                        <select id="planCourse" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todos</option>
                            <option>10° A</option>
                            <option>10° B</option>
                            <option>11° A</option>
                        </select>
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Aplicar Filtros</button>
                </div>
            </div>

            {/* Main calendar/planner container */}
            <Card title="Calendario de Planificación">
                {/* Calendar container with fixed height and centering styles with Tailwind */}
                <div className="h-96 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200"> {/* h-96 is ~384px, bg-gray-50 is #f8f9fa */}
                    <p className="text-gray-500 text-base">Componente de Calendario (Planificador) iría aquí.</p>
                </div>
            </Card>

            {/* Bottom row with form and list */}
            <div className="flex flex-wrap -mx-3 mt-8"> {/* Adjusted negative x-margin and increased top margin */}
                <div className="w-full md:w-5/12 px-3 mb-6 md:mb-0">
                    <Card title="Nueva Planificación">
                        {/* Example form */}
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="planTitle" className="block text-sm font-medium text-gray-700 mb-2">Título del Evento</label>
                                <input type="text" id="planTitle" className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 placeholder-gray-400 transition-all duration-200" placeholder="Ej: Clase de Matemáticas" />
                            </div>
                            <div>
                                <label htmlFor="planDate" className="block text-sm font-medium text-gray-700 mb-2">Fecha</label>
                                <input type="date" id="planDate" className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200" />
                            </div>
                            <div>
                                <label htmlFor="planDescription" className="block text-sm font-medium text-gray-700 mb-2">Descripción</label>
                                <textarea id="planDescription" rows="4" className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 placeholder-gray-400 transition-all duration-200" placeholder="Detalles de la planificación..."></textarea>
                            </div>
                            <div className="flex justify-end pt-2">
                                <button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Añadir Planificación</button>
                            </div>
                        </form>
                    </Card>
                </div>
                <div className="w-full md:w-7/12 px-3">
                    <Card title="Próximas Clases / Eventos">
                        {/* List of classes/events with polished Tailwind styles */}
                        <ul className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                            <li className="py-4 px-4 text-sm text-gray-800 hover:bg-gray-50 transition-colors duration-200">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold text-lg text-primary-700">Matemáticas 10° A</span>
                                    <span className="text-gray-500 text-xs"><i className="fas fa-calendar-alt mr-1"></i>Hoy, 09:00 AM</span>
                                </div>
                                <p className="text-gray-600 text-sm mb-1">Tema: Álgebra.</p>
                                <div className="flex justify-end space-x-3 mt-2">
                                    <button className="text-primary-600 hover:text-primary-800 text-sm font-medium transition-colors duration-200"><i className="fas fa-edit mr-1"></i> Editar</button>
                                    <button className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors duration-200"><i className="fas fa-trash mr-1"></i> Eliminar</button>
                                </div>
                            </li>
                            <li className="py-4 px-4 text-sm text-gray-800 hover:bg-gray-50 transition-colors duration-200">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="font-bold text-lg text-primary-700">Reunión de Departamento</span>
                                    <span className="text-gray-500 text-xs"><i className="fas fa-calendar-alt mr-1"></i>Mañana, 02:00 PM</span>
                                </div>
                                <p className="text-gray-600 text-sm mb-1">Prep. Exámenes.</p>
                                <div className="flex justify-end space-x-3 mt-2">
                                    <button className="text-primary-600 hover:text-primary-800 text-sm font-medium transition-colors duration-200"><i className="fas fa-edit mr-1"></i> Editar</button>
                                    <button className="text-red-600 hover:text-red-800 text-sm font-medium transition-colors duration-200"><i className="fas fa-trash mr-1"></i> Eliminar</button>
                                </div>
                            </li>
                            {/* ... List of classes ... */}
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PlanificadorTab;
