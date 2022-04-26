import React, { useEffect, useState } from "react";
import axios from 'axios';

import {useHistory} from 'react-router-dom';

export default function ReviewAnalysisFetch() {
    const history=useHistory()
    const fetchdata=()=>{
        axios.get('/feedback/getall').then((response) => {
            console.log(response.data)
            //setReviews(response.data)

            const tempreviews = []
            
                let reviewArr = response.data
                console.log(reviewArr[0])
                console.log(`TYPEOF IS ${reviewArr}`)
                reviewArr.map(item => {
        
                  tempreviews.push(item)
                })
                console.log(tempreviews)
                //setReviews(tempreviews)
                //console.log(reviews + "reviews")
               history.push({pathname:'/reviewanalysis',state:{reviews:tempreviews}})
        })

        
    }
    useEffect(() => {
        fetchdata();
    },[])
    return (
        <div>
            fetching data
        </div>
    );
}