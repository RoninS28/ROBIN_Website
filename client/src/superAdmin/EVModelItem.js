import React from 'react'
import './EVModelItem.css'
import editIcon from '../images/edit-solid.svg';
import trashIcon from '../images/trash-solid.svg';


function EVModelItem(props) {

    const {name, basePrice, imgUrl, colors} = props.model;

    return (
        <div className="List-item shadow-sm">
            <img className="List-image" src={imgUrl} alt={`EV Model Pic: ${name}`}/>
            <div className="List-item-header">
                <h3>{name}</h3>
                <p className="List-item-subtitle">Base Price: Rs.{basePrice}</p>
            </div>
            <div className="List-item-color-container">
                <h3>Colors</h3>
                <div className="List-item-color-wrapper">
                    {colors.map(color => (
                        <div className="List-item-color" style={{backgroundColor: color}}></div>
                    ))}
                </div>
            </div>
            <div className="List-icon-wrapper">
                <img className="List-icon" src={editIcon} alt="Edit EV Details"/>
                <img className="List-icon" src={trashIcon} alt="Delete EV Details"/>
            </div>
            
        </div>
    )
}

export default EVModelItem
