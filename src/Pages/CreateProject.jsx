import React from 'react'
import CreateForm from '../components/CreateForm'
import Navbar from '../components/Navbar'

const CreateProject = () => {
  return (
    <div className='createProject'>
      <Navbar/>
      <CreateForm/>
    </div>
  )
}

export default CreateProject