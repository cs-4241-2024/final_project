import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import allCourses from '../data/allCourses';

interface Course {
  label: string;
  section: string;
  credits: string;
}

interface Section {
  label: string;
}

const allSections = [
  {
    label:"Humanities"
  },
  {
    label:"Physical Education"
  },
  {
    label:"Social Science"
  },
  {
    label:"IQP"
  },
  {
    label:"Mathematics"
  },
  {
    label:"Free Electives"
  },
  {
    label:"Computer Science"
  },
  {
    label:"Basic Science"
  }

]

interface ClassComboBoxProps {
  humanities: React.Dispatch<React.SetStateAction<string[]>>;
  PE: React.Dispatch<React.SetStateAction<string[]>>;
  SS: React.Dispatch<React.SetStateAction<string[]>>;
  IQP: React.Dispatch<React.SetStateAction<string[]>>;
  Math: React.Dispatch<React.SetStateAction<string[]>>;
  FE: React.Dispatch<React.SetStateAction<string[]>>;
  CS: React.Dispatch<React.SetStateAction<string[]>>;
  BS: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function ClassComboBox({ humanities, PE, SS, IQP, Math, FE, CS, BS }: ClassComboBoxProps) {
  const [selectedClass, setSelectedClass] = useState<Course | null>(null);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);

  const handleClassChange = (event: React.SyntheticEvent, newValue: Course | null) => {
    setSelectedClass(newValue);
  };

  const handleSectionChange = (event: React.SyntheticEvent, newValue: Section | null) => {
    setSelectedSection(newValue);
  }

  const handleAddClass = () => {
    if (selectedClass && selectedSection) {
      console.log("Add Class:", selectedClass.label, " Selected Section: ", selectedSection.label);
      let data = selectedClass.label
      switch(selectedSection.label) {
        case "Humanities":
          humanities(prevData => [...prevData, ...(Array.isArray(data) ? data : [data])]);
          break;
        case "Physical Education":
          PE(prevData => [...prevData, ...(Array.isArray(data) ? data : [data])]);
          break;
        case "Social Science":
          SS(prevData => [...prevData, ...(Array.isArray(data) ? data : [data])]);
          break;
        case "IQP":
          IQP(prevData => [...prevData, ...(Array.isArray(data) ? data : [data])]);
          break;
        case "Mathematics":
          Math(prevData => [...prevData, ...(Array.isArray(data) ? data : [data])]);
          break;
        case "Free Electives":
          FE(prevData => [...prevData, ...(Array.isArray(data) ? data : [data])]);
          break;
        case "Computer Science":
          CS(prevData => [...prevData, ...(Array.isArray(data) ? data : [data])]);
          break;
        case "Basic Science":
          BS(prevData => [...prevData, ...(Array.isArray(data) ? data : [data])]);
          break;
      }

    } else {
      console.log("No class selected");
    }
  };

  return (
    <>
      <Autocomplete
        disablePortal
        options={allCourses}
        getOptionLabel={(option: Course) => option.label}
        sx={{ width: 300 }}
        onChange={handleClassChange} 
        renderInput={(params) => <TextField {...params} label="Classes" />}
      />
      <Autocomplete
        disablePortal
        options={allSections}
        getOptionLabel={(option: Section) => option.label} 
        sx={{ width: 300 }}
        onChange={handleSectionChange}
        renderInput={(params) => <TextField {...params} label="Sections" />}
      />
      <button onClick={handleAddClass}>Submit</button>
    </>
  );
}
