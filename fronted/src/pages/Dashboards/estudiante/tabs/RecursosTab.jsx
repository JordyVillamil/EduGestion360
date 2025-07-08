// src/pages/Dashboards/Estudiante/tabs/RecursosTab.jsx
import React from 'react';
// Asegúrate que esta ruta sea correcta para tu componente compartido
import Card from '../../../../components/shared/Card';

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './RecursosTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const RecursoCard = ({ recurso }) => (
    // Columna para la tarjeta de recurso. w-full para ancho completo en móvil, md:w-1/3 para 1/3 en desktop, px-3 para padding horizontal.
    <div className="w-full sm:w-1/2 md:w-1/3 px-3 mb-6"> {/* Ajustado a px-3 y mb-6 para consistencia */}
        <Card title={
            // Título de la tarjeta con la materia y el badge del tipo de recurso
            <span className="flex justify-between items-center text-gray-800 text-lg font-semibold">
                {recurso.materia}
                {/* Badge para el tipo de recurso con estilos Tailwind pulidos */}
                <span className="bg-primary-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full"> {/* Ajustado padding y color a primary */}
                    {recurso.tipo}
                </span>
            </span>
        }>
            <h5 className="text-xl font-semibold text-gray-700 mb-2">{recurso.titulo}</h5>
            <p className="text-gray-600 text-sm mb-5">{recurso.desc}</p> {/* Más margen inferior */}
            {/* Pie de la tarjeta con el botón de descarga */}
            <div className="pt-4 border-t border-gray-200 mt-auto flex justify-end"> {/* mt-auto para empujar al final, justify-end para alinear botón */}
                <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2.5 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-sm shadow-sm hover:shadow-md transition-all duration-200">
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

            {/* Sección de Filtros - Fondo sutil, bordes redondeados y sombra */}
            <div className="mb-8 bg-gray-100 p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-700 mb-4">Filtros de Recursos</h3>
                <div className="flex flex-wrap items-center gap-6">
                    <div>
                        <label htmlFor="resourceSubjectFilter" className="block text-sm font-medium text-gray-700 mb-1">Materia:</label>
                        <select id="resourceSubjectFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todas</option>
                            <option>Matemáticas</option>
                            <option>Ciencias</option>
                            <option>Lenguaje</option>
                            <option>Historia</option>
                            <option>Arte</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="resourceTypeFilter" className="block text-sm font-medium text-gray-700 mb-1">Tipo:</label>
                        <select id="resourceTypeFilter" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-800 transition-all duration-200">
                            <option>Todos</option>
                            <option>PDF</option>
                            <option>Video</option>
                            <option>Enlace</option>
                            <option>Presentación</option>
                            <option>Imagen</option>
                        </select>
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 shadow-md hover:shadow-lg">Aplicar Filtros</button>
                </div>
            </div>

            {/* Fila de Tarjetas de Recurso */}
            <div className="flex flex-wrap -mx-3"> {/* Ajustado a -mx-3 para consistencia */}
                {recursos.map((rec) => <RecursoCard key={rec.id} recurso={rec} />)}
            </div>
        </div>
    );
};

export default RecursosTab;
