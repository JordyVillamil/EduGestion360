// src/pages/Dashboards/docente/tabs/CrearActividadesTab.jsx
import React from 'react';
import Card from '../../../../components/shared/Card'; // Añadimos un nivel más de '..'

// NOTA: Elimina cualquier importación de archivos CSS aquí (ej. import './CrearActividadesTab.css';)
// Todos los estilos ahora se manejan con Tailwind CSS.

const CrearActividadesTab = ({ showToast, setShowGlobalSpinner }) => { // Si necesitas props aquí, añádelas
    const actividadesRecientes = [
        { id: 1, titulo: 'Ejercicios de Álgebra', fecha: '12/04/2025', info: 'Tarea • Matemáticas • 10° A' },
        { id: 2, titulo: 'Ensayo literario', fecha: '10/04/2025', info: 'Tarea • Lenguaje • 11° B' },
        { id: 3, titulo: 'Examen parcial', fecha: '05/04/2025', info: 'Examen • Matemáticas • 10° A, 10° B' }
    ];

    return (
        // Contenedor principal de la pestaña con padding
        <div className="p-4">
            <div className="flex flex-wrap -mx-2"> {/* Contenedor de fila con columnas responsivas */}
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0"> {/* Columna 1/2 en md y arriba */}
                    <Card title="Nueva Actividad">
                        {/* Formulario de nueva actividad con clases Tailwind */}
                        <form className="space-y-4"> {/* Usa space-y para espaciado vertical entre elementos del formulario */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="actividadTitulo">Título de la actividad</label>
                                <input
                                    type="text"
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    id="actividadTitulo"
                                    placeholder="Ej: Ejercicios de Geometría"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="actividadTipo">Tipo de actividad</label>
                                <select className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" id="actividadTipo" required>
                                    <option value="">Seleccionar tipo</option>
                                    <option value="tarea">Tarea</option>
                                    <option value="examen">Examen</option>
                                    <option value="proyecto">Proyecto</option>
                                    <option value="actividad-clase">Actividad en Clase</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="actividadDescripcion">Descripción</label>
                                <textarea
                                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                    id="actividadDescripcion"
                                    rows="3"
                                    placeholder="Detalles sobre la actividad..."
                                    required
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="actividadFechaEntrega">Fecha de Entrega</label>
                                <input type="date" className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" id="actividadFechaEntrega" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="actividadCurso">Curso(s)</label>
                                <select multiple className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-24" id="actividadCurso" required>
                                    <option>10° A</option>
                                    <option>10° B</option>
                                    <option>11° A</option>
                                    <option>11° B</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="actividadArchivos">Adjuntar archivos</label>
                                <input
                                    type="file"
                                    className="block w-full text-sm text-gray-500
                                               file:mr-4 file:py-2 file:px-4
                                               file:rounded-md file:border-0
                                               file:text-sm file:font-semibold
                                               file:bg-blue-50 file:text-blue-700
                                               hover:file:bg-blue-100"
                                    id="actividadArchivos"
                                    multiple
                                />
                            </div>
                            <div className="text-right"> {/* Alinea el botón a la derecha */}
                                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Crear actividad</button>
                            </div>
                        </form>
                    </Card>
                </div>
                <div className="w-full md:w-1/2 px-2">
                    <Card title="Actividades creadas recientemente">
                        {/* Lista de actividades recientes con estilos Tailwind */}
                        <ul className="divide-y divide-gray-200"> {/* Divide los elementos con un borde */}
                            {actividadesRecientes.map((act, i) => (
                                <li className="py-4 hover:bg-gray-50 px-4" key={act.id || i}> {/* Agregué act.id para key, si no existe usa i */}
                                    <div className="flex justify-between items-center mb-1">
                                        <h6 className="text-lg font-semibold text-gray-800">{act.titulo}</h6>
                                        <small className="text-gray-500 text-xs">{act.fecha}</small>
                                    </div>
                                    <p className="text-sm text-gray-600">{act.info}</p>
                                    <div className="flex justify-end space-x-2 mt-2">
                                        <button className="text-blue-600 hover:text-blue-800 text-sm"><i className="fas fa-edit"></i> Editar</button>
                                        <button className="text-red-600 hover:text-red-800 text-sm"><i className="fas fa-trash"></i> Eliminar</button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CrearActividadesTab;
