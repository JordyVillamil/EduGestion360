// src/pages/Dashboards/Estudiante/tabs/RecursosTab.jsx
import React from 'react';
// Asegúrate que esta ruta sea correcta para tu componente compartido
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './RecursosTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const RecursoCard = ({ recurso }) => (
    // Columna para la tarjeta de recurso. w-full para ancho completo en móvil, md:w-1/3 para 1/3 en desktop, px-2 para padding horizontal.
    <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
        <Card title={
            // Título de la tarjeta con la materia y el badge del tipo de recurso
            <span className="flex justify-between items-center text-gray-800 text-lg font-semibold">
                {recurso.materia}
                {/* Badge para el tipo de recurso con estilos Tailwind */}
                <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    {recurso.tipo}
                </span>
            </span>
        }>
            <h5 className="text-xl font-semibold text-gray-700 mb-2">{recurso.titulo}</h5>
            <p className="text-gray-600 text-sm mb-4">{recurso.desc}</p>
            {/* Pie de la tarjeta con el botón de descarga */}
            <div className="pt-4 border-t border-gray-200 mt-auto"> {/* mt-auto para empujar al final */}
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 text-sm">
                    Descargar
                </button>
            </div>
        </Card>
    </div>
);

const RecursosTab = ({ showToast, setShowGlobalSpinner }) => { // Recibe props si son necesarias
    const recursos = [
        { id: 1, materia: 'Matemáticas', tipo: 'PDF', titulo: 'Guía de Álgebra', desc: 'Material de apoyo y ejercicios prácticos para el tema de álgebra.' },
        { id: 2, materia: 'Ciencias', tipo: 'Video', titulo: 'Ciclo del agua', desc: 'Video explicativo interactivo sobre las fases del ciclo del agua.' },
        { id: 3, materia: 'Lenguaje', tipo: 'Enlace', titulo: 'Biblioteca virtual', desc: 'Acceso a una colección de obras literarias clásicas y contemporáneas.' },
        { id: 4, materia: 'Historia', tipo: 'Presentación', titulo: 'Las Civilizaciones Antiguas', desc: 'Presentación con diapositivas sobre las primeras civilizaciones.' },
        { id: 5, materia: 'Arte', tipo: 'Imagen', titulo: 'Grandes Obras de Arte', desc: 'Galería de imágenes de pinturas y esculturas famosas.' },
    ];

    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Mis Recursos Educativos</h3>

            {/* Sección de Filtros (ejemplo) */}
            <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-3">Filtros de Recursos</h3>
                <div className="flex flex-wrap items-center gap-4">
                    <div>
                        <label htmlFor="resourceSubjectFilter" className="block text-sm font-medium text-gray-700">Materia:</label>
                        <select id="resourceSubjectFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todas</option>
                            <option>Matemáticas</option>
                            <option>Ciencias</option>
                            <option>Lenguaje</option>
                            <option>Historia</option>
                            <option>Arte</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="resourceTypeFilter" className="block text-sm font-medium text-gray-700">Tipo:</label>
                        <select id="resourceTypeFilter" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                            <option>Todos</option>
                            <option>PDF</option>
                            <option>Video</option>
                            <option>Enlace</option>
                            <option>Presentación</option>
                            <option>Imagen</option>
                        </select>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Aplicar Filtros</button>
                </div>
            </div>

            {/* Fila de Tarjetas de Recurso */}
            <div className="flex flex-wrap -mx-2"> {/* Usa flex-wrap para responsividad, -mx-2 para compensar el px-2 en los hijos */}
                {recursos.map((rec) => <RecursoCard key={rec.id} recurso={rec} />)}
            </div>
        </div>
    );
};

export default RecursosTab;
