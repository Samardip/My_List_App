import React from "react";

export const EditableRow = ({ editFormData, handleEditFormChange }) => {
  console.log(editFormData);
  return (
    <div className="container form-check">
          Name
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleEditFormChange}
            value={editFormData.name}
            placeholder="Enter name"
            required
          />
          Education
          <input
            type="text"
            className="form-control"
            name="education"
            onChange={handleEditFormChange}
            value={editFormData.education}
            placeholder="Enter education"
            required
          />
          Gender
          <br />
          <input
            type="radio"
            className="mx-1 form-check-input"
            name="gender"
            onChange={handleEditFormChange}
            // value={editFormData.gender}
            value="Male"
            required
          />
           Male
         <br/>
          <input
            type="radio"
            className="mx-1 form-check-input"
            name="gender" 
            onChange={handleEditFormChange}
            // value={editFormData.gender}
            value="Female"
          />
           Female
          <br />
          Description
          <input
            type="text"
            className="form-control"
            name="desc"
            onChange={handleEditFormChange}
            value={editFormData.desc}
            placeholder="Enter Description"
            required
          />
          
          <br />
          <button className="btn btn-primary" type="submit" >Update List</button>
        </div>


  );
};







