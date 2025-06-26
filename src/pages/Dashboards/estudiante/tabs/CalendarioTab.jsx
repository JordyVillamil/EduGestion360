// src/pages/Dashboards/Estudiante/tabs/CalendarioTab.jsx
import React, { useEffect, useRef } from 'react';

// === Importaciones correctas para el componente React de FullCalendar ===
import FullCalendar from '@fullcalendar/react'; // <-- Este es el componente de React
import dayGridPlugin from '@fullcalendar/daygrid'; // Para la vista de mes (rejilla de días)
import timeGridPlugin from '@fullcalendar/timegrid'; // Para las vistas de semana/día por horas
import interactionPlugin from '@fullcalendar/interaction'; // Para interactividad (seleccionar, arrastrar eventos)
import listPlugin from '@fullcalendar/list'; // Para la vista de lista
import esLocale from '@fullcalendar/core/locales/es'; // Importa el paquete de idioma español

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import '../../../styles/Dashboards/Estudiante/CalendarioTab.css';)
// Los estilos de esta pestaña se manejan con Tailwind CSS.

function CalendarioTab({ showToast, setShowGlobalSpinner }) { // Recibe props si son necesarias
  const calendarRef = useRef(null); // Ref para el componente FullCalendar de React

  // Eventos de ejemplo para el calendario
  // Se usan los nombres de color de Tailwind definidos en tailwind.config.js
  const events = [
    { title: 'Examen de Matemáticas', start: '2025-07-25', color: '#EF4444' }, // red-500
    { title: 'Entrega Proyecto Ciencias', start: '2025-07-30', color: '#3B82F6' }, // primary-500 (similar a blue-500)
    { title: 'Día del Deporte', start: '2025-08-10', allDay: true, color: '#22C55E' }, // success-500 (similar a green-500)
    { title: 'Reunión de Padres', start: '2025-07-28T18:00:00', end: '2025-07-28T19:00:00', color: '#F97316' }, // warning-500 (similar a orange-500)
  ];

  useEffect(() => {
    // Ejemplo de cómo accederías a la API si fuera necesario:
    // if (calendarRef.current) {
    //   const calendarApi = calendarRef.current.getApi();
    //   console.log("API de FullCalendar disponible:", calendarApi);
    //   // calendarApi.addEvent({ id: 'new-event', title: 'Nuevo Evento Dinámico', start: '2025-07-26' });
    // }
  }, []);

  // Función para manejar el clic en un evento (ejemplo)
  const handleEventClick = (clickInfo) => {
    showToast(`Evento: ${clickInfo.event.title} (${clickInfo.event.startStr})`, 'info');
  };

  // Función para manejar la selección de una fecha/rango (ejemplo)
  const handleDateSelect = (selectInfo) => {
    showToast(`Fecha seleccionada: ${selectInfo.startStr} a ${selectInfo.endStr}`, 'info');
  };

  return (
    // Contenedor principal de la pestaña con padding
    <div className="p-4">
      {/* Encabezado de la pestaña con estilos Tailwind */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Mi Calendario</h3>
        {/* Botón para agregar evento rápidamente con estilos pulidos */}
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">
            <i className="fas fa-plus mr-2"></i> Añadir Evento
        </button>
      </div>
      
      {/* Contenedor del calendario con fondo blanco y sombra */}
      <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100"> {/* Redondeado y borde para la tarjeta */}
        {/* === AQUÍ SE RENDERIZA EL CALENDARIO USANDO EL COMPONENTE DE REACT === */}
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          }}
          events={events}
          locale={esLocale}
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={true}
          eventClick={handleEventClick}
          select={handleDateSelect}
          height="auto"
          // Puedes añadir estilos CSS específicos para FullCalendar en global.css si es necesario.
          // Por ejemplo, para los botones internos de FullCalendar.
        />
      </div>
    </div>
  );
}

export default CalendarioTab;
