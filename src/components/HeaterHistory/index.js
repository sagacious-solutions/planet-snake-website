import React from "react";
import { Line } from "react-chartjs-2";

// This generates a fairly open ended button thats used in multiple places
import "./index.scss";

const data = {
  labels: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  datasets: [
    {
      label: "% Of Time Warm Hide Was On",
      data: [43.2, 65.5, 55.5, 73.4, 71.5, 69.5, 55.5],
      fill: false,
      // indexAxis: "x",
      backgroundColor: "#306998",
      borderColor: "#306998",
      tension: 0.4,
      yAxisID: "y-axis-1",
    },
    {
      label: "% Of Time Basking Hide Was On",
      data: [99, 99, 99, 99, 99, 99, 99],
      fill: false,
      backgroundColor: "red",
      borderColor: "red",
      yAxisID: "y-axis-1",
    },
    {
      label: "Room Temperature (External)",
      data: [30, 22, 25, 19, 18.5, 19.5, 20, 24],
      fill: false,
      // indexAxis: "x",
      backgroundColor: "green",
      borderColor: "green",
      tension: 0.4,
      yAxisID: "y-axis-2",
    },
  ],
};

const options = {
  responsive: true,
  maintainApectRatio: true,
  color: "#2a4d61",

  plugins: {
    legend: {
      align: "center",
      position: "bottom",
      labels: {},
    },
  },

  scales: {
    y: {
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
};

const LineChart = () => (
  <>
    <div className="header">
      <h1 className="TempDisp">Heater Run Time %</h1>
    </div>
    <div class="graphMargin2">
      <Line data={data} options={options} />
    </div>
  </>
);

export default LineChart;
