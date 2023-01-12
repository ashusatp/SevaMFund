import React from 'react'
import CreateForm from '../components/CreateForm'
import Navbar from '../components/Navbar'
import { useState,useEffect,useContext } from 'react'
import { FundsContext } from '../context/FundsContext'
import { NFTStorage} from 'nft.storage'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {TailSpin} from 'react-loader-spinner'
import {ethers} from 'ethers'

const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDE1ODVjMEZhN2YyZmEzQkEyRTQzRmQ1Y0E5QjI3OENlYzQ5ZURkNDEiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3MzUzMDg1NjQzNywibmFtZSI6InNldmFNRnVuZCJ9.g0z2cnYG4TaJpgTjzbo2z2KWcG4db3OylDvdBRKNXQU'
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN })


const CreateProject = () => {

  const { 
    address, 
    connectWallet, 
    ProjectABI, 
    SevaMFundABI, 
    contractAddress,
    connectWithSmartContract
  } = useContext(FundsContext);

  const [form ,setForm] = useState({
    title: "",
    desc:"",
    requiredAmount: "",
    category: ""
  })

  const [file, setFile] = useState(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [metadataURL, setMetadataURL] = useState("");
  const [metadata, setMetadata] = useState("");
  const [projectAddress, setProjectAddress] = useState("");


  const FormHandler = (newForm) => {
    setForm(newForm)
  }

  const storeImage = (e) =>{
    setFile(e.target.files[0])
  }

  const uploadOnIPFS = async() =>{
    setUploadLoading(true);
    const metadata = await client.store({
      name: file.name,
      description: form.desc,
      image: file
    })
    const url = metadata.embed().image.href;
    const story = metadata.embed().description;
    setMetadata(story);
    setMetadataURL(url);
    setUploadLoading(false);
    setUploaded(true);
    toast.success("Files Uploaded Sucessfully")
  }
  
  const startProject = async() => {
    if(!address){
      connectWallet();
    }
    try{
      const contract = connectWithSmartContract(contractAddress,SevaMFundABI);
      const projectAmount = ethers.utils.parseEther(form.requiredAmount) ;
      const projectData = await contract.createProject(form.title,projectAmount,metadataURL,form.category,metadata);
      await projectData.wait();
      setProjectAddress(projectData.to);
    }catch(error){
      console.log(error);
    }
  }

  

  return (
    <div className='createProject'>
      <Navbar/>
      <CreateForm
        FormHandler={FormHandler} 
        storeImage={storeImage} 
        uploadOnIPFS={uploadOnIPFS} 
        uploadLoading={uploadLoading}
        uploaded={uploaded}
        startProject={startProject}
      />
    </div>
  )
}

export default CreateProject