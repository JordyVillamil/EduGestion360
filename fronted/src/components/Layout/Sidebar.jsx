// src/components/Layout/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog'; // Importamos Radix Dialog

function Sidebar({ isOpen, onClose }) {
    const location = useLocation();
    const isActive = (path) => location.pathname.startsWith(path);
    const userRole = localStorage.getItem('userRole') || 'estudiante';

    return (
        <>
            {/* Sidebar para pantallas grandes (visible en lg y arriba) */}
            {/* Ancho w-64, fondo blanco, sombra a la derecha, fijo debajo del header */}
            {/* AÑADIDOS: rounded-lg y border border-gray-200 */}
            <aside className="hidden lg:block w-64 bg-white shadow-lg fixed top-16 left-0 overflow-y-auto z-40 border-r border-gray-200 py-4
                              rounded-r-lg"> {/* rounded-r-lg para redondear solo la esquina derecha */}
                <div className="px-4">
                    <h5 className="text-lg font-bold mb-5 text-gray-700">Menú</h5>
                    <nav className="flex flex-col space-y-1">
                        <Link
                            to={`/dashboard/${userRole}`}
                            className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 ${isActive(`/dashboard/${userRole}`) ? 'bg-primary-100 text-primary-700 font-semibold' : ''}`}
                        >
                            <i className="fas fa-tachometer-alt fa-fw mr-3 text-lg"></i><span>Dashboard</span>
                        </Link>
                        <Link
                            to="/dashboard/mi-perfil"
                            className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 ${isActive('/dashboard/mi-perfil') ? 'bg-primary-100 text-primary-700 font-semibold' : ''}`}
                        >
                            <i className="fas fa-user fa-fw mr-3 text-lg"></i><span>Mi Perfil</span>
                        </Link>
                        <Link
                            to="/dashboard/materias"
                            className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 ${isActive('/dashboard/materias') ? 'bg-primary-100 text-primary-700 font-semibold' : ''}`}
                        >
                            <i className="fas fa-book fa-fw mr-3 text-lg"></i><span>Materias</span>
                        </Link>
                        <Link
                            to="/dashboard/calendario-global"
                            className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 ${isActive('/dashboard/calendario-global') ? 'bg-primary-100 text-primary-700 font-semibold' : ''}`}
                        >
                            <i className="fas fa-calendar-alt fa-fw mr-3 text-lg"></i><span>Calendario</span>
                        </Link>
                        <Link
                            to="/dashboard/documentos-global"
                            className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 ${isActive('/dashboard/documentos-global') ? 'bg-primary-100 text-primary-700 font-semibold' : ''}`}
                        >
                            <i className="fas fa-file-alt fa-fw mr-3 text-lg"></i><span>Documentos</span>
                        </Link>
                        <Link
                            to="/dashboard/configuracion"
                            className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 ${isActive('/dashboard/configuracion') ? 'bg-primary-100 text-primary-700 font-semibold' : ''}`}
                        >
                            <i className="fas fa-cog fa-fw mr-3 text-lg"></i><span>Configuración</span>
                        </Link>
                    </nav>
                </div>
            </aside>

            {/* Sidebar para móviles (Radix Dialog) - Mantenemos h-full para el overlay */}
            <Dialog.Root open={isOpen} onOpenChange={onClose}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/50 z-[999] transition-opacity duration-300 data-[state=closed]:opacity-0 data-[state=open]:opacity-100" /> {/* Backdrop con transición */}
                    {/* AÑADIDOS: rounded-r-lg y border border-gray-200 al Content del Dialog */}
                    <Dialog.Content className="fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-[1000] p-4 flex flex-col transform transition-transform duration-300 ease-in-out data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0
                                            rounded-r-lg border-r border-gray-200">
                        <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-4">
                            <Dialog.Title className="text-xl font-bold text-gray-800">Menú</Dialog.Title>
                            <Dialog.Close asChild>
                                <button className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500">
                                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </button>
                            </Dialog.Close>
                        </div>
                        <nav className="flex flex-col space-y-1">
                            {/* Estos enlaces también cierran el diálogo al hacer clic */}
                            <Dialog.Close asChild>
                                <Link to={`/dashboard/${userRole}`} className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 ${isActive(`/dashboard/${userRole}`) ? 'bg-primary-100 text-primary-700 font-semibold' : ''}`}>
                                    <i className="fas fa-tachometer-alt fa-fw mr-3 text-lg"></i><span>Dashboard</span>
                                </Link>
                            </Dialog.Close>
                            <Dialog.Close asChild>
                                <Link to="/dashboard/mi-perfil" className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 ${isActive('/dashboard/mi-perfil') ? 'bg-primary-100 text-primary-700 font-semibold' : ''}`}>
                                    <i className="fas fa-user fa-fw mr-3 text-lg"></i><span>Mi Perfil</span>
                                </Link>
                            </Dialog.Close>
                            <Dialog.Close asChild>
                                <Link to="/dashboard/materias" className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 ${isActive('/dashboard/materias') ? 'bg-primary-100 text-primary-700 font-semibold' : ''}`}>
                                    <i className="fas fa-book fa-fw mr-3 text-lg"></i><span>Materias</span>
                                </Link>
                            </Dialog.Close>
                            <Dialog.Close asChild>
                                <Link to="/dashboard/calendario-global" className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 ${isActive('/dashboard/calendario-global') ? 'bg-primary-100 text-primary-700 font-semibold' : ''}`}>
                                    <i className="fas fa-calendar-alt fa-fw mr-3 text-lg"></i><span>Calendario</span>
                                </Link>
                            </Dialog.Close>
                            <Dialog.Close asChild>
                                <Link to="/dashboard/documentos-global" className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 ${isActive('/dashboard/documentos-global') ? 'bg-primary-100 text-primary-700 font-semibold' : ''}`}>
                                    <i className="fas fa-file-alt fa-fw mr-3 text-lg"></i><span>Documentos</span>
                                </Link>
                            </Dialog.Close>
                            <Dialog.Close asChild>
                                <Link to="/dashboard/configuracion" className={`flex items-center px-4 py-2 rounded-lg text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors duration-200 ${isActive('/dashboard/configuracion') ? 'bg-primary-100 text-primary-700 font-semibold' : ''}`}>
                                    <i className="fas fa-cog fa-fw mr-3 text-lg"></i><span>Configuración</span>
                                </Link>
                            </Dialog.Close>
                        </nav>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}

export default Sidebar;