import React, { useState, useEffect } from 'react'; 
import Login from './components/Login';
import JobApplicationForm from './components/Form';
import JobApplicationTable from './components/Table';
import Modal from './components/Modal'; 
import Tabs from './components/tabs'; 
import Community from './components/Community'; 
import Stats from './components/Stats';
import './index.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
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
            <JobApplicationTable 
              applications={applications} 
              handleDeleteApplication={handleDeleteApplication} 
              handleUpdateApplication={handleUpdateApplication} 
            />
            <button 
              onClick={() => setShowModal(true)} 
              className="pure-button pure-button-primary"
            >
              Add New Application
            </button>
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

          {/* logout */}
          <button onClick={handleLogout} className="pure-button pure-button-primary">
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
