// src/App.jsx
import React, { useState, useCallback } from 'react'; // <-- VERIFICA ESTAS IMPORTACIONES (useState, useCallback)
import { BrowserRouter as Router, Routes, Route, Outlet, Link, Navigate } from 'react-router-dom';

// Componentes de Layout
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Footer from './components/Layout/Footer';
import Spinner from './components/UI/Spinner'; // <-- VERIFICA ESTA RUTA
import ToastContainer from './components/UI/ToastContainer'; // <-- VERIFICA ESTA RUTA

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
        <div className="flex flex-col min-h-screen">
            <Header onToggleSidebar={toggleSidebar} />
            <div className="flex flex-1 pt-16">
                <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
                <main className="flex-1 p-6 lg:ml-64 overflow-y-auto pb-20">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};

function App() {
    const [showGlobalSpinner, setShowGlobalSpinner] = useState(false);
    const [toasts, setToasts] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // *** CRÍTICO: USA useCallback para estas funciones ***
    const showToast = useCallback((message, type = 'info') => {
        const id = Date.now();
        setToasts(prevToasts => [...prevToasts, { id, message, type }]);
    }, []); // <-- Dependencias vacías para estabilidad

    const removeToast = useCallback((id) => {
        setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    }, []); // <-- Dependencias vacías para estabilidad

    const toggleSidebar = useCallback(() => {
        setIsSidebarOpen(prev => !prev);
    }, []); // <-- Dependencias vacías para estabilidad

    return (
        <Router>
            <ToastContainer toasts={toasts} removeToast={removeToast} />
            {showGlobalSpinner && <Spinner />}

            <Routes>
                {/* La ruta raíz "/" ahora también verifica 'isAuthenticated' */}
                <Route
                    path="/"
                    element={
                        // Asegúrate de que 'isAuthenticated' se establezca en el localStorage durante el login
                        localStorage.getItem('isAuthenticated') === 'true' && localStorage.getItem('userRole') ? (
                            <Navigate to={`/dashboard/${localStorage.getItem('userRole')}`} replace />
                        ) : (
                            <LoginPage setShowGlobalSpinner={setShowGlobalSpinner} showToast={showToast} />
                        )
                    }
                />
                <Route path="/login" element={<LoginPage setShowGlobalSpinner={setShowGlobalSpinner} showToast={showToast} />} />

                {/* AuthWrapper como ruta padre, pasando las funciones estables */}
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
                        {/* Redirige a la ruta específica del rol al acceder a /dashboard */}
                        <Route
                            index
                            element={<Navigate to={`/dashboard/${localStorage.getItem('userRole') || 'estudiante'}`} replace />}
                        />

                        <Route path="estudiante/*" element={<EstudianteDashboard showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />} />
                        <Route path="docente/*" element={<DocenteDashboard showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />} />
                        <Route path="directivo/*" element={<DirectivoDashboard showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />} />

                        {/* Rutas adicionales dentro del dashboard */}
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