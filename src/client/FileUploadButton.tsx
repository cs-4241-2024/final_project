import React, { useState } from 'react';
import { Button } from "@mui/material";
import "./FileUploadButton.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Define the theme
let theme = createTheme({
    palette: {
        primary: {
            main: '#554481', 
        },
    },
});

theme = createTheme(theme, {
    palette: {
        salmon: theme.palette.augmentColor({
            color: { main: '#554481' }, 
            name: 'purple',
        }),
    },
});

const FileUploadButton: React.FC = () => {
    const [fileName, setFileName] = useState<string>('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
            console.log('Selected file:', file);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <div>
                <input
                     type="file"
                     accept=".xlsx"
                     id="fileInput"
                     className="hidden-file-input"  
                     onChange={handleFileChange}
                     title="Choose an XLSX file"
                />
                <Button
                    variant="contained"
                    className="editor-button"
                    sx={{ backgroundColor: 'purple', color: 'white' }}
                    onClick={() => document.getElementById('fileInput')?.click()}
                >
                    Import Workday Data
                </Button>
                {/* {fileName && <p>Selected file: {fileName}</p>} */}
            </div>
        </ThemeProvider>
    );
};

export default FileUploadButton;
