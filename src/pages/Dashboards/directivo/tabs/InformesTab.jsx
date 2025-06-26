// src/pages/Dashboards/directivo/tabs/InformesTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './InformesTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

// Componente InformeCard con clases Tailwind
const InformeCard = ({ informe }) => (
    // Columna para la tarjeta de informe. w-full para ancho completo en móvil, md:w-1/3 para 1/3 en desktop, px-2 para padding horizontal.
    <div className="w-full md:w-1/3 px-2 mb-4">
        <Card title={informe.titulo}>
            {/* Texto descriptivo con margen inferior */}
            <p className="text-gray-700 text-sm mb-4">{informe.desc}</p>
            {/* Grupo de botones con espacio entre ellos */}
            <div className="flex space-x-2">
                {/* Botón "Ver" con estilos de Tailwind */}
                <button className="flex-1 px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Ver</button>
                {/* Botón "Descargar" con estilos de Tailwind */}
                <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-600 border border-gray-400 rounded-md hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2">Descargar</button>
            </div>
        </Card>
    </div>
);

const InformesTab = ({ showToast, setShowGlobalSpinner }) => { // Si necesitas props aquí, añádelas
    const informes = [
        { titulo: 'Informe académico', desc: 'Rendimiento por cursos y materias.'},
        { titulo: 'Informe de asistencia', desc: 'Análisis de asistencia y casos críticos.'},
        { titulo: 'Informe financiero', desc: 'Estado de pagos, matrículas y morosos.'},
        // Añade más informes según sea necesario
    ];

    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            {/* Sección de Filtros (ejemplo de cómo se verían con Tailwind) */}
            <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtros de Informes</h3>
                <div className="flex flex-wrap items-center gap-4">
                    {/* Ejemplo de un filtro de selección */}
                    <div>
                        <label htmlFor="reportTypeFilter" className="block text-sm font-medium text-gray-700">Tipo de Informe:</label>
                        <select id="reportTypeFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todos</option>
                            <option>Académico</option>
                            <option>Asistencia</option>
                            <option>Financiero</option>
                        </select>
                    </div>
                    {/* Puedes añadir más filtros aquí */}
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Aplicar Filtros</button>
                </div>
            </div>

            {/* Fila de Tarjetas de Informe (anteriormente Bootstrap .row) */}
            <div className="flex flex-wrap -mx-2 mb-8"> {/* Usa flex-wrap para responsividad, -mx-2 para compensar el px-2 en los hijos */}
                {informes.map((inf, i) => <InformeCard key={i} informe={inf} />)}
            </div>

            {/* Tarjeta para generar informes personalizados */}
            <Card title="Generar informe personalizado">
                {/* Formulario de ejemplo para generar informes */}
                <form className="space-y-4">
                    <div>
                        <label htmlFor="reportGenType" className="block text-sm font-medium text-gray-700">Tipo de Informe a Generar:</label>
                        <select id="reportGenType" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Seleccionar</option>
                            <option>Rendimiento por Estudiante</option>
                            <option>Asistencia por Curso</option>
                            <option>Listado de Calificaciones</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="reportGenDates" className="block text-sm font-medium text-gray-700">Rango de Fechas:</label>
                        <input type="date" className="mt-1 mr-2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                        <input type="date" className="mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                    </div>
                    <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">Generar</button>
                </form>
            </Card>
        </div>
    );
};

export default InformesTab;
