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
import { Checkbox } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Typography } from "@material-ui/core";

import "./BreakdownStatusList.css"

function createData( box, date, no, name, address, contact, aname, acontact, status, details) {
    return { box, date, no, name, address, contact, aname, acontact, status, details};
  }

const label = { inputProps: { 'aria-label': 'Select' } };

const rows = [
    createData( <Checkbox {...label}/>, '01/01/21',
     16464, 'Siddhesh R Ramane', 'Kothrud', 9359123910, 'Nitin Kumar', 8888884161, 'PENDING',
        <Link style={{ textDecoration: 'none' }} to="/breakdown-status"><Button variant="contained" color="primary">VIEW</Button></Link>),
    createData( <Checkbox {...label}/>,'01/01/21',
     24652, 'Kartik S Rane', 'Kothrud', 9359123910, 'Nitin Kumar', 8888884161, 'PENDING',
        <Link style={{ textDecoration: 'none' }} to="/breakdown-status"><Button variant="contained" color="primary">VIEW</Button></Link>),
    createData( <Checkbox {...label}/>,'01/01/21',
     32563, 'Amey S Marathe', 'Kothrud', 9359123910, 'Nitin Kumar', 8888884161, 'PENDING',
        <Link style={{ textDecoration: 'none' }} to="/breakdown-status"><Button variant="contained" color="primary">VIEW</Button></Link>),
    createData( <Checkbox {...label}/>, '01/01/21',
    45464, 'Neha M Patil', 'Kothrud', 9359123910, 'Nitin Kumar', 8888884161, 'PENDING',
        <Link style={{ textDecoration: 'none' }} to="/breakdown-status"><Button variant="contained" color="primary">VIEW</Button></Link>),
    createData( <Checkbox {...label}/>,'01/01/21',
    54566, 'Nutan D. Deshmukh', 'Kothrud', 9359123910, 'Nitin Kumar', 8888884161, 'PENDING',
        <Link style={{ textDecoration: 'none' }} to="/breakdown-status"><Button variant="contained" color="primary">VIEW</Button></Link>),
];
function BreakdownStatusList() {
    const [status, setStatus] = React.useState('');

    const handleChange = (event) => {
      setStatus(event.target.value);
    };
    return (
        <div align="center" style={{padding:"1rem"}}>
        <Typography variant="h4" style={{ textShadow: "2px 2px #c4c4c4", paddingBottom:'20px', paddingTop:'20px', align:'center'}}><b>REQUEST STATUS</b></Typography>  
            <TableContainer component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="Requests List">
                    <TableHead>
                        <TableRow>
                        <TableCell align="left"><Checkbox {...label}/></TableCell>
                        <TableCell align="center">DATE</TableCell>
                        <TableCell align="center">ID. NO.</TableCell>
                        <TableCell align="left">NAME</TableCell>
                        <TableCell align="left">ADDRESS</TableCell>
                        <TableCell align="center">CONTACT</TableCell>
                        <TableCell align="center">SERVICEMAN ASSIGNED</TableCell>
                        <TableCell align="center">SERVICEMAN CONTACT</TableCell>
                        <TableCell align="center">STATUS</TableCell>
                        <TableCell align="center">DETAILS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align="left">
                            {row.box}
                            </TableCell>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.no}</TableCell>
                            <TableCell align="left">{row.name}</TableCell>
                            <TableCell align="left">{row.address}</TableCell>
                            <TableCell align="center">{row.contact}</TableCell>
                            <TableCell align="center">{row.aname}</TableCell>
                            <TableCell align="center">{row.acontact}</TableCell>
                            <TableCell align="center">{row.status}</TableCell>
                            <TableCell align="center">{row.details}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> 
            <div align="center" className="update" style={{paddingTop:"1rem"}}>
            <label value="Update" style={{display:'inline'}}><b>UPDATE SELECTION:</b></label>
            <Select 
                style={{ width: "10%" }}
                value={status}
                onChange={handleChange}
                name="status"
                displayEmpty
                
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
            </Select>
            <Button variant="contained" color="primary" style={{marginLeft:'20px'}}>UPDATE</Button>
            </div>
            </div>  
    )
}

export default BreakdownStatusList
