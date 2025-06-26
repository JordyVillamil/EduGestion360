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
                redirectPath = '/dashboard/estudiante'; // <-- CAMBIO AQUÍ
            } else if (emailOrUsername === 'docente' && password === 'pass123') {
                localStorage.setItem('authToken', 'simulated_teacher_token');
                userRole = 'docente';
                welcomeMessage = '¡Bienvenido, Docente!';
                redirectPath = '/dashboard/docente'; // <-- CAMBIO AQUÍ
            } else if (emailOrUsername === 'directivo' && password === 'pass123') {
                localStorage.setItem('authToken', 'simulated_admin_token');
                userRole = 'directivo';
                welcomeMessage = '¡Bienvenido, Directivo!';
                redirectPath = '/dashboard/directivo'; // <-- CAMBIO AQUÍ
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
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                <a className="flex items-center justify-center text-blue-600 text-3xl font-bold mb-6" href="javascript:void(0)" aria-label="Ir a la página de inicio de EduGestión 360">
                    <i className="fas fa-graduation-cap mr-2" aria-hidden="true"></i>EduGestión 360
                </a>
                <h5 className="text-xl font-semibold mb-6 text-gray-800">Bienvenido de nuevo</h5>

                <form id="loginForm" className="space-y-4" onSubmit={handleSubmit} noValidate>
                    <div className="text-left">
                        <label htmlFor="emailInput" className="block text-gray-700 text-sm font-medium mb-1">Correo electrónico / Usuario</label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            id="emailInput"
                            placeholder="Ingresa tu correo o usuario"
                            required
                            aria-label="Ingresa tu correo o usuario"
                            value={emailOrUsername}
                            onChange={(e) => setEmailOrUsername(e.target.value)}
                        />
                    </div>
                    <div className="text-left">
                        <label htmlFor="passwordInput" className="block text-sm font-medium text-gray-700">Contraseña</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 pr-10"
                                id="passwordInput"
                                placeholder="Ingresa tu contraseña"
                                required
                                aria-label="Ingresa tu contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
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
                            <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" id="rememberMe" />
                            <label className="ml-2 block text-gray-900" htmlFor="rememberMe">Recordarme</label>
                        </div>
                        <a href="javascript:void(0)" className="text-blue-600 hover:underline" aria-label="¿Olvidaste tu contraseña?">¿Olvidaste tu contraseña?</a>
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''} flex items-center justify-center`}
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

                <div className="mt-6 pt-4 border-t border-gray-200 text-gray-600 text-sm">
                    ¿Eres nuevo por aquí? <a href="javascript:void(0)" className="text-blue-600 hover:underline" aria-label="Registrarme en el sistema">Registrarme</a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
