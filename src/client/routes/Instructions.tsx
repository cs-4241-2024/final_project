import "../css/Instructions.css";
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import exportImage from '../assets/Academic_Progress.png';

function Instructions() {
    const navigate = useNavigate();

    return (
        <div className="main">
            <IconButton
                className="back-button"
                aria-label="Back to Home"
                onClick={() => {
                    console.log("Back button clicked");
                    navigate('/Home');
                }}
            >
                <ArrowBackIcon />
            </IconButton>
            <div className="about-container">
                <h1>Instructions</h1>
                <div className="instructions">
                    <ul>
                        <li>
                            <strong>Step 1:</strong> Navigate to <em>Workday</em>.
                        </li>
                        <li>
                            <strong>Step 2:</strong> Click on the <em>Academics</em> section.
                        </li>
                        <li>
                            <strong>Step 3:</strong> Go to <em>View My Academic Progress</em>.
                        </li>
                        <li>
                            <strong>Step 4:</strong> On the desired major, click on <em>Export to Excel</em>
                            (located at the top right and looks like a building with an "X").
                            <br />
                            <img src={exportImage} alt="Export to Excel Icon" style={{ marginTop: '10px', width: '80%', height: 'auto' }} />
                        </li>
                        <li>
                            <strong>Step 5:</strong> Try opening the file and saving it if it doesn't work the first time.
                        </li>
                        <li>
                            <strong>Step 6:</strong> Upload the file to the editor page.
                        </li>
                        <li>
                            <em>If the upload doesn't work the first time, open the file, disable protected mode, and save.</em>
                        </li>
                        <li>
                            <strong>Done!</strong> Your process is complete.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Instructions;
