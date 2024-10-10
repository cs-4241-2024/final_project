import React from 'react';
import * as XLSX from 'xlsx';

const UploadButton = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const reader = new FileReader();
    reader.onload = async (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(firstSheet);
      
      await updateDatabase(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  const updateDatabase = async (data) => {
    try {
      // Fetch current items from the database
      const dbItems = await fetchCurrentDatabaseItems();

      // Create a Set of names from the uploaded Excel file
      const uploadedItemNames = new Set(data.map(item => item.name));

      // Update or add items in the database
      for (const item of data) {
        const dbItem = dbItems.find(db => db.name === item.name);

        // If item doesn't exist in database or is different, update it
        if (!dbItem || !compareItems(item, dbItem)) {
          console.log(`Updating/Adding item: ${item.name}`);
          await fetch('/inv/updateitem', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
          });
        }
      }

      // Delete items that are in the database but not in the uploaded Excel file
      for (const dbItem of dbItems) {
        if (!uploadedItemNames.has(dbItem.name)) {
          console.log(`Deleting item: ${dbItem.name}`);
          await fetch('/inv/deleteitem', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: dbItem.name }),
          });
        }
      }

      alert('Database updated successfully!');
    } catch (error) {
      console.error('Error updating database:', error);
      alert('Error updating database. Please check console for details.');
    }
  };

  const fetchCurrentDatabaseItems = async () => {
    const response = await fetch('/inv/getallitems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const items = await response.json();
    return items;
  };

  const compareItems = (item1, item2) => {
    return (
      item1.name === item2.name &&
      item1.quantity === item2.quantity &&
      item1.unit === item2.unit &&
      item1.location === item2.location &&
      item1.price === item2.price &&
      item1.lastupdated === item2.lastupdated &&
      item1.notes === item2.notes
    );
  };

  return (
    <button onClick={() => document.getElementById('file-input').click()}>
      Upload File
      <input
        id="file-input"
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
      />
    </button>
  );
};

export default UploadButton;
