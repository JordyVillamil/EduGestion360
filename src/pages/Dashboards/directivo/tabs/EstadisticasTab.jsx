// src/pages/Dashboards/Directivo/tabs/EstadisticasTab.jsx
import React, { useState, useEffect } from 'react';
import ChartWrapper from '../../../../components/shared/ChartWrapper';
import StatisticCard from '../../../../components/shared/StatisticCard';
import Card from '../../../../components/shared/Card';

const EstadisticasTab = () => {
  // Datos de ejemplo para el gráfico de barras (Asistencia Mensual)
  const asistenciaBarChartData = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
    datasets: [
      {
        label: 'Asistencia Promedio (%)',
        data: [85, 90, 88, 92, 87, 95], // Datos de asistencia promedio
        backgroundColor: [
            'rgba(66, 153, 225, 0.7)', // primary-400
            'rgba(56, 178, 172, 0.7)', // teal-400
            'rgba(246, 173, 85, 0.7)', // orange-400
            'rgba(157, 130, 240, 0.7)', // indigo-400
            'rgba(237, 100, 166, 0.7)', // pink-400
            'rgba(71, 85, 105, 0.7)' // gray-600
        ],
        borderColor: [
            'rgba(66, 153, 225, 1)',
            'rgba(56, 178, 172, 1)',
            'rgba(246, 173, 85, 1)',
            'rgba(157, 130, 240, 1)',
            'rgba(237, 100, 166, 1)',
            'rgba(71, 85, 105, 1)'
        ],
        borderWidth: 1,
        borderRadius: 4, // Bordes redondeados para las barras
      },
    ],
  };

  const asistenciaBarChartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Importante para que el gráfico se ajuste al contenedor
    plugins: {
      legend: {
        position: 'top',
        labels: {
            font: {
                size: 14
            }
        }
      },
      title: {
        display: true,
        text: 'Asistencia Promedio Mensual',
        font: {
            size: 18,
            weight: 'bold'
        },
        color: '#374151' // gray-700
      },
      tooltip: {
        callbacks: {
            label: function(context) {
                let label = context.dataset.label || '';
                if (label) {
                    label += ': ';
                }
                if (context.parsed.y !== null) {
                    label += context.parsed.y + '%';
                }
                return label;
            }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
            display: true,
            text: 'Porcentaje (%)',
            font: {
                size: 14
            }
        },
        ticks: {
            callback: function(value) {
                return value + '%';
            }
        }
      },
      x: {
        title: {
            display: true,
            text: 'Mes',
            font: {
                size: 14
            }
        }
      }
    },
  };

  // Datos de ejemplo para el gráfico de pastel (Distribución de Roles)
  const rolesPieChartData = {
    labels: ['Estudiantes', 'Docentes', 'Directivos', 'Administrativos'],
    datasets: [
      {
        data: [700, 80, 10, 5], // Número de usuarios por rol
        backgroundColor: [
          '#4299e1', // primary-500
          '#48bb78', // success-500
          '#ecc94b', // warning-500
          '#a0aec0', // gray-500
        ],
        borderColor: '#ffffff', // Borde blanco para las secciones
        borderWidth: 2,
      },
    ],
  };

  const rolesPieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right', // Leyenda a la derecha
        labels: {
            font: {
                size: 14
            }
        }
      },
      title: {
        display: true,
        text: 'Distribución de Usuarios por Rol',
        font: {
            size: 18,
            weight: 'bold'
        },
        color: '#374151' // gray-700
      },
      tooltip: {
        callbacks: {
            label: function(context) {
                let label = context.label || '';
                if (label) {
                    label += ': ';
                }
                if (context.parsed) {
                    label += context.parsed + ' usuarios';
                }
                return label;
            }
        }
      }
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Statistic Cards (manteniendo tus componentes existentes) */}
      <StatisticCard title="Total Estudiantes" value="1200" icon="fas fa-users" />
      <StatisticCard title="Profesores Activos" value="75" icon="fas fa-chalkboard-teacher" />
      <StatisticCard title="Eventos Próximos" value="15" icon="fas fa-calendar-alt" />

      {/* Contenedor para los gráficos, ocupando el ancho completo en pantallas grandes */}
      <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChartWrapper
          title="Rendimiento de Asistencia"
          description="Promedio de asistencia de estudiantes por mes."
          chartType="bar" // Tipo de gráfico: 'bar'
          chartData={asistenciaBarChartData}
          chartOptions={asistenciaBarChartOptions}
        />
        <ChartWrapper
          title="Composición de la Comunidad"
          description="Número de usuarios por cada rol en la plataforma."
          chartType="pie" // Tipo de gráfico: 'pie'
          chartData={rolesPieChartData}
          chartOptions={rolesPieChartOptions}
        />
      </div>

      {/* Ejemplo de uso de Card para contenido adicional */}
      <Card title="Noticias Importantes" className="md:col-span-2 lg:col-span-3">
        <ul className="list-disc pl-5 text-gray-700">
          <li>Reunión de padres de familia el 15 de Julio de 2025.</li>
          <li>Inscripciones para cursos de verano abiertas hasta el 30 de Junio de 2025.</li>
          <li>Ceremonia de graduación: 20 de Diciembre de 2025.</li>
        </ul>
      </Card>
    </div>
  );
};

export default EstadisticasTab;