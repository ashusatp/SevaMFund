import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import './CreateForm.css'

const CreateForm = () => {
  const [category, setCategory] = React.useState("");

  const handleChange = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div className="createForm">
      <TextField
        sx={{ m: 1, minWidth: 120 }}
        size="small"
        id="outlined-basic"
        label="Title"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="Desc"
        variant="outlined"
        sx={{ m: 1, minWidth: 120 }}
        size="small"
      />
      <TextField
        id="outlined-basic"
        label="Required Amount"
        variant="outlined"
        sx={{ m: 1, minWidth: 120 }}
        size="small"
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
          <MenuItem value={10}>Health</MenuItem>
          <MenuItem value={20}>Animal</MenuItem>
          <MenuItem value={30}>Education</MenuItem>
        </Select>
      </FormControl>
      <input type="file" />
      <Button variant="contained" sx={{ m: 1}}>Upload</Button>
      <Button variant="contained" color="success">
        Create
      </Button>
    </div>
  );
};

export default CreateForm;
