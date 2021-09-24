import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
  <Button key="three">Three</Button>,
  <Button key="three">Three</Button>,
  <Button key="three">Three</Button>,
  <Button key="three">Three</Button>,
];

export default function UpdateSnakeState() {
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="vertical outlined button group"
      size="large"
      display="flex"
      align-content="space-between"
    >
      {buttons}
    </ButtonGroup>
  );
}
