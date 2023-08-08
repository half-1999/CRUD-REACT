import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
  });

  const [status, setStatus] = useState(false);

  function onTextFieldChange(e) {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/students', student);
      setStatus(true);
    } catch (error) {
      console.error(error);
    }
  }

  if (status) {
    return <AddStudent />;
  }

  return (
    <div className="addstudent">
      <h2 className="bg-success p-2">Add Student</h2>
      <input
        id="name"
        name="name"
        placeholder="Enter New Student Name"
        className="w-100"
        onChange={e => onTextFieldChange(e)}
      />
      <input
        id="email"
        name="email"
        placeholder="Enter New Student Email"
        className="w-100"
        onChange={e => onTextFieldChange(e)}
      />
      <button
        type="submit"
        className="w-100 addbtn"
        onClick={e => onFormSubmit(e)}
      >
        Add New Student
      </button>
    </div>
  );
};

export default AddStudent;
