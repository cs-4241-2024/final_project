import "../css/Editor.css";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme } from '@mui/material/styles';
import ClassTable from '../components/ClassTable';
import FileUploadButton from '../components/FileUploadButton';
import SimpleTable from "../components/SimpleTable";
import ClassComboBox from "../components/ClassComboBox";
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

const Editor: React.FC = () => {
  const navigate = useNavigate();
  const [clearData, setClearData] = useState(false);

  const handleClearData = () => {
    setClearData(true);
    setTimeout(() => { setClearData(false); }, 0);
    console.log("All components have been reset");
  };
  return (
    <div className="mainEdit">
      <div className="editor-container">
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
        <div className="editor-header">
          <Button
            variant="contained"
            type="submit"
            className="editor-button"
            sx={{ backgroundColor: 'purple', color: 'white' }}
            onClick={handleClearData}
          >
            Clear current data
          </Button>
          <FileUploadButton />
        </div>
      </div>

      <div className="AutoComplete">
        <ClassComboBox />
      </div>

      <div className="tracking-sheet-container">
        <div className="column-1">
          <SimpleTable title="Humanity Depth (4)" numInputs={4} clear={clearData}/>
          <SimpleTable title="Humanity Breadth (2)" numInputs={2} clear={clearData}/>
          <SimpleTable title="Physical Education (4)" numInputs={4} clear={clearData}/>
          <SimpleTable title="Social Science (2)" numInputs={2} clear={clearData}/>
          <SimpleTable title="IQP (3)" numInputs={3} clear={clearData}/>
          <SimpleTable title="Mathematics (7)" numInputs={7} clear={clearData}/>
        </div>
        <div className="column-2">
          <SimpleTable title="Free Electives (3)" numInputs={3} clear={clearData}/>
          <SimpleTable title="Computer Science (18)" numInputs={18} clear={clearData}/>

          <SimpleTable title="Basic Science (5)" numInputs={5} clear={clearData}/>
        </div>
      </div>

    </div >

  );
};

export default Editor;