import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { KeyboardArrowDown } from '@material-ui/icons';
import { KeyboardArrowUp } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


function createData(id, customerName, address) {
  return {
    id,
    customerName,
    address,
    history: [
      {
        date: '2020-01-05',
        services: 'Oil Change, Battery, Horn',
        price: '1200.00',
        receipt: <Link style={{ textDecoration: 'none' }} to="/Serviceman/billing"><Button variant="contained" color="primary">VIEW</Button></Link>,
      },
      {
        date: '2020-01-05',
        services: 'Oil Change, Battery, Horn',
        price: '1200.00',
        receipt:<Link style={{ textDecoration: 'none' }} to="/Serviceman/billing"><Button variant="contained" color="primary">VIEW</Button></Link>,
      },
    ],
  };
}

const rows = [
    createData('C2NSFK', 'Kamlesh Raut', '114,Shiv Shakti Apartment Mohanlal nagar Pune, 440025'),
    createData('C2NSFK', 'Kamlesh Raut', '114,Shiv Shakti Apartment Mohanlal nagar Pune, 440025'),
    createData('C2NSFK', 'Kamlesh Raut', '114,Shiv Shakti Apartment Mohanlal nagar Pune, 440025'),
    createData('C2NSFK', 'Kamlesh Raut', '114,Shiv Shakti Apartment Mohanlal nagar Pune, 440025'),
    createData('C2NSFK', 'Kamlesh Raut', '114,Shiv Shakti Apartment Mohanlal nagar Pune, 440025'),
  ];



function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row" align="center">
            {row.id}
          </TableCell>
          <TableCell align="center">{row.customerName}</TableCell>
          <TableCell align="center">{row.address}</TableCell>
         </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Date</TableCell>
                      <TableCell align="center">Services</TableCell>
                      <TableCell align="center">Cost(₹)</TableCell>
                      <TableCell align="center">Receipt</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row" align="center">
                          {historyRow.date}
                        </TableCell>
                        <TableCell align="center">{historyRow.services}</TableCell>
                        <TableCell align="center">{historyRow.price}</TableCell>                        
                        <TableCell align="center">{historyRow.receipt}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  
  
function SMHistory(props) {
    
  const { row } = props;
  const [open, setOpen] = React.useState(false);

    return (
        <div style={{padding:'1rem'}}>
             <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Customer Name</TableCell>
            <TableCell align="center">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default SMHistory
