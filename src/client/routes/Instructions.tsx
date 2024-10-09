import "../css/Instructions.css";
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
                            <strong>Step 4:</strong> On the desired major, click on <em>Export to Excel</em> (located at the top right and looks like a building with an "X").
                        </li>
                        <li>
                            <strong>Step 5:</strong> Open the Excel file and unmerge the first row (merging affects parsing).
                        </li>
                        <li>
                            <strong>Step 6:</strong> Try opening the file and saving it if it doesn't work the first time.
                        </li>
                        <li>
                            <strong>Step 7:</strong> Upload the file to the editor page.
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
