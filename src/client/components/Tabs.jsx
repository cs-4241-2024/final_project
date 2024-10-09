import React from 'react';
import '../index.css';


const Tabs = ({ activeTab, setActiveTab }) => {
    return (
      <ul className="tabs">
        <li 
          className={activeTab === 'myApplications' ? 'active' : ''} 
          onClick={() => setActiveTab('myApplications')}
        >
          My Applications
        </li>
        <li 
          className={activeTab === 'communityApplications' ? 'active' : ''} 
          onClick={() => setActiveTab('communityApplications')}
        >
          Community
        </li>
        <li 
          className={activeTab === 'stats' ? 'active' : ''} 
          onClick={() => setActiveTab('stats')}
        >
          Stats
        </li>
      </ul>
    );
  };
  
  export default Tabs;
