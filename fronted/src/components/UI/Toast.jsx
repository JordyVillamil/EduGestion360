// src/components/UI/Toast.jsx
import React, { useEffect, useState } from 'react';

function Toast({ id, message, type, onClose }) {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(100);

    useEffect(() => {
        // Animación de progreso
        const progressInterval = setInterval(() => {
            setProgress(prev => Math.max(0, prev - 2));
        }, 100);

        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onClose(id), 300);
        }, 5000);

        return () => {
            clearTimeout(timer);
            clearInterval(progressInterval);
        };
    }, [id, onClose]);

    const typeConfig = {
        info: {
            bg: 'bg-info-500',
            icon: 'fa-info-circle',
            iconBg: 'bg-info-600',
            progressBg: 'bg-info-700'
        },
        success: {
            bg: 'bg-success-500',
            icon: 'fa-check-circle',
            iconBg: 'bg-success-600',
            progressBg: 'bg-success-700'
        },
        warning: {
            bg: 'bg-warning-500',
            icon: 'fa-exclamation-triangle',
            iconBg: 'bg-warning-600',
            progressBg: 'bg-warning-700'
        },
        error: {
            bg: 'bg-red-500',
            icon: 'fa-times-circle',
            iconBg: 'bg-red-600',
            progressBg: 'bg-red-700'
        },
    };

    const config = typeConfig[type] || typeConfig.info;
    const fadeClass = isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full';

    return (
        <div
            className={`relative flex items-start p-4 rounded-xl shadow-xl mb-3 transition-all duration-300 ease-out transform ${config.bg} text-white ${fadeClass} animate-slideInRight overflow-hidden`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            style={{ minWidth: '300px', maxWidth: '400px' }}
        >
            {/* Barra de progreso */}
            <div 
                className={`absolute bottom-0 left-0 h-1 ${config.progressBg} transition-all duration-100 ease-linear`}
                style={{ width: `${progress}%` }}
            ></div>

            {/* Icono */}
            <div className={`flex-shrink-0 w-10 h-10 ${config.iconBg} rounded-lg flex items-center justify-center mr-3 shadow-lg animate-scaleIn`}>
                <i className={`fas ${config.icon} text-lg`}></i>
            </div>

            {/* Mensaje */}
            <div className="flex-grow text-sm font-medium pr-2">
                {message}
            </div>

            {/* Botón de cerrar */}
            <button
                type="button"
                className="flex-shrink-0 ml-2 p-1.5 rounded-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-200 transform hover:scale-110 active:scale-95"
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