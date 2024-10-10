import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

function Start() {

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          </Typography>
          <Button color="inherit" onClick={() => navigate('/login')}>Login</Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 'calc(100vh - 86px)'
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#1976d2',
            color: 'white',
            width: 200,
            height: 200,
            borderRadius: 200,
            fontSize: 25,
            cursor: 'pointer'
          }}
          onClick={() => navigate('/home')}
          >
          Start
        </Box>
      </Box>
    </Box>
  )
}

export default Start
