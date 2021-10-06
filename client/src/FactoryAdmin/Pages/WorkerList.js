import React from 'react'
import Workers from '../Data/Workers'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import PrintIcon from '@material-ui/icons/Print';
import DownloadIcon from '@material-ui/icons/FontDownload';
import Fab from "@material-ui/core/Fab";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';
import { withStyles } from "@material-ui/core/styles";
import { Input, useMediaQuery } from '@material-ui/core';


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

function WorkerList(props) {

    const { classes, theme } = props;

    const xs=useMediaQuery(theme.breakpoints.down('xs'));
    const sm=useMediaQuery(theme.breakpoints.up('xs')&&theme.breakpoints.down('sm'));
    const md=useMediaQuery(theme.breakpoints.up('sm')&&theme.breakpoints.down('md'));
    const lg=useMediaQuery(theme.breakpoints.up('md')&&theme.breakpoints.down('lg'));
    const xl=useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <div>
        
        

            <div style={{marginLeft:"10vw"}}>
                   
             <h1>Worker's List</h1>
            <TextField id="standard-basic" label="Search worker" variant="standard" />
            <Fab  aria-label="like" style={{marginLeft:"1vh"}}>
                    <SearchIcon/>
            </Fab>
           
            <Fab color="primary" aria-label="add" style={{marginLeft:"100vh"}}>
                <PrintIcon />
            </Fab>
            
            <Fab color="primary" aria-label="add" style={{marginLeft:"4vh"}}>
                <DownloadIcon/>
            </Fab>

            </div>
    

            
                <Container style={{marginTop:"3vh"}} maxWidth={xs?"xs":(sm?"sm":(md?"md":(lg?"lg":(xl?"lg":"xl"))))} >
                 <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="center">NAME</TableCell>
                            <TableCell align="center">POSITION</TableCell>
                            <TableCell align="center">PHONE</TableCell>
                            <TableCell align="center">EMAIL</TableCell>
                            <TableCell align="center">ADDRESS</TableCell>
                            <TableCell align="center">SALARY</TableCell>
                            <TableCell align="center">View</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {Workers.map((row) => (
                            <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                
                                <TableCell component="th" scope="row">{row.id}</TableCell>
                            <TableCell component="th" scope="row">{row.name}</TableCell>
                            <TableCell align="right">{row.position}</TableCell>
                            <TableCell align="right">{row.phone}</TableCell>
                            <TableCell align="right">{row.email}</TableCell>
                            <TableCell align="right">{row.address}</TableCell>
                            <TableCell align="right">{row.salary}</TableCell>
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
    )
}

export default withStyles(styles, { withTheme: true })(WorkerList);
