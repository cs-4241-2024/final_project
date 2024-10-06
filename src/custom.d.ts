declare module '../server/parser/parseXLSX' {
    import { WorkBook } from 'xlsx';

    type ParsedData = Record<string, any>[] | null;

    function parseXLSX(workbook: WorkBook): ParsedData;

    export default parseXLSX;
}

declare module '../server/parser/groupRow' {
    
    type GroupedData = {
        requirement: string;
        rows: Record<string, any>[];
    }[];

    function groupRow(rows: Record<string, any>[]): GroupedData | null;

    export default groupRow;
}