import React from 'react';
import * as XLSX from 'xlsx';

const BackupButton = ({ data }) => {
    const handleExport = () => {
      // Get the current date
      const date = new Date();
      
      // Format the date (e.g., YYYY-MM-DD)
      const formattedDate = date.toISOString().split('T')[0]; // e.g., 2024-09-29
      
      // Create the worksheet and workbook
      const ws = XLSX.utils.json_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Inventory");
      
      // Use the formatted date in the filename
      const fileName = `inventory_backup_${formattedDate}.xlsx`;
      XLSX.writeFile(wb, fileName);
    };

    return (
      <button
          onClick={handleExport}
      >
          Download Backup
      </button>
    );
    };

export default BackupButton;
