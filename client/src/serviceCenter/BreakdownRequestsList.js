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
import { Checkbox } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import "./BreakdownRequestsList.css"

const label = { inputProps: { 'aria-label': 'Select' } };

function createData(box, name, address, contact, status, details) {
    return {box, name, address, contact, status, details};
  }

const rows = [
    createData(<Checkbox {...label}/>, 'Siddhesh R Ramane', 'Kothrud', 9359123910, 'PENDING',
        <Link style={{ textDecoration: 'none' }} to="/breakdown-detail"><Button variant="contained" color="primary">VIEW</Button></Link>),
    createData(<Checkbox {...label}/>,  'Kartik S Rane', 'Kothrud', 9359123910, 'PENDING',
        <Link style={{ textDecoration: 'none' }} to="/breakdown-detail"><Button variant="contained" color="primary">VIEW</Button></Link>),
    createData(<Checkbox {...label}/>,  'Amey S Marathe', 'Kothrud', 9359123910, 'ACCEPTED',
        <Link style={{ textDecoration: 'none' }} to="/breakdown-detail"><Button variant="contained" color="primary">VIEW</Button></Link>),
    createData(<Checkbox {...label}/>,  'Neha M Patil', 'Kothrud', 9359123910, 'PENDING',
        <Link style={{ textDecoration: 'none' }} to="/breakdown-detail"><Button variant="contained" color="primary">VIEW</Button></Link>),
    createData(<Checkbox {...label}/>,  'Nutan D. Deshmukh', 'Kothrud', 9359123910, 'ACCEPTED', 
        <Link style={{ textDecoration: 'none' }} to="/breakdown-detail"><Button variant="contained" color="primary">VIEW</Button></Link>),
];


function BreakdownRequestsList() {
    const [status, setStatus] = React.useState('');

    const handleChange = (event) => {
      setStatus(event.target.value);
    };
    return (
        <div align="center" style={{padding:"1rem"}}>
            <Typography variant="h4" style={{ textShadow: "2px 2px #c4c4c4", paddingBottom:'20px', paddingTop:'20px'}}><b>BREAKDOWN REQUESTS</b></Typography> 
            <div className="select"  align="left">
                <Checkbox {...label}/>          
                <label>SELECT ALL</label>         
            </div> 
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="Requests List">
                    <TableHead>
                        <TableRow>
                        <TableCell align="left"><b>SELECT</b></TableCell>
                        {/* <TableCell align="center"><b>SR. NO.</b></TableCell> */}
                        <TableCell align="left"><b>NAME</b></TableCell>
                        <TableCell align="left"><b>ADDRESS</b></TableCell>
                        <TableCell align="center"><b>CONTACT</b></TableCell>
                        <TableCell align="center"><b>STATUS</b></TableCell>
                        <TableCell align="center"><b>DETAILS</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                             <TableCell align="left">
                            {row.box}
                            </TableCell>
                            {/* <TableCell align="center">{row.no}</TableCell> */}
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.address}</TableCell>
                            <TableCell align="center">{row.contact}</TableCell>
                            <TableCell align="center">{row.status}</TableCell>
                            <TableCell align="center">{row.details}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>      
            <div align="center" className="update" style={{padding:"1rem"}}>
            <Button variant="contained" color="primary" style={{marginLeft:'20px'}}>ACCEPT SELECTED REQUESTS</Button>
            </div>              
        </div>  
    )
}

export default BreakdownRequestsList
