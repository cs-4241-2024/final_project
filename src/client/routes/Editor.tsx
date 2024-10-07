import "../css/Editor.css";
import { Button } from "@mui/material";
import { useNavigate, useLoaderData } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme } from '@mui/material/styles';
import ClassTable from '../components/ClassTable';
import FileUploadButton from '../components/FileUploadButton';
import SimpleTable from "../components/SimpleTable";
import ClassComboBox from "../components/ClassComboBox";
// index.js
import React, { useState, useEffect } from "react";
import { set } from "mongoose";

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

interface InitialData {
  humanityData: string[];
  physicalEducationData: string[];
  socialScienceData: string[];
  iqpData: string[];
  mathematicsData: string[];
  freeElectivesData: string[];
  computerScienceData: string[];
  basicScienceData: string[];
}


const Editor: React.FC = () => {
  const navigate = useNavigate();

  const initialData = useLoaderData() as InitialData;
  const [clearData, setClearData] = useState(false);
  const [uploadedData, setUploadedData] = useState<any>(null);

  const [humanityData, setHumanityData] = useState<string[]>(initialData?.humanityData || []);
  const [physicalEducationData, setPhysicalEducationData] = useState<string[]>(initialData?.physicalEducationData || []);
  const [socialScienceData, setSocialScienceData] = useState<string[]>(initialData?.socialScienceData || []);
  const [iqpData, setIqpData] = useState<string[]>(initialData?.iqpData || []);
  const [mathematicsData, setMathematicsData] = useState<string[]>(initialData?.mathematicsData || []);
  const [freeElectivesData, setFreeElectivesData] = useState<string[]>(initialData?.freeElectivesData || []);
  const [computerScienceData, setComputerScienceData] = useState<string[]>(initialData?.computerScienceData || []);
  const [basicScienceData, setBasicScienceData] = useState<string[]>(initialData?.basicScienceData || []);


  const handleClearData = () => {
    setClearData(true);
    setTimeout(() => { setClearData(false); }, 0);
    console.log("All components have been reset");
  };

  const handleSaveData = async () => {
    const allData = {
        humanityData,
        physicalEducationData,
        socialScienceData,
        iqpData,
        mathematicsData,
        freeElectivesData,
        computerScienceData,
        basicScienceData
    };

    try {
        const response = await fetch('/saveData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allData),
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

    console.log("Data saved");
};


  useEffect(() => {
    if (uploadedData) {
      console.log('Uploaded data changed:', uploadedData);
      uploadedData.forEach((section: any) => {
        const data: string[] = [];
        const requirement = section.requirement.toLowerCase().replace(/\s+/g, '');
        section.rows.forEach((row: any) => {
          const registrationsUsed = row["Registrations Used"];
          data.push(registrationsUsed);
          console.log('Registrations used:', registrationsUsed);
        })
        if (requirement.includes("Major Qualifying Project")) {
          setComputerScienceData(prevData => [...prevData, ...data]);
        } else if (requirement.includes("Interactive Qualifying Project")) {
          setIqpData(data);
        } else if (requirement.includes("Humanities and Arts Requirement")) {
          setHumanityData(data);
        } else if (requirement.includes("Social Science Requirement")) {
          setSocialScienceData(data);
        } else if (requirement.includes("Physical Education Requirement")) {
          setPhysicalEducationData(data);
        } else if (requirement.includes("Probability and Statistics Requirement")) {
          setMathematicsData(prevData => [...prevData, ...data]);
        } else if (requirement.includes("Mathematics Requirement")) {
          setMathematicsData(prevData => [...prevData, ...data]);
        } else if (requirement.includes("Basic Science Discipline")) {
          setBasicScienceData(prevData => [...prevData, ...data]);
        } else if (requirement.includes("Basic and/or Engineering Science")) {
          setBasicScienceData(prevData => [...prevData, ...data]);
        } else if (requirement.includes("Core Requirement")) {
          setComputerScienceData(prevData => [...prevData, ...data]);
        } else if (requirement.includes("Systems Requirement")) {
          setComputerScienceData(prevData => [...prevData, ...data]);
        } else if (requirement.includes("Theory and Languages Requirement")) {
          setComputerScienceData(prevData => [...prevData, ...data]);
        } else if (requirement.includes("Design Requirement")) {
          setComputerScienceData(prevData => [...prevData, ...data]);
        } else if (requirement.includes("Social Implications")) {
          setComputerScienceData(prevData => [...prevData, ...data]);
        } else if (requirement.includes("Free Elective")) {
          setFreeElectivesData(data);
        } else {
        }

      }, [uploadedData]);
    }
  });




  return (
    <div className="mainEdit">
      <div className="editor-container">
        <IconButton
          className="back-button"
          aria-label="back to home"
          onClick={() => {
            console.log("back button clicked");
            navigate('/home');
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
          <FileUploadButton setUploadedData={setUploadedData}/>
        </div>
      </div>

      <div className="AutoComplete">
        <ClassComboBox />
      </div>

      <div className="tracking-sheet-container">
        <div className="column-1">
          <SimpleTable title="Humanities (6)" numInputs={6} clear={clearData} data={humanityData}/>
          <SimpleTable title="Physical Education (4)" numInputs={4} clear={clearData} data={physicalEducationData}/>
          <SimpleTable title="Social Science (2)" numInputs={2} clear={clearData} data={socialScienceData}/>
          <SimpleTable title="IQP (3)" numInputs={3} clear={clearData} data={iqpData}/>
          <SimpleTable title="Mathematics (7)" numInputs={7} clear={clearData} data={mathematicsData}/>
        </div>
        <div className="column-2">
          <SimpleTable title="Free Electives (3)" numInputs={3} clear={clearData} data={freeElectivesData}/>
          <SimpleTable title="Computer Science (18)" numInputs={18} clear={clearData} data={computerScienceData}/>

          <SimpleTable title="Basic Science (5)" numInputs={5} clear={clearData} data={basicScienceData}/>
        </div>
      </div>
      
      <Button
            variant="contained"
            type="submit"
            className="submit-button"
            sx={{ backgroundColor: 'purple', color: 'white' }}
            onClick={handleSaveData}
          >
            Save
          </Button>

    </div >

  );
};

export default Editor;