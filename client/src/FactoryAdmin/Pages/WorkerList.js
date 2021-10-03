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
import { Input } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import PrintIcon from '@material-ui/icons/Print';
import DownloadIcon from '@material-ui/icons/FontDownload';

function WorkerList() {
    return (
        <div>
        
        <div style={{marginLeft:"20vh",marginTop:"3vh"}}>
            <div style={{display:"flex",flexDirection:"row"}}>
            <KeyboardArrowLeftIcon />
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
                            <TableCell>ID</TableCell>
                            <TableCell align="right">NAME</TableCell>
                            <TableCell align="right">POSITION</TableCell>
                            <TableCell align="right">PHONE</TableCell>
                            <TableCell align="right">EMAIL</TableCell>
                            <TableCell align="right">ADDRESS</TableCell>
                            <TableCell align="right">SALARY</TableCell>
                            <TableCell align="right">View</TableCell>
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

            
            
        </div>
    )
}

export default WorkerList
