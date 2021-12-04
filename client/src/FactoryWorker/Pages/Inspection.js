import React, { useState } from 'react'

import PageHeader from "./PageHeader";
import NewModel from "./NewModel";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import {Paper, makeStyles, CssBaseline} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    },
    searchInput: {
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
}))


export default function Inspection() {

    const classes=useStyles();
    
    return (
       <>
            <PageHeader
                title="Vehicles' Inspection"
                subTitle="Manufacturing in factory"
                icon={<TwoWheelerIcon fontSize="large" />}
            />
            
            <Paper className={classes.pageContent}>
            <NewModel/>
            </Paper>
            <CssBaseline/>
           
           </>
    )
}
