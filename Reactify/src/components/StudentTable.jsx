import React from 'react'

export default function StudentTable({ students = [], handleDelete}) {
  return (

    <table className='table table-striped table-borderless table-dark rounded'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Graduated</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => {
            return (
              <tr key={index}>
              <td> {student.name} </td>
              <td> {student.age} </td>
              <td> {student.graduated ? 'Yes' : 'No'} </td>
              <td> <button className='btn btn-danger'onClick={()=> handleDelete(index)}>Remove</button>  </td>
            </tr>
            )
        })}




      </tbody>
    </table>


  );


}

