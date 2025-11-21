// src/config/api.js
// Configuración centralizada de la API

// URL base del backend
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

// Endpoints de la API
export const API_ENDPOINTS = {
  login: `${API_BASE_URL}/api/login/`,
  users: `${API_BASE_URL}/api/users/`,
  materias: `${API_BASE_URL}/api/materias/`,
  cursos: `${API_BASE_URL}/api/cursos/`,
  calificaciones: `${API_BASE_URL}/api/calificaciones/`,
};

// Función helper para verificar si el backend está disponible
export const checkBackendHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/admin/`, { method: 'HEAD' });
    return response.ok || response.status === 302; // 302 es redirect a login, significa que está activo
  } catch (error) {
    console.error('Backend no disponible:', error);
    return false;
  }
};

export default API_ENDPOINTS;
