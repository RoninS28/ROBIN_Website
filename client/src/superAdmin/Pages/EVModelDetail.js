import React, { useState } from 'react'
import {evModelList} from '../Data/EVModels';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { SketchPicker } from 'react-color';

import './EVModelDetail.css';

const handleDesignDelete = () => {
    console.info('You clicked the delete icon.');
};

const handleSafetyDelete = () => {
    console.info('You clicked the delete icon.');
};

const handleColorDelete = () => {
    console.log('Ypu clicked the delete icon');
};

function EVModelDetail() {
    const {name, basePrice, imgUrl, colors, features, safety, design} = evModelList[0];

    const [pickerBackground, setPickerBackground] = useState('#fff');

    const handlePickerChangeComplete = (color) => {
        setPickerBackground(color.hex);
    };

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

                    <div style={{marginTop: "1rem", marginLeft: "0.6rem"}}>
                        <TextField label="Add new Design Feature" variant="standard" className="Input-text"/>
                        <Button variant="contained" style={{ margin: "1rem" }} color="primary">Add</Button>
                    </div>
                    
                </div>

                <div className="Model-basic-chip-container">
                    <h2>Safety</h2>
                    {safety.map(item => (
                        <Chip className="Model-basic-chip-item" label={item} onDelete={handleSafetyDelete} />
                    ))}
                    <div style={{marginTop: "1rem", marginLeft: "0.6rem"}}>
                        <TextField label="Add new Safety Feature" variant="standard" className="Input-text"/>
                        <Button variant="contained" style={{ margin: "1rem" }} color="primary">Add</Button>
                    </div>
                </div>

                <div className="Model-basic-color-container">
                    <div className="Color-wrapper">
                        <h2>Colors</h2>
                        {colors.map(color => (
                            <Chip 
                            className="Model-basic-chip-item Model-color-chip-item" 
                            onDelete={handleColorDelete} 
                            style={{backgroundColor: color}}
                            />
                        ))}
                    </div>
                    <div className="Color-picker-wrapper">
                        <SketchPicker 
                            color={pickerBackground}
                            onChangeComplete={handlePickerChangeComplete}
                        />
                        <Button variant="contained" style={{ margin: "1rem" }} color="primary">Add Color</Button>
                    </div>
                </div>
                <Button variant="contained" style={{ marginTop: "1rem", marginBottom: "1rem", left: "50%", transform: "translateX(-150%)" }} color="primary">Save Details</Button>
            </div>
        </div>
    )
}

export default EVModelDetail
