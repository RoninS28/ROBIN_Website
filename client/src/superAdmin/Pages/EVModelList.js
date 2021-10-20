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


import { evModelList } from '../Data/EVModels'
import EVModelDetail from './EVModelDetail';
import EVModelItem from './EVModelItem';
import { withStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from '@material-ui/core';

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
    },
    rowHeader: {
        fontWeight: "bold !important",
    }
    

})


function createData(id, imgUrl, name, basePrice, colors) {
    return { id, imgUrl, name, basePrice, colors };
}

function getAllModels() {
    const allModels = [];
    evModelList.map(model => {
        console.log(model);
        allModels.push(createData(model.id, model.imgUrl, model.name, model.basePrice, model.colors))
    })
    return allModels
}

const rows = getAllModels();
const labels = ["imgUrl", "name", "basePrice", "colors", "actions"]


// Actual Function
const EVModelList = (props) => {

    const { classes, theme } = props;

    const xs = useMediaQuery(theme.breakpoints.down('xs'));
    const sm = useMediaQuery(theme.breakpoints.up('xs') && theme.breakpoints.down('sm'))
    const md = useMediaQuery(theme.breakpoints.up('sm') && theme.breakpoints.down('md'))
    const lg = useMediaQuery(theme.breakpoints.up('md') && theme.breakpoints.down('lg'))
    const xl = useMediaQuery(theme.breakpoints.up('lg'))



    return (
        <Container 
            maxWidth={xs ? 'xs' : (sm ? 'sm' : (md ? 'md' : lg ? 'lg' : xl))} 
            className={classes.listWrapper}>

            <div className={classes.topRow}>
                {/* Breadcrumb */}

                <Button variant="contained" color="primary" style={{ marginBottom: "1rem" }}>Add New EV</Button>
            </div>
            <GenericTable rows={rows} labels={labels}/>
            
        </Container>
    );
}

export default withStyles(styles, { withTheme: true })(EVModelList);