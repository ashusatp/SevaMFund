import React from 'react'
import Navbar from '../components/Navbar'
import CardWrapper from '../components/CardWrapper'
import Filter from '../components/Filter'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Filter/>
      <CardWrapper/>
    </div>
  )
}

export default Home
