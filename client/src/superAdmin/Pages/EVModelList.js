import React from 'react'
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { evModelList } from '../Data/EVModels';
import { withStyles } from "@material-ui/core/styles";
import { Grid, useMediaQuery } from '@material-ui/core';

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
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} className={classes.mainContainer}>
                <Grid item xs={11} className={classes.flexContainer}>
                    <Button variant="contained" color="primary" style={{ marginBottom: "1rem" }}>Add New EV</Button>
                </Grid>
                <Grid item xs={11} className={classes.gridItem}>
                    <GenericTable rows={rows} labels={labels} view={'/models/1'}/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default withStyles(styles, { withTheme: true })(EVModelList);