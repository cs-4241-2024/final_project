import React, { useEffect, useState } from 'react';

const Community = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    loadCommunityApplications();
  }, []);

  const loadCommunityApplications = async () => {
    try {
      const response = await fetch('/applications/all');
      if (response.ok) {
        const data = await response.json();
        setApplications(data);
      } else {
        console.error('Error loading community applications');
      }
    } catch (error) {
      console.error('Error loading community applications:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Denied':
        return '#f44336'; // Red for Denied
      case 'Accepted':
        return '#4CAF50'; // Green for Accepted
      case 'Under Review':
        return '#FFC107'; // Yellow for Under Review
      case 'Interview Stage':
        return '#2196F3'; // Blue for Interview Stage
      default:
        return '#fff'; // Default white
    }
  };

  return (
    <div className="community-applications">
      <h2>Community Applications</h2>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Job Title</th>
            <th>Due Date</th>
            <th>Submitted</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
        {applications.map((app) => (
          <tr key={app._id}>
            <td style={{ padding: '12px' }}>{app.companyName}</td>
            <td style={{ padding: '12px' }}>{app.jobTitle}</td>
            <td style={{ padding: '12px' }}>{new Date(app.dueDate).toLocaleDateString()}</td>
            <td style={{ padding: '12px' }}>{app.submitted ? 'Yes' : 'No'}</td>
            <td style={{ padding: '12px' }}>
              {/* Small box around the status value */}
              <span
                style={{
                  padding: '5px 10px',
                  backgroundColor: getStatusColor(app.status),  // Dynamic color
                  color: '#fff',
                  borderRadius: '5px',  // Smooth corners
                  display: 'inline-block',
                }}
              >
                {app.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default Community;
