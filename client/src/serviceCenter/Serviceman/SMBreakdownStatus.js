import "./SMBreakdownStatus.css"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@material-ui/core/Button'
import { Typography } from "@material-ui/core";

import * as React from 'react';

function createData(property, data) {
    return { property, data};
  }

const rows = [
  createData('CUSTOMER NAME', 'Siddhesh R. Ramane'),
  createData('CONTACT', 9999999999),
  createData('LOCATION', 'Tilak Square, GB Road'),
  createData('SERVICEMAN ASSIGNED', 'Nitin Kumar'),
  createData('SERVICEMAN CONTACT', '8888884161'),
  createData('STATUS', 'Pending'),
  ];

  
function SMBreakdownStatus() {
  const [status, setStatus] = React.useState('');

  const handleChange = (event) => {
    setStatus(event.target.value);
  };
    return(
        <div align="center" style={{padding:"1rem"}}>
            <Typography variant="h4" style={{ textShadow: "2px 2px #c4c4c4", paddingBottom:'20px', paddingTop:'20px'}}><b>STATUS DETAILS</b></Typography>  
          <TableContainer component={Paper} style={{ width: 800 }}>
          <Table  aria-label="status table">
          <TableBody>
          {rows.map((row) => (
           <TableRow
             key={row.name}
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row" align='center'>
               {row.property}
             </TableCell>
             <TableCell align="center">{row.data}</TableCell>
             
           </TableRow>
         ))}
          
       </TableBody>
     </Table>
   </TableContainer>
   <div align="center" style={{padding:"1rem"}}>
      <label value="Update"><b>UPDATE STATUS:&nbsp; </b></label>
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

export default SMBreakdownStatus
