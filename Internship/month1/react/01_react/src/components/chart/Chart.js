import React from "react";

import ChartBar from "./ChartBar";

import './Chart.css'

const Chart = (props) => {
    const filteredDataValue = props.dataPoints.map(dataPoint=>dataPoint.value);
    let totalMaximum = Math.max(...filteredDataValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar value={dataPoint.value} key={dataPoint.lable} lable={dataPoint.lable} maxValue={totalMaximum} />
      ))}
    </div>
  );
};

export default Chart;
