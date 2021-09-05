import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles, withTheme, ThemeProvider } from "@material-ui/core/styles";
import { createTheme, useTheme } from "@material-ui/core/styles";

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: "#fdd835",
    },
    secondary: {
      main: "#af6200",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function SnakeHealthButtons() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={buttonTheme}>
      <div className={classes.root}>
        <ButtonGroup
          orientation="vertical"
          color="primary"
          aria-label="vertical contained primary button group"
          variant="contained"
          size="Large"
        >
          <Button>Shed Imminent</Button>
          <Button>Shed Complete</Button>
          <Button>Fecal Found</Button>
          <Button>Urate Found</Button>
          <Button>Rat Offered</Button>
          <Button>Rat Ate</Button>
          <Button>Rat Ignored</Button>
        </ButtonGroup>
      </div>
    </ThemeProvider>
  );
}

export default withTheme(SnakeHealthButtons);
