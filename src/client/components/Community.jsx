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
              <td>{app.companyName}</td>
              <td>{app.jobTitle}</td>
              <td>{new Date(app.dueDate).toLocaleDateString()}</td>
              <td>{app.submitted ? 'Yes' : 'No'}</td>
              <td>{app.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Community;
