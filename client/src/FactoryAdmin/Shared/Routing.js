import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderList from "../Pages/OrderList";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import './Background/StarryNight.css';
import WorkerList from "../Pages/WorkerList";

function Routing() {
  return (
    <Router>
      <Navbar style={{position:"fixed"}}></Navbar>
      <div className = 'back'>
        <Switch>
          <Route path='/' exact component={OrderList} ></Route>
          <Route path='/workers' exact component={WorkerList} ></Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default Routing;