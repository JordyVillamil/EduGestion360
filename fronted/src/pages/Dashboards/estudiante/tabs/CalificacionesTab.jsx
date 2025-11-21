// src/pages/Dashboards/Estudiante/tabs/CalificacionesTab.jsx
import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Card from '../../../../components/shared/Card';
import ChartWrapper from '../../../../components/shared/ChartWrapper';
import StatisticCard from '../../../../components/shared/StatisticCard';
import Spinner from '../../../../components/UI/Spinner'; // Importa tu componente Spinner

// --- Función Helper para formatear la fecha ---
const formatFecha = (isoDate) => {
  if (!isoDate) return 'N/A';
  // Convierte '2025-10-25' a '25/10/2025'
  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}/${year}`;
};

const CalificacionesTab = ({ showToast, setShowGlobalSpinner }) => {
  
  // --- Estados para manejar los datos de la API ---
  const [calificaciones, setCalificaciones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Lógica de Carga de Datos (Fetching) ---
  useEffect(() => {
    const fetchCalificaciones = async () => {
      if (setShowGlobalSpinner) setShowGlobalSpinner(true);
      setIsLoading(true); // Activa el spinner local

      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          throw new Error('No estás autenticado.');
        }

        const API_URL = 'http://localhost:8000/api/calificaciones/';
        
        const response = await axios.get(API_URL, {
          headers: { 'Authorization': `Bearer ${token}` }
        });

        // Guarda los datos reales en el estado
        setCalificaciones(response.data);

      } catch (err) {
        let errorMsg = 'Error al cargar las calificaciones.';
        if (err.message === 'No estás autenticado.') {
          errorMsg = err.message;
        } else if (err.response?.status === 403) {
          errorMsg = 'No tienes permiso para ver este recurso.';
        } else if (err.response?.data) {
          errorMsg = JSON.stringify(err.response.data);
        }
        setError(errorMsg);
        if (showToast) showToast(errorMsg, 'error');
      } finally {
        if (setShowGlobalSpinner) setShowGlobalSpinner(false);
        setIsLoading(false); // Desactiva el spinner local
      }
    };

    fetchCalificaciones();
  }, [showToast, setShowGlobalSpinner]); // Dependencias del useEffect

  // --- Lógica para Calcular Promedios (Datos Derivados) ---
  // useMemo recalcula solo si 'calificaciones' cambia
  const { promediosPorMateria, promedioGeneral } = useMemo(() => {
    if (calificaciones.length === 0) {
      return { promediosPorMateria: [], promedioGeneral: 'N/A' };
    }

    const materiaMap = new Map();
    let sumaTotal = 0;

    // Agrupa calificaciones por materia
    calificaciones.forEach(cal => {
      const materiaNombre = cal.materia?.name || 'Materia Desconocida';
      const valor = parseFloat(cal.valor);
      
      if (!materiaMap.has(materiaNombre)) {
        materiaMap.set(materiaNombre, { suma: 0, contador: 0 });
      }
      
      const materiaData = materiaMap.get(materiaNombre);
      materiaData.suma += valor;
      materiaData.contador += 1;
      sumaTotal += valor;
    });

    // Calcula el promedio por materia
    const promedios = Array.from(materiaMap.entries()).map(([nombre, data]) => ({
      materia: nombre,
      promedio: (data.suma / data.contador).toFixed(2)
    }));

    // Calcula el promedio general
    const general = (sumaTotal / calificaciones.length).toFixed(2);

    return { promediosPorMateria: promedios, promedioGeneral: general };
  }, [calificaciones]);


  // --- Renderizado Condicional ---
  if (isLoading) {
    // Muestra un spinner centrado mientras carga
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    );
  }

  if (error) {
    // Muestra un mensaje de error
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow">
        <h3 className="text-xl font-bold">Error</h3>
        <p>{error}</p>
      </div>
    );
  }

  // --- Renderizado de Éxito (cuando ya hay datos) ---
  return (
    <div className="p-4">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Mis Calificaciones</h3>

      {/* Sección de Filtros (sin cambios, aún no funcional) */}
      <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
        {/* ... (tu código de filtros) ... */}
      </div>

      {/* Sección de Promedios por Materia (CON DATOS REALES) */}
      <div className="flex flex-wrap -mx-3 mb-8">
        {promediosPorMateria.map((item, i) => (
          <div className="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6" key={i}>
            <StatisticCard title={item.materia} value={item.promedio} footerText="Promedio actual" />
          </div>
        ))}
      </div>
      
      {/* Tarjeta de Detalle de Calificaciones (CON DATOS REALES) */}
      <Card title="Detalle de calificaciones">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Fecha</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Materia</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider border-r border-gray-200">Actividad/Observación</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Calificación</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {calificaciones.length > 0 ? (
                calificaciones.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{formatFecha(item.fecha_registro)}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.materia?.name || 'N/A'}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.observaciones || 'N/A'}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{item.valor}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-4 py-4 text-center text-gray-500">
                    Aún no tienes calificaciones registradas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Fila inferior con gráfico y promedio general (CON DATOS REALES) */}
      <div className="flex flex-wrap -mx-3 mt-8">
        <div className="w-full md:w-1/2 px-3 mb-6">
          <ChartWrapper title="Progreso académico por materias" type="line" />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6">
          <StatisticCard title="Promedio General del Periodo" value={promedioGeneral} footerText="Basado en calificaciones actuales" />
        </div>
      </div>
    </div>
  );
};

export default CalificacionesTab;