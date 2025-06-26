// src/pages/Dashboards/directivo/tabs/ReunionesTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './ReunionesTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const ReunionesTab = ({ showToast, setShowGlobalSpinner }) => { // Si necesitas props aquí, añádelas
  return (
    // Contenedor principal de la pestaña con padding
    <div className="p-4">
      {/* Sección de Filtros (ejemplo de cómo se verían con Tailwind) */}
      <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtros de Reuniones</h3>
          <div className="flex flex-wrap items-center gap-4">
              <div>
                  <label htmlFor="meetingTypeFilter" className="block text-sm font-medium text-gray-700">Tipo:</label>
                  <select id="meetingTypeFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                      <option>Todas</option>
                      <option>Directivos</option>
                      <option>Profesores</option>
                      <option>Padres</option>
                  </select>
              </div>
              <div>
                  <label htmlFor="meetingDateFilter" className="block text-sm font-medium text-gray-700">Fecha:</label>
                  <input type="date" id="meetingDateFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Aplicar Filtros</button>
          </div>
      </div>

      <div className="flex flex-wrap -mx-2"> {/* Contenedor de fila, usa flex-wrap, -mx-2 compensa el px-2 en las columnas */}
        <div className="w-full md:w-5/12 px-2 mb-4 md:mb-0"> {/* Columna 5/12 para pantallas md y arriba */}
          <Card title="Programar reunión">
              <form className="space-y-4"> {/* Usa space-y para espaciado vertical entre elementos del formulario */}
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="reunionTitulo">Título</label>
                      <input type="text" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" id="reunionTitulo" required />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="reunionFecha">Fecha</label>
                      <input type="date" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" id="reunionFecha" required />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="reunionHora">Hora</label>
                      <input type="time" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" id="reunionHora" required />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="reunionParticipantes">Participantes (roles)</label>
                      <select multiple className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-24" id="reunionParticipantes">
                          <option>Directivos</option>
                          <option>Docentes</option>
                          <option>Padres de Familia</option>
                          <option>Todos</option>
                      </select>
                  </div>
                  <div className="text-right"> {/* Alinea el botón a la derecha */}
                      <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Programar reunión</button>
                  </div>
              </form>
          </Card>
        </div>
        <div className="w-full md:w-7/12 px-2"> {/* Columna 7/12 para pantallas md y arriba */}
          <Card title="Próximas reuniones">
              {/* Lista de reuniones con estilos Tailwind (anteriormente list-group) */}
              <div className="divide-y divide-gray-200"> {/* Divide los elementos con un borde */}
                  <button type="button" className="block w-full text-left px-4 py-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-gray-800 text-sm">
                      <span className="font-semibold">Reunión de Planificación Académica</span>
                      <br />
                      <span className="text-gray-600 text-xs">28/06/2025 - 10:00 AM</span>
                      <br />
                      <span className="text-gray-500 text-xs">Participantes: Directivos, Docentes</span>
                  </button>
                  <button type="button" className="block w-full text-left px-4 py-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-gray-800 text-sm">
                      <span className="font-semibold">Reunión con Padres 11° A</span>
                      <br />
                      <span className="text-gray-600 text-xs">01/07/2025 - 03:00 PM</span>
                      <br />
                      <span className="text-gray-500 text-xs">Participantes: Docentes, Padres</span>
                  </button>
                  {/* Mapear sobre reuniones aquí */}
              </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReunionesTab;
