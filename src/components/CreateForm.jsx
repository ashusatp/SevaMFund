import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {tost} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {TailSpin} from 'react-loader-spinner'
import './CreateForm.css'
import { useState, useEffect } from "react";


const CreateForm = ({FormHandler, storeImage, uploadOnIPFS, uploadLoading, uploaded, startProject}) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(()=>{
    const newForm = {
      title: title,
      desc: desc,
      requiredAmount: amount,
      category: category
    }

    FormHandler(newForm)
  },[title,desc,amount,category,FormHandler])

  
  return (
    <div className="createForm">
      <TextField
        sx={{ m: 1, minWidth: 120 }}
        size="small"
        id="outlined-basic"
        label="Title"
        variant="outlined"
        value={title}
        onChange={e=>setTitle(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Desc"
        variant="outlined"
        sx={{ m: 1, minWidth: 120 }}
        size="small"
        value={desc}
        onChange={e=>setDesc(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Required Amount"
        variant="outlined"
        sx={{ m: 1, minWidth: 120 }}
        size="small"
        value={amount}
        onChange={e=>setAmount(e.target.value)}
      />

      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small">Category</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={category}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Health"}>Health</MenuItem>
          <MenuItem value={"Animal"}>Animal</MenuItem>
          <MenuItem value={"Education"}>Education</MenuItem>
        </Select>
      </FormControl>
      <input type="file" onChange={storeImage}/>
      {uploadLoading ?<TailSpin height={40}/> : !uploaded ? <Button variant="contained" sx={{ m: 1}} onClick={uploadOnIPFS}>Upload</Button>: <Button variant="contained" sx={{ m: 1}}>File Uploaded</Button> }
      <Button variant="contained" color="success" onClick={startProject}>
        Create
      </Button>
    </div>
  );
};

export default CreateForm;
