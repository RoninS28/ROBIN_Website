import { blue, yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Grid } from "@material-ui/core";
import { color, display } from "@mui/system";
import v1 from '../Assets/v1.png'
import v2 from '../Assets/v2uncropped.jpeg'
import v3 from '../Assets/v3.jpeg'
import v4 from '../Assets/v4.png'
import v5 from '../Assets/v5.png'
import v6 from '../Assets/v6.png'
import v7 from '../Assets/v7.png'
import '../PagesStyles/Servicing.css';
import { useHistory } from "react-router";
import { useState, useEffect } from "react";
import axios from 'axios';
// import { Date } from '@date-io/date-fns'

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

const convertISOtoStringDate = (dateISO) => {
    const temp = new Date(dateISO)
    const stringDate = temp.getDate() + '/' + temp.getMonth() + '/' + temp.getFullYear()
    return stringDate

}

const getMyImage = (source) => {
    console.log(`SOURCE IS ${source}`)
    const x = source.replace('../Assets/', '')
    const img = x.substring(0, 2)
    switch (img) {
        case 'v2':
            return v2
        case 'v3':
            return v3
        case 'v4':
            return v4
        case 'v5':
            return v5
        case 'v6':
            return v6
        case 'v7':
            return v7


    }
}


const Servicing = () => {
    const classes = useStyles()

    const handleProduct = (e) => {
        console.log("e is ")
        console.log(e)
        history.push({ pathname: '/servicingBook/' + e.chassisNumber, state: { vehicle: e } })
    }

    const [MyOrders, setMyOrders] = useState([])

    const getMyOrders = () => {

        const tempOrders = []

        axios.get("/myBooking/myEVs").then((response) => {
            console.log(`RESPONSE IS ${response.data}`)

            if (response.data == "You must be logged in to view this page") {
                history.push('/login');
            }
            else {
                let myOrderArr = response.data

                myOrderArr.map(item => {
                    if (item.status == false) {
                        tempOrders.push(item)

                    }
                })

                console.log(tempOrders)
                setMyOrders(tempOrders)
                console.log(MyOrders)
            }
        })
    }

    useEffect(() => {

        getMyOrders()
        console.log('rerender')
    }, []);


    const myVehicleList = [
        {
            id: 1,
            imagesrc: "v2",
            model: "CITY - 1 ELECTRIC SCOOTER",
            vehicleNumber: "MH 12 FP 9602",
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
            vehicleNumber: "MH 12 SG 5488",
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


    return MyOrders ? (
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
                    {MyOrders.map(item => (
                        // <div className={classes.bookingrow}>

                        //     <br />
                        //     <br />
                        // <div>
                        <Grid container item xs={12} md={12} lg={12} xl={12} >

                            <Grid item spacing={3} key={item.vehicleNumber} xs={3} md={3} lg={3} xl={3} className={classes.image} >

                                <div className="image">

                                    <img src={getMyImage(item.image)} alt="image" height="200px" width="260px" />
                                </div>

                            </Grid>
                            <Grid item spacing={3} key={item.vehicleNumber} xs={5} md={4} lg={4} xl={4} className={classes.bookingrowInfo} >
                                <div className="bookingrowInfo">
                                    <div>
                                        {item.modelName}
                                    </div>
                                    <div>
                                        {item.vehicleNumber}
                                    </div>



                                </div>
                            </Grid>
                            <Grid item spacing={3} key={item.vehicleNumber} xs={4} md={3} lg={3} xl={3} className={classes.statusColumn} >
                                <div className="statusColumn">

                                    <div style={item.status == 'Past Due' ? pastDueStyle : upToDateStyle}>
                                        {item.status}
                                    </div>
                                    <div style={{ color: 'rgba(0,0,0,0.5)' }}>
                                        {item.status == 'Past Due' ? "Ex-servicing date:" : "Next servicing:"}
                                    </div>
                                    <div style={{ color: '#F49F20' }}>
                                        {item.status == 'Past Due' ? convertISOtoStringDate(item.exServicingDate) : convertISOtoStringDate(item.nextServicingDate)}
                                    </div>
                                </div>
                            </Grid>
                            <Grid item spacing={3} key={item.vehicleNumber} xs={4} md={2} lg={2} xl={2} className={classes.statusColumn} >
                                <div className="statusColumn">
                                    <div className="bookServicingButtonDiv" >
                                        <button onClick={() => handleProduct(item)}>VIEW</button>
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
    ) :
        <div>
            Loading
        </div>
        ;
}

export default Servicing;