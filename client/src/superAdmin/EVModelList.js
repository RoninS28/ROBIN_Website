import React from 'react'
import EVModelItem from './EVModelItem'
import './EVModelList.css'

import { evModelList } from './sampleData'

function EVModelList() {
    return (
        <div>
            <button style={{marginLeft: "140px"}} className="Btn">Add new EV Model</button>
            <div className="List-container">
                {evModelList.map(model => <EVModelItem key={model.id} model={model} />)}
            </div>
        </div>
    )
}

export default EVModelList
