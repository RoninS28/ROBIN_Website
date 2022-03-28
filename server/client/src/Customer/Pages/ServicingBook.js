import { blue, yellow } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { color, display, textAlign } from "@mui/system";
import v1 from '../Assets/v1.png'
import v2 from '../Assets/v2uncropped.jpeg'
import v3 from '../Assets/v3.jpeg'
import v4 from '../Assets/v4.png'
import v5 from '../Assets/v5.png'
import v6 from '../Assets/v6.png'
import v7 from '../Assets/v7.png'
import '../PagesStyles/ServicingBook.css'
import Select from "react-select";
import { useState } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react";



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


const ServicingBook = (props) => {
    const id = props.match.params.id;
    const history = useHistory()
    const [vehicle, setVehicle] = useState()
    const [servStatus, setServStatus] = useState()
    // const model = smodelList.find(item => item.id == id)

    const pastDueStyle = {
        color: 'red',
    }
    const upToDateStyle = {
        color: '#B2E424',
    }

    const enabledStyle = {
        color: '#B2E424',
        border: '4px solid #B2E424',
    }
    const disabledStyle = {
        color: 'grey',
        // border: '4px solid grey',
        // backgroundColor: 'white',
        // borderRadius: '28px',
        // width: 'max-content',
        // padding: ' 5px',
        // paddingLeft: '20px',
        // paddingRight: '20px',
        /* padding-left: 18px; */
        border: '4px solid grey',

    }

    const handleClick = (e) => {
        history.push('/servicingConfirm/' + e.id)
    }

    // const getServicingInfo = () => {
    //     axios.get('/servicing/')
    // }
    const checkservStatus = () => {
        setVehicle(props.location.state.vehicle)
        console.log(`vehicle info is ${props.location.state.vehicle.nextServicingDate}`)
        const servDate = new Date(props.location.state.vehicle.nextServicingDate)
        const today = new Date()
        if (servDate > today) { // servicing is in the future
            setServStatus('NOTDUE')
        }
        else {
            setServStatus('DUE')
        }
    }

    useEffect(() => {
        setVehicle("props.location.state.vehicle")
        setVehicle(props.location.state.vehicle)
        checkservStatus()
        // getServicingInfo()
        console.log(vehicle)
        // console.log(props.match.params.chassisNumber)
    }, []);

    const convertISOtoStringDate = (dateISO) => {
        const temp = new Date(dateISO)
        const stringDate = temp.getDate() + '/' + temp.getMonth() + '/' + temp.getFullYear()
        return stringDate

    }


    const Timeslotoptions = [
        { label: "6am-12pm", value: "1" },
        { label: "12pm-8pm", value: "2" },
        { label: "8pm-6am", value: "3" },
    ];

    const [TimeslotValue, setTimeslotValue] = useState('');

    const TimeslotComponent = () => <Select onChange={(e) => { setTimeslotValue(e.value) }} options={Timeslotoptions} value={Timeslotoptions.filter(function (option) {
        return option.value === TimeslotValue;
    })} />;

    const myVehicleList = [
        {
            id: 'D6FB6873C4.04D',
            imagesrc: v2,
            model: "CITY - 1 ELECTRIC SCOOTER",
            plateNumber: "MH 12 FP 9602",
            purchaseDate: "28/05/2021",
            status: "Up to Date",
            stage: "10",
            deliveryDate: "28/06/2021",
            exServicingDate: "08/09/2021",
            nextServicingDate: "28/11/2021",
            ownerName: "Dhananjay Mahajan ",
            chasis: "MA6MFBCIBBT"

        },
        {
            id: '8D7320C1AC.004',
            imagesrc: v2,
            model: "CITY - 1 ELECTRIC SCOOTER",
            plateNumber: "MH 12 SG 5488",
            purchaseDate: "08/09/2021",
            status: "Pending",
            stage: "3",
            deliveryDate: "28/06/2021",
            exServicingDate: "08/09/2021",
            nextServicingDate: "28/11/2021",
            ownerName: "Dhananjay Mahajan ",
            chasis: "MA6MFBCIBBT"

        }

    ]
    function createData(servicingNo, servicingDate, centre, inspectedBy, details, total) {
        return { servicingNo, servicingDate, centre, inspectedBy, details, total };
    }

    const columns = [
        {
            id: 'servicingNo',
            label: 'Servicing No'
        },
        {
            id: 'servicingDate',
            label: 'Servicing Date'
        },
        {
            id: 'centre',
            label: 'Centre'
        },
        {
            id: 'inspectedBy',
            label: 'Inspected By'
        },
        {
            id: 'details',
            label: 'Details'
        },
        {
            id: 'total',
            label: 'Total'
        },
    ]

    const rows = [
        createData('1', "08/08/2021", "KTHRUD", "Pranav Shinde", "Oil Change\nWheel alignment\n Wash", "50"),
        createData('2', "08/09/2021", "KTHRUD", "Mohan Wagh", "Oil Change\nWheel alignment\n Wash", "50"),
        createData('3', "08/10/2021", "KTHRUD", "Rohit Dhule", "Oil Change\nWheel alignment\n Wash", "50"),
        createData('4', "08/11/2021", "KTHRUD", "Pranav Shinde", "Oil Change\nWheel alignment\n Wash", "50"),

    ];
    // !============================================================================================================
    const model = myVehicleList.find(item => item.id == id)


    return vehicle ? (


        <div className="servicingBookScreen">

            <Grid container style={{ marginTop: '50px' }}>
                <Grid item spacing={3} xs={12} md={5} lg={5} xl={5} >
                    <div className="image">
                        <img src={getMyImage(vehicle.image)} alt="image" width="350" height="300" />
                    </div>
                </Grid>
                <Grid item spacing={3} xs={12} md={7} lg={7} xl={7}>

                    <div className="allDetails">

                        <div className="allDetailsText">

                            Model: {vehicle.modelName}
                        </div>
                        <div className="allDetailsText">

                            Vehicle No: {vehicle.vehicleNumber}
                        </div>
                        <div className="allDetailsText">

                            Chassis: {vehicle.chassisNumber}
                        </div>
                    </div>
                </Grid>

            </Grid>

            {/* ! ========================================================================================== */}
            {/* <div className="formFilling" >

                <Grid container className="infoGrid" spacing={8}>
                    <Grid item xs={12} md={6} lg={6} xl={6} style={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }} >
                        <div style={{ marginRight: '20px' }}>

                            Select Appointment Date
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xl={6}>
                        <div>

                            <input
                                type="date"
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                placeholder=""
                                style={{ width: '300px' }}
                            />
                        </div>
                    </Grid>
                </Grid>

                <Grid container className="infoGrid" spacing={8}>
                    <Grid item xs={12} md={6} lg={6} xl={6} style={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }} >
                        <div style={{ marginRight: '20px' }}>

                            Select Preferred Time Slot
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xl={6}>
                        <div>

                            <div className="w-full self-center" style={{ width: '300px' }}>
                                <TimeslotComponent placeholder="Select Time Slot" />
                            </div>

                        </div>
                    </Grid>
                </Grid>
                <Grid container className="infoGrid" spacing={8}>
                    <Grid item xs={12} md={6} lg={6} xl={6} style={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }} >
                        <div style={{ marginRight: '20px' }}>

                            Pickup/Drop
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xl={6}>
                        <div>

                            <div className="w-full self-center" style={{ width: '300px' }}>
                                <TimeslotComponent placeholder="Select Time Slot" />
                            </div>

                        </div>
                    </Grid>
                </Grid>
                <Grid container className="infoGrid" spacing={8}>
                    <Grid item xs={12} md={6} lg={6} xl={6} style={{ display: 'flex', alignItems: "start", justifyContent: 'flex-end' }} >
                        <div style={{ marginRight: '20px' }}>

                            Personal Notes
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} xl={6}>
                        <div>

                            <textarea name="" id="" cols="30" rows="5" style={{ border: '1px solid rgba(0,0,0,0.3)' }}></textarea>

                        </div>
                    </Grid>
                </Grid>
            </div> */}

            {/* ! ========================================================================================== */}
            {vehicle.servicing.length > 0 ? (<TableContainer >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align='center'
                                    style={{ minWidth: '100px' }}
                                    className="servicingtable"
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.servicingNo}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center" className="servicingdata">
                                    {row.servicingNo}
                                </TableCell>
                                <TableCell align="center" className="servicingdata">{row.servicingDate}</TableCell>
                                <TableCell align="center" className="servicingdata">{row.centre}</TableCell>
                                <TableCell align="center" className="servicingdata">{row.inspectedBy}</TableCell>
                                <TableCell align="center" className="servicingdata"><a href="#">Receipt</a></TableCell>
                                <TableCell align="center" className="servicingdata">{row.total}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>) : (<div style={{ fontSize: '35px' }}><center>No data of servicing</center>  </div>)}


            <div className="furtherAction">
                <div className="text" style={{ marginBottom: '20px' }}>
                    Next Servicing:
                </div>

                <div className="date" style={servStatus == "DUE" ? pastDueStyle : upToDateStyle}>
                    {model.exServicingDate}
                </div>

                <div className="status" style={servStatus == "DUE" ? pastDueStyle : upToDateStyle}>
                    [{servStatus == "DUE" ? "Servicing is Due" : "Up To Date"}]
                </div>
                <div className="statusColumn">
                    <div className="bookServicingButtonDiv" style={servStatus == "DUE" ? enabledStyle : disabledStyle}>
                        <button onClick={() => handleClick(model)} disabled={servStatus == "NOTDUE"} style={{ color: servStatus == "DUE" ? '#B2E424' : 'grey' }} >BOOK APPOINTMENT</button>
                    </div>

                    {/* <div>
                                        {item.status}
                                    </div>
                                    <div>
                                        {item.status == 'Pending' ? item.stage : item.deliveryDate}
                                    </div> */}
                </div>

            </div>
            <br /><br />
        </div>
    ) : (<div> Loading</div>);
}

export default ServicingBook;