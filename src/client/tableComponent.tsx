import React, { useState } from 'react';

const TableComponent: React.FC<{ name: string; rowNum: number }> = ({ name, rowNum }) => {
  const [inputValue, setInputValue] = useState("");
  const [rows, setRows] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddRow = () => {
    if (inputValue.trim() !== "") {
      setRows([...rows, inputValue]);
      setInputValue("");
    }
  };

  const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(event.target.value);
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditValue(rows[index]);
  };

  const handleSave = (index: number) => {
    const updatedRows = [...rows];
    updatedRows[index] = editValue;
    setRows(updatedRows);
    setEditIndex(null);
  };

  const handleDelete = (index: number) => {
    const updatedRows = rows.filter((_, rowIndex) => rowIndex !== index);
    setRows(updatedRows);
  };

  return (
    <div className="table-component">
      <h2>{name}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddRow}>Add to Table</button>
      <table>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>Cell {rowIndex + 1}-1</td>
              <td>{row}</td>
              <td>
                {editIndex === rowIndex ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={handleEditChange}
                  />
                ) : (
                  row
                )}
              </td>
              <td>
                {editIndex === rowIndex ? (
                  <button onClick={() => handleSave(rowIndex)}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(rowIndex)}>Edit</button>
                )}
              </td>
              <td>
                <button onClick={() => handleDelete(rowIndex)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;