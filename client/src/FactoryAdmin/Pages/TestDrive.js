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
import testDrive from '../Data/TestDrive';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from "@material-ui/core/Fab";
import TextField from '@material-ui/core/TextField';
import scooter1 from '../../images/scooter1.jpeg';
import { makeStyles } from '@material-ui/styles';
import { withStyles } from "@material-ui/core/styles";

import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';



import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core//TablePagination';


import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import MenuItem from "@material-ui/core/MenuItem";
import OutlinedInput from '@material-ui/core/OutlinedInput';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



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


function createData(id, name,model,where,date) {
    return { id,name,model,where,date };
}

function getAllModels() {
    const allModels = [];
    testDrive.map(model => {
        console.log(model);
        allModels.push(createData(model.id, model.name, model.model, model.where, model.date))
    })
    return allModels
}

const rows = getAllModels();

//Dropdown
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Request',
  'Pending',
  'Completed'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}




function TestDrive(props) {
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


    const theme2 = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
        target: { value },
        } = event;
        setPersonName(
        // On autofill we get a the stringified value.
        typeof value === 'string' ? value.split(',') : value,
        );
    };



    return (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

        <Container 
            maxWidth={xs ? 'xs' : (sm ? 'sm' : (md ? 'md' : lg ? 'lg' : xl))} 
            className={classes.listWrapper}>

                        <div style={{marginBottom:"2vh"}}>
                            <FormControl sx={{ m: 1, width: 500, mt: 3 }}>
                                <Select
                                multiple
                                displayEmpty
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                    return <em>Placeholder</em>;
                                    }

                                    return selected.join(', ');
                                }}
                                MenuProps={MenuProps}
                                inputProps={{ 'aria-label': 'Without label' }}
                                >
                                <MenuItem disabled value="">
                                    <em>Placeholder</em>
                                </MenuItem>
                                {names.map((name) => (
                                    <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, personName, theme)}
                                    >
                                    {name}
                                    </MenuItem>
                                ))}
                                </Select>
                            </FormControl>
                        </div>

                <TableContainer component={Paper}>
                    <Table  aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                            <TableCell  align="center" className={classes.rowHeader}><h3>ID</h3></TableCell>
                            <TableCell  align="center" className={classes.rowHeader}><h3>NAME</h3></TableCell>
                            <TableCell  align="center" className={classes.rowHeader}><h3>MODEL</h3></TableCell>
                            <TableCell  align="center" className={classes.rowHeader}><h3>PLACE</h3></TableCell>
                            <TableCell  align="center" className={classes.rowHeader}><h3>DATE</h3></TableCell>
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
                                <TableCell  align="center">
                                    {row.name}
                                </TableCell>
                                <TableCell  align="center">
                                    {row.model}
                                </TableCell>
                                <TableCell  align="center">
                                    {row.where}
                                </TableCell>
                                <TableCell  align="center">
                                    {row.date}
                                </TableCell>
                                <TableCell align="center">
                                <Button variant="contained" color="primary" >View</Button>
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
</Container>
            
            <div><h2><span style={{color:"blue"}}>Total :</span> 10</h2></div>
    </div>
    )
}

export default withStyles(styles, { withTheme: true })(TestDrive);
