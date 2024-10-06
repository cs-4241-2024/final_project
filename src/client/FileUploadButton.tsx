import React, { useState } from 'react';
import { Button } from "@mui/material";
import "./FileUploadButton.css";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import parseXLSX from '../server/parser/parseXLSX';
import groupRow from '../server/parser/groupRow';
import * as XLSX from 'xlsx';
import { WorkBook } from 'xlsx';

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
    const [parsedData, setParsedData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            // Check if the file is an Excel file
            if (!file.name.endsWith('.xls') && !file.name.endsWith('.xlsx')) {
                console.error('Please upload a valid Excel file.');
                return;
            }
    
            setFileName(file.name);
            console.log('Selected file:', file);
            
            try {
                setIsLoading(true); // Set loading state
                console.log("Reading File");
                const data = await readFile(file);
                console.log("File Read: ", data);
                if (data) {
                    const workbook: WorkBook = XLSX.read(data, { type: 'array' });
                    const parsedData = parseXLSX(workbook);
                    
                    if (parsedData) {
                        const groupedRow = groupRow(parsedData);
                        console.log(groupedRow);
                        setParsedData(groupedRow);
                    }
                }
            } catch (error) {
                console.error('Error handling file change:', error);
            } finally {
                setIsLoading(false); // Reset loading state
            }
        }
    };
    

    const readFile = (file: File): Promise<ArrayBuffer | null> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            
            reader.onload = (event) => {
                resolve(event.target?.result as ArrayBuffer || null); 
            };
    
            reader.onerror = () => {
                reject(new Error("File could not be read")); 
            };
    
            reader.readAsArrayBuffer(file); 
        });
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
