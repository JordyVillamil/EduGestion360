// src/pages/Auth/LoginPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import AnimatedBackground from '../../components/shared/AnimatedBackground';
import { API_ENDPOINTS, checkBackendHealth } from '../../config/api';

// Definir el esquema de validación con Yup
const loginSchema = yup.object().shape({
  username: yup.string()
    .required('El nombre de usuario es obligatorio.'),
  password: yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres.')
    .required('La contraseña es obligatoria.'),
});

const LoginPage = ({ setShowGlobalSpinner, showToast }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [backendStatus, setBackendStatus] = useState('checking'); // 'checking', 'online', 'offline'
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // Verificar estado del backend al cargar el componente
  useEffect(() => {
    const verifyBackend = async () => {
      const isOnline = await checkBackendHealth();
      setBackendStatus(isOnline ? 'online' : 'offline');
      
      if (!isOnline) {
        showToast('⚠️ El servidor no está disponible. Verifica que Docker esté ejecutándose.', 'warning');
      }
    };
    
    verifyBackend();
  }, [showToast]);

  const onSubmit = async (data) => {
    setShowGlobalSpinner(true);

    try {
      const response = await axios.post(API_ENDPOINTS.login, data);
      const { access, refresh } = response.data;
      const decodedToken = jwtDecode(access);
      const userRole = decodedToken.role;

      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      localStorage.setItem('userRole', userRole);
      localStorage.setItem('isAuthenticated', 'true');

      showToast('Inicio de sesión exitoso', 'success');
      navigate(`/dashboard/${userRole}`);

    } catch (error) {
      console.error('Error de autenticación:', error);
      
      let errorMessage = 'Error al iniciar sesión.';
      
      if (error.code === 'ERR_NETWORK' || error.message === 'Network Error') {
        errorMessage = '⚠️ No se puede conectar al servidor. Verifica que el backend esté ejecutándose en http://localhost:8000';
        console.error('💡 Solución: Ejecuta "docker-compose up" o inicia el servidor Django');
      } else if (error.response) {
        // El servidor respondió con un código de error
        if (error.response.status === 401) {
          errorMessage = '❌ Credenciales inválidas. Verifica tu usuario y contraseña.';
        } else if (error.response.status === 404) {
          errorMessage = '⚠️ Endpoint no encontrado. Verifica la configuración del backend.';
        } else if (error.response.data?.detail) {
          errorMessage = error.response.data.detail;
        } else {
          errorMessage = `Error del servidor: ${error.response.status}`;
        }
      } else if (error.request) {
        errorMessage = '⚠️ No se recibió respuesta del servidor. Verifica que el backend esté activo.';
      }
      
      showToast(errorMessage, 'error');
    } finally {
      setShowGlobalSpinner(false);
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <AnimatedBackground />
      
      {/* Contenedor del formulario con glassmorphism */}
      <div className="relative bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl w-full max-w-md animate-fadeInUp border border-white/20">
        
        {/* Indicador de estado del backend */}
        <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2 ${
          backendStatus === 'online' 
            ? 'bg-green-500 text-white' 
            : backendStatus === 'offline'
            ? 'bg-red-500 text-white animate-pulse'
            : 'bg-gray-400 text-white'
        }`}>
          <span className={`w-2 h-2 rounded-full ${
            backendStatus === 'online' ? 'bg-white animate-pulse' : 'bg-white'
          }`}></span>
          {backendStatus === 'checking' && 'Verificando servidor...'}
          {backendStatus === 'online' && '✓ Servidor conectado'}
          {backendStatus === 'offline' && '✗ Servidor desconectado'}
        </div>
        
        {/* Icono y título con animaciones */}
        <div className="text-center mb-8 animate-scaleIn">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mb-4 shadow-xl animate-bounce-subtle">
            <i className="fas fa-graduation-cap text-white text-4xl"></i>
          </div>
          <h2 className="text-4xl font-extrabold mb-2">
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">EduGestión 360</span>
          </h2>
          <p className="text-gray-600 text-lg">Bienvenido de vuelta</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
          {/* Campo de usuario con animación */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <label htmlFor="username" className="block text-base font-bold text-gray-800 mb-3">
              <i className="fas fa-user mr-2 text-primary-600 text-lg"></i>
              Nombre de Usuario
            </label>
            <input
              type="text"
              id="username"
              {...register('username')}
              className={`w-full px-5 py-4 text-lg font-medium border-2 ${
                errors.username 
                  ? 'border-red-500 focus:border-red-600 focus:ring-red-500' 
                  : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
              } rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 hover:shadow-lg hover:border-primary-400 bg-white`}
              placeholder="Ingresa tu nombre de usuario"
            />
            {errors.username && (
              <p className="mt-3 text-sm text-red-600 animate-fadeIn flex items-center font-semibold bg-red-50 px-4 py-2 rounded-lg border border-red-200">
                <i className="fas fa-exclamation-circle mr-2 text-base"></i>
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Campo de contraseña con animación */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <label htmlFor="password" className="block text-base font-bold text-gray-800 mb-3">
              <i className="fas fa-lock mr-2 text-primary-600 text-lg"></i>
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                {...register('password')}
                className={`w-full px-5 py-4 pr-14 text-lg font-medium border-2 ${
                  errors.password 
                    ? 'border-red-500 focus:border-red-600 focus:ring-red-500' 
                    : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
                } rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 hover:shadow-lg hover:border-primary-400 bg-white`}
                placeholder="Ingresa tu contraseña"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-5 flex items-center text-gray-500 hover:text-primary-600 transition-colors duration-200 focus:outline-none"
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                <i className={`${showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'} text-xl`}></i>
              </button>
            </div>
            {errors.password && (
              <p className="mt-3 text-sm text-red-600 animate-fadeIn flex items-center font-semibold bg-red-50 px-4 py-2 rounded-lg border border-red-200">
                <i className="fas fa-exclamation-circle mr-2 text-base"></i>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Opciones adicionales con animación */}
          <div className="flex items-center justify-between text-sm animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center group">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded transition-all duration-200 cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 block text-gray-700 cursor-pointer group-hover:text-primary-600 transition-colors duration-200">
                Recordarme
              </label>
            </div>
            <a 
              href="#" 
              className="font-medium text-primary-600 hover:text-primary-700 transition-colors duration-200 hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          {/* Botón de submit con efectos mejorados */}
          <button
            type="submit"
            className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-300 ease-in-out animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            <i className="fas fa-sign-in-alt mr-2"></i>
            Iniciar Sesión
          </button>
        </form>

        {/* Footer del formulario */}
        <div className="mt-6 text-center text-sm text-gray-600 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <p>¿No tienes una cuenta? 
            <a href="#" className="font-semibold text-primary-600 hover:text-primary-700 transition-colors duration-200 ml-1">
              Registrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;