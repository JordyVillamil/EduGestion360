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
import AuthWrapper from './components/Auth/AuthWrapper'; // Este AuthWrapper está bien como lo dejaste.
// Importa tus dashboards
import EstudianteDashboard from './pages/Dashboards/Estudiante/EstudianteDashboard';
import DocenteDashboard from './pages/Dashboards/Docente/DocenteDashboard';
import DirectivoDashboard from './pages/Dashboards/Directivo/DirectivoDashboard';

// === Componente DashboardLayout ===
// Este componente define la estructura general del dashboard (Header, Sidebar, Footer, y el área de contenido principal).
// Recibe las props para controlar el estado del sidebar y para pasar a otros componentes si es necesario.
const DashboardLayout = ({ toggleSidebar, isSidebarOpen, showToast, setShowGlobalSpinner }) => {
    return (
        // Contenedor principal del layout, usa flexbox en columna para que el footer siempre esté abajo.
        // min-h-screen asegura que ocupe al menos el 100% de la altura de la ventana.
        <div className="flex flex-col min-h-screen">
            {/* Header de la aplicación, recibe la función para abrir/cerrar el sidebar */}
            <Header onToggleSidebar={toggleSidebar} />
            {/* Contenedor que alberga el Sidebar y el contenido principal, usa flexbox en fila */}
            <div className="flex flex-1"> {/* flex-1 hace que ocupe todo el espacio vertical disponible */}
                {/* Sidebar, recibe el estado de apertura y la función para cerrar */}
                <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
                {/* Contenido principal de la aplicación.
                    - flex-1 para que ocupe el espacio restante horizontalmente.
                    - p-6: padding general.
                    - mt-16: margen superior para compensar la altura del header fijo (ajusta si tu header tiene otra altura).
                    - lg:ml-60: margen a la izquierda en pantallas grandes para dejar espacio al sidebar fijo de 240px (w-60).
                    - overflow-y-auto: permite el scroll vertical si el contenido es demasiado largo. */}
                <main className="flex-1 p-6 mt-16 lg:ml-60 overflow-y-auto">
                    {/* El componente Outlet renderiza el contenido de las rutas anidadas.
                        Por ejemplo, si la URL es /dashboard/estudiante, aquí se renderizará EstudianteDashboard. */}
                    <Outlet />
                </main>
            </div>
            {/* Footer de la aplicación */}
            <Footer />
        </div>
    );
};

function App() {
    // Estado para controlar la visibilidad del spinner global de carga
    const [showGlobalSpinner, setShowGlobalSpinner] = useState(false);
    // Estado para gestionar la lista de toasts (notificaciones) a mostrar
    const [toasts, setToasts] = useState([]);
    // Estado para controlar si el sidebar (menú lateral móvil) está abierto o cerrado
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Función para mostrar un nuevo toast
    const showToast = (message, type = 'info') => {
        const id = Date.now(); // Genera un ID único para el toast
        setToasts(prevToasts => [...prevToasts, { id, message, type }]); // Añade el nuevo toast a la lista
    };

    // Función para eliminar un toast de la lista cuando ya no es visible
    const removeToast = (id) => {
        setToasts(prevToasts => prevToasts.filter(toast => toast.id !== id));
    };

    // Función para alternar el estado de apertura/cierre del sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <Router>
            {/* ToastContainer: Componente global para mostrar notificaciones. Se renderiza siempre. */}
            <ToastContainer toasts={toasts} removeToast={removeToast} />
            {/* Spinner global: Se muestra condicionalmente cuando showGlobalSpinner es true. */}
            {showGlobalSpinner && <Spinner />}

            <Routes>
                {/* Ruta de Login: Esta ruta no está protegida y es el punto de entrada principal. */}
                <Route path="/" element={<LoginPage setShowGlobalSpinner={setShowGlobalSpinner} showToast={showToast} />} />

                {/* === Grupo de Rutas Protegidas y con Layout ===
                    Esta ruta "/dashboard/*" será la que incluya el DashboardLayout.
                    El AuthWrapper se encarga de proteger todo lo que está bajo /dashboard. */}
                <Route element={<AuthWrapper showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />}>
                    {/* Anidamos el DashboardLayout directamente como el "element" de la ruta /dashboard/*
                        Esto asegura que DashboardLayout SIEMPRE se renderice para cualquier ruta que empiece con /dashboard. */}
                    <Route
                        path="/dashboard/*"
                        element={
                            <DashboardLayout
                                toggleSidebar={toggleSidebar} // Función para abrir/cerrar el sidebar
                                isSidebarOpen={isSidebarOpen} // Estado actual del sidebar
                                showToast={showToast}         // Propagando showToast para uso en dashboards si es necesario
                                setShowGlobalSpinner={setShowGlobalSpinner} // Propagando para uso en dashboards si es necesario
                            />
                        }
                    >
                        {/* Redirección por defecto si solo se accede a /dashboard.
                            Redirige al dashboard del rol del usuario, por ejemplo, /dashboard/estudiante. */}
                        <Route index element={<Navigate to={`/dashboard/${localStorage.getItem('userRole') || 'estudiante'}`} replace />} />

                        {/* === Rutas Anidadas dentro del DashboardLayout ===
                            Estas rutas se renderizarán dentro del <Outlet /> del DashboardLayout.
                            Solo serán accesibles si el usuario está autenticado y el DashboardLayout se está mostrando. */}

                        {/* Dashboards específicas para cada rol */}
                        <Route path="estudiante/*" element={<EstudianteDashboard showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />} />
                        <Route path="docente/*" element={<DocenteDashboard showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />} />
                        <Route path="directivo/*" element={<DirectivoDashboard showToast={showToast} setShowGlobalSpinner={setShowGlobalSpinner} />} />

                        {/* Otras rutas comunes del dashboard */}
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

                        {/* Ruta 404 (Página No Encontrada) para rutas dentro del dashboard autenticado.
                            Si un usuario logueado intenta acceder a una ruta que no existe dentro de /dashboard, verá esto. */}
                        <Route path="*" element={
                            <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] bg-white p-8 rounded-lg shadow-md">
                                <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Página No Encontrada</h1>
                                <p className="text-lg text-gray-600 mb-6">Lo sentimos, la página que buscas no existe dentro de tu sesión.</p>
                                {/* Enlace para volver al inicio del dashboard según el rol */}
                                <Link to={`/dashboard/${localStorage.getItem('userRole') || 'estudiante'}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                                    Volver al Dashboard
                                </Link>
                            </div>
                        } />
                    </Route>
                </Route>

                {/* Ruta de respaldo para cualquier otra ruta no definida (redirige a login si no está autenticado) */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
