import React, { useState } from 'react'
import { useTheme } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography } from '@material-ui/core';
import BasicCard from './BasicCard';
import { Line } from 'react-chartjs-2';
import GroupedBar from './GroupedBar';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import GenericTable from './GenericTable';
import {Pie, Doughnut} from 'react-chartjs-2';

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

function createData(batchId, outlet, dateOfOrder, status) {
    return { batchId, outlet, dateOfOrder, status };
}

const rows = [
    createData('C2K5464', 'Noga', '10 Oct 2021', 'Pending'),
    createData('C2K5463', 'Noga ', '10 Oct 2020', 'Completed'),
    createData('C2K5465', 'Alpha ', '10 Sept 2021', 'Completed'),
    createData('C2K5466', 'Alpha ', '20 Sept 2021', 'Pending'),
    createData('C2K5467', 'Noga ', '10 Aug 2021', 'Completed'),
    createData('C2K5468', 'Beta ', '1 Oct 2021', 'Pending'),
    createData('C2K5469', 'Beta ', '11 Sept 2021', 'Completed'),
];

const labels = ["batchId", "outlet", "dateOfOrder", "status", "actions"];

const Dashboard = (props) => {

    const { classes, theme } = props;
    const [value, onChange] = useState(new Date());
    console.log(value)

    return (
        <div>
            <div className={classes.statContainer}>
                <Grid container spacing={2}>
                    <Grid item lg={3} md={6} sm={12}>
                        <Card sx={{ minWidth: 275 }} style={{ minHeight: 135 }}>
                            <Typography variant="h3" component="div" style={{ padding: "1rem" }}>
                                10
                            </Typography>
                            <Typography color="text.secondary" gutterBottom style={{ padding: "0.2rem", paddingLeft: "1rem" }}>
                                New Batch Orders
                            </Typography>
                        </Card>
                    </Grid>

                    <Grid item lg={3} md={6} sm={12}>
                        <Card sx={{ minWidth: 275 }} style={{ minHeight: 135 }}>
                            <Typography variant="h3" component="div" style={{ padding: "1rem" }}>
                                12
                            </Typography>
                            <Typography color="text.secondary" gutterBottom style={{ padding: "0.2rem", paddingLeft: "1rem" }}>
                                Orders completed ready to dispatch
                            </Typography>
                        </Card>
                    </Grid>

                    <Grid item lg={3} md={6} sm={12}>
                        <Card sx={{ minWidth: 275 }} style={{ minHeight: 135 }}>
                            <Typography variant="h3" component="div" style={{ padding: "1rem" }}>
                                5
                            </Typography>
                            <Typography color="text.secondary" gutterBottom style={{ padding: "0.2rem", paddingLeft: "1rem" }}>
                                Orders still in processing
                            </Typography>
                        </Card>
                    </Grid>

                    <Grid item lg={3} md={6} sm={12}>
                        <Card sx={{ minWidth: 275 }} style={{ minHeight: 135 }}>
                            <Typography variant="h3" component="div" style={{ padding: "1rem" }}>
                                5
                            </Typography>
                            <Typography color="text.secondary" gutterBottom style={{ padding: "0.2rem", paddingLeft: "1rem" }}>
                                Batch orders scheduled for testing
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <Grid container spacing={2} className={classes.chartContainer}>
                <Grid item lg={8} md={8} sm={12}>
                    <Card style={{ marginTop: "0.8rem", padding: "0.2rem" }}>
                        <Typography variant="h5" component="div">
                            Total Orders Manufacturing per month
                        </Typography>
                        <Line
                            data={lineData}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Total EV Sales by months',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        />
                    </Card>
                </Grid>
                <Grid item lg={4} md={4} sm={12}>
                <Card sx={{ minWidth: 275 }} className={classes.pieChart}>
                    <Typography variant="h5" component="div">
                    Average Manufacturing of a model
                    </Typography>
                    <Doughnut
                        data={pieData}
                        options={{
                            title:{
                            display:true,
                            text:'Average EV Sales per month',
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
            <Grid container spacing={2} className={classes.chartContainer}>
                <Grid item lg={8} md={8} sm={12}>
                    <Card style={{ marginTop: "0.8rem", padding: "0.2rem" }}>
                        <Typography variant="h5" component="div">
                            Some graph
                        </Typography>
                        <GroupedBar />
                    </Card>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.chartContainer}>
                <Grid item lg={12} md={12} sm={12}>
                    <GenericTable rows={rows} labels={labels}/>
                </Grid>
                <Grid item lg={4} md={4} sm={12}>
                    <Calendar
                        onChange={onChange}
                        showWeekNumbers
                        value={value}
                    />
                </Grid>
                <Grid item lg={8} md={8} sm={12}>
                    <GenericTable rows={rows} labels={labels}/>
                </Grid>
                
            </Grid>



        </div>
    )
}

export default withStyles(styles, { withTheme: true })(Dashboard);
