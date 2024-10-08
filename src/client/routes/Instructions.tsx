import "../css/Home.css";
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Instructions() {
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
                <h1>Instructions</h1>
                <div className="instructions">
                    <ul>
                        <li>First navigate to workday</li>
                        <li>Click on the academics</li>
                        <li>Navigate to View My Academic Progress</li>
                        <li>On the major you want click on the export to excel</li>
                        <li>*It is located on the top right and looks like a building with an X in it</li>
                        <li>Once exported open the excel file and unmerge the first row - this screws with parsing</li>
                        <li>Upload the file to the editor page</li>
                        <li>And you are done!</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Instructions;