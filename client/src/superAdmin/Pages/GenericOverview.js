import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";
import { useMediaQuery } from '@material-ui/core';
import DoughNut from './DoughNut';
import LineChart from './LineChart';
import GenericTable from './GenericTable';
import { useHistory, useLocation } from 'react-router';
import GenericStatCard from './GenericStatCard';
import axios from 'axios';


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
function createData(name, orders, completed, pending) {
    return { name, orders, completed, pending };
}

const rows = [
    createData('City Electric Scooter', 150, 100, 50),
    createData('City-1 Electric Scooter', 100, 50, 50),
    createData('City-2 Electric Scooter', 150, 100, 50),

];

const labels = ["name", "orders", "completed", "pending"];



// Sample Pie Data...This will also change
const pieData = {
    labels: ['City Electric Scooter', 'City-1 Electric Scooter', 'City-2 Electric Scooter'],
    datasets: [
        {
            label: 'EV Models',
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

// Sample Line chart data
const lineData = {
    labels: ['November', 'December', 'January', 'February', 'March',
        'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [
        {
            label: 'Total Sale',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [165, 159, 180, 181, 156, 176, 190, 380, 281, 186, 218, 90]
        }
    ]
}

// Actual Function
const GenericOverview = (props) => {

    const { classes, theme } = props;

    const history = useHistory();
    const location = useLocation();

    const [arrList, setArrList] = useState('');
    const [componentName, setComponentName] = useState('');
    const [componentNameSingular, setComponentNameSingular] = useState('');
    const [editBtnUrl, setEditBtnUrl] = useState('');
    const [sampleTitle, setSampleTitle] = useState('');
    const [entityId, setEntityId] = useState('');
    const [entityData, setEntityData] = useState({});

    const getFactory = (id) => {
        axios.get(`/factories/${id}`)
            .then(res => {
                setEntityData(res.data);
                console.log("factory details: ", res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const getOutlet = (id) => {
        axios.get(`/outlets/${id}`)
            .then(res => {
                setEntityData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const getServiceCenter = (id) => {
        axios.get(`/service-centers/${id}`)
            .then(res => {
                setEntityData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        console.log("use effect called!!");
        setArrList(location.pathname.split('/'));
        // ['', 'service-centers', '1']
        setComponentName(arrList[1]);
        setEntityId(arrList[2]);
        console.log(entityId);

        if (componentName == 'factories') {
            setComponentNameSingular('Factory');
            setEditBtnUrl(`/factories/${entityId}/edit`);
            setSampleTitle('Factory Name');
            getFactory(entityId);
        } else if (componentName == 'outlets') {
            setComponentNameSingular('Outlet');
            setEditBtnUrl(`/outlets/${entityId}/edit`);
            setSampleTitle('Outlet Name');
            getOutlet(entityId);
        } else if (componentName == 'service-centers') {
            setComponentNameSingular('Service Center');
            setEditBtnUrl(`/service-centers/${entityId}/edit`);
            setSampleTitle('Service Center Name');
            getServiceCenter(entityId);
        }

    }, [componentName]);

    return (
        <Box sx={{ flexGrow: 1 }} m={2}>
            <Grid container spacing={1}>

                {/* Stat Card container */}
                <Grid item xs={12} sm={12} md={12} lg={8}>

                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <GenericStatCard
                                title={sampleTitle}
                                subtitle={entityData.name}
                                editBtnUrl={editBtnUrl}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <GenericStatCard
                                title="Average Annual Prod."
                                subtitle="35000 units"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <GenericStatCard
                                title="Total Area"
                                subtitle="20,000 sq. ft"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <GenericStatCard
                                title="Sales last month"
                                subtitle="Rs. 1,00,000"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <GenericStatCard
                                title="Total Employees"
                                subtitle="70"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <GenericStatCard
                                title="Sales Income"
                                subtitle="Rs. 1,50,000"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <GenericStatCard
                                title="Max Capacity"
                                subtitle="2000 units"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={6}>
                            <GenericStatCard
                                title="Total Revenue"
                                subtitle="Rs. 50,000"
                            />
                        </Grid>
                    </Grid>

                </Grid>

                {/* Doughnut statistics */}
                <Grid item xs={12} sm={12} md={12} lg={4}>
                    <Card>
                        <DoughNut state={pieData} />
                    </Card>
                </Grid>

                {/* More Features Buttons */}
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Button align="left" variant="contained" color="primary" style={{ marginBottom: "1rem", marginRight: "1rem" }}>Complaints</Button>
                    <Button onClick={() => history.push(`/${arrList[1]}/${arrList[2]}/stocks`)} align="left" variant="contained" color="primary" style={{ marginBottom: "1rem", marginRight: "1rem" }}>Existing Stocks</Button>
                    <Button align="left" variant="contained" color="primary" style={{ marginBottom: "1rem", marginRight: "1rem" }}>Stock Requests</Button>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant="h5" component="div" style={{ padding: "0.2rem" }}>
                        EV Sales this month
                    </Typography>
                    <GenericTable rows={rows} labels={labels} />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Card>
                        <LineChart state={lineData} />
                    </Card>
                </Grid>

            </Grid>
        </Box>
    );
}

export default withStyles(styles, { withTheme: true })(GenericOverview);