import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import './Background/StarryNight.css';
import Products from "../Pages/Products";

function Routing() {
  return (
    <Router>
      <Navbar style={{position:"fixed"}}></Navbar>
      <div className = 'back'>
        <Switch>
          <Route path='/' exact component={Home} ></Route>
          <Route path='/products' exact component={Products} ></Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default Routing;
