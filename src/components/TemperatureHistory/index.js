import React from 'react';
import { Line } from 'react-chartjs-2';
// import { Chart } from 'chart.js/auto';

// This generates a fairly open ended button thats used in multiple places
import "./index.scss";

const Chart = require('chart.js');

const data = {
  labels: ['00h', '03h', '06h', '09h', '12h', '15h', '18h', '21h'],

  datasets: [
    {
      label: 'Current Temperature Reading (w/in Terrarium)',
      data: [
        17.6,
        15.8,
        18.2,
        24.8,
        36.9,
        30.1
      ],
      fill: false,
      indexAxis: 'x',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'yellow',
      tension: 0.4,
    },
    {
      label: 'Weekly Avg CTR (w/in Terrarium)',
      data: [
        21.2,
        16.4,
        17,
        22.3,
        33.7,
        32.4,
        24.7,
        21
      ],
      fill: false,
      indexAxis: 'x',
      backgroundColor: 'orangered',
      borderColor: 'orange',
      tension: 0.4,
    },

  ],
};

const options = {
  responsive: true,
  maintainApectRatio: true,
  color: '#2a4d61',
  // font: {
  //   size: 16,
  // },

  plugins: {
    legend: {
      align: 'center',
      position: 'bottom',
      labels: {

      },
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
    <div className='header'>
      <h1 className='TempDisp'>Terrarium Temperature Readings (°C)</h1>
    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;