// src/components/Layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    // Footer principal: fondo blanco, sombra superior sutil, padding vertical
    <footer className="bg-white text-center text-lg-start mt-auto py-4 shadow-top border-t border-gray-200"> {/* py-4 para más padding, shadow-top para sombra sutil arriba, border-t */}
      <div className="container-fluid text-muted px-4"> {/* Padding horizontal consistente */}
        <div className="flex flex-wrap justify-between items-center text-sm"> {/* Flex para alinear contenido */}
          {/* Información de Copyright */}
          <div className="w-full lg:w-auto mb-2 lg:mb-0 text-gray-600">
            © {new Date().getFullYear()} EduGestión 360. Todos los derechos reservados.
          </div>

          {/* Enlaces del Footer */}
          <div className="w-full lg:w-auto text-gray-600">
            <Link to="/dashboard/politica-privacidad" className="hover:text-primary-600 transition-colors duration-200 mx-2">Política de Privacidad</Link> {/* Enlaces con color primario en hover */}
            <Link to="/dashboard/terminos-servicio" className="hover:text-primary-600 transition-colors duration-200 mx-2">Términos de Servicio</Link>
            <Link to="/dashboard/contacto" className="hover:text-primary-600 transition-colors duration-200 mx-2">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
