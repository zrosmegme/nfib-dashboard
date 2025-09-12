import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { monthlyData, AVERAGE_BASELINE } from '../data/quarterlyData';
import './OptimismChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const OptimismChart: React.FC = () => {
  const labels = monthlyData.map(d => d.month);
  const optimismValues = monthlyData.map(d => d.optimism);
  const uncertaintyValues = monthlyData.map(d => d.uncertainty);

  const data = {
    labels,
    datasets: [
      {
        label: 'Optimism Index',
        data: optimismValues,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.3,
        pointRadius: 5,
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#3b82f6',
        pointBorderWidth: 2,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: '#3b82f6',
        pointHoverBorderColor: '#ffffff',
        pointHoverBorderWidth: 2,
        yAxisID: 'y',
      },
      {
        label: 'Uncertainty Index',
        data: uncertaintyValues,
        borderColor: '#8b5cf6',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        borderWidth: 2.5,
        borderDash: [6, 3],
        fill: false,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: '#ffffff',
        pointBorderColor: '#8b5cf6',
        pointBorderWidth: 2,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#8b5cf6',
        pointHoverBorderColor: '#ffffff',
        pointHoverBorderWidth: 2,
        yAxisID: 'y1',
      },
      {
        label: '52-Year Average',
        data: Array(labels.length).fill(AVERAGE_BASELINE),
        borderColor: '#ef4444',
        borderWidth: 2,
        borderDash: [8, 4],
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
        yAxisID: 'y',
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        padding: 14,
        cornerRadius: 6,
        titleFont: {
          size: 13,
          weight: 600,
        },
        bodyFont: {
          size: 12,
        },
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y.toFixed(1);
            }
            return label;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#64748b',
          font: {
            size: 11,
          },
        },
      },
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Optimism Index',
          color: '#3b82f6',
          font: {
            size: 12,
            weight: 600,
          },
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          color: '#64748b',
          font: {
            size: 11,
          },
        },
        min: 80,
        max: 110,
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Uncertainty Index',
          color: '#8b5cf6',
          font: {
            size: 12,
            weight: 600,
          },
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: '#64748b',
          font: {
            size: 11,
          },
        },
        min: 80,
        max: 115,
      },
    },
  };

  return (
    <div className="chart-section">
      <h2 className="section-header">Monthly Optimism & Uncertainty Index Trends</h2>
      <div className="chart-legend">
        <div className="legend-item">
          <span className="legend-color" style={{ backgroundColor: '#3b82f6' }}></span>
          <span>Optimism Index</span>
        </div>
        <div className="legend-item">
          <span className="legend-color legend-dashed" style={{ borderColor: '#8b5cf6' }}></span>
          <span>Uncertainty Index</span>
        </div>
        <div className="legend-item">
          <span className="legend-color legend-dashed" style={{ borderColor: '#ef4444' }}></span>
          <span>52-Year Average (98)</span>
        </div>
      </div>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default OptimismChart;