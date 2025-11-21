// src/components/Layout/Sidebar.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';

function Sidebar({ isOpen, onClose }) {
    const location = useLocation();
    const isActive = (path) => location.pathname.startsWith(path);
    const userRole = localStorage.getItem('userRole') || 'estudiante';
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const menuItems = [
        { path: `/dashboard/${userRole}`, icon: 'fa-tachometer-alt', label: 'Dashboard', delay: '0s' },
        { path: '/dashboard/mi-perfil', icon: 'fa-user', label: 'Mi Perfil', delay: '0.05s' },
        { path: '/dashboard/materias', icon: 'fa-book', label: 'Materias', delay: '0.1s' },
        { path: '/dashboard/calendario-global', icon: 'fa-calendar-alt', label: 'Calendario', delay: '0.15s' },
        { path: '/dashboard/documentos-global', icon: 'fa-file-alt', label: 'Documentos', delay: '0.2s' },
        { path: '/dashboard/configuracion', icon: 'fa-cog', label: 'Configuración', delay: '0.25s' },
    ];

    const renderMenuItem = (item, isMobile = false) => {
        const activeClass = isActive(item.path) 
            ? 'bg-gradient-to-r from-primary-500 via-primary-600 to-secondary-600 text-white shadow-xl shadow-primary-300/50 scale-105 border-l-4 border-white' 
            : 'text-gray-700 hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 hover:text-primary-700 border-l-4 border-transparent hover:border-primary-400';

        return (
            <Link
                key={item.path}
                to={item.path}
                className={`group relative flex items-center px-5 py-4 rounded-2xl font-medium transition-all duration-300 transform hover:scale-102 hover:translate-x-2 ${activeClass} ${
                    isMobile ? 'animate-fadeInUp' : ''
                } overflow-hidden`}
                style={isMobile ? { animationDelay: item.delay } : {}}
            >
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                <div className={`relative w-11 h-11 flex items-center justify-center rounded-xl mr-4 transition-all duration-300 shadow-md ${
                    isActive(item.path) 
                        ? 'bg-white/25 backdrop-blur-sm' 
                        : 'bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-primary-100 group-hover:to-primary-200 group-hover:shadow-lg'
                }`}>
                    <i className={`fas ${item.icon} text-xl transition-transform duration-300 group-hover:scale-110 ${isActive(item.path) ? 'group-hover:rotate-12' : ''}`}></i>
                </div>
                
                <span className="font-semibold text-lg relative z-10 flex-1">{item.label}</span>
                
                {isActive(item.path) && (
                    <div className="flex items-center space-x-1">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                        <i className="fas fa-chevron-right text-sm animate-bounce-subtle"></i>
                    </div>
                )}
                
                {!isActive(item.path) && (
                    <i className="fas fa-chevron-right text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0"></i>
                )}
            </Link>
        );
    };

    return (
        <>
            {/* Sidebar desplegable para todas las pantallas */}
            <Dialog.Root open={isOpen} onOpenChange={onClose}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] transition-all duration-300 data-[state=closed]:opacity-0 data-[state=open]:opacity-100" />
                    
                    <Dialog.Content className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-white via-gray-50 to-white shadow-2xl z-[1000] p-6 flex flex-col transform transition-all duration-300 ease-out data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0 rounded-tr-3xl rounded-br-3xl border-r-2 border-primary-200 overflow-y-auto custom-scrollbar">
                        {/* Header del sidebar con botón de cierre */}
                        <div className="relative flex items-center justify-between pb-6 border-b-2 border-gradient-primary mb-6 animate-fadeIn">
                            <div className="flex items-center">
                                <div className="relative w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mr-4 shadow-xl animate-pulse-slow overflow-hidden group">
                                    <i className="fas fa-graduation-cap text-white text-2xl relative z-10"></i>
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </div>
                                <div>
                                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent block text-2xl font-extrabold">Menú Principal</span>
                                    <span className="text-xs text-gray-500 font-normal">Navegación rápida</span>
                                </div>
                            </div>
                            <Dialog.Close asChild>
                                <button className="relative group p-3 rounded-xl bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition-all duration-300 transform hover:scale-110 hover:rotate-90 active:scale-95 shadow-lg hover:shadow-xl">
                                    <svg className="w-5 h-5 text-white transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                    <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                                </button>
                            </Dialog.Close>
                        </div>
                        
                        {/* Navegación */}
                        <nav className="flex flex-col space-y-3 flex-1 overflow-y-auto custom-scrollbar pb-6">
                            {menuItems.map((item) => (
                                <Dialog.Close asChild key={item.path}>
                                    {renderMenuItem(item, true)}
                                </Dialog.Close>
                            ))}
                        </nav>
                        
                        {/* Elemento decorativo */}
                        <div className="mt-6 relative overflow-hidden">
                            <div className="relative p-5 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 rounded-2xl text-white shadow-2xl animate-fadeInUp border border-white/20" style={{ animationDelay: '0.3s' }}>
                                <div className="absolute -top-5 -right-5 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                                <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                                <div className="relative z-10">
                                    <div className="flex items-start mb-3">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-3 animate-bounce-subtle shadow-lg">
                                            <i className="fas fa-lightbulb text-2xl text-yellow-300"></i>
                                        </div>
                                        <div>
                                            <h6 className="font-bold text-lg">Consejo del día</h6>
                                            <p className="text-xs text-white/70">Tip educativo</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-white/95 leading-relaxed">
                                        Mantén tus tareas organizadas para un mejor rendimiento académico. La constancia es clave.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
}

export default Sidebar;