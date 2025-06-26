// src/components/Auth/AuthWrapper.jsx
import React, { useEffect, useState } from 'react'; // Importamos useState para la simulación de carga
import { useNavigate, Outlet } from 'react-router-dom'; // Importa Outlet
import Spinner from '../UI/Spinner';

// Este componente envuelve las rutas protegidas
function AuthWrapper({ showToast, setShowGlobalSpinner }) { // Ya no necesita 'children' como prop
    const navigate = useNavigate();
    // En un caso real, esto vendría de un AuthContext o una llamada a API
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoadingAuth, setIsLoadingAuth] = useState(true); // Nuevo estado para simular la carga de autenticación

    useEffect(() => {
        // Simulación de verificación de autenticación
        const token = localStorage.getItem('authToken'); // Asegúrate de usar 'authToken' aquí
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
        setIsLoadingAuth(false);
    }, []);

    useEffect(() => {
        if (!isLoadingAuth && !isAuthenticated) {
            // Si no está autenticado y ya terminó de cargar, redirige al login
            navigate('/');
            showToast('Por favor, inicia sesión para acceder.', 'warning');
            setShowGlobalSpinner(false); // Asegúrate de ocultar el spinner global
        }
    }, [isAuthenticated, isLoadingAuth, navigate, showToast, setShowGlobalSpinner]);

    // Muestra un spinner mientras se verifica la autenticación
    if (isLoadingAuth) {
        return <Spinner />; // O un simple div de carga
    }

    // Si no está autenticado, no renderiza nada y confía en la redirección del useEffect
    if (!isAuthenticated) {
        return null;
    }

    // Si está autenticado, renderiza el Outlet, que mostrará las rutas anidadas
    return <Outlet />; // Aquí se renderizarán los componentes de las rutas hijas
}

export default AuthWrapper;