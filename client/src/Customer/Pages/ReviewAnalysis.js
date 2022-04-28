import React, { useEffect, useState } from "react";

import { Box, Card, Grid, Typography } from '@material-ui/core';


// import GenericStatCard from './GenericStatCard';

import axios from 'axios';

import { CanvasJSChart } from 'canvasjs-react-charts'


const ReviewAnalysis = (props) => {

    const [options, setOptions] = useState(null);
    const [posOptions, setPosOptions] = useState(null);
    const [reviews, setReviews] = useState()
    const [totalCount, setTotalCount] = useState()
    const [totalPosCount, setTotalPosCount] = useState()

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

                // for postive tweets analysis
                let posobj = response.data.posfreq;
                let posdataPoints = [];

                let poscount = 0;
                Object.keys(posobj).forEach(key => {
                    poscount += posobj[key];
                });

                setTotalPosCount(poscount)
                Object.keys(posobj).forEach(key => {
                    posdataPoints.push(
                        { label: key, y: (posobj[key] / poscount) * 100 }
                    );
                    console.log(key, posobj[key]);
                });

                console.log("posdatapoints", posdataPoints);


                let tempObj = {
                    title: {
                        text: "Negative Reviews Analysis Chart"
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



                let postempObj = {
                    title: {
                        text: "Positive Reviews Analysis Chart"
                    },
                    data: [
                        {
                            // Change type to "doughnut", "line", "splineArea", etc.
                            type: "column",
                            dataPoints: posdataPoints
                        }
                    ]
                }
                setPosOptions(postempObj);

            }, (error) => {
                console.log("error: ", error);
            });

    }
    useEffect(() => {
        console.log("revirs is " + props.location.state.reviews)
        setReviews(props.location.state.reviews)
        console.log(reviews)
        if (!options || !posOptions) {
            getBarChartData();
        }
    }, [options,posOptions])

    return options?(
        <div  >
            <Card style={{ marginTop: "0.8rem", padding: "0.2rem" }}>
                <h2><Typography variant="h5" component="div">
                    Reviews Analysis
                </Typography></h2>
                <CanvasJSChart options={options} ylabel='percent' xlabel='labels'/>
            </Card>
            <h2>
                Total Negative Reviews : {totalCount}
            </h2>
            <br/>
            <br/>

            <Card style={{ marginTop: "0.8rem", padding: "0.2rem" }}>
                
                <CanvasJSChart options={posOptions} ylabel='percent' xlabel='labels'/>
            </Card>
            <h2>
                Total Positive Reviews : {totalPosCount}
            </h2>

        </div>
    ) : (<div>Loading</div>)
}


export default ReviewAnalysis;