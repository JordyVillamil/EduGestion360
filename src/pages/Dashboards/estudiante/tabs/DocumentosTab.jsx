// src/pages/Dashboards/Estudiante/tabs/DocumentosTab.jsx
import React from 'react';
// Asegúrate que esta ruta sea correcta para tu componente compartido
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import '../../../styles/Dashboards/Estudiante/DocumentosTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const DocumentosTab = ({ showToast, setShowGlobalSpinner }) => { // Recibe props si son necesarias
    const documentos = [
        { id: 1, fecha: '12/04/2025', titulo: 'Justificativo por ausencia', tipo: 'Justificativo', estado: 'Pendiente' },
        { id: 2, fecha: '08/04/2025', titulo: 'Permiso para salida temprano', tipo: 'Permiso', estado: 'Aprobado' },
        { id: 3, fecha: '02/04/2025', titulo: 'Justificativo médico', tipo: 'Justificativo', estado: 'Aprobado' },
        { id: 4, fecha: '25/03/2025', titulo: 'Formulario de Matrícula', tipo: 'Formulario', estado: 'En Revisión' },
    ];

    // Función para determinar las clases Tailwind para el badge del estado del documento
    const getStatusBadgeClass = (estado) => {
        if (estado === 'Aprobado') return 'bg-green-100 text-green-800';
        if (estado === 'Pendiente') return 'bg-yellow-100 text-yellow-800';
        if (estado === 'Rechazado') return 'bg-red-100 text-red-800';
        return 'bg-gray-100 text-gray-800'; // En Revisión o cualquier otro estado
    };

    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Mis Documentos</h3>

            {/* Sección de Filtros (ejemplo) */}
            <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtros de Documentos</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <div>
                        <label htmlFor="docTypeFilter" className="block text-sm font-medium text-gray-700">Tipo:</label>
                        <select id="docTypeFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todos</option>
                            <option>Justificativo</option>
                            <option>Permiso</option>
                            <option>Formulario</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="docStatusFilter" className="block text-sm font-medium text-gray-700">Estado:</label>
                        <select id="docStatusFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todos</option>
                            <option>Aprobado</option>
                            <option>Pendiente</option>
                            <option>En Revisión</option>
                            <option>Rechazado</option>
                        </select>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Aplicar Filtros</button>
                </div>
            </div>

            <Card title="Mis Documentos Enviados">
                {/* Contenedor responsivo para la tabla */}
                <div className="overflow-x-auto">
                    {/* Tabla con estilos de Tailwind */}
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Título</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tipo</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {documentos.map((doc) => (
                                <tr key={doc.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{doc.fecha}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{doc.titulo}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{doc.tipo}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        {/* Badge para el estado con clases condicionales de Tailwind */}
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(doc.estado)}`}>
                                            {doc.estado}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-left text-sm font-medium">
                                        {/* Botón "Ver" con estilos de Tailwind */}
                                        <button className="text-blue-600 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                            <i className="fas fa-eye"></i> Ver
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
};

export default DocumentosTab;
