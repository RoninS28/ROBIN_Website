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

function createData(id, name, orders, completed, pending) {
    return { id, name, orders, completed, pending };
}

function getAllFactories() {
    const allFactories = [];
    factoryList.map(factory => {
        console.log(factory);
        allFactories.push(createData(factory.id, factory.name, factory.orders, factory.completed, factory.pending))
    })
    return allFactories
}

const rows = getAllFactories();
const labels = ["name", "orders", "completed", "pending", "actions"];


// Actual Function
const FactoryList = (props) => {

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
                <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Total Factories
                        </Typography>
                        <Typography variant="h5" component="div">
                        3
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Total Orders
                        </Typography>
                        <Typography variant="h5" component="div">
                        120
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Pending Orders
                        </Typography>
                        <Typography variant="h5" component="div">
                        30
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <div className={classes.topRow}>
                {/* Serachbar and add Factory button */}
                    <Paper style={{ width: "300px", display: "flex", justifyContent: "space-between" }}>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search Factory"
                            inputProps={{ 'aria-label': 'search factory' }}
                        />
                        <IconButton type="submit" sx={{ p: '2px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>

                <Button variant="contained" color="primary" style={{ marginBottom: "1rem" }}>Add New Factory</Button>

            </div>
            <GenericTable rows={rows} labels={labels}/>
        </Container>
    );
}

export default withStyles(styles, { withTheme: true })(FactoryList);