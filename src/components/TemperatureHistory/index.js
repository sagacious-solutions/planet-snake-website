import React, { useEffect } from "react";
import LineChart from "./ChartComponent";
// This generates a fairly open ended button thats used in multiple places
import "./index.scss";

export default function TemperatureHistory(props) {
  return (
    <>
      <div class="tempChart">
        <LineChart />
      </div>
    </>
  );
}
