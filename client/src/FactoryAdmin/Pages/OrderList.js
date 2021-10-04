import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Input } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import PrintIcon from '@material-ui/icons/Print';
import DownloadIcon from '@material-ui/icons/FontDownload';
import orders from '../Data/Order';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


function OrderList() {
    return (
        <div>
            <div>
        
        <div style={{marginLeft:"10vh"}}>
            <div style={{display:"flex",flexDirection:"row"}}>
            <KeyboardArrowLeftIcon />
            </div>
            <div style={{display:"flex",justifyContent:"space-evenly"}}>
                <CardContent style={{display:"flex",flexDirection:"column",background:"blue",justifyContent:"centre",alignItems:"center",height:"20vh",width:"20vh",borderRadius:"90px"}}>
                    <p>Total Orders</p>
                    <p>50</p>
                </CardContent>
                <CardContent style={{display:"flex",flexDirection:"column",background:"Red",justifyContent:"centre",alignItems:"center",height:"20vh",width:"20vh",borderRadius:"90px"}}>
                    <p>Pending Orders</p>
                    <p>30</p>
                </CardContent>
                <CardContent style={{display:"flex",flexDirection:"column" ,background:"green",justifyContent:"centre",alignItems:"center",height:"20vh",width:"20vh",borderRadius:"90px"}}>
                    <p>Completed Orders</p>
                    <p>30</p>
                </CardContent>
                <CardContent style={{display:"flex",flexDirection:"column",background:"yellow",justifyContent:"centre",alignItems:"center",height:"20vh",width:"20vh",borderRadius:"90px"}}>
                    <p>New Orders</p>
                    <p>10</p>
                </CardContent>
            </div>
            <h1>Worker's List</h1>
        </div>

      
        

        <div style={{marginTop:"3vh",marginLeft:"20vh"}}>
            <Input placeholder="Search"  />
            <SearchIcon/>
           
            <PrintIcon style={{marginLeft:"120vh"}}/>
            <DownloadIcon  style={{marginLeft:"5vh"}} />
            
        </div>

    <div style={{marginTop:"6vh"}}>
        <Container maxWidth="lg" >
        <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Order ID</TableCell>
                                <TableCell align="right">Model</TableCell>
                                <TableCell align="right">Customer</TableCell>
                                <TableCell align="right">Stage</TableCell>
                                <TableCell align="right">View</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {orders.map((order) => (
                                <TableRow
                                key={order.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {order.id}
                                </TableCell>
                                <TableCell align="right">{order.model}</TableCell>
                                <TableCell align="right">{order.Customer}</TableCell>
                                <TableCell align="right">{order.Stage}</TableCell>
                                <TableCell align="right">
                                <Button variant="contained" color="primary">View</Button>
                                </TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </Container>
            </div>

            
            
        </div>
            
        </div>
    )
}

export default OrderList
