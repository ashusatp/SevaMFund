import React from "react";
import Button from "@mui/material/Button";
import './Card.css'
const Card = ({event}) => {
  return (
    <div className="card">
      <img src={event.args.imgURI} alt="img" />
      <p>Title: {event.args.title}</p>
      <h3>Owner:  {event.args.owner.slice(0,4)}...{event.args.owner.slice(39)}</h3>
      <h3>Amount: {event.args.requiredAmount.toString()}</h3>
      <h3>Date: {event.args.timestamp.toString()}</h3>
      <Button variant="contained" color="success">
        Donate
      </Button>
    </div>
  );
};

export default Card;
