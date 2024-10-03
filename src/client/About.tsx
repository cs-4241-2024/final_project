import "./Home.css";
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function About() {
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
        <div className="about-container">
          <h1>About</h1>
          <p>
            Add your courses here. No longer will you have to spend an eternity scrolling through Workday or the Course Catalog when adding up your course credit. Easily search the up or import them here. All credits are calculated and allocated based on the sheet(s) that you are working with.
          </p>
        </div>
      </div>
    );
  }
 

export default About;