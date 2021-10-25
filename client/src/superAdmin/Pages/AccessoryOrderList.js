import React from 'react'
import Box from '@material-ui/core/Box';

import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";
import { useMediaQuery } from '@material-ui/core';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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

function createData(orderId, factoryName, dateOfOrder, status) {
    return { orderId, factoryName, dateOfOrder, status };
}

const rows = [
    createData('C2K5464', 'Noga Factory', '10 Oct 2021', 'Pending'),
    createData('C2K5463', 'Noga Factory', '10 Oct 2020', 'Completed'),
    createData('C2K5465', 'Alpha Factory', '10 Sept 2021', 'Completed'),
    createData('C2K5466', 'Alpha Factory', '20 Sept 2021', 'Pending'),
    createData('C2K5467', 'Noga Factory', '10 Aug 2021', 'Completed'),
    createData('C2K5468', 'Beta Factory', '1 Oct 2021', 'Pending'),
    createData('C2K5469', 'Beta Factory', '11 Sept 2021', 'Completed'),
];

const labels = ["orderId", "factoryName", "dateOfOrder", "status", "actions"];


// Actual Function
const AccessoryOrderList = (props) => {

    const { classes, theme } = props;

    const xs = useMediaQuery(theme.breakpoints.down('xs'));
    const sm = useMediaQuery(theme.breakpoints.up('xs') && theme.breakpoints.down('sm'))
    const md = useMediaQuery(theme.breakpoints.up('sm') && theme.breakpoints.down('md'))
    const lg = useMediaQuery(theme.breakpoints.up('md') && theme.breakpoints.down('lg'))
    const xl = useMediaQuery(theme.breakpoints.up('lg'))

    const [filterFactory, setFilterFactory] = React.useState('All');

    const handleFilterFactoryChange = (event) => {
      setFilterFactory(event.target.value);
    };

    const [filterStatus, setFilterStatus] = React.useState('All');

    const handleSetFilterStatus = (event) => {
        setFilterStatus(event.target.value)
    }

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
                        Total Orders
                        </Typography>
                        <Typography variant="h5" component="div">
                        7
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Orders Completed
                        </Typography>
                        <Typography variant="h5" component="div">
                        4
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Pending Orders
                        </Typography>
                        <Typography variant="h5" component="div">
                        3
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <div className={classes.topRow}>
                <Box sx={{ minWidth: 120 }} style={{ marginLeft: "1rem" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Factory</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filterFactory}
                        label="Age"
                        onChange={handleFilterFactoryChange}
                        >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Noga Factory">Noga Factory</MenuItem>
                        <MenuItem value="Alpha Factory">Alpha Factory</MenuItem>
                        <MenuItem value="Beta Factory">Beta Factory</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Box sx={{ minWidth: 120 }} style={{ marginLeft: "1rem" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filterStatus}
                        label="Status"
                        onChange={handleSetFilterStatus}
                        >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <GenericTable rows={rows} labels={labels} view={'/accessory-orders/1'}/>
        </Container>
    );
}

export default withStyles(styles, { withTheme: true })(AccessoryOrderList);