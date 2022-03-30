import React,{useState,useEffect} from 'react';
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

import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';



import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core//TablePagination';
import GenericTable from './GenericTable';


import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import workers from '../Data/Workers.js';
import { useHistory } from 'react-router';
import axios from 'axios';


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

function createData(id,name, phone, email,position,address,salary) {
    return { id, name,phone,email, position,address,salary};
}

function WorkerList(props) {

    const [rows,setRows]=useState([]);

    const [labels,setLabels]=useState(["name","contact","emailID","position","actions",]);

    const [workerId,setworkerId]=useState([]);

    const getAllWorkers = () => {

        const allWorkers=[];
       const allWorkersId=[];
  
      axios.get('/employees')
          .then(res => {
              let workerArr = res.data;
              console.log(workerArr);
              workerArr.map(worker => {
                  allWorkers.push(worker);
                  allWorkersId.push(worker._id);
              });
                console.log("all workers ", allWorkers);
                console.log("all workers ids",allWorkersId);
              setRows(allWorkers);
             // setworkerId(allWorkersId);
            
          })
          .catch((err) => {
              console.log(err);
          });
    }

    useEffect(()=>{
       // console.log("In useEffect");
        getAllWorkers();
    
      },[]);
    



    const { classes, theme } = props;
    const xs=useMediaQuery(theme.breakpoints.down('xs'));
    const sm=useMediaQuery(theme.breakpoints.up('xs')&&theme.breakpoints.down('sm'));
    const md=useMediaQuery(theme.breakpoints.up('sm')&&theme.breakpoints.down('md'));
    const lg=useMediaQuery(theme.breakpoints.up('md')&&theme.breakpoints.down('lg'));
    const xl=useMediaQuery(theme.breakpoints.up('lg'));

    const history=useHistory();


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
                <GenericTable rows={rows} labels={labels}  view="/workerList/" />
        </Container>
    </div>
    )
   
}

export default withStyles(styles, { withTheme: true })(WorkerList);
