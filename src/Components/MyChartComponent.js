import React, { useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

let myChart = null;

const MyChartComponent = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');

    // Destroy the previous chart if it exists
    if (myChart) {
      myChart.destroy();
    }

    // Create a new chart instance
    myChart = new ChartJS(ctx, {  // Change from 'Chart' to 'ChartJS'
      type: 'bar',  // Example chart type
      data: {
        labels: ['January', 'February', 'March', 'April'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81],
        }]
      },
      options: {
        responsive: true,
      }
    });

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
}

export default MyChartComponent;
