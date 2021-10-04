import React from 'react'
import {evModelList} from '../Data/EVModels';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid  from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import './EVModelDetail.css';

const handleDesignDelete = () => {
    console.info('You clicked the delete icon.');
};

const handleSafetyDelete = () => {
    console.info('You clicked the delete icon.');
};

function EVModelDetail() {
    const {name, basePrice, imgUrl, colors, features, safety, design} = evModelList[0];
    return (
        <div className="Model-wrapper">
            <div className="Image-wrapper">
                <img className="Model-image" src={imgUrl} alt={`EV Model Pic: ${name}`}/>
                <Button variant="contained" style={{ margin: "1rem" }} color="primary">Upload</Button>
            </div>
            
            <div className="Model-basic-details">
                <TextField id="standard-basic" label="Name" variant="standard" className="Input-text" value={name}/>
                <TextField id="standard-basic" label="Base Price" variant="standard" className="Input-text" value={basePrice}/>
                <div className="Model-basic-features">
                    <h2>Features</h2>
                    {Object.entries(features).map(([key, value]) => (
                        <TextField id={key} label={key} variant="standard" className="Input-text" value={value}/>
                    ))} 
                </div>

                <div className="Model-basic-chip-container">
                    <h2>Design</h2>
                    {design.map(item => (
                        <Chip className="Model-basic-chip-item" label={item} onDelete={handleDesignDelete} />
                    ))}
                </div>

                <div className="Model-basic-chip-container">
                    <h2>Safety</h2>
                    {safety.map(item => (
                        <Chip className="Model-basic-chip-item" label={item} onDelete={handleSafetyDelete} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EVModelDetail
