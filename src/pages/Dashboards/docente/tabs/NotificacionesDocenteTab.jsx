// src/pages/Dashboards/docente/tabs/NotificacionesDocenteTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './NotificacionesDocenteTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const NotificacionesDocenteTab = ({ showToast, setShowGlobalSpinner }) => { // Si necesitas props aquí, añádelas
    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            {/* Sección de Filtros (ejemplo) */}
            <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtros de Notificaciones</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <div>
                        <label htmlFor="notificationTypeFilter" className="block text-sm font-medium text-gray-700">Tipo:</label>
                        <select id="notificationTypeFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todas</option>
                            <option>Tareas</option>
                            <option>Calificaciones</option>
                            <option>Eventos</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="notificationDateFilter" className="block text-sm font-medium text-gray-700">Fecha:</label>
                        <input type="date" id="notificationDateFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Aplicar Filtros</button>
                </div>
            </div>

            <div className="flex flex-wrap -mx-2"> {/* Contenedor de fila con columnas responsivas */}
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0"> {/* Columna 1/2 en md y arriba */}
                    <Card title="Nueva Notificación">
                        {/* Formulario de nueva notificación con clases Tailwind */}
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="newNotificationTitle" className="block text-sm font-medium text-gray-700">Título</label>
                                <input
                                    type="text"
                                    id="newNotificationTitle"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Asunto de la notificación"
                                />
                            </div>
                            <div>
                                <label htmlFor="newNotificationMessage" className="block text-sm font-medium text-gray-700">Mensaje</label>
                                <textarea
                                    id="newNotificationMessage"
                                    rows="4"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Contenido de la notificación"
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="newNotificationRecipients" className="block text-sm font-medium text-gray-700">Destinatarios</label>
                                <select
                                    id="newNotificationRecipients"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="course10a">10° A</option>
                                    <option value="course10b">10° B</option>
                                    <option value="student1">Estudiante Individual</option>
                                    {/* ... otras opciones de destinatarios ... */}
                                </select>
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Enviar Notificación
                                </button>
                            </div>
                        </form>
                    </Card>
                </div>
                <div className="w-full md:w-1/2 px-2">
                    <Card title="Notificaciones Enviadas">
                        {/* Lista de notificaciones enviadas con estilos Tailwind */}
                        <div className="divide-y divide-gray-200">
                            <ul className="list-none p-0 m-0"> {/* Quita estilos por defecto de ul */}
                                <li className="px-4 py-3 hover:bg-gray-50 text-gray-800 text-sm">
                                    <span className="font-semibold">Recordatorio: Examen parcial</span>
                                    <br />
                                    <span className="text-gray-600 text-xs">Para: 10° A</span>
                                    <span className="text-gray-500 text-xs float-right">25/06/2025</span>
                                </li>
                                <li className="px-4 py-3 hover:bg-gray-50 text-gray-800 text-sm">
                                    <span className="font-semibold">Nueva Tarea de Lenguaje</span>
                                    <br />
                                    <span className="text-gray-600 text-xs">Para: 11° B</span>
                                    <span className="text-gray-500 text-xs float-right">24/06/2025</span>
                                </li>
                                <li className="px-4 py-3 hover:bg-gray-50 text-gray-800 text-sm">
                                    <span className="font-semibold">Cambio de Horario Clase de Química</span>
                                    <br />
                                    <span className="text-gray-600 text-xs">Para: 10° A, 10° B</span>
                                    <span className="text-gray-500 text-xs float-right">23/06/2025</span>
                                </li>
                                {/* ... Mapear sobre notificaciones enviadas ... */}
                            </ul>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default NotificacionesDocenteTab;
