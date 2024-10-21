import React, { useState, useEffect } from 'react'; 
import Login from './components/Login';
import JobApplicationForm from './components/Form';
import JobApplicationTable from './components/Table';
import Modal from './components/Modal'; 
import Tabs from './components/Tabs'; 
import Community from './components/Community'; 
import Stats from './components/Stats';
import './index.css';
import './App.css';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [applications, setApplications] = useState([]);
  const [showModal, setShowModal] = useState(false); 
  const [activeTab, setActiveTab] = useState('myApplications'); 

  useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const response = await fetch('/check-session');
      if (response.ok) {
        const data = await response.json();
        if (data.loggedIn) {
          setLoggedIn(true);
          setUsername(data.username);
          await loadApplications();
        }
      }
    } catch (error) {
      console.error('Error checking session:', error);
    }
  };

  const loadApplications = async () => {
    try {
      const response = await fetch('/applications');
      if (response.ok) {
        const data = await response.json();
        setApplications(data);
      }
    } catch (error) {
      console.error('Error loading applications:', error);
    }
  };

  const handleLogin = () => {
    window.location.href = '/auth/github'; 
  };

  const handleLogout = async () => {
    const response = await fetch('/logout');
    if (response.ok) {
      setLoggedIn(false);
    }
  };

  const exportToCSV = () => {
    if (!applications.length) {
        alert('No data to export!');
        return;
    }
    const header = ['Company Name', 'Job Title', 'Due Date', 'Submitted', 'Status', 'Actions'].join(',');

    const csv = applications.map((app) => 
        Object.values(app)
            .map(value => 
                `"${String(value).replace(/"/g, '""')}"`
            ).join(',')
    ).join('\n');

    const blob = new Blob([header + csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'job-applications.csv';
    a.click();

    window.URL.revokeObjectURL(url);
  };


  const handleAddApplication = async (application) => {
    const response = await fetch('/applications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(application),
    });

    if (response.ok) {
      loadApplications();
      setShowModal(false); 
    } else {
      alert('Error adding application.');
    }
  };

  const handleDeleteApplication = async (id) => {
    const response = await fetch(`/applications/${id}`, { method: 'DELETE' });

    if (response.ok) {
      loadApplications();
    } else {
      alert('Error deleting application.');
    }
  };

  const handleDeleteAllApplications = async () => {
    if (!window.confirm('Are you sure you want to delete all applications?')) {
      return;
    }
    if (!applications.length) {
      alert('No applications to delete!');
    }
    for (const app of applications) {
      await handleDeleteApplication(app._id);
    }
  }


  const handleUpdateApplication = async (updatedApplication) => {
    const response = await fetch(`/applications/${updatedApplication.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedApplication),
    });

    if (response.ok) {
      loadApplications();
    } else {
      alert('Error updating application.');
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'myApplications':
        return (
  <div>
    {/* New container to position the "Add New Application" button above the table */}
    <div className="add-new-application-container">
      <button 
        onClick={() => setShowModal(true)} 
        className="pure-button pure-button-primary"
      >
        Add New Application
      </button> 
      <button className="pure-button" 
        onClick={handleDeleteAllApplications} 
      >
        Delete All
      </button>
      <button className="pure-button" 
        onClick={exportToCSV} 
      >
        Export CSV
      </button>
           
    </div>
    
    
    {/* Render the Job Application Table */}
    <JobApplicationTable 
      applications={applications} 
      handleDeleteApplication={handleDeleteApplication} 
      handleUpdateApplication={handleUpdateApplication} 
    />
  </div>
);

      case 'communityApplications':
        return <Community />; 
      case 'stats':
        return <Stats applications={applications} />; 
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {!loggedIn ? (
        <Login handleLogin={handleLogin} />
      ) : (
        <div id="applicationSection">
          {/* tabs */}
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          <div id="tabContent">
            {renderTabContent()}
          </div>

          {/* pop up to add application */}
          {showModal && (
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              <JobApplicationForm handleAddApplication={handleAddApplication} />
            </Modal>
          )}
          <h2 className='log-user'>{username}</h2>
          {/* logout */}
          <button onClick={handleLogout} className="logout-button pure-button pure-button-primary">
            Logout
          </button>
        </div>
      )}

    </div>
  );
}

export default App;
