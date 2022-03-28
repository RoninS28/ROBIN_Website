import React from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { salesList } from '../Data/SalesList';
import { evModelList } from '../Data/EVModels';

import { withStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@material-ui/core/Typography';

import GenericTable from './GenericTable';


const styles = theme => ({
    mainContainer: {
        margin: 0
    },
    gridItem: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    flexContainer: {
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        justifyContent: "flex-end",
    }

})


function createData(id, outletName, quantity, salesTotalRs, costsRs, grossProfitRs) {
    return { id, outletName, quantity, salesTotalRs, costsRs, grossProfitRs };
}

function getAllModels() {
    const allModels = [];
    salesList.map(outlet => {
        allModels.push(createData(outlet.id, outlet.outletName, outlet.quantity, outlet.salesTotal, outlet.costs, outlet.grossProfit))
    })
    return allModels
}

const rows = getAllModels();
const labels = ["outletName", "quantity", "salesTotalRs", "costsRs", "grossProfitRs"]


// Actual Function
const GenericSalesList = (props) => {

    const { classes, theme } = props;

    const [filterMonth, setFilterMonth] = React.useState('All');

    const handleSetFilterMonth = (event) => {
        setFilterMonth(event.target.value)
    }

    const [filterModel, setFilterModel] = React.useState('All');

    const handleSetFilterModel = (event) => {
        setFilterModel(event.target.value)
    }

    const months = [ "January", "February", "March", "April", "May", "June", "July", "August", 
                        "September", "October", "November", "December" ]

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} className={classes.mainContainer}>
                <Grid container xs={11} className={classes.gridItem}>
                    <Grid item xs={5} style={{ marginTop: "1rem" }}>
                        <Typography variant="h5" component="div" style={{ padding: "1rem" }}>
                            Sales Report for the Outlets
                        </Typography>
                    </Grid>
                    <Grid item xs={3} style={{ marginTop: "1rem", marginRight: "1rem" }}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sales by Month</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={filterMonth}
                                    label="Sales by Month"
                                    onChange={handleSetFilterMonth}
                                >
                                    <MenuItem value="All">All</MenuItem>
                                    {months.map(month => (
                                        <MenuItem value={month}>{month}</MenuItem>
                                    ))}
                                    
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={3} style={{ marginTop: "1rem" }}>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Sales by EV</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={filterModel}
                                    label="Sales by EV"
                                    onChange={handleSetFilterModel}
                                >
                                    <MenuItem value="All">All</MenuItem>
                                    {evModelList.map(model => (
                                        <MenuItem value={model.name}>{model.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            
                <Grid item xs={11} className={classes.gridItem}>
                    <GenericTable rows={rows} labels={labels} view={'/models/1'} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default withStyles(styles, { withTheme: true })(GenericSalesList);