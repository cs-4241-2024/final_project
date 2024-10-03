import "./Home.css";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme } from '@mui/material/styles';
// index.js

import { useState } from "react";

let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    salmon: theme.palette.augmentColor({
      color: {
        main: '#554481',
      },
      name: 'purple',
    }),
  },
});


function Home() {
  const navigate = useNavigate();
  return (
    <div className="main">
        <IconButton
          className="back-button"
          aria-label="back to home"
          onClick={() => {
            console.log("back button clicked");
            navigate('/Login');
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <div className="navigation">
        <Button variant="contained" type="submit" className="navigation-button" sx={{ backgroundColor: 'purple', color: 'white' }} onClick={() => {
    console.log("Login button clicked");
    navigate('/Editor');
  }}> 
  Create your own personal WPI Tracking Sheet here
  </Button>

        </div>
      </div>
  );
}

export default Home;