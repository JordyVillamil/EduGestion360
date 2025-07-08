// src/pages/Dashboards/directivo/tabs/HorariosTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Ensure this path is correct

const HorariosTab = ({ showToast, setShowGlobalSpinner }) => { // If you need props here, add them
    return (
        // Main tab container with padding
        <div className="p-4">
            {/* Filter Section - Subtle background, rounded borders, and shadow */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Horarios</h3>
                <div className="flex flex-wrap items-center gap-6">
                    {/* Example of a select filter */}
                    <div>
                        <label htmlFor="courseFilter" className="block text-sm font-medium text-gray-700 mb-1">Curso:</label>
                        <select id="courseFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>10° A</option>
                            <option>10° B</option>
                            <option>11° C</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="dayFilter" className="block text-sm font-medium text-gray-700 mb-1">Día:</label>
                        <select id="dayFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todos</option>
                            <option>Lunes</option>
                            <option>Martes</option>
                            {/* ... other days ... */}
                        </select>
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Aplicar Filtros</button>
                </div>
            </div>

            <Card title="Horario Semanal - 10° A">
                {/* Responsive container for the table, using overflow-x-auto for horizontal scroll on small screens */}
                <div className="overflow-x-auto">
                    {/* Table with Tailwind styles: borders, spacing, text alignment */}
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden"> {/* Added rounded-lg and overflow-hidden for the table container */}
                        <thead className="bg-gray-50"> {/* Light gray background for table header */}
                            <tr>
                                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Hora</th>
                                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Lunes</th>
                                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Martes</th>
                                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Miércoles</th>
                                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Jueves</th>
                                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">Viernes</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Example data rows */}
                            <tr className="hover:bg-gray-50 transition-colors duration-150"> {/* Hover effect for rows */}
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-medium border-r border-gray-200">08:00 - 09:00</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Matemáticas</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Lenguaje</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Historia</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Física</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Química</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-medium border-r border-gray-200">09:00 - 10:00</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Inglés</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Matemáticas</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Educación Física</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Lenguaje</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Biología</td>
                            </tr>
                            {/* ...More schedule rows... */}
                            {/* You can map your schedule data here */}
                            <tr className="bg-gray-100 hover:bg-gray-200 transition-colors duration-150"> {/* Example break row */}
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-bold" colSpan="6">10:00 - 10:30 Recreo</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors duration-150">
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 font-medium border-r border-gray-200">10:30 - 11:30</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Arte</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Música</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Tecnología</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700 border-r border-gray-200">Filosofía</td>
                                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">Ética</td>
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
