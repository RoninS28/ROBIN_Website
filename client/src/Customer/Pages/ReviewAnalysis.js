import React, { useEffect, useState } from "react";

import { Box, Card, Grid, Typography } from '@material-ui/core';


// import GenericStatCard from './GenericStatCard';

import axios from 'axios';

import { CanvasJSChart } from 'canvasjs-react-charts'


const ReviewAnalysis = (props) => {

    const [options, setOptions] = useState(null);
    const [reviews, setReviews] = useState()
    const [totalCount, setTotalCount] = useState()

    const getBarChartData = () => {

        // axios.get('http://localhost:5000/feedback/getall').then((response) => {
        //     console.log(response.data)
        //     //setReviews(response.data)

        //     const tempreviews = []
            
        //         let reviewArr = response.data
        //         console.log(reviewArr[0])
        //         console.log(`TYPEOF IS ${reviewArr}`)
        //         reviewArr.map(item => {
        
        //           tempreviews.push(item)
        //         })
        //         console.log(tempreviews)
        //         setReviews(tempreviews)
        //         console.log(reviews + "reviews")
              
        // })
        

        console.log("before sxiod reviews is " + reviews)
        axios.post('/reviewAnalysis', {
            // "text": [
                //     "Handle is not working properly",
                //     "Handle is broken",
                //     "charging points not available",
                //     "Battery life is poor"
                // ]
            "text" : props.location.state.reviews
        })
            .then((response) => {
                console.log("res from backend ", response.data);

                let obj = response.data.freq;
                let dataPoints = [];

                let count = 0;
                Object.keys(obj).forEach(key => {
                    count += obj[key];
                });

                setTotalCount(count)
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
        console.log("revirs is " + props.location.state.reviews)
        setReviews(props.location.state.reviews)
        console.log(reviews)
        if (!options) {
            getBarChartData();
        }
    }, [options])

    return options?(
        <div  >
            <Card style={{ marginTop: "0.8rem", padding: "0.2rem" }}>
                <Typography variant="h5" component="div">
                    Reviews Analysis
                </Typography>
                <CanvasJSChart options={options} ylabel='percent' xlabel='labels'/>
            </Card>
            <div>
                Total Negative Reviews : {totalCount}
            </div>

        </div>
    ) : (<div>Loading</div>)
}


export default ReviewAnalysis;