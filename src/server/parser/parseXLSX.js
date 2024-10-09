import * as XLSX from 'xlsx';

function parseXLSX(workbook) {

    try {

        if (!workbook.SheetNames.length) {
            console.error('No sheets found in the workbook.');
            return null;
        }
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];

        const rows = XLSX.utils.sheet_to_json(worksheet, {
            range: 1,
            blankrows: false,
            raw: false
        });

        if (rows.length > 0) {

            if (rows.length > 0) {
                return JSON.stringify(rows, null, 2);
            } else {
                console.error('No data found to write.');
                return null;
            }
        } else {
            console.error('No rows found. Please check the range or content of the Excel sheet.');
            return null;
        }

    } catch (error) {
        console.error('Error reading the Excel file:', error);
        return null;
    }
}

export default parseXLSX;
