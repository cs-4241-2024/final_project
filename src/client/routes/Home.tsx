import "../css/Home.css";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
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
                      navigate('/login');
                  }}
              >
                  <ExitToAppIcon />
              </IconButton>
              <div className="navigation">
                  <Button variant="contained" type="submit" className="navigation-button" sx={{ backgroundColor: 'purple', color: 'white' }} onClick={() => {
                      console.log("Editor clicked");
                      navigate('/editor');
                  }}>
                      Create your own personal WPI Tracking Sheet here
                  </Button>
                  <Button variant="contained" type="submit" className="navigation-button" sx={{ backgroundColor: 'purple', color: 'white' }} onClick={() => {
                      console.log("About Page clicked");
                      navigate('/about');
                  }}>
                      About Page
                  </Button>

              </div>
          </div>
      );
}

export default Home;