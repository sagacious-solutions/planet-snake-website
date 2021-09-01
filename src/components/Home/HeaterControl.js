import React from "react";

import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

import "./HeaterControl.scss";

// This generates a fairly open ended button thats used in multiple places
export default function HeaterControl(props) {
  // Generates a class tag to determine if the button is green or red
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
          color="primary"
          aria-label="contained primary button group"
        >
          <Button onClick={props.onAdd}>
            <AddOutlinedIcon style={icon_styles} />
          </Button>
          <Button>
            {currentTemp} / {targetTemp}c
          </Button>
          <Button onClick={props.onMinus}>
            <RemoveOutlinedIcon style={icon_styles} />
          </Button>
        </ButtonGroup>
      </div>
    </>
  );
}
