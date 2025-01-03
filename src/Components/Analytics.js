import React from 'react';
import { Bar } from 'react-chartjs-2';

const Analytics = () => {
  const data = {
    labels: ['LinkedIn Post', 'Email', 'Phone Call'],
    datasets: [
      {
        label: 'Communication Frequency',
        data: [10, 15, 5],
        backgroundColor: ['#007bff', '#28a745', '#ffc107'],
      },
    ],
  };

  return (
    <div>
      <h1>Analytics Dashboard</h1>
      <Bar data={data} />
    </div>
  );
};

export default Analytics;
