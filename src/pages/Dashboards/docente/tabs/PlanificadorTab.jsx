// src/pages/Dashboards/docente/tabs/PlanificadorTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'
// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './PlanificadorTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const PlanificadorTab = ({ showToast, setShowGlobalSpinner }) => { // Si necesitas props aquí, añádelas
    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            {/* Sección de Filtros (ejemplo) */}
            <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtros del Planificador</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <div>
                        <label htmlFor="planMonth" className="block text-sm font-medium text-gray-700">Mes:</label>
                        <select id="planMonth" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Julio 2025</option>
                            <option>Agosto 2025</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="planCourse" className="block text-sm font-medium text-gray-700">Curso:</label>
                        <select id="planCourse" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todos</option>
                            <option>10° A</option>
                            <option>10° B</option>
                        </select>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Aplicar Filtros</button>
                </div>
            </div>

            {/* Contenedor principal del calendario/planificador */}
            <Card title="Calendario de Planificación">
                {/* Contenedor del calendario con altura fija y estilos de centrado con Tailwind */}
                <div className="h-96 flex items-center justify-center bg-gray-50 rounded-md"> {/* h-96 es 500px, bg-gray-50 es #f8f9fa */}
                    <p className="text-gray-500">Componente de Calendario (Planificador) iría aquí.</p>
                </div>
            </Card>

            {/* Fila inferior con formulario y lista (anteriormente Bootstrap .row) */}
            <div className="flex flex-wrap -mx-2 mt-6"> {/* Usa flex-wrap para responsividad, -mx-2 para compensar el px-2 en los hijos */}
                <div className="w-full md:w-5/12 px-2 mb-4 md:mb-0"> {/* Columna 5/12 en md y arriba */}
                    <Card title="Nueva Planificación">
                        {/* Formulario de ejemplo */}
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="planTitle" className="block text-sm font-medium text-gray-700">Título del Evento</label>
                                <input type="text" id="planTitle" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Ej: Clase de Matemáticas" />
                            </div>
                            <div>
                                <label htmlFor="planDate" className="block text-sm font-medium text-gray-700">Fecha</label>
                                <input type="date" id="planDate" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                            </div>
                            <div>
                                <label htmlFor="planDescription" className="block text-sm font-medium text-gray-700">Descripción</label>
                                <textarea id="planDescription" rows="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Detalles de la planificación..."></textarea>
                            </div>
                            <div className="text-right">
                                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Añadir Planificación</button>
                            </div>
                        </form>
                    </Card>
                </div>
                <div className="w-full md:w-7/12 px-2"> {/* Columna 7/12 en md y arriba */}
                    <Card title="Próximas Clases / Eventos">
                        {/* Lista de clases/eventos con estilos Tailwind */}
                        <ul className="divide-y divide-gray-200">
                            <li className="py-3 px-2 text-sm text-gray-800 hover:bg-gray-50">
                                <span className="font-semibold">Matemáticas 10° A</span> - Tema: Álgebra. <span className="text-gray-500 text-xs float-right">Hoy, 09:00 AM</span>
                            </li>
                            <li className="py-3 px-2 text-sm text-gray-800 hover:bg-gray-50">
                                <span className="font-semibold">Reunión de Departamento</span> - Prep. Exámenes. <span className="text-gray-500 text-xs float-right">Mañana, 02:00 PM</span>
                            </li>
                            {/* ... Lista de clases ... */}
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PlanificadorTab;
