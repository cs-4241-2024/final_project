import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

const ApplicationOutcomeSummaryChart = ({ applications }) => {ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


  const outcomeCounts = applications.reduce(
    (acc, app) => {
      acc[app.outcome] = (acc[app.outcome] || 0) + 1;
      return acc;
    },
    { Offer: 0, Rejected: 0, 'No Response': 0 }
  );

  const data = {
    labels: ['Offer', 'Rejected', 'Interview', 'No Response'],
    datasets: [
      {
        label: 'Application Outcomes',
        data: Object.values(outcomeCounts),
        backgroundColor: ['#4caf50', '#f44336', '#bdbdbd', '#ffeb3b'],
      },
    ],
  };

  const options = {
    plugins: {
        title: {
            display: true,
            text: 'Application Outcomes',
            font: {
                size: 20
            }
        },
      legend: {
        position: 'bottom',
      },
    },
    animation: {
        duration: 1000, 
        easing: 'easeInOutQuad',
      },
  };

  return <Bar data={data} options={options} />;
};

export default ApplicationOutcomeSummaryChart;
