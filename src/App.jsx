// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Link, Navigate } from 'react-router-dom';

// Componentes de Layout
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer';
import Spinner from './components/UI/Spinner';
import ToastContainer from './components/UI/ToastContainer';

// Páginas y AuthWrapper
import LoginPage from './pages/Auth/LoginPage';
import AuthWrapper from './components/Auth/AuthWrapper';
// Importa tus dashboards
import EstudianteDashboard from './pages/Dashboards/Estudiante/EstudianteDashboard';
import DocenteDashboard from './pages/Dashboards/Docente/DocenteDashboard';
import DirectivoDashboard from './pages/Dashboards/Directivo/DirectivoDashboard';

// === Componente DashboardLayout ===
const DashboardLayout = ({ toggleSidebar, isSidebarOpen, showToast, setShowGlobalSpinner }) => {
    return (
        // Contenedor principal del layout: flexbox en columna, ocupa toda la altura de la vista
        <div className="flex flex-col min-h-screen">
            {/* Header: fijo en la parte superior */}
            <Header onToggleSidebar={toggleSidebar} />

            {/* Contenedor principal del contenido y sidebar: usa flex-grow para ocupar espacio restante */}
            <div className="flex flex-1 pt-16"> {/* pt-16 (64px) para dejar espacio al Header fijo */}
                {/* Sidebar: fijo, flota sobre el contenido principal */}
                <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />

                {/* Main Content Area: se expande para llenar el espacio, con margen izquierdo en desktop para el sidebar */}
                {/* overflow-y-auto: permite el scroll si el contenido es más largo que la pantalla */}
                <main className="flex-1 p-6 lg:ml-64 overflow-y-auto"> {/* lg:ml-64 (256px) para el Sidebar */}
                    <Outlet />
                </main>
            </div>

            {/* Footer: siempre en la parte inferior */}
            <Footer />
        </div>
    );
};

function App() {
    const [showGlobalSpinner, setShowGlobalSpinner] = useState(false);
    const [toasts, setToasts] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const showToast = (message, type = 'info') => {
        const id = Date.now();
        setToasts(prevToasts => [...prevToasts, { id, message, type }]);
    };

    const removeToast = (id) => {
        setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <Router>
            <ToastContainer toasts={toasts} removeToast={removeToast} />
            {showGlobalSpinner && <Spinner />}

            <Routes>
                <Route path="/" element={<LoginPage setShowGlobalSpinner={setShowGlobalSpinner} showToast={showToast} />} />

                <Route element={<AuthWrapper showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />}>
                    <Route
                        path="/dashboard/*"
                        element={
                            <DashboardLayout
                                toggleSidebar={toggleSidebar}
                                isSidebarOpen={isSidebarOpen}
                                showToast={showToast}
                                setShowGlobalSpinner={setShowGlobalSpinner}
                            />
                        }
                    >
                        <Route index element={<Navigate to={`/dashboard/${localStorage.getItem('userRole') || 'estudiante'}`} replace />} />

                        <Route path="estudiante/*" element={<EstudianteDashboard showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />} />
                        <Route path="docente/*" element={<DocenteDashboard showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />} />
                        <Route path="directivo/*" element={<DirectivoDashboard showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />} />

                        <Route path="mi-perfil" element={
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Mi Perfil Detalle</h2>
                                <p className="text-gray-700">Aquí se mostrará la información detallada del perfil del usuario logueado.</p>
                                <p className="text-gray-600 mt-2">Puedes añadir formularios para editar datos, historial, etc.</p>
                            </div>
                        } />
                        <Route path="materias" element={
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Materias Disponibles</h2>
                                <p className="text-gray-700">Lista de todas las materias ofrecidas en la institución.</p>
                            </div>
                        } />
                        <Route path="calendario-global" element={
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Calendario Global</h2>
                                <p className="text-gray-700">Eventos y fechas importantes de la institución.</p>
                            </div>
                        } />
                        <Route path="documentos-global" element={
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Documentos Institucionales</h2>
                                <p className="text-gray-700">Acceso a documentos generales como manuales, políticas, etc.</p>
                            </div>
                        } />
                        <Route path="configuracion" element={
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Configuración de la Cuenta</h2>
                                <p className="text-gray-700">Opciones para configurar la cuenta del usuario.</p>
                            </div>
                        } />

                        <Route path="*" element={
                            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] bg-white p-8 rounded-lg shadow-md">
                                <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Página No Encontrada</h1>
                                <p className="text-lg text-gray-600 mb-6">Lo sentimos, la página que buscas no existe dentro de tu sesión.</p>
                                <Link to={`/dashboard/${localStorage.getItem('userRole') || 'estudiante'}`} className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                                    Volver al Dashboard
                                </Link>
                            </div>
                        } />
                    </Route>
                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
