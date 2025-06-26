// src/pages/Dashboards/Estudiante/tabs/TareasTab.jsx
import React from 'react';
// Asegúrate que esta ruta sea correcta para tu componente compartido
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './TareasTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const TareaCard = ({ tarea }) => (
    // Columna para la tarjeta de tarea. w-full para ancho completo en móvil, md:w-1/3 para 1/3 en desktop, px-2 para padding horizontal.
    <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
        <Card title={
            // Título de la tarjeta con la materia y el badge de la fecha de vencimiento
            <span className="flex justify-between items-center text-gray-800 text-lg font-semibold">
                {tarea.materia}
                {/* Badge para la fecha de vencimiento con estilos Tailwind */}
                <span className={`
                    text-white text-xs font-semibold px-2 py-0.5 rounded-full
                    ${tarea.vence === 'Vence hoy' ? 'bg-red-500' : 'bg-yellow-400 text-gray-800'}
                `}>
                    {tarea.vence}
                </span>
            </span>
        }>
            <h5 className="text-xl font-semibold text-gray-700 mb-2">{tarea.titulo}</h5>
            <p className="text-gray-600 text-sm mb-4">{tarea.descripcion}</p>
            {/* Pie de la tarjeta con el botón de "Ver detalles" */}
            <div className="pt-4 border-t border-gray-200 mt-auto"> {/* mt-auto para empujar al final */}
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm">
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

            {/* Sección de Filtros (ejemplo) */}
            <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtros de Tareas</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <div>
                        <label htmlFor="taskSubjectFilter" className="block text-sm font-medium text-gray-700">Materia:</label>
                        <select id="taskSubjectFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todas</option>
                            <option>Matemáticas</option>
                            <option>Lenguaje</option>
                            <option>Ciencias</option>
                            <option>Historia</option>
                            <option>Inglés</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="taskStatusFilter" className="block text-sm font-medium text-gray-700">Estado:</label>
                        <select id="taskStatusFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todas</option>
                            <option>Pendientes</option>
                            <option>Completadas</option>
                            <option>Vencidas</option>
                        </select>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Aplicar Filtros</button>
                </div>
            </div>

            {/* Fila de Tarjetas de Tarea */}
            <div className="flex flex-wrap -mx-2"> {/* Usa flex-wrap para responsividad, -mx-2 para compensar el px-2 en los hijos */}
                {tareas.map((tarea) => <TareaCard key={tarea.id} tarea={tarea} />)}
            </div>
        </div>
    );
};

export default TareasTab;
