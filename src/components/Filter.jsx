import React from 'react'
import Button from "@mui/material/Button";
import './Filter.css'
const Filter = () => {
  return (
    <div className='filter'>
      <Button variant="contained" sx={{ m: 1}}>All</Button>
      <Button variant="contained" sx={{ m: 1}}>Health</Button>
      <Button variant="contained" sx={{ m: 1}}>Education</Button>
      <Button variant="contained" sx={{ m: 1}}>Animal</Button>
    </div>
  )
}

export default Filter