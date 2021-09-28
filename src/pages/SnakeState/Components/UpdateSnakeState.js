import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { spacing } from "@mui/system";
import useDatabaseAPI from "../../../hooks/useDatabaseAPI";

import "./UpdateSnakeState.scss";

const SPACING_AMMOUNT = "18%";

const end_button_style = {
  borderRadius: 5,
  paddingTop: SPACING_AMMOUNT,
  paddingBottom: SPACING_AMMOUNT,
};

const button_style = {
  // border: 2,
  paddingTop: SPACING_AMMOUNT,
  paddingBottom: SPACING_AMMOUNT,
  // textAlign: "center",
  // textColor: "red",
  // borderColor: "blue",
  // borderRadius: 5,
  // borderBottomColor: "black!important",
};

export default function UpdateSnakeState() {
  const { putSnakeState } = useDatabaseAPI();

  return (
    <ButtonGroup
      orientation="vertical"
      // aria-label="vertical outlined button group"
      // size="large"
      // display="flex"
    >
      <Button
        key="poop"
        sx={end_button_style}
        onClick={() =>
          putSnakeState({
            thisData: "hello",
          })
        }
      >
        Poop Found
      </Button>
      <Button key="urate" sx={button_style}>
        Urate Found
      </Button>
      <Button key="ratOffered" sx={button_style}>
        Rat Offered
      </Button>
      <Button key="ratAte" sx={button_style}>
        Rat Ate
      </Button>
      <Button key="ratIgnored" sx={button_style}>
        Rat Ignored
      </Button>
      <Button key="shedImminent" sx={button_style}>
        Shed Imminent
      </Button>
      <Button key="shedComplete" sx={end_button_style}>
        Shed Complete
      </Button>
    </ButtonGroup>
  );
}
