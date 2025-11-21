// src/components/Layout/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

function Header({ onToggleSidebar }) {
    const navigate = useNavigate();
    const [userRole, setUserRole] = useState(localStorage.getItem('userRole') || 'estudiante');
    const [scrolled, setScrolled] = useState(false);
    const [notifications, setNotifications] = useState([
        { id: 1, message: 'Nueva tarea de Matemáticas', time: 'hace 5 min', unread: true },
        { id: 2, message: 'Calificación de Ciencias publicada', time: 'hace 2 horas', unread: true },
        { id: 3, message: 'Reunión de padres mañana', time: 'ayer', unread: false },
    ]);

    // Efecto de scroll para el header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    const unreadCount = notifications.filter(n => n.unread).length;

    return (
        <nav className={`fixed top-0 left-0 right-0 h-20 z-50 px-6 flex items-center justify-between transition-all duration-300 ease-in-out ${
            scrolled 
                ? 'bg-white/90 backdrop-blur-lg shadow-xl' 
                : 'bg-white shadow-lg'
        }`}>

            {/* Contenedor del botón hamburguesa (visible en todas las pantallas) */}
            <div className="flex items-center gap-4 animate-fadeIn">
                <button
                    className="relative group p-3.5 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition-all duration-300 transform hover:scale-110 active:scale-95 shadow-lg hover:shadow-2xl"
                    onClick={onToggleSidebar}
                    aria-label="Toggle navigation"
                >
                    <div className="relative w-7 h-7 flex flex-col justify-center items-center">
                        <span className="absolute w-6 h-0.5 bg-white rounded-full transform transition-all duration-300 group-hover:w-7 -translate-y-2"></span>
                        <span className="absolute w-6 h-0.5 bg-white rounded-full transition-all duration-300 group-hover:w-5"></span>
                        <span className="absolute w-6 h-0.5 bg-white rounded-full transform transition-all duration-300 group-hover:w-7 translate-y-2"></span>
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                
                <Link className="flex items-center text-gray-800 text-3xl font-extrabold transition-all duration-200 hover:text-primary-700 group" to="/dashboard">
                    <i className="fas fa-graduation-cap mr-3 text-primary-600 text-4xl group-hover:rotate-12 transition-transform duration-300" aria-hidden="true"></i>
                    <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">EduGestión 360</span>
                </Link>
            </div>

            {/* Contenedor del contenido a la derecha */}
            <div className="flex items-center space-x-5 ml-auto">
                <ul className="flex items-center space-x-5">
                    {/* Enlaces de navegación principales */}
                    <li className="hidden lg:block animate-fadeIn">
                        <Link className="px-6 py-3.5 text-gray-700 hover:text-primary-600 font-semibold text-lg rounded-xl transition-all duration-200 hover:bg-primary-50 transform hover:scale-105 hover:shadow-md" to={`/dashboard/${userRole}`}>
                            <i className="fas fa-home mr-2.5 text-xl"></i> Inicio
                        </Link>
                    </li>
                    <li className="hidden lg:block animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                        <Link className="px-6 py-3.5 text-gray-700 hover:text-primary-600 font-semibold text-lg rounded-xl transition-all duration-200 hover:bg-primary-50 transform hover:scale-105 hover:shadow-md" to="/dashboard/mi-perfil">
                            <i className="fas fa-user mr-2.5 text-xl"></i> Mi Perfil
                        </Link>
                    </li>

                    {/* Dropdown de Perfil */}
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button
                                className="flex items-center px-3 py-2.5 rounded-xl hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md"
                                aria-label="Abrir menú de perfil"
                            >
                                <div className="relative">
                                    <img
                                        src="https://placehold.co/48x48/4361ee/ffffff?text=U"
                                        alt="Avatar"
                                        className="rounded-full mr-3 border-2 border-primary-200 shadow-md hover:shadow-glow transition-all duration-300"
                                        width="48"
                                        height="48"
                                    />
                                    <span className="absolute bottom-0 right-3 w-3.5 h-3.5 bg-success-500 border-2 border-white rounded-full animate-pulse"></span>
                                </div>
                                <span className="text-gray-700 font-bold text-lg hidden md:block">{getRoleText(userRole)}</span>
                                <svg className="w-5 h-5 ml-2 text-gray-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <DropdownMenu.Content className="bg-white rounded-xl shadow-2xl p-2 min-w-[240px] z-[1000] animate-scaleIn border border-gray-100" align="end" sideOffset={8}>
                                <DropdownMenu.Label className="px-4 py-3 text-xs text-gray-500 border-b border-gray-100 mb-2 font-bold uppercase tracking-wider">
                                    Cambiar Rol
                                </DropdownMenu.Label>
                                
                                <DropdownMenu.Item asChild>
                                    <button 
                                        onClick={() => handleRoleChange('estudiante')}
                                        className="flex items-center w-full px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 cursor-pointer transition-all duration-200 transform hover:translate-x-1"
                                    >
                                        <i className="fas fa-user-graduate mr-3 text-lg w-5"></i> 
                                        <span className="font-medium">Estudiante / Padre</span>
                                    </button>
                                </DropdownMenu.Item>
                                
                                <DropdownMenu.Item asChild>
                                    <button 
                                        onClick={() => handleRoleChange('docente')}
                                        className="flex items-center w-full px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 cursor-pointer transition-all duration-200 transform hover:translate-x-1"
                                    >
                                        <i className="fas fa-chalkboard-teacher mr-3 text-lg w-5"></i>
                                        <span className="font-medium">Docente</span>
                                    </button>
                                </DropdownMenu.Item>
                                
                                <DropdownMenu.Item asChild>
                                    <button 
                                        onClick={() => handleRoleChange('directivo')}
                                        className="flex items-center w-full px-4 py-3 rounded-lg text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 cursor-pointer transition-all duration-200 transform hover:translate-x-1"
                                    >
                                        <i className="fas fa-user-tie mr-3 text-lg w-5"></i>
                                        <span className="font-medium">Directivo</span>
                                    </button>
                                </DropdownMenu.Item>
                                
                                <DropdownMenu.Separator className="h-[1px] bg-gray-200 my-2" />
                                
                                <DropdownMenu.Item asChild>
                                    <button 
                                        className="flex items-center w-full px-4 py-3 rounded-lg text-sm text-red-600 hover:bg-red-50 hover:text-red-700 cursor-pointer transition-all duration-200 font-medium" 
                                        onClick={handleLogout}
                                    >
                                        <i className="fas fa-sign-out-alt mr-3 text-lg w-5"></i>
                                        Cerrar Sesión
                                    </button>
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>

                    {/* Dropdown de Notificaciones */}
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button
                                className="p-3.5 rounded-xl hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 relative transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-sm hover:shadow-md"
                                aria-label="Ver notificaciones"
                            >
                                <i className="fas fa-bell text-gray-700 text-2xl"></i>
                                {unreadCount > 0 && (
                                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-2.5 py-1 rounded-full border-2 border-white shadow-lg animate-bounce-subtle">
                                        {unreadCount}
                                        <span className="sr-only">notificaciones sin leer</span>
                                    </span>
                                )}
                            </button>
                        </DropdownMenu.Trigger>

                        <DropdownMenu.Portal>
                            <DropdownMenu.Content className="bg-white rounded-xl shadow-2xl p-2 min-w-[320px] max-h-[400px] overflow-y-auto custom-scrollbar z-[1000] animate-scaleIn border border-gray-100" align="end" sideOffset={8}>
                                <DropdownMenu.Label className="px-4 py-3 text-xs text-gray-500 border-b border-gray-100 mb-2 font-bold uppercase tracking-wider flex items-center justify-between">
                                    <span>Notificaciones</span>
                                    {unreadCount > 0 && (
                                        <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-bold">
                                            {unreadCount} nuevas
                                        </span>
                                    )}
                                </DropdownMenu.Label>
                                
                                {notifications.length > 0 ? (
                                    notifications.map((notif, index) => (
                                        <DropdownMenu.Item key={notif.id} asChild>
                                            <a 
                                                className={`block px-4 py-3 rounded-lg text-sm hover:bg-gray-50 transition-all duration-200 transform hover:translate-x-1 animate-fadeIn ${
                                                    notif.unread ? 'bg-primary-50/50' : ''
                                                }`}
                                                style={{ animationDelay: `${index * 0.05}s` }}
                                                href="#"
                                            >
                                                <div className="flex items-start">
                                                    <div className={`flex-shrink-0 w-2 h-2 mt-1.5 mr-3 rounded-full ${notif.unread ? 'bg-primary-500 animate-pulse' : 'bg-gray-300'}`}></div>
                                                    <div className="flex-1">
                                                        <strong className="block mb-1 text-gray-800">{notif.message}</strong>
                                                        <small className="text-gray-500 text-xs flex items-center">
                                                            <i className="fas fa-clock mr-1"></i>
                                                            {notif.time}
                                                        </small>
                                                    </div>
                                                </div>
                                            </a>
                                        </DropdownMenu.Item>
                                    ))
                                ) : (
                                    <DropdownMenu.Item className="px-4 py-8 text-sm text-gray-500 text-center" disabled>
                                        <i className="fas fa-bell-slash text-3xl mb-2 text-gray-300"></i>
                                        <p>No hay notificaciones nuevas.</p>
                                    </DropdownMenu.Item>
                                )}
                                
                                <DropdownMenu.Separator className="h-[1px] bg-gray-200 my-2" />
                                
                                <DropdownMenu.Item asChild>
                                    <a 
                                        className="block w-full text-center px-4 py-3 rounded-lg text-sm text-primary-600 hover:bg-primary-50 font-medium transition-all duration-200" 
                                        href="#"
                                    >
                                        Ver todas las notificaciones
                                        <i className="fas fa-arrow-right ml-2"></i>
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
