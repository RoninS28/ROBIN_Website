import React from 'react'
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Typography } from "@material-ui/core";

import "./BreakdownRequestsList.css"

function createData(no, name, address, contact, details) {
    return { no, name, address, contact, details};
  }

const rows = [
    createData(1, 'Siddhesh R Ramane', 'Kothrud', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/breakdown-detail"><Button variant="contained" color="primary">VIEW</Button></Link>),
    createData(2, 'Kartik S Rane', 'Kothrud', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/breakdown-detail"><Button variant="contained" color="primary">VIEW</Button></Link>),
    createData(3, 'Amey S Marathe', 'Kothrud', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/breakdown-detail"><Button variant="contained" color="primary">VIEW</Button></Link>),
    createData(4, 'Neha M Patil', 'Kothrud', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/breakdown-detail"><Button variant="contained" color="primary">VIEW</Button></Link>),
    createData(5, 'Nutan D. Deshmukh', 'Kothrud', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/breakdown-detail"><Button variant="contained" color="primary">VIEW</Button></Link>),
];

function BreakdownRequestsList() {
    return (
        <div align="center" style={{padding:"1rem"}}>
            <Typography variant="h4" style={{ textShadow: "2px 2px #c4c4c4", paddingBottom:'20px', paddingTop:'20px'}}><b>BREAKDOWN REQUESTS</b></Typography>  
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="Requests List">
                    <TableHead>
                        <TableRow>
                        <TableCell align="center"><b>SR. NO.</b></TableCell>
                        <TableCell align="left"><b>NAME</b></TableCell>
                        <TableCell align="left"><b>ADDRESS</b></TableCell>
                        <TableCell align="center"><b>CONTACT</b></TableCell>
                        <TableCell align="center"><b>DETAILS</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align="center">
                            {row.no}
                            </TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.address}</TableCell>
                            <TableCell align="center">{row.contact}</TableCell>
                            <TableCell align="center">{row.details}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>                    
        </div>  
    )
}

export default BreakdownRequestsList
