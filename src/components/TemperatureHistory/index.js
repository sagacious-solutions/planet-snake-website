import React from "react";
import { Line } from "react-chartjs-2";
// import { Chart } from 'chart.js/auto';

// This generates a fairly open ended button thats used in multiple places
import "./index.scss";

const Chart = require("chart.js");

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
      label: "Basking Spot",
      data: [24, 21, 27, 24.5, 23.3, 30.1, 24],
      fill: false,
      indexAxis: "x",
      backgroundColor: "red",
      borderColor: "red",
      tension: 0.4,
    },
    {
      label: "Warm Hide",
      data: [32, 32, 31.5, 33, 32, 32, 32.5],
      fill: false,
      indexAxis: "x",
      backgroundColor: "orange",
      borderColor: "orange",
      tension: 0.4,
    },
    {
      label: "Cool Hide",
      data: [21, 19, 20, 21, 23, 23, 22],
      fill: false,
      indexAxis: "x",
      backgroundColor: "blue",
      borderColor: "blue",
      tension: 0.4,
    },
    {
      label: "Room Temperature",
      data: [21.2, 20, 21.5, 18, 19, 23, 22.5, 21],
      fill: false,
      indexAxis: "x",
      backgroundColor: "green",
      borderColor: "Green",
      tension: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainApectRatio: true,
  color: "#2a4d61",
  aspectRatio: 2,
  // font: {
  //   size: 16,
  // },

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
      suggestedMax: 40,
    },
  },
};

const LineChart = () => (
  <>
    <div className="header">
      <h1 className="TempDisp">
        Terrarium Daily Average Temperature Readings (°C)
      </h1>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;
