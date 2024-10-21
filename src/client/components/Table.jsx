import React, { useState } from 'react';

const Table = ({ applications, handleDeleteApplication, handleUpdateApplication }) => {

  const [editableRowId, setEditableRowId] = useState(null);
  const [rowData, setRowData] = useState({});

 
  const handleEditClick = (app) => {
    setEditableRowId(app._id); 
    setRowData({
      [app._id]: {
        companyName: app.companyName,
        jobTitle: app.jobTitle,
        dueDate: app.dueDate.substring(0, 10), //format
        submitted: app.submitted,
        status: app.status,
      }
    });
  };

  const handleSaveClick = async (appId) => {
    await handleUpdateApplication({ ...rowData[appId], id: appId });
    setEditableRowId(null); 
  };

  const handleChange = (e, appId) => {
    const { name, value, type, checked } = e.target;
    setRowData({
      ...rowData,
      [appId]: {
        ...rowData[appId],
        [name]: type === 'checkbox' ? checked : value,// checkbox
      }
    });
  };

  const handleDeleteClick = async (appId) => {
    try {
      const response = await fetch(`/applications/${appId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        handleDeleteApplication(appId);
      } else {
        console.error('Failed to delete the application.');
      }
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Denied':
        return '#f44336'; // Red 
      case 'Accepted':
        return '#4CAF50'; // Green 
      case 'Under Review':
        return '#FFC107'; // Yellow 
      case 'Interview Stage':
        return '#2196F3'; // Blue 
      default:
        return '#fff'; // Default white
    }
  };
  
  

  return (
    <div id="table-div">
      <h2>Job Applications</h2>
      <table id="applicationTable">
        <thead bgcolor>
          <tr>
            <th>Company Name</th>
            <th>Job Title</th>
            <th>Due Date</th>
            <th>Submitted</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app._id}>
              <td>
                <input
                  type="text"
                  name="companyName"
                  value={editableRowId === app._id ? rowData[app._id].companyName : app.companyName}
                  onChange={(e) => handleChange(e, app._id)}
                  disabled={editableRowId !== app._id}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="jobTitle"
                  value={editableRowId === app._id ? rowData[app._id].jobTitle : app.jobTitle}
                  onChange={(e) => handleChange(e, app._id)}
                  disabled={editableRowId !== app._id}
                />
              </td>
              <td>
                <input
                  type="date"
                  name="dueDate"
                  value={editableRowId === app._id ? rowData[app._id].dueDate : app.dueDate.substring(0, 10)}
                  onChange={(e) => handleChange(e, app._id)}
                  disabled={editableRowId !== app._id}
                />
              </td>
              <td>
                <input
                  type="checkbox"
                  name="submitted"
                  checked={editableRowId === app._id ? rowData[app._id].submitted : app.submitted}
                  onChange={(e) => handleChange(e, app._id)}
                  disabled={editableRowId !== app._id}
                />
              </td>
              <td>
                <select
                  name="status"
                  value={editableRowId === app._id ? rowData[app._id].status : app.status}
                  onChange={(e) => handleChange(e, app._id)}
                  disabled={editableRowId !== app._id}
                  style={{
                    backgroundColor: getStatusColor(
                      editableRowId === app._id ? rowData[app._id].status : app.status
                    ),
                    color: '#fff', 
                  }}
                >
                  <option value="Denied">Denied</option>
                  <option value="Accepted">Accepted</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Interview Stage">Interview Stage</option>
                </select>
              </td>
              <td>
                {editableRowId === app._id ? (
                  <button onClick={() => handleSaveClick(app._id)} className="pure-button">
                    Save
                  </button>
                ) : (
                  <button onClick={() => handleEditClick(app)} className="pure-button">
                    Edit
                  </button>
                )}
                <button onClick={() => handleDeleteClick(app._id)} className="pure-button">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
