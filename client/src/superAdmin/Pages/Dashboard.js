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
                                150
                            </Typography>
                            <Typography color="text.secondary" gutterBottom style={{ padding: "0.2rem", paddingLeft: "1rem" }}>
                                New Orders
                            </Typography>
                        </Card>
                    </Grid>

                    <Grid item lg={3} md={6} sm={12}>
                        <Card sx={{ minWidth: 275 }} style={{ minHeight: 135 }}>
                            <Typography variant="h3" component="div" style={{ padding: "1rem" }}>
                                53%
                            </Typography>
                            <Typography color="text.secondary" gutterBottom style={{ padding: "0.2rem", paddingLeft: "1rem" }}>
                                Test Drives
                            </Typography>
                        </Card>
                    </Grid>

                    <Grid item lg={3} md={6} sm={12}>
                        <Card sx={{ minWidth: 275 }} style={{ minHeight: 135 }}>
                            <Typography variant="h3" component="div" style={{ padding: "1rem" }}>
                                44
                            </Typography>
                            <Typography color="text.secondary" gutterBottom style={{ padding: "0.2rem", paddingLeft: "1rem" }}>
                                Service Requests
                            </Typography>
                        </Card>
                    </Grid>

                    <Grid item lg={3} md={6} sm={12}>
                        <Card sx={{ minWidth: 275 }} style={{ minHeight: 135 }}>
                            <Typography variant="h3" component="div" style={{ padding: "1rem" }}>
                                20
                            </Typography>
                            <Typography color="text.secondary" gutterBottom style={{ padding: "0.2rem", paddingLeft: "1rem" }}>
                                Service Completed
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <Grid container spacing={2} className={classes.chartContainer}>
                <Grid item lg={8} md={8} sm={12}>
                    <Card style={{ marginTop: "0.8rem", padding: "0.2rem" }}>
                        <Typography variant="h5" component="div">
                            Total EV Sales per month
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
                    Average EV Sales per month
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
                <Grid item lg={4} md={4} sm={12}>
                    <Calendar
                        onChange={onChange}
                        showWeekNumbers
                        value={value}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.chartContainer}>
                <Grid item lg={6} md={6} sm={12}>
                    <GenericTable />
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                    <GenericTable />
                </Grid>
                
            </Grid>



        </div>
    )
}

export default withStyles(styles, { withTheme: true })(Dashboard);
