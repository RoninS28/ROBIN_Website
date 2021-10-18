import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import './Background/StarryNight.css';


function Routing() {
  return (
       <Navbar style={{position:"fixed"}}></Navbar> 
  );
}

export default Routing;