import React from 'react'
import { Line } from "react-chartjs-2";

function LineChart(props) {
    const state=props.state;
    const options = {
        maintainAspectRatio: false	// Don't maintain w/h ratio
      };
    return (
        <div>
             <div style={{height:'60vh',marginLeft:'10vw'}}>
            <Line
              data={state}
              options={options}
            />
          </div>
            
        </div>
    )
}

export default LineChart
