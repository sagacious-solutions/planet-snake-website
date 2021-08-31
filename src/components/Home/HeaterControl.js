import React from "react";
import classNames from "classnames/bind";

import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

import "./HeaterControl.scss";

// This generates a fairly open ended button thats used in multiple places
export default function HeaterControl(props) {
  // Generates a class tag to determine if the button is green or red
  let heaterClass = classNames("heater-controller", {});
  const currentTemp = 31.5;
  const targetTemp = 32;
  const icon_styles = { fontSize: "1em" };
  const layout_styles = { display: "flex" };
  const zone = "Warm Hide";

  return (
    <div className="heater-controller">
      <h5>{zone}</h5>
      <AddOutlinedIcon style={icon_styles} />
      {currentTemp} / {targetTemp}c
      <RemoveOutlinedIcon style={icon_styles} />
    </div>
  );
}
