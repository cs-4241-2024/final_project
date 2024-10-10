const parseXLSX = require('./parseXLSX.js');
const groupRow = require('./groupRow.js');
import path from 'node:path';
import XLSX from 'xlsx';

const outputPath = path.join(__dirname, '../JSONS/groupedRows.json');
const workbookPath = path.join(__dirname, './Test.xlsx'); // Path for logging worksheet data


const workbook = XLSX.readFile(workbookPath);

let parsedJSON;

if (workbook !== null){
    parsedJSON = parseXLSX(workbook);
}

if (parsedJSON !== null){
    groupedRequirements = groupRow(JSON.parse(parsedJSON));
}

