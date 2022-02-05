import Navbar from "./Navbar/Navbar";
import './Background/StarryNight.css';
import { useEffect } from "react";

function Routing(props) {
  const { loggedIn, setLoggedIn } = props;

  useEffect(() => {
    setLoggedIn("true");
    localStorage.setItem("userLoggedIn", "service-center");
  })
  return (
       <Navbar style={{position:"fixed"}} setLoggedIn={setLoggedIn}></Navbar> 
  );
}

export {Routing};
