import React from 'react'
import { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import {  useParams  } from "react-router-dom";
import  {Link} from 'react-router-dom'; // Import React Router components
import  Home  from './Home';

const AddStudent = () => {
    const {id} = useParams()
    // const history = useHistory()

    const [student, setStudent] = useState({
        name: "",
        email: ""
       });
       useEffect(() => {
        async function GetData() {
          try {
            const studentData = await axios.get(`http://localhost:8080/students/${id}`);
            setStudent(studentData.data);
          } catch (error) {
            console.log('Error:', error);
          }
        }
        GetData();
      }, [id]);

       function onTextFieldChange(e) {
        setStudent({
         ...student,
         [e.target.name]: e.target.value
        })
       }

       async function onFormSubmit(e) {
        e.preventDefault();
        try {
          await axios.put(`http://localhost:8080/students/${id}`, student)
            {
                <Home/>
            }
        } catch (error) {
          console.error(error);
        }
      }

  return (
    <>
    <h1>STUDENT DETAIL</h1>

    <div className="addstudent">
        <h2 className='bg-success p-2'>Edit Student</h2>

        <input type="number" className='w-100' value={student.id} disabled/>

        <input id='text' autoComplete="stuname" type="text" className='w-100' value={student.name} onChange={e => onTextFieldChange(e)} name='name'/>

        <input id='email' type="email" className='w-100' value={student.email} onChange={e => onTextFieldChange(e)} name='email'/>
        
        <button type="submit" className='w-100 addbtn' onClick={e => onFormSubmit(e)}>Update Student</button>

        <Link to={`/`}>
      <button type="submit" className='back'>Back To Home</button>
      </Link>
    </div>
    </>
  )
}

export default AddStudent