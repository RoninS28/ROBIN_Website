import { Card, Grid } from '@material-ui/core'
import React from 'react'
import s2 from './images/s2.png'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


//Details table
    function createData(property, data) {
    return { property, data};
    }

  const rows = [
    createData('NAME', 'Siddhesh R. Ramane'),
    createData('ADDRESS', 'Sadashiv Apts,1145,shi, F.c.road,opp.police'),
    createData('CONTACT', '9359123910'),
    createData('MODEL', 'CITY - 1 ELECTRIC SCOOTER'),
    createData('VEHICLE NO.', ' MH 12 SP 5650'),
    createData('CHASSIS NO.', 'XXXXXXXXXXXXX'),
    createData('WARRANTY TILL', 'N.A.'),
    ];

//History Table
    function createHistory(no, date, service, cost) {
        return { no, date, service, cost};
      }
    const rowsHistory = [
        createHistory(1, '02/02/2021', 'Oil Change', '₹500',), 
        createHistory(2, '02/03/2021', 'Oil Change, Brakes, Headlights', '₹1500',), 
        createHistory(3, '02/04/2021', 'Oil Change, Brakes, Horns', '₹1200',), 
        createHistory(4, '02/05/2021', 'Oil Change, Wheel Rims', '₹700',), 
        createHistory(5, '02/06/2021', 'Oil Change, Cleaning', '₹1000',), 
        createHistory(6, '02/07/2021', 'Oil Change, Brakes, Headlights', '₹1500',), 
        createHistory(7, '02/08/2021', 'Oil Change, Headlights', '₹1000',), 
        createHistory(8, '02/09/2021', 'Oil Change, Brakes', '₹1000',), 
    ];    

//complaints
    const workerComplaints=[
        {
            id:1,
            type:'Personal',
            status:'Addressed',
        },
        {
            id:2,
            type:'Personal',
            status:'Pending',
        }
    ]
function CustomerDetails() {
    // const classes = useStyles();
    return (
            <div style={{padding:'1rem'}}> 
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Grid container   justifyContent="center" style={{position:'sticky', top:'5rem'}}>
                        <Card  elevation={3}>
                            <Grid item xs={8}>
                                <img src={s2} style={{width:400}}></img>
                            </Grid>
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
                <Grid item xs={8} >
                    <Grid>
                        <Card>
                            <Grid item xs={12} align='center'>
                                <Typography variant="h4" style={{ textShadow: "2px 2px #c4c4c4", paddingBottom:'20px', paddingTop:'20px', }}><b>HISTORY</b></Typography> 
                                <Typography variant="subtitle2"><hr /></Typography>
                            </Grid>
                            <Grid item xs={12}>     
                                <TableContainer >
                                    <Table sx={{ minWidth: 650 }} aria-label="History">
                                        <TableHead>
                                            <TableRow>
                                            <TableCell align="center"><b>SR. NO.</b></TableCell>
                                            <TableCell align="left"><b>DATE</b></TableCell>
                                            <TableCell align="left"><b>SERVICE</b></TableCell>
                                            <TableCell align="center"><b>COST</b></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rowsHistory.map((rowsHistory) => (
                                            <TableRow
                                                key={rowsHistory.no}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row" align="center">
                                                {rowsHistory.no}
                                                </TableCell>
                                                <TableCell align="left" >{rowsHistory.date}</TableCell>
                                                <TableCell align="left">{rowsHistory.service}</TableCell>
                                                <TableCell align="center">{rowsHistory.cost}</TableCell>
                                            </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>                               
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            {/* <div style={{marginTop:"4vh",marginBottom:"4vh"}}>
            <Container maxWidth="lg" >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <TableHead>
                    <TableRow>
                        <TableCell>Complaint Id</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">View</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {workerComplaints.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell align="center">{row.type}</TableCell>
                        <TableCell align="center">{row.status=='Addressed'?<span style={{color:'green'}}>Addressed</span>:<span style={{color:'red'}}>Pending</span>}</TableCell>
                        <TableCell align="center">
                        <Button variant="contained" color="primary">View</Button>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
            </div> */}
        </div>
    )
}

export default CustomerDetails
