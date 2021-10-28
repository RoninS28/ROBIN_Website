import React from 'react'
import { Pie, Doughnut, Line } from "react-chartjs-2";

function DoughNut(props) {

  const state = props.state;
  const options = {
    maintainAspectRatio: true	// Don't maintain w/h ratio
  };

  return (
    <div>
      <div>
        <Doughnut
          data={state}
          options={options}
        />
      </div>
    </div>
  )
}

export default DoughNut
