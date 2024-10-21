import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

const ApplicationStatusChart = ({ applications }) => {

    if (!Array.isArray(applications)) {
        console.error('Applications data is not an array:', applications);
        return null;
      }
    
    ChartJS.register(Title, Tooltip, Legend, ArcElement);
  const statusCounts = applications.reduce(
    (acc, app) => {
      acc[app.status] = (acc[app.status] || 0) + 1;
      return acc;
    },
    { Applied: 0, Interview: 0, Offer: 0, Rejected: 0 }
  );

  const data = {
    labels: ['Applied', 'Interview', 'Offer', 'Rejected'],
    datasets: [
      {
        label: 'Application Status',
        data: Object.values(statusCounts),
        backgroundColor: ['#4caf50', '#2196f3', '#ffeb3b', '#f44336'],
      },
    ],
  };

  const options = {
    plugins: {
        title: {
            display: true,
            text: 'Application Status Distribution',
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

  return <Pie data={data} options={options} />;
};

export default ApplicationStatusChart;
