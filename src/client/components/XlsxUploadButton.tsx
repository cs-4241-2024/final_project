import React from 'react';
import Button from '@mui/material/Button';

const XlsxUploadButton: React.FC = () => {
    // Define the onClick function within the button components
    const handleClick = () => {
        //Run XLSX parsing
    };

    return (
        <Button variant="contained" color="primary" onClick={handleClick}>
            Upload Excel File
        </Button>
    );
};

export default XlsxUploadButton;
