import React from 'react'
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Container from '@material-ui/core/Container';

import { withStyles } from "@material-ui/core/styles";
import { useMediaQuery } from '@material-ui/core';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {Line} from 'react-chartjs-2';
import {Pie, Doughnut} from 'react-chartjs-2';
import { Grid } from '@mui/material';
import GenericTable from './GenericTable';


const styles = theme => ({

    listWrapper: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem"
    },
    topRow: {
        display: "flex",
        justifyContent: "flex-end",
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


const pieData = {
    labels: ['Bad servicing', 'Late', 'Miscellaneous'],
    datasets: [
      {
        label: 'Complaint Types',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        ],
        data: [140, 59, 80]
      }
    ]
}

const lineData = {
    labels: ['November','December', 'January', 'February', 'March',
             'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [
      {
        label: 'Total Complaints',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [165, 159, 180, 181, 156, 176, 190, 380, 281, 186, 218, 90]
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

function createData(complaintId, customerName, complaintType, dateOfOrder, status, action) {
    return { complaintId, customerName, complaintType,dateOfOrder, status, action };
}
const labels = ["complaintId", "customerName", "complaintType", "dateOfOrder", "status","action"];

const rows = [
    createData('C2K5464', 'Siddhesh R Ramane', 'Improper Service', '10 Oct 2021', 'Pending',
    <Button  variant="contained" color="primary">View</Button>    ),
    createData('C2K5463', 'Kartik S Rane', 'Late Arrival', '10 Oct 2020', 'Addressed',
    <Button  variant="contained" color="primary">View</Button>),
    createData('C2K5465', 'Amey S Marathe', 'Improper Service', '10 Sept 2021', 'Addressed',
    <Button  variant="contained" color="primary">View</Button>),
    createData('C2K5466', 'Neha M Patil', 'Miscellaneous', '20 Sept 2021', 'Pending',
    <Button  variant="contained" color="primary">View</Button>),
    createData('C2K5467', 'Nutan D. Deshmukh', 'Miscellaneous', '10 Aug 2021', 'Addressed',
    <Button  variant="contained" color="primary">View</Button>),
    createData('C2K5468', 'Tripada Kyada', 'Improper Service', '1 Oct 2021', 'Pending',
    <Button  variant="contained" color="primary">View</Button>),
    createData('C2K5469', 'Vivek Katkar', 'Improper Service', '11 Sept 2021', 'Addressed',
    <Button  variant="contained" color="primary">View</Button>),
    
]

// Actual Function
const ServicemanComplaintList = (props) => {

    const { classes, theme } = props;

    const xs = useMediaQuery(theme.breakpoints.down('xs'));
    const sm = useMediaQuery(theme.breakpoints.up('xs') && theme.breakpoints.down('sm'))
    const md = useMediaQuery(theme.breakpoints.up('sm') && theme.breakpoints.down('md'))
    const lg = useMediaQuery(theme.breakpoints.up('md') && theme.breakpoints.down('lg'))
    const xl = useMediaQuery(theme.breakpoints.up('lg'))


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);


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

    

    const [filterFactory, setFilterFactory] = React.useState('All');

    const handleFilterFactoryChange = (event) => {
      setFilterFactory(event.target.value);
    };

    const [filterStatus, setFilterStatus] = React.useState('All');

    const handleSetFilterStatus = (event) => {
        setFilterStatus(event.target.value)
    }

    const [filterType, setFilterType] = React.useState('All');

    const handleSetFilterType = (event) => {
        setFilterType(event.target.value)
    }

    return (
        <Container 
            maxWidth={xs ? 'xs' : (sm ? 'sm' : (md ? 'md' : lg ? 'lg' : xl))} 
            className={classes.listWrapper}>

            <div className={classes.topRow}>
                {/* Breadcrumb */}
            </div>


            <div className={classes.statRow}>
                <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Total Complaints
                        </Typography>
                        <Typography variant="h5" component="div">
                        17
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Complaints Addressed
                        </Typography>
                        <Typography variant="h5" component="div">
                        9
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Pending Complaints
                        </Typography>
                        <Typography variant="h5" component="div">
                        8
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <div className={classes.topRow}>

            <Box sx={{ minWidth: 120 }} style={{ marginLeft: "1rem" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filterType}
                        label="Status"
                        onChange={handleSetFilterType}
                        >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Model Damage">NA</MenuItem>
                        <MenuItem value="Test Drive Issue">NA</MenuItem>
                        <MenuItem value="Miscellaneous">NA</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: 120 }} style={{ marginLeft: "1rem" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filterStatus}
                        label="Status"
                        onChange={handleSetFilterStatus}
                        >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Addressed">Addressed</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>

            {/* <TableContainer component={Paper}>
                <Table sx={{ minWidth: 300 }} aria-label="custom pagination table">
                <TableHead>
                        <TableRow>
                            <TableCell align="center" className={classes.rowHeader}><h3>Complaint ID</h3></TableCell>
                            <TableCell align="center" className={classes.rowHeader}><h3>Serviceman</h3></TableCell>
                            <TableCell align="center" className={classes.rowHeader}><h3>Complaint Type</h3></TableCell>
                            <TableCell align="center" className={classes.rowHeader}><h3>Date</h3></TableCell>
                            <TableCell align="center" className={classes.rowHeader}><h3>Status</h3></TableCell>
                            <TableCell align="center" className={classes.rowHeader}><h3>Actions</h3></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(rowsPerPage > 0
                            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : rows
                        ).map((row) => (
                            
                            // individual row
                                <TableRow style={{ height: "2em" }}>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {row.complaintId}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {row.customerName}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {row.complaintType}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {row.dateOfOrder}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        {row.status}
                                    </TableCell>
                                    <TableCell style={{ width: 160 }} align="center">
                                        <div className={classes.btnContainer}>
                                            <Button className={classes.btn} variant="contained" color="primary">View</Button>
                                        </div>
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
                                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
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
            </TableContainer> */}
           <GenericTable rows={rows} labels={labels}/>

            {/* <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card sx={{ minWidth: 285 }} style={{ marginTop: "0.8rem", padding: "0.2rem" }}>
                        <Typography variant="h5" component="div">
                            Avg Complaint types per month
                        </Typography>
                        <Doughnut
                            data={pieData}
                            options={{
                                title:{
                                display:true,
                                text:'Average Complaint types per month',
                                fontSize:20
                                },
                                legend:{
                                display:true,
                                position:'right'
                                }
                            }}
                        />
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <Card sx={{ minWidth: 285 }} style={{ marginTop: "0.8rem", padding: "0.2rem" }}>
                        <Typography variant="h5" component="div">
                            Total Customer Complaints per Month
                        </Typography>
                        <Line
                        data={lineData}
                        options={{
                            title:{
                            display:true,
                            text:'Total Customer Complaints per Month',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            }
                        }}
                        />
                    </Card>
                </Grid>
            </Grid> */}

        </Container>
    );
}

export default withStyles(styles, { withTheme: true })(ServicemanComplaintList);