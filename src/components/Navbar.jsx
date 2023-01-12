import React from "react";
import { Link } from "react-router-dom";
import {useContext } from "react";
import { FundsContext } from "../context/FundsContext";
import "./Navbar.css";
const Navbar = () => {
  const {address, balance, connectWallet} = useContext(FundsContext);
  const shortBalance = String(balance).split(".");
  const firstBalance = String(shortBalance[0]);
  const secondBalance = String(shortBalance[1]).slice(0,4);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/">
          <img src="./content//For Carousel/logo ngo.jpg" alt="img" srcset="" />
        </Link>
      </div>
      <ul className="right">
        {address && <li className="address">
          Address : {address.slice(0,6)}...{address.slice(37)}
        </li>}
        {address && <li className="balance">
          Balance : {firstBalance}.{secondBalance}
        </li>}
        { !address && <li className="btn">
          <button className="connect" onClick={connectWallet}>Connect</button>
        </li>}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/createProject">Create Project</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
