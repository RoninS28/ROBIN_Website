import React from 'react';
import PrintIcon from '@material-ui/icons/Print';
import { Grid, IconButton } from '@mui/material';
// import { SaveAlt } from '@material-ui/icons';
import SaveAltIcon from '@material-ui/icons/SaveAlt'
import { Typography } from "@material-ui/core";
import {Card} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'

//Details table
function createData(property, data) {
    return { property, data};
    }

  const rows = [
    createData('DATE', '01/01/21'),
    createData('ID','C2K5464'),
    createData('NAME', 'Siddhesh R. Ramane'),
    createData('MODEL', 'CITY - 1 ELECTRIC SCOOTER'),
    createData('VEHICLE NO.', ' MH 12 SP 5650'),
    ];

//Billing Table
const TAX_RATE = 0.15;

function ccyFormat(num) {
  return `${num.toFixed(2)}` ;
}

function createRowService(date, by, services, price) {
  return { date, by, services, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rowService = [
  createRowService('08/08/2021', 'Pranav Shinde', 'Oil Change', 500.00),
  createRowService('', '', 'Wheel alignment', 500.00),
  createRowService('', '', 'Wash', 200.00),
];

const invoiceSubtotal = subtotal(rowService);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;


function Billing() {
    return (
        <div style={{padding:'1rem'}}>
            <Grid container 
            justifyContent="center"
            >
                <Grid container item xs={12}
                    justifyContent="right"
                    marginBottom='20px'
                >
                   <Grid item >
                        <IconButton>
                            <SaveAltIcon></SaveAltIcon>
                        </IconButton>
                    </Grid>
                    {/* <Grid item>
                        <IconButton>
                            <PrintIcon></PrintIcon>
                        </IconButton>
                    </Grid> */}
                </Grid>
                <Grid container
                justifyContent='center'
                spacing='1rem'
                alignItems="center"          
                
                >
                    <Grid item>
                            <Typography variant="h4" ><b>SALES INVOICE</b></Typography>  
                    </Grid>
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
                            <Table aria-label="spanning table">
                                <TableHead>
                                <TableRow>
                                    <TableCell align="center" colSpan={3}><b>
                                    DETAILS</b>
                                    </TableCell> 
                                    <TableCell align="right"><b>PRICE (₹)</b></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell><b>DATE</b></TableCell>
                                    <TableCell align="right"><b>ISPECTED BY</b></TableCell>
                                    <TableCell align="right"><b>SERVICES</b></TableCell>
                                    <TableCell align="right"><b>SUM</b></TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rowService.map((rowService) => (
                                    <TableRow key={rowService.date}>
                                    <TableCell>{rowService.date}</TableCell>
                                    <TableCell align="right">{rowService.by}</TableCell>
                                    <TableCell align="right">{rowService.services}</TableCell>
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
                <Grid item xs={12} align="center">
                <Button variant="contained" color="primary" 
                        style={{maxWidth: '150px', maxHeight: '50px', minWidth: '150px', minHeight: '50px', marginTop:'10px'}}
                        >
                <Typography variant="h6"><b>OK</b></Typography>
              </Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Billing
