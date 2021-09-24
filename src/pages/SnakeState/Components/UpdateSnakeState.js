import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { spacing } from "@mui/system";

import "./UpdateSnakeState.scss";

const SPACING_AMMOUNT = "14%";

const button_style = {
  border: 2,
  paddingTop: SPACING_AMMOUNT,
  paddingBottom: SPACING_AMMOUNT,
  textAlign: "center",
  textColor: "red",
  borderColor: "blue",
  borderRadius: 5,
  // borderBottomColor: "black!important",
};

export default function UpdateSnakeState() {
  return (
    <ButtonGroup
      orientation="vertical"
      // aria-label="vertical outlined button group"
      size="large"
      // display="flex"
    >
      <Box sx={button_style}>
        <Button key="poop">Poop Found</Button>
      </Box>
      <Box sx={button_style}>
        <Button key="urate">Urate Found</Button>
      </Box>
      <Box sx={button_style}>
        <Button key="ratOffered">Rat Offered</Button>
      </Box>
      <Box sx={button_style}>
        <Button key="ratAte">Rat Ate</Button>
      </Box>
      <Box sx={button_style}>
        <Button key="ratIgnored">Rat Ignored</Button>
      </Box>
      <Box sx={button_style}>
        <Button key="shedImminent">Shed Imminent</Button>
      </Box>
      <Box sx={button_style}>
        <Button key="shedComplete">Shed Complete</Button>
      </Box>
    </ButtonGroup>
  );
}
