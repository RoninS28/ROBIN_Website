import React from 'react'

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



import { withStyles } from "@material-ui/core/styles";
import { useMediaQuery } from '@material-ui/core';

import {Doughnut} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';
import GenericTable from './GenericTable';


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

function createData(name, orders, completed, pending) {
    return { name, orders, completed, pending };
}

const rows = [
    createData('City Electric Scooter', 150, 100, 50),
    createData('City-1 Electric Scooter', 100, 50, 50),
    createData('City-2 Electric Scooter', 150, 100, 50),

];

const labels = ["name", "orders", "completed", "pending"];



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
    labels: ['November','December', 'January', 'February', 'March',
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
const FactoryOverview = (props) => {

    const { classes, theme } = props;

    const xs = useMediaQuery(theme.breakpoints.down('xs'));
    const sm = useMediaQuery(theme.breakpoints.up('xs') && theme.breakpoints.down('sm'))
    const md = useMediaQuery(theme.breakpoints.up('sm') && theme.breakpoints.down('md'))
    const lg = useMediaQuery(theme.breakpoints.up('md') && theme.breakpoints.down('lg'))
    const xl = useMediaQuery(theme.breakpoints.up('lg'))

    return (
        <Container 
            maxWidth={xs ? 'xs' : (sm ? 'sm' : (md ? 'md' : lg ? 'lg' : xl))} 
            className={classes.listWrapper}>

            <div className={classes.topRow}>
                {/* Breadcrumb */}

            </div>

            <div className={classes.statRow}>
                <div>
                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Factory Name
                            </Typography>
                            <Typography variant="h5" component="div">
                            Noga Factory
                            </Typography>
                        </CardContent>
                    </Card>
                            
                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography  sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Total Area
                            </Typography>
                            <Typography variant="h5" component="div">
                            20,000 sq. ft
                            </Typography>
                        </CardContent>
                    </Card>
                    
                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography  sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Total Employees
                            </Typography>
                            <Typography variant="h5" component="div">
                            70
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography  sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Max Capacity
                            </Typography>
                            <Typography variant="h5" component="div">
                            2000 units
                            </Typography>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Average Annual Prod.
                            </Typography>
                            <Typography variant="h5" component="div">
                            35000 units
                            </Typography>
                        </CardContent>
                    </Card>
                            
                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography  sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Sales last month
                            </Typography>
                            <Typography variant="h5" component="div">
                            Rs. 1,00,000
                            </Typography>
                        </CardContent>
                    </Card>
                    
                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography  sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Sales Income
                            </Typography>
                            <Typography variant="h5" component="div">
                            Rs. 1,50,000
                            </Typography>
                        </CardContent>
                    </Card>

                    <Card sx={{ minWidth: 275 }} className={classes.statCard}>
                        <CardContent>
                            <Typography  sx={{ fontSize: 14, margin:"1" }} color="text.secondary" gutterBottom>
                            Total Revenue
                            </Typography>
                            <Typography variant="h5" component="div">
                            Rs. 50,000
                            </Typography>
                        </CardContent>
                    </Card>
                </div>


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
            </div>

            <div className={classes.topRow}>
                {/* Serachbar and add Factory button */}
                <Button align="left" variant="contained" color="primary" style={{ marginBottom: "1rem", marginRight: "1rem" }}>View Complaints from Factory</Button>
                <Button align="left" variant="contained" color="primary" style={{ marginBottom: "1rem", marginRight: "1rem" }}>View Requests from Factory</Button>

            </div>

            <Typography variant="h5" component="div" style={{ padding: "0.2rem" }}>
                    EV Sales this month
            </Typography>
            <GenericTable rows={rows} labels={labels}/>

            <Card style={{ marginTop: "0.8rem", padding: "0.2rem" }}>
                <Typography variant="h5" component="div">
                    Total EV Sales per month
                </Typography>
                <Line
                data={lineData}
                options={{
                    title:{
                    display:true,
                    text:'Total EV Sales by months',
                    fontSize:20
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
                />
            </Card>

        </Container>
    );
}

export default withStyles(styles, { withTheme: true })(FactoryOverview);