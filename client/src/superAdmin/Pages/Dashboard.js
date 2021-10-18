import React, { useState } from 'react'
import { useTheme } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography } from '@material-ui/core';
import BasicCard from './BasicCard';
import { Line } from 'react-chartjs-2';
import GroupedBar from './GroupedBar';
import Calendar from 'react-calendar'

const styles = theme => ({

});

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
                <Grid item lg={6} md={6} sm={12}>
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
                <Grid item lg={6} md={6} sm={12}>
                    <Card style={{ marginTop: "0.8rem", padding: "0.2rem" }}>
                        <Typography variant="h5" component="div">
                            Some graph
                        </Typography>
                        <GroupedBar />
                    </Card>
                </Grid>
            </Grid>
            <div>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>

        </div>
    )
}

export default withStyles(styles, { withTheme: true })(Dashboard);
