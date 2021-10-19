import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { ButtonGroup,Button } from "@material-ui/core";

export default function TestDrive() {

  const Timeslotoptions = [
    { label: "6am-12pm", value: "1" },
    { label: "12pm-8pm", value: "2" },
    { label: "8pm-6am", value: "3" },
  ];

  const [TimeslotValue, setTimeslotValue] = useState('');

  const TimeslotComponent = () => <Select onChange={(e)=>{setTimeslotValue(e.value)}} options={Timeslotoptions} value={Timeslotoptions.filter(function(option) {
    return option.value === TimeslotValue;
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
                  {/* <ButtonGroup>
                      {["At Home", "At Outlet"].map((text, index) => (
                      <Button button key={text}>
                        <Button>
                          {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </Button>
                        <Button primary={text} />
                      </Button>
                    ))}
                  </ButtonGroup> */}
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
                      <TimeslotComponent />
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
                      EV Model
                    </label>
                    {/* <input
                      type="select"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      
                    /> */}
                    <div className = "w-full self-center">
                      {/* <ModelComponent /> */}
                      <input
                        type="otp"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Shine S1"
                        readOnly
                      ></input>
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
