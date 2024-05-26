"use client"
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
  // Sample data for the bar chart
  const data = {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Total View',
        width: "14px",
        backgroundColor: '#ff6725',
        borderColor: '#ff6725',
        borderWidth: 1,
        hoverBackgroundColor: '#ff6725',
        hoverBorderColor: '#ff6725',
        data: [20000, 12000, 6000, 16000, 10000, 5000, 11000],
      },
    ],
  };

  // Bar chart options
  const options = {
    scales: {
      y: {
        // type: 'linear',
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChart;


