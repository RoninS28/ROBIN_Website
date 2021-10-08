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

function createData(no, name, address, contact, details, service) {
    return { no, name, address, contact, details, service};
  }

  const rows = [
    createData(1, 'Siddhesh R Ramane', 'Sadashiv Apts,1145,shi, F.c.road,opp.police', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/customer-details"><Button variant="contained" color="primary">VIEW</Button></Link>,
        <Link style={{ textDecoration: 'none' }} to="/servicing"><Button variant="contained" color="primary">PROCEED</Button></Link>),
    createData(2, 'Kartik S Rane', 'Jabde Bungalow, Chatunsigi Temple', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/customer-details"><Button variant="contained" color="primary">VIEW</Button></Link>,
        <Link style={{ textDecoration: 'none' }} to="/servicing"><Button variant="contained" color="primary">PROCEED</Button></Link>),
    createData(3, 'Amey S Marathe', 'Aurora Towers, Camp', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/customer-details"><Button variant="contained" color="primary">VIEW</Button></Link>,
        <Link style={{ textDecoration: 'none' }} to="/servicing"><Button variant="contained" color="primary">PROCEED</Button></Link>),
    createData(4, 'Neha M Patil', '156, Bhelkenagar, Kothrud', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/customer-details"><Button variant="contained" color="primary">VIEW</Button></Link>,
        <Link style={{ textDecoration: 'none' }} to="/servicing"><Button variant="contained" color="primary">PROCEED</Button></Link>),
    createData(5, 'Nutan D. Deshmukh', '53, Sadhu Vasani Road', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/customer-details"><Button variant="contained" color="primary">VIEW</Button></Link>,
        <Link style={{ textDecoration: 'none' }} to="/servicing"><Button variant="contained" color="primary">PROCEED</Button></Link>),
    createData(6, 'Tripada  Kyada', '19, Gotri Road, Vinayak Soc', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/customer-details"><Button variant="contained" color="primary">VIEW</Button></Link>,
        <Link style={{ textDecoration: 'none' }} to="/servicing"><Button variant="contained" color="primary">PROCEED</Button></Link>),
    createData(7, 'Vivek  Katkar', 'Near Fire Brigade, Silver Road', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/customer-details"><Button variant="contained" color="primary">VIEW</Button></Link>,
        <Link style={{ textDecoration: 'none' }} to="/servicing"><Button variant="contained" color="primary">PROCEED</Button></Link>),
    createData(8, 'Riddhi  Gera', '343, 23, Madhuban Building, Cochin Street, Shahid Bhagatsingh Marg, Fort', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/customer-details"><Button variant="contained" color="primary">VIEW</Button></Link>,
        <Link style={{ textDecoration: 'none' }} to="/servicing"><Button variant="contained" color="primary">PROCEED</Button></Link>),
    createData(9, 'Lais  Swaminathan', 'Ashwamegh Pune Satara Road, Parvati', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/customer-details"><Button variant="contained" color="primary">VIEW</Button></Link>,
        <Link style={{ textDecoration: 'none' }} to="/servicing"><Button variant="contained" color="primary">PROCEED</Button></Link>),
    createData(10, 'Saniya  Mitter', '53,viswajit Chatturshr, Road', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/customer-details"><Button variant="contained" color="primary">VIEW</Button></Link>,
        <Link style={{ textDecoration: 'none' }} to="/servicing"><Button variant="contained" color="primary">PROCEED</Button></Link>),
    createData(11, 'Neema  Gole', '46/a, Dr Ambedkar Rd', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/customer-details"><Button variant="contained" color="primary">VIEW</Button></Link>,
        <Link style={{ textDecoration: 'none' }} to="/servicing"><Button variant="contained" color="primary">PROCEED</Button></Link>),
    createData(12, 'Raktavira  Rampersaud', 'Dhawade Wasti, Bhosari', 9359123910, 
        <Link style={{ textDecoration: 'none' }} to="/customer-details"><Button variant="contained" color="primary">VIEW</Button></Link>,
        <Link style={{ textDecoration: 'none' }} to="/servicing"><Button variant="contained" color="primary">PROCEED</Button></Link>),
        
];

function AssignedCustomers() {
    return (
        <div align="center" style={{padding:"1rem"}}>
        <Typography variant="h4" style={{ textShadow: "2px 2px #c4c4c4", paddingBottom:'20px', paddingTop:'20px'}}><b>CUSTOMER LIST</b></Typography>  
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="Requests List">
                    <TableHead>
                        <TableRow>
                        <TableCell align="center"><b>SR. NO.</b></TableCell>
                        <TableCell align="left"><b>NAME</b></TableCell>
                        <TableCell align="left"><b>ADDRESS</b></TableCell>
                        <TableCell align="center"><b>CONTACT</b></TableCell>
                        <TableCell align="center"><b>DETAILS</b></TableCell>
                        <TableCell align="center"><b>SERVICE</b></TableCell>
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
                            <TableCell align="center">{row.service}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>        
        </div>
    )
}

export default AssignedCustomers
