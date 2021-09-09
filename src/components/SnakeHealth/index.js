import React from "react";
import { Doughnut } from "react-chartjs-2";

import "./index.scss";

const data = {
  labels: [
    "Destroying her house",
    "Sleeping",
    "Knocking the camera down",
    "Slytherin",
    "Destroying plants",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 30, 3, 5, 18],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(50, 255, 14, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(50, 169, 14, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// width={"30%"},
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
    // y: {
    //   suggestedMin: 0,
    //   suggestedMax: 100,
    // },
  },
};

const DoughnutChart = () => (
  <>
    <div class="donutChart1">
      <h1> How Sunny Spends Her Time (%)</h1>
      <Doughnut data={data} options={options} />
    </div>
  </>
);

export default DoughnutChart;
