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
import GenericTable from './GenericTable';

const styles = theme => ({

    listWrapper: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem"
    },
    topRow: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    rowHeader: {
        fontWeight: "bold !important",
    },
    statRow: {
        display: "flex",
        justifyContent: "center"
    },
    statCard: {
        margin: "1rem"
    }
    

})


function createData(no, name, address, contact, details, service) {
    return { no, name, address, contact, details, service};
  }

const labels = ["no", "name", "address", "contact", "details", "service"];

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

function AssignedCustomers(props) {
    const { classes, theme } = props;
    return (
        <div align="center" style={{padding:"1rem"}}>
        <Typography variant="h4" style={{ textShadow: "2px 2px #c4c4c4", paddingBottom:'20px', paddingTop:'20px'}}><b>CUSTOMER LIST</b></Typography>  
           <GenericTable rows={rows} labels={labels}/>
        </div>
    )
}

export default AssignedCustomers