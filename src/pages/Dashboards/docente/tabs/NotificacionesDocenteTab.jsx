// src/pages/Dashboards/docente/tabs/NotificacionesDocenteTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Ensure this path is correct

const NotificacionesDocenteTab = ({ showToast, setShowGlobalSpinner }) => { // If you need props here, add them
    return (
        // Main tab container with padding
        <div className="p-4">
            {/* Filter Section - Subtle background, rounded borders, and shadow */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Notificaciones</h3>
                <div className="flex flex-wrap items-center gap-6">
                    <div>
                        <label htmlFor="notificationTypeFilter" className="block text-sm font-medium text-gray-700 mb-1">Tipo:</label>
                        <select id="notificationTypeFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todas</option>
                            <option>Tareas</option>
                            <option>Calificaciones</option>
                            <option>Eventos</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="notificationDateFilter" className="block text-sm font-medium text-gray-700 mb-1">Fecha:</label>
                        <input type="date" id="notificationDateFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200" />
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Aplicar Filtros</button>
                </div>
            </div>

            <div className="flex flex-wrap -mx-3"> {/* Adjusted negative margin for columns */}
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0"> {/* Adjusted padding for columns */}
                    <Card title="Nueva Notificación">
                        {/* Formulario de nueva notificación con clases Tailwind pulidas */}
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="newNotificationTitle" className="block text-sm font-medium text-gray-700 mb-2">Título</label>
                                <input
                                    type="text"
                                    id="newNotificationTitle"
                                    className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 placeholder-gray-400 transition-all duration-200"
                                    placeholder="Asunto de la notificación"
                                />
                            </div>
                            <div>
                                <label htmlFor="newNotificationMessage" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                                <textarea
                                    id="newNotificationMessage"
                                    rows="5" // Increased rows for more space
                                    className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 placeholder-gray-400 transition-all duration-200"
                                    placeholder="Contenido de la notificación"
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="newNotificationRecipients" className="block text-sm font-medium text-gray-700 mb-2">Destinatarios</label>
                                <select
                                    id="newNotificationRecipients"
                                    className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="course10a">10° A</option>
                                    <option value="course10b">10° B</option>
                                    <option value="student1">Estudiante Individual</option>
                                    {/* ... other recipient options ... */}
                                </select>
                            </div>
                            <div className="flex justify-end pt-2">
                                <button
                                    type="submit"
                                    className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md"
                                >
                                    Enviar Notificación
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
                                <span className="font-semibold text-lg block mb-1 text-primary-700">Recordatorio: Examen parcial</span>
                                <span className="text-gray-600 text-sm block mb-0.5"><i className="fas fa-user-graduate mr-2 text-gray-500"></i>Para: 10° A</span>
                                <span className="text-gray-500 text-xs block"><i className="fas fa-calendar-alt mr-2 text-gray-500"></i>25/06/2025 - 09:00 AM</span>
                            </button>
                            <button type="button" className="block w-full text-left p-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-gray-800 transition-colors duration-200">
                                <span className="font-semibold text-lg block mb-1 text-primary-700">Nueva Tarea de Lenguaje</span>
                                <span className="text-gray-600 text-sm block mb-0.5"><i className="fas fa-book mr-2 text-gray-500"></i>Para: 11° B</span> {/* Adjusted icon */}
                                <span className="text-gray-500 text-xs block"><i className="fas fa-calendar-alt mr-2 text-gray-500"></i>24/06/2025 - 03:00 PM</span>
                            </button>
                            <button type="button" className="block w-full text-left p-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-gray-800 transition-colors duration-200">
                                <span className="font-semibold text-lg block mb-1 text-primary-700">Cambio de Horario Clase de Química</span>
                                <span className="text-gray-600 text-sm block mb-0.5"><i className="fas fa-clock mr-2 text-gray-500"></i>Para: 10° A, 10° B</span> {/* Adjusted icon */}
                                <span className="text-gray-500 text-xs block"><i className="fas fa-calendar-alt mr-2 text-gray-500"></i>23/06/2025 - 05:00 PM</span>
                            </button>
                            {/* Map over notifications here */}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default NotificacionesDocenteTab;
