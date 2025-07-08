// src/components/shared/ChartWrapper.jsx
import React from 'react';
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2'; // Importamos los tipos de gráficos de react-chartjs-2
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Para gráficos de pastel/donuts
  PointElement, // Para gráficos de línea
  LineElement, // Para gráficos de línea
  Filler // Opcional: para áreas sombreadas en gráficos de línea
} from 'chart.js';

// **REGISTRA LOS COMPONENTES NECESARIOS DE CHART.JS**
// Esto es crucial para que Chart.js sepa qué elementos de gráfico debe renderizar.
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

const ChartWrapper = ({ title, description, chartType, chartData, chartOptions }) => {
  let ChartComponent;

  // Selecciona el componente de gráfico basado en el tipo prop
  switch (chartType) {
    case 'bar':
      ChartComponent = Bar;
      break;
    case 'line':
      ChartComponent = Line;
      break;
    case 'pie':
      ChartComponent = Pie;
      break;
    case 'doughnut': // Añadimos soporte para gráficos de dona
      ChartComponent = Doughnut;
      break;
    default:
      ChartComponent = Bar; // Valor por defecto si no se especifica un tipo
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      {description && <p className="text-gray-600 mb-4">{description}</p>}
      <div className="relative h-80 w-full"> {/* Contenedor con altura y ancho fijos para el gráfico */}
        {chartData ? (
          <ChartComponent data={chartData} options={chartOptions} />
        ) : (
          <p className="text-center text-gray-500 py-10">Cargando datos del gráfico...</p>
        )}
      </div>
    </div>
  );
};

export default ChartWrapper;