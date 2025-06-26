// src/components/Layout/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';

function Sidebar({ isOpen, onClose }) {
    const location = useLocation();
    // Ajustamos el isActive para que detecte si la ruta actual *comienza* con la ruta del link,
    // útil para dashboards con sub-rutas (ej. /dashboard/estudiante/tareas)
    const isActive = (path) => location.pathname.startsWith(path);
    const userRole = localStorage.getItem('userRole') || 'estudiante';

    return (
        <>
            {/* Sidebar para pantallas grandes (visible en lg y arriba) */}
            <aside className="hidden lg:block w-60 bg-white shadow-md fixed top-16 left-0 h-[calc(100vh-64px)] overflow-y-auto z-40 border-r border-gray-200">
                <div className="p-4">
                    <h5 className="text-lg font-semibold mb-4 text-gray-700">Menú</h5>
                    <div className="flex flex-col space-y-1">
                        {/* Asegúrate que todos los enlaces apuntan a /dashboard/... */}
                        <Link
                            to={`/dashboard/${userRole}`} // <-- CAMBIO AQUÍ
                            className={`flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${isActive(`/dashboard/${userRole}`) ? 'bg-blue-100 text-blue-700 font-semibold' : ''}`}
                        >
                            <i className="fas fa-tachometer-alt fa-fw mr-3"></i><span>Dashboard</span>
                        </Link>
                        <Link
                            to="/dashboard/mi-perfil" // <-- CAMBIO AQUÍ
                            className={`flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${isActive('/dashboard/mi-perfil') ? 'bg-blue-100 text-blue-700 font-semibold' : ''}`}
                        >
                            <i className="fas fa-user fa-fw mr-3"></i><span>Mi Perfil</span>
                        </Link>
                        <Link
                            to="/dashboard/materias" // <-- CAMBIO AQUÍ
                            className={`flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${isActive('/dashboard/materias') ? 'bg-blue-100 text-blue-700 font-semibold' : ''}`}
                        >
                            <i className="fas fa-book fa-fw mr-3"></i><span>Materias</span>
                        </Link>
                        <Link
                            to="/dashboard/calendario-global" // <-- CAMBIO AQUÍ
                            className={`flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${isActive('/dashboard/calendario-global') ? 'bg-blue-100 text-blue-700 font-semibold' : ''}`}
                        >
                            <i className="fas fa-calendar-alt fa-fw mr-3"></i><span>Calendario</span>
                        </Link>
                        <Link
                            to="/dashboard/documentos-global" // <-- CAMBIO AQUÍ
                            className={`flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${isActive('/dashboard/documentos-global') ? 'bg-blue-100 text-blue-700 font-semibold' : ''}`}
                        >
                            <i className="fas fa-file-alt fa-fw mr-3"></i><span>Documentos</span>
                        </Link>
                        <Link
                            to="/dashboard/configuracion" // <-- CAMBIO AQUÍ
                            className={`flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${isActive('/dashboard/configuracion') ? 'bg-blue-100 text-blue-700 font-semibold' : ''}`}
                        >
                            <i className="fas fa-cog fa-fw mr-3"></i><span>Configuración</span>
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Sidebar para móviles (Radix Dialog) */}
            <Dialog.Root open={isOpen} onOpenChange={onClose}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[999]" /> {/* Backdrop oscuro */}
                    <Dialog.Content className="fixed top-0 left-0 h-full w-60 bg-white shadow-lg z-[1000] p-4 flex flex-col transform transition-transform duration-300 ease-in-out data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0">
                        <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
                            <Dialog.Title className="text-lg font-semibold text-gray-700">Menú</Dialog.Title>
                            <Dialog.Close asChild>
                                <button className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </Dialog.Close>
                        </div>
                        <div className="flex flex-col space-y-1">
                            {/* Estos enlaces también cierran el diálogo al hacer clic */}
                            <Dialog.Close asChild>
                                <Link to={`/dashboard/${userRole}`} className={`flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${isActive(`/dashboard/${userRole}`) ? 'bg-blue-100 text-blue-700 font-semibold' : ''}`}> {/* <-- CAMBIO AQUÍ */}
                                    <i className="fas fa-tachometer-alt fa-fw mr-3"></i><span>Dashboard</span>
                                </Link>
                            </Dialog.Close>
                            <Dialog.Close asChild>
                                <Link to="/dashboard/mi-perfil" className={`flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${isActive('/dashboard/mi-perfil') ? 'bg-blue-100 text-blue-700 font-semibold' : ''}`}> {/* <-- CAMBIO AQUÍ */}
                                    <i className="fas fa-user fa-fw mr-3"></i><span>Mi Perfil</span>
                                </Link>
                            </Dialog.Close>
                            <Dialog.Close asChild>
                                <Link to="/dashboard/materias" className={`flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${isActive('/dashboard/materias') ? 'bg-blue-100 text-blue-700 font-semibold' : ''}`}> {/* <-- CAMBIO AQUÍ */}
                                    <i className="fas fa-book fa-fw mr-3"></i><span>Materias</span>
                                </Link>
                            </Dialog.Close>
                            <Dialog.Close asChild>
                                <Link to="/dashboard/calendario-global" className={`flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${isActive('/dashboard/calendario-global') ? 'bg-blue-100 text-blue-700 font-semibold' : ''}`}> {/* <-- CAMBIO AQUÍ */}
                                    <i className="fas fa-calendar-alt fa-fw mr-3"></i><span>Calendario</span>
                                </Link>
                            </Dialog.Close>
                            <Dialog.Close asChild>
                                <Link to="/dashboard/documentos-global" className={`flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${isActive('/dashboard/documentos-global') ? 'bg-blue-100 text-blue-700 font-semibold' : ''}`}> {/* <-- CAMBIO AQUÍ */}
                                    <i className="fas fa-file-alt fa-fw mr-3"></i><span>Documentos</span>
                                </Link>
                            </Dialog.Close>
                            <Dialog.Close asChild>
                                <Link to="/dashboard/configuracion" className={`flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-blue-50 hover:text-blue-600 ${isActive('/dashboard/configuracion') ? 'bg-blue-100 text-blue-700 font-semibold' : ''}`}> {/* <-- CAMBIO AQUÍ */}
                                    <i className="fas fa-cog fa-fw mr-3"></i><span>Configuración</span>
                                </Link>
                            </Dialog.Close>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}

export default Sidebar;
