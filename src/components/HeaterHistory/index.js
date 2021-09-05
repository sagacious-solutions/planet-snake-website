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
      label: "% Of time Warm Hide was turned on",
      data: [43.2, 65.5, 55.5, 73.4, 71.5, 69.5, 55.5],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "whitesmoke",
      yAxisID: "y-axis-1",
    },
    {
      label: "% Of time Basking Hide was turned on",
      data: [99, 99, 99, 99, 99, 99, 99],
      fill: false,
      backgroundColor: "white",
      borderColor: "#ff6200",
      yAxisID: "y-axis-1",
    },
    {
      label: "Room Temperature",
      data: [30, 22, 25, 19, 18.5, 19.5, 20],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "#03cafc",
      yAxisID: "y-axis-2",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
        id: "y-axis-1",
      },
      {
        ticks: {
          beginAtZero: false,
        },
        id: "y-axis-2",
      },
    ],
  },
};

const LineChart = () => (
  <>
    <Line data={data} options={options} data={data} />
  </>
);

export default LineChart;
