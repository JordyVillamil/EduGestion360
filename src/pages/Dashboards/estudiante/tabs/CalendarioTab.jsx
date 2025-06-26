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
  const events = [
    { title: 'Examen de Matemáticas', start: '2025-07-25', color: '#EF4444' }, // color Tailwind red-500
    { title: 'Entrega Proyecto Ciencias', start: '2025-07-30', color: '#3B82F6' }, // color Tailwind blue-500
    { title: 'Día del Deporte', start: '2025-08-10', allDay: true, color: '#22C55E' }, // color Tailwind green-500
    { title: 'Reunión de Padres', start: '2025-07-28T18:00:00', end: '2025-07-28T19:00:00', color: '#F97316' }, // color Tailwind orange-500
  ];

  // Este useEffect no es estrictamente necesario para la inicialización
  // del calendario en sí (el componente <FullCalendar> lo hace),
  // pero lo puedes usar para lógica que interactúe con la API del calendario
  // *después* de que se haya renderizado.
  useEffect(() => {
    // Ejemplo de cómo accederías a la API si fuera necesario:
    // if (calendarRef.current) {
    //   const calendarApi = calendarRef.current.getApi();
    //   console.log("API de FullCalendar disponible:", calendarApi);
    //   // calendarApi.addEvent({ id: 'new-event', title: 'Nuevo Evento Dinámico', start: '2025-07-26' });
    // }
  }, []); // El array de dependencias vacío significa que se ejecuta una vez al montar

  // Función para manejar el clic en un evento (ejemplo)
  const handleEventClick = (clickInfo) => {
    showToast(`Evento: ${clickInfo.event.title} (${clickInfo.event.startStr})`, 'info');
    // Puedes abrir un modal o redirigir aquí
  };

  // Función para manejar la selección de una fecha/rango (ejemplo)
  const handleDateSelect = (selectInfo) => {
    showToast(`Fecha seleccionada: ${selectInfo.startStr} a ${selectInfo.endStr}`, 'info');
    // Puedes abrir un formulario para añadir un nuevo evento aquí
  };

  return (
    // Contenedor principal de la pestaña con padding
    <div className="p-4">
      {/* Encabezado de la pestaña con estilos Tailwind */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800">Mi Calendario</h3>
        {/* Aquí puedes añadir un botón para agregar evento rápidamente si lo deseas */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
            <i className="fas fa-plus mr-2"></i> Añadir Evento
        </button>
      </div>
      
      {/* Contenedor del calendario con fondo blanco y sombra */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        {/* === AQUÍ SE RENDERIZA EL CALENDARIO USANDO EL COMPONENTE DE REACT === */}
        <FullCalendar
          ref={calendarRef} // Asociamos la referencia al componente React
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]} // Pasamos los plugins
          initialView="dayGridMonth" // Vista inicial por defecto
          // Configuración de la barra de herramientas del encabezado del calendario
          headerToolbar={{
            left: 'prev,next today', // Botones de navegación y "hoy"
            center: 'title', // Título del calendario (ej. "Julio 2025")
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek' // Vistas disponibles
          }}
          events={events} // Pasamos los eventos al calendario
          locale={esLocale} // Establece el idioma del calendario a español
          editable={true}   // Permite arrastrar y soltar eventos para editarlos
          selectable={true} // Permite seleccionar fechas y rangos
          selectMirror={true} // Muestra un "fantasma" del evento al seleccionar un rango
          dayMaxEvents={true} // Muestra "+n más" si hay demasiados eventos en un día
          weekends={true} // Muestra los fines de semana
          // Handlers de eventos de FullCalendar
          eventClick={handleEventClick} // Se ejecuta al hacer clic en un evento
          select={handleDateSelect} // Se ejecuta al seleccionar una fecha o rango
          // Puedes añadir más opciones como props aquí: eventChange, eventAdd, eventRemove, etc.
          // Estilo de FullCalendar (puedes sobrescribir con Tailwind en global.css si es necesario)
          height="auto" // Ajusta la altura automáticamente
        />
      </div>
    </div>
  );
}

export default CalendarioTab;
