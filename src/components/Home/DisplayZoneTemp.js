import React from "react";
import "./DisplayZoneTemp.scss";
// This generates a fairly open ended button thats used in multiple places
export default function DisplayZoneTemp(props) {
  // Generates a class tag to determine if the button is green or re

  return (
    <>
      <p className="tempsOnly">
        {props.zone} : {props.temperature}c
      </p>
    </>
  );
}
