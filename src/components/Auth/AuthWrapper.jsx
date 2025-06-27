// src/components/Auth/AuthWrapper.jsx
import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import Spinner from '../UI/Spinner'; // <-- VERIFICA ESTA RUTA

function AuthWrapper({ showToast, setShowGlobalSpinner }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authCheckComplete, setAuthCheckComplete] = useState(false); // Nuevo estado para asegurar que la verificación inicial terminó
  const redirectingRef = useRef(false); // Flag para asegurar que la redirección solo ocurre una vez

  useEffect(() => {
    // console.log("AuthWrapper useEffect 1: Comienza verificación. path:", location.pathname); // DEBUG

    // Solo realiza la verificación si no estamos ya redirigiendo o si la verificación no ha terminado
    if (redirectingRef.current || authCheckComplete) {
      // console.log("AuthWrapper useEffect 1: Saltando verificación (ya redirigiendo o verificado)."); // DEBUG
      // Asegúrate de que el spinner global esté apagado si ya terminamos o redirigimos
      setShowGlobalSpinner(false);
      return;
    }

    setIsLoadingAuth(true); // Activa el spinner global al inicio de la verificación
    
    // Simula una pequeña demora para la verificación (como una llamada a la API)
    const authTimer = setTimeout(() => {
      const storedAuthStatus = localStorage.getItem('isAuthenticated');
      // console.log("AuthWrapper useEffect 1: Estado de autenticación localStorage:", storedAuthStatus); // DEBUG

      if (storedAuthStatus === 'true') {
        setIsAuthenticated(true);
        // console.log("AuthWrapper: Autenticado."); // DEBUG
      } else {
        setIsAuthenticated(false);
        // console.log("AuthWrapper: NO Autenticado."); // DEBUG

        // Si no está autenticado Y NO estamos ya en la página de login, redirige
        if (location.pathname !== '/' && location.pathname !== '/login') {
          showToast('Por favor, inicia sesión para acceder.', 'warning');
          navigate('/login', { replace: true }); // Redirección fuerte
          redirectingRef.current = true; // Marca que ya estamos redirigiendo
          // console.log("AuthWrapper: Redirigiendo a /login."); // DEBUG
        } else {
          // console.log("AuthWrapper: No autenticado, pero ya en / o /login. No redirigiendo de nuevo."); // DEBUG
        }
      }
      setAuthCheckComplete(true); // Marca que la verificación inicial ha terminado
      setIsLoadingAuth(false); // Desactiva la carga interna del AuthWrapper
      setShowGlobalSpinner(false); // Asegúrate de ocultar el spinner global
    }, 100); // Pequeña demora para simular la verificación

    // Función de limpieza
    return () => {
      clearTimeout(authTimer);
      // Solo resetear redirectingRef si el componente se desmonta COMPLETAMENTE
      // y no es solo un re-render por cambio de ruta dentro del Outlet.
      // Para este caso de un componente de Layout que envuelve rutas, mantenerlo puede ser mejor.
      // Si el bucle persiste, podríamos considerar resetearlo aquí también.
    };
  }, [navigate, location.pathname, showToast, setShowGlobalSpinner, authCheckComplete]); // Dependencias

  // Este useEffect maneja solo la visibilidad del spinner global
  const [isLoadingAuthInternal, setIsLoadingAuth] = useState(true); // Estado interno de carga
  useEffect(() => {
    if (isLoadingAuthInternal) {
      setShowGlobalSpinner(true);
    } else {
      setShowGlobalSpinner(false);
    }
  }, [isLoadingAuthInternal, setShowGlobalSpinner]);


  // Si la verificación no ha terminado O si ya hemos decidido redirigir
  if (!authCheckComplete || redirectingRef.current) {
    // Si la ruta actual es login o root, y no estamos autenticados,
    // y no hemos terminado la verificación, mostramos un spinner global
    // o simplemente esperamos, ya que el useEffect gestionará la redirección
    return null; // El spinner global ya se maneja en App.jsx
  }

  // Si la verificación terminó y el usuario NO está autenticado
  if (!isAuthenticated) {
    // Si llegamos aquí, significa que la verificación terminó, el usuario no está autenticado,
    // y no se ha redirigido aún (o ya estamos en /login).
    // Dejamos que react-router-dom maneje el flujo de rutas.
    return null; // O podrías mostrar un componente de "Acceso Denegado"
  }

  // Si la verificación terminó y el usuario está autenticado, renderiza las rutas hijas
  return <Outlet />;
}

export default AuthWrapper;