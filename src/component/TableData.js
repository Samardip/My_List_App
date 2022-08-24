import React from 'react'

export const TableData = ({ addFormData,handleAddFormChange }) => {
    // console.log(contacts[contacts.length-1]);
    return (
        <div className="container form-check">
          Name
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={handleAddFormChange}
            placeholder="Enter name"
            value={addFormData.name}
            required
          />
          Education
          <input
            type="text"
            className="form-control"
            name="education"
            onChange={handleAddFormChange}
            placeholder="Enter education"
            value={addFormData.education}
            required
          />
          Gender
          <br />
          <input
            type="radio"
            className="mx-1 form-check-input"
            name="gender"
            onChange={handleAddFormChange}
            value="Male"
          />
          Male
          <br />
          <input
            type="radio"
            className="mx-1 form-check-input"
            name="gender"
            onChange={handleAddFormChange}
            value="Female"
            required
          />
          Female
          <br />
          Description
          <input
            type="text"
            className="form-control"
            name="desc"
            onChange={handleAddFormChange}
            placeholder="Enter Description"
            value={addFormData.desc}
            required
          />
          <br />
          <button className="btn btn-primary" type="submit">ADD</button>
        </div>
   
    )
}
