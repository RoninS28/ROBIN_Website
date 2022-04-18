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
// import '../PagesStyles/ServicingReceipt.css'
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

    const handleGoBack = (e) => {
        history.goBack()
    }



    useEffect(() => {
        setService(props.location.state.service)
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
            id: 'workid',
            label: 'Work ID'
        },
        {
            id: 'workname',
            label: 'Work Name'
        },
        {
            id: 'description',
            label: 'Description'
        },
        {
            id: 'quantity',
            label: 'Quantity'
        },
        {
            id: 'totalamt',
            label: 'Total Amount'
        }
    ]

    const viewReceipt = (service) => {
        history.push({ pathname: "servicing/viewReceipt/" + service.serviceID, state: { service: service } })

    }


    // !============================================================================================================


    return service ? (


        <div className="servicingReceiptScreen">
            <div style={{ fontSize: '30px', fontWeight: '600' }}>

                <center>

                    <h2>Receipt ID #{service.serviceID}</h2>
                    <h2>Date of Service: {convertISOtoStringDate(service.dateOfService)}</h2>
                </center>
            </div>



            {(service.workDone.length > 0) ? (<TableContainer >
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

                        {service.workDone.map((row) => (
                            <TableRow
                                key={row.workID}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="center" className="servicingdata">
                                    {row.workID}
                                </TableCell>
                                <TableCell align="center" className="servicingdata">{row.workName}</TableCell>
                                <TableCell align="center" className="servicingdata">{row.workDesc}</TableCell>
                                <TableCell align="center" className="servicingdata">{row.quantity}</TableCell>
                                <TableCell align="center" className="servicingdata">₹ {row.totalAmount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>) : (<div id="noDataOfServicing" ><center>-- No data of servicing found --</center>  </div>)}



            <br /><br />
            <div style={{ fontSize: '25px', fontWeight: '600' }}>
                <center>
                    Total Amount: ₹ {service.totalAmount}
                </center>

            </div>
            <br /><br /><br /><br />

            <div style={{ fontSize: '22px', fontWeight: '600' }} onClick={handleGoBack}>
                <center>

                    Go Back to Servicing
                </center>
            </div>
        </div>
    ) : (<div> Loading</div>);
}

export default ServicingReceipt;