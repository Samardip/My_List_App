import React, { useState, Fragment } from "react";
import "./App.css";
import data from "./mock-data.json";
import { ReadOnlyRow } from "./component/ReadOnlyRow";
import { EditableRow } from "./component/EditableRow";
import { TableData } from "./component/TableData";
import { ExportPdf } from "./component/ExportPdf";
import { ExportFile } from "./component/ExportFile";
import { ExportCSV } from "./component/ExportCSV";
function App() {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    sno: "",
    name: "",
    education: "",
    gender: "",
    desc: "",
  });
  const [editFormData, setEditFormData] = useState({
    sno: "",
    name: "",
    education: "",
    gender: "",
    desc: "",
  });
  const [editContactId, setEditContactId] = useState(null);
  const [updatePressed, setUpdatePressed] = useState(null);
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    //console.log(newFormData);
    setAddFormData(newFormData);
    //setAddFormData("");
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    //console.log(newFormData);
    setEditFormData(newFormData);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      sno: contacts[contacts.length - 1].sno + 1,
      name: addFormData.name,
      education: addFormData.education,
      gender: addFormData.gender,
      desc: addFormData.desc,
    };
    setContacts([...contacts, newContact]);
    const data = {
      sno: "",
      name: "",
      education: "",
      gender: "",
      desc: "",
    };
    setAddFormData(data);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
    const editContact = {
      sno: editFormData.sno,
      name: editFormData.name,
      education: editFormData.education,
      gender: editFormData.gender,
      desc: editFormData.desc,
    };
    const newContact = [...contacts];
    const index = contacts.findIndex(
      (contact) => contact.sno === editFormData.sno
    );
    newContact[index] = editContact;
    setContacts(newContact);
    setEditContactId(null);
    setUpdatePressed(null);
  };

  const editFormEvent = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.sno);
    const formValues = {
      sno: contact.sno,
      name: contact.name,
      education: contact.education,
      gender: contact.gender,
      desc: contact.desc,
    };
    setEditFormData(formValues);
    setUpdatePressed(contacts);
  };
  const handleDeleteClick = (event, contactsno) => {
    event.preventDefault();
    const newContact = [...contacts];
    const index = contacts.findIndex((c) => c.sno === contactsno);
    newContact.splice(index, 1);
    setContacts(
      newContact
        .map((e) => {
          return e;
        })
        .filter((e, i) => {
          return (e.sno = i + 1);
        })
    );
  };
  const TableHead = [
    { title: "sno", field: "sno" },
    { title: "name", field: "name" },
    { title: "education", field: "education" },
    { title: "gender", field: "gender" },
    { title: "Description", field: "Description" },
  ];
  const filename = "Table Data";
  const style = {
    float: "right",
    justifyContent: "space-between",
    /* display: flex; */
    margin: "15px",
    width: "133px",
  };
  const style1={
    "position": "absolute",
    /* margin-left: 48%; */
    "right": "151px",
    "top": "27px",
  }
  return (
    <>
      <div >
        <h5 style={style1}>Download Table</h5>
      </div>
      <div className="d-flex" style={style}>
        <div className="d-flex p-2">
          <ExportFile csvData={contacts} fileName={filename} />
          <ExportPdf TableHead={TableHead} pdfData={contacts} />
        </div>
      </div>

      <form
        onSubmit={
          updatePressed !== null ? handleEditFormSubmit : handleFormSubmit
        }
      >
        <table className="table">
          <thead>
            <tr>
              <th>Sno.</th>
              <th>Name</th>
              <th>Education</th>
              <th>gender</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((e) => (
              <ReadOnlyRow
                key={e.sno}
                contact={e}
                editFormEvent={editFormEvent}
                handleDeleteClick={handleDeleteClick}
              />
            ))}
            {/* {
            contacts.map((e)=>(
                
            ))
          } */}
          </tbody>
        </table>
        {updatePressed === null ? (
          <h2 className="mx-5">Add Details</h2>
        ) : (
          <h2 className="mx-5">Update Details</h2>
        )}
        {updatePressed !== null ? (
          <EditableRow
            editFormData={editFormData}
            handleEditFormChange={handleEditFormChange}
          />
        ) : (
          <TableData
            addFormData={addFormData}
            handleAddFormChange={handleAddFormChange}
          />
        )}
      </form>
    </>
  );
}

export default App;
