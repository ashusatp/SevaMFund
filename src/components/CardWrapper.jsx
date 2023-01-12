import React, { useEffect,useState } from "react";
import Card from "./Card";
import "./CardWrapper.css";
const CardWrapper = ({ getContract }) => {
  const [events, setEvents] = useState([]);
  const getAllProjects = async () => {
    try {
      const contract = getContract();
      const getDeployedCampaign = contract.filters.projectCreated();
      // const getDeployedCampaign = contract.filters.projectCreated(
      //   null,
      //   null,
      //   null,
      //   null,
      //   null,
      //   null,
      //   "Health"
      // );
      let events = await contract.queryFilter(getDeployedCampaign);
      let event = events.reverse();
      setEvents(event);
      console.log(event);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    getAllProjects();
  },[])
  return (
    <div className="cardWrapper">
      {events.map((event,index)=>{
        return <Card key={index} event={event}/>
      })}
    </div>
  );
};

export default CardWrapper;
