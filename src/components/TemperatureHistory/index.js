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
      label: 'Current Temperature Reading',
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
      backgroundColor: 'skyblue',
      borderColor: 'teal',
      tension: 0.4,
    },
    {
      label: 'Weekly Average of Current Temperature Readings',
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
  color: 'gainsboro',

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
    // yAxes: [
    //   {
    //     ticks: {
    //       beginAtZero: true,
    //     },
    //   },
    // ],
  },
};

const LineChart = () => (
  <>
    <div className='header'>
      <h1 className='TempDisp'>Terrarium Temperature (°C)</h1>
      <div className='links'>
        {/* <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
        >
          Github Source
        </a> */}
      </div>
    </div>
    <Line data={data} options={options} />
    {/* <Chart /> */}
  </>
);

export default LineChart;

const series = [
  // {
  //   "tri-hourly-data": [
  //     17.6,
  //     15.8,
  //     18.2,
  //     24.8,
  //     36.9,
  //     30.1
  //   ]
  // },
  {
    "weekly-avg-data": [
      21.2,
      16.4,
      17,
      22.3,
      33.7,
      32.4,
      24.7,
      21
    ]
  }
];


// return (
{/* <> */ }
// <div className="TempDisp">
// <h1>Terrarium Temperature (°C)</h1>
{/* <div className="TempGraph">
          <Chart width={800} height={400} series={series} >
            <Bars innerPadding={5} groupPadding={10} />
            <Lines minX={0} maxX={8} minY={0} maxY={40} />
            <Dots />
            <Title>Terrarium Temperature (°C)</Title>
          </Chart> */}
// </div>

// <h1>Temperature Adjustment (°C)</h1>
{/* <div class="heater-controls">
          <HeaterControl
            currentTemp={state.baskingCurrent}
            targetTemp={state.baskingTarget}
            zone="Basking"
            onAdd={() => adjustBaskingTemp()}
            onMinus={() => adjustBaskingTemp(false)}
          />

          <HeaterControl
            currentTemp={state.hideCurrent}
            targetTemp={state.hideTarget}
            zone="Warm Hide"
            onAdd={() => adjustHideTemp()}
            onMinus={() => adjustHideTemp(false)}
          />
        </div> */}
{/* </div>
    </> */}
  // );

// export default TemperatureHistory;
