// src/pages/Auth/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage({ setShowGlobalSpinner, showToast }) {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!emailOrUsername || !password) {
            showToast('Por favor, ingresa tu usuario/email y contraseña.', 'error');
            return;
        }

        setIsLoading(true);
        setShowGlobalSpinner(true);

        setTimeout(() => {
            setIsLoading(false);
            setShowGlobalSpinner(false);

            let redirectPath = '';
            let welcomeMessage = '';
            let userRole = '';

            if (emailOrUsername === 'estudiante' && password === 'pass123') {
                localStorage.setItem('authToken', 'simulated_student_token');
                userRole = 'estudiante';
                welcomeMessage = '¡Bienvenido, Estudiante!';
                redirectPath = '/dashboard/estudiante';
            } else if (emailOrUsername === 'docente' && password === 'pass123') {
                localStorage.setItem('authToken', 'simulated_teacher_token');
                userRole = 'docente';
                welcomeMessage = '¡Bienvenido, Docente!';
                redirectPath = '/dashboard/docente';
            } else if (emailOrUsername === 'directivo' && password === 'pass123') {
                localStorage.setItem('authToken', 'simulated_admin_token');
                userRole = 'directivo';
                welcomeMessage = '¡Bienvenido, Directivo!';
                redirectPath = '/dashboard/directivo';
            } else {
                showToast('Usuario o contraseña incorrectos.', 'error');
                return;
            }

            localStorage.setItem('userRole', userRole);
            showToast(welcomeMessage, 'success');
            navigate(redirectPath);

        }, 1500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center border border-gray-100 transition-all duration-300 hover:shadow-2xl"> {/* Mayor padding, bordes más redondeados, sombra más suave pero con hover */}
                <a className="flex items-center justify-center text-primary-700 text-4xl font-extrabold mb-10 transition-colors duration-300 hover:text-primary-800" href="javascript:void(0)" aria-label="Ir a la página de inicio de EduGestión 360"> {/* Texto más audaz y color más profundo */}
                    {/* SVG del Birrete simple como logo */}
                    <svg className="w-11 h-11 mr-3 fill-current text-primary-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Icono ligeramente más grande */}
                        <path d="M4 17L12 21L20 17V15L12 19L4 15V17Z" />
                        <path d="M12 11L4 7L12 3L20 7L12 11Z" />
                        <path d="M17 11.5L12 14L7 11.5" />
                        <path d="M12 3V19" />
                    </svg>
                    EduGestión 360
                </a>
                <h5 className="text-2xl font-semibold mb-8 text-gray-800">Bienvenido de nuevo</h5>

                <form id="loginForm" className="space-y-6" onSubmit={handleSubmit} noValidate>
                    <div className="text-left">
                        <label htmlFor="emailInput" className="block text-gray-700 text-sm font-medium mb-2">Correo electrónico / Usuario</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-gray-800 placeholder-gray-400" // Padding ajustado, focus ring más claro y en color primary
                            id="emailInput"
                            placeholder="Ingresa tu correo o usuario"
                            required
                            aria-label="Ingresa tu correo o usuario"
                            value={emailOrUsername}
                            onChange={(e) => setEmailOrUsername(e.target.value)}
                        />
                    </div>
                    <div className="text-left">
                        <label htmlFor="passwordInput" className="block text-gray-700 text-sm font-medium mb-2">Contraseña</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 pr-12 text-gray-800 placeholder-gray-400" // Padding ajustado, focus ring
                                id="passwordInput"
                                placeholder="Ingresa tu contraseña"
                                required
                                aria-label="Ingresa tu contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-r-lg transition-colors duration-200"
                                type="button"
                                aria-label="Mostrar/ocultar contraseña"
                                onClick={togglePasswordVisibility}
                            >
                                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`} aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                            <input type="checkbox" className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500" id="rememberMe" />
                            <label className="ml-2 block text-gray-900" htmlFor="rememberMe">Recordarme</label>
                        </div>
                        <a href="javascript:void(0)" className="text-primary-600 hover:underline hover:text-primary-700 transition-colors duration-200 font-medium" aria-label="¿Olvidaste tu contraseña?">¿Olvidaste tu contraseña?</a>
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-primary-700 text-white py-3.5 px-4 rounded-lg text-xl font-semibold hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-300 shadow-md hover:shadow-lg ${isLoading ? 'opacity-75 cursor-not-allowed' : ''} flex items-center justify-center`} // Color primario más oscuro, altura mayor, sombra
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="animate-spin h-5 w-5 mr-3 border-b-2 border-white rounded-full" role="status" aria-hidden="true"></span>
                                Cargando...
                            </>
                        ) : (
                            'Iniciar Sesión'
                        )}
                    </button>
                </form>

                <div className="mt-10 pt-6 border-t border-gray-200 text-gray-600 text-base"> {/* Margen superior más grande */}
                    ¿Eres nuevo por aquí? <a href="javascript:void(0)" className="text-primary-600 hover:underline hover:text-primary-700 transition-colors duration-200 font-medium" aria-label="Registrarme en el sistema">Registrarme</a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
