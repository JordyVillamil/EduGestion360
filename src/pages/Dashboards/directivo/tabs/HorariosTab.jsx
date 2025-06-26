// src/pages/Dashboards/directivo/tabs/HorariosTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'
// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './HorariosTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const HorariosTab = ({ showToast, setShowGlobalSpinner }) => { // Si necesitas props aquí, añádelas
    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            {/* Sección de Filtros (ejemplo de cómo se verían con Tailwind) */}
            <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtros de Horarios</h3>
                <div className="flex flex-wrap items-center gap-4">
                    {/* Ejemplo de un filtro de selección */}
                    <div>
                        <label htmlFor="courseFilter" className="block text-sm font-medium text-gray-700">Curso:</label>
                        <select id="courseFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>10° A</option>
                            <option>10° B</option>
                            <option>11° C</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="dayFilter" className="block text-sm font-medium text-gray-700">Día:</label>
                        <select id="dayFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todos</option>
                            <option>Lunes</option>
                            <option>Martes</option>
                            {/* ... otros días ... */}
                        </select>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Aplicar Filtros</button>
                </div>
            </div>

            <Card title="Horario Semanal - 10° A">
                {/* Contenedor responsivo para la tabla, usa overflow-x-auto para el scroll horizontal en pantallas pequeñas */}
                <div className="overflow-x-auto">
                    {/* Tabla con estilos de Tailwind: bordes, espaciado, centrado de texto */}
                    <table className="min-w-full bg-white border border-gray-200 text-center">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-gray-700 text-sm font-semibold">Hora</th>
                                <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-gray-700 text-sm font-semibold">Lunes</th>
                                <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-gray-700 text-sm font-semibold">Martes</th>
                                <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-gray-700 text-sm font-semibold">Miércoles</th>
                                <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-gray-700 text-sm font-semibold">Jueves</th>
                                <th className="px-4 py-2 border-b border-gray-200 bg-gray-50 text-gray-700 text-sm font-semibold">Viernes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Fila de ejemplo de datos */}
                            <tr>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700 font-medium">08:00 - 09:00</td>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">Matemáticas</td>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">Lenguaje</td>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">Historia</td>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">Física</td>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">Química</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700 font-medium">09:00 - 10:00</td>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">Inglés</td>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">Matemáticas</td>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">Educación Física</td>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">Lenguaje</td>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">Biología</td>
                            </tr>
                            {/* ...Más filas de horarios... */}
                            {/* Puedes mapear tus datos de horarios aquí */}
                            <tr className="bg-gray-50"> {/* Fila de ejemplo de recreo/almuerzo */}
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700 font-medium" colSpan="6">10:00 - 10:30 Recreo</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700 font-medium">10:30 - 11:30</td>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">Arte</td>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">Música</td>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">Tecnología</td>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">Filosofía</td>
                                <td className="px-4 py-2 border-b border-gray-200 text-sm text-gray-700">Ética</td>
                            </tr>
                            {/* ... etc ... */}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default HorariosTab;
