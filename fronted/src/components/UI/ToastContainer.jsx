// src/components/UI/ToastContainer.jsx
import React from 'react';
import Toast from './Toast'; // Este ya estaba correcto y no lo toques.

function ToastContainer({ toasts, removeToast }) { // Añadimos 'removeToast' prop
    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            className="toast-container position-fixed bottom-0 end-0 p-3"
            style={{ zIndex: 1055 }}
        >
            {toasts.map(toast => (
                // Pasamos la función removeToast al componente Toast para que lo elimine
                <Toast key={toast.id} id={toast.id} message={toast.message} type={toast.type} onClose={removeToast} />
            ))}
        </div>
    );
}

export default ToastContainer;