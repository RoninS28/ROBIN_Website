import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import './Background/StarryNight.css';
import EVModelList from "../EVModelList";

function Routing() {
  return (
    <Router>
      <Navbar style={{position:"fixed"}}></Navbar>
      <div className = 'back'>
        <Switch>
          <Route path='/' exact component={EVModelList} ></Route>
          <Route path='/workers' exact component={EVModelList} ></Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default Routing;