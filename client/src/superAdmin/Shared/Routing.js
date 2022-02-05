import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";


function Routing(props) {
  const { loggedIn, setLoggedIn } = props;

  useEffect(() => {
    setLoggedIn("true");
    localStorage.setItem("userLoggedIn", "super-admin");
  })
  return ( 
      <Navbar style={{position:"fixed"}} setLoggedIn={setLoggedIn}></Navbar>
    
  );
}

export {Routing};