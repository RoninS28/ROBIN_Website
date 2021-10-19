import { blue, yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Grid } from "@material-ui/core";
import { color, display } from "@mui/system";
import v2 from '../Assets/v2.jpeg'
import '../PagesStyles/Bookings.css'
import Select from "react-select";
import { useState } from "react";



const useStyles = makeStyles((theme) => {
    return {
        heading: {
            color: blue[500],
            marginTop: '20px',
            textAlign: "center",
            fontSize: '40px',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.21)',
        },
        statusRow: {
            // display: 'flex',
            // margin: '50px',
            // marginRight: '20px',
            marginTop: '18px',
            // justifyContent: 'end',
            fontSize: '25px',
            fontWeight: '600',
            fontFamily: 'Secular One',
            // marginRight: "0px"



        },
        bookingrow: {
            fontSize: '18px',
            fontFamily: 'Secular One',
            // margin: '50px',




        },
        bookingrowInfo: {
            // display: 'flex',
            // alignItems: 'spaceAround'
            fontSize: '25px',
            // alignSelf: "center",
            justifyContent: 'flex-end',
            // alignItems: "left",


        },
        statusColumn: {
            "&&": {

                display: 'flex-end',
                fontSize: '25px',
                alignSelf: "center",

                justifyContent: 'flex-end'
            }

        },
        grids: {
            width: '100%',
            flexGrow: "1"
        },
        image: {
            alignItems: 'self',
            justifyContent: 'center'


        }
    }
})

const Bookings = () => {
    const classes = useStyles()
    const myBookingsList = [
        {
            imagesrc: "v2",
            owner: "Rohan Shiveshwarkar",
            model: "CITY - 1 ELECTRIC SCOOTER",
            chasis: "xxxxxxxxxxxx",
            plateNumber: "MH 12 FP 9602",
            purchaseDate: "28/05/2021",
            status: "Delivered",
            stage: "10",
            deliveryDate: "28/06/2021"

        }
    ]
    const Timeslotoptions = [
        { label: "6am-12pm", value: "1" },
        { label: "12pm-8pm", value: "2" },
        { label: "8pm-6am", value: "3" },
      ];
    
      const [TimeslotValue, setTimeslotValue] = useState('');
    
      const TimeslotComponent = () => <Select onChange={(e)=>{setTimeslotValue(e.value)}} options={Timeslotoptions} value={Timeslotoptions.filter(function(option) {
        return option.value === TimeslotValue;
      })}/>;
    return (
        <div>
            {/* <div className={classes.heading}>
                My Bookings
            </div>
            <Grid container spacing={3} justifyContent="flex-end" className={classes.statusRow}>
                <Grid item xs={4} md={4} lg={4} xl={4} justifyContent="flex-end" >
                    <div className="statusRow">

                        Status
                    </div>


                </Grid>

            </Grid> */}
            
            <div className={classes.grids}>


                <Grid container spacing={3} justifyContent="space-evenly" className={classes.bookingrow}>
                    {myBookingsList.map(item => (
                        // <div className={classes.bookingrow}>

                        //     <br />
                        //     <br />
                        // <div>
                        <Grid container item xs={12} md={12} lg={12} xl={12} >
                            <Grid item spacing={3} key={item.plateNumber} xs={2} md={2} lg={2} xl={2}>
                            </Grid>
                            <Grid item spacing={3} key={item.plateNumber} xs={3} md={3} lg={3} xl={3} className={classes.image}>

                                <div className="image">

                                    <img src={v2} alt="image" height="200px" width="200px" />
                                </div>

                            </Grid>
                            <Grid item spacing={3} key={item.plateNumber} xs={4} md={4} lg={4} xl={4} className={classes.bookingrowInfo}>
                                <div className="bookingrowInfo" style={{alignContent:"flex-start"}}>
                                    <div>
                                        Owner Name: {item.owner}
                                    </div>
                                    <div>
                                        Model: {item.model}
                                    </div>
                                    <div>
                                        Vehicle No: {item.plateNumber}
                                    </div>
                                    <div>
                                        Chasis: {item.chasis}
                                    </div>


                                </div>
                            </Grid>
                            <Grid item spacing={3} key={item.plateNumber} xs={3} md={3} lg={3} xl={3}>
                            </Grid>
                            {/* <Grid item spacing={3} key={item.plateNumber} xs={4} md={4} lg={4} xl={4} className={classes.statusColumn} >
                                <div className="statusColumn">

                                    <div>
                                        {item.status}
                                    </div>
                                    <div>
                                        {item.status == 'Pending' ? item.stage : item.deliveryDate}
                                    </div>
                                </div>
                            </Grid> */}
                        </Grid>


                    ))}
                </Grid>


            </div>

            <div className="container mx-auto px-4 h-full" style={{backgroundColor:""}}>
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-8/12 mt-10 px-4">
                        {/* <div className="relative flex flex-col min-w-0 break-words w-full mb-600 shadow-lg rounded-lg bg-blueGray-200 border-0"></div> */}
                        <form>
                            <div className="flex flex-wrap">
                            <div className="relative w-full lg:w-6/12 mb-3 px-2">
                                <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                >
                                Select Appointment Date:
                                </label>
                            </div>
                            <div className="relative w-full lg:w-6/12 mb-3 px-2">
                            <input
                            type="date"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder=""
                            />
                            </div>
                            </div>

                            <div className="flex flex-wrap">
                            <div className="relative w-full lg:w-6/12 mb-3 px-2">
                                <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                                >
                                Select Time Slot:
                                </label>
                                </div>
                            <div className="relative w-full lg:w-6/12 mb-3 px-2">
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
                                Pickup and Drop:
                                </label>
                                </div>
                            <div className="relative w-full lg:w-6/12 mb-3 px-2">
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
                                Personal Notes:
                                </label>
                            </div>
                            <div className="relative w-full lg:w-6/12 mb-3 px-2">
                            {/* <input
                            type="date"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder=""
                            /> */}
                            <textarea rows="5" className="relative w-full" style={{borderWidth:"0.5px", borderColor:"black", borderRadius:"5px"}}></textarea>
                            </div>
                            </div>
                            
                            <div className="text-center mt-6">
                                <button
                                className="bg-blueGray-800 w-full lg:w-6/12 text-black active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                                type="button"
                                style={{backgroundColor:"orange"}}
                                >
                                Confirm Appointment
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>



        </div>
    );
}

export default Bookings;