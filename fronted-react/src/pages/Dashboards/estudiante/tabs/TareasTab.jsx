// src/pages/Dashboards/Estudiante/tabs/TareasTab.jsx
import React from 'react';
// Asegúrate que esta ruta sea correcta para tu componente compartido
import Card from '../../../../components/shared/Card';

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './TareasTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const TareaCard = ({ tarea }) => (
    // Columna para la tarjeta de tarea. w-full para ancho completo en móvil, md:w-1/3 para 1/3 en desktop, px-3 para padding horizontal.
    <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-6"> {/* Ajustado a px-3 y mb-6 para consistencia */}
        <Card title={
            // Título de la tarjeta con la materia y el badge de la fecha de vencimiento
            <span className="flex justify-between items-center text-gray-800 text-lg font-semibold">
                {tarea.materia}
                {/* Badge para la fecha de vencimiento con estilos Tailwind pulidos */}
                <span className={`
                    text-white text-xs font-semibold px-2.5 py-1 rounded-full
                    ${tarea.vence === 'Vence hoy' ? 'bg-red-500' : 'bg-yellow-400 text-gray-800'}
                `}>
                    {tarea.vence}
                </span>
            </span>
        }>
            <h5 className="text-xl font-semibold text-gray-700 mb-2">{tarea.titulo}</h5>
            <p className="text-gray-600 text-sm mb-5">{tarea.descripcion}</p> {/* Más margen inferior */}
            {/* Pie de la tarjeta con el botón de "Ver detalles" */}
            <div className="pt-4 border-t border-gray-200 mt-auto flex justify-end"> {/* mt-auto para empujar al final, justify-end para alinear botón */}
                <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-sm shadow-sm hover:shadow-md transition-all duration-200">
                    Ver detalles
                </button>
            </div>
        </Card>
    </div>
);

const TareasTab = ({ showToast, setShowGlobalSpinner }) => { // Recibe props si son necesarias
    const tareas = [
        { id: 1, materia: 'Matemáticas', vence: 'Vence hoy', titulo: 'Ejercicios de Álgebra', descripcion: 'Resolver problemas 1-15 del capítulo 3, entregar al final del día.' },
        { id: 2, materia: 'Lenguaje', vence: '2 días', titulo: 'Ensayo literario', descripcion: 'Escribir un ensayo crítico sobre "Cien años de soledad", mínimo 1000 palabras.' },
        { id: 3, materia: 'Ciencias', vence: '1 semana', titulo: 'Proyecto de Biología', descripcion: 'Investigación sobre ecosistemas locales y presentación en equipo.' },
        { id: 4, materia: 'Historia', vence: '3 días', titulo: 'Lectura Dirigida', descripcion: 'Leer capítulos 5 y 6 del libro de texto y preparar un resumen.' },
        { id: 5, materia: 'Inglés', vence: 'Mañana', titulo: 'Práctica de Vocabulario', descripcion: 'Completar los ejercicios de vocabulario en la plataforma online.' },
    ];

    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Mis Tareas Pendientes</h3>

            {/* Sección de Filtros - Fondo sutil, bordes redondeados y sombra */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Tareas</h3>
                <div className="flex flex-wrap items-center gap-6">
                    <div>
                        <label htmlFor="taskSubjectFilter" className="block text-sm font-medium text-gray-700 mb-1">Materia:</label>
                        <select id="taskSubjectFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todas</option>
                            <option>Matemáticas</option>
                            <option>Lenguaje</option>
                            <option>Ciencias</option>
                            <option>Historia</option>
                            <option>Inglés</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="taskStatusFilter" className="block text-sm font-medium text-gray-700 mb-1">Estado:</label>
                        <select id="taskStatusFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todas</option>
                            <option>Pendientes</option>
                            <option>Completadas</option>
                            <option>Vencidas</option>
                        </select>
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Aplicar Filtros</button>
                </div>
            </div>

            {/* Fila de Tarjetas de Tarea */}
            <div className="flex flex-wrap -mx-3"> {/* Ajustado a -mx-3 para consistencia */}
                {tareas.map((tarea) => <TareaCard key={tarea.id} tarea={tarea} />)}
            </div>
        </div>
    );
};

export default TareasTab;
