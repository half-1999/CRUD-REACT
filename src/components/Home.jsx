import React from 'react'
import '../App.css'
import AddStudent from './AddStudent';
import StudentList from './StudentList';

const Home = () => {
  return (
    <>
    <h1>CRUD APP</h1>
    <div className='part'>
    <AddStudent/>
    <div className="list">
    <StudentList/>
    </div>
    </div>
    </>
  )
}

export default Home