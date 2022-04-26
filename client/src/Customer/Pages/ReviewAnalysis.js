import React, { useEffect, useState } from "react";

import { Box, Card, Grid, Typography } from '@material-ui/core';


// import GenericStatCard from './GenericStatCard';

import axios from 'axios';

import { CanvasJSChart } from 'canvasjs-react-charts'


const ReviewAnalysis = (props) => {

    const [options, setOptions] = useState(null);
    const [reviews, setReviews] = useState()

    const getBarChartData = () => {

        axios.get('/feedback/getall').then((response) => {
            console.log(response.data)

        })

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
                        { label: key, y: (obj[key] / count) * 100 }
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
    useEffect(() => {
        if (!options) {
            getBarChartData();
        }
    }, [options])

    return (
        <div  >
            <Card style={{ marginTop: "0.8rem", padding: "0.2rem" }}>
                <Typography variant="h5" component="div">
                    Some graph
                </Typography>
                <CanvasJSChart options={options} />
            </Card>

        </div>
    )
}


export default ReviewAnalysis;