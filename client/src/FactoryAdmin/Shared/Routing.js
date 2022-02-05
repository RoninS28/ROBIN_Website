import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderList from "../Pages/OrderList";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import './Background/StarryNight.css';
import WorkerList from "../Pages/WorkerList";
import WorkerListDetails from "../Pages/WorkerListDetails";
import { useState, useEffect } from "react";

function Routing(props) {
  const { loggedIn, setLoggedIn } = props;

  useEffect(() => {
    console.log("factory admin routing file");
    setLoggedIn("true");
    localStorage.setItem("userLoggedIn", "factory-admin");
  })
  return (
       <Navbar style={{position:"fixed"}} setLoggedIn={setLoggedIn}></Navbar> 
  );
}

export {Routing};