import React from 'react';
import Button from '@mui/material/Button';

const MyButton: React.FC = () => {
    // Define the onClick function within the button component
    const handleClick = () => {
        //Run XLSX parsing
    };

    return (
        <Button variant="contained" color="primary" onClick={handleClick}>
            Upload Excel File
        </Button>
    );
};

export default MyButton;
