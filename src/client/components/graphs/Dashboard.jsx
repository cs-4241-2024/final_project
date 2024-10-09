import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Paper, Box } from '@mui/material';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import TimerIcon from '@mui/icons-material/Timer';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ApplicationStatusChart from './StatusDistrubution';
import TimeSpentInStagesChart from './TimeSpentInStages';
import ApplicationOutcomeSummaryChart from './Outcome';
import './Dashboard.css'; // Custom CSS for transitions

const Dashboard = () => {

  const [selectedTab, setSelectedTab] = useState(0);
  const [applications, setApplications] = useState([]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const getApplication = async () => {
    try {
      const response = await fetch('/applications');
      const data = await response.json();
      setApplications(data);
    } catch (error) {
      console.error('Error fetching applications:', error);
    }
  };

  useEffect(() => {
    getApplication();
  }, []);

  const chartContainerStyle = {
    border: '1px solid #e0e0e0',
    borderRadius: '0 0 10px 10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '30px 20px',
    backgroundColor: '#fff',
    width: '700px',
    height: '450px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '20px', width: 'auto' }}>
      <Paper
        elevation={3}
        style={{
          width: '550px',
          borderRadius: '10px 10px 0 0',
          boxShadow: 'none',
          marginBottom: '-1px',
          marginLeft: '0px',
        }}
      >
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          aria-label="chart navigation tabs"
          sx={{
            borderBottom: '1px solid #e0e0e0',
            justifyContent: 'flex-start',
            '.MuiTabs-flexContainer': {
              justifyContent: 'flex-start',
            },
            minHeight: '48px',
          }}
        >
          <Tab
            label="Application Status"
            icon={<WorkOutlineIcon />}
            sx={{
              fontSize: '14px',
              fontWeight: 'bold',
              minHeight: '48px',
              textTransform: 'none',
              borderBottom: selectedTab === 0 ? '2px solid #1976d2' : 'none',
            }}
          />
          <Tab
            label="Time Spent in Stages"
            icon={<TimerIcon />}
            sx={{
              fontSize: '14px',
              fontWeight: 'bold',
              minHeight: '48px',
              textTransform: 'none',
              borderBottom: selectedTab === 1 ? '2px solid #1976d2' : 'none',
            }}
          />
          <Tab
            label="Application Outcome"
            icon={<AssessmentIcon />}
            sx={{
              fontSize: '14px',
              fontWeight: 'bold',
              minHeight: '48px',
              textTransform: 'none',
              borderBottom: selectedTab === 2 ? '2px solid #1976d2' : 'none',
            }}
          />
        </Tabs>
      </Paper>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
        <Box style={chartContainerStyle}>

          <SwitchTransition>
            <CSSTransition
              key={selectedTab}
              classNames="fade"
              timeout={300}
            >
              {/* Ensure that each chart is centered */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                {selectedTab === 0 && (
                  <ApplicationStatusChart applications={applications} style={{ width: '100%', height: '100%' }} />
                )}
                {selectedTab === 1 && (
                  <TimeSpentInStagesChart applications={applications} style={{ width: '100%', height: '100%' }} />
                )}
                {selectedTab === 2 && (
                  <ApplicationOutcomeSummaryChart applications={applications} style={{ width: '100%', height: '100%' }} />
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
