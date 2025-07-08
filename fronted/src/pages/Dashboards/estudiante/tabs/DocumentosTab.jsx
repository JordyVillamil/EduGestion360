// src/pages/Dashboards/Estudiante/tabs/DocumentosTab.jsx
import React, { useState } from 'react';
import Card from '../../../../components/shared/Card';
import UploadDocumentModal from '../../../../components/Modals/UploadDocumentModal'; // <-- IMPORTADO

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import '../../../styles/Dashboards/Estudiante/DocumentosTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const DocumentosTab = ({ showToast, setShowGlobalSpinner }) => { // Recibe props si son necesarias
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false); // <-- NUEVO ESTADO

    // CAMBIADO: Datos de ejemplo para documentos, añadiendo 'uploadedBy' para un mejor ejemplo
    const [documentos, setDocumentos] = useState([
        { id: 1, fecha: '12/04/2025', titulo: 'Justificativo por ausencia', tipo: 'Justificativo', estado: 'Pendiente' },
        { id: 2, fecha: '08/04/2025', titulo: 'Permiso para salida temprano', tipo: 'Permiso', estado: 'Aprobado' },
        { id: 3, fecha: '02/04/2025', titulo: 'Justificativo médico', tipo: 'Justificativo', estado: 'Aprobado' },
        { id: 4, fecha: '25/03/2025', titulo: 'Formulario de Matrícula', tipo: 'Formulario', estado: 'En Revisión' },
    ]);

    // Función para determinar las clases Tailwind para el badge del estado del documento
    const getStatusBadgeClass = (estado) => {
        if (estado === 'Aprobado') return 'bg-green-100 text-green-800';
        if (estado === 'Pendiente') return 'bg-yellow-100 text-yellow-800';
        if (estado === 'Rechazado') return 'bg-red-100 text-red-800';
        return 'bg-gray-100 text-gray-800'; // En Revisión o cualquier otro estado
    };

    const handleUploadDocument = (documentData) => { // <-- NUEVA FUNCIÓN
        // documentData.documentFile[0] es el objeto File real
        console.log('Subiendo documento:', documentData.title, documentData.documentFile[0]);
        setShowGlobalSpinner(true); // Mostrar spinner global al iniciar la subida
        setTimeout(() => {
            const newDoc = {
                id: documentos.length > 0 ? Math.max(...documentos.map(d => d.id)) + 1 : 1,
                fecha: new Date().toLocaleDateString('es-CO'), // Fecha actual
                titulo: documentData.title,
                type: documentData.documentFile[0].name.split('.').pop().toUpperCase(), // Obtiene la extensión
                estado: 'Pendiente', // Estado inicial al subir
                uploadedBy: 'Estudiante', // Simula que el estudiante actual sube
            };
            setDocumentos((prevDocs) => [...prevDocs, newDoc]);
            showToast('Documento subido con éxito', 'success');
            setShowGlobalSpinner(false); // Ocultar spinner
            setIsUploadModalOpen(false); // Cerrar modal
        }, 1500); // Simular una carga de 1.5 segundos
    };

    const handleDownloadDocument = (docId) => {
        // Lógica para descargar el documento
        showToast(`Descargando documento ID: ${docId}`, 'info');
        // En un caso real, aquí harías una llamada a la API para descargar el archivo.
    };

    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Mis Documentos</h3>

            {/* Sección de Filtros - Fondo sutil, bordes redondeados y sombra */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Documentos</h3>
                <div className="flex flex-wrap items-center gap-6">
                    <div>
                        <label htmlFor="docTypeFilter" className="block text-sm font-medium text-gray-700 mb-1">Tipo:</label>
                        <select id="docTypeFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todos</option>
                            <option>Justificativo</option>
                            <option>Permiso</option>
                            <option>Formulario</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="docStatusFilter" className="block text-sm font-medium text-gray-700 mb-1">Estado:</label>
                        <select id="docStatusFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todos</option>
                            <option>Aprobado</option>
                            <option>Pendiente</option>
                            <option>En Revisión</option>
                            <option>Rechazado</option>
                        </select>
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Aplicar Filtros</button>
                    {/* Botón para subir nuevo documento, visible en esta pestaña */}
                    <button
                        onClick={() => setIsUploadModalOpen(true)} // <-- CAMBIO: ABRE EL MODAL
                        className="bg-success-600 hover:bg-success-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-success-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg ml-auto"
                    >
                        <i className="fas fa-plus-circle mr-2"></i> Subir Documento
                    </button>
                </div>
            </div>

            <Card title="Mis Documentos Enviados">
                {/* Responsive table container */}
                <div className="overflow-x-auto">
                    {/* Table with Tailwind styles */}
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Fecha</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Título</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Tipo</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Estado</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {documentos.map((doc) => (
                                <tr key={doc.id} className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{doc.fecha}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{doc.titulo}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{doc.tipo}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        {/* Badge for status with conditional Tailwind classes */}
                                        <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(doc.estado)}`}>
                                            {doc.estado}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-left text-base">
                                        {/* "View" button with polished Tailwind styles */}
                                        <button onClick={() => handleDownloadDocument(doc.id)} className="text-primary-600 hover:text-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors duration-200">
                                            <i className="fas fa-eye mr-1"></i> Ver
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {documentos.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                                        No hay documentos disponibles.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </Card>

            {/* Renderiza el modal de subir documento */}
            <UploadDocumentModal
                isOpen={isUploadModalOpen}
                onOpenChange={setIsUploadModalOpen}
                onSubmit={handleUploadDocument}
                setShowGlobalSpinner={setShowGlobalSpinner} // Pasa el setter del spinner
            />
        </div>
    );
};

export default DocumentosTab;