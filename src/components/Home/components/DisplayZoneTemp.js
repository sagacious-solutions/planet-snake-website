import React from "react";
import "./DisplayZoneTemp.scss";

export default function DisplaySensorData(props) {
  return (
    <>
      <p className="sensor-readout">
        {props.zone} : {props.temperature}
      </p>
    </>
  );
}
