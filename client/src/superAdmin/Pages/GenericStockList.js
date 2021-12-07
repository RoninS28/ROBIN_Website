import React from 'react'
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import GenericTable from './GenericTable';
import { useHistory, useLocation } from 'react-router';
import Typography from '@material-ui/core/Typography';


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

// Sample Table data...This will change according to the component: eg. Factory, Service Center, Outlet...
function createData(name, stockRef, initialStock, stockIn, stockOut, finalStock) {
    return { name, stockRef, initialStock, stockIn, stockOut, finalStock };
}

const rows = [
    createData('Bike Pump 1', 'BIP001', 1000, 100, 15, 1085),
    createData('Bike Pump 2', 'BIP002', 800, 0, 0, 800),
    createData('Saddle 1', 'SAD001', 75, 0, 0, 75),
    createData('Saddle 2', 'SAD002', 2000, 100, 0, 2100),
    createData('Saddle 3', 'SAD003', 520, 0, 3, 517),
    createData('Normal Tyre', 'NOT001', 350, 100, 100, 350),
    createData('Kavlar Tyre', 'KET001', 800, 0, 62, 738),
    createData('Brake Pads', 'BRP001', 20, 0, 0, 20),


];

const labels = ["name", "stockRef", "initialStock", "stockIn", "stockOut", "finalStock"];

// Actual Function
const GenericStockList = (props) => {

    const { classes, theme } = props;


    const location = useLocation();
    const arrList = location.pathname.split('/');
    // ['', 'service-centers', '1', 'stocks']

    const componentName = arrList[1];

    let componentNameSingular = '';
    let editBtnUrl = ''
    let sampleTitle = ''
    let sampleSubtitle = ''

    let obj = {}
    if (componentName == 'factories') {
        componentNameSingular = 'Factory'
        editBtnUrl = '/factories/1/edit'
        sampleTitle = 'Factory Name'
        sampleSubtitle = 'Noga Factory'
    } else if (componentName == 'outlets') {
        componentNameSingular = 'Outlet'
        editBtnUrl = '/outlets/1/edit'
        sampleTitle = 'Outlet Name'
        sampleSubtitle = 'Ishanya Outlet'
    } else if (componentName == 'service-centers') {
        componentNameSingular = 'Service Center'
        editBtnUrl = '/service-centers/1/edit'
        sampleTitle = 'Service Center Name'
        sampleSubtitle = 'Ishanya Service Center'
    }

    return (
        <Box sx={{ flexGrow: 1 }} m={2}>
            <Grid container spacing={1}>
                <Typography variant="h5" component="div" style={{ padding: "0.2rem" }}>
                    Existing Stocks for {sampleSubtitle}
                </Typography>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <GenericTable rows={rows} labels={labels} />
                </Grid>

            </Grid>
        </Box>
    );
}

export default withStyles(styles, { withTheme: true })(GenericStockList);