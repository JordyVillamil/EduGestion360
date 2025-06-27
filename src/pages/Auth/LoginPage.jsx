// src/pages/Auth/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'; // Importar useForm
import { yupResolver } from '@hookform/resolvers/yup'; // Importar yupResolver
import * as yup from 'yup'; // Importar yup

// Definir el esquema de validación con Yup
const loginSchema = yup.object().shape({
  email: yup.string()
    .email('El correo electrónico debe ser válido.') // Valida formato de email
    .required('El correo electrónico es obligatorio.'), // Campo requerido
  password: yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres.') // Mínimo 6 caracteres
    .required('La contraseña es obligatoria.'), // Campo requerido
});

const LoginPage = ({ setShowGlobalSpinner, showToast }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Inicializar react-hook-form con el resolver de Yup
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setShowGlobalSpinner(true);
    console.log('Datos de inicio de sesión:', data);

    try {
      // Simular una llamada a la API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simular autenticación exitosa
      // En un entorno real, la API te devolvería el rol del usuario
      const userRole = data.email.includes('estudiante') ? 'estudiante'
                     : data.email.includes('docente') ? 'docente'
                     : data.email.includes('directivo') ? 'directivo'
                     : 'estudiante'; // Rol por defecto si no coincide

      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userRole', userRole);
      showToast('Inicio de sesión exitoso', 'success');
      navigate(`/dashboard/${userRole}`);
    } catch (error) {
      showToast('Error al iniciar sesión. Credenciales inválidas.', 'error');
      console.error('Error de autenticación:', error);
    } finally {
      setShowGlobalSpinner(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <i className="fas fa-graduation-cap text-primary-600 text-5xl mb-4"></i>
          <h2 className="text-3xl font-bold text-gray-800">EduGestión 360</h2>
          <p className="text-gray-600 mt-2">Inicia sesión en tu cuenta</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              // Usar 'register' para registrar el input con react-hook-form
              {...register('email')}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
              }`}
              placeholder="tu@ejemplo.com"
            />
            {/* Mostrar mensaje de error si existe */}
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                // Usar 'register' para registrar el input
                {...register('password')}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 pr-10 ${
                  errors.password ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-500 focus:border-primary-500'
                }`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
              </button>
            </div>
            {/* Mostrar mensaje de error si existe */}
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-gray-900">
                Recordarme
              </label>
            </div>
            <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;