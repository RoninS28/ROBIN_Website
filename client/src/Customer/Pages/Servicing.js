import { blue, yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Grid } from "@material-ui/core";
import { color, display } from "@mui/system";
import v2 from '../Assets/v2.jpeg'
import '../PagesStyles/Servicing.css';
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => (
    {
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
))


const Servicing = () => {
    const classes = useStyles()

    const handleProduct = (e) => {
        history.push('/servicingBook/' + e.id)
    }



    const myVehicleList = [
        {
            id: 1,
            imagesrc: "v2",
            model: "CITY - 1 ELECTRIC SCOOTER",
            plateNumber: "MH 12 FP 9602",
            purchaseDate: "28/05/2021",
            status: "Up to Date",
            stage: "10",
            deliveryDate: "28/06/2021",
            exServicingDate: "08/09/2021",
            nextServicingDate: "28/11/2021"

        },
        {
            id: 2,
            imagesrc: "v2",
            model: "CITY - 1 ELECTRIC SCOOTER",
            plateNumber: "MH 12 SG 5488",
            purchaseDate: "08/09/2021",
            status: "Past Due",
            stage: "3",
            deliveryDate: "28/06/2021",
            exServicingDate: "08/09/2021",
            nextServicingDate: "28/11/2021"

        }

    ]

    const history = useHistory()

    const pastDueStyle = {
        color: 'red',
    }
    const upToDateStyle = {
        color: '#B2E424',
    }


    return (
        <div className="servicingScreen">


            <div className={classes.heading}>
                Servicing
            </div>
            <Grid container spacing={3} justifyContent="flex-end" className={classes.statusRow}>
                <Grid item xs={5} md={3} lg={3} xl={3} justifyContent="flex-end" >
                    <div className="statusRow">

                        Status
                    </div>
                </Grid>
                <Grid item xs={4} md={2} lg={2} xl={2} justifyContent="flex-end" >
                    <div className="statusRow">
                    </div>
                </Grid>

            </Grid>
            {/* <div className={classes.statusRow}>

            </div> */}
            <div className={classes.grids}>


                <Grid container spacing={3} justifyContent="space-evenly" className={classes.bookingrow}>
                    {myVehicleList.map(item => (
                        // <div className={classes.bookingrow}>

                        //     <br />
                        //     <br />
                        // <div>
                        <Grid container item xs={12} md={12} lg={12} xl={12} >

                            <Grid item spacing={3} key={item.plateNumber} xs={3} md={3} lg={3} xl={3} className={classes.image} >

                                <div className="image">

                                    <img src={v2} alt="image" height="200px" width="260px" />
                                </div>

                            </Grid>
                            <Grid item spacing={3} key={item.plateNumber} xs={5} md={4} lg={4} xl={4} className={classes.bookingrowInfo} >
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
                            <Grid item spacing={3} key={item.plateNumber} xs={4} md={3} lg={3} xl={3} className={classes.statusColumn} >
                                <div className="statusColumn">

                                    <div style={item.status == 'Past Due' ? pastDueStyle : upToDateStyle}>
                                        {item.status}
                                    </div>
                                    <div style={{ color: 'rgba(0,0,0,0.5)' }}>
                                        {item.status == 'Past Due' ? "Ex-servicing date:" : "Next servicing:"}
                                    </div>
                                    <div style={{ color: '#F49F20' }}>
                                        {item.status == 'Past Due' ? item.exServicingDate : item.nextServicingDate}
                                    </div>
                                </div>
                            </Grid>
                            <Grid item spacing={3} key={item.plateNumber} xs={4} md={2} lg={2} xl={2} className={classes.statusColumn} >
                                <div className="statusColumn">
                                    <div className="bookServicingButtonDiv" >
                                        <button onClick={() => handleProduct(item)}>BOOK </button>
                                    </div>

                                    {/* <div>
                                        {item.status}
                                    </div>
                                    <div>
                                        {item.status == 'Pending' ? item.stage : item.deliveryDate}
                                    </div> */}
                                </div>
                            </Grid>
                        </Grid>


                    ))}
                </Grid>


            </div>


        </div>
    );
}

export default Servicing;