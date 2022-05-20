import React from 'react'
import PrintIcon from '@material-ui/icons/Print';
import { Grid, IconButton } from '@mui/material';
// import { SaveAlt } from '@material-ui/icons';
import SaveAltIcon from '@material-ui/icons/SaveAlt'
import {Card} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { withStyles } from "@material-ui/core/styles";

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
    return { property, data};
}



// for the 1st grid
const rows = [
    createData('Order ID','C2K5464'),
    createData('Factory', 'Noga Factory'),
    createData('Date', '10 Oct 2021'),
    createData('Status', 'Pending'),
];

//Billing Table
const TAX_RATE = 0.15;

function ccyFormat(num) {
  return `${num.toFixed(2)}` ;
}

function createRowService(id, name, quantity, pricePerUnit, price) {
  return { id, name, quantity, pricePerUnit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rowService = [
  createRowService(1, 'PU Leather Seat', 10, 3200, 32000),
  createRowService(2, 'PU Leather Seat', 100, 3200, 320000),
  createRowService(3, 'PU Leather Seat', 10, 3200, 32000),
];

const invoiceSubtotal = subtotal(rowService);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const AccessoryReportDetail = (props) => {

    const {classes, theme} = props;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{padding:'1rem'}}>

            <Grid container 
            justifyContent="center">
                <Grid container item xs={12}
                    justifyContent="right">
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
                                <Table  aria-label="Details">
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                            key={row.property}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" align="center"><b>
                                                {row.property} </b>
                                                </TableCell>
                                                <TableCell align="center">{row.data}</TableCell>
                                            </TableRow>
                                        ))}
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
                                {rowService.map((rowService) => (
                                    <TableRow key={rowService.id}>
                                    <TableCell>{rowService.name}</TableCell>
                                    <TableCell align="right">{rowService.quantity}</TableCell>
                                    <TableCell align="right">{rowService.pricePerUnit}</TableCell>
                                    <TableCell align="right">{ccyFormat(rowService.price)}</TableCell>
                                    </TableRow>
                                ))}

                                <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={2}><b>Subtotal</b></TableCell>
                                    <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><b>Tax</b></TableCell>
                                    <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                                    <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell colSpan={2}><b>Total</b></TableCell>
                                    <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
                                </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>            
                        </Card>
                    </Grid>
                </Grid>
            </Grid>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose}>Disagree</Button>
                <Button onClick={handleClose} autoFocus>
                    Agree
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(AccessoryReportDetail);
