// // import Navbar from "./Navbar/Navbar";
// import SideNavbar from "./Navbar/SideNavbar";
// // import './Background/StarryNight.css';
// import { BrowserRouter as Router, Routes, Route,Switch } from 'react-router-dom';

// import ManufactureSelect from "../Pages/ManufactureSelect";
// import Homepage from "../Pages/Homepage"

// import ManufactureHistory from "../Pages/ManufactureHistory";

// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import BuyAccessories from "../Pages/BuyAccessories";
// import BuyCategory from "../Pages/BuyCategory";
// import BuyItem from "../Pages/BuyItem";
// import BuyCart from "../Pages/BuyCart";


// import Inspection from "../Pages/Inspection";
// import Issue from "../Pages/Issue";

// import Logout from "../Pages/Logout";

// function Routing() {
//   return (
//     //  <Navbar style={{position:"fixed"}}></Navbar> 
//     // <Router>
//     <>
       


//       <SideNavbar />
//       <Router>
//       <Switch>
//         {/* <Route exact path="/" element={<Home />} /> */}
//         <Route path="/homepage" element={<Homepage />} />
//         <Route path="/manufacture" element={<ManufactureSelect />} />
//         <Route path="/manufacturehistory/:id" element={<ManufactureHistory />} />
//         <Route path="/buyaccessories" element={<BuyAccessories />} />
//         <Route path="/buycat" element={<BuyCategory />} />

//         <Route path="/buyitem" element={<BuyItem />} />

//         <Route path="/buycart" element={<BuyCart />} />

//         <Route path="/inspection" element={<Inspection />} />
//         <Route path="/issue" element={<Issue />} />

//         <Route path="/logout" element={<Logout />} />

//         {/* <Route path='/manufacture' exact component={ManufactureSelect}></Route> */}

//         {/* <Route path="/register" element={<Signup />} />
//           <Route path="/login" element={<Login />} />   
//           <Route path="/logout" element={<Logout />} />    */}
//       </Switch>
//       </Router>

//     </>
//   );
// }

// export { Routing };




import { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";


function Routing(props) {
  const { loggedIn, setLoggedIn } = props;

  useEffect(() => {
    setLoggedIn("true");
    localStorage.setItem("userLoggedIn", "factory");
  })
  return ( 
      <Navbar style={{position:"fixed"}} setLoggedIn={setLoggedIn}></Navbar>
    
  );
}

export {Routing};