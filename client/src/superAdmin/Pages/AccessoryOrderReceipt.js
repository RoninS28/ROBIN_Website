import React, { useEffect, useState } from 'react'
import PrintIcon from '@material-ui/icons/Print';
import { Grid, IconButton } from '@mui/material';
// import { SaveAlt } from '@material-ui/icons';
import SaveAltIcon from '@material-ui/icons/SaveAlt'
import { Button, Typography } from "@material-ui/core";
import { Card } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { withStyles } from "@material-ui/core/styles";
import { useLocation } from 'react-router';

const styles = theme => ({
    btnContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        marginLeft: "1rem",
    }
});


//Details table
function createData(property, data) {
    return { property, data };
}



// for the 1st grid
const rows = [
    createData('Order ID', 'C2K5464'),
    createData('Factory', 'Noga Factory'),
    createData('Date', '10 Oct 2021'),
    createData('Status', 'Pending'),
];

//Billing Table
const TAX_RATE = 0.15;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}

function createRowService(id, name, quantity, pricePerUnit, price) {
    return { id, name, quantity, pricePerUnit, price };
}

function subtotal(items) {
    console.log("subtotal: ", items);
    return items.map((item) => calculateTotalPrice(item.quantity, item.price_per_item)).reduce((sum, i) => sum + i, 0);
}

function calculateTotalPrice(quantity, pricePerUnit) {
    console.log("calculateTotalPrice: ", quantity, pricePerUnit);
    return parseFloat(quantity) * parseFloat(pricePerUnit);
}

const AccessoryOrderReceipt = (props) => {

    const { classes, theme } = props;
    const location = useLocation();

    const [arrList, setArrList] = useState('');
    const [entityId, setEntityId] = useState('');
    const [entityData, setEntityData] = useState({products: []});
    
    const getFactoryName = async (entityId) => {
        const res2 = await fetch(`/factories/${entityId}`);
        const data2 = await res2.json();
        return data2.name;
    }

    const getOutletName = async (entityId) => {
        const res2 = await fetch(`/outlets/${entityId}`);
        const data2 = await res2.json();
        return data2.name;
    }

    const getServiceCenterName = async (entityId) => {
        const res2 = await fetch(`/service-centers/${entityId}`);
        const data2 = await res2.json();
        return data2.name;
    }

    const getStockRequest = async (entityId) => {
        console.log("getStockRequest: ", entityId);
        const res = await fetch(`/stock-requests/${entityId}`);
        const data = await res.json();

        let promises = []

        switch(data.sourceType) {
            case "factory":
                promises.push(getFactoryName(data.sourceId));
                break;
            case "outlet":
                promises.push(getOutletName(data.sourceId));
                break;
            case "service-center":
                promises.push(getServiceCenterName(data.sourceId));
                break;
            default:
                break;
        }
        let result = await Promise.all(promises);
        console.log("source type name: ", result);
        data['sourceName'] = result[0];
        setEntityData(data);
    }

    useEffect(() => {
        console.log("use effect called!!");
        getStockRequest(location.pathname.split('/')[2]);
    }, []);

    const approveStockRequest = async () => {

        const entityId = location.pathname.split('/')[2];
        const requestOptions = {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'approved' })
        };
        const res = await fetch(`/stock-requests/${entityId}`, requestOptions)
        const data = await res.json();
        console.log(data);
    }

    const denyStockRequest = async () => {

        const entityId = location.pathname.split('/')[2];
        const requestOptions = {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: 'denied' })
        };
        const res = await fetch(`/stock-requests/${entityId}`, requestOptions)
        const data = await res.json();
        console.log(data);
    }


    return (
        <div>
            <Grid container
                justifyContent="center">
                <Grid container item xs={12}
                    justifyContent="right" style={{ padding: "0.6rem" }}>
                    <Grid item>
                        <IconButton>
                            <SaveAltIcon></SaveAltIcon>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <PrintIcon></PrintIcon>
                        </IconButton>
                    </Grid>
                </Grid>

                <Grid container
                    justifyContent='center'
                    spacing='1rem'
                    alignItems="center"
                    xs={10}>
                    <Grid item xs={12}>
                        <Card elevation={3} >
                            <TableContainer >
                                <Table aria-label="Details">
                                    <TableBody>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align="center"><b>
                                                ORDER ID </b>
                                            </TableCell>
                                            <TableCell align="center">{entityData._id}</TableCell>
                                        </TableRow>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align="center"><b>
                                                SOURCE TYPE </b>
                                            </TableCell>
                                            <TableCell align="center">{entityData.sourceType}</TableCell>
                                        </TableRow>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align="center"><b>
                                                SOURCE NAME </b>
                                            </TableCell>
                                            <TableCell align="center">{entityData.sourceName}</TableCell>
                                        </TableRow>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align="center"><b>
                                                STATUS </b>
                                            </TableCell>
                                            <TableCell align="center">{entityData.status}</TableCell>
                                        </TableRow>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" align="center"><b>
                                                DATE OF ORDER </b>
                                            </TableCell>
                                            <TableCell align="center">{entityData.date}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <Card elevation={3} >
                            <TableContainer>
                                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center" colSpan={3}><b>
                                                ORDER DETAILS</b>
                                            </TableCell>
                                            <TableCell align="right"><b>PRICE (₹)</b></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell><b>NAME</b></TableCell>
                                            <TableCell align="right"><b>QUANTITY</b></TableCell>
                                            <TableCell align="right"><b>PRICE per ITEM</b></TableCell>
                                            <TableCell align="right"><b>SUM</b></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {entityData.products.map((rowService) => (
                                            <TableRow key={rowService._id}>
                                                <TableCell>{rowService.name}</TableCell>
                                                <TableCell align="right">{rowService.quantity}</TableCell>
                                                <TableCell align="right">{rowService.price_per_item}</TableCell>
                                                <TableCell align="right">{ccyFormat(calculateTotalPrice(rowService.quantity, rowService.price_per_item))}</TableCell>
                                            </TableRow>
                                        ))}

                                        <TableRow>
                                            <TableCell rowSpan={3} />
                                            <TableCell colSpan={2}><b>Subtotal</b></TableCell>
                                            <TableCell align="right">{ccyFormat(subtotal(entityData.products))}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <div className={classes.btnContainer}>
                <Button className={classes.btn} variant="contained" style={{ marginTop: "3rem", marginBottom: "1rem" }} color="secondary" onClick={denyStockRequest}>Deny</Button>
                <Button className={classes.btn} variant="contained" style={{ marginTop: "3rem", marginBottom: "1rem" }} color="primary" onClick={approveStockRequest}>Approve</Button>
            </div>
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(AccessoryOrderReceipt);
