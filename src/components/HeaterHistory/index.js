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
    "15h",
    "18h",
    "21h",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [17.6, 15.8, 18.2, 24.8, 36.9, 30.1],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "whitesmoke",
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
      },
    ],
  },
};

const LineChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
