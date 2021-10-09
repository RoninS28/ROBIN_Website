import React from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from "@material-ui/core/Fab";
import TextField from '@material-ui/core/TextField';
import scooter1 from '../../images/scooter1.jpeg';
import { makeStyles } from '@material-ui/styles';
import { withStyles } from "@material-ui/core/styles";

import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import workerComplaints from '../Data/WorkerComplaints';
import { styled } from '@material-ui/styles';
import {Pie, Doughnut} from 'react-chartjs-2';




import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core//TablePagination';


import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { useHistory } from 'react-router';

const styles = makeStyles((theme) => ({
    listWrapper: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem"
    },
    topRow: {
        display: "flex",
        justifyContent: "flex-end",
    },
    rowHeader: {
        fontWeight: "bold !important",
    }

}));


const state = {
    labels: ['January', 'February', 'March',
             'April', 'May'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        data: [65, 59, 80, 81, 56]
      }
    ]
  }




function TablePaginationActions(props) {
    
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;


    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };

function createData(id,type,status) {
    return { id, type,status };
}

function getAllModels() {
    const allModels = [];
    workerComplaints.map(model => {
        console.log(model);
        allModels.push(createData(model.id, model.type, model.status))
    })
    return allModels
}

const rows = getAllModels();


function Complaints(props) {

    const [type, setType] = React.useState('');

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const [status, setStatus] = React.useState('');

    const handleChange2 = (event) => {
        setStatus(event.target.value);
    };

    const history=useHistory();
    const { classes, theme } = props;
    const xs=useMediaQuery(theme.breakpoints.down('xs'));
    const sm=useMediaQuery(theme.breakpoints.up('xs')&&theme.breakpoints.down('sm'));
    const md=useMediaQuery(theme.breakpoints.up('sm')&&theme.breakpoints.down('md'));
    const lg=useMediaQuery(theme.breakpoints.up('md')&&theme.breakpoints.down('lg'));
    const xl=useMediaQuery(theme.breakpoints.up('lg'));


        const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div>
            

                

        <Container 
            maxWidth={xs ? 'xs' : (sm ? 'sm' : (md ? 'md' : lg ? 'lg' : xl))} 
            className={classes.listWrapper}>
                        <div style={{display:"flex",flexDirection:"row",marginBottom:"2vh"}}>
                        <Box style={{width:"10vw"}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                label="Type"
                                onChange={handleChange}
                                >
                                <MenuItem value="Customer">Customer</MenuItem>
                                <MenuItem value="Worker">Worker</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box style={{width:"10vw"}}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={status}
                                label="Type"
                                onChange={handleChange2}
                                >
                                <MenuItem value="Customer">Addressed</MenuItem>
                                <MenuItem value="Worker">Pending</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                        <TableContainer component={Paper}>
                            <Table  aria-label="custom pagination table">
                            <TableHead>
                                <TableRow>
                                    <TableCell  align="center" className={classes.rowHeader}><h3>ID</h3></TableCell>
                                    <TableCell  align="center" className={classes.rowHeader}><h3>TYPE</h3></TableCell>
                                    <TableCell  align="center" className={classes.rowHeader}><h3>STATUS</h3></TableCell>
                                    <TableCell  align="center" className={classes.rowHeader}><h3>VIEW</h3></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {(rowsPerPage > 0
                                    ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    : rows
                                ).map((row) => (
                                    
                                    // individual row
                                    <TableRow>
                                        <TableCell  align="center">
                                            {row.id}
                                            </TableCell>
                                            <TableCell align="center">{row.type}</TableCell>
                                            <TableCell align="center">{row.status=='Addressed'?<span style={{color:'green'}}>Addressed</span>:<span style={{color:'red'}}>Pending</span>}</TableCell>
                                            <TableCell align="center">
                                            <Button variant="contained" color="primary">View</Button>
                                            </TableCell>
                                    </TableRow>

                                ))}

                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TablePagination
                                        rowsPerPageOptions={[3,5, 10, 25, { label: 'All', value: -1 }]}
                                        colSpan={3}
                                        count={rows.length}
                                        rowsPerPage={rowsPerPage}
                                        page={page}
                                        SelectProps={{
                                            inputProps: {
                                                'aria-label': 'rows per page',
                                            },
                                            native: true,
                                        }}
                                        onPageChange={handleChangePage}
                                        onRowsPerPageChange={handleChangeRowsPerPage}
                                        ActionsComponent={TablePaginationActions}
                                    />
                                </TableRow>
                            </TableFooter>
                            </Table>
            </TableContainer>
            
            <div style={{display:"flex",flexDirection:"row",marginBottom:"2vh",marginTop:"4vh"}}>
            <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                            <TableHead>
                            <TableRow>
                               
                                <TableCell align="center">Type</TableCell>
                                <TableCell align="center">Total</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                key={1}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    Techincal
                                </TableCell>
                                <TableCell align="center">30</TableCell>
                                </TableRow>

                                <TableRow
                                key={2}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    Damaged EV
                                </TableCell>
                                <TableCell align="center">25</TableCell>
                                </TableRow>
                        
                            </TableBody>
                        </Table>
                    </TableContainer>


                    <TableContainer style={{marginLeft:"4vw"}} component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                            <TableHead>
                            <TableRow>
                               
                                <TableCell align="center">Type</TableCell>
                                <TableCell align="center">Total</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                key={1}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    Model Damage
                                </TableCell>
                                <TableCell align="center">30</TableCell>
                                </TableRow>

                                <TableRow
                                key={2}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    Test Drive Issue
                                </TableCell>
                                <TableCell align="center">25</TableCell>
                                </TableRow>
                        
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>

            <div style={{marginTop:"4vh",height:"20vh",width:"20vw"}}>
                <Doughnut
                    data={state}
                    options={{
                        title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                    />
            </div>

        </Container>        
        </div>
    )
}

export default withStyles(styles, { withTheme: true })(Complaints);
