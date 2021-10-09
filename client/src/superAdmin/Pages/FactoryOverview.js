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
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import { factoryList } from '../Data/FactoryList'
import { withStyles } from "@material-ui/core/styles";
import { useMediaQuery } from '@material-ui/core';

import {Pie, Doughnut} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';


const styles = theme => ({

    listWrapper: {
        display: "flex",
        flexDirection: "column",
        marginBottom: "1rem"
    },
    topRow: {
        display: "flex",
        marginTop: "1rem",
        marginBottom: "1rem"
    },
    rowHeader: {
        fontWeight: "bold !important",
    },
    statRow: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr"
    },
    statCard: {
        margin: "0.4rem",
    },
    pieChart: {
        margin: "0.4rem",
        padding: "1rem"
    }
    

})


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


function createData(name, orders, completed, pending) {
    return { name, orders, completed, pending };
}

const rows = [
    createData('City Electric Scooter', 150, 100, 50),
    createData('City-1 Electric Scooter', 100, 50, 50),
    createData('City-2 Electric Scooter', 150, 100, 50),

];



const pieData = {
    labels: ['City Electric Scooter', 'City-1 Electric Scooter', 'City-2 Electric Scooter'],
    datasets: [
      {
        label: 'EV Models',
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
        label: 'Total Sale',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [165, 159, 180, 181, 156, 176, 190, 380, 281, 186, 218, 90]
      }
    ]
  }

// Actual Function
const FactoryOverview = (props) => {

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

    console.log(rows);

    return (
        <Container 
            maxWidth={xs ? 'xs' : (sm ? 'sm' : (md ? 'md' : lg ? 'lg' : xl))} 
            className={classes.listWrapper}>

            <div className={classes.topRow}>
                {/* Breadcrumb */}

            </div>

            <div className={classes.statRow}>
                <div>
                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Factory Name
                            </Typography>
                            <Typography variant="h5" component="div">
                            Noga Factory
                            </Typography>
                        </CardContent>
                    </Card>
                            
                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography  sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Total Area
                            </Typography>
                            <Typography variant="h5" component="div">
                            20,000 sq. ft
                            </Typography>
                        </CardContent>
                    </Card>
                    
                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography  sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Total Employees
                            </Typography>
                            <Typography variant="h5" component="div">
                            70
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography  sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Max Capacity
                            </Typography>
                            <Typography variant="h5" component="div">
                            2000 units
                            </Typography>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Average Annual Prod.
                            </Typography>
                            <Typography variant="h5" component="div">
                            35000 units
                            </Typography>
                        </CardContent>
                    </Card>
                            
                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography  sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Sales last month
                            </Typography>
                            <Typography variant="h5" component="div">
                            Rs. 1,00,000
                            </Typography>
                        </CardContent>
                    </Card>
                    
                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography  sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Sales Income
                            </Typography>
                            <Typography variant="h5" component="div">
                            Rs. 1,50,000
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography  sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Total Revenue
                            </Typography>
                            <Typography variant="h5" component="div">
                            Rs. 50,000
                            </Typography>
                        </CardContent>
                    </Card>
                </div>


                <Card sx={{ minWidth: 275 }} className={classes.pieChart}>
                    <Typography variant="h5" component="div">
                    Average EV Sales per month
                    </Typography>
                    <Doughnut
                        data={pieData}
                        options={{
                            title:{
                            display:true,
                            text:'Average EV Sales per month',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            }
                        }}
                    />
                </Card>
            </div>

            <div className={classes.topRow}>
                {/* Serachbar and add Factory button */}
                <Button align="left" variant="contained" color="primary" style={{ marginBottom: "1rem", marginRight: "1rem" }}>View Complaints from Factory</Button>
                <Button align="left" variant="contained" color="primary" style={{ marginBottom: "1rem", marginRight: "1rem" }}>View Requests from Factory</Button>

            </div>


            <TableContainer component={Paper}>
                <Typography variant="h5" component="div" style={{ padding: "0.2rem" }}>
                    EV Sales this month
                </Typography>
                <Table sx={{ minWidth: 300 }} aria-label="custom pagination table">
                <TableHead>
                        <TableRow>
                            <TableCell align="center" className={classes.rowHeader}><h3>EV Model</h3></TableCell>
                            <TableCell align="center" className={classes.rowHeader}><h3>Orders</h3></TableCell>
                            <TableCell align="center" className={classes.rowHeader}><h3>Completed</h3></TableCell>
                            <TableCell align="center" className={classes.rowHeader}><h3>Pending</h3></TableCell>
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
                                    {row.name}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="center">
                                    {row.orders}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="center">
                                    {row.completed}
                                </TableCell>
                                <TableCell style={{ width: 160 }} align="center">
                                    {row.pending}
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
            </TableContainer>

            <Card style={{ marginTop: "0.8rem", padding: "0.2rem" }}>
                <Typography variant="h5" component="div">
                    Total EV Sales per month
                </Typography>
                <Line
                data={lineData}
                options={{
                    title:{
                    display:true,
                    text:'Total EV Sales by months',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
                />
            </Card>

        </Container>
    );
}

export default withStyles(styles, { withTheme: true })(FactoryOverview);