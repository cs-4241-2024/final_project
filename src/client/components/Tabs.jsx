import React from 'react';
import '../index.css';
import '../App.css';


const Tabs = ({ activeTab, setActiveTab }) => {
    return (
      <div className="tabs-container">
      <ul className="tabs">
      <img src="src\client\assets\studiousgompei.png" alt="logo" class="logo-img"/>
        <li 
          className={`tab-item ${activeTab === 'myApplications' ? 'active' : ''}`} 
          onClick={() => setActiveTab('myApplications')}
        >
          My Applications
        </li>
        <li 
          className={`tab-item ${activeTab === 'communityApplications' ? 'active' : ''}`} 
          onClick={() => setActiveTab('communityApplications')}
        >
          Community
        </li>
        <li 
          className={`tab-item ${activeTab === 'stats' ? 'active' : ''}`} 
          onClick={() => setActiveTab('stats')}
        >
          Stats
        </li>
      </ul>
      </div>
    );
  };
  
  export default Tabs;
