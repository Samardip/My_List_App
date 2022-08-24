import React from 'react'
import { CSVLink } from 'react-csv';

export const ExportCSV = ({ CSVdata}) => {
    const TableHead = [
        { label: "sno", key: "sno" },
        { label: "name", key: "name" },
        { label: "education", key: "education" },
        { label: "gender", key: "gender" },
        { label: "Description", key: "Description" },
      ];
    const csvReport={
        filename:"TableData.csv",
        headers:TableHead,
        data:CSVdata
    };
    return (
        <div>
            <CSVLink {...csvReport}>Export</CSVLink>
        </div>
    )
}
