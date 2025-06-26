// src/pages/Dashboards/directivo/tabs/UsuariosTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Ensure this path is correct

const UsuariosTab = ({ showToast, setShowGlobalSpinner }) => { // If you need props here, add them
    const usuarios = [
        { id: 1, nombre: 'Juan Martínez', usuario: 'jmartinez', email: 'j@m.com', rol: 'Docente', estado: 'Activo' },
        { id: 2, nombre: 'Laura Torres', usuario: 'ltorres', email: 'l@t.com', rol: 'Directivo', estado: 'Activo' },
        { id: 3, nombre: 'Carlos López', usuario: 'clopez', email: 'c@l.com', rol: 'Estudiante', estado: 'Bloqueado' },
        { id: 4, nombre: 'María García', usuario: 'mgarcia', email: 'm@g.com', rol: 'Estudiante', estado: 'Activo' },
        { id: 5, nombre: 'Pedro Pérez', usuario: 'pperez', email: 'p@p.com', rol: 'Padre', estado: 'Inactivo' },
    ];

    return (
        // Main tab container with padding
        <div className="p-4">
            {/* Filter Section - Subtle background, rounded borders, and shadow */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Usuarios</h3>
                <div className="flex flex-wrap items-center gap-6">
                    <div>
                        <label htmlFor="roleFilter" className="block text-sm font-medium text-gray-700 mb-1">Rol:</label>
                        <select id="roleFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todos</option>
                            <option>Estudiante</option>
                            <option>Docente</option>
                            <option>Directivo</option>
                            <option>Padre</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700 mb-1">Estado:</label>
                        <select id="statusFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todos</option>
                            <option>Activo</option>
                            <option>Inactivo</option>
                            <option>Bloqueado</option>
                        </select>
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Aplicar Filtros</button>
                    <button className="bg-success-600 hover:bg-success-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-success-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg ml-auto">
                        <i className="fas fa-user-plus mr-2"></i> Nuevo Usuario
                    </button>
                </div>
            </div>

            <Card title="Usuarios del Sistema">
                {/* Responsive table container with horizontal scroll */}
                <div className="overflow-x-auto">
                    {/* Table with Tailwind styles */}
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Nombre</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Email</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Rol</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Estado</th>
                                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {usuarios.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-150">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.nombre}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{user.rol}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        {/* Badge for status with conditional Tailwind classes */}
                                        <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${ // Adjusted padding
                                            user.estado === 'Activo' ? 'bg-green-100 text-green-800' :
                                            user.estado === 'Bloqueado' ? 'bg-red-100 text-red-800' :
                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                            {user.estado}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-left text-base"> {/* Base text size for actions */}
                                        {/* Action buttons with Tailwind styles */}
                                        <button className="text-primary-600 hover:text-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 mr-3 transition-colors duration-200"> {/* Adjusted margin and hover color */}
                                            <i className="fas fa-edit"></i> Editar
                                        </button>
                                        <button className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"> {/* Adjusted hover color */}
                                            <i className="fas fa-trash"></i> Eliminar
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

export default UsuariosTab;
