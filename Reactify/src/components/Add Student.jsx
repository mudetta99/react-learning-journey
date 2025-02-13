import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import StudentTable from './StudentTable';


export default function AddStudent() {
  
  const [students, setStudents] = useState([]);  // Store student's info in list
  const [student, setStudent] = useState({
    name: '',
    age: '',
    graduated: false
  });  // Store the student's information from the inputs

  const handleChange = (e) => {

    const {name, value, type, checked} = e.target;
    
    setStudent({
      ...student,
      [name]: type === 'checkbox' ? checked : value,
      
  });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setStudents([...students, student]);
    setStudent({name: '', age: '', graduated: false});

  }

  const handleDelete = (index) => {
    setStudents(students.filter( (_, i) => i !== index ));
  };



  return (
    
    <Container className="mt-4">
    <h2>Add Student</h2>
    <form className='p-4 border rounded shadow bg-dark text-light' onSubmit={handleSubmit} >

      <div className="mb-3">
        <label htmlFor="studentName">Student Name</label>
        <input
          type="text"
          id="studentName"
          placeholder="Enter student name"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="studentAge">Student Age</label>
        <input
          type="number"
          id="studentAge"
          placeholder="Enter student age"
          name="age"
          value={student.age}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <input
          type="checkbox"
          id="studentGraduated"
          name="graduated"
          checked={student.graduated}
          onChange={handleChange}
        />
        <label htmlFor="studentGraduated"> Graduated</label>
      </div>


      <button className='btn btn-outline-danger' type="submit">Submit</button>
    </form>
    <StudentTable students={students} handleDelete={handleDelete} />

  </Container>

  )
}
