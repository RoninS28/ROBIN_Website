import { blue, yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Grid } from "@material-ui/core";
import { color, display } from "@mui/system";



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
            margin: '50px',
            marginRight: '20px',
            marginTop: '20px',
            // justifyContent: 'end',
            fontSize: '25px',
            fontWeight: '600',
            fontFamily: 'Secular One',
            // marginRight: "0px"



        },
        bookingrow: {
            fontSize: '18px',
            fontFamily: 'Secular One',
            margin: '50px'



        },
        bookingrowInfo: {
            // display: 'flex',
            // alignItems: 'spaceAround'
            fontSize: '25px',


        },
        statusColumn: {
            display: 'flex-end',
            fontSize: '25px',


        }
    }
})

const Bookings = () => {
    const classes = useStyles()
    const myBookingsList = [
        {
            imagesrc: "../Assets/v2.jpeg",
            model: "CITY - 1 ELECTRIC SCOOTER",
            plateNumber: "????",
            purchaseDate: "08/09/2021",
            status: "Pending",
            stage: "3",
            deliveryDate: "28/06/2021"

        },
        {
            imagesrc: "../Assets/v2.jpeg",
            model: "CITY - 1 ELECTRIC SCOOTER",
            plateNumber: "MH 12 FP 9602",
            purchaseDate: "28/05/2021",
            status: "Delivered",
            stage: "10",
            deliveryDate: "28/06/2021"

        }
    ]
    return (
        <div>
            <div className={classes.heading}>
                My Bookings
            </div>
            <Grid container spacing={3} justifyContent="flex-end" className={classes.statusRow}>
                <Grid item xs={5} md={4} lg={4} justifyContent="flex-end">
                    Status

                </Grid>

            </Grid>
            {/* <div className={classes.statusRow}>

            </div> */}
            <div >


                {myBookingsList.map((item) => (
                    // <div className={classes.bookingrow}>

                    //     <br />
                    //     <br />

                    // </div>
                    <Grid container spacing={3} justifyContent="space-evenly" className={classes.bookingrow}>
                        <Grid item spacing={3} key={item.plateNumber} xs={2} md={4} lg={4}>
                            <img src={item.imagesrc} alt="image" />
                        </Grid>
                        <Grid item spacing={3} key={item.plateNumber} xs={5} md={4} lg={4}>
                            <div >
                                <div>
                                    {item.model}
                                </div>
                                <div>
                                    {item.plateNumber}
                                </div>
                                <div>
                                    Purchased on {item.purchaseDate}
                                </div>


                            </div>
                        </Grid>
                        <Grid item spacing={3} key={item.plateNumber} xs={5} md={4} lg={4}  >
                            {/* <div className={classes.statusColumn}> */}

                            <div>
                                {item.status}
                            </div>
                            <div>
                                {item.status == 'Pending' ? item.stage : item.deliveryDate}
                            </div>
                            {/* </div> */}
                        </Grid>
                    </Grid>

                ))}


            </div>
        </div>
    );
}

export default Bookings;