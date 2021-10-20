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
import { useMediaQuery } from '@material-ui/core';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {Line} from 'react-chartjs-2';
import {Pie, Doughnut} from 'react-chartjs-2';
import { Grid } from '@mui/material';
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


const pieData = {
    labels: ['Model Damage', 'Test Drive Issue', 'Miscellaneous'],
    datasets: [
      {
        label: 'Complaint Types',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        ],
        data: [140, 59, 80]
      }
    ]
}

const lineData = {
    labels: ['November','December', 'January', 'February', 'March',
             'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [
      {
        label: 'Total Complaints',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [165, 159, 180, 181, 156, 176, 190, 380, 281, 186, 218, 90]
      }
    ]
}
function createData(complaintId, customerName, complaintType, dateOfOrder, status) {
    return { complaintId, customerName, complaintType,dateOfOrder, status };
}

const rows = [
    createData('C2K5464', 'Siddhesh R Ramane', 'Model Damage', '10 Oct 2021', 'Pending'),
    createData('C2K5463', 'Kartik S Rane', 'Test Drive Issue', '10 Oct 2020', 'Addressed'),
    createData('C2K5465', 'Amey S Marathe', 'Model Damage', '10 Sept 2021', 'Addressed'),
    createData('C2K5466', 'Neha M Patil', 'Miscellaneous', '20 Sept 2021', 'Pending'),
    createData('C2K5467', 'Nutan D. Deshmukh', 'Miscellaneous', '10 Aug 2021', 'Addressed'),
    createData('C2K5468', 'Tripada Kyada', 'Model Damage', '1 Oct 2021', 'Pending'),
    createData('C2K5469', 'Vivek Katkar', 'Model Damage', '11 Sept 2021', 'Addressed'),
];

const labels = ["complaintId", "customerName", "complaintType", "dateOfOrder", "status", "actions"];


// Actual Function
const CustomerComplaintList = (props) => {

    const { classes, theme } = props;

    const xs = useMediaQuery(theme.breakpoints.down('xs'));
    const sm = useMediaQuery(theme.breakpoints.up('xs') && theme.breakpoints.down('sm'))
    const md = useMediaQuery(theme.breakpoints.up('sm') && theme.breakpoints.down('md'))
    const lg = useMediaQuery(theme.breakpoints.up('md') && theme.breakpoints.down('lg'))
    const xl = useMediaQuery(theme.breakpoints.up('lg'))

    const [filterStatus, setFilterStatus] = React.useState('All');

    const handleSetFilterStatus = (event) => {
        setFilterStatus(event.target.value)
    }

    const [filterType, setFilterType] = React.useState('All');

    const handleSetFilterType = (event) => {
        setFilterType(event.target.value)
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
                        Total Complaints
                        </Typography>
                        <Typography variant="h5" component="div">
                        17
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Complaints Addressed
                        </Typography>
                        <Typography variant="h5" component="div">
                        9
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Pending Complaints
                        </Typography>
                        <Typography variant="h5" component="div">
                        8
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <div className={classes.topRow}>

            <Box sx={{ minWidth: 120 }} style={{ marginLeft: "1rem" }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filterType}
                        label="Status"
                        onChange={handleSetFilterType}
                        >
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Model Damage">Model Damage</MenuItem>
                        <MenuItem value="Test Drive Issue">Test Drive Issue</MenuItem>
                        <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
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
                        <MenuItem value="Addressed">Addressed</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <GenericTable rows={rows} labels={labels}/>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card sx={{ minWidth: 285 }} style={{ marginTop: "0.8rem", padding: "0.2rem" }}>
                        <Typography variant="h5" component="div">
                            Avg Complaint types per month
                        </Typography>
                        <Doughnut
                            data={pieData}
                            options={{
                                title:{
                                display:true,
                                text:'Average Complaint types per month',
                                fontSize:20
                                },
                                legend:{
                                display:true,
                                position:'right'
                                }
                            }}
                        />
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    <Card sx={{ minWidth: 285 }} style={{ marginTop: "0.8rem", padding: "0.2rem" }}>
                        <Typography variant="h5" component="div">
                            Total Customer Complaints per Month
                        </Typography>
                        <Line
                        data={lineData}
                        options={{
                            title:{
                            display:true,
                            text:'Total Customer Complaints per Month',
                            fontSize:20
                            },
                            legend:{
                            display:true,
                            position:'right'
                            }
                        }}
                        />
                    </Card>
                </Grid>
            </Grid>

        </Container>
    );
}

export default withStyles(styles, { withTheme: true })(CustomerComplaintList);