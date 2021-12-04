import React, { useState } from 'react'

import PageHeader from "./PageHeader";
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import {makeStyles} from '@material-ui/core';


const useStyle = makeStyles(theme => ({
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

    return (
       
            <PageHeader
                title="Vehicles' Inspection"
                subTitle="Manufacturing in factory"
                icon={<TwoWheelerIcon fontSize="large" />}
            />
           
    )
}
