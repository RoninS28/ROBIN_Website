import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Button from '@material-ui/core/Button';
import RoomIcon from '@material-ui/icons/Room';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Card } from "@material-ui/core";

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

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent='center'>
        <Grid item xs={8}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="status table">
          <TableBody>
          {rows.map((row) => (
           <TableRow
             key={row.name}
             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
           >
             <TableCell component="th" scope="row">
               {row.property}
             </TableCell>
             <TableCell align="left">{row.data}</TableCell>
             
           </TableRow>
         ))}
          
       </TableBody>
     </Table>
   </TableContainer>          
       </Grid>
        </Grid>
    </Box>
  );
}
