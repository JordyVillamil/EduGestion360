// src/pages/Dashboards/directivo/tabs/ComunicadosTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Ensure this path is correct

const ComunicadosTab = ({ showToast, setShowGlobalSpinner }) => {
    return (
        <div className="p-4">
            {/* Sección de Filtros - Fondo sutil, bordes redondeados y sombra */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Comunicados</h3>
                <div className="flex flex-wrap items-center gap-6">
                    <div>
                        <label htmlFor="communicationTypeFilter" className="block text-sm font-medium text-gray-700 mb-1">Tipo:</label>
                        <select id="communicationTypeFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todos</option>
                            <option>Noticia</option>
                            <option>Recordatorio</option>
                            <option>Urgente</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="communicationDateFilter" className="block text-sm font-medium text-gray-700 mb-1">Fecha:</label>
                        <input type="date" id="communicationDateFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200" />
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Aplicar Filtros</button>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <Card title="Nueva Notificación">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="notificationTitle" className="block text-sm font-medium text-gray-700 mb-2">Título</label>
                                <input
                                    type="text"
                                    id="notificationTitle"
                                    className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 placeholder-gray-400 transition-all duration-200"
                                    placeholder="Asunto del comunicado"
                                />
                            </div>
                            <div>
                                <label htmlFor="notificationMessage" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                                <textarea
                                    id="notificationMessage"
                                    rows="5" // Increased rows for more space
                                    className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 placeholder-gray-400 transition-all duration-200"
                                    placeholder="Contenido del comunicado"
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="notificationRecipients" className="block text-sm font-medium text-gray-700 mb-2">Destinatarios</label>
                                <select
                                    id="notificationRecipients"
                                    className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="all">Todos los usuarios</option>
                                    <option value="students">Solo Estudiantes</option>
                                    <option value="teachers">Solo Docentes</option>
                                    <option value="parents">Solo Padres</option>
                                </select>
                            </div>
                            <div className="flex justify-end pt-2">
                                <button
                                    type="submit"
                                    className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg"
                                >
                                    Enviar Comunicado
                                </button>
                            </div>
                        </form>
                    </Card>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <Card title="Notificaciones Enviadas">
                        {/* List of sent notifications with polished Tailwind styles */}
                        <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                            <button type="button" className="block w-full text-left p-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-gray-800 transition-colors duration-200">
                                <span className="font-bold text-lg block mb-1 text-primary-700">Recordatorio: Examen parcial</span>
                                <span className="text-gray-600 text-sm block mb-0.5"><i className="fas fa-user-graduate mr-2 text-gray-500"></i>Para: 10° A</span> {/* Icono más relevante */}
                                <span className="text-gray-500 text-xs block"><i className="fas fa-calendar-alt mr-2 text-gray-500"></i>25/06/2025 - 09:00 AM</span>
                            </button>
                            <button type="button" className="block w-full text-left p-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-gray-800 transition-colors duration-200">
                                <span className="font-bold text-lg block mb-1 text-primary-700">Reunión de padres el viernes</span>
                                <span className="text-gray-600 text-sm block mb-0.5"><i className="fas fa-users mr-2 text-gray-500"></i>Para: Todos los padres</span> {/* Icono más relevante */}
                                <span className="text-gray-500 text-xs block"><i className="fas fa-calendar-alt mr-2 text-gray-500"></i>24/06/2025 - 03:00 PM</span>
                            </button>
                            <button type="button" className="block w-full text-left p-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-gray-800 transition-colors duration-200">
                                <span className="font-bold text-lg block mb-1 text-primary-700">Cierre de calificaciones</span>
                                <span className="text-gray-600 text-sm block mb-0.5"><i className="fas fa-chalkboard-teacher mr-2 text-gray-500"></i>Para: Docentes y Directivos</span> {/* Icono más relevante */}
                                <span className="text-gray-500 text-xs block"><i className="fas fa-calendar-alt mr-2 text-gray-500"></i>20/06/2025 - 05:00 PM</span>
                            </button>
                            {/* Map over notifications here */}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ComunicadosTab;
