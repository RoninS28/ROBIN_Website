import { blue, yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Grid } from "@material-ui/core";
import { color, display } from "@mui/system";
import v2 from '../Assets/v2.jpeg'
import '../PagesStyles/Bookings.css';
import { useHistory } from "react-router";



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
            alignSelf: "center",
            justifyContent: 'flex-end'


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
            id: 1,
            imagesrc: "v2",
            model: "CITY - 1 ELECTRIC SCOOTER",
            plateNumber: "MH 12 FP 9602",
            purchaseDate: "28/05/2021",
            status: "Delivered",
            stage: "10",
            deliveryDate: "28/06/2021"

        },
        {
            id: 2,
            imagesrc: "v2",
            model: "CITY - 1 ELECTRIC SCOOTER",
            plateNumber: "????",
            purchaseDate: "08/09/2021",
            status: "Pending",
            stage: "3",
            deliveryDate: "28/06/2021"

        }

    ]

    const history = useHistory()


    const handleProduct = (e) => {
        history.push('/bookingsStage/' + e.id)
    }
    return (
        <div>
            <div className={classes.heading}>
                My Bookings
            </div>
            <Grid container spacing={3} justifyContent="flex-end" className={classes.statusRow}>
                <Grid item xs={4} md={4} lg={4} xl={4} justifyContent="flex-end" >
                    <div className="statusRow">

                        Status
                    </div>


                </Grid>

            </Grid>
            {/* <div className={classes.statusRow}>

            </div> */}
            <div className={classes.grids}>


                <Grid container spacing={3} justifyContent="space-evenly" className={classes.bookingrow}>
                    {myBookingsList.map(item => (
                        // <div className={classes.bookingrow}>

                        //     <br />
                        //     <br />
                        // <div>
                        <Grid container item xs={12} md={12} lg={12} xl={12} >

                            <Grid item spacing={3} key={item.plateNumber} xs={3} md={4} lg={4} xl={4} className={classes.image} onClick={(e) => handleProduct(item)}>

                                <div className="image">

                                    <img src={v2} alt="image" height="200px" width="200px" />
                                </div>

                            </Grid>
                            <Grid item spacing={3} key={item.plateNumber} xs={5} md={4} lg={4} xl={4} className={classes.bookingrowInfo} onClick={(e) => handleProduct(item)}>
                                <div className="bookingrowInfo">
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
                            <Grid item spacing={3} key={item.plateNumber} xs={4} md={4} lg={4} xl={4} className={classes.statusColumn} >
                                <div className="statusColumn">

                                    <div>
                                        {item.status}
                                    </div>
                                    <div>
                                        {item.status == 'Pending' ? item.stage : item.deliveryDate}
                                    </div>
                                </div>
                            </Grid>
                        </Grid>


                    ))}
                </Grid>


            </div>
        </div>
    );
}

export default Bookings;