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
import { ButtonGroup, Button } from "@material-ui/core";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";
import TestDriveOutlet from "./TestDriveOutlet";
import '../PagesStyles/TestDrive.css'

export default function TestDrive(props) {

  const home = true;

  const Timeslotoptions = [
    { label: "6am-12pm", value: "1" },
    { label: "12pm-8pm", value: "2" },
    { label: "8pm-6am", value: "3" },
  ];


  const [TimeslotValue, setTimeslotValue] = useState('');

  const TimeslotComponent = () => <Select onChange={(e) => { setTimeslotValue(e.value) }} options={Timeslotoptions} value={Timeslotoptions.filter(function (option) {
    return option.value === TimeslotValue;
  })} />;

  const Modeloptions = [
    { label: "Shine s1", value: "1" },
    { label: "Glamour s2", value: "2" },
    { label: "Hornet s3", value: "3" },
  ];

  const [modelValue, setmodelValue] = useState('');

  const ModelComponent = () => <Select onChange={(e) => { setmodelValue(e.value) }} options={Modeloptions} value={Modeloptions.filter(function (option) {
    return option.value === modelValue;
  })} />;


  const history = useHistory()


  const handleTestDriveBooking = () => {
    history.push('/TestDriveBooking')

  }

  const handleTestDrive = () => {
    history.push('/TestDrive')
  }

  const handleTestDriveOutlet = () => {
    history.push('/TestDriveOutlet')
  }

  const useStyles1 = makeStyles((theme) => {
    return {
      display: "block",
    }
  })

  const useStyles2 = makeStyles((theme) => {
    return {
      display: "none",
    }
  })

  return (
    <>
      <div className="container mx-auto px-4 h-full testDriveScreen" style={{ backgroundColor: "" }}>
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
                    className="lg:w-3/12 active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xl ease-linear transition-all duration-150"
                    type="button"
                    style={{ backgroundColor: "lightblue", borderWidth: "3px", borderColor: "#334756" }}
                    onClick={handleTestDrive}
                  >
                    <center>At Home</center>
                  </button>
                  <button
                    className="lg:w-3/12 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xl ease-linear transition-all duration-150"
                    type="button"
                    style={{ borderColor: "lightblue", borderWidth: "3px" }}
                    onClick={handleTestDriveOutlet}
                  >
                    <center>At Outlet</center>
                  </button>
                </div>

              </div>

              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <center><div className="text-blueGray-400 mb-3">
                  <img src={require("../Assets/elescooter.jpg").default} />
                </div></center>
                <hr className="mt-6 border-b-1 border-blueGray-300 mb-5" />

                <form>
                  <div className="flex flex-wrap">
                    <div className="relative w-full lg:w-6/12 mb-3 px-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                        style={{ width: 'max-content' }}

                      >
                        Name
                      </label>
                      <input
                        type="name"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-xl shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder=""
                      />
                    </div>

                    <div className="relative  lg:w-6/12 mb-3 px-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xl font-bold mb-2"
                        style={{ width: 'max-content' }}
                        htmlFor="grid-password"
                      >
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-xl shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap">
                    <div className="relative w-full lg:w-6/12 mb-3 px-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                        style={{ width: 'max-content' }}

                      >
                        Pincode
                      </label>
                      <input
                        type="Pincode"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-xl shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder=""
                      />
                    </div>

                    <div className="relative w-full lg:w-6/12 mb-3 px-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                        style={{ width: 'max-content' }}

                      >
                        Mobile No
                      </label>
                      <input
                        type="mobileno"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-xl shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap">
                    <div className="relative w-full lg:w-6/12 mb-3 px-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                        style={{ width: 'max-content' }}

                      >
                        Dl No
                      </label>
                      <input
                        type="Dlno"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-xl shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder=""
                      />
                    </div>

                    <div className="relative w-full lg:w-6/12 mb-3 px-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                        style={{ width: 'max-content' }}

                      >
                        Address
                      </label>
                      <input
                        type="address"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-xl shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"

                      />
                    </div>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300 mb-5" />

                  <div className="flex flex-wrap">
                    <div className="relative w-full lg:w-6/12 mb-3 px-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                        style={{ width: 'max-content' }}

                      >
                        Select Preferred Date
                      </label>
                      <input
                        type="date"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-xl shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder=""
                      />
                    </div>

                    <div className="relative w-full lg:w-6/12 mb-3 px-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                        style={{ width: 'max-content' }}

                      >
                        Select Time Slot
                      </label>
                      {/* <input
                      type="select"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-xl shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      
                    /> */}

                      <div className="w-full self-center my-2 text-xl">
                        <TimeslotComponent />
                      </div>

                    </div>
                  </div>

                  <div className="flex flex-wrap">
                    <div className="relative w-full lg:w-6/12 mb-3 px-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                        style={{ width: 'max-content' }}

                      >
                        Enter OTP
                      </label>
                      <input
                        type="otp"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-xl shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder=""
                      />
                    </div>

                    <div className="relative w-full lg:w-6/12 mb-3 px-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xl font-bold mb-2"
                        htmlFor="grid-password"
                        style={{ width: 'max-content' }}

                      >
                        EV Model
                      </label>
                      {/* <input
                      type="select"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-xl shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      
                    /> */}
                      <div className="w-full self-center">
                        {/* <ModelComponent /> */}
                        <input
                          type="otp"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-xl shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="CITY-1 Electric Vehicle"
                          readOnly
                        ></input>
                      </div>
                    </div>
                  </div>


                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 w-full lg:w-6/12 text-black active:bg-blueGray-600 text-xl font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      style={{ backgroundColor: "white", borderRadius: "15px", borderColor: "#1F64CC", borderWidth: "5px" }}
                      onClick={handleTestDriveBooking}
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
