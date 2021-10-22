import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import useDatabaseAPI from "../../../hooks/useDatabaseAPI";

import "./UpdateSnakeState.scss";

const SPACING_AMMOUNT = "18%";

const end_button_style = {
  borderRadius: 5,
  paddingTop: SPACING_AMMOUNT,
  paddingBottom: SPACING_AMMOUNT,
};

const button_style = {
  paddingTop: SPACING_AMMOUNT,
  paddingBottom: SPACING_AMMOUNT,
};

export default function UpdateSnakeState(props) {
  const { putSnakeState } = useDatabaseAPI();
  const updateLocalSnakeState = props.updateAll;

  return (
    <ButtonGroup orientation="vertical">
      <Button
        key="poop"
        sx={end_button_style}
        onClick={() => {
          putSnakeState({
            poop_found: true,
          }).then(() => updateLocalSnakeState());
        }}
      >
        Poop Found
      </Button>
      <Button
        key="urate"
        sx={button_style}
        onClick={() => {
          putSnakeState({
            urate_found: true,
          }).then(() => updateLocalSnakeState());
        }}
      >
        Urate Found
      </Button>
      <Button
        key="ratOffered"
        sx={button_style}
        onClick={() =>
          putSnakeState({
            rat_offered: true,
          }).then(() => updateLocalSnakeState())
        }
      >
        Rat Offered
      </Button>
      <Button
        key="ratAte"
        sx={button_style}
        onClick={() =>
          putSnakeState({
            rat_ate: true,
          }).then(() => updateLocalSnakeState())
        }
      >
        Rat Ate
      </Button>
      <Button
        key="ratIgnored"
        sx={button_style}
        onClick={() =>
          putSnakeState({
            rat_ignored: true,
          }).then(() => updateLocalSnakeState())
        }
      >
        Rat Ignored
      </Button>
      <Button
        key="shedImminent"
        sx={button_style}
        onClick={() =>
          putSnakeState({
            shed_imminent: true,
          }).then(() => updateLocalSnakeState())
        }
      >
        Shed Imminent
      </Button>
      <Button
        key="shedComplete"
        sx={end_button_style}
        onClick={() =>
          putSnakeState({
            shed_complete: true,
          }).then(() => updateLocalSnakeState())
        }
      >
        Shed Complete
      </Button>
    </ButtonGroup>
  );
}
