// src/pages/Dashboards/directivo/tabs/UsuariosTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './UsuariosTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const UsuariosTab = ({ showToast, setShowGlobalSpinner }) => { // Si necesitas props aquí, añádelas
    const usuarios = [
        { id: 1, nombre: 'Juan Martínez', usuario: 'jmartinez', email: 'j@m.com', rol: 'Docente', estado: 'Activo' },
        { id: 2, nombre: 'Laura Torres', usuario: 'ltorres', email: 'l@t.com', rol: 'Directivo', estado: 'Activo' },
        { id: 3, nombre: 'Carlos López', usuario: 'clopez', email: 'c@l.com', rol: 'Estudiante', estado: 'Bloqueado' },
        { id: 4, nombre: 'María García', usuario: 'mgarcia', email: 'm@g.com', rol: 'Estudiante', estado: 'Activo' },
        { id: 5, nombre: 'Pedro Pérez', usuario: 'pperez', email: 'p@p.com', rol: 'Padre', estado: 'Inactivo' },
    ];

    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            {/* Sección de Filtros (ejemplo) */}
            <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtros de Usuarios</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <div>
                        <label htmlFor="roleFilter" className="block text-sm font-medium text-gray-700">Rol:</label>
                        <select id="roleFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todos</option>
                            <option>Estudiante</option>
                            <option>Docente</option>
                            <option>Directivo</option>
                            <option>Padre</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="statusFilter" className="block text-sm font-medium text-gray-700">Estado:</label>
                        <select id="statusFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todos</option>
                            <option>Activo</option>
                            <option>Inactivo</option>
                            <option>Bloqueado</option>
                        </select>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Aplicar Filtros</button>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md ml-auto">
                        <i className="fas fa-user-plus mr-2"></i> Nuevo Usuario
                    </button>
                </div>
            </div>

            <Card title="Usuarios del Sistema">
                {/* Contenedor responsivo para la tabla, usa overflow-x-auto para el scroll horizontal */}
                <div className="overflow-x-auto">
                    {/* Tabla con estilos de Tailwind: min-w-full para ancho, divide-y para bordes entre filas, hover */}
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {usuarios.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.nombre}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{user.rol}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                                        {/* Badge para el estado con clases condicionales de Tailwind */}
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            user.estado === 'Activo' ? 'bg-green-100 text-green-800' :
                                            user.estado === 'Bloqueado' ? 'bg-red-100 text-red-800' :
                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                            {user.estado}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-left text-sm font-medium">
                                        {/* Botones de acción con estilos de Tailwind */}
                                        <button className="text-blue-600 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mr-2">
                                            <i className="fas fa-edit"></i>
                                        </button>
                                        <button className="text-red-600 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                                            <i className="fas fa-trash"></i>
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
