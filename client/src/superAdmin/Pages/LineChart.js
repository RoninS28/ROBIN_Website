import React from 'react'
import { Line } from "react-chartjs-2";

function LineChart(props) {
  const state = props.state;
  const options = {
    maintainAspectRatio: true	// Don't maintain w/h ratio
  };
  return (
    <div>
      <div>
        <Line
          data={state}
          options={options}
        />
      </div>

    </div>
  )
}

export default LineChart
