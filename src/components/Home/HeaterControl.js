import React from "react";

import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

import "./HeaterControl.scss";

// This generates a fairly open ended button thats used in multiple places
export default function HeaterControl(props) {
  // Generates a class tag to determine if the button is green or red
  const currentTemp = props.currentTemp;
  const targetTemp = props.targetTemp;
  const icon_styles = { fontSize: "1em" };
  const zone = props.zone;

  return (
    <section className="control-layout">
      <h2>{zone}</h2>
      <section className="heater-controller">
        <AddOutlinedIcon style={icon_styles} onClick={props.onAdd} />
        {currentTemp} / {targetTemp}c
        <RemoveOutlinedIcon style={icon_styles} onClick={props.onMinus} />
      </section>
    </section>
  );
}
