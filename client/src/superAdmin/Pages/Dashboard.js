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
    const [optionsPie, setOptionsPie] = useState(null);

    const getBarChartData = () => {

        axios.post('/reviewAnalysis', {
            "text": [
                "Handle is not working properly",
                "Handle is broken",
                "charging points not available",
                "Battery life is poor",
                "wheel quality is the best"
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

            let posCnt = 0, negCnt = 0;

            console.log(response.data);
            for(let item of response.data.prediction.sentiment) {
                console.log("item ", item);
                if(item == "Negative")
                    negCnt++;
                else    
                    posCnt++;
            }

            console.log("datapoints", dataPoints);

            let tempObj = {
                title: {
                    text: "Negative Reviews according to Labels"
                },
                data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "column",
                    dataPoints: dataPoints
                }
                ]
            }


            // set options object for pie chart
            let tempOptionsPie = {
                exportEnabled: true,
                animationEnabled: true,
                title: {
                    text: "Distribution of reviews"
                },
                data: [{
                    type: "pie",
                    startAngle: 75,
                    toolTipContent: "<b>{label}</b>: {y}%",
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabelFontSize: 16,
                    indexLabel: "{label} - {y}%",
                    dataPoints: [
                        { y: posCnt, label: "Positive" },
                        { y: negCnt, label: "Negative" }
                    ]
                }]
            }
           
    

            setOptions({"barChartData": tempObj, "pieChartData": tempOptionsPie});
        
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

    return options ? (
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
                        <CanvasJSChart options = {options["barChartData"]}/>
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
                    {/* <Calendar
                        onChange={onChange}
                        showWeekNumbers
                        value={value}
                    /> */}
                    <CanvasJSChart options = {options["pieChartData"]}
			        />
                </Grid>
                <Grid item lg={8} md={8} sm={12}>
                    <GenericTable rows={rows} labels={labels} />
                </Grid>
            </Grid>
        </Box>
    ) : <div>Loading</div>
}

export default withStyles(styles, { withTheme: true })(Dashboard);
