import React from 'react'

export const ReadOnlyRow = ({ contact,editFormEvent,handleDeleteClick }) => {
    return (
        
            <tr key={contact.sno}>
                <td>{contact.sno}</td>
                <td>{contact.name}</td>
                <td>{contact.education}</td>
                <td>{contact.gender}</td>
                <td>{contact.desc}</td>
                <td>
                    <button className="btn btn-warning" onClick={(event)=>editFormEvent(event,contact)}>Update</button>
                    
                </td>
                <td>
                <button className="btn btn-danger" onClick={(event)=>handleDeleteClick(event,contact.sno)}>Delete</button>
                </td>
              </tr>
    )
}
