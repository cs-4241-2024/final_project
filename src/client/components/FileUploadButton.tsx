import React, { useState } from 'react';
import { Button } from "@mui/material";
import "../css/FileUploadButton.css";
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

interface FileUploadButtonProps {
    setUploadedData: (data: any) => void; 
  }

  const FileUploadButton: React.FC<FileUploadButtonProps> = ({ setUploadedData }) => {
    const [fileName, setFileName] = useState<string>('');

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            if (!file.name.endsWith('.xls') && !file.name.endsWith('.xlsx')) {
                console.error('Please upload a valid Excel file.');
                return;
            }

            setFileName(file.name);
            console.log('Selected file:', file);

            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('/parseXlsx', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    console.log('File uploaded successfully:', data);
                    setUploadedData(data);
                } else {
                    console.error('File upload failed:', response.statusText);
                }
            } catch (error) {
                console.error('Error during file upload:', error);
            }
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
