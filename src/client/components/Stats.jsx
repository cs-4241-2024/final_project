import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const Stats = ({ applications }) => {
  const [statusData, setStatusData] = useState({});
  const [submissionData, setSubmissionData] = useState({});

  useEffect(() => {
    if (applications.length > 0) {
      const statusCounts = applications.reduce((acc, application) => { //count status
        const status = application.status; 
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      }, {});


      setStatusData({
        labels: Object.keys(statusCounts),
        datasets: [
          {
            label: 'Application Status:',
            data: Object.values(statusCounts),
            backgroundColor: [
              '#E0E0E0', // Under review
              '#FF6F6F', // Denied 
              '#A0C4FF', // Interview
              '#B9FBC0', // Accepted
              '#D3D3D3', // Other
            ],
          },
        ],
      });

      const submissionCounts = applications.reduce((acc, application) => { //count
        const submitted = application.submitted ? 'Submitted' : 'Not Submitted';
        acc[submitted] = (acc[submitted] || 0) + 1;
        return acc;
      }, {});

      setSubmissionData({
        labels: Object.keys(submissionCounts),
        datasets: [
          {
            label: 'Submission:',
            data: Object.values(submissionCounts),
            backgroundColor: [
              '#27d5db', // Submitted
              '#e6ab22', // Not Submitted
            ],
          },
        ],
      });
    }
  }, [applications]);

  return (
    <div>
      <h2>Stats</h2>

      <div>
        <h3>Application Status:</h3>
        {statusData.labels && statusData.labels.length > 0 ? (
          <Pie data={statusData} />
        ) : (
          <p>No applications found.</p>
        )}
      </div>

      <div>
        <h3>Submission:</h3>
        {submissionData.labels && submissionData.labels.length > 0 ? (
          <Pie data={submissionData} />
        ) : (
          <p>No applications found.</p>
        )}
      </div>
    </div>
  );
};

export default Stats;
