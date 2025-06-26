// src/components/Layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer bg-light text-center text-lg-start mt-auto py-3 shadow-sm">
      <div className="container-fluid text-muted">
        <div className="row">
          <div className="col-md-6 text-md-start text-center">
            © {new Date().getFullYear()} EduGestión 360. Todos los derechos reservados.
          </div>
          <div className="col-md-6 text-md-end text-center">
            <Link to="/ayuda" className="text-decoration-none me-3 footer-link">Ayuda</Link>
            <Link to="/soporte" className="text-decoration-none me-3 footer-link">Soporte Técnico</Link>
            <Link to="/terminos" className="text-decoration-none me-3 footer-link">Términos de Servicio</Link>
            <Link to="/privacidad" className="text-decoration-none footer-link">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;