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
import { Input, useMediaQuery } from '@material-ui/core';
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
import { makeStyles } from '@material-ui/styles';
import { withStyles } from "@material-ui/core/styles";


const styles = makeStyles((theme) => ({
    orderList: {

        background:"pink",

        // [theme.breakpoints.down("sm")]: {
        //     maxWidth:"xs",
        // },
        // [theme.breakpoints.up("sm")]: {
        //     maxWidth:"sm",
        // },
        // [theme.breakpoints.down("md")]: {
        //     maxWidth:"sm",
        // },
        // [theme.breakpoints.up("md")]: {
        //     maxWidth:"md",
        // },
        // [theme.breakpoints.down("lg")]: {
        //     maxWidth:"md",
        // },
        // [theme.breakpoints.up("lg")]: {
        //     maxWidth:"lg",
        // },
    }

}));


function OrderList(props) {

    const { classes, theme } = props;
    const xs=useMediaQuery(theme.breakpoints.down('xs'));
    const sm=useMediaQuery(theme.breakpoints.up('xs')&&theme.breakpoints.down('sm'));
    const md=useMediaQuery(theme.breakpoints.up('sm')&&theme.breakpoints.down('md'));
    const lg=useMediaQuery(theme.breakpoints.up('md')&&theme.breakpoints.down('lg'));
    const xl=useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <div>
                <div style={{marginLeft:"10vw"}}>
                <h1>Order's List</h1>
                <TextField id="standard-basic" label="Search orders" variant="standard" />
                <Fab  aria-label="like" style={{marginLeft:"1vh"}}>
                <SearchIcon/>
                </Fab>
           
                <Fab color="primary" aria-label="add" style={{marginLeft:"90vh"}} >
                    <PrintIcon />
                </Fab>
            
                <Fab color="primary" aria-label="add" style={{marginLeft:"4vh"}}>
                    <DownloadIcon/>
                </Fab>
                </div>

                    <Container style={{marginTop:"3vh"}}  maxWidth={xs?"xs":(sm?"sm":(md?"md":(lg?"lg":(xl?"lg":"xl"))))} >
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 600 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell aligh="center">Order ID</TableCell>
                                        <TableCell align="center">Image</TableCell>
                                        <TableCell align="center">Model</TableCell>
                                        <TableCell align="center">Customer</TableCell>
                                        <TableCell align="center">Stage</TableCell>
                                        <TableCell align="center">View</TableCell>
                                    </TableRow>
                                </TableHead>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow
                                    key={order.id}
                                    // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center">{order.id}</TableCell>
                                        <TableCell align="center"><img src={scooter1} style={{borderRadius:"35px",border:"2px solid black"}} alt={order.model} height="70px" width="70px"/></TableCell>
                                        <TableCell align="center">{order.model}</TableCell>
                                        <TableCell align="center">{order.Customer}</TableCell>
                                        <TableCell align="center">{order.Stage}</TableCell>
                                        <TableCell align="center">
                                        <Button variant="contained" color="primary">View</Button>
                                        </TableCell>
                                    </TableRow>
                            ))}
                            </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
    </div>
    )
}

export default withStyles(styles, { withTheme: true })(OrderList);
