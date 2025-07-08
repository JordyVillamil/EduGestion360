// src/components/UI/Toast.jsx
import React, { useEffect, useState } from 'react';
// No necesitamos importar Toast.css si los estilos son solo de Tailwind o se manejan globalmente.
// Si tienes reglas muy específicas y no quieres moverlas a global.css, puedes mantenerlo,
// pero idealmente Tailwind debería reemplazar la mayoría de los estilos.

function Toast({ id, message, type, onClose }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onClose(id), 300);
        }, 5000);
        return () => {
            clearTimeout(timer);
        };
    }, [id, onClose]);

    // Clases Tailwind para los tipos de toast
    const typeClasses = {
        info: 'bg-blue-500 text-white',
        success: 'bg-green-500 text-white',
        warning: 'bg-yellow-400 text-gray-800', // Texto oscuro para fondo claro
        error: 'bg-red-600 text-white',
    };

    const fadeClass = isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'; // Animación simple

    return (
        <div
            className={`flex items-center justify-between p-4 rounded-lg shadow-md mb-2 transition-all duration-300 ease-out ${typeClasses[type] || typeClasses.info} ${fadeClass}`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            style={{ minWidth: '250px' }} // Tailwind no tiene un min-width directo en clases, puedes ponerlo inline o en global.css si es recurrente
        >
            <div className="flex-grow text-sm font-medium">
                {message}
            </div>
            <button
                type="button"
                className="ml-4 p-1 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Cerrar"
                onClick={() => setIsVisible(false)}
            >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    );
}

export default Toast;