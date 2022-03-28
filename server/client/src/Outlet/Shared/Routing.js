import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import './Background/StarryNight.css';
import { useEffect } from "react";


function Routing(props) {
  const { loggedIn, setLoggedIn } = props;

  useEffect(() => {
    setLoggedIn("true");
    localStorage.setItem("userLoggedIn", "outlet");
  })
  return (
       <Navbar style={{position:"fixed"}} setLoggedIn={setLoggedIn}></Navbar> 
  );
}

export {Routing};