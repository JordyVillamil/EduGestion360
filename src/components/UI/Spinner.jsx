// src/components/UI/Spinner.jsx
import React from 'react';

function Spinner() {
    return (
        <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-[9999]">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
    );
}

export default Spinner;