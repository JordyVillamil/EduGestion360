import React from 'react';
import Card from './Card';
// En un proyecto real: import { Bar, Line, Pie } from 'react-chartjs-2';

// Un contenedor para los gráficos
const ChartWrapper = ({ title, type = 'bar' }) => {
  // Aquí iría la lógica para configurar los datos y opciones del gráfico
  // y luego renderizar el componente de gráfico correspondiente (Bar, Line, etc.)
  
  return (
    <Card title={title}>
      <div style={{ height: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa' }}>
        <p className="text-muted">Componente de Gráfico ({type}) iría aquí.</p>
      </div>
    </Card>
  );
};

export default ChartWrapper;