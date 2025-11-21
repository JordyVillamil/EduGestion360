// src/components/UI/Spinner.jsx
import React from 'react';

function Spinner({ variant = 'default', size = 'md', message = '' }) {
    const sizeClasses = {
        sm: 'h-8 w-8',
        md: 'h-16 w-16',
        lg: 'h-24 w-24'
    };

    const renderSpinner = () => {
        switch (variant) {
            case 'dots':
                return (
                    <div className="flex space-x-2">
                        <div className="w-4 h-4 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-4 h-4 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-4 h-4 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                );
            
            case 'pulse':
                return (
                    <div className={`${sizeClasses[size]} bg-gradient-primary rounded-full animate-pulse`}></div>
                );
            
            case 'ring':
                return (
                    <div className="relative">
                        <div className={`${sizeClasses[size]} border-4 border-primary-200 rounded-full`}></div>
                        <div className={`${sizeClasses[size]} border-4 border-primary-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0`}></div>
                    </div>
                );
            
            case 'gradient':
                return (
                    <div className="relative">
                        <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-tr from-primary-600 via-secondary-600 to-info-500 animate-spin`}>
                            <div className="absolute inset-2 bg-white rounded-full"></div>
                        </div>
                    </div>
                );
            
            default:
                return (
                    <div className={`${sizeClasses[size]} border-4 border-primary-600 border-t-transparent rounded-full animate-spin shadow-glow`}></div>
                );
        }
    };

    return (
        <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-[9999] animate-fadeIn">
            <div className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col items-center animate-scaleIn">
                {renderSpinner()}
                {message && (
                    <p className="mt-6 text-gray-700 font-semibold text-lg animate-pulse">{message}</p>
                )}
            </div>
        </div>
    );
}

export default Spinner;