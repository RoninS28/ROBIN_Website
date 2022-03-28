import React from 'react'
import { Pie, Doughnut, Line } from "react-chartjs-2";

function DoughNut(props) {

    const state=props.state;
    const options = {
        maintainAspectRatio: false	// Don't maintain w/h ratio
      };

    return (
        <div>
             <div style={{height:'60vh',marginLeft:'10vw'}}>
            <Doughnut
              data={state}
              options={options}
            />
          </div>
        </div>
    )
}

export default DoughNut
