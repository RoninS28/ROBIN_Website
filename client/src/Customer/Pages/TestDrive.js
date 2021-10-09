// import { red } from "@material-ui/core/colors";
// import Button from "@material-ui/core/Button";
// import {
//     makeStyles
//   } from "@material-ui/core";

//   const useStyles = makeStyles((theme) => ({
//     navlinks: {
//       marginLeft: theme.spacing(5),
//       display: "flex",
//     },
//    logo: {
//       flexGrow: "0",
//       cursor: "pointer",
//       color: "Orange",
//     },
//     t1: {
//       textDecoration: "none",
//       color: "white",
//       fontSize: "20px",
//       marginLeft: theme.spacing(10),
//       "&:hover": {
//         color: "orange",
//         borderBottom: "1px solid white",
//       },
//     },
//   }));

// export default function TestDrive() {
    
//     const classes = useStyles();
//       const atHome = () => {
//         document.getElementById('t1').style.color="white";
//         document.getElementById('t2').style.color="black";
//         document.getElementById('t1').style.backgroundColor="green";
//         document.getElementById('t2').style.backgroundColor="white";
//       };
//       const atOutlet = () => {
//         document.getElementById('t2').style.color="white";
//         document.getElementById('t1').style.color="balck";
//         document.getElementById('t2').style.backgroundColor="green";
//         document.getElementById('t1').style.backgroundColor="white";
//       };
//     return (
//           <div>
//               <div className="multibutton">
//                 <Button className="t1"
//                     size="small"
//                     onClick={atHome}
                    
//                 >
//                 At Home
                
//                 </Button>

//                 <Button className="t2"
//                     size="small"
//                     onClick={atOutlet}
                
//                 >
//                 At Outlet
                
//                 </Button>
                
//                 <form>
//                 <div className="container mx-auto px-4 h-full">
//                     <div className="flex content-center items-center justify-center h-full">
//                     <div className="flex flex-nowrap">
//                         <div className="w-full lg:w-6/12 px-4">
//                             <div className="relative w-full mb-3">
//                                 <label
//                                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                                     htmlFor="grid-password"
//                                 >
//                                     Email address
//                                 </label>
//                                 <input
//                                     type="email"
//                                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                                     //defaultValue={data.email}
//                                     //readOnly
//                                 />
//                             </div>
//                         </div>
//                         <div className="w-full lg:w-6/12 px-4">
//                             <div className="relative w-full mb-3">
//                                 <label
//                                     className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                                     htmlFor="grid-password"
//                                 >
//                                     Name
//                                 </label>
//                                 <input
//                                     type="name"
//                                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                     </div>
//                 </div>
//                 </form>
//             </div>
//         </div>
//     );
//   }
  

import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { useState } from "react";

export default function TestDrive() {

  const Genderoptions = [
    { label: "6am-12pm", value: "1" },
    { label: "12pm-8pm", value: "2" },
    { label: "8pm-6am", value: "3" },
  ];

  const [genderValue, setgenderValue] = useState('');

  const GenderComponent = () => <Select onChange={(e)=>{setgenderValue(e.value)}} options={Genderoptions} value={Genderoptions.filter(function(option) {
    return option.value === genderValue;
  })}/>;

  const Modeloptions = [
    { label: "Shine s1", value: "1" },
    { label: "Glamour s2", value: "2" },
    { label: "Hornet s3", value: "3" },
  ];

  const [modelValue, setmodelValue] = useState('');

  const ModelComponent = () => <Select onChange={(e)=>{setmodelValue(e.value)}} options={Modeloptions} value={Modeloptions.filter(function(option) {
    return option.value === modelValue;
  })}/>;

  return (
    <>
      <div className="container mx-auto px-4 h-full" style={{backgroundColor:""}}>
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-8/12 mt-10 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-600 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="btn-wrapper text-center">
                  <button
                    className="lg:w-3/12 active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                    style={{backgroundColor:"lightblue"}}
                  >
                    <center>At Home</center>
                  </button>
                  <button
                    className="lg:w-3/12 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" 
                    type="button"
                    style={{outlineColor:"lightblue"}}
                  >
                    <center>At Oulet</center>
                  </button>
                </div>
                
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <center><div className="text-blueGray-400 mb-3">
                  <img src={require("../Assets/elescooter.jpg").default}/>
                </div></center>
                <hr className="mt-6 border-b-1 border-blueGray-300 mb-5" />
                <form>
                <div className="flex flex-wrap">
                  <div className="relative w-full lg:w-6/12 mb-3 px-2">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="name"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder=""
                    />
                  </div>

                  <div className="relative w-full lg:w-6/12 mb-3 px-2">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      
                    />
                  </div>
                  </div>

                  <div className="flex flex-wrap">
                  <div className="relative w-full lg:w-6/12 mb-3 px-2">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Pincode
                    </label>
                    <input
                      type="Pincode"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder=""
                    />
                  </div>

                  <div className="relative w-full lg:w-6/12 mb-3 px-2">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Mobile No
                    </label>
                    <input
                      type="mobileno"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      
                    />
                  </div>
                  </div>

                  <div className="flex flex-wrap">
                  <div className="relative w-full lg:w-6/12 mb-3 px-2">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Dl No
                    </label>
                    <input
                      type="Dlno"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder=""
                    />
                  </div>

                  <div className="relative w-full lg:w-6/12 mb-3 px-2">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Address
                    </label>
                    <input
                      type="address"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      
                    />
                  </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300 mb-5" />

                  <div className="flex flex-wrap">
                  <div className="relative w-full lg:w-6/12 mb-3 px-2">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Select Preferred Date
                    </label>
                    <input
                      type="date"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder=""
                    />
                  </div>

                  <div className="relative w-full lg:w-6/12 mb-3 px-2">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Select Time Slot
                    </label>
                    {/* <input
                      type="select"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      
                    /> */}
                    <div className = "w-full self-center">
                      <GenderComponent />
                    </div>
                  </div>
                  </div>

                  <div className="flex flex-wrap">
                  <div className="relative w-full lg:w-6/12 mb-3 px-2">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Enter OTP
                    </label>
                    <input
                      type="otp"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder=""
                    />
                  </div>

                  <div className="relative w-full lg:w-6/12 mb-3 px-2">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Select EV Model
                    </label>
                    {/* <input
                      type="select"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      
                    /> */}
                    <div className = "w-full self-center">
                      <ModelComponent />
                    </div>
                  </div>
                  </div>




                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 w-full lg:w-6/12 text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      style={{backgroundColor:"orange"}}
                    >
                      Confirm Test Drive
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
