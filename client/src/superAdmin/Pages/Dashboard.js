import React, { useEffect, useState } from 'react'
import { withStyles } from "@material-ui/core/styles";
import { Box, Card, Grid, Typography } from '@material-ui/core';
import GroupedBar from './GroupedBar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import GenericTable from './GenericTable';
import GenericStatCard from './GenericStatCard';
import DoughNut from './DoughNut';
import LineChart from './LineChart';
import axios from 'axios';

import {CanvasJSChart} from 'canvasjs-react-charts'

const styles = theme => ({

});

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

const Dashboard = (props) => {

    const { classes, theme } = props;
    const [value, onChange] = useState(new Date());
    console.log(value);

    const [options, setOptions] = useState(null);
    // let options = {
    //     animationEnabled: true,
    //     exportEnabled: true,
    //     theme: "light2", //"light1", "dark1", "dark2"
    //     title:{
    //         text: "Simple Column Chart with Index Labels"
    //     },
    //     axisY: {
    //         includeZero: true
    //     },
    //     data: [{
    //         type: "column", //change type to bar, line, area, pie, etc
    //         //indexLabel: "{y}", //Shows y value on all Data Points
    //         indexLabelFontColor: "#5A5757",
    //         indexLabelPlacement: "outside",
    //         dataPoints: [
    //             { x: 10, y: 71 },
    //             { x: 20, y: 55 },
    //             { x: 30, y: 50 },
    //             { x: 40, y: 65 },
    //             { x: 50, y: 71 },
    //             { x: 60, y: 68 },
    //             { x: 70, y: 38 },
    //             { x: 80, y: 92, indexLabel: "Highest" },
    //             { x: 90, y: 54 },
    //             { x: 100, y: 60 },
    //             { x: 110, y: 21 },
    //             { x: 120, y: 49 },
    //             { x: 130, y: 36 }
    //         ]
    //     }]
    // }

    const getBarChartData = () => {

        axios.post('/reviewAnalysis', {
            "text": [
                "Handle is not working properly",
                "Handle is broken",
                "charging points not available",
                "Battery life is poor"
            ]
        })
        .then((response) => {
            console.log("res from backend ", response.data);

            let obj = response.data.freq;
            let dataPoints = [];
            
            let count = 0;
            Object.keys(obj).forEach(key => {
                count += obj[key];
            });

            Object.keys(obj).forEach(key => {
                dataPoints.push(
                    {label: key, y: (obj[key] / count) * 100}
                );
                console.log(key, obj[key]);
            });

            console.log("datapoints", dataPoints);

            let tempObj = {
                title: {
                    text: "Basic Column Chart"
                },
                data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints: dataPoints
                }
                ]
            }
            setOptions(tempObj);

          }, (error) => {
            console.log("error: ", error);
        });

    }
    useEffect(()=>{
        if(!options) {
            getBarChartData();
        }            
    },[options])


    // Layout of Dashboard can change depending upon the situation
    // Current layout: 
    // 4 stat cards
    // 1 line chart  --- 1 pie chart
    // 1 bar ghaph  --- 4 stat cards vertical
    // some table
    // calendar --- some other table

    return (
        <Box sx={{ flexGrow: 1 }} m={2}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <GenericStatCard
                        subtitle="150"
                        title="New Orders"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <GenericStatCard
                        subtitle="53%"
                        title="Test Drives"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <GenericStatCard
                        subtitle="44"
                        title="Service Requests"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <GenericStatCard
                        subtitle="20"
                        title="Service Completed"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8}>
                    <Card>
                        <Typography variant="h5" component="div">
                            Total EV Sales per month
                        </Typography>
                        <LineChart state={lineData} />
                    </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                    <Card>
                        <Typography variant="h5" component="div">
                            Average EV Sales this month
                        </Typography>
                        <DoughNut state={pieData} />
                    </Card>
                </Grid>
                <Grid item lg={8} md={8} sm={12}>
                    <Card style={{ marginTop: "0.8rem", padding: "0.2rem" }}>
                        <Typography variant="h5" component="div">
                            Some graph
                        </Typography>
                        <CanvasJSChart options = {options}/>
                    </Card>
                </Grid>
                <Grid item lg={4} md={4} sm={12}>
                    <Grid container spacing={2} style={{ marginTop: "0.6rem" }}>
                        <Grid item xs={12}>
                            <GenericStatCard
                                subtitle="150"
                                title="New Orders"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <GenericStatCard
                                subtitle="53%"
                                title="Test Drives"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <GenericStatCard
                                subtitle="44"
                                title="Service Requests"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <GenericStatCard
                                subtitle="20"
                                title="Service Completed"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={12} md={12} sm={12}>
                    <GenericTable rows={rows} labels={labels} />
                </Grid>
                <Grid item lg={4} md={4} sm={12} >
                    <Calendar
                        onChange={onChange}
                        showWeekNumbers
                        value={value}
                    />
                </Grid>
                <Grid item lg={8} md={8} sm={12}>
                    <GenericTable rows={rows} labels={labels} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default withStyles(styles, { withTheme: true })(Dashboard);
