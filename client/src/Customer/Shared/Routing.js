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
import ServicingConfirm from "../Pages/ServicingConfirm";
import Servicing from "../Pages/Servicing";
import ServicingBook from "../Pages/ServicingBook";
import Chatbot from "../Pages/Chatbot";
import TestDriveBooking from "../Pages/TestDriveBooking";
import TestDriveOutlet from "../Pages/TestDriveOutlet";
import NotificationsRoom from "../Pages/NotificationsChat";
import ProductsSelection from "../Pages/ProductsSelection";



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
          <Route path='/productsSelection/:id' exact component={ProductsSelection} ></Route>
          <Route path='/testdrive/:id' exact component={TestDrive} ></Route>
          <Route path='/testdrive' exact component={TestDrive} ></Route>
          <Route path='/testdrivebooking' exact component={TestDriveBooking} ></Route>
          <Route path='/TestDriveOutlet' exact component={TestDriveOutlet} ></Route>
          <Route path='/bookings' exact component={Bookings} ></Route>
          <Route path='/bookingsStage/:id' exact component={BookingsStage} ></Route>
          <Route path='/servicing' exact component={Servicing} ></Route>
          <Route path='/chatbot' exact component={Chatbot} ></Route>
          <Route path='/notifications' exact component={NotificationsRoom} ></Route>
          <Route path='/servicingBook/:id' exact component={ServicingBook} ></Route>
          <Route path='/servicingConfirm/:id' exact component={ServicingConfirm} ></Route>
        </Switch>
      </Layout>
      {/* </div> */}
      {/* <Footer/> */}
    </Router>
  );
}

export { Routing };
