import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import './Background/StarryNight.css';
import Products from "../Pages/Products";
import TestDrive from "../Pages/TestDrive";
import Layout from "./Layout/Layout"
import Bookings from "../Pages/Bookings";
import BookingsStage from "../Pages/BookingsStage";
import ProductsView from "../Pages/ProductsView";


function Routing() {
  return (
    <Router>
      {/* <Navbar style={{position:"fixed"}}></Navbar> */}

      {/* <div className = 'back'> */}
      <Layout>

        <Switch>

          <Route path='/' exact component={Home} ></Route>
          <Route path='/products' exact component={Products} ></Route>
          <Route path='/productsView/:id' exact component={ProductsView} ></Route>
          <Route path='/testdrive' exact component={TestDrive} ></Route>
          <Route path='/bookings' exact component={Bookings} ></Route>
          <Route path='/bookingsstage' exact component={BookingsStage} ></Route>
        </Switch>
      </Layout>
      {/* </div> */}
      {/* <Footer/> */}
    </Router>
  );
}

export default Routing;
