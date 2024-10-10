import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import background from '../assets/images/background/background.jpg';

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
          height: '100vh',
          backgroundImage: `url(${background})`, // Set background image
          backgroundSize: 'cover',  // Ensure the image covers the entire area
          backgroundPosition: 'center',  // Center the background image
          backgroundRepeat: 'no-repeat',  // Avoid repeating the image
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(25, 118, 210, 0.7)', // Translucent blue background
            color: 'white',
            width: 200,
            height: 200,
            borderRadius: 200,
            fontSize: 25,
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth transition for hover effect
            '&:hover': {
              backgroundColor: 'rgba(25, 118, 210, 1)', // Opaque blue on hover
              transform: 'scale(1.1)', // Slightly enlarge on hover
            },
          }}
          onClick={() => navigate('/home')}
        >
          Start
        </Box>
      </Box>
    </Box>
  )
}

export default Start;
