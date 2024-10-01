import "./Editor.css";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme } from '@mui/material/styles';
import TableComponent from './tableComponent';
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




function Editor() {
  const navigate = useNavigate();
  return (
    <div className="main">
        <IconButton
          className="back-button"
          aria-label="back to home"
          onClick={() => {
            console.log("back button clicked");
            navigate('/Home');
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <div className="editor-container">
                <Button
                    variant="contained"
                    type="submit"
                    className="editor-button"
                    sx={{ backgroundColor: 'purple', color: 'white' }}
                    onClick={() => {
                        console.log("Clear current data button clicked");
                    }}
                >
                    Clear current data
                </Button>

                <Button
                    variant="contained"
                    type="submit"
                    className="editor-button"
                    sx={{ backgroundColor: 'purple', color: 'white' }}
                    onClick={() => {
                        console.log("Import Workday Data button clicked");
                    }}
                >
                    Import Workday Data
                </Button>
        </div>
        <TableComponent name="myTable" rowNum={5} colNum={3} />
      </div>
  );
}

export default Editor;