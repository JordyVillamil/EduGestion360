// src/components/Layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white/95 backdrop-blur-sm border-t border-gray-200 mt-auto shadow-lg animate-fadeIn z-40">
      <div className="container-fluid px-6 py-8">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          
          {/* Sección de información */}
          <div className="space-y-3 animate-fadeInUp">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-lg animate-pulse-slow">
                <i className="fas fa-graduation-cap text-white text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gradient-primary">EduGestión 360</h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sistema integral de gestión educativa para instituciones modernas.
            </p>
            <div className="flex space-x-3">
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary-50 hover:text-primary-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <i className="fas fa-link text-primary-600 mr-2"></i>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/dashboard" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200 flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/mi-perfil" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200 flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
                  Mi Perfil
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/materias" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200 flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
                  Materias
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/calendario-global" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200 flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
                  Calendario
                </Link>
              </li>
            </ul>
          </div>

          {/* Información legal */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
              <i className="fas fa-shield-alt text-primary-600 mr-2"></i>
              Información Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/dashboard/politica-privacidad" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200 flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/terminos-servicio" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200 flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/contacto" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200 flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
                  Contacto
                </Link>
              </li>
              <li>
                <Link 
                  to="/dashboard/ayuda" 
                  className="text-gray-600 hover:text-primary-600 transition-colors duration-200 flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></i>
                  Centro de Ayuda
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-600 flex items-center">
              <i className="fas fa-copyright mr-2 text-primary-600"></i>
              {currentYear} EduGestión 360. Todos los derechos reservados.
            </div>

            {/* Versión y estado */}
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center">
                <i className="fas fa-code-branch mr-2 text-success-500"></i>
                Versión 2.0.0
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-success-500 rounded-full mr-2 animate-pulse"></span>
                Sistema Operativo
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Efecto decorativo en la parte superior */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-info-500"></div>
    </footer>
  );
}

export default Footer;
