import React, { useState, useEffect } from 'react';
import '../App.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import  {Link} from 'react-router-dom'; // Import React Router components

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function GetData() {
      try {
        const studentData = await axios.get('http://localhost:8080/students');
        setStudents(studentData.data);
      } catch (error) {
        console.log('Error:', error);
      }
    }
    GetData();
  }, []);


  const handleDelete = async id => {
    await axios.delete(`http://localhost:8080/students/${id}`);
    var newstudent = students.filter((item) => {
     // console.log(item);
     return item.id !== id;
    })
    setStudents(newstudent);
   }

  return (
    <>
      <h2 className='bg-success p-2 studlist'> Students List</h2>
      <Table striped bordered hover responsive className='studentlist'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {students.map((stu, i) => (
            <tr key={i}>
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td>{stu.email}</td>
                <td>
                <Link to={`/view/${stu.id}`}>
                    {/* Use Link to create a clickable link */}
                    <FontAwesomeIcon
                      icon={faEye}
                      title='View'
                      className='mr-2'
                />
                </Link>
                <Link to={`/edit/${stu.id}`}>
                    {/* Use Link to create a clickable link */}
                    <FontAwesomeIcon
                      icon={faEdit}
                      title='Edit'
                      className='mr-2'
                />
                </Link>
                <FontAwesomeIcon
                  icon={faTrash}
                  title='Delete'
                  className='m-4'
                  onClick={()=>handleDelete(stu.id)}
                />
              </td>
            </tr>

          ))}
        </tbody>
      </Table>
    </>
  );
};

export default StudentList;
