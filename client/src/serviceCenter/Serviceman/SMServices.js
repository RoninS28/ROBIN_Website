import { Button, Card, Checkbox, Grid } from '@material-ui/core'
import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

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

//Services table
function createServiceData(no, service, cost, box) {
    return {no, service, cost, box};
}

const rowsService = [
    createServiceData(1, 'Oil Change', '₹ 500',
        <Checkbox></Checkbox>
    ),
     createServiceData(2, 'Battery', '₹ 500',
        <Checkbox></Checkbox>
    ),
    createServiceData(3,'Brakes', '₹ 500',
      <Checkbox></Checkbox>
    ),
    createServiceData(4, 'Headlights', '₹ 500',
        <Checkbox></Checkbox>
    ),
    createServiceData(5, 'Horn', '₹ 500',
        <Checkbox></Checkbox>
    ),
    createServiceData(6, 'Side Mirrors', '₹ 500',
        <Checkbox></Checkbox>
    ),
    createServiceData(7, 'Wheel Rim', '₹ 500',
        <Checkbox></Checkbox>
    ),
    createServiceData(8, 'E-Bike Throttle', '₹ 500',
        <Checkbox></Checkbox>
    ),
    createServiceData(9, 'Side Mirrors', '₹ 500',
        <Checkbox></Checkbox>
    ),
    createServiceData(10, 'Motor Power Cable', '₹ 500',
        <Checkbox></Checkbox>
    ),
]

//Pop-up
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function SMServices() {
    const [open, setOpen] = React.useState(false);

     const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div style={{padding:'1rem'}} sx={{ flexGrow: 1 }}> 
        <Grid container spacing={2}
        justifyContent="center"
        >
            <Grid item xs={12}>
                <Grid >
                    <Card elevation={3} >
                        <Grid item xs={12}>
                            <TableContainer >
                                <Table  aria-label="Details">
                                    <TableBody>
                                        {rows.map((row) => (
                                            <TableRow
                                            key={row.property}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" align="center">
                                                {row.property}
                                                </TableCell>
                                                <TableCell align="center">{row.data}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>                    
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid>
                    <Card elevation={3} >
                        <Grid item xs={12} >
                            <TableContainer >
                                <Table  aria-label="Details">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center"><b>SR. NO.</b></TableCell>
                                        <TableCell align="center"><b>SERVICE</b></TableCell>
                                        <TableCell align="center"><b>COST</b></TableCell>
                                        <TableCell align="center"><b><Checkbox></Checkbox></b></TableCell>
                                    </TableRow>
                                </TableHead>
                                    <TableBody>
                                        {rowsService.map((rowsService) => (
                                            <TableRow
                                            key={rowsService.service}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" align="center">
                                                {rowsService.no}
                                                </TableCell>
                                                <TableCell align="center">{rowsService.service}</TableCell>
                                                <TableCell align="center">{rowsService.cost}</TableCell>
                                                <TableCell align="center">{rowsService.box}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>                    
                        </Grid>
                        
                    </Card>
                </Grid>
            </Grid>
            <Grid item xs={12} container justifyContent="center">
                <Button variant='contained' color='primary' onClick={handleClickOpen} 
                    style={{maxWidth: '150px', maxHeight: '50px', minWidth: '150px', minHeight: '50px', marginTop:'10px',}}
                >
                <Typography variant="h6"><b>CONFIRM</b></Typography></Button>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Proceed to Generate Receipt?"}</DialogTitle>
                    <DialogActions>
                        <Link style={{ textDecoration: 'none' }} to="/Serviceman/billing"><Button variant="contained" color="primary">YES</Button></Link>
                        <Button onClick={handleClose}>NO</Button>
                    </DialogActions>
                </Dialog>
            </Grid>
        </Grid>    
        </div>
    )
}

export default SMServices