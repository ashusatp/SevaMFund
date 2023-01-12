import React from "react";
import "./DonateContainer.css";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
const DonateContainer = () => {
  return (
    <div className="donateContainer">
      <div className="leftDonateContainer">
        <img src="" alt="donateImg" />
        <h1>Title</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam atque
          hic qui sit aliquid veniam totam soluta perferendis, voluptas
          praesentium recusandae! Eaque provident rem harum esse in incidunt ea
          exercitationem sequi dolores minima! Accusamus ipsa fuga, maxime
          quaerat soluta illo nihil nemo, repellendus praesentium nam eaque est
          cum repellat eius.
        </p>
      </div>
      <div className="rightDonateContainer">
        <div className="rightDonation">
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
            <Input
              id="standard-adornment-amount"
              startAdornment={
                <InputAdornment position="start">ETH</InputAdornment>
              }
            />
          </FormControl>
          <div className="requiredAmount">Required Amount : 40 ETH</div>
          <div className="receivedAmount">Received Amount : 2 ETH</div>
          <Button variant="contained" color="success">
            Donate
          </Button>
        </div>
        <div className="allDonations">
          <h2>All Donations</h2>
        </div>
      </div>
    </div>
  );
};

export default DonateContainer;
