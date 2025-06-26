// src/components/Layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

function Header({ onToggleSidebar }) {
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || 'estudiante');
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'Nueva tarea de Matemáticas', time: 'hace 5 min' },
        { id: 2, message: 'Calificación de Ciencias publicada', time: 'hace 2 horas' },
        { id: 3, message: 'Reunión de padres mañana', time: 'ayer' },
    ]);

    useEffect(() => {
        const handleStorageChange = () => {
            setUserRole(localStorage.getItem('userRole') || 'estudiante');
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const handleRoleChange = (newRole) => {
        localStorage.setItem('userRole', newRole);
        setUserRole(newRole);
        navigate(`/dashboard/${newRole}`);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('userRole');
        navigate('/');
    };

    const getRoleText = (role) => {
        switch (role) {
            case 'estudiante': return 'Estudiante / Padre';
            case 'docente': return 'Docente';
            case 'directivo': return 'Directivo';
            default: return 'Seleccionar Perfil';
        }
    };

    return (
        // Header principal: fondo blanco, sombra sutil, fijo en la parte superior, z-index alto
        // Padding responsivo y un margen izquierdo en pantallas grandes para compensar el sidebar fijo
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 py-3 px-4 flex items-center justify-between lg:justify-start lg:pl-64 transition-all duration-300 ease-in-out">
            {/* Botón de hamburguesa para abrir el Sidebar en pantallas pequeñas */}
            <button
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
                onClick={onToggleSidebar}
                aria-label="Toggle navigation"
            >
                <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            {/* Logo de la marca: icono y texto, con color primario */}
            <Link className="flex items-center text-gray-800 text-2xl font-bold ml-4 lg:ml-0 transition-colors duration-200 hover:text-primary-700" to="/dashboard">
                <i className="fas fa-graduation-cap mr-2 text-primary-600 text-3xl" aria-hidden="true"></i>
                EduGestión 360
            </Link>

            {/* Espaciador flexible para empujar los elementos de la derecha */}
            <div className="flex-grow hidden lg:block"></div>

            {/* Menú de navegación a la derecha (enlaces y dropdowns) */}
            <div className="flex items-center space-x-4 ml-auto">
                <ul className="flex items-center space-x-4">
                    {/* Enlaces de navegación principales (ocultos en móvil) */}
                    <li className="hidden lg:block">
                        <Link className="px-3 py-2 text-gray-700 hover:text-primary-600 font-medium rounded-md transition-colors duration-200" to={`/dashboard/${userRole}`}>
                            <i className="fas fa-home mr-1"></i> Inicio
                        </Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link className="px-3 py-2 text-gray-700 hover:text-primary-600 font-medium rounded-md transition-colors duration-200" to="/dashboard/mi-perfil">
                            <i className="fas fa-user mr-1"></i> Mi Perfil
                        </Link>
                    </li>

                    {/* Dropdown de Perfil (Radix UI) */}
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button
                                className="flex items-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer transition-colors duration-200"
                                aria-label="Abrir menú de perfil"
                            >
                                <img
                                    src="https://placehold.co/36x36/primary-500/ffffff?text=AV" // Usando tu color primario para el placeholder
                                    alt="Avatar"
                                    className="rounded-full mr-2 border border-primary-200"
                                    width="36" // Tamaño ligeramente mayor
                                    height="36"
                                />
                                <span className="text-gray-700 font-medium hidden md:block">{getRoleText(userRole)}</span>
                                <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <DropdownMenu.Content className="bg-white rounded-lg shadow-lg p-2 min-w-[220px] z-[1000] animate-fadeIn border border-gray-100" align="end" sideOffset={8}> {/* Borde, sombra más suave */}
                                <DropdownMenu.Label className="px-3 py-2 text-xs text-gray-500 border-b border-gray-100 mb-1 font-semibold">Cambiar Rol</DropdownMenu.Label> {/* Separador */}
                                <DropdownMenu.Item asChild>
                                    <button className="flex items-center w-full px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 cursor-pointer transition-colors duration-150">
                                        <i className="fas fa-user-graduate mr-3 text-lg"></i> Estudiante / Padre
                                    </button>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item asChild>
                                    <button className="flex items-center w-full px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 cursor-pointer transition-colors duration-150">
                                        <i className="fas fa-chalkboard-teacher mr-3 text-lg"></i> Docente
                                    </button>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item asChild>
                                    <button className="flex items-center w-full px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 cursor-pointer transition-colors duration-150">
                                        <i className="fas fa-user-tie mr-3 text-lg"></i> Directivo
                                    </button>
                                </DropdownMenu.Item>
                                <DropdownMenu.Separator className="h-[1px] bg-gray-200 my-1" />
                                <DropdownMenu.Item asChild>
                                    <button className="flex items-center w-full px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 cursor-pointer transition-colors duration-150" onClick={handleLogout}> {/* Color de hover para logout */}
                                        <i className="fas fa-sign-out-alt mr-3 text-lg"></i> Cerrar Sesión
                                    </button>
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>

                    {/* Dropdown de Notificaciones (Radix UI) */}
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button
                                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 relative transition-colors duration-200"
                                aria-label="Ver notificaciones"
                            >
                                <i className="fas fa-bell text-gray-700 text-xl"></i> {/* Icono más grande */}
                                {notifications.length > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-warning text-white text-xs font-bold px-1.5 py-0.5 rounded-full border-2 border-white"> {/* Borde blanco para destacar */}
                                        {notifications.length}
                                        <span className="sr-only">notificaciones sin leer</span>
                                    </span>
                                )}
                            </button>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <DropdownMenu.Content className="bg-white rounded-lg shadow-lg p-2 min-w-[300px] z-[1000] animate-fadeIn border border-gray-100" align="end" sideOffset={8}>
                                <DropdownMenu.Label className="px-3 py-2 text-xs text-gray-500 border-b border-gray-100 mb-1 font-semibold">Notificaciones</DropdownMenu.Label>
                                {notifications.length > 0 ? (
                                    notifications.map(notif => (
                                        <DropdownMenu.Item key={notif.id} asChild>
                                            <a className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150" href="#">
                                                <strong className="block mb-0.5">{notif.message}</strong> {/* Espaciado */}
                                                <small className="text-gray-500 text-xs">{notif.time}</small>
                                            </a>
                                        </DropdownMenu.Item>
                                    ))
                                ) : (
                                    <DropdownMenu.Item className="px-3 py-2 text-sm text-gray-500" disabled>
                                        No hay notificaciones nuevas.
                                    </DropdownMenu.Item>
                                )}
                                <DropdownMenu.Separator className="h-[1px] bg-gray-200 my-1" />
                                <DropdownMenu.Item asChild>
                                    <a className="block w-full text-center px-3 py-2 rounded-md text-sm text-primary-600 hover:bg-primary-50 transition-colors duration-150" href="#">
                                        Ver todas
                                    </a>
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
