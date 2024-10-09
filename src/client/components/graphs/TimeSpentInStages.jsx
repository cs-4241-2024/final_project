import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

const TimeSpentInStagesChart = ({ applications }) => {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  const averageDays = {
    'Applied → Interview': 0,
    'Interview → Offer': 0,
    'Offer → Acceptance': 0,
  };
  const stageCount = { 'Applied → Interview': 0, 'Interview → Offer': 0, 'Offer → Acceptance': 0 };

  applications.forEach((app) => {
    if (app.status === 'Interview') {
      averageDays['Applied → Interview'] += app.daysInStage;
      stageCount['Applied → Interview']++;
    } else if (app.status === 'Offer') {
      averageDays['Interview → Offer'] += app.daysInStage;
      stageCount['Interview → Offer']++;
    } else if (app.status === 'Accepted') {
      averageDays['Offer → Acceptance'] += app.daysInStage;
      stageCount['Offer → Acceptance']++;
    }
  });

  for (const stage in averageDays) {
    if (stageCount[stage] > 0) {
      averageDays[stage] /= stageCount[stage];
    }
  }

  const data = {
    labels: Object.keys(averageDays),
    datasets: [
      {
        label: 'Average Days Spent',
        data: Object.values(averageDays),
        backgroundColor: '#2196f3',
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    plugins: {
        title: {
            display: true,
            text: 'Average Days Spent in Each Stage',
            font: {
                size: 20
            }
        },
      legend: {
        display: false,
      },
    },
    animation: {
        duration: 1000, 
        easing: 'easeInOutQuad',
      },
  };

  return <Bar data={data} options={options} />;
};

export default TimeSpentInStagesChart;
