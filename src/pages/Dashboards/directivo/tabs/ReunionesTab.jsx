// src/pages// src/pages/Dashboards/directivo/tabs/ReunionesTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Asegúrate que esta ruta sea correcta

const ReunionesTab = ({ showToast, setShowGlobalSpinner }) => {
  return (
    <div className="p-4">
      {/* Sección de Filtros - Fondo sutil, bordes redondeados y sombra */}
      <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Reuniones</h3>
          <div className="flex flex-wrap items-center gap-6">
              <div>
                  <label htmlFor="meetingTypeFilter" className="block text-sm font-medium text-gray-700 mb-1">Tipo:</label>
                  <select id="meetingTypeFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                      <option>Todas</option>
                      <option>Directivos</option>
                      <option>Profesores</option>
                      <option>Padres</option>
                  </select>
              </div>
              <div>
                  <label htmlFor="meetingDateFilter" className="block text-sm font-medium text-gray-700 mb-1">Fecha:</label>
                  <input type="date" id="meetingDateFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200" />
              </div>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Aplicar Filtros</button>
          </div>
      </div>

      <div className="flex flex-wrap -mx-3">
        <div className="w-full md:w-5/12 px-3 mb-6 md:mb-0">
          <Card title="Programar reunión">
              <form className="space-y-6"> {/* Espaciado vertical más generoso */}
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="reunionTitulo">Título</label>
                      <input type="text" className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 placeholder-gray-400 transition-all duration-200" id="reunionTitulo" placeholder="Ej: Reunión de Padres" required />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="reunionFecha">Fecha</label>
                      <input type="date" className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200" id="reunionFecha" required />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="reunionHora">Hora</label>
                      <input type="time" className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200" id="reunionHora" required />
                  </div>
                  <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="reunionParticipantes">Participantes (roles)</label>
                      <select multiple className="block w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 h-32 transition-all duration-200" id="reunionParticipantes">
                          <option>Directivos</option>
                          <option>Docentes</option>
                          <option>Padres de Familia</option>
                          <option>Todos</option>
                      </select>
                  </div>
                  <div className="flex justify-end pt-2">
                      <button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Programar reunión</button>
                  </div>
              </form>
          </Card>
        </div>
        <div className="w-full md:w-7/12 px-3">
          <Card title="Próximas reuniones">
              {/* Lista de reuniones con estilos Tailwind mejorados */}
              <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                  {/* Elemento de lista interactivo */}
                  <button type="button" className="block w-full text-left p-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-gray-800 transition-colors duration-200">
                      <span className="font-bold text-lg block mb-1 text-primary-700">Reunión de Planificación Académica</span> {/* Título más prominente */}
                      <span className="text-gray-600 text-sm block mb-0.5"><i className="fas fa-calendar-alt mr-2 text-gray-500"></i>28/06/2025 - 10:00 AM</span>
                      <span className="text-gray-500 text-xs block"><i className="fas fa-users mr-2 text-gray-500"></i>Participantes: Directivos, Docentes</span>
                  </button>
                  <button type="button" className="block w-full text-left p-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-gray-800 transition-colors duration-200">
                      <span className="font-bold text-lg block mb-1 text-primary-700">Reunión con Padres 11° A</span>
                      <span className="text-gray-600 text-sm block mb-0.5"><i className="fas fa-calendar-alt mr-2 text-gray-500"></i>01/07/2025 - 03:00 PM</span>
                      <span className="text-gray-500 text-xs block"><i className="fas fa-users mr-2 text-gray-500"></i>Participantes: Docentes, Padres</span>
                  </button>
                  <button type="button" className="block w-full text-left p-4 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-gray-800 transition-colors duration-200">
                      <span className="font-bold text-lg block mb-1 text-primary-700">Sesión de Desarrollo Profesional</span>
                      <span className="text-gray-600 text-sm block mb-0.5"><i className="fas fa-calendar-alt mr-2 text-gray-500"></i>05/07/2025 - 09:00 AM</span>
                      <span className="text-gray-500 text-xs block"><i className="fas fa-users mr-2 text-gray-500"></i>Participantes: Docentes</span>
                  </button>
                  {/* Map over meetings here */}
              </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReunionesTab;
