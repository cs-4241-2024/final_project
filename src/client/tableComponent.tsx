import "./tableComponent.css";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { createTheme } from '@mui/material/styles';
import React, { useState } from "react";

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
    }),
  },
});

const TableComponent: React.FC<{ name: string; rowNum: number; colNum: number }> = ({ name, rowNum, colNum }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="table-component">
      <h2>{name}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <table>
        <tbody>
          {Array.from({ length: rowNum }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: colNum }).map((_, colIndex) => (
                <td key={colIndex}>Cell {rowIndex + 1}-{colIndex + 1}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;