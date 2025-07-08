// src/pages/Dashboards/directivo/tabs/InformesTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Asegúrate que esta ruta sea correcta

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './InformesTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

// Componente InformeCard con clases Tailwind
const InformeCard = ({ informe }) => (
    // Columna para la tarjeta de informe. w-full para ancho completo en móvil, md:w-1/3 para 1/3 en desktop, px-3 para padding horizontal.
    <div className="w-full md:w-1/3 px-3 mb-6"> {/* Ajustado a px-3 y mb-6 para consistencia */}
        <Card title={informe.titulo}>
            {/* Texto descriptivo con margen inferior */}
            <p className="text-gray-700 text-base mb-5">{informe.desc}</p> {/* Texto más grande, más margen */}
            {/* Grupo de botones con espacio entre ellos */}
            <div className="flex space-x-3"> {/* Espacio aumentado */}
                {/* Botón "Ver" con estilos pulidos de Tailwind */}
                <button className="flex-1 px-4 py-2 text-sm font-semibold text-primary-600 border border-primary-600 rounded-md hover:bg-primary-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200">Ver</button>
                {/* Botón "Descargar" con estilos pulidos de Tailwind */}
                <button className="flex-1 px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-400 rounded-md hover:bg-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all duration-200">Descargar</button>
            </div>
        </Card>
    </div>
);

const InformesTab = ({ showToast, setShowGlobalSpinner }) => { // Si necesitas props aquí, añádelas
    const informes = [
        { titulo: 'Informe académico', desc: 'Rendimiento por cursos y materias.', id: 1 },
        { titulo: 'Informe de asistencia', desc: 'Análisis de asistencia y casos críticos.', id: 2 },
        { titulo: 'Informe financiero', desc: 'Estado de pagos, matrículas y morosos.', id: 3 },
        // Añade más informes según sea necesario
    ];

    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            {/* Sección de Filtros - Fondo sutil, bordes redondeados y sombra */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Informes</h3>
                <div className="flex flex-wrap items-center gap-6">
                    {/* Ejemplo de un filtro de selección */}
                    <div>
                        <label htmlFor="reportTypeFilter" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Informe:</label>
                        <select id="reportTypeFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todos</option>
                            <option>Académico</option>
                            <option>Asistencia</option>
                            <option>Financiero</option>
                        </select>
                    </div>
                    {/* Puedes añadir más filtros aquí */}
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Aplicar Filtros</button>
                </div>
            </div>

            {/* Fila de Tarjetas de Informe */}
            <div className="flex flex-wrap -mx-3 mb-8"> {/* Usa flex-wrap para responsividad, -mx-3 para compensar el px-3 en los hijos */}
                {informes.map((inf) => <InformeCard key={inf.id} informe={inf} />)} {/* Usar id como key */}
            </div>

            {/* Tarjeta para generar informes personalizados */}
            <Card title="Generar informe personalizado">
                {/* Formulario de ejemplo para generar informes */}
                <form className="space-y-6">
                    <div>
                        <label htmlFor="reportGenType" className="block text-sm font-medium text-gray-700 mb-2">Tipo de Informe a Generar:</label>
                        <select id="reportGenType" className="mt-1 block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Seleccionar</option>
                            <option>Rendimiento por Estudiante</option>
                            <option>Asistencia por Curso</option>
                            <option>Listado de Calificaciones</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="reportGenDates" className="block text-sm font-medium text-gray-700 mb-2">Rango de Fechas:</label>
                        <input type="date" className="mt-1 mr-3 px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200" /> {/* Margen ajustado */}
                        <input type="date" className="mt-1 px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200" />
                    </div>
                    <div className="flex justify-end pt-2">
                        <button type="submit" className="bg-success-600 hover:bg-success-700 text-white font-bold py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-success-500 focus:ring-offset-2 transition-all duration-200 shadow-sm hover:shadow-md">Generar</button> {/* Color de éxito */}
                    </div>
                </form>
            </Card>
        </div>
    );
};

export default InformesTab;
