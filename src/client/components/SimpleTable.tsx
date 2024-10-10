import React, { useState, useEffect } from 'react';
import '../css/SimpleTable.css';

interface SimpleTableProps {
  title: string;
  numInputs: number;
  clear: boolean;
  data: string[];
}

const SimpleTable: React.FC<SimpleTableProps> = ({ title, numInputs, clear, data }) => {
  const [inputValues, setInputValues] = useState<string[]>(Array(numInputs).fill(''));

  useEffect(() => {
    if (clear) {
      setInputValues(Array(numInputs).fill(''));
    } else {
      const newValues = Array(numInputs).fill('');
      data.forEach((value, index) => {
        if (index < numInputs && typeof value === 'string') {
          newValues[index] = value;
        }
      });
      setInputValues(newValues);
    }
  }, [clear, numInputs, data]);
  

  const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValues = [...inputValues];
    newValues[index] = event.target.value;
    setInputValues(newValues);
  };

  return (
    <div className="simple-table-container">
      <h3 className="simple-table-title">{title}</h3>
      <div className="input-container">
        {inputValues.map((value, index) => (
          <div key={index} className="input-wrapper">
            <input
              type="text"
              value={value}
              onChange={handleInputChange(index)}
              className="input-cell"
              placeholder={`Input Class`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleTable;
