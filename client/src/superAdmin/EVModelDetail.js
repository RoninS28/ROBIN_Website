import React from 'react'
import {evModelList} from './sampleData.js'
import './EVModelDetail.css';

function EVModelDetail() {
    const {name, basePrice, imgUrl, colors, features, safety, design} = evModelList[0];
    return (
        <div className="Model-wrapper">
            <img className="Model-image" src={imgUrl} alt={`EV Model Pic: ${name}`}/>
            <div className="Model-basic-details">
                <input type="text" value={name}/>
                <input type="text" value={basePrice}/>
            </div>
        </div>
    )
}

export default EVModelDetail
