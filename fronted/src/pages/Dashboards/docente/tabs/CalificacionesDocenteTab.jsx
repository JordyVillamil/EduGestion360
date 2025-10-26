// src/pages/Dashboards/docente/tabs/CalificacionesDocenteTab.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../../../components/shared/Card';
import ChartWrapper from '../../../../components/shared/ChartWrapper';
import Spinner from '../../../../components/UI/Spinner'; // Asegúrate de importar tu Spinner

const CalificacionesDocenteTab = ({ showToast, setShowGlobalSpinner }) => {
  
  // --- Estados para los datos de la API ---
  const [estudiantes, setEstudiantes] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Estados para los filtros seleccionados ---
  const [selectedMateria, setSelectedMateria] = useState('');
  const [selectedCurso, setSelectedCurso] = useState(''); // Aún no lo usamos, pero es útil
  
  // --- Estado para los datos del formulario (¡Importante!) ---
  // { 2: { valor: '9.50', observaciones: 'Bien' }, ... }
  const [gradeInputs, setGradeInputs] = useState({});

  // --- Lógica de Carga de Datos (Fetching) ---
  useEffect(() => {
    const fetchDependencies = async () => {
      setIsLoading(true);
      setError(null);
      const token = localStorage.getItem('accessToken');

      if (!token) {
        setError('No estás autenticado.');
        setIsLoading(false);
        return;
      }

      const headers = { 'Authorization': `Bearer ${token}` };
      
      const studentsUrl = 'http://localhost:8000/api/users/?role=estudiante';
      const materiasUrl = 'http://localhost:8000/api/materias/';
      const cursosUrl = 'http://localhost:8000/api/cursos/';

      try {
        const [studentsRes, materiasRes, cursosRes] = await Promise.all([
          axios.get(studentsUrl, { headers }),
          axios.get(materiasUrl, { headers }),
          axios.get(cursosUrl, { headers })
        ]);

        setEstudiantes(studentsRes.data);
        setMaterias(materiasRes.data);
        setCursos(cursosRes.data);

        // Inicializa el estado de inputs vacío para cada estudiante
        const initialInputs = {};
        studentsRes.data.forEach(est => {
          initialInputs[est.id] = { valor: '', observaciones: '' };
        });
        setGradeInputs(initialInputs);

      } catch (err) {
        let errorMsg = 'Error al cargar los datos del formulario.';
        if (err.response?.status === 403) {
          errorMsg = 'No tienes permiso para ver estos recursos.';
        }
        setError(errorMsg);
        if (showToast) showToast(errorMsg, 'error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDependencies();
  }, [showToast]); // Dependencias del useEffect

  // --- Manejador para los inputs de la tabla ---
  const handleInputChange = (studentId, field, value) => {
    setGradeInputs(prevInputs => ({
      ...prevInputs,
      [studentId]: {
        ...prevInputs[studentId], // Mantiene el otro campo (ej. observaciones)
        [field]: value // Actualiza el campo que cambió (ej. valor)
      }
    }));
  };
  
  // --- Manejador para el botón "Guardar" de una fila ---
  const handleSaveRow = async (studentId) => {
    // 1. Validar que la materia esté seleccionada
    if (!selectedMateria) {
      if (showToast) showToast('Error: Debes seleccionar una materia primero.', 'error');
      return;
    }

    // 2. Obtener los datos para este estudiante del estado
    const inputs = gradeInputs[studentId];
    if (!inputs.valor) {
      if (showToast) showToast('Error: Debes ingresar un valor de calificación.', 'error');
      return;
    }

    if (setShowGlobalSpinner) setShowGlobalSpinner(true);
    const token = localStorage.getItem('accessToken');
    const API_URL = 'http://localhost:8000/api/calificaciones/';

    // 3. Preparar el cuerpo (payload) del POST
    // El backend espera los IDs, no los nombres
    const payload = {
      estudiante_id: studentId,
      materia_id: parseInt(selectedMateria, 10), // Asegura que sea un número
      valor: parseFloat(inputs.valor).toFixed(2), // Asegura que sea decimal
      observaciones: inputs.observaciones
    };

    try {
      // 4. Enviar la petición POST
      const response = await axios.post(API_URL, payload, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (showToast) showToast('¡Calificación guardada con éxito!', 'success');
      
      // 5. Limpiar los inputs de esa fila
      handleInputChange(studentId, 'valor', '');
      handleInputChange(studentId, 'observaciones', '');
      
      // (Opcional: podrías añadir la nueva calificación a una lista de "guardadas hoy")

    } catch (err) {
      let errorMsg = 'Error al guardar la calificación.';
      if (err.response?.data) {
        // Si el backend envía detalles del error (ej. validación)
        errorMsg = Object.values(err.response.data).join(' ');
      }
      if (showToast) showToast(errorMsg, 'error');
    } finally {
      if (setShowGlobalSpinner) setShowGlobalSpinner(false);
    }
  };

  // --- Renderizado Condicional ---
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg shadow">
        <h3 className="text-xl font-bold">Error</h3>
        <p>{error}</p>
      </div>
    );
  }

  // --- Renderizado de Éxito ---
  return (
    <div className="p-4">
      {/* Sección de Filtros (AHORA CON DATOS REALES) */}
      <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Calificaciones</h3>
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <label htmlFor="courseSelect" className="block text-sm font-medium text-gray-700 mb-1">Curso:</label>
            <select 
              id="courseSelect" 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={selectedCurso}
              onChange={(e) => setSelectedCurso(e.target.value)}
            >
              <option value="">Seleccione un Curso</option>
              {cursos.map(curso => (
                <option key={curso.id} value={curso.id}>{curso.nombre}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="materiaSelect" className="block text-sm font-medium text-gray-700 mb-1">Materia (¡Requerido!):</label>
            <select 
              id="materiaSelect" 
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={selectedMateria}
              onChange={(e) => setSelectedMateria(e.target.value)}
            >
              <option value="">Seleccione una Materia</option>
              {materias.map(materia => (
                <option key={materia.id} value={materia.id}>{materia.name}</option>
              ))}
            </select>
          </div>
          {/* Este botón aún no hace nada, pero está bien */}
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold ...">Cargar Estudiantes</button>
        </div>
      </div>

      <Card title="Ingresar Notas">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 ...">Estudiante</th>
                <th className="px-4 py-3 ...">Calificación</th>
                <th className="px-4 py-3 ...">Comentarios</th>
                <th className="px-4 py-3 ...">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {estudiantes.map((est) => (
                <tr key={est.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {est.first_name || est.username} {est.last_name}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    {/* INPUTS CONECTADOS AL ESTADO */}
                    <input
                      type="number"
                      className="w-24 px-3 py-2 border border-gray-300 rounded-md ..."
                      placeholder="0.00"
                      min="0"
                      value={gradeInputs[est.id]?.valor || ''}
                      onChange={(e) => handleInputChange(est.id, 'valor', e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-4 whitespace-pre-wrap text-sm"> {/* pre-wrap para que el texto se ajuste */}
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md ..."
                      placeholder="Añadir comentarios..."
                      value={gradeInputs[est.id]?.observaciones || ''}
                      onChange={(e) => handleInputChange(est.id, 'observaciones', e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                    {/* BOTÓN CONECTADO AL MANEJADOR */}
                    <button 
                      onClick={() => handleSaveRow(est.id)} 
                      className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md ...">
                      Guardar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      {/* ... (Tu sección de gráficos existente está bien) ... */}
    </div>
  );
};

export default CalificacionesDocenteTab;