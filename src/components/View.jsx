import React from 'react'
import { useState, useEffect } from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useParams } from "react-router-dom";
import  {Link} from 'react-router-dom'; // Import React Router components

const View = () => {

    const { id } = useParams();
    const [student, setStudents] = useState([]);

    useEffect(() => {
      async function GetData() {
        try {
          const studentData = await axios.get(`http://localhost:8080/students/${id}`);
          setStudents(studentData.data);
        } catch (error) {
          console.log('Error:', error);
        }
      }
      GetData();
    }, [id]);
  return (
    <>
    <h1>STUDENT DETAIL</h1>

    <Table striped bordered hover responsive className='studentlist'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <th>{student.id}</th>
                <th>{student.name}</th>
                <th>{student.email}</th>
            </tr>
        </tbody>
      </Table>
      <Link to={`/`}>
      <button type="submit" className='back'>Back To Home</button>
      </Link>
    </>
  )
}

export default View