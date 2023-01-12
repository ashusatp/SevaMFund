import React from "react";
import Button from "@mui/material/Button";
import './Card.css'
const Card = () => {
  return (
    <div className="card">
      <img src="" alt="img" />
      <p>Title</p>
      <h3>Owner Address</h3>
      <h3>Amount</h3>
      <h3>Date</h3>
      <Button variant="contained" color="success">
        Donate
      </Button>
    </div>
  );
};

export default Card;
