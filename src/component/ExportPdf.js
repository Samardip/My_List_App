import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable"
export const ExportPdf = ({ pdfData,TableHead }) => {
  const pdfDownload = () => {
      const doc=new jsPDF()
      doc.text("Table Data",20,10);
      
      doc.autoTable({
          TableHead:TableHead.map(data=>
        ({...data,dataKey:data.field})
        
          ),
          body:pdfData
      })
      doc.save("TableData.pdf");
  };
  return (
    <div>
      <button className="btn btn-danger mx-2" onClick={()=>pdfDownload()}>PDF</button>
    </div>
  );
};
