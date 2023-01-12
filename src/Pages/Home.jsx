import React from 'react'
import Navbar from '../components/Navbar'
import CardWrapper from '../components/CardWrapper'
import Filter from '../components/Filter'
import { FundsContext } from '../context/FundsContext'
import { useState, useContext } from 'react'
import { ethers } from 'ethers'
import { useEffect } from 'react'
const Home = () => {
  const { 
    address, 
    connectWallet, 
    ProjectABI, 
    SevaMFundABI, 
    contractAddress,
  } = useContext(FundsContext);

  const getContract = () =>{
    const provider = new ethers.providers.JsonRpcProvider(
      "https://polygon-mumbai.g.alchemy.com/v2/UTXEf2d0yyYYwuat570_4AIDLyjWD7E8"
    );
    const contract = new ethers.Contract(
      contractAddress,
      SevaMFundABI,
      provider
    )

    return contract;
  }
  return (
    <div>
      <Navbar/>
      <Filter/>
      <CardWrapper getContract={getContract}/>
    </div>
  )
}

export default Home
