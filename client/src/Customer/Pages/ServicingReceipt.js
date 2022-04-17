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
import '../PagesStyles/ServicingReceipt.css'
import Select from "react-select";
import { useState } from "react";
import { useHistory } from "react-router";
import { useEffect } from "react";
import axios from 'axios'



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

const convertISOtoStringDate = (dateISO) => {
    const temp = new Date(dateISO)
    const stringDate = temp.getDate() + '/' + temp.getMonth() + '/' + temp.getFullYear()
    return stringDate

}

const ServicingReceipt = (props) => {
    const id = props.match.params.id;
    const history = useHistory()
    const [service, setService] = useState()
    // const [vehicle, setVehicle] = useState()
    // const [servStatus, setServStatus] = useState()
    // const [servicingInfo, setServicingInfo] = useState()
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



    useEffect(() => {
        getService(props.location.state.service)
        // setVehicle("props.location.state.vehicle")

        // console.log(props.match.params.chassisNumber)
    }, []);

    const convertISOtoStringDate = (dateISO) => {
        const temp = new Date(dateISO)
        const stringDate = temp.getDate() + '/' + temp.getMonth() + '/' + temp.getFullYear()
        return stringDate

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

    const viewReceipt = (service) => {
        history.push({ pathname: "servicing/viewReceipt/" + service.serviceID, state: { service: service } })

    }


    // !============================================================================================================


    return service ? (


        <div className="servicingReceiptScreen">

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


            {(vehicle.servicing.length > 0) ? (<TableContainer >
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

                        {servicingInfo.map((row) => (
                            <TableRow
                                key={row.serviceID}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center" className="servicingdata">
                                    {row.serviceID}
                                </TableCell>
                                <TableCell align="center" className="servicingdata">{convertISOtoStringDate(row.dateOfService)}</TableCell>
                                <TableCell align="center" className="servicingdata">{row.serviceCentre}</TableCell>
                                <TableCell align="center" className="servicingdata">{row.personInCharge}</TableCell>
                                <TableCell align="center" className="servicingdata" onClick={() => { viewReceipt(row) }}> <a href="#">Receipt</a></TableCell>
                                <TableCell align="center" className="servicingdata">₹ {row.totalAmount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>) : (<div id="noDataOfServicing" ><center>-- No data of servicing found --</center>  </div>)}


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
                        <button onClick={() => handleClick(model)} disabled={servStatus == "NOTDUEFFFFF"} style={{ color: servStatus == "DUE" ? '#B2E424' : 'grey' }} >BOOK APPOINTMENT</button>
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

export default ServicingReceipt;