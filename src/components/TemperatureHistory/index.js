import React, { useEffect } from "react";

import {
  // main component
  Chart,
  // graphs
  Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
  // wrappers
  Layer, Animate, Transform, Handlers,
  // helpers
  DropShadow, Gradient
} from 'rumble-charts';


// This generates a fairly open ended button thats used in multiple places
import "./index.scss";

export default function TemperatureHistory(props) {

  const series = [
    {
      "tri-hourly-data": [
        17.6,
        15.8,
        18.2,
        24.8,
        36.9,
        30.1
      ]
    },
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

  <div class="TempGraph">
    <Chart width={800} height={400} series={series} >
      <Bars innerPadding={5} groupPadding={10} />
      <Lines minX={0} maxX={8} minY={0} maxY={40} />
      <Dots />
      <Title>Terrarium Temperature (°C)</Title>
    </Chart>
  </div>

  return (
    <>
      <div class="WELLDUH">
        <h1>Terrarium Temperature (°C)</h1>
      </div>
    </>
  );
}
