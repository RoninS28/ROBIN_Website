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
import Fab from "@material-ui/core/Fab";
import TextField from '@material-ui/core/TextField';
import scooter1 from '../../images/scooter1.jpeg';




function OrderList() {
    return (
        <div>
            <div>
        
        <div style={{marginLeft:"7vh"}}>
        <div style={{display:"flex",flexDirection:"row"}}>
                <Fab color="primary" aria-label="add">
                <KeyboardArrowLeftIcon />
                </Fab>
            </div>
             <h1>Order's List</h1>
            <TextField id="standard-basic" label="Search orders" variant="standard" />
            <Fab  aria-label="like" style={{marginLeft:"1vh"}}>
                    <SearchIcon/>
            </Fab>
           
            <Fab color="primary" aria-label="add" style={{marginLeft:"100vh"}}>
                <PrintIcon />
            </Fab>
            
            <Fab color="primary" aria-label="add" style={{marginLeft:"5vh"}}>
                <DownloadIcon/>
            </Fab> 
        </div>

    <div style={{marginTop:"3vh"}}>
        <Container maxWidth="lg" >
        <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 600 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell aligh="right">Order ID</TableCell>
                                <TableCell align="right">Image</TableCell>
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
                                // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell align="left">{order.id}</TableCell>
                                <TableCell align="right"><img src={scooter1} style={{borderRadius:"35px",border:"2px solid black"}} alt={order.model} height="70px" width="70px"/></TableCell>
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
