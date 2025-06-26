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
        <nav className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50 p-4 flex items-center justify-between lg:justify-start lg:pl-60">
            {/* Botón para abrir el Sidebar en pantallas pequeñas */}
            <button
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={onToggleSidebar}
                aria-label="Toggle navigation"
            >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            {/* Logo de la marca en el Header */}
            <Link className="flex items-center text-gray-800 text-xl font-bold ml-4 lg:ml-0" to="/dashboard">
                {/* Icono original de Font Awesome: fas fa-graduation-cap */}
                <i className="fas fa-graduation-cap mr-2 text-blue-500 text-xl" aria-hidden="true"></i> {/* Añadimos text-xl para el tamaño */}
                EduGestión 360
            </Link>

            {/* Este div actuará como un "spacer" en pantallas grandes */}
            <div className="flex-grow hidden lg:block"></div>

            <div className="flex items-center space-x-4 ml-auto">
                <ul className="flex items-center">
                    <li className="hidden lg:block">
                        <Link className="px-3 py-2 text-gray-700 hover:text-primary-600 font-medium" to={`/dashboard/${userRole}`}>
                            <i className="fas fa-home mr-1"></i> Inicio
                        </Link>
                    </li>
                    <li className="hidden lg:block">
                        <Link className="px-3 py-2 text-gray-700 hover:text-primary-600 font-medium" to="/dashboard/mi-perfil">
                            <i className="fas fa-user mr-1"></i> Mi Perfil
                        </Link>
                    </li>

                    {/* Dropdown de Perfil (Radix UI) */}
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button
                                className="flex items-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer"
                                aria-label="Abrir menú de perfil"
                            >
                                <img
                                    src="https://placehold.co/30x30/4361ee/ffffff?text=AV" // Placeholder de avatar, puedes reemplazarlo con una URL real
                                    alt="Avatar"
                                    className="rounded-full mr-2"
                                    width="30"
                                    height="30"
                                />
                                <span className="text-gray-700 font-medium hidden md:block">{getRoleText(userRole)}</span>
                                <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <DropdownMenu.Content className="bg-white rounded-md shadow-lg p-2 min-w-[200px] z-[1000] animate-fadeIn" align="end" sideOffset={5}>
                                <DropdownMenu.Label className="px-2 py-1 text-xs text-gray-500">Cambiar Rol</DropdownMenu.Label>
                                <DropdownMenu.Item asChild>
                                    <button className="flex items-center w-full px-2 py-1.5 rounded-md text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 cursor-pointer" onClick={() => handleRoleChange('estudiante')}>
                                        <i className="fas fa-user-graduate mr-2"></i> Estudiante / Padre
                                    </button>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item asChild>
                                    <button className="flex items-center w-full px-2 py-1.5 rounded-md text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 cursor-pointer" onClick={() => handleRoleChange('docente')}>
                                        <i className="fas fa-chalkboard-teacher mr-2"></i> Docente
                                    </button>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item asChild>
                                    <button className="flex items-center w-full px-2 py-1.5 rounded-md text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 cursor-pointer" onClick={() => handleRoleChange('directivo')}>
                                        <i className="fas fa-user-tie mr-2"></i> Directivo
                                    </button>
                                </DropdownMenu.Item>
                                <DropdownMenu.Separator className="h-[1px] bg-gray-200 my-1" />
                                <DropdownMenu.Item asChild>
                                    <button className="flex items-center w-full px-2 py-1.5 rounded-md text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 cursor-pointer" onClick={handleLogout}>
                                        <i className="fas fa-sign-out-alt mr-2"></i> Cerrar Sesión
                                    </button>
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>

                    {/* Dropdown de Notificaciones (Radix UI) */}
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button
                                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 relative"
                                aria-label="Ver notificaciones"
                            >
                                <i className="fas fa-bell text-gray-700 text-lg"></i>
                                {notifications.length > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-warning text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                                        {notifications.length}
                                        <span className="sr-only">notificaciones sin leer</span>
                                    </span>
                                )}
                            </button>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <DropdownMenu.Content className="bg-white rounded-md shadow-lg p-2 min-w-[280px] z-[1000] animate-fadeIn" align="end" sideOffset={5}>
                                <DropdownMenu.Label className="px-2 py-1 text-xs text-gray-500">Notificaciones</DropdownMenu.Label>
                                {notifications.length > 0 ? (
                                    notifications.map(notif => (
                                        <DropdownMenu.Item key={notif.id} asChild>
                                            <a className="block px-2 py-1.5 rounded-md text-sm text-gray-700 hover:bg-gray-50" href="#">
                                                <strong>{notif.message}</strong> <br />
                                                <small className="text-gray-500">{notif.time}</small>
                                            </a>
                                        </DropdownMenu.Item>
                                    ))
                                ) : (
                                    <DropdownMenu.Item className="px-2 py-1.5 text-sm text-gray-500" disabled>
                                        No hay notificaciones nuevas.
                                    </DropdownMenu.Item>
                                )}
                                <DropdownMenu.Separator className="h-[1px] bg-gray-200 my-1" />
                                <DropdownMenu.Item asChild>
                                    <a className="block w-full text-center px-2 py-1.5 rounded-md text-sm text-primary-600 hover:bg-primary-50" href="#">
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
