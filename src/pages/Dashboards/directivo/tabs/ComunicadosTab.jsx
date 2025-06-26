// src/pages/Dashboards/directivo/tabs/ComunicadosTab.jsx
import React from 'react';
// Asegúrate que esta ruta sea correcta para tu componente Card
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './ComunicadosTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const ComunicadosTab = ({ showToast, setShowGlobalSpinner }) => { // Si necesitas props aquí, añádelas
    return (
        // Reemplaza 'tab-pane fade show active' con clases Tailwind para un contenedor de contenido
        <div className="p-4"> {/* Agrega un padding al contenido de la pestaña */}
            <div className="flex flex-wrap -mx-2"> {/* Contenedor de fila, usa flex-wrap para responsividad, -mx-2 compensa el px-2 en las columnas */}
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0"> {/* Columnas de 50% de ancho en md y arriba, con padding horizontal */}
                    <Card title="Nueva Notificación">
                        {/* Formulario de nueva notificación con clases Tailwind */}
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="notificationTitle" className="block text-sm font-medium text-gray-700">Título</label>
                                <input
                                    type="text"
                                    id="notificationTitle"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Asunto del comunicado"
                                />
                            </div>
                            <div>
                                <label htmlFor="notificationMessage" className="block text-sm font-medium text-gray-700">Mensaje</label>
                                <textarea
                                    id="notificationMessage"
                                    rows="4"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Contenido del comunicado"
                                ></textarea>
                            </div>
                            <div>
                                <label htmlFor="notificationRecipients" className="block text-sm font-medium text-gray-700">Destinatarios</label>
                                <select
                                    id="notificationRecipients"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="all">Todos los usuarios</option>
                                    <option value="students">Solo Estudiantes</option>
                                    <option value="teachers">Solo Docentes</option>
                                    <option value="parents">Solo Padres</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Enviar Comunicado
                            </button>
                        </form>
                    </Card>
                </div>
                <div className="w-full md:w-1/2 px-2">
                    <Card title="Notificaciones Enviadas">
                        {/* Lista de notificaciones con estilos Tailwind (anteriormente list-group) */}
                        <div className="divide-y divide-gray-200"> {/* Divide los elementos con un borde */}
                            <button type="button" className="block w-full text-left px-4 py-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-gray-800 text-sm">
                                Recordatorio: Examen parcial - <span className="text-gray-500 text-xs">25/06/2025</span>
                            </button>
                            <button type="button" className="block w-full text-left px-4 py-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-gray-800 text-sm">
                                Reunión de padres el viernes - <span className="text-gray-500 text-xs">24/06/2025</span>
                            </button>
                            <button type="button" className="block w-full text-left px-4 py-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-gray-800 text-sm">
                                Cierre de calificaciones - <span className="text-gray-500 text-xs">20/06/2025</span>
                            </button>
                            {/* ...Mapear sobre notificaciones... */}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ComunicadosTab;
