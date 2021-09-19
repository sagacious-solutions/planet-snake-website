import React from "react";

import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import "./HeaterControl.scss";

// This generates a button group that shows current temperature value, target temperature value, and allows user input to change target
export default function HeaterControl(props) {
  const currentTemp = props.currentTemp;
  const targetTemp = props.targetTemp;
  const icon_styles = { fontSize: "1em" };
  const zone = props.zone;

  return (
    <>
      <div className="heater-gui">
        <h2>{zone}</h2>
        <ButtonGroup
          variant="contained"
          aria-label="contained primary button group"
        >
          <Button onClick={props.onMinus}>
            <RemoveOutlinedIcon style={icon_styles} />
          </Button>

          <Button>
            {currentTemp}°c / {targetTemp}°c
          </Button>
          <Button onClick={props.onAdd}>
            <AddOutlinedIcon style={icon_styles} />
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}
