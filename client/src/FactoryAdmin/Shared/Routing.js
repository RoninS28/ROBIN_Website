import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderList from "../Pages/OrderList";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import './Background/StarryNight.css';
import WorkerList from "../Pages/WorkerList";
import WorkerListDetails from "../Pages/WorkerListDetails";

function Routing() {
  return (
       <Navbar style={{position:"fixed"}}></Navbar> 
  );
}

export {Routing};